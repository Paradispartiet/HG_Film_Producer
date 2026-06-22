import assert from "node:assert/strict";
import test from "node:test";
import {
  getProductionCaseProgressEntry,
  parseProductionCaseProgress,
  productionCaseProgressStorageKey,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
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

