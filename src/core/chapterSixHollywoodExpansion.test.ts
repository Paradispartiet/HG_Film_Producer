import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixHollywoodExpansionDefinitions } from "./chapterSixHollywoodExpansion.js";

test("Chapter 6 materializes The Gold Rush and The Crowd as distinct Hollywood-system cases", () => {
  assert.equal(chapterSixHollywoodExpansionDefinitions.length, 2);

  const goldRush = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_the_gold_rush_1925");
  assert.ok(goldRush);
  assert.equal(goldRush.runtimeMins, 88);
  assert.equal(goldRush.scenarioType, "star_producer_feature_comedy");
  assert.equal(goldRush.sourceId, "manual_the_gold_rush_1925");
  assert.ok(goldRush.premise.includes("United Artists"));
  assert.ok(goldRush.premise.includes("1942 reissue"));
  assert.ok(goldRush.requiredChoicesSeed.camera.includes("hollywood_miniature_landscape"));
  assert.ok(goldRush.requiredChoicesSeed.editing.includes("1925_1942_version_boundary"));
  assert.ok(goldRush.requiredChoicesSeed.sound.includes("silent_1925_release"));
  assert.ok(goldRush.requiredChoicesSeed.sound.includes("exclude_1942_narration_and_score"));

  const crowd = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_the_crowd_1928");
  assert.ok(crowd);
  assert.equal(crowd.title, "The Crowd");
  assert.equal(crowd.year, 1928);
  assert.equal(crowd.runtimeMins, 98);
  assert.equal(crowd.scenarioType, "studio_social_realism_production");
  assert.equal(crowd.sourceId, "manual_the_crowd_1928");
  assert.ok(crowd.aliases.includes("The Mob"));
  assert.ok(crowd.premise.includes("Metro-Goldwyn-Mayer"));
  assert.ok(crowd.requiredChoicesSeed.camera.includes("concealed_camera_new_york_exteriors"));
  assert.ok(crowd.requiredChoicesSeed.editing.includes("exhibitor_ending_version_control"));
  assert.ok(crowd.requiredChoicesSeed.sound.includes("silent_1928_release"));
  assert.ok(crowd.requiredChoicesSeed.sound.includes("1981_restoration_score_not_original"));
  assert.ok(crowd.learningGoals.length >= 6);
  assert.ok(crowd.phases.length >= 9);
});
