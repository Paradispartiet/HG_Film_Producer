import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenAvatarExpansionDefinitions } from "./chapterEighteenAvatarExpansion.js";

test("Chapter 18 materializes Avatar as a source-first virtual-production and stereoscopic production case", () => {
  assert.equal(chapterEighteenAvatarExpansionDefinitions.length, 1);
  const film = chapterEighteenAvatarExpansionDefinitions[0];
  assert.equal(film.id, "scenario_avatar_2009");
  assert.equal(film.year, 2009);
  assert.equal(film.runtimeMins, 161);
  assert.deepEqual(film.directors, ["James Cameron"]);
  assert.ok(film.scenarioType.includes("performance_capture") && film.scenarioType.includes("simulcam") && film.scenarioType.includes("fusion_3d"));
  assert.ok(film.premise.includes("virtual camera") && film.premise.includes("SimulCam"));
  assert.ok(film.premise.includes("MotionBuilder") && film.premise.includes("virtual tech scouts"));
  assert.ok(film.premise.includes("Fusion 3-D Camera System") && film.premise.includes("interocular") && film.premise.includes("convergence"));
  assert.ok(film.premise.includes("70 percent") && film.premise.includes("18 months"));
  assert.ok(film.premise.includes("Weta Digital") && film.premise.includes("not direct photographic recordings"));
  assert.ok(film.premise.includes("Chris Boyes") && film.premise.includes("Gary Summers") && film.premise.includes("Andy Nelson"));
  assert.ok(film.premise.includes("161-minute") && film.premise.includes("160 or 162"));
  assert.ok(film.premise.includes("Do not claim Avatar invented"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("virtual camera") && goal.includes("optical")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("SimulCam") && goal.includes("live-action camera")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("performance capture") && goal.includes("final character animation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Fusion 3-D") && goal.includes("interocular") && goal.includes("convergence")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("161 minutes") && goal.includes("160/162")));

  const virtual = film.phases.find((phase) => phase.id === "virtual_camera");
  assert.ok(virtual?.player_task.includes("tracked virtual camera") && virtual.player_task.includes("optical"));
  const simulcam = film.phases.find((phase) => phase.id === "simulcam");
  assert.ok(simulcam?.player_task.includes("SimulCam") && simulcam.player_task.includes("viewfinder"));
  const stereo = film.phases.find((phase) => phase.id === "fusion_3d");
  assert.ok(stereo?.player_task.includes("interocular") && stereo.player_task.includes("convergence"));
  const boundary = film.phases.find((phase) => phase.id === "innovation_boundary");
  assert.ok(boundary?.player_task.includes("integration") && boundary.player_task.includes("invented"));

  assert.ok(film.requiredChoicesSeed.camera.includes("tracked_virtual_camera"));
  assert.ok(film.requiredChoicesSeed.camera.includes("fusion_3d_stereo_rig"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 18);
});
