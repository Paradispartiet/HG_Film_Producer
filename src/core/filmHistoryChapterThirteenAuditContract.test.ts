import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-thirteen-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-thirteen-atlas-resolved.json", "utf8")) as {
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
  "The Maltese Falcon",
  "Double Indemnity",
  "Brief Encounter",
  "Rome, Open City",
  "Bicycle Thieves",
  "The Third Man",
  "Rashomon",
  "Tokyo Story",
  "Seven Samurai",
  "La Strada",
  "Pather Panchali",
  "Ordet",
  "The Night of the Hunter",
  "The Seventh Seal",
  "Ashes and Diamonds",
  "Touch of Evil",
  "Vertigo",
  "Paisan",
  "The Red Shoes",
  "Sunset Boulevard",
  "Los olvidados",
  "Ugetsu",
  "A Man Escaped",
];
const exactP1Queue: string[] = [];

const historicalObjectLabels = [
  "War, occupation, liberation and reconstruction",
  "Film noir as a retrospective critical category",
  "Italian neorealism and the politics of realism",
  "Postwar studio continuity and independent production",
  "Location production, post-synchronization and mobile units",
  "Festivals, subtitling, export and art-cinema circulation",
  "Decolonization, national cinemas and transnational exchange",
  "Black-and-white, color, widescreen and special-process coexistence",
  "Cold War institutions, censorship and social-problem filmmaking",
  "Race, class, gender, empire, trauma and memory",
];

test("Chapter 13 audit locks the postwar noir-realism-reconstruction Atlas scope", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 521;/);
  assert.equal(resolved.chapter.number, 13);
  assert.equal(resolved.chapter.id, "postwar-noir-realism-reconstruction");
  assert.equal(resolved.chapter.title, "Postwar noir, realism and reconstruction");
  assert.equal(resolved.chapter.period, "1944–1959");
  assert.equal(resolved.atlas.expectedCount, 521);
  assert.equal(resolved.atlas.actualCount, 521);
  assert.equal(resolved.candidates.length, 31);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.deepEqual(resolved.byDecision.P0, []);
  assert.deepEqual(resolved.byDecision.P1, exactP1Queue);
  assert.deepEqual(resolved.recommendedNewProductionCases, exactP1Queue);
  for (const title of requiredExisting) assert.ok(resolved.byDecision.USE_EXISTING.includes(title), `${title} must remain an existing anchor`);
});

test("Chapter 13 required anchors resolve to exact canonical scenario IDs", () => {
  const byTitle = new Map(resolved.candidates.map((candidate) => [candidate.title, candidate]));
  assert.equal(byTitle.get("The Maltese Falcon")?.scenarioId, "scenario_the_maltese_falcon_1941");
  assert.equal(byTitle.get("Double Indemnity")?.scenarioId, "scenario_double_indemnity_1944");
  assert.equal(byTitle.get("Brief Encounter")?.scenarioId, "scenario_brief_encounter_1945");
  assert.equal(byTitle.get("Rome, Open City")?.scenarioId, "scenario_rome_open_city_1945");
  assert.equal(byTitle.get("Bicycle Thieves")?.scenarioId, "scenario_bicycle_thieves_1948");
  assert.equal(byTitle.get("The Third Man")?.scenarioId, "scenario_the_third_man_1949");
  assert.equal(byTitle.get("Rashomon")?.scenarioId, "scenario_rashomon_1950");
  assert.equal(byTitle.get("Tokyo Story")?.scenarioId, "scenario_tokyo_story_1953");
  assert.equal(byTitle.get("Seven Samurai")?.scenarioId, "scenario_seven_samurai_1954");
  assert.equal(byTitle.get("La Strada")?.scenarioId, "scenario_la_strada_1954");
  assert.equal(byTitle.get("Pather Panchali")?.scenarioId, "scenario_pather_panchali_1955");
  assert.equal(byTitle.get("Ordet")?.scenarioId, "scenario_ordet_1955");
  assert.equal(byTitle.get("The Night of the Hunter")?.scenarioId, "scenario_the_night_of_the_hunter_1955");
  assert.equal(byTitle.get("The Seventh Seal")?.scenarioId, "scenario_the_seventh_seal_1957");
  assert.equal(byTitle.get("Ashes and Diamonds")?.scenarioId, "scenario_ashes_and_diamonds_1958");
  assert.equal(byTitle.get("Touch of Evil")?.scenarioId, "scenario_touch_of_evil_1958");
  assert.equal(byTitle.get("Vertigo")?.scenarioId, "scenario_vertigo_1958");
  assert.equal(byTitle.get("Paisan")?.scenarioId, "scenario_paisan_1946");
  assert.equal(byTitle.get("The Red Shoes")?.scenarioId, "scenario_the_red_shoes_1948");
  assert.equal(byTitle.get("Sunset Boulevard")?.scenarioId, "scenario_sunset_boulevard_1950");
  assert.equal(byTitle.get("Los olvidados")?.scenarioId, "scenario_los_olvidados_1950");
  assert.equal(byTitle.get("Ugetsu")?.scenarioId, "scenario_ugetsu_1953");
  assert.equal(byTitle.get("A Man Escaped")?.scenarioId, "scenario_a_man_escaped_1956");
});

test("Chapter 13 keeps historical systems outside fake Production Cases", () => {
  assert.equal(resolved.historicalObjects.length, 10);
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), historicalObjectLabels);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
});

test("Chapter 13 permanently preserves realism, noir, circulation and decolonization safeguards", () => {
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Maltese Falcon") && item.includes("Double Indemnity")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Rashomon") && item.includes("Pather Panchali")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Chapter 14") && item.includes("400 Blows")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Realism") && item.includes("craft")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Film noir") && item.includes("retrospective")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Festivals") && item.includes("canonization")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Decolonization") && item.includes("Trauma")));
});

test("Chapter 13 audit is permanent in the v0.1 verification chain", () => {
  assert.match(packageJson, /"audit:film-history-ch13": "node scripts\/film-history-chapter-thirteen-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch12 && npm run audit:film-history-ch13 && npm run audit:film-history-ch14/);
});
