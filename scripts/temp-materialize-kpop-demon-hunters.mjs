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
  'import { mergeChapterNineteenSinnersExpansion } from "../../core/chapterNineteenSinnersExpansion.js";\n',
  'import { mergeChapterNineteenSinnersExpansion } from "../../core/chapterNineteenSinnersExpansion.js";\nimport { mergeChapterNineteenKPopDemonHuntersExpansion } from "../../core/chapterNineteenKPopDemonHuntersExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenSinnersScenarios = mergeChapterNineteenSinnersExpansion(chapterNineteenTheBrutalistScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSinnersScenarios);',
  'const chapterNineteenSinnersScenarios = mergeChapterNineteenSinnersExpansion(chapterNineteenTheBrutalistScenarios);\nconst chapterNineteenKPopDemonHuntersScenarios = mergeChapterNineteenKPopDemonHuntersExpansion(chapterNineteenSinnersScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenKPopDemonHuntersScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_sinners_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_sinners_expansion_2026+manual_chapter_nineteen_kpop_demon_hunters_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { sinnersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSinners";\n',
  'import { sinnersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSinners";\nimport { kPopDemonHuntersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenKPopDemonHunters";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [sinnersFilmHistoryProfile.scenarioId]: sinnersFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [sinnersFilmHistoryProfile.scenarioId]: sinnersFilmHistoryProfile,\n  [kPopDemonHuntersFilmHistoryProfile.scenarioId]: kPopDemonHuntersFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { sinnersProductionCaseVerification } from "./scenarioProductionVerificationSinners";\n',
  'import { sinnersProductionCaseVerification } from "./scenarioProductionVerificationSinners";\nimport { kPopDemonHuntersProductionCaseVerification } from "./scenarioProductionVerificationKPopDemonHunters";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  sinnersProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  sinnersProductionCaseVerification,\n  kPopDemonHuntersProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 578;", "const EXPECTED_PLAYABLE_SCENARIOS = 579;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 578;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 579;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenSinnersExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenSinnersExpansion.ts",\n  "chapterNineteenKPopDemonHuntersExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 578;", "const EXPECTED_ATLAS_COUNT = 579;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 578, `Global Production Verification registry must contain exactly 578 unique scenarioIds after the thirty-ninth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 579, `Global Production Verification registry must contain exactly 579 unique scenarioIds after the fortieth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 578, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 578.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 579, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 579.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 46 && chapter19.byDecision?.P0?.length === 3 && chapter19.byDecision?.P1?.length === 7 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 46 USE_EXISTING / 3 P0 / 7 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 47 && chapter19.byDecision?.P0?.length === 3 && chapter19.byDecision?.P1?.length === 6 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 47 USE_EXISTING / 3 P0 / 6 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const sinners = chapter19.candidates.find((candidate) => candidate.title === "Sinners");\ninvariant(sinners?.decision === "USE_EXISTING" && sinners?.scenarioId === "scenario_sinners_2025" && sinners?.matches === 1 && sinners?.productionVerified === true, "Sinners is not closed as the thirty-ninth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Sinners case closes outside scheduler order.");',
  'const sinners = chapter19.candidates.find((candidate) => candidate.title === "Sinners");\ninvariant(sinners?.decision === "USE_EXISTING" && sinners?.scenarioId === "scenario_sinners_2025" && sinners?.matches === 1 && sinners?.productionVerified === true, "Sinners is not closed as the thirty-ninth production-verified Chapter 19 USE_EXISTING case.");\nconst kPopDemonHunters = chapter19.candidates.find((candidate) => candidate.title === "KPop Demon Hunters");\ninvariant(kPopDemonHunters?.decision === "USE_EXISTING" && kPopDemonHunters?.scenarioId === "scenario_kpop_demon_hunters_2025" && kPopDemonHunters?.matches === 1 && kPopDemonHunters?.productionVerified === true, "KPop Demon Hunters is not closed as the fortieth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority KPop Demon Hunters case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Sinners",\n  "One Battle After Another",\n  "Sentimental Value",',
  '  "Sinners",\n  "One Battle After Another",\n  "KPop Demon Hunters",\n  "Sentimental Value",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "Furiosa: A Mad Max Saga",\n  "KPop Demon Hunters",\n  "The Secret Agent",',
  '  "Furiosa: A Mad Max Saga",\n  "The Secret Agent",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 578;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 579;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 578);", "assert.equal(resolved.atlas.expectedCount, 579);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 578);", "assert.equal(resolved.atlas.actualCount, 579);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 578);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 579);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 46);", "assert.equal(exactUseExisting.length, 47);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 7);", "assert.equal(exactP1Queue.length, 6);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 10);", "assert.equal(resolved.recommendedNewProductionCases.length, 9);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Dune: Part Two",\n    "KPop Demon Hunters",\n    "Furiosa: A Mad Max Saga",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Dune: Part Two",\n    "Furiosa: A Mad Max Saga",\n    "Sirāt",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "regional_global", "industrial_scale_technical"],',
  '    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "industrial_scale_technical", "auteur_festival"],',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Sinners"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Sinners"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("KPop Demon Hunters"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const sinners = resolved.candidates.find((candidate) => candidate.title === "Sinners");\n  assert.ok(sinners);\n  assert.equal(sinners.decision, "USE_EXISTING");\n  assert.equal(sinners.scenarioId, "scenario_sinners_2025");\n  assert.equal(sinners.matches, 1);\n  assert.equal(sinners.productionVerified, true);',
  '  const sinners = resolved.candidates.find((candidate) => candidate.title === "Sinners");\n  assert.ok(sinners);\n  assert.equal(sinners.decision, "USE_EXISTING");\n  assert.equal(sinners.scenarioId, "scenario_sinners_2025");\n  assert.equal(sinners.matches, 1);\n  assert.equal(sinners.productionVerified, true);\n\n  const kPopDemonHunters = resolved.candidates.find((candidate) => candidate.title === "KPop Demon Hunters");\n  assert.ok(kPopDemonHunters);\n  assert.equal(kPopDemonHunters.decision, "USE_EXISTING");\n  assert.equal(kPopDemonHunters.scenarioId, "scenario_kpop_demon_hunters_2025");\n  assert.equal(kPopDemonHunters.matches, 1);\n  assert.equal(kPopDemonHunters.productionVerified, true);',
);
