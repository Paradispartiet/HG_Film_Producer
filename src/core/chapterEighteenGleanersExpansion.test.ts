import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenGleanersExpansionDefinitions } from "./chapterEighteenGleanersExpansion.js";

test("Chapter 18 materializes The Gleaners and I as a source-first small-camera digital documentary case", () => {
  assert.equal(chapterEighteenGleanersExpansionDefinitions.length, 1);
  const film = chapterEighteenGleanersExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_gleaners_and_i_2000");
  assert.equal(film.year, 2000);
  assert.equal(film.runtimeMins, 82);
  assert.deepEqual(film.directors, ["Agnès Varda"]);
  assert.equal(film.sourceId, "cine_tamaris_gleaners_2000");
  assert.ok(film.scenarioType.includes("digital_documentary") && film.scenarioType.includes("artisan_editing"));

  assert.ok(film.premise.includes("Ciné-Tamaris") && film.premise.includes("82-minute"));
  assert.ok(film.premise.includes("Stéphane Krausz") && film.premise.includes("Pascal Sautelet"));
  assert.ok(film.premise.includes("DV camera") && film.premise.includes("Avid"));
  assert.ok(film.premise.includes("ten months") && film.premise.includes("editing at home"));
  assert.ok(film.premise.includes("nearly sixty hours") && film.premise.includes("rushes"));
  assert.ok(film.premise.includes("76 minutes") && film.premise.includes("82"));
  assert.ok(film.premise.includes("Do not infer an exact consumer-camera model"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("small-camera digital documentary anchor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("DV and Avid") && goal.includes("artistic ends")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ten-month home editing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("nearly sixty hours of rushes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm/1.33") && goal.includes("DV acquisition")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("82-minute") && goal.includes("76-minute")));

  const proximity = film.phases.find((phase) => phase.id === "small_camera_proximity");
  assert.ok(proximity?.player_task.includes("shooting alone") && proximity.player_task.includes("camera model"));
  const selfPortrait = film.phases.find((phase) => phase.id === "unplanned_self_portrait");
  assert.ok(selfPortrait?.player_task.includes("one-hand-films-the-other") && selfPortrait.player_task.includes("false claim"));
  const rushes = film.phases.find((phase) => phase.id === "rushes_and_selection");
  assert.ok(rushes?.player_task.includes("nearly sixty hours") && rushes.player_task.includes("shooting ratio"));
  const edit = film.phases.find((phase) => phase.id === "artisan_home_edit");
  assert.ok(edit?.label.includes("ten-month") && edit.player_task.includes("Laurent Pineau"));
  const pipeline = film.phases.find((phase) => phase.id === "dv_to_theatrical_boundary");
  assert.ok(pipeline?.player_task.includes("DV") && pipeline.player_task.includes("35mm/1.33"));
  const runtime = film.phases.find((phase) => phase.id === "runtime_catalog_variance");
  assert.ok(runtime?.player_task.includes("82 minutes") && runtime.player_task.includes("76-minute"));

  assert.ok(film.requiredChoicesSeed.camera.includes("dv_mobility_and_intimacy"));
  assert.ok(film.requiredChoicesSeed.editing.includes("ten_month_home_editing"));
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 12);
});
