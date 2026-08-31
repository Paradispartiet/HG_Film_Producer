import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenGodzillaMinusOneExpansionDefinitions, mergeChapterNineteenGodzillaMinusOneExpansion } from "./chapterNineteenGodzillaMinusOneExpansion.js";

test("Godzilla Minus One source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenGodzillaMinusOneExpansionDefinitions.length, 1);
  const film = chapterNineteenGodzillaMinusOneExpansionDefinitions[0];
  assert.equal(film.id, "scenario_godzilla_minus_one_2023");
  assert.equal(film.title, "Godzilla Minus One");
  assert.equal(film.originalTitle, "Gojira -1.0");
  assert.equal(film.year, 2023);
  assert.equal(film.runtimeMins, 125);
  assert.deepEqual(film.directors, ["Takashi Yamazaki"]);
  assert.equal(film.sourceId, "toho_godzilla_minus_one_2023");
  assert.match(film.scenarioType, /regional_global/);
  assert.match(film.scenarioType, /sony_venice_2_6k/);
  assert.match(film.scenarioType, /610_vfx_cuts/);
  assert.match(film.scenarioType, /35_vfx_artists/);
  assert.ok(film.premise.includes("less than $15 million"));
  assert.ok(film.premise.includes("610 VFX cuts"));
  assert.ok(film.premise.includes("35-person VFX team"));
  assert.ok(film.premise.includes("one petabyte"));
  assert.ok(film.premise.includes("did not use motion capture"));
  assert.ok(film.premise.includes("leaves the exact final negative cost"));
  assert.ok(film.premise.includes("recoupment unresolved"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 32);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.phases.find((phase) => phase.id === "anti_myth_audit")?.player_task.includes("simplistic do-more-with-less"));
  assert.ok(film.phases.find((phase) => phase.id === "marine_capture")?.player_task.includes("real small-boat"));
  assert.ok(film.requiredChoicesSeed.camera.includes("x_ocn_xt"));
  assert.ok(film.requiredChoicesSeed.editing.includes("610_vfx_cuts"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("budget_under_15m_boundary"));
});

test("Godzilla Minus One expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenGodzillaMinusOneExpansion([]);
  assert.equal(once.length, 1);
  const twice = mergeChapterNineteenGodzillaMinusOneExpansion(once);
  assert.equal(twice.length, 1);
  assert.equal(twice[0]?.id, "scenario_godzilla_minus_one_2023");
});
