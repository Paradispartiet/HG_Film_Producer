import assert from "node:assert/strict";
import test from "node:test";

import { chapterThirteenSunsetBoulevardExpansionDefinitions } from "./chapterThirteenSunsetBoulevardExpansion.js";

test("Chapter 13 materializes Sunset Boulevard as a Paramount self-reflexive postwar noir Production Case", () => {
  assert.equal(chapterThirteenSunsetBoulevardExpansionDefinitions.length, 1);
  const film = chapterThirteenSunsetBoulevardExpansionDefinitions[0];
  assert.equal(film.id, "scenario_sunset_boulevard_1950");
  assert.equal(film.year, 1950);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Billy Wilder"]);
  assert.ok(film.premise.includes("Paramount"));
  assert.ok(film.premise.includes("John F. Seitz"));
  assert.ok(film.premise.includes("Doane Harrison"));
  assert.ok(film.premise.includes("morgue"));
  assert.ok(film.premise.includes("Western Electric"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("PCA") && goal.includes("script negotiation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("preview") && goal.includes("structural cut")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_package"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
