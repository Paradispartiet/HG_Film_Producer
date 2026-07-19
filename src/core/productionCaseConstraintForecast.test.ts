import test from "node:test";
import assert from "node:assert/strict";

import { getProductionCaseChoiceConstraintForecast } from "./productionCaseConstraintForecast.js";
import type { ProductionCaseConstraintMission } from "./productionCaseConstraints.js";

function createMission(index: number): ProductionCaseConstraintMission {
  const id = `mission-${index}`;
  return {
    id,
    choices: [
      { id: `${id}-match-1`, quality: "match" },
      { id: `${id}-match-2`, quality: "match" },
      { id: `${id}-partial-1`, quality: "partial" },
      { id: `${id}-miss-1`, quality: "miss" },
    ],
  };
}

const missions = Array.from({ length: 6 }, (_, index) => createMission(index + 1));

test("forecast shows the state after a candidate choice", () => {
  const forecast = getProductionCaseChoiceConstraintForecast(
    missions,
    { selectedChoicesByMissionId: { "mission-1": "mission-1-match-2" } },
    "mission-2",
    "mission-2-match-1",
  );

  assert.ok(forecast);
  assert.equal(forecast.impact.approach, "creative_push");
  assert.equal(forecast.projected.budgetRemaining, 7);
  assert.equal(forecast.projected.scheduleRemaining, 9);
  assert.equal(forecast.projected.creativeControl, 3);
  assert.equal(forecast.projected.status, "on_track");
  assert.equal(forecast.tierCap, undefined);
  assert.equal(forecast.isOverrun, false);
});

test("forecast replaces an existing choice instead of double counting it", () => {
  const forecast = getProductionCaseChoiceConstraintForecast(
    missions,
    { selectedChoicesByMissionId: { "mission-1": "mission-1-match-1" } },
    "mission-1",
    "mission-1-match-2",
  );

  assert.ok(forecast);
  assert.equal(forecast.projected.budgetRemaining, 9);
  assert.equal(forecast.projected.scheduleRemaining, 9);
  assert.equal(forecast.projected.creativeControl, 1);
  assert.equal(forecast.projected.choicesMade, 1);
});

test("forecast ignores stored choices from later phases", () => {
  const forecast = getProductionCaseChoiceConstraintForecast(
    missions,
    {
      selectedChoicesByMissionId: {
        "mission-1": "mission-1-match-2",
        "mission-5": "mission-5-miss-1",
        "mission-6": "mission-6-miss-1",
      },
    },
    "mission-2",
    "mission-2-match-2",
  );

  assert.ok(forecast);
  assert.equal(forecast.projected.budgetRemaining, 8);
  assert.equal(forecast.projected.scheduleRemaining, 8);
  assert.equal(forecast.projected.status, "on_track");
  assert.equal(forecast.projected.choicesMade, 2);
});

test("forecast warns when a choice triggers a budget overrun", () => {
  const selectedChoicesByMissionId = Object.fromEntries(
    missions.slice(0, 5).map((mission) => [mission.id, `${mission.id}-match-1`]),
  );
  const forecast = getProductionCaseChoiceConstraintForecast(
    missions,
    { selectedChoicesByMissionId },
    "mission-6",
    "mission-6-match-1",
  );

  assert.ok(forecast);
  assert.equal(forecast.projected.status, "over_budget");
  assert.equal(forecast.projected.budgetRemaining, -2);
  assert.equal(forecast.tierCap, "producer");
  assert.equal(forecast.isOverrun, true);
  assert.match(forecast.description, /at most Producer/);
});

test("forecast warns when a choice overextends both resources", () => {
  const selectedChoicesByMissionId = Object.fromEntries(
    missions.slice(0, 5).map((mission) => [mission.id, `${mission.id}-miss-1`]),
  );
  const forecast = getProductionCaseChoiceConstraintForecast(
    missions,
    { selectedChoicesByMissionId },
    "mission-6",
    "mission-6-miss-1",
  );

  assert.ok(forecast);
  assert.equal(forecast.projected.status, "overextended");
  assert.equal(forecast.projected.budgetRemaining, -2);
  assert.equal(forecast.projected.scheduleRemaining, -2);
  assert.equal(forecast.tierCap, "assistant");
  assert.match(forecast.description, /at most Assistant/);
});

test("forecast returns undefined for unknown missions and choices", () => {
  assert.equal(
    getProductionCaseChoiceConstraintForecast(missions, {}, "missing", "missing-choice"),
    undefined,
  );
  assert.equal(
    getProductionCaseChoiceConstraintForecast(missions, {}, "mission-1", "missing-choice"),
    undefined,
  );
});
