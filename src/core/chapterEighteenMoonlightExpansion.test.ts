import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenMoonlightExpansionDefinitions } from "./chapterEighteenMoonlightExpansion.js";

test("Chapter 18 materializes Moonlight as a source-first single-camera digital performance and post-production case", () => {
  assert.equal(chapterEighteenMoonlightExpansionDefinitions.length, 1);
  const film = chapterEighteenMoonlightExpansionDefinitions[0];
  assert.equal(film.id, "scenario_moonlight_2016");
  assert.equal(film.year, 2016);
  assert.equal(film.runtimeMins, 111);
  assert.deepEqual(film.directors, ["Barry Jenkins"]);

  assert.ok(film.scenarioType.includes("single_camera") && film.scenarioType.includes("alexa_xt") && film.scenarioType.includes("triptych"));
  assert.ok(film.premise.includes("ALEXA XT recording ProRes"));
  assert.ok(film.premise.includes("entirely one-camera shoot") && film.premise.includes("Hawk V-Lite anamorphic lenses"));
  assert.ok(film.premise.includes("Rec.709 monitoring") && film.premise.includes("digital intermediate"));
  assert.ok(film.premise.includes("child actors") && film.premise.includes("first-time screen performers"));
  assert.ok(film.premise.includes("Miami") && film.premise.includes("Liberty City"));
  assert.ok(film.premise.includes("Black skin") && film.premise.includes("low-light sensitivity"));
  assert.ok(film.premise.includes("LiteMat 4") && film.premise.includes("90-minute weather window"));
  assert.ok(film.premise.includes("Fuji for childhood") && film.premise.includes("Agfa for adolescence") && film.premise.includes("Kodak for adulthood"));
  assert.ok(film.premise.includes("Nat Sanders") && film.premise.includes("Joi McMillon") && film.premise.includes("roughly four months"));
  assert.ok(film.premise.includes("Nicholas Britell") && film.premise.includes("chopped-and-screwed"));
  assert.ok(film.premise.includes("do not invent ARRIRAW") && film.premise.includes("three literal film stocks"));

  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_xt_prores"));
  assert.ok(film.requiredChoicesSeed.camera.includes("single_camera_only"));
  assert.ok(film.requiredChoicesSeed.editing.includes("three_chapter_film_emulation"));
  assert.ok(film.requiredChoicesSeed.sound.includes("houston_lineage_boundary"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("one-camera production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Rec.709") && goal.includes("final color grade")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("film-emulation") && goal.includes("literal capture stocks")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three actors") && goal.includes("triptych")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("DJ Screw")));

  assert.ok(film.phases.find((phase) => phase.id === "capture_test")?.player_task.includes("ALEXA XT ProRes"));
  assert.ok(film.phases.find((phase) => phase.id === "one_camera")?.player_task.includes("single camera"));
  assert.ok(film.phases.find((phase) => phase.id === "mirror_dailies")?.player_task.includes("Los Angeles"));
  assert.ok(film.phases.find((phase) => phase.id === "di_chapters")?.player_task.includes("Fuji-") && film.phases.find((phase) => phase.id === "di_chapters")?.player_task.includes("Agfa-") && film.phases.find((phase) => phase.id === "di_chapters")?.player_task.includes("Kodak-inspired"));
  assert.ok(film.phases.find((phase) => phase.id === "chop_screw")?.player_task.includes("Southern/Houston lineage"));

  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 20);
});
