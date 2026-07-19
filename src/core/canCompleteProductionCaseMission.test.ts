import assert from "node:assert/strict";
import test from "node:test";

import { canCompleteProductionCaseMission } from "./canCompleteProductionCaseMission.js";

test("Production Case phase cannot complete before a choice is selected", () => {
  assert.equal(
    canCompleteProductionCaseMission(
      { selectedChoicesByMissionId: undefined },
      "mission-screenplay",
    ),
    false,
  );

  assert.equal(
    canCompleteProductionCaseMission(
      { selectedChoicesByMissionId: { "mission-screenplay": "" } },
      "mission-screenplay",
    ),
    false,
  );
});

test("Production Case phase can complete after a choice is selected", () => {
  assert.equal(
    canCompleteProductionCaseMission(
      {
        selectedChoicesByMissionId: {
          "mission-screenplay": "choice-screenplay-match-1",
        },
      },
      "mission-screenplay",
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
    ),
    false,
  );
});
