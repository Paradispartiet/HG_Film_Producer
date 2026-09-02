import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenSiratExpansionDefinitions, mergeChapterNineteenSiratExpansion } from "./chapterNineteenSiratExpansion.js";

test("Sirāt source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenSiratExpansionDefinitions.length, 1);
  const film = chapterNineteenSiratExpansionDefinitions[0];
  assert.equal(film.id, "scenario_sirat_2025");
  assert.equal(film.title, "Sirāt");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 114);
  assert.deepEqual(film.directors, ["Óliver Laxe"]);
  assert.equal(film.sourceId, "kodak_sirat_super_16_2026");
  assert.match(film.scenarioType, /cannes_jury_prize/);
  assert.match(film.scenarioType, /super_16_arriflex_416_ultra_prime/);
  assert.match(film.scenarioType, /vision3_250d_7207_500t_7219/);
  assert.match(film.scenarioType, /amanda_villavieja_laia_casanovas_yasmina_praderas/);
  assert.match(film.scenarioType, /kangding_ray_pre_shoot_music/);
  assert.ok(film.premise.includes("114 minutes 12 seconds"));
  assert.ok(film.premise.includes("114 minutes 23 seconds"));
  assert.ok(film.premise.includes("Cannes lists the festival film at 120 minutes"));
  assert.ok(film.premise.includes("€6.5 million budget"));
  assert.ok(film.premise.includes("between May and June 2024"));
  assert.ok(film.premise.includes("ARRIFLEX 416"));
  assert.ok(film.premise.includes("VISION3 250D 7207"));
  assert.ok(film.premise.includes("VISION3 500T 7219"));
  assert.ok(film.premise.includes("2K scans"));
  assert.ok(film.premise.includes("Creamsource Vortex"));
  assert.ok(film.premise.includes("three-axis Black Arm"));
  assert.ok(film.premise.includes("green screens for background replacements"));
  assert.ok(film.premise.includes("lenses broke"));
  assert.ok(film.premise.includes("worked for well over a year before photography"));
  assert.ok(film.premise.includes("does not establish the complete finance"));
  assert.ok(film.learningGoals.length >= 65);
  assert.ok(film.phases.length >= 35);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.requiredChoicesSeed.camera.includes("super16_arriflex_416"));
  assert.ok(film.requiredChoicesSeed.camera.includes("2k_scan_transperfect_cube_grade"));
  assert.ok(film.requiredChoicesSeed.sound.includes("kangding_ray_pre_shoot_score"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("runtime_version_discrepancy_120_vs_114"));
});

test("Sirāt expansion merges idempotently by normalized title", () => {
  const once = mergeChapterNineteenSiratExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_sirat_2025");
  const twice = mergeChapterNineteenSiratExpansion(once);
  assert.equal(twice.length, 1);
});
