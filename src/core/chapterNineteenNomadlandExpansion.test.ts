import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenNomadlandExpansionDefinitions } from "./chapterNineteenNomadlandExpansion.js";

test("Chapter 19 materializes Nomadland as the first balanced-rotation production case", () => {
  assert.equal(chapterNineteenNomadlandExpansionDefinitions.length, 1);
  const film = chapterNineteenNomadlandExpansionDefinitions[0];
  assert.equal(film.id, "scenario_nomadland_2020");
  assert.equal(film.title, "Nomadland");
  assert.equal(film.year, 2020);
  assert.equal(film.runtimeMins, 108);
  assert.deepEqual(film.directors, ["Chloé Zhao"]);

  assert.ok(film.scenarioType.includes("independent_low_mid_budget"));
  assert.ok(film.scenarioType.includes("real_people") && film.scenarioType.includes("small_crew"));
  assert.ok(film.scenarioType.includes("available_light") && film.scenarioType.includes("hybrid_fiction_nonfiction"));
  assert.ok(film.scenarioType.includes("searchlight_acquisition"));

  assert.ok(film.premise.includes("first production case under Chapter 19's balanced-rotation scheduler"));
  assert.ok(film.premise.includes("108-minute") && film.premise.includes("Chloé Zhao as director, screenwriter and editor"));
  assert.ok(film.premise.includes("approximately 25-person key crew") && film.premise.includes("roughly 90 percent"));
  assert.ok(film.premise.includes("Arri Alexa Mini and Amira") && film.premise.includes("Ultra Prime"));
  assert.ok(film.premise.includes("Rubber Tramp Rendezvous") && film.premise.includes("Amazon fulfillment center"));
  assert.ok(film.premise.includes("25 to 30 people") && film.premise.includes("camera placement in their own vans"));
  assert.ok(film.premise.includes("four-month fall-2018 road production"));
  assert.ok(film.premise.includes("Sergio Diaz") && film.premise.includes("Zach Seivers"));
  assert.ok(film.premise.includes("February 2019") && film.premise.includes("worldwide rights"));
  assert.ok(film.premise.includes("participant compensation schedules") && film.premise.includes("sound plug-in chains"));

  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_mini") && film.requiredChoicesSeed.camera.includes("alexa_amira"));
  assert.ok(film.requiredChoicesSeed.camera.includes("available_light") && film.requiredChoicesSeed.camera.includes("ronin_2"));
  assert.ok(film.requiredChoicesSeed.editing.includes("chloe_zhao_editor") && film.requiredChoicesSeed.editing.includes("tone_in_edit"));
  assert.ok(film.requiredChoicesSeed.sound.includes("landscape_specific_sound") && film.requiredChoicesSeed.sound.includes("experiential_not_manipulative"));
  assert.ok(film.requiredChoicesSeed.themes.includes("balanced_rotation") && film.requiredChoicesSeed.themes.includes("hybrid_fiction_nonfiction"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("balanced-production rotation") && goal.includes("P0-first commercial queue")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("108-minute") && goal.includes("territorial versions")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("real nomads") && goal.includes("representative of all nomadic people")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("camera may be placed inside their own van")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("25-to-30-person crew") && goal.includes("invariant headcount")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("four-month fall-2018 road production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Rubber Tramp Rendezvous") && goal.includes("Amazon fulfillment center")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("broad shot-list") && goal.includes("responsive observation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Alexa Mini") && goal.includes("Alexa Amira")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("32mm Ultra Prime") && goal.includes("environmental context")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Ronin 2") && goal.includes("EasyRig")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("90 percent available light and practicals") && goal.includes("lighting department")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("no-makeup-artist-on-set") && goal.includes("title-specific")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("self-editing role") && goal.includes("post-production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("tonal variation") && goal.includes("tested in the edit")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Sergio Diaz") && goal.includes("Zach Seivers")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("soundtrack is unprocessed or purely documentary")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("February 2019 worldwide-rights acquisition") && goal.includes("production authorship")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("participant contracts")));

  assert.ok(film.phases.find((phase) => phase.id === "consent_boundaries")?.player_task.includes("camera placement"));
  assert.ok(film.phases.find((phase) => phase.id === "crew_scale")?.player_task.includes("25-to-30-person"));
  assert.ok(film.phases.find((phase) => phase.id === "camera_package")?.player_task.includes("Alexa Mini"));
  assert.ok(film.phases.find((phase) => phase.id === "sun_windows")?.player_task.includes("dusk"));
  assert.ok(film.phases.find((phase) => phase.id === "tone_in_edit")?.player_task.includes("heterogeneous"));
  assert.ok(film.phases.find((phase) => phase.id === "rights_acquisition")?.player_task.includes("February 2019"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("participant agreements"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
