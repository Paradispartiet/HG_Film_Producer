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
  'import { mergeChapterNineteenTheSecretAgentExpansion } from "../../core/chapterNineteenTheSecretAgentExpansion.js";\n',
  'import { mergeChapterNineteenTheSecretAgentExpansion } from "../../core/chapterNineteenTheSecretAgentExpansion.js";\nimport { mergeChapterNineteenSoundOfFallingExpansion } from "../../core/chapterNineteenSoundOfFallingExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenTheSecretAgentScenarios = mergeChapterNineteenTheSecretAgentExpansion(chapterNineteenResurrectionScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheSecretAgentScenarios);',
  'const chapterNineteenTheSecretAgentScenarios = mergeChapterNineteenTheSecretAgentExpansion(chapterNineteenResurrectionScenarios);\nconst chapterNineteenSoundOfFallingScenarios = mergeChapterNineteenSoundOfFallingExpansion(chapterNineteenTheSecretAgentScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSoundOfFallingScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_the_secret_agent_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_the_secret_agent_expansion_2026+manual_chapter_nineteen_sound_of_falling_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theSecretAgentFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSecretAgent";\n',
  'import { theSecretAgentFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSecretAgent";\nimport { soundOfFallingFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSoundOfFalling";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [theSecretAgentFilmHistoryProfile.scenarioId]: theSecretAgentFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [theSecretAgentFilmHistoryProfile.scenarioId]: theSecretAgentFilmHistoryProfile,\n  [soundOfFallingFilmHistoryProfile.scenarioId]: soundOfFallingFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theSecretAgentProductionCaseVerification } from "./scenarioProductionVerificationTheSecretAgent";\n',
  'import { theSecretAgentProductionCaseVerification } from "./scenarioProductionVerificationTheSecretAgent";\nimport { soundOfFallingProductionCaseVerification } from "./scenarioProductionVerificationSoundOfFalling";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  theSecretAgentProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  theSecretAgentProductionCaseVerification,\n  soundOfFallingProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 584;", "const EXPECTED_PLAYABLE_SCENARIOS = 585;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 584;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 585;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenTheSecretAgentExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenTheSecretAgentExpansion.ts",\n  "chapterNineteenSoundOfFallingExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 584;", "const EXPECTED_ATLAS_COUNT = 585;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 584, `Global Production Verification registry must contain exactly 584 unique scenarioIds after the forty-fifth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 585, `Global Production Verification registry must contain exactly 585 unique scenarioIds after the forty-sixth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 584, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 584.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 585, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 585.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 52 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 3 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 52 USE_EXISTING / 1 P0 / 3 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 53 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 3 && chapter19.byDecision?.P2?.length === 3 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 53 USE_EXISTING / 1 P0 / 3 P1 / 3 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const theSecretAgent = chapter19.candidates.find((candidate) => candidate.title === "The Secret Agent");\ninvariant(theSecretAgent?.decision === "USE_EXISTING" && theSecretAgent?.scenarioId === "scenario_the_secret_agent_2025" && theSecretAgent?.matches === 1 && theSecretAgent?.productionVerified === true, "The Secret Agent is not closed as the forty-fifth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority The Secret Agent case closes outside scheduler order.");',
  'const theSecretAgent = chapter19.candidates.find((candidate) => candidate.title === "The Secret Agent");\ninvariant(theSecretAgent?.decision === "USE_EXISTING" && theSecretAgent?.scenarioId === "scenario_the_secret_agent_2025" && theSecretAgent?.matches === 1 && theSecretAgent?.productionVerified === true, "The Secret Agent is not closed as the forty-fifth production-verified Chapter 19 USE_EXISTING case.");\nconst soundOfFalling = chapter19.candidates.find((candidate) => candidate.title === "Sound of Falling");\ninvariant(soundOfFalling?.decision === "USE_EXISTING" && soundOfFalling?.scenarioId === "scenario_sound_of_falling_2025" && soundOfFalling?.matches === 1 && soundOfFalling?.productionVerified === true, "Sound of Falling is not closed as the forty-sixth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Sound of Falling case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "The Secret Agent",\n  "It Was Just an Accident",\n  "Sirāt",\n  "Resurrection",\n] as const;',
  '  "The Secret Agent",\n  "It Was Just an Accident",\n  "Sirāt",\n  "Resurrection",\n  "Sound of Falling",\n] as const;',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP2Queue = [",
  '  "Days",\n  "The Green Knight",\n  "EO",\n  "Sound of Falling",\n] as const;',
  '  "Days",\n  "The Green Knight",\n  "EO",\n] as const;',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 584;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 585;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 584);", "assert.equal(resolved.atlas.expectedCount, 585);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 584);", "assert.equal(resolved.atlas.actualCount, 585);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 584);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 585);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 52);", "assert.equal(exactUseExisting.length, 53);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP2Queue.length, 4);", "assert.equal(exactP2Queue.length, 3);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Secret Agent"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Secret Agent"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Sound of Falling"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const theSecretAgent = resolved.candidates.find((candidate) => candidate.title === "The Secret Agent");\n  assert.ok(theSecretAgent);\n  assert.equal(theSecretAgent.decision, "USE_EXISTING");\n  assert.equal(theSecretAgent.scenarioId, "scenario_the_secret_agent_2025");\n  assert.equal(theSecretAgent.matches, 1);\n  assert.equal(theSecretAgent.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
  '  const theSecretAgent = resolved.candidates.find((candidate) => candidate.title === "The Secret Agent");\n  assert.ok(theSecretAgent);\n  assert.equal(theSecretAgent.decision, "USE_EXISTING");\n  assert.equal(theSecretAgent.scenarioId, "scenario_the_secret_agent_2025");\n  assert.equal(theSecretAgent.matches, 1);\n  assert.equal(theSecretAgent.productionVerified, true);\n\n  const soundOfFalling = resolved.candidates.find((candidate) => candidate.title === "Sound of Falling");\n  assert.ok(soundOfFalling);\n  assert.equal(soundOfFalling.decision, "USE_EXISTING");\n  assert.equal(soundOfFalling.scenarioId, "scenario_sound_of_falling_2025");\n  assert.equal(soundOfFalling.matches, 1);\n  assert.equal(soundOfFalling.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
);
