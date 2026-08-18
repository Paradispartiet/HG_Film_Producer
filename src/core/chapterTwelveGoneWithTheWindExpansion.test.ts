import assert from "node:assert/strict";
import test from "node:test";

import { chapterTwelveGoneWithTheWindExpansionDefinitions } from "./chapterTwelveGoneWithTheWindExpansion.js";

test("Chapter 12 materializes Gone with the Wind as a Selznick multi-unit Technicolor Production Case", () => {
  assert.equal(chapterTwelveGoneWithTheWindExpansionDefinitions.length, 1);
  const film = chapterTwelveGoneWithTheWindExpansionDefinitions[0];
  assert.equal(film.id, "scenario_gone_with_the_wind_1939");
  assert.equal(film.year, 1939);
  assert.equal(film.runtimeMins, 220);
  assert.deepEqual(film.directors, ["Victor Fleming", "George Cukor", "Sam Wood"]);
  assert.ok(film.premise.includes("Selznick International Pictures"));
  assert.ok(film.premise.includes("Metro-Goldwyn-Mayer"));
  assert.ok(film.premise.includes("Technicolor"));
  assert.ok(film.premise.includes("Lost Cause"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("slavery") && goal.includes("racist")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Hattie McDaniel") && goal.includes("segregated")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_universal_seven_camera_or_lens_claim"));
  assert.ok(film.learningGoals.length >= 11);
  assert.ok(film.phases.length >= 9);
});
