# PREY

## Run PREY Core + Arena

Prerequisite: Node.js 22.5 or later (the Core uses Node's built-in SQLite; no package install or paid service is required).

```powershell
npm test
npm run replay
npm start
```

Open [http://localhost:3000](http://localhost:3000). `data/prey.sqlite` is created locally and preserves structured state and internal events. PREY Core is a small Node HTTP server plus SQLite store: P-00 dispatches bounded jobs to registered deterministic role handlers, collects structured results, and records events; J-01 makes deterministic evidence-bound judgments. The Arena reads persisted state.

The seven roles are executable, dispatchable local implementations, not autonomous external AI workers: they do not browse, use a model/API, act in the background, or make market interventions. `npm run replay` is an explicitly internal historical replay and creates no market signal, customer, paid run, or revenue.

PREY is a zero-additional-budget experiment for finding and validating tiny business opportunities before building software.

Its canonical PREY V2 operating loop is:

**OBSERVE → FORM BET → CHEAP EXPOSURE → HUMAN SIGNAL → MONEY TEST → BUILD / KILL**

The project deliberately separates research from proof. Complaints, competitor pricing, and public discussions can justify a test, but they do not count as customer demand, payment, or revenue. PREY builds reusable software only after market evidence warrants it.

## Current scoreboard

| Measure | Current value |
|---|---:|
| Missions completed | 01–16 (including 06.5) |
| Setup/control mission | 00 |
| Executable registered local roles | 7 |
| Autonomous external workers | 0 |
| Apps built | 1 internal |
| Customer-facing apps built | 0 |
| Dashboards built | 1 internal |
| Software products built | 0 |
| Market experiments prepared | 2 |
| Market experiments live | 1 |
| Paid customers | 0 |
| Revenue | $0 |
| Additional cash spent | $0 |
| Market-ready experiment kits | 2 |

## Mission timeline

- **00 — Control Layer:** established the project controls and zero-additional-budget constraint.
- **01 — Hunger Hunt:** examined an initial set of tiny business opportunities.
- **02 — Patreon Blood Test:** **KILLED** after adversarial incumbent review.
- **03 — Dark Forest:** returned **0 survivors**.
- **04 — Follow the Money:** returned **0 survivors**.
- **05 — Autopsy:** diagnosed PREY v1 as over-researching and rejecting untested service and segment opportunities too early.
- **06 — First Blood:** prepared a Square manual market-test kit. It is ready but has not been launched.
- **07 — Square launch attempt:** browser execution infrastructure blocked publication; the market did not reject the offer.
- **08 — Second Chamber:** revalidated bodycam SRT correction and prepared a narrow manual test. It is ready but has not been launched.
- **09 — Upwork launch attempt:** Project Catalog returned HTTP 403 after account/platform access was revoked. No listing launched; this was a distribution block, not market rejection.
- **10 — First live market exposure:** r/CreatorServices provided a compliant zero-upfront-cost surface, and Sawsen manually published Experiment #002. It is PREY's first verified live experiment.
- **11 — Watch the Trap:** recorded the live baseline, defined a signal taxonomy and decision checkpoints, and prepared an unsent inbound-response playbook without changing the offer.
- **12 — The Graveyard:** consolidated 29 deduplicated candidates into a factual graveyard and mapped PREY-specific failure patterns without changing the live experiment.
- **13 — Rewrite the Rules:** formalized PREY V2, its research/distribution/build/agent gates, evidence labels, scoreboard, and reusable mission template while Experiment #002 continued unchanged.
- **14 — Load the Chamber:** precommitted Experiment #002's six checkpoint outcomes, allowed next moves, exposure standard, and first-buyer manual runbook without changing the live test.

The autopsy reopened two candidates for bounded market tests: Square consignor payout packs and YouTube/bodycam SRT correction. Both have manual test kits. Experiment #001 remains READY — NOT LAUNCHED; Experiment #002 is LIVE. Exposure authorizes observation and a manual money test, not a software build.

## Current experiment

Experiment #001 offers one manually checked Square Consignor Payout Pack for **US$25**, covering up to 10 consignors and 100 transaction lines. Its demo data is synthetic and clearly labeled. The offer remains **READY — NOT LAUNCHED** pending verification that the intended community permits the post.

Experiment #002 offers manual correction of an existing machine-generated English SRT for up to 20 minutes of noisy police-bodycam/interrogation footage for **US$20**, returning a corrected valid SRT and timestamped ambiguity log. Its sample is synthetic and clearly labeled. The offer is **LIVE** on [Reddit — r/CreatorServices](https://www.reddit.com/r/CreatorServices/comments/1wkztah/for_hire_manual_bodycaminterrogation_srt/). Customers remain 0, paid runs remain 0, and revenue remains US$0; live exposure is not market validation or proof of demand.

No customer outcome, market response, or revenue is claimed. See `EXPERIMENT_LEDGER.md` for the approved measurement rules and `MISSION_LEDGER.md` for the factual project history.

## Project records

- `STATE.md` — current strategic state and next boundary.
- `MISSION_LEDGER.md` — verified mission history.
- `AGENT_REGISTRY.md` — actual autonomous agents, kept separate from mission roles and story language.
- `BUILD_LEDGER.md` — infrastructure, fixtures, demos, and product counts.
- `EXPERIMENT_LEDGER.md` — market experiments and observed signals.
- `STORY_LOG.md` — factual events suitable for later storytelling.
- `GRAVEYARD.md` — deduplicated candidate registry, taxonomy, counting method, and future-hunt guardrails.
- `PATTERN_MAP.md` — recurring PREY failure patterns and the v1-to-v2 methodological transition.
- `PREY_PROTOCOL_V2.md` — canonical operating loop, gates, evidence labels, decision rules, and scoreboard specification.
- `MISSION_TEMPLATE.md` — compact required structure for future missions.
- `EXPERIMENT_DECISION_PROTOCOL.md` — precommitted Experiment #002 checkpoint states, evidence requirements, and allowed next moves.
- `evidence/` — mission evidence and decisions.
- `mission-06/` — the unlaunched Square experiment kit and synthetic demo.
- `mission-14/` — the manual first-buyer operational and delivery-QA runbook.

## Operating boundaries

PREY does not count research roles, review processes, or dramatic mission names as autonomous agents. It does not count synthetic fixtures, scripts, spreadsheets, or launch copy as customer-facing software products. Views, inquiries, customers, payments, and revenue are recorded only after they are observed.
