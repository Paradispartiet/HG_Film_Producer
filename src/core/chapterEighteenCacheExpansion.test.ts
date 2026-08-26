import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenCacheExpansionDefinitions } from "./chapterEighteenCacheExpansion.js";

test("Chapter 18 materializes Caché as a source-first HD surveillance-image and film-out case", () => {
  assert.equal(chapterEighteenCacheExpansionDefinitions.length, 1);
  const film = chapterEighteenCacheExpansionDefinitions[0];
  assert.equal(film.id, "scenario_cache_2005");
  assert.equal(film.year, 2005);
  assert.equal(film.runtimeMins, 117);
  assert.deepEqual(film.directors, ["Michael Haneke"]);
  assert.ok(film.aliases.includes("Hidden"));
  assert.ok(film.scenarioType.includes("hd_video") && film.scenarioType.includes("surveillance_image_parity") && film.scenarioType.includes("filmout"));
  assert.ok(film.premise.includes("Sony HDW-750") && film.premise.includes("HDW-F900") && film.premise.includes("Zeiss DigiPrimes"));
  assert.ok(film.premise.includes("five weeks") && film.premise.includes("four in Vienna"));
  assert.ok(film.premise.includes("six camera bodies") && film.premise.includes("da Vinci 2K"));
  assert.ok(film.premise.includes("35mm") && film.premise.includes("1.85 hard matte"));
  assert.ok(film.premise.includes("CRLS") && film.premise.includes("two projectors"));
  assert.ok(film.premise.includes("Jean-Paul Mugel") && film.premise.includes("Jean-Pierre LaForce"));
  assert.ok(film.requiredChoicesSeed.camera.includes("sony_hdw_750_f900"));
  assert.ok(film.requiredChoicesSeed.camera.includes("crls_reflected_light"));
  assert.ok(film.requiredChoicesSeed.editing.includes("tape_playback_reveal"));
  assert.ok(film.requiredChoicesSeed.sound.includes("re_recording"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("mixed film/digital") && goal.includes("all-digital")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("six camera bodies") && goal.includes("simultaneously")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("da Vinci 2K") && goal.includes("Sony")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Éclair") && goal.includes("Listo")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("117-minute") && goal.includes("1h55")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("production sound") && goal.includes("re-recording")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("exact recording codec") && goal.includes("microphone")));
  assert.ok(film.phases.find((phase) => phase.id === "image_parity_test")?.player_task.includes("mixed film/digital"));
  assert.ok(film.phases.find((phase) => phase.id === "camera_reliability")?.player_task.includes("six-body"));
  assert.ok(film.phases.find((phase) => phase.id === "diagnostic_prints")?.player_task.includes("35mm prints"));
  assert.ok(film.phases.find((phase) => phase.id === "filmout")?.player_task.includes("1.85 hard-matte"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("shot-specific VFX"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
