import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: expected replacement anchor not found: ${before.slice(0, 180)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: replacement anchor is not unique: ${before.slice(0, 180)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

// Runtime scenario integration.
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenTopGunMaverickExpansion } from "../../core/chapterNineteenTopGunMaverickExpansion.js";\n',
  'import { mergeChapterNineteenTopGunMaverickExpansion } from "../../core/chapterNineteenTopGunMaverickExpansion.js";\nimport { mergeChapterNineteenTitaneExpansion } from "../../core/chapterNineteenTitaneExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenTopGunMaverickScenarios = mergeChapterNineteenTopGunMaverickExpansion(chapterNineteenRrrScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTopGunMaverickScenarios);',
  'const chapterNineteenTopGunMaverickScenarios = mergeChapterNineteenTopGunMaverickExpansion(chapterNineteenRrrScenarios);\nconst chapterNineteenTitaneScenarios = mergeChapterNineteenTitaneExpansion(chapterNineteenTopGunMaverickScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTitaneScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_top_gun_maverick_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_top_gun_maverick_expansion_2026+manual_chapter_nineteen_titane_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

// Film Study registry.
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { topGunMaverickFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTopGunMaverick";\n',
  'import { topGunMaverickFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTopGunMaverick";\nimport { titaneFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTitane";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [topGunMaverickFilmHistoryProfile.scenarioId]: topGunMaverickFilmHistoryProfile,\n',
  '  [topGunMaverickFilmHistoryProfile.scenarioId]: topGunMaverickFilmHistoryProfile,\n  [titaneFilmHistoryProfile.scenarioId]: titaneFilmHistoryProfile,\n',
);

// Production Verification registry.
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { topGunMaverickProductionCaseVerification } from "./scenarioProductionVerificationTopGunMaverick";\n',
  'import { topGunMaverickProductionCaseVerification } from "./scenarioProductionVerificationTopGunMaverick";\nimport { titaneProductionCaseVerification } from "./scenarioProductionVerificationTitane";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  topGunMaverickProductionCaseVerification,\n',
  '  topGunMaverickProductionCaseVerification,\n  titaneProductionCaseVerification,\n',
);

// Global production-case census and expansion order.
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 550;", "const EXPECTED_PLAYABLE_SCENARIOS = 551;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 550;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 551;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenTopGunMaverickExpansion.ts",\n',
  '  "chapterNineteenTopGunMaverickExpansion.ts",\n  "chapterNineteenTitaneExpansion.ts",\n',
);

// Chapter 19 Atlas count; candidate decisions and balanced scheduler are derived from runtime state.
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 550;", "const EXPECTED_ATLAS_COUNT = 551;");

// Closed Chapter 18 handoff observes Chapter 19 without changing the frozen 539 baseline.
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 550, `Global Production Verification registry must contain exactly 550 unique scenarioIds after the eleventh Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 551, `Global Production Verification registry must contain exactly 551 unique scenarioIds after the twelfth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 550, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 550.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 551, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 551.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 18 && chapter19.byDecision?.P0?.length === 14 && chapter19.byDecision?.P1?.length === 24 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 18 USE_EXISTING / 14 P0 / 24 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 19 && chapter19.byDecision?.P0?.length === 14 && chapter19.byDecision?.P1?.length === 23 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 19 USE_EXISTING / 14 P0 / 23 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.productionStrategy?.nextRecommendedCase === "Titane" && chapter19.productionStrategy?.nextRecommendedLane === "auteur_festival", "Chapter 19 balanced scheduler must advance from Top Gun: Maverick to Titane after the eleventh case.");',
  'const titane = chapter19.candidates.find((candidate) => candidate.title === "Titane");\ninvariant(titane?.decision === "USE_EXISTING" && titane?.scenarioId === "scenario_titane_2021" && titane?.matches === 1 && titane?.productionVerified === true, "Titane is not closed as the twelfth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Everything Everywhere All at Once" && chapter19.productionStrategy?.nextRecommendedLane === "independent_low_mid_budget", "Chapter 19 balanced scheduler must advance from Titane to Everything Everywhere All at Once after the twelfth case.");',
);

// Strict Chapter 19 resolved-state contract.
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Drive My Car",\n  "Flee",\n  "The Worst Person in the World",',
  '  "Drive My Car",\n  "Flee",\n  "Titane",\n  "The Worst Person in the World",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  'const exactP1Queue = [\n  "The Power of the Dog",\n  "Titane",\n  "Memoria",',
  'const exactP1Queue = [\n  "The Power of the Dog",\n  "Memoria",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 550;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 551;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 550);", "assert.equal(resolved.atlas.expectedCount, 551);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 550);", "assert.equal(resolved.atlas.actualCount, 551);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 550);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 551);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 18);", "assert.equal(exactUseExisting.length, 19);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 24);", "assert.equal(exactP1Queue.length, 23);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 38);", "assert.equal(resolved.recommendedNewProductionCases.length, 37);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Titane");', 'assert.equal(resolved.productionStrategy.nextRecommendedCase, "Everything Everywhere All at Once");');
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "auteur_festival");', 'assert.equal(resolved.productionStrategy.nextRecommendedLane, "independent_low_mid_budget");');
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Titane",\n    "Everything Everywhere All at Once",\n    "Four Daughters",\n    "Decision to Leave",\n    "Nope",\n  ]);',
  '  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 5), [\n    "Everything Everywhere All at Once",\n    "Four Daughters",\n    "Decision to Leave",\n    "Nope",\n    "Saint Omer",\n  ]);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '["auteur_festival", "independent_low_mid_budget", "nonfiction_hybrid", "regional_global", "industrial_scale_technical"]',
  '["independent_low_mid_budget", "nonfiction_hybrid", "regional_global", "industrial_scale_technical", "auteur_festival"]',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Top Gun: Maverick"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Everything Everywhere All at Once") > resolved.recommendedNewProductionCases.indexOf("Titane"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Top Gun: Maverick"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Titane"));\n  assert.ok(resolved.recommendedNewProductionCases.indexOf("Four Daughters") > resolved.recommendedNewProductionCases.indexOf("Everything Everywhere All at Once"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const topGunMaverick = resolved.candidates.find((candidate) => candidate.title === "Top Gun: Maverick");\n  assert.ok(topGunMaverick);\n  assert.equal(topGunMaverick.decision, "USE_EXISTING");\n  assert.equal(topGunMaverick.scenarioId, "scenario_top_gun_maverick_2022");\n  assert.equal(topGunMaverick.matches, 1);\n  assert.equal(topGunMaverick.productionVerified, true);',
  '  const topGunMaverick = resolved.candidates.find((candidate) => candidate.title === "Top Gun: Maverick");\n  assert.ok(topGunMaverick);\n  assert.equal(topGunMaverick.decision, "USE_EXISTING");\n  assert.equal(topGunMaverick.scenarioId, "scenario_top_gun_maverick_2022");\n  assert.equal(topGunMaverick.matches, 1);\n  assert.equal(topGunMaverick.productionVerified, true);\n\n  const titane = resolved.candidates.find((candidate) => candidate.title === "Titane");\n  assert.ok(titane);\n  assert.equal(titane.decision, "USE_EXISTING");\n  assert.equal(titane.scenarioId, "scenario_titane_2021");\n  assert.equal(titane.matches, 1);\n  assert.equal(titane.productionVerified, true);',
);

console.log("Titane canonical materialization patch applied. Generate the resolved Chapter 19 report before verification.");
