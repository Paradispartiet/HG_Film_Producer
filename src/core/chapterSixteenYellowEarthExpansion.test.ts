import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenYellowEarthExpansionDefinitions } from "./chapterSixteenYellowEarthExpansion.js";

test("Chapter 16 materializes Yellow Earth as the Mainland Fifth Generation P0 Production Case", () => {
  assert.equal(chapterSixteenYellowEarthExpansionDefinitions.length, 1);
  const film = chapterSixteenYellowEarthExpansionDefinitions[0];
  assert.equal(film.id, "scenario_yellow_earth_1984");
  assert.equal(film.year, 1984);
  assert.equal(film.runtimeMins, 89);
  assert.deepEqual(film.directors, ["Chen Kaige"]);
  assert.equal(film.sourceId, "hkfa_yellow_earth_1984");
  assert.ok(film.scenarioType.includes("guangxi_youth_unit_fifth_generation"));
  assert.ok(film.premise.includes("Guangxi Film Studio"));
  assert.ok(film.premise.includes("Youth Production Unit"));
  assert.ok(film.premise.includes("Zhang Yimou"));
  assert.ok(film.premise.includes("natural lighting"));
  assert.ok(film.premise.includes("Zhao Jiping"));
  assert.ok(film.premise.includes("86/89/91"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("state-studio") || goal.includes("Guangxi Film Studio")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("screenplay-credit provenance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Hong Kong") && goal.includes("Taiwan")));
  assert.ok(film.requiredChoicesSeed.camera.includes("35mm_color_no_invented_camera_lens_stock_or_exposure_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_orchestration_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
