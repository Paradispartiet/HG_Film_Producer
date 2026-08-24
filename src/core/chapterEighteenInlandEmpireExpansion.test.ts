import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenInlandEmpireExpansionDefinitions } from "./chapterEighteenInlandEmpireExpansion.js";

test("Chapter 18 materializes Inland Empire as a source-first low-resolution DV production case", () => {
  assert.equal(chapterEighteenInlandEmpireExpansionDefinitions.length, 1);
  const film = chapterEighteenInlandEmpireExpansionDefinitions[0];
  assert.equal(film.id, "scenario_inland_empire_2006");
  assert.equal(film.year, 2006);
  assert.equal(film.runtimeMins, 180);
  assert.deepEqual(film.directors, ["David Lynch"]);
  assert.equal(film.sourceId, "postmag_inland_empire_2007");
  assert.ok(film.scenarioType.includes("standard_definition") && film.scenarioType.includes("sony_pd150"));

  assert.ok(film.premise.includes("Sony PD-150") && film.premise.includes("standard-definition DV rather than HD"));
  assert.ok(film.premise.includes("written script for the material before going out to shoot") && film.premise.includes("complete feature screenplay did not exist"));
  assert.ok(film.premise.includes("40-minute") && film.premise.includes("automatic focus"));
  assert.ok(film.premise.includes("AFI separately credits Odd Geir Saether") && film.premise.includes("direct camera operation"));
  assert.ok(film.premise.includes("Los Angeles") && film.premise.includes("Lodz") && film.premise.includes("Camerimage"));
  assert.ok(film.premise.includes("three cameras") && film.premise.includes("Final Cut Pro") && film.premise.includes("more than six months"));
  assert.ok(film.premise.includes("Apple Shake") && film.premise.includes("After Effects") && film.premise.includes("Noriko Miyakawa"));
  assert.ok(film.premise.includes("Snell & Wilcox Alchemist") && film.premise.includes("FotoKem") && film.premise.includes("film version"));
  assert.ok(film.premise.includes("sound design at his home studio") && film.premise.includes("Steve Tushar") && film.premise.includes("Dean Hurley"));
  assert.ok(film.premise.includes("AFI records 179 minutes") && film.premise.includes("189 minutes") && film.premise.includes("172 minutes"));
  assert.ok(film.premise.includes("Do not invent a fixed three-year principal-photography schedule"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("standard-definition DV") && goal.includes("higher-definition")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("no script") && goal.includes("wrote each scene before shooting")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("40-minute") && goal.includes("automatic focus")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Odd Geir Saether") && goal.includes("formal")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three cameras") && goal.includes("editorial burden")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Final Cut Pro") && goal.includes("more than six months")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Shake") && goal.includes("After Effects")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Alchemist") && goal.includes("up-resolution")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("film-out boundary")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("AFI's 179") && goal.includes("BFI's 189")));

  const script = film.phases.find((phase) => phase.id === "script_emergence");
  assert.ok(script?.player_task.includes("written scene material") && script.player_task.includes("unscripted improvisation"));
  const multi = film.phases.find((phase) => phase.id === "multi_camera_volume");
  assert.ok(multi?.player_task.includes("three-camera") && multi.player_task.includes("editing"));
  const homeEdit = film.phases.find((phase) => phase.id === "home_edit");
  assert.ok(homeEdit?.player_task.includes("six-plus-month") && homeEdit.player_task.includes("self-edit"));
  const upres = film.phases.find((phase) => phase.id === "fotokem_upres");
  assert.ok(upres?.player_task.includes("Snell & Wilcox Alchemist") && upres.player_task.includes("standard-definition"));
  const sound = film.phases.find((phase) => phase.id === "sound_design_home");
  assert.ok(sound?.player_task.includes("Steve Tushar") && sound.player_task.includes("Dean Hurley") && sound.player_task.includes("Pro Tools"));
  const runtime = film.phases.find((phase) => phase.id === "runtime_boundary");
  assert.ok(runtime?.player_task.includes("180 minutes") && runtime.player_task.includes("179") && runtime.player_task.includes("189") && runtime.player_task.includes("172"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_false_hd_claim"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("no_false_unscripted_improvisation_claim"));
  assert.ok(film.requiredChoicesSeed.editing.includes("snell_wilcox_alchemist_upres"));
  assert.ok(film.requiredChoicesSeed.sound.includes("lynch_home_studio_sound_design"));
  assert.ok(film.learningGoals.length >= 28);
  assert.ok(film.phases.length >= 17);
});
