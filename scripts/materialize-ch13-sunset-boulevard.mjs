import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 160)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 160)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce("src/ui/data/filmScenarios.ts",
  'import { mergeChapterThirteenRedShoesExpansion } from "../../core/chapterThirteenRedShoesExpansion.js";\n',
  'import { mergeChapterThirteenRedShoesExpansion } from "../../core/chapterThirteenRedShoesExpansion.js";\nimport { mergeChapterThirteenSunsetBoulevardExpansion } from "../../core/chapterThirteenSunsetBoulevardExpansion.js";\n');
replaceOnce("src/ui/data/filmScenarios.ts",
  'const chapterThirteenRedShoesScenarios = mergeChapterThirteenRedShoesExpansion(chapterThirteenPaisanScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenRedShoesScenarios);',
  'const chapterThirteenRedShoesScenarios = mergeChapterThirteenRedShoesExpansion(chapterThirteenPaisanScenarios);\nconst chapterThirteenSunsetBoulevardScenarios = mergeChapterThirteenSunsetBoulevardExpansion(chapterThirteenRedShoesScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenSunsetBoulevardScenarios);');
replaceOnce("src/ui/data/filmScenarios.ts",
  '+manual_chapter_thirteen_red_shoes_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_thirteen_red_shoes_expansion_2026+manual_chapter_thirteen_sunset_boulevard_expansion_2026+manual_modern_indie_asian_prize_expansion_2026');
replaceOnce("src/ui/data/filmScenarios.ts",
  'Chapter 13 Paisan and The Red Shoes postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion',
  'Chapter 13 Paisan, The Red Shoes, and Sunset Boulevard postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion');

replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  'import { redShoesFilmHistoryProfile } from "./scenarioFilmStudyPostwarRedShoes";\n',
  'import { redShoesFilmHistoryProfile } from "./scenarioFilmStudyPostwarRedShoes";\nimport { sunsetBoulevardFilmHistoryProfile } from "./scenarioFilmStudyPostwarSunsetBoulevard";\n');
replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  '  [redShoesFilmHistoryProfile.scenarioId]: redShoesFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [redShoesFilmHistoryProfile.scenarioId]: redShoesFilmHistoryProfile,\n  [sunsetBoulevardFilmHistoryProfile.scenarioId]: sunsetBoulevardFilmHistoryProfile,\n  scenario_the_machinist_2004:');

replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { redShoesProductionCaseVerification } from "./scenarioProductionVerificationRedShoes";\n',
  'import { redShoesProductionCaseVerification } from "./scenarioProductionVerificationRedShoes";\nimport { sunsetBoulevardProductionCaseVerification } from "./scenarioProductionVerificationSunsetBoulevard";\n');
replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  redShoesProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  redShoesProductionCaseVerification,\n  sunsetBoulevardProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,');

replaceOnce("scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 439;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 439;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 440;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 440;");
replaceOnce("scripts/production-case-rest-audit.mjs",
  '  "chapterThirteenRedShoesExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenRedShoesExpansion.ts",\n  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 439;", "const EXPECTED_ATLAS_COUNT = 440;");
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterThirteenRedShoesExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenRedShoesExpansion.ts",\n  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 439;", "const EXPECTED_ATLAS_COUNT = 440;");
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '  "chapterThirteenRedShoesExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterThirteenRedShoesExpansion.ts",\n  "chapterThirteenSunsetBoulevardExpansion.ts",\n  "modernCanonExpansion.ts",');
replaceOnce("scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  '{ title: "Sunset Boulevard", originalTitle: "Sunset Blvd.", year: 1950, aliases: ["Sunset Boulevard", "Sunset Blvd"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Sunset Boulevard", originalTitle: "Sunset Blvd.", year: 1950, aliases: ["Sunset Boulevard", "Sunset Blvd"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_sunset_boulevard_1950", chapterFunction:');

replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 439;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 440;/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 439);\n  assert.equal(resolved.atlas.actualCount, 439);',
  '  assert.equal(resolved.atlas.expectedCount, 440);\n  assert.equal(resolved.atlas.actualCount, 440);');

replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  "The Red Shoes",\n];\nconst exactP1Queue = [\n  "Sunset Boulevard",',
  '  "The Red Shoes",\n  "Sunset Boulevard",\n];\nconst exactP1Queue = [');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 439;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 440;/);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 439);\n  assert.equal(resolved.atlas.actualCount, 439);',
  '  assert.equal(resolved.atlas.expectedCount, 440);\n  assert.equal(resolved.atlas.actualCount, 440);');
replaceOnce("src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  '  assert.equal(byTitle.get("The Red Shoes")?.scenarioId, "scenario_the_red_shoes_1948");\n});',
  '  assert.equal(byTitle.get("The Red Shoes")?.scenarioId, "scenario_the_red_shoes_1948");\n  assert.equal(byTitle.get("Sunset Boulevard")?.scenarioId, "scenario_sunset_boulevard_1950");\n});');

console.log("Materialized permanent Chapter 13 Sunset Boulevard integration changes.");
