# PREY — Mission 03: Dark Forest

Research date: 19 September 2026  
Outcome: **COMPLETE — zero true survivors.**

This was an opportunity hunt, not a build exercise. Patreon was excluded because Mission 02 killed it. Square remained reserve and BenchApp remained killed as a primary business; neither was allowed back into the candidate pool.

## Verdict

The hunt found real pain, but not a candidate that passed all of PREY's gates at once. Every promising trace failed the adversarial incumbent test, monetization test, or both. The correct result is therefore **0 survivors**, rather than filling three slots with weak ideas.

No product was built, no outreach was performed, and no paid service or API was used.

## Search method

The search began with current pain traces in GitHub issues/discussions, Reddit threads, official product documentation, and public freelance listings. It emphasized import/export breakage, CSV/PDF handoffs, abandoned or incomplete utilities, platform transitions, and narrow features trapped inside larger subscriptions.

For each serious trace, the attack included variants of:

- `[problem] tool`
- `[problem] free`
- `[problem] open source`
- `[problem] GitHub`
- `[problem] alternative`
- `[problem] automation`

Current official functionality was then checked before assigning any gap. A candidate could not survive on complaints alone: it also needed evidence of payment for the exact job, a concrete place where the first 20 users are gathered now, a tiny zero-dollar MVP, and no adequate cheap/free incumbent.

## Survivor count

**TRUE SURVIVORS: 0**

There are consequently no survivor profiles to present under the requested fields. Inventing `MICRO-MICRO-NICHE`, `48-HOUR TEST`, or monetization claims for a dead candidate would disguise the failed gates. The scored near-misses below show exactly where each one failed.

## Scored near-misses

Scores are 0–5 and deliberately uninflated. `Total` is out of 40.

| Candidate | Pain | Frequency | Evidence | Reachability | Monetization | Competition gap | MVP speed | First-user speed | Total | Fatal gate |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Payload CMS CSV import preflight/mapping helper | 3 | 3 | 4 | 4 | 1 | 0 | 3 | 3 | 21 | Native official importer now exists |
| Pixieset favorites-to-Lightroom selector | 3 | 4 | 4 | 5 | 3 | 0 | 5 | 5 | Native copy-list workflow is adequate |
| OpenRefine malformed-quote CSV rescue | 4 | 2 | 3 | 3 | 1 | 0 | 5 | Fixed upstream; documented free workaround |
| Uwazi export-column picker | 2 | 3 | 3 | 3 | 1 | 1 | 5 | Low-priority convenience; Excel deletion works |
| GitHub Projects trustworthy CSV exporter | 4 | 3 | 3 | 5 | 2 | 1 | 3 | Official API/CLI is an adequate free route |
| Superset large Excel-export repair | 3 | 3 | 4 | 4 | 2 | 0 | 3 | Native settings and full export solve it |
| TeamSnap schedule-file normalizer | 3 | 2 | 4 | 5 | 2 | 0 | Native flexible CSV mapping/import exists |
| Mealie menu CSV exporter | 2 | 2 | 2 | 4 | 0 | 2 | One weak signal and no payment evidence |
| Cricut project backup/export extractor | 4 | 3 | 4 | 5 | 2 | 1 | Rights/format risk plus native cloud/offline sharing |
| Generic PDF-bank-statement reconciliation pack | 4 | 5 | 5 | 5 | 4 | 0 | Crowded and largely native/free at the narrow job |

## KILLED PREY

### 1. Payload CMS CSV import preflight/mapping helper

**Pain trace.** In July 2025, a user said Payload's `plugin-import-export` name was misleading because it exported but did not import; the described workaround was custom parsing, validation, API writes, and admin UI. Separate community threads asked for a working CSV importer and for environment-to-environment import/export. [GitHub issue #13259](https://github.com/payloadcms/payload/issues/13259), [working CSV import discussion](https://www.reddit.com/r/PayloadCMS/comments/1jouviv), [environment sync discussion](https://www.reddit.com/r/PayloadCMS/comments/1ibda2h).

