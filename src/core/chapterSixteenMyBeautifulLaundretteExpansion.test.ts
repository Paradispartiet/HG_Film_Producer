import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenMyBeautifulLaundretteExpansionDefinitions } from "./chapterSixteenMyBeautifulLaundretteExpansion.js";

test("Chapter 16 materializes My Beautiful Laundrette as the broadcaster-backed British P0 Production Case", () => {
  assert.equal(chapterSixteenMyBeautifulLaundretteExpansionDefinitions.length, 1);
  const film = chapterSixteenMyBeautifulLaundretteExpansionDefinitions[0];
  assert.equal(film.id, "scenario_my_beautiful_laundrette_1985");
  assert.equal(film.year, 1985);
  assert.equal(film.runtimeMins, 97);
  assert.deepEqual(film.directors, ["Stephen Frears"]);
  assert.equal(film.sourceId, "film4_my_beautiful_laundrette_1985");
  assert.ok(film.scenarioType.includes("channel4_film_on_four_working_title"));
  assert.ok(film.premise.includes("six-week"));
  assert.ok(film.premise.includes("16 mm"));
  assert.ok(film.premise.includes("35 mm"));
  assert.ok(film.premise.includes("Edinburgh"));
  assert.ok(film.premise.includes("97/98"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("made for television") || goal.includes("television")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Channel 4") && goal.includes("Working Title")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35 mm blow-up")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_or_lighting_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_mix_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
