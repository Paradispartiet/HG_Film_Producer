import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenBoyFromHeavenExpansionDefinitions, mergeChapterNineteenBoyFromHeavenExpansion } from "./chapterNineteenBoyFromHeavenExpansion.js";

test("Boy from Heaven source-first case locks aliases, chronology, location substitution and one-lens cinematography", () => {
  assert.equal(chapterNineteenBoyFromHeavenExpansionDefinitions.length, 1);
  const film = chapterNineteenBoyFromHeavenExpansionDefinitions[0];
  assert.equal(film.id, "scenario_boy_from_heaven_2022");
  assert.equal(film.title, "Boy from Heaven");
  assert.equal(film.originalTitle, "Walad Min Al Janna");
  assert.ok(film.aliases.includes("Cairo Conspiracy"));
  assert.equal(film.year, 2022);
  assert.equal(film.productionYear, 2022);
  assert.equal(film.principalPhotographyYear, 2021);
  assert.equal(film.runtimeMins, 126);
  assert.deepEqual(film.directors, ["Tarik Saleh"]);
  assert.match(film.premise, /Covid was the largest production challenge/);
  assert.match(film.premise, /25 June to 20 September 2021/);
  assert.match(film.premise, /Süleymaniye Mosque/);
  assert.match(film.premise, /€6\.5 million/);
  assert.match(film.premise, /ALEXA LF/);
  assert.match(film.premise, /4K ARRIRAW/);
  assert.match(film.premise, /single 40mm scope Scorpio lens/);
  assert.match(film.premise, /documentary-like proximity/);
  assert.ok(film.requiredChoicesSeed.camera.includes("single_scorpio_40mm_scope"));
  assert.ok(film.requiredChoicesSeed.runtime.includes("runtime_discrepancy_not_harmonized"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Boy from Heaven expansion is idempotent across canonical and alternate titles", () => {
  const once = mergeChapterNineteenBoyFromHeavenExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_boy_from_heaven_2022");
  const twice = mergeChapterNineteenBoyFromHeavenExpansion(once);
  assert.equal(twice.length, 1);
});
