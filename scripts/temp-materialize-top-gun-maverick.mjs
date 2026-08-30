import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: expected replacement anchor not found: ${before.slice(0, 160)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: replacement anchor is not unique: ${before.slice(0, 160)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

// Runtime scenario integration.
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenRrrExpansion } from "../../core/chapterNineteenRrrExpansion.js";\n',
  'import { mergeChapterNineteenRrrExpansion } from "../../core/chapterNineteenRrrExpansion.js";\nimport { mergeChapterNineteenTopGunMaverickExpansion } from "../../core/chapterNineteenTopGunMaverickExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenRrrScenarios = mergeChapterNineteenRrrExpansion(chapterNineteenCollectiveScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenRrrScenarios);',
  'const chapterNineteenRrrScenarios = mergeChapterNineteenRrrExpansion(chapterNineteenCollectiveScenarios);\nconst chapterNineteenTopGunMaverickScenarios = mergeChapterNineteenTopGunMaverickExpansion(chapterNineteenRrrScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTopGunMaverickScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_rrr_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_rrr_expansion_2026+manual_chapter_nineteen_top_gun_maverick_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

// Film Study registry.
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { rrrFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenRrr";\n',
  'import { rrrFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenRrr";\nimport { topGunMaverickFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTopGunMaverick";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [rrrFilmHistoryProfile.scenarioId]: rrrFilmHistoryProfile,\n',
  '  [rrrFilmHistoryProfile.scenarioId]: rrrFilmHistoryProfile,\n  [topGunMaverickFilmHistoryProfile.scenarioId]: topGunMaverickFilmHistoryProfile,\n',
);

// Production Verification registry.
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { rrrProductionCaseVerification } from "./scenarioProductionVerificationRrr";\n',
  'import { rrrProductionCaseVerification } from "./scenarioProductionVerificationRrr";\nimport { topGunMaverickProductionCaseVerification } from "./scenarioProductionVerificationTopGunMaverick";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  rrrProductionCaseVerification,\n',
  '  rrrProductionCaseVerification,\n  topGunMaverickProductionCaseVerification,\n',
);

// Global production-case census and expansion order.
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 549;", "const EXPECTED_PLAYABLE_SCENARIOS = 550;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 549;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 550;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenRrrExpansion.ts",\n',
  '  "chapterNineteenRrrExpansion.ts",\n  "chapterNineteenTopGunMaverickExpansion.ts",\n',
);

// Chapter 19 Atlas count; candidate decisions and balanced scheduler are derived from runtime state.
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 549;", "const EXPECTED_ATLAS_COUNT = 550;");

// Closed Chapter 18 handoff observes Chapter 19 without changing the frozen 539 baseline.
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 549, `Global Production Verification registry must contain exactly 549 unique scenarioIds after the tenth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 550, `Global Production Verification registry must contain exactly 550 unique scenarioIds after the eleventh Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 549, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 549.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 550, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 550.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 17 && chapter19.byDecision?.P0?.length === 15 && chapter19.byDecision?.P1?.length === 24 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 17 USE_EXISTING / 15 P0 / 24 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 18 && chapter19.byDecision?.P0?.length === 14 && chapter19.byDecision?.P1?.length === 24 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 18 USE_EXISTING / 14 P0 / 24 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Top Gun: Maverick" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance from RRR to Top Gun: Maverick after the tenth case.");',
  'const topGunMaverick = chapter19.candidates.find((candidate) => candidate.title === "Top Gun: Maverick");\ninvariant(topGunMaverick?.decision === "USE_EXISTING" && topGunMaverick?.scenarioId === "scenario_top_gun_maverick_2022" && topGunMaverick?.matches === 1 && topGunMaverick?.productionVerified === true, "Top Gun: Maverick is not closed as the eleventh production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Titane" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Top Gun: Maverick to Titane after the eleventh case.");',
);

// Strict Chapter 19 resolved-state contract.
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Avatar: The Way of Water",\n  "RRR",\n  "Nickel Boys",',
  '  "Avatar: The Way of Water",\n  "Top Gun: Maverick",\n  "RRR",\n  "Nickel Boys",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  'const exactP0Queue = [\n  "Top Gun: Maverick",\n  "Everything Everywhere All at Once",',
  'const exactP0Queue = [\n  "Everything Everywhere All at Once",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 549;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 550;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 549);", "assert.equal(resolved.atlas.expectedCount, 550);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 549);", "assert.equal(resolved.atlas.actualCount, 550);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 549);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 550);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 17);", "assert.equal(exactUseExisting.length, 18);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 15);", "assert.equal(exactP0Queue.length, 14);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 39);", "assert.equal(resolved.recommendedNewProductionCases.length, 38);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Top Gun: Maverick");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Titane");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Top Gun: Maverick",\n    "Titane",\n    "Everything Everywhere All at Once",\n    "Four Daughters",\n    "Decision to Leave",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Titane",\n    "Everything Everywhere All at Once",\n    "Four Daughters",\n    "Decision to Leave",\n    "Nope",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["industrial_scale_technical", "auteur_festival", "independent_low_mid_budget", "nonfiction_hybrid", "regional_global"]',
  '["auteur_festival", "independent_low_mid_budget", "nonfiction_hybrid", "regional_global", "industrial_scale_technical"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("RRR"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Titane") > resolved.recommendedNewProductionCases.indexOf("Top Gun: Maverick"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("RRR"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Top Gun: Maverick"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Everything Everywhere All at Once") > resolved.recommendedNewProductionCases.indexOf("Titane"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const rrr = resolved.candidates.find((candidate) => candidate.title === "RRR");\n  assert.ok(rrr);\n  assert.equal(rrr.decision, "USE_EXISTING");\n  assert.equal(rrr.scenarioId, "scenario_rrr_2022");\n  assert.equal(rrr.matches, 1);\n  assert.equal(rrr.productionVerified, true);',
  '  const rrr = resolved.candidates.find((candidate) => candidate.title === "RRR");\n  assert.ok(rrr);\n  assert.equal(rrr.decision, "USE_EXISTING");\n  assert.equal(rrr.scenarioId, "scenario_rrr_2022");\n  assert.equal(rrr.matches, 1);\n  assert.equal(rrr.productionVerified, true);\n\n  const topGunMaverick = resolved.candidates.find((candidate) => candidate.title === "Top Gun: Maverick");\n  assert.ok(topGunMaverick);\n  assert.equal(topGunMaverick.decision, "USE_EXISTING");\n  assert.equal(topGunMaverick.scenarioId, "scenario_top_gun_maverick_2022");\n  assert.equal(topGunMaverick.matches, 1);\n  assert.equal(topGunMaverick.productionVerified, true);',
);

console.log("Top Gun: Maverick canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
