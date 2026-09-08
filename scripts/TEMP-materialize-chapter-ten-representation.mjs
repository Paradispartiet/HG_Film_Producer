import { readFileSync, writeFileSync } from "node:fs";

const path = "data/film/film_history_representation_coverage_v1.json";
const contract = JSON.parse(readFileSync(path, "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(`[chapter-10-representation-materializer] ${message}`);
}

assert(contract.schema === "hg_film_producer_film_history_representation_coverage_v1", "unexpected coverage schema");
assert(contract.status === "OPEN_GAPS_FAIL_CLOSED", "representation audit must remain fail-closed");
assert(contract.baseline?.expected_production_verified_core_scenarios === 613, "613 core invariant changed");
assert(contract.scenario_reviews.length === 44, `expected 44 pre-Chapter-10 reviews, found ${contract.scenario_reviews.length}`);
assert(contract.closure_contract?.selection_may_be_called_representationally_audited === false, "audit closure must remain false");

const byDevelopmentId = new Map(contract.development_matrix.map((row) => [row.development_id, row]));
const modernism = byDevelopmentId.get("modernism_new_waves_alternative_movements");
const transnational = byDevelopmentId.get("decolonial_transnational_historiography");
const nordic = byDevelopmentId.get("nordic_norwegian_silent_and_institution_history");
const exhibition = byDevelopmentId.get("exhibition_and_viewing_history");
const genre = byDevelopmentId.get("genre_industries_horror_action_comedy_romance_exploitation_local_popular");
const japan = byDevelopmentId.get("japan_industry_system");
const china = byDevelopmentId.get("china_industry_system");
const india = byDevelopmentId.get("india_modern_industry_system");
const preservation = byDevelopmentId.get("preservation_restoration_material_survival_as_history_maker");

for (const [name, row] of [["modernism", modernism], ["transnational", transnational], ["nordic", nordic], ["exhibition", exhibition], ["genre", genre], ["japan", japan], ["china", china], ["india", india], ["preservation", preservation]]) {
  assert(row, `missing expected development row: ${name}`);
}
assert(modernism.declared_status === 3, "modernism row is not the expected triangulated row");
assert(transnational.declared_status === 3, "transnational row is not the expected triangulated row");
assert(nordic.declared_status === 3, "Nordic row is not the expected triangulated row");
assert(exhibition.declared_status === 3, "exhibition row is not the expected triangulated row");
assert(genre.declared_status === 3, "genre-industry row is not the expected triangulated row");
assert(japan.declared_status === 0, "Japan industry row is not the expected open row");
assert(china.declared_status === 0, "China industry row is not the expected open row");
assert(india.declared_status === 0, "modern India row changed unexpectedly");
assert(preservation.declared_status === 3, "preservation row is not the expected triangulated row");

for (const row of [modernism, transnational, nordic, exhibition, genre, preservation]) {
  assert(!row.triangulation_basis.includes("Chapter 10 adds"), `${row.development_id} already contains Chapter 10 materialization`);
}
assert(!japan.triangulation_basis, "Japan row already has triangulation evidence");
assert(!china.triangulation_basis, "China row already has triangulation evidence");

const existingById = new Map(contract.scenario_reviews.map((review) => [review.scenario_id, review]));
const afgrunden = existingById.get("scenario_afgrunden_1910");
assert(afgrunden?.review_state === "MAPPED", "Afgrunden must already be reviewed before Chapter 10");
assert(afgrunden.development_ids.includes("nordic_norwegian_silent_and_institution_history"), "Afgrunden Nordic mapping missing");
assert(afgrunden.development_ids.includes("preservation_restoration_material_survival_as_history_maker"), "Afgrunden preservation mapping missing");

modernism.triangulation_basis += " Chapter 10 adds A Page of Madness, where Shinkankakuha collaboration, independent National Art Film production, named camera/lighting/set labor, rapid cutting and subjective optical work tie Japanese modernism to a concrete small-scale production organization and benshi-era presentation rather than to style alone.";
transnational.triangulation_basis += " Chapter 10 adds A Throw of Dice, a Himansu Rai-produced India–Germany–United Kingdom collaboration made on location in India with Indian cast and design agency, German technical labor and UFA/British Instructional Films participation. It adds title-specific co-production, location and later restoration evidence without assigning national purity to the production.";
nordic.triangulation_basis += " Chapter 10 broadens the Nordic evidence beyond the two Danish cases: Growth of the Soil adds Norwegian Norrøna Film production leadership, Nordland location work and Danish circulation; Häxan adds Swedish financing, Danish studio production, unusually high Scandinavian silent-era scale and censorship history; and The Phantom Carriage adds Filmstaden's new-studio infrastructure, Lagerlöf adaptation and Swedish production craft. Together the mapped cases now triangulate Denmark, Norway and Sweden across company scale, studio/location workflow, financing, circulation and film institutions.";
exhibition.triangulation_basis += " Chapter 10 adds the Japanese benshi system through A Page of Madness and Orochi. The former documents release without intertitles in a presentation culture relying on benshi narration, while the latter preserves later benshi commentary and an independent star-company production context. These cases extend viewing history beyond Euro-American projection/programming models into a distinct Japanese live-presentation practice.";
genre.triangulation_basis += " Chapter 10 adds two East Asian popular-genre production systems: Orochi links the shift toward action-oriented chanbara to Bantsuma independent star-company economics, studio formation and action craft, while The Red Heroine anchors wuxia to Youlian Film Company's thirteen-part serial production and surviving-section evidence. The genre row therefore gains company- and workflow-specific Asian popular production rather than nationality or genre labels alone.";
preservation.triangulation_basis += " Chapter 10 adds a concentrated silent-cinema survival layer: A Page of Madness survives in a rediscovered version not identical to its original release; Laborer's Love is the earliest-known surviving complete Chinese-made film and has a documented 4K restoration; Growth of the Soil was long treated as lost and reconstructed from incomplete archive finds; Orochi combines Bando's preservation of the negative with a modern NFAJ-supervised 4K restoration; The Red Heroine survives as only one section of a thirteen-part serial with materially different archive presentation states; Häxan's restoration uses duplicate negatives, interpositive/nitrate evidence and period colour instructions; and The Phantom Carriage has a documented institute-supported restoration and versioned musical presentation. The cases show rediscovery, fragmentary survival, negative custody, restoration evidence and presentation-state differences directly changing what silent-film history can recover and teach.";

japan.declared_status = 3;
japan.triangulation_basis = "A Page of Madness and Orochi provide two complementary exact Japanese industry cases. A Page of Madness documents independent production through National Art Film and the Shinkankakuha Eiga Renmei, named collaborative craft and benshi-era exhibition around an experimental modernist feature. Orochi contrasts this with Tsumasaburo Bando's pioneering independent star-company production, subsequent studio infrastructure and the action-oriented chanbara transition. Together they triangulate independent organization, star-producer economics, studio formation, genre production and exhibition practice with title-specific evidence.";

china.declared_status = 3;
china.triangulation_basis = "Laborer's Love and The Red Heroine provide two complementary exact Mainland Chinese industrial-institution cases. Laborer's Love anchors Mingxing's March 1922 Shanghai formation, its first short-comedy production phase and original bilingual Chinese-English intertitles to a surviving title. The Red Heroine contrasts Youlian Film Company's wuxia serial production, named camera/design labor and the surviving section of a thirteen-part production. Together they triangulate two distinct Shanghai-era company systems and production workflows rather than treating Chinese nationality alone as industrial coverage.";

const reviews = [
  {
    scenario_id: "scenario_a_page_of_madness_1926",
    review_state: "MAPPED",
    development_ids: [
      "modernism_new_waves_alternative_movements",
      "japan_industry_system",
      "exhibition_and_viewing_history",
      "preservation_restoration_material_survival_as_history_maker"
    ],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationAPageOfMadness.ts"],
    rationale: "The verified Kinugasa case documents independent National Art Film/Shinkankakuha production, named writing/camera/lighting/set labor, rapid cutting and optical modernism, benshi-era presentation without ordinary intertitles, and a rediscovered surviving version that is not identical to the original release. It therefore maps Japanese industry, production-situated modernism, exhibition practice and material survival through exact evidence."
  },
  {
    scenario_id: "scenario_laborers_love_1922",
    review_state: "MAPPED",
    development_ids: [
      "china_industry_system",
      "preservation_restoration_material_survival_as_history_maker"
    ],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationLaborersLove.ts"],
    rationale: "The verified 1922 Mingxing case documents the company's Shanghai formation and first short-comedy production phase, original bilingual Chinese-English intertitles and specific production craft. Its status as the earliest-known surviving complete Chinese-made film plus documented digital/4K restoration also makes material survival and archive recovery part of the historical evidence."
  },
  {
    scenario_id: "scenario_a_throw_of_dice_1929",
    review_state: "MAPPED",
    development_ids: ["decolonial_transnational_historiography"],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationAThrowOfDice.ts"],
    rationale: "The verified Rai–Osten case documents an India–Germany–United Kingdom production through Himansu Rai Film, UFA and British Instructional Films, Indian location shooting and cast/design agency alongside German technical collaboration. It is exact transnational co-production evidence, while the separate modern-India industry gap remains fail-closed because this 1929 case does not establish the required modern language-market, financing, distribution or digital system."
  },
  {
    scenario_id: "scenario_growth_of_the_soil_1921",
    review_state: "MAPPED",
    development_ids: [
      "nordic_norwegian_silent_and_institution_history",
      "preservation_restoration_material_survival_as_history_maker"
    ],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationGrowthOfTheSoil.ts"],
    rationale: "The verified Norwegian Norrøna Film case identifies Gunnar Sommerfeldt's production leadership, George Schnéevoigt's Nordland location cinematography, Leif Halvorsen's 1921 film music and later Danish circulation. The film's long lost status and reconstruction from incomplete archive finds make it direct evidence for both Norwegian/Nordic production history and preservation-shaped historical recovery."
  },
  {
    scenario_id: "scenario_orochi_1925",
    review_state: "MAPPED",
    development_ids: [
      "japan_industry_system",
      "genre_industries_horror_action_comedy_romance_exploitation_local_popular",
      "exhibition_and_viewing_history",
      "preservation_restoration_material_survival_as_history_maker"
    ],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationOrochi.ts"],
    rationale: "The verified Orochi case ties Bando's independent star-company move and subsequent studio infrastructure to the transition toward action-oriented chanbara, named craft labor and specific tracking/editing practice. Benshi presentation history, Bando's preservation of the negative and a later NFAJ-supervised 4K restoration additionally anchor exhibition and material-survival history without confusing later narration with synchronized 1925 sound."
  },
  {
    scenario_id: "scenario_the_red_heroine_1929",
    review_state: "MAPPED",
    development_ids: [
      "china_industry_system",
      "genre_industries_horror_action_comedy_romance_exploitation_local_popular",
      "preservation_restoration_material_survival_as_history_maker"
    ],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationRedHeroine.ts"],
    rationale: "The verified Youlian Film Company case anchors Chinese wuxia to a concrete thirteen-part serial production, Wen Yimin's direction/writing, named cinematography/design and stunt/set mechanisms. Because only one serial section survives and archive presentations materially differ in runtime and restoration state, the case also demonstrates preservation bias while adding a distinct Chinese industrial institution and popular-genre workflow."
  },
  {
    scenario_id: "scenario_haxan_1922",
    review_state: "MAPPED",
    development_ids: [
      "nordic_norwegian_silent_and_institution_history",
      "preservation_restoration_material_survival_as_history_maker"
    ],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationHaxan.ts"],
    rationale: "The verified Häxan case documents Swedish financing, Danish studio production, Svenska Biografteatern, unusually high silent-era Scandinavian production scale, named craft labor and censorship history. Its restoration from duplicate negatives, interpositive/nitrate evidence and period tinting/toning instructions directly shows how archive materials determine the recoverable historical presentation."
  },
  {
    scenario_id: "scenario_the_phantom_carriage_1921",
    review_state: "MAPPED",
    development_ids: [
      "nordic_norwegian_silent_and_institution_history",
      "preservation_restoration_material_survival_as_history_maker"
    ],
    evidence_paths: ["src/ui/data/scenarioProductionVerificationSilentStudioSystemsBatch.ts"],
    rationale: "The verified Swedish Filmstaden case documents the new-studio production context, Lagerlöf adaptation, named cinematography/art-direction labor, nested flashbacks and layered in-camera double exposure. Institute-supported restoration and versioned musical presentation provide inspectable preservation history, strengthening Nordic institutional coverage without creating a duplicate Production Case identity."
  }
];

const existingIds = new Set(contract.scenario_reviews.map((review) => review.scenario_id));
for (const review of reviews) {
  assert(!existingIds.has(review.scenario_id), `duplicate review target: ${review.scenario_id}`);
  contract.scenario_reviews.push(review);
  existingIds.add(review.scenario_id);
}

assert(contract.scenario_reviews.length === 52, `expected 52 post-Chapter-10 reviews, found ${contract.scenario_reviews.length}`);
assert(japan.declared_status === 3, "Japan industry status did not reach triangulated coverage");
assert(china.declared_status === 3, "China industry status did not reach triangulated coverage");
assert(india.declared_status === 0, "modern India gap must remain fail-closed");
assert(contract.status === "OPEN_GAPS_FAIL_CLOSED", "overall audit status changed unexpectedly");
assert(contract.closure_contract?.selection_may_be_called_representationally_audited === false, "audit closure must remain false");

writeFileSync(path, `${JSON.stringify(contract, null, 2)}\n`);
console.log(JSON.stringify({
  status: "MATERIALIZED",
  scenarioReviews: contract.scenario_reviews.length,
  added: reviews.map((review) => review.scenario_id),
  statusChanges: {
    japan_industry_system: japan.declared_status,
    china_industry_system: china.declared_status,
    india_modern_industry_system: india.declared_status
  }
}, null, 2));
