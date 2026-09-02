import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenSinnersExpansionDefinitions, mergeChapterNineteenSinnersExpansion } from "./chapterNineteenSinnersExpansion.js";

test("Sinners source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenSinnersExpansionDefinitions.length, 1);
  const film = chapterNineteenSinnersExpansionDefinitions[0];
  assert.equal(film.id, "scenario_sinners_2025");
  assert.equal(film.title, "Sinners");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 138);
  assert.deepEqual(film.directors, ["Ryan Coogler"]);
  assert.equal(film.sourceId, "kodak_sinners_65mm_imax_2025");
  assert.match(film.scenarioType, /oscar_actor_cinematography_score_original_screenplay/);
  assert.match(film.scenarioType, /66_shoot_days/);
  assert.match(film.scenarioType, /ultra_panavision_70_imax_15_perf_65mm/);
  assert.match(film.scenarioType, /1000_vfx_shots/);
  assert.ok(film.premise.includes("137 minutes 33 seconds"));
  assert.ok(film.premise.includes("66 shooting days"));
  assert.ok(film.premise.includes("5-perf 65mm Ultra Panavision 70"));
  assert.ok(film.premise.includes("15-perf IMAX"));
  assert.ok(film.premise.includes("Panavision System 65 Studio and System 65 High Speed"));
  assert.ok(film.premise.includes("IMAX MSM 9802 and IMAX MKIV"));
  assert.ok(film.premise.includes("KODAK VISION3 500T Color Negative Film 5219"));
  assert.ok(film.premise.includes("KODAK EKTACHROME 100D 5294"));
  assert.ok(film.premise.includes("1.43:1 and 1.90:1 IMAX plus 2.76:1 and 2.39:1"));
  assert.ok(film.premise.includes("more than 1,000 VFX shots"));
  assert.ok(film.premise.includes("Technodolly repeatable split-screen"));
  assert.ok(film.premise.includes("purpose-built Halo Rig"));
  assert.ok(film.premise.includes("three shots"));
  assert.ok(film.premise.includes("complete financing/ownership/recoupment waterfall"));
  assert.ok(film.learningGoals.length >= 60);
  assert.ok(film.phases.length >= 30);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.screenplay.includes("66_day_louisiana_schedule"));
  assert.ok(film.requiredChoicesSeed.camera.includes("15_perf_imax_65mm"));
  assert.ok(film.requiredChoicesSeed.editing.includes("halo_rig_twinning"));
  assert.ok(film.requiredChoicesSeed.sound.includes("twin_pro_tools_playback"));
});

test("Sinners expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenSinnersExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_sinners_2025");
  const twice = mergeChapterNineteenSinnersExpansion(once);
  assert.equal(twice.length, 1);
});