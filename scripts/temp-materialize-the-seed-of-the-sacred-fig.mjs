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
  'import { mergeChapterNineteenAnoraExpansion } from "../../core/chapterNineteenAnoraExpansion.js";\n',
  'import { mergeChapterNineteenAnoraExpansion } from "../../core/chapterNineteenAnoraExpansion.js";\nimport { mergeChapterNineteenTheSeedOfTheSacredFigExpansion } from "../../core/chapterNineteenTheSeedOfTheSacredFigExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenAnoraScenarios = mergeChapterNineteenAnoraExpansion(chapterNineteenMemoriaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAnoraScenarios);',
  'const chapterNineteenAnoraScenarios = mergeChapterNineteenAnoraExpansion(chapterNineteenMemoriaScenarios);\nconst chapterNineteenTheSeedOfTheSacredFigScenarios = mergeChapterNineteenTheSeedOfTheSacredFigExpansion(chapterNineteenAnoraScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheSeedOfTheSacredFigScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_anora_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_anora_expansion_2026+manual_chapter_nineteen_the_seed_of_the_sacred_fig_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { anoraFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAnora";\n',
  'import { anoraFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAnora";\nimport { theSeedOfTheSacredFigFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheSeedOfTheSacredFig";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [anoraFilmHistoryProfile.scenarioId]: anoraFilmHistoryProfile,\n',
  '  [anoraFilmHistoryProfile.scenarioId]: anoraFilmHistoryProfile,\n  [theSeedOfTheSacredFigFilmHistoryProfile.scenarioId]: theSeedOfTheSacredFigFilmHistoryProfile,\n',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { anoraProductionCaseVerification } from "./scenarioProductionVerificationAnora";\n',
  'import { anoraProductionCaseVerification } from "./scenarioProductionVerificationAnora";\nimport { theSeedOfTheSacredFigProductionCaseVerification } from "./scenarioProductionVerificationTheSeedOfTheSacredFig";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  anoraProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  anoraProductionCaseVerification,\n  theSeedOfTheSacredFigProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 561;", "const EXPECTED_PLAYABLE_SCENARIOS = 562;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 561;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 562;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenAnoraExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenAnoraExpansion.ts",\n  "chapterNineteenTheSeedOfTheSacredFigExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 561;", "const EXPECTED_ATLAS_COUNT = 562;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 561, `Global Production Verification registry must contain exactly 561 unique scenarioIds after the twenty-second Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 562, `Global Production Verification registry must contain exactly 562 unique scenarioIds after the twenty-third Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 561, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 561.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 562, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 562.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 29 && chapter19.byDecision?.P0?.length === 11 && chapter19.byDecision?.P1?.length === 16 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 29 USE_EXISTING / 11 P0 / 16 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 30 && chapter19.byDecision?.P0?.length === 11 && chapter19.byDecision?.P1?.length === 15 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 30 USE_EXISTING / 11 P0 / 15 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "The Seed of the Sacred Fig" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from Anora to The Seed of the Sacred Fig after the twenty-second case.");',
  'const theSeedOfTheSacredFig = chapter19.candidates.find((candidate) => candidate.title === "The Seed of the Sacred Fig");\ninvariant(theSeedOfTheSacredFig?.decision === "USE_EXISTING" && theSeedOfTheSacredFig?.scenarioId === "scenario_the_seed_of_the_sacred_fig_2024" && theSeedOfTheSacredFig?.matches === 1 && theSeedOfTheSacredFig?.productionVerified === true, "The Seed of the Sacred Fig is not closed as the twenty-third production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Killers of the Flower Moon" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from The Seed of the Sacred Fig to Killers of the Flower Moon after the twenty-third case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Nickel Boys",\n  "All We Imagine as Light",',
  '  "Nickel Boys",\n  "The Seed of the Sacred Fig",\n  "All We Imagine as Light",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Brutalist",\n  "The Seed of the Sacred Fig",\n  "Furiosa: A Mad Max Saga",',
  '  "The Brutalist",\n  "Furiosa: A Mad Max Saga",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 561;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 562;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 561);", "assert.equal(resolved.atlas.expectedCount, 562);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 561);", "assert.equal(resolved.atlas.actualCount, 562);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 561);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 562);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 29);", "assert.equal(exactUseExisting.length, 30);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 16);", "assert.equal(exactP1Queue.length, 15);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 27);", "assert.equal(resolved.recommendedNewProductionCases.length, 26);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "The Seed of the Sacred Fig");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Killers of the Flower Moon");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "The Seed of the Sacred Fig",\n    "Killers of the Flower Moon",\n    "Anatomy of a Fall",\n    "Flow",\n    "Godzilla Minus One",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Killers of the Flower Moon",\n    "Anatomy of a Fall",\n    "Flow",\n    "Godzilla Minus One",\n    "Poor Things",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Anora"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Killers of the Flower Moon") > resolved.recommendedNewProductionCases.indexOf("The Seed of the Sacred Fig"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Anora"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("The Seed of the Sacred Fig"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const anora = resolved.candidates.find((candidate) => candidate.title === "Anora");\n  assert.ok(anora);\n  assert.equal(anora.decision, "USE_EXISTING");\n  assert.equal(anora.scenarioId, "scenario_anora_2024");\n  assert.equal(anora.matches, 1);\n  assert.equal(anora.productionVerified, true);',
  '  const anora = resolved.candidates.find((candidate) => candidate.title === "Anora");\n  assert.ok(anora);\n  assert.equal(anora.decision, "USE_EXISTING");\n  assert.equal(anora.scenarioId, "scenario_anora_2024");\n  assert.equal(anora.matches, 1);\n  assert.equal(anora.productionVerified, true);\n\n  const theSeedOfTheSacredFig = resolved.candidates.find((candidate) => candidate.title === "The Seed of the Sacred Fig");\n  assert.ok(theSeedOfTheSacredFig);\n  assert.equal(theSeedOfTheSacredFig.decision, "USE_EXISTING");\n  assert.equal(theSeedOfTheSacredFig.scenarioId, "scenario_the_seed_of_the_sacred_fig_2024");\n  assert.equal(theSeedOfTheSacredFig.matches, 1);\n  assert.equal(theSeedOfTheSacredFig.productionVerified, true);',
);

console.log("The Seed of the Sacred Fig canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
