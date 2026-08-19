import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 160)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 160)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce("src/ui/data/filmScenarios.ts",
  'import { mergeChapterThirteenUgetsuExpansion } from "../../core/chapterThirteenUgetsuExpansion.js";\n',
  'import { mergeChapterThirteenUgetsuExpansion } from "../../core/chapterThirteenUgetsuExpansion.js";\nimport { mergeChapterThirteenAManEscapedExpansion } from "../../core/chapterThirteenAManEscapedExpansion.js";\n');
replaceOnce("src/ui/data/filmScenarios.ts",
  'const chapterThirteenUgetsuScenarios = mergeChapterThirteenUgetsuExpansion(chapterThirteenLosOlvidadosScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenUgetsuScenarios);',
  'const chapterThirteenUgetsuScenarios = mergeChapterThirteenUgetsuExpansion(chapterThirteenLosOlvidadosScenarios);\nconst chapterThirteenAManEscapedScenarios = mergeChapterThirteenAManEscapedExpansion(chapterThirteenUgetsuScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenAManEscapedScenarios);');
replaceOnce("src/ui/data/filmScenarios.ts",
  '+manual_chapter_thirteen_ugetsu_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_thirteen_ugetsu_expansion_2026+manual_chapter_thirteen_a_man_escaped_expansion_2026+manual_modern_indie_asian_prize_expansion_2026');
replaceOnce("src/ui/data/filmScenarios.ts",
  'Chapter 13 Paisan, The Red Shoes, Sunset Boulevard, Los olvidados, and Ugetsu postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion',
  'Chapter 13 Paisan, The Red Shoes, Sunset Boulevard, Los olvidados, Ugetsu, and A Man Escaped postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion');

replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  'import { ugetsuFilmHistoryProfile } from "./scenarioFilmStudyPostwarUgetsu";\n',
  'import { ugetsuFilmHistoryProfile } from "./scenarioFilmStudyPostwarUgetsu";\nimport { aManEscapedFilmHistoryProfile } from "./scenarioFilmStudyPostwarAManEscaped";\n');
replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  '  [ugetsuFilmHistoryProfile.scenarioId]: ugetsuFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [ugetsuFilmHistoryProfile.scenarioId]: ugetsuFilmHistoryProfile,\n  [aManEscapedFilmHistoryProfile.scenarioId]: aManEscapedFilmHistoryProfile,\n  scenario_the_machinist_2004:');

replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { ugetsuProductionCaseVerification } from "./scenarioProductionVerificationUgetsu";\n',
  'import { ugetsuProductionCaseVerification } from "./scenarioProductionVerificationUgetsu";\nimport { aManEscapedProductionCaseVerification } from "./scenarioProductionVerificationAManEscaped";\n');
replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  ugetsuProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  ugetsuProductionCaseVerification,\n  aManEscapedProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,');

replaceOnce("scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 442;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 442;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 443;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 443;");
replaceOnce("scripts/production-case-rest-audit.mjs",
  '  "chapterThirteenUgetsuExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenUgetsuExpansion.ts",\n  "chapterThirteenAManEscapedExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 442;", "const EXPECTED_ATLAS_COUNT = 443;");
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterThirteenUgetsuExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenUgetsuExpansion.ts",\n  "chapterThirteenAManEscapedExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 442;", "const EXPECTED_ATLAS_COUNT = 443;");
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '  "chapterThirteenUgetsuExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenUgetsuExpansion.ts",\n  "chapterThirteenAManEscapedExpansion.ts",\n  "modernCanonExpansion.ts",');
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '{ title: "A Man Escaped", originalTitle: "Un condamné à mort s\'est échappé", year: 1956, aliases: ["Un condamne a mort s\'est echappe", "A Man Escaped"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "A Man Escaped", originalTitle: "Un condamné à mort s\'est échappé", year: 1956, aliases: ["Un condamne a mort s\'est echappe", "A Man Escaped"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_a_man_escaped_1956", chapterFunction:');

replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 442;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 443;/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 442);\n  assert.equal(resolved.atlas.actualCount, 442);',
  '  assert.equal(resolved.atlas.expectedCount, 443);\n  assert.equal(resolved.atlas.actualCount, 443);');

replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  "Ugetsu",\n];\nconst exactP1Queue = [\n  "A Man Escaped",\n];',
  '  "Ugetsu",\n  "A Man Escaped",\n];\nconst exactP1Queue: string[] = [];');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 442;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 443;/);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 442);\n  assert.equal(resolved.atlas.actualCount, 442);',
  '  assert.equal(resolved.atlas.expectedCount, 443);\n  assert.equal(resolved.atlas.actualCount, 443);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(byTitle.get("Ugetsu")?.scenarioId, "scenario_ugetsu_1953");\n});',
  '  assert.equal(byTitle.get("Ugetsu")?.scenarioId, "scenario_ugetsu_1953");\n  assert.equal(byTitle.get("A Man Escaped")?.scenarioId, "scenario_a_man_escaped_1956");\n});');

console.log("Materialized permanent Chapter 13 A Man Escaped integration changes.");
