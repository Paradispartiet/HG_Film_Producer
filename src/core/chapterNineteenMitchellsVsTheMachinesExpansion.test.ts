import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenMitchellsVsTheMachinesExpansionDefinitions, mergeChapterNineteenMitchellsVsTheMachinesExpansion } from "./chapterNineteenMitchellsVsTheMachinesExpansion.js";

test("The Mitchells vs. the Machines source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenMitchellsVsTheMachinesExpansionDefinitions.length, 1);
  const film = chapterNineteenMitchellsVsTheMachinesExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_mitchells_vs_the_machines_2021");
  assert.equal(film.title, "The Mitchells vs. the Machines");
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Mike Rianda", "Jeff Rowe"]);
  assert.match(film.scenarioType, /watercolor_marker_linework/);
  assert.match(film.scenarioType, /katie_vision/);
  assert.match(film.scenarioType, /human_robot_contrast/);
  assert.ok(film.premise.includes("2022 Animated Feature nominee"));
  assert.ok(film.premise.includes("110-minute 2021 Netflix VOD/streaming version"));
  assert.ok(film.premise.includes("105-minute 2021 Sony home-entertainment version"));
  assert.ok(film.premise.includes("109-minute 2022 cinema version"));
  assert.ok(film.premise.includes("Lindsey Olivares"));
  assert.ok(film.premise.includes("Mike Lasker"));
  assert.ok(film.premise.includes("actual paint strokes"));
  assert.ok(film.premise.includes("Katie-Vision"));
  assert.ok(film.premise.includes("watercolor-marker linework"));
  assert.ok(film.premise.includes("Stealthbots"));
  assert.ok(film.premise.includes("Greg Levitan"));
  assert.ok(film.premise.includes("Mark Mothersbaugh"));
  assert.ok(film.premise.includes("Geoffrey G. Rubay"));
  assert.ok(film.premise.includes("Michael Semanick"));
  assert.ok(film.premise.includes("does not establish final audited budget"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("katie_vision_mixed_media"));
  assert.ok(film.requiredChoicesSeed.editing.includes("greg_levitan_editorial"));
  assert.ok(film.requiredChoicesSeed.sound.includes("mothersbaugh_character_palettes"));
});

test("The Mitchells vs. the Machines expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenMitchellsVsTheMachinesExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_mitchells_vs_the_machines_2021");
  const twice = mergeChapterNineteenMitchellsVsTheMachinesExpansion(once);
  assert.equal(twice.length, 1);
});
