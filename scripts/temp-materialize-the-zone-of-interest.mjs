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
  'import { mergeChapterNineteenTheSubstanceExpansion } from "../../core/chapterNineteenTheSubstanceExpansion.js";\n',
  'import { mergeChapterNineteenTheSubstanceExpansion } from "../../core/chapterNineteenTheSubstanceExpansion.js";\nimport { mergeChapterNineteenTheZoneOfInterestExpansion } from "../../core/chapterNineteenTheZoneOfInterestExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenTheSubstanceScenarios = mergeChapterNineteenTheSubstanceExpansion(chapterNineteenSentimentalValueScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheSubstanceScenarios);',
  'const chapterNineteenTheSubstanceScenarios = mergeChapterNineteenTheSubstanceExpansion(chapterNineteenSentimentalValueScenarios);\nconst chapterNineteenTheZoneOfInterestScenarios = mergeChapterNineteenTheZoneOfInterestExpansion(chapterNineteenTheSubstanceScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheZoneOfInterestScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_the_substance_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_the_substance_expansion_2026+manual_chapter_nineteen_the_zone_of_interest_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theSubstanceFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSubstance";\n',
  'import { theSubstanceFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSubstance";\nimport { theZoneOfInterestFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheZoneOfInterest";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [theSubstanceFilmHistoryProfile.scenarioId]: theSubstanceFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [theSubstanceFilmHistoryProfile.scenarioId]: theSubstanceFilmHistoryProfile,\n  [theZoneOfInterestFilmHistoryProfile.scenarioId]: theZoneOfInterestFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theSubstanceProductionCaseVerification } from "./scenarioProductionVerificationTheSubstance";\n',
  'import { theSubstanceProductionCaseVerification } from "./scenarioProductionVerificationTheSubstance";\nimport { theZoneOfInterestProductionCaseVerification } from "./scenarioProductionVerificationTheZoneOfInterest";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  theSubstanceProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  theSubstanceProductionCaseVerification,\n  theZoneOfInterestProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 569;", "const EXPECTED_PLAYABLE_SCENARIOS = 570;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 569;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 570;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenTheSubstanceExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenTheSubstanceExpansion.ts",\n  "chapterNineteenTheZoneOfInterestExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 569;", "const EXPECTED_ATLAS_COUNT = 570;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 569, `Global Production Verification registry must contain exactly 569 unique scenarioIds after the thirtieth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 570, `Global Production Verification registry must contain exactly 570 unique scenarioIds after the thirty-first Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 569, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 569.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 570, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 570.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 37 && chapter19.byDecision?.P0?.length === 6 && chapter19.byDecision?.P1?.length === 13 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 37 USE_EXISTING / 6 P0 / 13 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 38 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 13 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 38 USE_EXISTING / 5 P0 / 13 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const theSubstance = chapter19.candidates.find((candidate) => candidate.title === "The Substance");\ninvariant(theSubstance?.decision === "USE_EXISTING" && theSubstance?.scenarioId === "scenario_the_substance_2024" && theSubstance?.matches === 1 && theSubstance?.productionVerified === true, "The Substance is not closed as the thirtieth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from The Substance to The Boy and the Heron after the thirtieth case.");',
  'const theSubstance = chapter19.candidates.find((candidate) => candidate.title === "The Substance");\ninvariant(theSubstance?.decision === "USE_EXISTING" && theSubstance?.scenarioId === "scenario_the_substance_2024" && theSubstance?.matches === 1 && theSubstance?.productionVerified === true, "The Substance is not closed as the thirtieth production-verified Chapter 19 USE_EXISTING case.");\nconst theZoneOfInterest = chapter19.candidates.find((candidate) => candidate.title === "The Zone of Interest");\ninvariant(theZoneOfInterest?.decision === "USE_EXISTING" && theZoneOfInterest?.scenarioId === "scenario_the_zone_of_interest_2023" && theZoneOfInterest?.matches === 1 && theZoneOfInterest?.productionVerified === true, "The Zone of Interest is not closed as the thirty-first production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority The Zone of Interest case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Poor Things",\n  "Godzilla Minus One",',
  '  "Poor Things",\n  "The Zone of Interest",\n  "Godzilla Minus One",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "The Zone of Interest",\n  "The Boy and the Heron",',
  '  "The Boy and the Heron",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 569;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 570;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 569);", "assert.equal(resolved.atlas.expectedCount, 570);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 569);", "assert.equal(resolved.atlas.actualCount, 570);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 569);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 570);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 37);", "assert.equal(exactUseExisting.length, 38);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 6);", "assert.equal(exactP0Queue.length, 5);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 19);", "assert.equal(resolved.recommendedNewProductionCases.length, 18);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Substance"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Substance"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("The Zone of Interest"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const theSubstance = resolved.candidates.find((candidate) => candidate.title === "The Substance");\n  assert.ok(theSubstance);\n  assert.equal(theSubstance.decision, "USE_EXISTING");\n  assert.equal(theSubstance.scenarioId, "scenario_the_substance_2024");\n  assert.equal(theSubstance.matches, 1);\n  assert.equal(theSubstance.productionVerified, true);',
  '  const theSubstance = resolved.candidates.find((candidate) => candidate.title === "The Substance");\n  assert.ok(theSubstance);\n  assert.equal(theSubstance.decision, "USE_EXISTING");\n  assert.equal(theSubstance.scenarioId, "scenario_the_substance_2024");\n  assert.equal(theSubstance.matches, 1);\n  assert.equal(theSubstance.productionVerified, true);\n\n  const theZoneOfInterest = resolved.candidates.find((candidate) => candidate.title === "The Zone of Interest");\n  assert.ok(theZoneOfInterest);\n  assert.equal(theZoneOfInterest.decision, "USE_EXISTING");\n  assert.equal(theZoneOfInterest.scenarioId, "scenario_the_zone_of_interest_2023");\n  assert.equal(theZoneOfInterest.matches, 1);\n  assert.equal(theZoneOfInterest.productionVerified, true);',
);

console.log("The Zone of Interest canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
