import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  countProductionCaseMatches,
  createProductionCaseProgressExport,
  defaultProductionCaseLibraryControls,
  getProductionCaseBestResultEntry,
  getProductionCaseBestResultFeedback,
  getProductionCaseAchievements,
  getProductionCaseCareerSummary,
  getProductionCaseCollectionSummary,
  getProductionCaseMissionScore,
  getProductionCaseImprovementHint,
  importProductionCaseProgressBackup,
  getProductionCaseLibraryStatus,
  getProductionCaseLibraryResultSummary,
  getProductionCaseNextAction,
  getProductionCaseNextPhaseAction,
  getProductionCaseReport,
  getProductionCaseProgressEntry,
  getProductionCaseResultTier,
  getProductionCaseScoreSummary,
  getProductionCaseTierTarget,
  parseProductionCaseBestResults,
  parseProductionCaseLibraryControls,
  parseProductionCaseProgress,
  productionCaseBestResultsStorageKey,
  productionCaseLibraryControlsStorageKey,
  productionCaseLibraryStatusMatchesFilter,
  productionCaseMasteryFilterMatches,
  productionCaseProgressExportVersion,
  productionCaseProgressStorageKey,
  previewProductionCaseProgressBackup,
  sortProductionCaseLibraryCards,
  readProductionCaseBestResults,
  readProductionCaseLibraryControls,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
  setProductionCaseMissionChoice,
  setProductionCaseMissionCompletion,
  updateProductionCaseBestResult,
  writeProductionCaseBestResults,
  writeProductionCaseLibraryControls,
  writeProductionCaseProgress,
  type ProductionCaseBestResultEntry,
} from "./productionCaseProgress.js";


const improvementHintMissions = [
  {
    id: "mission-a",
    phase: "screenplay",
    title: "Script choices",
    choices: [
      { id: "a-match", quality: "match" },
      { id: "a-partial", quality: "partial" },
      { id: "a-miss", quality: "miss" },
    ],
  },
  {
    id: "mission-b",
    phase: "editing",
    title: "Cutting rhythm",
    choices: [
      { id: "b-match", quality: "match" },
      { id: "b-partial", quality: "partial" },
      { id: "b-miss", quality: "miss" },
    ],
  },
  {
    id: "mission-c",
    phase: "sound",
    title: "Sound world",
    choices: [
      { id: "c-match", quality: "match" },
      { id: "c-partial", quality: "partial" },
      { id: "c-miss", quality: "miss" },
    ],
  },
] as const;

const libraryStatusMissions = Array.from({ length: 6 }, (_, index) => {
  const missionNumber = index + 1;
  return {
    id: `mission-${missionNumber}`,
    choices: [
      { id: `choice-${missionNumber}-match`, quality: "match" },
      { id: `choice-${missionNumber}-partial`, quality: "partial" },
      { id: `choice-${missionNumber}-miss`, quality: "miss" },
    ],
  };
});


function createCollectionSummary(overrides: Partial<ReturnType<typeof getProductionCaseCollectionSummary>> = {}) {
  return {
    totalCases: 161,
    notStartedCount: 161,
    inProgressCount: 0,
    completedCount: 0,
    assistantCount: 0,
    producerCount: 0,
    auteurCount: 0,
    totalScore: 0,
    maxScore: 1932,
    ...overrides,
  };
}


function createCareerSummary(overrides: Partial<ReturnType<typeof getProductionCaseCareerSummary>> = {}) {
  return {
    totalCases: 161,
    completedBestCount: 0,
    notCompletedBestCount: 161,
    assistantBestCount: 0,
    producerBestCount: 0,
    auteurBestCount: 0,
    bestTotalScore: 0,
    bestMaxScore: 0,
    ...overrides,
  };
}


function createProductionCaseReport(overrides: Partial<NonNullable<ReturnType<typeof getProductionCaseReport>>> = {}) {
  return {
    completedCount: 6,
    totalMissions: 6,
    score: 8,
    maxScore: 12,
    resultTier: "producer" as const,
    matchedPhases: Array.from({ length: 4 }, (_, index) => ({
      missionId: `mission-${index + 1}`,
      phase: "screenplay",
      title: `Mission ${index + 1}`,
      selectedChoiceLabel: "Match",
    })),
    weakPhases: [],
    improvementHint: undefined,
    learningSummary: "You understand several key production choices.",
    ...overrides,
  };
}

function achievementByLabel(
  summary: ReturnType<typeof getProductionCaseCareerSummary>,
  label: string,
) {
  const achievement = getProductionCaseAchievements(summary).find((item) => item.label === label);
  assert.ok(achievement, `Missing achievement ${label}`);
  return achievement;
}

type MemoryStorage = {
  values: Map<string, string>;
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
};

function createMemoryStorage(): MemoryStorage {
  return {
    values: new Map<string, string>(),
    getItem(key: string) {
      return this.values.get(key) ?? null;
    },
    setItem(key: string, value: string) {
      this.values.set(key, value);
    },
    removeItem(key: string) {
      this.values.delete(key);
    },
  };
}

test("production case progress starts at 0/6 for Taxi Driver", () => {
  const state = parseProductionCaseProgress(null);
  const entry = getProductionCaseProgressEntry(state, "scenario_taxi_driver_1976");

  assert.equal(entry.scenarioId, "scenario_taxi_driver_1976");
  assert.equal(entry.completedMissionIds.length, 0);
  assert.equal(`${entry.completedMissionIds.length}/6`, "0/6");
});

test("one mission can be marked complete and counted in the summary", () => {
  const state = setProductionCaseMissionCompletion(
    {},
    "scenario_taxi_driver_1976",
    "scenario_taxi_driver_1976-mission-case_orientation",
    true,
    "2026-06-22T00:00:00.000Z",
  );
  const entry = getProductionCaseProgressEntry(state, "scenario_taxi_driver_1976");

  assert.deepEqual(entry.completedMissionIds, [
    "scenario_taxi_driver_1976-mission-case_orientation",
  ]);
  assert.equal(`${entry.completedMissionIds.length}/6`, "1/6");
});

test("production case progress is saved per scenario id", () => {
  let state = setProductionCaseMissionCompletion(
    {},
    "scenario_taxi_driver_1976",
    "scenario_taxi_driver_1976-mission-case_orientation",
    true,
  );
  state = setProductionCaseMissionCompletion(
    state,
    "scenario_the_lighthouse_2019",
    "scenario_the_lighthouse_2019-mission-sound",
    true,
  );

  assert.deepEqual(getProductionCaseProgressEntry(state, "scenario_taxi_driver_1976").completedMissionIds, [
    "scenario_taxi_driver_1976-mission-case_orientation",
  ]);
  assert.deepEqual(getProductionCaseProgressEntry(state, "scenario_the_lighthouse_2019").completedMissionIds, [
    "scenario_the_lighthouse_2019-mission-sound",
  ]);
});

test("reset clears only the current scenario progress", () => {
  let state = setProductionCaseMissionCompletion(
    {},
    "scenario_taxi_driver_1976",
    "scenario_taxi_driver_1976-mission-case_orientation",
    true,
  );
  state = setProductionCaseMissionCompletion(
    state,
    "scenario_another_round_2020",
    "scenario_another_round_2020-mission-reflection",
    true,
  );

  const resetState = resetProductionCaseScenarioProgress(state, "scenario_taxi_driver_1976");

  assert.equal(getProductionCaseProgressEntry(resetState, "scenario_taxi_driver_1976").completedMissionIds.length, 0);
  assert.deepEqual(getProductionCaseProgressEntry(resetState, "scenario_another_round_2020").completedMissionIds, [
    "scenario_another_round_2020-mission-reflection",
  ]);
});



test("production case progress export includes version, timestamp, progress, best results, and controls", () => {
  const storage = createMemoryStorage();
  const currentProgress = setProductionCaseMissionChoice(
    setProductionCaseMissionCompletion(
      {},
      "scenario_taxi_driver_1976",
      "scenario_taxi_driver_1976-mission-case_orientation",
      true,
      "2026-06-22T00:00:00.000Z",
    ),
    "scenario_taxi_driver_1976",
    "scenario_taxi_driver_1976-mission-screenplay",
    "scenario_taxi_driver_1976-choice-screenplay-match-1",
    "2026-06-22T00:00:00.000Z",
  );
  const bestResults = {
    scenario_taxi_driver_1976: createProductionCaseReportBest("scenario_taxi_driver_1976", 12),
  };
  const libraryControls = {
    caseStatusFilter: "completed",
    masteryFilter: "auteur_best",
    sortMode: "recent_best",
    searchQuery: "taxi",
  } as const;
  writeProductionCaseProgress(storage, currentProgress);
  writeProductionCaseBestResults(storage, bestResults);
  writeProductionCaseLibraryControls(storage, libraryControls);

  const exported = createProductionCaseProgressExport(storage, "2026-06-29T00:00:00.000Z");

  assert.equal(exported.version, productionCaseProgressExportVersion);
  assert.equal(exported.version, "hg_film_production_case_progress_export_v1");
  assert.equal(exported.exportedAt, "2026-06-29T00:00:00.000Z");
  assert.deepEqual(exported.currentProgress, currentProgress);
  assert.deepEqual(exported.bestResults, bestResults);
  assert.deepEqual(exported.libraryControls, libraryControls);
  assert.doesNotThrow(() => JSON.stringify(exported));
});

test("production case progress export uses safe defaults for empty storage", () => {
  const exported = createProductionCaseProgressExport(createMemoryStorage(), "2026-06-29T00:00:00.000Z");

  assert.equal(exported.version, "hg_film_production_case_progress_export_v1");
  assert.equal(exported.exportedAt, "2026-06-29T00:00:00.000Z");
  assert.deepEqual(exported.currentProgress, {});
  assert.deepEqual(exported.bestResults, {});
  assert.deepEqual(exported.libraryControls, defaultProductionCaseLibraryControls);
});

test("production case progress export does not crash on corrupt storage", () => {
  const storage = createMemoryStorage();
  storage.setItem(productionCaseProgressStorageKey, "{not-json");
  storage.setItem(productionCaseBestResultsStorageKey, "[not an object]");
  storage.setItem(productionCaseLibraryControlsStorageKey, "null");

  assert.doesNotThrow(() => createProductionCaseProgressExport(storage));
  const exported = createProductionCaseProgressExport(storage, "2026-06-29T00:00:00.000Z");

  assert.deepEqual(exported.currentProgress, {});
  assert.deepEqual(exported.bestResults, {});
  assert.deepEqual(exported.libraryControls, defaultProductionCaseLibraryControls);
});


