import assert from "node:assert/strict";
import test from "node:test";
import {
  createProductionCaseProgressExport,
  defaultProductionCaseLibraryControls,
  getNextProductionCaseId,
  getProductionCaseCollectionSummary,
  getProductionCaseLibraryStatus,
  getProductionCaseProgressEntry,
  importProductionCaseProgressBackup,
  parseProductionCaseLibraryControls,
  parseProductionCaseProgress,
  previewProductionCaseProgressBackup,
  productionCaseLibraryControlsStorageKey,
  productionCaseProgressExportVersion,
  productionCaseProgressStorageKey,
  readProductionCaseLibraryControls,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
  setProductionCaseMissionChoice,
  setProductionCaseMissionCompletion,
  writeProductionCaseLibraryControls,
  writeProductionCaseProgress,
  type ProductionCaseProgressStorage,
} from "./productionCaseProgress.js";

const legacyBestResultsStorageKey = "hg_film_production_case_best_results_v1";

const missions = [
  { id: "orientation", choices: [{ id: "orientation-a" }, { id: "orientation-b" }] },
  { id: "screenplay", choices: [{ id: "screenplay-a" }, { id: "screenplay-b" }] },
  { id: "sound", choices: [{ id: "sound-a" }, { id: "sound-b" }] },
] as const;

function createStorage(seed: Record<string, string> = {}): ProductionCaseProgressStorage & { values: Map<string, string> } {
  const values = new Map(Object.entries(seed));
  return {
    values,
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => { values.set(key, value); },
    removeItem: (key) => { values.delete(key); },
  };
}

test("progress parsing normalizes scenario identity, duplicate completions, choices, and malformed input", () => {
  assert.deepEqual(parseProductionCaseProgress(null), {});
  assert.deepEqual(parseProductionCaseProgress("not json"), {});
  assert.deepEqual(parseProductionCaseProgress("[]"), {});

  const parsed = parseProductionCaseProgress(JSON.stringify({
    "case-a": {
      scenarioId: "wrong-id",
      completedMissionIds: ["orientation", "orientation", "", 4],
      selectedChoicesByMissionId: { orientation: "orientation-a", sound: "", invalid: 7 },
      updatedAt: "2026-08-23T12:00:00.000Z",
    },
    "case-b": null,
  }));

  assert.deepEqual(parsed["case-a"], {
    scenarioId: "case-a",
    completedMissionIds: ["orientation"],
    selectedChoicesByMissionId: { orientation: "orientation-a" },
    updatedAt: "2026-08-23T12:00:00.000Z",
  });
  assert.deepEqual(parsed["case-b"], { scenarioId: "case-b", completedMissionIds: [] });
});

test("progress helpers preserve choices while completing phases and reset only the selected case", () => {
  let state = {};
  state = setProductionCaseMissionChoice(state, "case-a", "orientation", "orientation-a", "2026-08-23T12:00:00.000Z");
  state = setProductionCaseMissionCompletion(state, "case-a", "orientation", true, "2026-08-23T12:01:00.000Z");
  state = setProductionCaseMissionCompletion(state, "case-a", "orientation", true, "2026-08-23T12:02:00.000Z");
  state = setProductionCaseMissionChoice(state, "case-b", "sound", "sound-a", "2026-08-23T12:03:00.000Z");

  assert.deepEqual(getProductionCaseProgressEntry(state, "case-a").completedMissionIds, ["orientation"]);
  assert.equal(getProductionCaseProgressEntry(state, "case-a").selectedChoicesByMissionId?.orientation, "orientation-a");
  assert.deepEqual(getProductionCaseProgressEntry(state, "missing"), { scenarioId: "missing", completedMissionIds: [] });

  const reset = resetProductionCaseScenarioProgress(state, "case-a");
  assert.equal(reset["case-a"], undefined);
  assert.equal(reset["case-b"]?.selectedChoicesByMissionId?.sound, "sound-a");
});

test("writing learning progress removes inert legacy score storage and removes empty progress", () => {
  const storage = createStorage({ [legacyBestResultsStorageKey]: "legacy-score-data" });
  const state = {
    "case-a": { scenarioId: "case-a", completedMissionIds: ["orientation"] },
  };

  writeProductionCaseProgress(storage, state);
  assert.deepEqual(readProductionCaseProgress(storage), state);
  assert.equal(storage.getItem(legacyBestResultsStorageKey), null);

  writeProductionCaseProgress(storage, {});
  assert.equal(storage.getItem(productionCaseProgressStorageKey), null);
});

