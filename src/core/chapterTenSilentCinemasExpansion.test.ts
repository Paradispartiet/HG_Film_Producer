import assert from "node:assert/strict";
import test from "node:test";

import { chapterTenSilentCinemasExpansionDefinitions } from "./chapterTenSilentCinemasExpansion.js";

test("Chapter 10 materializes A Page of Madness as a version-aware Japanese avant-garde Production Case", () => {
  assert.equal(chapterTenSilentCinemasExpansionDefinitions.length, 1);
  const page = chapterTenSilentCinemasExpansionDefinitions[0];
  assert.equal(page.id, "scenario_a_page_of_madness_1926");
  assert.equal(page.title, "A Page of Madness");
  assert.equal(page.originalTitle, "Kurutta ichipeiji");
  assert.equal(page.year, 1926);
  assert.equal(page.runtimeMins, 78);
  assert.equal(page.scenarioType, "japanese_avant_garde_benshi_version_history_production");
  assert.equal(page.sourceId, "manual_a_page_of_madness_1926");
  assert.equal(page.sourceUrl, "https://nfad.nfaj.go.jp/det.php?data_id=66794");
  assert.ok(page.premise.includes("Shinkankakuha Eiga Renmei"));
  assert.ok(page.premise.includes("Kohei Sugiyama"));
  assert.ok(page.premise.includes("Eiji Tsuburaya"));
  assert.ok(page.premise.includes("benshi"));
  assert.ok(page.premise.includes("rediscovered material in 1971"));
  assert.ok(page.premise.includes("without being rewarded for caricature, diagnosis or spectacle of suffering"));
  assert.ok(page.requiredChoicesSeed.screenplay.includes("benshi_exhibition_context"));
  assert.ok(page.requiredChoicesSeed.camera.includes("perception_without_diagnostic_simulation"));
  assert.ok(page.requiredChoicesSeed.editing.includes("surviving_print_version_control"));
  assert.ok(page.requiredChoicesSeed.sound.includes("later_music_not_original_production_sound"));
  assert.ok(page.requiredChoicesSeed.themes.includes("archive_survival"));
  assert.ok(page.requiredChoicesSeed.themes.includes("representation_ethics"));
  assert.ok(page.learningGoals.some((goal) => goal.includes("hundreds of films produced in a largely lost silent cinema")));
  assert.ok(page.learningGoals.some((goal) => goal.includes("mental illness")));
  assert.ok(page.learningGoals.length >= 7);
  assert.ok(page.phases.length >= 9);
});
