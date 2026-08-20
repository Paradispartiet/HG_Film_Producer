import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenPoliceStoryExpansionDefinitions } from "./chapterSixteenPoliceStoryExpansion.js";

test("Chapter 16 materializes Police Story as the Hong Kong commercial-action P0 Production Case", () => {
  assert.equal(chapterSixteenPoliceStoryExpansionDefinitions.length, 1);
  const film = chapterSixteenPoliceStoryExpansionDefinitions[0];
  assert.equal(film.id, "scenario_police_story_1985");
  assert.equal(film.year, 1985);
  assert.equal(film.runtimeMins, 101);
  assert.deepEqual(film.directors, ["Jackie Chan"]);
  assert.equal(film.sourceId, "hkfa_police_story_1985");
  assert.ok(film.scenarioType.includes("golden_harvest_hong_kong_urban_action"));
  assert.ok(film.premise.includes("Golden Harvest"));
  assert.ok(film.premise.includes("Jackie Chan Stunt Team"));
  assert.ok(film.premise.includes("multi-storey shopping mall"));
  assert.ok(film.premise.includes("100/101"));
  assert.ok(film.premise.includes("historical risk evidence") && film.premise.includes("refusing to turn it into a repeatable production method"));
  assert.ok(film.premise.includes("Modern production simulation must use safety engineering"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("modern") && goal.includes("safety")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Mainland") && goal.includes("Taiwan")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_or_multi_camera_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_dub_or_mix_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
