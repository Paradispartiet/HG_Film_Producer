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
  'import { mergeChapterNineteenItWasJustAnAccidentExpansion } from "../../core/chapterNineteenItWasJustAnAccidentExpansion.js";\n',
  'import { mergeChapterNineteenItWasJustAnAccidentExpansion } from "../../core/chapterNineteenItWasJustAnAccidentExpansion.js";\nimport { mergeChapterNineteenOneBattleAfterAnotherExpansion } from "../../core/chapterNineteenOneBattleAfterAnotherExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenItWasJustAnAccidentScenarios = mergeChapterNineteenItWasJustAnAccidentExpansion(chapterNineteenTheZoneOfInterestScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenItWasJustAnAccidentScenarios);',
  'const chapterNineteenItWasJustAnAccidentScenarios = mergeChapterNineteenItWasJustAnAccidentExpansion(chapterNineteenTheZoneOfInterestScenarios);\nconst chapterNineteenOneBattleAfterAnotherScenarios = mergeChapterNineteenOneBattleAfterAnotherExpansion(chapterNineteenItWasJustAnAccidentScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenOneBattleAfterAnotherScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_it_was_just_an_accident_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_it_was_just_an_accident_expansion_2026+manual_chapter_nineteen_one_battle_after_another_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { itWasJustAnAccidentFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenItWasJustAnAccident";\n',
  'import { itWasJustAnAccidentFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenItWasJustAnAccident";\nimport { oneBattleAfterAnotherFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOneBattleAfterAnother";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [itWasJustAnAccidentFilmHistoryProfile.scenarioId]: itWasJustAnAccidentFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [itWasJustAnAccidentFilmHistoryProfile.scenarioId]: itWasJustAnAccidentFilmHistoryProfile,\n  [oneBattleAfterAnotherFilmHistoryProfile.scenarioId]: oneBattleAfterAnotherFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { itWasJustAnAccidentProductionCaseVerification } from "./scenarioProductionVerificationItWasJustAnAccident";\n',
  'import { itWasJustAnAccidentProductionCaseVerification } from "./scenarioProductionVerificationItWasJustAnAccident";\nimport { oneBattleAfterAnotherProductionCaseVerification } from "./scenarioProductionVerificationOneBattleAfterAnother";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  itWasJustAnAccidentProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  itWasJustAnAccidentProductionCaseVerification,\n  oneBattleAfterAnotherProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 571;", "const EXPECTED_PLAYABLE_SCENARIOS = 572;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 571;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 572;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenItWasJustAnAccidentExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenItWasJustAnAccidentExpansion.ts",\n  "chapterNineteenOneBattleAfterAnotherExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 571;", "const EXPECTED_ATLAS_COUNT = 572;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 571, `Global Production Verification registry must contain exactly 571 unique scenarioIds after the thirty-second Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 572, `Global Production Verification registry must contain exactly 572 unique scenarioIds after the thirty-third Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 571, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 571.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 572, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 572.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 39 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 12 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 39 USE_EXISTING / 5 P0 / 12 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 40 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 11 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 40 USE_EXISTING / 5 P0 / 11 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const itWasJustAnAccident = chapter19.candidates.find((candidate) => candidate.title === "It Was Just an Accident");\ninvariant(itWasJustAnAccident?.decision === "USE_EXISTING" && itWasJustAnAccident?.scenarioId === "scenario_it_was_just_an_accident_2025" && itWasJustAnAccident?.matches === 1 && itWasJustAnAccident?.productionVerified === true, "It Was Just an Accident is not closed as the thirty-second production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority Palme d Or case closes outside scheduler order.");',
  'const itWasJustAnAccident = chapter19.candidates.find((candidate) => candidate.title === "It Was Just an Accident");\ninvariant(itWasJustAnAccident?.decision === "USE_EXISTING" && itWasJustAnAccident?.scenarioId === "scenario_it_was_just_an_accident_2025" && itWasJustAnAccident?.matches === 1 && itWasJustAnAccident?.productionVerified === true, "It Was Just an Accident is not closed as the thirty-second production-verified Chapter 19 USE_EXISTING case.");\nconst oneBattleAfterAnother = chapter19.candidates.find((candidate) => candidate.title === "One Battle After Another");\ninvariant(oneBattleAfterAnother?.decision === "USE_EXISTING" && oneBattleAfterAnother?.scenarioId === "scenario_one_battle_after_another_2025" && oneBattleAfterAnother?.matches === 1 && oneBattleAfterAnother?.productionVerified === true, "One Battle After Another is not closed as the thirty-third production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority Oscar/BAFTA Best Picture/Film case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Dahomey",\n  "Anora",\n  "Sentimental Value",',
  '  "Dahomey",\n  "Anora",\n  "One Battle After Another",\n  "Sentimental Value",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Brutalist",\n  "Furiosa: A Mad Max Saga",\n  "One Battle After Another",\n  "KPop Demon Hunters",',
  '  "The Brutalist",\n  "Furiosa: A Mad Max Saga",\n  "KPop Demon Hunters",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 571;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 572;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 571);", "assert.equal(resolved.atlas.expectedCount, 572);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 571);", "assert.equal(resolved.atlas.actualCount, 572);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 571);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 572);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 39);", "assert.equal(exactUseExisting.length, 40);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 12);", "assert.equal(exactP1Queue.length, 11);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 17);", "assert.equal(resolved.recommendedNewProductionCases.length, 16);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("It Was Just an Accident"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("It Was Just an Accident"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("One Battle After Another"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const itWasJustAnAccident = resolved.candidates.find((candidate) => candidate.title === "It Was Just an Accident");\n  assert.ok(itWasJustAnAccident);\n  assert.equal(itWasJustAnAccident.decision, "USE_EXISTING");\n  assert.equal(itWasJustAnAccident.scenarioId, "scenario_it_was_just_an_accident_2025");\n  assert.equal(itWasJustAnAccident.matches, 1);\n  assert.equal(itWasJustAnAccident.productionVerified, true);',
  '  const itWasJustAnAccident = resolved.candidates.find((candidate) => candidate.title === "It Was Just an Accident");\n  assert.ok(itWasJustAnAccident);\n  assert.equal(itWasJustAnAccident.decision, "USE_EXISTING");\n  assert.equal(itWasJustAnAccident.scenarioId, "scenario_it_was_just_an_accident_2025");\n  assert.equal(itWasJustAnAccident.matches, 1);\n  assert.equal(itWasJustAnAccident.productionVerified, true);\n\n  const oneBattleAfterAnother = resolved.candidates.find((candidate) => candidate.title === "One Battle After Another");\n  assert.ok(oneBattleAfterAnother);\n  assert.equal(oneBattleAfterAnother.decision, "USE_EXISTING");\n  assert.equal(oneBattleAfterAnother.scenarioId, "scenario_one_battle_after_another_2025");\n  assert.equal(oneBattleAfterAnother.matches, 1);\n  assert.equal(oneBattleAfterAnother.productionVerified, true);',
);

console.log("One Battle After Another canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
