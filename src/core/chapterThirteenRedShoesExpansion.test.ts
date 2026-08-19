import assert from "node:assert/strict";
import test from "node:test";

import { chapterThirteenRedShoesExpansionDefinitions } from "./chapterThirteenRedShoesExpansion.js";

test("Chapter 13 materializes The Red Shoes as an Archers Technicolor ballet Production Case", () => {
  assert.equal(chapterThirteenRedShoesExpansionDefinitions.length, 1);
  const film = chapterThirteenRedShoesExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_red_shoes_1948");
  assert.equal(film.year, 1948);
  assert.equal(film.runtimeMins, 136);
  assert.deepEqual(film.directors, ["Michael Powell", "Emeric Pressburger"]);
  assert.ok(film.premise.includes("Archers"));
  assert.ok(film.premise.includes("Jack Cardiff"));
  assert.ok(film.premise.includes("Hein Heckroth"));
  assert.ok(film.premise.includes("Reginald Mills"));
  assert.ok(film.premise.includes("Brian Easdale"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("postwar British cinema") && goal.includes("Technicolor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("soundtrack first") && goal.includes("whole feature")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_package"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
