import assert from "node:assert/strict";
import test from "node:test";

import { chapterElevenEnthusiasmExpansionDefinitions } from "./chapterElevenEnthusiasmExpansion.js";

test("Chapter 11 materializes Enthusiasm as a non-synchronous industrial-sound Production Case", () => {
  assert.equal(chapterElevenEnthusiasmExpansionDefinitions.length, 1);
  const film = chapterElevenEnthusiasmExpansionDefinitions[0];
  assert.equal(film.id, "scenario_enthusiasm_1930");
  assert.equal(film.title, "Enthusiasm");
  assert.equal(film.originalTitle, "Entuziazm: Simfoniya Donbassa");
  assert.equal(film.year, 1930);
  assert.equal(film.runtimeMins, 65);
  assert.ok(film.premise.includes("non-synchronization"));
  assert.ok(film.premise.includes("Ukraine"));
  assert.ok(film.premise.includes("propaganda"));
  assert.ok(film.premise.includes("1972"));
  assert.ok(film.requiredChoicesSeed.editing.includes("contrapuntal_sound_image_montage"));
  assert.ok(film.requiredChoicesSeed.sound.includes("non_synchronization_as_method"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Soviet") && goal.includes("Russian")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("documentary")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("3K restoration")));
  assert.ok(film.learningGoals.length >= 9);
  assert.ok(film.phases.length >= 9);
});
