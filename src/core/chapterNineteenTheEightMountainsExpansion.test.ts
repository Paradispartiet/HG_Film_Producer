import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenTheEightMountainsExpansionDefinitions, mergeChapterNineteenTheEightMountainsExpansion } from "./chapterNineteenTheEightMountainsExpansion.js";

test("The Eight Mountains source-first case locks chronology, seasonal location production and 4:3 cinematography", () => {
  assert.equal(chapterNineteenTheEightMountainsExpansionDefinitions.length, 1);
  const film = chapterNineteenTheEightMountainsExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_eight_mountains_2022");
  assert.equal(film.title, "The Eight Mountains");
  assert.equal(film.originalTitle, "Le otto montagne");
  assert.ok(film.aliases.includes("Les Huit Montagnes"));
  assert.equal(film.year, 2022);
  assert.equal(film.productionYear, 2021);
  assert.equal(film.principalPhotographyYear, 2021);
  assert.equal(film.runtimeMins, 147);
  assert.deepEqual(film.directors, ["Charlotte Vandermeersch", "Felix van Groeningen"]);
  assert.match(film.premise, /more than 60 shooting days/);
  assert.match(film.premise, /five seasonal blocks/);
  assert.match(film.premise, /no studio days/);
  assert.match(film.premise, /4:3 Academy/);
  assert.match(film.premise, /Alexa Mini LF/);
  assert.match(film.premise, /Zeiss Supreme Primes/);
  assert.match(film.premise, /Angénieux Optimo 36-435mm/);
  assert.match(film.premise, /Cannes deadline pressure/);
  assert.ok(film.requiredChoicesSeed.camera.includes("arri_alexa_mini_lf"));
  assert.ok(film.requiredChoicesSeed.locations.includes("no_studio_days"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("The Eight Mountains expansion is idempotent across canonical and alternate titles", () => {
  const once = mergeChapterNineteenTheEightMountainsExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_eight_mountains_2022");
  const twice = mergeChapterNineteenTheEightMountainsExpansion(once);
  assert.equal(twice.length, 1);
});
