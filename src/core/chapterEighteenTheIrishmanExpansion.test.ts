import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenTheIrishmanExpansionDefinitions } from "./chapterEighteenTheIrishmanExpansion.js";

test("Chapter 18 materializes The Irishman as a source-first hybrid-capture, markerless-VFX, longform-edit and restrained-sound case", () => {
  assert.equal(chapterEighteenTheIrishmanExpansionDefinitions.length, 1);
  const film = chapterEighteenTheIrishmanExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_irishman_2019");
  assert.equal(film.year, 2019);
  assert.equal(film.runtimeMins, 209);
  assert.deepEqual(film.directors, ["Martin Scorsese"]);

  assert.ok(film.scenarioType.includes("35mm") && film.scenarioType.includes("red_helium") && film.scenarioType.includes("flux"));
  assert.ok(film.premise.includes("35mm Kodak") && film.premise.includes("RED Helium"));
  assert.ok(film.premise.includes("ARRI ALEXA Mini") && film.premise.includes("infrared witness cameras"));
  assert.ok(film.premise.includes("without visible facial markers") && film.premise.includes("Flux"));
  assert.ok(film.premise.includes("1,750 visual-effects shots") && film.premise.includes("Do not describe all 1,750 shots as de-aging"));
  assert.ok(film.premise.includes("roughly 295 sets and locations"));
  assert.ok(film.premise.includes("edit that took about a year") && film.premise.includes("restore facial detail"));
  assert.ok(film.premise.includes("fewer sound effects") && film.premise.includes("silence or sparse detail"));
  assert.ok(film.premise.includes("209 minutes") && film.premise.includes("Netflix"));

  assert.ok(film.requiredChoicesSeed.camera.includes("hybrid_35mm_digital_map"));
  assert.ok(film.requiredChoicesSeed.camera.includes("dual_ir_alexa_witness"));
  assert.ok(film.requiredChoicesSeed.editing.includes("performance_over_vfx_polish"));
  assert.ok(film.requiredChoicesSeed.sound.includes("restraint_over_density"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm") && goal.includes("digital acquisition")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("RED Helium")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("infrared witness cameras")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("1,750 VFX shots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("restored wrinkles") || goal.includes("restored facial detail")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("fewer sound effects")));

  assert.ok(film.phases.find((phase) => phase.id === "three_camera_rig")?.player_task.includes("RED Helium"));
  assert.ok(film.phases.find((phase) => phase.id === "flux_solve")?.player_task.includes("Flux"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_scope_audit")?.player_task.includes("1,750"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_editorial_loop")?.player_task.includes("acting"));
  assert.ok(film.phases.find((phase) => phase.id === "sound_restraint_brief")?.player_task.includes("silence"));
  assert.ok(film.phases.find((phase) => phase.id === "method_audit")?.player_task.includes("historical truth"));

  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 28);
});
