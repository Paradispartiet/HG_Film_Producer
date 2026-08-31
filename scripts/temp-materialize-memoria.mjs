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
  'import { mergeChapterNineteenOppenheimerExpansion } from "../../core/chapterNineteenOppenheimerExpansion.js";\n',
  'import { mergeChapterNineteenOppenheimerExpansion } from "../../core/chapterNineteenOppenheimerExpansion.js";\nimport { mergeChapterNineteenMemoriaExpansion } from "../../core/chapterNineteenMemoriaExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenOppenheimerScenarios = mergeChapterNineteenOppenheimerExpansion(chapterNineteenAllWeImagineAsLightScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenOppenheimerScenarios);',
  'const chapterNineteenOppenheimerScenarios = mergeChapterNineteenOppenheimerExpansion(chapterNineteenAllWeImagineAsLightScenarios);\nconst chapterNineteenMemoriaScenarios = mergeChapterNineteenMemoriaExpansion(chapterNineteenOppenheimerScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenMemoriaScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_oppenheimer_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_oppenheimer_expansion_2026+manual_chapter_nineteen_memoria_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { oppenheimerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOppenheimer";\n',
  'import { oppenheimerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOppenheimer";\nimport { memoriaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenMemoria";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [oppenheimerFilmHistoryProfile.scenarioId]: oppenheimerFilmHistoryProfile,\n',
  '  [oppenheimerFilmHistoryProfile.scenarioId]: oppenheimerFilmHistoryProfile,\n  [memoriaFilmHistoryProfile.scenarioId]: memoriaFilmHistoryProfile,\n',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { oppenheimerProductionCaseVerification } from "./scenarioProductionVerificationOppenheimer";\n',
  'import { oppenheimerProductionCaseVerification } from "./scenarioProductionVerificationOppenheimer";\nimport { memoriaProductionCaseVerification } from "./scenarioProductionVerificationMemoria";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  oppenheimerProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  oppenheimerProductionCaseVerification,\n  memoriaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 559;", "const EXPECTED_PLAYABLE_SCENARIOS = 560;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 559;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 560;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenOppenheimerExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenOppenheimerExpansion.ts",\n  "chapterNineteenMemoriaExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 559;", "const EXPECTED_ATLAS_COUNT = 560;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 559, `Global Production Verification registry must contain exactly 559 unique scenarioIds after the twentieth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 560, `Global Production Verification registry must contain exactly 560 unique scenarioIds after the twenty-first Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 559, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 559.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 560, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 560.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 27 && chapter19.byDecision?.P0?.length === 11 && chapter19.byDecision?.P1?.length === 18 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 27 USE_EXISTING / 11 P0 / 18 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 28 && chapter19.byDecision?.P0?.length === 11 && chapter19.byDecision?.P1?.length === 17 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 28 USE_EXISTING / 11 P0 / 17 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Memoria" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Oppenheimer to Memoria after the twentieth case.");',
  'const memoria = chapter19.candidates.find((candidate) => candidate.title === "Memoria");\ninvariant(memoria?.decision === "USE_EXISTING" && memoria?.scenarioId === "scenario_memoria_2021" && memoria?.matches === 1 && memoria?.productionVerified === true, "Memoria is not closed as the twenty-first production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Anora" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Memoria to Anora after the twenty-first case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "The Worst Person in the World",\n  "CODA",',
  '  "The Worst Person in the World",\n  "Memoria",\n  "CODA",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Power of the Dog",\n  "Memoria",\n  "The Mitchells vs. the Machines",',
  '  "The Power of the Dog",\n  "The Mitchells vs. the Machines",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 559;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 560;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 559);", "assert.equal(resolved.atlas.expectedCount, 560);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 559);", "assert.equal(resolved.atlas.actualCount, 560);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 559);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 560);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 27);", "assert.equal(exactUseExisting.length, 28);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 18);", "assert.equal(exactP1Queue.length, 17);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 29);", "assert.equal(resolved.recommendedNewProductionCases.length, 28);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Memoria");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Anora");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Memoria",\n    "Anora",\n    "The Seed of the Sacred Fig",\n    "Killers of the Flower Moon",\n    "Anatomy of a Fall",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Anora",\n    "The Seed of the Sacred Fig",\n    "Killers of the Flower Moon",\n    "Anatomy of a Fall",\n    "Flow",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival"]',
  '["independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Oppenheimer"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Anora") > resolved.recommendedNewProductionCases.indexOf("Memoria"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Oppenheimer"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Memoria"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("The Seed of the Sacred Fig") > resolved.recommendedNewProductionCases.indexOf("Anora"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const oppenheimer = resolved.candidates.find((candidate) => candidate.title === "Oppenheimer");\n  assert.ok(oppenheimer);\n  assert.equal(oppenheimer.decision, "USE_EXISTING");\n  assert.equal(oppenheimer.scenarioId, "scenario_oppenheimer_2023");\n  assert.equal(oppenheimer.matches, 1);\n  assert.equal(oppenheimer.productionVerified, true);',
  '  const oppenheimer = resolved.candidates.find((candidate) => candidate.title === "Oppenheimer");\n  assert.ok(oppenheimer);\n  assert.equal(oppenheimer.decision, "USE_EXISTING");\n  assert.equal(oppenheimer.scenarioId, "scenario_oppenheimer_2023");\n  assert.equal(oppenheimer.matches, 1);\n  assert.equal(oppenheimer.productionVerified, true);\n\n  const memoria = resolved.candidates.find((candidate) => candidate.title === "Memoria");\n  assert.ok(memoria);\n  assert.equal(memoria.decision, "USE_EXISTING");\n  assert.equal(memoria.scenarioId, "scenario_memoria_2021");\n  assert.equal(memoria.matches, 1);\n  assert.equal(memoria.productionVerified, true);',
);

console.log("Memoria canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