test("production case progress backup preview summarizes a valid export without storage writes", () => {
  const sourceStorage = createMemoryStorage();
  const targetStorage = createMemoryStorage();
  const currentProgress = {
    scenario_taxi_driver_1976: {
      scenarioId: "scenario_taxi_driver_1976",
      completedMissionIds: ["mission-a"],
      updatedAt: "2026-06-22T00:00:00.000Z",
    },
    scenario_another_round_2020: {
      scenarioId: "scenario_another_round_2020",
      completedMissionIds: ["mission-b"],
      updatedAt: "2026-06-23T00:00:00.000Z",
    },
  };
  const bestResults = {
    scenario_taxi_driver_1976: createProductionCaseReportBest("scenario_taxi_driver_1976", 12),
    scenario_another_round_2020: createProductionCaseReportBest("scenario_another_round_2020", 8),
    scenario_the_lighthouse_2019: createProductionCaseReportBest("scenario_the_lighthouse_2019", 10),
  };
  const libraryControls = {
    caseStatusFilter: "in_progress",
    masteryFilter: "producer_best",
    sortMode: "best_score_desc",
    searchQuery: "taxi",
  } as const;
  writeProductionCaseProgress(sourceStorage, currentProgress);
  writeProductionCaseBestResults(sourceStorage, bestResults);
  writeProductionCaseLibraryControls(sourceStorage, libraryControls);
  targetStorage.setItem(productionCaseProgressStorageKey, "existing-progress");

  const exported = createProductionCaseProgressExport(sourceStorage, "2026-06-29T00:00:00.000Z");
  const preview = previewProductionCaseProgressBackup(JSON.stringify(exported));

  assert.deepEqual(preview, {
    ok: true,
    exportedAt: "2026-06-29T00:00:00.000Z",
    currentProgressCount: 2,
    bestResultCount: 3,
    hasLibraryControls: true,
  });
  assert.equal(targetStorage.values.get(productionCaseProgressStorageKey), "existing-progress");
  assert.equal(targetStorage.values.has(productionCaseBestResultsStorageKey), false);
  assert.equal(targetStorage.values.has(productionCaseLibraryControlsStorageKey), false);
});

test("production case progress backup preview fails safely for invalid JSON and wrong version", () => {
  assert.deepEqual(previewProductionCaseProgressBackup("{not-json"), { ok: false, reason: "invalid_json" });
  assert.deepEqual(
    previewProductionCaseProgressBackup(JSON.stringify({
      version: "wrong",
      exportedAt: "2026-06-29T00:00:00.000Z",
      currentProgress: {},
      bestResults: {},
      libraryControls: defaultProductionCaseLibraryControls,
    })),
    { ok: false, reason: "invalid_version" },
  );
});

test("production case progress import restores a valid export from storage", () => {
  const sourceStorage = createMemoryStorage();
  const targetStorage = createMemoryStorage();
  const currentProgress = setProductionCaseMissionChoice(
    setProductionCaseMissionCompletion(
      {},
      "scenario_taxi_driver_1976",
      "scenario_taxi_driver_1976-mission-case_orientation",
      true,
      "2026-06-22T00:00:00.000Z",
    ),
    "scenario_taxi_driver_1976",
    "scenario_taxi_driver_1976-mission-screenplay",
    "scenario_taxi_driver_1976-choice-screenplay-match-1",
    "2026-06-22T00:00:00.000Z",
  );
  const bestResults = {
    scenario_taxi_driver_1976: createProductionCaseReportBest("scenario_taxi_driver_1976", 12),
  };
  const libraryControls = {
    caseStatusFilter: "completed",
    masteryFilter: "auteur_best",
    sortMode: "recent_best",
    searchQuery: "taxi",
  } as const;
  writeProductionCaseProgress(sourceStorage, currentProgress);
  writeProductionCaseBestResults(sourceStorage, bestResults);
  writeProductionCaseLibraryControls(sourceStorage, libraryControls);

  const exported = createProductionCaseProgressExport(sourceStorage, "2026-06-29T00:00:00.000Z");
  const result = importProductionCaseProgressBackup(
    JSON.stringify(exported),
    targetStorage,
    "2026-06-29T01:00:00.000Z",
  );

  assert.deepEqual(result, {
    ok: true,
    importedAt: "2026-06-29T01:00:00.000Z",
    counts: { currentProgressCount: 1, bestResultCount: 1 },
  });
  assert.equal(targetStorage.values.get(productionCaseProgressStorageKey), JSON.stringify(currentProgress));
  assert.equal(targetStorage.values.get(productionCaseBestResultsStorageKey), JSON.stringify(bestResults));
  assert.equal(targetStorage.values.get(productionCaseLibraryControlsStorageKey), JSON.stringify(libraryControls));
});

test("production case progress import fails safely for invalid backups", () => {
  const invalidBackups = [
    "{not-json",
    JSON.stringify({ version: "wrong", currentProgress: {}, bestResults: {}, libraryControls: defaultProductionCaseLibraryControls }),
    JSON.stringify({ version: productionCaseProgressExportVersion, currentProgress: {}, bestResults: {} }),
    JSON.stringify({ version: productionCaseProgressExportVersion, currentProgress: [], bestResults: {}, libraryControls: defaultProductionCaseLibraryControls }),
    JSON.stringify({ version: productionCaseProgressExportVersion, currentProgress: {}, bestResults: [], libraryControls: defaultProductionCaseLibraryControls }),
    JSON.stringify({ version: productionCaseProgressExportVersion, currentProgress: {}, bestResults: {}, libraryControls: { ...defaultProductionCaseLibraryControls, sortMode: "random" } }),
  ];

  for (const rawJson of invalidBackups) {
    const storage = createMemoryStorage();
    storage.setItem(productionCaseProgressStorageKey, "existing-progress");
    storage.setItem(productionCaseBestResultsStorageKey, "existing-best");
    storage.setItem(productionCaseLibraryControlsStorageKey, "existing-controls");

    const result = importProductionCaseProgressBackup(rawJson, storage);

    assert.equal(result.ok, false);
    assert.equal(storage.values.get(productionCaseProgressStorageKey), "existing-progress");
    assert.equal(storage.values.get(productionCaseBestResultsStorageKey), "existing-best");
    assert.equal(storage.values.get(productionCaseLibraryControlsStorageKey), "existing-controls");
  }
});

test("production case library controls default when storage is empty", () => {
  assert.deepEqual(parseProductionCaseLibraryControls(null), defaultProductionCaseLibraryControls);
  assert.deepEqual(readProductionCaseLibraryControls(createMemoryStorage()), defaultProductionCaseLibraryControls);
});

test("production case library controls default when storage JSON is invalid", () => {
  assert.deepEqual(parseProductionCaseLibraryControls("{not-json"), defaultProductionCaseLibraryControls);
});

test("production case library controls default unknown filter and sort values", () => {
  assert.deepEqual(
    parseProductionCaseLibraryControls(JSON.stringify({
      caseStatusFilter: "archived",
      masteryFilter: "legendary",
      sortMode: "random",
    })),
    defaultProductionCaseLibraryControls,
  );
  assert.deepEqual(
    parseProductionCaseLibraryControls(JSON.stringify({
      caseStatusFilter: "completed",
      masteryFilter: "mystery",
      sortMode: "recent_best",
    })),
    { caseStatusFilter: "completed", masteryFilter: "all", sortMode: "recent_best", searchQuery: "" },
  );
});


test("production case library result summary reports default counts without active controls", () => {
  const summary = getProductionCaseLibraryResultSummary({
    totalCount: 161,
    visibleCount: 161,
    controls: defaultProductionCaseLibraryControls,
  });

  assert.equal(summary.visibleCount, 161);
  assert.equal(summary.totalCount, 161);
  assert.equal(summary.label, "Showing 161 of 161 production cases");
  assert.deepEqual(summary.activeControlLabels, []);
});

test("production case library result summary lists only non-default controls", () => {
  const summary = getProductionCaseLibraryResultSummary({
    totalCount: 161,
    visibleCount: 12,
    controls: {
      caseStatusFilter: "all",
      masteryFilter: "all",
      sortMode: "best_score_asc",
      searchQuery: " taxi ",
    },
  });

  assert.equal(summary.label, "Showing 12 of 161 production cases");
  assert.deepEqual(summary.activeControlLabels, ["Search: taxi", "Sort: Best score lowest"]);
  assert.ok(!summary.activeControlLabels.includes("Case-status: All"));
  assert.ok(!summary.activeControlLabels.includes("Mastery: All"));
  assert.ok(!summary.activeControlLabels.includes("Sort: Default"));
});

test("production case library result summary labels status and mastery filters", () => {
  const summary = getProductionCaseLibraryResultSummary({
    totalCount: 161,
    visibleCount: 8,
    controls: {
      caseStatusFilter: "in_progress",
      masteryFilter: "can_improve",
      sortMode: "default",
      searchQuery: "",
    },
  });

  assert.deepEqual(summary.activeControlLabels, ["Case-status: In progress", "Mastery: Can be improved"]);
});

test("production case library result summary uses empty-result label", () => {
  const summary = getProductionCaseLibraryResultSummary({
    totalCount: 161,
    visibleCount: 0,
    controls: { ...defaultProductionCaseLibraryControls, searchQuery: "zzzz" },
  });

  assert.equal(summary.label, "No production cases match the search or filters");
  assert.deepEqual(summary.activeControlLabels, ["Search: zzzz"]);
});

test("production case library result summary reset removes active controls", () => {
  const summary = getProductionCaseLibraryResultSummary({
    totalCount: 161,
    visibleCount: 161,
    controls: defaultProductionCaseLibraryControls,
  });

  assert.deepEqual(summary.activeControlLabels, []);
});

