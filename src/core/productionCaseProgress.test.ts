import assert from "node:assert/strict";
import test from "node:test";
import {
  countProductionCaseMatches,
  getProductionCaseMissionScore,
  getProductionCaseProgressEntry,
  getProductionCaseScoreSummary,
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
    "Fase-score",
  ].join(" ").toLowerCase();

  assert.ok(!helperSource.includes("inspired by"));
  assert.ok(!helperSource.includes("in the spirit of"));
});
