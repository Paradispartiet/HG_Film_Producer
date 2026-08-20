import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-sixteen-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-sixteen-atlas-resolved.json", "utf8")) as {
  chapter: { number: number; id: string; title: string; period: string };
  atlas: { expectedCount: number; actualCount: number };
  verificationIndex: { literalVerifiedScenarioIds: number };
  candidates: Array<{ title: string; decision: string; scenarioId: string | null; productionVerified: boolean }>;
  byDecision: { USE_EXISTING: string[]; P0: string[]; P1: string[]; P2: string[]; EXISTING_REQUIRED: string[] };
  recommendedNewProductionCases: string[];
  historicalObjects: Array<{ label: string; atlasDecision: string }>;
  boundaryNotes: string[];
  safeguards: string[];
};
const packageJson = readFileSync("package.json", "utf8");

const exactExisting = [
  "The Shining",
  "Mephisto",
  "Raiders of the Lost Ark",
  "Missing",
  "Rumble Fish",
  "The Ballad of Narayama",
  "Blood Simple",
  "Paris, Texas",
  "Yellow Earth",
  "Tampopo",
  "My Beautiful Laundrette",
  "Police Story",
  "The Official Story",
  "Down by Law",
  "Yeelen",
  "Pelle the Conqueror",
  "Landscape in the Mist",
  "Cinema Paradiso",
  "A City of Sadness",
  "Do the Right Thing",
  "sex, lies, and videotape",
  "Black Rain",
];
const exactP0Queue: string[] = [];
const exactP1Queue = [
  "Blade Runner",
  "E.T. the Extra-Terrestrial",
  "Sugar Cane Alley",
  "The Terminator",
  "Come and See",
  "Back to the Future",
  "Aliens",
  "She's Gotta Have It",
  "A Better Tomorrow",
  "RoboCop",
  "Salaam Bombay!",
];
const historicalObjectLabels = [
  "Franchise, sequel and intellectual-property consolidation",
  "Home video, cable and the expanding aftermarket",
  "High-concept marketing, saturation release and ancillary value",
  "Effects, sound and post-production specialization",
  "Broadcast finance and new British production institutions",
  "American independent and specialty-distribution ecology",
  "Mainland Chinese, Hong Kong and Taiwan transformations",
  "Political memory under socialism, dictatorship and democratization",
  "African and transnational co-production circuits",
  "Preservation, color fading, alternate cuts and restoration",
];

test("Chapter 16 audit locks the 1980s franchise-video-global-new-cinemas scope", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 457;/);
  assert.equal(resolved.chapter.number, 16);
  assert.equal(resolved.chapter.id, "franchise-video-global-new-cinemas");
  assert.equal(resolved.chapter.title, "Franchise consolidation, video and global new cinemas");
  assert.equal(resolved.chapter.period, "1980–1989");
  assert.equal(resolved.atlas.expectedCount, 457);
  assert.equal(resolved.atlas.actualCount, 457);
  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 457);
});

test("Chapter 16 locks the exact existing, P0 and P1 queues", () => {
  assert.deepEqual(resolved.byDecision.USE_EXISTING, exactExisting);
  assert.deepEqual(resolved.byDecision.P0, exactP0Queue);
  assert.deepEqual(resolved.byDecision.P1, exactP1Queue);
  assert.deepEqual(resolved.byDecision.P2, ["Raging Bull"]);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.deepEqual(resolved.recommendedNewProductionCases, [
    "Blade Runner",
    "E.T. the Extra-Terrestrial",
    "Sugar Cane Alley",
    "The Terminator",
    "Come and See",
    "Back to the Future",
    "Aliens",
    "She's Gotta Have It",
    "A Better Tomorrow",
    "RoboCop",
    "Salaam Bombay!",
  ]);
});

test("Chapter 16 existing anchors resolve to exact verified scenario IDs", () => {
  const byTitle = new Map(resolved.candidates.map((candidate) => [candidate.title, candidate]));
  const exactIds: Record<string, string> = {
    "The Shining": "scenario_the_shining_1980",
    "Mephisto": "scenario_mephisto_1981",
    "Raiders of the Lost Ark": "scenario_raiders_of_the_lost_ark_1981",
    "Missing": "scenario_missing_1982",
    "Rumble Fish": "scenario_rumble_fish_1983",
    "The Ballad of Narayama": "scenario_the_ballad_of_narayama_1983",
    "Blood Simple": "scenario_blood_simple_1984",
    "Paris, Texas": "scenario_paris_texas_1984",
    "Yellow Earth": "scenario_yellow_earth_1984",
    "Tampopo": "scenario_tampopo_1985",
    "My Beautiful Laundrette": "scenario_my_beautiful_laundrette_1985",
    "Police Story": "scenario_police_story_1985",
    "The Official Story": "scenario_the_official_story_1985",
    "Down by Law": "scenario_down_by_law_1986",
    "Yeelen": "scenario_yeelen_1987",
    "Pelle the Conqueror": "scenario_pelle_the_conqueror_1987",
    "Landscape in the Mist": "scenario_landscape_in_the_mist_1988",
    "Cinema Paradiso": "scenario_cinema_paradiso_1988",
    "A City of Sadness": "scenario_a_city_of_sadness_1989",
    "Do the Right Thing": "scenario_do_the_right_thing_1989",
    "sex, lies, and videotape": "scenario_sex_lies_and_videotape_1989",
    "Black Rain": "scenario_black_rain_imamura_1989",
  };
  for (const [title, scenarioId] of Object.entries(exactIds)) {
    assert.equal(byTitle.get(title)?.scenarioId, scenarioId);
    assert.equal(byTitle.get(title)?.productionVerified, true);
  }
});

test("Chapter 16 authority gaps remain candidates instead of fake verified anchors", () => {
  const byTitle = new Map(resolved.candidates.map((candidate) => [candidate.title, candidate]));
  for (const title of ["Come and See"]) {
    assert.equal(byTitle.get(title)?.decision, "P1");
    assert.equal(byTitle.get(title)?.scenarioId, null);
    assert.equal(byTitle.get(title)?.productionVerified, false);
  }
});

test("Chapter 16 keeps plural production systems and downstream media history explicit", () => {
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), historicalObjectLabels);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Hollywood blockbuster") && item.includes("one axis")));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Home video") && item.includes("circulation")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Channel 4") && item.includes("film-specific evidence")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Mainland China") && item.includes("Hong Kong") && item.includes("Taiwan")));
  assert.ok(resolved.safeguards.some((item) => item.includes("African") && item.includes("Latin American") && item.includes("South Asian")));
});

test("Chapter 16 audit is permanent in the v0.1 verification chain", () => {
  assert.ok(packageJson.includes('"audit:film-history-ch16": "node scripts/film-history-chapter-sixteen-atlas-audit.mjs"'));
  assert.ok(packageJson.includes("npm run audit:film-history-ch15 && npm run audit:film-history-ch16"));
});
