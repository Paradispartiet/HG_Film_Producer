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
  'import { mergeChapterNineteenSaintOmerExpansion } from "../../core/chapterNineteenSaintOmerExpansion.js";\n',
  'import { mergeChapterNineteenSaintOmerExpansion } from "../../core/chapterNineteenSaintOmerExpansion.js";\nimport { mergeChapterNineteenCodaExpansion } from "../../core/chapterNineteenCodaExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenSaintOmerScenarios = mergeChapterNineteenSaintOmerExpansion(chapterNineteenNopeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSaintOmerScenarios);',
  'const chapterNineteenSaintOmerScenarios = mergeChapterNineteenSaintOmerExpansion(chapterNineteenNopeScenarios);\nconst chapterNineteenCodaScenarios = mergeChapterNineteenCodaExpansion(chapterNineteenSaintOmerScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenCodaScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_saint_omer_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_saint_omer_expansion_2026+manual_chapter_nineteen_coda_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { saintOmerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSaintOmer";\n',
  'import { saintOmerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSaintOmer";\nimport { codaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenCoda";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [saintOmerFilmHistoryProfile.scenarioId]: saintOmerFilmHistoryProfile,\n',
  '  [saintOmerFilmHistoryProfile.scenarioId]: saintOmerFilmHistoryProfile,\n  [codaFilmHistoryProfile.scenarioId]: codaFilmHistoryProfile,\n',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { saintOmerProductionCaseVerification } from "./scenarioProductionVerificationSaintOmer";\n',
  'import { saintOmerProductionCaseVerification } from "./scenarioProductionVerificationSaintOmer";\nimport { codaProductionCaseVerification } from "./scenarioProductionVerificationCoda";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  saintOmerProductionCaseVerification,\n',
  '  saintOmerProductionCaseVerification,\n  codaProductionCaseVerification,\n',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 556;", "const EXPECTED_PLAYABLE_SCENARIOS = 557;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 556;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 557;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenSaintOmerExpansion.ts",\n',
  '  "chapterNineteenSaintOmerExpansion.ts",\n  "chapterNineteenCodaExpansion.ts",\n',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 556;", "const EXPECTED_ATLAS_COUNT = 557;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 556, `Global Production Verification registry must contain exactly 556 unique scenarioIds after the seventeenth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 557, `Global Production Verification registry must contain exactly 557 unique scenarioIds after the eighteenth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 556, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 556.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 557, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 557.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 24 && chapter19.byDecision?.P0?.length === 12 && chapter19.byDecision?.P1?.length === 20 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 24 USE_EXISTING / 12 P0 / 20 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 25 && chapter19.byDecision?.P0?.length === 12 && chapter19.byDecision?.P1?.length === 19 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 25 USE_EXISTING / 12 P0 / 19 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "CODA" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Saint Omer to CODA after the seventeenth case.");',
  'const coda = chapter19.candidates.find((candidate) => candidate.title === "CODA");\ninvariant(coda?.decision === "USE_EXISTING" && coda?.scenarioId === "scenario_coda_2021" && coda?.matches === 1 && coda?.productionVerified === true, "CODA is not closed as the eighteenth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "All We Imagine as Light" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from CODA to All We Imagine as Light after the eighteenth case.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "The Worst Person in the World",\n  "Avatar: The Way of Water",',
  '  "The Worst Person in the World",\n  "CODA",\n  "Avatar: The Way of Water",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Power of the Dog",\n  "Memoria",\n  "CODA",\n  "The Mitchells vs. the Machines",',
  '  "The Power of the Dog",\n  "Memoria",\n  "The Mitchells vs. the Machines",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 556;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 557;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 556);", "assert.equal(resolved.atlas.expectedCount, 557);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 556);", "assert.equal(resolved.atlas.actualCount, 557);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 556);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 557);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 24);", "assert.equal(exactUseExisting.length, 25);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 20);", "assert.equal(exactP1Queue.length, 19);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 32);", "assert.equal(resolved.recommendedNewProductionCases.length, 31);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "CODA");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "All We Imagine as Light");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "CODA",\n    "All We Imagine as Light",\n    "Oppenheimer",\n    "Memoria",\n    "Anora",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "All We Imagine as Light",\n    "Oppenheimer",\n    "Memoria",\n    "Anora",\n    "The Seed of the Sacred Fig",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Saint Omer"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("All We Imagine as Light") > resolved.recommendedNewProductionCases.indexOf("CODA"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Saint Omer"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("CODA"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Oppenheimer") > resolved.recommendedNewProductionCases.indexOf("All We Imagine as Light"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const saintOmer = resolved.candidates.find((candidate) => candidate.title === "Saint Omer");\n  assert.ok(saintOmer);\n  assert.equal(saintOmer.decision, "USE_EXISTING");\n  assert.equal(saintOmer.scenarioId, "scenario_saint_omer_2022");\n  assert.equal(saintOmer.matches, 1);\n  assert.equal(saintOmer.productionVerified, true);',
  '  const saintOmer = resolved.candidates.find((candidate) => candidate.title === "Saint Omer");\n  assert.ok(saintOmer);\n  assert.equal(saintOmer.decision, "USE_EXISTING");\n  assert.equal(saintOmer.scenarioId, "scenario_saint_omer_2022");\n  assert.equal(saintOmer.matches, 1);\n  assert.equal(saintOmer.productionVerified, true);\n\n  const coda = resolved.candidates.find((candidate) => candidate.title === "CODA");\n  assert.ok(coda);\n  assert.equal(coda.decision, "USE_EXISTING");\n  assert.equal(coda.scenarioId, "scenario_coda_2021");\n  assert.equal(coda.matches, 1);\n  assert.equal(coda.productionVerified, true);',
);

console.log("CODA canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
