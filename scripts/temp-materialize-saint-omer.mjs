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

// Runtime scenario integration.
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenNopeExpansion } from "../../core/chapterNineteenNopeExpansion.js";\n',
  'import { mergeChapterNineteenNopeExpansion } from "../../core/chapterNineteenNopeExpansion.js";\nimport { mergeChapterNineteenSaintOmerExpansion } from "../../core/chapterNineteenSaintOmerExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenNopeScenarios = mergeChapterNineteenNopeExpansion(chapterNineteenDecisionToLeaveScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenNopeScenarios);',
  'const chapterNineteenNopeScenarios = mergeChapterNineteenNopeExpansion(chapterNineteenDecisionToLeaveScenarios);\nconst chapterNineteenSaintOmerScenarios = mergeChapterNineteenSaintOmerExpansion(chapterNineteenNopeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSaintOmerScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_nope_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_nope_expansion_2026+manual_chapter_nineteen_saint_omer_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

// Film Study registry.
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { nopeFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenNope";\n',
  'import { nopeFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenNope";\nimport { saintOmerFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSaintOmer";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [nopeFilmHistoryProfile.scenarioId]: nopeFilmHistoryProfile,\n',
  '  [nopeFilmHistoryProfile.scenarioId]: nopeFilmHistoryProfile,\n  [saintOmerFilmHistoryProfile.scenarioId]: saintOmerFilmHistoryProfile,\n',
);

// Production Verification registry.
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { nopeProductionCaseVerification } from "./scenarioProductionVerificationNope";\n',
  'import { nopeProductionCaseVerification } from "./scenarioProductionVerificationNope";\nimport { saintOmerProductionCaseVerification } from "./scenarioProductionVerificationSaintOmer";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  nopeProductionCaseVerification,\n',
  '  nopeProductionCaseVerification,\n  saintOmerProductionCaseVerification,\n',
);

// Global production-case census and expansion order.
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 555;", "const EXPECTED_PLAYABLE_SCENARIOS = 556;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 555;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 556;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenNopeExpansion.ts",\n',
  '  "chapterNineteenNopeExpansion.ts",\n  "chapterNineteenSaintOmerExpansion.ts",\n',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 555;", "const EXPECTED_ATLAS_COUNT = 556;");

// Closed Chapter 18 handoff observes Chapter 19 without changing the frozen 539 baseline.
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 555, `Global Production Verification registry must contain exactly 555 unique scenarioIds after the sixteenth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 556, `Global Production Verification registry must contain exactly 556 unique scenarioIds after the seventeenth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 555, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 555.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 556, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 556.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 23 && chapter19.byDecision?.P0?.length === 12 && chapter19.byDecision?.P1?.length === 21 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 23 USE_EXISTING / 12 P0 / 21 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 24 && chapter19.byDecision?.P0?.length === 12 && chapter19.byDecision?.P1?.length === 20 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 24 USE_EXISTING / 12 P0 / 20 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Saint Omer" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Nope to Saint Omer after the sixteenth case.");',
  'const saintOmer = chapter19.candidates.find((candidate) => candidate.title === "Saint Omer");\ninvariant(saintOmer?.decision === "USE_EXISTING" && saintOmer?.scenarioId === "scenario_saint_omer_2022" && saintOmer?.matches === 1 && saintOmer?.productionVerified === true, "Saint Omer is not closed as the seventeenth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "CODA" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Saint Omer to CODA after the seventeenth case.");',
);

// Strict Chapter 19 resolved-state contract.
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "RRR",\n  "Decision to Leave",\n  "Four Daughters",',
  '  "RRR",\n  "Decision to Leave",\n  "Saint Omer",\n  "Four Daughters",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "All Quiet on the Western Front",\n  "Saint Omer",\n  "Guillermo del Toro\'s Pinocchio",',
  '  "All Quiet on the Western Front",\n  "Guillermo del Toro\'s Pinocchio",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 555;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 556;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 555);", "assert.equal(resolved.atlas.expectedCount, 556);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 555);", "assert.equal(resolved.atlas.actualCount, 556);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 555);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 556);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 23);", "assert.equal(exactUseExisting.length, 24);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 21);", "assert.equal(exactP1Queue.length, 20);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 33);", "assert.equal(resolved.recommendedNewProductionCases.length, 32);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Saint Omer");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "CODA");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Saint Omer",\n    "CODA",\n    "All We Imagine as Light",\n    "Oppenheimer",\n    "Memoria",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "CODA",\n    "All We Imagine as Light",\n    "Oppenheimer",\n    "Memoria",\n    "Anora",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival"]',
  '["independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Nope"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("CODA") > resolved.recommendedNewProductionCases.indexOf("Saint Omer"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Nope"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Saint Omer"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("All We Imagine as Light") > resolved.recommendedNewProductionCases.indexOf("CODA"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const nope = resolved.candidates.find((candidate) => candidate.title === "Nope");\n  assert.ok(nope);\n  assert.equal(nope.decision, "USE_EXISTING");\n  assert.equal(nope.scenarioId, "scenario_nope_2022");\n  assert.equal(nope.matches, 1);\n  assert.equal(nope.productionVerified, true);',
  '  const nope = resolved.candidates.find((candidate) => candidate.title === "Nope");\n  assert.ok(nope);\n  assert.equal(nope.decision, "USE_EXISTING");\n  assert.equal(nope.scenarioId, "scenario_nope_2022");\n  assert.equal(nope.matches, 1);\n  assert.equal(nope.productionVerified, true);\n\n  const saintOmer = resolved.candidates.find((candidate) => candidate.title === "Saint Omer");\n  assert.ok(saintOmer);\n  assert.equal(saintOmer.decision, "USE_EXISTING");\n  assert.equal(saintOmer.scenarioId, "scenario_saint_omer_2022");\n  assert.equal(saintOmer.matches, 1);\n  assert.equal(saintOmer.productionVerified, true);',
);

console.log("Saint Omer canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
