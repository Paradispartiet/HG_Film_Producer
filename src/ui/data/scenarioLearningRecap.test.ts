import assert from "node:assert/strict";
import test from "node:test";
import { createScenarioLearningRecap } from "./scenarioLearningRecap";

const baseArgs = {
  scenarioTitle: "Test Scenario",
  verificationStatus: "seeded" as const,
  selectedTargetLabels: [] as readonly string[],
  unselectedTargetLabels: ["Genre control", "Tone control", "Script control", "Camera control", "Edit control"] as readonly string[],
  alignmentTier: "none" as const
};

test("createScenarioLearningRecap handles none without selected targets", () => {
  const recap = createScenarioLearningRecap(baseArgs);

  assert.equal(recap.intro, "This run stayed broad, so the learning recap focuses on what the scenario was asking for.");
  assert.deepEqual(recap.learned, ["Recognize target: Genre control", "Recognize target: Tone control", "Recognize target: Script control"]);
  assert.deepEqual(recap.nextFocus, ["Genre control", "Tone control", "Script control", "Camera control"]);
});

test("createScenarioLearningRecap handles loose with selected and unselected targets", () => {
  const recap = createScenarioLearningRecap({
    ...baseArgs,
    selectedTargetLabels: ["Genre control", "Tone control"],
    unselectedTargetLabels: ["Script control", "Camera control"],
    alignmentTier: "loose"
  });

  assert.equal(recap.intro, "This run touched the classic brief, but left several craft targets open.");
  assert.deepEqual(recap.learned, ["Genre control", "Tone control"]);
  assert.deepEqual(recap.nextFocus, ["Script control", "Camera control"]);
});

test("createScenarioLearningRecap handles strong with all targets selected", () => {
  const recap = createScenarioLearningRecap({
    ...baseArgs,
    selectedTargetLabels: ["Genre control", "Tone control", "Script control"],
    unselectedTargetLabels: [],
    alignmentTier: "strong"
  });

  assert.equal(recap.intro, "This run strongly committed to the classic scenario’s craft direction.");
  assert.deepEqual(recap.learned, ["Genre control", "Tone control", "Script control"]);
  assert.deepEqual(recap.nextFocus, ["Try the same scenario with a different production scale."]);
});

test("createScenarioLearningRecap shows needs_research verification note", () => {
  const recap = createScenarioLearningRecap({ ...baseArgs, verificationStatus: "needs_research" });

  assert.equal(recap.verificationNote, "This is a seeded learning recap. Film-specific historical claims still need research.");
});
