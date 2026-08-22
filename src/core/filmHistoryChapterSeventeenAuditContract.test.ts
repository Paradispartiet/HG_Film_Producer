import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-seventeen-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-seventeen-atlas-resolved.json", "utf8")) as {
  chapter: { number: number; id: string; title: string; period: string };
  atlas: { expectedCount: number; actualCount: number };
  verificationIndex: { literalVerifiedScenarioIds: number };
  candidates: Array<{
    title: string;
    decision: "USE_EXISTING" | "P0" | "P1" | "P2" | "EXISTING_REQUIRED";
    scenarioId: string | null;
    matches: number;
    productionVerified: boolean;
  }>;
  byDecision: {
    USE_EXISTING: string[];
    P0: string[];
    P1: string[];
    P2: string[];
    EXISTING_REQUIRED: string[];
  };
  recommendedNewProductionCases: string[];
  historicalObjects: Array<{ label: string; atlasDecision: string }>;
  researchSources: Array<{ title: string; publisher: string; url: string }>;
  boundaryNotes: string[];
  safeguards: string[];
};
const packageJson = readFileSync("package.json", "utf8");

const exactCandidateTitles = [
  "Paris Is Burning",
  "Slacker",
  "Metropolitan",
  "Days of Being Wild",
  "Goodfellas",
  "Daughters of the Dust",
  "Poison",
  "Raise the Red Lantern",
  "My Own Private Idaho",
  "Boyz n the Hood",
  "Reservoir Dogs",
  "El Mariachi",
  "Hyenas",
  "The Living End",
  "Sankofa",
  "Farewell My Concubine",
  "The Piano",
  "Naked",
  "Three Colours: Red",
  "Chungking Express",
  "Pulp Fiction",
  "Vive L'Amour",
  "Bandit Queen",
  "Hoop Dreams",
  "Toy Story",
  "Safe",
  "La Haine",
  "Underground",
  "The White Balloon",
  "Secrets & Lies",
  "The Watermelon Woman",
  "Fargo",
  "Trainspotting",
  "Fire",
  "Taste of Cherry",
  "Happy Together",
  "Cure",
  "Titanic",
  "Princess Mononoke",
  "Eve's Bayou",
  "Festen",
  "Central Station",
  "The Idiots",
  "Ringu",
  "The Matrix",
  "Beau Travail",
  "Rosetta",
  "All About My Mother",
  "The Blair Witch Project",
  "Boys Don't Cry",
  "Shiri"
] as const;
const exactExisting = [
  "Paris Is Burning",
  "Slacker",
  "Metropolitan",
  "Days of Being Wild",
  "Daughters of the Dust",
  "Poison",
  "Raise the Red Lantern",
  "Reservoir Dogs",
  "El Mariachi",
  "Hyenas",
  "Farewell My Concubine",
  "Naked",
  "Vive L'Amour",
  "Safe",
  "La Haine",
  "Underground",
  "Secrets & Lies",
  "The Watermelon Woman",
  "Fargo",
  "Trainspotting",
  "Taste of Cherry",
  "Happy Together",
  "Cure",
  "Festen",
  "Central Station",
  "Beau Travail",
  "Rosetta",
  "All About My Mother"
] as const;
const exactP0Queue = [
  "Sankofa",
  "Chungking Express",
  "Bandit Queen",
  "Toy Story",
  "The Matrix",
  "Shiri"
] as const;
const exactP1Queue = [
  "My Own Private Idaho",
  "Boyz n the Hood",
  "The Living End",
  "The Piano",
  "Three Colours: Red",
  "Pulp Fiction",
  "Hoop Dreams",
  "The White Balloon",
  "Fire",
  "Titanic",
  "Princess Mononoke",
  "Eve's Bayou",
  "The Idiots",
  "Ringu",
  "The Blair Witch Project",
  "Boys Don't Cry"
] as const;
const exactP2Queue = [
  "Goodfellas"
] as const;
const exactRecommended = [
  "My Own Private Idaho",
  "Boyz n the Hood",
  "The Living End",
  "Sankofa",
  "The Piano",
  "Three Colours: Red",
  "Chungking Express",
  "Pulp Fiction",
  "Bandit Queen",
  "Hoop Dreams",
  "Toy Story",
  "The White Balloon",
  "Fire",
  "Titanic",
  "Princess Mononoke",
  "Eve's Bayou",
  "The Idiots",
  "Ringu",
  "The Matrix",
  "The Blair Witch Project",
  "Boys Don't Cry",
  "Shiri"
] as const;

