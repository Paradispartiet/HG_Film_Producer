import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenTheLivingEndExpansionDefinitions } from "./chapterSeventeenTheLivingEndExpansion.js";

test("Chapter 17 materializes The Living End as a source-first New Queer Cinema microbudget production", () => {
  assert.equal(chapterSeventeenTheLivingEndExpansionDefinitions.length, 1);
  const film = chapterSeventeenTheLivingEndExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_living_end_1992");
  assert.equal(film.year, 1992);
  assert.equal(film.runtimeMins, 84);
  assert.deepEqual(film.directors, ["Gregg Araki"]);
  assert.equal(film.sourceId, "afi_the_living_end_1992");
  assert.ok(film.scenarioType.includes("new_queer_cinema") && film.scenarioType.includes("microbudget") && film.scenarioType.includes("16mm"));

  assert.ok(film.premise.includes("fall 1990") && film.premise.includes("January 1991") && film.premise.includes("sporadic weekends"));
  assert.ok(film.premise.includes("$23,000") && film.premise.includes("$20,000") && film.premise.includes("source-framed variance"));
  assert.ok(film.premise.includes("AFI grant") && film.premise.includes("16mm") && film.premise.includes("35mm"));
  assert.ok(film.premise.includes("screenwriter, cinematographer and editor") && film.premise.includes("Marcus Hu") && film.premise.includes("Jon Gerrans"));
  assert.ok(film.premise.includes("Christopher Münch") && film.premise.includes("George Lockwood") && film.premise.includes("Cole Coonce"));
  assert.ok(film.premise.includes("three or four months") && film.premise.includes("fifteen hours"));
  assert.ok(film.premise.includes("Jon Jost") && film.premise.includes("old film stock") && film.premise.includes("first color") && film.premise.includes("first sync-sound"));
  assert.ok(film.premise.includes("historical testimony, not present-day production advice"));
  assert.ok(film.premise.includes("permissions") && film.premise.includes("insurance") && film.premise.includes("working hours"));
  assert.ok(film.premise.includes("explicit performer consent") && film.premise.includes("intimacy/closed-set"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("New Queer Cinema") && goal.includes("one visual style")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("$20,000") && goal.includes("$23,000")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("16mm") && goal.includes("35mm")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Jon Jost") && goal.includes("camera") && goal.includes("stock")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("permit-light") && goal.includes("permissions")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("fifteen-hour") && goal.includes("turnaround")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("performer consent") && goal.includes("trauma-aware")));

  const schedule = film.phases.find((phase) => phase.id === "weekend_schedule");
  assert.ok(schedule?.player_task.includes("weekend") && schedule.player_task.includes("turnaround"));
  const camera = film.phases.find((phase) => phase.id === "camera_colour_sync_sound");
  assert.ok(camera?.player_task.includes("16mm") && camera.player_task.includes("camera model") && camera.player_task.includes("stock identity"));
  const locations = film.phases.find((phase) => phase.id === "los_angeles_locations");
  assert.ok(locations?.player_task.includes("permitless") && locations.player_task.includes("permissions") && locations.player_task.includes("insurance"));
  const editing = film.phases.find((phase) => phase.id === "editing_grant");
  assert.ok(editing?.player_task.includes("AFI editing grant") && editing.player_task.includes("principal-photography finance"));
  const blowup = film.phases.find((phase) => phase.id === "blowup_distribution");
  assert.ok(blowup?.player_task.includes("16mm-to-35mm") && blowup.player_task.includes("laboratory"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_exposure_or_lab"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_adr_foley_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 11);
});
