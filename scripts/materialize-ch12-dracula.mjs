import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 140)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 140)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterTwelvePublicEnemyExpansion } from "../../core/chapterTwelvePublicEnemyExpansion.js";\n',
  'import { mergeChapterTwelvePublicEnemyExpansion } from "../../core/chapterTwelvePublicEnemyExpansion.js";\nimport { mergeChapterTwelveDraculaExpansion } from "../../core/chapterTwelveDraculaExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterTwelvePublicEnemyScenarios = mergeChapterTwelvePublicEnemyExpansion(chapterElevenBlueAngelScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelvePublicEnemyScenarios);',
  'const chapterTwelvePublicEnemyScenarios = mergeChapterTwelvePublicEnemyExpansion(chapterElevenBlueAngelScenarios);\nconst chapterTwelveDraculaScenarios = mergeChapterTwelveDraculaExpansion(chapterTwelvePublicEnemyScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveDraculaScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_twelve_public_enemy_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_twelve_public_enemy_expansion_2026+manual_chapter_twelve_dracula_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "Chapter 12 The Public Enemy studio-and-genre-system expansion, modern independent/Asian/prize-cinema expansion",
  "Chapter 12 The Public Enemy and Dracula studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { publicEnemyFilmHistoryProfile } from "./scenarioFilmStudyStudioGenrePublicEnemy";\n',
  'import { publicEnemyFilmHistoryProfile } from "./scenarioFilmStudyStudioGenrePublicEnemy";\nimport { draculaFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreDracula";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [publicEnemyFilmHistoryProfile.scenarioId]: publicEnemyFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [publicEnemyFilmHistoryProfile.scenarioId]: publicEnemyFilmHistoryProfile,\n  [draculaFilmHistoryProfile.scenarioId]: draculaFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { publicEnemyProductionCaseVerification } from "./scenarioProductionVerificationPublicEnemy";\n',
  'import { publicEnemyProductionCaseVerification } from "./scenarioProductionVerificationPublicEnemy";\nimport { draculaProductionCaseVerification } from "./scenarioProductionVerificationDracula";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  publicEnemyProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  publicEnemyProductionCaseVerification,\n  draculaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 431;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 431;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 432;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 432;",
);
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterTwelvePublicEnemyExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelvePublicEnemyExpansion.ts",\n  "chapterTwelveDraculaExpansion.ts",\n  "modernCanonExpansion.ts",',
);

replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 431;",
  "const EXPECTED_ATLAS_COUNT = 432;",
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterTwelvePublicEnemyExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelvePublicEnemyExpansion.ts",\n  "chapterTwelveDraculaExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '{ title: "Dracula", originalTitle: "Dracula", year: 1931, aliases: [], role: "missing_core_case", decisionIfMissing: "P0", chapterFunction:',
  '{ title: "Dracula", originalTitle: "Dracula", year: 1931, aliases: ["Drácula"], role: "missing_core_case", decisionIfMissing: "P0", expectedScenarioId: "scenario_dracula_1931", chapterFunction:',
);

replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  "The Public Enemy",\n];',
  '  "The Public Enemy",\n  "Dracula",\n];',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  'const explicitHandoffP0 = ["Dracula", "42nd Street"];',
  'const explicitHandoffP0 = ["42nd Street"];',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 431;/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_public_enemy_1931"/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 432;/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_public_enemy_1931"/);\n  assert.match(audit, /expectedScenarioId: "scenario_dracula_1931"/);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 431);\n  assert.equal(resolved.atlas.actualCount, 431);',
  '  assert.equal(resolved.atlas.expectedCount, 432);\n  assert.equal(resolved.atlas.actualCount, 432);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(byTitle.get("The Public Enemy")?.scenarioId, "scenario_the_public_enemy_1931");\n});',
  '  assert.equal(byTitle.get("The Public Enemy")?.scenarioId, "scenario_the_public_enemy_1931");\n  assert.equal(byTitle.get("Dracula")?.scenarioId, "scenario_dracula_1931");\n});',
);

console.log("Materialized permanent Chapter 12 Dracula integration changes.");
