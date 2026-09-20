# Mission 15 — Synthetic Manual Fulfillment Dry Run

**Date:** 20 September 2026  
**Purpose:** internal delivery-readiness QA only; not a market experiment, paid run, or customer delivery.

## Fixture used

- `mission-08/sample/BEFORE-machine-generated.srt`
- `mission-08/sample/AFTER-human-checked.srt`
- `mission-08/sample/ambiguity-log.csv`
- `mission-08/sample/qa-checklist.md`

All inputs and outputs are **SYNTHETIC**. The fixture contains SRT text but no source audio or video.

## Simulated buyer handoff

The dry run used these **SYNTHETIC** intake values:

| Field | Simulated value |
|---|---|
| Source length | 00:00:15.500, inferred from the final cue; no media supplied |
| Existing SRT | `mission-08/sample/BEFORE-machine-generated.srt` |
| Speaker convention | Uppercase bracketed labels: `[OFFICER]`, `[DISPATCH]`, `[SUBJECT]` |
| Censorship instruction | Replace the fixture's `[profanity]` token with `[BLEEP]` |
| Known terms | `Carl`; `red sedan` |

Before accepting a real order, PREY must confirm: the request is correction rather than transcription/translation/certification/burn-in; total source duration is at most 20 minutes; the buyer may supply the material; both source media and the existing English machine SRT are accessible; the desired speaker-label and censorship conventions; supplied names/terms; fixed US$20 price; realistic turnaround; legitimate payment method; delivery channel; and privacy/retention expectations.

## Steps tested

- Intake fields were walked against the first-buyer runbook and explicitly marked synthetic.
- The source SRT was readable as five complete blocks.
- The corrected SRT had sequential cue numbers 1–5, valid `HH:MM:SS,mmm --> HH:MM:SS,mmm` timestamps, end times after start times, chronological cues, and no overlap.
- The source overlap between cues 1 and 2 was removed in the corrected file.
- The fixture represented wording corrections (`were`/`sea`, `mail`/`read`), contractions, capitalization, apostrophes, and sentence punctuation.
- Uppercase bracketed speaker labels were applied consistently where the synthetic fixture declares them supported.
- `[guessed surname]` was replaced with `[inaudible]` rather than an invented surname.
- The CSV ambiguity log covered every represented material correction and included a timestamp and reason.
- The delivery package was checked for a corrected SRT, ambiguity log, and short delivery note.

## Not realistically testable

- No audio/video exists, so wording, speaker identity, names, uncertainty, censorship context, and cue timing cannot be verified against an audible source.
- Listen-and-correct effort, replay burden, difficult-audio handling, and a defensible 20-minute-video labor estimate cannot be measured.
- Buyer clarification, rights confirmation, payment, private file transfer, delivery-channel behavior, and buyer acceptance cannot be exercised with a repository fixture.
- Parser/player compatibility was not independently tested; the SRT received a manual structural review only.

## Timing

| Stage | Actual defensible measurement |
|---|---|
| Intake/setup | Unavailable — timing was not instrumented at the start of the session |
| SRT review/correction | Unavailable — corrected text already existed and no source media exists |
| Ambiguity handling | Unavailable — the ambiguity log already existed and cannot be checked against audio |
| QA | Unavailable — timing was not isolated from repository inspection and reporting |
| Packaging | Measured together with report/core-record updates, not separable into a defensible active-time figure |

No synthetic timing is extrapolated to a 20-minute real delivery.

## Observed friction

1. The fixture has no source media, blocking the central audible comparison.
2. Intake instructions are embedded in fixture outputs rather than supplied as a separate buyer handoff, so instruction provenance must be simulated.
3. The source SRT contains a 200 ms cue overlap, requiring manual timestamp attention.
4. The existing ambiguity log records correction rationale, but without audio its claims cannot be independently verified.

## Hypothetical real-buyer risk

- A buyer may omit or contradict speaker, censorship, name, or term instructions.
- Noisy or overlapping speech may create substantially more replay and ambiguity work than this five-cue fixture.
- Large/private source transfer, access expiry, retention expectations, or delivery-channel limits may add friction.
- A malformed SRT may require more timestamp repair than the single overlap represented here.
- Revision expectations may exceed the bounded correction scope unless confirmed before payment.

## QA result

**PARTIAL PASS.** The corrected SRT passes manual structural QA and the package is complete. Semantic and audible-source QA is **NOT TESTED** because the fixture has no media. No missing evidence was fabricated.

## Delivery package

- Corrected SRT: `mission-08/sample/AFTER-human-checked.srt` (reused)
- Ambiguity log: `mission-08/sample/ambiguity-log.csv` (reused)
- Delivery note: `mission-15/DELIVERY_NOTE.md` (created)

## Classifications

**Price/scope sanity:** **POTENTIAL PRICE/SCOPE RISK — NEEDS REAL DELIVERY DATA**

The dry run exposes no clear operational contradiction, but it does not measure the dominant audio-review labor and therefore cannot support a profitability claim.

**Delivery readiness:** **READY WITH MINOR MANUAL LIMITATIONS**

The intake checklist, corrected-output shape, uncertainty rule, ambiguity log, structural QA, and delivery note are ready for a supervised first manual buyer. The first real order must supply source media and will establish the missing audio-review, transfer, timing, and clarification evidence.

## Commercial isolation

Experiment #001 remains **READY — NOT LAUNCHED**. Experiment #002 remains **LIVE — UNCHANGED**. This internal synthetic QA creates no customer, paid run, revenue, market experiment, human signal, buying intent, agent, app, dashboard, automation, or software product.
