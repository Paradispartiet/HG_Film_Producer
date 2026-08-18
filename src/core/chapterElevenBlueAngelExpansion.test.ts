import assert from "node:assert/strict";
import test from "node:test";

import { chapterElevenBlueAngelExpansionDefinitions } from "./chapterElevenBlueAngelExpansion.js";

test("Chapter 11 materializes The Blue Angel as a multilingual UFA/Tobis Production Case", () => {
  assert.equal(chapterElevenBlueAngelExpansionDefinitions.length, 1);
  const film = chapterElevenBlueAngelExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_blue_angel_1930");
  assert.equal(film.title, "The Blue Angel");
  assert.equal(film.originalTitle, "Der blaue Engel");
  assert.equal(film.year, 1930);
  assert.equal(film.runtimeMins, 108);
  assert.ok(film.premise.includes("Erich Pommer"));
  assert.ok(film.premise.includes("Tobis-Klangfilm"));
  assert.ok(film.premise.includes("Neubabelsberg"));
  assert.ok(film.premise.includes("English The Blue Angel"));
  assert.ok(film.requiredChoicesSeed.editing.includes("german_english_version_separation"));
  assert.ok(film.requiredChoicesSeed.sound.includes("thiery_tobis_klangfilm_recording"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("German") && goal.includes("English")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Hollaender") && goal.includes("Weintraub")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("microphone")));
  assert.ok(film.learningGoals.length >= 10);
  assert.ok(film.phases.length >= 9);
});
