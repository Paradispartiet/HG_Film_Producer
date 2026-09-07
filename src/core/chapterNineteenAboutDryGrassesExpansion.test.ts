import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenAboutDryGrassesExpansionDefinitions, mergeChapterNineteenAboutDryGrassesExpansion } from "./chapterNineteenAboutDryGrassesExpansion.js";

test("About Dry Grasses source-first case locks chronology, VENICE anamorphic capture and evidence boundaries", () => {
  assert.equal(chapterNineteenAboutDryGrassesExpansionDefinitions.length, 1);
  const film = chapterNineteenAboutDryGrassesExpansionDefinitions[0];
  assert.equal(film.id, "scenario_about_dry_grasses_2023");
  assert.equal(film.title, "About Dry Grasses");
  assert.equal(film.originalTitle, "Kuru Otlar Üstüne");
  assert.ok(film.aliases.includes("Kuru Otlar Ustune"));
  assert.equal(film.year, 2023);
  assert.equal(film.productionYear, 2023);
  assert.equal(film.principalPhotographyYear, 2021);
  assert.equal(film.runtimeMins, 197);
  assert.deepEqual(film.directors, ["Nuri Bilge Ceylan"]);
  assert.match(film.premise, /6 February 2021/);
  assert.match(film.premise, /4K Sony VENICE/);
  assert.match(film.premise, /Cooke Anamorphic SF 2X/);
  assert.match(film.premise, /2\.39/);
  assert.match(film.premise, /2\.35/);
  assert.match(film.premise, /full script before substantially reducing it in editing/);
  assert.match(film.premise, /Do not infer a total budget/);
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("About Dry Grasses expansion is idempotent across canonical and Turkish titles", () => {
  const once = mergeChapterNineteenAboutDryGrassesExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_about_dry_grasses_2023");
  const twice = mergeChapterNineteenAboutDryGrassesExpansion(once);
  assert.equal(twice.length, 1);
});
