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
  'import { mergeChapterNineteenAllWeImagineAsLightExpansion } from "../../core/chapterNineteenAllWeImagineAsLightExpansion.js";\n',
  'import { mergeChapterNineteenAllWeImagineAsLightExpansion } from "../../core/chapterNineteenAllWeImagineAsLightExpansion.js";\nimport { mergeChapterNineteenOppenheimerExpansion } from "../../core/chapterNineteenOppenheimerExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenAllWeImagineAsLightScenarios = mergeChapterNineteenAllWeImagineAsLightExpansion(chapterNineteenCodaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAllWeImagineAsLightScenarios);',
  'const chapterNineteenAllWeImagineAsLightScenarios = mergeChapterNineteenAllWeImagineAsLightExpansion(chapterNineteenCodaScenarios);\nconst chapterNineteenOppenheimerScenarios = mergeChapterNineteenOppenheimerExpansion(chapterNineteenAllWeImagineAsLightScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenOppenheimerScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_all_we_imagine_as_light_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_all_we_imagine_as_light_expansion_2026+manual_chapter_nineteen_oppenheimer_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { allWeImagineAsLightFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAllWeImagineAsLight";\n',
  'import { allWeImagineAsLightFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAllWeImagineAsLight";\nimport { oppenheimerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenOppenheimer";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [allWeImagineAsLightFilmHistoryProfile.scenarioId]: allWeImagineAsLightFilmHistoryProfile,\n',
  '  [allWeImagineAsLightFilmHistoryProfile.scenarioId]: allWeImagineAsLightFilmHistoryProfile,\n  [oppenheimerFilmHistoryProfile.scenarioId]: oppenheimerFilmHistoryProfile,\n',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { allWeImagineAsLightProductionCaseVerification } from "./scenarioProductionVerificationAllWeImagineAsLight";\n',
  'import { allWeImagineAsLightProductionCaseVerification } from "./scenarioProductionVerificationAllWeImagineAsLight";\nimport { oppenheimerProductionCaseVerification } from "./scenarioProductionVerificationOppenheimer";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  allWeImagineAsLightProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  allWeImagineAsLightProductionCaseVerification,\n  oppenheimerProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 558;", "const EXPECTED_PLAYABLE_SCENARIOS = 559;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 558;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 559;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenAllWeImagineAsLightExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenAllWeImagineAsLightExpansion.ts",\n  "chapterNineteenOppenheimerExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 558;", "const EXPECTED_ATLAS_COUNT = 559;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 558, `Global Production Verification registry must contain exactly 558 unique scenarioIds after the nineteenth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 559, `Global Production Verification registry must contain exactly 559 unique scenarioIds after the twentieth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 558, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 558.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 559, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 559.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 26 && chapter19.byDecision?.P0?.length === 12 && chapter19.byDecision?.P1?.length === 18 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 26 USE_EXISTING / 12 P0 / 18 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 27 && chapter19.byDecision?.P0?.length === 11 && chapter19.byDecision?.P1?.length === 18 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 27 USE_EXISTING / 11 P0 / 18 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Oppenheimer" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from All We Imagine as Light to Oppenheimer after the nineteenth case.");',
  'const oppenheimer = chapter19.candidates.find((candidate) => candidate.title === "Oppenheimer");\ninvariant(oppenheimer?.decision === "USE_EXISTING" && oppenheimer?.scenarioId === "scenario_oppenheimer_2023" && oppenheimer?.matches === 1 && oppenheimer?.productionVerified === true, "Oppenheimer is not closed as the twentieth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Memoria" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Oppenheimer to Memoria after the twentieth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Decision to Leave",\n  "Saint Omer",\n  "Four Daughters",',
  '  "Decision to Leave",\n  "Saint Omer",\n  "Oppenheimer",\n  "Four Daughters",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Oppenheimer",\n  "Killers of the Flower Moon",',
  '  "Killers of the Flower Moon",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 558;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 559;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 558);", "assert.equal(resolved.atlas.expectedCount, 559);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 558);", "assert.equal(resolved.atlas.actualCount, 559);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 558);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 559);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 26);", "assert.equal(exactUseExisting.length, 27);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 12);", "assert.equal(exactP0Queue.length, 11);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 30);", "assert.equal(resolved.recommendedNewProductionCases.length, 29);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Oppenheimer");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Memoria");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Oppenheimer",\n    "Memoria",\n    "Anora",\n    "The Seed of the Sacred Fig",\n    "Killers of the Flower Moon",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Memoria",\n    "Anora",\n    "The Seed of the Sacred Fig",\n    "Killers of the Flower Moon",\n    "Anatomy of a Fall",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"]',
  '["auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("All We Imagine as Light"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Memoria") > resolved.recommendedNewProductionCases.indexOf("Oppenheimer"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("All We Imagine as Light"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Oppenheimer"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Anora") > resolved.recommendedNewProductionCases.indexOf("Memoria"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const allWeImagineAsLight = resolved.candidates.find((candidate) => candidate.title === "All We Imagine as Light");\n  assert.ok(allWeImagineAsLight);\n  assert.equal(allWeImagineAsLight.decision, "USE_EXISTING");\n  assert.equal(allWeImagineAsLight.scenarioId, "scenario_all_we_imagine_as_light_2024");\n  assert.equal(allWeImagineAsLight.matches, 1);\n  assert.equal(allWeImagineAsLight.productionVerified, true);',
  '  const allWeImagineAsLight = resolved.candidates.find((candidate) => candidate.title === "All We Imagine as Light");\n  assert.ok(allWeImagineAsLight);\n  assert.equal(allWeImagineAsLight.decision, "USE_EXISTING");\n  assert.equal(allWeImagineAsLight.scenarioId, "scenario_all_we_imagine_as_light_2024");\n  assert.equal(allWeImagineAsLight.matches, 1);\n  assert.equal(allWeImagineAsLight.productionVerified, true);\n\n  const oppenheimer = resolved.candidates.find((candidate) => candidate.title === "Oppenheimer");\n  assert.ok(oppenheimer);\n  assert.equal(oppenheimer.decision, "USE_EXISTING");\n  assert.equal(oppenheimer.scenarioId, "scenario_oppenheimer_2023");\n  assert.equal(oppenheimer.matches, 1);\n  assert.equal(oppenheimer.productionVerified, true);',
);

console.log("Oppenheimer canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
