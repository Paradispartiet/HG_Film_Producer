import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenGravityExpansionDefinitions } from "./chapterEighteenGravityExpansion.js";

test("Chapter 18 materializes Gravity as a source-first previs, Light Box, robotics, CG and spatial-sound production case", () => {
  assert.equal(chapterEighteenGravityExpansionDefinitions.length, 1);
  const film = chapterEighteenGravityExpansionDefinitions[0];
  assert.equal(film.id, "scenario_gravity_2013");
  assert.equal(film.year, 2013);
  assert.equal(film.runtimeMins, 91);
  assert.deepEqual(film.directors, ["Alfonso Cuarón"]);
  assert.ok(film.scenarioType.includes("prelight") && film.scenarioType.includes("techvis") && film.scenarioType.includes("spatial_sound"));
  assert.ok(film.premise.includes("entire film was made in previs") && film.premise.includes("de facto editorial tool"));
  assert.ok(film.premise.includes("previs decides story") && film.premise.includes("prelight solves") && film.premise.includes("techvis makes"));
  assert.ok(film.premise.includes("20-by-10-foot Light Box") && film.premise.includes("196 LED panels") && film.premise.includes("4,096 bulbs"));
  assert.ok(film.premise.includes("faces were the principal photographed elements") && film.premise.includes("computer-generated"));
  assert.ok(film.premise.includes("ARRI ALEXA") && film.premise.includes("Master Prime"));
  assert.ok(film.premise.includes("blocked in editorial eighteen months") && film.premise.includes("no conventional coverage"));
  assert.ok(film.premise.includes("45-minute previs") && film.premise.includes("contact-and-vibration rule"));
  assert.ok(film.premise.includes("7.1") && film.premise.includes("Dolby Atmos"));
  assert.ok(film.premise.includes("not call the Light Box a modern LED-volume background system"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("creative previs") && goal.includes("digital prelight") && goal.includes("techvis")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("no conventional coverage")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("LED illumination") && goal.includes("not as a modern in-camera LED background")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("contact-and-vibration rule")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("7.1") && goal.includes("Atmos")));

  const prelight = film.phases.find((phase) => phase.id === "digital_prelight");
  assert.ok(prelight?.player_task.includes("sun") && prelight.player_task.includes("Earth bounce") && prelight.player_task.includes("future CG world"));
  const techvis = film.phases.find((phase) => phase.id === "techvis_translation");
  assert.ok(techvis?.player_task.includes("robot trajectories") && techvis.player_task.includes("Light Box playback") && techvis.player_task.includes("safe stage"));
  const lightbox = film.phases.find((phase) => phase.id === "lightbox");
  assert.ok(lightbox?.player_task.includes("196-panel") && lightbox.player_task.includes("rather than as the final background"));
  const camera = film.phases.find((phase) => phase.id === "robot_camera");
  assert.ok(camera?.player_task.includes("Bot & Dolly") && camera.player_task.includes("safety"));
  const sound = film.phases.find((phase) => phase.id === "contact_sound");
  assert.ok(sound?.player_task.includes("contact recordings") && sound.player_task.includes("no physical transmission path"));
  const boundary = film.phases.find((phase) => phase.id === "method_boundary");
  assert.ok(boundary?.player_task.includes("scientific plausibility") && boundary.player_task.includes("LED-volume"));

  assert.ok(film.requiredChoicesSeed.camera.includes("prelight_to_techvis_translation"));
  assert.ok(film.requiredChoicesSeed.sound.includes("contact_vibration_rule"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 19);
});
