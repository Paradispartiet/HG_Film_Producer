import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: expected replacement anchor not found: ${before.slice(0, 180)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: replacement anchor is not unique: ${before.slice(0, 180)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

function replaceAfter(path, marker, before, after) {
  const source = readFileSync(path, "utf8");
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) throw new Error(`${path}: section marker not found: ${marker}`);
  if (source.indexOf(marker, markerIndex + marker.length) >= 0) throw new Error(`${path}: section marker is not unique: ${marker}`);
  const first = source.indexOf(before, markerIndex + marker.length);
  if (first < 0) throw new Error(`${path}: replacement anchor not found after ${marker}: ${before.slice(0, 180)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenTheSeedOfTheSacredFigExpansion } from "../../core/chapterNineteenTheSeedOfTheSacredFigExpansion.js";\n',
  'import { mergeChapterNineteenTheSeedOfTheSacredFigExpansion } from "../../core/chapterNineteenTheSeedOfTheSacredFigExpansion.js";\nimport { mergeChapterNineteenKillersOfTheFlowerMoonExpansion } from "../../core/chapterNineteenKillersOfTheFlowerMoonExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenTheSeedOfTheSacredFigScenarios = mergeChapterNineteenTheSeedOfTheSacredFigExpansion(chapterNineteenAnoraScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheSeedOfTheSacredFigScenarios);',
  'const chapterNineteenTheSeedOfTheSacredFigScenarios = mergeChapterNineteenTheSeedOfTheSacredFigExpansion(chapterNineteenAnoraScenarios);\nconst chapterNineteenKillersOfTheFlowerMoonScenarios = mergeChapterNineteenKillersOfTheFlowerMoonExpansion(chapterNineteenTheSeedOfTheSacredFigScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenKillersOfTheFlowerMoonScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_the_seed_of_the_sacred_fig_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_the_seed_of_the_sacred_fig_expansion_2026+manual_chapter_nineteen_killers_of_the_flower_moon_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theSeedOfTheSacredFigFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSeedOfTheSacredFig";\n',
  'import { theSeedOfTheSacredFigFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSeedOfTheSacredFig";\nimport { killersOfTheFlowerMoonFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKillersOfTheFlowerMoon";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [theSeedOfTheSacredFigFilmHistoryProfile.scenarioId]: theSeedOfTheSacredFigFilmHistoryProfile,\n',
  '  [theSeedOfTheSacredFigFilmHistoryProfile.scenarioId]: theSeedOfTheSacredFigFilmHistoryProfile,\n  [killersOfTheFlowerMoonFilmHistoryProfile.scenarioId]: killersOfTheFlowerMoonFilmHistoryProfile,\n',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theSeedOfTheSacredFigProductionCaseVerification } from "./scenarioProductionVerificationTheSeedOfTheSacredFig";\n',
  'import { theSeedOfTheSacredFigProductionCaseVerification } from "./scenarioProductionVerificationTheSeedOfTheSacredFig";\nimport { killersOfTheFlowerMoonProductionCaseVerification } from "./scenarioProductionVerificationKillersOfTheFlowerMoon";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  theSeedOfTheSacredFigProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  theSeedOfTheSacredFigProductionCaseVerification,\n  killersOfTheFlowerMoonProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 562;", "const EXPECTED_PLAYABLE_SCENARIOS = 563;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 562;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 563;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenTheSeedOfTheSacredFigExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenTheSeedOfTheSacredFigExpansion.ts",\n  "chapterNineteenKillersOfTheFlowerMoonExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 562;", "const EXPECTED_ATLAS_COUNT = 563;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 562, `Global Production Verification registry must contain exactly 562 unique scenarioIds after the twenty-third Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 563, `Global Production Verification registry must contain exactly 563 unique scenarioIds after the twenty-fourth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 562, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 562.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 563, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 563.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 30 && chapter19.byDecision?.P0?.length === 11 && chapter19.byDecision?.P1?.length === 15 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 30 USE_EXISTING / 11 P0 / 15 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 31 && chapter19.byDecision?.P0?.length === 10 && chapter19.byDecision?.P1?.length === 15 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 31 USE_EXISTING / 10 P0 / 15 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Killers of the Flower Moon" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from The Seed of the Sacred Fig to Killers of the Flower Moon after the twenty-third case.");',
  'const killersOfTheFlowerMoon = chapter19.candidates.find((candidate) => candidate.title === "Killers of the Flower Moon");\ninvariant(killersOfTheFlowerMoon?.decision === "USE_EXISTING" && killersOfTheFlowerMoon?.scenarioId === "scenario_killers_of_the_flower_moon_2023" && killersOfTheFlowerMoon?.matches === 1 && killersOfTheFlowerMoon?.productionVerified === true, "Killers of the Flower Moon is not closed as the twenty-fourth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Anatomy of a Fall" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Killers of the Flower Moon to Anatomy of a Fall after the twenty-fourth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Oppenheimer",\n  "Four Daughters",',
  '  "Oppenheimer",\n  "Killers of the Flower Moon",\n  "Four Daughters",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Killers of the Flower Moon",\n  "Poor Things",',
  '  "Poor Things",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 562;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 563;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 562);", "assert.equal(resolved.atlas.expectedCount, 563);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 562);", "assert.equal(resolved.atlas.actualCount, 563);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 562);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 563);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 30);", "assert.equal(exactUseExisting.length, 31);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 11);", "assert.equal(exactP0Queue.length, 10);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 26);", "assert.equal(resolved.recommendedNewProductionCases.length, 25);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Killers of the Flower Moon");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Anatomy of a Fall");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Killers of the Flower Moon",\n    "Anatomy of a Fall",\n    "Flow",\n    "Godzilla Minus One",\n    "Poor Things",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Anatomy of a Fall",\n    "Flow",\n    "Godzilla Minus One",\n    "Poor Things",\n    "Sentimental Value",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"]',
  '["auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Seed of the Sacred Fig"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Seed of the Sacred Fig"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Killers of the Flower Moon"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const theSeedOfTheSacredFig = resolved.candidates.find((candidate) => candidate.title === "The Seed of the Sacred Fig");\n  assert.ok(theSeedOfTheSacredFig);\n  assert.equal(theSeedOfTheSacredFig.decision, "USE_EXISTING");\n  assert.equal(theSeedOfTheSacredFig.scenarioId, "scenario_the_seed_of_the_sacred_fig_2024");\n  assert.equal(theSeedOfTheSacredFig.matches, 1);\n  assert.equal(theSeedOfTheSacredFig.productionVerified, true);',
  '  const theSeedOfTheSacredFig = resolved.candidates.find((candidate) => candidate.title === "The Seed of the Sacred Fig");\n  assert.ok(theSeedOfTheSacredFig);\n  assert.equal(theSeedOfTheSacredFig.decision, "USE_EXISTING");\n  assert.equal(theSeedOfTheSacredFig.scenarioId, "scenario_the_seed_of_the_sacred_fig_2024");\n  assert.equal(theSeedOfTheSacredFig.matches, 1);\n  assert.equal(theSeedOfTheSacredFig.productionVerified, true);\n\n  const killersOfTheFlowerMoon = resolved.candidates.find((candidate) => candidate.title === "Killers of the Flower Moon");\n  assert.ok(killersOfTheFlowerMoon);\n  assert.equal(killersOfTheFlowerMoon.decision, "USE_EXISTING");\n  assert.equal(killersOfTheFlowerMoon.scenarioId, "scenario_killers_of_the_flower_moon_2023");\n  assert.equal(killersOfTheFlowerMoon.matches, 1);\n  assert.equal(killersOfTheFlowerMoon.productionVerified, true);',
);

console.log("Killers of the Flower Moon canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
