import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenAnatomyOfAFallExpansionDefinitions, mergeChapterNineteenAnatomyOfAFallExpansion } from "./chapterNineteenAnatomyOfAFallExpansion.js";

test("Anatomy of a Fall source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenAnatomyOfAFallExpansionDefinitions.length, 1);
  const film = chapterNineteenAnatomyOfAFallExpansionDefinitions[0];
  assert.equal(film.id, "scenario_anatomy_of_a_fall_2023");
  assert.equal(film.title, "Anatomy of a Fall");
  assert.equal(film.originalTitle, "Anatomie d'une chute");
  assert.equal(film.year, 2023);
  assert.equal(film.runtimeMins, 151);
  assert.deepEqual(film.directors, ["Justine Triet"]);
  assert.equal(film.sourceId, "festival_cannes_anatomie_d_une_chute_2023");
  assert.match(film.scenarioType, /auteur_festival/);
  assert.match(film.scenarioType, /alexa_mini_lf/);
  assert.match(film.scenarioType, /hawk_v_lite/);
  assert.match(film.scenarioType, /sound_evidence/);
  assert.ok(film.premise.includes("35mm 2-perf"));
  assert.ok(film.premise.includes("ALEXA Mini LF"));
  assert.ok(film.premise.includes("Hawk V-Lite"));
  assert.ok(film.premise.includes("Angénieux Optimo 24-290mm"));
  assert.ok(film.premise.includes("eight days in the courthouse"));
  assert.ok(film.premise.includes("ARRIMAX"));
  assert.ok(film.premise.includes("about 45 meters high"));
  assert.ok(film.premise.includes("single major embodied flashback"));
  assert.ok(film.premise.includes("does not work from a conventional full assembly"));
  assert.ok(film.premise.includes("remain unresolved"));
  assert.ok(film.learningGoals.length >= 48);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.phases.find((phase) => phase.id === "court_audio_handoff")?.player_task.includes("recording as evidence"));
  assert.ok(film.phases.find((phase) => phase.id === "two_camera_court")?.player_task.includes("long-zoom second camera"));
  assert.ok(film.phases.find((phase) => phase.id === "uncertainty_rule")?.player_task.includes("without encoding a canonical cause"));
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_mini_lf"));
  assert.ok(film.requiredChoicesSeed.editing.includes("ambiguity_balance"));
  assert.ok(film.requiredChoicesSeed.sound.includes("recorded_argument_as_evidence"));
});

test("Anatomy of a Fall expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenAnatomyOfAFallExpansion([]);
  assert.equal(once.length, 1);
  const twice = mergeChapterNineteenAnatomyOfAFallExpansion(once);
  assert.equal(twice.length, 1);
  assert.equal(twice[0]?.id, "scenario_anatomy_of_a_fall_2023");
});
