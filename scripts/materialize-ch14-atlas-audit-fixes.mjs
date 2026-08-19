import { readFileSync, writeFileSync } from "node:fs";

function replaceOnce(filePath, search, replacement) {
  const source = readFileSync(filePath, "utf8");
  const first = source.indexOf(search);
  if (first < 0) throw new Error(`${filePath}: missing replacement target: ${search.slice(0, 120)}`);
  if (source.indexOf(search, first + search.length) >= 0) throw new Error(`${filePath}: replacement target is not unique: ${search.slice(0, 120)}`);
  writeFileSync(filePath, source.slice(0, first) + replacement + source.slice(first + search.length));
}

const auditPath = "scripts/film-history-chapter-fourteen-atlas-audit.mjs";
replaceOnce(
  auditPath,
  '{ title: "The 400 Blows", originalTitle: "Les quatre cents coups", year: 1959, aliases: ["Les 400 coups", "The 400 Blows"], role: "missing_core_probe", decisionIfMissing: "P0", chapterFunction:',
  '{ title: "The 400 Blows", originalTitle: "Les quatre cents coups", year: 1959, aliases: ["Les 400 coups", "The 400 Blows"], role: "chapter_thirteen_handoff", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_the_400_blows_1959", chapterFunction:',
);
replaceOnce(
  auditPath,
  '{ title: "Breathless", originalTitle: "À bout de souffle", year: 1960, aliases: ["A bout de souffle", "Breathless"], role: "missing_core_probe", decisionIfMissing: "P0", chapterFunction:',
  '{ title: "Breathless", originalTitle: "À bout de souffle", year: 1960, aliases: ["A bout de souffle", "Breathless"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_breathless_1960", chapterFunction:',
);
replaceOnce(
  auditPath,
  '{ title: "Cléo from 5 to 7", originalTitle: "Cléo de 5 à 7", year: 1962, aliases: ["Cleo from 5 to 7", "Cleo de 5 a 7"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Cléo from 5 to 7", originalTitle: "Cléo de 5 à 7", year: 1962, aliases: ["Cleo from 5 to 7", "Cleo de 5 a 7"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_cleo_from_5_to_7_1962", chapterFunction:',
);
replaceOnce(
  auditPath,
  '{ title: "Daisies", originalTitle: "Sedmikrásky", year: 1966, aliases: ["Sedmikrasky", "Daisies"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
  '{ title: "Daisies", originalTitle: "Sedmikrásky", year: 1966, aliases: ["Sedmikrasky", "Daisies"], role: "anchor_film", decisionIfMissing: "EXISTING_REQUIRED", expectedScenarioId: "scenario_daisies_1966", chapterFunction:',
);

const chapter14Contract = "src/core/filmHistoryChapterFourteenAuditContract.test.ts";
replaceOnce(chapter14Contract, '  "Hiroshima mon amour",\n  "L\'Avventura",', '  "Hiroshima mon amour",\n  "The 400 Blows",\n  "Breathless",\n  "L\'Avventura",');
replaceOnce(chapter14Contract, '  "Jules and Jim",\n  "8½",', '  "Jules and Jim",\n  "Cléo from 5 to 7",\n  "8½",');
replaceOnce(chapter14Contract, '  "Closely Watched Trains",\n  "The Firemen\'s Ball",', '  "Closely Watched Trains",\n  "Daisies",\n  "The Firemen\'s Ball",');
replaceOnce(chapter14Contract, 'const exactP0Queue = ["The 400 Blows", "Breathless"];', 'const exactP0Queue: string[] = [];');
replaceOnce(chapter14Contract, 'const exactP1Queue = ["Cléo from 5 to 7", "Black Girl", "Daisies", "Memories of Underdevelopment"];', 'const exactP1Queue = ["Black Girl", "Memories of Underdevelopment"];');
replaceOnce(
  chapter14Contract,
  '  assert.equal(byTitle.get("Hiroshima mon amour")?.scenarioId, "scenario_hiroshima_mon_amour_1959");',
  '  assert.equal(byTitle.get("Hiroshima mon amour")?.scenarioId, "scenario_hiroshima_mon_amour_1959");\n  assert.equal(byTitle.get("The 400 Blows")?.scenarioId, "scenario_the_400_blows_1959");\n  assert.equal(byTitle.get("Breathless")?.scenarioId, "scenario_breathless_1960");',
);
replaceOnce(
  chapter14Contract,
  '  assert.equal(byTitle.get("Jules and Jim")?.scenarioId, "scenario_jules_and_jim_1962");',
  '  assert.equal(byTitle.get("Jules and Jim")?.scenarioId, "scenario_jules_and_jim_1962");\n  assert.equal(byTitle.get("Cléo from 5 to 7")?.scenarioId, "scenario_cleo_from_5_to_7_1962");',
);
replaceOnce(
  chapter14Contract,
  '  assert.equal(byTitle.get("Closely Watched Trains")?.scenarioId, "scenario_closely_watched_trains_1966");',
  '  assert.equal(byTitle.get("Closely Watched Trains")?.scenarioId, "scenario_closely_watched_trains_1966");\n  assert.equal(byTitle.get("Daisies")?.scenarioId, "scenario_daisies_1966");',
);

replaceOnce(
  "src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  'npm run audit:film-history-ch12 && npm run audit:film-history-ch13 && npm run typecheck',
  'npm run audit:film-history-ch12 && npm run audit:film-history-ch13 && npm run audit:film-history-ch14 && npm run typecheck',
);
replaceOnce(
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  'npm run audit:film-history-ch11 && npm run audit:film-history-ch12 && npm run audit:film-history-ch13 && npm run typecheck',
  'npm run audit:film-history-ch11 && npm run audit:film-history-ch12 && npm run audit:film-history-ch13 && npm run audit:film-history-ch14 && npm run typecheck',
);

console.log("Chapter 14 audit reconciliation fixes applied");
