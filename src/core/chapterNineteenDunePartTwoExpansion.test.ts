import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenDunePartTwoExpansionDefinitions, mergeChapterNineteenDunePartTwoExpansion } from "./chapterNineteenDunePartTwoExpansion.js";

test("Dune: Part Two source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenDunePartTwoExpansionDefinitions.length, 1);
  const film = chapterNineteenDunePartTwoExpansionDefinitions[0];
  assert.equal(film.id, "scenario_dune_part_two_2024");
  assert.equal(film.title, "Dune: Part Two");
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 167);
  assert.deepEqual(film.directors, ["Denis Villeneuve"]);
  assert.equal(film.sourceId, "asc_dune_part_two_2025");
  assert.match(film.scenarioType, /oscar_sound_visual_effects/);
  assert.match(film.scenarioType, /alexa_65_alexa_lf_mini_lf/);
  assert.match(film.scenarioType, /infrared_87c_giedi_prime/);
  assert.match(film.scenarioType, /unreal_camera_planning/);
  assert.match(film.scenarioType, /35mm_film_out_scan_back/);
  assert.ok(film.premise.includes("166 minutes 45 seconds"));
  assert.ok(film.premise.includes("165 minutes 35 seconds"));
  assert.ok(film.premise.includes("three months of soft prep"));
  assert.ok(film.premise.includes("ALEXA 65"));
  assert.ok(film.premise.includes("IMAX 1.43:1"));
  assert.ok(film.premise.includes("87C filter"));
  assert.ok(film.premise.includes("does not prove that Unreal Engine was the final renderer"));
  assert.ok(film.premise.includes("film-out/scan-back"));
  assert.ok(film.premise.includes("15-perf 70mm"));
  assert.ok(film.premise.includes("physical section of worm on a gimbal"));
  assert.ok(film.premise.includes("roads and concrete plates"));
  assert.ok(film.premise.includes("microphones buried in sand"));
  assert.ok(film.premise.includes("does not establish a complete production budget"));
  assert.ok(film.learningGoals.length >= 70);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("infrared_87c_giedi_prime"));
  assert.ok(film.requiredChoicesSeed.camera.includes("digital_to_35mm_film_out_scan_back"));
  assert.ok(film.requiredChoicesSeed.editing.includes("joe_walker_ensemble_structure"));
  assert.ok(film.requiredChoicesSeed.sound.includes("richard_king_sand_field_recording"));
});

test("Dune: Part Two expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenDunePartTwoExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_dune_part_two_2024");
  const twice = mergeChapterNineteenDunePartTwoExpansion(once);
  assert.equal(twice.length, 1);
});
