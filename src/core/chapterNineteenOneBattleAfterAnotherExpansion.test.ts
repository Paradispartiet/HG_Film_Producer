import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenOneBattleAfterAnotherExpansionDefinitions, mergeChapterNineteenOneBattleAfterAnotherExpansion } from "./chapterNineteenOneBattleAfterAnotherExpansion.js";

test("One Battle After Another source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenOneBattleAfterAnotherExpansionDefinitions.length, 1);
  const film = chapterNineteenOneBattleAfterAnotherExpansionDefinitions[0];
  assert.equal(film.id, "scenario_one_battle_after_another_2025");
  assert.equal(film.title, "One Battle After Another");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 161);
  assert.deepEqual(film.directors, ["Paul Thomas Anderson"]);
  assert.equal(film.sourceId, "kodak_one_battle_after_another_2025");
  assert.match(film.scenarioType, /oscar_best_picture/);
  assert.match(film.scenarioType, /bafta_best_film/);
  assert.match(film.scenarioType, /8perf_35mm_horizontal_vistavision/);
  assert.match(film.scenarioType, /millennium_xl2/);
  assert.ok(film.premise.includes("2026 Academy Award for Best Picture"));
  assert.ok(film.premise.includes("2026 BAFTA for Best Film"));
  assert.ok(film.premise.includes("8-perf 35mm VistaVision"));
  assert.ok(film.premise.includes("KODAK VISION3 500T 5219"));
  assert.ok(film.premise.includes("250D 5207"));
  assert.ok(film.premise.includes("200T 5213"));
  assert.ok(film.premise.includes("Beaumont VistaVision"));
  assert.ok(film.premise.includes("Panavision Millennium XL2"));
  assert.ok(film.premise.includes("exceeded sixty spherical lenses"));
  assert.ok(film.premise.includes("Northern and Southern California and El Paso, Texas"));
  assert.ok(film.premise.includes("Texas Dip"));
  assert.ok(film.premise.includes("daily raw-footage screenings"));
  assert.ok(film.premise.includes("London Contemporary Orchestra"));
  assert.ok(film.premise.includes("do not establish a single audited final negative cost"));
  assert.ok(film.learningGoals.length >= 55);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("8perf_35mm_horizontal_vistavision"));
  assert.ok(film.requiredChoicesSeed.camera.includes("millennium_xl2_super35_dialogue_exception"));
  assert.ok(film.requiredChoicesSeed.editing.includes("anderson_daily_raw_footage_screenings"));
  assert.ok(film.requiredChoicesSeed.sound.includes("cars_as_distinct_sound_characters"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("award_priority_not_workflow_evidence"));
});

test("One Battle After Another expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenOneBattleAfterAnotherExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_one_battle_after_another_2025");
  const twice = mergeChapterNineteenOneBattleAfterAnotherExpansion(once);
  assert.equal(twice.length, 1);
});
