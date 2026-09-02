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
  'import { mergeChapterNineteenGuillermoDelTorosPinocchioExpansion } from "../../core/chapterNineteenGuillermoDelTorosPinocchioExpansion.js";\n',
  'import { mergeChapterNineteenGuillermoDelTorosPinocchioExpansion } from "../../core/chapterNineteenGuillermoDelTorosPinocchioExpansion.js";\nimport { mergeChapterNineteenTheBrutalistExpansion } from "../../core/chapterNineteenTheBrutalistExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenGuillermoDelTorosPinocchioScenarios = mergeChapterNineteenGuillermoDelTorosPinocchioExpansion(chapterNineteenTheBoyAndTheHeronScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenGuillermoDelTorosPinocchioScenarios);',
  'const chapterNineteenGuillermoDelTorosPinocchioScenarios = mergeChapterNineteenGuillermoDelTorosPinocchioExpansion(chapterNineteenTheBoyAndTheHeronScenarios);\nconst chapterNineteenTheBrutalistScenarios = mergeChapterNineteenTheBrutalistExpansion(chapterNineteenGuillermoDelTorosPinocchioScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheBrutalistScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_guillermo_del_toros_pinocchio_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_guillermo_del_toros_pinocchio_expansion_2026+manual_chapter_nineteen_the_brutalist_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { guillermoDelTorosPinocchioFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenGuillermoDelTorosPinocchio";\n',
  'import { guillermoDelTorosPinocchioFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenGuillermoDelTorosPinocchio";\nimport { theBrutalistFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheBrutalist";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [guillermoDelTorosPinocchioFilmHistoryProfile.scenarioId]: guillermoDelTorosPinocchioFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [guillermoDelTorosPinocchioFilmHistoryProfile.scenarioId]: guillermoDelTorosPinocchioFilmHistoryProfile,\n  [theBrutalistFilmHistoryProfile.scenarioId]: theBrutalistFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { guillermoDelTorosPinocchioProductionCaseVerification } from "./scenarioProductionVerificationGuillermoDelTorosPinocchio";\n',
  'import { guillermoDelTorosPinocchioProductionCaseVerification } from "./scenarioProductionVerificationGuillermoDelTorosPinocchio";\nimport { theBrutalistProductionCaseVerification } from "./scenarioProductionVerificationTheBrutalist";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  guillermoDelTorosPinocchioProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  guillermoDelTorosPinocchioProductionCaseVerification,\n  theBrutalistProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 576;", "const EXPECTED_PLAYABLE_SCENARIOS = 577;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 576;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 577;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenGuillermoDelTorosPinocchioExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenGuillermoDelTorosPinocchioExpansion.ts",\n  "chapterNineteenTheBrutalistExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 576;", "const EXPECTED_ATLAS_COUNT = 577;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 576, `Global Production Verification registry must contain exactly 576 unique scenarioIds after the thirty-seventh Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 577, `Global Production Verification registry must contain exactly 577 unique scenarioIds after the thirty-eighth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 576, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 576.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 577, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 577.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 44 && chapter19.byDecision?.P0?.length === 4 && chapter19.byDecision?.P1?.length === 8 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 44 USE_EXISTING / 4 P0 / 8 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 45 && chapter19.byDecision?.P0?.length === 4 && chapter19.byDecision?.P1?.length === 7 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 45 USE_EXISTING / 4 P0 / 7 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const guillermoDelTorosPinocchio = chapter19.candidates.find((candidate) => candidate.title === "Guillermo del Toro\'s Pinocchio");\ninvariant(guillermoDelTorosPinocchio?.decision === "USE_EXISTING" && guillermoDelTorosPinocchio?.scenarioId === "scenario_guillermo_del_toros_pinocchio_2022" && guillermoDelTorosPinocchio?.matches === 1 && guillermoDelTorosPinocchio?.productionVerified === true, "Guillermo del Toro\'s Pinocchio is not closed as the thirty-seventh production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Pinocchio case closes outside scheduler order.");',
  'const guillermoDelTorosPinocchio = chapter19.candidates.find((candidate) => candidate.title === "Guillermo del Toro\'s Pinocchio");\ninvariant(guillermoDelTorosPinocchio?.decision === "USE_EXISTING" && guillermoDelTorosPinocchio?.scenarioId === "scenario_guillermo_del_toros_pinocchio_2022" && guillermoDelTorosPinocchio?.matches === 1 && guillermoDelTorosPinocchio?.productionVerified === true, "Guillermo del Toro\'s Pinocchio is not closed as the thirty-seventh production-verified Chapter 19 USE_EXISTING case.");\nconst theBrutalist = chapter19.candidates.find((candidate) => candidate.title === "The Brutalist");\ninvariant(theBrutalist?.decision === "USE_EXISTING" && theBrutalist?.scenarioId === "scenario_the_brutalist_2024" && theBrutalist?.matches === 1 && theBrutalist?.productionVerified === true, "The Brutalist is not closed as the thirty-eighth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority The Brutalist case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Anatomy of a Fall",\n  "Flow",',
  '  "Anatomy of a Fall",\n  "The Brutalist",\n  "Flow",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "Barbie",\n  "The Brutalist",\n  "Furiosa: A Mad Max Saga",',
  '  "Barbie",\n  "Furiosa: A Mad Max Saga",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 576;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 577;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 576);", "assert.equal(resolved.atlas.expectedCount, 577);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 576);", "assert.equal(resolved.atlas.actualCount, 577);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 576);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 577);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 44);", "assert.equal(exactUseExisting.length, 45);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 8);", "assert.equal(exactP1Queue.length, 7);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 12);", "assert.equal(resolved.recommendedNewProductionCases.length, 11);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Dune: Part Two",\n    "The Brutalist",\n    "KPop Demon Hunters",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Dune: Part Two",\n    "KPop Demon Hunters",\n    "Furiosa: A Mad Max Saga",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "independent_low_mid_budget", "regional_global"],',
  '    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "regional_global", "industrial_scale_technical"],',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Guillermo del Toro\'s Pinocchio"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Guillermo del Toro\'s Pinocchio"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("The Brutalist"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const guillermoDelTorosPinocchio = resolved.candidates.find((candidate) => candidate.title === "Guillermo del Toro\'s Pinocchio");\n  assert.ok(guillermoDelTorosPinocchio);\n  assert.equal(guillermoDelTorosPinocchio.decision, "USE_EXISTING");\n  assert.equal(guillermoDelTorosPinocchio.scenarioId, "scenario_guillermo_del_toros_pinocchio_2022");\n  assert.equal(guillermoDelTorosPinocchio.matches, 1);\n  assert.equal(guillermoDelTorosPinocchio.productionVerified, true);',
  '  const guillermoDelTorosPinocchio = resolved.candidates.find((candidate) => candidate.title === "Guillermo del Toro\'s Pinocchio");\n  assert.ok(guillermoDelTorosPinocchio);\n  assert.equal(guillermoDelTorosPinocchio.decision, "USE_EXISTING");\n  assert.equal(guillermoDelTorosPinocchio.scenarioId, "scenario_guillermo_del_toros_pinocchio_2022");\n  assert.equal(guillermoDelTorosPinocchio.matches, 1);\n  assert.equal(guillermoDelTorosPinocchio.productionVerified, true);\n\n  const theBrutalist = resolved.candidates.find((candidate) => candidate.title === "The Brutalist");\n  assert.ok(theBrutalist);\n  assert.equal(theBrutalist.decision, "USE_EXISTING");\n  assert.equal(theBrutalist.scenarioId, "scenario_the_brutalist_2024");\n  assert.equal(theBrutalist.matches, 1);\n  assert.equal(theBrutalist.productionVerified, true);',
);

console.log("The Brutalist canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");