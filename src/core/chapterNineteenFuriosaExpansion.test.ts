import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenFuriosaExpansionDefinitions, mergeChapterNineteenFuriosaExpansion } from "./chapterNineteenFuriosaExpansion.js";

test("Furiosa source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenFuriosaExpansionDefinitions.length, 1);
  const film = chapterNineteenFuriosaExpansionDefinitions[0];
  assert.equal(film.id, "scenario_furiosa_a_mad_max_saga_2024");
  assert.equal(film.title, "Furiosa: A Mad Max Saga");
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 148);
  assert.deepEqual(film.directors, ["George Miller"]);
  assert.match(film.scenarioType, /practical_vehicles_stunts_physical_sets/);
  assert.match(film.scenarioType, /alexa65_red_arrays_unreal_previs/);
  assert.match(film.scenarioType, /digital_environments_cg_takeovers/);
  assert.ok(film.premise.includes("148m02s"));
  assert.ok(film.premise.includes("148m11s"));
  assert.ok(film.premise.includes("more than 850 local jobs"));
  assert.ok(film.premise.includes("A$350 million"));
  assert.ok(film.premise.includes("six 18K HMI PARs"));
  assert.ok(film.premise.includes("RED Control Pro"));
  assert.ok(film.premise.includes("more than 1,000 artists"));
  assert.ok(film.premise.includes("880 shots"));
  assert.ok(film.premise.includes("250-shot sequence"));
  assert.ok(film.premise.includes("78 separate days"));
  assert.ok(film.premise.includes("Eliot Knapman"));
  assert.ok(film.premise.includes("Tom Holkenborg"));
  assert.ok(film.premise.includes("eight-week final mix"));
  assert.ok(film.premise.includes("Jenny Beavan"));
  assert.ok(film.premise.includes("does not establish final audited budget/spend/jobs"));
  assert.ok(film.learningGoals.length >= 60);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa65_dna_custom_optics"));
  assert.ok(film.requiredChoicesSeed.editing.includes("on_set_first_assembly"));
  assert.ok(film.requiredChoicesSeed.sound.includes("eight_week_atmos_mix"));
});

test("Furiosa expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenFuriosaExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_furiosa_a_mad_max_saga_2024");
  const twice = mergeChapterNineteenFuriosaExpansion(once);
  assert.equal(twice.length, 1);
});
