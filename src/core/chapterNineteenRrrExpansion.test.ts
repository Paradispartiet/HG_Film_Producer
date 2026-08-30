import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenRrrExpansionDefinitions } from "./chapterNineteenRrrExpansion.js";

test("Chapter 19 materializes RRR as the regional-global rotation case", () => {
  assert.equal(chapterNineteenRrrExpansionDefinitions.length, 1);
  const film = chapterNineteenRrrExpansionDefinitions[0];
  assert.equal(film.id, "scenario_rrr_2022");
  assert.equal(film.title, "RRR");
  assert.equal(film.originalTitle, "RRR");
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 180);
  assert.deepEqual(film.directors, ["S.S. Rajamouli"]);

  assert.ok(film.scenarioType.includes("regional_global") && film.scenarioType.includes("telugu"));
  assert.ok(film.scenarioType.includes("alexa_lf") && film.scenarioType.includes("signature_primes"));
  assert.ok(film.scenarioType.includes("unreal_previs") && film.scenarioType.includes("stuntvis"));
  assert.ok(film.scenarioType.includes("miniatures") && film.scenarioType.includes("vfx"));
  assert.ok(film.scenarioType.includes("covid_continuity") && film.scenarioType.includes("multilingual_distribution"));

  assert.ok(film.premise.includes("180-minute") && film.premise.includes("Telugu and English"));
  assert.ok(film.premise.includes("ALEXA LF") && film.premise.includes("Signature Primes"));
  assert.ok(film.premise.includes("four years") && film.premise.includes("camera-report"));
  assert.ok(film.premise.includes("Unreal Engine") && film.premise.includes("stunt visualization"));
  assert.ok(film.premise.includes("one ALEXA LF") && film.premise.includes("two or at most three cameras"));
  assert.ok(film.premise.includes("full-size upper and lower bridge sets") && film.premise.includes("miniature sections"));
  assert.ok(film.premise.includes("2,800 VFX shots") && film.premise.includes("more than a dozen studios"));
  assert.ok(film.premise.includes("213 shots") && film.premise.includes("digidouble"));
  assert.ok(film.premise.includes("more than 300 shooting days") && film.premise.includes("Hyderabad, Bulgaria and Ukraine"));
  assert.ok(film.premise.includes("exact final negative/runtime variants") && film.premise.includes("territory-by-territory rights terms"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("telugu_regional_industry_anchor"));
  assert.ok(film.requiredChoicesSeed.camera.includes("arri_alexa_lf") && film.requiredChoicesSeed.camera.includes("mostly_single_camera"));
  assert.ok(film.requiredChoicesSeed.editing.includes("stuntvis_and_mock_shoots") && film.requiredChoicesSeed.editing.includes("pandemic_continuity_management"));
  assert.ok(film.requiredChoicesSeed.sound.includes("original_telugu_dialogue") && film.requiredChoicesSeed.sound.includes("final_mix_chain_unknown"));
  assert.ok(film.requiredChoicesSeed.themes.includes("regional_global") && film.requiredChoicesSeed.themes.includes("telugu_cinema"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("regional/global rotation case") && goal.includes("Indian cinema")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Telugu cinema") && goal.includes("Hyderabad-centered")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("180-minute") && goal.includes("DVV Entertainments")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ALEXA LF") && goal.includes("Signature Primes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("one principal camera") && goal.includes("production scale")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Unreal Engine") && goal.includes("virtually produced")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("stunt visualization") && goal.includes("rehearsal photography")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("bridge rescue") && goal.includes("miniature")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("practical-versus-digital binary")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Sabu Cyril") && goal.includes("rigs")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2,800 VFX shots") && goal.includes("more than a dozen studios")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Digital Domain") && goal.includes("213 shots")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("COVID-19 interruption") && goal.includes("continuity")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("camera-report book") && goal.includes("exposure")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("more than 300 shooting days") && goal.includes("secondary")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Hindi Netflix") && goal.includes("original Telugu")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("budget headlines") && goal.includes("verified craft claims")));

  assert.ok(film.phases.find((phase) => phase.id === "regional_origin")?.player_task.includes("Telugu-language"));
  assert.ok(film.phases.find((phase) => phase.id === "large_format")?.player_task.includes("ALEXA LF"));
  assert.ok(film.phases.find((phase) => phase.id === "previs")?.player_task.includes("Unreal Engine"));
  assert.ok(film.phases.find((phase) => phase.id === "bridge_hybrid")?.player_task.includes("miniature"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_supervision")?.player_task.includes("multi-studio"));
  assert.ok(film.phases.find((phase) => phase.id === "camera_reports")?.player_task.includes("exposure"));
  assert.ok(film.phases.find((phase) => phase.id === "regional_global_distribution")?.player_task.includes("Telugu industrial origin"));
  assert.ok(film.phases.find((phase) => phase.id === "delivery_review")?.player_task.includes("regional origin"));
  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 28);
});
