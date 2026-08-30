import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenFleeExpansionDefinitions } from "./chapterNineteenFleeExpansion.js";

test("Chapter 19 materializes Flee as a source-first animated-documentary production case", () => {
  assert.equal(chapterNineteenFleeExpansionDefinitions.length, 1);
  const film = chapterNineteenFleeExpansionDefinitions[0];
  assert.equal(film.id, "scenario_flee_2021");
  assert.equal(film.title, "Flee");
  assert.equal(film.originalTitle, "Flugt");
  assert.deepEqual(film.aliases, ["Flugt"]);
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 89);
  assert.deepEqual(film.directors, ["Jonas Poher Rasmussen"]);

  assert.ok(film.scenarioType.includes("animated_documentary") && film.scenarioType.includes("audio_first"));
  assert.ok(film.scenarioType.includes("storyboard_animatic") && film.scenarioType.includes("hand_drawn_2d"));
  assert.ok(film.scenarioType.includes("archive") && film.scenarioType.includes("abstract_memory"));
  assert.ok(film.scenarioType.includes("identity_protection") && film.scenarioType.includes("multistudio"));

  assert.ok(film.premise.includes("fifth source-first Chapter 19 Production Case"));
  assert.ok(film.premise.includes("89-minute") && film.premise.includes("Kenneth Ladekjær") && film.premise.includes("Janus Billeskov Jansen"));
  assert.ok(film.premise.includes("pseudonym Amin") && film.premise.includes("protected identity"));
  assert.ok(film.premise.includes("not proof that the testimony is fictional"));
  assert.ok(film.premise.includes("audio-first") && film.premise.includes("storyboard/rough-drawing material"));
  assert.ok(film.premise.includes("animatic be exact in length") && film.premise.includes("production-budget constraint"));
  assert.ok(film.premise.includes("standard 2D color layer") && film.premise.includes("black-and-white/abstract layer") && film.premise.includes("archival footage"));
  assert.ok(film.premise.includes("Sun Creature in Copenhagen") && film.premise.includes("Vivement Lundi in Rennes") && film.premise.includes("Studio Train-Train in Lille"));
  assert.ok(film.premise.includes("avoided rotoscoping as a total method") && film.premise.includes("observational fidelity and anonymization"));
  assert.ok(film.premise.includes("actual footage connected to Amin's memory") && film.premise.includes("documentary narrative"));
  assert.ok(film.premise.includes("Sound is treated as a continuity system") && film.premise.includes("Amin's voice"));
  assert.ok(film.premise.includes("archive licensing terms") && film.premise.includes("final mix routing"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("audio_interview_spine") && film.requiredChoicesSeed.screenplay.includes("anonymity_boundary"));
  assert.ok(film.requiredChoicesSeed.camera.includes("storyboard_as_virtual_camera") && film.requiredChoicesSeed.camera.includes("archive_material"));
  assert.ok(film.requiredChoicesSeed.editing.includes("animatic_exact_length") && film.requiredChoicesSeed.editing.includes("archive_discovery"));
  assert.ok(film.requiredChoicesSeed.sound.includes("voice_as_anchor") && film.requiredChoicesSeed.sound.includes("animation_archive_bridge"));
  assert.ok(film.requiredChoicesSeed.themes.includes("animated_documentary") && film.requiredChoicesSeed.themes.includes("multistudio_pipeline"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("fifth source-first Chapter 19 Production Case") && goal.includes("archival evidence")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("89-minute") && goal.includes("runtime anchor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("protect the real subject's identity") && goal.includes("testimony fictional")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("rotoscopes") && goal.includes("interpretation from reference")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("audio-first") && goal.includes("narrative spine")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("exact-length animatic") && goal.includes("economically")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three principal visual evidence modes") && goal.includes("archival footage")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("locating recognized real footage") && goal.includes("editing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Sun Creature") && goal.includes("Copenhagen")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Vivement Lundi") && goal.includes("Rennes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Studio Train-Train") && goal.includes("Lille")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("multi-studio production") && goal.includes("handoff")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("real voice") && goal.includes("documentary burden")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("sound as a bridge") && goal.includes("archival imagery")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Uno Helmersson") && goal.includes("Amin's voice")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("archive license terms")));

  assert.ok(film.phases.find((phase) => phase.id === "anonymity_strategy")?.player_task.includes("pseudonym"));
  assert.ok(film.phases.find((phase) => phase.id === "storyboard_camera")?.player_task.includes("framing"));
  assert.ok(film.phases.find((phase) => phase.id === "exact_length_animatic")?.player_task.includes("workload"));
  assert.ok(film.phases.find((phase) => phase.id === "abstract_memory_layer")?.player_task.includes("uncertain"));
  assert.ok(film.phases.find((phase) => phase.id === "rennes_background_comp")?.player_task.includes("Vivement Lundi"));
  assert.ok(film.phases.find((phase) => phase.id === "archive_animation_cut")?.player_task.includes("archive footage"));
  assert.ok(film.phases.find((phase) => phase.id === "sound_bridge")?.player_task.includes("archive"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("archive licensing"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
