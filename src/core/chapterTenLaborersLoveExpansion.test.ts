import assert from "node:assert/strict";
import test from "node:test";

import { chapterTenLaborersLoveExpansionDefinitions } from "./chapterTenLaborersLoveExpansion.js";

test("Chapter 10 materializes Laborer's Love as a bilingual Shanghai trick-comedy Production Case", () => {
  assert.equal(chapterTenLaborersLoveExpansionDefinitions.length, 1);
  const laborersLove = chapterTenLaborersLoveExpansionDefinitions[0];
  assert.equal(laborersLove.id, "scenario_laborers_love_1922");
  assert.equal(laborersLove.title, "Laborer's Love");
  assert.equal(laborersLove.originalTitle, "Laogong zhi aiqing");
  assert.equal(laborersLove.year, 1922);
  assert.equal(laborersLove.runtimeMins, 24);
  assert.equal(laborersLove.scenarioType, "shanghai_mingxing_bilingual_trick_comedy_production");
  assert.equal(laborersLove.sourceId, "manual_laborers_love_1922");
  assert.ok(laborersLove.premise.includes("Mingxing"));
  assert.ok(laborersLove.premise.includes("Zhang Weitao"));
  assert.ok(laborersLove.premise.includes("Chinese-and-English intertitles"));
  assert.ok(laborersLove.premise.includes("preservation bias"));
  assert.ok(laborersLove.requiredChoicesSeed.camera.includes("trick_photography_without_copying_myth"));
  assert.ok(laborersLove.requiredChoicesSeed.screenplay.includes("bilingual_intertitle_version_attention"));
  assert.ok(laborersLove.requiredChoicesSeed.sound.includes("modern_recorded_score_not_original_sound"));
  assert.ok(laborersLove.requiredChoicesSeed.themes.includes("archive_survival"));
  assert.ok(laborersLove.learningGoals.some((goal) => goal.includes("22-, 23- and 24-minute")));
  assert.ok(laborersLove.learningGoals.some((goal) => goal.includes("exceptional survival")));
  assert.ok(laborersLove.learningGoals.length >= 7);
  assert.ok(laborersLove.phases.length >= 9);
});
