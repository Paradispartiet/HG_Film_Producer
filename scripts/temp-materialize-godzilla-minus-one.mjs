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
  'import { mergeChapterNineteenFlowExpansion } from "../../core/chapterNineteenFlowExpansion.js";\n',
  'import { mergeChapterNineteenFlowExpansion } from "../../core/chapterNineteenFlowExpansion.js";\nimport { mergeChapterNineteenGodzillaMinusOneExpansion } from "../../core/chapterNineteenGodzillaMinusOneExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenFlowScenarios = mergeChapterNineteenFlowExpansion(chapterNineteenAnatomyOfAFallScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenFlowScenarios);',
  'const chapterNineteenFlowScenarios = mergeChapterNineteenFlowExpansion(chapterNineteenAnatomyOfAFallScenarios);\nconst chapterNineteenGodzillaMinusOneScenarios = mergeChapterNineteenGodzillaMinusOneExpansion(chapterNineteenFlowScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenGodzillaMinusOneScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_flow_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_flow_expansion_2026+manual_chapter_nineteen_godzilla_minus_one_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { flowFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFlow";\n',
  'import { flowFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFlow";\nimport { godzillaMinusOneFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenGodzillaMinusOne";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [flowFilmHistoryProfile.scenarioId]: flowFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [flowFilmHistoryProfile.scenarioId]: flowFilmHistoryProfile,\n  [godzillaMinusOneFilmHistoryProfile.scenarioId]: godzillaMinusOneFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { flowProductionCaseVerification } from "./scenarioProductionVerificationFlow";\n',
  'import { flowProductionCaseVerification } from "./scenarioProductionVerificationFlow";\nimport { godzillaMinusOneProductionCaseVerification } from "./scenarioProductionVerificationGodzillaMinusOne";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  flowProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  flowProductionCaseVerification,\n  godzillaMinusOneProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 565;", "const EXPECTED_PLAYABLE_SCENARIOS = 566;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 565;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 566;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenFlowExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenFlowExpansion.ts",\n  "chapterNineteenGodzillaMinusOneExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 565;", "const EXPECTED_ATLAS_COUNT = 566;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 565, `Global Production Verification registry must contain exactly 565 unique scenarioIds after the twenty-sixth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 566, `Global Production Verification registry must contain exactly 566 unique scenarioIds after the twenty-seventh Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 565, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 565.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 566, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 566.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 33 && chapter19.byDecision?.P0?.length === 9 && chapter19.byDecision?.P1?.length === 14 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 33 USE_EXISTING / 9 P0 / 14 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 34 && chapter19.byDecision?.P0?.length === 8 && chapter19.byDecision?.P1?.length === 14 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 34 USE_EXISTING / 8 P0 / 14 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(flow?.decision === "USE_EXISTING" && flow?.scenarioId === "scenario_flow_2024" && flow?.matches === 1 && flow?.productionVerified === true, "Flow is not closed as the twenty-sixth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Godzilla Minus One" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from Flow to Godzilla Minus One after the twenty-sixth case.");',
  'invariant(flow?.decision === "USE_EXISTING" && flow?.scenarioId === "scenario_flow_2024" && flow?.matches === 1 && flow?.productionVerified === true, "Flow is not closed as the twenty-sixth production-verified Chapter 19 USE_EXISTING case.");\nconst godzillaMinusOne = chapter19.candidates.find((candidate) => candidate.title === "Godzilla Minus One");\ninvariant(godzillaMinusOne?.decision === "USE_EXISTING" && godzillaMinusOne?.scenarioId === "scenario_godzilla_minus_one_2023" && godzillaMinusOne?.matches === 1 && godzillaMinusOne?.productionVerified === true, "Godzilla Minus One is not closed as the twenty-seventh production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Poor Things" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from Godzilla Minus One to Poor Things after the twenty-seventh case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Killers of the Flower Moon",\n  "Four Daughters",',
  '  "Killers of the Flower Moon",\n  "Godzilla Minus One",\n  "Four Daughters",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Poor Things",\n  "The Zone of Interest",\n  "Godzilla Minus One",\n  "The Boy and the Heron",',
  '  "Poor Things",\n  "The Zone of Interest",\n  "The Boy and the Heron",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 565;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 566;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 565);", "assert.equal(resolved.atlas.expectedCount, 566);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 565);", "assert.equal(resolved.atlas.actualCount, 566);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 565);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 566);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 33);", "assert.equal(exactUseExisting.length, 34);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 9);", "assert.equal(exactP0Queue.length, 8);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 23);", "assert.equal(resolved.recommendedNewProductionCases.length, 22);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Godzilla Minus One");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Poor Things");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Godzilla Minus One",\n    "Poor Things",\n    "Sentimental Value",\n    "The Substance",\n    "The Boy and the Heron",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Poor Things",\n    "Sentimental Value",\n    "The Substance",\n    "The Boy and the Heron",\n    "Spider-Man: Across the Spider-Verse",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Flow"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Flow"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Godzilla Minus One"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const flow = resolved.candidates.find((candidate) => candidate.title === "Flow");\n  assert.ok(flow);\n  assert.equal(flow.decision, "USE_EXISTING");\n  assert.equal(flow.scenarioId, "scenario_flow_2024");\n  assert.equal(flow.matches, 1);\n  assert.equal(flow.productionVerified, true);',
  '  const flow = resolved.candidates.find((candidate) => candidate.title === "Flow");\n  assert.ok(flow);\n  assert.equal(flow.decision, "USE_EXISTING");\n  assert.equal(flow.scenarioId, "scenario_flow_2024");\n  assert.equal(flow.matches, 1);\n  assert.equal(flow.productionVerified, true);\n\n  const godzillaMinusOne = resolved.candidates.find((candidate) => candidate.title === "Godzilla Minus One");\n  assert.ok(godzillaMinusOne);\n  assert.equal(godzillaMinusOne.decision, "USE_EXISTING");\n  assert.equal(godzillaMinusOne.scenarioId, "scenario_godzilla_minus_one_2023");\n  assert.equal(godzillaMinusOne.matches, 1);\n  assert.equal(godzillaMinusOne.productionVerified, true);',
);

console.log("Godzilla Minus One canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
