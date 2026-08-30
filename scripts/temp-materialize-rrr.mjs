import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: expected replacement anchor not found: ${before.slice(0, 140)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: replacement anchor is not unique: ${before.slice(0, 140)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

// Runtime scenario integration.
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenCollectiveExpansion } from "../../core/chapterNineteenCollectiveExpansion.js";\n',
  'import { mergeChapterNineteenCollectiveExpansion } from "../../core/chapterNineteenCollectiveExpansion.js";\nimport { mergeChapterNineteenRrrExpansion } from "../../core/chapterNineteenRrrExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenCollectiveScenarios = mergeChapterNineteenCollectiveExpansion(chapterNineteenDriveMyCarScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenCollectiveScenarios);',
  'const chapterNineteenCollectiveScenarios = mergeChapterNineteenCollectiveExpansion(chapterNineteenDriveMyCarScenarios);\nconst chapterNineteenRrrScenarios = mergeChapterNineteenRrrExpansion(chapterNineteenCollectiveScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenRrrScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_collective_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_collective_expansion_2026+manual_chapter_nineteen_rrr_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

// Film Study registry.
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { collectiveFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenCollective";\n',
  'import { collectiveFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenCollective";\nimport { rrrFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenRrr";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [collectiveFilmHistoryProfile.scenarioId]: collectiveFilmHistoryProfile,\n',
  '  [collectiveFilmHistoryProfile.scenarioId]: collectiveFilmHistoryProfile,\n  [rrrFilmHistoryProfile.scenarioId]: rrrFilmHistoryProfile,\n',
);

// Production Verification registry.
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { collectiveProductionCaseVerification } from "./scenarioProductionVerificationCollective";\n',
  'import { collectiveProductionCaseVerification } from "./scenarioProductionVerificationCollective";\nimport { rrrProductionCaseVerification } from "./scenarioProductionVerificationRrr";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  collectiveProductionCaseVerification,\n',
  '  collectiveProductionCaseVerification,\n  rrrProductionCaseVerification,\n',
);

// Production-case global census and expansion order.
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 548;", "const EXPECTED_PLAYABLE_SCENARIOS = 549;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 548;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 549;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenCollectiveExpansion.ts",\n',
  '  "chapterNineteenCollectiveExpansion.ts",\n  "chapterNineteenRrrExpansion.ts",\n',
);

// Chapter 19 Atlas count; candidate decisions and balanced scheduler are derived from runtime state.
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 548;", "const EXPECTED_ATLAS_COUNT = 549;");

// Closed Chapter 18 handoff observes Chapter 19 without changing the frozen 539 baseline.
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 548, `Global Production Verification registry must contain exactly 548 unique scenarioIds after the ninth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 549, `Global Production Verification registry must contain exactly 549 unique scenarioIds after the tenth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 548, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 548.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 549, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 549.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 16 && chapter19.byDecision?.P0?.length === 16 && chapter19.byDecision?.P1?.length === 24 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 16 USE_EXISTING / 16 P0 / 24 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 17 && chapter19.byDecision?.P0?.length === 15 && chapter19.byDecision?.P1?.length === 24 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 17 USE_EXISTING / 15 P0 / 24 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "RRR" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from Collective to RRR after the ninth case.");',
  'const rrr = chapter19.candidates.find((candidate) => candidate.title === "RRR");\ninvariant(rrr?.decision === "USE_EXISTING" && rrr?.scenarioId === "scenario_rrr_2022" && rrr?.matches === 1 && rrr?.productionVerified === true, "RRR is not closed as the tenth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Top Gun: Maverick" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from RRR to Top Gun: Maverick after the tenth case.");',
);

// Strict Chapter 19 resolved-state contract.
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Avatar: The Way of Water",\n  "Nickel Boys",',
  '  "Avatar: The Way of Water",\n  "RRR",\n  "Nickel Boys",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Nope",\n  "RRR",\n  "Oppenheimer",',
  '  "Nope",\n  "Oppenheimer",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 548;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 549;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 548);", "assert.equal(resolved.atlas.expectedCount, 549);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 548);", "assert.equal(resolved.atlas.actualCount, 549);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 548);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 549);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 16);", "assert.equal(exactUseExisting.length, 17);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 16);", "assert.equal(exactP0Queue.length, 15);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 40);", "assert.equal(resolved.recommendedNewProductionCases.length, 39);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "RRR");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Top Gun: Maverick");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "RRR",\n    "Top Gun: Maverick",\n    "Titane",\n    "Everything Everywhere All at Once",\n    "Four Daughters",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Top Gun: Maverick",\n    "Titane",\n    "Everything Everywhere All at Once",\n    "Four Daughters",\n    "Decision to Leave",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "nonfiction_hybrid"]',
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "nonfiction_hybrid", "regional_global"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Collective"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Top Gun: Maverick") > resolved.recommendedNewProductionCases.indexOf("RRR"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Collective"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("RRR"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Titane") > resolved.recommendedNewProductionCases.indexOf("Top Gun: Maverick"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const collective = resolved.candidates.find((candidate) => candidate.title === "Collective");\n  assert.ok(collective);\n  assert.equal(collective.decision, "USE_EXISTING");\n  assert.equal(collective.scenarioId, "scenario_collective_2020");\n  assert.equal(collective.matches, 1);\n  assert.equal(collective.productionVerified, true);',
  '  const collective = resolved.candidates.find((candidate) => candidate.title === "Collective");\n  assert.ok(collective);\n  assert.equal(collective.decision, "USE_EXISTING");\n  assert.equal(collective.scenarioId, "scenario_collective_2020");\n  assert.equal(collective.matches, 1);\n  assert.equal(collective.productionVerified, true);\n\n  const rrr = resolved.candidates.find((candidate) => candidate.title === "RRR");\n  assert.ok(rrr);\n  assert.equal(rrr.decision, "USE_EXISTING");\n  assert.equal(rrr.scenarioId, "scenario_rrr_2022");\n  assert.equal(rrr.matches, 1);\n  assert.equal(rrr.productionVerified, true);',
);

console.log("RRR canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
