import assert from "node:assert/strict";
import test from "node:test";
import { createScenarioPhaseGuidance } from "./scenarioPhaseGuidance";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

const brief: ScenarioProductionBrief = {
  scenarioId: "scenario_test",
  briefType: "production_case",
  title: "Test production brief",
  logline: "Test a phase guidance mapping.",
  genreTargets: ["Genre A"],
  toneTargets: ["Tone A", "Tone B"],
  screenplayTargets: ["Screenplay A"],
  cinematographyTargets: ["Cinematography A"],
  editingTargets: ["Editing A"],
  soundTargets: ["Sound A", "Sound B"],
  learningGoals: ["Learning A"],
  verificationStatus: "seeded",
};

test("createScenarioPhaseGuidance maps brief targets to all production phases", () => {
  const guidance = createScenarioPhaseGuidance(brief);

  assert.deepEqual(
    guidance.map((phase) => phase.phase),
    ["development", "pre_production", "shoot", "post_production", "release"],
  );
  assert.deepEqual(
    guidance.find((phase) => phase.phase === "development")?.targets,
    ["Genre A", "Tone A", "Tone B", "Screenplay A"],
  );
  assert.deepEqual(guidance.find((phase) => phase.phase === "shoot")?.targets, [
    "Cinematography A",
    "Sound A",
    "Sound B",
  ]);
  assert.deepEqual(
    guidance.find((phase) => phase.phase === "post_production")?.targets,
    ["Editing A", "Sound A", "Sound B"],
  );
  assert.deepEqual(
    guidance.find((phase) => phase.phase === "release")?.targets,
    ["Learning A"],
  );
});
