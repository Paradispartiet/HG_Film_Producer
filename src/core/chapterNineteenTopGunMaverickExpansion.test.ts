import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenTopGunMaverickExpansionDefinitions } from "./chapterNineteenTopGunMaverickExpansion.js";

test("Chapter 19 materializes Top Gun: Maverick as the industrial-scale technical rotation case", () => {
  assert.equal(chapterNineteenTopGunMaverickExpansionDefinitions.length, 1);
  const film = chapterNineteenTopGunMaverickExpansionDefinitions[0];
  assert.equal(film.id, "scenario_top_gun_maverick_2022");
  assert.equal(film.title, "Top Gun: Maverick");
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 131);
  assert.deepEqual(film.directors, ["Joseph Kosinski"]);

  assert.ok(film.scenarioType.includes("industrial_scale_technical"));
  assert.ok(film.scenarioType.includes("sony_venice_6k") && film.scenarioType.includes("rialto"));
  assert.ok(film.scenarioType.includes("six_camera_fa18_cockpit") && film.scenarioType.includes("navair_engineering"));
  assert.ok(film.scenarioType.includes("800_hour_editorial") && film.scenarioType.includes("practical_digital_hybrid"));
  assert.ok(film.scenarioType.includes("mask_dialogue") && film.scenarioType.includes("darkstar_skunk_works"));

  assert.ok(film.premise.includes("131-minute") && film.premise.includes("130-minute 2D and 2D IMAX"));
  assert.ok(film.premise.includes("six-camera F/A-18F cockpit configuration") && film.premise.includes("Rialto"));
  assert.ok(film.premise.includes("shock, vibration and wind-tunnel testing"));
  assert.ok(film.premise.includes("actors") && film.premise.includes("triggered the camera system themselves"));
  assert.ok(film.premise.includes("survival-vest/oxygen-mask") && film.premise.includes("Lectrosonics PDR"));
  assert.ok(film.premise.includes("roughly 800 hours of footage") && film.premise.includes("Eddie Hamilton"));
  assert.ok(film.premise.includes("cannot be taught as 'no CGI'") && film.premise.includes("practical-digital hybrid"));
  assert.ok(film.premise.includes("Lockheed Martin") && film.premise.includes("Darkstar"));
  assert.ok(film.premise.includes("Company 3") && film.premise.includes("1.90:1 IMAX"));

  assert.ok(film.requiredChoicesSeed.camera.includes("sony_venice_6k"));
  assert.ok(film.requiredChoicesSeed.camera.includes("six_camera_fa18f_cockpit"));
  assert.ok(film.requiredChoicesSeed.editing.includes("roughly_800_hours_footage"));
  assert.ok(film.requiredChoicesSeed.sound.includes("survival_vest_mask_dialogue_capture"));
  assert.ok(film.requiredChoicesSeed.themes.includes("industrial_scale_technical"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("industrial-scale/technical rotation case")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("six-camera cockpit configuration")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("shock, vibration and wind-tunnel testing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("actors") && goal.includes("camera operators")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("survival-vest communications connection")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("800 hours") && goal.includes("editorial")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("real aircraft photography") && goal.includes("visual effects")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Darkstar") && goal.includes("Skunk Works")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2.39:1") && goal.includes("1.90:1")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("full VFX shot counts") && goal.includes("unresolved")));

  assert.ok(film.phases.find((phase) => phase.id === "cockpit_engineering")?.player_task.includes("NAVAIR"));
  assert.ok(film.phases.find((phase) => phase.id === "six_camera_layout")?.player_task.includes("Rialto"));
  assert.ok(film.phases.find((phase) => phase.id === "mask_sound")?.player_task.includes("survival-vest"));
  assert.ok(film.phases.find((phase) => phase.id === "footage_scale")?.player_task.includes("hundreds of hours"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_plate_strategy")?.player_task.includes("real aerial photography"));
  assert.ok(film.phases.find((phase) => phase.id === "darkstar")?.player_task.includes("Skunk Works"));
  assert.ok(film.phases.find((phase) => phase.id === "delivery_review")?.player_task.includes("VFX hybridity"));
  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 28);
});
