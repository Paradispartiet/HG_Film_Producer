import assert from "node:assert/strict";
import test from "node:test";

import {
  getProductionCaseChoiceConstraintImpact,
  getProductionCaseConstraintSummary,
  getProductionCaseConstraintSummaryBeforeMission,
} from "./productionCaseConstraints.js";

const missions = [
  {
    id: "orientation",
    choices: [
      { id: "case-choice-orientation-match-1", quality: "match" },
      { id: "case-choice-orientation-match-2", quality: "match" },
      { id: "case-choice-orientation-partial", quality: "partial" },
      { id: "case-choice-orientation-miss", quality: "miss" },
    ],
  },
  {
    id: "screenplay",
    choices: [
      { id: "case-choice-screenplay-match-1", quality: "match" },
      { id: "case-choice-screenplay-match-2", quality: "match" },
      { id: "case-choice-screenplay-partial", quality: "partial" },
      { id: "case-choice-screenplay-miss", quality: "miss" },
    ],
  },
  {
    id: "camera",
    choices: [
      { id: "case-choice-camera-match-1", quality: "match" },
      { id: "case-choice-camera-match-2", quality: "match" },
      { id: "case-choice-camera-partial", quality: "partial" },
      { id: "case-choice-camera-miss", quality: "miss" },
    ],
  },
] as const;

test("choice impacts distinguish creative, balanced, compromise and mismatch approaches", () => {
  assert.deepEqual(getProductionCaseChoiceConstraintImpact(missions[0].choices[0]), {
    approach: "creative_push",
    label: "Creative push",
    budgetDelta: -2,
    scheduleDelta: 0,
    creativeControlDelta: 2,
  });
  assert.equal(getProductionCaseChoiceConstraintImpact(missions[0].choices[1]).approach, "balanced_execution");
  assert.equal(getProductionCaseChoiceConstraintImpact(missions[0].choices[2]).approach, "schedule_compromise");
  assert.equal(getProductionCaseChoiceConstraintImpact(missions[0].choices[3]).approach, "costly_mismatch");
});

test("constraint ledger accumulates consequences across phases", () => {
  const summary = getProductionCaseConstraintSummary(missions, {
    selectedChoicesByMissionId: {
      orientation: "case-choice-orientation-match-1",
      screenplay: "case-choice-screenplay-match-2",
      camera: "case-choice-camera-partial",
    },
  });

  assert.equal(summary.budgetRemaining, 7);
  assert.equal(summary.scheduleRemaining, 7);
  assert.equal(summary.creativeControl, 3);
  assert.equal(summary.choicesMade, 3);
  assert.equal(summary.status, "on_track");
});

test("constraint ledger reports overruns without changing saved progress", () => {
  const repeatedMissions = Array.from({ length: 6 }, (_, index) => ({
    id: `phase-${index}`,
    choices: [{ id: `case-choice-phase-${index}-miss`, quality: "miss" }],
  }));
  const selectedChoicesByMissionId = Object.fromEntries(
    repeatedMissions.map((mission) => [mission.id, mission.choices[0]?.id ?? ""]),
  );
  const summary = getProductionCaseConstraintSummary(repeatedMissions, { selectedChoicesByMissionId });

  assert.equal(summary.budgetRemaining, -2);
  assert.equal(summary.scheduleRemaining, -2);
  assert.equal(summary.creativeControl, -6);
  assert.equal(summary.status, "overextended");
});

test("carryover summary only includes choices before the requested mission", () => {
  const progress = {
    selectedChoicesByMissionId: {
      orientation: "case-choice-orientation-match-1",
      screenplay: "case-choice-screenplay-miss",
      camera: "case-choice-camera-match-2",
    },
  };

  const beforeCamera = getProductionCaseConstraintSummaryBeforeMission(missions, progress, "camera");
  assert.equal(beforeCamera.budgetRemaining, 6);
  assert.equal(beforeCamera.scheduleRemaining, 8);
  assert.equal(beforeCamera.creativeControl, 1);
  assert.equal(beforeCamera.choicesMade, 2);
});

test("stale saved choice IDs are ignored safely", () => {
  const summary = getProductionCaseConstraintSummary(missions, {
    selectedChoicesByMissionId: { orientation: "removed-choice" },
  });

  assert.equal(summary.budgetRemaining, 10);
  assert.equal(summary.scheduleRemaining, 10);
  assert.equal(summary.creativeControl, 0);
  assert.equal(summary.choicesMade, 0);
});
