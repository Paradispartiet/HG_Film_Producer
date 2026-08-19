import assert from "node:assert/strict";
import test from "node:test";

import { chapterThirteenAManEscapedExpansionDefinitions } from "./chapterThirteenAManEscapedExpansion.js";

test("Chapter 13 materializes A Man Escaped as a Montluc process-and-sound Production Case", () => {
  assert.equal(chapterThirteenAManEscapedExpansionDefinitions.length, 1);
  const film = chapterThirteenAManEscapedExpansionDefinitions[0];
  assert.equal(film.id, "scenario_a_man_escaped_1956");
  assert.equal(film.year, 1956);
  assert.equal(film.runtimeMins, 101);
  assert.deepEqual(film.directors, ["Robert Bresson"]);
  assert.ok(film.premise.includes("Montluc"));
  assert.ok(film.premise.includes("François Leterrier"));
  assert.ok(film.premise.includes("50 mm"));
  assert.ok(film.premise.includes("rerecording of all dialogue"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Devigny") && goal.includes("historical")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("offscreen") && goal.includes("sound")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_body_stock_lighting_package"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
