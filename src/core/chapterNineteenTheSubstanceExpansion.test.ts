import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenTheSubstanceExpansionDefinitions, mergeChapterNineteenTheSubstanceExpansion } from "./chapterNineteenTheSubstanceExpansion.js";

test("The Substance source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenTheSubstanceExpansionDefinitions.length, 1);
  const film = chapterNineteenTheSubstanceExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_substance_2024");
  assert.equal(film.title, "The Substance");
  assert.equal(film.originalTitle, "The Substance");
  assert.equal(film.year, 2024);
  assert.equal(film.runtimeMins, 140);
  assert.deepEqual(film.directors, ["Coralie Fargeat"]);
  assert.equal(film.sourceId, "cannes_the_substance_2024");
  assert.match(film.scenarioType, /independent_low_mid_budget/);
  assert.match(film.scenarioType, /practical_prosthetics/);
  assert.match(film.scenarioType, /alexa_mini_lf/);
  assert.match(film.scenarioType, /canon_k35/);
  assert.match(film.scenarioType, /softdrop_not_led/);
  assert.ok(film.premise.includes("roughly 15-person team"));
  assert.ok(film.premise.includes("about 11 months"));
  assert.ok(film.premise.includes("more than 40 creature shots"));
  assert.ok(film.premise.includes("ARRI ALEXA Mini LF"));
  assert.ok(film.premise.includes("Canon K35"));
  assert.ok(film.premise.includes("softdrop"));
  assert.ok(film.premise.includes("more than 300 hours"));
  assert.ok(film.premise.includes("roughly 230 sequences"));
  assert.ok(film.premise.includes("Raffertie joined in January 2024"));
  assert.ok(film.premise.includes("do not establish an audited final negative cost"));
  assert.ok(film.learningGoals.length >= 55);
  assert.ok(film.phases.length >= 34);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.phases.find((phase) => phase.id === "anti_practical_myth")?.player_task.includes("no CGI"));
  assert.ok(film.requiredChoicesSeed.camera.includes("softdrop_not_led"));
  assert.ok(film.requiredChoicesSeed.editing.includes("300_plus_hours"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("budget_unresolved_boundary"));
  assert.ok(film.requiredChoicesSeed.sound.includes("music_sound_blur"));
});

test("The Substance expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenTheSubstanceExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_substance_2024");
  const twice = mergeChapterNineteenTheSubstanceExpansion(once);
  assert.equal(twice.length, 1);
});
