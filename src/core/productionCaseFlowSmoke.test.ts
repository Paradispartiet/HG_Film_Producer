import assert from "node:assert/strict";
import test from "node:test";
import {
  countProductionCaseMatches,
  getNextProductionCaseId,
  getProductionCaseLibraryStatus,
  getProductionCaseNextAction,
  getProductionCaseReport,
  getProductionCaseResultTier,
  getProductionCaseScoreSummary,
  isProductionCaseFirstSession,
  resetProductionCaseScenarioProgress,
  updateProductionCaseBestResult,
  readProductionCaseBestResults,
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

test("production case report and best result are gated until all phases are complete", () => {
  const storage = createStorage();
  const progress = { completedMissionIds: ["orientation", "screenplay"], selectedChoicesByMissionId: { orientation: "orientation-match", screenplay: "screenplay-match", sound: "sound-match" } };
  const report = getProductionCaseReport(missions, progress);
  assert.equal(report?.resultTier, "in_progress");
  assert.equal(updateProductionCaseBestResult("case-a", report, storage, "2026-07-03T00:00:00.000Z"), undefined);
  assert.deepEqual(readProductionCaseBestResults(storage), {});

  const completedReport = getProductionCaseReport(missions, { ...progress, completedMissionIds: missions.map((mission) => mission.id) });
  assert.equal(completedReport?.resultTier, "auteur");
  assert.equal(updateProductionCaseBestResult("case-a", completedReport, storage, "2026-07-03T00:00:00.000Z")?.bestTier, "auteur");
});

test("production case continuation helpers reset runs without deleting best results and resolve next case safely", () => {
  const currentProgress = { "case-a": { scenarioId: "case-a", completedMissionIds: ["orientation"] } };
  const resetProgress = resetProductionCaseScenarioProgress(currentProgress, "case-a");
  assert.equal(resetProgress["case-a"], undefined);

  const storage = createStorage();
  const report = getProductionCaseReport(missions, { completedMissionIds: missions.map((mission) => mission.id), selectedChoicesByMissionId: { orientation: "orientation-match", screenplay: "screenplay-match", sound: "sound-match" } });
  updateProductionCaseBestResult("case-a", report, storage, "2026-07-03T00:00:00.000Z");
  assert.equal(readProductionCaseBestResults(storage)["case-a"]?.bestScore, 6);
  assert.equal(getNextProductionCaseId(["case-a", "case-b"], "case-a"), "case-b");
  assert.equal(getNextProductionCaseId(["case-a", "case-b"], "case-b"), undefined);
  assert.equal(getNextProductionCaseId(["case-a", "case-b"], "missing-case"), "case-a");
  assert.equal(getNextProductionCaseId([], "case-a"), undefined);
});

test("production case first-session and next-action logic tolerate empty and returning-player state", () => {
  assert.equal(isProductionCaseFirstSession({ progress: {}, bestResults: {} }), true);
  assert.equal(isProductionCaseFirstSession({ progress: { "case-a": { scenarioId: "case-a", completedMissionIds: ["orientation"] } }, bestResults: {} }), false);
  assert.equal(isProductionCaseFirstSession({ progress: {}, bestResults: { "case-a": { scenarioId: "case-a", bestScore: 4, maxScore: 6, bestTier: "producer", bestMatchedCount: 2, completedAt: "2026-07-03T00:00:00.000Z", updatedAt: "2026-07-03T00:00:00.000Z" } } }), false);
  assert.equal(getProductionCaseNextAction([]), undefined);

  const status = getProductionCaseLibraryStatus(missions, { completedMissionIds: ["orientation"], selectedChoicesByMissionId: { orientation: "orientation-match" } });
  const action = getProductionCaseNextAction([{ ...status!, scenarioId: "case-a", title: "Case A" }]);
  assert.equal(action?.actionType, "continue");
  assert.equal(action?.scenarioId, "case-a");
});

test("production case score and report invariants are bounded and deterministic for missing selections", () => {
  const emptySummary = getProductionCaseScoreSummary(missions, {});
  assert.deepEqual(emptySummary, { score: 0, maxScore: 6 });
  assert.equal(getProductionCaseResultTier(emptySummary, 0), "not_started");
  assert.equal(getProductionCaseResultTier({ score: 3, maxScore: 6 }, 3), "producer");
  assert.equal(getProductionCaseResultTier({ score: 3, maxScore: 6 }, 3), "producer");

  const matches = countProductionCaseMatches({ orientation: "orientation-match", screenplay: "missing-choice", sound: "sound-match" }, missions);
  assert.deepEqual(matches, { matchCount: 2, selectedCount: 2 });
  const report = getProductionCaseReport(missions, { completedMissionIds: [], selectedChoicesByMissionId: {} });
  assert.equal(report?.matchedPhases.length, 0);
  assert.ok((report?.weakPhases.length ?? 0) <= missions.length);
  assert.ok((report?.score ?? 0) <= (report?.maxScore ?? 0));
});
