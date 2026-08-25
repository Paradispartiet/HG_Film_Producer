import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenParasiteExpansionDefinitions } from "./chapterEighteenParasiteExpansion.js";

test("Chapter 18 materializes Parasite as a source-first constructed-space, large-format, storyboard-led editorial and Atmos case", () => {
  assert.equal(chapterEighteenParasiteExpansionDefinitions.length, 1);
  const film = chapterEighteenParasiteExpansionDefinitions[0];
  assert.equal(film.id, "scenario_parasite_2019");
  assert.equal(film.year, 2019);
  assert.equal(film.runtimeMins, 132);
  assert.deepEqual(film.directors, ["Bong Joon-ho"]);

  assert.ok(film.scenarioType.includes("alexa65") && film.scenarioType.includes("vertical_production_design") && film.scenarioType.includes("atmos"));
  assert.ok(film.premise.includes("Bong Joon-ho") && film.premise.includes("Han Jin-won"));
  assert.ok(film.premise.includes("ALEXA 65") && film.premise.includes("Prime DNA"));
  assert.ok(film.premise.includes("97 percent") && film.premise.includes("SkyPanels"));
  assert.ok(film.premise.includes("first floor and garden") && film.premise.includes("Jeonju"));
  assert.ok(film.premise.includes("semi-basement") && film.premise.includes("inundated, drained, cleaned and redressed"));
  assert.ok(film.premise.includes("avoided conventional coverage and even master shots"));
  assert.ok(film.premise.includes("stitched different takes") && film.premise.includes("cross-cutting"));
  assert.ok(film.premise.includes("Live Tone Studios") && film.premise.includes("Dolby Atmos"));
  assert.ok(film.premise.includes("132-minute") && film.premise.includes("131 minutes") && film.premise.includes("metadata discrepancy"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("class_space_causality"));
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa65_prime_dna_package"));
  assert.ok(film.requiredChoicesSeed.editing.includes("no_coverage_contingency"));
  assert.ok(film.requiredChoicesSeed.sound.includes("dolby_atmos_final_mix"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("132-minute Cannes") && goal.includes("131-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ALEXA 65") && goal.includes("Prime DNA")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("flood") && goal.includes("drained")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("absence of conventional coverage")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Live Tone Studios")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("final mix") && goal.includes("Dolby Atmos")));

  assert.ok(film.phases.find((phase) => phase.id === "runtime_provenance")?.player_task.includes("132-minute"));
  assert.ok(film.phases.find((phase) => phase.id === "flood_engineering")?.player_task.includes("drainage"));
  assert.ok(film.phases.find((phase) => phase.id === "no_coverage_risk")?.player_task.includes("no master"));
  assert.ok(film.phases.find((phase) => phase.id === "stitched_take_repair")?.player_task.includes("concealed stitch"));
  assert.ok(film.phases.find((phase) => phase.id === "atmos_mix")?.player_task.includes("Dolby Atmos"));
  assert.ok(film.phases.find((phase) => phase.id === "method_audit")?.player_task.includes("technical and symbolic claim"));

  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 28);
});
