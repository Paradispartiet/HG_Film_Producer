import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenSoulExpansionDefinitions } from "./chapterNineteenSoulExpansion.js";

test("Chapter 19 materializes Soul as a source-first dual-world animation, representation and remote-completion case", () => {
  assert.equal(chapterNineteenSoulExpansionDefinitions.length, 1);
  const film = chapterNineteenSoulExpansionDefinitions[0];
  assert.equal(film.id, "scenario_soul_2020");
  assert.equal(film.title, "Soul");
  assert.equal(film.originalTitle, "Soul");
  assert.equal(film.year, 2020);
  assert.equal(film.runtimeMins, 100);
  assert.deepEqual(film.directors, ["Pete Docter"]);

  assert.ok(film.scenarioType.includes("cg_animation") && film.scenarioType.includes("dual_world"));
  assert.ok(film.scenarioType.includes("black_cultural_authenticity") && film.scenarioType.includes("jazz_performance"));
  assert.ok(film.scenarioType.includes("linework") && film.scenarioType.includes("remote_completion") && film.scenarioType.includes("disney_plus"));

  assert.ok(film.premise.includes("100-minute") && film.premise.includes("Pete Docter") && film.premise.includes("Dana Murray"));
  assert.ok(film.premise.includes("Ian Megibben") && film.premise.includes("Steve Pilcher") && film.premise.includes("Kevin Nolting"));
  assert.ok(film.premise.includes("March 16, 2020") && film.premise.includes("approximately seven weeks") && film.premise.includes("completed on time the following month"));
  assert.ok(film.premise.includes("remote completion") && film.premise.includes("not that the whole film was produced remotely"));
  assert.ok(film.premise.includes("New York") && film.premise.includes("Great Before") && film.premise.includes("created from scratch"));
  assert.ok(film.premise.includes("Bradford Young") && film.premise.includes("Black skin") && film.premise.includes("Roy DeCarava"));
  assert.ok(film.premise.includes("2.39:1") && film.premise.includes("new line-work technique") && film.premise.includes("living-line"));
  assert.ok(film.premise.includes("culture trust") && film.premise.includes("Black hair") && film.premise.includes("barbershop"));
  assert.ok(film.premise.includes("Jon Batiste") && film.premise.includes("multiple-camera reference") && film.premise.includes("illuminated keys"));
  assert.ok(film.premise.includes("Trent Reznor") && film.premise.includes("Atticus Ross") && film.premise.includes("Great Before score"));
  assert.ok(film.premise.includes("effects work was still active") && film.premise.includes("shifted home"));
  assert.ok(film.premise.includes("exact renderer versions") && film.premise.includes("internal remote-work infrastructure") && film.premise.includes("final mix topology"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("remote_completion_not_remote_origin") && film.requiredChoicesSeed.screenplay.includes("cultural_consultation"));
  assert.ok(film.requiredChoicesSeed.camera.includes("bradford_young_consultation") && film.requiredChoicesSeed.camera.includes("black_skin_lighting") && film.requiredChoicesSeed.camera.includes("2_39_frame"));
  assert.ok(film.requiredChoicesSeed.editing.includes("kevin_nolting") && film.requiredChoicesSeed.editing.includes("development_to_final_mix") && film.requiredChoicesSeed.editing.includes("remote_completion"));
  assert.ok(film.requiredChoicesSeed.sound.includes("jon_batiste") && film.requiredChoicesSeed.sound.includes("trent_reznor") && film.requiredChoicesSeed.sound.includes("atticus_ross"));
  assert.ok(film.requiredChoicesSeed.themes.includes("cg_animation") && film.requiredChoicesSeed.themes.includes("linework") && film.requiredChoicesSeed.themes.includes("disney_plus"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("second Chapter 19 Production Case") && goal.includes("remote-completion")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("AFI's 100-minute") && goal.includes("runtime anchor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("March 16, 2020") && goal.includes("approximately seven weeks")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("wholly produced remotely")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Disney+ distribution") && goal.includes("circulation history")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("New York") && goal.includes("Great Before") && goal.includes("different design")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("2.39:1") && goal.includes("documented presentation choice")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("new line-work technique") && goal.includes("facial and hand clarity")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("living-line") && goal.includes("counselors")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Bradford Young") && goal.includes("Black skin tones")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Roy DeCarava") && goal.includes("visual research")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("culture trust") && goal.includes("feedback system")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Jon Batiste") && goal.includes("piano-performance reference")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("multiple-camera/illuminated-key") && goal.includes("software implementation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Trent Reznor") && goal.includes("Atticus Ross") && goal.includes("score composers")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kevin Nolting") && goal.includes("development through final mix")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("effects work was still active") && goal.includes("shifted home")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("VPN architecture") && goal.includes("render-farm routing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("animation plurality") && goal.includes("CG realism")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("MIDI implementation") && goal.includes("final mix topology")));

  assert.ok(film.phases.find((phase) => phase.id === "remote_chronology")?.player_task.includes("March 16"));
  assert.ok(film.phases.find((phase) => phase.id === "cultural_trust")?.player_task.includes("iterative representation feedback"));
  assert.ok(film.phases.find((phase) => phase.id === "dual_world_design")?.player_task.includes("Earth and Great Before"));
  assert.ok(film.phases.find((phase) => phase.id === "black_skin_lighting")?.player_task.includes("Bradford Young"));
  assert.ok(film.phases.find((phase) => phase.id === "linework_system")?.player_task.includes("line-work innovation"));
  assert.ok(film.phases.find((phase) => phase.id === "piano_mapping")?.player_task.includes("illuminated-key"));
  assert.ok(film.phases.find((phase) => phase.id === "jazz_score_boundary")?.player_task.includes("Batiste") && film.phases.find((phase) => phase.id === "jazz_score_boundary")?.player_task.includes("Reznor/Ross"));
  assert.ok(film.phases.find((phase) => phase.id === "remote_effects")?.player_task.includes("effects work remained active"));
  assert.ok(film.phases.find((phase) => phase.id === "platform_release")?.player_task.includes("December 25 Disney+"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("MIDI implementation") && film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("mix topology"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});