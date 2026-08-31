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
  'import { mergeChapterNineteenMemoriaExpansion } from "../../core/chapterNineteenMemoriaExpansion.js";\n',
  'import { mergeChapterNineteenMemoriaExpansion } from "../../core/chapterNineteenMemoriaExpansion.js";\nimport { mergeChapterNineteenAnoraExpansion } from "../../core/chapterNineteenAnoraExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenMemoriaScenarios = mergeChapterNineteenMemoriaExpansion(chapterNineteenOppenheimerScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenMemoriaScenarios);',
  'const chapterNineteenMemoriaScenarios = mergeChapterNineteenMemoriaExpansion(chapterNineteenOppenheimerScenarios);\nconst chapterNineteenAnoraScenarios = mergeChapterNineteenAnoraExpansion(chapterNineteenMemoriaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAnoraScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_memoria_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_memoria_expansion_2026+manual_chapter_nineteen_anora_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { memoriaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenMemoria";\n',
  'import { memoriaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenMemoria";\nimport { anoraFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAnora";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [memoriaFilmHistoryProfile.scenarioId]: memoriaFilmHistoryProfile,\n',
  '  [memoriaFilmHistoryProfile.scenarioId]: memoriaFilmHistoryProfile,\n  [anoraFilmHistoryProfile.scenarioId]: anoraFilmHistoryProfile,\n',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { memoriaProductionCaseVerification } from "./scenarioProductionVerificationMemoria";\n',
  'import { memoriaProductionCaseVerification } from "./scenarioProductionVerificationMemoria";\nimport { anoraProductionCaseVerification } from "./scenarioProductionVerificationAnora";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  memoriaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  memoriaProductionCaseVerification,\n  anoraProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 560;", "const EXPECTED_PLAYABLE_SCENARIOS = 561;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 560;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 561;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenMemoriaExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenMemoriaExpansion.ts",\n  "chapterNineteenAnoraExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 560;", "const EXPECTED_ATLAS_COUNT = 561;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 560, `Global Production Verification registry must contain exactly 560 unique scenarioIds after the twenty-first Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 561, `Global Production Verification registry must contain exactly 561 unique scenarioIds after the twenty-second Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 560, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 560.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 561, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 561.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 28 && chapter19.byDecision?.P0?.length === 11 && chapter19.byDecision?.P1?.length === 17 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 28 USE_EXISTING / 11 P0 / 17 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 29 && chapter19.byDecision?.P0?.length === 11 && chapter19.byDecision?.P1?.length === 16 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 29 USE_EXISTING / 11 P0 / 16 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Anora" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Memoria to Anora after the twenty-first case.");',
  'const anora = chapter19.candidates.find((candidate) => candidate.title === "Anora");\ninvariant(anora?.decision === "USE_EXISTING" && anora?.scenarioId === "scenario_anora_2024" && anora?.matches === 1 && anora?.productionVerified === true, "Anora is not closed as the twenty-second production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Seed of the Sacred Fig" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from Anora to The Seed of the Sacred Fig after the twenty-second case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "All We Imagine as Light",\n  "Dahomey",',
  '  "All We Imagine as Light",\n  "Dahomey",\n  "Anora",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Seed of the Sacred Fig",\n  "Anora",\n  "Furiosa: A Mad Max Saga",',
  '  "The Seed of the Sacred Fig",\n  "Furiosa: A Mad Max Saga",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 560;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 561;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 560);", "assert.equal(resolved.atlas.expectedCount, 561);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 560);", "assert.equal(resolved.atlas.actualCount, 561);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 560);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 561);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 28);", "assert.equal(exactUseExisting.length, 29);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 17);", "assert.equal(exactP1Queue.length, 16);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 28);", "assert.equal(resolved.recommendedNewProductionCases.length, 27);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Anora");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "The Seed of the Sacred Fig");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Anora",\n    "The Seed of the Sacred Fig",\n    "Killers of the Flower Moon",\n    "Anatomy of a Fall",\n    "Flow",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "The Seed of the Sacred Fig",\n    "Killers of the Flower Moon",\n    "Anatomy of a Fall",\n    "Flow",\n    "Godzilla Minus One",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Memoria"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("The Seed of the Sacred Fig") > resolved.recommendedNewProductionCases.indexOf("Anora"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Memoria"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Anora"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Killers of the Flower Moon") > resolved.recommendedNewProductionCases.indexOf("The Seed of the Sacred Fig"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const memoria = resolved.candidates.find((candidate) => candidate.title === "Memoria");\n  assert.ok(memoria);\n  assert.equal(memoria.decision, "USE_EXISTING");\n  assert.equal(memoria.scenarioId, "scenario_memoria_2021");\n  assert.equal(memoria.matches, 1);\n  assert.equal(memoria.productionVerified, true);',
  '  const memoria = resolved.candidates.find((candidate) => candidate.title === "Memoria");\n  assert.ok(memoria);\n  assert.equal(memoria.decision, "USE_EXISTING");\n  assert.equal(memoria.scenarioId, "scenario_memoria_2021");\n  assert.equal(memoria.matches, 1);\n  assert.equal(memoria.productionVerified, true);\n\n  const anora = resolved.candidates.find((candidate) => candidate.title === "Anora");\n  assert.ok(anora);\n  assert.equal(anora.decision, "USE_EXISTING");\n  assert.equal(anora.scenarioId, "scenario_anora_2024");\n  assert.equal(anora.matches, 1);\n  assert.equal(anora.productionVerified, true);',
);

console.log("Anora canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