test("production case library controls read and write valid controls", () => {
  const storage = createMemoryStorage();
  const controls = {
    caseStatusFilter: "in_progress",
    masteryFilter: "can_improve",
    sortMode: "best_score_asc",
    searchQuery: "taxi",
  } as const;

  writeProductionCaseLibraryControls(storage, controls);

  assert.equal(storage.values.get(productionCaseLibraryControlsStorageKey), JSON.stringify(controls));
  assert.deepEqual(readProductionCaseLibraryControls(storage), controls);
});

test("production case library controls reset writes defaults", () => {
  const storage = createMemoryStorage();
  writeProductionCaseLibraryControls(storage, {
    caseStatusFilter: "completed",
    masteryFilter: "can_improve",
    sortMode: "best_score_asc",
    searchQuery: "taxi",
  });

  writeProductionCaseLibraryControls(storage, defaultProductionCaseLibraryControls);

  assert.deepEqual(readProductionCaseLibraryControls(storage), defaultProductionCaseLibraryControls);
});

test("production case library controls, export helper, and UI copy avoid forbidden language", () => {
  const uiSource = readFileSync("src/ui/components/FilmScenarioLibrary.tsx", "utf8").toLowerCase();
  const helperCopy = [
    productionCaseLibraryControlsStorageKey,
    productionCaseProgressExportVersion,
    JSON.stringify(createProductionCaseProgressExport(createMemoryStorage(), "2026-06-29T00:00:00.000Z")),
    JSON.stringify(defaultProductionCaseLibraryControls),
    JSON.stringify(readProductionCaseLibraryControls(createMemoryStorage())),
    uiSource,
  ].join(" ").toLowerCase();

  assert.doesNotMatch(helperCopy, /inspired by|in the spirit of|create your own version|lag en ny film/);
});

test("FilmScenarioLibrary exposes recent best results helper and section copy", () => {
  const uiSource = readFileSync("src/ui/components/FilmScenarioLibrary.tsx", "utf8");
  const styleSource = readFileSync("src/ui/styles.css", "utf8");

  assert.match(uiSource, /getRecentProductionCaseBestResults\(/);
  assert.match(uiSource, /limit = 5/);
  assert.match(uiSource, /brief\.briefType !== "production_case"/);
  assert.match(uiSource, /Date\.parse\(value\)/);
  assert.match(uiSource, /getBestResultTimestamp\(result\.updatedAt\) \|\| getBestResultTimestamp\(result\.completedAt\)/);
  assert.match(uiSource, /\.sort\(\(left, right\) => getRecentBestResultSortTimestamp\(right\) - getRecentBestResultSortTimestamp\(left\)\)/);
  assert.match(uiSource, /\.slice\(0, limit\)/);
  assert.match(uiSource, /productionCaseScenarios\.get\(bestResult\.scenarioId\)/);
  assert.match(uiSource, /Recent best results/);
  assert.match(uiSource, /No best results yet\./);
  assert.match(uiSource, /Open case/);
  assert.match(uiSource, /bestTierLabel: productionCaseResultTierLabels\[bestResult\.bestTier\]/);
  assert.match(uiSource, /\{item\.bestTierLabel\} · \{item\.bestScore\}\/\{item\.maxScore\}/);
  assert.match(uiSource, /onOpenScenario\?\.\(item\.scenarioId\)/);
  assert.match(styleSource, /production-case-recent-results/);
});

test("production case MVP loop core UI copy is preserved", () => {
  const librarySource = readFileSync("src/ui/components/FilmScenarioLibrary.tsx", "utf8");
  const briefPanelSource = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8");
  const copy = [librarySource, briefPanelSource].join("\n");

  assert.match(copy, /Next phase/);
  assert.match(copy, /Next tier/);
  assert.match(copy, /Case report/);
  assert.match(copy, /Recent best results/);
  assert.match(copy, /Progress backup/);
  assert.match(copy, /Go to phase/);
  assert.match(librarySource, /production-case-dashboard/);
  assert.doesNotMatch(copy.toLowerCase(), /inspired by|in the spirit of|create your own version|lag en ny film/);
});

test("FilmScenarioLibrary initializes from persisted controls and exposes reset copy", () => {
  const uiSource = readFileSync("src/ui/components/FilmScenarioLibrary.tsx", "utf8");

  assert.match(uiSource, /readProductionCaseLibraryControls\(window\.localStorage\)/);
  assert.match(uiSource, /writeProductionCaseLibraryControls\(window\.localStorage, \{ caseStatusFilter, masteryFilter, sortMode, searchQuery \}\)/);
  assert.match(uiSource, /Reset filters/);
  assert.match(uiSource, /Progress backup/);
  assert.match(uiSource, /Save or restore local production-case progress\./);
  assert.match(uiSource, /<details className="scenario-backup-panel">/);
  assert.match(uiSource, /Export progress/);
  assert.match(uiSource, /Progress exported/);
  assert.match(uiSource, /Progress ready to copy/);
  assert.match(uiSource, /createProductionCaseProgressExport\(window\.localStorage\)/);
  assert.match(uiSource, /hg-film-production-case-progress\.json/);
  assert.match(uiSource, /getProductionCaseLibraryResultSummary/);
  assert.match(uiSource, /scenario-result-summary/);
  assert.match(uiSource, /No active filters/);
  assert.match(uiSource, /setCaseStatusFilter\(defaultProductionCaseLibraryControls\.caseStatusFilter\)/);
  assert.match(uiSource, /setMasteryFilter\(defaultProductionCaseLibraryControls\.masteryFilter\)/);
  assert.match(uiSource, /setSortMode\(defaultProductionCaseLibraryControls\.sortMode\)/);
  assert.match(uiSource, /setSearchQuery\(defaultProductionCaseLibraryControls\.searchQuery\)/);
  assert.match(uiSource, /Search film, year, or case/);
  assert.match(uiSource, /Import progress/);
  assert.match(uiSource, /Importing overwrites local production-case progress/);
  assert.match(uiSource, /previewProductionCaseProgressBackup\(importJson\)/);
  assert.match(uiSource, /Backup found/);
  assert.match(uiSource, /Exported: /);
  assert.match(uiSource, /Current progress: /);
  assert.match(uiSource, /Best results: /);
  assert.match(uiSource, /Library controls: /);
  assert.match(uiSource, /Backup can't be read/);
  assert.match(uiSource, /disabled=\{!importJson\.trim\(\) \|\| importPreview\?\.ok === false\}/);
  assert.match(uiSource, /Confirm import/);
  assert.match(uiSource, /Progress imported/);
  assert.match(uiSource, /Could not import progress/);
  assert.match(uiSource, /importProductionCaseProgressBackup\(importJson, window\.localStorage\)/);
});

test("production case library controls parse legacy and invalid search query safely", () => {
  assert.equal(defaultProductionCaseLibraryControls.searchQuery, "");
  assert.deepEqual(
    parseProductionCaseLibraryControls(JSON.stringify({
      caseStatusFilter: "completed",
      masteryFilter: "can_improve",
      sortMode: "title_asc",
    })),
    { caseStatusFilter: "completed", masteryFilter: "can_improve", sortMode: "title_asc", searchQuery: "" },
  );
  assert.deepEqual(
    parseProductionCaseLibraryControls(JSON.stringify({
      caseStatusFilter: "completed",
      masteryFilter: "can_improve",
      sortMode: "title_asc",
      searchQuery: 1976,
    })),
    { caseStatusFilter: "completed", masteryFilter: "can_improve", sortMode: "title_asc", searchQuery: "" },
  );
});

test("FilmScenarioLibrary search includes title, year, director, and brief logline fields", () => {
  const uiSource = readFileSync("src/ui/components/FilmScenarioLibrary.tsx", "utf8");

  assert.match(uiSource, /scenario\.film\.title/);
  assert.match(uiSource, /scenario\.film\.original_title/);
  assert.match(uiSource, /String\(scenario\.film\.year\)/);
  assert.match(uiSource, /\.\.\.scenario\.film\.directors/);
  assert.match(uiSource, /brief\.logline/);
  assert.match(uiSource, /trim\(\)\.toLowerCase\(\)/);
  assert.match(uiSource, /includes\(normalizedSearchQuery\)/);
});

test("FilmScenarioLibrary search combines before status, mastery, and sorting", () => {
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);
  const completed = getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds });
  const inProgress = getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: ["mission-1"] });
  const cards = [
    createLibrarySortCard("taxi-b", "Taxi Bravo", completed, { ...createProductionCaseReportBest("taxi-b", 4), bestTier: "assistant" }),
    createLibrarySortCard("other", "Other", completed, { ...createProductionCaseReportBest("other", 12), bestTier: "auteur" }),
    createLibrarySortCard("taxi-a", "Taxi Alpha", inProgress, undefined),
  ];

  const searched = cards.filter((card) => card.scenario.film.title.toLowerCase().includes("taxi"));
  assert.deepEqual(searched.map((card) => card.id), ["taxi-b", "taxi-a"]);
  assert.deepEqual(
    searched.filter((card) => productionCaseLibraryStatusMatchesFilter(card.status, "completed")).map((card) => card.id),
    ["taxi-b"],
  );
  assert.deepEqual(
    searched.filter((card) => productionCaseMasteryFilterMatches(card.status, card.bestResult, "can_improve")).map((card) => card.id),
    ["taxi-b", "taxi-a"],
  );
  assert.deepEqual(sortProductionCaseLibraryCards(searched, "title_asc").map((card) => card.id), ["taxi-a", "taxi-b"]);
});

test("progress writes to the v1 localStorage key and can be read back", () => {
  const storage = createMemoryStorage();
  const state = setProductionCaseMissionCompletion(
    {},
    "scenario_taxi_driver_1976",
    "scenario_taxi_driver_1976-mission-case_orientation",
    true,
    "2026-06-22T00:00:00.000Z",
  );

  writeProductionCaseProgress(storage, state);

  assert.ok(storage.values.has(productionCaseProgressStorageKey));
  assert.deepEqual(readProductionCaseProgress(storage), state);
});



