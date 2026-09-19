# PREY — Mission 01: Hunger Hunt

Operating date and retrieval date: 19 September 2026

Scope: opportunity discovery only. No product was built. Exactly three candidates survived.

## Ranking snapshot

| Rank | Micro-market | Pain | Frequency | Evidence | Reachability | Monetization evidence | Competition gap | $0 MVP feasibility | Speed to first real user | Total / 40 |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | Monthly fulfillment packs for Patreon physical-reward mail clubs | 4 | 5 | 4 | 4 | 3 | 4 | 5 | 4 | 33 |
| 2 | Consignor payout packs from Square exports for tiny galleries and multi-vendor boutiques | 4 | 5 | 4 | 4 | 5 | 3 | 5 | 4 | 34 |
| 3 | BenchApp-ready schedule files for managers handed an `.ics` file rather than a live feed | 3 | 2 | 4 | 5 | 3 | 3 | 5 | 5 | 30 |

The totals are evidence summaries, not forecasts. Candidate 1 ranks first despite a one-point-lower total because its recurring workflow and weak exact-tool coverage look more durable than Square’s API-adjacent wedge.

---

## Survivor 1

### MICRO-MARKET

Patreon creators running small recurring print, sticker, postcard, or “snail-mail” clubs who self-fulfill custom physical rewards.

### EXACT USER

