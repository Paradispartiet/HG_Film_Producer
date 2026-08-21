import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenABetterTomorrowExpansionDefinitions } from "./chapterSixteenABetterTomorrowExpansion.js";

test("Chapter 16 materializes A Better Tomorrow as a source-first Cinema City / Film Workshop action-melodrama production", () => {
  assert.equal(chapterSixteenABetterTomorrowExpansionDefinitions.length, 1);
  const film = chapterSixteenABetterTomorrowExpansionDefinitions[0];
  assert.equal(film.id, "scenario_a_better_tomorrow_1986");
  assert.equal(film.year, 1986);
  assert.equal(film.runtimeMins, 96);
  assert.deepEqual(film.directors, ["John Woo"]);
  assert.equal(film.sourceId, "hkfa_a_better_tomorrow_1986");
  assert.ok(film.scenarioType.includes("cinema_city_film_workshop") && film.scenarioType.includes("performance_led") && film.scenarioType.includes("action_melodrama"));
  assert.ok(film.premise.includes("Tsui Hark") && film.premise.includes("Cinema City") && film.premise.includes("Film Workshop"));
  assert.ok(film.premise.includes("The Story of a Discharged Prisoner") && film.premise.includes("1967"));
  assert.ok(film.premise.includes("three-women concept") && film.premise.includes("three men") && film.premise.includes("projected his own feelings"));
  assert.ok(film.premise.includes("Ti Lung") && film.premise.includes("Chow Yun-fat") && film.premise.includes("Leslie Cheung"));
  assert.ok(film.premise.includes("Wong Wing-hang") && film.premise.includes("Kam Ma") && film.premise.includes("Joseph Koo"));
  assert.ok(film.premise.includes("95 minutes") && film.premise.includes("96-minute") && film.premise.includes("edition/runtime variance"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("95/96-minute") && goal.includes("edition/restoration")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("heroic bloodshed") && goal.includes("retrospective")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("camera bodies") && goal.includes("stunt rigs") && goal.includes("pyrotechnic specifications")));
  const development = film.phases.find((phase) => phase.id === "development");
  assert.ok(development?.player_task.includes("Lung Kong") && development.player_task.includes("conflicting recollections"));
  const camera = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(camera?.player_task.includes("Wong Wing-hang") && camera.player_task.includes("leaving unsupported body, lens, stock, frame-rate and exposure specifics unset"));
  const action = film.phases.find((phase) => phase.id === "action_staging");
  assert.ok(action?.player_task.includes("music") && action.player_task.includes("do not assign undocumented focal lengths") && action.player_task.includes("pyro methods"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_body_lens_stock_focal_map_frame_rate_or_exposure_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_console_weapon_sound_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 15);
  assert.ok(film.phases.length >= 10);
});
