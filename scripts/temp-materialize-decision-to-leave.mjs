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
  'import { mergeChapterNineteenFourDaughtersExpansion } from "../../core/chapterNineteenFourDaughtersExpansion.js";\n',
  'import { mergeChapterNineteenFourDaughtersExpansion } from "../../core/chapterNineteenFourDaughtersExpansion.js";\nimport { mergeChapterNineteenDecisionToLeaveExpansion } from "../../core/chapterNineteenDecisionToLeaveExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenFourDaughtersScenarios = mergeChapterNineteenFourDaughtersExpansion(chapterNineteenEverythingEverywhereAllAtOnceScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenFourDaughtersScenarios);',
  'const chapterNineteenFourDaughtersScenarios = mergeChapterNineteenFourDaughtersExpansion(chapterNineteenEverythingEverywhereAllAtOnceScenarios);\nconst chapterNineteenDecisionToLeaveScenarios = mergeChapterNineteenDecisionToLeaveExpansion(chapterNineteenFourDaughtersScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenDecisionToLeaveScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_four_daughters_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_four_daughters_expansion_2026+manual_chapter_nineteen_decision_to_leave_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { fourDaughtersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFourDaughters";\n',
  'import { fourDaughtersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFourDaughters";\nimport { decisionToLeaveFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDecisionToLeave";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [fourDaughtersFilmHistoryProfile.scenarioId]: fourDaughtersFilmHistoryProfile,\n',
  '  [fourDaughtersFilmHistoryProfile.scenarioId]: fourDaughtersFilmHistoryProfile,\n  [decisionToLeaveFilmHistoryProfile.scenarioId]: decisionToLeaveFilmHistoryProfile,\n',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { fourDaughtersProductionCaseVerification } from "./scenarioProductionVerificationFourDaughters";\n',
  'import { fourDaughtersProductionCaseVerification } from "./scenarioProductionVerificationFourDaughters";\nimport { decisionToLeaveProductionCaseVerification } from "./scenarioProductionVerificationDecisionToLeave";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  fourDaughtersProductionCaseVerification,\n',
  '  fourDaughtersProductionCaseVerification,\n  decisionToLeaveProductionCaseVerification,\n',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 553;", "const EXPECTED_PLAYABLE_SCENARIOS = 554;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 553;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 554;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenFourDaughtersExpansion.ts",\n',
  '  "chapterNineteenFourDaughtersExpansion.ts",\n  "chapterNineteenDecisionToLeaveExpansion.ts",\n',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 553;", "const EXPECTED_ATLAS_COUNT = 554;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 553, `Global Production Verification registry must contain exactly 553 unique scenarioIds after the fourteenth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 554, `Global Production Verification registry must contain exactly 554 unique scenarioIds after the fifteenth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 553, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 553.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 554, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 554.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 21 && chapter19.byDecision?.P0?.length === 13 && chapter19.byDecision?.P1?.length === 22 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 21 USE_EXISTING / 13 P0 / 22 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 22 && chapter19.byDecision?.P0?.length === 13 && chapter19.byDecision?.P1?.length === 21 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 22 USE_EXISTING / 13 P0 / 21 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Decision to Leave" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from Four Daughters to Decision to Leave after the fourteenth case.");',
  'const decisionToLeave = chapter19.candidates.find((candidate) => candidate.title === "Decision to Leave");\ninvariant(decisionToLeave?.decision === "USE_EXISTING" && decisionToLeave?.scenarioId === "scenario_decision_to_leave_2022" && decisionToLeave?.matches === 1 && decisionToLeave?.productionVerified === true, "Decision to Leave is not closed as the fifteenth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Nope" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from Decision to Leave to Nope after the fifteenth case.");',
);

replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Everything Everywhere All at Once",\n  "RRR",\n  "Four Daughters",\n  "Nickel Boys",',
  '  "Everything Everywhere All at Once",\n  "RRR",\n  "Decision to Leave",\n  "Four Daughters",\n  "Nickel Boys",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP1Queue = [",
  '  "The Mitchells vs. the Machines",\n  "Decision to Leave",\n  "All Quiet on the Western Front",',
  '  "The Mitchells vs. the Machines",\n  "All Quiet on the Western Front",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 553;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 554;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 553);", "assert.equal(resolved.atlas.expectedCount, 554);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 553);", "assert.equal(resolved.atlas.actualCount, 554);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 553);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 554);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 21);", "assert.equal(exactUseExisting.length, 22);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 22);", "assert.equal(exactP1Queue.length, 21);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 35);", "assert.equal(resolved.recommendedNewProductionCases.length, 34);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Decision to Leave");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Nope");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Decision to Leave",\n    "Nope",\n    "Saint Omer",\n    "CODA",\n    "All We Imagine as Light",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Nope",\n    "Saint Omer",\n    "CODA",\n    "All We Imagine as Light",\n    "Oppenheimer",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global"]',
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "regional_global", "industrial_scale_technical"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Four Daughters"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Nope") > resolved.recommendedNewProductionCases.indexOf("Decision to Leave"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Four Daughters"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Decision to Leave"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Saint Omer") > resolved.recommendedNewProductionCases.indexOf("Nope"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const fourDaughters = resolved.candidates.find((candidate) => candidate.title === "Four Daughters");\n  assert.ok(fourDaughters);\n  assert.equal(fourDaughters.decision, "USE_EXISTING");\n  assert.equal(fourDaughters.scenarioId, "scenario_four_daughters_2023");\n  assert.equal(fourDaughters.matches, 1);\n  assert.equal(fourDaughters.productionVerified, true);',
  '  const fourDaughters = resolved.candidates.find((candidate) => candidate.title === "Four Daughters");\n  assert.ok(fourDaughters);\n  assert.equal(fourDaughters.decision, "USE_EXISTING");\n  assert.equal(fourDaughters.scenarioId, "scenario_four_daughters_2023");\n  assert.equal(fourDaughters.matches, 1);\n  assert.equal(fourDaughters.productionVerified, true);\n\n  const decisionToLeave = resolved.candidates.find((candidate) => candidate.title === "Decision to Leave");\n  assert.ok(decisionToLeave);\n  assert.equal(decisionToLeave.decision, "USE_EXISTING");\n  assert.equal(decisionToLeave.scenarioId, "scenario_decision_to_leave_2022");\n  assert.equal(decisionToLeave.matches, 1);\n  assert.equal(decisionToLeave.productionVerified, true);',
);

console.log("Decision to Leave canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
