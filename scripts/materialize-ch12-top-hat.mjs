import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 140)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 140)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce("src/ui/data/filmScenarios.ts",
  'import { mergeChapterTwelveItHappenedOneNightExpansion } from "../../core/chapterTwelveItHappenedOneNightExpansion.js";\n',
  'import { mergeChapterTwelveItHappenedOneNightExpansion } from "../../core/chapterTwelveItHappenedOneNightExpansion.js";\nimport { mergeChapterTwelveTopHatExpansion } from "../../core/chapterTwelveTopHatExpansion.js";\n');
replaceOnce("src/ui/data/filmScenarios.ts",
  'const chapterTwelveItHappenedOneNightScenarios = mergeChapterTwelveItHappenedOneNightExpansion(chapterTwelveScarfaceScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveItHappenedOneNightScenarios);',
  'const chapterTwelveItHappenedOneNightScenarios = mergeChapterTwelveItHappenedOneNightExpansion(chapterTwelveScarfaceScenarios);\nconst chapterTwelveTopHatScenarios = mergeChapterTwelveTopHatExpansion(chapterTwelveItHappenedOneNightScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveTopHatScenarios);');
replaceOnce("src/ui/data/filmScenarios.ts",
  '+manual_chapter_twelve_it_happened_one_night_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_twelve_it_happened_one_night_expansion_2026+manual_chapter_twelve_top_hat_expansion_2026+manual_modern_indie_asian_prize_expansion_2026');
replaceOnce("src/ui/data/filmScenarios.ts",
  "Chapter 12 The Public Enemy, Dracula, 42nd Street, Scarface, and It Happened One Night studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
  "Chapter 12 The Public Enemy, Dracula, 42nd Street, Scarface, It Happened One Night, and Top Hat studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion");

replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  'import { itHappenedOneNightFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreItHappenedOneNight";\n',
  'import { itHappenedOneNightFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreItHappenedOneNight";\nimport { topHatFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreTopHat";\n');
replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  '  [itHappenedOneNightFilmHistoryProfile.scenarioId]: itHappenedOneNightFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [itHappenedOneNightFilmHistoryProfile.scenarioId]: itHappenedOneNightFilmHistoryProfile,\n  [topHatFilmHistoryProfile.scenarioId]: topHatFilmHistoryProfile,\n  scenario_the_machinist_2004:');

replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { itHappenedOneNightProductionCaseVerification } from "./scenarioProductionVerificationItHappenedOneNight";\n',
  'import { itHappenedOneNightProductionCaseVerification } from "./scenarioProductionVerificationItHappenedOneNight";\nimport { topHatProductionCaseVerification } from "./scenarioProductionVerificationTopHat";\n');
replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  itHappenedOneNightProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  itHappenedOneNightProductionCaseVerification,\n  topHatProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,');

replaceOnce("scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 435;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 435;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 436;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 436;");
replaceOnce("scripts/production-case-rest-audit.mjs",
  '  "chapterTwelveItHappenedOneNightExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveItHappenedOneNightExpansion.ts",\n  "chapterTwelveTopHatExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 435;", "const EXPECTED_ATLAS_COUNT = 436;");
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterTwelveItHappenedOneNightExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveItHappenedOneNightExpansion.ts",\n  "chapterTwelveTopHatExpansion.ts",\n  "modernCanonExpansion.ts",');
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '{ title: "Top Hat", originalTitle: "Top Hat", year: 1935, aliases: [], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Top Hat", originalTitle: "Top Hat", year: 1935, aliases: [], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_top_hat_1935", chapterFunction:');

replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  "It Happened One Night",\n];', '  "It Happened One Night",\n  "Top Hat",\n];');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 435;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 436;/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /expectedScenarioId: "scenario_it_happened_one_night_1934"/);',
  '  assert.match(audit, /expectedScenarioId: "scenario_it_happened_one_night_1934"/);\n  assert.match(audit, /expectedScenarioId: "scenario_top_hat_1935"/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 435);\n  assert.equal(resolved.atlas.actualCount, 435);',
  '  assert.equal(resolved.atlas.expectedCount, 436);\n  assert.equal(resolved.atlas.actualCount, 436);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(byTitle.get("It Happened One Night")?.scenarioId, "scenario_it_happened_one_night_1934");\n});',
  '  assert.equal(byTitle.get("It Happened One Night")?.scenarioId, "scenario_it_happened_one_night_1934");\n  assert.equal(byTitle.get("Top Hat")?.scenarioId, "scenario_top_hat_1935");\n});');

console.log("Materialized permanent Chapter 12 Top Hat integration changes.");
