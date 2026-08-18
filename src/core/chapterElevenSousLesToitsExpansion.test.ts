import assert from "node:assert/strict";
import test from "node:test";

import { chapterElevenSousLesToitsExpansionDefinitions } from "./chapterElevenSousLesToitsExpansion.js";

test("Chapter 11 materializes Sous les toits de Paris as a selective-sound Production Case", () => {
  assert.equal(chapterElevenSousLesToitsExpansionDefinitions.length, 1);
  const film = chapterElevenSousLesToitsExpansionDefinitions[0];
  assert.equal(film.id, "scenario_sous_les_toits_de_paris_1930");
  assert.equal(film.title, "Sous les toits de Paris");
  assert.equal(film.year, 1930);
  assert.equal(film.runtimeMins, 90);
  assert.ok(film.premise.includes("Société des Films Sonores Tobis"));
  assert.ok(film.premise.includes("Lazare Meerson"));
  assert.ok(film.premise.includes("Hermann Storr"));
  assert.ok(film.premise.includes("selective silence"));
  assert.ok(film.premise.includes("2019 4K restoration"));
  assert.ok(film.requiredChoicesSeed.camera.includes("perinal_raulet_moving_camera_sound_perspective"));
  assert.ok(film.requiredChoicesSeed.sound.includes("storr_morhenn_selective_synchronization"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("offscreen sound")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("recording hardware")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2019 4K restoration")));
  assert.ok(film.learningGoals.length >= 9);
  assert.ok(film.phases.length >= 9);
});
