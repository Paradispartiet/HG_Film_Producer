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
  'import { mergeChapterNineteenSentimentalValueExpansion } from "../../core/chapterNineteenSentimentalValueExpansion.js";\n',
  'import { mergeChapterNineteenSentimentalValueExpansion } from "../../core/chapterNineteenSentimentalValueExpansion.js";\nimport { mergeChapterNineteenTheSubstanceExpansion } from "../../core/chapterNineteenTheSubstanceExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenSentimentalValueScenarios = mergeChapterNineteenSentimentalValueExpansion(chapterNineteenPoorThingsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSentimentalValueScenarios);',
  'const chapterNineteenSentimentalValueScenarios = mergeChapterNineteenSentimentalValueExpansion(chapterNineteenPoorThingsScenarios);\nconst chapterNineteenTheSubstanceScenarios = mergeChapterNineteenTheSubstanceExpansion(chapterNineteenSentimentalValueScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheSubstanceScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_sentimental_value_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_sentimental_value_expansion_2026+manual_chapter_nineteen_the_substance_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { sentimentalValueFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSentimentalValue";\n',
  'import { sentimentalValueFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSentimentalValue";\nimport { theSubstanceFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSubstance";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [sentimentalValueFilmHistoryProfile.scenarioId]: sentimentalValueFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [sentimentalValueFilmHistoryProfile.scenarioId]: sentimentalValueFilmHistoryProfile,\n  [theSubstanceFilmHistoryProfile.scenarioId]: theSubstanceFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { sentimentalValueProductionCaseVerification } from "./scenarioProductionVerificationSentimentalValue";\n',
  'import { sentimentalValueProductionCaseVerification } from "./scenarioProductionVerificationSentimentalValue";\nimport { theSubstanceProductionCaseVerification } from "./scenarioProductionVerificationTheSubstance";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  sentimentalValueProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  sentimentalValueProductionCaseVerification,\n  theSubstanceProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 568;", "const EXPECTED_PLAYABLE_SCENARIOS = 569;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 568;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 569;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenSentimentalValueExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenSentimentalValueExpansion.ts",\n  "chapterNineteenTheSubstanceExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 568;", "const EXPECTED_ATLAS_COUNT = 569;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 568, `Global Production Verification registry must contain exactly 568 unique scenarioIds after the twenty-ninth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 569, `Global Production Verification registry must contain exactly 569 unique scenarioIds after the thirtieth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 568, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 568.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 569, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 569.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 36 && chapter19.byDecision?.P0?.length === 7 && chapter19.byDecision?.P1?.length === 13 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 36 USE_EXISTING / 7 P0 / 13 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 37 && chapter19.byDecision?.P0?.length === 6 && chapter19.byDecision?.P1?.length === 13 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 37 USE_EXISTING / 6 P0 / 13 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const sentimentalValue = chapter19.candidates.find((candidate) => candidate.title === "Sentimental Value");\ninvariant(sentimentalValue?.decision === "USE_EXISTING" && sentimentalValue?.scenarioId === "scenario_sentimental_value_2025" && sentimentalValue?.matches === 1 && sentimentalValue?.productionVerified === true, "Sentimental Value is not closed as the twenty-ninth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Substance" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Sentimental Value to The Substance after the twenty-ninth case.");',
  'const sentimentalValue = chapter19.candidates.find((candidate) => candidate.title === "Sentimental Value");\ninvariant(sentimentalValue?.decision === "USE_EXISTING" && sentimentalValue?.scenarioId === "scenario_sentimental_value_2025" && sentimentalValue?.matches === 1 && sentimentalValue?.productionVerified === true, "Sentimental Value is not closed as the twenty-ninth production-verified Chapter 19 USE_EXISTING case.");\nconst theSubstance = chapter19.candidates.find((candidate) => candidate.title === "The Substance");\ninvariant(theSubstance?.decision === "USE_EXISTING" && theSubstance?.scenarioId === "scenario_the_substance_2024" && theSubstance?.matches === 1 && theSubstance?.productionVerified === true, "The Substance is not closed as the thirtieth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from The Substance to The Boy and the Heron after the thirtieth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Flow",\n  "Nickel Boys",',
  '  "Flow",\n  "The Substance",\n  "Nickel Boys",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Dune: Part Two",\n  "The Substance",\n  "Sinners",',
  '  "Dune: Part Two",\n  "Sinners",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 568;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 569;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 568);", "assert.equal(resolved.atlas.expectedCount, 569);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 568);", "assert.equal(resolved.atlas.actualCount, 569);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 568);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 569);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 36);", "assert.equal(exactUseExisting.length, 37);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 7);", "assert.equal(exactP0Queue.length, 6);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 20);", "assert.equal(resolved.recommendedNewProductionCases.length, 19);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "The Substance");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "The Boy and the Heron");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "The Substance",\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n    "The Power of the Dog",\n    "Guillermo del Toro\'s Pinocchio",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n    "The Power of the Dog",\n    "Guillermo del Toro\'s Pinocchio",\n    "The Secret Agent",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Sentimental Value"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Sentimental Value"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("The Substance"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const sentimentalValue = resolved.candidates.find((candidate) => candidate.title === "Sentimental Value");\n  assert.ok(sentimentalValue);\n  assert.equal(sentimentalValue.decision, "USE_EXISTING");\n  assert.equal(sentimentalValue.scenarioId, "scenario_sentimental_value_2025");\n  assert.equal(sentimentalValue.matches, 1);\n  assert.equal(sentimentalValue.productionVerified, true);\n\n  const wolfwalkers = resolved.candidates.find((candidate) => candidate.title === "Wolfwalkers");',
  '  const sentimentalValue = resolved.candidates.find((candidate) => candidate.title === "Sentimental Value");\n  assert.ok(sentimentalValue);\n  assert.equal(sentimentalValue.decision, "USE_EXISTING");\n  assert.equal(sentimentalValue.scenarioId, "scenario_sentimental_value_2025");\n  assert.equal(sentimentalValue.matches, 1);\n  assert.equal(sentimentalValue.productionVerified, true);\n\n  const theSubstance = resolved.candidates.find((candidate) => candidate.title === "The Substance");\n  assert.ok(theSubstance);\n  assert.equal(theSubstance.decision, "USE_EXISTING");\n  assert.equal(theSubstance.scenarioId, "scenario_the_substance_2024");\n  assert.equal(theSubstance.matches, 1);\n  assert.equal(theSubstance.productionVerified, true);\n\n  const wolfwalkers = resolved.candidates.find((candidate) => candidate.title === "Wolfwalkers");',
);

console.log("The Substance canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
