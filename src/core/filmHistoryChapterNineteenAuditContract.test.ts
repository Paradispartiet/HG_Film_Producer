import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const audit = readFileSync("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "utf8");
const resolved = JSON.parse(readFileSync("docs/film-history-chapter-nineteen-atlas-resolved.json", "utf8")) as {
  status: string;
  chapter: { number: number; id: string; title: string; period: string; candidateBaseline: string };
  governance: {
    openCurrentPeriod: boolean;
    candidateBaselineEnds: number;
    currentYearExcludedFromFrozenBaseline: number;
    laterCandidateExpansionRequiresSourceFirstAudit: boolean;
    productionCasesMayStartAfterThisMatrix: boolean;
    candidateFunctionsAreRoadmapHypotheses: boolean;
    balancedProductionRotation: boolean;
    priorityLabelsAreEvidenceUrgencyNotLinearProductionOrder: boolean;
  };
  atlas: { baselineFromClosedChapter18: number; expectedCount: number; actualCount: number };
  verificationIndex: { literalVerifiedScenarioIds: number };
  candidates: Array<{
    title: string;
    year: number;
    decisionIfMissing: "P0" | "P1" | "P2";
    decision: "USE_EXISTING" | "P0" | "P1" | "P2" | "EXISTING_REQUIRED";
    scenarioId: string | null;
    matches: number;
    productionVerified: boolean;
  }>;
  candidatePrioritiesIfMissing: { P0: string[]; P1: string[]; P2: string[] };
  productionStrategy: {
    mode: string;
    priorityLabelsAreEvidenceUrgencyNotLinearProductionOrder: boolean;
    laneOrder: string[];
    nextRecommendedCase: string | null;
    nextRecommendedLane: string | null;
    remainingSequence: Array<{ title: string; lane: string }>;
    safeguards: string[];
  };
  byDecision: { USE_EXISTING: string[]; P0: string[]; P1: string[]; P2: string[]; EXISTING_REQUIRED: string[] };
  recommendedNewProductionCases: string[];
  historicalObjects: Array<{ label: string; atlasDecision: string }>;
  researchSources: Array<{ title: string; publisher: string; url: string }>;
  boundaryNotes: string[];
  safeguards: string[];
};
const packageJson = readFileSync("package.json", "utf8");
const chapter18Completion = JSON.parse(readFileSync("docs/film-history-chapter-eighteen-completion.json", "utf8")) as {
  nextPhase: { chapter: number; period: string; status: string; firstDeliverable: string; firstDeliverablePath?: string; productionCasesMayStartAfterMatrix: boolean };
};

const exactCandidateTitles = [
  "Tenet",
  "Nomadland",
  "Soul",
  "Collective",
  "Quo Vadis, Aida?",
  "Another Round",
  "Never Rarely Sometimes Always",
  "Wolfwalkers",
  "Days",
  "The Disciple",
  "Dune",
  "The Power of the Dog",
  "Drive My Car",
  "Flee",
  "Titane",
  "The Worst Person in the World",
  "Memoria",
  "CODA",
  "The Green Knight",
  "The Mitchells vs. the Machines",
  "Avatar: The Way of Water",
  "Top Gun: Maverick",
  "Everything Everywhere All at Once",
  "Nope",
  "RRR",
  "Decision to Leave",
  "All Quiet on the Western Front",
  "Saint Omer",
  "Guillermo del Toro's Pinocchio",
  "EO",
  "Oppenheimer",
  "Barbie",
  "Killers of the Flower Moon",
  "Poor Things",
  "The Zone of Interest",
  "Godzilla Minus One",
  "The Boy and the Heron",
  "Four Daughters",
  "Anatomy of a Fall",
  "Spider-Man: Across the Spider-Verse",
  "Dune: Part Two",
  "The Brutalist",
  "Flow",
  "The Substance",
  "Nickel Boys",
  "The Seed of the Sacred Fig",
  "All We Imagine as Light",
  "Dahomey",
  "Anora",
  "Furiosa: A Mad Max Saga",
  "Sinners",
  "One Battle After Another",
  "F1",
  "KPop Demon Hunters",
  "Sentimental Value",
  "The Secret Agent",
  "It Was Just an Accident",
  "Sirāt",
  "Resurrection",
  "Sound of Falling",
] as const;

const exactP0Priority = [
  "Tenet",
  "Soul",
  "Wolfwalkers",
  "Dune",
  "Flee",
  "Avatar: The Way of Water",
  "Top Gun: Maverick",
  "Everything Everywhere All at Once",
  "Nope",
  "RRR",
  "Oppenheimer",
  "Killers of the Flower Moon",
  "Poor Things",
  "The Zone of Interest",
  "Godzilla Minus One",
  "The Boy and the Heron",
  "Spider-Man: Across the Spider-Verse",
  "Dune: Part Two",
  "Flow",
  "The Substance",
  "Nickel Boys",
  "Sinners",
  "F1",
] as const;

const exactP1Priority = [
  "Nomadland",
  "Collective",
  "Quo Vadis, Aida?",
  "Another Round",
  "Never Rarely Sometimes Always",
  "The Disciple",
  "The Power of the Dog",
  "Drive My Car",
  "Titane",
  "The Worst Person in the World",
  "Memoria",
  "CODA",
  "The Mitchells vs. the Machines",
  "Decision to Leave",
  "All Quiet on the Western Front",
  "Saint Omer",
  "Guillermo del Toro's Pinocchio",
  "Barbie",
  "Four Daughters",
  "Anatomy of a Fall",
  "The Brutalist",
  "The Seed of the Sacred Fig",
  "All We Imagine as Light",
  "Dahomey",
  "Anora",
  "Furiosa: A Mad Max Saga",
  "One Battle After Another",
  "KPop Demon Hunters",
  "Sentimental Value",
  "The Secret Agent",
  "It Was Just an Accident",
  "Sirāt",
  "Resurrection",
] as const;

const exactP2Priority = [
  "Days",
  "The Green Knight",
  "EO",
  "Sound of Falling",
] as const;

const exactUseExisting = [
  "Tenet",
  "Nomadland",
  "Soul",
  "Quo Vadis, Aida?",
  "Another Round",
  "Never Rarely Sometimes Always",
  "Wolfwalkers",
  "The Disciple",
  "Dune",
  "Flee",
  "The Worst Person in the World",
  "Avatar: The Way of Water",
  "Nickel Boys",
  "Dahomey",
] as const;

const exactP0Queue = [
  "Top Gun: Maverick",
  "Everything Everywhere All at Once",
  "Nope",
  "RRR",
  "Oppenheimer",
  "Killers of the Flower Moon",
  "Poor Things",
  "The Zone of Interest",
  "Godzilla Minus One",
  "The Boy and the Heron",
  "Spider-Man: Across the Spider-Verse",
  "Dune: Part Two",
  "Flow",
  "The Substance",
  "Sinners",
  "F1",
] as const;

const exactP1Queue = [
  "Collective",
  "The Power of the Dog",
  "Drive My Car",
  "Titane",
  "Memoria",
  "CODA",
  "The Mitchells vs. the Machines",
  "Decision to Leave",
  "All Quiet on the Western Front",
  "Saint Omer",
  "Guillermo del Toro's Pinocchio",
  "Barbie",
  "Four Daughters",
  "Anatomy of a Fall",
  "The Brutalist",
  "The Seed of the Sacred Fig",
  "All We Imagine as Light",
  "Anora",
  "Furiosa: A Mad Max Saga",
  "One Battle After Another",
  "KPop Demon Hunters",
  "Sentimental Value",
  "The Secret Agent",
  "It Was Just an Accident",
  "Sirāt",
  "Resurrection",
] as const;

const exactP2Queue = [
  "Days",
  "The Green Knight",
  "EO",
  "Sound of Falling",
] as const;

const exactHistoricalObjectLabels = [
  "Pandemic shutdown, return-to-work protocols and health-safety labor systems",
  "Release-window rupture, PVOD, simultaneous streaming and theatrical recovery",
  "Mature streaming commissioning, acquisition, residuals and audience-data transparency",
  "Real-time virtual production, LED volumes and in-camera visual effects",
  "Remote and cloud collaboration, distributed post and production-data workflows",
  "Generative AI, digital replicas and negotiated authorship or consent boundaries",
  "Labor agreements, working conditions, rest, staffing and strike disruptions",
  "Photochemical persistence and revival across 35mm, VistaVision, 65mm and IMAX",
  "Premium-format and event theatrical exhibition after pandemic disruption",
  "Animation plurality across CG, hand-drawn, stop-motion and independent software pipelines",
  "Transnational co-production, public funds, sales agents and festival circulation",
  "Distinct regional industries and uneven global production infrastructures",
  "Hybrid documentary, archive, reenactment and animated nonfiction",
  "Sustainability, carbon accounting and lower-impact production planning",
  "Physical production, practical effects, stunts, prosthetics and digital post as complementary systems",
] as const;

test("Chapter 19 locks the open 2020-present scope without freezing 2026", () => {
  assert.equal(resolved.status, "foundation_established");
  assert.equal(resolved.chapter.number, 19);
  assert.equal(resolved.chapter.id, "pandemic-platform-labor-virtual-production");
  assert.equal(resolved.chapter.title, "Pandemic disruption, platform consolidation, labor and virtual-production cinema");
  assert.equal(resolved.chapter.period, "2020–present");
  assert.equal(resolved.chapter.candidateBaseline, "2020–2025");
  assert.equal(resolved.governance.openCurrentPeriod, true);
  assert.equal(resolved.governance.candidateBaselineEnds, 2025);
  assert.equal(resolved.governance.currentYearExcludedFromFrozenBaseline, 2026);
  assert.equal(resolved.governance.laterCandidateExpansionRequiresSourceFirstAudit, true);
  assert.equal(resolved.governance.productionCasesMayStartAfterThisMatrix, true);
  assert.equal(resolved.governance.candidateFunctionsAreRoadmapHypotheses, true);
  assert.equal(resolved.governance.balancedProductionRotation, true);
  assert.equal(resolved.governance.priorityLabelsAreEvidenceUrgencyNotLinearProductionOrder, true);
  assert.ok(resolved.boundaryNotes.some((item) => item.includes("2026+") && item.includes("source-mature")));
});

test("Chapter 19 preserves the closed Chapter 18 baseline while advancing the current Atlas", () => {
  assert.match(audit, /const CLOSED_CHAPTER_EIGHTEEN_ATLAS_COUNT = 539;/);
  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 546;/);
  assert.equal(resolved.atlas.baselineFromClosedChapter18, 539);
  assert.equal(resolved.atlas.expectedCount, 546);
  assert.equal(resolved.atlas.actualCount, 546);
  assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 546);
});

