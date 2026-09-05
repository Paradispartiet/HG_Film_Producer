import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenCompartmentNo6ExpansionDefinitions, mergeChapterNineteenCompartmentNo6Expansion } from "./chapterNineteenCompartmentNo6Expansion.js";

test("Compartment No. 6 source-first case locks Cannes, 35mm, train-production and discrepancy boundaries", () => {
  assert.equal(chapterNineteenCompartmentNo6ExpansionDefinitions.length, 1);
  const film = chapterNineteenCompartmentNo6ExpansionDefinitions[0];
  assert.equal(film.id, "scenario_compartment_no_6_2021");
  assert.equal(film.title, "Compartment No. 6");
  assert.equal(film.originalTitle, "Hytti nro 6");
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 107);
  assert.deepEqual(film.directors, ["Juho Kuosmanen"]);
  assert.match(film.scenarioType, /cannes_2021_grand_prix/);
  assert.match(film.premise, /28 shooting days over six weeks/);
  assert.match(film.premise, /ARRICAM LT 2-perf/);
  assert.match(film.premise, /Zeiss Super Speed/);
  assert.match(film.premise, /VISION3 500T/);
  assert.match(film.premise, /hidden microphones/);
  assert.match(film.premise, /107 minutes/);
  assert.match(film.premise, /106/);
  assert.match(film.premise, /2.40:1/);
  assert.match(film.premise, /1:2.35/);
  assert.ok(film.requiredChoicesSeed.camera.includes("aspect_ratio_source_boundary"));
  assert.ok(film.learningGoals.length >= 27);
  assert.ok(film.phases.length >= 22);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Compartment No. 6 expansion is idempotent across English/Finnish aliases", () => {
  const once = mergeChapterNineteenCompartmentNo6Expansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_compartment_no_6_2021");
  const twice = mergeChapterNineteenCompartmentNo6Expansion(once);
  assert.equal(twice.length, 1);
});
