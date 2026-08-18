import assert from "node:assert/strict";
import test from "node:test";

import { chapterElevenBroadwayMelodyExpansionDefinitions } from "./chapterElevenBroadwayMelodyExpansion.js";

test("Chapter 11 materializes The Broadway Melody as an MGM early-sound musical Production Case", () => {
  assert.equal(chapterElevenBroadwayMelodyExpansionDefinitions.length, 1);
  const film = chapterElevenBroadwayMelodyExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_broadway_melody_1929");
  assert.equal(film.title, "The Broadway Melody");
  assert.equal(film.year, 1929);
  assert.equal(film.runtimeMins, 100);
  assert.ok(film.premise.includes("Movietone"));
  assert.ok(film.premise.includes("Douglas Shearer"));
  assert.ok(film.premise.includes("silent version"));
  assert.ok(film.premise.includes("Technicolor"));
  assert.ok(film.premise.includes("playback"));
  assert.ok(film.requiredChoicesSeed.editing.includes("zimbalist_sound_version"));
  assert.ok(film.requiredChoicesSeed.editing.includes("levanway_silent_version"));
  assert.ok(film.requiredChoicesSeed.sound.includes("douglas_shearer_movietone_recording"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Vitaphone")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("silent release")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Technicolor")));
  assert.ok(film.learningGoals.length >= 9);
  assert.ok(film.phases.length >= 9);
});