test("Chapter 19 locks exactly sixty candidates across 2020-2025", () => {
  assert.deepEqual(resolved.candidates.map((item) => item.title), [...exactCandidateTitles]);
  assert.equal(new Set(resolved.candidates.map((item) => item.title)).size, 60);
  assert.equal(resolved.candidates.length, 60);
  for (const year of [2020, 2021, 2022, 2023, 2024, 2025]) {
    assert.equal(resolved.candidates.filter((item) => item.year === year).length, 10, `Expected ten candidates for ${year}`);
  }
});

test("Chapter 19 locks the source-first priority model and resolved queues", () => {
  assert.deepEqual(resolved.candidatePrioritiesIfMissing.P0, [...exactP0Priority]);
  assert.deepEqual(resolved.candidatePrioritiesIfMissing.P1, [...exactP1Priority]);
  assert.deepEqual(resolved.candidatePrioritiesIfMissing.P2, [...exactP2Priority]);
  assert.equal(exactP0Priority.length, 23);
  assert.equal(exactP1Priority.length, 33);
  assert.equal(exactP2Priority.length, 4);

  assert.deepEqual(resolved.byDecision.USE_EXISTING, [...exactUseExisting]);
  assert.deepEqual(resolved.byDecision.P0, [...exactP0Queue]);
  assert.deepEqual(resolved.byDecision.P1, [...exactP1Queue]);
  assert.deepEqual(resolved.byDecision.P2, [...exactP2Queue]);
  assert.deepEqual(resolved.byDecision.EXISTING_REQUIRED, []);
  assert.equal(exactUseExisting.length, 14);
  assert.equal(exactP0Queue.length, 16);
  assert.equal(exactP1Queue.length, 26);
  assert.equal(exactP2Queue.length, 4);
  assert.equal(resolved.recommendedNewProductionCases.length, 42);
  assert.equal(resolved.productionStrategy.mode, "balanced_rotation");
  assert.equal(resolved.productionStrategy.priorityLabelsAreEvidenceUrgencyNotLinearProductionOrder, true);
  assert.deepEqual(resolved.productionStrategy.laneOrder, [
    "independent_low_mid_budget",
    "auteur_festival",
    "nonfiction_hybrid",
    "regional_global",
    "industrial_scale_technical",
  ]);
  assert.equal(resolved.productionStrategy.nextRecommendedCase, "Drive My Car");
  assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");
  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [
    "Drive My Car",
    "Collective",
    "RRR",
    "Top Gun: Maverick",
    "Titane",
  ]);
  assert.deepEqual(
    resolved.productionStrategy.remainingSequence.slice(0, 5).map((item) => item.lane),
    ["auteur_festival", "nonfiction_hybrid", "regional_global", "industrial_scale_technical", "auteur_festival"],
  );
  assert.ok(!resolved.recommendedNewProductionCases.includes("Nomadland"));
  assert.ok(resolved.recommendedNewProductionCases.indexOf("Top Gun: Maverick") > resolved.recommendedNewProductionCases.indexOf("Drive My Car"));
  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);
  assert.ok(resolved.productionStrategy.safeguards.some((item) => item.includes("P1 case may precede a P0 case")));
  for (const title of resolved.recommendedNewProductionCases) {
    const candidate = resolved.candidates.find((item) => item.title === title);
    assert.ok(candidate);
    assert.ok(candidate.decision === "P0" || candidate.decision === "P1");
  }

  const tenet = resolved.candidates.find((candidate) => candidate.title === "Tenet");
  assert.ok(tenet);
  assert.equal(tenet.decision, "USE_EXISTING");
  assert.equal(tenet.scenarioId, "scenario_tenet_2020");
  assert.equal(tenet.matches, 1);
  assert.equal(tenet.productionVerified, true);

  const nomadland = resolved.candidates.find((candidate) => candidate.title === "Nomadland");
  assert.ok(nomadland);
  assert.equal(nomadland.decision, "USE_EXISTING");
  assert.equal(nomadland.scenarioId, "scenario_nomadland_2020");
  assert.equal(nomadland.matches, 1);
  assert.equal(nomadland.productionVerified, true);

  const soul = resolved.candidates.find((candidate) => candidate.title === "Soul");
  assert.ok(soul);
  assert.equal(soul.decision, "USE_EXISTING");
  assert.equal(soul.scenarioId, "scenario_soul_2020");
  assert.equal(soul.matches, 1);
  assert.equal(soul.productionVerified, true);

  const wolfwalkers = resolved.candidates.find((candidate) => candidate.title === "Wolfwalkers");
  assert.ok(wolfwalkers);
  assert.equal(wolfwalkers.decision, "USE_EXISTING");
  assert.equal(wolfwalkers.scenarioId, "scenario_wolfwalkers_2020");
  assert.equal(wolfwalkers.matches, 1);
  assert.equal(wolfwalkers.productionVerified, true);

  const dune = resolved.candidates.find((candidate) => candidate.title === "Dune");
  assert.ok(dune);
  assert.equal(dune.decision, "USE_EXISTING");
  assert.equal(dune.scenarioId, "scenario_dune_2021");
  assert.equal(dune.matches, 1);
  assert.equal(dune.productionVerified, true);

  const flee = resolved.candidates.find((candidate) => candidate.title === "Flee");
  assert.ok(flee);
  assert.equal(flee.decision, "USE_EXISTING");
  assert.equal(flee.scenarioId, "scenario_flee_2021");
  assert.equal(flee.matches, 1);
  assert.equal(flee.productionVerified, true);

  const avatarWayOfWater = resolved.candidates.find((candidate) => candidate.title === "Avatar: The Way of Water");
  assert.ok(avatarWayOfWater);
  assert.equal(avatarWayOfWater.decision, "USE_EXISTING");
  assert.equal(avatarWayOfWater.scenarioId, "scenario_avatar_the_way_of_water_2022");
  assert.equal(avatarWayOfWater.matches, 1);
  assert.equal(avatarWayOfWater.productionVerified, true);

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

