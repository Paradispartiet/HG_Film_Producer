import assert from "node:assert/strict";
import test from "node:test";

import { chapterElevenNeighborsWifeExpansionDefinitions } from "./chapterElevenNeighborsWifeExpansion.js";

test("Chapter 11 materializes The Neighbor's Wife and Mine as a Shochiku synchronous-sound Production Case", () => {
  assert.equal(chapterElevenNeighborsWifeExpansionDefinitions.length, 1);
  const film = chapterElevenNeighborsWifeExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_neighbors_wife_and_mine_1931");
  assert.equal(film.title, "The Neighbor's Wife and Mine");
  assert.equal(film.originalTitle, "マダムと女房");
  assert.equal(film.year, 1931);
  assert.equal(film.runtimeMins, 56);
  assert.ok(film.aliases.includes("Madamu to Nyobo"));
  assert.ok(film.premise.includes("Shochiku Kamata"));
  assert.ok(film.premise.includes("three cameras"));
  assert.ok(film.premise.includes("Tsuchihashi"));
  assert.ok(film.premise.includes("benshi"));
  assert.ok(film.requiredChoicesSeed.camera.includes("mizutani_three_camera_sync_coverage"));
  assert.ok(film.requiredChoicesSeed.sound.includes("tsuchihashi_shochiku_phone_sync"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three cameras")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Vitaphone")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("benshi")));
  assert.ok(film.learningGoals.length >= 9);
  assert.ok(film.phases.length >= 9);
});
