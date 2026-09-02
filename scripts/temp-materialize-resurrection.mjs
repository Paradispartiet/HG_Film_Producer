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
  'import { mergeChapterNineteenSiratExpansion } from "../../core/chapterNineteenSiratExpansion.js";\n',
  'import { mergeChapterNineteenSiratExpansion } from "../../core/chapterNineteenSiratExpansion.js";\nimport { mergeChapterNineteenResurrectionExpansion } from "../../core/chapterNineteenResurrectionExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenSiratScenarios = mergeChapterNineteenSiratExpansion(chapterNineteenF1Scenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSiratScenarios);',
  'const chapterNineteenSiratScenarios = mergeChapterNineteenSiratExpansion(chapterNineteenF1Scenarios);\nconst chapterNineteenResurrectionScenarios = mergeChapterNineteenResurrectionExpansion(chapterNineteenSiratScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenResurrectionScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_sirat_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_sirat_expansion_2026+manual_chapter_nineteen_resurrection_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { siratFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSirat";\n',
  'import { siratFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSirat";\nimport { resurrectionFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenResurrection";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [siratFilmHistoryProfile.scenarioId]: siratFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [siratFilmHistoryProfile.scenarioId]: siratFilmHistoryProfile,\n  [resurrectionFilmHistoryProfile.scenarioId]: resurrectionFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { siratProductionCaseVerification } from "./scenarioProductionVerificationSirat";\n',
  'import { siratProductionCaseVerification } from "./scenarioProductionVerificationSirat";\nimport { resurrectionProductionCaseVerification } from "./scenarioProductionVerificationResurrection";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  siratProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  siratProductionCaseVerification,\n  resurrectionProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 582;", "const EXPECTED_PLAYABLE_SCENARIOS = 583;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 582;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 583;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenSiratExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenSiratExpansion.ts",\n  "chapterNineteenResurrectionExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 582;", "const EXPECTED_ATLAS_COUNT = 583;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 582, `Global Production Verification registry must contain exactly 582 unique scenarioIds after the forty-third Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 583, `Global Production Verification registry must contain exactly 583 unique scenarioIds after the forty-fourth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 582, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 582.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 583, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 583.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 50 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 5 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 50 USE_EXISTING / 1 P0 / 5 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 51 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 4 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 51 USE_EXISTING / 1 P0 / 4 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const sirat = chapter19.candidates.find((candidate) => candidate.title === "Sirāt");\ninvariant(sirat?.decision === "USE_EXISTING" && sirat?.scenarioId === "scenario_sirat_2025" && sirat?.matches === 1 && sirat?.productionVerified === true, "Sirāt is not closed as the forty-third production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Sirāt case closes outside scheduler order.");',
  'const sirat = chapter19.candidates.find((candidate) => candidate.title === "Sirāt");\ninvariant(sirat?.decision === "USE_EXISTING" && sirat?.scenarioId === "scenario_sirat_2025" && sirat?.matches === 1 && sirat?.productionVerified === true, "Sirāt is not closed as the forty-third production-verified Chapter 19 USE_EXISTING case.");\nconst resurrection = chapter19.candidates.find((candidate) => candidate.title === "Resurrection");\ninvariant(resurrection?.decision === "USE_EXISTING" && resurrection?.scenarioId === "scenario_resurrection_2025" && resurrection?.matches === 1 && resurrection?.productionVerified === true, "Resurrection is not closed as the forty-fourth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Resurrection case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "It Was Just an Accident",\n  "Sirāt",\n] as const;',
  '  "It Was Just an Accident",\n  "Sirāt",\n  "Resurrection",\n] as const;',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Secret Agent",\n  "Resurrection",\n] as const;',
  '  "The Secret Agent",\n] as const;',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 582;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 583;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 582);", "assert.equal(resolved.atlas.expectedCount, 583);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 582);", "assert.equal(resolved.atlas.actualCount, 583);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 582);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 583);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 50);", "assert.equal(exactUseExisting.length, 51);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 5);", "assert.equal(exactP1Queue.length, 4);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 6);", "assert.equal(resolved.recommendedNewProductionCases.length, 5);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Furiosa: A Mad Max Saga",\n    "Resurrection",\n    "Barbie",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 5).map((item) => item.lane),\n    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "regional_global", "industrial_scale_technical"],\n  );',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Furiosa: A Mad Max Saga",\n    "Barbie",\n    "The Mitchells vs. the Machines",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 5).map((item) => item.lane),\n    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "industrial_scale_technical", "industrial_scale_technical"],\n  );',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Sirāt"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Sirāt"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Resurrection"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const sirat = resolved.candidates.find((candidate) => candidate.title === "Sirāt");\n  assert.ok(sirat);\n  assert.equal(sirat.decision, "USE_EXISTING");\n  assert.equal(sirat.scenarioId, "scenario_sirat_2025");\n  assert.equal(sirat.matches, 1);\n  assert.equal(sirat.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
  '  const sirat = resolved.candidates.find((candidate) => candidate.title === "Sirāt");\n  assert.ok(sirat);\n  assert.equal(sirat.decision, "USE_EXISTING");\n  assert.equal(sirat.scenarioId, "scenario_sirat_2025");\n  assert.equal(sirat.matches, 1);\n  assert.equal(sirat.productionVerified, true);\n\n  const resurrection = resolved.candidates.find((candidate) => candidate.title === "Resurrection");\n  assert.ok(resurrection);\n  assert.equal(resurrection.decision, "USE_EXISTING");\n  assert.equal(resurrection.scenarioId, "scenario_resurrection_2025");\n  assert.equal(resurrection.matches, 1);\n  assert.equal(resurrection.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
);
