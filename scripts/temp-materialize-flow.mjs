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
  'import { mergeChapterNineteenAnatomyOfAFallExpansion } from "../../core/chapterNineteenAnatomyOfAFallExpansion.js";\n',
  'import { mergeChapterNineteenAnatomyOfAFallExpansion } from "../../core/chapterNineteenAnatomyOfAFallExpansion.js";\nimport { mergeChapterNineteenFlowExpansion } from "../../core/chapterNineteenFlowExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenAnatomyOfAFallScenarios = mergeChapterNineteenAnatomyOfAFallExpansion(chapterNineteenKillersOfTheFlowerMoonScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAnatomyOfAFallScenarios);',
  'const chapterNineteenAnatomyOfAFallScenarios = mergeChapterNineteenAnatomyOfAFallExpansion(chapterNineteenKillersOfTheFlowerMoonScenarios);\nconst chapterNineteenFlowScenarios = mergeChapterNineteenFlowExpansion(chapterNineteenAnatomyOfAFallScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenFlowScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_anatomy_of_a_fall_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_anatomy_of_a_fall_expansion_2026+manual_chapter_nineteen_flow_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { anatomyOfAFallFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAnatomyOfAFall";\n',
  'import { anatomyOfAFallFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAnatomyOfAFall";\nimport { flowFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFlow";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [anatomyOfAFallFilmHistoryProfile.scenarioId]: anatomyOfAFallFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [anatomyOfAFallFilmHistoryProfile.scenarioId]: anatomyOfAFallFilmHistoryProfile,\n  [flowFilmHistoryProfile.scenarioId]: flowFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { anatomyOfAFallProductionCaseVerification } from "./scenarioProductionVerificationAnatomyOfAFall";\n',
  'import { anatomyOfAFallProductionCaseVerification } from "./scenarioProductionVerificationAnatomyOfAFall";\nimport { flowProductionCaseVerification } from "./scenarioProductionVerificationFlow";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  anatomyOfAFallProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  anatomyOfAFallProductionCaseVerification,\n  flowProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 564;", "const EXPECTED_PLAYABLE_SCENARIOS = 565;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 564;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 565;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenAnatomyOfAFallExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenAnatomyOfAFallExpansion.ts",\n  "chapterNineteenFlowExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 564;", "const EXPECTED_ATLAS_COUNT = 565;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 564, `Global Production Verification registry must contain exactly 564 unique scenarioIds after the twenty-fifth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 565, `Global Production Verification registry must contain exactly 565 unique scenarioIds after the twenty-sixth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 564, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 564.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 565, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 565.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 32 && chapter19.byDecision?.P0?.length === 10 && chapter19.byDecision?.P1?.length === 14 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 32 USE_EXISTING / 10 P0 / 14 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 33 && chapter19.byDecision?.P0?.length === 9 && chapter19.byDecision?.P1?.length === 14 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 33 USE_EXISTING / 9 P0 / 14 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(anatomyOfAFall?.decision === "USE_EXISTING" && anatomyOfAFall?.scenarioId === "scenario_anatomy_of_a_fall_2023" && anatomyOfAFall?.matches === 1 && anatomyOfAFall?.productionVerified === true, "Anatomy of a Fall is not closed as the twenty-fifth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Flow" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Anatomy of a Fall to Flow after the twenty-fifth case.");',
  'invariant(anatomyOfAFall?.decision === "USE_EXISTING" && anatomyOfAFall?.scenarioId === "scenario_anatomy_of_a_fall_2023" && anatomyOfAFall?.matches === 1 && anatomyOfAFall?.productionVerified === true, "Anatomy of a Fall is not closed as the twenty-fifth production-verified Chapter 19 USE_EXISTING case.");\nconst flow = chapter19.candidates.find((candidate) => candidate.title === "Flow");\ninvariant(flow?.decision === "USE_EXISTING" && flow?.scenarioId === "scenario_flow_2024" && flow?.matches === 1 && flow?.productionVerified === true, "Flow is not closed as the twenty-sixth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Godzilla Minus One" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from Flow to Godzilla Minus One after the twenty-sixth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Four Daughters",\n  "Anatomy of a Fall",\n  "Nickel Boys",',
  '  "Four Daughters",\n  "Anatomy of a Fall",\n  "Flow",\n  "Nickel Boys",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Spider-Man: Across the Spider-Verse",\n  "Dune: Part Two",\n  "Flow",\n  "The Substance",',
  '  "Spider-Man: Across the Spider-Verse",\n  "Dune: Part Two",\n  "The Substance",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 564;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 565;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 564);", "assert.equal(resolved.atlas.expectedCount, 565);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 564);", "assert.equal(resolved.atlas.actualCount, 565);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 564);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 565);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 32);", "assert.equal(exactUseExisting.length, 33);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 10);", "assert.equal(exactP0Queue.length, 9);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 24);", "assert.equal(resolved.recommendedNewProductionCases.length, 23);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Flow");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Godzilla Minus One");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Flow",\n    "Godzilla Minus One",\n    "Poor Things",\n    "Sentimental Value",\n    "The Substance",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Godzilla Minus One",\n    "Poor Things",\n    "Sentimental Value",\n    "The Substance",\n    "The Boy and the Heron",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Anatomy of a Fall"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Anatomy of a Fall"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Flow"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const anatomyOfAFall = resolved.candidates.find((candidate) => candidate.title === "Anatomy of a Fall");\n  assert.ok(anatomyOfAFall);\n  assert.equal(anatomyOfAFall.decision, "USE_EXISTING");\n  assert.equal(anatomyOfAFall.scenarioId, "scenario_anatomy_of_a_fall_2023");\n  assert.equal(anatomyOfAFall.matches, 1);\n  assert.equal(anatomyOfAFall.productionVerified, true);',
  '  const anatomyOfAFall = resolved.candidates.find((candidate) => candidate.title === "Anatomy of a Fall");\n  assert.ok(anatomyOfAFall);\n  assert.equal(anatomyOfAFall.decision, "USE_EXISTING");\n  assert.equal(anatomyOfAFall.scenarioId, "scenario_anatomy_of_a_fall_2023");\n  assert.equal(anatomyOfAFall.matches, 1);\n  assert.equal(anatomyOfAFall.productionVerified, true);\n\n  const flow = resolved.candidates.find((candidate) => candidate.title === "Flow");\n  assert.ok(flow);\n  assert.equal(flow.decision, "USE_EXISTING");\n  assert.equal(flow.scenarioId, "scenario_flow_2024");\n  assert.equal(flow.matches, 1);\n  assert.equal(flow.productionVerified, true);',
);

console.log("Flow canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