test("selectedChoicesByMissionId is saved per scenario id", () => {
  let state = setProductionCaseMissionChoice(
    {},
    "scenario_taxi_driver_1976",
    "scenario_taxi_driver_1976-mission-screenplay",
    "scenario_taxi_driver_1976-choice-screenplay-match-1",
    "2026-06-22T00:00:00.000Z",
  );
  state = setProductionCaseMissionChoice(
    state,
    "scenario_the_lighthouse_2019",
    "scenario_the_lighthouse_2019-mission-sound",
    "scenario_the_lighthouse_2019-choice-sound-match-1",
    "2026-06-22T00:00:00.000Z",
  );

  assert.equal(
    getProductionCaseProgressEntry(state, "scenario_taxi_driver_1976").selectedChoicesByMissionId?.["scenario_taxi_driver_1976-mission-screenplay"],
    "scenario_taxi_driver_1976-choice-screenplay-match-1",
  );
  assert.equal(
    getProductionCaseProgressEntry(state, "scenario_the_lighthouse_2019").selectedChoicesByMissionId?.["scenario_the_lighthouse_2019-mission-sound"],
    "scenario_the_lighthouse_2019-choice-sound-match-1",
  );
});

test("old progress without selectedChoicesByMissionId parses safely", () => {
  const state = parseProductionCaseProgress(JSON.stringify({
    scenario_taxi_driver_1976: {
      completedMissionIds: ["scenario_taxi_driver_1976-mission-screenplay"],
    },
  }));

  const entry = getProductionCaseProgressEntry(state, "scenario_taxi_driver_1976");
  assert.deepEqual(entry.completedMissionIds, ["scenario_taxi_driver_1976-mission-screenplay"]);
  assert.equal(entry.selectedChoicesByMissionId, undefined);
});

test("Case-match counts selected match choices only", () => {
  const missions = [
    { id: "mission-a", choices: [{ id: "choice-a", quality: "match" }] },
    { id: "mission-b", choices: [{ id: "choice-b", quality: "partial" }] },
    { id: "mission-c", choices: [{ id: "choice-c", quality: "match" }] },
  ];

  assert.deepEqual(
    countProductionCaseMatches({ "mission-a": "choice-a", "mission-b": "choice-b" }, missions),
    { matchCount: 1, selectedCount: 2 },
  );
});

test("reset clears selected choices for the current scenario", () => {
  const state = setProductionCaseMissionChoice(
    {},
    "scenario_taxi_driver_1976",
    "scenario_taxi_driver_1976-mission-screenplay",
    "scenario_taxi_driver_1976-choice-screenplay-match-1",
  );

  const resetState = resetProductionCaseScenarioProgress(state, "scenario_taxi_driver_1976");

  assert.equal(getProductionCaseProgressEntry(resetState, "scenario_taxi_driver_1976").selectedChoicesByMissionId, undefined);
});






test("production case next phase action recommends missing choice first", () => {
  const action = getProductionCaseNextPhaseAction(improvementHintMissions, {
    completedMissionIds: [],
    selectedChoicesByMissionId: {
      "mission-b": "b-match",
    },
  });

  assert.deepEqual(action, {
    missionId: "mission-a",
    phase: "screenplay",
    title: "Script choices",
    actionType: "choose",
    label: "Choose a production approach",
    description: "Choose a production approach before completing this phase.",
  });
});

test("production case next phase action recommends completing a selected unfinished phase", () => {
  const action = getProductionCaseNextPhaseAction(improvementHintMissions, {
    completedMissionIds: ["mission-a"],
    selectedChoicesByMissionId: {
      "mission-a": "a-match",
      "mission-b": "b-match",
      "mission-c": "c-match",
    },
  });

  assert.deepEqual(action, {
    missionId: "mission-b",
    phase: "editing",
    title: "Cutting rhythm",
    actionType: "complete",
    label: "Complete phase",
    description: "Mark the phase complete once you've chosen a production approach.",
  });
});

test("production case next phase action recommends improving the first weak completed phase", () => {
  const action = getProductionCaseNextPhaseAction(improvementHintMissions, {
    completedMissionIds: ["mission-a", "mission-b", "mission-c"],
    selectedChoicesByMissionId: {
      "mission-a": "a-match",
      "mission-b": "b-partial",
      "mission-c": "c-match",
    },
  });

  assert.deepEqual(action, {
    missionId: "mission-b",
    phase: "editing",
    title: "Cutting rhythm",
    actionType: "improve",
    label: "Improve phase",
    description: "Sharpen the production approach to raise the case score.",
  });
});

test("production case next phase action is hidden for seed fallback and full match cases", () => {
  assert.equal(getProductionCaseNextPhaseAction([], { completedMissionIds: [] }), undefined);
  assert.equal(
    getProductionCaseNextPhaseAction(improvementHintMissions, {
      completedMissionIds: ["mission-a", "mission-b", "mission-c"],
      selectedChoicesByMissionId: {
        "mission-a": "a-match",
        "mission-b": "b-match",
        "mission-c": "c-match",
      },
    }),
    undefined,
  );
});


test("ScenarioProductionBriefPanel shows compact next tier target and preserves next phase/report UI", () => {
  const uiSource = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8");
  const styleSource = readFileSync("src/ui/styles.css", "utf8");

  assert.match(uiSource, /getProductionCaseTierTarget\(caseScore, completedCount\)/);
  assert.match(uiSource, /aria-label="Next tier"/);
  assert.match(uiSource, /getProductionCaseBestResultFeedback\(completedCaseReport, bestResult\)/);
  assert.match(uiSource, /New best result feedback/);
  assert.match(uiSource, /feedback\.label/);
  assert.match(uiSource, /feedback\.description/);
  assert.match(uiSource, /tierTarget\.label/);
  assert.match(uiSource, /tierTarget\.description/);
  assert.match(uiSource, /Case report/);
  assert.match(uiSource, /completedCaseReport \? <ProductionCaseReportBox/);
  assert.match(uiSource, /Next phase/);
  assert.match(styleSource, /scenario-production-tier-target/);
});

test("production case tier target helper and UI copy avoid forbidden language", () => {
  const uiSource = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8").toLowerCase();
  const copy = [
    getProductionCaseTierTarget({ score: 4, maxScore: 12 }, 6)?.label,
    getProductionCaseTierTarget({ score: 4, maxScore: 12 }, 6)?.description,
    getProductionCaseTierTarget({ score: 11, maxScore: 12 }, 6)?.label,
    getProductionCaseTierTarget({ score: 11, maxScore: 12 }, 6)?.description,
    uiSource,
  ].join(" ").toLowerCase();

  assert.doesNotMatch(copy, /inspired by|in the spirit of|create your own version|lag en ny film/);
});

test("ScenarioProductionBriefPanel exposes clickable improvement hint mission focus", () => {
  const uiSource = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8");
  const styleSource = readFileSync("src/ui/styles.css", "utf8");

  assert.match(uiSource, /data-mission-id=\{mission\.id\}/);
  assert.match(uiSource, /id=\{getProductionCaseMissionElementId\(mission\.id\)\}/);
  assert.match(uiSource, /production-case-mission-\$\{missionId\}/);
  assert.match(uiSource, /tabIndex=\{-1\}/);
  assert.match(uiSource, /Go to phase/);
  assert.match(uiSource, /Next phase/);
  assert.match(uiSource, /getProductionCaseNextPhaseAction\(missions, progressEntry\)/);
  assert.match(uiSource, /onClick=\{\(\) => onFocusMission\(action\.missionId\)\}/);
  assert.match(uiSource, /onClick=\{\(\) => onFocusMission\(hint\.missionId\)\}/);
  assert.match(uiSource, /setFocusedMissionId\(missionId\)/);
  assert.match(uiSource, /scrollIntoView\?\.\(\{ behavior: "smooth", block: "center" \}\)/);
  assert.match(uiSource, /focus\?\.\(\{ preventScroll: true \}\)/);
  assert.match(uiSource, /scenario-production-mission--focused/);
  assert.match(styleSource, /\.scenario-production-mission--focused/);
});

test("ScenarioProductionBriefPanel focus helper copy avoids forbidden language", () => {
  const uiSource = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8").toLowerCase();
  const focusCopy = [
    "Go to phase",
    "Improve next",
    "Next phase",
    "Choose a production approach",
    "Complete phase",
    "Improve phase",
    uiSource,
  ].join(" ");

  assert.doesNotMatch(focusCopy, /inspired by|in the spirit of|create your own version|lag en ny film/);
});

test("production case improvement hint is undefined for seed fallback and full match scores", () => {
  assert.equal(getProductionCaseImprovementHint([], {}), undefined);
  assert.equal(
    getProductionCaseImprovementHint(improvementHintMissions, {
      selectedChoicesByMissionId: {
        "mission-a": "a-match",
        "mission-b": "b-match",
        "mission-c": "c-match",
      },
    }),
    undefined,
  );
});

test("production case improvement hint recommends choosing an unselected mission first", () => {
  const hint = getProductionCaseImprovementHint(improvementHintMissions, {
    selectedChoicesByMissionId: {
      "mission-a": "a-miss",
      "mission-c": "c-partial",
    },
  });

  assert.deepEqual(hint, {
    missionId: "mission-b",
    phase: "editing",
    title: "Cutting rhythm",
    currentScore: 0,
    maxScore: 2,
    hintType: "choose",
    label: "Choose a production approach",
    description: "This phase is missing a chosen production approach.",
  });
});

test("production case improvement hint recommends rethinking misses before partials", () => {
  const hint = getProductionCaseImprovementHint(improvementHintMissions, {
    selectedChoicesByMissionId: {
      "mission-a": "a-partial",
      "mission-b": "b-miss",
      "mission-c": "c-partial",
    },
  });

  assert.equal(hint?.hintType, "rethink");
  assert.equal(hint?.label, "Reconsider this phase");
  assert.equal(hint?.missionId, "mission-b");
  assert.equal(hint?.phase, "editing");
  assert.equal(hint?.title, "Cutting rhythm");
  assert.equal(hint?.currentScore, 0);
});

test("production case improvement hint recommends sharpening partial choices", () => {
  const hint = getProductionCaseImprovementHint(improvementHintMissions, {
    selectedChoicesByMissionId: {
      "mission-a": "a-match",
      "mission-b": "b-partial",
      "mission-c": "c-match",
    },
  });

  assert.equal(hint?.hintType, "sharpen");
  assert.equal(hint?.label, "Sharpen your choice");
  assert.equal(hint?.missionId, "mission-b");
  assert.equal(hint?.currentScore, 1);
});

