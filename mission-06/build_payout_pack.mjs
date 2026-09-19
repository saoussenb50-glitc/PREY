import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { Workbook, SpreadsheetFile } from "@oai/artifact-tool";

const outDir = new URL("./launch-kit/demo/", import.meta.url);
await fs.mkdir(outDir, { recursive: true });

const mappings = [
  ["C001","Alder & Ash","AA-",0.60,"Monthly","ACH ending 0182"],
  ["C002","Blue Finch Studio","BF-",0.60,"Monthly","Check"],
  ["C003","Cedar Thread","CT-",0.60,"Monthly","ACH ending 4421"],
  ["C004","Dune Ceramics","DC-",0.60,"Monthly","ACH ending 9033"],
  ["C005","Elm Paper Co.","EP-",0.60,"Monthly","Check"],
  ["C006","Foxglove Goods","FG-",0.70,"Monthly","ACH ending 2210"],
  ["C007","Golden Hour Glass","GH-",0.70,"Monthly","Check"],
  ["C008","Harbor Loom","HL-",0.70,"Monthly","ACH ending 7815"],
  ["C009","Indigo North","IN-",0.70,"Monthly","ACH ending 6690"],
  ["C010","Juniper Metalworks","JM-",0.70,"Monthly","Check"],
];

// Completely synthetic Square-style rows. Negative quantity/net sales represent a refund.
const tx = [
  ["2026-08-03 10:14","SQ-1001","AA-101","Linen tote",1,38,0,38,1.16,"Card","C001","Alder & Ash",0.60,"Included",""],
  ["2026-08-03 10:14","SQ-1001","BF-205","Stoneware mug",1,32,0,32,0.98,"Card","C002","Blue Finch Studio",0.60,"Included","Shared basket SQ-1001"],
  ["2026-08-04 13:02","SQ-1002","CT-044","Woven scarf",1,64,6.40,57.60,1.76,"Card","C003","Cedar Thread",0.60,"Included","10% line discount"],
  ["2026-08-05 11:41","SQ-1003","DC-018","Speckled bowl",2,28,0,56,1.71,"Card","C004","Dune Ceramics",0.60,"Included",""],
  ["2026-08-06 15:18","SQ-1004","EP-330","Botanical card set",1,18,0,18,0.55,"Card","C005","Elm Paper Co.",0.60,"Included",""],
  ["2026-08-07 12:07","SQ-1005","FG-077","Leather key loop",2,24,0,48,1.47,"Card","C006","Foxglove Goods",0.70,"Included",""],
  ["2026-08-08 16:33","SQ-1006","GH-009","Sun-catcher",1,45,5,40,1.22,"Card","C007","Golden Hour Glass",0.70,"Included","$5 line discount"],
  ["2026-08-09 10:28","SQ-1007","HL-412","Hand towel",3,16,0,48,1.47,"Card","C008","Harbor Loom",0.70,"Included",""],
  ["2026-08-10 14:55","SQ-1008","IN-222","Indigo bandana",1,27,0,27,0,"Cash","C009","Indigo North",0.70,"Included",""],
  ["2026-08-11 12:12","SQ-1009","JM-031","Brass earrings",1,52,0,52,1.59,"Card","C010","Juniper Metalworks",0.70,"Included",""],
  ["2026-08-14 09:47","SQ-1010","AA-104","Canvas pouch",2,22,4,40,1.22,"Card","C001","Alder & Ash",0.60,"Included","$4 order discount allocated to line"],
  ["2026-08-15 17:21","SQ-1011","FG-080","Leather card case",1,36,0,36,1.10,"Card","C006","Foxglove Goods",0.70,"Included",""],
  ["2026-08-16 11:05","SQ-1012","DC-018","Speckled bowl",-1,28,0,-28,-0.86,"Card","C004","Dune Ceramics",0.60,"Included","Refund of one unit from SQ-1003"],
  ["2026-08-19 13:36","SQ-1013","EP-335","Mini print",2,14,0,28,0.86,"Card","C005","Elm Paper Co.",0.60,"Included",""],
  ["2026-08-20 15:44","SQ-1014","GH-011","Glass bud vase",1,58,0,58,1.77,"Card","C007","Golden Hour Glass",0.70,"Included",""],
  ["2026-08-22 10:19","SQ-1015","HL-418","Table runner",1,72,0,72,2.20,"Card","C008","Harbor Loom",0.70,"Included",""],
  ["2026-08-24 16:03","SQ-1016","MISC-001","Unmapped candle",1,21,0,21,0.64,"Card","","",0,"Exception","No consignor mapping; excluded from payouts"],
  ["2026-08-27 12:58","SQ-1017","JM-034","Hammered cuff",1,68,8,60,1.84,"Card","C010","Juniper Metalworks",0.70,"Included","$8 line discount"],
];

