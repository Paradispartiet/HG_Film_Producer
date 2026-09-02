import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: expected replacement anchor not found: ${before.slice(0, 220)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: replacement anchor is not unique: ${before.slice(0, 220)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

function replaceAfter(path, marker, before, after) {
  const source = readFileSync(path, "utf8");
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) throw new Error(`${path}: section marker not found: ${marker}`);
  if (source.indexOf(marker, markerIndex + marker.length) >= 0) throw new Error(`${path}: section marker is not unique: ${marker}`);
  const first = source.indexOf(before, markerIndex + marker.length);
  if (first < 0) throw new Error(`${path}: replacement anchor not found after ${marker}: ${before.slice(0, 220)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenDunePartTwoExpansion } from "../../core/chapterNineteenDunePartTwoExpansion.js";\n',
  'import { mergeChapterNineteenDunePartTwoExpansion } from "../../core/chapterNineteenDunePartTwoExpansion.js";\nimport { mergeChapterNineteenF1Expansion } from "../../core/chapterNineteenF1Expansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenDunePartTwoScenarios = mergeChapterNineteenDunePartTwoExpansion(chapterNineteenKPopDemonHuntersScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenDunePartTwoScenarios);',
  'const chapterNineteenDunePartTwoScenarios = mergeChapterNineteenDunePartTwoExpansion(chapterNineteenKPopDemonHuntersScenarios);\nconst chapterNineteenF1Scenarios = mergeChapterNineteenF1Expansion(chapterNineteenDunePartTwoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenF1Scenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_dune_part_two_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_dune_part_two_expansion_2026+manual_chapter_nineteen_f1_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { dunePartTwoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDunePartTwo";\n',
  'import { dunePartTwoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDunePartTwo";\nimport { f1FilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenF1";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [dunePartTwoFilmHistoryProfile.scenarioId]: dunePartTwoFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [dunePartTwoFilmHistoryProfile.scenarioId]: dunePartTwoFilmHistoryProfile,\n  [f1FilmHistoryProfile.scenarioId]: f1FilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { dunePartTwoProductionCaseVerification } from "./scenarioProductionVerificationDunePartTwo";\n',
  'import { dunePartTwoProductionCaseVerification } from "./scenarioProductionVerificationDunePartTwo";\nimport { f1ProductionCaseVerification } from "./scenarioProductionVerificationF1";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  dunePartTwoProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  dunePartTwoProductionCaseVerification,\n  f1ProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 580;", "const EXPECTED_PLAYABLE_SCENARIOS = 581;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 580;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 581;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenDunePartTwoExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenDunePartTwoExpansion.ts",\n  "chapterNineteenF1Expansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 580;", "const EXPECTED_ATLAS_COUNT = 581;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 580, `Global Production Verification registry must contain exactly 580 unique scenarioIds after the forty-first Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 581, `Global Production Verification registry must contain exactly 581 unique scenarioIds after the forty-second Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 580, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 580.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 581, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 581.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 48 && chapter19.byDecision?.P0?.length === 2 && chapter19.byDecision?.P1?.length === 6 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 48 USE_EXISTING / 2 P0 / 6 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 49 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 6 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 49 USE_EXISTING / 1 P0 / 6 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const dunePartTwo = chapter19.candidates.find((candidate) => candidate.title === "Dune: Part Two");\ninvariant(dunePartTwo?.decision === "USE_EXISTING" && dunePartTwo?.scenarioId === "scenario_dune_part_two_2024" && dunePartTwo?.matches === 1 && dunePartTwo?.productionVerified === true, "Dune: Part Two is not closed as the forty-first production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Dune: Part Two case closes outside scheduler order.");',
  'const dunePartTwo = chapter19.candidates.find((candidate) => candidate.title === "Dune: Part Two");\ninvariant(dunePartTwo?.decision === "USE_EXISTING" && dunePartTwo?.scenarioId === "scenario_dune_part_two_2024" && dunePartTwo?.matches === 1 && dunePartTwo?.productionVerified === true, "Dune: Part Two is not closed as the forty-first production-verified Chapter 19 USE_EXISTING case.");\nconst f1 = chapter19.candidates.find((candidate) => candidate.title === "F1");\ninvariant(f1?.decision === "USE_EXISTING" && f1?.scenarioId === "scenario_f1_2025" && f1?.matches === 1 && f1?.productionVerified === true, "F1 is not closed as the forty-second production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority F1 case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Sinners",\n  "One Battle After Another",\n  "KPop Demon Hunters",',
  '  "Sinners",\n  "One Battle After Another",\n  "F1",\n  "KPop Demon Hunters",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Spider-Man: Across the Spider-Verse",\n  "F1",',
  '  "Spider-Man: Across the Spider-Verse",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 580;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 581;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 580);", "assert.equal(resolved.atlas.expectedCount, 581);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 580);", "assert.equal(resolved.atlas.actualCount, 581);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 580);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 581);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 48);", "assert.equal(exactUseExisting.length, 49);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 2);", "assert.equal(exactP0Queue.length, 1);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 8);", "assert.equal(resolved.recommendedNewProductionCases.length, 7);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Dune: Part Two"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Dune: Part Two"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("F1"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const avatarWayOfWater = resolved.candidates.find((candidate) => candidate.title === "Avatar: The Way of Water");\n  assert.ok(avatarWayOfWater);\n  assert.equal(avatarWayOfWater.decision, "USE_EXISTING");\n  assert.equal(avatarWayOfWater.scenarioId, "scenario_avatar_the_way_of_water_2022");\n  assert.equal(avatarWayOfWater.matches, 1);\n  assert.equal(avatarWayOfWater.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
  '  const avatarWayOfWater = resolved.candidates.find((candidate) => candidate.title === "Avatar: The Way of Water");\n  assert.ok(avatarWayOfWater);\n  assert.equal(avatarWayOfWater.decision, "USE_EXISTING");\n  assert.equal(avatarWayOfWater.scenarioId, "scenario_avatar_the_way_of_water_2022");\n  assert.equal(avatarWayOfWater.matches, 1);\n  assert.equal(avatarWayOfWater.productionVerified, true);\n\n  const f1 = resolved.candidates.find((candidate) => candidate.title === "F1");\n  assert.ok(f1);\n  assert.equal(f1.decision, "USE_EXISTING");\n  assert.equal(f1.scenarioId, "scenario_f1_2025");\n  assert.equal(f1.matches, 1);\n  assert.equal(f1.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
);
