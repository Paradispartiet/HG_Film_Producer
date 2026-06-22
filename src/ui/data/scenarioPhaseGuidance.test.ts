import assert from "node:assert/strict";
import test from "node:test";
import { createScenarioPhaseGuidance } from "./scenarioPhaseGuidance";
import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";

const productionCaseBrief: ScenarioProductionBrief = {
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

const fallbackBrief: ScenarioProductionBrief = {
  ...productionCaseBrief,
  briefType: "seed_fallback",
};

test("createScenarioPhaseGuidance maps production cases through mission phases", () => {
  const guidance = createScenarioPhaseGuidance(productionCaseBrief);

  assert.deepEqual(
    guidance.map((phase) => phase.phase),
    ["development", "pre_production", "shoot", "post_production", "release"],
  );
  assert.deepEqual(
    guidance.find((phase) => phase.phase === "development")?.targets,
    ["Test a phase guidance mapping.", "Genre A", "Tone A", "Tone B", "Screenplay A"],
  );
  assert.deepEqual(
    guidance.find((phase) => phase.phase === "pre_production")?.targets,
    ["Cinematography A"],
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
  assert.match(
    guidance.find((phase) => phase.phase === "development")?.description ?? "",
    /not a new film.*manusfasen/i,
  );
});

test("createScenarioPhaseGuidance keeps seed fallback as generic production guidance", () => {
  const guidance = createScenarioPhaseGuidance(fallbackBrief);

  assert.deepEqual(
    guidance.find((phase) => phase.phase === "development")?.targets,
    ["Genre A", "Tone A", "Tone B", "Screenplay A"],
  );
  assert.equal(
    guidance.find((phase) => phase.phase === "pre_production")?.title,
    "Pre-production focus",
  );
  assert.match(
    guidance.find((phase) => phase.phase === "development")?.description ?? "",
    /seeded concept/i,
  );
});
