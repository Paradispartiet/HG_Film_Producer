import assert from "node:assert/strict";
import test from "node:test";
import {
  countProductionCaseMatches,
  getProductionCaseProgressEntry,
  parseProductionCaseProgress,
  productionCaseProgressStorageKey,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
  setProductionCaseMissionChoice,
  setProductionCaseMissionCompletion,
  writeProductionCaseProgress,
} from "./productionCaseProgress.js";

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
