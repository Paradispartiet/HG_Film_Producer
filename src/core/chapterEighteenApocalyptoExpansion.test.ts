import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenApocalyptoExpansionDefinitions } from "./chapterEighteenApocalyptoExpansion.js";

test("Chapter 18 materializes Apocalypto as a source-first Genesis jungle, practical-city, miniature and crowd-compositing case", () => {
  assert.equal(chapterEighteenApocalyptoExpansionDefinitions.length, 1);
  const film = chapterEighteenApocalyptoExpansionDefinitions[0];
  assert.equal(film.id, "scenario_apocalypto_2006");
  assert.equal(film.year, 2006);
  assert.equal(film.runtimeMins, 138);
  assert.deepEqual(film.directors, ["Mel Gibson"]);
  assert.ok(film.scenarioType.includes("panavision_genesis") && film.scenarioType.includes("miniature") && film.scenarioType.includes("crowd_replication"));
  assert.ok(film.premise.includes("Panavision Genesis") && film.premise.includes("three Genesis cameras"));
  assert.ok(film.premise.includes("50-minute HDCAM") && film.premise.includes("ColorStream"));
  assert.ok(film.premise.includes("60-by-80-foot city miniature") && film.premise.includes("650 extras"));
  assert.ok(film.premise.includes("historical consultant") && film.premise.includes("do not convert"));
  assert.ok(film.requiredChoicesSeed.camera.includes("panavision_genesis_primary"));
  assert.ok(film.requiredChoicesSeed.camera.includes("colorstream_monitoring"));
  assert.ok(film.requiredChoicesSeed.editing.includes("crowd_pass_composite_handoff"));
  assert.ok(film.requiredChoicesSeed.sound.includes("yucatec_dialogue_capture"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("first digitally shot feature nominated for an ASC Award")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("firelit night work") && goal.includes("every night scene")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("roughly 650-extra") && goal.includes("film's total")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("historical consultants") && goal.includes("historical accuracy")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("per-shot focal lengths") && goal.includes("sensor settings")));
  assert.ok(film.phases.find((phase) => phase.id === "runway_preparation")?.player_task.includes("safe repeatable running"));
  assert.ok(film.phases.find((phase) => phase.id === "waterfall_housing")?.player_task.includes("lens fogging"));
  assert.ok(film.phases.find((phase) => phase.id === "miniature_city")?.player_task.includes("camera data"));
  assert.ok(film.phases.find((phase) => phase.id === "roto_vs_greenscreen")?.player_task.includes("rotoscoping"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("total VFX count"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
