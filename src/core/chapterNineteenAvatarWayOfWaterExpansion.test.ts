import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenAvatarWayOfWaterExpansionDefinitions } from "./chapterNineteenAvatarWayOfWaterExpansion.js";

test("Chapter 19 materializes Avatar: The Way of Water as an integrated virtual-production case", () => {
  assert.equal(chapterNineteenAvatarWayOfWaterExpansionDefinitions.length, 1);
  const film = chapterNineteenAvatarWayOfWaterExpansionDefinitions[0];
  assert.equal(film.id, "scenario_avatar_the_way_of_water_2022");
  assert.equal(film.title, "Avatar: The Way of Water");
  assert.equal(film.originalTitle, "Avatar: The Way of Water");
  assert.deepEqual(film.aliases, []);
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 192);
  assert.deepEqual(film.directors, ["James Cameron"]);

  assert.ok(film.scenarioType.includes("performance_capture") && film.scenarioType.includes("underwater_volume"));
  assert.ok(film.scenarioType.includes("virtual_camera") && film.scenarioType.includes("simulcam"));
  assert.ok(film.scenarioType.includes("sony_venice") && film.scenarioType.includes("fusion_3d"));
  assert.ok(film.scenarioType.includes("water_simulation") && film.scenarioType.includes("facial_performance"));

  assert.ok(film.premise.includes("sixth source-first Chapter 19 Production Case"));
  assert.ok(film.premise.includes("192-minute") && film.premise.includes("Russell Carpenter ASC"));
  assert.ok(film.premise.includes("near-ultraviolet") && film.premise.includes("floating beads"));
  assert.ok(film.premise.includes("12-to-16-camera video-reference array"));
  assert.ok(film.premise.includes("uncoupled") && film.premise.includes("virtual-camera process"));
  assert.ok(film.premise.includes("3,240 VFX shots") && film.premise.includes("2,225 water shots"));
  assert.ok(film.premise.includes("strain-based facial-performance system") && film.premise.includes("cable-cam eyeline system"));
  assert.ok(film.premise.includes("machine-learning-assisted depth compositing"));
  assert.ok(film.premise.includes("Weta FX's Gazebo engine") && film.premise.includes("scans of physical sets"));
  assert.ok(film.premise.includes("performance-capture dailies") && film.premise.includes("live-action templates"));
  assert.ok(film.premise.includes("clarity-driven mix strategy"));
  assert.ok(film.premise.includes("exact color-management transforms") && film.premise.includes("sound plug-in chains"));

  assert.ok(film.requiredChoicesSeed.camera.includes("sony_venice") && film.requiredChoicesSeed.camera.includes("fusion_3d"));
  assert.ok(film.requiredChoicesSeed.camera.includes("hfr_48fps") && film.requiredChoicesSeed.camera.includes("simulcam"));
  assert.ok(film.requiredChoicesSeed.editing.includes("performance_select_first") && film.requiredChoicesSeed.editing.includes("virtual_camera_second_pass"));
  assert.ok(film.requiredChoicesSeed.editing.includes("live_action_template") && film.requiredChoicesSeed.editing.includes("vfx_turnover"));
  assert.ok(film.requiredChoicesSeed.sound.includes("clarity_is_king") && film.requiredChoicesSeed.sound.includes("aquatic_world_sound"));
  assert.ok(film.requiredChoicesSeed.themes.includes("underwater_capture") && film.requiredChoicesSeed.themes.includes("depth_compositing"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("sixth source-first Chapter 19 Production Case") && goal.includes("stereoscopic exhibition")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("192-minute") && goal.includes("runtime anchor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncoupled the virtual-camera process") && goal.includes("actor performance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("12-to-16-camera") && goal.includes("session-level evidence")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("near-ultraviolet") && goal.includes("infrared")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("floating beads") && goal.includes("false capture data")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Simulcam") && goal.includes("shared 3D space")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("depth-compositing") && goal.includes("occlusion")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Gazebo engine") && goal.includes("complete software stack")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Sony VENICE") && goal.includes("live-action camera platform")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Fusion 3D rig") && goal.includes("stereoscopic live-action system")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("48fps") && goal.includes("selected material")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("3,240 VFX-shot") && goal.includes("vendor-published scope evidence")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("strain-based facial-performance system") && goal.includes("surface skin response")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("cable-cam eyeline system") && goal.includes("correct spatial position")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("select performance-capture takes") && goal.includes("virtual-camera shots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("clarity is king") && goal.includes("visual density")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("proprietary marker specs")));

  assert.ok(film.phases.find((phase) => phase.id === "marker_visibility")?.player_task.includes("near-ultraviolet"));
  assert.ok(film.phases.find((phase) => phase.id === "reflection_control")?.player_task.includes("floating-bead"));
  assert.ok(film.phases.find((phase) => phase.id === "uncouple_vcam")?.player_task.includes("performance"));
  assert.ok(film.phases.find((phase) => phase.id === "simulcam_registration")?.player_task.includes("correct scale"));
  assert.ok(film.phases.find((phase) => phase.id === "venice_fusion")?.player_task.includes("VENICE/Rialto"));
  assert.ok(film.phases.find((phase) => phase.id === "hfr_strategy")?.player_task.includes("48fps"));
  assert.ok(film.phases.find((phase) => phase.id === "vendor_scope")?.player_task.includes("shot/water counts"));
  assert.ok(film.phases.find((phase) => phase.id === "sound_clarity")?.player_task.includes("story-relevant"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("proprietary marker specs"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});