test("library status is qualitative and depends only on choices and phase completion", () => {
  const notStarted = getProductionCaseLibraryStatus(missions, { completedMissionIds: [] });
  assert.deepEqual(notStarted, {
    status: "not_started",
    label: "Not started",
    completedCount: 0,
    missionCount: 3,
    selectedCount: 0,
  });

  const selected = getProductionCaseLibraryStatus(missions, {
    completedMissionIds: [],
    selectedChoicesByMissionId: { orientation: "orientation-a" },
  });
  assert.equal(selected?.status, "in_progress");
  assert.equal(selected?.selectedCount, 1);

  const completed = getProductionCaseLibraryStatus(missions, {
    completedMissionIds: ["orientation", "screenplay", "sound", "unknown", "sound"],
    selectedChoicesByMissionId: {
      orientation: "orientation-a",
      screenplay: "screenplay-b",
      sound: "sound-a",
    },
  });
  assert.equal(completed?.status, "completed");
  assert.equal(completed?.completedCount, 3);
  assert.equal("score" in (completed ?? {}), false);
  assert.equal("tier" in (completed ?? {}), false);
  assert.equal(getProductionCaseLibraryStatus([], { completedMissionIds: [] }), undefined);
});

test("collection summary counts learning states without performance ranks", () => {
  const statuses = [
    getProductionCaseLibraryStatus(missions, { completedMissionIds: [] }),
    getProductionCaseLibraryStatus(missions, { completedMissionIds: ["orientation"] }),
    getProductionCaseLibraryStatus(missions, { completedMissionIds: missions.map((mission) => mission.id) }),
    undefined,
  ];

  assert.deepEqual(getProductionCaseCollectionSummary(statuses), {
    totalCases: 3,
    notStartedCount: 1,
    inProgressCount: 1,
    completedCount: 1,
  });
});

test("library controls preserve useful filters and normalize obsolete score sorts", () => {
  assert.deepEqual(parseProductionCaseLibraryControls(null), defaultProductionCaseLibraryControls);
  assert.deepEqual(parseProductionCaseLibraryControls("bad json"), defaultProductionCaseLibraryControls);

  assert.deepEqual(parseProductionCaseLibraryControls(JSON.stringify({
    caseStatusFilter: "completed",
    masteryFilter: "auteur_best",
    sortMode: "best_score_desc",
    searchQuery: "Tokyo",
  })), {
    caseStatusFilter: "completed",
    sortMode: "default",
    searchQuery: "Tokyo",
  });

  const storage = createStorage();
  writeProductionCaseLibraryControls(storage, { caseStatusFilter: "in_progress", sortMode: "title_asc", searchQuery: "sound" });
  assert.deepEqual(readProductionCaseLibraryControls(storage), {
    caseStatusFilter: "in_progress",
    sortMode: "title_asc",
    searchQuery: "sound",
  });
  assert.ok(storage.getItem(productionCaseLibraryControlsStorageKey));
});

test("progress export v2 contains learning progress and controls only", () => {
  const storage = createStorage({
    [productionCaseProgressStorageKey]: JSON.stringify({
      "case-a": { scenarioId: "case-a", completedMissionIds: ["orientation"], selectedChoicesByMissionId: { orientation: "orientation-a" } },
    }),
    [productionCaseLibraryControlsStorageKey]: JSON.stringify({ caseStatusFilter: "in_progress", sortMode: "title_asc", searchQuery: "case" }),
    [legacyBestResultsStorageKey]: JSON.stringify({ "case-a": { bestScore: 99, bestTier: "auteur" } }),
  });

  const backup = createProductionCaseProgressExport(storage, "2026-08-23T13:00:00.000Z");
  assert.equal(backup.version, productionCaseProgressExportVersion);
  assert.equal(backup.exportedAt, "2026-08-23T13:00:00.000Z");
  assert.equal(Object.keys(backup.currentProgress).length, 1);
  assert.equal("bestResults" in backup, false);
  assert.equal(JSON.stringify(backup).includes("bestScore"), false);
});

