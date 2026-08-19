import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 160)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 160)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce("src/ui/data/filmScenarios.ts",
  'import { mergeChapterThirteenSunsetBoulevardExpansion } from "../../core/chapterThirteenSunsetBoulevardExpansion.js";\n',
  'import { mergeChapterThirteenSunsetBoulevardExpansion } from "../../core/chapterThirteenSunsetBoulevardExpansion.js";\nimport { mergeChapterThirteenLosOlvidadosExpansion } from "../../core/chapterThirteenLosOlvidadosExpansion.js";\n');
replaceOnce("src/ui/data/filmScenarios.ts",
  'const chapterThirteenSunsetBoulevardScenarios = mergeChapterThirteenSunsetBoulevardExpansion(chapterThirteenRedShoesScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenSunsetBoulevardScenarios);',
  'const chapterThirteenSunsetBoulevardScenarios = mergeChapterThirteenSunsetBoulevardExpansion(chapterThirteenRedShoesScenarios);\nconst chapterThirteenLosOlvidadosScenarios = mergeChapterThirteenLosOlvidadosExpansion(chapterThirteenSunsetBoulevardScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenLosOlvidadosScenarios);');
replaceOnce("src/ui/data/filmScenarios.ts",
  '+manual_chapter_thirteen_sunset_boulevard_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_thirteen_sunset_boulevard_expansion_2026+manual_chapter_thirteen_los_olvidados_expansion_2026+manual_modern_indie_asian_prize_expansion_2026');
replaceOnce("src/ui/data/filmScenarios.ts",
  'Chapter 13 Paisan, The Red Shoes, and Sunset Boulevard postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion',
  'Chapter 13 Paisan, The Red Shoes, Sunset Boulevard, and Los olvidados postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion');

replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  'import { sunsetBoulevardFilmHistoryProfile } from "./scenarioFilmStudyPostwarSunsetBoulevard";\n',
  'import { sunsetBoulevardFilmHistoryProfile } from "./scenarioFilmStudyPostwarSunsetBoulevard";\nimport { losOlvidadosFilmHistoryProfile } from "./scenarioFilmStudyPostwarLosOlvidados";\n');
replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  '  [sunsetBoulevardFilmHistoryProfile.scenarioId]: sunsetBoulevardFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [sunsetBoulevardFilmHistoryProfile.scenarioId]: sunsetBoulevardFilmHistoryProfile,\n  [losOlvidadosFilmHistoryProfile.scenarioId]: losOlvidadosFilmHistoryProfile,\n  scenario_the_machinist_2004:');

replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { sunsetBoulevardProductionCaseVerification } from "./scenarioProductionVerificationSunsetBoulevard";\n',
  'import { sunsetBoulevardProductionCaseVerification } from "./scenarioProductionVerificationSunsetBoulevard";\nimport { losOlvidadosProductionCaseVerification } from "./scenarioProductionVerificationLosOlvidados";\n');
replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  sunsetBoulevardProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  sunsetBoulevardProductionCaseVerification,\n  losOlvidadosProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,');

replaceOnce("scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 440;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 440;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 441;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 441;");
replaceOnce("scripts/production-case-rest-audit.mjs",
  '  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "chapterThirteenLosOlvidadosExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 440;", "const EXPECTED_ATLAS_COUNT = 441;");
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "chapterThirteenLosOlvidadosExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 440;", "const EXPECTED_ATLAS_COUNT = 441;");
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "chapterThirteenLosOlvidadosExpansion.ts",\n  "modernCanonExpansion.ts",');
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '{ title: "Los olvidados", originalTitle: "Los olvidados", year: 1950, aliases: ["The Young and the Damned"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Los olvidados", originalTitle: "Los olvidados", year: 1950, aliases: ["The Young and the Damned"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_los_olvidados_1950", chapterFunction:');

replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 440;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 441;/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 440);\n  assert.equal(resolved.atlas.actualCount, 440);',
  '  assert.equal(resolved.atlas.expectedCount, 441);\n  assert.equal(resolved.atlas.actualCount, 441);');

replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  "Sunset Boulevard",\n];\nconst exactP1Queue = [\n  "Los olvidados",',
  '  "Sunset Boulevard",\n  "Los olvidados",\n];\nconst exactP1Queue = [');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 440;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 441;/);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 440);\n  assert.equal(resolved.atlas.actualCount, 440);',
  '  assert.equal(resolved.atlas.expectedCount, 441);\n  assert.equal(resolved.atlas.actualCount, 441);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(byTitle.get("Sunset Boulevard")?.scenarioId, "scenario_sunset_boulevard_1950");\n});',
  '  assert.equal(byTitle.get("Sunset Boulevard")?.scenarioId, "scenario_sunset_boulevard_1950");\n  assert.equal(byTitle.get("Los olvidados")?.scenarioId, "scenario_los_olvidados_1950");\n});');

console.log("Materialized permanent Chapter 13 Los olvidados integration changes.");
