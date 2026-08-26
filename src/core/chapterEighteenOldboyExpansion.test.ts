import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenOldboyExpansionDefinitions } from "./chapterEighteenOldboyExpansion.js";

test("Chapter 18 materializes Oldboy as a source-first photochemical, long-take, design and sound-post case", () => {
  assert.equal(chapterEighteenOldboyExpansionDefinitions.length, 1);
  const film = chapterEighteenOldboyExpansionDefinitions[0];
  assert.equal(film.id, "scenario_oldboy_2003");
  assert.equal(film.year, 2003);
  assert.equal(film.runtimeMins, 119);
  assert.deepEqual(film.directors, ["Park Chan-wook"]);

  assert.ok(film.scenarioType.includes("photochemical_negative") && film.scenarioType.includes("bleach_bypass") && film.scenarioType.includes("corridor_long_take"));
  assert.ok(film.premise.includes("119 minutes") && film.premise.includes("120-minute") && film.premise.includes("121 minutes"));
  assert.ok(film.premise.includes("Eggfilm") && film.premise.includes("ShowEast") && film.premise.includes("Cineclick Asia"));
  assert.ok(film.premise.includes("almost one hundred shots") && film.premise.includes("seventeen times over three days"));
  assert.ok(film.premise.includes("physical bleach bypass") && film.premise.includes("film negatives"));
  assert.ok(film.premise.includes("production sound mixer") && film.premise.includes("ADR") && film.premise.includes("Foley"));
  assert.ok(film.premise.includes("New Zealand") && film.premise.includes("additional unit"));

  assert.ok(film.requiredChoicesSeed.camera.includes("bleach_bypass_tests"));
  assert.ok(film.requiredChoicesSeed.editing.includes("single_take_exception"));
  assert.ok(film.requiredChoicesSeed.sound.includes("foley_pipeline"));
  assert.ok(film.requiredChoicesSeed.themes.includes("seventeen_takes"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Cannes 119 minutes") && goal.includes("KOFIC 120 minutes") && goal.includes("BFI remastered 121 minutes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("almost one hundred shots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("seventeen times over three days")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("physical bleach bypass") && goal.includes("film negatives")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("production sound, ADR, Foley") && goal.includes("separate handoffs")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("exact camera body") && goal.includes("stock number") && goal.includes("laboratory")));

  assert.ok(film.phases.find((phase) => phase.id === "corridor_storyboard")?.player_task.includes("almost-one-hundred-shot"));
  assert.ok(film.phases.find((phase) => phase.id === "corridor_endurance")?.player_task.includes("seventeen takes over three days"));
  assert.ok(film.phases.find((phase) => phase.id === "bleach_bypass_tests")?.player_task.includes("bold primaries"));
  assert.ok(film.phases.find((phase) => phase.id === "new_zealand_unit")?.player_task.includes("without assigning unsourced scenes"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("sound equipment"));

  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
