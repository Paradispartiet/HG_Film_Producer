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
  'import { mergeChapterNineteenDecisionToLeaveExpansion } from "../../core/chapterNineteenDecisionToLeaveExpansion.js";\n',
  'import { mergeChapterNineteenDecisionToLeaveExpansion } from "../../core/chapterNineteenDecisionToLeaveExpansion.js";\nimport { mergeChapterNineteenNopeExpansion } from "../../core/chapterNineteenNopeExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenDecisionToLeaveScenarios = mergeChapterNineteenDecisionToLeaveExpansion(chapterNineteenFourDaughtersScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenDecisionToLeaveScenarios);',
  'const chapterNineteenDecisionToLeaveScenarios = mergeChapterNineteenDecisionToLeaveExpansion(chapterNineteenFourDaughtersScenarios);\nconst chapterNineteenNopeScenarios = mergeChapterNineteenNopeExpansion(chapterNineteenDecisionToLeaveScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenNopeScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_decision_to_leave_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_decision_to_leave_expansion_2026+manual_chapter_nineteen_nope_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

// Film Study registry.
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { decisionToLeaveFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDecisionToLeave";\n',
  'import { decisionToLeaveFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDecisionToLeave";\nimport { nopeFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenNope";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [decisionToLeaveFilmHistoryProfile.scenarioId]: decisionToLeaveFilmHistoryProfile,\n',
  '  [decisionToLeaveFilmHistoryProfile.scenarioId]: decisionToLeaveFilmHistoryProfile,\n  [nopeFilmHistoryProfile.scenarioId]: nopeFilmHistoryProfile,\n',
);

// Production Verification registry.
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { decisionToLeaveProductionCaseVerification } from "./scenarioProductionVerificationDecisionToLeave";\n',
  'import { decisionToLeaveProductionCaseVerification } from "./scenarioProductionVerificationDecisionToLeave";\nimport { nopeProductionCaseVerification } from "./scenarioProductionVerificationNope";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  decisionToLeaveProductionCaseVerification,\n',
  '  decisionToLeaveProductionCaseVerification,\n  nopeProductionCaseVerification,\n',
);

// Global production-case census and expansion order.
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 554;", "const EXPECTED_PLAYABLE_SCENARIOS = 555;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 554;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 555;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenDecisionToLeaveExpansion.ts",\n',
  '  "chapterNineteenDecisionToLeaveExpansion.ts",\n  "chapterNineteenNopeExpansion.ts",\n',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 554;", "const EXPECTED_ATLAS_COUNT = 555;");

// Closed Chapter 18 handoff observes Chapter 19 without changing the frozen 539 baseline.
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 554, `Global Production Verification registry must contain exactly 554 unique scenarioIds after the fifteenth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 555, `Global Production Verification registry must contain exactly 555 unique scenarioIds after the sixteenth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 554, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 554.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 555, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 555.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 22 && chapter19.byDecision?.P0?.length === 13 && chapter19.byDecision?.P1?.length === 21 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 22 USE_EXISTING / 13 P0 / 21 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 23 && chapter19.byDecision?.P0?.length === 12 && chapter19.byDecision?.P1?.length === 21 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 23 USE_EXISTING / 12 P0 / 21 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Nope" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from Decision to Leave to Nope after the fifteenth case.");',
  'const nope = chapter19.candidates.find((candidate) => candidate.title === "Nope");\ninvariant(nope?.decision === "USE_EXISTING" && nope?.scenarioId === "scenario_nope_2022" && nope?.matches === 1 && nope?.productionVerified === true, "Nope is not closed as the sixteenth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Saint Omer" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Nope to Saint Omer after the sixteenth case.");',
);

// Strict Chapter 19 resolved-state contract.
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Everything Everywhere All at Once",\n  "RRR",\n  "Decision to Leave",',
  '  "Everything Everywhere All at Once",\n  "Nope",\n  "RRR",\n  "Decision to Leave",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Nope",\n  "Oppenheimer",',
  '  "Oppenheimer",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 554;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 555;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 554);", "assert.equal(resolved.atlas.expectedCount, 555);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 554);", "assert.equal(resolved.atlas.actualCount, 555);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 554);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 555);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 22);", "assert.equal(exactUseExisting.length, 23);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 13);", "assert.equal(exactP0Queue.length, 12);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 34);", "assert.equal(resolved.recommendedNewProductionCases.length, 33);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Nope");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Saint Omer");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Nope",\n    "Saint Omer",\n    "CODA",\n    "All We Imagine as Light",\n    "Oppenheimer",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Saint Omer",\n    "CODA",\n    "All We Imagine as Light",\n    "Oppenheimer",\n    "Memoria",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"]',
  '["auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical", "auteur_festival"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Decision to Leave"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Saint Omer") > resolved.recommendedNewProductionCases.indexOf("Nope"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Decision to Leave"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Nope"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("CODA") > resolved.recommendedNewProductionCases.indexOf("Saint Omer"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const decisionToLeave = resolved.candidates.find((candidate) => candidate.title === "Decision to Leave");\n  assert.ok(decisionToLeave);\n  assert.equal(decisionToLeave.decision, "USE_EXISTING");\n  assert.equal(decisionToLeave.scenarioId, "scenario_decision_to_leave_2022");\n  assert.equal(decisionToLeave.matches, 1);\n  assert.equal(decisionToLeave.productionVerified, true);',
  '  const decisionToLeave = resolved.candidates.find((candidate) => candidate.title === "Decision to Leave");\n  assert.ok(decisionToLeave);\n  assert.equal(decisionToLeave.decision, "USE_EXISTING");\n  assert.equal(decisionToLeave.scenarioId, "scenario_decision_to_leave_2022");\n  assert.equal(decisionToLeave.matches, 1);\n  assert.equal(decisionToLeave.productionVerified, true);\n\n  const nope = resolved.candidates.find((candidate) => candidate.title === "Nope");\n  assert.ok(nope);\n  assert.equal(nope.decision, "USE_EXISTING");\n  assert.equal(nope.scenarioId, "scenario_nope_2022");\n  assert.equal(nope.matches, 1);\n  assert.equal(nope.productionVerified, true);',
);

console.log("Nope canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
