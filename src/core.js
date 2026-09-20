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
    CREATE TABLE IF NOT EXISTS jobs(id TEXT PRIMARY KEY,agent_id TEXT,type TEXT,state TEXT,input TEXT,result TEXT,created_at TEXT);`);
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
  if (job.type === 'candidate_review') result={candidateId:job.input.candidateId, finding:'Historical evidence replayed; no external research performed.', recommendation:'SEND_TO_JUDGE', evidence:'GRAVEYARD.md row 26'};
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
function summary(db) { return { candidates:29, examinationRecords:33, liveExperiments:db.prepare('SELECT count(*) n FROM experiments WHERE market_live=1').get().n, marketKills:0, executionBlocks:db.prepare('SELECT count(*) n FROM execution_blocks').get().n, customers:0, paidRuns:0, revenueCents:0, executableRoles:db.prepare('SELECT count(*) n FROM agents').get().n, autonomousWorkers:0, agentsAlive:db.prepare("SELECT count(*) n FROM agents WHERE state NOT IN ('KILLED','BLOCKED')").get().n, agentsKilled:0, deskKills:27, reserves:1, reopened:2, experimentsPrepared:2, events:db.prepare('SELECT count(*) n FROM events').get().n }; }
module.exports={open,event,runJob,dispatch,replay,summary,AGENTS,STATES};
