import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenUnknownPleasuresExpansionDefinitions } from "./chapterEighteenUnknownPleasuresExpansion.js";

test("Chapter 18 materializes Unknown Pleasures as a source-first DV, public-space and digital-to-celluloid case", () => {
  assert.equal(chapterEighteenUnknownPleasuresExpansionDefinitions.length, 1);
  const film = chapterEighteenUnknownPleasuresExpansionDefinitions[0];
  assert.equal(film.id, "scenario_unknown_pleasures_2002");
  assert.equal(film.year, 2002);
  assert.equal(film.runtimeMins, 113);
  assert.deepEqual(film.directors, ["Jia Zhangke"]);

  assert.ok(film.scenarioType.includes("dv") && film.scenarioType.includes("public_space") && film.scenarioType.includes("celluloid_transfer"));
  assert.ok(film.premise.includes("Lik Wai Yu") && film.premise.includes("Keung Chow") && film.premise.includes("Jiang Dong Liang"));
  assert.ok(film.premise.includes("nineteen days"));
  assert.ok(film.premise.includes("digital texture") && film.premise.includes("bright exteriors"));
  assert.ok(film.premise.includes("digital color adjustment") && film.premise.includes("transferred to celluloid"));
  assert.ok(film.premise.includes("photochemical adjustment"));
  assert.ok(film.premise.includes("microphones, recorders, ADR, Foley or final-mix procedures"));

  assert.ok(film.requiredChoicesSeed.camera.includes("digital_video_origin"));
  assert.ok(film.requiredChoicesSeed.editing.includes("digital_color_handoff"));
  assert.ok(film.requiredChoicesSeed.sound.includes("unknown_microphone_boundary"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("nineteen-day shoot")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("bright exterior") && goal.includes("limitations")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("digital color-adjustment") && goal.includes("digital-origin")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("transfer to celluloid") && goal.includes("principal photography")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("microphones") && goal.includes("final-mix")));

  assert.ok(film.phases.find((phase) => phase.id === "public_space_access")?.player_task.includes("Datong"));
  assert.ok(film.phases.find((phase) => phase.id === "bright_exterior_limit")?.player_task.includes("unlimited latitude"));
  assert.ok(film.phases.find((phase) => phase.id === "celluloid_transfer")?.player_task.includes("principal photography"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("film-out hardware"));

  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 30);
});
