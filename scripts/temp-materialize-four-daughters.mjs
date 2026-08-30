import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: expected replacement anchor not found: ${before.slice(0, 180)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: replacement anchor is not unique: ${before.slice(0, 180)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

// Runtime scenario integration.
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenEverythingEverywhereAllAtOnceExpansion } from "../../core/chapterNineteenEverythingEverywhereAllAtOnceExpansion.js";\n',
  'import { mergeChapterNineteenEverythingEverywhereAllAtOnceExpansion } from "../../core/chapterNineteenEverythingEverywhereAllAtOnceExpansion.js";\nimport { mergeChapterNineteenFourDaughtersExpansion } from "../../core/chapterNineteenFourDaughtersExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenEverythingEverywhereAllAtOnceScenarios = mergeChapterNineteenEverythingEverywhereAllAtOnceExpansion(chapterNineteenTitaneScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenEverythingEverywhereAllAtOnceScenarios);',
  'const chapterNineteenEverythingEverywhereAllAtOnceScenarios = mergeChapterNineteenEverythingEverywhereAllAtOnceExpansion(chapterNineteenTitaneScenarios);\nconst chapterNineteenFourDaughtersScenarios = mergeChapterNineteenFourDaughtersExpansion(chapterNineteenEverythingEverywhereAllAtOnceScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenFourDaughtersScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_everything_everywhere_all_at_once_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_everything_everywhere_all_at_once_expansion_2026+manual_chapter_nineteen_four_daughters_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

// Film Study registry.
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { everythingEverywhereAllAtOnceFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEverythingEverywhereAllAtOnce";\n',
  'import { everythingEverywhereAllAtOnceFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEverythingEverywhereAllAtOnce";\nimport { fourDaughtersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFourDaughters";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [everythingEverywhereAllAtOnceFilmHistoryProfile.scenarioId]: everythingEverywhereAllAtOnceFilmHistoryProfile,\n',
  '  [everythingEverywhereAllAtOnceFilmHistoryProfile.scenarioId]: everythingEverywhereAllAtOnceFilmHistoryProfile,\n  [fourDaughtersFilmHistoryProfile.scenarioId]: fourDaughtersFilmHistoryProfile,\n',
);

// Production Verification registry.
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { everythingEverywhereAllAtOnceProductionCaseVerification } from "./scenarioProductionVerificationEverythingEverywhereAllAtOnce";\n',
  'import { everythingEverywhereAllAtOnceProductionCaseVerification } from "./scenarioProductionVerificationEverythingEverywhereAllAtOnce";\nimport { fourDaughtersProductionCaseVerification } from "./scenarioProductionVerificationFourDaughters";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  everythingEverywhereAllAtOnceProductionCaseVerification,\n',
  '  everythingEverywhereAllAtOnceProductionCaseVerification,\n  fourDaughtersProductionCaseVerification,\n',
);

// Global production-case census and expansion order.
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 552;", "const EXPECTED_PLAYABLE_SCENARIOS = 553;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 552;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 553;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenEverythingEverywhereAllAtOnceExpansion.ts",\n',
  '  "chapterNineteenEverythingEverywhereAllAtOnceExpansion.ts",\n  "chapterNineteenFourDaughtersExpansion.ts",\n',
);

// Chapter 19 Atlas count; candidate decisions and balanced scheduler are derived from runtime state.
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 552;", "const EXPECTED_ATLAS_COUNT = 553;");

