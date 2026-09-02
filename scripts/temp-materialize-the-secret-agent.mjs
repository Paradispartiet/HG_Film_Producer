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
  'import { mergeChapterNineteenResurrectionExpansion } from "../../core/chapterNineteenResurrectionExpansion.js";\n',
  'import { mergeChapterNineteenResurrectionExpansion } from "../../core/chapterNineteenResurrectionExpansion.js";\nimport { mergeChapterNineteenTheSecretAgentExpansion } from "../../core/chapterNineteenTheSecretAgentExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenResurrectionScenarios = mergeChapterNineteenResurrectionExpansion(chapterNineteenSiratScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenResurrectionScenarios);',
  'const chapterNineteenResurrectionScenarios = mergeChapterNineteenResurrectionExpansion(chapterNineteenSiratScenarios);\nconst chapterNineteenTheSecretAgentScenarios = mergeChapterNineteenTheSecretAgentExpansion(chapterNineteenResurrectionScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheSecretAgentScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_resurrection_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_resurrection_expansion_2026+manual_chapter_nineteen_the_secret_agent_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { resurrectionFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenResurrection";\n',
  'import { resurrectionFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenResurrection";\nimport { theSecretAgentFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSecretAgent";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [resurrectionFilmHistoryProfile.scenarioId]: resurrectionFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [resurrectionFilmHistoryProfile.scenarioId]: resurrectionFilmHistoryProfile,\n  [theSecretAgentFilmHistoryProfile.scenarioId]: theSecretAgentFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { resurrectionProductionCaseVerification } from "./scenarioProductionVerificationResurrection";\n',
  'import { resurrectionProductionCaseVerification } from "./scenarioProductionVerificationResurrection";\nimport { theSecretAgentProductionCaseVerification } from "./scenarioProductionVerificationTheSecretAgent";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  resurrectionProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  resurrectionProductionCaseVerification,\n  theSecretAgentProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 583;", "const EXPECTED_PLAYABLE_SCENARIOS = 584;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 583;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 584;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenResurrectionExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenResurrectionExpansion.ts",\n  "chapterNineteenTheSecretAgentExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 583;", "const EXPECTED_ATLAS_COUNT = 584;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 583, `Global Production Verification registry must contain exactly 583 unique scenarioIds after the forty-fourth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 584, `Global Production Verification registry must contain exactly 584 unique scenarioIds after the forty-fifth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 583, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 583.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 584, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 584.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 51 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 4 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 51 USE_EXISTING / 1 P0 / 4 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 52 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 3 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 52 USE_EXISTING / 1 P0 / 3 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const resurrection = chapter19.candidates.find((candidate) => candidate.title === "Resurrection");\ninvariant(resurrection?.decision === "USE_EXISTING" && resurrection?.scenarioId === "scenario_resurrection_2025" && resurrection?.matches === 1 && resurrection?.productionVerified === true, "Resurrection is not closed as the forty-fourth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Resurrection case closes outside scheduler order.");',
  'const resurrection = chapter19.candidates.find((candidate) => candidate.title === "Resurrection");\ninvariant(resurrection?.decision === "USE_EXISTING" && resurrection?.scenarioId === "scenario_resurrection_2025" && resurrection?.matches === 1 && resurrection?.productionVerified === true, "Resurrection is not closed as the forty-fourth production-verified Chapter 19 USE_EXISTING case.");\nconst theSecretAgent = chapter19.candidates.find((candidate) => candidate.title === "The Secret Agent");\ninvariant(theSecretAgent?.decision === "USE_EXISTING" && theSecretAgent?.scenarioId === "scenario_the_secret_agent_2025" && theSecretAgent?.matches === 1 && theSecretAgent?.productionVerified === true, "The Secret Agent is not closed as the forty-fifth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority The Secret Agent case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Sentimental Value",\n  "It Was Just an Accident",',
  '  "Sentimental Value",\n  "The Secret Agent",\n  "It Was Just an Accident",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "Furiosa: A Mad Max Saga",\n  "The Secret Agent",\n] as const;',
  '  "Furiosa: A Mad Max Saga",\n] as const;',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 583;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 584;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 583);", "assert.equal(resolved.atlas.expectedCount, 584);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 583);", "assert.equal(resolved.atlas.actualCount, 584);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 583);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 584);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 51);", "assert.equal(exactUseExisting.length, 52);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 4);", "assert.equal(exactP1Queue.length, 3);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 5);", "assert.equal(resolved.recommendedNewProductionCases.length, 4);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Spider-Man: Across the Spider-Verse",\n    "The Secret Agent",\n    "Furiosa: A Mad Max Saga",\n    "Barbie",\n    "The Mitchells vs. the Machines",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 5).map((item) => item.lane),\n    ["industrial_scale_technical", "regional_global", "industrial_scale_technical", "industrial_scale_technical", "industrial_scale_technical"],\n  );',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 4), [\n    "Spider-Man: Across the Spider-Verse",\n    "Furiosa: A Mad Max Saga",\n    "Barbie",\n    "The Mitchells vs. the Machines",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 4).map((item) => item.lane),\n    ["industrial_scale_technical", "industrial_scale_technical", "industrial_scale_technical", "industrial_scale_technical"],\n  );',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Resurrection"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Resurrection"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("The Secret Agent"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const resurrection = resolved.candidates.find((candidate) => candidate.title === "Resurrection");\n  assert.ok(resurrection);\n  assert.equal(resurrection.decision, "USE_EXISTING");\n  assert.equal(resurrection.scenarioId, "scenario_resurrection_2025");\n  assert.equal(resurrection.matches, 1);\n  assert.equal(resurrection.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
  '  const resurrection = resolved.candidates.find((candidate) => candidate.title === "Resurrection");\n  assert.ok(resurrection);\n  assert.equal(resurrection.decision, "USE_EXISTING");\n  assert.equal(resurrection.scenarioId, "scenario_resurrection_2025");\n  assert.equal(resurrection.matches, 1);\n  assert.equal(resurrection.productionVerified, true);\n\n  const theSecretAgent = resolved.candidates.find((candidate) => candidate.title === "The Secret Agent");\n  assert.ok(theSecretAgent);\n  assert.equal(theSecretAgent.decision, "USE_EXISTING");\n  assert.equal(theSecretAgent.scenarioId, "scenario_the_secret_agent_2025");\n  assert.equal(theSecretAgent.matches, 1);\n  assert.equal(theSecretAgent.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
);