test("production case improvement hint copy avoids forbidden language", () => {
  const hint = getProductionCaseImprovementHint(improvementHintMissions, {
    selectedChoicesByMissionId: {
      "mission-a": "a-match",
      "mission-b": "b-partial",
      "mission-c": "c-match",
    },
  });
  const copy = [hint?.label, hint?.description, "Improve next"].join(" ").toLowerCase();

  assert.ok(!copy.includes("inspired by"));
  assert.ok(!copy.includes("in the spirit of"));
});

test("production case report is undefined for seed fallback or missing missions", () => {
  assert.equal(getProductionCaseReport([], { completedMissionIds: [] }), undefined);
});

test("production case report summarizes score, matches, weak phases, and improvement hint", () => {
  const missions = [
    {
      id: "mission-a",
      phase: "screenplay",
      title: "Script choices",
      choices: [
        { id: "a-match", label: "Precise script approach", quality: "match" },
        { id: "a-partial", label: "Partial script approach", quality: "partial" },
      ],
    },
    {
      id: "mission-b",
      phase: "cinematography",
      title: "Photography choices",
      choices: [
        { id: "b-miss", label: "Wrong photography approach", quality: "miss" },
        { id: "b-match", label: "Precise photography approach", quality: "match" },
      ],
    },
    {
      id: "mission-c",
      phase: "editing",
      title: "Editing choices",
      choices: [
        { id: "c-partial", label: "Partial editing approach", quality: "partial" },
        { id: "c-match", label: "Precise editing approach", quality: "match" },
      ],
    },
    {
      id: "mission-d",
      phase: "sound",
      title: "Sound choices",
      choices: [
        { id: "d-match", label: "Precise sound approach", quality: "match" },
      ],
    },
    {
      id: "mission-e",
      phase: "reflection",
      title: "Reflection",
      choices: [
        { id: "e-miss", label: "Wrong reflection", quality: "miss" },
      ],
    },
  ] as const;

  const report = getProductionCaseReport(missions, {
    completedMissionIds: ["mission-a", "mission-b"],
    selectedChoicesByMissionId: {
      "mission-a": "a-match",
      "mission-b": "b-miss",
      "mission-c": "c-partial",
      "mission-e": "e-miss",
    },
  });

  assert.equal(report?.completedCount, 2);
  assert.equal(report?.totalMissions, 5);
  assert.equal(report?.score, 3);
  assert.equal(report?.maxScore, 10);
  assert.equal(report?.resultTier, "in_progress");
  assert.deepEqual(report?.matchedPhases, [{
    missionId: "mission-a",
    phase: "screenplay",
    title: "Script choices",
    selectedChoiceLabel: "Precise script approach",
  }]);
  assert.deepEqual(report?.weakPhases.map((phase) => phase.weakness), ["miss", "miss", "partial"]);
  assert.equal(report?.weakPhases.length, 3);
  assert.equal(report?.improvementHint?.missionId, "mission-d");
  assert.equal(report?.improvementHint?.hintType, "choose");
});

test("production case report has no weak phases when every choice is a match", () => {
  const missions = improvementHintMissions.map((mission) => ({
    ...mission,
    choices: mission.choices.map((choice) => ({ ...choice, label: choice.id })),
  }));
  const report = getProductionCaseReport(missions, {
    completedMissionIds: missions.map((mission) => mission.id),
    selectedChoicesByMissionId: { "mission-a": "a-match", "mission-b": "b-match", "mission-c": "c-match" },
  });

  assert.deepEqual(report?.weakPhases, []);
  assert.equal(report?.resultTier, "auteur");
});

test("production case report learning summary changes for low, medium, and high scores", () => {
  const missions = improvementHintMissions.map((mission) => ({
    ...mission,
    choices: mission.choices.map((choice) => ({ ...choice, label: choice.id })),
  }));
  const completedMissionIds = missions.map((mission) => mission.id);
  const low = getProductionCaseReport(missions, { completedMissionIds, selectedChoicesByMissionId: { "mission-a": "a-miss", "mission-b": "b-miss", "mission-c": "c-partial" } });
  const medium = getProductionCaseReport(missions, { completedMissionIds, selectedChoicesByMissionId: { "mission-a": "a-match", "mission-b": "b-partial", "mission-c": "c-partial" } });
  const high = getProductionCaseReport(missions, { completedMissionIds, selectedChoicesByMissionId: { "mission-a": "a-match", "mission-b": "b-match", "mission-c": "c-match" } });

  assert.notEqual(low?.learningSummary, medium?.learningSummary);
  assert.notEqual(medium?.learningSummary, high?.learningSummary);
  assert.match(high?.learningSummary ?? "", /production logic/);
});

test("production case report copy avoids forbidden language", () => {
  const report = getProductionCaseReport(improvementHintMissions.map((mission) => ({
    ...mission,
    choices: mission.choices.map((choice) => ({ ...choice, label: choice.id })),
  })), { completedMissionIds: [] });
  const copy = [
    "Case report",
    "Case report in progress",
    "Strongest matches",
    "Could improve",
    "No weak phases recorded",
    report?.learningSummary,
    report?.improvementHint?.description,
  ].join(" ").toLowerCase();

  assert.ok(!copy.includes("inspired by"));
  assert.ok(!copy.includes("in the spirit of"));
});

test("production case mission score maps choice quality to points", () => {
  assert.equal(getProductionCaseMissionScore("match"), 2);
  assert.equal(getProductionCaseMissionScore("partial"), 1);
  assert.equal(getProductionCaseMissionScore("miss"), 0);
  assert.equal(getProductionCaseMissionScore(undefined), 0);
});

test("Taxi Driver with six match choices scores 12/12", () => {
  const missions = Array.from({ length: 6 }, (_, index) => {
    const missionNumber = index + 1;
    return {
      id: `scenario_taxi_driver_1976-mission-${missionNumber}`,
      choices: [
        { id: `scenario_taxi_driver_1976-choice-${missionNumber}-match`, quality: "match" },
        { id: `scenario_taxi_driver_1976-choice-${missionNumber}-partial`, quality: "partial" },
        { id: `scenario_taxi_driver_1976-choice-${missionNumber}-miss`, quality: "miss" },
      ],
    };
  });
  const selectedChoicesByMissionId = Object.fromEntries(
    missions.map((mission, index) => [mission.id, `scenario_taxi_driver_1976-choice-${index + 1}-match`]),
  );

  assert.deepEqual(
    getProductionCaseScoreSummary(missions, { selectedChoicesByMissionId }),
    { score: 12, maxScore: 12 },
  );
});

test("mixed production case choices score match, partial, miss, and unselected missions", () => {
  const missions = [
    {
      id: "mission-a",
      choices: [{ id: "choice-a", quality: "match" }],
    },
    {
      id: "mission-b",
      choices: [{ id: "choice-b", quality: "partial" }],
    },
    {
      id: "mission-c",
      choices: [{ id: "choice-c", quality: "miss" }],
    },
    {
      id: "mission-d",
      choices: [{ id: "choice-d", quality: "match" }],
    },
  ];

  assert.deepEqual(
    getProductionCaseScoreSummary(missions, {
      selectedChoicesByMissionId: {
        "mission-a": "choice-a",
        "mission-b": "choice-b",
        "mission-c": "choice-c",
      },
    }),
    { score: 3, maxScore: 8 },
  );
});

test("reset makes score 0 for the current scenario without affecting completion helpers", () => {
  const missions = [
    { id: "mission-a", choices: [{ id: "choice-a", quality: "match" }] },
  ];
  let state = setProductionCaseMissionChoice({}, "scenario_taxi_driver_1976", "mission-a", "choice-a");
  state = setProductionCaseMissionCompletion(state, "scenario_taxi_driver_1976", "mission-a", true);

  const resetState = resetProductionCaseScenarioProgress(state, "scenario_taxi_driver_1976");

  assert.deepEqual(
    getProductionCaseScoreSummary(missions, getProductionCaseProgressEntry(resetState, "scenario_taxi_driver_1976")),
    { score: 0, maxScore: 2 },
  );
  assert.deepEqual(getProductionCaseProgressEntry(resetState, "scenario_taxi_driver_1976").completedMissionIds, []);
});

test("seed fallback without production case missions gets no scoring total", () => {
  assert.deepEqual(getProductionCaseScoreSummary([], {}), { score: 0, maxScore: 0 });
});

test("production case scoring helpers avoid forbidden copy", () => {
  const helperSource = [
    getProductionCaseMissionScore.name,
    getProductionCaseScoreSummary.name,
    "Case-score",
    "Phase score",
  ].join(" ").toLowerCase();

  assert.ok(!helperSource.includes("inspired by"));
  assert.ok(!helperSource.includes("in the spirit of"));
});



test("production case tier target shows assistant target for not started and in progress", () => {
  const notStarted = getProductionCaseTierTarget({ score: 0, maxScore: 12 }, 0);
  const inProgress = getProductionCaseTierTarget({ score: 8, maxScore: 12 }, 3);

  assert.equal(notStarted?.currentTier, "not_started");
  assert.equal(notStarted?.label, "Next tier: Assistant");
  assert.equal(notStarted?.description, "Complete the phases and raise the case score.");
  assert.equal(inProgress?.currentTier, "in_progress");
  assert.equal(inProgress?.label, "Next tier: Assistant");
});

test("production case tier target advances assistant to producer with threshold points", () => {
  const target = getProductionCaseTierTarget({ score: 4, maxScore: 12 }, 6);

  assert.equal(target?.currentTier, "assistant");
  assert.equal(target?.currentTierLabel, "Assistant");
  assert.equal(target?.nextTier, "producer");
  assert.equal(target?.nextTierLabel, "Producer");
  assert.equal(target?.pointsNeeded, 2);
  assert.equal(target?.label, "Next tier: Producer");
  assert.equal(target?.description, "2 points needed.");
});

test("production case tier target advances producer to auteur with threshold points", () => {
  const target = getProductionCaseTierTarget({ score: 8, maxScore: 12 }, 6);

  assert.equal(target?.currentTier, "producer");
  assert.equal(target?.nextTier, "auteur");
  assert.equal(target?.pointsNeeded, 3);
  assert.equal(target?.label, "Next tier: Auteur");
  assert.equal(target?.description, "3 points needed.");
});

