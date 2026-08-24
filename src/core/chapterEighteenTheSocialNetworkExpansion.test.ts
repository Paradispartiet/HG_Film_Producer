import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenTheSocialNetworkExpansionDefinitions } from "./chapterEighteenTheSocialNetworkExpansion.js";

test("Chapter 18 materializes The Social Network as a source-first mature RED file-based production case", () => {
  assert.equal(chapterEighteenTheSocialNetworkExpansionDefinitions.length, 1);
  const film = chapterEighteenTheSocialNetworkExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_social_network_2010");
  assert.equal(film.year, 2010);
  assert.equal(film.runtimeMins, 120);
  assert.deepEqual(film.directors, ["David Fincher"]);
  assert.ok(film.scenarioType.includes("red_one_mysterium_x") && film.scenarioType.includes("lto4") && film.scenarioType.includes("invisible_vfx"));

  assert.ok(film.premise.includes("beta Mysterium-X") && film.premise.includes("4K 2:1 4096x2048 REDCODE 42"));
  assert.ok(film.premise.includes("duplicate LTO-4") && film.premise.includes("ProRes"));
  assert.ok(film.premise.includes("FileMaker Pro") && film.premise.includes("R3D") && film.premise.includes("DPX"));
  assert.ok(film.premise.includes("After Effects CS5") && film.premise.includes("Quantel Pablo") && film.premise.includes("2K DCP"));
  assert.ok(film.premise.includes("near one thousand") && film.premise.includes("roughly 1,200"));
  assert.ok(film.premise.includes("Armie Hammer") && film.premise.includes("Josh Pence") && film.premise.includes("Lola VFX"));
  assert.ok(film.premise.includes("85-day shoot") && film.premise.includes("324 hours") && film.premise.includes("281 hours"));
  assert.ok(film.premise.includes("Ren Klyce") && film.premise.includes("opening bar") && film.premise.includes("In the Hall of the Mountain King"));
  assert.ok(film.premise.includes("120 minutes"));
  assert.ok(film.premise.includes("Do not claim the film invented"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("R3D") && goal.includes("ProRes 422 LT") && goal.includes("DPX")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("LTO-4") && goal.includes("production-safety")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("After Effects") && goal.includes("Light Iron")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("near-1,000") && goal.includes("about 1,200")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Josh Pence") && goal.includes("physical")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("opening bar") && goal.includes("sound pressure")));

  const camera = film.phases.find((phase) => phase.id === "camera_package");
  assert.ok(camera?.player_task.includes("Mysterium-X") && camera.player_task.includes("REDCODE 42") && camera.player_task.includes("uncompressed"));
  const archive = film.phases.find((phase) => phase.id === "archive_lto");
  assert.ok(archive?.player_task.includes("duplicate LTO-4") && archive.player_task.includes("R3D"));
  const conform = film.phases.find((phase) => phase.id === "conform");
  assert.ok(conform?.player_task.includes("Final Cut") && conform.player_task.includes("Premiere") && conform.player_task.includes("After Effects"));
  const twins = film.phases.find((phase) => phase.id === "winklevoss");
  assert.ok(twins?.player_task.includes("Armie Hammer") && twins.player_task.includes("Josh Pence"));
  const evidence = film.phases.find((phase) => phase.id === "evidence_boundary");
  assert.ok(evidence?.player_task.includes("1,000") && evidence.player_task.includes("1,200") && evidence.player_task.includes("324-hour"));

  assert.ok(film.requiredChoicesSeed.editing.includes("camera_original_proxy_finish_boundary"));
  assert.ok(film.requiredChoicesSeed.sound.includes("bar_dialogue_masking"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 18);
});
