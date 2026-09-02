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
  'import { mergeChapterNineteenFuriosaExpansion } from "../../core/chapterNineteenFuriosaExpansion.js";\n',
  'import { mergeChapterNineteenFuriosaExpansion } from "../../core/chapterNineteenFuriosaExpansion.js";\nimport { mergeChapterNineteenMitchellsVsTheMachinesExpansion } from "../../core/chapterNineteenMitchellsVsTheMachinesExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenFuriosaScenarios = mergeChapterNineteenFuriosaExpansion(chapterNineteenAcrossTheSpiderVerseScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenFuriosaScenarios);',
  'const chapterNineteenFuriosaScenarios = mergeChapterNineteenFuriosaExpansion(chapterNineteenAcrossTheSpiderVerseScenarios);\nconst chapterNineteenMitchellsVsTheMachinesScenarios = mergeChapterNineteenMitchellsVsTheMachinesExpansion(chapterNineteenFuriosaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenMitchellsVsTheMachinesScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_furiosa_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_furiosa_expansion_2026+manual_chapter_nineteen_mitchells_vs_the_machines_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { furiosaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFuriosa";\n',
  'import { furiosaFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenFuriosa";\nimport { mitchellsVsTheMachinesFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenMitchellsVsTheMachines";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [furiosaFilmHistoryProfile.scenarioId]: furiosaFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [furiosaFilmHistoryProfile.scenarioId]: furiosaFilmHistoryProfile,\n  [mitchellsVsTheMachinesFilmHistoryProfile.scenarioId]: mitchellsVsTheMachinesFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { furiosaProductionCaseVerification } from "./scenarioProductionVerificationFuriosa";\n',
  'import { furiosaProductionCaseVerification } from "./scenarioProductionVerificationFuriosa";\nimport { mitchellsVsTheMachinesProductionCaseVerification } from "./scenarioProductionVerificationMitchellsVsTheMachines";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  furiosaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  furiosaProductionCaseVerification,\n  mitchellsVsTheMachinesProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 589;", "const EXPECTED_PLAYABLE_SCENARIOS = 590;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 589;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 590;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenFuriosaExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenFuriosaExpansion.ts",\n  "chapterNineteenMitchellsVsTheMachinesExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 589;", "const EXPECTED_ATLAS_COUNT = 590;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 589, `Global Production Verification registry must contain exactly 589 unique scenarioIds after the fiftieth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 590, `Global Production Verification registry must contain exactly 590 unique scenarioIds after the fifty-first Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 589, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 589.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 590, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 590.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 57 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 1 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 57 USE_EXISTING / 0 P0 / 1 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 58 && chapter19.byDecision?.P0?.length === 0 && chapter19.byDecision?.P1?.length === 0 && chapter19.byDecision?.P2?.length === 2 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 58 USE_EXISTING / 0 P0 / 0 P1 / 2 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const furiosa = chapter19.candidates.find((candidate) => candidate.title === "Furiosa: A Mad Max Saga");\ninvariant(furiosa?.decision === "USE_EXISTING" && furiosa?.scenarioId === "scenario_furiosa_a_mad_max_saga_2024" && furiosa?.matches === 1 && furiosa?.productionVerified === true, "Furiosa: A Mad Max Saga is not closed as the fiftieth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "The Mitchells vs. the Machines" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must advance to The Mitchells vs. the Machines after Furiosa closes.");',
  'const furiosa = chapter19.candidates.find((candidate) => candidate.title === "Furiosa: A Mad Max Saga");\ninvariant(furiosa?.decision === "USE_EXISTING" && furiosa?.scenarioId === "scenario_furiosa_a_mad_max_saga_2024" && furiosa?.matches === 1 && furiosa?.productionVerified === true, "Furiosa: A Mad Max Saga is not closed as the fiftieth production-verified Chapter 19 USE_EXISTING case.");\nconst mitchellsVsTheMachines = chapter19.candidates.find((candidate) => candidate.title === "The Mitchells vs. the Machines");\ninvariant(mitchellsVsTheMachines?.decision === "USE_EXISTING" && mitchellsVsTheMachines?.scenarioId === "scenario_the_mitchells_vs_the_machines_2021" && mitchellsVsTheMachines?.matches === 1 && mitchellsVsTheMachines?.productionVerified === true, "The Mitchells vs. the Machines is not closed as the fifty-first production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === null && chapter19.productionStrategy?.nextRecommendedLane === null && chapter19.productionStrategy?.remainingSequence?.length === 0, "Chapter 19 balanced scheduler must be exhausted after The Mitchells vs. the Machines closes the final P0/P1 case.");\ninvariant(Array.isArray(chapter19.recommendedNewProductionCases) && chapter19.recommendedNewProductionCases.length === 0, "Chapter 19 must have no recommended P0/P1 Production Cases after Mitchells closes.");',
);

replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  "CODA",\n  "Avatar: The Way of Water",',
  '  "CODA",\n  "The Mitchells vs. the Machines",\n  "Avatar: The Way of Water",',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  'const exactP1Queue = [\n  "The Mitchells vs. the Machines",\n] as const;',
  'const exactP1Queue = [\n] as const;',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 589;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 590;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 589);", "assert.equal(resolved.atlas.expectedCount, 590);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 589);", "assert.equal(resolved.atlas.actualCount, 590);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 589);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 590);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 57);", "assert.equal(exactUseExisting.length, 58);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP1Queue.length, 1);", "assert.equal(exactP1Queue.length, 0);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 1);", "assert.equal(resolved.recommendedNewProductionCases.length, 0);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.equal(resolved.productionStrategy.nextRecommendedCase, "The Mitchells vs. the Machines");\n  assert.equal(resolved.productionStrategy.nextRecommendedLane, "industrial_scale_technical");\n  assert.deepEqual(resolved.recommendedNewProductionCases.slice(0, 1), [\n    "The Mitchells vs. the Machines",\n  ]);\n  assert.deepEqual(\n    resolved.productionStrategy.remainingSequence.slice(0, 1).map((item) => item.lane),\n    ["industrial_scale_technical"],\n  );',
  '  assert.equal(resolved.productionStrategy.nextRecommendedCase, null);\n  assert.equal(resolved.productionStrategy.nextRecommendedLane, null);\n  assert.deepEqual(resolved.recommendedNewProductionCases, []);\n  assert.deepEqual(resolved.productionStrategy.remainingSequence, []);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Furiosa: A Mad Max Saga"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("Furiosa: A Mad Max Saga"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("The Mitchells vs. the Machines"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const furiosa = resolved.candidates.find((candidate) => candidate.title === "Furiosa: A Mad Max Saga");\n  assert.ok(furiosa);\n  assert.equal(furiosa.decision, "USE_EXISTING");\n  assert.equal(furiosa.scenarioId, "scenario_furiosa_a_mad_max_saga_2024");\n  assert.equal(furiosa.matches, 1);\n  assert.equal(furiosa.productionVerified, true);',
  '  const furiosa = resolved.candidates.find((candidate) => candidate.title === "Furiosa: A Mad Max Saga");\n  assert.ok(furiosa);\n  assert.equal(furiosa.decision, "USE_EXISTING");\n  assert.equal(furiosa.scenarioId, "scenario_furiosa_a_mad_max_saga_2024");\n  assert.equal(furiosa.matches, 1);\n  assert.equal(furiosa.productionVerified, true);\n\n  const mitchellsVsTheMachines = resolved.candidates.find((candidate) => candidate.title === "The Mitchells vs. the Machines");\n  assert.ok(mitchellsVsTheMachines);\n  assert.equal(mitchellsVsTheMachines.decision, "USE_EXISTING");\n  assert.equal(mitchellsVsTheMachines.scenarioId, "scenario_the_mitchells_vs_the_machines_2021");\n  assert.equal(mitchellsVsTheMachines.matches, 1);\n  assert.equal(mitchellsVsTheMachines.productionVerified, true);',
);
