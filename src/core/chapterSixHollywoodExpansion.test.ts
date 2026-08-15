import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixHollywoodExpansionDefinitions } from "./chapterSixHollywoodExpansion.js";

test("Chapter 6 materializes Gold Rush, The Crowd and The Cheat as distinct Hollywood-system cases", () => {
  assert.equal(chapterSixHollywoodExpansionDefinitions.length, 3);

  const goldRush = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_the_gold_rush_1925");
  assert.ok(goldRush);
  assert.equal(goldRush.scenarioType, "star_producer_feature_comedy");
  assert.ok(goldRush.requiredChoicesSeed.sound.includes("exclude_1942_narration_and_score"));

  const crowd = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_the_crowd_1928");
  assert.ok(crowd);
  assert.equal(crowd.scenarioType, "studio_social_realism_production");
  assert.ok(crowd.premise.includes("two release endings"));
  assert.ok(crowd.requiredChoicesSeed.sound.includes("1981_restoration_score_not_original"));

  const cheat = chapterSixHollywoodExpansionDefinitions.find((item) => item.id === "scenario_the_cheat_1915");
  assert.ok(cheat);
  assert.equal(cheat.title, "The Cheat");
  assert.equal(cheat.year, 1915);
  assert.equal(cheat.runtimeMins, 59);
  assert.equal(cheat.scenarioType, "studio_melodrama_star_style_production");
  assert.equal(cheat.sourceId, "manual_the_cheat_1915");
  assert.ok(cheat.premise.includes("Jesse L. Lasky Feature Play Company"));
  assert.ok(cheat.premise.includes("Paramount"));
  assert.ok(cheat.premise.includes("anti-Asian stereotype"));
  assert.ok(cheat.premise.includes("Hishuru Tori"));
  assert.ok(cheat.premise.includes("Burmese Haka Arakau"));
  assert.ok(cheat.premise.includes("1918 reissue"));
  assert.ok(cheat.requiredChoicesSeed.camera.includes("low_key_selective_lighting"));
  assert.ok(cheat.requiredChoicesSeed.editing.includes("1915_1918_version_boundary"));
  assert.ok(cheat.requiredChoicesSeed.sound.includes("silent_1915_release"));
  assert.ok(cheat.requiredChoicesSeed.sound.includes("1994_restoration_score_not_original"));
  assert.ok(cheat.requiredChoicesSeed.themes.includes("representation_ethics"));
  assert.ok(cheat.learningGoals.some((goal) => goal.includes("without making branding or sexualized violence into a player reward")));
  assert.ok(cheat.phases.some((phase) => phase.id === "research" && phase.player_task.includes("Japanese American protest")));
  assert.ok(cheat.learningGoals.length >= 6);
  assert.ok(cheat.phases.length >= 9);
});
