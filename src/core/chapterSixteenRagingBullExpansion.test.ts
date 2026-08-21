import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenRagingBullExpansionDefinitions } from "./chapterSixteenRagingBullExpansion.js";

test("Chapter 16 materializes Raging Bull as a source-first two-period black-and-white boxing production", () => {
  assert.equal(chapterSixteenRagingBullExpansionDefinitions.length, 1);
  const film = chapterSixteenRagingBullExpansionDefinitions[0];
  assert.equal(film.id, "scenario_raging_bull_1980");
  assert.equal(film.year, 1980);
  assert.equal(film.runtimeMins, 129);
  assert.deepEqual(film.directors, ["Martin Scorsese"]);
  assert.equal(film.sourceId, "afi_raging_bull_1980");
  assert.ok(film.scenarioType.includes("chartoff_winkler") && film.scenarioType.includes("black_and_white") && film.scenarioType.includes("edit_sound"));

  assert.ok(film.premise.includes("Paul Schrader") && film.premise.includes("Mardik Martin") && film.premise.includes("three weeks") && film.premise.includes("credited screenplay authorship"));
  assert.ok(film.premise.includes("six, eight or more than twelve months") && film.premise.includes("boxing double"));
  assert.ok(film.premise.includes("16 April 1979") && film.premise.includes("early August") && film.premise.includes("3 December") && film.premise.includes("late December"));
  assert.ok(film.premise.includes("40, 50, 55 and 60 pounds") && film.premise.includes("source variance"));
  assert.ok(film.premise.includes("Michael Westmore") && film.premise.includes("Michael Chapman") && film.premise.includes("Thelma Schoonmaker"));
  assert.ok(film.premise.includes("black-and-white television") && film.premise.includes("Life magazine") && film.premise.includes("ballet"));
  assert.ok(film.premise.includes("16mm reversal") && film.premise.includes("color home-movie"));
  assert.ok(film.premise.includes("multi-flashbulb") && film.premise.includes("wiring, voltage") && film.premise.includes("exposure recipes"));
  assert.ok(film.premise.includes("Dolby Stereo") && film.premise.includes("127–129 minutes") && film.premise.includes("BFI lists 129 minutes"));
  assert.ok(film.premise.includes("background noise") && film.premise.includes("fall silent") && film.premise.includes("bursts of sound"));
  assert.ok(film.premise.includes("editing/post-production delays") && film.premise.includes("Film Editing Oscar"));
  assert.ok(film.premise.includes("weight-gain or weight-cutting protocol") && film.premise.includes("present-day safety recommendation"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("six/eight/12-plus-month") && goal.includes("source variance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("40/50/55/60-pound") && goal.includes("body-transformation protocol")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("16 April 1979") && goal.includes("3 December") && goal.includes("late-December")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("black-and-white") && goal.includes("16mm reversal") && goal.includes("separate image systems")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("127–129-minute") && goal.includes("runtime/version")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("fight/stunt") && goal.includes("medical") && goal.includes("welfare")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Avoid inventing") && goal.includes("flash electronics") && goal.includes("weight-change procedures")));

  const first = film.phases.find((phase) => phase.id === "first_shoot_period");
  assert.ok(first?.player_task.includes("16 April") && first.player_task.includes("June New York") && first.player_task.includes("early-August"));
  const hiatus = film.phases.find((phase) => phase.id === "hiatus_transformation");
  assert.ok(hiatus?.player_task.includes("40/50/55/60-pound") && hiatus.player_task.includes("refusing") && hiatus.player_task.includes("weight-cutting"));
  const camera = film.phases.find((phase) => phase.id === "black_white_camera");
  assert.ok(camera?.player_task.includes("Chapman") && camera.player_task.includes("naturalistic-versus-ballet") && camera.player_task.includes("undocumented camera body"));
  const homeMovies = film.phases.find((phase) => phase.id === "color_home_movies");
  assert.ok(homeMovies?.player_task.includes("16mm reversal") && homeMovies.player_task.includes("principal black-and-white camera package"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_focal_frame_rate_exposure_flash_or_lab_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_console_or_track_layout"));
  assert.ok(film.learningGoals.length >= 16);
  assert.ok(film.phases.length >= 10);
});