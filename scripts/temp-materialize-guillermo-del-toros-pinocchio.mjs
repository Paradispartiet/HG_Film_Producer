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
  'import { mergeChapterNineteenTheBoyAndTheHeronExpansion } from "../../core/chapterNineteenTheBoyAndTheHeronExpansion.js";\n',
  'import { mergeChapterNineteenTheBoyAndTheHeronExpansion } from "../../core/chapterNineteenTheBoyAndTheHeronExpansion.js";\nimport { mergeChapterNineteenGuillermoDelTorosPinocchioExpansion } from "../../core/chapterNineteenGuillermoDelTorosPinocchioExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenTheBoyAndTheHeronScenarios = mergeChapterNineteenTheBoyAndTheHeronExpansion(chapterNineteenThePowerOfTheDogScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheBoyAndTheHeronScenarios);',
  'const chapterNineteenTheBoyAndTheHeronScenarios = mergeChapterNineteenTheBoyAndTheHeronExpansion(chapterNineteenThePowerOfTheDogScenarios);\nconst chapterNineteenGuillermoDelTorosPinocchioScenarios = mergeChapterNineteenGuillermoDelTorosPinocchioExpansion(chapterNineteenTheBoyAndTheHeronScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenGuillermoDelTorosPinocchioScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_the_boy_and_the_heron_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_the_boy_and_the_heron_expansion_2026+manual_chapter_nineteen_guillermo_del_toros_pinocchio_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theBoyAndTheHeronFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheBoyAndTheHeron";\n',
  'import { theBoyAndTheHeronFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheBoyAndTheHeron";\nimport { guillermoDelTorosPinocchioFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenGuillermoDelTorosPinocchio";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [theBoyAndTheHeronFilmHistoryProfile.scenarioId]: theBoyAndTheHeronFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [theBoyAndTheHeronFilmHistoryProfile.scenarioId]: theBoyAndTheHeronFilmHistoryProfile,\n  [guillermoDelTorosPinocchioFilmHistoryProfile.scenarioId]: guillermoDelTorosPinocchioFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theBoyAndTheHeronProductionCaseVerification } from "./scenarioProductionVerificationTheBoyAndTheHeron";\n',
  'import { theBoyAndTheHeronProductionCaseVerification } from "./scenarioProductionVerificationTheBoyAndTheHeron";\nimport { guillermoDelTorosPinocchioProductionCaseVerification } from "./scenarioProductionVerificationGuillermoDelTorosPinocchio";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  theBoyAndTheHeronProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  theBoyAndTheHeronProductionCaseVerification,\n  guillermoDelTorosPinocchioProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 575;", "const EXPECTED_PLAYABLE_SCENARIOS = 576;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 575;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 576;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenTheBoyAndTheHeronExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenTheBoyAndTheHeronExpansion.ts",\n  "chapterNineteenGuillermoDelTorosPinocchioExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 575;", "const EXPECTED_ATLAS_COUNT = 576;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 575, `Global Production Verification registry must contain exactly 575 unique scenarioIds after the thirty-sixth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 576, `Global Production Verification registry must contain exactly 576 unique scenarioIds after the thirty-seventh Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 575, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 575.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 576, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 576.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 43 && chapter19.byDecision?.P0?.length === 4 && chapter19.byDecision?.P1?.length === 9 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 43 USE_EXISTING / 4 P0 / 9 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 44 && chapter19.byDecision?.P0?.length === 4 && chapter19.byDecision?.P1?.length === 8 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 44 USE_EXISTING / 4 P0 / 8 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const theBoyAndTheHeron = chapter19.candidates.find((candidate) => candidate.title === "The Boy and the Heron");\ninvariant(theBoyAndTheHeron?.decision === "USE_EXISTING" && theBoyAndTheHeron?.scenarioId === "scenario_the_boy_and_the_heron_2023" && theBoyAndTheHeron?.matches === 1 && theBoyAndTheHeron?.productionVerified === true, "The Boy and the Heron is not closed as the thirty-sixth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance to Spider-Man: Across the Spider-Verse after The Boy and the Heron closes.");',
  'const theBoyAndTheHeron = chapter19.candidates.find((candidate) => candidate.title === "The Boy and the Heron");\ninvariant(theBoyAndTheHeron?.decision === "USE_EXISTING" && theBoyAndTheHeron?.scenarioId === "scenario_the_boy_and_the_heron_2023" && theBoyAndTheHeron?.matches === 1 && theBoyAndTheHeron?.productionVerified === true, "The Boy and the Heron is not closed as the thirty-sixth production-verified Chapter 19 USE_EXISTING case.");\nconst guillermoDelTorosPinocchio = chapter19.candidates.find((candidate) => candidate.title === "Guillermo del Toro\'s Pinocchio");\ninvariant(guillermoDelTorosPinocchio?.decision === "USE_EXISTING" && guillermoDelTorosPinocchio?.scenarioId === "scenario_guillermo_del_toros_pinocchio_2022" && guillermoDelTorosPinocchio?.matches === 1 && guillermoDelTorosPinocchio?.productionVerified === true, "Guillermo del Toro\'s Pinocchio is not closed as the thirty-seventh production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Pinocchio case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Saint Omer",\n  "Oppenheimer",',
  '  "Saint Omer",\n  "Guillermo del Toro\'s Pinocchio",\n  "Oppenheimer",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Mitchells vs. the Machines",\n  "Guillermo del Toro\'s Pinocchio",\n  "Barbie",',
  '  "The Mitchells vs. the Machines",\n  "Barbie",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 575;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 576;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 575);", "assert.equal(resolved.atlas.expectedCount, 576);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 575);", "assert.equal(resolved.atlas.actualCount, 576);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 575);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 576);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 43);", "assert.equal(exactUseExisting.length, 44);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 9);", "assert.equal(exactP1Queue.length, 8);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 13);", "assert.equal(resolved.recommendedNewProductionCases.length, 12);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "Guillermo del Toro\'s Pinocchio",\n    "The Secret Agent",\n    "Dune: Part Two",\n    "The Brutalist",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Dune: Part Two",\n    "The Brutalist",\n    "KPop Demon Hunters",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '    ["industrial_scale_technical", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "independent_low_mid_budget"],',
  '    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "independent_low_mid_budget", "regional_global"],',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Boy and the Heron"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Boy and the Heron"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Guillermo del Toro\'s Pinocchio"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const saintOmer = resolved.candidates.find((candidate) => candidate.title === "Saint Omer");\n  assert.ok(saintOmer);\n  assert.equal(saintOmer.decision, "USE_EXISTING");\n  assert.equal(saintOmer.scenarioId, "scenario_saint_omer_2022");\n  assert.equal(saintOmer.matches, 1);\n  assert.equal(saintOmer.productionVerified, true);',
  '  const saintOmer = resolved.candidates.find((candidate) => candidate.title === "Saint Omer");\n  assert.ok(saintOmer);\n  assert.equal(saintOmer.decision, "USE_EXISTING");\n  assert.equal(saintOmer.scenarioId, "scenario_saint_omer_2022");\n  assert.equal(saintOmer.matches, 1);\n  assert.equal(saintOmer.productionVerified, true);\n\n  const guillermoDelTorosPinocchio = resolved.candidates.find((candidate) => candidate.title === "Guillermo del Toro\'s Pinocchio");\n  assert.ok(guillermoDelTorosPinocchio);\n  assert.equal(guillermoDelTorosPinocchio.decision, "USE_EXISTING");\n  assert.equal(guillermoDelTorosPinocchio.scenarioId, "scenario_guillermo_del_toros_pinocchio_2022");\n  assert.equal(guillermoDelTorosPinocchio.matches, 1);\n  assert.equal(guillermoDelTorosPinocchio.productionVerified, true);',
);

console.log("Guillermo del Toro's Pinocchio canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
