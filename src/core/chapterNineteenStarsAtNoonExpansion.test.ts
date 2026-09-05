import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenStarsAtNoonExpansionDefinitions, mergeChapterNineteenStarsAtNoonExpansion } from "./chapterNineteenStarsAtNoonExpansion.js";

test("Stars at Noon source-first case locks Panama substitution, camera evidence and runtime discrepancy", () => {
  assert.equal(chapterNineteenStarsAtNoonExpansionDefinitions.length, 1);
  const film = chapterNineteenStarsAtNoonExpansionDefinitions[0];
  assert.equal(film.id, "scenario_stars_at_noon_2022");
  assert.equal(film.title, "Stars at Noon");
  assert.equal(film.year, 2022);
  assert.equal(film.productionYear, 2022);
  assert.equal(film.runtimeMins, 137);
  assert.deepEqual(film.directors, ["Claire Denis"]);
  assert.match(film.scenarioType, /joint_grand_prix/);
  assert.match(film.scenarioType, /panama_for_nicaragua/);
  assert.match(film.scenarioType, /alexa_mini/);
  assert.match(film.scenarioType, /technocooke_anamorphic/);
  assert.match(film.premise, /135-minute runtime/);
  assert.match(film.premise, /137 minutes/);
  assert.match(film.premise, /138 minutes/);
  assert.match(film.premise, /unresolved catalogue\/version metadata/);
  assert.match(film.premise, /ALEXA Mini/);
  assert.match(film.premise, /TechnoCooke/);
  assert.match(film.premise, /2\.39/);
  assert.match(film.premise, /5\.1/);
  assert.match(film.premise, /Panama/);
  assert.ok(film.requiredChoicesSeed.runtime.includes("runtime_discrepancy_preserved"));
  assert.ok(film.requiredChoicesSeed.camera.includes("camera_package_unresolved"));
  assert.ok(film.learningGoals.length >= 34);
  assert.ok(film.phases.length >= 19);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
});

test("Stars at Noon expansion is idempotent across one canonical title identity", () => {
  const once = mergeChapterNineteenStarsAtNoonExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_stars_at_noon_2022");
  const twice = mergeChapterNineteenStarsAtNoonExpansion(once);
  assert.equal(twice.length, 1);
});
