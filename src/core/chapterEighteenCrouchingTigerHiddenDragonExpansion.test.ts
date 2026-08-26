import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenCrouchingTigerHiddenDragonExpansionDefinitions } from "./chapterEighteenCrouchingTigerHiddenDragonExpansion.js";

test("Chapter 18 materializes Crouching Tiger as a source-first Super 35, wire-work and selective-digital-post transnational case", () => {
  assert.equal(chapterEighteenCrouchingTigerHiddenDragonExpansionDefinitions.length, 1);
  const film = chapterEighteenCrouchingTigerHiddenDragonExpansionDefinitions[0];
  assert.equal(film.id, "scenario_crouching_tiger_hidden_dragon_2000");
  assert.equal(film.year, 2000);
  assert.equal(film.runtimeMins, 120);
  assert.deepEqual(film.directors, ["Ang Lee"]);

  assert.ok(film.scenarioType.includes("super35") && film.scenarioType.includes("wirework") && film.scenarioType.includes("transnational_production"));
  assert.ok(film.premise.includes("Bill Kong") && film.premise.includes("Hsu Li-kong"));
  assert.ok(film.premise.includes("Peter Pau") && film.premise.includes("Tim Yip"));
  assert.ok(film.premise.includes("Tim Squyres") && film.premise.includes("Tan Dun"));
  assert.ok(film.premise.includes("Moviecam Compact") && film.premise.includes("Arri 435ES"));
  assert.ok(film.premise.includes("Kodak 5277") && film.premise.includes("5245") && film.premise.includes("5246"));
  assert.ok(film.premise.includes("Yuen Woo-ping") && film.premise.includes("digital wire removal"));
  assert.ok(film.premise.includes("more than 300 shots") && film.premise.includes("roughly 60"));
  assert.ok(film.premise.includes("optical blowup") && film.premise.includes("did not have the time or budget"));
  assert.ok(film.premise.includes("wire work is not CGI character replacement"));

  assert.ok(film.requiredChoicesSeed.camera.includes("super35_capture"));
  assert.ok(film.requiredChoicesSeed.editing.includes("two_camera_constraint"));
  assert.ok(film.requiredChoicesSeed.sound.includes("score_not_production_sound"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Super 35") && goal.includes("2.35:1")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("5277") && goal.includes("5245") && goal.includes("5246")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("digital wire removal") && goal.includes("physically performed")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("digital-blowup test") && goal.includes("finishing workflow")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("microphone") && goal.includes("Foley")));

  assert.ok(film.phases.find((phase) => phase.id === "super35_format")?.player_task.includes("anamorphic capture"));
  assert.ok(film.phases.find((phase) => phase.id === "wire_safety_plan")?.player_task.includes("stop conditions"));
  assert.ok(film.phases.find((phase) => phase.id === "wire_removal_handoff")?.player_task.includes("physical performance plate"));
  assert.ok(film.phases.find((phase) => phase.id === "optical_blowup")?.player_task.includes("unused digital-blowup test"));
  assert.ok(film.phases.find((phase) => phase.id === "sound_boundary")?.player_task.includes("production recording"));

  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 30);
});