- **VERIFIED FACT:** Patreon supports tiers that collect shipping addresses, and creators can export all member addresses as CSV. [“Find my members’ shipping addresses,” Patreon Help Center, updated 13 July 2026](https://support.patreon.com/hc/en-us/articles/204606015-Find-my-members-shipping-addresses) (retrieved 19 September 2026).
- **INFERENCE:** The best initial user is a solo visual creator with roughly tens to a few hundred monthly recipients, at least one physical-reward tier, and reward choices collected separately in Google Forms.
- **UNKNOWN:** The number of Patreon creators fitting that exact profile.

### PAINFUL JOB

Turn this month’s Patreon member export plus reward-choice form into a correct fulfillment pack: eligible-recipient list, missing/invalid-address exceptions, reward choices, printable envelopes/labels, and an archived evidence file.

### CURRENT WORKAROUND

- **VERIFIED FACT:** A creator described a monthly process combining Google Form data with Patreon audience data, Excel macros that validate tiers and orders, Word-envelope generation, and monthly archiving. [“Help! Advice about structuring tiers without burnout,” Reddit r/patreon, 2–3 January 2026](https://www.reddit.com/r/patreon/comments/1q2aenf/help_advice_about_structuring_tiers_without/) (retrieved 19 September 2026).
- **VERIFIED FACT:** A March 2026 mail-club creator was unsure whether a gifted member showing `$0/mo` should receive the physical reward or how to confirm payment; another creator said their own tier/reward checks were automated with Excel macros. [“For creators with mail clubs: Should gifted Patreon members ($0 pledge) receive physical rewards?”, Reddit r/patreon, 12–13 March 2026](https://www.reddit.com/r/patreon/comments/1rs6cfz/for_creators_with_mail_clubs_should_gifted/) (retrieved 19 September 2026).
- **VERIFIED FACT:** Creators also describe exporting Patreon CSVs into label services and worry about who qualifies under subscription billing. [“Merch Mailout Method,” Reddit r/patreon, 23 December 2023](https://www.reddit.com/r/patreon/comments/18ojapw) and [“Subscription billing & physical rewards question,” Reddit r/patreon, 20 December 2023](https://www.reddit.com/r/patreon/comments/18n0qf6) (retrieved 19 September 2026; older background evidence).

### EVIDENCE

- **VERIFIED FACT:** Patreon’s native Merch fulfillment is now available only to creators already using it; if the Merch tab is absent, the feature is unavailable. [“How do I pay for merch?”, Patreon Help Centre, updated 4 March 2026](https://support.patreon.com/hc/en-gb/articles/360043517972-How-do-I-pay-for-merch) (retrieved 19 September 2026).
- **VERIFIED FACT:** Native Merch uses its own eligibility logic based on consecutive payments and excludes some membership/payment cases. [“When will my members earn merch?”, Patreon Help Centre, updated 3 March 2026](https://support.patreon.com/hc/en-gb/articles/360043651572-When-will-my-members-earn-merch) (retrieved 19 September 2026).
- **VERIFIED FACT:** Patreon explicitly warns creators self-shipping physical rewards that the US de minimis change from 29 August 2025 may create duties, delays, returns, and additional administration. [“Navigating Global Tariff Changes as a Creator on Patreon,” Patreon Help Center, updated 19 August 2025](https://support.patreon.com/hc/en-us/articles/38921910842637-Navigating-Global-Tariff-Changes-as-a-Creator-on-Patreon) (retrieved 19 September 2026).
- **INFERENCE:** These traces show a repeated fulfillment-control problem, not merely a desire for shipping labels.

### WHY EXISTING SOLUTIONS FAIL THIS SPECIFIC USER

- **VERIFIED FACT:** Patreon’s native tool is unavailable to new users and historically added 3% to total Patreon earnings under Pro + Merch, while the standard Patreon platform fee for new pages is already 10%. [Patreon fee overview, updated 11 September 2026](https://support.patreon.com/hc/en-us/articles/11111747095181-Creator-fees-overview) (retrieved 19 September 2026).
- **VERIFIED FACT:** Generic shipping services accept CSVs and print labels, but they do not decide Patreon eligibility, join a reward-choice form, flag gifted/failed/missing-address exceptions, or preserve a monthly fulfillment ledger. The cited Patreon workflow performs those joins and checks before printing.
- **VERIFIED FACT:** Snaaail offers its own subscription-mail-club platform and label generation, rather than a lightweight Patreon-export companion. [“Start Your Snail Mail Club for Free,” Snaaail](https://snaaail.com/) (retrieved 19 September 2026; page date unavailable).
- **HYPOTHESIS:** A local/file-only companion can win the narrow “keep Patreon, keep my custom reward, eliminate the monthly spreadsheet ritual” job.

### ZERO-DOLLAR DISTRIBUTION SURFACE

- **VERIFIED FACT:** Patreon operates an official Creator Community Discord and creator-led clubs. [“Your creator community,” Patreon Creator Hub](https://creatorhub.patreondev.com/community) (retrieved 19 September 2026; page date unavailable).
- **VERIFIED FACT:** r/patreon contains current, highly specific physical-reward and mail-club questions, including the January and March 2026 threads cited above.
- **INFERENCE:** The first 20 interviews can be recruited by answering or messaging participants in those exact public threads where permitted, joining the official Creator Community Discord without spamming, and asking mail-club creators for anonymized sample exports.

### MONETIZATION EVIDENCE

- **VERIFIED FACT:** Patreon previously charged an additional 3% of total earnings for Pro + Merch; creators also bear item and shipping costs. [Patreon fee overview](https://support.patreon.com/hc/en-us/articles/11111747095181-Creator-fees-overview) and [Patreon Merch](https://www.patreon.com/merch?l=en-gb) (retrieved 19 September 2026).
- **VERIFIED FACT:** One successful creator reported that physical-reward patrons can average about $40 each. [“Patreon Full Time For 1 Year: Results & Tips,” Reddit r/patreon, 1 August 2025](https://www.reddit.com/r/patreon/comments/1mevfbe/patreon_full_time_for_1_year_results_tips_you_do/) (retrieved 19 September 2026).
- **INFERENCE:** Existing creator spend and reward revenue make a small one-time or low monthly operations charge plausible.
- **UNKNOWN:** Actual willingness to pay for this exact utility and the viable price.

### SMALLEST SELLABLE / TESTABLE THING

Do not start with an integration. Offer a file-only “monthly mailout pack” service: the creator uploads a Patreon Audience CSV and optional Google Form CSV; receives a reviewed exceptions sheet, eligible-recipient CSV, label-ready CSV/PDF, and immutable month archive. Human review can cover edge cases before any software exists.

### 48-HOUR VALIDATION EXPERIMENT

1. Post a concise workflow question—not a sales pitch—in the official Patreon Creator Community and one relevant public creator discussion: ask creators to describe the last mailout and its files.
2. Recruit five creators who self-fulfill recurring rewards; request anonymized column headers or synthetic samples.
3. Manually produce one fulfillment pack for two creators using their rules.
4. Ask for one hard commitment: pay a small fixed amount for next month’s pack or book a dated repeat run.
5. Pass gate: two creators provide files and one pays or schedules a paid repeat. Fail gate: creators say shipping-label imports already solve the full job or refuse to entrust even local files.

### BUILD ESTIMATE

- **HYPOTHESIS:** 1–2 days for a local deterministic CSV join/validation script plus HTML/PDF/CSV output after two real sample sets; 3–5 additional days for reusable rule profiles and safer address handling.
- **INFERENCE:** No API, database, paid hosting, or autonomous regulatory decision is required for the first sellable version.

### KEY RISK

Handling personal addresses creates privacy and trust burden. The initial wedge should be local processing or immediate deletion, with no tax/customs advice and no claim to determine legal eligibility.

### WHAT WOULD KILL IT

- Fewer than two of five interviewed mail-club creators repeat the spreadsheet/form join monthly.
- Patreon exports omit the fields needed to distinguish successful payment and current eligibility.
- Creators will not provide files even under a local-only workflow.
- A current cheap Patreon-specific tool already performs form join, eligibility checks, label output, and monthly archive.

### SCORE

Pain 4; Frequency 5; Evidence 4; Reachability 4; Monetization evidence 3; Competition gap 4; zero-dollar MVP feasibility 5; speed to first real user 4. **Total: 33/40.**

---

## Survivor 2

### MICRO-MARKET

Tiny galleries, antique booths, maker collectives, and multi-vendor boutiques that keep Square as their POS but calculate consignor/vendor payouts outside it.

### EXACT USER

- **VERIFIED FACT:** Square is explicitly recommended as a budget POS for small consignment stores only when they are comfortable managing consignor payouts manually or with light integrations. [“Best Consignment Software 2026,” TechnologyAdvice, 10 June 2026](https://technologyadvice.com/blog/sales/consignment-software/) (retrieved 19 September 2026).
- **INFERENCE:** The initial user is an owner-operated location with roughly 5–30 active vendors, simple percentage splits, monthly payouts, and insufficient volume to justify replacing Square.
- **UNKNOWN:** Count of such shops and their geographic concentration.

### PAINFUL JOB

Convert Square’s item-sales export into correct per-vendor payout statements that account for vendor identity, commission rate, discounts, refunds, and payment fees, then create a bookkeeping summary and payee-facing PDF/email pack.

### CURRENT WORKAROUND

- **VERIFIED FACT:** A Square user described manually entering all sales into a spreadsheet, creating an individual workbook for every vendor, and sending each by hand; they called it “very very time-consuming.” [“Please Help! What is the best way to set up the square system for commission vendors & wholesale/owned inventory?”, Reddit r/SquarePOS_Users, 26 August 2024](https://www.reddit.com/r/SquarePOS_Users/comments/1euyzqv/) (retrieved 19 September 2026; background evidence still reflected in 2026 market reviews).
- **VERIFIED FACT:** A 2026 comparison says many stores tag vendors in Square, export the data, and calculate payouts manually. [“Best Consignment Software for 2026, Compared,” Circular Resale](https://getcircular.ai/news/best-consignment-software-for-2026-compared) (published approximately March 2026; retrieved 19 September 2026).
- **VERIFIED FACT:** Current small-business discussions still ask how to operate a central Square till while preserving line-item vendor attribution and correct payout reporting. [“Can Square handle a multi vendor consignment setup…?”, Reddit r/SquarePOS_Users, 2026](https://www.reddit.com/r/SquarePOS_Users/comments/1qqci8u/can_square_handle_a_multi_vendor_consignment/) (retrieved 19 September 2026).

### EVIDENCE

- **VERIFIED FACT:** Square officially supports filtered report exports to CSV for offline analysis and customization. [“Print, export, or email your reports,” Square Support](https://squareup.com/help/us/en/article/8362-print-export-or-email-your-reports) (retrieved 19 September 2026; current page, date unavailable).
- **VERIFIED FACT:** A current reporting guide notes that Square has no single report showing item income and processing fees together; users must work from separate reports. [“Square Reports and Refunds Instructions,” MBX Foundation, 2026](https://www.mbxfoundation.org/wp-content/uploads/Square-Reports-and-Refunds-Instructions.pdf) (retrieved 19 September 2026).
- **VERIFIED FACT:** A dedicated product, Consign for Square, sells payout reporting and bookkeeping exports for $40/month. [“Consign for Square,” Active Projects](https://squareconsign.com/) (retrieved 19 September 2026; page date unavailable).
- **INFERENCE:** Manual behavior persists because Square exports the ingredients but not the consignment calculation and statement artifact.

### WHY EXISTING SOLUTIONS FAIL THIS SPECIFIC USER

- **VERIFIED FACT:** ConsignCloud starts at $139/month; its package includes a new operational system, inventory, integrations, ACH, support, and users. [ConsignCloud pricing](https://consigncloud.com/pricing) (retrieved 19 September 2026).
- **VERIFIED FACT:** Consign for Square is closer to the exact job but costs $40/month and is an ongoing integrated service. [Consign for Square](https://squareconsign.com/) (retrieved 19 September 2026).
- **VERIFIED FACT:** Square itself provides exports, not consignor-specific payout logic or statements.
- **HYPOTHESIS:** A no-login, upload-two-exports utility or per-month service at a much smaller charge can serve shops that need reports but not a new POS, portals, ACH, or continuous sync.

### ZERO-DOLLAR DISTRIBUTION SURFACE

- **VERIFIED FACT:** r/SquarePOS_Users and r/smallbusiness contain specific active threads from prospective and current multi-vendor operators; the cited 2024 and 2026 discussions expose identifiable users and vocabulary.
- **VERIFIED FACT:** Square has a public community and developer forum where report/export limitations are discussed. [Square Developer Forums data-download thread](https://developer.squareup.com/forums/t/user-downloading-of-data/2008) (retrieved 19 September 2026; original thread 2021).
- **INFERENCE:** First users can be found by participating in the exact Square consignment threads and by approaching publicly listed local galleries/vendor collectives only after validating the workflow in-community; no paid ads or mass outreach are necessary.

### MONETIZATION EVIDENCE

- **VERIFIED FACT:** Direct substitutes charge $40/month (Consign for Square), $79 CAD/month (ConsignPilot), and $139/month (ConsignCloud). [Consign for Square](https://squareconsign.com/), [ConsignPilot](https://kitsconsignpilot.com/), [ConsignCloud](https://consigncloud.com/pricing) (retrieved 19 September 2026).
- **VERIFIED FACT:** The job controls actual vendor payments and produces statements, so errors affect cash and supplier trust; current products explicitly sell payout reporting.
- **INFERENCE:** A smaller shop may pay per run or a low monthly price to avoid a $40–$139 subscription while retaining Square.
- **UNKNOWN:** Whether low-volume shops value saved time enough to pay rather than keep formulas.

### SMALLEST SELLABLE / TESTABLE THING

A concierge payout run, not SaaS: accept an Item Sales Detail CSV, fee/payment export, and vendor-rate table; return per-vendor PDFs, an exceptions list, and one bookkeeping CSV. Do not move money or change Square data.

### 48-HOUR VALIDATION EXPERIMENT

1. Obtain Square’s documented sample structure and create a synthetic 10-vendor month containing a refund, discount, shared basket, and two rate classes.
2. Invite five operators from the exact Square/community threads to a 15-minute screen-share; ask them to bring only headers or anonymized exports.
3. Reproduce one shop’s last closed payout period and compare totals with its spreadsheet.
4. Offer the next payout run for a fixed fee, with “pay only if totals match.”
5. Pass gate: two shops share real structures and one prepays/repeats. Fail gate: Consign for Square already fits every respondent at an acceptable price, or Square’s exports cannot reliably retain vendor attribution/refunds.

### BUILD ESTIMATE

- **HYPOTHESIS:** 1–2 days for a deterministic local CSV transformer and HTML/PDF statements after receiving one valid export set; another 2–4 days for saved vendor rules, refund carryovers, and reconciliation tests.
- **INFERENCE:** The first service can run without Square API approval, hosting, or money movement.

### KEY RISK

Square export schemas and merchants’ vendor-tagging conventions may vary enough that support becomes custom spreadsheet consulting. Square or the $40 incumbent can also close the low end quickly.

### WHAT WOULD KILL IT

- Two real exports cannot deterministically link every sold/refunded line to a vendor.
- More than one hour of custom mapping is needed each month for a 20-vendor shop.
- Prospects already accept the $40/month exact incumbent.
- Square adds native consignor rates and payout statements.

### SCORE

Pain 4; Frequency 5; Evidence 4; Reachability 4; Monetization evidence 5; Competition gap 3; zero-dollar MVP feasibility 5; speed to first real user 4. **Total: 34/40.**

---

## Survivor 3

### MICRO-MARKET

Volunteer hockey, softball, and recreational-team managers using BenchApp Free who receive a downloadable `.ics` calendar file but not a valid live iCal/WebCal feed.

### EXACT USER

- **VERIFIED FACT:** A March 2026 BenchApp user said their league’s “add to calendar” link was invalid for BenchApp and asked whether manual setup or an XLS/CSV template was the only option. [“Lost the ability to import .ics file,” Reddit r/Benchapp, 17 March–8 May 2026](https://www.reddit.com/r/Benchapp/comments/1rvqupq/lost_the_ability_to_import_ics_file/) (retrieved 19 September 2026).
- **INFERENCE:** The best initial user manages 2–3 recreational teams, already uses BenchApp Free, and receives season schedules as files from separate league systems.
- **UNKNOWN:** How often leagues provide only files rather than valid feeds.

### PAINFUL JOB

Convert one or more `.ics` files into a BenchApp-importable spreadsheet with the correct columns, local timezone, recurring-event expansion, opponent/location extraction, and duplicate preview.

### CURRENT WORKAROUND

- **VERIFIED FACT:** BenchApp supports manual event entry, bulk entry, CSV/XLS/XLSX import, and live calendar sync; ongoing iCal/ICS/WebCal sync requires PRO. [“How do I add events to my schedule?”, BenchApp Help, 9 May 2026](https://help.benchapp.com/en/articles/4770823-how-do-i-add-events-to-my-schedule) (retrieved 19 September 2026).
- **VERIFIED FACT:** One three-team manager said manual entry was a “PITA,” objected to paying about $300/year merely to import calendars, and said they would pay a little for live sync. A respondent converted/imported a CSV in ten minutes with Copilot. [“Pricey to just import calendars,” Reddit r/Benchapp, 8–9 May 2026](https://www.reddit.com/r/Benchapp/comments/1t7hvr6/pricey_to_just_import_calendars/) (retrieved 19 September 2026).

### EVIDENCE

- **VERIFIED FACT:** BenchApp’s current Free plan includes scheduling; PRO is $9/month and adds automatic schedule sync. [BenchApp pricing](https://www.benchapp.com/pricing) (retrieved 19 September 2026).
- **VERIFIED FACT:** An old open-source converter exists specifically for Sportability-to-BenchApp, but it requires Python, assumes PST unless edited, and has not solved the broad end-user job. [GitHub `arthurio/sportability_to_benchapp`](https://github.com/arthurio/sportability_to_benchapp) (published 2018; retrieved 19 September 2026; background/competition evidence).
- **VERIFIED FACT:** Generic browser-local ICS-to-CSV tools now handle recurrence expansion, cancelled events, timezone choice, and output formatting, but do not advertise BenchApp’s import schema or opponent/location parsing. [ICS to CSV Converter](https://icstocsvconverter.com/) (retrieved 19 September 2026; page date unavailable).
- **INFERENCE:** The gap is not calendar conversion generally; it is a BenchApp-ready, zero-setup output for file-only league calendars.

### WHY EXISTING SOLUTIONS FAIL THIS SPECIFIC USER

- **VERIFIED FACT:** BenchApp’s paid feature is continuous feed sync, while the affected user lacks a valid feed and may only need a seasonal import.
- **VERIFIED FACT:** Generic converters require the manager to understand and map fields; the old GitHub script requires local Python and code/timezone editing.
- **HYPOTHESIS:** A one-time, local “drop `.ics`, download BenchApp file” utility is worth a small seasonal fee to multi-team volunteers but not a subscription.

### ZERO-DOLLAR DISTRIBUTION SURFACE

- **VERIFIED FACT:** r/Benchapp contains the two exact 2026 complaint threads and direct replies from multi-team managers.
- **VERIFIED FACT:** BenchApp publicly states it supports 60,000+ teams across 16 sports, although that is vendor-reported and does not measure the file-only niche. [BenchApp “Go Pro” page](https://www.benchapp.com/go-pro) (retrieved 19 September 2026).
- **INFERENCE:** The first 20 prospects are reachable inside r/Benchapp, league-specific hockey/softball communities where schedule-import questions surface, and the old GitHub repository’s issue/fork ecosystem. Any promotion must follow community rules.

### MONETIZATION EVIDENCE

- **VERIFIED FACT:** A target user explicitly said they would pay “a little” for sync but rejected the roughly $300/year multi-team cost. [“Pricey to just import calendars”](https://www.reddit.com/r/Benchapp/comments/1t7hvr6/pricey_to_just_import_calendars/) (retrieved 19 September 2026).
- **VERIFIED FACT:** BenchApp charges $9/month for PRO, which includes automatic schedule sync among many other features. [BenchApp pricing](https://www.benchapp.com/pricing) (retrieved 19 September 2026).
- **INFERENCE:** A one-time seasonal price is more plausible than subscription revenue.
- **UNKNOWN:** How many managers will pay instead of spending ten minutes with Copilot or a generic converter.

### SMALLEST SELLABLE / TESTABLE THING

A human-assisted conversion service: manager sends one non-sensitive `.ics` file and downloads a reviewed BenchApp import workbook plus a one-page import note. The converter itself can remain a local script during validation.

### 48-HOUR VALIDATION EXPERIMENT

1. Reproduce BenchApp’s current import template and collect three public/synthetic ICS variants: file download, recurring event, and timezone boundary.
2. Reply to or contact the two cited 2026 thread participants where allowed; ask for redacted sample calendars and quote a one-time conversion price.
3. Deliver three converted files and have users complete the native BenchApp duplicate-preview step.
4. Pass gate: two files import cleanly and one manager pays for a second team/season. Fail gate: generic converter output maps cleanly without extra work, or BenchApp restores direct file import.

### BUILD ESTIMATE

- **HYPOTHESIS:** 4–8 hours for an offline converter around a mature open-source iCalendar parser plus schema tests; 1–2 more days for recurrence, timezone, opponent/location heuristics, and browser-local packaging.
- **INFERENCE:** No BenchApp API or automated account access is needed.

### KEY RISK

The pain is seasonal and small, and BenchApp can trivially restore direct `.ics` upload. Generic converters plus Copilot may be good enough.

### WHAT WOULD KILL IT

- BenchApp restores file upload or makes one-time sync free.
- Fewer than three of ten file-only managers need more than ten minutes to make the CSV.
- One generic free converter plus BenchApp’s field mapper already produces a reliable import across samples.
- Community acquisition rules prevent legitimate access to managers and no league-directory route converts.

### SCORE

Pain 3; Frequency 2; Evidence 4; Reachability 5; Monetization evidence 3; Competition gap 3; zero-dollar MVP feasibility 5; speed to first real user 5. **Total: 30/40.**

---

## KILLED PREY

1. **Airbnb co-host payout audit/owner statements — KILLED.** Pain is real (one May 2025 host reported more than $500 lost through missing cleaning-fee allocations), but baseSTR now performs CSV mapping, owner splits, and PDF owner reports for $15/month, while Airbnb is piloting native QuickBooks sync; the cheap exact incumbent defeats the wedge. Sources: [missing cleaning-fee payout report](https://www.reddit.com/r/airbnb_hosts/comments/1kg57wd), [baseSTR pricing](https://www.basestr.com/), [Airbnb QuickBooks sync help](https://www.airbnb.com/help/article/4136) (retrieved 19 September 2026).
2. **eBay shipping-label-fee-to-profit spreadsheet — KILLED.** Current seller complaints exist, but Seller Ledger already imports eBay shipping labels and ad fees and starts at $10/month; eBay’s Finances API exposes label-purchase transactions. Sources: [2026 seller question](https://www.reddit.com/r/eBaySellerAdvice/comments/1rmsjk3/how_to_easily_see_what_i_paid_for_shipping_labels/), [Seller Ledger eBay product](https://sellerledger.com/ebay-bookkeeping-software/), [eBay Finances API](https://www.edp.ebay.com/develop/api/sell/finances_api) (retrieved 19 September 2026).
3. **Micro-label royalty statements — KILLED.** The spreadsheet pain and paid enterprise substitutes are visible, but Roster now provides royalty imports, artist statements, invoices, and accounting free for up to 15 artists; the smallest labels are already served. Source: [Roster pricing](https://www.rosterroyalties.com/pricing) (retrieved 19 September 2026).
4. **Lightroom client-pick filename importer — KILLED.** Current complaints persist, but Lightroom Classic accepts comma-separated filename lists, Pixieset generates a Lightroom-ready list, and its plugin already supports the workflow; remaining pain is mainly education/version fragmentation. Sources: [Pixieset “Viewing Client Favorites in Lightroom”](https://help.pixieset.com/hc/en-us/articles/115003505192-Viewing-Client-Favorites-in-Lightroom), [August 2026 Lightroom discussion](https://www.reddit.com/r/Lightroom/comments/1vro2hd/lightroom_still_cant_search_multiple_filenames_at/) (retrieved 19 September 2026).
5. **Etsy bulk listing/variation formatter — KILLED.** December 2025 users still report one-by-one edits, but Shop Uploader/ListingSmith and Etsy’s native same-change bulk edits cover much of the job, while r/EtsySellers explicitly bans seller-tool promotion, weakening the zero-dollar distribution gate. Source: [“Etsy listings bulk create/update”](https://www.reddit.com/r/EtsySellers/comments/1pu1qnq/etsy_listings_bulk_createupdate/) (retrieved 19 September 2026).
6. **TeamSnap schedule-file converter — KILLED.** TeamSnap natively imports flexible CSVs, maps arbitrary column order, and documents organization imports; league managers’ format pain is materially lower than BenchApp’s removed-file-import gap. Sources: [TeamSnap import guide](https://helpme.teamsnap.com/article/731-import-games-in-scheduler), [organization schedule import](https://helpme-teams.teamsnap.com/article/2789-importing-organization-schedules) (retrieved 19 September 2026).
7. **Ko-fi/creator income reconciliation — KILLED.** Ko-fi provides payment-history CSVs with tax breakdowns, and Owelet already offers Ko-fi fee analysis on a free tier and multi-platform/accountant exports at $19/month. Sources: [Ko-fi tax/export help](https://help.ko-fi.com/hc/en-us/articles/10792069957661-How-tax-works-on-Ko-fi), [Owelet for Ko-fi creators](https://owelet.app/for-ko-fi-creators) (retrieved 19 September 2026).

## Exact continuation action

Before building anything, recruit five Patreon mail-club creators and obtain two anonymized/synthetic export pairs (Patreon Audience CSV + their reward-choice form). Manually produce one monthly fulfillment pack and require a paid or dated repeat commitment. If that fails, run the same concierge test with two Square consignment shops; do not begin the BenchApp converter unless a manager provides a real failing `.ics` sample.

MISSION 01: COMPLETE
