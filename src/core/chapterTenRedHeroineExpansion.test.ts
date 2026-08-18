import assert from "node:assert/strict";
import test from "node:test";

import { chapterTenRedHeroineExpansionDefinitions } from "./chapterTenRedHeroineExpansion.js";

test("Chapter 10 materializes The Red Heroine as a surviving wuxia-serial-section Production Case", () => {
  assert.equal(chapterTenRedHeroineExpansionDefinitions.length, 1);
  const redHeroine = chapterTenRedHeroineExpansionDefinitions[0];
  assert.equal(redHeroine.id, "scenario_the_red_heroine_1929");
  assert.equal(redHeroine.title, "The Red Heroine");
  assert.equal(redHeroine.originalTitle, "红侠");
  assert.equal(redHeroine.year, 1929);
  assert.equal(redHeroine.runtimeMins, 101);
  assert.equal(redHeroine.scenarioType, "shanghai_youlian_wuxia_serial_fragment_trick_effects_production");
  assert.ok(redHeroine.premise.includes("thirteen-part Red Knight-Errant serial"));
  assert.ok(redHeroine.premise.includes("only surviving section"));
  assert.ok(redHeroine.premise.includes("Yao Shiquan"));
  assert.ok(redHeroine.premise.includes("Hu Xuguang"));
  assert.ok(redHeroine.premise.includes("stunt photography"));
  assert.ok(redHeroine.premise.includes("94 minutes"));
  assert.ok(redHeroine.premise.includes("101 minutes"));
  assert.ok(redHeroine.premise.includes("18-fps version"));
  assert.ok(redHeroine.requiredChoicesSeed.screenplay.includes("serial_context_without_invented_installments"));
  assert.ok(redHeroine.requiredChoicesSeed.camera.includes("stunt_photography_and_set_mechanisms"));
  assert.ok(redHeroine.requiredChoicesSeed.editing.includes("projection_speed_runtime_version_control"));
  assert.ok(redHeroine.requiredChoicesSeed.sound.includes("modern_live_accompaniment_is_exhibition"));
  assert.ok(redHeroine.learningGoals.some((goal) => goal.includes("thirteen-part Youlian serial")));
  assert.ok(redHeroine.learningGoals.some((goal) => goal.includes("abduction, coercion, sexual threat")));
  assert.ok(redHeroine.learningGoals.length >= 7);
  assert.ok(redHeroine.phases.length >= 9);
});
