import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenF1ExpansionDefinitions, mergeChapterNineteenF1Expansion } from "./chapterNineteenF1Expansion.js";

test("F1 source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenF1ExpansionDefinitions.length, 1);
  const film = chapterNineteenF1ExpansionDefinitions[0];
  assert.equal(film.id, "scenario_f1_2025");
  assert.equal(film.title, "F1");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 155);
  assert.deepEqual(film.directors, ["Joseph Kosinski"]);
  assert.equal(film.sourceId, "asc_f1_the_movie_2025");
  assert.match(film.scenarioType, /oscar_sound_bafta_sound/);
  assert.match(film.scenarioType, /modified_f2_dallara_apxgp/);
  assert.match(film.scenarioType, /sony_venice_2_fx6_carmen_prototype/);
  assert.match(film.scenarioType, /5000_hours_race_footage/);
  assert.match(film.scenarioType, /2500_vfx_shots/);
  assert.ok(film.premise.includes("155 minutes 5 seconds"));
  assert.ok(film.premise.includes("six Dallara Formula 2 chassis"));
  assert.ok(film.premise.includes("extended the wheelbase by 400 millimetres"));
  assert.ok(film.premise.includes("sensor on a stick"));
  assert.ok(film.premise.includes("Voigtländer Hyper Wide Heliar 10/12/15mm"));
  assert.ok(film.premise.includes("no more than four cameras"));
  assert.ok(film.premise.includes("estimated 5,000 hours of racing footage"));
  assert.ok(film.premise.includes("does not claim a 1.43:1 IMAX film workflow"));
  assert.ok(film.premise.includes("more than 2,500 VFX shots"));
  assert.ok(film.premise.includes("Media Composer"));
  assert.ok(film.premise.includes("ScriptSync"));
  assert.ok(film.premise.includes("Dolby Atmos"));
  assert.ok(film.premise.includes("does not establish a complete production budget"));
  assert.ok(film.learningGoals.length >= 70);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("fx6_derived_carmen_sensor_on_a_stick"));
  assert.ok(film.requiredChoicesSeed.camera.includes("multi_source_broadcast_iphone_cinema_capture"));
  assert.ok(film.requiredChoicesSeed.editing.includes("estimated_5000_hours_race_footage"));
  assert.ok(film.requiredChoicesSeed.sound.includes("f1_engine_reconstruction"));
});

test("F1 expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenF1Expansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_f1_2025");
  const twice = mergeChapterNineteenF1Expansion(once);
  assert.equal(twice.length, 1);
});
