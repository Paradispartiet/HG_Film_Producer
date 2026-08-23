import assert from "node:assert/strict";
import test from "node:test";
import { createScenarioLearningRecap } from "./scenarioLearningRecap";

const baseArgs = {
  scenarioTitle: "Test Scenario",
  verificationStatus: "seeded" as const,
  selectedTargetLabels: [] as readonly string[],
  unselectedTargetLabels: ["Genre control", "Tone control", "Script control", "Camera control", "Edit control"] as readonly string[],
  alignmentAssessment: "reconsider" as const
};

test("createScenarioLearningRecap guides reconsideration without selected methods", () => {
  const recap = createScenarioLearningRecap(baseArgs);

  assert.equal(recap.intro, "The report highlights production methods worth comparing again with the film-specific explanations.");
  assert.deepEqual(recap.learned, ["Compare method: Genre control", "Compare method: Tone control", "Compare method: Script control"]);
  assert.deepEqual(recap.nextFocus, ["Genre control", "Tone control", "Script control", "Camera control"]);
});

test("createScenarioLearningRecap handles a partial qualitative assessment", () => {
  const recap = createScenarioLearningRecap({
    ...baseArgs,
    selectedTargetLabels: ["Genre control", "Tone control"],
    unselectedTargetLabels: ["Script control", "Camera control"],
    alignmentAssessment: "partial"
  });

  assert.equal(recap.intro, "The report separates methods you identified from methods worth comparing again.");
  assert.deepEqual(recap.learned, ["Genre control", "Tone control"]);
  assert.deepEqual(recap.nextFocus, ["Script control", "Camera control"]);
});

test("createScenarioLearningRecap handles a clear qualitative assessment with all methods selected", () => {
  const recap = createScenarioLearningRecap({
    ...baseArgs,
    selectedTargetLabels: ["Genre control", "Tone control", "Script control"],
    unselectedTargetLabels: [],
    alignmentAssessment: "clear"
  });

  assert.equal(recap.intro, "The report gathers the methods you identified and the film-specific explanations that support them.");
  assert.deepEqual(recap.learned, ["Genre control", "Tone control", "Script control"]);
  assert.deepEqual(recap.nextFocus, ["Revisit one phase and compare why the documented method works for this film."]);
});

test("createScenarioLearningRecap shows needs_research verification note", () => {
  const recap = createScenarioLearningRecap({ ...baseArgs, verificationStatus: "needs_research" });

  assert.equal(recap.verificationNote, "This is a seeded learning recap. Film-specific historical claims still need research.");
});
