import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(path, before, after) {
  const source = readFileSync(path, "utf8");
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`${path}: expected replacement anchor not found: ${before.slice(0, 220)}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`${path}: replacement anchor is not unique: ${before.slice(0, 220)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

function replaceAfter(path, marker, before, after) {
  const source = readFileSync(path, "utf8");
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) throw new Error(`${path}: section marker not found: ${marker}`);
  if (source.indexOf(marker, markerIndex + marker.length) >= 0) throw new Error(`${path}: section marker is not unique: ${marker}`);
  const first = source.indexOf(before, markerIndex + marker.length);
  if (first < 0) throw new Error(`${path}: replacement anchor not found after ${marker}: ${before.slice(0, 220)}`);
  writeFileSync(path, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterNineteenTheBrutalistExpansion } from "../../core/chapterNineteenTheBrutalistExpansion.js";\n',
  'import { mergeChapterNineteenTheBrutalistExpansion } from "../../core/chapterNineteenTheBrutalistExpansion.js";\nimport { mergeChapterNineteenSinnersExpansion } from "../../core/chapterNineteenSinnersExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterNineteenTheBrutalistScenarios = mergeChapterNineteenTheBrutalistExpansion(chapterNineteenGuillermoDelTorosPinocchioScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenTheBrutalistScenarios);',
  'const chapterNineteenTheBrutalistScenarios = mergeChapterNineteenTheBrutalistExpansion(chapterNineteenGuillermoDelTorosPinocchioScenarios);\nconst chapterNineteenSinnersScenarios = mergeChapterNineteenSinnersExpansion(chapterNineteenTheBrutalistScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterNineteenSinnersScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_nineteen_the_brutalist_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_nineteen_the_brutalist_expansion_2026+manual_chapter_nineteen_sinners_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theBrutalistFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheBrutalist";\n',
  'import { theBrutalistFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenTheBrutalist";\nimport { sinnersFilmHistoryProfile } from "./scenarioFilmStudyChapterNineteenSinners";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [theBrutalistFilmHistoryProfile.scenarioId]: theBrutalistFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [theBrutalistFilmHistoryProfile.scenarioId]: theBrutalistFilmHistoryProfile,\n  [sinnersFilmHistoryProfile.scenarioId]: sinnersFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theBrutalistProductionCaseVerification } from "./scenarioProductionVerificationTheBrutalist";\n',
  'import { theBrutalistProductionCaseVerification } from "./scenarioProductionVerificationTheBrutalist";\nimport { sinnersProductionCaseVerification } from "./scenarioProductionVerificationSinners";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  theBrutalistProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  theBrutalistProductionCaseVerification,\n  sinnersProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 577;", "const EXPECTED_PLAYABLE_SCENARIOS = 578;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 577;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 578;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterNineteenTheBrutalistExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterNineteenTheBrutalistExpansion.ts",\n  "chapterNineteenSinnersExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce("scripts/film-history-chapter-nineteen-atlas-audit.mjs", "const EXPECTED_ATLAS_COUNT = 577;", "const EXPECTED_ATLAS_COUNT = 578;");

replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(verificationIds.size === 577, `Global Production Verification registry must contain exactly 577 unique scenarioIds after the thirty-eighth Chapter 19 case: ${verificationIds.size}`);',
  'invariant(verificationIds.size === 578, `Global Production Verification registry must contain exactly 578 unique scenarioIds after the thirty-ninth Chapter 19 case: ${verificationIds.size}`);',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 577, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 577.");',
  'invariant(chapter19.atlas?.baselineFromClosedChapter18 === 539 && chapter19.atlas?.actualCount === 578, "Chapter 19 must preserve the closed 539-scenario Chapter 18 baseline while advancing the current Atlas to 578.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 45 && chapter19.byDecision?.P0?.length === 4 && chapter19.byDecision?.P1?.length === 7 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 45 USE_EXISTING / 4 P0 / 7 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
  'invariant(chapter19.byDecision?.USE_EXISTING?.length === 46 && chapter19.byDecision?.P0?.length === 3 && chapter19.byDecision?.P1?.length === 7 && chapter19.byDecision?.P2?.length === 4 && chapter19.byDecision?.EXISTING_REQUIRED?.length === 0, "Chapter 19 resolved queue census drifted from 46 USE_EXISTING / 3 P0 / 7 P1 / 4 P2 / 0 EXISTING_REQUIRED.");',
);
replaceOnce(
  "scripts/film-history-chapter-eighteen-completion-audit.mjs",
  'const theBrutalist = chapter19.candidates.find((candidate) => candidate.title === "The Brutalist");\ninvariant(theBrutalist?.decision === "USE_EXISTING" && theBrutalist?.scenarioId === "scenario_the_brutalist_2024" && theBrutalist?.matches === 1 && theBrutalist?.productionVerified === true, "The Brutalist is not closed as the thirty-eighth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority The Brutalist case closes outside scheduler order.");',
  'const theBrutalist = chapter19.candidates.find((candidate) => candidate.title === "The Brutalist");\ninvariant(theBrutalist?.decision === "USE_EXISTING" && theBrutalist?.scenarioId === "scenario_the_brutalist_2024" && theBrutalist?.matches === 1 && theBrutalist?.productionVerified === true, "The Brutalist is not closed as the thirty-eighth production-verified Chapter 19 USE_EXISTING case.");\nconst sinners = chapter19.candidates.find((candidate) => candidate.title === "Sinners");\ninvariant(sinners?.decision === "USE_EXISTING" && sinners?.scenarioId === "scenario_sinners_2025" && sinners?.matches === 1 && sinners?.productionVerified === true, "Sinners is not closed as the thirty-ninth production-verified Chapter 19 USE_EXISTING case.");\ninvariant(chapter19.productionStrategy?.nextRecommendedCase === "Spider-Man: Across the Spider-Verse" && chapter19.productionStrategy?.nextRecommendedLane === "industrial_scale_technical", "Chapter 19 balanced scheduler must remain at Spider-Man: Across the Spider-Verse after the award-priority Sinners case closes outside scheduler order.");',
);

replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactUseExisting = [",
  '  "Anora",\n  "One Battle After Another",',
  '  "Anora",\n  "Sinners",\n  "One Battle After Another",',
);
replaceAfter(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  "const exactP0Queue = [",
  '  "Dune: Part Two",\n  "Sinners",\n  "F1",',
  '  "Dune: Part Two",\n  "F1",',
);
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 577;/);", "assert.match(audit, /const EXPECTED_ATLAS_COUNT = 578;/);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.expectedCount, 577);", "assert.equal(resolved.atlas.expectedCount, 578);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.atlas.actualCount, 577);", "assert.equal(resolved.atlas.actualCount, 578);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 577);", "assert.equal(resolved.verificationIndex.literalVerifiedScenarioIds, 578);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactUseExisting.length, 45);", "assert.equal(exactUseExisting.length, 46);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(exactP0Queue.length, 4);", "assert.equal(exactP0Queue.length, 3);");
replaceOnce("src/core/filmHistoryChapterNineteenAuditContract.test.ts", "assert.equal(resolved.recommendedNewProductionCases.length, 11);", "assert.equal(resolved.recommendedNewProductionCases.length, 10);");
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Brutalist"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
  '  assert.ok(!resolved.recommendedNewProductionCases.includes("The Brutalist"));\n  assert.ok(!resolved.recommendedNewProductionCases.includes("Sinners"));\n  assert.equal(new Set(resolved.recommendedNewProductionCases).size, resolved.recommendedNewProductionCases.length);',
);
replaceOnce(
  "src/core/filmHistoryChapterNineteenAuditContract.test.ts",
  '  const theBrutalist = resolved.candidates.find((candidate) => candidate.title === "The Brutalist");\n  assert.ok(theBrutalist);\n  assert.equal(theBrutalist.decision, "USE_EXISTING");\n  assert.equal(theBrutalist.scenarioId, "scenario_the_brutalist_2024");\n  assert.equal(theBrutalist.matches, 1);\n  assert.equal(theBrutalist.productionVerified, true);',
  '  const theBrutalist = resolved.candidates.find((candidate) => candidate.title === "The Brutalist");\n  assert.ok(theBrutalist);\n  assert.equal(theBrutalist.decision, "USE_EXISTING");\n  assert.equal(theBrutalist.scenarioId, "scenario_the_brutalist_2024");\n  assert.equal(theBrutalist.matches, 1);\n  assert.equal(theBrutalist.productionVerified, true);\n\n  const sinners = resolved.candidates.find((candidate) => candidate.title === "Sinners");\n  assert.ok(sinners);\n  assert.equal(sinners.decision, "USE_EXISTING");\n  assert.equal(sinners.scenarioId, "scenario_sinners_2025");\n  assert.equal(sinners.matches, 1);\n  assert.equal(sinners.productionVerified, true);',
);