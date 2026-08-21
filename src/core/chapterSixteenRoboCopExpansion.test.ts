import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenRoboCopExpansionDefinitions } from "./chapterSixteenRoboCopExpansion.js";

test("Chapter 16 materializes RoboCop as a source-first Orion effects-and-performance production", () => {
  assert.equal(chapterSixteenRoboCopExpansionDefinitions.length, 1);
  const film = chapterSixteenRoboCopExpansionDefinitions[0];
  assert.equal(film.id, "scenario_robocop_1987");
  assert.equal(film.year, 1987);
  assert.equal(film.runtimeMins, 103);
  assert.deepEqual(film.directors, ["Paul Verhoeven"]);
  assert.equal(film.sourceId, "afi_robocop_1987");
  assert.ok(film.scenarioType.includes("orion_tobor") && film.scenarioType.includes("stop_motion") && film.scenarioType.includes("sound"));

  assert.ok(film.premise.includes("Edward Neumeier") && film.premise.includes("Michael Miner") && film.premise.includes("Jon Davison") && film.premise.includes("Tobor Productions") && film.premise.includes("Orion Pictures"));
  assert.ok(film.premise.includes("6 August 1986") && film.premise.includes("Dallas") && film.premise.includes("Studios at Las Colinas") && film.premise.includes("Wheeling-Pittsburgh steel mill"));
  assert.ok(film.premise.includes("$11 million") && film.premise.includes("$13.1 million") && film.premise.includes("$600,000"));
  assert.ok(film.premise.includes("twenty-five pounds") && film.premise.includes("four months") && film.premise.includes("Moni Yakim"));
  assert.ok(film.premise.includes("seven-foot full-size droid") && film.premise.includes("miniature for stop-motion photography") && film.premise.includes("rear-screen projection"));
  assert.ok(film.premise.includes("Peter Kuran") && film.premise.includes("Rocco Gioffre") && film.premise.includes("Robert Blalack"));
  assert.ok(film.premise.includes("Jost Vacano") && film.premise.includes("subjective-camera strategy") && film.premise.includes("custom-built handheld rig"));
  assert.ok(film.premise.includes("Robert Wald") && film.premise.includes("Stephen Flick") && film.premise.includes("John Pospisil") && film.premise.includes("Basil Poledouris"));
  assert.ok(film.premise.includes("Special Achievement Award for Sound Effects Editing") && film.premise.includes("Sound and Film Editing"));
  assert.ok(film.premise.includes("initially drew an X rating") && film.premise.includes("receiving an R"));
  assert.ok(film.premise.includes("103-minute") && film.premise.includes("BFI lists 102 minutes") && film.premise.includes("runtime variance"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Dallas") && goal.includes("Pittsburgh steel-mill")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("$11 million") && goal.includes("$13.1 million") && goal.includes("$600,000")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("twenty-five-pound") && goal.includes("four-month")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("full-size puppeteered") && goal.includes("miniature stop-motion")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("production sound") && goal.includes("sound-effects editorial") && goal.includes("final mixing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("103-minute") && goal.includes("102-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Avoid inventing") && goal.includes("stunt rigs") && goal.includes("optical-printer settings")));

  const locations = film.phases.find((phase) => phase.id === "location_strategy");
  assert.ok(locations?.player_task.includes("Dallas architecture") && locations.player_task.includes("Las Colinas") && locations.player_task.includes("Wheeling-Pittsburgh steel mill"));
  const suit = film.phases.find((phase) => phase.id === "suit_performance");
  assert.ok(suit?.player_task.includes("Bottin") && suit.player_task.includes("Weller/Yakim") && suit.player_task.includes("four-month"));
  const ed209 = film.phases.find((phase) => phase.id === "ed209_effects");
  assert.ok(ed209?.player_task.includes("actor-interaction hardware") && ed209.player_task.includes("stop-motion miniature") && ed209.player_task.includes("rear-screen"));
  const sound = film.phases.find((phase) => phase.id === "sound_music");
  assert.ok(sound?.player_task.includes("production recording") && sound.player_task.includes("Foley") && sound.player_task.includes("Flick/Pospisil") && sound.player_task.includes("Poledouris"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_body_lens_stock_focal_map_frame_rate_exposure_or_lighting_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_console_weapon_recording_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});