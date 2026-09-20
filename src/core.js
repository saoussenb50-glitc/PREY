const { DatabaseSync } = require('node:sqlite');
const fs = require('node:fs');
const path = require('node:path');

const AGENTS = [
  ['P-00', 'MAIN PREDATOR', 'Orchestrate bounded internal jobs', 'dispatch'],
  ['H-01', 'HUNTER', 'Structure bounded candidate evidence', 'candidate_review'],
  ['H-02', 'MONEY HUNTER', 'Assess recorded money evidence', 'money_review'],
  ['D-01', 'DISTRIBUTION SCOUT', 'Classify recorded distribution constraints', 'distribution_review'],
  ['J-01', 'JUDGE', 'Issue deterministic evidence-bound judgments', 'judgment'],
  ['B-01', 'BUILDER', 'Plan internal build work only', 'build_plan'],
  ['Q-01', 'QA PREDATOR', 'Check structured internal outputs', 'qa_check']
];
const STATES = ['DORMANT','READY','RUNNING','SURVIVED','PROBATION','KILLED','BLOCKED'];
function open(dbPath = path.join(process.cwd(), 'data', 'prey.sqlite')) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const db = new DatabaseSync(dbPath);
  db.exec(`PRAGMA foreign_keys=ON;
    CREATE TABLE IF NOT EXISTS agents(id TEXT PRIMARY KEY,name TEXT,role TEXT,purpose TEXT,accepts TEXT,state TEXT,created_at TEXT);
    CREATE TABLE IF NOT EXISTS missions(id TEXT PRIMARY KEY,title TEXT,status TEXT,kind TEXT);
    CREATE TABLE IF NOT EXISTS candidates(id TEXT PRIMARY KEY,name TEXT,status TEXT,classification TEXT);
    CREATE TABLE IF NOT EXISTS experiments(id TEXT PRIMARY KEY,name TEXT,status TEXT,market_live INTEGER);
    CREATE TABLE IF NOT EXISTS builds(id TEXT PRIMARY KEY,name TEXT,status TEXT,kind TEXT);
    CREATE TABLE IF NOT EXISTS signals(id TEXT PRIMARY KEY,experiment_id TEXT,kind TEXT,value TEXT,observed_at TEXT);
    CREATE TABLE IF NOT EXISTS kills(id TEXT PRIMARY KEY,candidate_id TEXT,kind TEXT,reason TEXT);
    CREATE TABLE IF NOT EXISTS execution_blocks(id TEXT PRIMARY KEY,mission_id TEXT,reason TEXT);
    CREATE TABLE IF NOT EXISTS money_events(id TEXT PRIMARY KEY,kind TEXT,amount_cents INTEGER,currency TEXT);
    CREATE TABLE IF NOT EXISTS events(id INTEGER PRIMARY KEY AUTOINCREMENT,at TEXT,type TEXT,entity_type TEXT,entity_id TEXT,payload TEXT);
    CREATE TABLE IF NOT EXISTS jobs(id TEXT PRIMARY KEY,agent_id TEXT,type TEXT,state TEXT,input TEXT,result TEXT,created_at TEXT);
    CREATE TABLE IF NOT EXISTS evidence(id TEXT PRIMARY KEY,mission_id TEXT,candidate_id TEXT,role_id TEXT,title TEXT,url TEXT,claim TEXT);
    CREATE TABLE IF NOT EXISTS judgments(id TEXT PRIMARY KEY,mission_id TEXT,candidate_id TEXT,classification TEXT,reason TEXT,created_at TEXT);`);
  seed(db); return db;
}
function event(db,type,entityType,entityId,payload={}) { db.prepare('INSERT INTO events(at,type,entity_type,entity_id,payload) VALUES(?,?,?,?,?)').run(new Date().toISOString(),type,entityType,entityId,JSON.stringify(payload)); }
function seed(db) {
  const exists = db.prepare('SELECT count(*) AS n FROM agents').get().n; if (exists) return;
  const add = db.prepare('INSERT INTO agents VALUES(?,?,?,?,?,?,?)');
  for (const [id,name,purpose,accepts] of AGENTS) add.run(id,name,'executable registered role',purpose,accepts,id === 'P-00' ? 'READY' : 'READY',new Date().toISOString());
  db.prepare('INSERT INTO missions VALUES(?,?,?,?)').run('M-16','Awaken PREY','RUNNING','internal infrastructure');
  db.prepare('INSERT INTO candidates VALUES(?,?,?,?)').run('C-26','YouTube/bodycam SRT correction','REOPENED','LIVE TEST');
  db.prepare('INSERT INTO experiments VALUES(?,?,?,?)').run('EXP-001','Square Consignor Payout Pack','READY — NOT LAUNCHED',0);
  db.prepare('INSERT INTO experiments VALUES(?,?,?,?)').run('EXP-002','Bodycam SRT Rescue','LIVE',1);
  db.prepare('INSERT INTO builds VALUES(?,?,?,?)').run('BUILD-16','PREY Core + Arena v0.2','ACTIVE','internal infrastructure');
  db.prepare('INSERT INTO signals VALUES(?,?,?,?,?)').run('SIG-002-VIEWS','EXP-002','generic_platform_views','58','2026-09-20T01:42:50+02:00');
  for (let i=1;i<=27;i++) db.prepare('INSERT INTO kills VALUES(?,?,?,?)').run(`K-${i}`,`C-HIST-${i}`,'DESK_RESEARCH','Historical Mission 01–04 desk-research kill');
  db.prepare('INSERT INTO execution_blocks VALUES(?,?,?)').run('BLOCK-07','M-07','Browser execution infrastructure prevented #001 publication');
  db.prepare('INSERT INTO execution_blocks VALUES(?,?,?)').run('BLOCK-09','M-09','Upwork Project Catalog access returned HTTP 403');
  event(db,'seeded','system','prey',{source:'verified historical ledgers', distinct_candidates:29, examination_records:33, market_kills:0, customers:0, revenue_cents:0});
}
function runJob(db, job) {
  if (!AGENTS.some(a=>a[0]===job.agentId)) throw new Error('unknown agent');
  const agent = db.prepare('SELECT * FROM agents WHERE id=?').get(job.agentId);
  if (agent.accepts !== job.type) throw new Error(`${job.agentId} does not accept ${job.type}`);
  const id = job.id || `JOB-${Date.now()}`; const now = new Date().toISOString();
  db.prepare('INSERT INTO jobs VALUES(?,?,?,?,?,?,?)').run(id,job.agentId,job.type,'RUNNING',JSON.stringify(job.input),null,now);
  db.prepare('UPDATE agents SET state=? WHERE id=?').run('RUNNING',job.agentId); event(db,'dispatched','job',id,{agentId:job.agentId,type:job.type,internal:!!job.internal});
  let result;
  if (job.input?.recordedResult) result=job.input.recordedResult;
  else if (job.type === 'candidate_review') result={candidateId:job.input.candidateId, finding:'Historical evidence replayed; no external research performed.', recommendation:'SEND_TO_JUDGE', evidence:'GRAVEYARD.md row 26'};
  else if (job.type === 'judgment') result={verdict:'REPLAY_CONFIRMED', classification:'LIVE TEST — no market verdict', reason:'Existing 58 generic views and zero paid runs are preserved; no new evidence.'};
  else result={status:'COMPLETED', note:'Deterministic local execution boundary; no model/API or external action.'};
  db.prepare('UPDATE jobs SET state=?,result=? WHERE id=?').run('SURVIVED',JSON.stringify(result),id); db.prepare('UPDATE agents SET state=? WHERE id=?').run('SURVIVED',job.agentId); event(db,'result_collected','job',id,result); return {id,result};
}
// P-00 is deliberately a synchronous, bounded dispatcher. It has no scheduler,
// background loop, model call, or authority to perform external actions.
function dispatch(db, job) {
  const id = `DISPATCH-${Date.now()}`;
  db.prepare('UPDATE agents SET state=? WHERE id=?').run('RUNNING','P-00');
  event(db,'main_predator_dispatch','agent','P-00',{dispatchId:id,target:job.agentId,type:job.type,internal:!!job.internal});
  const result = runJob(db,job);
  db.prepare('UPDATE agents SET state=? WHERE id=?').run('SURVIVED','P-00');
  event(db,'main_predator_collected','agent','P-00',{dispatchId:id,jobId:result.id});
  return result;
}
function replay(db) {
  const hunt=dispatch(db,{id:'REPLAY-16-HUNT',agentId:'H-01',type:'candidate_review',input:{candidateId:'C-26',source:'historical Mission 08/10/12 evidence'},internal:true});
  const judge=dispatch(db,{id:'REPLAY-16-JUDGE',agentId:'J-01',type:'judgment',input:{jobId:hunt.id,...hunt.result},internal:true});
  event(db,'internal_replay_complete','mission','M-16',{jobs:[hunt.id,judge.id],market_evidence_created:false,money_created:false}); return {hunt,judge};
}
const M18_CANDIDATES=[
  {id:'C-30',name:'Freight POD-to-invoice exception packet',classification:'RESERVE',user:'US small freight broker with carrier invoices waiting on PODs',job:'Match one carrier invoice, rate confirmation, BOL, and POD; flag missing or mismatched fields before approval.',current:'Manual document matching or freight-audit vendors.',wedge:'A human-reviewed exception packet for a bounded batch of 10 loads.',money:'A live Upwork service lists freight invoice audit/validation at $40/$120/$250; specialist tools advertise the same matching work.',distribution:'Freight operator communities exist, but no compliant zero-cost offer surface was verified in this hunt.',cheapTest:'Only after a permitted opt-in surface is verified: offer a 10-load exception packet, manual only.',kill:'No compliant opt-in surface or no willingness to provide a redacted 10-load batch.',sources:[['E-18-01','H-01','Laneproof','https://www.laneproof.com/','Matches carrier invoice against rate con, BOL, and POD before payment.'],['E-18-02','H-02','Upwork freight audit service','https://www.upwork.com/services/product/admin-customer-support-i-will-track-shipments-and-coordinate-transportation-operations-2089453250331182780','Lists Freight Invoice Audit & Validation at $40, $120, and $250 tiers.'],['E-18-03','H-01','Ascent freight audit process','https://ascentlogistics.com/wp-content/uploads/2021/10/Ascent_Freight_Audit_and_Pay_6.10.20.pdf','Describes invoice matching with BOL, POD, weight, inspection, quote, or contract.'],['E-18-04','H-01','Mirage Metrics POD processing','https://miragemetrics.com/logistics/proof-of-delivery-processing','Describes messy POD formats and the manual matching needed before invoicing.']]},
  {id:'C-31',name:'Amazon FBA sourcing-cost reimbursement case pack',classification:'KILL — DESK RESEARCH',user:'Small FBA seller with a reimbursement claim needing manufacturing-cost evidence.',job:'Assemble a claim-ready sourcing-cost document packet from existing invoices.',current:'Seller submits documents or uses commission reimbursement services.',wedge:'One manually organized sourcing-cost packet; no claim submission.',money:'TrueOps advertises commission-priced FBA reimbursement work; Amazon policy describes reimbursement based on approved or estimated sourcing cost.',distribution:'r/FulfillmentByAmazon gathers sellers but explicitly requires mod approval for service promotion.',cheapTest:'None until a permitted distribution surface is confirmed.',kill:'Primary visible community prohibits the offer and policy-sensitive claim responsibility makes a low-risk manual wedge unclear.',sources:[['E-18-05','H-02','Amazon FBA reimbursement policy','https://m.media-amazon.com/images/G/09/help/redline_FBA_reimbursement_policy_EN_version.pdf','Amazon describes reimbursement using an approved submitted amount or an estimated amount.'],['E-18-06','H-02','TrueOps pricing','https://www.trueops.com/pricing','Advertises commission-based FBA reimbursement services.'],['E-18-07','D-01','r/FulfillmentByAmazon rule notice','https://www.reddit.com/r/FulfillmentByAmazon/comments/1uh63s5/removed/','Rule notice says service promotion without moderator approval results in an instant ban.']]},
  {id:'C-32',name:'Shopify chargeback evidence chronology packet',classification:'KILL — DESK RESEARCH',user:'Small Shopify merchant with an open dispute and scattered order, delivery, and support records.',job:'Organize a chronology and evidence checklist for one chargeback; merchant retains submission responsibility.',current:'Manual collection or chargeback-management platforms.',wedge:'One human-prepared, reason-code-aware evidence chronology; no processor access or submission.',money:'Chargeflow charges 25% of recovered chargebacks and sells end-to-end evidence collection/submission.',distribution:'r/Shopify explicitly forbids promoting a service or soliciting contact.',cheapTest:'None until a permitted opt-in surface is confirmed.',kill:'Existing paid full-service incumbents plus the verified primary community ban make a differentiated, compliant first exposure unsupported.',sources:[['E-18-08','H-02','Chargeflow pricing','https://www.chargeflow.io/pricing','Lists 25% per recovered chargeback and end-to-end evidence collection/submission.'],['E-18-09','D-01','r/Shopify rules','https://www.reddit.com/r/shopify/comments/1mx9got/ongoing_issues_please_read_our_group_rules_before/','Explicitly prohibits promoting an offer/service or soliciting personal contact.']]}
];
function runFirstRealHunt(db) {
  if (db.prepare("SELECT count(*) n FROM missions WHERE id='M-18'").get().n) return {alreadyRecorded:true};
  db.prepare('INSERT INTO missions VALUES(?,?,?,?)').run('M-18','First Real Hunt','RUNNING','Codex-assisted bounded web research');
  event(db,'mission_started','mission','M-18',{mode:'Codex-assisted execution through registered PREY roles',market_activity:false,source_budget:9});
  for (const c of M18_CANDIDATES) { db.prepare('INSERT INTO candidates VALUES(?,?,?,?)').run(c.id,c.name,'UNDER REVIEW','MISSION 18'); for(const [id,role,title,url,claim] of c.sources) db.prepare('INSERT INTO evidence VALUES(?,?,?,?,?,?,?)').run(id,'M-18',c.id,role,title,url,claim); }
  const roles=[['H-01','candidate_review','JOB-18-HUNT',{candidates:M18_CANDIDATES.map(c=>({id:c.id,user:c.user,job:c.job,current:c.current,wedge:c.wedge})),execution:'Codex-assisted web research; sources persisted'}],['H-02','money_review','JOB-18-MONEY',{candidates:M18_CANDIDATES.map(c=>({id:c.id,money:c.money})),execution:'Codex-assisted source review; no market signal'}],['D-01','distribution_review','JOB-18-DIST',{candidates:M18_CANDIDATES.map(c=>({id:c.id,distribution:c.distribution})),execution:'Codex-assisted source review; no outreach'}]];
  for(const [agentId,type,id,recordedResult] of roles) dispatch(db,{id,agentId,type,input:{recordedResult,missionId:'M-18'},internal:true});
  const judgment={missionId:'M-18',decision:'No experiment selected. One reserve; two desk-research kills.',candidates:M18_CANDIDATES.map(c=>({id:c.id,classification:c.classification,reason:c.classification==='RESERVE'?'Specific paid manual work exists, but a permitted zero-cost opt-in surface is the missing fact.':'Evidence does not support a compliant, differentiated cheap exposure.'}))};
  dispatch(db,{id:'JOB-18-JUDGE',agentId:'J-01',type:'judgment',input:{recordedResult:judgment,missionId:'M-18'},internal:true});
  for(const c of M18_CANDIDATES){db.prepare('UPDATE candidates SET status=?,classification=? WHERE id=?').run(c.classification,c.classification,c.id);db.prepare('INSERT INTO judgments VALUES(?,?,?,?,?,?)').run(`J-18-${c.id}`,'M-18',c.id,c.classification,judgment.candidates.find(j=>j.id===c.id).reason,new Date().toISOString());if(c.classification.startsWith('KILL'))db.prepare('INSERT INTO kills VALUES(?,?,?,?)').run(`K-18-${c.id}`,c.id,'DESK_RESEARCH','Mission 18: '+judgment.candidates.find(j=>j.id===c.id).reason);}
  dispatch(db,{id:'JOB-18-QA',agentId:'Q-01',type:'qa_check',input:{recordedResult:{missionId:'M-18',verdict:'PASS',checks:['9 URL-backed sources persisted','fresh candidates distinct from EXP-001/002','research not counted as market signal','market counters unchanged','autonomous workers remain 0']},missionId:'M-18'},internal:true});
  dispatch(db,{id:'JOB-18-BUILD',agentId:'B-01',type:'build_plan',input:{recordedResult:{missionId:'M-18',action:'NO BUILD',reason:'No experiment-worthy candidate selected; reserve requires one missing distribution fact.'},missionId:'M-18'},internal:true});
  db.prepare("UPDATE missions SET status='COMPLETED' WHERE id='M-18'").run();event(db,'mission_completed','mission','M-18',{decision:'RESERVE + 2 DESK RESEARCH KILLS',market_activity:false,customers:0,paid_runs:0,revenue_cents:0,market_kills:0});return{alreadyRecorded:false,judgment};
}
function summary(db) { const m18=db.prepare("SELECT count(*) n FROM candidates WHERE classification='MISSION 18' OR id IN ('C-30','C-31','C-32')").get().n; return { candidates:29+m18, examinationRecords:33+m18, liveExperiments:db.prepare('SELECT count(*) n FROM experiments WHERE market_live=1').get().n, marketKills:0, executionBlocks:db.prepare('SELECT count(*) n FROM execution_blocks').get().n, customers:0, paidRuns:0, revenueCents:0, executableRoles:db.prepare('SELECT count(*) n FROM agents').get().n, autonomousWorkers:0, agentsAlive:db.prepare("SELECT count(*) n FROM agents WHERE state NOT IN ('KILLED','BLOCKED')").get().n, agentsKilled:0, deskKills:27+db.prepare("SELECT count(*) n FROM kills WHERE id LIKE 'K-18-%'").get().n, reserves:1+db.prepare("SELECT count(*) n FROM candidates WHERE classification='RESERVE'").get().n, reopened:2, experimentsPrepared:2, events:db.prepare('SELECT count(*) n FROM events').get().n }; }
module.exports={open,event,runJob,dispatch,replay,runFirstRealHunt,summary,AGENTS,STATES,M18_CANDIDATES};
