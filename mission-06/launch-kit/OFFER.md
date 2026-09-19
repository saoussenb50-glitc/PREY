# Square consignor payout pack — manual test offer

## Who this is for

Owner-operated galleries, antique booths, maker collectives, and multi-vendor boutiques that use Square, have 5–10 active consignors in one closed payout period, use simple 60/40 or 70/30-style percentage splits, and currently assemble payouts outside Square.

## Inputs required

- One appropriate Square item-sales/export CSV for one closed payout period, with item-level sales, discounts, refunds, transaction IDs, and the SKU or field used to identify a consignor.
- A Square fee/payment export for the same period if the shop wants fees shown in the bookkeeping summary.
- A simple mapping with consignor ID/name, SKU/tag rule, and consignor share percentage.
- The shop's written policy for whether processing fees affect payouts. The default test pack shows fees separately and does not deduct them.

Start with headers only or an anonymized three-row sample. No Square login, API key, bank access, cardholder data, tax IDs, home addresses, or privileged account access.

## Output delivered

- One reconciled payout workbook for the closed period.
- One itemized CSV statement per consignor.
- One bookkeeping-summary CSV showing included net item sales, consignor payout liability, store share before fees, and fees supplied.
- One exception list for missing mappings, refunds requiring confirmation, or rows excluded from payouts.

All outputs are drafts for the shop owner's review and approval. PREY does not move money.

## Turnaround

Two business days after receiving complete, readable inputs and written payout rules.

## Fixed test price

**US$25 for one manual run.** One purchase covers one closed payout period, up to 10 consignors, up to 100 sale/refund lines, two percentage split rates, one Square export structure, and one clarification round before delivery.

The price is an experiment, not willingness-to-pay evidence. It is below the documented $40/month closest subscription anchor, high enough to require a real buying decision, and bounded enough to protect a manually checked first delivery.

## Scope boundaries

- One legal business entity, one Square location, one currency, and one closed payout period.
- Percentage splits only. No tiered commissions, minimum guarantees, rent/booth fees, taxes withheld, advances, reserves, or multi-period carryovers.
- Discounts and refunds are included only when present at item level and attributable to a mapped consignor.
- Unmapped or ambiguous rows are excluded and listed as exceptions until the owner resolves them.
- Delivery is based on the provided exports and rules; the shop owner approves every payout.

## Not included

Accounting, bookkeeping services, tax, legal, payroll, financial advice, tax forms, payment execution, ACH/check creation, Square setup or changes, inventory management, customer data cleanup, historical reconstruction, API integration, recurring automation, or a customer-facing app.

