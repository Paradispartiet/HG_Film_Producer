import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 120)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 120)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterElevenBlueAngelExpansion } from "../../core/chapterElevenBlueAngelExpansion.js";\n',
  'import { mergeChapterElevenBlueAngelExpansion } from "../../core/chapterElevenBlueAngelExpansion.js";\nimport { mergeChapterTwelvePublicEnemyExpansion } from "../../core/chapterTwelvePublicEnemyExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterElevenBlueAngelScenarios = mergeChapterElevenBlueAngelExpansion(chapterElevenEnthusiasmScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterElevenBlueAngelScenarios);',
  'const chapterElevenBlueAngelScenarios = mergeChapterElevenBlueAngelExpansion(chapterElevenEnthusiasmScenarios);\nconst chapterTwelvePublicEnemyScenarios = mergeChapterTwelvePublicEnemyExpansion(chapterElevenBlueAngelScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelvePublicEnemyScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_eleven_blue_angel_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_eleven_blue_angel_expansion_2026+manual_chapter_twelve_public_enemy_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "and The Blue Angel sound-transition expansions, modern independent/Asian/prize-cinema expansion",
  "and The Blue Angel sound-transition expansions, Chapter 12 The Public Enemy studio-and-genre-system expansion, modern independent/Asian/prize-cinema expansion",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { blueAngelFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBlueAngel";\n',
  'import { blueAngelFilmHistoryProfile } from "./scenarioFilmStudySoundTransitionBlueAngel";\nimport { publicEnemyFilmHistoryProfile } from "./scenarioFilmStudyStudioGenrePublicEnemy";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [blueAngelFilmHistoryProfile.scenarioId]: blueAngelFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [blueAngelFilmHistoryProfile.scenarioId]: blueAngelFilmHistoryProfile,\n  [publicEnemyFilmHistoryProfile.scenarioId]: publicEnemyFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { blueAngelProductionCaseVerification } from "./scenarioProductionVerificationBlueAngel";\n',
  'import { blueAngelProductionCaseVerification } from "./scenarioProductionVerificationBlueAngel";\nimport { publicEnemyProductionCaseVerification } from "./scenarioProductionVerificationPublicEnemy";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  blueAngelProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  blueAngelProductionCaseVerification,\n  publicEnemyProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 430;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 430;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 431;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 431;",
);
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterElevenBlueAngelExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterElevenBlueAngelExpansion.ts",\n  "chapterTwelvePublicEnemyExpansion.ts",\n  "modernCanonExpansion.ts",',
);

replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 430;",
  "const EXPECTED_ATLAS_COUNT = 431;",
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterElevenBlueAngelExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterElevenBlueAngelExpansion.ts",\n  "chapterTwelvePublicEnemyExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '{ title: "The Public Enemy", originalTitle: "The Public Enemy", year: 1931, aliases: [], role: "missing_core_case", decisionIfMissing: "P0", chapterFunction:',
  '{ title: "The Public Enemy", originalTitle: "The Public Enemy", year: 1931, aliases: [], role: "missing_core_case", decisionIfMissing: "P0", expectedScenarioId: "scenario_the_public_enemy_1931", chapterFunction:',
);

replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  "Casablanca",\n];',
  '  "Casablanca",\n  "The Public Enemy",\n];',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  'const explicitHandoffP0 = ["The Public Enemy", "Dracula", "42nd Street"];',
  'const explicitHandoffP0 = ["Dracula", "42nd Street"];',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 430;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 431;/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_public_enemy_1931"/);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 430);\n  assert.equal(resolved.atlas.actualCount, 430);',
  '  assert.equal(resolved.atlas.expectedCount, 431);\n  assert.equal(resolved.atlas.actualCount, 431);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(byTitle.get("Casablanca")?.scenarioId, "scenario_casablanca_1942");\n});',
  '  assert.equal(byTitle.get("Casablanca")?.scenarioId, "scenario_casablanca_1942");\n  assert.equal(byTitle.get("The Public Enemy")?.scenarioId, "scenario_the_public_enemy_1931");\n});',
);

console.log("Materialized permanent Chapter 12 The Public Enemy integration changes.");
