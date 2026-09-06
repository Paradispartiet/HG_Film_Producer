import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenMonsterExpansionDefinitions, mergeChapterNineteenMonsterExpansion } from "./chapterNineteenMonsterExpansion.js";

test("Monster source-first case locks multilingual identity, chronology, digital capture and perspective grammar", () => {
  assert.equal(chapterNineteenMonsterExpansionDefinitions.length, 1);
  const film = chapterNineteenMonsterExpansionDefinitions[0];
  assert.equal(film.id, "scenario_monster_2023");
  assert.equal(film.title, "Monster");
  assert.equal(film.originalTitle, "Kaibutsu");
  assert.ok(film.aliases.includes("怪物"));
  assert.ok(film.aliases.includes("L'Innocence"));
  assert.equal(film.year, 2023);
  assert.equal(film.productionYear, 2023);
  assert.equal(film.principalPhotographyYear, 2022);
  assert.equal(film.runtimeMins, 126);
  assert.deepEqual(film.directors, ["Hirokazu Kore-eda"]);
  assert.match(film.premise, /early 2022/);
  assert.match(film.premise, /shot digitally/);
  assert.match(film.premise, /2\.39:1/);
  assert.match(film.premise, /7\.1CH\+5\.1CH/);
  assert.match(film.premise, /hardly any spontaneous on-set dialogue rewriting/);
  assert.match(film.premise, /exact camera body/);
  assert.ok(film.learningGoals.length >= 35);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Monster expansion is idempotent across canonical and alternate titles", () => {
  const once = mergeChapterNineteenMonsterExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_monster_2023");
  const twice = mergeChapterNineteenMonsterExpansion(once);
  assert.equal(twice.length, 1);
});
