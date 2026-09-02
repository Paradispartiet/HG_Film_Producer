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
  'import { mergeChapterNineteenAcrossTheSpiderVerseExpansion } from "../../core/chapterNineteenAcrossTheSpiderVerseExpansion.js";\n',
  'import { mergeChapterNineteenAcrossTheSpiderVerseExpansion } from "../../core/chapterNineteenAcrossTheSpiderVerseExpansion.js";\nimport { mergeChapterNineteenFuriosaExpansion } from "../../core/chapterNineteenFuriosaExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenAcrossTheSpiderVerseScenarios = mergeChapterNineteenAcrossTheSpiderVerseExpansion(chapterNineteenBarbieScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenAcrossTheSpiderVerseScenarios);',
  'const chapterNineteenAcrossTheSpiderVerseScenarios = mergeChapterNineteenAcrossTheSpiderVerseExpansion(chapterNineteenBarbieScenarios);\nconst chapterNineteenFuriosaScenarios = mergeChapterNineteenFuriosaExpansion(chapterNineteenAcrossTheSpiderVerseScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenFuriosaScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_across_the_spider_verse_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_across_the_spider_verse_expansion_2026+manual_chapter_nineteen_furiosa_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { acrossTheSpiderVerseFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAcrossTheSpiderVerse";\n',
  'import { acrossTheSpiderVerseFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenAcrossTheSpiderVerse";\nimport { furiosaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFuriosa";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [acrossTheSpiderVerseFilmHistoryProfile.scenarioId]: acrossTheSpiderVerseFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [acrossTheSpiderVerseFilmHistoryProfile.scenarioId]: acrossTheSpiderVerseFilmHistoryProfile,\n  [furiosaFilmHistoryProfile.scenarioId]: furiosaFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { acrossTheSpiderVerseProductionCaseVerification } from "./scenarioProductionVerificationAcrossTheSpiderVerse";\n',
  'import { acrossTheSpiderVerseProductionCaseVerification } from "./scenarioProductionVerificationAcrossTheSpiderVerse";\nimport { furiosaProductionCaseVerification } from "./scenarioProductionVerificationFuriosa";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  acrossTheSpiderVerseProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  acrossTheSpiderVerseProductionCaseVerification,\n  furiosaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 588;", "const EXPECTED_PLAYABLE_SCENARIOS = 589;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 588;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 589;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenAcrossTheSpiderVerseExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenAcrossTheSpiderVerseExpansion.ts",\n  "chapterNineteenFuriosaExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 588;", "const EXPECTED_ATLAS_COUNT = 589;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 588, `Global Production Verification registry must contain exactly 588 unique scenarioIds after the forty-ninth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 589, `Global Production Verification registry must contain exactly 589 unique scenarioIds after the fiftieth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 588, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 588.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 589, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 589.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 56 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 2 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 56 USE_EXISTING / 0 P0 / 2 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 57 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 1 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 57 USE_EXISTING / 0 P0 / 1 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const acrossTheSpiderVerse = chapter19.candidates.find((candidate) => candidate.title === "Spider-Man: Across the Spider-Verse");\ninvariant(acrossTheSpiderVerse?.decision === "USE_EXISTING" && acrossTheSpiderVerse?.scenarioId === "scenario_spider_man_across_the_spider_verse_2023" && acrossTheSpiderVerse?.matches === 1 && acrossTheSpiderVerse?.productionVerified === true, "Spider-Man: Across the Spider-Verse is not closed as the forty-ninth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Furiosa: A Mad Max Saga" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance to Furiosa: A Mad Max Saga after Across the Spider-Verse closes the remaining P0 case.");',
  'const acrossTheSpiderVerse = chapter19.candidates.find((candidate) => candidate.title === "Spider-Man: Across the Spider-Verse");\ninvariant(acrossTheSpiderVerse?.decision === "USE_EXISTING" && acrossTheSpiderVerse?.scenarioId === "scenario_spider_man_across_the_spider_verse_2023" && acrossTheSpiderVerse?.matches === 1 && acrossTheSpiderVerse?.productionVerified === true, "Spider-Man: Across the Spider-Verse is not closed as the forty-ninth production-verified Chapter 19 USE_EXISTING case.");\nconst furiosa = chapter19.candidates.find((candidate) => candidate.title === "Furiosa: A Mad Max Saga");\ninvariant(furiosa?.decision === "USE_EXISTING" && furiosa?.scenarioId === "scenario_furiosa_a_mad_max_saga_2024" && furiosa?.matches === 1 && furiosa?.productionVerified === true, "Furiosa: A Mad Max Saga is not closed as the fiftieth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Mitchells vs. the Machines" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance to The Mitchells vs. the Machines after Furiosa closes.");',
);

replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "Anora",\n  "Sinners",',
  '  "Anora",\n  "Furiosa: A Mad Max Saga",\n  "Sinners",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  'const exactP1Queue = [\n  "The Mitchells vs. the Machines",\n  "Furiosa: A Mad Max Saga",\n] as const;',
  'const exactP1Queue = [\n  "The Mitchells vs. the Machines",\n] as const;',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 588;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 589;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 588);", "assert.equal(resolved.atlas.expectedCount, 589);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 588);", "assert.equal(resolved.atlas.actualCount, 589);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 588);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 589);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 56);", "assert.equal(exactUseExisting.length, 57);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 2);", "assert.equal(exactP1Queue.length, 1);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 2);", "assert.equal(resolved.recommendedNewProductionCases.length, 1);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.equal(resolved.productionStrategy.nextRecommendedCase, "Furiosa: A Mad Max Saga");\n  assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");\n  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 2), [\n    "Furiosa: A Mad Max Saga",\n    "The Mitchells vs. the Machines",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 2).map((item) => item.lane),\n    ["industrial_scale_technical", "industrial_scale_technical"],\n  );',
  '  assert.equal(resolved.productionStrategy.nextRecommendedCase, "The Mitchells vs. the Machines");\n  assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");\n  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 1), [\n    "The Mitchells vs. the Machines",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 1).map((item) => item.lane),\n    ["industrial_scale_technical"],\n  );',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Spider-Man: Across the Spider-Verse"));',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Spider-Man: Across the Spider-Verse"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Furiosa: A Mad Max Saga"));',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const acrossTheSpiderVerse = resolved.candidates.find((candidate) => candidate.title === "Spider-Man: Across the Spider-Verse");\n  assert.ok(acrossTheSpiderVerse);\n  assert.equal(acrossTheSpiderVerse.decision, "USE_EXISTING");\n  assert.equal(acrossTheSpiderVerse.scenarioId, "scenario_spider_man_across_the_spider_verse_2023");\n  assert.equal(acrossTheSpiderVerse.matches, 1);\n  assert.equal(acrossTheSpiderVerse.productionVerified, true);',
  '  const acrossTheSpiderVerse = resolved.candidates.find((candidate) => candidate.title === "Spider-Man: Across the Spider-Verse");\n  assert.ok(acrossTheSpiderVerse);\n  assert.equal(acrossTheSpiderVerse.decision, "USE_EXISTING");\n  assert.equal(acrossTheSpiderVerse.scenarioId, "scenario_spider_man_across_the_spider_verse_2023");\n  assert.equal(acrossTheSpiderVerse.matches, 1);\n  assert.equal(acrossTheSpiderVerse.productionVerified, true);\n\n  const furiosa = resolved.candidates.find((candidate) => candidate.title === "Furiosa: A Mad Max Saga");\n  assert.ok(furiosa);\n  assert.equal(furiosa.decision, "USE_EXISTING");\n  assert.equal(furiosa.scenarioId, "scenario_furiosa_a_mad_max_saga_2024");\n  assert.equal(furiosa.matches, 1);\n  assert.equal(furiosa.productionVerified, true);',
);
