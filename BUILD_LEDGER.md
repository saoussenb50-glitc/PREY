# Build Ledger

This ledger distinguishes project infrastructure and validation aids from customer-facing products.

## Totals

| Category | Count | Classification |
|---|---:|---|
| Customer-facing apps | 0 | Product |
| Internal apps | 0 | Infrastructure |
| Dashboards | 0 | Product or infrastructure |
| Automations | 0 | Infrastructure |
| Documented workflows | 1 | Project infrastructure |
| Scripts | 1 | Demo-generation infrastructure |
| Datasets/fixtures | 3 | Synthetic validation inputs |
| Demo artifacts | 15 | Mission 06 workbook/CSVs plus Mission 08 corrected SRT, ambiguity log, and QA checklist; all synthetic |
| Software products | 0 | Product |
| Market experiment kits | 2 | Validation infrastructure, not products |

## Recorded assets

| Mission | Category | Asset | Purpose | Customer-facing? | Product? | Status |
|---|---|---|---|---|---|---|
| 00–06 | Workflow | Evidence → adversarial kill → market exposure → human/money signal → build or kill | Project decision process | No | No | Active |
| 06 | Script | `mission-06/build_payout_pack.mjs` | Generates the synthetic demonstration pack | No | No | Complete |
| 06 | Dataset/fixture | `mission-06/launch-kit/demo/synthetic-square-transactions.csv` | Synthetic Square-style transaction input | No | No | Complete; clearly synthetic |
| 06 | Dataset/fixture | `mission-06/launch-kit/demo/synthetic-consignor-mapping.csv` | Synthetic consignor mapping input | No | No | Complete; clearly synthetic |
| 06 | Demo artifact | `mission-06/launch-kit/demo/synthetic-square-payout-pack.xlsx` | Demonstrates the proposed manually checked output | No | No | Complete; clearly synthetic |
| 06 | Demo artifacts | Ten synthetic consignor statement CSVs and one bookkeeping-summary CSV in `mission-06/launch-kit/demo/` | Portable example outputs | No | No | Complete; clearly synthetic |
| 06 | Market experiment kit | `mission-06/launch-kit/` plus `mission-06/EXPERIMENT_README.md` | Defines the offer, post copy, safe intake, launch sequence, and measurement rules | Not yet | No | READY — NOT LAUNCHED |
| 08 | Synthetic fixture | `mission-08/sample/` | Demonstrates machine SRT before, checked SRT, ambiguity log, and QA checklist | No | No | Complete; clearly synthetic |
| 08 | Market experiment kit | `mission-08/EXPERIMENT_README.md` | Defines the offer, listing copy, intake, safety bounds, and measurement rules | Not yet | No | READY — NOT LAUNCHED |

The Mission 06 workbook, CSVs, script, and launch copy are synthetic demo and validation infrastructure. They are not a software product, customer-facing app, dashboard, automation, or evidence of a customer delivery.

Mission 08 adds one synthetic fixture and one manual market-test kit. It adds no app, dashboard, automation, or software product. Current factual totals: market experiment kits **2**, datasets/fixtures **3**, and demo artifacts **15**.
