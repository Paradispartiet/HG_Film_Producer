import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenMyOwnPrivateIdahoExpansionDefinitions } from "./chapterSeventeenMyOwnPrivateIdahoExpansion.js";

test("Chapter 17 materializes My Own Private Idaho as a source-first independent queer road production", () => {
  assert.equal(chapterSeventeenMyOwnPrivateIdahoExpansionDefinitions.length, 1);
  const film = chapterSeventeenMyOwnPrivateIdahoExpansionDefinitions[0];
  assert.equal(film.id, "scenario_my_own_private_idaho_1991");
  assert.equal(film.year, 1991);
  assert.equal(film.runtimeMins, 104);
  assert.deepEqual(film.directors, ["Gus Van Sant"]);
  assert.equal(film.sourceId, "afi_my_own_private_idaho_1991");
  assert.ok(film.scenarioType.includes("american_independent") && film.scenarioType.includes("queer_road") && film.scenarioType.includes("shakespeare"));

  assert.ok(film.premise.includes("Idaho Productions") && film.premise.includes("Fine Line Features") && film.premise.includes("New Line International Releasing"));
  assert.ok(film.premise.includes("1 November 1990") && film.premise.includes("Portland") && film.premise.includes("Seattle") && film.premise.includes("Rome"));
  assert.ok(film.premise.includes("three previously separate projects") && film.premise.includes("Prince Hal") && film.premise.includes("Drugstore Cowboy"));
  assert.ok(film.premise.includes("River Phoenix") && film.premise.includes("campfire") && film.premise.includes("Keanu Reeves"));
  assert.ok(film.premise.includes("New Queer Cinema") && film.premise.includes("not proof that queer films shared one production model"));
  assert.ok(film.premise.includes("$2.5-million") && film.premise.includes("$3.5 million") && film.premise.includes("cost-report variance"));
  assert.ok(film.premise.includes("104 minutes") && film.premise.includes("105 minutes") && film.premise.includes("canonical gameplay runtime"));
  assert.ok(film.premise.includes("35mm") && film.premise.includes("camera bodies") && film.premise.includes("laboratory process"));
  assert.ok(film.premise.includes("Criterion") && film.premise.includes("original camera negative") && film.premise.includes("downstream"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Idaho Productions") && goal.includes("Fine Line")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three earlier writing projects") && goal.includes("Shakespeare")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("River Phoenix") && goal.includes("campfire")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("New Queer Cinema") && goal.includes("single queer aesthetic")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("$2.5m/$3.5m") && goal.includes("audited")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("104/105-minute") && goal.includes("104-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("4K") && goal.includes("downstream")));

  const writing = film.phases.find((phase) => phase.id === "writing_synthesis");
  assert.ok(writing?.player_task.includes("three") && writing.player_task.includes("Prince Hal/Shakespeare"));
  const finance = film.phases.find((phase) => phase.id === "package_and_finance");
  assert.ok(finance?.player_task.includes("$2.5m/$3.5m") && finance.player_task.includes("Fine Line"));
  const actor = film.phases.find((phase) => phase.id === "actor_character_development");
  assert.ok(actor?.player_task.includes("Phoenix") && actor.player_task.includes("Reeves") && actor.player_task.includes("campfire"));
  const camera = film.phases.find((phase) => phase.id === "camera_and_format");
  assert.ok(camera?.player_task.includes("Eric Alan Edwards") && camera.player_task.includes("John Campbell") && camera.player_task.includes("body/lens/stock"));
  const release = film.phases.find((phase) => phase.id === "release_and_preservation");
  assert.ok(release?.player_task.includes("104/105") && release.player_task.includes("Criterion") && release.player_task.includes("National Film Registry"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_exposure_or_lab"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_adr_foley_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
