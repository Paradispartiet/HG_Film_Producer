import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenHyenasExpansionDefinitions } from "./chapterSeventeenHyenasExpansion.js";

test("Chapter 17 materializes Hyenas as a source-first Senegalese transnational two-period production", () => {
  assert.equal(chapterSeventeenHyenasExpansionDefinitions.length, 1);
  const film = chapterSeventeenHyenasExpansionDefinitions[0];
  assert.equal(film.id, "scenario_hyenas_1992");
  assert.equal(film.originalTitle, "Hyènes");
  assert.equal(film.year, 1992);
  assert.equal(film.runtimeMins, 110);
  assert.deepEqual(film.directors, ["Djibril Diop Mambéty"]);
  assert.equal(film.sourceId, "swiss_films_hyenes_1992");
  assert.ok(film.scenarioType.includes("senegalese_transnational") && film.scenarioType.includes("two_period") && film.scenarioType.includes("35mm"));

  assert.ok(film.premise.includes("Friedrich Dürrenmatt") && film.premise.includes("The Visit") && film.premise.includes("Senegalese authorship"));
  assert.ok(film.premise.includes("Thelma Film AG") && film.premise.includes("ADR Productions") && film.premise.includes("Maag Daan") && film.premise.includes("Channel Four") && film.premise.includes("Schweizer Fernsehen"));
  assert.ok(film.premise.includes("300,000 F") && film.premise.includes("total budget"));
  assert.ok(film.premise.includes("spring 1991") && film.premise.includes("two periods") && film.premise.includes("producers stopped the production"));
  assert.ok(film.premise.includes("Matthias Kälin") && film.premise.includes("Loredana Cristelli") && film.premise.includes("Maguette Salla") && film.premise.includes("Wasis Diop") && film.premise.includes("Oumou Sy"));
  assert.ok(film.premise.includes("costume designer") && film.premise.includes("production design") && film.premise.includes("credit variance"));
  assert.ok(film.premise.includes("35mm") && film.premise.includes("1.66") && film.premise.includes("108/110/113"));
  assert.ok(film.premise.includes("elephants") && film.premise.includes("Uganda") && film.premise.includes("Japanese participant") && film.premise.includes("Fête de l'Humanité"));
  assert.ok(film.premise.includes("rice sacks") && film.premise.includes("collective mask") && film.premise.includes("equipment was comparatively expensive"));
  assert.ok(film.premise.includes("sound rather than music as an ornament") && film.premise.includes("intrinsically connected"));
  assert.ok(film.premise.includes("2017 restoration") && film.premise.includes("original negative") && film.premise.includes("separate layers"));
  assert.ok(film.premise.includes("Do not invent camera/lens/stock data") && film.premise.includes("animal-handling methods"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Senegalese-authored") && goal.includes("transnational co-production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("300,000 F") && goal.includes("not a total budget")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("two shooting periods") && goal.includes("production stoppage")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Oumou Sy") && goal.includes("credit variance")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("108/110/113-minute") && goal.includes("110-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("animal welfare") && goal.includes("independent professional controls")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2017") && goal.includes("downstream")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Avoid inventing") && goal.includes("sound-hardware") && goal.includes("animal-handling")));

  const first = film.phases.find((phase) => phase.id === "first_shoot_period");
  assert.ok(first?.player_task.includes("Absa") && first.player_task.includes("stoppage") && first.player_task.includes("exact shutdown dates"));
  const reorg = film.phases.find((phase) => phase.id === "production_reorganization");
  assert.ok(reorg?.player_task.includes("Alain Rozanès") && reorg.player_task.includes("Moussa Sene Absa"));
  const continental = film.phases.find((phase) => phase.id === "continental_elements");
  assert.ok(continental?.player_task.includes("Kenyan elephants") && continental.player_task.includes("Ugandan hyenas") && continental.player_task.includes("modern animal/travel safety"));
  const camera = film.phases.find((phase) => phase.id === "camera_and_format");
  assert.ok(camera?.player_task.includes("35mm") && camera.player_task.includes("1.66") && camera.player_task.includes("do not infer camera body"));
  const sound = film.phases.find((phase) => phase.id === "sound_and_music");
  assert.ok(sound?.player_task.includes("Maguette Salla") && sound.player_task.includes("Wasis Diop") && sound.player_task.includes("hardware"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_exposure_lighting_or_lab_recipe"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_adr_or_mix_layout"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
