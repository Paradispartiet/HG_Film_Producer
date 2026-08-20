import assert from "node:assert/strict";
import test from "node:test";

import { chapterSixteenMissingExpansionDefinitions } from "./chapterSixteenMissingExpansion.js";

test("Chapter 16 materializes Missing as a source-first transnational political-studio Production Case", () => {
  assert.equal(chapterSixteenMissingExpansionDefinitions.length, 1);
  const film = chapterSixteenMissingExpansionDefinitions[0];
  assert.equal(film.id, "scenario_missing_1982");
  assert.equal(film.year, 1982);
  assert.equal(film.runtimeMins, 122);
  assert.deepEqual(film.directors, ["Costa-Gavras"]);
  assert.equal(film.sourceId, "afi_missing_1982");
  assert.ok(film.scenarioType.includes("universal_polygram"));
  assert.ok(film.premise.includes("Warner Bros.") && film.premise.includes("Universal Pictures") && film.premise.includes("PolyGram Pictures"));
  assert.ok(film.premise.includes("13 April 1981") && film.premise.includes("week of 8 June"));
  assert.ok(film.premise.includes("Mexico City") && film.premise.includes("Acapulco") && film.premise.includes("Churubusco Studio"));
  assert.ok(film.premise.includes("Plaza de Toros") && film.premise.includes("National Stadium"));
  assert.ok(film.premise.includes("Panaflex") && film.premise.includes("Panavision") && film.premise.includes("Technicolor"));
  assert.ok(film.premise.includes("Françoise Bonnot") && film.premise.includes("Vangelis"));
  assert.ok(film.premise.includes("Albert Whitlock") && film.premise.includes("Euro-Titres"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Ivan Moffat") && goal.includes("John Nichols") && goal.includes("final credited")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Mexico City") && goal.includes("Acapulco") && goal.includes("Churubusco")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("PG-rating appeal") && goal.includes("Cannes") && goal.includes("Academy") && goal.includes("downstream")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("dramatized argument") && goal.includes("production facts")));
  const locationsPhase = film.phases.find((phase) => phase.id === "locations");
  assert.ok(locationsPhase?.player_task.includes("Mexico City") && locationsPhase.player_task.includes("Churubusco") && locationsPhase.player_task.includes("substitution"));
  const cinematographyPhase = film.phases.find((phase) => phase.id === "cinematography");
  assert.ok(cinematographyPhase?.player_task.includes("Panaflex/Panavision") && cinematographyPhase.player_task.includes("stock") && cinematographyPhase.player_task.includes("focal lengths"));
  const releasePhase = film.phases.find((phase) => phase.id === "release");
  assert.ok(releasePhase?.player_task.includes("PG appeal") && releasePhase.player_task.includes("Cannes") && releasePhase.player_task.includes("litigation"));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_stock_lens_focal_length_exposure_or_lighting_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_adr_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 14);
  assert.ok(film.phases.length >= 10);
});
