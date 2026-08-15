import assert from "node:assert/strict";
import test from "node:test";

import { chapterFiveInternationalExpansionDefinitions } from "./chapterFiveInternationalExpansion.js";

test("Chapter 5 keeps Fantômas, Cabiria, Afgrunden and Atlantis as materialized international expansion cases", () => {
  assert.equal(chapterFiveInternationalExpansionDefinitions.length, 4);

  const fantomas = chapterFiveInternationalExpansionDefinitions.find((item) => item.id === "scenario_fantomas_1913");
  assert.ok(fantomas);
  assert.equal(fantomas.title, "Fantômas");
  assert.equal(fantomas.year, 1913);
  assert.equal(fantomas.scenarioType, "crime_thriller_production");
  assert.ok(fantomas.aliases.includes("Fantomas"));
  assert.ok(fantomas.learningGoals.length >= 5);
  assert.ok(fantomas.phases.length >= 9);

  const cabiria = chapterFiveInternationalExpansionDefinitions.find((item) => item.id === "scenario_cabiria_1914");
  assert.ok(cabiria);
  assert.equal(cabiria.title, "Cabiria");
  assert.equal(cabiria.year, 1914);
  assert.equal(cabiria.scenarioType, "historical_epic_production");
  assert.equal(cabiria.runtimeMins, 169);
  assert.equal(cabiria.sourceId, "manual_cabiria_1914");
  assert.ok(cabiria.requiredChoicesSeed.camera.includes("moving_camera_spatial_discovery"));
  assert.ok(cabiria.learningGoals.length >= 6);
  assert.ok(cabiria.phases.length >= 9);

  const afgrunden = chapterFiveInternationalExpansionDefinitions.find((item) => item.id === "scenario_afgrunden_1910");
  assert.ok(afgrunden);
  assert.equal(afgrunden.title, "Afgrunden");
  assert.equal(afgrunden.year, 1910);
  assert.equal(afgrunden.scenarioType, "erotic_melodrama_production");
  assert.equal(afgrunden.runtimeMins, 38);
  assert.equal(afgrunden.sourceId, "manual_afgrunden_1910");
  assert.ok(afgrunden.requiredChoicesSeed.camera.includes("performance_centered_framing"));
  assert.ok(afgrunden.learningGoals.length >= 6);
  assert.ok(afgrunden.phases.length >= 9);

  const atlantis = chapterFiveInternationalExpansionDefinitions.find((item) => item.id === "scenario_atlantis_1913");
  assert.ok(atlantis);
  assert.equal(atlantis.title, "Atlantis");
  assert.equal(atlantis.year, 1913);
  assert.equal(atlantis.scenarioType, "international_literary_feature_production");
  assert.equal(atlantis.runtimeMins, 114);
  assert.equal(atlantis.sourceId, "manual_atlantis_1913");
  assert.ok(atlantis.requiredChoicesSeed.editing.includes("market_specific_ending_strategy"));
  assert.ok(atlantis.requiredChoicesSeed.camera.includes("two_cinematographer_scale_coordination"));
  assert.ok(atlantis.learningGoals.length >= 6);
  assert.ok(atlantis.phases.length >= 9);
});
