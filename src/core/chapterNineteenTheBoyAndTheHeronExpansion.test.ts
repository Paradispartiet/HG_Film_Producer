import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenTheBoyAndTheHeronExpansionDefinitions, mergeChapterNineteenTheBoyAndTheHeronExpansion } from "./chapterNineteenTheBoyAndTheHeronExpansion.js";

test("The Boy and the Heron source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenTheBoyAndTheHeronExpansionDefinitions.length, 1);
  const film = chapterNineteenTheBoyAndTheHeronExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_boy_and_the_heron_2023");
  assert.equal(film.title, "The Boy and the Heron");
  assert.equal(film.year, 2023);
  assert.equal(film.runtimeMins, 124);
  assert.deepEqual(film.directors, ["Hayao Miyazaki"]);
  assert.equal(film.sourceId, "studio_ghibli_the_boy_and_the_heron_2023");
  assert.match(film.scenarioType, /oscar_best_animated_feature/);
  assert.match(film.scenarioType, /hand_drawn_storyboards/);
  assert.match(film.scenarioType, /hybrid_2d_cg/);
  assert.ok(film.premise.includes("approximately seven years"));
  assert.ok(film.premise.includes("rather than beginning from a finished screenplay"));
  assert.ok(film.premise.includes("abundant time and no fixed deadline"));
  assert.ok(film.premise.includes("Shinya Ohira"));
  assert.ok(film.premise.includes("3D character rendering"));
  assert.ok(film.premise.includes("collapsing tower"));
  assert.ok(film.premise.includes("deepened blacks"));
  assert.ok(film.premise.includes("123 minutes 42-48 seconds"));
  assert.ok(film.premise.includes("nearly completed film in July 2022"));
  assert.ok(film.premise.includes("do not establish a single audited final production budget"));
  assert.ok(film.learningGoals.length >= 55);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.screenplay.includes("organic_storyboard_development"));
  assert.ok(film.requiredChoicesSeed.camera.includes("atsushi_okui_digital_imaging"));
  assert.ok(film.requiredChoicesSeed.editing.includes("honda_supervision"));
  assert.ok(film.requiredChoicesSeed.sound.includes("joe_hisaishi_minimalist_score"));
});

test("The Boy and the Heron expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenTheBoyAndTheHeronExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_boy_and_the_heron_2023");
  const twice = mergeChapterNineteenTheBoyAndTheHeronExpansion(once);
  assert.equal(twice.length, 1);
});
