import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenYeelenExpansionDefinitions } from "./chapterSixteenYeelenExpansion.js";

test("Chapter 16 materializes Yeelen as the Malian-led transnational P0 Production Case", () => {
  assert.equal(chapterSixteenYeelenExpansionDefinitions.length, 1);
  const film = chapterSixteenYeelenExpansionDefinitions[0];
  assert.equal(film.id, "scenario_yeelen_1987");
  assert.equal(film.year, 1987);
  assert.equal(film.runtimeMins, 105);
  assert.deepEqual(film.directors, ["Souleymane Cissé"]);
  assert.equal(film.sourceId, "bfi_yeelen_1987");
  assert.ok(film.scenarioType.includes("mali_burkina_france_west_germany"));
  assert.ok(film.premise.includes("Mali–Burkina Faso–France–West Germany"));
  assert.ok(film.premise.includes("three and a half years"));
  assert.ok(film.premise.includes("sandstorm") && film.premise.includes("Ismaila Sarr"));
  assert.ok(film.premise.includes("seven months") && film.premise.includes("Niamanto Sanogo"));
  assert.ok(film.premise.includes("September, October and November"));
  assert.ok(film.premise.includes("Do not expose, reconstruct or gamify restricted ritual knowledge"));
  assert.ok(film.premise.includes("105 minutes") && film.premise.includes("106-minute"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("public/restricted knowledge boundary") && goal.includes("Komo")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Cannes") && goal.includes("authorship")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_or_exposure_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_mix_chain"));
  const researchPhase = film.phases.find((phase) => phase.id === "research");
  assert.ok(researchPhase?.player_task.includes("leaving restricted ritual knowledge un-reconstructed"));
  const designPhase = film.phases.find((phase) => phase.id === "design");
  assert.ok(designPhase?.player_task.includes("avoid turning protected symbolic material into game instructions"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
