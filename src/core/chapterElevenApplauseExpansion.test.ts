import assert from "node:assert/strict";
import test from "node:test";

import { chapterElevenApplauseExpansionDefinitions } from "./chapterElevenApplauseExpansion.js";

test("Chapter 11 materializes Applause as a mobile early-sound Production Case", () => {
  assert.equal(chapterElevenApplauseExpansionDefinitions.length, 1);
  const applause = chapterElevenApplauseExpansionDefinitions[0];
  assert.equal(applause.id, "scenario_applause_1929");
  assert.equal(applause.title, "Applause");
  assert.equal(applause.year, 1929);
  assert.equal(applause.runtimeMins, 80);
  assert.equal(applause.scenarioType, "paramount_astoria_movietone_mobile_camera_dual_track_urban_sound_booth_isolation_production");
  assert.ok(applause.premise.includes("Movietone"));
  assert.ok(applause.premise.includes("George Folsey"));
  assert.ok(applause.premise.includes("Ernest F. Zatorsky"));
  assert.ok(applause.premise.includes("soundproof camera booths"));
  assert.ok(applause.requiredChoicesSeed.camera.includes("soundproof_booth_noise_isolation"));
  assert.ok(applause.requiredChoicesSeed.sound.includes("simultaneous_sound_tracks"));
  assert.ok(applause.learningGoals.some((goal) => goal.includes("early sound film")));
  assert.ok(applause.learningGoals.some((goal) => goal.includes("silent version")));
  assert.ok(applause.learningGoals.some((goal) => goal.includes("digital multitracking")));
  assert.ok(applause.learningGoals.length >= 9);
  assert.ok(applause.phases.length >= 9);
});
