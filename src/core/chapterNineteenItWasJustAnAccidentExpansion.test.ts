import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenItWasJustAnAccidentExpansionDefinitions, mergeChapterNineteenItWasJustAnAccidentExpansion } from "./chapterNineteenItWasJustAnAccidentExpansion.js";

test("It Was Just an Accident source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenItWasJustAnAccidentExpansionDefinitions.length, 1);
  const film = chapterNineteenItWasJustAnAccidentExpansionDefinitions[0];
  assert.equal(film.id, "scenario_it_was_just_an_accident_2025");
  assert.equal(film.title, "It Was Just an Accident");
  assert.equal(film.originalTitle, "Un simple accident");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 105);
  assert.deepEqual(film.directors, ["Jafar Panahi"]);
  assert.equal(film.sourceId, "cannes_it_was_just_an_accident_2025");
  assert.match(film.scenarioType, /palme_dor/);
  assert.match(film.scenarioType, /red_komodo/);
  assert.match(film.scenarioType, /alexa_mini/);
  assert.match(film.scenarioType, /mobile_dit/);
  assert.ok(film.premise.includes("2025 Palme d'Or"));
  assert.ok(film.premise.includes("without official permits"));
  assert.ok(film.premise.includes("RED Komodo"));
  assert.ok(film.premise.includes("ARRI Alexa Mini"));
  assert.ok(film.premise.includes("Astera Helios"));
  assert.ok(film.premise.includes("MacBook Air"));
  assert.ok(film.premise.includes("105-minute runtime"));
  assert.ok(film.premise.includes("approximately 102 minutes"));
  assert.ok(film.premise.includes("do not establish a single audited final budget"));
  assert.ok(film.learningGoals.length >= 59);
  assert.ok(film.phases.length >= 34);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("red_komodo_main"));
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_mini_opening_only"));
  assert.ok(film.requiredChoicesSeed.editing.includes("mobile_dit_car"));
  assert.ok(film.requiredChoicesSeed.sound.includes("prosthetic_leg_sound_motif"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("palme_dor_priority_not_workflow_evidence"));
});

test("It Was Just an Accident expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenItWasJustAnAccidentExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_it_was_just_an_accident_2025");
  const twice = mergeChapterNineteenItWasJustAnAccidentExpansion(once);
  assert.equal(twice.length, 1);
});
