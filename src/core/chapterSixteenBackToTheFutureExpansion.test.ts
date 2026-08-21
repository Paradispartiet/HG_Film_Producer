import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenBackToTheFutureExpansionDefinitions } from "./chapterSixteenBackToTheFutureExpansion.js";

test("Chapter 16 materializes Back to the Future as a source-first studio reshoot and selective-effects production", () => {
  assert.equal(chapterSixteenBackToTheFutureExpansionDefinitions.length, 1);
  const film = chapterSixteenBackToTheFutureExpansionDefinitions[0];
  assert.equal(film.id, "scenario_back_to_the_future_1985");
  assert.equal(film.year, 1985);
  assert.equal(film.runtimeMins, 116);
  assert.deepEqual(film.directors, ["Robert Zemeckis"]);
  assert.equal(film.sourceId, "afi_back_to_the_future_1985");
  assert.ok(film.scenarioType.includes("amblin_universal") && film.scenarioType.includes("actor_replacement") && film.scenarioType.includes("selective_vfx"));
  assert.ok(film.premise.includes("fall 1980") && film.premise.includes("Steven Spielberg") && film.premise.includes("Universal Pictures"));
  assert.ok(film.premise.includes("Eric Stoltz") && film.premise.includes("five weeks") && film.premise.includes("Michael J. Fox"));
  assert.ok(film.premise.includes("Family Ties") && film.premise.includes("days") && film.premise.includes("nights"));
  assert.ok(film.premise.includes("three 1981 DeLoreans") && film.premise.includes("Kevin Pike") && film.premise.includes("four firejets"));
  assert.ok(film.premise.includes("fewer than thirty visual-effects shots") && film.premise.includes("blue-screen") && film.premise.includes("one-fifth-scale DeLorean miniature") && film.premise.includes("VistaCruiser"));
  assert.ok(film.premise.includes("Dean Cundey") && film.premise.includes("Lawrence G. Paull") && film.premise.includes("Deborah L. Scott"));
  assert.ok(film.premise.includes("Arthur Schmidt") && film.premise.includes("Harry Keramidas") && film.premise.includes("Alan Silvestri"));
  assert.ok(film.premise.includes("William B. Kaplan") && film.premise.includes("Industrial Light & Magic"));
  assert.ok(film.premise.includes("roughly eight weeks") && film.premise.includes("3 July 1985"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Stoltz-to-Michael J. Fox") && goal.includes("five weeks") && goal.includes("reshoot")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three modified DeLorean") && goal.includes("firejet") && goal.includes("ILM")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("fewer-than-thirty") && goal.includes("selective effects")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("roughly eight-week") && goal.includes("3 July 1985")));
  const casting = film.phases.find((phase) => phase.id === "casting_rebuild");
  assert.ok(casting?.player_task.includes("Stoltz-to-Fox") && casting.player_task.includes("without inventing the exact amount"));
  const effects = film.phases.find((phase) => phase.id === "visual_effects");
  assert.ok(effects?.player_task.includes("blue-screen") && effects.player_task.includes("miniature") && effects.player_task.includes("VistaCruiser"));
  const camera = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(camera?.player_task.includes("Cundey") && camera.player_task.includes("without inventing unsupported principal-unit camera, lens, stock or exposure"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_principal_camera_lens_stock_focal_length_or_exposure_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_console_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});