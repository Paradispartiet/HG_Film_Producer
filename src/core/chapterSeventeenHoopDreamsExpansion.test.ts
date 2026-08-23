import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenHoopDreamsExpansionDefinitions } from "./chapterSeventeenHoopDreamsExpansion.js";

test("Chapter 17 materializes Hoop Dreams as a source-first longitudinal documentary production", () => {
  assert.equal(chapterSeventeenHoopDreamsExpansionDefinitions.length, 1);
  const film = chapterSeventeenHoopDreamsExpansionDefinitions[0];
  assert.equal(film.id, "scenario_hoop_dreams_1994");
  assert.equal(film.year, 1994);
  assert.equal(film.runtimeMins, 171);
  assert.deepEqual(film.directors, ["Steve James"]);
  assert.equal(film.sourceId, "afi_hoop_dreams_1994");
  assert.ok(film.scenarioType.includes("longitudinal_documentary") && film.scenarioType.includes("kartemquin") && film.scenarioType.includes("editing"));

  assert.ok(film.premise.includes("Kartemquin Films") && film.premise.includes("Fine Line Features"));
  assert.ok(film.premise.includes("Frederick Marx") && film.premise.includes("Peter Gilbert") && film.premise.includes("William Haugse"));
  assert.ok(film.premise.includes("170/171/174/176") && film.premise.includes("171 minutes as canonical"));
  assert.ok(film.premise.includes("about five years") && film.premise.includes("six years") && film.premise.includes("seven or eight years"));
  assert.ok(film.premise.includes("250 hours") || film.premise.includes("250-plus"));
  assert.ok(film.premise.includes("Illinois Arts Council") && film.premise.includes("broadcast-quality video"));
  assert.ok(film.premise.includes("VHS offline linear-editing") && film.premise.includes("not frame accurate"));
  assert.ok(film.premise.includes("consent/assent") && film.premise.includes("privacy") && film.premise.includes("safeguarding"));
  assert.ok(film.premise.includes("restoration") && film.premise.includes("separate from original video acquisition"));
  assert.ok(film.premise.includes("Do not invent camera model") && film.premise.includes("participant compensation"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("five-year") && goal.includes("six-year") && goal.includes("seven/eight-year")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("170/171/174/176") && goal.includes("171 minutes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("broadcast-quality video") && goal.includes("economic/technical")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("250 hours") || goal.includes("250-plus")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("VHS offline") && goal.includes("historical offline system")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("consent/assent") && goal.includes("safeguarding")));

  const support = film.phases.find((phase) => phase.id === "proposal_and_support");
  assert.ok(support?.player_task.includes("Kartemquin") && support.player_task.includes("grant"));
  const video = film.phases.find((phase) => phase.id === "video_constraint_and_camera_partner");
  assert.ok(video?.player_task.includes("Peter Gilbert") && video.player_task.includes("camera model") && video.player_task.includes("codec"));
  const access = film.phases.find((phase) => phase.id === "access_and_relationships");
  assert.ok(access?.player_task.includes("consent/assent") && access.player_task.includes("privacy"));
  const offline = film.phases.find((phase) => phase.id === "offline_editing");
  assert.ok(offline?.player_task.includes("VHS") && offline.player_task.includes("non-frame-accurate"));
  const versions = film.phases.find((phase) => phase.id === "versions_and_restoration");
  assert.ok(versions?.player_task.includes("171 minutes") && versions.player_task.includes("170/174/176") && versions.player_task.includes("preservation"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_model_lens_tape_codec_or_frame_rate"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_or_mix_recipe"));
  assert.equal(film.learningGoals.length, 17);
  assert.equal(film.phases.length, 10);
});
