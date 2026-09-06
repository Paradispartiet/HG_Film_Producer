import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenThePotAuFeuExpansionDefinitions, mergeChapterNineteenThePotAuFeuExpansion } from "./chapterNineteenThePotAuFeuExpansion.js";

test("The Pot-au-Feu source-first case locks aliases, chronology, regional production, camera and sound boundaries", () => {
  assert.equal(chapterNineteenThePotAuFeuExpansionDefinitions.length, 1);
  const film = chapterNineteenThePotAuFeuExpansionDefinitions[0];
  assert.equal(film.id, "scenario_the_pot_au_feu_2023");
  assert.equal(film.title, "The Pot-au-Feu");
  assert.equal(film.originalTitle, "La Passion de Dodin Bouffant");
  assert.ok(film.aliases.includes("The Taste of Things"));
  assert.equal(film.year, 2023);
  assert.equal(film.productionYear, 2023);
  assert.equal(film.principalPhotographyYear, 2022);
  assert.equal(film.runtimeMins, 134);
  assert.deepEqual(film.directors, ["Trần Anh Hùng"]);
  assert.match(film.premise, /March 31/);
  assert.match(film.premise, /May 18, 2022/);
  assert.match(film.premise, /Sony Venice/);
  assert.match(film.premise, /35mm Leitz Summilux-C/);
  assert.match(film.premise, /real food/);
  assert.match(film.premise, /134 minutes while Gaumont markets 135 minutes/);
  assert.match(film.premise, /Do not infer unsupported recording codec/);
  assert.ok(film.learningGoals.length >= 34);
  assert.ok(film.phases.length >= 20);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("The Pot-au-Feu expansion is idempotent across canonical and alternate titles", () => {
  const once = mergeChapterNineteenThePotAuFeuExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_the_pot_au_feu_2023");
  const twice = mergeChapterNineteenThePotAuFeuExpansion(once);
  assert.equal(twice.length, 1);
});