const included = tx.filter(r => r[13] === "Included");
const byVendor = mappings.map(m => {
  const rows = included.filter(r => r[10] === m[0]);
  const gross = rows.reduce((s,r)=>s + r[4]*r[5],0);
  const discounts = rows.reduce((s,r)=>s + r[6],0);
  const net = rows.reduce((s,r)=>s + r[7],0);
  const fees = rows.reduce((s,r)=>s + r[8],0);
  const payout = net * m[3];
  return [m[0],m[1],m[3],gross,discounts,net,payout,net-payout,fees,rows.length,"Ready"];
});

const totals = byVendor.reduce((a,r)=>a.map((v,i)=>v+(typeof r[i+3]==="number"?r[i+3]:0)),[0,0,0,0,0,0]);
const workbook = Workbook.create();
const summary = workbook.worksheets.add("Summary");
const statements = workbook.worksheets.add("Statements");
const exceptions = workbook.worksheets.add("Exceptions");
const transactions = workbook.worksheets.add("Transactions");
const mapping = workbook.worksheets.add("Mapping");
const font = "Arial";
const dark = "#17324D", mid = "#DCE8F2", light = "#F4F7FA", amber = "#FFF1CC", red = "#FCE2E2";

for (const s of [summary,statements,exceptions,transactions,mapping]) {
  s.showGridlines = false;
  s.getRange("A1:O200").format.font = {name:font,size:10,color:"#1F2937"};
}

summary.getRange("A2:K2").merge(); summary.getRange("A2").values=[["Synthetic Square consignor payout pack"]];
summary.getRange("A2").format.font={name:font,size:16,bold:true,color:dark};
summary.getRange("A3:K3").merge(); summary.getRange("A3").values=[["DEMO ONLY — all shop, consignor, transaction, and payment details are fictional."]];
summary.getRange("A3").format={fill:amber,font:{name:font,bold:true,color:"#7A4B00"}};
summary.getRange("A5:B10").values=[
  ["Payout period","August 1–31, 2026"],
  ["Policy used","Consignor share applies to net item sales after discounts/refunds"],
  ["Processing fees","Shown for bookkeeping; not deducted from consignor payout in this demo"],
  ["Tax/tips/shipping","Outside payout calculation and not included in fixture"],
  ["Payout status","Draft for owner review; no money moved"],
  ["Exception rule","Unmapped rows are excluded until the owner resolves them"],
];
summary.getRange("A12:K12").values=[["Consignor ID","Consignor","Share %","Gross sales","Discounts","Net sales","Consignor payout","Store share","Payment fees","Lines","Status"]];
summary.getRange("A13:K22").values=byVendor;
summary.getRange("A23:K23").values=[["","TOTAL","",totals[0],totals[1],totals[2],totals[3],totals[4],totals[5],included.length,"1 exception"]];
summary.getRange("A25:B29").values=[
  ["Bookkeeping summary","Amount"],
  ["Included net item sales",totals[2]],
  ["Consignor payout liability",totals[3]],
  ["Store commission before fees",totals[4]],
  ["Card processing fees shown",totals[5]],
];
summary.getRange("A31:B33").values=[
  ["Reconciliation","Amount"],
  ["Included net sales",totals[2]],
  ["Payouts + store share",totals[3]+totals[4]],
];
summary.getRange("D25:F28").values=[
  ["Before","After","Owner check"],
  ["One mixed Square-style export","10 payout totals","Resolve 1 unmapped SKU"],
  ["Vendor mapping + split rates","Itemized statements","Approve draft payouts"],
  ["Discounts, refund, shared basket","Reconciled bookkeeping summary","Pay consignors outside this pack"],
];

