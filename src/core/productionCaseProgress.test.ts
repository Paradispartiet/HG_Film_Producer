import assert from "node:assert/strict";
import test from "node:test";
import {
  countProductionCaseMatches,
  getProductionCaseCollectionSummary,
  getProductionCaseMissionScore,
  getProductionCaseLibraryStatus,
  getProductionCaseProgressEntry,
  getProductionCaseResultTier,
  getProductionCaseScoreSummary,
  parseProductionCaseProgress,
  productionCaseLibraryStatusMatchesFilter,
  productionCaseProgressStorageKey,
  readProductionCaseProgress,
  resetProductionCaseScenarioProgress,
  setProductionCaseMissionChoice,
  setProductionCaseMissionCompletion,
  writeProductionCaseProgress,
} from "./productionCaseProgress.js";

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
    "Resultat",
    "Assistent",
    "Produsent",
    "Auteur",
    "produksjonslogikk",
    "produksjonsvalg",
  ].join(" ").toLowerCase();

  assert.ok(!helperSource.includes("inspired by"));
  assert.ok(!helperSource.includes("in the spirit of"));
});

test("library status shows Ikke startet at 0/6 phases", () => {
  assert.deepEqual(
    getProductionCaseLibraryStatus(libraryStatusMissions, { completedMissionIds: [] }),
    {
      label: "Ikke startet",
      tier: "not_started",
      completedCount: 0,
      missionCount: 6,
    },
  );
});

test("library status shows Under arbeid with partial phase completion", () => {
  const status = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds: ["mission-1", "mission-2", "mission-3"],
  });

  assert.equal(status?.label, "Under arbeid");
  assert.equal(status?.tier, "in_progress");
  assert.equal(`${status?.completedCount}/${status?.missionCount} faser`, "3/6 faser");
});

test("library status shows Assistent, Produsent, and Auteur for completed cases", () => {
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);

  assert.equal(
    getProductionCaseLibraryStatus(libraryStatusMissions, {
      completedMissionIds,
      selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-miss`])),
    })?.label,
    "Assistent",
  );
  assert.equal(
    getProductionCaseLibraryStatus(libraryStatusMissions, {
      completedMissionIds,
      selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-partial`])),
    })?.label,
    "Produsent",
  );
  assert.equal(
    getProductionCaseLibraryStatus(libraryStatusMissions, {
      completedMissionIds,
      selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-match`])),
    })?.label,
    "Auteur",
  );
});

test("library status shows 6/6 faser and Case-score when choices exist", () => {
  const completedMissionIds = libraryStatusMissions.map((mission) => mission.id);
  const status = getProductionCaseLibraryStatus(libraryStatusMissions, {
    completedMissionIds,
    selectedChoicesByMissionId: Object.fromEntries(libraryStatusMissions.map((mission, index) => [mission.id, `choice-${index + 1}-partial`])),
  });

  assert.equal(`${status?.completedCount}/${status?.missionCount} faser`, "6/6 faser");
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

test("library status copy avoids forbidden language", () => {
  const copy = [
    "Case-status",
    "Ikke startet",
    "Under arbeid",
    "Fullført",
    "Assistent",
    "Produsent",
    "Auteur",
    "Case-score",
    "Production cases",
    "Samlet Case-score",
  ].join(" ").toLowerCase();

  assert.ok(!copy.includes("inspired by"));
  assert.ok(!copy.includes("in the spirit of"));
});
