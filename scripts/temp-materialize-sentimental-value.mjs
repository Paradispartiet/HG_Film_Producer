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
  'import { mergeChapterNineteenPoorThingsExpansion } from "../../core/chapterNineteenPoorThingsExpansion.js";\n',
  'import { mergeChapterNineteenPoorThingsExpansion } from "../../core/chapterNineteenPoorThingsExpansion.js";\nimport { mergeChapterNineteenSentimentalValueExpansion } from "../../core/chapterNineteenSentimentalValueExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenPoorThingsScenarios = mergeChapterNineteenPoorThingsExpansion(chapterNineteenGodzillaMinusOneScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenPoorThingsScenarios);',
  'const chapterNineteenPoorThingsScenarios = mergeChapterNineteenPoorThingsExpansion(chapterNineteenGodzillaMinusOneScenarios);\nconst chapterNineteenSentimentalValueScenarios = mergeChapterNineteenSentimentalValueExpansion(chapterNineteenPoorThingsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSentimentalValueScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_poor_things_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_poor_things_expansion_2026+manual_chapter_nineteen_sentimental_value_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { poorThingsFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenPoorThings";\n',
  'import { poorThingsFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenPoorThings";\nimport { sentimentalValueFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSentimentalValue";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [poorThingsFilmHistoryProfile.scenarioId]: poorThingsFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [poorThingsFilmHistoryProfile.scenarioId]: poorThingsFilmHistoryProfile,\n  [sentimentalValueFilmHistoryProfile.scenarioId]: sentimentalValueFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { poorThingsProductionCaseVerification } from "./scenarioProductionVerificationPoorThings";\n',
  'import { poorThingsProductionCaseVerification } from "./scenarioProductionVerificationPoorThings";\nimport { sentimentalValueProductionCaseVerification } from "./scenarioProductionVerificationSentimentalValue";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  poorThingsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  poorThingsProductionCaseVerification,\n  sentimentalValueProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 567;", "const EXPECTED_PLAYABLE_SCENARIOS = 568;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 567;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 568;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenPoorThingsExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenPoorThingsExpansion.ts",\n  "chapterNineteenSentimentalValueExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 567;", "const EXPECTED_ATLAS_COUNT = 568;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 567, `Global Production Verification registry must contain exactly 567 unique scenarioIds after the twenty-eighth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 568, `Global Production Verification registry must contain exactly 568 unique scenarioIds after the twenty-ninth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 567, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 567.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 568, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 568.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 35 && chapter19.byDecision?.P0?.length === 7 && chapter19.byDecision?.P1?.length === 14 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 35 USE_EXISTING / 7 P0 / 14 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 36 && chapter19.byDecision?.P0?.length === 7 && chapter19.byDecision?.P1?.length === 13 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 36 USE_EXISTING / 7 P0 / 13 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const poorThings = chapter19.candidates.find((candidate) => candidate.title === "Poor Things");\ninvariant(poorThings?.decision === "USE_EXISTING" && poorThings?.scenarioId === "scenario_poor_things_2023" && poorThings?.matches === 1 && poorThings?.productionVerified === true, "Poor Things is not closed as the twenty-eighth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Sentimental Value" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Poor Things to Sentimental Value after the twenty-eighth case.");',
  'const poorThings = chapter19.candidates.find((candidate) => candidate.title === "Poor Things");\ninvariant(poorThings?.decision === "USE_EXISTING" && poorThings?.scenarioId === "scenario_poor_things_2023" && poorThings?.matches === 1 && poorThings?.productionVerified === true, "Poor Things is not closed as the twenty-eighth production-verified Chapter 19 USE_EXISTING case.");\nconst sentimentalValue = chapter19.candidates.find((candidate) => candidate.title === "Sentimental Value");\ninvariant(sentimentalValue?.decision === "USE_EXISTING" && sentimentalValue?.scenarioId === "scenario_sentimental_value_2025" && sentimentalValue?.matches === 1 && sentimentalValue?.productionVerified === true, "Sentimental Value is not closed as the twenty-ninth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Substance" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Sentimental Value to The Substance after the twenty-ninth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Dahomey",\n  "Anora",\n] as const;',
  '  "Dahomey",\n  "Anora",\n  "Sentimental Value",\n] as const;',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "KPop Demon Hunters",\n  "Sentimental Value",\n  "The Secret Agent",',
  '  "KPop Demon Hunters",\n  "The Secret Agent",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 567;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 568;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 567);", "assert.equal(resolved.atlas.expectedCount, 568);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 567);", "assert.equal(resolved.atlas.actualCount, 568);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 567);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 568);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 35);", "assert.equal(exactUseExisting.length, 36);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 14);", "assert.equal(exactP1Queue.length, 13);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 21);", "assert.equal(resolved.recommendedNewProductionCases.length, 20);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Sentimental Value");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "The Substance");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Sentimental Value",\n    "The Substance",\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n    "The Power of the Dog",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "The Substance",\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n    "The Power of the Dog",\n    "Guillermo del Toro\'s Pinocchio",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival"]',
  '["independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Poor Things"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Poor Things"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Sentimental Value"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const poorThings = resolved.candidates.find((candidate) => candidate.title === "Poor Things");\n  assert.ok(poorThings);\n  assert.equal(poorThings.decision, "USE_EXISTING");\n  assert.equal(poorThings.scenarioId, "scenario_poor_things_2023");\n  assert.equal(poorThings.matches, 1);\n  assert.equal(poorThings.productionVerified, true);',
  '  const poorThings = resolved.candidates.find((candidate) => candidate.title === "Poor Things");\n  assert.ok(poorThings);\n  assert.equal(poorThings.decision, "USE_EXISTING");\n  assert.equal(poorThings.scenarioId, "scenario_poor_things_2023");\n  assert.equal(poorThings.matches, 1);\n  assert.equal(poorThings.productionVerified, true);\n\n  const sentimentalValue = resolved.candidates.find((candidate) => candidate.title === "Sentimental Value");\n  assert.ok(sentimentalValue);\n  assert.equal(sentimentalValue.decision, "USE_EXISTING");\n  assert.equal(sentimentalValue.scenarioId, "scenario_sentimental_value_2025");\n  assert.equal(sentimentalValue.matches, 1);\n  assert.equal(sentimentalValue.productionVerified, true);',
);

console.log("Sentimental Value canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
