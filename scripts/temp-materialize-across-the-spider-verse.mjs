import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const index = source.indexOf(before);
  if (index < 0) throw new Error(`${path}: anchor not found: ${before.slice(0, 180)}`);
  if (source.indexOf(before, index + before.length) >= 0) throw new Error(`${path}: anchor not unique: ${before.slice(0, 180)}`);
  writeFileSync(path, source.slice(0, index) + after + source.slice(index + before.length));
}

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenBarbieExpansion } from "../../core/chapterNineteenBarbieExpansion.js";\n',
  'import { mergeChapterNineteenBarbieExpansion } from "../../core/chapterNineteenBarbieExpansion.js";\nimport { mergeChapterNineteenAcrossTheSpiderVerseExpansion } from "../../core/chapterNineteenAcrossTheSpiderVerseExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenBarbieScenarios = mergeChapterNineteenBarbieExpansion(chapterNineteenEoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenBarbieScenarios);',
  'const chapterNineteenBarbieScenarios = mergeChapterNineteenBarbieExpansion(chapterNineteenEoScenarios);\nconst chapterNineteenAcrossTheSpiderVerseScenarios = mergeChapterNineteenAcrossTheSpiderVerseExpansion(chapterNineteenBarbieScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAcrossTheSpiderVerseScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_barbie_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_barbie_expansion_2026+manual_chapter_nineteen_across_the_spider_verse_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { barbieFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenBarbie";\n',
  'import { barbieFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenBarbie";\nimport { acrossTheSpiderVerseFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAcrossTheSpiderVerse";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [barbieFilmHistoryProfile.scenarioId]: barbieFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [barbieFilmHistoryProfile.scenarioId]: barbieFilmHistoryProfile,\n  [acrossTheSpiderVerseFilmHistoryProfile.scenarioId]: acrossTheSpiderVerseFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { barbieProductionCaseVerification } from "./scenarioProductionVerificationBarbie";\n',
  'import { barbieProductionCaseVerification } from "./scenarioProductionVerificationBarbie";\nimport { acrossTheSpiderVerseProductionCaseVerification } from "./scenarioProductionVerificationAcrossTheSpiderVerse";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  barbieProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  barbieProductionCaseVerification,\n  acrossTheSpiderVerseProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 587;", "const EXPECTED_PLAYABLE_SCENARIOS = 588;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 587;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 588;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenBarbieExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenBarbieExpansion.ts",\n  "chapterNineteenAcrossTheSpiderVerseExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 587;", "const EXPECTED_ATLAS_COUNT = 588;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 587, `Global Production Verification registry must contain exactly 587 unique scenarioIds after the forty-eighth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 588, `Global Production Verification registry must contain exactly 588 unique scenarioIds after the forty-ninth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 587, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 587.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 588, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 588.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 55 && chapter19.byDecision?.P0?.length === 1 && chapter19.byDecision?.P1?.length === 2 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 55 USE_EXISTING / 1 P0 / 2 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 56 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 2 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 56 USE_EXISTING / 0 P0 / 2 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const barbie = chapter19.candidates.find((candidate) => candidate.title === "Barbie");\ninvariant(barbie?.decision === "USE_EXISTING" && barbie?.scenarioId === "scenario_barbie_2023" && barbie?.matches === 1 && barbie?.productionVerified === true, "Barbie is not closed as the forty-eighth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Barbie case closes outside scheduler order.");',
  'const barbie = chapter19.candidates.find((candidate) => candidate.title === "Barbie");\ninvariant(barbie?.decision === "USE_EXISTING" && barbie?.scenarioId === "scenario_barbie_2023" && barbie?.matches === 1 && barbie?.productionVerified === true, "Barbie is not closed as the forty-eighth production-verified Chapter 19 USE_EXISTING case.");\nconst acrossTheSpiderVerse = chapter19.candidates.find((candidate) => candidate.title === "Spider-Man: Across the Spider-Verse");\ninvariant(acrossTheSpiderVerse?.decision === "USE_EXISTING" && acrossTheSpiderVerse?.scenarioId === "scenario_spider_man_across_the_spider_verse_2023" && acrossTheSpiderVerse?.matches === 1 && acrossTheSpiderVerse?.productionVerified === true, "Spider-Man: Across the Spider-Verse is not closed as the forty-ninth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Furiosa: A Mad Max Saga" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance to Furiosa: A Mad Max Saga after Across the Spider-Verse closes the remaining P0 case.");',
);

replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Four Daughters",\n  "Anatomy of a Fall",\n  "Dune: Part Two",',
  '  "Four Daughters",\n  "Anatomy of a Fall",\n  "Spider-Man: Across the Spider-Verse",\n  "Dune: Part Two",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  'const exactP0Queue = [\n  "Spider-Man: Across the Spider-Verse",\n] as const;',
  'const exactP0Queue = [\n] as const;',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 587;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 588;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 587);", "assert.equal(resolved.atlas.expectedCount, 588);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 587);", "assert.equal(resolved.atlas.actualCount, 588);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 587);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 588);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 55);", "assert.equal(exactUseExisting.length, 56);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 1);", "assert.equal(exactP0Queue.length, 0);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 3);", "assert.equal(resolved.recommendedNewProductionCases.length, 2);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.equal(resolved.productionStrategy.nextRecommendedCase, "Spider-Man: Across the Spider-Verse");\n  assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");\n  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 3), [\n    "Spider-Man: Across the Spider-Verse",\n    "Furiosa: A Mad Max Saga",\n    "The Mitchells vs. the Machines",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 3).map((item) => item.lane),\n    ["industrial_scale_technical", "industrial_scale_technical", "industrial_scale_technical"],\n  );',
  '  assert.equal(resolved.productionStrategy.nextRecommendedCase, "Furiosa: A Mad Max Saga");\n  assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");\n  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 2), [\n    "Furiosa: A Mad Max Saga",\n    "The Mitchells vs. the Machines",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 2).map((item) => item.lane),\n    ["industrial_scale_technical", "industrial_scale_technical"],\n  );',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Barbie"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Barbie"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Spider-Man: Across the Spider-Verse"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const barbie = resolved.candidates.find((candidate) => candidate.title === "Barbie");\n  assert.ok(barbie);\n  assert.equal(barbie.decision, "USE_EXISTING");\n  assert.equal(barbie.scenarioId, "scenario_barbie_2023");\n  assert.equal(barbie.matches, 1);\n  assert.equal(barbie.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
  '  const barbie = resolved.candidates.find((candidate) => candidate.title === "Barbie");\n  assert.ok(barbie);\n  assert.equal(barbie.decision, "USE_EXISTING");\n  assert.equal(barbie.scenarioId, "scenario_barbie_2023");\n  assert.equal(barbie.matches, 1);\n  assert.equal(barbie.productionVerified, true);\n\n  const acrossTheSpiderVerse = resolved.candidates.find((candidate) => candidate.title === "Spider-Man: Across the Spider-Verse");\n  assert.ok(acrossTheSpiderVerse);\n  assert.equal(acrossTheSpiderVerse.decision, "USE_EXISTING");\n  assert.equal(acrossTheSpiderVerse.scenarioId, "scenario_spider_man_across_the_spider_verse_2023");\n  assert.equal(acrossTheSpiderVerse.matches, 1);\n  assert.equal(acrossTheSpiderVerse.productionVerified, true);\n\n  for (const candidate of resolved.candidates) {',
);
