import assert from "node:assert/strict";
import test from "node:test";

import { chapterTwelveItHappenedOneNightExpansionDefinitions } from "./chapterTwelveItHappenedOneNightExpansion.js";

test("Chapter 12 materializes It Happened One Night as a Columbia screwball/star-loan Production Case", () => {
  assert.equal(chapterTwelveItHappenedOneNightExpansionDefinitions.length, 1);
  const film = chapterTwelveItHappenedOneNightExpansionDefinitions[0];
  assert.equal(film.id, "scenario_it_happened_one_night_1934");
  assert.equal(film.year, 1934);
  assert.equal(film.runtimeMins, 105);
  assert.deepEqual(film.directors, ["Frank Capra"]);
  assert.ok(film.premise.includes("Columbia"));
  assert.ok(film.premise.includes("MGM"));
  assert.ok(film.premise.includes("Paramount"));
  assert.ok(film.premise.includes("Western Electric Noiseless Recording"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("July 1934") && goal.includes("PCA")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("five-major-Oscar")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_lens_stock_or_vehicle_rig_claims"));
  assert.ok(film.learningGoals.length >= 11);
  assert.ok(film.phases.length >= 9);
});
