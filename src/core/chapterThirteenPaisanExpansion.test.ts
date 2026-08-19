import assert from "node:assert/strict";
import test from "node:test";

import { chapterThirteenPaisanExpansionDefinitions } from "./chapterThirteenPaisanExpansion.js";

test("Chapter 13 materializes Paisan as a six-episode multilingual postwar location Production Case", () => {
  assert.equal(chapterThirteenPaisanExpansionDefinitions.length, 1);
  const film = chapterThirteenPaisanExpansionDefinitions[0];
  assert.equal(film.id, "scenario_paisan_1946");
  assert.equal(film.originalTitle, "Paisà");
  assert.equal(film.year, 1946);
  assert.equal(film.runtimeMins, 126);
  assert.deepEqual(film.directors, ["Roberto Rossellini"]);
  assert.ok(film.premise.includes("six-episode"));
  assert.ok(film.premise.includes("Otello Martelli"));
  assert.ok(film.premise.includes("Eraldo Da Roma"));
  assert.ok(film.premise.includes("Ovidio Del Grande"));
  assert.ok(film.premise.includes("ten times larger"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Carmela") && goal.includes("dubbing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("monastery") && goal.includes("Romagnolo")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_lens_stock_or_camera_package"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