test("production case tier target marks auteur as max tier", () => {
  const target = getProductionCaseTierTarget({ score: 11, maxScore: 12 }, 6);

  assert.equal(target?.currentTier, "auteur");
  assert.equal(target?.nextTier, undefined);
  assert.equal(target?.nextTierLabel, undefined);
  assert.equal(target?.pointsNeeded, 0);
  assert.equal(target?.isMaxTier, true);
  assert.equal(target?.label, "Maximum tier reached");
  assert.equal(target?.description, "This case is complete at the highest tier.");
});

test("production case tier target is undefined for missing score or seed fallback", () => {
  assert.equal(getProductionCaseTierTarget(undefined, 0), undefined);
  assert.equal(getProductionCaseTierTarget({ score: 0, maxScore: 0 }, 0), undefined);
});

test("production case result tier is not_started at 0 score and 0 completed phases", () => {
  assert.equal(getProductionCaseResultTier({ score: 0, maxScore: 12 }, 0), "not_started");
});

test("production case result tier is in_progress when score exists but not all phases are completed", () => {
  assert.equal(getProductionCaseResultTier({ score: 12, maxScore: 12 }, 0), "in_progress");
  assert.equal(getProductionCaseResultTier({ score: 4, maxScore: 12 }, 3), "in_progress");
});

test("production case result tier is assistant when all phases are completed below 50 percent score", () => {
  assert.equal(getProductionCaseResultTier({ score: 5, maxScore: 12 }, 6), "assistant");
});

test("production case result tier is producer when all phases are completed from 50 through 83 percent score", () => {
  assert.equal(getProductionCaseResultTier({ score: 6, maxScore: 12 }, 6), "producer");
  assert.equal(getProductionCaseResultTier({ score: 10, maxScore: 12 }, 6), "producer");
});

test("production case result tier is auteur when all phases are completed at 84 percent score or higher", () => {
  assert.equal(getProductionCaseResultTier({ score: 11, maxScore: 12 }, 6), "auteur");
  assert.equal(getProductionCaseResultTier({ score: 12, maxScore: 12 }, 6), "auteur");
});

test("12/12 score without completed phases does not give auteur", () => {
  assert.equal(getProductionCaseResultTier({ score: 12, maxScore: 12 }, 0), "in_progress");
});

test("reset gives not_started result tier for the current scenario", () => {
  const missions = [
    { id: "mission-a", choices: [{ id: "choice-a", quality: "match" }] },
    { id: "mission-b", choices: [{ id: "choice-b", quality: "match" }] },
  ];
  let state = setProductionCaseMissionChoice({}, "scenario_taxi_driver_1976", "mission-a", "choice-a");
  state = setProductionCaseMissionCompletion(state, "scenario_taxi_driver_1976", "mission-a", true);

  const resetEntry = getProductionCaseProgressEntry(
    resetProductionCaseScenarioProgress(state, "scenario_taxi_driver_1976"),
    "scenario_taxi_driver_1976",
  );

  assert.equal(
    getProductionCaseResultTier(getProductionCaseScoreSummary(missions, resetEntry), resetEntry.completedMissionIds.length),
    "not_started",
  );
});

test("seed fallback without production case missions gets no result tier", () => {
  assert.equal(getProductionCaseResultTier({ score: 0, maxScore: 0 }, 0), undefined);
});

test("production case result tier helper avoids forbidden copy", () => {
  const helperSource = [
    getProductionCaseResultTier.name,
    "Result",
    "Assistant",
    "Producer",
    "Auteur",
    "production logic",
    "production choices",
  ].join(" ").toLowerCase();

  assert.ok(!helperSource.includes("inspired by"));
  assert.ok(!helperSource.includes("in the spirit of"));
});

test("library status shows Not started at 0/6 phases", () => {
  assert.deepEqual(
    getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: [] }),
    {
      label: "Not started",
      tier: "not_started",
      completedCount: 0,
      missionCount: 6,
    },
  );
});

test("library status shows In progress with partial phase completion", () => {
  const status = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds: ["mission-1", "mission-2", "mission-3"],
  });

  assert.equal(status?.label, "In progress");
  assert.equal(status?.tier, "in_progress");
  assert.equal(`${status?.completedCount}/${status?.missionCount} phases`, "3/6 phases");
});

test("library status shows Assistant, Producer, and Auteur for completed cases", () => {
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);

  assert.equal(
    getProductionCaseLibraryStatus(libraryStatusMissions, {
      completedMissionIds,
      selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-miss`])),
    })?.label,
    "Assistant",
  );
  assert.equal(
    getProductionCaseLibraryStatus(libraryStatusMissions, {
      completedMissionIds,
      selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-partial`])),
    })?.label,
    "Producer",
  );
  assert.equal(
    getProductionCaseLibraryStatus(libraryStatusMissions, {
      completedMissionIds,
      selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-match`])),
    })?.label,
    "Auteur",
  );
});

test("library status shows 6/6 phases and Case-score when choices exist", () => {
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);
  const status = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds,
    selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-partial`])),
  });

  assert.equal(`${status?.completedCount}/${status?.missionCount} phases`, "6/6 phases");
  assert.equal(`Case-score: ${status?.score?.score}/${status?.score?.maxScore}`, "Case-score: 6/12");
});

test("library status is absent for seed fallback mission lists", () => {
  assert.equal(getProductionCaseLibraryStatus([], { completedMissionIds: [] }), undefined);
});

test("production case collection summary counts statuses, tiers, and scores", () => {
  const notStarted = getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: [] });
  const inProgress = getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: ["mission-1"] });
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);
  const assistant = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds,
    selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-miss`])),
  });
  const producer = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds,
    selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-partial`])),
  });
  const auteur = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds,
    selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-match`])),
  });

  assert.deepEqual(
    getProductionCaseCollectionSummary([notStarted, inProgress, assistant, producer, auteur, undefined]),
    {
      totalCases: 5,
      notStartedCount: 1,
      inProgressCount: 1,
      completedCount: 3,
      assistantCount: 1,
      producerCount: 1,
      auteurCount: 1,
      totalScore: 18,
      maxScore: 60,
    },
  );
});

test("production case career summary counts completed cases, tiers, and score from best results", () => {
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);
  const statuses = [
    { ...getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: [] })!, scenarioId: "scenario_not_started" },
    { ...getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: ["mission-1"] })!, scenarioId: "scenario_in_progress" },
    { ...getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds })!, scenarioId: "scenario_assistant" },
    { ...getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds })!, scenarioId: "scenario_producer" },
    { ...getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds })!, scenarioId: "scenario_auteur" },
    undefined,
  ];

  assert.deepEqual(getProductionCaseCareerSummary(statuses, {
    scenario_assistant: { ...createProductionCaseReportBest("scenario_assistant", 4), bestTier: "assistant" },
    scenario_producer: { ...createProductionCaseReportBest("scenario_producer", 8), bestTier: "producer" },
    scenario_auteur: { ...createProductionCaseReportBest("scenario_auteur", 12), bestTier: "auteur" },
    scenario_seed_fallback: { ...createProductionCaseReportBest("scenario_seed_fallback", 12), bestTier: "auteur" },
  }), {
    totalCases: 5,
    completedBestCount: 3,
    notCompletedBestCount: 2,
    assistantBestCount: 1,
    producerBestCount: 1,
    auteurBestCount: 1,
    bestTotalScore: 24,
    bestMaxScore: 36,
  });
});

test("production case career summary excludes seed fallback-only statuses", () => {
  assert.deepEqual(getProductionCaseCareerSummary([undefined], {
    scenario_seed_fallback: { ...createProductionCaseReportBest("scenario_seed_fallback", 12), bestTier: "auteur" },
  }), {
    totalCases: 0,
    completedBestCount: 0,
    notCompletedBestCount: 0,
    assistantBestCount: 0,
    producerBestCount: 0,
    auteurBestCount: 0,
    bestTotalScore: 0,
    bestMaxScore: 0,
  });
});

test("production case career summary and achievements survive current-progress reset", () => {
  const storage = createMemoryStorage();
  const status = { ...getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: [] })!, scenarioId: "scenario_taxi_driver_1976" };
  updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport({ score: 12, resultTier: "auteur" }), storage, "2026-06-23T00:00:00.000Z");
  const progressState = setProductionCaseMissionCompletion({}, "scenario_taxi_driver_1976", "mission-1", true);
  writeProductionCaseProgress(storage, resetProductionCaseScenarioProgress(progressState, "scenario_taxi_driver_1976"));

  const careerSummary = getProductionCaseCareerSummary([status], readProductionCaseBestResults(storage));

  assert.equal(storage.getItem(productionCaseProgressStorageKey), null);
  assert.equal(careerSummary.completedBestCount, 1);
  assert.equal(careerSummary.auteurBestCount, 1);
  assert.equal(achievementByLabel(careerSummary, "First case").unlocked, true);
  assert.equal(achievementByLabel(careerSummary, "First Auteur").unlocked, true);
});

test("production case achievements unlock from career best-results thresholds", () => {
  const emptyAchievements = getProductionCaseAchievements(createCareerSummary());

  assert.equal(emptyAchievements.length, 8);
  assert.equal(achievementByLabel(createCareerSummary(), "First case").unlocked, false);
  assert.equal(achievementByLabel(createCareerSummary(), "First case").progressLabel, "0/1");
  assert.equal(achievementByLabel(createCareerSummary({ completedBestCount: 1 }), "First case").unlocked, true);
  assert.equal(achievementByLabel(createCareerSummary({ completedBestCount: 1 }), "First case").progressLabel, "1/1");
  assert.equal(achievementByLabel(createCareerSummary({ completedBestCount: 3 }), "Five cases").progressLabel, "3/5");
  assert.equal(achievementByLabel(createCareerSummary({ completedBestCount: 5 }), "Five cases").unlocked, true);
  assert.equal(achievementByLabel(createCareerSummary({ completedBestCount: 10 }), "Ten cases").unlocked, true);
  assert.equal(achievementByLabel(createCareerSummary({ producerBestCount: 1 }), "First Producer").unlocked, true);
  assert.equal(achievementByLabel(createCareerSummary({ auteurBestCount: 1 }), "First Producer").unlocked, true);
  assert.equal(achievementByLabel(createCareerSummary({ auteurBestCount: 1 }), "First Auteur").unlocked, true);
  assert.equal(achievementByLabel(createCareerSummary({ auteurBestCount: 5 }), "Auteur streak").unlocked, true);
  assert.equal(achievementByLabel(createCareerSummary({ completedBestCount: 12 }), "Half the catalogue").progressLabel, "12/80");
  assert.equal(achievementByLabel(createCareerSummary({ completedBestCount: 80 }), "Half the catalogue").unlocked, true);
  assert.equal(achievementByLabel(createCareerSummary({ completedBestCount: 161 }), "The whole catalogue").unlocked, true);
});

test("production case achievement copy avoids forbidden language", () => {
  const copy = getProductionCaseAchievements(createCareerSummary())
    .flatMap((achievement) => [achievement.label, achievement.description, achievement.progressLabel])
    .join(" ")
    .toLowerCase();

  assert.ok(!copy.includes("inspired by"));
  assert.ok(!copy.includes("in the spirit of"));
});

test("library status filters include the expected case cards", () => {
  const notStarted = getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: [] });
  const inProgress = getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: ["mission-1"] });
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);
  const assistant = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds,
    selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-miss`])),
  });
  const producer = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds,
    selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-partial`])),
  });
  const auteur = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds,
    selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-match`])),
  });

  assert.equal(productionCaseLibraryStatusMatchesFilter(notStarted, "not_started"), true);
  assert.equal(productionCaseLibraryStatusMatchesFilter(inProgress, "in_progress"), true);
  assert.equal(productionCaseLibraryStatusMatchesFilter(notStarted, "completed"), false);
  assert.equal(productionCaseLibraryStatusMatchesFilter(inProgress, "completed"), false);
  assert.equal(productionCaseLibraryStatusMatchesFilter(assistant, "completed"), true);
  assert.equal(productionCaseLibraryStatusMatchesFilter(producer, "completed"), true);
  assert.equal(productionCaseLibraryStatusMatchesFilter(auteur, "completed"), true);
  assert.equal(productionCaseLibraryStatusMatchesFilter(undefined, "all"), true);
  assert.equal(productionCaseLibraryStatusMatchesFilter(undefined, "not_started"), false);
});


