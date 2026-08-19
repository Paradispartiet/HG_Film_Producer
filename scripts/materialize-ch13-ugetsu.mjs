import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 160)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 160)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce("src/ui/data/filmScenarios.ts",
  'import { mergeChapterThirteenLosOlvidadosExpansion } from "../../core/chapterThirteenLosOlvidadosExpansion.js";\n',
  'import { mergeChapterThirteenLosOlvidadosExpansion } from "../../core/chapterThirteenLosOlvidadosExpansion.js";\nimport { mergeChapterThirteenUgetsuExpansion } from "../../core/chapterThirteenUgetsuExpansion.js";\n');
replaceOnce("src/ui/data/filmScenarios.ts",
  'const chapterThirteenLosOlvidadosScenarios = mergeChapterThirteenLosOlvidadosExpansion(chapterThirteenSunsetBoulevardScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenLosOlvidadosScenarios);',
  'const chapterThirteenLosOlvidadosScenarios = mergeChapterThirteenLosOlvidadosExpansion(chapterThirteenSunsetBoulevardScenarios);\nconst chapterThirteenUgetsuScenarios = mergeChapterThirteenUgetsuExpansion(chapterThirteenLosOlvidadosScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenUgetsuScenarios);');
replaceOnce("src/ui/data/filmScenarios.ts",
  '+manual_chapter_thirteen_los_olvidados_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_thirteen_los_olvidados_expansion_2026+manual_chapter_thirteen_ugetsu_expansion_2026+manual_modern_indie_asian_prize_expansion_2026');
replaceOnce("src/ui/data/filmScenarios.ts",
  'Chapter 13 Paisan, The Red Shoes, Sunset Boulevard, and Los olvidados postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion',
  'Chapter 13 Paisan, The Red Shoes, Sunset Boulevard, Los olvidados, and Ugetsu postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion');

replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  'import { losOlvidadosFilmHistoryProfile } from "./scenarioFilmStudyPostwarLosOlvidados";\n',
  'import { losOlvidadosFilmHistoryProfile } from "./scenarioFilmStudyPostwarLosOlvidados";\nimport { ugetsuFilmHistoryProfile } from "./scenarioFilmStudyPostwarUgetsu";\n');
replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  '  [losOlvidadosFilmHistoryProfile.scenarioId]: losOlvidadosFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [losOlvidadosFilmHistoryProfile.scenarioId]: losOlvidadosFilmHistoryProfile,\n  [ugetsuFilmHistoryProfile.scenarioId]: ugetsuFilmHistoryProfile,\n  scenario_the_machinist_2004:');

replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { losOlvidadosProductionCaseVerification } from "./scenarioProductionVerificationLosOlvidados";\n',
  'import { losOlvidadosProductionCaseVerification } from "./scenarioProductionVerificationLosOlvidados";\nimport { ugetsuProductionCaseVerification } from "./scenarioProductionVerificationUgetsu";\n');
replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  losOlvidadosProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  losOlvidadosProductionCaseVerification,\n  ugetsuProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,');

replaceOnce("scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 441;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 441;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 442;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 442;");
replaceOnce("scripts/production-case-rest-audit.mjs",
  '  "chapterThirteenLosOlvidadosExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenLosOlvidadosExpansion.ts",\n  "chapterThirteenUgetsuExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 441;", "const EXPECTED_ATLAS_COUNT = 442;");
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterThirteenLosOlvidadosExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenLosOlvidadosExpansion.ts",\n  "chapterThirteenUgetsuExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 441;", "const EXPECTED_ATLAS_COUNT = 442;");
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '  "chapterThirteenLosOlvidadosExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenLosOlvidadosExpansion.ts",\n  "chapterThirteenUgetsuExpansion.ts",\n  "modernCanonExpansion.ts",');
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '{ title: "Ugetsu", originalTitle: "Ugetsu monogatari", year: 1953, aliases: ["Ugetsu"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Ugetsu", originalTitle: "Ugetsu monogatari", year: 1953, aliases: ["Ugetsu"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_ugetsu_1953", chapterFunction:');

replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 441;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 442;/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 441);\n  assert.equal(resolved.atlas.actualCount, 441);',
  '  assert.equal(resolved.atlas.expectedCount, 442);\n  assert.equal(resolved.atlas.actualCount, 442);');

replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  "Los olvidados",\n];\nconst exactP1Queue = [\n  "Ugetsu",\n  "A Man Escaped",\n];',
  '  "Los olvidados",\n  "Ugetsu",\n];\nconst exactP1Queue = [\n  "A Man Escaped",\n];');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 441;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 442;/);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 441);\n  assert.equal(resolved.atlas.actualCount, 441);',
  '  assert.equal(resolved.atlas.expectedCount, 442);\n  assert.equal(resolved.atlas.actualCount, 442);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(byTitle.get("Los olvidados")?.scenarioId, "scenario_los_olvidados_1950");\n});',
  '  assert.equal(byTitle.get("Los olvidados")?.scenarioId, "scenario_los_olvidados_1950");\n  assert.equal(byTitle.get("Ugetsu")?.scenarioId, "scenario_ugetsu_1953");\n});');

console.log("Materialized permanent Chapter 13 Ugetsu integration changes.");
