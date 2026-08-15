import assert from "node:assert/strict";
import test from "node:test";

import { chapterFiveInternationalExpansionDefinitions } from "./chapterFiveInternationalExpansion.js";

test("Chapter 5 keeps Fantômas and Cabiria as materialized international expansion cases", () => {
  assert.equal(chapterFiveInternationalExpansionDefinitions.length, 2);

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
});
