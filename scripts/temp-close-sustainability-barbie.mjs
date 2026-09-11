import { readFileSync, writeFileSync } from "node:fs";

const coveragePath = "data/film/film_history_representation_coverage_v1.json";
const barbiePath = "src/ui/data/scenarioProductionVerificationBarbie.ts";
const developmentId = "sustainable_production_and_carbon_constraints";
const scenarioId = "scenario_barbie_2023";

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

const coverage = JSON.parse(readFileSync(coveragePath, "utf8"));
invariant(coverage.baseline?.expected_production_verified_core_scenarios === 614, "Expected frozen 614 core");

const development = coverage.development_matrix.find((item) => item.development_id === developmentId);
invariant(development, `Missing development ${developmentId}`);
invariant(development.priority === "P1", `Unexpected priority: ${development.priority}`);
invariant(development.declared_status === 0, `Expected sustainability status 0, found ${development.declared_status}`);
development.declared_status = 2;
development.coverage_basis = "Barbie (2023) supplies one exact production-verified case with measured and rule-bound sustainability evidence from Warner Bros. Discovery's 2023 Sustainability Report. WBD documents that approximately 85% of all power used during the U.K. shoot came from house power, with the vast majority used at Warner Bros. Studios Leavesden on a 100% renewable energy tariff; the same production record documents reuse and donation of production materials and predominantly second-hand costumes returned to charity shops. These are concrete energy, materials and procurement changes inside an exact scenario, satisfying status 2. Status 3 is not claimed without a complementary second production system.";

const review = coverage.scenario_reviews.find((item) => item.scenario_id === scenarioId);
invariant(review, `Missing scenario review ${scenarioId}`);
invariant(review.review_state === "REVIEWED_NO_MAPPING", `Expected Barbie REVIEWED_NO_MAPPING, found ${review.review_state}`);
invariant(Array.isArray(review.development_ids) && review.development_ids.length === 0, "Expected Barbie to have no prior development mappings");
review.review_state = "MAPPED";
review.development_ids = [developmentId];
review.rationale = "Barbie is exact USE_EXISTING and production-verified in the Chapter 19 atlas. Its canonical Production Verification now includes Warner Bros. Discovery's institutional sustainability report, which measures approximately 85% house-power use during the U.K. shoot, ties most of that use to Leavesden's 100% renewable energy tariff, and documents production-material reuse/donation and predominantly second-hand costume procurement. This directly satisfies the sustainability development's measured-or-rule-bound energy, materials and procurement requirement, so Barbie is mapped to sustainable_production_and_carbon_constraints at status 2 only.";

const remainingP1Status0 = coverage.development_matrix.filter((item) => item.priority === "P1" && item.declared_status === 0);
invariant(remainingP1Status0.length === 0, `P1 status-0 developments remain: ${remainingP1Status0.map((item) => item.development_id).join(", ")}`);
writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`);

let barbie = readFileSync(barbiePath, "utf8");
const summaryAnchor = "Complete budget/finance, exact shoot days, full camera/light/data inventory, construction/prop/costume ledgers, VFX census, edit infrastructure, audio-post chain and complete music licensing/session records remain unresolved.";
invariant(barbie.includes(summaryAnchor), "Barbie summary anchor not found");
barbie = barbie.replace(summaryAnchor, "Warner Bros. Discovery's 2023 Sustainability Report additionally documents approximately 85% house-power use during the U.K. shoot, mostly at Leavesden on a 100% renewable energy tariff, plus production-material reuse/donation and predominantly second-hand costume procurement. Complete budget/finance, exact shoot days, full camera/light/data inventory, construction/prop/costume ledgers, VFX census, edit infrastructure, audio-post chain and complete music licensing/session records remain unresolved.");

const sourceAnchor = "    { title: \"Barbie Audio Team Joins Mix Presents Sound for Film\", publisher: \"Mix\", url: \"https://www.mixonline.com/business/barbie-audio-team-joins-mix-presents-sound-for-film-awards-season\", sourceKind: \"trade_feature\", supports: [\"sound\"], note: \"Trade source identifying the sound-post/re-recording team without implying a complete audio ledger.\" }";
invariant(barbie.includes(sourceAnchor), "Barbie source insertion anchor not found");
const sustainabilitySource = "    { title: \"2023 Sustainability Report\", publisher: \"Warner Bros. Discovery\", url: \"https://www.wbd.com/wp-content/uploads/2024/04/FINAL-WBD-2023-Sustainability-Report.pdf\", sourceKind: \"institutional_report\", supports: [\"overall\"], note: \"Official WBD report documenting approximately 85% of all power during the U.K. shoot from house power, with the vast majority used at Warner Bros. Studios Leavesden on a 100% renewable energy tariff, plus reused/donated production materials and predominantly second-hand costumes returned to charity shops.\" },\n";
barbie = barbie.replace(sourceAnchor, sustainabilitySource + sourceAnchor);
writeFileSync(barbiePath, barbie);

console.log(JSON.stringify({
  core: coverage.baseline.expected_production_verified_core_scenarios,
  development: { id: development.development_id, status: development.declared_status },
  review: { scenarioId: review.scenario_id, state: review.review_state, developmentIds: review.development_ids },
  remainingP1Status0: remainingP1Status0.length,
}, null, 2));
