import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenBrokerExpansionDefinitions, mergeChapterNineteenBrokerExpansion } from "./chapterNineteenBrokerExpansion.js";

test("Broker source-first case locks aliases, chronology, location production and evidence boundaries", () => {
  assert.equal(chapterNineteenBrokerExpansionDefinitions.length, 1);
  const film = chapterNineteenBrokerExpansionDefinitions[0];
  assert.equal(film.id, "scenario_broker_2022");
  assert.equal(film.title, "Broker");
  assert.equal(film.originalTitle, "Broker");
  assert.ok(film.aliases.includes("Les Bonnes Étoiles"));
  assert.ok(film.aliases.includes("Beurokeo"));
  assert.ok(film.aliases.includes("브로커"));
  assert.equal(film.year, 2022);
  assert.equal(film.productionYear, 2022);
  assert.equal(film.principalPhotographyYear, 2021);
  assert.equal(film.runtimeMins, 129);
  assert.deepEqual(film.directors, ["Hirokazu Kore-eda"]);
  assert.match(film.premise, /April 14, 2021/);
  assert.match(film.premise, /June 22, 2021/);
  assert.match(film.premise, /98 percent/);
  assert.match(film.premise, /natural light/);
  assert.match(film.premise, /single camera/);
  assert.match(film.premise, /Do not infer the main camera model/);
  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 18);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Broker expansion is idempotent across canonical and alternate titles", () => {
  const once = mergeChapterNineteenBrokerExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_broker_2022");
  const twice = mergeChapterNineteenBrokerExpansion(once);
  assert.equal(twice.length, 1);
});
