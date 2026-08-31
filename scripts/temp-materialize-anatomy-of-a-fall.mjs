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
  'import { mergeChapterNineteenKillersOfTheFlowerMoonExpansion } from "../../core/chapterNineteenKillersOfTheFlowerMoonExpansion.js";\n',
  'import { mergeChapterNineteenKillersOfTheFlowerMoonExpansion } from "../../core/chapterNineteenKillersOfTheFlowerMoonExpansion.js";\nimport { mergeChapterNineteenAnatomyOfAFallExpansion } from "../../core/chapterNineteenAnatomyOfAFallExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenKillersOfTheFlowerMoonScenarios = mergeChapterNineteenKillersOfTheFlowerMoonExpansion(chapterNineteenTheSeedOfTheSacredFigScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenKillersOfTheFlowerMoonScenarios);',
  'const chapterNineteenKillersOfTheFlowerMoonScenarios = mergeChapterNineteenKillersOfTheFlowerMoonExpansion(chapterNineteenTheSeedOfTheSacredFigScenarios);\nconst chapterNineteenAnatomyOfAFallScenarios = mergeChapterNineteenAnatomyOfAFallExpansion(chapterNineteenKillersOfTheFlowerMoonScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAnatomyOfAFallScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_killers_of_the_flower_moon_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_killers_of_the_flower_moon_expansion_2026+manual_chapter_nineteen_anatomy_of_a_fall_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { killersOfTheFlowerMoonFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKillersOfTheFlowerMoon";\n',
  'import { killersOfTheFlowerMoonFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKillersOfTheFlowerMoon";\nimport { anatomyOfAFallFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAnatomyOfAFall";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [killersOfTheFlowerMoonFilmHistoryProfile.scenarioId]: killersOfTheFlowerMoonFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [killersOfTheFlowerMoonFilmHistoryProfile.scenarioId]: killersOfTheFlowerMoonFilmHistoryProfile,\n  [anatomyOfAFallFilmHistoryProfile.scenarioId]: anatomyOfAFallFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { killersOfTheFlowerMoonProductionCaseVerification } from "./scenarioProductionVerificationKillersOfTheFlowerMoon";\n',
  'import { killersOfTheFlowerMoonProductionCaseVerification } from "./scenarioProductionVerificationKillersOfTheFlowerMoon";\nimport { anatomyOfAFallProductionCaseVerification } from "./scenarioProductionVerificationAnatomyOfAFall";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  killersOfTheFlowerMoonProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  killersOfTheFlowerMoonProductionCaseVerification,\n  anatomyOfAFallProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 563;", "const EXPECTED_PLAYABLE_SCENARIOS = 564;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 563;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 564;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenKillersOfTheFlowerMoonExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenKillersOfTheFlowerMoonExpansion.ts",\n  "chapterNineteenAnatomyOfAFallExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 563;", "const EXPECTED_ATLAS_COUNT = 564;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 563, `Global Production Verification registry must contain exactly 563 unique scenarioIds after the twenty-fourth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 564, `Global Production Verification registry must contain exactly 564 unique scenarioIds after the twenty-fifth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 563, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 563.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 564, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 564.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 31 && chapter19.byDecision?.P0?.length === 10 && chapter19.byDecision?.P1?.length === 15 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 31 USE_EXISTING / 10 P0 / 15 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 32 && chapter19.byDecision?.P0?.length === 10 && chapter19.byDecision?.P1?.length === 14 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 32 USE_EXISTING / 10 P0 / 14 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Anatomy of a Fall" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Killers of the Flower Moon to Anatomy of a Fall after the twenty-fourth case.");',
  'const anatomyOfAFall = chapter19.candidates.find((candidate) => candidate.title === "Anatomy of a Fall");\ninvariant(anatomyOfAFall?.decision === "USE_EXISTING" && anatomyOfAFall?.scenarioId === "scenario_anatomy_of_a_fall_2023" && anatomyOfAFall?.matches === 1 && anatomyOfAFall?.productionVerified === true, "Anatomy of a Fall is not closed as the twenty-fifth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Flow" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Anatomy of a Fall to Flow after the twenty-fifth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Four Daughters",\n  "Nickel Boys",',
  '  "Four Daughters",\n  "Anatomy of a Fall",\n  "Nickel Boys",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "Barbie",\n  "Anatomy of a Fall",\n  "The Brutalist",',
  '  "Barbie",\n  "The Brutalist",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 563;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 564;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 563);", "assert.equal(resolved.atlas.expectedCount, 564);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 563);", "assert.equal(resolved.atlas.actualCount, 564);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 563);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 564);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 31);", "assert.equal(exactUseExisting.length, 32);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 15);", "assert.equal(exactP1Queue.length, 14);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 25);", "assert.equal(resolved.recommendedNewProductionCases.length, 24);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Anatomy of a Fall");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Flow");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Anatomy of a Fall",\n    "Flow",\n    "Godzilla Minus One",\n    "Poor Things",\n    "Sentimental Value",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Flow",\n    "Godzilla Minus One",\n    "Poor Things",\n    "Sentimental Value",\n    "The Substance",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival"]',
  '["independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Killers of the Flower Moon"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Killers of the Flower Moon"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Anatomy of a Fall"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const killersOfTheFlowerMoon = resolved.candidates.find((candidate) => candidate.title === "Killers of the Flower Moon");\n  assert.ok(killersOfTheFlowerMoon);\n  assert.equal(killersOfTheFlowerMoon.decision, "USE_EXISTING");\n  assert.equal(killersOfTheFlowerMoon.scenarioId, "scenario_killers_of_the_flower_moon_2023");\n  assert.equal(killersOfTheFlowerMoon.matches, 1);\n  assert.equal(killersOfTheFlowerMoon.productionVerified, true);',
  '  const killersOfTheFlowerMoon = resolved.candidates.find((candidate) => candidate.title === "Killers of the Flower Moon");\n  assert.ok(killersOfTheFlowerMoon);\n  assert.equal(killersOfTheFlowerMoon.decision, "USE_EXISTING");\n  assert.equal(killersOfTheFlowerMoon.scenarioId, "scenario_killers_of_the_flower_moon_2023");\n  assert.equal(killersOfTheFlowerMoon.matches, 1);\n  assert.equal(killersOfTheFlowerMoon.productionVerified, true);\n\n  const anatomyOfAFall = resolved.candidates.find((candidate) => candidate.title === "Anatomy of a Fall");\n  assert.ok(anatomyOfAFall);\n  assert.equal(anatomyOfAFall.decision, "USE_EXISTING");\n  assert.equal(anatomyOfAFall.scenarioId, "scenario_anatomy_of_a_fall_2023");\n  assert.equal(anatomyOfAFall.matches, 1);\n  assert.equal(anatomyOfAFall.productionVerified, true);',
);

console.log("Anatomy of a Fall canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