// Closed Chapter 18 handoff observes Chapter 19 without changing the frozen 539 baseline.
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 552, `Global Production Verification registry must contain exactly 552 unique scenarioIds after the thirteenth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 553, `Global Production Verification registry must contain exactly 553 unique scenarioIds after the fourteenth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 552, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 552.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 553, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 553.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 20 && chapter19.byDecision?.P0?.length === 13 && chapter19.byDecision?.P1?.length === 23 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 20 USE_EXISTING / 13 P0 / 23 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 21 && chapter19.byDecision?.P0?.length === 13 && chapter19.byDecision?.P1?.length === 22 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 21 USE_EXISTING / 13 P0 / 22 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Four Daughters" && chapter19.productionStrategy?.nextRecommendedLane === "nonfiction_hybrid", "Chapter 19 balanced scheduler must advance from Everything Everywhere All at Once to Four Daughters after the thirteenth case.");',
  'const fourDaughters = chapter19.candidates.find((candidate) => candidate.title === "Four Daughters");\ninvariant(fourDaughters?.decision === "USE_EXISTING" && fourDaughters?.scenarioId === "scenario_four_daughters_2023" && fourDaughters?.matches === 1 && fourDaughters?.productionVerified === true, "Four Daughters is not closed as the fourteenth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Decision to Leave" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from Four Daughters to Decision to Leave after the fourteenth case.");',
);

// Strict Chapter 19 resolved-state contract.
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Everything Everywhere All at Once",\n  "RRR",\n  "Nickel Boys",',
  '  "Everything Everywhere All at Once",\n  "RRR",\n  "Four Daughters",\n  "Nickel Boys",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Barbie",\n  "Four Daughters",\n  "Anatomy of a Fall",',
  '  "Barbie",\n  "Anatomy of a Fall",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 552;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 553;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 552);", "assert.equal(resolved.atlas.expectedCount, 553);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 552);", "assert.equal(resolved.atlas.actualCount, 553);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 552);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 553);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 20);", "assert.equal(exactUseExisting.length, 21);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 23);", "assert.equal(exactP1Queue.length, 22);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 36);", "assert.equal(resolved.recommendedNewProductionCases.length, 35);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Four Daughters");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Decision to Leave");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "nonfiction_hybrid");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Four Daughters",\n    "Decision to Leave",\n    "Nope",\n    "Saint Omer",\n    "CODA",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Decision to Leave",\n    "Nope",\n    "Saint Omer",\n    "CODA",\n    "All We Imagine as Light",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["nonfiction_hybrid", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Everything Everywhere All at Once"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Decision to Leave") > resolved.recommendedNewProductionCases.indexOf("Four Daughters"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Everything Everywhere All at Once"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Four Daughters"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Nope") > resolved.recommendedNewProductionCases.indexOf("Decision to Leave"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const everythingEverywhereAllAtOnce = resolved.candidates.find((candidate) => candidate.title === "Everything Everywhere All at Once");\n  assert.ok(everythingEverywhereAllAtOnce);\n  assert.equal(everythingEverywhereAllAtOnce.decision, "USE_EXISTING");\n  assert.equal(everythingEverywhereAllAtOnce.scenarioId, "scenario_everything_everywhere_all_at_once_2022");\n  assert.equal(everythingEverywhereAllAtOnce.matches, 1);\n  assert.equal(everythingEverywhereAllAtOnce.productionVerified, true);',
  '  const everythingEverywhereAllAtOnce = resolved.candidates.find((candidate) => candidate.title === "Everything Everywhere All at Once");\n  assert.ok(everythingEverywhereAllAtOnce);\n  assert.equal(everythingEverywhereAllAtOnce.decision, "USE_EXISTING");\n  assert.equal(everythingEverywhereAllAtOnce.scenarioId, "scenario_everything_everywhere_all_at_once_2022");\n  assert.equal(everythingEverywhereAllAtOnce.matches, 1);\n  assert.equal(everythingEverywhereAllAtOnce.productionVerified, true);\n\n  const fourDaughters = resolved.candidates.find((candidate) => candidate.title === "Four Daughters");\n  assert.ok(fourDaughters);\n  assert.equal(fourDaughters.decision, "USE_EXISTING");\n  assert.equal(fourDaughters.scenarioId, "scenario_four_daughters_2023");\n  assert.equal(fourDaughters.matches, 1);\n  assert.equal(fourDaughters.productionVerified, true);',
);

console.log("Four Daughters canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