**Attack and current functionality.** Payload's current official plugin imports CSV or JSON from the admin UI, supports create/update/upsert, match fields, preview, per-row issue details, field and collection hooks, direct or queued operation, and foreign-column remapping. That is not merely adjacent; it covers the proposed job. [Current official Import Export Plugin documentation](https://payloadcms.com/docs/plugins/import-export).

**Money and distribution.** Developers are visibly gathered in Payload GitHub issues, Discussions, Discord/community surfaces, and r/PayloadCMS, but no public evidence showed payment for a separate preflight tool after the native feature shipped.

**Exact kill reason.** **Adequate free native incumbent.** The 2025 pain was real but expired. Building against a stale issue would recreate current platform functionality.

### 2. Pixieset favorites-to-Lightroom selector

**Pain trace.** Photographers repeatedly describe copying client-selected filenames from gallery tools into Lightroom; a 2026 thread asked why Lightroom still could not search many filenames cleanly, while another user hit failures because Pixieset removed spaces from names. A competing gallery explicitly markets “no more copy-pasting.” [2026 Lightroom thread](https://www.reddit.com/r/Lightroom/comments/1vro2hd/lightroom_still_cant_search_multiple_filenames_at/), [filename mismatch thread](https://www.reddit.com/r/Lightroom/comments/1gwoodi), [Evlaa comparison](https://www.evlaa.com/en/alternatives/pixieset).

**Attack and current functionality.** Pixieset already exposes a **Lightroom Copy List** for every Favorite List. Lightroom Classic's Library Filter can accept the pasted list with `Filename > Contains Any`; Pixieset's own help teaches the workflow. [Pixieset: Viewing Client Favorites in Lightroom](https://help.pixieset.com/hc/en-us/articles/115003505192-Viewing-Client-Favorites-in-Lightroom), [Pixieset proofing documentation](https://help.pixieset.com/hc/en-us/articles/115003733131-How-does-proofing-with-Favorites-work).

**Money and distribution.** Professional photographers pay for Pixieset, Adobe, and competing proofing platforms, and the first 20 are easy to reach in r/Lightroom, r/WeddingPhotography, and Pixieset user groups. But the exact narrow job is already included; paid alternatives win by replacing the gallery, not by selling a tiny converter.

**Exact kill reason.** **Adequate zero-extra-cost incumbent workflow.** The remaining filename-normalization edge cases are support trivia, not a business.

### 3. OpenRefine malformed-quote CSV rescue

**Pain trace.** OpenRefine issue #7042 documented imports failing when a large file contained a lone quote; another user reproduced it on an 880,000-line file and reported a parser-overflow failure. [OpenRefine issue #7042](https://github.com/OpenRefine/OpenRefine/issues/7042).

**Attack and current functionality.** The same issue contains a free workaround: enable the enclosure setting and substitute a rare character such as a pilcrow. A fix branch/commit was merged in March 2026. [Issue and workaround](https://github.com/OpenRefine/OpenRefine/issues/7042), [fix build record](https://coveralls.io/github/OpenRefine/OpenRefine?branch=7042-csv-ignore-quote).

**Money and distribution.** OpenRefine users gather in its GitHub issue tracker and forum, but the product is open source and the pain is an intermittent import bug. No exact willingness-to-pay evidence appeared.

**Exact kill reason.** **Upstream fix plus free workaround; monetization unknown.** A rescue utility would be obsolete on arrival.

### 4. Uwazi export-column picker for human-rights documentation partners

**Pain trace.** In March 2026, Uwazi issue #8857 said partners wanted exports to contain only displayed/selected properties; the workaround was deleting unwanted columns in Excel. [Uwazi issue #8857](https://github.com/huridocs/uwazi/issues/8857).

**Attack and current functionality.** Uwazi already supports structured CSV import, and the missing export behavior is explicitly tagged low priority. Generic spreadsheet deletion, Power Query, and saved scripts adequately solve a small output-cleaning step. [Uwazi CSV import documentation](https://docs.uwazi.io/docs/how-to/working-with-content/csv-import/).

**Money and distribution.** The first users are concretely present among issue participants and HURIDOCS/Uwazi implementer communities, but only one public request was found and no budget or purchase evidence exists for selecting columns.

**Exact kill reason.** **Insufficient repeated pain and no exact monetization evidence.** The workaround is too cheap relative to the narrow inconvenience.

### 5. GitHub Projects trustworthy CSV exporter

**Pain trace.** A September 2025 organization user said a saved view intermittently exported only part of its record set, making reports impossible to trust. The proposed workarounds were repeated exports, smaller slices, or an API. [GitHub Community discussion #172055](https://github.com/orgs/community/discussions/172055).

**Attack and current functionality.** GitHub officially documents Projects automation through GraphQL, and the free GitHub CLI can call that API. A small script can return the authoritative item set without a new paid product. [GitHub Projects API documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects), [GitHub CLI API manual](https://cli.github.com/manual/gh_api).

**Money and distribution.** Users gather in GitHub Community and project-management practitioner communities, and businesses already pay GitHub subscriptions. But no evidence shows teams paying separately for this export rather than using the supported API or asking GitHub Support.

**Exact kill reason.** **Free official automation path and weak product-specific willingness to pay.** This is better as a snippet or internal script.

### 6. Apache Superset large Excel-export repair

**Pain trace.** A 2025 issue reported Excel exports stopping at 50,000 rows despite higher server limits; multiple users exchanged configuration attempts. [Superset issue #35139](https://github.com/apache/superset/issues/35139).

**Attack and current functionality.** Maintainers and users point to saved-chart row limits, `ALLOW_FULL_CSV_EXPORT`, `SQL_MAX_ROW`, and “Export to full Excel.” CSV export already handles the larger result. This is a configuration/support problem inside an actively maintained open-source BI platform.

**Money and distribution.** Superset operators gather in the project's GitHub issues and Slack, and companies pay consultants for deployments. No evidence isolated a recurring budget for a standalone export repair.

**Exact kill reason.** **Native configuration solves the job.** A wrapper would add another failure surface without a durable gap.

### 7. TeamSnap schedule-file normalizer for small clubs

**Pain trace.** Volunteer sports administrators commonly receive spreadsheets, calendars, or schedules from another system and need them inside the team app. TeamSnap itself frames CSV import as a way to avoid manual entry and copy/paste. [TeamSnap organization import guide](https://helpme-teams.teamsnap.com/article/2789-importing-organization-schedules).

**Attack and current functionality.** TeamSnap's current importer accepts a custom CSV, lets the administrator map fields in any order, and documents required date/time cleanup. Its Scheduler also imports games from CSV. [Import Games in Scheduler](https://helpme.teamsnap.com/article/731-import-games-in-scheduler), [Scheduling options](https://helpme.teamsnap.com/article/188-scheduling-for-organizations).

**Money and distribution.** League admins gather in TeamSnap help/community surfaces and sport-specific administrator groups, and clubs pay management subscriptions. But a normalizer cannot charge for “put columns in a CSV” when the paid platform already maps them.

**Exact kill reason.** **Native flexible import closes the gap.** The residual data cleanup is variable custom service work, not a repeatable tiny product.

### 8. Mealie planned-menu CSV exporter

**Pain trace.** A December 2025 feature request asked to export a date range of planned meals to CSV for household analysis in Excel or AI and said no native workaround was found. [Mealie discussion #6738](https://github.com/mealie-recipes/mealie/discussions/6738).

**Attack and current functionality.** Search found the request but not three independent current pain signals, paid substitutes, freelance budgets, or outsourcing. The exact user is a self-hosting household operator, a population strongly predisposed toward free scripts and upstream contributions.

**Money and distribution.** Users are concentrated in Mealie GitHub Discussions, Discord, and r/selfhosted, so reachability is good. Monetization for this exact export is **UNKNOWN**, and the output can be produced through the application's API or a small community script.

**Exact kill reason.** **Single-signal feature request with no payment evidence.** Concentration and build speed do not substitute for a market.

### 9. Cricut Design Space project backup/export extractor

**Pain trace.** Cricut users depend on cloud/offline project storage and recurrently report Design Space regressions and recreation work after updates. The April–June 2026 glitch megathread includes a user repeatedly recreating a project; the January–March thread shows deep manual troubleshooting. [April–June 2026 megathread](https://www.reddit.com/r/cricut/comments/1s9cot2/updates_and_glitches_megathread_apriljune_2026/), [January–March 2026 megathread](https://www.reddit.com/r/cricut/comments/1q1rmic/updates_and_glitches_megathread_januarymarch_2026/).

**Attack and current functionality.** Cricut supports cloud/offline saving and private/public project sharing, but deliberately restricts sharing canvases containing uploaded images or system fonts to protect rights. Existing reverse-engineered cutting tools require key extraction and have faced legal/DMCA friction. [Cricut offline documentation](https://help.cricut.com/hc/en-us/articles/360033894014-Design-Space-Offline-Feature), [Cricut sharing documentation](https://help.cricut.com/hc/en-us/articles/360009377574-How-do-I-share-my-Design-Space-project), [reverse-engineering/DMCA presentation](https://tagazok.virtualabs.fr/lehack23_Cutting_ties_of_a_vinyl_cutter.final.pdf).

**Money and distribution.** Cricut owners buy machines, materials, designs, and Access subscriptions; r/cricut visibly contains far more than 20 current users. Yet extracting proprietary cached projects creates format-breakage, intellectual-property, and platform-enforcement risk. A safe utility limited to user-uploaded assets would not back up full projects.

**Exact kill reason.** **Platform/legal fragility overwhelms a tiny MVP, while native storage covers ordinary use.** It violates the desired low-dependency opportunity shape.

### 10. Generic PDF-bank-statement reconciliation pack

**Pain trace.** An April 2025 bookkeeping thread described reconciling 5,000 lines in roughly three hours, printing statements, comparing CSVs side by side, and PDFs that do not convert cleanly. A March 2026 operator said a client's bank feed had been broken for 18 months, forcing monthly CSV import and reconciliation. A September 2026 accounting thread asked how to compare 5,000 transactions and discussed fuzzy matching and manual exception review. [Bookkeeping methods thread](https://www.reddit.com/r/Bookkeeping/comments/1jtuhz6), [broken-feed thread](https://www.reddit.com/r/AskAccounting/comments/1s2xm5e/reconciliation_question/), [5,000-transaction comparison](https://www.reddit.com/r/Accounting/comments/1w9mk32/how_do_you_compare_5000_transactions_between_two/).

**Attack and current functionality.** The same threads point to built-in QuickBooks reconciliation, QBO bank feeds, free spreadsheet templates, Power Query, DuckDB, Tabula, PDF-to-CSV services, and AI tools. Several respondents explicitly said native reconciliation handles almost everything when the source data is maintained.

**Money and distribution.** Bookkeepers demonstrably pay for accounting software and cleanup labor, and the first 20 are gathered in r/Bookkeeping and r/Accounting. However, “bank/PDF/CSV reconciliation” is broad and crowded. Narrowing by bank or accounting package merely creates brittle format-support work unless a new platform break supplies a concentrated cohort.

**Exact kill reason.** **Competition gap is zero.** Real spending attaches to bookkeeping judgment and cleanup, not to a novel tiny converter proved by this evidence.

## Why zero is the correct answer

Several candidates had four attractive ingredients—real pain, ugly workaround, concentrated community, and tiny build—but none had all six parts of the asymmetry bonus. The recurring failure patterns were:

1. A 2025 complaint had been resolved by 2026 platform functionality.
2. The “missing product” was already a documented native workflow or a free script.
3. Existing spend was for the surrounding platform or professional service, not the narrow utility.
4. One issue or one thread was mistaken for repeated demand.
5. A potentially valuable extractor depended on proprietary formats or platform tolerance.

The hunt therefore supplies no candidate eligible for a manual test. The next mission should start from a fresh hunting ground, not validate any item above.

MISSION 03: COMPLETE  
TRUE SURVIVORS: 0
