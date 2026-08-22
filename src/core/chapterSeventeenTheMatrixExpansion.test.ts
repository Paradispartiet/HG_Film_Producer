import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenTheMatrixExpansionDefinitions } from "./chapterSeventeenTheMatrixExpansion.js";

test("Chapter 17 materializes The Matrix as a source-first Sydney live-action/VFX production", () => {
  assert.equal(chapterSeventeenTheMatrixExpansionDefinitions.length, 1);
  const film = chapterSeventeenTheMatrixExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_matrix_1999");
  assert.equal(film.year, 1999);
  assert.equal(film.runtimeMins, 136);
  assert.deepEqual(film.directors, ["Lana Wachowski", "Lilly Wachowski"]);
  assert.equal(film.sourceId, "afi_the_matrix_1999");
  assert.ok(film.scenarioType.includes("sydney") && film.scenarioType.includes("bullet_time") && film.scenarioType.includes("sound_editing"));

  assert.ok(film.premise.includes("Village Roadshow") && film.premise.includes("Silver Pictures") && film.premise.includes("Fox Studios"));
  assert.ok(film.premise.includes("Bill Pope") && film.premise.includes("Owen Paterson") && film.premise.includes("Zach Staenberg"));
  assert.ok(film.premise.includes("Panavision Platinum") && film.premise.includes("Primo prime") && film.premise.includes("Super 35 2.35:1"));
  assert.ok(film.premise.includes("5279") && film.premise.includes("5274") && film.premise.includes("green-biased"));
  assert.ok(film.premise.includes("118 days") && film.premise.includes("90 days") && film.premise.includes("208-day"));
  assert.ok(film.premise.includes("Yuen Woo-ping") && film.premise.includes("four months") && film.premise.includes("wire-harness"));
  assert.ok(film.premise.includes("qualified stunt coordinators") && film.premise.includes("certified rigging") && film.premise.includes("fall protection"));
  assert.ok(film.premise.includes("John Gaeta") && film.premise.includes("Flo-Mo") && film.premise.includes("Canon EOS-A2") && film.premise.includes("up to 120"));
  assert.ok(film.premise.includes("Manex") && film.premise.includes("Animal Logic") && film.premise.includes("practical special-effects"));
  assert.ok(film.premise.includes("Dane A. Davis") && film.premise.includes("David Lee") && film.premise.includes("John Reitz"));
  assert.ok(film.premise.includes("136 minutes") && film.premise.includes("137") && film.premise.includes("institutional/release variance"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("USA-Australia") && goal.includes("Sydney")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("118") && goal.includes("90") && goal.includes("208-day")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Yuen Woo-ping") && goal.includes("modern safety")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("qualified stunt coordination") && goal.includes("certified rigging")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Flo-Mo") && goal.includes("120 still cameras")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Manex") && goal.includes("Animal Logic")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("136/137-minute") && goal.includes("136 minutes")));

  const camera = film.phases.find((phase) => phase.id === "camera_and_colour");
  assert.ok(camera?.player_task.includes("Panavision Platinum") && camera.player_task.includes("5279") && camera.player_task.includes("5274"));
  const training = film.phases.find((phase) => phase.id === "martial_arts_training");
  assert.ok(training?.player_task.includes("Yuen Woo-ping") && training.player_task.includes("four-month") && training.player_task.includes("stunt coordination"));
  const bullet = film.phases.find((phase) => phase.id === "bullet_time_capture");
  assert.ok(bullet?.player_task.includes("Gaeta/Manex Flo-Mo") && bullet.player_task.includes("configuration uncertainty"));
  const release = film.phases.find((phase) => phase.id === "release_and_runtime");
  assert.ok(release?.player_task.includes("136 minutes") && release.player_task.includes("137-minute"));

  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_adr_foley_or_mix_layout"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 11);
});
