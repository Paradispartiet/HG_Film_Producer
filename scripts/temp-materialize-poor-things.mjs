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
  'import { mergeChapterNineteenGodzillaMinusOneExpansion } from "../../core/chapterNineteenGodzillaMinusOneExpansion.js";\n',
  'import { mergeChapterNineteenGodzillaMinusOneExpansion } from "../../core/chapterNineteenGodzillaMinusOneExpansion.js";\nimport { mergeChapterNineteenPoorThingsExpansion } from "../../core/chapterNineteenPoorThingsExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenGodzillaMinusOneScenarios = mergeChapterNineteenGodzillaMinusOneExpansion(chapterNineteenFlowScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenGodzillaMinusOneScenarios);',
  'const chapterNineteenGodzillaMinusOneScenarios = mergeChapterNineteenGodzillaMinusOneExpansion(chapterNineteenFlowScenarios);\nconst chapterNineteenPoorThingsScenarios = mergeChapterNineteenPoorThingsExpansion(chapterNineteenGodzillaMinusOneScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenPoorThingsScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_godzilla_minus_one_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_godzilla_minus_one_expansion_2026+manual_chapter_nineteen_poor_things_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { godzillaMinusOneFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenGodzillaMinusOne";\n',
  'import { godzillaMinusOneFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenGodzillaMinusOne";\nimport { poorThingsFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenPoorThings";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [godzillaMinusOneFilmHistoryProfile.scenarioId]: godzillaMinusOneFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [godzillaMinusOneFilmHistoryProfile.scenarioId]: godzillaMinusOneFilmHistoryProfile,\n  [poorThingsFilmHistoryProfile.scenarioId]: poorThingsFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { godzillaMinusOneProductionCaseVerification } from "./scenarioProductionVerificationGodzillaMinusOne";\n',
  'import { godzillaMinusOneProductionCaseVerification } from "./scenarioProductionVerificationGodzillaMinusOne";\nimport { poorThingsProductionCaseVerification } from "./scenarioProductionVerificationPoorThings";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  godzillaMinusOneProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  godzillaMinusOneProductionCaseVerification,\n  poorThingsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 566;", "const EXPECTED_PLAYABLE_SCENARIOS = 567;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 566;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 567;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenGodzillaMinusOneExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenGodzillaMinusOneExpansion.ts",\n  "chapterNineteenPoorThingsExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 566;", "const EXPECTED_ATLAS_COUNT = 567;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 566, `Global Production Verification registry must contain exactly 566 unique scenarioIds after the twenty-seventh Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 567, `Global Production Verification registry must contain exactly 567 unique scenarioIds after the twenty-eighth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 566, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 566.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 567, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 567.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 34 && chapter19.byDecision?.P0?.length === 8 && chapter19.byDecision?.P1?.length === 14 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 34 USE_EXISTING / 8 P0 / 14 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 35 && chapter19.byDecision?.P0?.length === 7 && chapter19.byDecision?.P1?.length === 14 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 35 USE_EXISTING / 7 P0 / 14 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(godzillaMinusOne?.decision === "USE_EXISTING" && godzillaMinusOne?.scenarioId === "scenario_godzilla_minus_one_2023" && godzillaMinusOne?.matches === 1 && godzillaMinusOne?.productionVerified === true, "Godzilla Minus One is not closed as the twenty-seventh production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Poor Things" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from Godzilla Minus One to Poor Things after the twenty-seventh case.");',
  'invariant(godzillaMinusOne?.decision === "USE_EXISTING" && godzillaMinusOne?.scenarioId === "scenario_godzilla_minus_one_2023" && godzillaMinusOne?.matches === 1 && godzillaMinusOne?.productionVerified === true, "Godzilla Minus One is not closed as the twenty-seventh production-verified Chapter 19 USE_EXISTING case.");\nconst poorThings = chapter19.candidates.find((candidate) => candidate.title === "Poor Things");\ninvariant(poorThings?.decision === "USE_EXISTING" && poorThings?.scenarioId === "scenario_poor_things_2023" && poorThings?.matches === 1 && poorThings?.productionVerified === true, "Poor Things is not closed as the twenty-eighth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Sentimental Value" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Poor Things to Sentimental Value after the twenty-eighth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Killers of the Flower Moon",\n  "Godzilla Minus One",\n  "Four Daughters",',
  '  "Killers of the Flower Moon",\n  "Poor Things",\n  "Godzilla Minus One",\n  "Four Daughters",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Poor Things",\n  "The Zone of Interest",',
  '  "The Zone of Interest",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 566;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 567;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 566);", "assert.equal(resolved.atlas.expectedCount, 567);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 566);", "assert.equal(resolved.atlas.actualCount, 567);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 566);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 567);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 34);", "assert.equal(exactUseExisting.length, 35);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 8);", "assert.equal(exactP0Queue.length, 7);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 22);", "assert.equal(resolved.recommendedNewProductionCases.length, 21);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Poor Things");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Sentimental Value");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Poor Things",\n    "Sentimental Value",\n    "The Substance",\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Sentimental Value",\n    "The Substance",\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n    "The Power of the Dog",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"]',
  '["auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Godzilla Minus One"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Godzilla Minus One"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Poor Things"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const godzillaMinusOne = resolved.candidates.find((candidate) => candidate.title === "Godzilla Minus One");\n  assert.ok(godzillaMinusOne);\n  assert.equal(godzillaMinusOne.decision, "USE_EXISTING");\n  assert.equal(godzillaMinusOne.scenarioId, "scenario_godzilla_minus_one_2023");\n  assert.equal(godzillaMinusOne.matches, 1);\n  assert.equal(godzillaMinusOne.productionVerified, true);',
  '  const godzillaMinusOne = resolved.candidates.find((candidate) => candidate.title === "Godzilla Minus One");\n  assert.ok(godzillaMinusOne);\n  assert.equal(godzillaMinusOne.decision, "USE_EXISTING");\n  assert.equal(godzillaMinusOne.scenarioId, "scenario_godzilla_minus_one_2023");\n  assert.equal(godzillaMinusOne.matches, 1);\n  assert.equal(godzillaMinusOne.productionVerified, true);\n\n  const poorThings = resolved.candidates.find((candidate) => candidate.title === "Poor Things");\n  assert.ok(poorThings);\n  assert.equal(poorThings.decision, "USE_EXISTING");\n  assert.equal(poorThings.scenarioId, "scenario_poor_things_2023");\n  assert.equal(poorThings.matches, 1);\n  assert.equal(poorThings.productionVerified, true);',
);

console.log("Poor Things canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
