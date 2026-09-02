import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenTheBrutalistExpansionDefinitions, mergeChapterNineteenTheBrutalistExpansion } from "./chapterNineteenTheBrutalistExpansion.js";

test("The Brutalist source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenTheBrutalistExpansionDefinitions.length, 1);
  const film = chapterNineteenTheBrutalistExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_brutalist_2024");
  assert.equal(film.title, "The Brutalist");
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 215);
  assert.deepEqual(film.directors, ["Brady Corbet"]);
  assert.equal(film.sourceId, "kodak_the_brutalist_vistavision_2024");
  assert.match(film.scenarioType, /venice_silver_lion_best_director/);
  assert.match(film.scenarioType, /34_shoot_days/);
  assert.match(film.scenarioType, /vistavision_8_perf/);
  assert.match(film.scenarioType, /respeecher_hungarian_dialogue/);
  assert.ok(film.premise.includes("215 minutes"));
  assert.ok(film.premise.includes("USD 10 million"));
  assert.ok(film.premise.includes("34 shooting days"));
  assert.ok(film.premise.includes("8-perf horizontal 35mm VistaVision"));
  assert.ok(film.premise.includes("Leica-S lenses"));
  assert.ok(film.premise.includes("KODAK VISION3 250D 5207/7207 and 500T 5219/7219"));
  assert.ok(film.premise.includes("one to one-and-a-half stops"));
  assert.ok(film.premise.includes("4K/6K source-level pipeline difference"));
  assert.ok(film.premise.includes("more than 700 TB"));
  assert.ok(film.premise.includes("Van Buren Institute"));
  assert.ok(film.premise.includes("no English-language dialogue was changed"));
  assert.ok(film.premise.includes("did not use AI to create or render the buildings"));
  assert.ok(film.premise.includes("does not establish a complete financing/recoupment ledger"));
  assert.ok(film.learningGoals.length >= 60);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.screenplay.includes("34_day_kodak_schedule"));
  assert.ok(film.requiredChoicesSeed.camera.includes("8_perf_vistavision_35mm"));
  assert.ok(film.requiredChoicesSeed.editing.includes("4k_6k_scan_variance"));
  assert.ok(film.requiredChoicesSeed.sound.includes("construction_scale_perspective"));
});

test("The Brutalist expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenTheBrutalistExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_brutalist_2024");
  const twice = mergeChapterNineteenTheBrutalistExpansion(once);
  assert.equal(twice.length, 1);
});