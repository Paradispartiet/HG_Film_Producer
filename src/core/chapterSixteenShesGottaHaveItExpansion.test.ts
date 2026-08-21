import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenShesGottaHaveItExpansionDefinitions } from "./chapterSixteenShesGottaHaveItExpansion.js";

test("Chapter 16 materializes She's Gotta Have It as a source-first Brooklyn microbudget production", () => {
  assert.equal(chapterSixteenShesGottaHaveItExpansionDefinitions.length, 1);
  const film = chapterSixteenShesGottaHaveItExpansionDefinitions[0];
  assert.equal(film.id, "scenario_shes_gotta_have_it_1986");
  assert.equal(film.year, 1986);
  assert.equal(film.runtimeMins, 84);
  assert.deepEqual(film.directors, ["Spike Lee"]);
  assert.equal(film.sourceId, "afi_shes_gotta_have_it_1986");
  assert.ok(film.scenarioType.includes("brooklyn_microbudget") && film.scenarioType.includes("super16") && film.scenarioType.includes("independent_distribution"));
  assert.ok(film.premise.includes("Messenger") && film.premise.includes("$18,000 New York State Council on the Arts") && film.premise.includes("$175,000"));
  assert.ok(film.premise.includes("twelve days") && film.premise.includes("Super 16mm") && film.premise.includes("one color sequence") && film.premise.includes("35mm blow-up"));
  assert.ok(film.premise.includes("Fort Greene") && film.premise.includes("Bedford-Stuyvesant") && film.premise.includes("Brooklyn Heights") && film.premise.includes("Crown Heights"));
  assert.ok(film.premise.includes("Ernest Dickerson") && film.premise.includes("Wynn Thomas") && film.premise.includes("John Michael Reefer"));
  assert.ok(film.premise.includes("Barry Alexander Brown") && film.premise.includes("Bill Lee") && film.premise.includes("Spike Lee editor"));
  assert.ok(film.premise.includes("non-union crew") && film.premise.includes("without film permits or insurance") && film.premise.includes("never recommend unpermitted, uninsured or labor-noncompliant production"));
  assert.ok(film.premise.includes("San Francisco Film Festival") && film.premise.includes("Island Pictures") && film.premise.includes("8 August 1986"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("twelve-day") && goal.includes("not as a recommended universal pace")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Super 16") && goal.includes("single color sequence") && goal.includes("unsupported camera body")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm blow-up") && goal.includes("original capture format")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("unpermitted") && goal.includes("uninsured") && goal.includes("contemporary production recommendation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("questionnaire") && goal.includes("fictional character")));
  const camera = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(camera?.player_task.includes("Dickerson") && camera.player_task.includes("Super 16") && camera.player_task.includes("leaving unsupported camera-body, lens, stock and exposure details unset"));
  const financing = film.phases.find((phase) => phase.id === "financing");
  assert.ok(financing?.player_task.includes("NYSCA") && financing.player_task.includes("$175,000") && financing.player_task.includes("separate finance layers"));
  const sound = film.phases.find((phase) => phase.id === "sound_music");
  assert.ok(sound?.player_task.includes("Brown's sound design") && sound.player_task.includes("Bill Lee's music") && sound.player_task.includes("without inventing hardware"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_body_lens_stock_focal_length_or_exposure_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_console_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});
