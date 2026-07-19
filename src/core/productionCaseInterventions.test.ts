import assert from "node:assert/strict";
import test from "node:test";
import { getProductionCaseConstraintSummary } from "./productionCaseConstraints.js";
import { getProductionCaseInterventionForecast } from "./productionCaseInterventionForecast.js";
import {
  getProductionCaseIntervention,
  isProductionCaseInterventionId,
  productionCaseInterventions,
} from "./productionCaseInterventions.js";
import {
  getProductionCaseProgressEntry,
  parseProductionCaseProgress,
  setProductionCaseMissionChoice,
  setProductionCaseMissionCompletion,
  setProductionCaseMissionIntervention,
} from "./productionCaseProgress.js";

const missions = Array.from({ length: 6 }, (_, index) => {
  const missionNumber = index + 1;
  return {
    id: `mission-${missionNumber}`,
    choices: [
      { id: `mission-${missionNumber}-match-1`, quality: "match" },
      { id: `mission-${missionNumber}-match-2`, quality: "match" },
      { id: `mission-${missionNumber}-partial-1`, quality: "partial" },
      { id: `mission-${missionNumber}-miss-1`, quality: "miss" },
    ],
  };
});

function selectedChoices(suffix: string) {
  return Object.fromEntries(missions.map((mission) => [mission.id, `${mission.id}-${suffix}`]));
}

test("production rescue interventions expose three known tradeoffs", () => {
  assert.equal(productionCaseInterventions.length, 3);
  assert.equal(isProductionCaseInterventionId("cut_scope"), true);
  assert.equal(isProductionCaseInterventionId("free_money"), false);
  assert.equal(getProductionCaseIntervention("bridge_financing")?.budgetDelta, 3);
  assert.equal(getProductionCaseIntervention(undefined), undefined);
});

test("cut scope recovers budget and time while reducing creative control", () => {
  const summary = getProductionCaseConstraintSummary(missions.slice(0, 3), {
    selectedChoicesByMissionId: selectedChoices("match-1"),
    selectedInterventionsByMissionId: { "mission-3": "cut_scope" },
  });

  assert.equal(summary.budgetRemaining, 6);
  assert.equal(summary.scheduleRemaining, 11);
  assert.equal(summary.creativeControl, 4);
  assert.equal(summary.interventionsMade, 1);
  assert.equal(summary.status, "on_track");
});

test("bridge financing can recover an over-budget production with a control cost", () => {
  const progress = {
    selectedChoicesByMissionId: selectedChoices("match-1"),
  };
  const forecast = getProductionCaseInterventionForecast(
    missions,
    progress,
    "mission-6",
    "bridge_financing",
  );

  assert.ok(forecast);
  assert.equal(forecast.before.status, "over_budget");
  assert.equal(forecast.projected.budgetRemaining, 1);
  assert.equal(forecast.projected.scheduleRemaining, 9);
  assert.equal(forecast.projected.creativeControl, 11);
  assert.equal(forecast.projected.status, "strained");
  assert.equal(forecast.effect, "improves");
});

test("extra shoot days can recover a schedule overrun by spending budget", () => {
  const forecast = getProductionCaseInterventionForecast(
    missions,
    { selectedChoicesByMissionId: selectedChoices("partial-1") },
    "mission-6",
    "add_shoot_days",
  );

  assert.ok(forecast);
  assert.equal(forecast.before.status, "over_schedule");
  assert.equal(forecast.projected.budgetRemaining, 8);
  assert.equal(forecast.projected.scheduleRemaining, 1);
  assert.equal(forecast.projected.status, "strained");
  assert.equal(forecast.effect, "improves");
});

test("an intervention forecast replaces an existing intervention in the same phase", () => {
  const forecast = getProductionCaseInterventionForecast(
    missions,
    {
      selectedChoicesByMissionId: selectedChoices("match-1"),
      selectedInterventionsByMissionId: { "mission-6": "bridge_financing" },
    },
    "mission-6",
    "cut_scope",
  );

  assert.ok(forecast);
  assert.equal(forecast.before.budgetRemaining, -2);
  assert.equal(forecast.projected.budgetRemaining, 0);
  assert.equal(forecast.projected.scheduleRemaining, 11);
  assert.equal(forecast.projected.creativeControl, 10);
  assert.equal(forecast.projected.interventionsMade, 1);
});

test("rescue intervention state is preserved across choice and completion updates", () => {
  let state = setProductionCaseMissionChoice({}, "scenario-a", "mission-1", "mission-1-match-1");
  state = setProductionCaseMissionIntervention(state, "scenario-a", "mission-1", "cut_scope");
  state = setProductionCaseMissionCompletion(state, "scenario-a", "mission-1", true);
  state = setProductionCaseMissionChoice(state, "scenario-a", "mission-1", "mission-1-match-2");

  const entry = getProductionCaseProgressEntry(state, "scenario-a");
  assert.equal(entry.selectedInterventionsByMissionId?.["mission-1"], "cut_scope");
  assert.equal(entry.selectedChoicesByMissionId?.["mission-1"], "mission-1-match-2");
  assert.deepEqual(entry.completedMissionIds, ["mission-1"]);

  const cleared = setProductionCaseMissionIntervention(state, "scenario-a", "mission-1", undefined);
  assert.equal(getProductionCaseProgressEntry(cleared, "scenario-a").selectedInterventionsByMissionId, undefined);
});

test("progress parsing keeps known interventions and removes unknown values", () => {
  const parsed = parseProductionCaseProgress(JSON.stringify({
    "scenario-a": {
      scenarioId: "scenario-a",
      completedMissionIds: [],
      selectedInterventionsByMissionId: {
        "mission-1": "cut_scope",
        "mission-2": "free_money",
      },
    },
  }));

  assert.deepEqual(parsed["scenario-a"]?.selectedInterventionsByMissionId, {
    "mission-1": "cut_scope",
  });
});