const exactHistoricalObjectLabels = [
  "Specialty distributors, mini-majors and the indie acquisition economy",
  "New Queer Cinema and identity-driven independent circuits",
  "New Black cinema and diasporic independent production",
  "CGI, digital compositing and software-based animation",
  "Digital sound, post-production and the software turn",
  "Dogme 95, consumer video and lightweight digital production",
  "Global co-production, public funding and festival circulation",
  "Post-socialist and post-authoritarian production transitions",
  "East Asian industry divergence and transnational circulation",
  "Iranian cinema and constrained-production innovation",
  "African and diasporic production networks",
  "Global blockbuster scale, franchising and effects infrastructure"
] as const;

test("Chapter 17 audit locks the 1990s specialty-digital-global-production scope", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 470;/);
  assert.equal(resolved.chapter.number, 17);
  assert.equal(resolved.chapter.id, "specialty-digital-global-production");
  assert.equal(resolved.chapter.title, "Specialty cinema, digital transition and globalized production");
  assert.equal(resolved.chapter.period, "1990–1999");
  assert.equal(resolved.atlas.expectedCount, 470);
  assert.equal(resolved.atlas.actualCount, 470);
  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 470);
});

test("Chapter 17 locks the exact candidate census and allows no duplicate Atlas matches", () => {
  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);
  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, exactCandidateTitles.length);
  assert.ok(resolved.candidates.every((item) => item.matches === 0 || item.matches === 1));
});

test("Chapter 17 locks the exact evidence-derived Production Case queues", () => {
  assert.deepEqual(resolved.byDecision.USE_EXISTING, [...exactExisting]);
  assert.deepEqual(resolved.byDecision.P0, [...exactP0Queue]);
  assert.deepEqual(resolved.byDecision.P1, [...exactP1Queue]);
  assert.deepEqual(resolved.byDecision.P2, [...exactP2Queue]);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.deepEqual(resolved.recommendedNewProductionCases, [...exactRecommended]);

  for (const candidate of resolved.candidates) {
    if (candidate.decision === "USE_EXISTING") {
      assert.equal(candidate.matches, 1);
      assert.equal(candidate.productionVerified, true);
      assert.ok(candidate.scenarioId);
    } else {
      assert.equal(candidate.matches, 0);
      assert.equal(candidate.productionVerified, false);
      assert.equal(candidate.scenarioId, null);
    }
  }
});

test("Chapter 17 keeps plural production systems explicit instead of a film-to-digital master narrative", () => {
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), [...exactHistoricalObjectLabels]);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("Digital is not one switch")));
  assert.ok(resolved.safeguards.some((item) => item.includes("New Queer Cinema") && item.includes("not a single aesthetic")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Mainland China") && item.includes("Hong Kong") && item.includes("Taiwan") && item.includes("South Korea")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Dogme") && item.includes("film-specific sources")));
});

test("Chapter 17 source hierarchy is explicit and permanent in v0.1 verification", () => {
  assert.ok(resolved.researchSources.length >= 8);
  assert.ok(resolved.researchSources.every((source) => source.url.startsWith("https://")));
  assert.ok(packageJson.includes('"audit:film-history-ch17": "node scripts/film-history-chapter-seventeen-atlas-audit.mjs"'));
  assert.ok(packageJson.includes("npm run audit:film-history-ch16 && npm run audit:film-history-ch17 && npm run typecheck"));
});