test("Chapter 19 keeps production systems plural and evidence layers separate", () => {
  assert.deepEqual(resolved.historicalObjects.map((item) => item.label), [...exactHistoricalObjectLabels]);
  assert.ok(resolved.historicalObjects.every((item) => item.atlasDecision === "NO_PRODUCTION_CASE"));
  assert.ok(resolved.safeguards.some((item) => item.includes("pandemic-produced") && item.includes("title-specific evidence")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Streaming distribution") && item.includes("financed")));
  assert.ok(resolved.safeguards.some((item) => item.includes("LED volumes") && item.includes("distinct systems")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Generative AI") && item.includes("contractual scope")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Sustainability") && item.includes("geographic")));
  assert.ok(resolved.safeguards.some((item) => item.includes("Festival selection") && item.includes("circulation")));
  assert.ok(resolved.safeguards.some((item) => item.includes("roadmap hypothesis") && item.includes("source_verified")));
});

test("Chapter 19 source hierarchy is inspectable and permanent in v0.1 verification", () => {
  assert.ok(resolved.researchSources.length >= 14);
  assert.ok(resolved.researchSources.every((source) => source.url.startsWith("https://")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("European Audiovisual Observatory")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("Directors Guild of America")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("Industrial Light & Magic")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("Writers Guild")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("SAG-AFTRA")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("British Film Institute")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("Eurimages")));
  assert.ok(resolved.researchSources.some((source) => source.publisher.includes("Festival de Cannes")));
  assert.ok(packageJson.includes('"audit:film-history-ch19": "node scripts/film-history-chapter-nineteen-atlas-audit.mjs"'));
  assert.ok(packageJson.includes("npm run audit:film-history-ch18-completion && npm run audit:film-history-ch19 && npm test"));
});

test("Chapter 18 hands off to the established Chapter 19 matrix without reopening Chapter 18", () => {
  assert.equal(chapter18Completion.nextPhase.chapter, 19);
  assert.equal(chapter18Completion.nextPhase.period, "2020–present");
  assert.equal(chapter18Completion.nextPhase.status, "foundation_established");
  assert.equal(chapter18Completion.nextPhase.firstDeliverable, "source-first scope and candidate matrix");
  assert.equal(chapter18Completion.nextPhase.firstDeliverablePath, "docs/film-history-chapter-nineteen-atlas-resolved.json");
  assert.equal(chapter18Completion.nextPhase.productionCasesMayStartAfterMatrix, true);
});
