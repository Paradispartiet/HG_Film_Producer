import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-eighteen-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-eighteen-atlas-resolved.json", "utf8")) as {
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
  "The Gleaners and I", "Platform", "Dancer in the Dark", "In the Mood for Love", "Yi Yi", "Crouching Tiger, Hidden Dragon",
  "Atanarjuat: The Fast Runner", "Spirited Away", "The Son's Room", "Millennium Mambo", "Russian Ark", "City of God",
  "Star Wars: Episode II - Attack of the Clones", "28 Days Later", "Unknown Pleasures", "Oldboy", "Lost in Translation", "The Return",
  "Collateral", "Tropical Malady", "Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "The New World", "Inland Empire",
  "Still Life", "Children of Men", "Pan's Labyrinth", "Apocalypto", "Zodiac", "Secret Sunshine", "No Country for Old Men",
  "There Will Be Blood", "4 Months, 3 Weeks and 2 Days", "Slumdog Millionaire", "Waltz with Bashir", "Wendy and Lucy",
  "The Wrestler", "Hunger", "Avatar", "A Prophet", "The White Ribbon", "The Milk of Sorrow", "The Social Network", "Poetry",
  "Somewhere", "Uncle Boonmee Who Can Recall His Past Lives", "A Separation", "The Tree of Life", "Pina", "Amour", "Pietà",
  "Holy Motors", "Gravity", "Ida", "Blue Is the Warmest Colour", "Birdman", "Boyhood", "Winter Sleep", "Black Coal, Thin Ice",
  "Tangerine", "Mad Max: Fury Road", "Son of Saul", "The Revenant", "From Afar", "Moonlight", "Toni Erdmann", "I Am Not Your Negro",
  "Dunkirk", "Get Out", "Roma", "Burning", "Spider-Man: Into the Spider-Verse", "An Elephant Sitting Still", "Cold War", "Parasite",
  "The Irishman", "1917", "Atlantics", "Synonyms", "Portrait of a Lady on Fire",
] as const;

const exactExisting = [
  "The Gleaners and I", "Platform", "Dancer in the Dark", "In the Mood for Love", "Atanarjuat: The Fast Runner", "Spirited Away", "The Son's Room", "Millennium Mambo", "Russian Ark", "City of God", "Star Wars: Episode II - Attack of the Clones", "Lost in Translation", "The Return", "Collateral", "Tropical Malady",
  "Head-On", "Vera Drake", "Inland Empire", "Still Life", "Zodiac", "Secret Sunshine", "No Country for Old Men", "4 Months, 3 Weeks and 2 Days", "Slumdog Millionaire",
  "Waltz with Bashir", "Wendy and Lucy", "The Wrestler", "Hunger", "Avatar", "A Prophet", "The White Ribbon", "The Milk of Sorrow", "The Social Network",
  "Poetry", "Somewhere", "A Separation", "Pietà", "Gravity", "Blue Is the Warmest Colour", "Birdman", "Boyhood", "Winter Sleep", "Black Coal, Thin Ice",
  "Tangerine", "Mad Max: Fury Road", "Son of Saul", "From Afar", "Moonlight", "Toni Erdmann", "Dunkirk", "Roma", "Burning", "Spider-Man: Into the Spider-Verse", "An Elephant Sitting Still", "Parasite", "The Irishman", "Synonyms",
  "Portrait of a Lady on Fire",
] as const;

const exactP0Queue = [] as const;

const exactP1Queue = [
  "Yi Yi", "Crouching Tiger, Hidden Dragon", "28 Days Later", "Unknown Pleasures", "Oldboy", "Brokeback Mountain", "Caché",
  "Children of Men", "Pan's Labyrinth", "Apocalypto", "There Will Be Blood", "Uncle Boonmee Who Can Recall His Past Lives",
  "The Tree of Life", "Pina", "Amour", "Holy Motors", "Ida", "The Revenant", "I Am Not Your Negro", "Get Out", "Cold War",
  "1917", "Atlantics",
] as const;

