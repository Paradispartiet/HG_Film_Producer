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
  'import { mergeChapterNineteenSoundOfFallingExpansion } from "../../core/chapterNineteenSoundOfFallingExpansion.js";\n',
  'import { mergeChapterNineteenSoundOfFallingExpansion } from "../../core/chapterNineteenSoundOfFallingExpansion.js";\nimport { mergeChapterNineteenEoExpansion } from "../../core/chapterNineteenEoExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenSoundOfFallingScenarios = mergeChapterNineteenSoundOfFallingExpansion(chapterNineteenTheSecretAgentScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSoundOfFallingScenarios);',
  'const chapterNineteenSoundOfFallingScenarios = mergeChapterNineteenSoundOfFallingExpansion(chapterNineteenTheSecretAgentScenarios);\nconst chapterNineteenEoScenarios = mergeChapterNineteenEoExpansion(chapterNineteenSoundOfFallingScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenEoScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_sound_of_falling_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_sound_of_falling_expansion_2026+manual_chapter_nineteen_eo_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { soundOfFallingFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSoundOfFalling";\n',
  'import { soundOfFallingFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSoundOfFalling";\nimport { eoFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenEo";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [soundOfFallingFilmHistoryProfile.scenarioId]: soundOfFallingFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [soundOfFallingFilmHistoryProfile.scenarioId]: soundOfFallingFilmHistoryProfile,\n  [eoFilmHistoryProfile.scenarioId]: eoFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { soundOfFallingProductionCaseVerification } from "./scenarioProductionVerificationSoundOfFalling";\n',
  'import { soundOfFallingProductionCaseVerification } from "./scenarioProductionVerificationSoundOfFalling";\nimport { eoProductionCaseVerification } from "./scenarioProductionVerificationEo";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  soundOfFallingProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  soundOfFallingProductionCaseVerification,\n  eoProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 585;", "const EXPECTED_PLAYABLE_SCENARIOS = 586;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 585;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 586;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenSoundOfFallingExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenSoundOfFallingExpansion.ts",\n  "chapterNineteenEoExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 585;", "const EXPECTED_ATLAS_COUNT = 586;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 585, `Global Production Verification registry must contain exactly 585 unique scenarioIds after the forty-sixth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 586, `Global Production Verification registry must contain exactly 586 unique scenarioIds after the forty-seventh Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 585, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 585.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 586, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 586.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 53 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 3 && chapter19.byDecision?.P2?.length === 3 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 53 USE_EXISTING / 1 P0 / 3 P1 / 3 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 54 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 3 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 54 USE_EXISTING / 1 P0 / 3 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const soundOfFalling = chapter19.candidates.find((candidate) => candidate.title === "Sound of Falling");\ninvariant(soundOfFalling?.decision === "USE_EXISTING" && soundOfFalling?.scenarioId === "scenario_sound_of_falling_2025" && soundOfFalling?.matches === 1 && soundOfFalling?.productionVerified === true, "Sound of Falling is not closed as the forty-sixth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Sound of Falling case closes outside scheduler order.");',
  'const soundOfFalling = chapter19.candidates.find((candidate) => candidate.title === "Sound of Falling");\ninvariant(soundOfFalling?.decision === "USE_EXISTING" && soundOfFalling?.scenarioId === "scenario_sound_of_falling_2025" && soundOfFalling?.matches === 1 && soundOfFalling?.productionVerified === true, "Sound of Falling is not closed as the forty-sixth production-verified Chapter 19 USE_EXISTING case.");\nconst eo = chapter19.candidates.find((candidate) => candidate.title === "EO");\ninvariant(eo?.decision === "USE_EXISTING" && eo?.scenarioId === "scenario_eo_2022" && eo?.matches === 1 && eo?.productionVerified === true, "EO is not closed as the forty-seventh production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority EO case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Resurrection",\n  "Sound of Falling",\n] as const;',
  '  "Resurrection",\n  "Sound of Falling",\n  "EO",\n] as const;',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP2Queue = [",
  '  "Days",\n  "The Green Knight",\n  "EO",\n] as const;',
  '  "Days",\n  "The Green Knight",\n] as const;',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 585;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 586;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 585);", "assert.equal(resolved.atlas.expectedCount, 586);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 585);", "assert.equal(resolved.atlas.actualCount, 586);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 585);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 586);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 53);", "assert.equal(exactUseExisting.length, 54);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP2Queue.length, 3);", "assert.equal(exactP2Queue.length, 2);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Sound of Falling"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Sound of Falling"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("EO"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const soundOfFalling = resolved.candidates.find((candidate) => candidate.title === "Sound of Falling");\n  assert.ok(soundOfFalling);\n  assert.equal(soundOfFalling.decision, "USE_EXISTING");\n  assert.equal(soundOfFalling.scenarioId, "scenario_sound_of_falling_2025");\n  assert.equal(soundOfFalling.matches, 1);\n  assert.equal(soundOfFalling.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
  '  const soundOfFalling = resolved.candidates.find((candidate) => candidate.title === "Sound of Falling");\n  assert.ok(soundOfFalling);\n  assert.equal(soundOfFalling.decision, "USE_EXISTING");\n  assert.equal(soundOfFalling.scenarioId, "scenario_sound_of_falling_2025");\n  assert.equal(soundOfFalling.matches, 1);\n  assert.equal(soundOfFalling.productionVerified, true);\n\n  const eo = resolved.candidates.find((candidate) => candidate.title === "EO");\n  assert.ok(eo);\n  assert.equal(eo.decision, "USE_EXISTING");\n  assert.equal(eo.scenarioId, "scenario_eo_2022");\n  assert.equal(eo.matches, 1);\n  assert.equal(eo.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
);
