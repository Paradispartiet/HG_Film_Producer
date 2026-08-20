import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenTerminatorExpansionDefinitions } from "./chapterSixteenTerminatorExpansion.js";

test("Chapter 16 materializes The Terminator as a source-first low-budget night-and-effects Production Case", () => {
  assert.equal(chapterSixteenTerminatorExpansionDefinitions.length, 1);
  const film = chapterSixteenTerminatorExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_terminator_1984");
  assert.equal(film.year, 1984);
  assert.equal(film.runtimeMins, 107);
  assert.deepEqual(film.directors, ["James Cameron"]);
  assert.equal(film.sourceId, "afi_the_terminator_1984");
  assert.ok(film.scenarioType.includes("hemdale_orion") && film.scenarioType.includes("stop_motion") && film.scenarioType.includes("process_effects"));
  assert.ok(film.premise.includes("James Cameron") && film.premise.includes("Gale Anne Hurd") && film.premise.includes("William Wisher Jr."));
  assert.ok(film.premise.includes("Hemdale Productions") && film.premise.includes("Pacific Western") && film.premise.includes("Euro Film Funding") && film.premise.includes("Orion Pictures"));
  assert.ok(film.premise.includes("ten weeks of principal photography") && film.premise.includes("fifteen days of second-unit work") && film.premise.includes("three weeks of process and special-effects photography"));
  assert.ok(film.premise.includes("$6.5 million") && film.premise.includes("$6 million") && film.premise.includes("uncontested audited figure"));
  assert.ok(film.premise.includes("Adam Greenberg") && film.premise.includes("handheld") && film.premise.includes("low-angle") && film.premise.includes("Adam Camera"));
  assert.ok(film.premise.includes("Stan Winston") && film.premise.includes("Fantasy II") && film.premise.includes("Gene Warren Jr.") && film.premise.includes("Peter Kleinow") && film.premise.includes("Doug Beswick"));
  assert.ok(film.premise.includes("explodable unit") && film.premise.includes("crushable rubber") && film.premise.includes("quarter-scale stop-motion miniature") && film.premise.includes("Shane Mahan"));
  assert.ok(film.premise.includes("Richard Lightstone") && film.premise.includes("David Campling") && film.premise.includes("Robert Garrett") && film.premise.includes("Brad Fiedel"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("principal shoot") && goal.includes("second unit") && goal.includes("process/special-effects")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Schwarzenegger") && goal.includes("backpack-puppet") && goal.includes("stop-motion")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Peter Kleinow") && goal.includes("Fantasy II") && goal.includes("rear-screen")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("home-video") && goal.includes("downstream")));
  const cinematography = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(cinematography?.player_task.includes("Greenberg") && cinematography.player_task.includes("handheld") && cinematography.player_task.includes("unsupported stock/camera/lens/exposure"));
  const terminatorEffects = film.phases.find((phase) => phase.id === "terminator_effects");
  assert.ok(terminatorEffects?.player_task.includes("Winston") && terminatorEffects.player_task.includes("Mahan") && terminatorEffects.player_task.includes("quarter-scale stop motion"));
  const visualEffects = film.phases.find((phase) => phase.id === "visual_process_effects");
  assert.ok(visualEffects?.player_task.includes("Gene Warren Jr.") && visualEffects.player_task.includes("rear-screen") && visualEffects.player_task.includes("pyrotechnics"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_stock_camera_lens_focal_length_or_exposure_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_mix_console_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});
