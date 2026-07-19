import assert from "node:assert/strict";
import test from "node:test";

import { canCompleteProductionCaseMission } from "./canCompleteProductionCaseMission.js";

const screenplayChoices = [
  { id: "choice-screenplay-match-1" },
  { id: "choice-screenplay-partial" },
] as const;

test("Production Case phase cannot complete before a choice is selected", () => {
  assert.equal(
    canCompleteProductionCaseMission(
      {},
      "mission-screenplay",
      screenplayChoices,
    ),
    false,
  );

  assert.equal(
    canCompleteProductionCaseMission(
      { selectedChoicesByMissionId: { "mission-screenplay": "" } },
      "mission-screenplay",
      screenplayChoices,
    ),
    false,
  );
});

test("Production Case phase can complete after a valid choice is selected", () => {
  assert.equal(
    canCompleteProductionCaseMission(
      {
        selectedChoicesByMissionId: {
          "mission-screenplay": "choice-screenplay-match-1",
        },
      },
      "mission-screenplay",
      screenplayChoices,
    ),
    true,
  );
});

test("a choice for another phase does not unlock this phase", () => {
  assert.equal(
    canCompleteProductionCaseMission(
      {
        selectedChoicesByMissionId: {
          "mission-sound": "choice-sound-match-1",
        },
      },
      "mission-screenplay",
      screenplayChoices,
    ),
    false,
  );
});

test("a stale saved choice does not count as a completed phase", () => {
  assert.equal(
    canCompleteProductionCaseMission(
      {
        selectedChoicesByMissionId: {
          "mission-screenplay": "choice-that-no-longer-exists",
        },
      },
      "mission-screenplay",
      screenplayChoices,
    ),
    false,
  );
});
