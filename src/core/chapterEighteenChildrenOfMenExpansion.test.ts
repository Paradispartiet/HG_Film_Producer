import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenChildrenOfMenExpansionDefinitions } from "./chapterEighteenChildrenOfMenExpansion.js";

test("Chapter 18 materializes Children of Men as a source-first 35mm long-take and invisible-VFX case", () => {
  assert.equal(chapterEighteenChildrenOfMenExpansionDefinitions.length, 1);
  const film = chapterEighteenChildrenOfMenExpansionDefinitions[0];
  assert.equal(film.id, "scenario_children_of_men_2006");
  assert.equal(film.year, 2006);
  assert.equal(film.runtimeMins, 114);
  assert.deepEqual(film.directors, ["Alfonso Cuarón"]);
  assert.ok(film.scenarioType.includes("35mm") && film.scenarioType.includes("long_take") && film.scenarioType.includes("invisible_vfx"));
  assert.ok(film.premise.includes("Kodak Vision2 Expression 500T 5229"));
  assert.ok(film.premise.includes("30-percent Deluxe ACE") && film.premise.includes("EFilm"));
  assert.ok(film.premise.includes("Arricam Lite") && film.premise.includes("Arri 235"));
  assert.ok(film.premise.includes("Master Primes") && film.premise.includes("Ultra Prime"));
  assert.ok(film.premise.includes("Two-Axis Dolly") && film.premise.includes("Sparrow Head"));
  assert.ok(film.premise.includes("seamless cuts"));
  assert.ok(film.premise.includes("three-and-a-half-minute") && film.premise.includes("two invisibly joined sections"));
  assert.ok(film.premise.includes("32 shots") && film.premise.includes("20 featuring the baby"));
  assert.ok(film.requiredChoicesSeed.camera.includes("35mm_5229"));
  assert.ok(film.requiredChoicesSeed.camera.includes("two_axis_car_rig"));
  assert.ok(film.requiredChoicesSeed.editing.includes("seamless_cut_boundary"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("18mm") && goal.includes("exceptions")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("30-percent Deluxe ACE") && goal.includes("dailies")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("car sequence") && goal.includes("seamless cuts")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("32 delivered shots") && goal.includes("20 baby shots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Maya") && goal.includes("Shake")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("sound recorder") && goal.includes("microphones")));
  assert.ok(film.phases.find((phase) => phase.id === "car_rig_engineering")?.player_task.includes("Doggicam"));
  assert.ok(film.phases.find((phase) => phase.id === "birth_join")?.player_task.includes("two documented sections"));
  assert.ok(film.phases.find((phase) => phase.id === "digital_intermediate")?.player_task.includes("EFilm"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("non-Framestore VFX counts"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
