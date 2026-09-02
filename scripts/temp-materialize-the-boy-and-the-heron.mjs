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
  'import { mergeChapterNineteenThePowerOfTheDogExpansion } from "../../core/chapterNineteenThePowerOfTheDogExpansion.js";\n',
  'import { mergeChapterNineteenThePowerOfTheDogExpansion } from "../../core/chapterNineteenThePowerOfTheDogExpansion.js";\nimport { mergeChapterNineteenTheBoyAndTheHeronExpansion } from "../../core/chapterNineteenTheBoyAndTheHeronExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenThePowerOfTheDogScenarios = mergeChapterNineteenThePowerOfTheDogExpansion(chapterNineteenAllQuietOnTheWesternFrontScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenThePowerOfTheDogScenarios);',
  'const chapterNineteenThePowerOfTheDogScenarios = mergeChapterNineteenThePowerOfTheDogExpansion(chapterNineteenAllQuietOnTheWesternFrontScenarios);\nconst chapterNineteenTheBoyAndTheHeronScenarios = mergeChapterNineteenTheBoyAndTheHeronExpansion(chapterNineteenThePowerOfTheDogScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheBoyAndTheHeronScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_the_power_of_the_dog_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_the_power_of_the_dog_expansion_2026+manual_chapter_nineteen_the_boy_and_the_heron_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { thePowerOfTheDogFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenThePowerOfTheDog";\n',
  'import { thePowerOfTheDogFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenThePowerOfTheDog";\nimport { theBoyAndTheHeronFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheBoyAndTheHeron";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [thePowerOfTheDogFilmHistoryProfile.scenarioId]: thePowerOfTheDogFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [thePowerOfTheDogFilmHistoryProfile.scenarioId]: thePowerOfTheDogFilmHistoryProfile,\n  [theBoyAndTheHeronFilmHistoryProfile.scenarioId]: theBoyAndTheHeronFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { thePowerOfTheDogProductionCaseVerification } from "./scenarioProductionVerificationThePowerOfTheDog";\n',
  'import { thePowerOfTheDogProductionCaseVerification } from "./scenarioProductionVerificationThePowerOfTheDog";\nimport { theBoyAndTheHeronProductionCaseVerification } from "./scenarioProductionVerificationTheBoyAndTheHeron";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  thePowerOfTheDogProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  thePowerOfTheDogProductionCaseVerification,\n  theBoyAndTheHeronProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 574;", "const EXPECTED_PLAYABLE_SCENARIOS = 575;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 574;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 575;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenThePowerOfTheDogExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenThePowerOfTheDogExpansion.ts",\n  "chapterNineteenTheBoyAndTheHeronExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 574;", "const EXPECTED_ATLAS_COUNT = 575;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 574, `Global Production Verification registry must contain exactly 574 unique scenarioIds after the thirty-fifth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 575, `Global Production Verification registry must contain exactly 575 unique scenarioIds after the thirty-sixth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 574, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 574.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 575, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 575.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 42 && chapter19.byDecision?.P0?.length === 5 && chapter19.byDecision?.P1?.length === 9 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 42 USE_EXISTING / 5 P0 / 9 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 43 && chapter19.byDecision?.P0?.length === 4 && chapter19.byDecision?.P1?.length === 9 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 43 USE_EXISTING / 4 P0 / 9 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const thePowerOfTheDog = chapter19.candidates.find((candidate) => candidate.title === "The Power of the Dog");\ninvariant(thePowerOfTheDog?.decision === "USE_EXISTING" && thePowerOfTheDog?.scenarioId === "scenario_the_power_of_the_dog_2021" && thePowerOfTheDog?.matches === 1 && thePowerOfTheDog?.productionVerified === true, "The Power of the Dog is not closed as the thirty-fifth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Boy and the Heron" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must remain at The Boy and the Heron after the award-priority BAFTA Best Film case closes outside scheduler order.");',
  'const thePowerOfTheDog = chapter19.candidates.find((candidate) => candidate.title === "The Power of the Dog");\ninvariant(thePowerOfTheDog?.decision === "USE_EXISTING" && thePowerOfTheDog?.scenarioId === "scenario_the_power_of_the_dog_2021" && thePowerOfTheDog?.matches === 1 && thePowerOfTheDog?.productionVerified === true, "The Power of the Dog is not closed as the thirty-fifth production-verified Chapter 19 USE_EXISTING case.");\nconst theBoyAndTheHeron = chapter19.candidates.find((candidate) => candidate.title === "The Boy and the Heron");\ninvariant(theBoyAndTheHeron?.decision === "USE_EXISTING" && theBoyAndTheHeron?.scenarioId === "scenario_the_boy_and_the_heron_2023" && theBoyAndTheHeron?.matches === 1 && theBoyAndTheHeron?.productionVerified === true, "The Boy and the Heron is not closed as the thirty-sixth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance to Spider-Man: Across the Spider-Verse after The Boy and the Heron closes.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Godzilla Minus One",\n  "Four Daughters",',
  '  "Godzilla Minus One",\n  "The Boy and the Heron",\n  "Four Daughters",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "The Boy and the Heron",\n  "Spider-Man: Across the Spider-Verse",',
  '  "Spider-Man: Across the Spider-Verse",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 574;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 575;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 574);", "assert.equal(resolved.atlas.expectedCount, 575);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 574);", "assert.equal(resolved.atlas.actualCount, 575);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 574);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 575);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 42);", "assert.equal(exactUseExisting.length, 43);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 5);", "assert.equal(exactP0Queue.length, 4);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 14);", "assert.equal(resolved.recommendedNewProductionCases.length, 13);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.equal(resolved.productionStrategy.nextRecommendedCase, "The Boy and the Heron");\n  assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");',
  '  assert.equal(resolved.productionStrategy.nextRecommendedCase, "Spider-Man: Across the Spider-Verse");\n  assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n    "Guillermo del Toro\'s Pinocchio",\n    "The Secret Agent",\n    "Dune: Part Two",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "Guillermo del Toro\'s Pinocchio",\n    "The Secret Agent",\n    "Dune: Part Two",\n    "The Brutalist",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '    ["regional_global", "industrial_scale_technical", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"],',
  '    ["industrial_scale_technical", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "independent_low_mid_budget"],',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Power of the Dog"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Power of the Dog"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("The Boy and the Heron"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const godzillaMinusOne = resolved.candidates.find((candidate) => candidate.title === "Godzilla Minus One");\n  assert.ok(godzillaMinusOne);\n  assert.equal(godzillaMinusOne.decision, "USE_EXISTING");\n  assert.equal(godzillaMinusOne.scenarioId, "scenario_godzilla_minus_one_2023");\n  assert.equal(godzillaMinusOne.matches, 1);\n  assert.equal(godzillaMinusOne.productionVerified, true);',
  '  const godzillaMinusOne = resolved.candidates.find((candidate) => candidate.title === "Godzilla Minus One");\n  assert.ok(godzillaMinusOne);\n  assert.equal(godzillaMinusOne.decision, "USE_EXISTING");\n  assert.equal(godzillaMinusOne.scenarioId, "scenario_godzilla_minus_one_2023");\n  assert.equal(godzillaMinusOne.matches, 1);\n  assert.equal(godzillaMinusOne.productionVerified, true);\n\n  const theBoyAndTheHeron = resolved.candidates.find((candidate) => candidate.title === "The Boy and the Heron");\n  assert.ok(theBoyAndTheHeron);\n  assert.equal(theBoyAndTheHeron.decision, "USE_EXISTING");\n  assert.equal(theBoyAndTheHeron.scenarioId, "scenario_the_boy_and_the_heron_2023");\n  assert.equal(theBoyAndTheHeron.matches, 1);\n  assert.equal(theBoyAndTheHeron.productionVerified, true);',
);

console.log("The Boy and the Heron canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
