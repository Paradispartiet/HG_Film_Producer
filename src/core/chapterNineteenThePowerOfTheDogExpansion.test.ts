import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenThePowerOfTheDogExpansionDefinitions, mergeChapterNineteenThePowerOfTheDogExpansion } from "./chapterNineteenThePowerOfTheDogExpansion.js";

test("The Power of the Dog source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenThePowerOfTheDogExpansionDefinitions.length, 1);
  const film = chapterNineteenThePowerOfTheDogExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_power_of_the_dog_2021");
  assert.equal(film.title, "The Power of the Dog");
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 127);
  assert.deepEqual(film.directors, ["Jane Campion"]);
  assert.equal(film.sourceId, "arri_the_power_of_the_dog_2021");
  assert.match(film.scenarioType, /bafta_best_film/);
  assert.match(film.scenarioType, /alexa_lf/);
  assert.match(film.scenarioType, /mini_lf/);
  assert.match(film.scenarioType, /ultra_panatar/);
  assert.match(film.scenarioType, /pandemic_shutdown_restart/);
  assert.ok(film.premise.includes("2022 Best Film winner"));
  assert.ok(film.premise.includes("exactly 127 minutes"));
  assert.ok(film.premise.includes("BFI lists 125 minutes"));
  assert.ok(film.premise.includes("roughly a full year of preparation"));
  assert.ok(film.premise.includes("two ALEXA LF bodies plus one Mini LF"));
  assert.ok(film.premise.includes("Ultra Panatar 1.25x anamorphic primes"));
  assert.ok(film.premise.includes("200-400 mm 70-series full-frame zoom"));
  assert.ok(film.premise.includes("Cine Reflect Lighting System"));
  assert.ok(film.premise.includes("approximately four months"));
  assert.ok(film.premise.includes("Peter Sciberras"));
  assert.ok(film.premise.includes("Richard Flynn"));
  assert.ok(film.premise.includes("Robert Mackenzie"));
  assert.ok(film.premise.includes("Jonny Greenwood"));
  assert.ok(film.premise.includes("do not establish a single audited final negative cost"));
  assert.ok(film.learningGoals.length >= 60);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_lf_main"));
  assert.ok(film.requiredChoicesSeed.camera.includes("crls_redirected_sun"));
  assert.ok(film.requiredChoicesSeed.editing.includes("peter_sciberras_avid"));
  assert.ok(film.requiredChoicesSeed.sound.includes("house_isolation_soundscape"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("award_priority_not_workflow_evidence"));
});

test("The Power of the Dog expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenThePowerOfTheDogExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_power_of_the_dog_2021");
  const twice = mergeChapterNineteenThePowerOfTheDogExpansion(once);
  assert.equal(twice.length, 1);
});
