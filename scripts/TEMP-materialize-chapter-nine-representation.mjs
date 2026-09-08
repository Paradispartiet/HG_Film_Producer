import { readFileSync, writeFileSync } from "node:fs";

const path = "data/film/film_history_representation_coverage_v1.json";
const contract = JSON.parse(readFileSync(path, "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(`[chapter-9-representation-materializer] ${message}`);
}

assert(contract.schema === "hg_film_producer_film_history_representation_coverage_v1", "unexpected coverage schema");
assert(contract.status === "OPEN_GAPS_FAIL_CLOSED", "representation audit must remain fail-closed");
assert(contract.baseline?.expected_production_verified_core_scenarios === 613, "613 core invariant changed");
assert(contract.scenario_reviews.length === 37, `expected 37 pre-Chapter-9 reviews, found ${contract.scenario_reviews.length}`);

const modernism = contract.development_matrix.find((row) => row.development_id === "modernism_new_waves_alternative_movements");
const preservation = contract.development_matrix.find((row) => row.development_id === "preservation_restoration_material_survival_as_history_maker");
assert(modernism?.declared_status === 3, "modernism row is not the expected triangulated row");
assert(preservation?.declared_status === 3, "preservation row is not the expected triangulated row");
assert(!modernism.triangulation_basis.includes("Chapter 9 adds"), "Chapter 9 modernism evidence already materialized");
assert(!preservation.triangulation_basis.includes("Chapter 9 adds"), "Chapter 9 preservation evidence already materialized");

modernism.triangulation_basis += " Chapter 9 adds complementary Soviet and Ukrainian montage production systems: Battleship Potemkin anchors Eisensteinian collision and temporal construction to Eduard Tisse's cinematography and deliberate revolutionary reconstruction; Mother contrasts Pudovkin's linkage model inside Mezhrabpom-Russ with named writing, camera and design labor; Man with a Movie Camera anchors Vertov's Kino-Eye and reflexive documentary method to Mikhail Kaufman's cinematography and Elizaveta Svilova's editing; Earth adds VUFKU's distinct Ukrainian production, distribution and education infrastructure; October adds an anniversary commission, Eisenstein/Aleksandrov collaboration and politically compelled recutting; Mr. West adds Kuleshov workshop pedagogy and transnational genre borrowing; and The Fall of the Romanov Dynasty adds Esfir Shub's archival-search and compilation labor inside an anniversary commission. Together the exact cases triangulate Soviet montage as competing, institutionally situated production practices rather than one generic editing style.";

preservation.triangulation_basis += " Chapter 9 adds The Fall of the Romanov Dynasty, where Shub's two-month archival search, reduction of roughly 60,000 metres of source material to about 1,500 metres, and preservation of footage that might otherwise have been lost make archive access, selection and survival part of production authorship and of what later film history can recover.";

const reviews = [
  {
    scenario_id: "scenario_battleship_potemkin_1925",
    review_state: "MAPPED",
    development_ids: ["modernism_new_waves_alternative_movements"],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationSilentFoundationsBatch.ts"],
    rationale: "The verified case anchors Eisensteinian collision montage and temporal expansion to Eduard Tisse's cinematography, a five-movement collective construction and deliberately staged revolutionary reconstruction. This makes Soviet montage legible through named collaborative labor and production practice rather than as a free-floating editing preset."
  },
  {
    scenario_id: "scenario_man_with_a_movie_camera_1929",
    review_state: "MAPPED",
    development_ids: ["modernism_new_waves_alternative_movements"],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationLateSilentEarlySoundBatch.ts"],
    rationale: "The verified Ukrainian SSR case ties Vertov's Kino-Eye and reflexive city-film method to Mikhail Kaufman's cinematography, Elizaveta Svilova's editing, split-screen and superimposition practice, making formal innovation a concrete collaborative production system rather than a style label."
  },
  {
    scenario_id: "scenario_mother_1926",
    review_state: "MAPPED",
    development_ids: ["modernism_new_waves_alternative_movements"],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationSovietMontageBatch.ts"],
    rationale: "The verified Mezhrabpom-Russ case distinguishes Pudovkin's linkage model from Eisensteinian collision while documenting Nathan Zarkhi, Anatoli Golovna and Sergei Kozlovsky alongside Pudovkin. Performance-centered montage is therefore anchored to a production company and named writing, camera and design labor."
  },
  {
    scenario_id: "scenario_the_fall_of_the_romanov_dynasty_1927",
    review_state: "MAPPED",
    development_ids: ["modernism_new_waves_alternative_movements", "preservation_restoration_material_survival_as_history_maker"],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationSovietMontageBatch.ts"],
    rationale: "The verified Shub case documents a 1927 anniversary commission, a two-month archival search, Mark Tseitlin's research/intertitle collaboration and the transformation of roughly 60,000 metres of source material into about 1,500 metres. It maps compilation montage to concrete archival labor while also showing preservation and provenance directly shaping what historical footage survives and can be taught."
  },
  {
    scenario_id: "scenario_earth_1930",
    review_state: "MAPPED",
    development_ids: ["modernism_new_waves_alternative_movements"],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationSovietMontageBatch.ts"],
    rationale: "The verified Dovzhenko case anchors lyrical montage and landscape-centered form to VUFKU, the distinct Ukrainian production, distribution and education infrastructure later dissolved under Moscow centralization. It therefore adds an institutionally specific Ukrainian counterpoint inside the broader Soviet field rather than treating Soviet cinema as uniformly Russian."
  },
  {
    scenario_id: "scenario_october_1928",
    review_state: "MAPPED",
    development_ids: ["modernism_new_waves_alternative_movements"],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationSovietMontageBatch.ts"],
    rationale: "The verified Eisenstein/Aleksandrov case connects intellectual montage to a tenth-anniversary commission and documented political intervention requiring Trotsky references to be removed. Radical form is thus tied to a state-produced commission, collaborative authorship and political recutting rather than treated as autonomous aesthetics."
  },
  {
    scenario_id: "scenario_mr_west_bolsheviks_1924",
    review_state: "MAPPED",
    development_ids: ["modernism_new_waves_alternative_movements"],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationSovietMontageBatch.ts"],
    rationale: "The verified Kuleshov case places constructive screen geography, physical action and montage inside Kuleshov's workshop pedagogy while documenting transnational borrowing from American slapstick and Griffith-era filmmaking. The case therefore links formal theory to workshop practice, performers and a concrete production-learning environment."
  }
];

const existingIds = new Set(contract.scenario_reviews.map((review) => review.scenario_id));
for (const review of reviews) {
  assert(!existingIds.has(review.scenario_id), `duplicate review target: ${review.scenario_id}`);
  contract.scenario_reviews.push(review);
  existingIds.add(review.scenario_id);
}

assert(contract.scenario_reviews.length === 44, `expected 44 post-Chapter-9 reviews, found ${contract.scenario_reviews.length}`);
assert(contract.closure_contract?.selection_may_be_called_representationally_audited === false, "audit closure must remain false");

writeFileSync(path, `${JSON.stringify(contract, null, 2)}\n`);
console.log(JSON.stringify({ status: "MATERIALIZED", scenarioReviews: contract.scenario_reviews.length, added: reviews.map((review) => review.scenario_id) }, null, 2));
