import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: expected replacement anchor not found: ${before.slice(0, 120)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: replacement anchor is not unique: ${before.slice(0, 120)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

// Runtime scenario integration.
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenDriveMyCarExpansion } from "../../core/chapterNineteenDriveMyCarExpansion.js";\n',
  'import { mergeChapterNineteenDriveMyCarExpansion } from "../../core/chapterNineteenDriveMyCarExpansion.js";\nimport { mergeChapterNineteenCollectiveExpansion } from "../../core/chapterNineteenCollectiveExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenDriveMyCarScenarios = mergeChapterNineteenDriveMyCarExpansion(chapterNineteenNomadlandScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenDriveMyCarScenarios);',
  'const chapterNineteenDriveMyCarScenarios = mergeChapterNineteenDriveMyCarExpansion(chapterNineteenNomadlandScenarios);\nconst chapterNineteenCollectiveScenarios = mergeChapterNineteenCollectiveExpansion(chapterNineteenDriveMyCarScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenCollectiveScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_drive_my_car_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_drive_my_car_expansion_2026+manual_chapter_nineteen_collective_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

// Film Study registry.
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { driveMyCarFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDriveMyCar";\n',
  'import { driveMyCarFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenDriveMyCar";\nimport { collectiveFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenCollective";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [driveMyCarFilmHistoryProfile.scenarioId]: driveMyCarFilmHistoryProfile,\n',
  '  [driveMyCarFilmHistoryProfile.scenarioId]: driveMyCarFilmHistoryProfile,\n  [collectiveFilmHistoryProfile.scenarioId]: collectiveFilmHistoryProfile,\n',
);

// Production Verification registry.
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { driveMyCarProductionCaseVerification } from "./scenarioProductionVerificationDriveMyCar";\n',
  'import { driveMyCarProductionCaseVerification } from "./scenarioProductionVerificationDriveMyCar";\nimport { collectiveProductionCaseVerification } from "./scenarioProductionVerificationCollective";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  driveMyCarProductionCaseVerification,\n',
  '  driveMyCarProductionCaseVerification,\n  collectiveProductionCaseVerification,\n',
);

// Production-case global census and expansion order.
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 547;", "const EXPECTED_PLAYABLE_SCENARIOS = 548;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 547;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 548;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenDriveMyCarExpansion.ts",\n',
  '  "chapterNineteenDriveMyCarExpansion.ts",\n  "chapterNineteenCollectiveExpansion.ts",\n',
);

// Chapter 19 Atlas count; the audit derives candidate decisions and balanced scheduler from runtime state.
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 547;", "const EXPECTED_ATLAS_COUNT = 548;");

// Closed Chapter 18 handoff observes the live Chapter 19 state without changing the frozen 539 baseline.
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 547, `Global Production Verification registry must contain exactly 547 unique scenarioIds after the eighth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 548, `Global Production Verification registry must contain exactly 548 unique scenarioIds after the ninth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 547, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 547.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 548, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 548.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 15 && chapter19.byDecision?.P0?.length === 16 && chapter19.byDecision?.P1?.length === 25 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 15 USE_EXISTING / 16 P0 / 25 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 16 && chapter19.byDecision?.P0?.length === 16 && chapter19.byDecision?.P1?.length === 24 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 16 USE_EXISTING / 16 P0 / 24 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Collective" && chapter19.productionStrategy?.nextRecommendedLane === "nonfiction_hybrid", "Chapter 19 balanced scheduler must advance from Drive My Car to Collective after the eighth case.");',
  'const collective = chapter19.candidates.find((candidate) => candidate.title === "Collective");\ninvariant(collective?.decision === "USE_EXISTING" && collective?.scenarioId === "scenario_collective_2020" && collective?.matches === 1 && collective?.productionVerified === true, "Collective is not closed as the ninth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "RRR" && chapter19.productionStrategy?.nextRecommendedLane === "regional_global", "Chapter 19 balanced scheduler must advance from Collective to RRR after the ninth case.");',
);

// Strict Chapter 19 resolved-state contract.
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Soul",\n  "Quo Vadis, Aida?",',
  '  "Soul",\n  "Collective",\n  "Quo Vadis, Aida?",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Collective",\n',
  'const exactP1Queue = [\n',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 547/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 548/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 547);", "assert.equal(resolved.atlas.expectedCount, 548);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 547);", "assert.equal(resolved.atlas.actualCount, 548);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 547);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 548);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 15);", "assert.equal(exactUseExisting.length, 16);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 25);", "assert.equal(exactP1Queue.length, 24);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 41);", "assert.equal(resolved.recommendedNewProductionCases.length, 40);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Collective");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "RRR");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "nonfiction_hybrid");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "regional_global");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Collective",\n    "RRR",\n    "Top Gun: Maverick",\n    "Titane",\n    "Everything Everywhere All at Once",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "RRR",\n    "Top Gun: Maverick",\n    "Titane",\n    "Everything Everywhere All at Once",\n    "Four Daughters",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["nonfiction_hybrid", "regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget"]',
  '["regional_global", "industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "nonfiction_hybrid"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Drive My Car"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Top Gun: Maverick") > resolved.recommendedNewProductionCases.indexOf("Collective"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Drive My Car"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Collective"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Top Gun: Maverick") > resolved.recommendedNewProductionCases.indexOf("RRR"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const soul = resolved.candidates.find((candidate) => candidate.title === "Soul");\n  assert.ok(soul);\n  assert.equal(soul.decision, "USE_EXISTING");\n  assert.equal(soul.scenarioId, "scenario_soul_2020");\n  assert.equal(soul.matches, 1);\n  assert.equal(soul.productionVerified, true);',
  '  const soul = resolved.candidates.find((candidate) => candidate.title === "Soul");\n  assert.ok(soul);\n  assert.equal(soul.decision, "USE_EXISTING");\n  assert.equal(soul.scenarioId, "scenario_soul_2020");\n  assert.equal(soul.matches, 1);\n  assert.equal(soul.productionVerified, true);\n\n  const collective = resolved.candidates.find((candidate) => candidate.title === "Collective");\n  assert.ok(collective);\n  assert.equal(collective.decision, "USE_EXISTING");\n  assert.equal(collective.scenarioId, "scenario_collective_2020");\n  assert.equal(collective.matches, 1);\n  assert.equal(collective.productionVerified, true);',
);

console.log("Collective canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
