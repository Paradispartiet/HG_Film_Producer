import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenSaintOmerExpansionDefinitions } from "./chapterNineteenSaintOmerExpansion.js";

test("Chapter 19 materializes Saint Omer as the auteur-festival rotation case", () => {
  assert.equal(chapterNineteenSaintOmerExpansionDefinitions.length, 1);
  const film = chapterNineteenSaintOmerExpansionDefinitions[0];
  assert.equal(film.id, "scenario_saint_omer_2022");
  assert.equal(film.title, "Saint Omer");
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 123);
  assert.deepEqual(film.directors, ["Alice Diop"]);

  assert.ok(film.scenarioType.includes("auteur_festival"));
  assert.ok(film.scenarioType.includes("trial_transcripts") && film.scenarioType.includes("chronological_courtroom"));
  assert.ok(film.scenarioType.includes("red_gemini_5k_full_frame") && film.scenarioType.includes("leitz_m_0_8"));
  assert.ok(film.scenarioType.includes("single_camera") && film.scenarioType.includes("natural_daylight"));
  assert.ok(film.scenarioType.includes("amrita_david_editorial_breathing") && film.scenarioType.includes("venice_grand_jury_prize"));

  assert.ok(film.premise.includes("123 minutes") && film.premise.includes("Srab Films"));
  assert.ok(film.premise.includes("Alice Diop, Amrita David and Marie NDiaye"));
  assert.ok(film.premise.includes("2016 trial") && film.premise.includes("documentary practice"));
  assert.ok(film.premise.includes("almost two years before photography"));
  assert.ok(film.premise.includes("ochre/wood/brown/rust/bronze"));
  assert.ok(film.premise.includes("Two months before shooting") && film.premise.includes("wood panelling"));
  assert.ok(film.premise.includes("RED Monstro") && film.premise.includes("RED Gemini"));
  assert.ok(film.premise.includes("5K full-frame") && film.premise.includes("Leitz M 0.8"));
  assert.ok(film.premise.includes("50mm") && film.premise.includes("Schneider HD Classic Soft 1/16"));
  assert.ok(film.premise.includes("1.85:1") && film.premise.includes("single-camera shoot"));
  assert.ok(film.premise.includes("twenty-minute single takes") && film.premise.includes("three-week Saint-Omer shoot"));
  assert.ok(film.premise.includes("ARRI SkyPanels") && film.premise.includes("Rosco DMG SL1s"));
  assert.ok(film.premise.includes("natural light through the windows") && film.premise.includes("kept a hand on the iris"));
  assert.ok(film.premise.includes("Yov Moor") && film.premise.includes("Mathilde Delacroix"));
  assert.ok(film.premise.includes("M141 in Paris") && film.premise.includes("skin tones"));
  assert.ok(film.premise.includes("internal breathing") && film.premise.includes("flashback structure"));
  assert.ok(film.premise.includes("Caroline Shaw") && film.premise.includes("Nina Simone"));
  assert.ok(film.premise.includes("exact production budget") && film.premise.includes("distribution economics"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("trial_language_research"));
  assert.ok(film.requiredChoicesSeed.screenplay.includes("documentary_fiction_boundary"));
  assert.ok(film.requiredChoicesSeed.camera.includes("red_gemini_5k_full_frame"));
  assert.ok(film.requiredChoicesSeed.camera.includes("single_camera") && film.requiredChoicesSeed.camera.includes("natural_daylight"));
  assert.ok(film.requiredChoicesSeed.editing.includes("internal_breathing") && film.requiredChoicesSeed.editing.includes("nle_storage_unknown"));
  assert.ok(film.requiredChoicesSeed.sound.includes("caroline_shaw") && film.requiredChoicesSeed.sound.includes("nina_simone"));
  assert.ok(film.requiredChoicesSeed.themes.includes("auteur_festival") && film.requiredChoicesSeed.themes.includes("documentary_fiction"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("auteur/festival rotation case")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("123-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("actual trial language")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("twenty-minute testimony takes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("chronological courtroom shooting")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("RED Gemini") && goal.includes("5K full frame")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Leitz M 0.8") && goal.includes("50mm")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("1.85:1")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("one-camera courtroom production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ARRI SkyPanels") && goal.includes("Astera tubes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("mostly with natural daylight")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("live iris response")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Yov Moor") && goal.includes("LUT")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Mathilde Delacroix") && goal.includes("M141")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Amrita David") && goal.includes("co-writer and editor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Caroline Shaw")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Nina Simone")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three-week Saint-Omer shoot")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register")));

  assert.ok(film.phases.find((phase) => phase.id === "court_location")?.player_task.includes("smaller brighter courthouse room"));
  assert.ok(film.phases.find((phase) => phase.id === "camera_tests")?.player_task.includes("Monstro/Primo"));
  assert.ok(film.phases.find((phase) => phase.id === "camera_package")?.player_task.includes("RED Gemini"));
  assert.ok(film.phases.find((phase) => phase.id === "single_camera")?.player_task.includes("two-camera courtroom coverage"));
  assert.ok(film.phases.find((phase) => phase.id === "daylight_plan")?.player_task.includes("large windows"));
  assert.ok(film.phases.find((phase) => phase.id === "live_iris")?.player_task.includes("iris"));
  assert.ok(film.phases.find((phase) => phase.id === "final_grade")?.player_task.includes("Mathilde Delacroix"));
  assert.ok(film.phases.find((phase) => phase.id === "editorial_breathing")?.player_task.includes("Amrita David"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("distribution economics"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 28);
});
