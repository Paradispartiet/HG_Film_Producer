import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-fourteen-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-fourteen-atlas-resolved.json", "utf8")) as {
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
  "Hiroshima mon amour",
  "The 400 Blows",
  "Breathless",
  "L'Avventura",
  "Last Year at Marienbad",
  "Jules and Jim",
  "Cléo from 5 to 7",
  "8½",
  "Contempt",
  "The Leopard",
  "The Umbrellas of Cherbourg",
  "Black Girl",
  "The Battle of Algiers",
  "Closely Watched Trains",
  "Daisies",
  "The Firemen's Ball",
  "PlayTime",
  "Memories of Underdevelopment",
];
const exactP0Queue: string[] = [];
const exactP1Queue: string[] = [];

const historicalObjectLabels = [
  "French New Wave as a critical and industrial formation",
  "Auteur criticism and production authorship",
  "Lightweight cameras, faster stocks and portable sound",
  "Location production and the transformed city",
  "Modernist time, space and narration",
  "Festivals, cinematheques, subtitling and art-cinema distribution",
  "State support, television and co-production",
  "Decolonization and revolutionary cinema",
  "New Waves beyond France",
  "Censorship, gender, race and political conflict",
];

test("Chapter 14 audit locks the New Waves-modernism-decolonization Atlas scope", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 486;/);
  assert.equal(resolved.chapter.number, 14);
  assert.equal(resolved.chapter.id, "new-waves-modernism-decolonization");
  assert.equal(resolved.chapter.title, "New Waves, modernism and decolonization");
  assert.equal(resolved.chapter.period, "1959–1968");
  assert.equal(resolved.atlas.expectedCount, 486);
  assert.equal(resolved.atlas.actualCount, 486);
  assert.equal(resolved.candidates.length, 18);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.deepEqual(resolved.byDecision.P0, exactP0Queue);
  assert.deepEqual(resolved.byDecision.P1, exactP1Queue);
  assert.deepEqual(resolved.recommendedNewProductionCases, [...exactP0Queue, ...exactP1Queue]);
  for (const title of requiredExisting) assert.ok(resolved.byDecision.USE_EXISTING.includes(title), `${title} must remain an existing anchor`);
});

test("Chapter 14 existing anchors resolve to exact canonical scenario IDs", () => {
  const byTitle = new Map(resolved.candidates.map((candidate) => [candidate.title, candidate]));
  assert.equal(byTitle.get("Hiroshima mon amour")?.scenarioId, "scenario_hiroshima_mon_amour_1959");
  assert.equal(byTitle.get("The 400 Blows")?.scenarioId, "scenario_the_400_blows_1959");
  assert.equal(byTitle.get("Breathless")?.scenarioId, "scenario_breathless_1960");
  assert.equal(byTitle.get("L'Avventura")?.scenarioId, "scenario_l_avventura_1960");
  assert.equal(byTitle.get("Last Year at Marienbad")?.scenarioId, "scenario_last_year_at_marienbad_1961");
  assert.equal(byTitle.get("Jules and Jim")?.scenarioId, "scenario_jules_and_jim_1962");
  assert.equal(byTitle.get("Cléo from 5 to 7")?.scenarioId, "scenario_cleo_from_5_to_7_1962");
  assert.equal(byTitle.get("8½")?.scenarioId, "scenario_8_1_2_1963");
  assert.equal(byTitle.get("Contempt")?.scenarioId, "scenario_contempt_1963");
  assert.equal(byTitle.get("The Leopard")?.scenarioId, "scenario_the_leopard_1963");
  assert.equal(byTitle.get("The Umbrellas of Cherbourg")?.scenarioId, "scenario_the_umbrellas_of_cherbourg_1964");
  assert.equal(byTitle.get("Black Girl")?.scenarioId, "scenario_black_girl_1966");
  assert.equal(byTitle.get("The Battle of Algiers")?.scenarioId, "scenario_the_battle_of_algiers_1966");
  assert.equal(byTitle.get("Closely Watched Trains")?.scenarioId, "scenario_closely_watched_trains_1966");
  assert.equal(byTitle.get("Daisies")?.scenarioId, "scenario_daisies_1966");
  assert.equal(byTitle.get("The Firemen's Ball")?.scenarioId, "scenario_the_firemens_ball_1967");
  assert.equal(byTitle.get("PlayTime")?.scenarioId, "scenario_playtime_1967");
  assert.equal(byTitle.get("Memories of Underdevelopment")?.scenarioId, "scenario_memories_of_underdevelopment_1968");
});

test("Chapter 14 keeps historical systems outside fake Production Cases", () => {
  assert.equal(resolved.historicalObjects.length, 10);
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), historicalObjectLabels);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
});

test("Chapter 14 permanently preserves plurality, production labor and decolonization safeguards", () => {
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Cahiers") && item.includes("Left Bank")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Czechoslovak") && item.includes("Senegalese") && item.includes("Cuban")));
  assert.ok(resolved.safeguards.some((item) => item.includes("camera preset")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Decolonization") && item.includes("material political history")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Festivals") && item.includes("downstream")));
});

test("Chapter 14 audit is permanent in the v0.1 verification chain", () => {
  assert.match(packageJson, /"audit:film-history-ch14": "node scripts\/film-history-chapter-fourteen-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch13 && npm run audit:film-history-ch14 && npm run audit:film-history-ch15/);
});
