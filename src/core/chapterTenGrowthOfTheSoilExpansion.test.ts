import assert from "node:assert/strict";
import test from "node:test";

import { chapterTenGrowthOfTheSoilExpansionDefinitions } from "./chapterTenGrowthOfTheSoilExpansion.js";

test("Chapter 10 materializes Growth of the Soil as a Norwegian literary-location Production Case", () => {
  assert.equal(chapterTenGrowthOfTheSoilExpansionDefinitions.length, 1);
  const growth = chapterTenGrowthOfTheSoilExpansionDefinitions[0];
  assert.equal(growth.id, "scenario_growth_of_the_soil_1921");
  assert.equal(growth.title, "Growth of the Soil");
  assert.equal(growth.originalTitle, "Markens grøde");
  assert.equal(growth.year, 1921);
  assert.equal(growth.runtimeMins, 117);
  assert.equal(growth.scenarioType, "norwegian_nordland_literary_tinted_orchestral_restoration_production");
  assert.ok(growth.premise.includes("Norrøna Film"));
  assert.ok(growth.premise.includes("George Schnéevoigt"));
  assert.ok(growth.premise.includes("Leif Halvorsen"));
  assert.ok(growth.premise.includes("shooting in Nordland"));
  assert.ok(growth.premise.includes("tinting/toning"));
  assert.ok(growth.premise.includes("later Nazi allegiance"));
  assert.ok(growth.requiredChoicesSeed.camera.includes("landscape_not_empty_land_myth"));
  assert.ok(growth.requiredChoicesSeed.editing.includes("restored_version_runtime_control"));
  assert.ok(growth.requiredChoicesSeed.sound.includes("later_arrangements_not_original_sync_soundtrack"));
  assert.ok(growth.requiredChoicesSeed.themes.includes("representation_ethics"));
  assert.ok(growth.learningGoals.some((goal) => goal.includes("restoration provenance")));
  assert.ok(growth.learningGoals.some((goal) => goal.includes("projecting Hamsun's later political allegiance backward")));
  assert.ok(growth.learningGoals.length >= 7);
  assert.ok(growth.phases.length >= 9);
});
