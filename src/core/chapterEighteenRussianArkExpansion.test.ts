import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenRussianArkExpansionDefinitions } from "./chapterEighteenRussianArkExpansion.js";

test("Chapter 18 materializes Russian Ark as a source-first single-take digital production case", () => {
  assert.equal(chapterEighteenRussianArkExpansionDefinitions.length, 1);
  const film = chapterEighteenRussianArkExpansionDefinitions[0];
  assert.equal(film.id, "scenario_russian_ark_2002");
  assert.equal(film.year, 2002);
  assert.equal(film.runtimeMins, 96);
  assert.deepEqual(film.directors, ["Alexander Sokurov"]);
  assert.equal(film.sourceId, "sokurov_russian_ark_2002");
  assert.ok(film.scenarioType.includes("single_take") && film.scenarioType.includes("uncompressed_hd"));

  assert.ok(film.premise.includes("State Hermitage Museum") && film.premise.includes("Tilman Büttner"));
  assert.ok(film.premise.includes("approximately 1,300-metre route") && film.premise.includes("1,500 metres"));
  assert.ok(film.premise.includes("35 kilograms") && film.premise.includes("92 minutes"));
  assert.ok(film.premise.includes("four hours of winter daylight") && film.premise.includes("26 hours"));
  assert.ok(film.premise.includes("three aborted starts") && film.premise.includes("fourth attempt"));
  assert.ok(film.premise.includes("reflection") && film.premise.includes("hand-light failure"));
  assert.ok(film.premise.includes("minus 25 Celsius") && film.premise.includes("lens fogging"));
  assert.ok(film.premise.includes("300 dancing couples") && film.premise.includes("Valery Gergiev"));
  assert.ok(film.premise.includes("862 actors") && film.premise.includes("more than 2,000 performers"));
  assert.ok(film.premise.includes("Da Vinci colour correction") && film.premise.includes("VFX"));
  assert.ok(film.premise.includes("removed visible lamps") && film.premise.includes("reframed electronically"));
  assert.ok(film.premise.includes("one-take acquisition achievement") && film.premise.includes("not a claim of untouched camera output"));
  assert.ok(film.premise.includes("Do not invent an exact camera body or lens package"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("continuous digital acquisition")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("film-magazine") && goal.includes("HD tape")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35-kilogram") && goal.includes("92-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three aborted starts") && goal.includes("fourth attempt")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("862-actor") && goal.includes("2,000 performers")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("digital imaging") && goal.includes("VFX")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("image post-production") && goal.includes("editorial cutting")));

  const recording = film.phases.find((phase) => phase.id === "recording_constraint");
  assert.ok(recording?.player_task.includes("uncompressed-HD hard-disk") && recording.player_task.includes("film magazines"));
  const endurance = film.phases.find((phase) => phase.id === "steadicam_endurance");
  assert.ok(endurance?.player_task.includes("Büttner") && endurance.player_task.includes("physical burden"));
  const reset = film.phases.find((phase) => phase.id === "attempt_reset_risk");
  assert.ok(reset?.player_task.includes("reflection") && reset.player_task.includes("hand-light"));
  const ballroom = film.phases.find((phase) => phase.id === "ballroom_choreography");
  assert.ok(ballroom?.player_task.includes("hundreds of dancers") && ballroom.player_task.includes("Gergiev"));
  const post = film.phases.find((phase) => phase.id === "digital_image_post");
  assert.ok(post?.player_task.includes("VFX") && post.player_task.includes("editorial cutting"));

  assert.ok(film.requiredChoicesSeed.camera.includes("feature_length_unbroken_steadicam_take"));
  assert.ok(film.requiredChoicesSeed.camera.includes("portable_uncompressed_hd_recording"));
  assert.ok(film.requiredChoicesSeed.editing.includes("digital_reframing_and_cleanup"));
  assert.ok(film.learningGoals.length >= 20);
  assert.ok(film.phases.length >= 13);
});
