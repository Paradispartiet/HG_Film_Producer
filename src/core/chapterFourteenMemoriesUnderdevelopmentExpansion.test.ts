import assert from "node:assert/strict";
import test from "node:test";

import { chapterFourteenMemoriesUnderdevelopmentExpansionDefinitions } from "./chapterFourteenMemoriesUnderdevelopmentExpansion.js";

test("Chapter 14 materializes Memories of Underdevelopment as an ICAIC revolutionary-modernism Production Case", () => {
  assert.equal(chapterFourteenMemoriesUnderdevelopmentExpansionDefinitions.length, 1);
  const film = chapterFourteenMemoriesUnderdevelopmentExpansionDefinitions[0];
  assert.equal(film.id, "scenario_memories_of_underdevelopment_1968");
  assert.equal(film.year, 1968);
  assert.equal(film.runtimeMins, 98);
  assert.deepEqual(film.directors, ["Tomás Gutiérrez Alea"]);
  assert.ok(film.premise.includes("ICAIC"));
  assert.ok(film.premise.includes("Nelson Rodríguez"));
  assert.ok(film.premise.includes("97-minute"));
  assert.ok(film.premise.includes("104-minute"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("1968") && goal.includes("1961–1962")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("archival") && goal.includes("documentary")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_lighting_package"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
