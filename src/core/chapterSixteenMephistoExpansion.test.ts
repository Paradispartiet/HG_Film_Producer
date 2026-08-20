import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenMephistoExpansionDefinitions } from "./chapterSixteenMephistoExpansion.js";

test("Chapter 16 materializes Mephisto as the first P1 Central European co-production Production Case", () => {
  assert.equal(chapterSixteenMephistoExpansionDefinitions.length, 1);
  const film = chapterSixteenMephistoExpansionDefinitions[0];
  assert.equal(film.id, "scenario_mephisto_1981");
  assert.equal(film.year, 1981);
  assert.equal(film.runtimeMins, 145);
  assert.deepEqual(film.directors, ["István Szabó"]);
  assert.equal(film.sourceId, "nfi_mephisto_1981");
  assert.ok(film.scenarioType.includes("objektiv_durniok"));
  assert.ok(film.premise.includes("Mafilm Objektív Stúdió") && film.premise.includes("Manfred Durniok"));
  assert.ok(film.premise.includes("ORF") && film.premise.includes("Hessischer Rundfunk"));
  assert.ok(film.premise.includes("West Berlin retrospective"));
  assert.ok(film.premise.includes("Carla Hesse") && film.premise.includes("János Rózsa"));
  assert.ok(film.premise.includes("3957-metre") && film.premise.includes("145 minutes"));
  assert.ok(film.premise.includes("140-minute") && film.premise.includes("154-minute"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("original 35mm/1.66/Eastmancolor") && goal.includes("2018 4K restoration")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Cannes") && goal.includes("Academy") && goal.includes("downstream")));
  const screenplayPhase = film.phases.find((phase) => phase.id === "screenplay");
  assert.ok(screenplayPhase?.player_task.includes("Mann") && screenplayPhase.player_task.includes("Szabó/Dobai") && screenplayPhase.player_task.includes("dramaturgy"));
  const releasePhase = film.phases.find((phase) => phase.id === "release");
  assert.ok(releasePhase?.player_task.includes("1981 original 35mm") && releasePhase.player_task.includes("1982 Academy") && releasePhase.player_task.includes("2018 4K restoration"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_or_exposure_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_dub_or_mix_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
