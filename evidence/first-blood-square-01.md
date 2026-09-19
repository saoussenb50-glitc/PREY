# PREY — Mission 06: First Blood / Square payout reality test

Date: 19 September 2026

Status: **COMPLETE — launch kit ready; nothing published; no users contacted; no payment requested or received.**

## Decision

Run one bounded inbound test for a manually delivered Square consignor payout pack. Do not build software. The exact offer is one closed payout period, up to 10 consignors and 100 sale/refund lines, two simple percentage split rates, one Square export structure, one location/currency/entity, and one clarification round. Delivery is within two business days after complete inputs.

## Evidence basis

Prior PREY evidence established that small consignment and multi-vendor operators use Square while calculating payouts manually; one operator described separate per-vendor workbooks as very time-consuming. Square supports CSV exports, but prior evidence found no single report combining item income and processing fees. Direct products validate spending at documented price anchors of $40/month, $79 CAD/month, and $139/month. This is evidence for the job and category, not evidence that buyers will pay PREY.

The reopened uncertainty is whether a low-volume operator prefers a bounded per-run outcome to a subscription or their existing spreadsheet. Only a real paid run can answer it.

## Manual offer

**Who:** owner-operated galleries, antique booths, maker collectives, and multi-vendor boutiques using Square with 5–10 consignors, simple percentage splits, and payouts assembled outside Square.

**Inputs:** one item-level Square sales/export CSV for a closed period; fee/payment export when fees are to appear; consignor/SKU mapping; split rates; written fee policy. The fit check begins with headers or an anonymized three-row sample. No login or privileged account access.

**Outputs:** one reconciled workbook, one itemized CSV statement per consignor, one bookkeeping-summary CSV, and one exception list. Outputs are drafts for owner approval; PREY does not move money.

**Turnaround:** two business days after complete, readable inputs and written rules.

**Boundaries:** one entity, location, currency, period, and export structure; up to 10 consignors, 100 lines, and two simple percentage rates. Item-attributable discounts/refunds only. Ambiguous rows are excluded and flagged.

**Not included:** accounting, bookkeeping services, tax, legal, payroll, or financial advice; tax forms; payment execution; Square configuration; inventory operations; historical reconstruction; API work; automation.

## Synthetic fixture and outcome

The fixture contains 10 fictional consignors, 18 Square-style rows, two consignor share rates (60% and 70%), a shared basket, line/order discounts, a refund, card/cash tenders, allocated processing fees, and one deliberately unmapped SKU. The unmapped line is excluded from payout totals. Processing fees are displayed for bookkeeping and are not deducted from consignor payouts in this demo.

The output pack reconciles included net sales to consignor payouts plus store share, creates itemized statement detail for all 10 consignors, summarizes fees supplied, and isolates owner decisions in an exception list. All data is explicitly marked synthetic. The fixture is illustrative and is not represented as an official Square schema.

## Fixed-price experiment

**Test price: US$25.** This does not claim established willingness to pay. It is below the documented $40/month closest subscription anchor, high enough to require a real purchase decision, and tightly bounded so a first manually checked run is deliverable. One purchase includes exactly the scope defined above.

## Single inbound surface

Use r/SquarePOS_Users only if its current rules permit the transparent post. Prior PREY evidence found active multi-vendor/consignment questions and exact workflow vocabulary there. The prepared copy is educational, labels the demo synthetic, states the fixed price, invites opt-in header-first intake, and forbids posting real data publicly. It must not be published into old threads or followed by unsolicited messages.

## Conversion path

Qualified operator sees one public post → opens the view-only synthetic demo → reads the exact outcome, scope, and price → submits headers or an anonymized three-row sample through a private form/email → PREY confirms fit → operator pays through an existing trusted manual payment request → operator sends minimum redacted files through a restricted link/encrypted attachment → PREY returns the manually checked pack → working copies are deleted within seven days after acceptance.

No website, dashboard, checkout, API, automation, or public upload endpoint is required.

## Measurement and decision rule

- Qualified view: platform-reported view of the one post during the window, used only as a distribution proxy because viewer identity/qualification is not observable.
- Inquiry: inbound from an operator/manager of a Square-based multi-vendor workflow asking about fit, inputs, timing, or purchase.
- Payment signal: qualified operator accepts the US$25 scope and requests/accepts payment instructions.
- Actual paid run: US$25 clears from an independent qualified operator for an in-scope run.
- Likes/upvotes/compliments do not count as purchase intent.

Success requires at least one actual paid run. Stop at seven elapsed days or 100 platform-reported views, whichever occurs first. Preserve the Mission 05 diagnostic targets of three qualified inquiries and two schema submissions, but do not substitute them for payment. Three qualified prospects offered the complete service with zero payments kills the offer. A removed/prohibited/underexposed post is distribution failure; adequate exposure with no payment is offer failure.

## Evidence sources carried forward

- `evidence/hunger-hunt-01.md`, Survivor 2: target, workflow, current workaround, export/fee limitation, incumbents, price anchors, distribution surfaces, risks, and kill conditions.
- `evidence/prey-autopsy-01.md`: reopen decision, bounded public exposure, header-first trust test, 7-day/100-view gate, payment requirement, and prohibition on software before two independent paid deliveries.
- `STATE.md` and `NEXT_ACTION.md`: binding mission boundaries and ledger state.

No new web research was necessary. No willingness-to-pay claim was invented.

MISSION 06: COMPLETE  
OFFER: Manually transform one bounded Square closed-period export and consignor mapping into draft payout statements, a reconciled workbook, bookkeeping summary, and exception list.  
TEST PRICE: US$25  
DISTRIBUTION SURFACE: r/SquarePOS_Users  
LAUNCH KIT: READY  
MARKET EXPERIMENT LAUNCHED: NO

