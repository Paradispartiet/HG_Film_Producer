import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenPoorThingsExpansionDefinitions, mergeChapterNineteenPoorThingsExpansion } from "./chapterNineteenPoorThingsExpansion.js";

test("Poor Things source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenPoorThingsExpansionDefinitions.length, 1);
  const film = chapterNineteenPoorThingsExpansionDefinitions[0];
  assert.equal(film.id, "scenario_poor_things_2023");
  assert.equal(film.title, "Poor Things");
  assert.equal(film.year, 2023);
  assert.equal(film.runtimeMins, 141);
  assert.deepEqual(film.directors, ["Yorgos Lanthimos"]);
  assert.equal(film.sourceId, "searchlight_poor_things_2023");
  assert.match(film.scenarioType, /industrial_scale_technical/);
  assert.match(film.scenarioType, /ektachrome_5294/);
  assert.match(film.scenarioType, /vistavision/);
  assert.match(film.scenarioType, /miniatures/);
  assert.ok(film.premise.includes("more than 100 pages"));
  assert.ok(film.premise.includes("22 weeks"));
  assert.ok(film.premise.includes("mainly single-camera"));
  assert.ok(film.premise.includes("EKTACHROME 100D 5294"));
  assert.ok(film.premise.includes("about six months of editing"));
  assert.ok(film.premise.includes("eight months before shooting"));
  assert.ok(film.premise.includes("no widely circulated budget estimate is promoted"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 32);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.phases.find((phase) => phase.id === "anti_binary_audit")?.player_task.includes("miniatures"));
  assert.ok(film.requiredChoicesSeed.camera.includes("ektachrome_5294_e6"));
  assert.ok(film.requiredChoicesSeed.editing.includes("six_month_edit"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("budget_unresolved_boundary"));
});

test("Poor Things expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenPoorThingsExpansion([]);
  assert.equal(once.length, 1);
  const twice = mergeChapterNineteenPoorThingsExpansion(once);
  assert.equal(twice.length, 1);
  assert.equal(twice[0]?.id, "scenario_poor_things_2023");
});
