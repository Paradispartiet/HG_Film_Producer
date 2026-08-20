import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenOfficialStoryExpansionDefinitions } from "./chapterSixteenOfficialStoryExpansion.js";

test("Chapter 16 materializes The Official Story as the Argentine democratic-transition P0 Production Case", () => {
  assert.equal(chapterSixteenOfficialStoryExpansionDefinitions.length, 1);
  const film = chapterSixteenOfficialStoryExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_official_story_1985");
  assert.equal(film.year, 1985);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Luis Puenzo"]);
  assert.equal(film.sourceId, "cinenacional_la_historia_oficial_1985");
  assert.ok(film.scenarioType.includes("argentina_democratic_transition"));
  assert.ok(film.premise.includes("produced in 1984"));
  assert.ok(film.premise.includes("3 April 1985"));
  assert.ok(film.premise.includes("two or three weeks") && film.premise.includes("resumed secretly"));
  assert.ok(film.premise.includes("not afraid of censors"));
  assert.ok(film.premise.includes("film-specific production history") && film.premise.includes("not as a repeatable clandestine workflow"));
  assert.ok(film.premise.includes("110 minutes") && film.premise.includes("112- and 114-minute"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("formal censorship") && goal.includes("Analía Castro")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("secret restart") && goal.includes("not as a safe or repeatable")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_or_exposure_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_mix_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