const statementRows=[];
for (const m of mappings) {
  const rows=included.filter(r=>r[10]===m[0]);
  for(const r of rows) statementRows.push([m[0],m[1],r[0],r[1],r[2],r[3],r[4],r[4]*r[5],r[6],r[7],m[3],r[7]*m[3],r[14]]);
  const v=byVendor.find(x=>x[0]===m[0]);
  statementRows.push([m[0],`${m[1]} — STATEMENT TOTAL`,"","","","","","","",v[5],m[3],v[6],"Draft; owner approval required"]);
}
statements.getRange("A2:M2").merge(); statements.getRange("A2").values=[["Per-consignor statement detail — synthetic demo"]];
statements.getRange("A2").format.font={name:font,size:14,bold:true,color:dark};
statements.getRange("A4:M4").values=[["Consignor ID","Consignor / statement","Date","Transaction","SKU","Item","Qty","Gross","Discount","Net sales","Share %","Payout","Note"]];
statements.getRange(`A5:M${4+statementRows.length}`).values=statementRows;

exceptions.getRange("A2:F2").merge(); exceptions.getRange("A2").values=[["Exceptions requiring shop-owner decision — synthetic demo"]];
exceptions.getRange("A2").format.font={name:font,size:14,bold:true,color:dark};
exceptions.getRange("A4:F6").values=[
  ["Severity","Transaction","SKU","Issue","Treatment","Owner action"],
  ["Blocking","SQ-1016","MISC-001","No consignor mapping","Excluded from all payout totals","Identify consignor and split rate, then rerun"],
  ["Review","SQ-1012","DC-018","Refund reduces August payout","Included as negative sale","Confirm refund belongs to this payout period"],
];

transactions.getRange("A2:O2").merge(); transactions.getRange("A2").values=[["Synthetic Square-style transaction export — input fixture"]];
transactions.getRange("A2").format.font={name:font,size:14,bold:true,color:dark};
transactions.getRange("A3:O3").merge(); transactions.getRange("A3").values=[["Not an official Square sample or customer export. Fields are modeled only to demonstrate the manual workflow."]];
transactions.getRange("A3").format.font={name:font,italic:true,color:"#6B7280"};
transactions.getRange("A5:O5").values=[["Date/time","Transaction ID","SKU","Item","Qty","Unit price","Discount","Net item sales","Allocated fee","Tender","Consignor ID","Consignor","Share %","Disposition","Note"]];
transactions.getRange("A6:O23").values=tx;

mapping.getRange("A2:F2").merge(); mapping.getRange("A2").values=[["Synthetic consignor mapping — input fixture"]];
mapping.getRange("A2").format.font={name:font,size:14,bold:true,color:dark};
mapping.getRange("A4:F4").values=[["Consignor ID","Consignor name","SKU prefix","Consignor share %","Payout cadence","Payment reference"]];
mapping.getRange("A5:F14").values=mappings;

for (const [s,headers] of [[summary,["A12:K12","A25:B25","A31:B31","D25:F25"]],[statements,["A4:M4"]],[exceptions,["A4:F4"]],[transactions,["A5:O5"]],[mapping,["A4:F4"]]]) {
  for(const h of headers) s.getRange(h).format={fill:dark,font:{name:font,bold:true,color:"#FFFFFF"},horizontalAlignment:"center",verticalAlignment:"center"};
}
summary.getRange("A5:A10").format={fill:mid,font:{name:font,bold:true,color:dark}};
summary.getRange("A13:K22").format.fill=light;
summary.getRange("A23:K23").format={fill:mid,font:{name:font,bold:true,color:dark}};
summary.getRange("B13:B23").format.font={name:font,bold:true};
summary.getRange("C13:C22").format.numberFormat="0%";
summary.getRange("D13:I23").format.numberFormat="$#,##0.00";
summary.getRange("B26:B33").format.numberFormat="$#,##0.00";
statements.getRange(`H5:L${4+statementRows.length}`).format.numberFormat="$#,##0.00";
statements.getRange(`K5:K${4+statementRows.length}`).format.numberFormat="0%";
transactions.getRange("F6:I23").format.numberFormat="$#,##0.00";
transactions.getRange("M6:M23").format.numberFormat="0%";
mapping.getRange("D5:D14").format.numberFormat="0%";
exceptions.getRange("A5:F6").format.fill=red;

