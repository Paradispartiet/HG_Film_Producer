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
  'import { mergeChapterNineteenAllQuietOnTheWesternFrontExpansion } from "../../core/chapterNineteenAllQuietOnTheWesternFrontExpansion.js";\n',
  'import { mergeChapterNineteenAllQuietOnTheWesternFrontExpansion } from "../../core/chapterNineteenAllQuietOnTheWesternFrontExpansion.js";\nimport { mergeChapterNineteenThePowerOfTheDogExpansion } from "../../core/chapterNineteenThePowerOfTheDogExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenAllQuietOnTheWesternFrontScenarios = mergeChapterNineteenAllQuietOnTheWesternFrontExpansion(chapterNineteenOneBattleAfterAnotherScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAllQuietOnTheWesternFrontScenarios);',
  'const chapterNineteenAllQuietOnTheWesternFrontScenarios = mergeChapterNineteenAllQuietOnTheWesternFrontExpansion(chapterNineteenOneBattleAfterAnotherScenarios);\nconst chapterNineteenThePowerOfTheDogScenarios = mergeChapterNineteenThePowerOfTheDogExpansion(chapterNineteenAllQuietOnTheWesternFrontScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenThePowerOfTheDogScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_all_quiet_on_the_western_front_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_all_quiet_on_the_western_front_expansion_2026+manual_chapter_nineteen_the_power_of_the_dog_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { allQuietOnTheWesternFrontFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAllQuietOnTheWesternFront";\n',
  'import { allQuietOnTheWesternFrontFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAllQuietOnTheWesternFront";\nimport { thePowerOfTheDogFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenThePowerOfTheDog";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [allQuietOnTheWesternFrontFilmHistoryProfile.scenarioId]: allQuietOnTheWesternFrontFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [allQuietOnTheWesternFrontFilmHistoryProfile.scenarioId]: allQuietOnTheWesternFrontFilmHistoryProfile,\n  [thePowerOfTheDogFilmHistoryProfile.scenarioId]: thePowerOfTheDogFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { allQuietOnTheWesternFrontProductionCaseVerification } from "./scenarioProductionVerificationAllQuietOnTheWesternFront";\n',
  'import { allQuietOnTheWesternFrontProductionCaseVerification } from "./scenarioProductionVerificationAllQuietOnTheWesternFront";\nimport { thePowerOfTheDogProductionCaseVerification } from "./scenarioProductionVerificationThePowerOfTheDog";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  allQuietOnTheWesternFrontProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  allQuietOnTheWesternFrontProductionCaseVerification,\n  thePowerOfTheDogProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 573;", "const EXPECTED_PLAYABLE_SCENARIOS = 574;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 573;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 574;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenAllQuietOnTheWesternFrontExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenAllQuietOnTheWesternFrontExpansion.ts",\n  "chapterNineteenThePowerOfTheDogExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 573;", "const EXPECTED_ATLAS_COUNT = 574;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 573, `Global Production Verification registry must contain exactly 573 unique scenarioIds after the thirty-fourth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 574, `Global Production Verification registry must contain exactly 574 unique scenarioIds after the thirty-fifth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 573, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 573.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 574, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 574.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 41 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 10 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 41 USE_EXISTING / 5 P0 / 10 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 42 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 9 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 42 USE_EXISTING / 5 P0 / 9 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const allQuietOnTheWesternFront = chapter19.candidates.find((candidate) => candidate.title === "All Quiet on the Western Front");\ninvariant(allQuietOnTheWesternFront?.decision === "USE_EXISTING" && allQuietOnTheWesternFront?.scenarioId === "scenario_all_quiet_on_the_western_front_2022" && allQuietOnTheWesternFront?.matches === 1 && allQuietOnTheWesternFront?.productionVerified === true, "All Quiet on the Western Front is not closed as the thirty-fourth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority BAFTA Best Film case closes outside scheduler order.");',
  'const allQuietOnTheWesternFront = chapter19.candidates.find((candidate) => candidate.title === "All Quiet on the Western Front");\ninvariant(allQuietOnTheWesternFront?.decision === "USE_EXISTING" && allQuietOnTheWesternFront?.scenarioId === "scenario_all_quiet_on_the_western_front_2022" && allQuietOnTheWesternFront?.matches === 1 && allQuietOnTheWesternFront?.productionVerified === true, "All Quiet on the Western Front is not closed as the thirty-fourth production-verified Chapter 19 USE_EXISTING case.");\nconst thePowerOfTheDog = chapter19.candidates.find((candidate) => candidate.title === "The Power of the Dog");\ninvariant(thePowerOfTheDog?.decision === "USE_EXISTING" && thePowerOfTheDog?.scenarioId === "scenario_the_power_of_the_dog_2021" && thePowerOfTheDog?.matches === 1 && thePowerOfTheDog?.productionVerified === true, "The Power of the Dog is not closed as the thirty-fifth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority BAFTA Best Film case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Dune",\n  "Drive My Car",',
  '  "Dune",\n  "The Power of the Dog",\n  "Drive My Car",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Power of the Dog",\n  "The Mitchells vs. the Machines",',
  '  "The Mitchells vs. the Machines",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 573;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 574;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 573);", "assert.equal(resolved.atlas.expectedCount, 574);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 573);", "assert.equal(resolved.atlas.actualCount, 574);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 573);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 574);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 41);", "assert.equal(exactUseExisting.length, 42);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 10);", "assert.equal(exactP1Queue.length, 9);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 15);", "assert.equal(resolved.recommendedNewProductionCases.length, 14);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n    "The Power of the Dog",\n    "Guillermo del Toro\'s Pinocchio",\n    "The Secret Agent",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n    "Guillermo del Toro\'s Pinocchio",\n    "The Secret Agent",\n    "Dune: Part Two",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '    ["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"],',
  '    ["regional_global", "industrial_scale_technical", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"],',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("All Quiet on the Western Front"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("All Quiet on the Western Front"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("The Power of the Dog"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const dune = resolved.candidates.find((candidate) => candidate.title === "Dune");\n  assert.ok(dune);\n  assert.equal(dune.decision, "USE_EXISTING");\n  assert.equal(dune.scenarioId, "scenario_dune_2021");\n  assert.equal(dune.matches, 1);\n  assert.equal(dune.productionVerified, true);',
  '  const dune = resolved.candidates.find((candidate) => candidate.title === "Dune");\n  assert.ok(dune);\n  assert.equal(dune.decision, "USE_EXISTING");\n  assert.equal(dune.scenarioId, "scenario_dune_2021");\n  assert.equal(dune.matches, 1);\n  assert.equal(dune.productionVerified, true);\n\n  const thePowerOfTheDog = resolved.candidates.find((candidate) => candidate.title === "The Power of the Dog");\n  assert.ok(thePowerOfTheDog);\n  assert.equal(thePowerOfTheDog.decision, "USE_EXISTING");\n  assert.equal(thePowerOfTheDog.scenarioId, "scenario_the_power_of_the_dog_2021");\n  assert.equal(thePowerOfTheDog.matches, 1);\n  assert.equal(thePowerOfTheDog.productionVerified, true);',
);

console.log("The Power of the Dog canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
