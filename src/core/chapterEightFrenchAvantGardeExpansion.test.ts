import assert from "node:assert/strict";
import test from "node:test";

import { chapterEightFrenchAvantGardeExpansionDefinitions } from "./chapterEightFrenchAvantGardeExpansion.js";

test("Chapter 8 materializes Coeur fidele as a distinct French Impressionist production case", () => {
  assert.equal(chapterEightFrenchAvantGardeExpansionDefinitions.length, 1);
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
});
