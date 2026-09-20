# Experiment Signal Ledger

This is a timestamped observation ledger, not a dashboard. Record only signals that are directly visible or otherwise evidenced. Keep observation separate from interpretation, and do not treat generic Reddit views as qualified views.

## Signal taxonomy

- **Noise:** generic upvotes/downvotes, irrelevant comments, spam, or non-buyer engagement.
- **Interest:** a relevant person asks a meaningful question about the service.
- **Buying intent:** a relevant person asks about ordering, sending an SRT, turnaround, payment, or starting the job.
- **Qualified inquiry:** an interest or buying-intent message from someone whose stated need plausibly fits the defined buyer, input, and scope.
- **Paid inquiry:** a qualified buyer reaches the payment-agreement step. A question about price alone is not a paid inquiry.
- **Paid run:** actual payment or a confirmed paid order under the experiment.
- **Primary success:** at least one paid manual run.

## Observation protocol

Check the live post and directly related Reddit inbox/chat no more than once daily, plus when Reddit presents a relevant inbound notification. Do not interact merely to create a signal. Record unavailable metrics as unavailable, not zero. Record Reddit's generic post-view count as **platform views**, not qualified views, unless evidence establishes that the viewers match the experiment's intended buyer.

## Observations

| Experiment ID | Observation time | Surface | Post status | Platform views | Qualified views | Upvotes | Comments | Qualified inquiries | Buying intent | Paid inquiries | Paid runs | Revenue | Observation / evidence | Interpretation |
|---|---|---|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| #002 | 2026-09-20 01:42:50 +02:00 | Reddit — r/CreatorServices | LIVE; public post and Post Insights accessible | 58 | Unavailable — Reddit exposes generic views only | 1 (100% ratio) | 0 | 0 | 0 | 0 | 0 | US$0 | Reddit Post Insights showed 58 views, 1 upvote, 100% upvote ratio, 0 comments, 0 shares, and 0 awards. The legacy inbox said there was nothing there; Reddit Chat showed no conversations. No demo-engagement metric was exposed. | Early exposure with no observed buyer signal. The generic views do not establish 58 qualified views, and this observation does not validate or reject demand. |

## Decision checkpoints

Evaluate Experiment #002 on **26 September 2026**, or earlier only if a meaningful and defensible qualified-view metric reaches 100.

At that checkpoint, `EXPERIMENT_DECISION_PROTOCOL.md` is controlling. Map the frozen observation record to exactly one of its six precommitted states and execute only that state's allowed next move. Do not reinterpret generic views as qualified exposure or lower commercial success below one paid manual run.

- **At least one paid run:** commercial signal achieved.
- **Buying-intent conversations but no paid run:** inspect price, scope, trust, and payment friction before deciding the next test.
- **Meaningful exposure but no qualified interest:** the offer, segment, or distribution signal is weak.
- **Insufficient measurable exposure:** do not call the offer rejected; the distribution test remains inconclusive.

Do not pre-decide the outcome. Reddit's current generic view count does not satisfy the 100-qualified-view checkpoint.

## Future agent-spawn gate

Do not create a monitoring agent now. Consider one only after PREY has multiple simultaneous live experiments or repeated signal checking becomes a demonstrated recurring operational burden. Current verified autonomous agents: **0**.
