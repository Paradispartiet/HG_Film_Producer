import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenHolySpiderExpansionDefinitions, mergeChapterNineteenHolySpiderExpansion } from "./chapterNineteenHolySpiderExpansion.js";

test("Holy Spider source-first case locks aliases, chronology, Jordan production and camera boundaries", () => {
  assert.equal(chapterNineteenHolySpiderExpansionDefinitions.length, 1);
  const film = chapterNineteenHolySpiderExpansionDefinitions[0];
  assert.equal(film.id, "scenario_holy_spider_2022");
  assert.equal(film.title, "Holy Spider");
  assert.equal(film.originalTitle, "Holy Spider");
  assert.ok(film.aliases.includes("Les Nuits de Mashhad"));
  assert.ok(film.aliases.includes("Ankabut-e moqaddas"));
  assert.ok(film.aliases.includes("عنکبوت مقدس"));
  assert.equal(film.year, 2022);
  assert.equal(film.productionYear, 2022);
  assert.equal(film.principalPhotographyYear, 2021);
  assert.equal(film.runtimeMins, 117);
  assert.deepEqual(film.directors, ["Ali Abbasi"]);
  assert.match(film.premise, /35-day Jordan shoot/);
  assert.match(film.premise, /wrapped in June 2021/);
  assert.match(film.premise, /Paykan cars/);
  assert.match(film.premise, /ALEXA Mini LF/);
  assert.match(film.premise, /Signature Prime/);
  assert.match(film.premise, /4K and 2.39:1/);
  assert.match(film.premise, /115, 118 and 117 minutes|117, 118 and 115 minutes|117, 118 and 115/);
  assert.ok(film.requiredChoicesSeed.runtime.includes("runtime_version_boundary"));
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Holy Spider expansion is idempotent across canonical and alternate titles", () => {
  const once = mergeChapterNineteenHolySpiderExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_holy_spider_2022");
  const twice = mergeChapterNineteenHolySpiderExpansion(once);
  assert.equal(twice.length, 1);
});
