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
  'import { mergeChapterNineteenKPopDemonHuntersExpansion } from "../../core/chapterNineteenKPopDemonHuntersExpansion.js";\n',
  'import { mergeChapterNineteenKPopDemonHuntersExpansion } from "../../core/chapterNineteenKPopDemonHuntersExpansion.js";\nimport { mergeChapterNineteenDunePartTwoExpansion } from "../../core/chapterNineteenDunePartTwoExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenKPopDemonHuntersScenarios = mergeChapterNineteenKPopDemonHuntersExpansion(chapterNineteenSinnersScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenKPopDemonHuntersScenarios);',
  'const chapterNineteenKPopDemonHuntersScenarios = mergeChapterNineteenKPopDemonHuntersExpansion(chapterNineteenSinnersScenarios);\nconst chapterNineteenDunePartTwoScenarios = mergeChapterNineteenDunePartTwoExpansion(chapterNineteenKPopDemonHuntersScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenDunePartTwoScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_kpop_demon_hunters_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_kpop_demon_hunters_expansion_2026+manual_chapter_nineteen_dune_part_two_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { kPopDemonHuntersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKPopDemonHunters";\n',
  'import { kPopDemonHuntersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKPopDemonHunters";\nimport { dunePartTwoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDunePartTwo";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [kPopDemonHuntersFilmHistoryProfile.scenarioId]: kPopDemonHuntersFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [kPopDemonHuntersFilmHistoryProfile.scenarioId]: kPopDemonHuntersFilmHistoryProfile,\n  [dunePartTwoFilmHistoryProfile.scenarioId]: dunePartTwoFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { kPopDemonHuntersProductionCaseVerification } from "./scenarioProductionVerificationKPopDemonHunters";\n',
  'import { kPopDemonHuntersProductionCaseVerification } from "./scenarioProductionVerificationKPopDemonHunters";\nimport { dunePartTwoProductionCaseVerification } from "./scenarioProductionVerificationDunePartTwo";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  kPopDemonHuntersProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  kPopDemonHuntersProductionCaseVerification,\n  dunePartTwoProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 579;", "const EXPECTED_PLAYABLE_SCENARIOS = 580;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 579;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 580;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenKPopDemonHuntersExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenKPopDemonHuntersExpansion.ts",\n  "chapterNineteenDunePartTwoExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 579;", "const EXPECTED_ATLAS_COUNT = 580;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 579, `Global Production Verification registry must contain exactly 579 unique scenarioIds after the fortieth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 580, `Global Production Verification registry must contain exactly 580 unique scenarioIds after the forty-first Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 579, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 579.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 580, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 580.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 47 && chapter19.byDecision?.P0?.length === 3 && chapter19.byDecision?.P1?.length === 6 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 47 USE_EXISTING / 3 P0 / 6 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 48 && chapter19.byDecision?.P0?.length === 2 && chapter19.byDecision?.P1?.length === 6 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 48 USE_EXISTING / 2 P0 / 6 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const kPopDemonHunters = chapter19.candidates.find((candidate) => candidate.title === "KPop Demon Hunters");\ninvariant(kPopDemonHunters?.decision === "USE_EXISTING" && kPopDemonHunters?.scenarioId === "scenario_kpop_demon_hunters_2025" && kPopDemonHunters?.matches === 1 && kPopDemonHunters?.productionVerified === true, "KPop Demon Hunters is not closed as the fortieth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority KPop Demon Hunters case closes outside scheduler order.");',
  'const kPopDemonHunters = chapter19.candidates.find((candidate) => candidate.title === "KPop Demon Hunters");\ninvariant(kPopDemonHunters?.decision === "USE_EXISTING" && kPopDemonHunters?.scenarioId === "scenario_kpop_demon_hunters_2025" && kPopDemonHunters?.matches === 1 && kPopDemonHunters?.productionVerified === true, "KPop Demon Hunters is not closed as the fortieth production-verified Chapter 19 USE_EXISTING case.");\nconst dunePartTwo = chapter19.candidates.find((candidate) => candidate.title === "Dune: Part Two");\ninvariant(dunePartTwo?.decision === "USE_EXISTING" && dunePartTwo?.scenarioId === "scenario_dune_part_two_2024" && dunePartTwo?.matches === 1 && dunePartTwo?.productionVerified === true, "Dune: Part Two is not closed as the forty-first production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Dune: Part Two case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Anatomy of a Fall",\n  "The Brutalist",',
  '  "Anatomy of a Fall",\n  "Dune: Part Two",\n  "The Brutalist",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Spider-Man: Across the Spider-Verse",\n  "Dune: Part Two",\n  "F1",',
  '  "Spider-Man: Across the Spider-Verse",\n  "F1",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 579;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 580;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 579);", "assert.equal(resolved.atlas.expectedCount, 580);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 579);", "assert.equal(resolved.atlas.actualCount, 580);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 579);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 580);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 47);", "assert.equal(exactUseExisting.length, 48);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 3);", "assert.equal(exactP0Queue.length, 2);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 9);", "assert.equal(resolved.recommendedNewProductionCases.length, 8);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Dune: Part Two",\n    "Furiosa: A Mad Max Saga",\n    "Sirāt",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Furiosa: A Mad Max Saga",\n    "Sirāt",\n    "Resurrection",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "industrial_scale_technical", "auteur_festival"],',
  '    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "auteur_festival", "regional_global"],',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("KPop Demon Hunters"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("KPop Demon Hunters"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Dune: Part Two"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const kPopDemonHunters = resolved.candidates.find((candidate) => candidate.title === "KPop Demon Hunters");\n  assert.ok(kPopDemonHunters);\n  assert.equal(kPopDemonHunters.decision, "USE_EXISTING");\n  assert.equal(kPopDemonHunters.scenarioId, "scenario_kpop_demon_hunters_2025");\n  assert.equal(kPopDemonHunters.matches, 1);\n  assert.equal(kPopDemonHunters.productionVerified, true);',
  '  const kPopDemonHunters = resolved.candidates.find((candidate) => candidate.title === "KPop Demon Hunters");\n  assert.ok(kPopDemonHunters);\n  assert.equal(kPopDemonHunters.decision, "USE_EXISTING");\n  assert.equal(kPopDemonHunters.scenarioId, "scenario_kpop_demon_hunters_2025");\n  assert.equal(kPopDemonHunters.matches, 1);\n  assert.equal(kPopDemonHunters.productionVerified, true);\n\n  const dunePartTwo = resolved.candidates.find((candidate) => candidate.title === "Dune: Part Two");\n  assert.ok(dunePartTwo);\n  assert.equal(dunePartTwo.decision, "USE_EXISTING");\n  assert.equal(dunePartTwo.scenarioId, "scenario_dune_part_two_2024");\n  assert.equal(dunePartTwo.matches, 1);\n  assert.equal(dunePartTwo.productionVerified, true);',
);
