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
  'import { mergeChapterNineteenOneBattleAfterAnotherExpansion } from "../../core/chapterNineteenOneBattleAfterAnotherExpansion.js";\n',
  'import { mergeChapterNineteenOneBattleAfterAnotherExpansion } from "../../core/chapterNineteenOneBattleAfterAnotherExpansion.js";\nimport { mergeChapterNineteenAllQuietOnTheWesternFrontExpansion } from "../../core/chapterNineteenAllQuietOnTheWesternFrontExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenOneBattleAfterAnotherScenarios = mergeChapterNineteenOneBattleAfterAnotherExpansion(chapterNineteenItWasJustAnAccidentScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenOneBattleAfterAnotherScenarios);',
  'const chapterNineteenOneBattleAfterAnotherScenarios = mergeChapterNineteenOneBattleAfterAnotherExpansion(chapterNineteenItWasJustAnAccidentScenarios);\nconst chapterNineteenAllQuietOnTheWesternFrontScenarios = mergeChapterNineteenAllQuietOnTheWesternFrontExpansion(chapterNineteenOneBattleAfterAnotherScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAllQuietOnTheWesternFrontScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_one_battle_after_another_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_one_battle_after_another_expansion_2026+manual_chapter_nineteen_all_quiet_on_the_western_front_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { oneBattleAfterAnotherFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOneBattleAfterAnother";\n',
  'import { oneBattleAfterAnotherFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOneBattleAfterAnother";\nimport { allQuietOnTheWesternFrontFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAllQuietOnTheWesternFront";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [oneBattleAfterAnotherFilmHistoryProfile.scenarioId]: oneBattleAfterAnotherFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [oneBattleAfterAnotherFilmHistoryProfile.scenarioId]: oneBattleAfterAnotherFilmHistoryProfile,\n  [allQuietOnTheWesternFrontFilmHistoryProfile.scenarioId]: allQuietOnTheWesternFrontFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { oneBattleAfterAnotherProductionCaseVerification } from "./scenarioProductionVerificationOneBattleAfterAnother";\n',
  'import { oneBattleAfterAnotherProductionCaseVerification } from "./scenarioProductionVerificationOneBattleAfterAnother";\nimport { allQuietOnTheWesternFrontProductionCaseVerification } from "./scenarioProductionVerificationAllQuietOnTheWesternFront";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  oneBattleAfterAnotherProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  oneBattleAfterAnotherProductionCaseVerification,\n  allQuietOnTheWesternFrontProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 572;", "const EXPECTED_PLAYABLE_SCENARIOS = 573;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 572;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 573;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenOneBattleAfterAnotherExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenOneBattleAfterAnotherExpansion.ts",\n  "chapterNineteenAllQuietOnTheWesternFrontExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 572;", "const EXPECTED_ATLAS_COUNT = 573;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 572, `Global Production Verification registry must contain exactly 572 unique scenarioIds after the thirty-third Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 573, `Global Production Verification registry must contain exactly 573 unique scenarioIds after the thirty-fourth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 572, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 572.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 573, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 573.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 40 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 11 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 40 USE_EXISTING / 5 P0 / 11 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 41 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 10 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 41 USE_EXISTING / 5 P0 / 10 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const oneBattleAfterAnother = chapter19.candidates.find((candidate) => candidate.title === "One Battle After Another");\ninvariant(oneBattleAfterAnother?.decision === "USE_EXISTING" && oneBattleAfterAnother?.scenarioId === "scenario_one_battle_after_another_2025" && oneBattleAfterAnother?.matches === 1 && oneBattleAfterAnother?.productionVerified === true, "One Battle After Another is not closed as the thirty-third production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority Oscar/BAFTA Best Picture/Film case closes outside scheduler order.");',
  'const oneBattleAfterAnother = chapter19.candidates.find((candidate) => candidate.title === "One Battle After Another");\ninvariant(oneBattleAfterAnother?.decision === "USE_EXISTING" && oneBattleAfterAnother?.scenarioId === "scenario_one_battle_after_another_2025" && oneBattleAfterAnother?.matches === 1 && oneBattleAfterAnother?.productionVerified === true, "One Battle After Another is not closed as the thirty-third production-verified Chapter 19 USE_EXISTING case.");\nconst allQuietOnTheWesternFront = chapter19.candidates.find((candidate) => candidate.title === "All Quiet on the Western Front");\ninvariant(allQuietOnTheWesternFront?.decision === "USE_EXISTING" && allQuietOnTheWesternFront?.scenarioId === "scenario_all_quiet_on_the_western_front_2022" && allQuietOnTheWesternFront?.matches === 1 && allQuietOnTheWesternFront?.productionVerified === true, "All Quiet on the Western Front is not closed as the thirty-fourth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority BAFTA Best Film case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "RRR",\n  "Decision to Leave",\n  "Saint Omer",',
  '  "RRR",\n  "Decision to Leave",\n  "All Quiet on the Western Front",\n  "Saint Omer",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Power of the Dog",\n  "The Mitchells vs. the Machines",\n  "All Quiet on the Western Front",\n  "Guillermo del Toro\'s Pinocchio",',
  '  "The Power of the Dog",\n  "The Mitchells vs. the Machines",\n  "Guillermo del Toro\'s Pinocchio",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 572;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 573;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 572);", "assert.equal(resolved.atlas.expectedCount, 573);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 572);", "assert.equal(resolved.atlas.actualCount, 573);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 572);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 573);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 40);", "assert.equal(exactUseExisting.length, 41);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 11);", "assert.equal(exactP1Queue.length, 10);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 16);", "assert.equal(resolved.recommendedNewProductionCases.length, 15);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("One Battle After Another"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("One Battle After Another"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("All Quiet on the Western Front"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const decisionToLeave = resolved.candidates.find((candidate) => candidate.title === "Decision to Leave");\n  assert.ok(decisionToLeave);\n  assert.equal(decisionToLeave.decision, "USE_EXISTING");\n  assert.equal(decisionToLeave.scenarioId, "scenario_decision_to_leave_2022");\n  assert.equal(decisionToLeave.matches, 1);\n  assert.equal(decisionToLeave.productionVerified, true);',
  '  const decisionToLeave = resolved.candidates.find((candidate) => candidate.title === "Decision to Leave");\n  assert.ok(decisionToLeave);\n  assert.equal(decisionToLeave.decision, "USE_EXISTING");\n  assert.equal(decisionToLeave.scenarioId, "scenario_decision_to_leave_2022");\n  assert.equal(decisionToLeave.matches, 1);\n  assert.equal(decisionToLeave.productionVerified, true);\n\n  const allQuietOnTheWesternFront = resolved.candidates.find((candidate) => candidate.title === "All Quiet on the Western Front");\n  assert.ok(allQuietOnTheWesternFront);\n  assert.equal(allQuietOnTheWesternFront.decision, "USE_EXISTING");\n  assert.equal(allQuietOnTheWesternFront.scenarioId, "scenario_all_quiet_on_the_western_front_2022");\n  assert.equal(allQuietOnTheWesternFront.matches, 1);\n  assert.equal(allQuietOnTheWesternFront.productionVerified, true);',
);

console.log("All Quiet on the Western Front canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
