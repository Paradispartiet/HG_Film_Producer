import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenEoExpansionDefinitions, mergeChapterNineteenEoExpansion } from "./chapterNineteenEoExpansion.js";

test("EO source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenEoExpansionDefinitions.length, 1);
  const film = chapterNineteenEoExpansionDefinitions[0];
  assert.equal(film.id, "scenario_eo_2022");
  assert.equal(film.title, "EO");
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 88);
  assert.deepEqual(film.directors, ["Jerzy Skolimowski"]);
  assert.match(film.scenarioType, /cannes_jury_prize/);
  assert.match(film.scenarioType, /two_year_pandemic_interrupted/);
  assert.match(film.scenarioType, /six_donkeys/);
  assert.match(film.scenarioType, /master_plus_donkey_pov/);
  assert.ok(film.premise.includes("Cannes lists EO at 86 minutes"));
  assert.ok(film.premise.includes("approximately 88 minutes"));
  assert.ok(film.premise.includes("six Sardinian donkeys"));
  assert.ok(film.premise.includes("early 2020"));
  assert.ok(film.premise.includes("early March 2022"));
  assert.ok(film.premise.includes("objective master"));
  assert.ok(film.premise.includes("donkey's POV"));
  assert.ok(film.premise.includes("five different locations and two stages"));
  assert.ok(film.premise.includes("fence-jump"));
  assert.ok(film.premise.includes("inside the donkey's mind"));
  assert.ok(film.premise.includes("does not establish the complete final budget"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 28);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.screenplay.includes("cannes_uk_runtime_provenance"));
  assert.ok(film.requiredChoicesSeed.camera.includes("objective_master_plus_donkey_pov"));
  assert.ok(film.requiredChoicesSeed.editing.includes("safe_action_through_editing"));
  assert.ok(film.requiredChoicesSeed.sound.includes("score_as_inner_monologue"));
});

test("EO expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenEoExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_eo_2022");
  const twice = mergeChapterNineteenEoExpansion(once);
  assert.equal(twice.length, 1);
});
