import assert from "node:assert/strict";
import test from "node:test";
import { chapterNineteenSentimentalValueExpansionDefinitions, mergeChapterNineteenSentimentalValueExpansion } from "./chapterNineteenSentimentalValueExpansion.js";

test("Sentimental Value source-first production case is complete and evidence-bounded", () => {
  assert.equal(chapterNineteenSentimentalValueExpansionDefinitions.length, 1);
  const film = chapterNineteenSentimentalValueExpansionDefinitions[0];
  assert.equal(film.id, "scenario_sentimental_value_2025");
  assert.equal(film.title, "Sentimental Value");
  assert.equal(film.originalTitle, "Affeksjonsverdi");
  assert.equal(film.year, 2025);
  assert.equal(film.runtimeMins, 135);
  assert.deepEqual(film.directors, ["Joachim Trier"]);
  assert.equal(film.sourceId, "nfi_sentimental_value_2025");
  assert.match(film.scenarioType, /auteur_festival/);
  assert.match(film.scenarioType, /gateway_studios/);
  assert.match(film.scenarioType, /arricam_lt_35mm/);
  assert.match(film.scenarioType, /arriflex_416_16mm/);
  assert.match(film.scenarioType, /2k_scan/);
  assert.ok(film.premise.includes("NOK 20.5 million"));
  assert.ok(film.premise.includes("not the film's total production budget"));
  assert.ok(film.premise.includes("roughly 63–65 days"));
  assert.ok(film.premise.includes("Gateway Studios"));
  assert.ok(film.premise.includes("KODAK VISION3 250D 5207"));
  assert.ok(film.premise.includes("2K scans"));
  assert.ok(film.premise.includes("three and a half hours"));
  assert.ok(film.premise.includes("Hania Rani"));
  assert.ok(film.learningGoals.length >= 55);
  assert.ok(film.phases.length >= 34);
  assert.equal(film.phases.at(-1)?.id, "production_verification");
  assert.ok(film.phases.find((phase) => phase.id === "anti_prestige_audit")?.player_task.includes("awards"));
  assert.ok(film.requiredChoicesSeed.camera.includes("gateway_led_house_replica"));
  assert.ok(film.requiredChoicesSeed.editing.includes("three_and_half_hour_assembly"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("nfi_20_5m_support_not_total_budget"));
  assert.ok(film.requiredChoicesSeed.sound.includes("full_sound_chain_unresolved"));
});

test("Sentimental Value expansion merges idempotently by normalized original and English titles", () => {
  const once = mergeChapterNineteenSentimentalValueExpansion([]);
  assert.equal(once.length, 1);
  assert.equal(once[0]?.id, "scenario_sentimental_value_2025");
  const twice = mergeChapterNineteenSentimentalValueExpansion(once);
  assert.equal(twice.length, 1);
});
