import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-ten-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-ten-atlas-resolved.json", "utf8")) as {
  atlas: { expectedCount: number; actualCount: number };
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

const p0: string[] = [];
const p1 = ["Häxan"];
const p2 = [
  "Crossroads",
  "El automóvil gris",
  "Erotikon",
  "Gösta Berling's Saga",
  "Ingeborg Holm",
  "Kaliya Mardan",
  "Raja Harishchandra",
  "Shiraz",
  "Sir Arne's Treasure",
  "Souls on the Road",
  "The Burning of the Red Lotus Temple",
  "The Light of Asia",
  "The Outlaw and His Wife",
  "The Romance of the Western Chamber",
  "The Sentimental Bloke",
];

const historicalObjectLabels = [
  "Benshi, live narration, intertitles and silent-era accompaniment",
  "Japanese studios, independent star companies, jidaigeki and chanbara production",
  "Shanghai studios, Mingxing/Minxin networks and urban Chinese modernity",
  "Wuxia serial culture, special effects, censorship and fragment survival",
  "Phalke, mythological production and early Indian studio formation",
  "Himansu Rai, Franz Osten and transnational Indian-European co-production",
  "Swedish golden-age studios, literary adaptation and landscape aesthetics",
  "Danish Nordisk, Asta Nielsen and Scandinavian transnational circulation",
  "Norwegian silent production, literary prestige and location culture",
  "Nitrate loss, incomplete survival, archive reconstruction and canon bias",
];

test("Chapter 10 audit locks the reviewed silent-cinemas Atlas matrix", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 421;/);
  assert.match(audit, /expectedScenarioId: "scenario_a_page_of_madness_1926"/);
  assert.match(audit, /expectedScenarioId: "scenario_laborers_love_1922"/);
  assert.match(audit, /expectedScenarioId: "scenario_a_throw_of_dice_1929"/);
  assert.match(audit, /expectedScenarioId: "scenario_growth_of_the_soil_1921"/);
  assert.match(audit, /expectedScenarioId: "scenario_orochi_1925"/);
  assert.match(audit, /expectedScenarioId: "scenario_the_red_heroine_1929"/);
  assert.match(audit, /number: 10,/);
  assert.match(audit, /title: "Silent cinemas beyond the usual canon"/);
  assert.match(audit, /period: "1910s–1929"/);
  assert.equal(resolved.atlas.expectedCount, 421);
  assert.equal(resolved.atlas.actualCount, 421);
  assert.deepEqual(resolved.byDecision.USE_EXISTING, ["A Page of Madness", "Laborer's Love", "A Throw of Dice", "Growth of the Soil", "Orochi", "The Red Heroine", "Afgrunden", "The Phantom Carriage"]);
  assert.deepEqual([...resolved.byDecision.P0].sort(), [...p0].sort());
  assert.deepEqual([...resolved.byDecision.P1].sort(), [...p1].sort());
  assert.deepEqual([...resolved.byDecision.P2].sort(), [...p2].sort());
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.deepEqual([...resolved.recommendedNewProductionCases].sort(), [...p0, ...p1].sort());
});

test("Chapter 10 keeps exhibition systems, institutions and archive loss outside fake Production Cases", () => {
  assert.equal(resolved.historicalObjects.length, 10);
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), historicalObjectLabels);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
});

test("Chapter 10 permanently preserves survival, benshi, transnational and sound-boundary safeguards", () => {
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Burning of the Red Lotus Temple") && item.includes("no complete film survives")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Raja Harishchandra") && item.includes("fragments")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Red Heroine") && item.includes("only surviving section")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("A Page of Madness") && item.includes("benshi")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Alam Ara") && item.includes("sound-transition chapter")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Archive survival is not representativeness")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Japan") && item.includes("China") && item.includes("India") && item.includes("Norway")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Benshi") && item.includes("not missing-data defects")));
  assert.ok(resolved.safeguards.some((item) => item.includes("transnational co-production") && item.includes("national ownership")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Modern restoration scores") && item.includes("original production elements")));
});

test("Chapter 10 audit is permanent in the v0.1 verification chain", () => {
  assert.match(packageJson, /"audit:film-history-ch10": "node scripts\/film-history-chapter-ten-atlas-audit\.mjs"/);
  assert.match(packageJson, /npm run audit:film-history-ch9 && npm run audit:film-history-ch10 && npm run typecheck/);
});