test("v2 backup preview and import restore learning progress and clear legacy score storage", () => {
  const source = createStorage({
    [productionCaseProgressStorageKey]: JSON.stringify({
      "case-a": { scenarioId: "case-a", completedMissionIds: ["orientation"] },
    }),
    [productionCaseLibraryControlsStorageKey]: JSON.stringify({ caseStatusFilter: "completed", sortMode: "title_asc", searchQuery: "A" }),
  });
  const rawJson = JSON.stringify(createProductionCaseProgressExport(source, "2026-08-23T13:30:00.000Z"));
  const preview = previewProductionCaseProgressBackup(rawJson);
  assert.deepEqual(preview, {
    ok: true,
    exportedAt: "2026-08-23T13:30:00.000Z",
    currentProgressCount: 1,
    hasLibraryControls: true,
  });

  const target = createStorage({ [legacyBestResultsStorageKey]: "legacy" });
  const imported = importProductionCaseProgressBackup(rawJson, target, "2026-08-23T13:31:00.000Z");
  assert.deepEqual(imported, {
    ok: true,
    importedAt: "2026-08-23T13:31:00.000Z",
    counts: { currentProgressCount: 1 },
  });
  assert.equal(readProductionCaseProgress(target)["case-a"]?.completedMissionIds[0], "orientation");
  assert.equal(readProductionCaseLibraryControls(target).sortMode, "title_asc");
  assert.equal(target.getItem(legacyBestResultsStorageKey), null);
});

test("legacy v1 backups remain importable but legacy best-result payloads are ignored", () => {
  const rawJson = JSON.stringify({
    version: "hg_film_production_case_progress_export_v1",
    exportedAt: "2026-07-03T00:00:00.000Z",
    currentProgress: {
      "case-a": { scenarioId: "case-a", completedMissionIds: ["orientation"], selectedChoicesByMissionId: { orientation: "orientation-a" } },
    },
    bestResults: {
      "case-a": { scenarioId: "case-a", bestScore: 6, maxScore: 6, bestTier: "auteur", bestMatchedCount: 3, completedAt: "x", updatedAt: "x" },
    },
    libraryControls: {
      caseStatusFilter: "in_progress",
      masteryFilter: "auteur_best",
      sortMode: "recent_best",
      searchQuery: "legacy",
    },
  });

  const storage = createStorage({ [legacyBestResultsStorageKey]: "old-local-value" });
  const result = importProductionCaseProgressBackup(rawJson, storage, "2026-08-23T14:00:00.000Z");
  assert.equal(result.ok, true);
  assert.equal(readProductionCaseProgress(storage)["case-a"]?.selectedChoicesByMissionId?.orientation, "orientation-a");
  assert.deepEqual(readProductionCaseLibraryControls(storage), {
    caseStatusFilter: "in_progress",
    sortMode: "default",
    searchQuery: "legacy",
  });
  assert.equal(storage.getItem(legacyBestResultsStorageKey), null);
});

test("backup validation rejects malformed progress without accepting score-only legacy state as progress", () => {
  assert.deepEqual(previewProductionCaseProgressBackup("not json"), { ok: false, reason: "invalid_json" });
  assert.deepEqual(previewProductionCaseProgressBackup(JSON.stringify({ version: "unknown" })), { ok: false, reason: "invalid_version" });
  assert.deepEqual(previewProductionCaseProgressBackup(JSON.stringify({
    version: productionCaseProgressExportVersion,
    exportedAt: "2026-08-23T15:00:00.000Z",
    currentProgress: { "case-a": { scenarioId: "wrong", completedMissionIds: [] } },
    libraryControls: defaultProductionCaseLibraryControls,
  })), { ok: false, reason: "invalid_current_progress" });
});

test("next-case navigation is deterministic at catalogue boundaries", () => {
  assert.equal(getNextProductionCaseId(["case-a", "case-b"], "case-a"), "case-b");
  assert.equal(getNextProductionCaseId(["case-a", "case-b"], "case-b"), undefined);
  assert.equal(getNextProductionCaseId(["case-a", "case-b"], "missing"), "case-a");
  assert.equal(getNextProductionCaseId([], "case-a"), undefined);
});
