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
  'import { mergeChapterNineteenCodaExpansion } from "../../core/chapterNineteenCodaExpansion.js";\n',
  'import { mergeChapterNineteenCodaExpansion } from "../../core/chapterNineteenCodaExpansion.js";\nimport { mergeChapterNineteenAllWeImagineAsLightExpansion } from "../../core/chapterNineteenAllWeImagineAsLightExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenCodaScenarios = mergeChapterNineteenCodaExpansion(chapterNineteenSaintOmerScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenCodaScenarios);',
  'const chapterNineteenCodaScenarios = mergeChapterNineteenCodaExpansion(chapterNineteenSaintOmerScenarios);\nconst chapterNineteenAllWeImagineAsLightScenarios = mergeChapterNineteenAllWeImagineAsLightExpansion(chapterNineteenCodaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAllWeImagineAsLightScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_coda_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_coda_expansion_2026+manual_chapter_nineteen_all_we_imagine_as_light_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { codaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenCoda";\n',
  'import { codaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenCoda";\nimport { allWeImagineAsLightFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAllWeImagineAsLight";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [codaFilmHistoryProfile.scenarioId]: codaFilmHistoryProfile,\n',
  '  [codaFilmHistoryProfile.scenarioId]: codaFilmHistoryProfile,\n  [allWeImagineAsLightFilmHistoryProfile.scenarioId]: allWeImagineAsLightFilmHistoryProfile,\n',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { codaProductionCaseVerification } from "./scenarioProductionVerificationCoda";\n',
  'import { codaProductionCaseVerification } from "./scenarioProductionVerificationCoda";\nimport { allWeImagineAsLightProductionCaseVerification } from "./scenarioProductionVerificationAllWeImagineAsLight";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  codaProductionCaseVerification,\n',
  '  codaProductionCaseVerification,\n  allWeImagineAsLightProductionCaseVerification,\n',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 557;", "const EXPECTED_PLAYABLE_SCENARIOS = 558;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 557;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 558;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenCodaExpansion.ts",\n',
  '  "chapterNineteenCodaExpansion.ts",\n  "chapterNineteenAllWeImagineAsLightExpansion.ts",\n',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 557;", "const EXPECTED_ATLAS_COUNT = 558;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 557, `Global Production Verification registry must contain exactly 557 unique scenarioIds after the eighteenth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 558, `Global Production Verification registry must contain exactly 558 unique scenarioIds after the nineteenth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 557, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 557.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 558, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 558.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 25 && chapter19.byDecision?.P0?.length === 12 && chapter19.byDecision?.P1?.length === 19 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 25 USE_EXISTING / 12 P0 / 19 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 26 && chapter19.byDecision?.P0?.length === 12 && chapter19.byDecision?.P1?.length === 18 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 26 USE_EXISTING / 12 P0 / 18 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "All We Imagine as Light" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from CODA to All We Imagine as Light after the eighteenth case.");',
  'const allWeImagineAsLight = chapter19.candidates.find((candidate) => candidate.title === "All We Imagine as Light");\ninvariant(allWeImagineAsLight?.decision === "USE_EXISTING" && allWeImagineAsLight?.scenarioId === "scenario_all_we_imagine_as_light_2024" && allWeImagineAsLight?.matches === 1 && allWeImagineAsLight?.productionVerified === true, "All We Imagine as Light is not closed as the nineteenth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Oppenheimer" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from All We Imagine as Light to Oppenheimer after the nineteenth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Nickel Boys",\n  "Dahomey",',
  '  "Nickel Boys",\n  "All We Imagine as Light",\n  "Dahomey",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Seed of the Sacred Fig",\n  "All We Imagine as Light",\n  "Anora",',
  '  "The Seed of the Sacred Fig",\n  "Anora",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 557;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 558;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 557);", "assert.equal(resolved.atlas.expectedCount, 558);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 557);", "assert.equal(resolved.atlas.actualCount, 558);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 557);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 558);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 25);", "assert.equal(exactUseExisting.length, 26);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 19);", "assert.equal(exactP1Queue.length, 18);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 31);", "assert.equal(resolved.recommendedNewProductionCases.length, 30);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "All We Imagine as Light");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Oppenheimer");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "All We Imagine as Light",\n    "Oppenheimer",\n    "Memoria",\n    "Anora",\n    "The Seed of the Sacred Fig",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Oppenheimer",\n    "Memoria",\n    "Anora",\n    "The Seed of the Sacred Fig",\n    "Killers of the Flower Moon",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("CODA"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Oppenheimer") > resolved.recommendedNewProductionCases.indexOf("All We Imagine as Light"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("CODA"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("All We Imagine as Light"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Memoria") > resolved.recommendedNewProductionCases.indexOf("Oppenheimer"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const coda = resolved.candidates.find((candidate) => candidate.title === "CODA");\n  assert.ok(coda);\n  assert.equal(coda.decision, "USE_EXISTING");\n  assert.equal(coda.scenarioId, "scenario_coda_2021");\n  assert.equal(coda.matches, 1);\n  assert.equal(coda.productionVerified, true);',
  '  const coda = resolved.candidates.find((candidate) => candidate.title === "CODA");\n  assert.ok(coda);\n  assert.equal(coda.decision, "USE_EXISTING");\n  assert.equal(coda.scenarioId, "scenario_coda_2021");\n  assert.equal(coda.matches, 1);\n  assert.equal(coda.productionVerified, true);\n\n  const allWeImagineAsLight = resolved.candidates.find((candidate) => candidate.title === "All We Imagine as Light");\n  assert.ok(allWeImagineAsLight);\n  assert.equal(allWeImagineAsLight.decision, "USE_EXISTING");\n  assert.equal(allWeImagineAsLight.scenarioId, "scenario_all_we_imagine_as_light_2024");\n  assert.equal(allWeImagineAsLight.matches, 1);\n  assert.equal(allWeImagineAsLight.productionVerified, true);',
);

console.log("All We Imagine as Light canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
