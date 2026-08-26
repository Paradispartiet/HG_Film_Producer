import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenThereWillBeBloodExpansionDefinitions } from "./chapterEighteenThereWillBeBloodExpansion.js";

test("Chapter 18 materializes There Will Be Blood as a source-first anamorphic photochemical Marfa and practical-fire case", () => {
  assert.equal(chapterEighteenThereWillBeBloodExpansionDefinitions.length, 1);
  const film = chapterEighteenThereWillBeBloodExpansionDefinitions[0];
  assert.equal(film.id, "scenario_there_will_be_blood_2007");
  assert.equal(film.year, 2007);
  assert.equal(film.runtimeMins, 158);
  assert.deepEqual(film.directors, ["Paul Thomas Anderson"]);
  assert.ok(film.scenarioType.includes("anamorphic_35mm") && film.scenarioType.includes("photochemical") && film.scenarioType.includes("oil_derrick"));
  assert.ok(film.premise.includes("Panaflex Platinum") && film.premise.includes("Millennium XL"));
  assert.ok(film.premise.includes("Vision2 50D 5201") && film.premise.includes("Vision2 200T 5217"));
  assert.ok(film.premise.includes("no digital intermediate") && film.premise.includes("Marfa, Texas"));
  assert.ok(film.premise.includes("80-foot pine derrick") && film.premise.includes("environmental soil testing"));
  assert.ok(film.requiredChoicesSeed.camera.includes("photochemical_no_di"));
  assert.ok(film.requiredChoicesSeed.camera.includes("derrick_multi_camera_fire"));
  assert.ok(film.requiredChoicesSeed.sound.includes("greenwood_score_boundary"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("slow stock") && goal.includes("sun position")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("no digital intermediate")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ILM-assisted initial explosion") && goal.includes("real fire")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("soil testing") && goal.includes("environmental accountability")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("per-shot focal lengths") && goal.includes("T-stops")));
  assert.ok(film.phases.find((phase) => phase.id === "anamorphic_tests")?.player_task.includes("flare"));
  assert.ok(film.phases.find((phase) => phase.id === "fire_environment")?.player_task.includes("contamination"));
  assert.ok(film.phases.find((phase) => phase.id === "one_time_event")?.player_task.includes("irreplaceable coverage"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("exact VFX totals"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
