import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenRomaExpansionDefinitions } from "./chapterEighteenRomaExpansion.js";

test("Chapter 18 materializes Roma as a source-first memory, large-format digital, long-take, spatial-sound and circulation case", () => {
  assert.equal(chapterEighteenRomaExpansionDefinitions.length, 1);
  const film = chapterEighteenRomaExpansionDefinitions[0];
  assert.equal(film.id, "scenario_roma_2018");
  assert.equal(film.year, 2018);
  assert.equal(film.runtimeMins, 135);
  assert.deepEqual(film.directors, ["Alfonso Cuarón"]);

  assert.ok(film.scenarioType.includes("alexa65_6_5k") && film.scenarioType.includes("color_to_bw") && film.scenarioType.includes("atmos"));
  assert.ok(film.premise.includes("Esperanto Filmoj and Participant Media produced") && film.premise.includes("Netflix for distribution"));
  assert.ok(film.premise.includes("108-day schedule") && film.premise.includes("more than 110 days"));
  assert.ok(film.premise.includes("exclusively Mexican crew") && film.premise.includes("search involving thousands"));
  assert.ok(film.premise.includes("chronological photography") && film.premise.includes("complete screenplay"));
  assert.ok(film.premise.includes("6560-by-3100 Open Gate ARRIRAW") && film.premise.includes("2TB Codex SXR"));
  assert.ok(film.premise.includes("four percent extra image") && film.premise.includes("2.39:1"));
  assert.ok(film.premise.includes("six-block street set") && film.premise.includes("256-LED panels"));
  assert.ok(film.premise.includes("6.5K capture but a 4K finish") && film.premise.includes("MPC upgraded its pipeline"));
  assert.ok(film.premise.includes("Avid DNx 36") && film.premise.includes("translation markers"));
  assert.ok(film.premise.includes("Nearly 80 long takes") && film.premise.includes("invisibly combined"));
  assert.ok(film.premise.includes("specifically written and recorded background voices") && film.premise.includes("ten-week mix"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("autobiographical_memory_boundary"));
  assert.ok(film.requiredChoicesSeed.camera.includes("color_capture_monochrome_monitoring"));
  assert.ok(film.requiredChoicesSeed.editing.includes("long_take_accordion_rhythm"));
  assert.ok(film.requiredChoicesSeed.sound.includes("bespoke_background_dialogue"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("108-day") && goal.includes("110-day")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("digital ALEXA 65") && goal.includes("65mm film")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("apparently continuous shot") && goal.includes("performance splice")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Netflix") && goal.includes("distributor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Roma with Dunkirk")));

  assert.ok(film.phases.find((phase) => phase.id === "company_map")?.player_task.includes("Netflix as later distributor"));
  assert.ok(film.phases.find((phase) => phase.id === "color_monochrome_path")?.player_task.includes("color-channel"));
  assert.ok(film.phases.find((phase) => phase.id === "street_reconstruction")?.player_task.includes("six-block set"));
  assert.ok(film.phases.find((phase) => phase.id === "long_take_selection")?.player_task.includes("heads and tails"));
  assert.ok(film.phases.find((phase) => phase.id === "master_circulation")?.player_task.includes("Criterion edition"));

  assert.ok(film.learningGoals.length >= 35);
  assert.ok(film.phases.length >= 25);
});
