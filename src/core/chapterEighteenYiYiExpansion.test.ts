import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenYiYiExpansionDefinitions } from "./chapterEighteenYiYiExpansion.js";

test("Chapter 18 materializes Yi Yi as a source-first 35mm architectural-framing, ensemble-duration and restoration-provenance case", () => {
  assert.equal(chapterEighteenYiYiExpansionDefinitions.length, 1);
  const film = chapterEighteenYiYiExpansionDefinitions[0];
  assert.equal(film.id, "scenario_yi_yi_2000");
  assert.equal(film.year, 2000);
  assert.equal(film.runtimeMins, 173);
  assert.deepEqual(film.directors, ["Edward Yang"]);

  assert.ok(film.scenarioType.includes("35mm") && film.scenarioType.includes("reflections") && film.scenarioType.includes("transnational_production"));
  assert.ok(film.premise.includes("Yang Wei-han") && film.premise.includes("Lee Lung-yue"));
  assert.ok(film.premise.includes("Chen Po-wen") && film.premise.includes("Tu Duu-chih"));
  assert.ok(film.premise.includes("Kaili Peng") && film.premise.includes("Wang Cheng-kai"));
  assert.ok(film.premise.includes("Japan/Taiwan") && film.premise.includes("35mm"));
  assert.ok(film.premise.includes("reflections, rear projection and superimposition"));
  assert.ok(film.premise.includes("original 35mm acetate negative") && film.premise.includes("Hi8 source"));
  assert.ok(film.premise.includes("not the exact on-set recording format"));
  assert.ok(film.premise.includes("must not be projected backward") && film.premise.includes("digital intermediate"));

  assert.ok(film.requiredChoicesSeed.camera.includes("reflection_visibility_control"));
  assert.ok(film.requiredChoicesSeed.editing.includes("limited_rescue_coverage"));
  assert.ok(film.requiredChoicesSeed.sound.includes("restoration_source_boundary"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm") && goal.includes("stock, lenses")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("reflection") && goal.includes("rear projection")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Hi8") && goal.includes("production sound")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("4K restoration") && goal.includes("digital intermediate")));

  assert.ok(film.phases.find((phase) => phase.id === "35mm_provenance")?.player_task.includes("stock, lens and lab details"));
  assert.ok(film.phases.find((phase) => phase.id === "reflection_test")?.player_task.includes("camera visibility"));
  assert.ok(film.phases.find((phase) => phase.id === "sound_credit_boundary")?.player_task.includes("microphone, recorder, ADR and Foley"));
  assert.ok(film.phases.find((phase) => phase.id === "restoration_sound_provenance")?.player_task.includes("Hi8"));
  assert.ok(film.phases.find((phase) => phase.id === "method_audit")?.player_task.includes("formal analysis"));

  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 28);
});
