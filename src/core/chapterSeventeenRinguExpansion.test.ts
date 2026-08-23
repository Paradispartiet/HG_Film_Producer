import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenRinguExpansionDefinitions } from "./chapterSeventeenRinguExpansion.js";

test("Chapter 17 materializes Ringu as a source-first Japanese horror and analog-media production case", () => {
  assert.equal(chapterSeventeenRinguExpansionDefinitions.length, 1);
  const film = chapterSeventeenRinguExpansionDefinitions[0];
  assert.equal(film.id, "scenario_ringu_1998");
  assert.equal(film.year, 1998);
  assert.equal(film.runtimeMins, 95);
  assert.deepEqual(film.directors, ["Hideo Nakata"]);
  assert.equal(film.sourceId, "dfi_ringu_1998");
  assert.ok(film.scenarioType.includes("jhorror") && film.scenarioType.includes("vhs") && film.scenarioType.includes("transnational"));

  assert.ok(film.premise.includes("Hiroshi Takahashi") && film.premise.includes("Koji Suzuki"));
  assert.ok(film.premise.includes("Junichiro Hayashi") && film.premise.includes("Nobuyuki Takahashi") && film.premise.includes("Kenji Kawai"));
  assert.ok(film.premise.includes("diegetic VHS/CRT signal") && film.premise.includes("not evidence that the feature itself was acquired on consumer videotape"));
  assert.ok(film.premise.includes("95 minutes") && film.premise.includes("96 minutes") && film.premise.includes("97 minutes"));
  assert.ok(film.premise.includes("35 mm") && film.premise.includes("1.85:1") && film.premise.includes("DTS"));
  assert.ok(film.premise.includes("2002 Hollywood remake") && film.premise.includes("Do not invent exact budget"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Japanese genre production") && goal.includes("homogeneous style")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("consumer-video acquisition") && goal.includes("degraded videotape imagery")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Junichiro Hayashi") && goal.includes("camera or lens specifications")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Nobuyuki Takahashi") && goal.includes("editorial architecture")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kenji Kawai") && goal.includes("television playback")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("95 minutes") && goal.includes("96- and 97-minute")));

  const media = film.phases.find((phase) => phase.id === "analog_media_object");
  assert.ok(media?.player_task.includes("VHS/CRT") && media.player_task.includes("consumer video"));
  const camera = film.phases.find((phase) => phase.id === "feature_cinematography");
  assert.ok(camera?.player_task.includes("Hayashi") && camera.player_task.includes("camera, lens and stock"));
  const format = film.phases.find((phase) => phase.id === "format_boundary");
  assert.ok(format?.player_task.includes("35 mm") && format.player_task.includes("VHS-looking imagery"));
  const edit = film.phases.find((phase) => phase.id === "editing_and_playback");
  assert.ok(edit?.player_task.includes("Nobuyuki Takahashi") && edit.player_task.includes("clue order"));
  const sound = film.phases.find((phase) => phase.id === "score_sound_and_silence");
  assert.ok(sound?.player_task.includes("Kawai") && sound.player_task.includes("DTS-production"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_stock_lens_or_telecine_chain"));
  assert.ok(film.requiredChoicesSeed.editing.includes("95_min_bfi_anchor_with_runtime_variance_recorded"));
  assert.ok(film.learningGoals.length >= 19);
  assert.ok(film.phases.length >= 10);
});
