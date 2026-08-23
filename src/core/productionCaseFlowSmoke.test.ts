import assert from "node:assert/strict";
import test from "node:test";
import { canCompleteProductionCaseMission } from "./canCompleteProductionCaseMission.js";
import {
  getProductionCaseLearningNextAction,
  getProductionCaseLearningReport,
  getProductionCaseLearningStatus,
} from "./productionCaseLearning.js";
import {
  getNextProductionCaseId,
  getProductionCaseProgressEntry,
  importProductionCaseProgressBackup,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
  setProductionCaseMissionChoice,
  setProductionCaseMissionCompletion,
  type ProductionCaseProgressStorage,
} from "./productionCaseProgress.js";

const missions = [
  { id: "orientation", phase: "case_orientation", title: "Orientation", choices: [{ id: "orientation-match", label: "Match", quality: "match" }] },
  { id: "screenplay", phase: "screenplay", title: "Screenplay", choices: [{ id: "screenplay-match", label: "Match", quality: "match" }, { id: "screenplay-partial", label: "Partial", quality: "partial" }] },
  { id: "sound", phase: "sound", title: "Sound", choices: [{ id: "sound-match", label: "Match", quality: "match" }, { id: "sound-miss", label: "Miss", quality: "miss" }] },
] as const;

function createStorage(): ProductionCaseProgressStorage {
  const values = new Map<string, string>();
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => { values.set(key, value); }, removeItem: (key) => { values.delete(key); } };
}

test("qualitative learning report is gated until all phases are complete", () => {
  const progress = {
    completedMissionIds: ["orientation", "screenplay"],
    selectedChoicesByMissionId: {
      orientation: "orientation-match",
      screenplay: "screenplay-partial",
      sound: "sound-miss",
    },
  };

  assert.equal(getProductionCaseLearningStatus(missions, progress).status, "in_progress");
  assert.equal(getProductionCaseLearningReport(missions, progress), undefined);

  const completed = { ...progress, completedMissionIds: missions.map((mission) => mission.id) };
  const report = getProductionCaseLearningReport(missions, completed);
  assert.equal(getProductionCaseLearningStatus(missions, completed).status, "completed");
  assert.equal(report?.clearPhases.length, 1);
  assert.equal(report?.developingPhases.length, 1);
  assert.equal(report?.revisitPhases.length, 1);
  assert.equal("score" in (report ?? {}), false);
  assert.equal("resultTier" in (report ?? {}), false);
});

test("phase completion requires an explicit valid choice and next action stays instructional", () => {
  const empty = { completedMissionIds: [], selectedChoicesByMissionId: {} };
  assert.equal(canCompleteProductionCaseMission({ selectedChoicesByMissionId: {} }, "orientation", missions[0].choices), false);
  assert.equal(getProductionCaseLearningNextAction(missions, empty)?.actionType, "choose");

  const chosen = { completedMissionIds: [], selectedChoicesByMissionId: { orientation: "orientation-match" } };
  assert.equal(canCompleteProductionCaseMission({ selectedChoicesByMissionId: chosen.selectedChoicesByMissionId }, "orientation", missions[0].choices), true);
  assert.equal(canCompleteProductionCaseMission({ selectedChoicesByMissionId: { orientation: "missing" } }, "orientation", missions[0].choices), false);
  assert.equal(getProductionCaseLearningNextAction(missions, chosen)?.actionType, "choose");

  const allChosen = {
    completedMissionIds: [],
    selectedChoicesByMissionId: {
      orientation: "orientation-match",
      screenplay: "screenplay-match",
      sound: "sound-match",
    },
  };
  assert.equal(getProductionCaseLearningNextAction(missions, allChosen)?.actionType, "complete");
});

test("production case continuation resets only the selected case and resolves catalogue navigation", () => {
  let state = {};
  state = setProductionCaseMissionChoice(state, "case-a", "orientation", "orientation-match", "2026-08-23T12:00:00.000Z");
  state = setProductionCaseMissionCompletion(state, "case-a", "orientation", true, "2026-08-23T12:01:00.000Z");
  state = setProductionCaseMissionChoice(state, "case-b", "sound", "sound-match", "2026-08-23T12:02:00.000Z");

  const reset = resetProductionCaseScenarioProgress(state, "case-a");
  assert.deepEqual(getProductionCaseProgressEntry(reset, "case-a"), { scenarioId: "case-a", completedMissionIds: [] });
  assert.equal(getProductionCaseProgressEntry(reset, "case-b").selectedChoicesByMissionId?.sound, "sound-match");
  assert.equal(getNextProductionCaseId(["case-a", "case-b"], "case-a"), "case-b");
  assert.equal(getNextProductionCaseId(["case-a", "case-b"], "case-b"), undefined);
});

test("legacy v1 backup imports learning progress while ignoring historical best-result scoring", () => {
  const storage = createStorage();
  const backup = JSON.stringify({
    version: "hg_film_production_case_progress_export_v1",
    exportedAt: "2026-07-03T00:00:00.000Z",
    currentProgress: {
      "case-a": {
        scenarioId: "case-a",
        completedMissionIds: ["orientation"],
        selectedChoicesByMissionId: { orientation: "orientation-match" },
      },
    },
    bestResults: {
      "case-a": { scenarioId: "case-a", bestScore: 6, maxScore: 6, bestTier: "auteur", bestMatchedCount: 3, completedAt: "x", updatedAt: "x" },
    },
    libraryControls: { caseStatusFilter: "in_progress", masteryFilter: "auteur_best", sortMode: "best_score_desc", searchQuery: "case" },
  });

  const imported = importProductionCaseProgressBackup(backup, storage, "2026-08-23T12:30:00.000Z");
  assert.equal(imported.ok, true);
  assert.equal(readProductionCaseProgress(storage)["case-a"]?.completedMissionIds[0], "orientation");
});