const widths = [14,23,18,19,14,18,20,18,18,12,16,18,18,14,38];
for(const s of [transactions]) widths.forEach((w,i)=>s.getRangeByIndexes(0,i,30,1).format.columnWidth=w);
summary.getRange("A:K").format.columnWidth=17; summary.getRange("A:A").format.columnWidth=28; summary.getRange("B:B").format.columnWidth=26; summary.getRange("D:F").format.columnWidth=32; summary.getRange("G:I").format.columnWidth=19; summary.getRange("J:J").format.columnWidth=10; summary.getRange("K:K").format.columnWidth=16;
summary.getRange("D26:F28").format.wrapText=true; summary.getRange("D26:F28").format.rowHeight=32;
statements.getRange("A:M").format.columnWidth=15; statements.getRange("B:B").format.columnWidth=28; statements.getRange("F:F").format.columnWidth=24; statements.getRange("M:M").format.columnWidth=44;
exceptions.getRange("A:F").format.columnWidth=20; exceptions.getRange("D:F").format.columnWidth=34;
mapping.getRange("A:F").format.columnWidth=22;
for(const s of [summary,statements,exceptions,transactions,mapping]) s.getUsedRange().format.verticalAlignment="middle";
statements.freezePanes.freezeRows(4); transactions.freezePanes.freezeRows(5); mapping.freezePanes.freezeRows(4);

workbook.recalculate();
const inspect = await workbook.inspect({kind:"table",range:"Summary!A12:K23",include:"values,formulas",tableMaxRows:15,tableMaxCols:12});
console.log(inspect.ndjson);
const errors = await workbook.inspect({kind:"match",searchTerm:"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!",options:{useRegex:true,maxResults:100},summary:"final formula error scan"});
console.log(errors.ndjson);
for (const [name,range] of [["summary","A1:K34"],["statements","A1:M35"],["exceptions","A1:F7"],["transactions","A1:O24"],["mapping","A1:F15"]]) {
  const blob=await workbook.render({sheetName:name[0].toUpperCase()+name.slice(1),range,scale:1,format:"png"});
  await fs.writeFile(new URL(`./${name}.png`,outDir),new Uint8Array(await blob.arrayBuffer()));
}
const xlsx=await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(fileURLToPath(new URL("./synthetic-square-payout-pack.xlsx",outDir)));

function csv(rows){return rows.map(r=>r.map(v=>{const s=String(v??"");return /[\",\n]/.test(s)?`"${s.replaceAll('"','""')}"`:s}).join(",")).join("\r\n")+"\r\n"}
await fs.writeFile(new URL("./synthetic-square-transactions.csv",outDir),csv([["SYNTHETIC DATA — NOT A CUSTOMER EXPORT"],["Date/time","Transaction ID","SKU","Item","Qty","Unit price","Discount","Net item sales","Allocated fee","Tender","Consignor ID","Consignor","Share %","Disposition","Note"],...tx]));
await fs.writeFile(new URL("./synthetic-consignor-mapping.csv",outDir),csv([["SYNTHETIC DATA — NOT CUSTOMER INFORMATION"],["Consignor ID","Consignor name","SKU prefix","Consignor share %","Payout cadence","Payment reference"],...mappings]));
await fs.writeFile(new URL("./bookkeeping-summary.csv",outDir),csv([["SYNTHETIC DEMO OUTPUT"],["Metric","Amount"],["Included net item sales",totals[2]],["Consignor payout liability",totals[3]],["Store commission before fees",totals[4]],["Card processing fees shown",totals[5]],["Unmapped rows excluded",1]]));
for(const m of mappings){
  const v=byVendor.find(x=>x[0]===m[0]);
  const rows=included.filter(r=>r[10]===m[0]).map(r=>[r[0],r[1],r[2],r[3],r[4],r[4]*r[5],r[6],r[7],m[3],r[7]*m[3],r[14]]);
  await fs.writeFile(new URL(`./statement-${m[0]}.csv`,outDir),csv([["SYNTHETIC DEMO — DRAFT PAYOUT STATEMENT"],["Consignor",m[1]],["Period","2026-08-01 to 2026-08-31"],["Date","Transaction","SKU","Item","Qty","Gross","Discount","Net sales","Share %","Payout","Note"],...rows,["","","","STATEMENT TOTAL","","","",v[5],m[3],v[6],"Owner approval required"]]));
}
