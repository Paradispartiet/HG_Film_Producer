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
  'import { mergeChapterNineteenF1Expansion } from "../../core/chapterNineteenF1Expansion.js";\n',
  'import { mergeChapterNineteenF1Expansion } from "../../core/chapterNineteenF1Expansion.js";\nimport { mergeChapterNineteenSiratExpansion } from "../../core/chapterNineteenSiratExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenF1Scenarios = mergeChapterNineteenF1Expansion(chapterNineteenDunePartTwoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenF1Scenarios);',
  'const chapterNineteenF1Scenarios = mergeChapterNineteenF1Expansion(chapterNineteenDunePartTwoScenarios);\nconst chapterNineteenSiratScenarios = mergeChapterNineteenSiratExpansion(chapterNineteenF1Scenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSiratScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_f1_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_f1_expansion_2026+manual_chapter_nineteen_sirat_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { f1FilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenF1";\n',
  'import { f1FilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenF1";\nimport { siratFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSirat";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [f1FilmHistoryProfile.scenarioId]: f1FilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [f1FilmHistoryProfile.scenarioId]: f1FilmHistoryProfile,\n  [siratFilmHistoryProfile.scenarioId]: siratFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { f1ProductionCaseVerification } from "./scenarioProductionVerificationF1";\n',
  'import { f1ProductionCaseVerification } from "./scenarioProductionVerificationF1";\nimport { siratProductionCaseVerification } from "./scenarioProductionVerificationSirat";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  f1ProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  f1ProductionCaseVerification,\n  siratProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 581;", "const EXPECTED_PLAYABLE_SCENARIOS = 582;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 581;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 582;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenF1Expansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenF1Expansion.ts",\n  "chapterNineteenSiratExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 581;", "const EXPECTED_ATLAS_COUNT = 582;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 581, `Global Production Verification registry must contain exactly 581 unique scenarioIds after the forty-second Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 582, `Global Production Verification registry must contain exactly 582 unique scenarioIds after the forty-third Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 581, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 581.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 582, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 582.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 49 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 6 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 49 USE_EXISTING / 1 P0 / 6 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 50 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 5 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 50 USE_EXISTING / 1 P0 / 5 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const f1 = chapter19.candidates.find((candidate) => candidate.title === "F1");\ninvariant(f1?.decision === "USE_EXISTING" && f1?.scenarioId === "scenario_f1_2025" && f1?.matches === 1 && f1?.productionVerified === true, "F1 is not closed as the forty-second production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority F1 case closes outside scheduler order.");',
  'const f1 = chapter19.candidates.find((candidate) => candidate.title === "F1");\ninvariant(f1?.decision === "USE_EXISTING" && f1?.scenarioId === "scenario_f1_2025" && f1?.matches === 1 && f1?.productionVerified === true, "F1 is not closed as the forty-second production-verified Chapter 19 USE_EXISTING case.");\nconst sirat = chapter19.candidates.find((candidate) => candidate.title === "Sirāt");\ninvariant(sirat?.decision === "USE_EXISTING" && sirat?.scenarioId === "scenario_sirat_2025" && sirat?.matches === 1 && sirat?.productionVerified === true, "Sirāt is not closed as the forty-third production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Sirāt case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Sentimental Value",\n  "It Was Just an Accident",',
  '  "Sentimental Value",\n  "It Was Just an Accident",\n  "Sirāt",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Secret Agent",\n  "Sirāt",\n  "Resurrection",',
  '  "The Secret Agent",\n  "Resurrection",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 581;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 582;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 581);", "assert.equal(resolved.atlas.expectedCount, 582);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 581);", "assert.equal(resolved.atlas.actualCount, 582);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 581);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 582);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 49);", "assert.equal(exactUseExisting.length, 50);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 6);", "assert.equal(exactP1Queue.length, 5);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 7);", "assert.equal(resolved.recommendedNewProductionCases.length, 6);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Furiosa: A Mad Max Saga",\n    "Sirāt",\n    "Resurrection",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 5).map((item) => item.lane),\n    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "auteur_festival", "regional_global"],\n  );',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Furiosa: A Mad Max Saga",\n    "Resurrection",\n    "Barbie",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 5).map((item) => item.lane),\n    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "regional_global", "industrial_scale_technical"],\n  );',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("F1"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("F1"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Sirāt"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const f1 = resolved.candidates.find((candidate) => candidate.title === "F1");\n  assert.ok(f1);\n  assert.equal(f1.decision, "USE_EXISTING");\n  assert.equal(f1.scenarioId, "scenario_f1_2025");\n  assert.equal(f1.matches, 1);\n  assert.equal(f1.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
  '  const f1 = resolved.candidates.find((candidate) => candidate.title === "F1");\n  assert.ok(f1);\n  assert.equal(f1.decision, "USE_EXISTING");\n  assert.equal(f1.scenarioId, "scenario_f1_2025");\n  assert.equal(f1.matches, 1);\n  assert.equal(f1.productionVerified, true);\n\n  const sirat = resolved.candidates.find((candidate) => candidate.title === "Sirāt");\n  assert.ok(sirat);\n  assert.equal(sirat.decision, "USE_EXISTING");\n  assert.equal(sirat.scenarioId, "scenario_sirat_2025");\n  assert.equal(sirat.matches, 1);\n  assert.equal(sirat.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
);
