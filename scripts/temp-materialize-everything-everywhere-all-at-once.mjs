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
  'import { mergeChapterNineteenTitaneExpansion } from "../../core/chapterNineteenTitaneExpansion.js";\n',
  'import { mergeChapterNineteenTitaneExpansion } from "../../core/chapterNineteenTitaneExpansion.js";\nimport { mergeChapterNineteenEverythingEverywhereAllAtOnceExpansion } from "../../core/chapterNineteenEverythingEverywhereAllAtOnceExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenTitaneScenarios = mergeChapterNineteenTitaneExpansion(chapterNineteenTopGunMaverickScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTitaneScenarios);',
  'const chapterNineteenTitaneScenarios = mergeChapterNineteenTitaneExpansion(chapterNineteenTopGunMaverickScenarios);\nconst chapterNineteenEverythingEverywhereAllAtOnceScenarios = mergeChapterNineteenEverythingEverywhereAllAtOnceExpansion(chapterNineteenTitaneScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenEverythingEverywhereAllAtOnceScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_titane_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_titane_expansion_2026+manual_chapter_nineteen_everything_everywhere_all_at_once_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

// Film Study registry.
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { titaneFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTitane";\n',
  'import { titaneFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTitane";\nimport { everythingEverywhereAllAtOnceFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEverythingEverywhereAllAtOnce";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [titaneFilmHistoryProfile.scenarioId]: titaneFilmHistoryProfile,\n',
  '  [titaneFilmHistoryProfile.scenarioId]: titaneFilmHistoryProfile,\n  [everythingEverywhereAllAtOnceFilmHistoryProfile.scenarioId]: everythingEverywhereAllAtOnceFilmHistoryProfile,\n',
);

// Production Verification registry.
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { titaneProductionCaseVerification } from "./scenarioProductionVerificationTitane";\n',
  'import { titaneProductionCaseVerification } from "./scenarioProductionVerificationTitane";\nimport { everythingEverywhereAllAtOnceProductionCaseVerification } from "./scenarioProductionVerificationEverythingEverywhereAllAtOnce";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  titaneProductionCaseVerification,\n',
  '  titaneProductionCaseVerification,\n  everythingEverywhereAllAtOnceProductionCaseVerification,\n',
);

// Global production-case census and expansion order.
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 551;", "const EXPECTED_PLAYABLE_SCENARIOS = 552;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 551;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 552;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenTitaneExpansion.ts",\n',
  '  "chapterNineteenTitaneExpansion.ts",\n  "chapterNineteenEverythingEverywhereAllAtOnceExpansion.ts",\n',
);

// Chapter 19 Atlas count; candidate decisions and balanced scheduler are derived from runtime state.
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 551;", "const EXPECTED_ATLAS_COUNT = 552;");

// Closed Chapter 18 handoff observes Chapter 19 without changing the frozen 539 baseline.
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 551, `Global Production Verification registry must contain exactly 551 unique scenarioIds after the twelfth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 552, `Global Production Verification registry must contain exactly 552 unique scenarioIds after the thirteenth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 551, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 551.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 552, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 552.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 19 && chapter19.byDecision?.P0?.length === 14 && chapter19.byDecision?.P1?.length === 23 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 19 USE_EXISTING / 14 P0 / 23 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 20 && chapter19.byDecision?.P0?.length === 13 && chapter19.byDecision?.P1?.length === 23 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 20 USE_EXISTING / 13 P0 / 23 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Everything Everywhere All at Once" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Titane to Everything Everywhere All at Once after the twelfth case.");',
  'const everythingEverywhereAllAtOnce = chapter19.candidates.find((candidate) => candidate.title === "Everything Everywhere All at Once");\ninvariant(everythingEverywhereAllAtOnce?.decision === "USE_EXISTING" && everythingEverywhereAllAtOnce?.scenarioId === "scenario_everything_everywhere_all_at_once_2022" && everythingEverywhereAllAtOnce?.matches === 1 && everythingEverywhereAllAtOnce?.productionVerified === true, "Everything Everywhere All at Once is not closed as the thirteenth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Four Daughters" && chapter19.productionStrategy?.nextRecommendedLane === "nonfiction_hybrid", "Chapter 19 balanced scheduler must advance from Everything Everywhere All at Once to Four Daughters after the thirteenth case.");',
);

// Strict Chapter 19 resolved-state contract.
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Avatar: The Way of Water",\n  "Top Gun: Maverick",\n  "RRR",',
  '  "Avatar: The Way of Water",\n  "Top Gun: Maverick",\n  "Everything Everywhere All at Once",\n  "RRR",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  'const exactP0Queue = [\n  "Everything Everywhere All at Once",\n  "Nope",',
  'const exactP0Queue = [\n  "Nope",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 551;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 552;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 551);", "assert.equal(resolved.atlas.expectedCount, 552);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 551);", "assert.equal(resolved.atlas.actualCount, 552);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 551);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 552);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 19);", "assert.equal(exactUseExisting.length, 20);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 14);", "assert.equal(exactP0Queue.length, 13);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 37);", "assert.equal(resolved.recommendedNewProductionCases.length, 36);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Everything Everywhere All at Once");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Four Daughters");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "nonfiction_hybrid");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Everything Everywhere All at Once",\n    "Four Daughters",\n    "Decision to Leave",\n    "Nope",\n    "Saint Omer",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Four Daughters",\n    "Decision to Leave",\n    "Nope",\n    "Saint Omer",\n    "CODA",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["independent_low_mid_budget", "nonfiction_hybrid", "regional_global", "industrial_scale_technical", "auteur_festival"]',
  '["nonfiction_hybrid", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Titane"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Four Daughters") > resolved.recommendedNewProductionCases.indexOf("Everything Everywhere All at Once"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Titane"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Everything Everywhere All at Once"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Decision to Leave") > resolved.recommendedNewProductionCases.indexOf("Four Daughters"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const titane = resolved.candidates.find((candidate) => candidate.title === "Titane");\n  assert.ok(titane);\n  assert.equal(titane.decision, "USE_EXISTING");\n  assert.equal(titane.scenarioId, "scenario_titane_2021");\n  assert.equal(titane.matches, 1);\n  assert.equal(titane.productionVerified, true);',
  '  const titane = resolved.candidates.find((candidate) => candidate.title === "Titane");\n  assert.ok(titane);\n  assert.equal(titane.decision, "USE_EXISTING");\n  assert.equal(titane.scenarioId, "scenario_titane_2021");\n  assert.equal(titane.matches, 1);\n  assert.equal(titane.productionVerified, true);\n\n  const everythingEverywhereAllAtOnce = resolved.candidates.find((candidate) => candidate.title === "Everything Everywhere All at Once");\n  assert.ok(everythingEverywhereAllAtOnce);\n  assert.equal(everythingEverywhereAllAtOnce.decision, "USE_EXISTING");\n  assert.equal(everythingEverywhereAllAtOnce.scenarioId, "scenario_everything_everywhere_all_at_once_2022");\n  assert.equal(everythingEverywhereAllAtOnce.matches, 1);\n  assert.equal(everythingEverywhereAllAtOnce.productionVerified, true);',
);

console.log("Everything Everywhere All at Once canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
