import assert from "node:assert/strict";
import test from "node:test";

import { chapterFifteenManilaClawsLightExpansionDefinitions } from "./chapterFifteenManilaClawsLightExpansion.js";

test("Chapter 15 materializes Manila in the Claws of Light as a Philippine martial-law Production Case", () => {
  assert.equal(chapterFifteenManilaClawsLightExpansionDefinitions.length, 1);
  const film = chapterFifteenManilaClawsLightExpansionDefinitions[0];
  assert.equal(film.id, "scenario_manila_in_the_claws_of_light_1975");
  assert.equal(film.year, 1975);
  assert.equal(film.runtimeMins, 124);
  assert.deepEqual(film.directors, ["Lino Brocka"]);
  assert.equal(film.sourceId, "film_foundation_manila_claws_light_1975");
  assert.ok(film.scenarioType.includes("philippine_martial_law"));
  assert.ok(film.premise.includes("Mike De Leon"));
  assert.ok(film.premise.includes("Clodualdo Del Mundo Jr."));
  assert.ok(film.premise.includes("124 minutes"));
  assert.ok(film.premise.includes("125"));
  assert.ok(film.premise.includes("126"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("pre-martial-law") && goal.includes("1975")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("shortened international") && goal.includes("version")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_lighting_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_microphone_or_recording_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
