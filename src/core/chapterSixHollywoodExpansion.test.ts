import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixHollywoodExpansionDefinitions } from "./chapterSixHollywoodExpansion.js";

test("Chapter 6 materializes The Gold Rush as the first Hollywood studio-system expansion case", () => {
  assert.equal(chapterSixHollywoodExpansionDefinitions.length, 1);
  const goldRush = chapterSixHollywoodExpansionDefinitions[0];
  assert.equal(goldRush.id, "scenario_the_gold_rush_1925");
  assert.equal(goldRush.title, "The Gold Rush");
  assert.equal(goldRush.year, 1925);
  assert.equal(goldRush.runtimeMins, 88);
  assert.equal(goldRush.scenarioType, "star_producer_feature_comedy");
  assert.equal(goldRush.sourceId, "manual_the_gold_rush_1925");
  assert.ok(goldRush.requiredChoicesSeed.camera.includes("hollywood_miniature_landscape"));
  assert.ok(goldRush.requiredChoicesSeed.editing.includes("1925_1942_version_boundary"));
  assert.ok(goldRush.requiredChoicesSeed.sound.includes("exclude_1942_narration_and_score"));
  assert.ok(goldRush.learningGoals.length >= 6);
  assert.ok(goldRush.phases.length >= 9);
});
