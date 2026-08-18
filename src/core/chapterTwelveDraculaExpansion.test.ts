import assert from "node:assert/strict";
import test from "node:test";

import { chapterTwelveDraculaExpansionDefinitions } from "./chapterTwelveDraculaExpansion.js";

test("Chapter 12 materializes Dracula as a paired Universal English/Spanish Production Case", () => {
  assert.equal(chapterTwelveDraculaExpansionDefinitions.length, 1);
  const film = chapterTwelveDraculaExpansionDefinitions[0];
  assert.equal(film.id, "scenario_dracula_1931");
  assert.equal(film.year, 1931);
  assert.deepEqual(film.directors, ["Tod Browning", "George Melford"]);
  assert.ok(film.premise.includes("Karl Freund"));
  assert.ok(film.premise.includes("George Robinson"));
  assert.ok(film.premise.includes("Arthur Tavares"));
  assert.ok(film.premise.includes("Western Electric"));
  assert.ok(film.premise.includes("103-minute"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("erroneous") && goal.includes("AFI")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("74–75") && goal.includes("103")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_cross_version_credit_contamination"));
  assert.ok(film.learningGoals.length >= 11);
  assert.ok(film.phases.length >= 9);
});
