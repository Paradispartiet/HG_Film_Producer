import assert from "node:assert/strict";
import test from "node:test";

import { chapterFifteenToukiBoukiExpansionDefinitions } from "./chapterFifteenToukiBoukiExpansion.js";

test("Chapter 15 materializes Touki Bouki as a Senegalese postcolonial-modernism Production Case", () => {
  assert.equal(chapterFifteenToukiBoukiExpansionDefinitions.length, 1);
  const film = chapterFifteenToukiBoukiExpansionDefinitions[0];
  assert.equal(film.id, "scenario_touki_bouki_1973");
  assert.equal(film.year, 1973);
  assert.equal(film.runtimeMins, 88);
  assert.deepEqual(film.directors, ["Djibril Diop Mambéty"]);
  assert.equal(film.sourceId, "film_foundation_touki_bouki_1973");
  assert.ok(film.scenarioType.includes("senegalese_postcolonial_modernism"));
  assert.ok(film.premise.includes("Cinegrit"));
  assert.ok(film.premise.includes("Pap Samba Sow"));
  assert.ok(film.premise.includes("Georges Bracher"));
  assert.ok(film.premise.includes("88 minutes"));
  assert.ok(film.premise.includes("89 minutes"));
  assert.ok(film.premise.includes("95 minutes"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("French") && goal.includes("infrastructure")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("cinematography-credit disagreement")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_lighting_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_microphone_recording_or_original_score_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
