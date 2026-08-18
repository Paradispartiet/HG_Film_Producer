import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-eleven-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-eleven-atlas-resolved.json", "utf8")) as {
  chapter: { number: number; id: string; title: string; period: string };
  atlas: { expectedCount: number; actualCount: number };
  candidates: Array<{ title: string; decision: string; scenarioId: string | null }>;
  byDecision: {
    USE_EXISTING: string[];
    P0: string[];
    P1: string[];
    P2: string[];
    EXISTING_REQUIRED: string[];
  };
  recommendedNewProductionCases: string[];
  historicalObjects: Array<{ label: string; atlasDecision: string }>;
  boundaryNotes: string[];
  safeguards: string[];
};
const packageJson = readFileSync("package.json", "utf8");

const useExisting = ["M", "City Lights", "The Jazz Singer", "Blackmail", "Applause", "The Neighbor's Wife and Mine", "King Kong"];
const p0: string[] = [];
const p1 = ["The Broadway Melody", "Sous les toits de Paris", "Enthusiasm", "The Blue Angel"];
const p2 = [
  "Lights of New York",
  "Hallelujah",
  "The Love Parade",
  "Le Million",
  "The Threepenny Opera",
  "Atlantic",
  "The Congress Dances",
  "Love Me Tonight",
  "I Was Born, But...",
  "The Goddess",
  "Sing-Song Girl Red Peony",
  "Alam Ara",
  "The Public Enemy",
  "Dracula",
  "42nd Street",
];

const historicalObjectLabels = [
  "Vitaphone and sound-on-disc synchronization",
  "Sound-on-film systems: Movietone, Photophone and Tobis-Klangfilm",
  "24fps standardization, camera motors, booths and blimps",
  "Microphones, booms, mixers, dubbing and playback",
  "Theatre wiring, exhibitor capital and dual silent/sound release",
  "Multilingual versions, dubbing, subtitles and accent markets",
  "Music rights, orchestras, playback and the early screen musical",
  "Race, blackface, voice and segregated sound-era markets",
  "Benshi, Shochiku-Phone and Japan's uneven conversion",
  "China and India: uneven infrastructure, sound-on-disc experiments and lost first talkies",
];

test("Chapter 11 audit locks the reviewed sound-transition Atlas matrix", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 426;/);
  assert.match(audit, /expectedScenarioId: "scenario_the_jazz_singer_1927"/);
  assert.match(audit, /expectedScenarioId: "scenario_blackmail_1929"/);
  assert.match(audit, /expectedScenarioId: "scenario_applause_1929"/);
  assert.match(audit, /expectedScenarioId: "scenario_the_neighbors_wife_and_mine_1931"/);
  assert.equal(resolved.chapter.number, 11);
  assert.equal(resolved.chapter.id, "sound-transition");
  assert.equal(resolved.chapter.title, "The sound transition");
  assert.equal(resolved.chapter.period, "1927–1934");
  assert.equal(resolved.atlas.expectedCount, 426);
  assert.equal(resolved.atlas.actualCount, 426);
  assert.equal(resolved.candidates.length, 26);
  assert.deepEqual(resolved.byDecision.USE_EXISTING, useExisting);
  assert.deepEqual(resolved.byDecision.P0, p0);
  assert.deepEqual(resolved.byDecision.P1, p1);
  assert.deepEqual(resolved.byDecision.P2, p2);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.deepEqual(resolved.recommendedNewProductionCases, [...p0, ...p1]);
});

test("Chapter 11 existing anchors resolve to the exact canonical scenario IDs", () => {
  const byTitle = new Map(resolved.candidates.map((candidate) => [candidate.title, candidate]));
  assert.equal(byTitle.get("M")?.scenarioId, "scenario_m_1931");
  assert.equal(byTitle.get("City Lights")?.scenarioId, "scenario_city_lights_1931");
  assert.equal(byTitle.get("King Kong")?.scenarioId, "scenario_king_kong_1933");
  assert.equal(byTitle.get("The Jazz Singer")?.scenarioId, "scenario_the_jazz_singer_1927");
  assert.equal(byTitle.get("Blackmail")?.scenarioId, "scenario_blackmail_1929");
  assert.equal(byTitle.get("Applause")?.scenarioId, "scenario_applause_1929");
  assert.equal(byTitle.get("The Neighbor's Wife and Mine")?.scenarioId, "scenario_the_neighbors_wife_and_mine_1931");
});

test("Chapter 11 keeps sound infrastructure and uneven conversion outside fake Production Cases", () => {
  assert.equal(resolved.historicalObjects.length, 10);
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), historicalObjectLabels);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
});

test("Chapter 11 permanently preserves version, language, archive and representation safeguards", () => {
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Jazz Singer") && item.includes("part-talkie")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Blackmail") && item.includes("silent and sound versions")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("City Lights") && item.includes("synchronized score")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Neighbor's Wife and Mine") && item.includes("benshi")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Alam Ara") && item.includes("archival survival")));
  assert.ok(resolved.safeguards.some((item) => item.includes("industrial transition") && item.includes("different speeds")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Sound-on-disc") && item.includes("sound-on-film")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Silent, part-talkie and full-sound versions")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Multilingual versions") && item.includes("performer/voice labour")));
  assert.ok(resolved.safeguards.some((item) => item.includes("static-camera myth")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Blackface") && item.includes("never performance-quality presets")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Archive survival") && item.includes("lost first talkies")));
});

test("Chapter 11 audit is permanent in the v0.1 verification chain", () => {
  assert.match(packageJson, /"audit:film-history-ch11": "node scripts\/film-history-chapter-eleven-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch10 && npm run audit:film-history-ch11 && npm run typecheck/);
});
