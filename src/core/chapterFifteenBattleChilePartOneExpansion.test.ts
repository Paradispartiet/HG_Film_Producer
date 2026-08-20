import assert from "node:assert/strict";
import test from "node:test";

import { chapterFifteenBattleChilePartOneExpansionDefinitions } from "./chapterFifteenBattleChilePartOneExpansion.js";

test("Chapter 15 materializes The Battle of Chile: Part I as a coup-era collective documentary Production Case", () => {
  assert.equal(chapterFifteenBattleChilePartOneExpansionDefinitions.length, 1);
  const film = chapterFifteenBattleChilePartOneExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_battle_of_chile_part_i_1975");
  assert.equal(film.year, 1975);
  assert.equal(film.runtimeMins, 96);
  assert.deepEqual(film.directors, ["Patricio Guzmán"]);
  assert.equal(film.sourceId, "patricio_guzman_battle_chile_part_i_1975");
  assert.ok(film.scenarioType.includes("chilean_coup_era_collective_16mm"));
  assert.ok(film.premise.includes("Éclair 16 mm"));
  assert.ok(film.premise.includes("Nagra-4"));
  assert.ok(film.premise.includes("44,000 feet"));
  assert.ok(film.premise.includes("ICAIC"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("1973") && goal.includes("1975")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Jorge Müller") && goal.includes("Pedro Chaskel")));
  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_lens_stock_emulsion_or_lighting_package"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_sennheiser_model_or_signal_chain"));
  assert.ok(film.learningGoals.length >= 12);
  assert.ok(film.phases.length >= 9);
});