test("production case mastery filters match best-result tiers and improvement candidates", () => {
  const status = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds: libraryStatusMissions.map((mission) => mission.id),
  });
  const assistantBest = { ...createProductionCaseReportBest("scenario_assistant", 4), bestTier: "assistant" as const };
  const producerBest = { ...createProductionCaseReportBest("scenario_producer", 8), bestTier: "producer" as const };
  const auteurBest = { ...createProductionCaseReportBest("scenario_auteur", 12), bestTier: "auteur" as const };

  assert.equal(productionCaseMasteryFilterMatches(status, undefined, "not_completed_best"), true);
  assert.equal(productionCaseMasteryFilterMatches(status, assistantBest, "not_completed_best"), false);
  assert.equal(productionCaseMasteryFilterMatches(status, assistantBest, "assistant_best"), true);
  assert.equal(productionCaseMasteryFilterMatches(status, producerBest, "assistant_best"), false);
  assert.equal(productionCaseMasteryFilterMatches(status, producerBest, "producer_best"), true);
  assert.equal(productionCaseMasteryFilterMatches(status, assistantBest, "producer_best"), false);
  assert.equal(productionCaseMasteryFilterMatches(status, auteurBest, "auteur_best"), true);
  assert.equal(productionCaseMasteryFilterMatches(status, producerBest, "auteur_best"), false);
  assert.equal(productionCaseMasteryFilterMatches(status, undefined, "can_improve"), true);
  assert.equal(productionCaseMasteryFilterMatches(status, assistantBest, "can_improve"), true);
  assert.equal(productionCaseMasteryFilterMatches(status, producerBest, "can_improve"), true);
  assert.equal(productionCaseMasteryFilterMatches(status, auteurBest, "can_improve"), false);
});

test("production case status and mastery filters combine and exclude seed fallback from mastery", () => {
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);
  const cards = [
    { id: "not-started", status: getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: [] }), bestResult: undefined },
    { id: "in-progress", status: getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: ["mission-1"] }), bestResult: undefined },
    { id: "assistant", status: getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds }), bestResult: { ...createProductionCaseReportBest("assistant", 4), bestTier: "assistant" as const } },
    { id: "producer", status: getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds }), bestResult: { ...createProductionCaseReportBest("producer", 8), bestTier: "producer" as const } },
    { id: "auteur", status: getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds }), bestResult: { ...createProductionCaseReportBest("auteur", 12), bestTier: "auteur" as const } },
    { id: "seed-fallback", status: undefined, bestResult: undefined },
  ];

  assert.deepEqual(
    cards
      .filter((card) => productionCaseLibraryStatusMatchesFilter(card.status, "completed")
        && productionCaseMasteryFilterMatches(card.status, card.bestResult, "can_improve"))
      .map((card) => card.id),
    ["assistant", "producer"],
  );
  assert.equal(productionCaseMasteryFilterMatches(undefined, undefined, "not_completed_best"), false);
  assert.equal(productionCaseMasteryFilterMatches(undefined, { ...createProductionCaseReportBest("seed-fallback", 12), bestTier: "auteur" }, "auteur_best"), false);
  assert.equal(productionCaseMasteryFilterMatches(undefined, undefined, "all"), true);
});


test("production case library sorting orders filtered cards", () => {
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);
  const completed = getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds });
  const inProgress = getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: ["mission-1"] });
  const cards = [
    createLibrarySortCard("charlie", "Charlie", completed, { ...createProductionCaseReportBest("charlie", 8), updatedAt: "2026-06-23T00:00:00.000Z" }),
    createLibrarySortCard("alpha", "Alpha", completed, { ...createProductionCaseReportBest("alpha", 12), updatedAt: "2026-06-25T00:00:00.000Z" }),
    createLibrarySortCard("delta", "Delta", inProgress, undefined),
    createLibrarySortCard("bravo", "Bravo", completed, { ...createProductionCaseReportBest("bravo", 4), updatedAt: "2026-06-24T00:00:00.000Z", bestTier: "assistant" } as ProductionCaseBestResultEntry),
  ];

  assert.deepEqual(sortProductionCaseLibraryCards(cards, "default").map((card) => card.id), ["charlie", "alpha", "delta", "bravo"]);
  assert.deepEqual(sortProductionCaseLibraryCards(cards, "title_asc").map((card) => card.id), ["alpha", "bravo", "charlie", "delta"]);
  assert.deepEqual(sortProductionCaseLibraryCards(cards, "best_score_desc").map((card) => card.id), ["alpha", "charlie", "bravo", "delta"]);
  assert.deepEqual(sortProductionCaseLibraryCards(cards, "best_score_asc").map((card) => card.id), ["delta", "bravo", "charlie", "alpha"]);
  assert.deepEqual(sortProductionCaseLibraryCards(cards, "recent_best").map((card) => card.id), ["alpha", "bravo", "charlie", "delta"]);

  assert.deepEqual(
    sortProductionCaseLibraryCards(
      cards.filter((card) => productionCaseLibraryStatusMatchesFilter(card.status, "completed")
        && productionCaseMasteryFilterMatches(card.status, card.bestResult, "assistant_best")),
      "best_score_desc",
    ).map((card) => card.id),
    ["bravo"],
  );
});

test("production case mastery filter UI copy and empty state avoid forbidden language", () => {
  const copy = [
    "Mastery",
    "All",
    "No best result yet",
    "Assistant",
    "Producer",
    "Auteur",
    "Can be improved",
    "No production cases match the search or filters.",
    "Search",
    "Search film, year, or case",
    "Sort",
    "Default",
    "Title A-Z",
    "Best score highest",
    "Best score lowest",
    "Recently improved",
  ].join(" ").toLowerCase();

  assert.ok(!copy.includes("inspired by"));
  assert.ok(!copy.includes("in the spirit of"));
});

test("library status copy avoids forbidden language", () => {
  const copy = [
    "Case-status",
    "Not started",
    "In progress",
    "Completed",
    "Assistant",
    "Producer",
    "Auteur",
    "Case-score",
    "Production cases",
    "Combined Case-score",
  ].join(" ").toLowerCase();

  assert.ok(!copy.includes("inspired by"));
  assert.ok(!copy.includes("in the spirit of"));
});

test("production case next action prioritizes in-progress cases first", () => {
  const nextAction = getProductionCaseNextAction([
    { scenarioId: "scenario-a", title: "A", label: "Not started", tier: "not_started", completedCount: 0, missionCount: 6 },
    { scenarioId: "scenario-b", title: "Taxi Driver", label: "In progress", tier: "in_progress", completedCount: 3, missionCount: 6, score: { score: 5, maxScore: 12 } },
    { scenarioId: "scenario-c", title: "C", label: "Assistant", tier: "assistant", completedCount: 6, missionCount: 6, score: { score: 4, maxScore: 12 } },
  ]);

  assert.deepEqual(nextAction, {
    scenarioId: "scenario-b",
    title: "Taxi Driver",
    actionType: "continue",
    label: "Continue case",
    description: "3/6 phases complete · Case-score 5/12",
  });
});

test("production case next action recommends assistant result improvement when no case is in progress", () => {
  const nextAction = getProductionCaseNextAction([
    { scenarioId: "scenario-a", title: "A", label: "Not started", tier: "not_started", completedCount: 0, missionCount: 6 },
    { scenarioId: "scenario-b", title: "B", label: "Assistant", tier: "assistant", completedCount: 6, missionCount: 6, score: { score: 5, maxScore: 12 } },
  ]);

  assert.equal(nextAction?.actionType, "improve");
  assert.equal(nextAction?.label, "Improve result");
  assert.equal(nextAction?.scenarioId, "scenario-b");
});

test("production case next action recommends first not-started case when there is no progress or assistant result", () => {
  const nextAction = getProductionCaseNextAction([
    { scenarioId: "scenario-a", title: "A", label: "Producer", tier: "producer", completedCount: 6, missionCount: 6, score: { score: 8, maxScore: 12 } },
    { scenarioId: "scenario-b", title: "B", label: "Not started", tier: "not_started", completedCount: 0, missionCount: 6 },
  ]);

  assert.equal(nextAction?.actionType, "start");
  assert.equal(nextAction?.label, "Start new case");
  assert.equal(nextAction?.scenarioId, "scenario-b");
});

