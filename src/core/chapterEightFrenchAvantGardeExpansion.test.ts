import assert from "node:assert/strict";
import test from "node:test";

import { chapterEightFrenchAvantGardeExpansionDefinitions } from "./chapterEightFrenchAvantGardeExpansion.js";

test("Chapter 8 materializes Coeur fidele and Napoleon as distinct French avant-garde production cases", () => {
  assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 2);

  const coeur = chapterEightFrenchAvantGardeExpansionDefinitions.find((item) => item.id === "scenario_coeur_fidele_1923");
  assert.ok(coeur);
  assert.equal(coeur.title, "Cœur fidèle");
  assert.equal(coeur.year, 1923);
  assert.equal(coeur.runtimeMins, 84);
  assert.equal(coeur.scenarioType, "impressionist_subjective_rhythm_production");
  assert.equal(coeur.sourceId, "manual_coeur_fidele_1923");
  assert.equal(coeur.sourceUrl, "https://www.cinematheque.fr/film/48086.html");
  assert.ok(coeur.premise.includes("Jean and Marie Epstein"));
  assert.ok(coeur.premise.includes("Pathé Consortium Cinéma"));
  assert.ok(coeur.premise.includes("Paul Guichard"));
  assert.ok(coeur.premise.includes("Léon Donnot and Henri Stuckert"));
  assert.ok(coeur.premise.includes("fairground sequence"));
  assert.ok(coeur.premise.includes("never as a measurable gameplay score"));
  assert.ok(coeur.requiredChoicesSeed.camera.includes("fairground_motion_fragments"));
  assert.ok(coeur.requiredChoicesSeed.editing.includes("rhythmic_fairground_montage"));
  assert.ok(coeur.requiredChoicesSeed.sound.includes("modern_restoration_music_not_original_soundtrack"));
  assert.ok(coeur.requiredChoicesSeed.themes.includes("photogenie_context"));
  assert.ok(coeur.learningGoals.some((goal) => goal.includes("Marie Epstein's documented screenplay role")));
  assert.ok(coeur.learningGoals.some((goal) => goal.includes("not as a universal style preset")));
  assert.ok(coeur.learningGoals.length >= 6);
  assert.ok(coeur.phases.length >= 9);

  const napoleon = chapterEightFrenchAvantGardeExpansionDefinitions.find((item) => item.id === "scenario_napoleon_1927");
  assert.ok(napoleon);
  assert.equal(napoleon.title, "Napoléon");
  assert.equal(napoleon.originalTitle, "Napoléon vu par Abel Gance");
  assert.equal(napoleon.year, 1927);
  assert.equal(napoleon.runtimeMins, 425);
  assert.equal(napoleon.scenarioType, "large_scale_experimental_polyvision_production");
  assert.equal(napoleon.sourceId, "manual_napoleon_1927");
  assert.equal(napoleon.sourceUrl, "https://www.cinematheque.fr/film/48685.html");
  assert.ok(napoleon.premise.includes("Jules Krüger, Jean-Paul Mundviller and Léonce-Henri Burel"));
  assert.ok(napoleon.premise.includes("Marguerite Beaugé"));
  assert.ok(napoleon.premise.includes("Polyvision"));
  assert.ok(napoleon.premise.includes("Opéra"));
  assert.ok(napoleon.premise.includes("Apollo"));
  assert.ok(napoleon.premise.includes("MGM"));
  assert.ok(napoleon.premise.includes("425-minute"));
  assert.ok(napoleon.premise.includes("not an assertion"));
  assert.ok(napoleon.requiredChoicesSeed.camera.includes("polyvision_three_camera_capture"));
  assert.ok(napoleon.requiredChoicesSeed.editing.includes("opera_apollo_mgm_version_control"));
  assert.ok(napoleon.requiredChoicesSeed.sound.includes("1935_sound_reedit_and_modern_scores_separate"));
  assert.ok(napoleon.learningGoals.some((goal) => goal.includes("three projection channels")));
  assert.ok(napoleon.learningGoals.some((goal) => goal.includes("never be mislabeled")));
  assert.ok(napoleon.learningGoals.length >= 6);
  assert.ok(napoleon.phases.length >= 9);
});
