import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenTheIdiotsExpansionDefinitions } from "./chapterSeventeenTheIdiotsExpansion.js";

test("Chapter 17 materializes The Idiots as a source-first Dogme 95 production case", () => {
  assert.equal(chapterSeventeenTheIdiotsExpansionDefinitions.length, 1);
  const film = chapterSeventeenTheIdiotsExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_idiots_1998");
  assert.equal(film.originalTitle, "Idioterne");
  assert.equal(film.year, 1998);
  assert.equal(film.runtimeMins, 117);
  assert.deepEqual(film.directors, ["Lars von Trier"]);
  assert.equal(film.sourceId, "dfi_idioterne_1998");
  assert.ok(film.scenarioType.includes("dogme95") && film.scenarioType.includes("video_origin") && film.scenarioType.includes("handheld"));

  assert.ok(film.premise.includes("Dogme 95 film #2") && film.premise.includes("Vow of Chastity"));
  assert.ok(film.premise.includes("normative evidence") && film.premise.includes("stated rule") && film.premise.includes("proof"));
  assert.ok(film.premise.includes("Vibeke Windeløv") && film.premise.includes("Molly Malene Stensgaard"));
  assert.ok(film.premise.includes("video-origin") && film.premise.includes("handheld") && film.premise.includes("location-driven"));
  assert.ok(film.premise.includes("no special lighting") && film.premise.includes("Academy 35 mm"));
  assert.ok(film.premise.includes("117-minute") && film.premise.includes("Cannes 1998"));
  assert.ok(film.premise.includes("Do not invent the exact camera model") && film.premise.includes("transfer facility"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("normative rule text") && goal.includes("individual production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("video-origin") && goal.includes("camera-model")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Molly Malene Stensgaard") && goal.includes("editing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("synchronized production sound") && goal.includes("postproduction")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("117 minutes") && goal.includes("downstream")));

  const manifesto = film.phases.find((phase) => phase.id === "manifesto_to_plan");
  assert.ok(manifesto?.player_task.includes("Vow of Chastity") && manifesto.player_task.includes("document"));
  const camera = film.phases.find((phase) => phase.id === "handheld_video_capture");
  assert.ok(camera?.player_task.includes("handheld") && camera.player_task.includes("camera"));
  const sound = film.phases.find((phase) => phase.id === "production_sound");
  assert.ok(sound?.player_task.includes("dialogue") && sound.player_task.includes("microphone"));
  const edit = film.phases.find((phase) => phase.id === "editing_structure");
  assert.ok(edit?.player_task.includes("Stensgaard") && edit.player_task.includes("editorial"));
  const format = film.phases.find((phase) => phase.id === "format_and_finish_boundary");
  assert.ok(format?.player_task.includes("theatrical print") && format.player_task.includes("restoration"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_tape_or_transfer_chain"));
  assert.ok(film.requiredChoicesSeed.editing.includes("117_min_1998_feature_version"));
  assert.ok(film.learningGoals.length >= 18);
  assert.ok(film.phases.length >= 10);
});