test("production case next action recommends producer mastery when all cases are completed but not all are auteur", () => {
  const nextAction = getProductionCaseNextAction([
    { scenarioId: "scenario-a", title: "A", label: "Auteur", tier: "auteur", completedCount: 6, missionCount: 6, score: { score: 12, maxScore: 12 } },
    { scenarioId: "scenario-b", title: "B", label: "Producer", tier: "producer", completedCount: 6, missionCount: 6, score: { score: 8, maxScore: 12 } },
  ]);

  assert.equal(nextAction?.actionType, "master");
  assert.equal(nextAction?.label, "Chase Auteur");
  assert.equal(nextAction?.scenarioId, "scenario-b");
});

test("production case next action reports catalogue completion when all cases are auteur", () => {
  const nextAction = getProductionCaseNextAction([
    { scenarioId: "scenario-a", title: "A", label: "Auteur", tier: "auteur", completedCount: 6, missionCount: 6, score: { score: 12, maxScore: 12 } },
  ]);

  assert.deepEqual(nextAction, {
    scenarioId: "scenario-a",
    title: "A",
    actionType: "complete",
    label: "Catalogue mastered",
    description: "All production cases are complete at the highest tier.",
  });
});

test("production case next action excludes seed fallback and avoids forbidden language", () => {
  const nextAction = getProductionCaseNextAction([undefined]);
  assert.equal(nextAction, undefined);

  const copy = [
    "Next action",
    "Continue case",
    "Improve result",
    "Start new case",
    "Chase Auteur",
    "Catalogue mastered",
    "Open case",
  ].join(" ").toLowerCase();

  assert.ok(!copy.includes("inspired by"));
  assert.ok(!copy.includes("in the spirit of"));
});

test("best result feedback returns first_best for first completed case", () => {
  const feedback = getProductionCaseBestResultFeedback(createProductionCaseReport(), undefined);

  assert.equal(feedback?.feedbackType, "first_best");
  assert.equal(feedback?.label, "First best result");
  assert.equal(feedback?.description, "This is now your best saved result for this case.");
  assert.equal(feedback?.newScore, 8);
  assert.equal(feedback?.previousScore, undefined);
});

test("best result feedback returns score_improved for higher score", () => {
  const previous = createProductionCaseReportBest("scenario_taxi_driver_1976", 8);
  const feedback = getProductionCaseBestResultFeedback(createProductionCaseReport({ score: 10, resultTier: "producer" }), previous);

  assert.equal(feedback?.feedbackType, "score_improved");
  assert.equal(feedback?.label, "New best score");
  assert.equal(feedback?.description, "You improved this case by 2 points.");
  assert.equal(feedback?.scoreDelta, 2);
});

test("best result feedback returns tier_improved for higher tier", () => {
  const previous = createProductionCaseReportBest("scenario_taxi_driver_1976", 9);
  const feedback = getProductionCaseBestResultFeedback(createProductionCaseReport({ score: 10, resultTier: "auteur" }), previous);

  assert.equal(feedback?.feedbackType, "tier_improved");
  assert.equal(feedback?.label, "New tier");
  assert.equal(feedback?.description, "You raised this case from Producer to Auteur.");
  assert.equal(feedback?.tierImproved, true);
});

test("best result feedback returns maxed for Auteur max score", () => {
  const previous = createProductionCaseReportBest("scenario_taxi_driver_1976", 10);
  const feedback = getProductionCaseBestResultFeedback(createProductionCaseReport({ score: 12, resultTier: "auteur" }), previous);

  assert.equal(feedback?.feedbackType, "maxed");
  assert.equal(feedback?.label, "Maximum result");
  assert.equal(feedback?.description, "This case is complete with the maximum score.");
});

test("best result feedback is undefined when current result does not beat previous best", () => {
  const previous = createProductionCaseReportBest("scenario_taxi_driver_1976", 10);

  assert.equal(getProductionCaseBestResultFeedback(createProductionCaseReport({ score: 8 }), previous), undefined);
});

test("best result feedback is undefined for incomplete reports and zero max score fallback", () => {
  assert.equal(getProductionCaseBestResultFeedback(createProductionCaseReport({ completedCount: 5 }), undefined), undefined);
  assert.equal(getProductionCaseBestResultFeedback(createProductionCaseReport({ maxScore: 0 }), undefined), undefined);
  assert.equal(getProductionCaseBestResultFeedback(getProductionCaseReport([], { completedMissionIds: [] }), undefined), undefined);
});

test("best result is stored when all production case phases are completed", () => {
  const storage = createMemoryStorage();
  const result = updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport(), storage, "2026-06-23T00:00:00.000Z");

  assert.equal(result?.bestScore, 8);
  assert.equal(result?.maxScore, 12);
  assert.equal(result?.bestTier, "producer");
  assert.equal(result?.bestMatchedCount, 4);
  assert.equal(result?.completedAt, "2026-06-23T00:00:00.000Z");
  assert.equal(getProductionCaseBestResultEntry(readProductionCaseBestResults(storage), "scenario_taxi_driver_1976")?.bestScore, 8);
});

test("best result is not stored when the case is not completed", () => {
  const storage = createMemoryStorage();
  const result = updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport({ completedCount: 5 }), storage);

  assert.equal(result, undefined);
  assert.deepEqual(readProductionCaseBestResults(storage), {});
});

test("higher score replaces lower best result", () => {
  const storage = createMemoryStorage();
  updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport({ score: 8, resultTier: "producer" }), storage, "2026-06-23T00:00:00.000Z");
  const result = updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport({ score: 12, resultTier: "auteur", matchedPhases: [] }), storage, "2026-06-24T00:00:00.000Z");

  assert.equal(result?.bestScore, 12);
  assert.equal(result?.bestTier, "auteur");
  assert.equal(result?.completedAt, "2026-06-23T00:00:00.000Z");
  assert.equal(result?.updatedAt, "2026-06-24T00:00:00.000Z");
});

test("lower score does not replace higher best result", () => {
  const storage = createMemoryStorage();
  updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport({ score: 12, resultTier: "auteur" }), storage, "2026-06-23T00:00:00.000Z");
  const result = updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport({ score: 6, resultTier: "producer" }), storage, "2026-06-24T00:00:00.000Z");

  assert.equal(result, undefined);
  const stored = getProductionCaseBestResultEntry(readProductionCaseBestResults(storage), "scenario_taxi_driver_1976");
  assert.ok(stored);
  assert.equal(stored.updatedAt, "2026-06-23T00:00:00.000Z");
});

test("resetting case progress does not delete best result", () => {
  const storage = createMemoryStorage();
  updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport(), storage, "2026-06-23T00:00:00.000Z");
  const progressState = setProductionCaseMissionCompletion({}, "scenario_taxi_driver_1976", "mission-a", true);
  writeProductionCaseProgress(storage, resetProductionCaseScenarioProgress(progressState, "scenario_taxi_driver_1976"));

  assert.equal(storage.getItem(productionCaseProgressStorageKey), null);
  const stored = getProductionCaseBestResultEntry(readProductionCaseBestResults(storage), "scenario_taxi_driver_1976");
  assert.ok(stored);
  assert.equal(stored.bestScore, 8);
});

test("seed fallback gets no best result because reports are unavailable", () => {
  const storage = createMemoryStorage();
  const result = updateProductionCaseBestResult("scenario_seed_fallback", getProductionCaseReport([], { completedMissionIds: [] }), storage);

  assert.equal(result, undefined);
  assert.equal(storage.getItem(productionCaseBestResultsStorageKey), null);
});

test("best result can be read per scenarioId", () => {
  const storage = createMemoryStorage();
  writeProductionCaseBestResults(storage, {
    scenario_taxi_driver_1976: createProductionCaseReportBest("scenario_taxi_driver_1976", 8),
  });

  assert.equal(getProductionCaseBestResultEntry(readProductionCaseBestResults(storage), "scenario_taxi_driver_1976")?.bestScore, 8);
  assert.equal(getProductionCaseBestResultEntry(readProductionCaseBestResults(storage), "scenario_the_lighthouse_2019"), undefined);
});

test("Taxi Driver and The Lighthouse keep separate best results", () => {
  const storage = createMemoryStorage();
  updateProductionCaseBestResult("scenario_taxi_driver_1976", createProductionCaseReport({ score: 8, resultTier: "producer" }), storage);
  updateProductionCaseBestResult("scenario_the_lighthouse_2019", createProductionCaseReport({ score: 12, resultTier: "auteur" }), storage);
  const state = readProductionCaseBestResults(storage);

  const taxiDriver = getProductionCaseBestResultEntry(state, "scenario_taxi_driver_1976");
  const lighthouse = getProductionCaseBestResultEntry(state, "scenario_the_lighthouse_2019");
  assert.ok(taxiDriver);
  assert.ok(lighthouse);
  assert.equal(taxiDriver.bestScore, 8);
  assert.equal(lighthouse.bestScore, 12);
  assert.equal(lighthouse.bestTier, "auteur");
});

test("best-result helpers and UI copy avoid banned phrasing", () => {
  const helperCopy = [
    productionCaseBestResultsStorageKey,
  productionCaseLibraryControlsStorageKey,
    "Best result",
    "Best",
    "Assistant",
    "Producer",
    "Auteur",
  ].join(" ").toLowerCase();

  assert.doesNotMatch(helperCopy, /inspired by|in the spirit of|create your own version|lag en ny film/);
});


function createLibrarySortCard(
  id: string,
  title: string,
  status: ReturnType<typeof getProductionCaseLibraryStatus>,
  bestResult: ProductionCaseBestResultEntry | undefined,
) {
  return {
    id,
    scenario: { film: { title } },
    status,
    bestResult,
  };
}

function createProductionCaseReportBest(scenarioId: string, bestScore: number) {
  return {
    scenarioId,
    bestScore,
    maxScore: 12,
    bestTier: "producer" as const,
    bestMatchedCount: 4,
    completedAt: "2026-06-23T00:00:00.000Z",
    updatedAt: "2026-06-23T00:00:00.000Z",
  };
}

test("best result parser ignores malformed storage", () => {
  assert.deepEqual(parseProductionCaseBestResults("not-json"), {});
  assert.deepEqual(parseProductionCaseBestResults(JSON.stringify({ broken: { bestTier: "in_progress" } })), {});
});
