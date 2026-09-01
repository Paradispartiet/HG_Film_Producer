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
  'import { mergeChapterNineteenTheZoneOfInterestExpansion } from "../../core/chapterNineteenTheZoneOfInterestExpansion.js";\n',
  'import { mergeChapterNineteenTheZoneOfInterestExpansion } from "../../core/chapterNineteenTheZoneOfInterestExpansion.js";\nimport { mergeChapterNineteenItWasJustAnAccidentExpansion } from "../../core/chapterNineteenItWasJustAnAccidentExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenTheZoneOfInterestScenarios = mergeChapterNineteenTheZoneOfInterestExpansion(chapterNineteenTheSubstanceScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheZoneOfInterestScenarios);',
  'const chapterNineteenTheZoneOfInterestScenarios = mergeChapterNineteenTheZoneOfInterestExpansion(chapterNineteenTheSubstanceScenarios);\nconst chapterNineteenItWasJustAnAccidentScenarios = mergeChapterNineteenItWasJustAnAccidentExpansion(chapterNineteenTheZoneOfInterestScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenItWasJustAnAccidentScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_the_zone_of_interest_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_the_zone_of_interest_expansion_2026+manual_chapter_nineteen_it_was_just_an_accident_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theZoneOfInterestFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheZoneOfInterest";\n',
  'import { theZoneOfInterestFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheZoneOfInterest";\nimport { itWasJustAnAccidentFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenItWasJustAnAccident";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [theZoneOfInterestFilmHistoryProfile.scenarioId]: theZoneOfInterestFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [theZoneOfInterestFilmHistoryProfile.scenarioId]: theZoneOfInterestFilmHistoryProfile,\n  [itWasJustAnAccidentFilmHistoryProfile.scenarioId]: itWasJustAnAccidentFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theZoneOfInterestProductionCaseVerification } from "./scenarioProductionVerificationTheZoneOfInterest";\n',
  'import { theZoneOfInterestProductionCaseVerification } from "./scenarioProductionVerificationTheZoneOfInterest";\nimport { itWasJustAnAccidentProductionCaseVerification } from "./scenarioProductionVerificationItWasJustAnAccident";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  theZoneOfInterestProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  theZoneOfInterestProductionCaseVerification,\n  itWasJustAnAccidentProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 570;", "const EXPECTED_PLAYABLE_SCENARIOS = 571;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 570;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 571;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenTheZoneOfInterestExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenTheZoneOfInterestExpansion.ts",\n  "chapterNineteenItWasJustAnAccidentExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 570;", "const EXPECTED_ATLAS_COUNT = 571;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 570, `Global Production Verification registry must contain exactly 570 unique scenarioIds after the thirty-first Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 571, `Global Production Verification registry must contain exactly 571 unique scenarioIds after the thirty-second Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 570, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 570.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 571, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 571.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 38 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 13 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 38 USE_EXISTING / 5 P0 / 13 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 39 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 12 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 39 USE_EXISTING / 5 P0 / 12 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const theZoneOfInterest = chapter19.candidates.find((candidate) => candidate.title === "The Zone of Interest");\ninvariant(theZoneOfInterest?.decision === "USE_EXISTING" && theZoneOfInterest?.scenarioId === "scenario_the_zone_of_interest_2023" && theZoneOfInterest?.matches === 1 && theZoneOfInterest?.productionVerified === true, "The Zone of Interest is not closed as the thirty-first production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority The Zone of Interest case closes outside scheduler order.");',
  'const theZoneOfInterest = chapter19.candidates.find((candidate) => candidate.title === "The Zone of Interest");\ninvariant(theZoneOfInterest?.decision === "USE_EXISTING" && theZoneOfInterest?.scenarioId === "scenario_the_zone_of_interest_2023" && theZoneOfInterest?.matches === 1 && theZoneOfInterest?.productionVerified === true, "The Zone of Interest is not closed as the thirty-first production-verified Chapter 19 USE_EXISTING case.");\nconst itWasJustAnAccident = chapter19.candidates.find((candidate) => candidate.title === "It Was Just an Accident");\ninvariant(itWasJustAnAccident?.decision === "USE_EXISTING" && itWasJustAnAccident?.scenarioId === "scenario_it_was_just_an_accident_2025" && itWasJustAnAccident?.matches === 1 && itWasJustAnAccident?.productionVerified === true, "It Was Just an Accident is not closed as the thirty-second production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority Palme d Or case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Anora",\n  "Sentimental Value",\n] as const;',
  '  "Anora",\n  "Sentimental Value",\n  "It Was Just an Accident",\n] as const;',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Secret Agent",\n  "It Was Just an Accident",\n  "Sirāt",',
  '  "The Secret Agent",\n  "Sirāt",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 570;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 571;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 570);", "assert.equal(resolved.atlas.expectedCount, 571);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 570);", "assert.equal(resolved.atlas.actualCount, 571);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 570);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 571);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 38);", "assert.equal(exactUseExisting.length, 39);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 13);", "assert.equal(exactP1Queue.length, 12);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 18);", "assert.equal(resolved.recommendedNewProductionCases.length, 17);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Zone of Interest"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Zone of Interest"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("It Was Just an Accident"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const theZoneOfInterest = resolved.candidates.find((candidate) => candidate.title === "The Zone of Interest");\n  assert.ok(theZoneOfInterest);\n  assert.equal(theZoneOfInterest.decision, "USE_EXISTING");\n  assert.equal(theZoneOfInterest.scenarioId, "scenario_the_zone_of_interest_2023");\n  assert.equal(theZoneOfInterest.matches, 1);\n  assert.equal(theZoneOfInterest.productionVerified, true);',
  '  const theZoneOfInterest = resolved.candidates.find((candidate) => candidate.title === "The Zone of Interest");\n  assert.ok(theZoneOfInterest);\n  assert.equal(theZoneOfInterest.decision, "USE_EXISTING");\n  assert.equal(theZoneOfInterest.scenarioId, "scenario_the_zone_of_interest_2023");\n  assert.equal(theZoneOfInterest.matches, 1);\n  assert.equal(theZoneOfInterest.productionVerified, true);\n\n  const itWasJustAnAccident = resolved.candidates.find((candidate) => candidate.title === "It Was Just an Accident");\n  assert.ok(itWasJustAnAccident);\n  assert.equal(itWasJustAnAccident.decision, "USE_EXISTING");\n  assert.equal(itWasJustAnAccident.scenarioId, "scenario_it_was_just_an_accident_2025");\n  assert.equal(itWasJustAnAccident.matches, 1);\n  assert.equal(itWasJustAnAccident.productionVerified, true);',
);

console.log("It Was Just an Accident canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
