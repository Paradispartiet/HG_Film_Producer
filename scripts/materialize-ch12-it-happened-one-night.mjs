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
  'import { mergeChapterTwelveScarfaceExpansion } from "../../core/chapterTwelveScarfaceExpansion.js";\n',
  'import { mergeChapterTwelveScarfaceExpansion } from "../../core/chapterTwelveScarfaceExpansion.js";\nimport { mergeChapterTwelveItHappenedOneNightExpansion } from "../../core/chapterTwelveItHappenedOneNightExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterTwelveScarfaceScenarios = mergeChapterTwelveScarfaceExpansion(chapterTwelve42ndStreetScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveScarfaceScenarios);',
  'const chapterTwelveScarfaceScenarios = mergeChapterTwelveScarfaceExpansion(chapterTwelve42ndStreetScenarios);\nconst chapterTwelveItHappenedOneNightScenarios = mergeChapterTwelveItHappenedOneNightExpansion(chapterTwelveScarfaceScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveItHappenedOneNightScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_twelve_scarface_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_twelve_scarface_expansion_2026+manual_chapter_twelve_it_happened_one_night_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "Chapter 12 The Public Enemy, Dracula, 42nd Street, and Scarface studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
  "Chapter 12 The Public Enemy, Dracula, 42nd Street, Scarface, and It Happened One Night studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { scarfaceFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreScarface";\n',
  'import { scarfaceFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreScarface";\nimport { itHappenedOneNightFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreItHappenedOneNight";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [scarfaceFilmHistoryProfile.scenarioId]: scarfaceFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [scarfaceFilmHistoryProfile.scenarioId]: scarfaceFilmHistoryProfile,\n  [itHappenedOneNightFilmHistoryProfile.scenarioId]: itHappenedOneNightFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { scarfaceProductionCaseVerification } from "./scenarioProductionVerificationScarface";\n',
  'import { scarfaceProductionCaseVerification } from "./scenarioProductionVerificationScarface";\nimport { itHappenedOneNightProductionCaseVerification } from "./scenarioProductionVerificationItHappenedOneNight";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  scarfaceProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  scarfaceProductionCaseVerification,\n  itHappenedOneNightProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 434;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 434;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 435;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 435;",
);
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterTwelveScarfaceExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveScarfaceExpansion.ts",\n  "chapterTwelveItHappenedOneNightExpansion.ts",\n  "modernCanonExpansion.ts",',
);

replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 434;",
  "const EXPECTED_ATLAS_COUNT = 435;",
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterTwelveScarfaceExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelveScarfaceExpansion.ts",\n  "chapterTwelveItHappenedOneNightExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '{ title: "It Happened One Night", originalTitle: "It Happened One Night", year: 1934, aliases: [], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "It Happened One Night", originalTitle: "It Happened One Night", year: 1934, aliases: ["Night Bus"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_it_happened_one_night_1934", chapterFunction:',
);

replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  "Scarface",\n];',
  '  "Scarface",\n  "It Happened One Night",\n];',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 434;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 435;/);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /expectedScenarioId: "scenario_scarface_1932"/);',
  '  assert.match(audit, /expectedScenarioId: "scenario_scarface_1932"/);\n  assert.match(audit, /expectedScenarioId: "scenario_it_happened_one_night_1934"/);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 434);\n  assert.equal(resolved.atlas.actualCount, 434);',
  '  assert.equal(resolved.atlas.expectedCount, 435);\n  assert.equal(resolved.atlas.actualCount, 435);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(byTitle.get("Scarface")?.scenarioId, "scenario_scarface_1932");\n});',
  '  assert.equal(byTitle.get("Scarface")?.scenarioId, "scenario_scarface_1932");\n  assert.equal(byTitle.get("It Happened One Night")?.scenarioId, "scenario_it_happened_one_night_1934");\n});',
);

console.log("Materialized permanent Chapter 12 It Happened One Night integration changes.");
