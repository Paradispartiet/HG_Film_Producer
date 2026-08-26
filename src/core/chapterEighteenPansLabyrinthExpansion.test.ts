import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenPansLabyrinthExpansionDefinitions } from "./chapterEighteenPansLabyrinthExpansion.js";

test("Chapter 18 materializes Pan's Labyrinth as a source-first 35mm practical-creature and selective-VFX convergence case", () => {
  assert.equal(chapterEighteenPansLabyrinthExpansionDefinitions.length, 1);
  const film = chapterEighteenPansLabyrinthExpansionDefinitions[0];
  assert.equal(film.id, "scenario_pans_labyrinth_2006");
  assert.equal(film.year, 2006);
  assert.equal(film.runtimeMins, 112);
  assert.deepEqual(film.directors, ["Guillermo del Toro"]);
  assert.ok(film.aliases.includes("El Laberinto del Fauno"));
  assert.ok(film.scenarioType.includes("35mm") && film.scenarioType.includes("practical_creature") && film.scenarioType.includes("2k_di"));
  assert.ok(film.premise.includes("Moviecam Compact") && film.premise.includes("Arriflex 435 ES"));
  assert.ok(film.premise.includes("Ultra Prime") && film.premise.includes("Variable Prime"));
  assert.ok(film.premise.includes("5217") && film.premise.includes("5218") && film.premise.includes("5246"));
  assert.ok(film.premise.includes("day-for-night") && film.premise.includes("three-to-four-stop underexposure"));
  assert.ok(film.premise.includes("artificial moss") && film.premise.includes("pine forest"));
  assert.ok(film.premise.includes("DDT Efectos Especiales") && film.premise.includes("CafeFX"));
  assert.ok(film.premise.includes("2K digital intermediate"));
  assert.ok(film.requiredChoicesSeed.camera.includes("kodak_5217_5218_5246"));
  assert.ok(film.requiredChoicesSeed.camera.includes("day_for_night"));
  assert.ok(film.requiredChoicesSeed.editing.includes("vfx_cleanup_boundary"));
  assert.ok(film.requiredChoicesSeed.sound.includes("creature_vocal_layer"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three-to-four-stop underexposure") && goal.includes("selected")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2K digital intermediate") && goal.includes("principal photography was digital")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("five- or six-hour makeup") && goal.includes("call times")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("CafeFX") && goal.includes("roughly five-month")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2016/2017-era home-video") && goal.includes("2006 theatrical")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("exact camera serials") && goal.includes("microphone/recorder")));
  assert.ok(film.phases.find((phase) => phase.id === "pale_man_set")?.player_task.includes("ventilation"));
  assert.ok(film.phases.find((phase) => phase.id === "faun_makeup_call")?.player_task.includes("multi-hour"));
  assert.ok(film.phases.find((phase) => phase.id === "practical_cg_boundary")?.player_task.includes("cleanup"));
  assert.ok(film.phases.find((phase) => phase.id === "di_finish")?.player_task.includes("2K digital intermediate"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("total VFX count"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
