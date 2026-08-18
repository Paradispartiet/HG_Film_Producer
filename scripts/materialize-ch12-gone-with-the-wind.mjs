import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, before, after) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`${filePath}: expected text not found: ${before.slice(0, 140)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error(`${filePath}: expected text is not unique: ${before.slice(0, 140)}`);
  writeFileSync(filePath, source.slice(0, first) + after + source.slice(first + before.length));
}

replaceOnce("src/ui/data/filmScenarios.ts",
  'import { mergeChapterTwelveTopHatExpansion } from "../../core/chapterTwelveTopHatExpansion.js";\n',
  'import { mergeChapterTwelveTopHatExpansion } from "../../core/chapterTwelveTopHatExpansion.js";\nimport { mergeChapterTwelveGoneWithTheWindExpansion } from "../../core/chapterTwelveGoneWithTheWindExpansion.js";\n');
replaceOnce("src/ui/data/filmScenarios.ts",
  'const chapterTwelveTopHatScenarios = mergeChapterTwelveTopHatExpansion(chapterTwelveItHappenedOneNightScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveTopHatScenarios);',
  'const chapterTwelveTopHatScenarios = mergeChapterTwelveTopHatExpansion(chapterTwelveItHappenedOneNightScenarios);\nconst chapterTwelveGoneWithTheWindScenarios = mergeChapterTwelveGoneWithTheWindExpansion(chapterTwelveTopHatScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveGoneWithTheWindScenarios);');
replaceOnce("src/ui/data/filmScenarios.ts",
  '+manual_chapter_twelve_top_hat_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_twelve_top_hat_expansion_2026+manual_chapter_twelve_gone_with_the_wind_expansion_2026+manual_modern_indie_asian_prize_expansion_2026');
replaceOnce("src/ui/data/filmScenarios.ts",
  "Chapter 12 The Public Enemy, Dracula, 42nd Street, Scarface, It Happened One Night, and Top Hat studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
  "Chapter 12 The Public Enemy, Dracula, 42nd Street, Scarface, It Happened One Night, Top Hat, and Gone with the Wind studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion");

replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  'import { topHatFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreTopHat";\n',
  'import { topHatFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreTopHat";\nimport { goneWithTheWindFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreGoneWithTheWind";\n');
replaceOnce("src/ui/data/scenarioFilmStudyMap.ts",
  '  [topHatFilmHistoryProfile.scenarioId]: topHatFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [topHatFilmHistoryProfile.scenarioId]: topHatFilmHistoryProfile,\n  [goneWithTheWindFilmHistoryProfile.scenarioId]: goneWithTheWindFilmHistoryProfile,\n  scenario_the_machinist_2004:');

replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { topHatProductionCaseVerification } from "./scenarioProductionVerificationTopHat";\n',
  'import { topHatProductionCaseVerification } from "./scenarioProductionVerificationTopHat";\nimport { goneWithTheWindProductionCaseVerification } from "./scenarioProductionVerificationGoneWithTheWind";\n');
replaceOnce("src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  topHatProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  topHatProductionCaseVerification,\n  goneWithTheWindProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,');

replaceOnce("scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 436;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 436;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 437;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 437;");
replaceOnce("scripts/production-case-rest-audit.mjs",
  '  "chapterTwelveTopHatExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveTopHatExpansion.ts",\n  "chapterTwelveGoneWithTheWindExpansion.ts",\n  "modernCanonExpansion.ts",');

replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 436;", "const EXPECTED_ATLAS_COUNT = 437;");
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterTwelveTopHatExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveTopHatExpansion.ts",\n  "chapterTwelveGoneWithTheWindExpansion.ts",\n  "modernCanonExpansion.ts",');
replaceOnce("scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '{ title: "Gone with the Wind", originalTitle: "Gone with the Wind", year: 1939, aliases: [], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Gone with the Wind", originalTitle: "Gone with the Wind", year: 1939, aliases: [], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_gone_with_the_wind_1939", chapterFunction:');

replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  "Top Hat",\n];', '  "Top Hat",\n  "Gone with the Wind",\n];');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 436;/);', '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 437;/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /expectedScenarioId: "scenario_top_hat_1935"/);',
  '  assert.match(audit, /expectedScenarioId: "scenario_top_hat_1935"/);\n  assert.match(audit, /expectedScenarioId: "scenario_gone_with_the_wind_1939"/);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 436);\n  assert.equal(resolved.atlas.actualCount, 436);',
  '  assert.equal(resolved.atlas.expectedCount, 437);\n  assert.equal(resolved.atlas.actualCount, 437);');
replaceOnce("src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(byTitle.get("Top Hat")?.scenarioId, "scenario_top_hat_1935");\n});',
  '  assert.equal(byTitle.get("Top Hat")?.scenarioId, "scenario_top_hat_1935");\n  assert.equal(byTitle.get("Gone with the Wind")?.scenarioId, "scenario_gone_with_the_wind_1939");\n});');

console.log("Materialized permanent Chapter 12 Gone with the Wind integration changes.");
