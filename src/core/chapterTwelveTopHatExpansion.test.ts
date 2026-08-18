import assert from "node:assert/strict";
import test from "node:test";

import { chapterTwelveTopHatExpansionDefinitions } from "./chapterTwelveTopHatExpansion.js";

test("Chapter 12 materializes Top Hat as an RKO Astaire-Rogers musical Production Case", () => {
  assert.equal(chapterTwelveTopHatExpansionDefinitions.length, 1);
  const film = chapterTwelveTopHatExpansionDefinitions[0];
  assert.equal(film.id, "scenario_top_hat_1935");
  assert.equal(film.year, 1935);
  assert.equal(film.runtimeMins, 100);
  assert.deepEqual(film.directors, ["Mark Sandrich"]);
  assert.ok(film.premise.includes("Pandro S. Berman"));
  assert.ok(film.premise.includes("125 rehearsal hours"));
  assert.ok(film.premise.includes("PCA certificate no. 1099"));
  assert.ok(film.premise.includes("RCA Victor"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("five-week") && goal.includes("125-hour")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Berkeley") && goal.includes("RKO")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_universal_astaire_dolly_claim"));
  assert.ok(film.learningGoals.length >= 11);
  assert.ok(film.phases.length >= 9);
});
