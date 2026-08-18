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
  'import { mergeChapterTwelve42ndStreetExpansion } from "../../core/chapterTwelve42ndStreetExpansion.js";\n',
  'import { mergeChapterTwelve42ndStreetExpansion } from "../../core/chapterTwelve42ndStreetExpansion.js";\nimport { mergeChapterTwelveScarfaceExpansion } from "../../core/chapterTwelveScarfaceExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'const chapterTwelve42ndStreetScenarios = mergeChapterTwelve42ndStreetExpansion(chapterTwelveDraculaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelve42ndStreetScenarios);',
  'const chapterTwelve42ndStreetScenarios = mergeChapterTwelve42ndStreetExpansion(chapterTwelveDraculaScenarios);\nconst chapterTwelveScarfaceScenarios = mergeChapterTwelveScarfaceExpansion(chapterTwelve42ndStreetScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterTwelveScarfaceScenarios);',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  '+manual_chapter_twelve_42nd_street_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
  '+manual_chapter_twelve_42nd_street_expansion_2026+manual_chapter_twelve_scarface_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "Chapter 12 The Public Enemy, Dracula, and 42nd Street studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
  "Chapter 12 The Public Enemy, Dracula, 42nd Street, and Scarface studio-and-genre-system expansions, modern independent/Asian/prize-cinema expansion",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { fortySecondStreetFilmHistoryProfile } from "./scenarioFilmStudyStudioGenre42ndStreet";\n',
  'import { fortySecondStreetFilmHistoryProfile } from "./scenarioFilmStudyStudioGenre42ndStreet";\nimport { scarfaceFilmHistoryProfile } from "./scenarioFilmStudyStudioGenreScarface";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  '  [fortySecondStreetFilmHistoryProfile.scenarioId]: fortySecondStreetFilmHistoryProfile,\n  scenario_the_machinist_2004:',
  '  [fortySecondStreetFilmHistoryProfile.scenarioId]: fortySecondStreetFilmHistoryProfile,\n  [scarfaceFilmHistoryProfile.scenarioId]: scarfaceFilmHistoryProfile,\n  scenario_the_machinist_2004:',
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { fortySecondStreetProductionCaseVerification } from "./scenarioProductionVerification42ndStreet";\n',
  'import { fortySecondStreetProductionCaseVerification } from "./scenarioProductionVerification42ndStreet";\nimport { scarfaceProductionCaseVerification } from "./scenarioProductionVerificationScarface";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  '  fortySecondStreetProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
  '  fortySecondStreetProductionCaseVerification,\n  scarfaceProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
);

replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  "const EXPECTED_PLAYABLE_SCENARIOS = 433;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 433;",
  "const EXPECTED_PLAYABLE_SCENARIOS = 434;\nconst EXPECTED_VERIFIED_PRODUCTION_CASES = 434;",
);
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterTwelve42ndStreetExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelve42ndStreetExpansion.ts",\n  "chapterTwelveScarfaceExpansion.ts",\n  "modernCanonExpansion.ts",',
);

replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "const EXPECTED_ATLAS_COUNT = 433;",
  "const EXPECTED_ATLAS_COUNT = 434;",
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '  "chapterTwelve42ndStreetExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterTwelve42ndStreetExpansion.ts",\n  "chapterTwelveScarfaceExpansion.ts",\n  "modernCanonExpansion.ts",',
);
replaceOnce(
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  '{ title: "Scarface", originalTitle: "Scarface", year: 1932, aliases: ["Scarface: The Shame of the Nation"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Scarface", originalTitle: "Scarface", year: 1932, aliases: ["Scarface: The Shame of the Nation", "Scarface, The Shame of a Nation", "The Menace", "The Scar"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_scarface_1932", chapterFunction:',
);

replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  "42nd Street",\n];',
  '  "42nd Street",\n  "Scarface",\n];',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 433;/);',
  '  assert.match(audit, /const EXPECTED_ATLAS_COUNT = 434;/);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.match(audit, /expectedScenarioId: "scenario_42nd_street_1933"/);',
  '  assert.match(audit, /expectedScenarioId: "scenario_42nd_street_1933"/);\n  assert.match(audit, /expectedScenarioId: "scenario_scarface_1932"/);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(resolved.atlas.expectedCount, 433);\n  assert.equal(resolved.atlas.actualCount, 433);',
  '  assert.equal(resolved.atlas.expectedCount, 434);\n  assert.equal(resolved.atlas.actualCount, 434);',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  '  assert.equal(byTitle.get("42nd Street")?.scenarioId, "scenario_42nd_street_1933");\n});',
  '  assert.equal(byTitle.get("42nd Street")?.scenarioId, "scenario_42nd_street_1933");\n  assert.equal(byTitle.get("Scarface")?.scenarioId, "scenario_scarface_1932");\n});',
);

console.log("Materialized permanent Chapter 12 Scarface integration changes.");
