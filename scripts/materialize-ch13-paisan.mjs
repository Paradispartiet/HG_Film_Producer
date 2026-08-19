import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 160)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 160)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce("src/ui/data/filmScenarios.ts",
  'import { mergeChapterTwelveGoneWithTheWindExpansion } from "../../core/chapterTwelveGoneWithTheWindExpansion.js";\n',
  'import { mergeChapterTwelveGoneWithTheWindExpansion } from "../../core/chapterTwelveGoneWithTheWindExpansion.js";\nimport { mergeChapterThirteenPaisanExpansion } from "../../core/chapterThirteenPaisanExpansion.js";\n');
replaceOnce("src/ui/data/filmScenarios.ts",
  'const chapterTwelveGoneWithTheWindScenarios = mergeChapterTwelveGoneWithTheWindExpansion(chapterTwelveTopHatScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveGoneWithTheWindScenarios);',
  'const chapterTwelveGoneWithTheWindScenarios = mergeChapterTwelveGoneWithTheWindExpansion(chapterTwelveTopHatScenarios);\nconst chapterThirteenPaisanScenarios = mergeChapterThirteenPaisanExpansion(chapterTwelveGoneWithTheWindScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenPaisanScenarios);');
replaceOnce("src/ui/data/filmScenarios.ts",
  '+manual_chapter_twelve_gone_with_the_wind_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_twelve_gone_with_the_wind_expansion_2026+manual_chapter_thirteen_paisan_expansion_2026+manual_modern_indie_asian_prize_expansion_2026');
replaceOnce("src/ui/data/filmScenarios.ts",
  'Chapter 12 The Public Enemy, Dracula, 42nd Street, Scarface, It Happened One Night, Top Hat, and Gone with the Wind studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion',
  'Chapter 12 The Public Enemy, Dracula, 42nd Street, Scarface, It Happened One Night, Top Hat, and Gone with the Wind studio-and-genre-system expansions, Chapter 13 Paisan postwar-noir-realism-reconstruction expansion, modern independent/Asian/prize-cinema expansion');

replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  'import { goneWithTheWindFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreGoneWithTheWind";\n',
  'import { goneWithTheWindFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreGoneWithTheWind";\nimport { paisanFilmHistoryProfile } from "./scenarioFilmStudyPostwarPaisan";\n');
replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  '  [goneWithTheWindFilmHistoryProfile.scenarioId]: goneWithTheWindFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [goneWithTheWindFilmHistoryProfile.scenarioId]: goneWithTheWindFilmHistoryProfile,\n  [paisanFilmHistoryProfile.scenarioId]: paisanFilmHistoryProfile,\n  scenario_the_machinist_2004:');

replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { goneWithTheWindProductionCaseVerification } from "./scenarioProductionVerificationGoneWithTheWind";\n',
  'import { goneWithTheWindProductionCaseVerification } from "./scenarioProductionVerificationGoneWithTheWind";\nimport { paisanProductionCaseVerification } from "./scenarioProductionVerificationPaisan";\n');
replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  goneWithTheWindProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  goneWithTheWindProductionCaseVerification,\n  paisanProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,');

replaceOnce("scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 437;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 437;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 438;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 438;");
replaceOnce("scripts/production-case-rest-audit.mjs",
  '  "chapterTwelveGoneWithTheWindExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveGoneWithTheWindExpansion.ts",\n  "chapterThirteenPaisanExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 437;", "const EXPECTED_ATLAS_COUNT = 438;");
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterTwelveGoneWithTheWindExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveGoneWithTheWindExpansion.ts",\n  "chapterThirteenPaisanExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 437;", "const EXPECTED_ATLAS_COUNT = 438;");
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '  "chapterTwelveGoneWithTheWindExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveGoneWithTheWindExpansion.ts",\n  "chapterThirteenPaisanExpansion.ts",\n  "modernCanonExpansion.ts",');
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '{ title: "Paisan", originalTitle: "Paisà", year: 1946, aliases: ["Paisa", "Paisan"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Paisan", originalTitle: "Paisà", year: 1946, aliases: ["Paisa", "Paisan"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_paisan_1946", chapterFunction:');

replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 437;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 438;/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 437);\n  assert.equal(resolved.atlas.actualCount, 437);',
  '  assert.equal(resolved.atlas.expectedCount, 438);\n  assert.equal(resolved.atlas.actualCount, 438);');

replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  "Vertigo",\n];\nconst exactP1Queue = [\n  "Paisan",',
  '  "Vertigo",\n  "Paisan",\n];\nconst exactP1Queue = [');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 437;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 438;/);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 437);\n  assert.equal(resolved.atlas.actualCount, 437);',
  '  assert.equal(resolved.atlas.expectedCount, 438);\n  assert.equal(resolved.atlas.actualCount, 438);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(byTitle.get("Vertigo")?.scenarioId, "scenario_vertigo_1958");\n});',
  '  assert.equal(byTitle.get("Vertigo")?.scenarioId, "scenario_vertigo_1958");\n  assert.equal(byTitle.get("Paisan")?.scenarioId, "scenario_paisan_1946");\n});');

console.log("Materialized permanent Chapter 13 Paisan integration changes.");
