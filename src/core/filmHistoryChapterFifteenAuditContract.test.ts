import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-fifteen-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-fifteen-atlas-resolved.json", "utf8")) as {
  chapter: { number: number; id: string; title: string; period: string };
  atlas: { expectedCount: number; actualCount: number };
  candidates: Array<{ title: string; decision: string; scenarioId: string | null }>;
  byDecision: { USE_EXISTING: string[]; P0: string[]; P1: string[]; P2: string[]; EXISTING_REQUIRED: string[] };
  recommendedNewProductionCases: string[];
  historicalObjects: Array<{ label: string; atlasDecision: string }>;
  boundaryNotes: string[];
  safeguards: string[];
};
const packageJson = readFileSync("package.json", "utf8");

const requiredExisting = [
  "Bonnie and Clyde",
  "Memories of Underdevelopment",
  "The Cremator",
  "Kes",
  "The Conformist",
  "A Clockwork Orange",
  "The Godfather",
  "Aguirre, the Wrath of God",
  "Mean Streets",
  "Amarcord",
  "The Spirit of the Beehive",
  "Touki Bouki",
  "Scenes from a Marriage",
  "Ali: Fear Eats the Soul",
  "Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles",
  "Jaws",
  "Dog Day Afternoon",
  "Manila in the Claws of Light",
  "The Battle of Chile: Part I",
  "Cría cuervos",
  "Taxi Driver",
  "Killer of Sheep",
  "Star Wars",
  "The Marriage of Maria Braun",
];
const exactP0Queue: string[] = [];
const exactP1Queue: string[] = [];

const historicalObjectLabels = [
  "New Hollywood as an industrial transition",
  "Ratings, censorship and contested representation",
  "Conglomerates, packages and producer power",
  "Location production and regional specificity",
  "Television, public funding and co-production",
  "Feminist modernism and gendered labor",
  "Black American independent production and the L.A. Rebellion",
  "Third Cinema, revolutionary documentary and political circulation",
  "Blockbuster production, distribution and exhibition",
  "Special effects, sound and post-production infrastructure",
];

test("Chapter 15 audit locks the New Hollywood-political cinemas-blockbuster Atlas scope", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 509;/);
  assert.equal(resolved.chapter.number, 15);
  assert.equal(resolved.chapter.id, "new-hollywood-political-cinemas-blockbuster-transformation");
  assert.equal(resolved.chapter.title, "New Hollywood, political cinemas and blockbuster transformation");
  assert.equal(resolved.chapter.period, "1969–1979");
  assert.equal(resolved.atlas.expectedCount, 509);
  assert.equal(resolved.atlas.actualCount, 509);
  assert.equal(resolved.candidates.length, 28);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.deepEqual(resolved.byDecision.P0, exactP0Queue);
  assert.deepEqual(resolved.byDecision.P1, exactP1Queue);
  assert.deepEqual(resolved.recommendedNewProductionCases, [...exactP0Queue, ...exactP1Queue]);
  for (const title of requiredExisting) assert.ok(resolved.byDecision.USE_EXISTING.includes(title), `${title} must remain an existing anchor`);
});

test("Chapter 15 existing anchors resolve to exact canonical scenario IDs", () => {
  const byTitle = new Map(resolved.candidates.map((candidate) => [candidate.title, candidate]));
  assert.equal(byTitle.get("Bonnie and Clyde")?.scenarioId, "scenario_bonnie_and_clyde_1967");
  assert.equal(byTitle.get("Memories of Underdevelopment")?.scenarioId, "scenario_memories_of_underdevelopment_1968");
  assert.equal(byTitle.get("The Cremator")?.scenarioId, "scenario_the_cremator_1969");
  assert.equal(byTitle.get("Kes")?.scenarioId, "scenario_kes_1969");
  assert.equal(byTitle.get("The Conformist")?.scenarioId, "scenario_the_conformist_1970");
  assert.equal(byTitle.get("A Clockwork Orange")?.scenarioId, "scenario_a_clockwork_orange_1971");
  assert.equal(byTitle.get("The Godfather")?.scenarioId, "scenario_the_godfather_1972");
  assert.equal(byTitle.get("Aguirre, the Wrath of God")?.scenarioId, "scenario_aguirre_the_wrath_of_god_1972");
  assert.equal(byTitle.get("Mean Streets")?.scenarioId, "scenario_mean_streets_1973");
  assert.equal(byTitle.get("Amarcord")?.scenarioId, "scenario_amarcord_1973");
  assert.equal(byTitle.get("The Spirit of the Beehive")?.scenarioId, "scenario_the_spirit_of_the_beehive_1973");
  assert.equal(byTitle.get("Touki Bouki")?.scenarioId, "scenario_touki_bouki_1973");
  assert.equal(byTitle.get("Scenes from a Marriage")?.scenarioId, "scenario_scenes_from_a_marriage_1974");
  assert.equal(byTitle.get("Ali: Fear Eats the Soul")?.scenarioId, "scenario_ali_fear_eats_the_soul_1974");
  assert.equal(byTitle.get("Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles")?.scenarioId, "scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975");
  assert.equal(byTitle.get("Jaws")?.scenarioId, "scenario_jaws_1975");
  assert.equal(byTitle.get("Dog Day Afternoon")?.scenarioId, "scenario_dog_day_afternoon_1975");
  assert.equal(byTitle.get("Manila in the Claws of Light")?.scenarioId, "scenario_manila_in_the_claws_of_light_1975");
  assert.equal(byTitle.get("The Battle of Chile: Part I")?.scenarioId, "scenario_the_battle_of_chile_part_i_1975");
  assert.equal(byTitle.get("Cría cuervos")?.scenarioId, "scenario_cria_cuervos_1976");
  assert.equal(byTitle.get("Taxi Driver")?.scenarioId, "scenario_taxi_driver_1976");
  assert.equal(byTitle.get("Killer of Sheep")?.scenarioId, "scenario_killer_of_sheep_1977");
  assert.equal(byTitle.get("Star Wars")?.scenarioId, "scenario_star_wars_1977");
  assert.equal(byTitle.get("The Marriage of Maria Braun")?.scenarioId, "scenario_the_marriage_of_maria_braun_1979");
});

test("Chapter 15 keeps industrial and political systems outside fake Production Cases", () => {
  assert.equal(resolved.historicalObjects.length, 10);
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), historicalObjectLabels);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
});

test("Chapter 15 permanently preserves plurality, labor, politics and blockbuster safeguards", () => {
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("New Hollywood") && item.includes("European modernism")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Jaws-Star Wars") && item.includes("production-distribution-exhibition")));
  assert.ok(resolved.safeguards.some((item) => item.includes("New Hollywood") && item.includes("Producers")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Political cinema") && item.includes("collective labor")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Black American independent cinema") && item.includes("university infrastructure")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Feminist film history") && item.includes("labor")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Blockbuster") && item.includes("Release pattern")));
});

test("Chapter 15 audit is permanent in the v0.1 verification chain", () => {
  assert.match(packageJson, /"audit:film-history-ch15": "node scripts\/film-history-chapter-fifteen-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch14 && npm run audit:film-history-ch15/);
});