const exactP2Queue = ["The New World"] as const;

const exactHistoricalObjectLabels = [
  "Digital intermediate, color grading and data-centric post-production",
  "Digital acquisition from DV and CineAlta to Viper, Genesis, RED and Alexa",
  "DCI standardization and digital theatrical exhibition",
  "Performance capture, previs, virtual cameras and post-led production design",
  "Digital feature animation and deliberately non-photoreal pipelines",
  "Lightweight DV, HD, DSLR and smartphone production",
  "Transnational co-production, public funds, sales agents and festival circulation",
  "Distinct East Asian industrial expansions and export systems",
  "African, Latin American, Middle Eastern and diasporic production networks",
  "Hybrid documentary, archive, animation and staged nonfiction",
  "Platform and streaming distribution emerging beside theatrical systems",
  "Photochemical persistence, 65mm and IMAX countercurrents",
  "Stereoscopic 3D and premium-format exhibition",
] as const;

test("Chapter 18 audit locks the 2000–2019 digital-convergence scope", () => {
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 515;/);
  assert.equal(resolved.chapter.number, 18);
  assert.equal(resolved.chapter.id, "digital-convergence-transnational-production");
  assert.equal(resolved.chapter.title, "Digital convergence, transnational production and platform-era cinema");
  assert.equal(resolved.chapter.period, "2000–2019");
  assert.equal(resolved.atlas.expectedCount, 515);
  assert.equal(resolved.atlas.actualCount, 515);
  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 515);
});

test("Chapter 18 locks the exact candidate census without duplicate Atlas matches", () => {
  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);
  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, exactCandidateTitles.length);
  assert.equal(exactCandidateTitles.length, 82);
  assert.ok(resolved.candidates.every((item) => item.matches === 0 || item.matches === 1));
});

test("Chapter 18 locks the exact evidence-derived Production Case queues", () => {
  assert.deepEqual(resolved.byDecision.USE_EXISTING, [...exactExisting]);
  assert.deepEqual(resolved.byDecision.P0, [...exactP0Queue]);
  assert.deepEqual(resolved.byDecision.P1, [...exactP1Queue]);
  assert.deepEqual(resolved.byDecision.P2, [...exactP2Queue]);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.equal(exactExisting.length, 58);
  assert.equal(exactP0Queue.length, 0);
  assert.equal(exactP1Queue.length, 23);
  assert.equal(exactP2Queue.length, 1);
  assert.equal(resolved.recommendedNewProductionCases.length, 23);
  assert.deepEqual(
    resolved.recommendedNewProductionCases,
    resolved.candidates
      .filter((item) => item.decision === "P0" || item.decision === "P1")
      .map((item) => item.title),
  );

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

test("Chapter 18 keeps asynchronous production systems explicit", () => {
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), [...exactHistoricalObjectLabels]);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
  assert.ok(resolved.safeguards.some((item) => item.includes("Digital is never treated as one switch")));
  assert.ok(resolved.safeguards.some((item) => item.includes("digital intermediate") && item.includes("principal photography was digital")));
  assert.ok(resolved.safeguards.some((item) => item.includes("DCI") && item.includes("distribution") && item.includes("exhibition")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Mainland China") && item.includes("Hong Kong") && item.includes("South Korea")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Streaming") && item.includes("financed")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Photochemical") && item.includes("IMAX")));
});

test("Chapter 18 source hierarchy is inspectable and permanent in v0.1 verification", () => {
  assert.ok(resolved.researchSources.length >= 10);
  assert.ok(resolved.researchSources.every((source) => source.url.startsWith("https://")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("Digital Cinema Initiatives")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("American Society of Cinematographers")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("Eurimages")));
  assert.ok(packageJson.includes('"audit:film-history-ch18": "node scripts/film-history-chapter-eighteen-atlas-audit.mjs"'));
  assert.ok(packageJson.includes("npm run audit:film-history-ch17 && npm run audit:film-history-ch18 && npm run typecheck"));
});
