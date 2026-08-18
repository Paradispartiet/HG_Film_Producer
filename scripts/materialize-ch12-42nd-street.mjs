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
  'import { mergeChapterTwelveDraculaExpansion } from "../../core/chapterTwelveDraculaExpansion.js";\n',
  'import { mergeChapterTwelveDraculaExpansion } from "../../core/chapterTwelveDraculaExpansion.js";\nimport { mergeChapterTwelve42ndStreetExpansion } from "../../core/chapterTwelve42ndStreetExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterTwelveDraculaScenarios = mergeChapterTwelveDraculaExpansion(chapterTwelvePublicEnemyScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveDraculaScenarios);',
  'const chapterTwelveDraculaScenarios = mergeChapterTwelveDraculaExpansion(chapterTwelvePublicEnemyScenarios);\nconst chapterTwelve42ndStreetScenarios = mergeChapterTwelve42ndStreetExpansion(chapterTwelveDraculaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelve42ndStreetScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_twelve_public_enemy_expansion_2026+manual_chapter_twelve_dracula_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_twelve_public_enemy_expansion_2026+manual_chapter_twelve_dracula_expansion_2026+manual_chapter_twelve_42nd_street_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "Chapter 12 The Public Enemy and Dracula studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
  "Chapter 12 The Public Enemy, Dracula, and 42nd Street studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { draculaFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreDracula";\n',
  'import { draculaFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreDracula";\nimport { fortySecondStreetFilmHistoryProfile } from "./scenarioFilmStudyStudioGenre42ndStreet";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [draculaFilmHistoryProfile.scenarioId]: draculaFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [draculaFilmHistoryProfile.scenarioId]: draculaFilmHistoryProfile,\n  [fortySecondStreetFilmHistoryProfile.scenarioId]: fortySecondStreetFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { draculaProductionCaseVerification } from "./scenarioProductionVerificationDracula";\n',
  'import { draculaProductionCaseVerification } from "./scenarioProductionVerificationDracula";\nimport { fortySecondStreetProductionCaseVerification } from "./scenarioProductionVerification42ndStreet";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  draculaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  draculaProductionCaseVerification,\n  fortySecondStreetProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 432;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 432;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 433;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 433;",
);
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterTwelveDraculaExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveDraculaExpansion.ts",\n  "chapterTwelve42ndStreetExpansion.ts",\n  "modernCanonExpansion.ts",',
);

replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 432;",
  "const EXPECTED_ATLAS_COUNT = 433;",
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterTwelveDraculaExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveDraculaExpansion.ts",\n  "chapterTwelve42ndStreetExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '{ title: "42nd Street", originalTitle: "42nd Street", year: 1933, aliases: [], role: "missing_core_case", decisionIfMissing: "P0", chapterFunction:',
  '{ title: "42nd Street", originalTitle: "42nd Street", year: 1933, aliases: ["Forty-Second Street"], role: "missing_core_case", decisionIfMissing: "P0", expectedScenarioId: "scenario_42nd_street_1933", chapterFunction:',
);

replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  "Dracula",\n];',
  '  "Dracula",\n  "42nd Street",\n];',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  'const explicitHandoffP0 = ["42nd Street"];',
  'const explicitHandoffP0: string[] = [];',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 432;/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_public_enemy_1931"/);\n  assert.match(audit, /expectedScenarioId: "scenario_dracula_1931"/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 433;/);\n  assert.match(audit, /expectedScenarioId: "scenario_the_public_enemy_1931"/);\n  assert.match(audit, /expectedScenarioId: "scenario_dracula_1931"/);\n  assert.match(audit, /expectedScenarioId: "scenario_42nd_street_1933"/);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 432);\n  assert.equal(resolved.atlas.actualCount, 432);',
  '  assert.equal(resolved.atlas.expectedCount, 433);\n  assert.equal(resolved.atlas.actualCount, 433);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(byTitle.get("Dracula")?.scenarioId, "scenario_dracula_1931");\n});',
  '  assert.equal(byTitle.get("Dracula")?.scenarioId, "scenario_dracula_1931");\n  assert.equal(byTitle.get("42nd Street")?.scenarioId, "scenario_42nd_street_1933");\n});',
);

console.log("Materialized permanent Chapter 12 42nd Street integration changes.");
