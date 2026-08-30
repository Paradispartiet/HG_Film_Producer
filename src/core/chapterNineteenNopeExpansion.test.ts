import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenNopeExpansionDefinitions } from "./chapterNineteenNopeExpansion.js";

test("Chapter 19 materializes Nope as the industrial-scale technical rotation case", () => {
  assert.equal(chapterNineteenNopeExpansionDefinitions.length, 1);
  const film = chapterNineteenNopeExpansionDefinitions[0];
  assert.equal(film.id, "scenario_nope_2022");
  assert.equal(film.title, "Nope");
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 131);
  assert.deepEqual(film.directors, ["Jordan Peele"]);

  assert.ok(film.scenarioType.includes("industrial_scale_technical"));
  assert.ok(film.scenarioType.includes("imax_15perf") && film.scenarioType.includes("65mm_5perf"));
  assert.ok(film.scenarioType.includes("alexa65_infrared") && film.scenarioType.includes("dual_camera_day_for_night"));
  assert.ok(film.scenarioType.includes("kodak_vision3_250d_500t_50d"));
  assert.ok(film.scenarioType.includes("jupiters_claim") && film.scenarioType.includes("practical_360_sets"));
  assert.ok(film.scenarioType.includes("675_vfx_shots") && film.scenarioType.includes("cg_cloudscape"));
  assert.ok(film.scenarioType.includes("first_cut_four_hours") && film.scenarioType.includes("sound_design_negative_space"));

  assert.ok(film.premise.includes("131 minutes") && film.premise.includes("Universal"));
  assert.ok(film.premise.includes("15-perf IMAX") && film.premise.includes("5-perf 65mm"));
  assert.ok(film.premise.includes("VISION3 250D 5207") && film.premise.includes("VISION3 500T 5219"));
  assert.ok(film.premise.includes("50D 5203") && film.premise.includes("FotoKem"));
  assert.ok(film.premise.includes("8K scans") && film.premise.includes("4K"));
  assert.ok(film.premise.includes("ARRI Alexa 65") && film.premise.includes("infrared"));
  assert.ok(film.premise.includes("Panavision System 65") && film.premise.includes("Sphero"));
  assert.ok(film.premise.includes("Elhanan Matos") && film.premise.includes("Greig Fisher"));
  assert.ok(film.premise.includes("IMAX cameras were too noisy") && film.premise.includes("sync-sound"));
  assert.ok(film.premise.includes("more than 675 VFX shots") && film.premise.includes("CG cloudscapes"));
  assert.ok(film.premise.includes("Agua Dulce") && film.premise.includes("Jupiter's Claim"));
  assert.ok(film.premise.includes("360-degree filming") && film.premise.includes("structurally usable"));
  assert.ok(film.premise.includes("Sky Dancers") && film.premise.includes("food-grade blood"));
  assert.ok(film.premise.includes("near four hours") && film.premise.includes("Nicholas Monsour"));
  assert.ok(film.premise.includes("Johnnie Burn") && film.premise.includes("wind/scream"));
  assert.ok(film.premise.includes("exact budget line items") && film.premise.includes("distribution economics"));

  assert.ok(film.requiredChoicesSeed.camera.includes("imax_15perf_65mm"));
  assert.ok(film.requiredChoicesSeed.camera.includes("system65_5perf"));
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa65_infrared") && film.requiredChoicesSeed.camera.includes("dual_camera_day_for_night"));
  assert.ok(film.requiredChoicesSeed.camera.includes("panavision_sphero_matching"));
  assert.ok(film.requiredChoicesSeed.editing.includes("near_four_hour_first_cut"));
  assert.ok(film.requiredChoicesSeed.sound.includes("johnnie_burn_sound_design"));
  assert.ok(film.requiredChoicesSeed.sound.includes("silence_negative_space") && film.requiredChoicesSeed.sound.includes("final_mix_chain_unknown"));
  assert.ok(film.requiredChoicesSeed.themes.includes("industrial_scale_technical") && film.requiredChoicesSeed.themes.includes("large_format"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("industrial-scale technical rotation case")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("15-perf IMAX") && goal.includes("5-perf System 65mm")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("IMAX cameras") && goal.includes("production sound")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("VISION3 250D 5207")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("VISION3 500T 5219")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("VISION3 50D 5203")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("8K") && goal.includes("4K")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ARRI Alexa 65 infrared") && goal.includes("Panavision System 65")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Sphero") && goal.includes("compositing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Agua Dulce/Santa Clarita")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("360-degree shooting")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Sky Dancers")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("blood-rain system")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("more than 675 VFX shots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("CG cloudscape") && goal.includes("art-directable")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("helicopter-generated dust/debris")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("near-four-hour first cut")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("wind/scream textures")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("silence") && goal.includes("negative space")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("budget") && goal.includes("IR calibrations")));

  assert.ok(film.phases.find((phase) => phase.id === "format_split")?.player_task.includes("15-perf IMAX"));
  assert.ok(film.phases.find((phase) => phase.id === "dual_camera_rig")?.player_task.includes("Alexa 65 infrared"));
  assert.ok(film.phases.find((phase) => phase.id === "matched_optics")?.player_task.includes("Sphero"));
  assert.ok(film.phases.find((phase) => phase.id === "lab_scan")?.player_task.includes("8K scanning"));
  assert.ok(film.phases.find((phase) => phase.id === "jupiters_claim")?.player_task.includes("360-degree"));
  assert.ok(film.phases.find((phase) => phase.id === "blood_rain")?.player_task.includes("food-grade blood"));
  assert.ok(film.phases.find((phase) => phase.id === "cloud_system")?.player_task.includes("IMAX resolution"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_delivery")?.player_task.includes("Separate creature"));
  assert.ok(film.phases.find((phase) => phase.id === "assembly")?.player_task.includes("near-four-hour cut"));
  assert.ok(film.phases.find((phase) => phase.id === "silence_score")?.player_task.includes("negative space"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("IR calibration"));
  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 24);
});
