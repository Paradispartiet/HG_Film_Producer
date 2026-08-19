import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 160)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 160)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce("src/ui/data/filmScenarios.ts",
  'import { mergeChapterThirteenPaisanExpansion } from "../../core/chapterThirteenPaisanExpansion.js";\n',
  'import { mergeChapterThirteenPaisanExpansion } from "../../core/chapterThirteenPaisanExpansion.js";\nimport { mergeChapterThirteenRedShoesExpansion } from "../../core/chapterThirteenRedShoesExpansion.js";\n');
replaceOnce("src/ui/data/filmScenarios.ts",
  'const chapterThirteenPaisanScenarios = mergeChapterThirteenPaisanExpansion(chapterTwelveGoneWithTheWindScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenPaisanScenarios);',
  'const chapterThirteenPaisanScenarios = mergeChapterThirteenPaisanExpansion(chapterTwelveGoneWithTheWindScenarios);\nconst chapterThirteenRedShoesScenarios = mergeChapterThirteenRedShoesExpansion(chapterThirteenPaisanScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenRedShoesScenarios);');
replaceOnce("src/ui/data/filmScenarios.ts",
  '+manual_chapter_thirteen_paisan_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_thirteen_paisan_expansion_2026+manual_chapter_thirteen_red_shoes_expansion_2026+manual_modern_indie_asian_prize_expansion_2026');
replaceOnce("src/ui/data/filmScenarios.ts",
  'Chapter 13 Paisan postwar-noir-realism-reconstruction expansion, modern independent/Asian/prize-cinema expansion',
  'Chapter 13 Paisan and The Red Shoes postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion');

replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  'import { paisanFilmHistoryProfile } from "./scenarioFilmStudyPostwarPaisan";\n',
  'import { paisanFilmHistoryProfile } from "./scenarioFilmStudyPostwarPaisan";\nimport { redShoesFilmHistoryProfile } from "./scenarioFilmStudyPostwarRedShoes";\n');
replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  '  [paisanFilmHistoryProfile.scenarioId]: paisanFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [paisanFilmHistoryProfile.scenarioId]: paisanFilmHistoryProfile,\n  [redShoesFilmHistoryProfile.scenarioId]: redShoesFilmHistoryProfile,\n  scenario_the_machinist_2004:');

replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { paisanProductionCaseVerification } from "./scenarioProductionVerificationPaisan";\n',
  'import { paisanProductionCaseVerification } from "./scenarioProductionVerificationPaisan";\nimport { redShoesProductionCaseVerification } from "./scenarioProductionVerificationRedShoes";\n');
replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  paisanProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  paisanProductionCaseVerification,\n  redShoesProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,');

replaceOnce("scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 438;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 438;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 439;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 439;");
replaceOnce("scripts/production-case-rest-audit.mjs",
  '  "chapterThirteenPaisanExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenPaisanExpansion.ts",\n  "chapterThirteenRedShoesExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 438;", "const EXPECTED_ATLAS_COUNT = 439;");
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterThirteenPaisanExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenPaisanExpansion.ts",\n  "chapterThirteenRedShoesExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 438;", "const EXPECTED_ATLAS_COUNT = 439;");
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '  "chapterThirteenPaisanExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenPaisanExpansion.ts",\n  "chapterThirteenRedShoesExpansion.ts",\n  "modernCanonExpansion.ts",');
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '{ title: "The Red Shoes", originalTitle: "The Red Shoes", year: 1948, aliases: [], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "The Red Shoes", originalTitle: "The Red Shoes", year: 1948, aliases: [], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_the_red_shoes_1948", chapterFunction:');

replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 438;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 439;/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 438);\n  assert.equal(resolved.atlas.actualCount, 438);',
  '  assert.equal(resolved.atlas.expectedCount, 439);\n  assert.equal(resolved.atlas.actualCount, 439);');

replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  "Paisan",\n];\nconst exactP1Queue = [\n  "The Red Shoes",',
  '  "Paisan",\n  "The Red Shoes",\n];\nconst exactP1Queue = [');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 438;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 439;/);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 438);\n  assert.equal(resolved.atlas.actualCount, 438);',
  '  assert.equal(resolved.atlas.expectedCount, 439);\n  assert.equal(resolved.atlas.actualCount, 439);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(byTitle.get("Paisan")?.scenarioId, "scenario_paisan_1946");\n});',
  '  assert.equal(byTitle.get("Paisan")?.scenarioId, "scenario_paisan_1946");\n  assert.equal(byTitle.get("The Red Shoes")?.scenarioId, "scenario_the_red_shoes_1948");\n});');

console.log("Materialized permanent Chapter 13 The Red Shoes integration changes.");
