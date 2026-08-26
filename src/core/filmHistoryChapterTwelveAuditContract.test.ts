import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-twelve-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-twelve-atlas-resolved.json", "utf8")) as {
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
  "King Kong",
  "Modern Times",
  "Snow White and the Seven Dwarfs",
  "The Rules of the Game",
  "Stagecoach",
  "The Wizard of Oz",
  "Citizen Kane",
  "Casablanca",
  "The Public Enemy",
  "Dracula",
  "42nd Street",
  "Scarface",
  "It Happened One Night",
  "Top Hat",
  "Gone with the Wind",
];
const explicitHandoffP0: string[] = [];

const historicalObjectLabels = [
  "Vertically integrated studios, the Big Five and the Little Three",
  "Block booking, theatre ownership and the A/B-picture economy",
  "The Production Code Administration and censorship negotiation",
  "Long-term contracts, stars and studio labor allocation",
  "Departmental specialization and continuity production",
  "Genre cycles, house styles and audience expectation",
  "Backlots, sound stages, location units and standing sets",
  "Technicolor, animation and special-effects pipelines",
  "Guilds, unions, credits and invisible labor",
  "Race, gender, class, colonial myth and representational constraint",
];

test("Chapter 12 audit locks the reviewed studio-and-genre Atlas matrix", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 516;/);
  assert.match(audit, /expectedScenarioId: "scenario_the_public_enemy_1931"/);
  assert.match(audit, /expectedScenarioId: "scenario_dracula_1931"/);
  assert.match(audit, /expectedScenarioId: "scenario_42nd_street_1933"/);
  assert.match(audit, /expectedScenarioId: "scenario_scarface_1932"/);
  assert.match(audit, /expectedScenarioId: "scenario_it_happened_one_night_1934"/);
  assert.match(audit, /expectedScenarioId: "scenario_top_hat_1935"/);
  assert.match(audit, /expectedScenarioId: "scenario_gone_with_the_wind_1939"/);
  assert.equal(resolved.chapter.number, 12);
  assert.equal(resolved.chapter.id, "studio-genre-system");
  assert.equal(resolved.chapter.title, "The studio and genre system");
  assert.equal(resolved.chapter.period, "1930–1945");
  assert.equal(resolved.atlas.expectedCount, 516);
  assert.equal(resolved.atlas.actualCount, 516);
  assert.equal(resolved.candidates.length, 24);
  assert.deepEqual(resolved.byDecision.P0, explicitHandoffP0);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  for (const title of requiredExisting) assert.ok(resolved.byDecision.USE_EXISTING.includes(title), `${title} must remain an existing anchor`);
  for (const title of [...resolved.byDecision.P0, ...resolved.byDecision.P1]) assert.ok(resolved.recommendedNewProductionCases.includes(title));
});

test("Chapter 12 existing anchors resolve to exact canonical scenario IDs", () => {
  const byTitle = new Map(resolved.candidates.map((candidate) => [candidate.title, candidate]));
  assert.equal(byTitle.get("King Kong")?.scenarioId, "scenario_king_kong_1933");
  assert.equal(byTitle.get("Modern Times")?.scenarioId, "scenario_modern_times_1936");
  assert.equal(byTitle.get("Snow White and the Seven Dwarfs")?.scenarioId, "scenario_snow_white_and_the_seven_dwarfs_1937");
  assert.equal(byTitle.get("The Rules of the Game")?.scenarioId, "scenario_the_rules_of_the_game_1939");
  assert.equal(byTitle.get("Stagecoach")?.scenarioId, "scenario_stagecoach_1939");
  assert.equal(byTitle.get("The Wizard of Oz")?.scenarioId, "scenario_the_wizard_of_oz_1939");
  assert.equal(byTitle.get("Citizen Kane")?.scenarioId, "scenario_citizen_kane_1941");
  assert.equal(byTitle.get("Casablanca")?.scenarioId, "scenario_casablanca_1942");
  assert.equal(byTitle.get("The Public Enemy")?.scenarioId, "scenario_the_public_enemy_1931");
  assert.equal(byTitle.get("Dracula")?.scenarioId, "scenario_dracula_1931");
  assert.equal(byTitle.get("42nd Street")?.scenarioId, "scenario_42nd_street_1933");
  assert.equal(byTitle.get("Scarface")?.scenarioId, "scenario_scarface_1932");
  assert.equal(byTitle.get("It Happened One Night")?.scenarioId, "scenario_it_happened_one_night_1934");
  assert.equal(byTitle.get("Top Hat")?.scenarioId, "scenario_top_hat_1935");
  assert.equal(byTitle.get("Gone with the Wind")?.scenarioId, "scenario_gone_with_the_wind_1939");
});

test("Chapter 12 keeps industrial systems outside fake Production Cases", () => {
  assert.equal(resolved.historicalObjects.length, 10);
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), historicalObjectLabels);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
});

test("Chapter 12 permanently preserves labor, Code, genre and representation safeguards", () => {
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Public Enemy") && item.includes("42nd Street")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Rules of the Game") && item.includes("Hollywood")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Gone with the Wind") && item.includes("Lost Cause")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Production Code") && item.includes("PCA")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Genre cycles") && item.includes("determine")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Technicolor") && item.includes("specialized labor")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Race") && item.includes("never rewarded")));
});

test("Chapter 12 audit remains permanent as newer chapter audits extend the v0.1 chain", () => {
  assert.match(packageJson, /"audit:film-history-ch12": "node scripts\/film-history-chapter-twelve-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch11 && npm run audit:film-history-ch12 && npm run audit:film-history-ch13/);
});
