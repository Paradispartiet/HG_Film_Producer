import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenSonOfSaulExpansionDefinitions } from "./chapterEighteenSonOfSaulExpansion.js";

test("Chapter 18 materializes Son of Saul as a source-first 35mm photochemical, restricted-viewpoint and offscreen-sound production case", () => {
  assert.equal(chapterEighteenSonOfSaulExpansionDefinitions.length, 1);
  const film = chapterEighteenSonOfSaulExpansionDefinitions[0];
  assert.equal(film.id, "scenario_son_of_saul_2015");
  assert.equal(film.originalTitle, "Saul fia");
  assert.equal(film.year, 2015);
  assert.equal(film.runtimeMins, 107);
  assert.deepEqual(film.directors, ["László Nemes"]);

  assert.ok(film.scenarioType.includes("photochemical_35mm") && film.scenarioType.includes("offscreen_sound") && film.scenarioType.includes("representation_ethics"));
  assert.ok(film.premise.includes("Sonderkommando testimony") && film.premise.includes("Gideon Greif") && film.premise.includes("Zoltán Vági"));
  assert.ok(film.premise.includes("did not enter the gas chamber during killing") && film.premise.includes("blur, fragments and offscreen space"));
  assert.ok(film.premise.includes("traditional 35mm capture and photochemical processing at every stage"));
  assert.ok(film.premise.includes("40mm Zeiss Master Prime") && film.premise.includes("T2.8-T4.0") && film.premise.includes("1.37:1"));
  assert.ok(film.premise.includes("four-perf 35mm KODAK VISION3 500T 5219") && film.premise.includes("28-day Hungarian shoot"));
  assert.ok(film.premise.includes("85 finished shots across 107 minutes") && film.premise.includes("28,000 metres/92,000 feet"));
  assert.ok(film.premise.includes("one-stop push processing") && film.premise.includes("projected film dailies each day"));
  assert.ok(film.premise.includes("did not rebuild Auschwitz") && film.premise.includes("near-360-degree movement"));
  assert.ok(film.premise.includes("did not use a digital intermediate") && film.premise.includes("negative cutting") && film.premise.includes("DCP matched to the 35mm print"));
  assert.ok(film.premise.includes("cutting in camera") && film.premise.includes("difficult editorial work for Taponier"));
  assert.ok(film.premise.includes("sound can replace missing images") && film.premise.includes("sensational effects showcase"));
  assert.ok(film.premise.includes("Do not claim 35mm is inherently more truthful than digital"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("sonderkommando_testimony_research"));
  assert.ok(film.requiredChoicesSeed.camera.includes("four_perf_35mm_500t"));
  assert.ok(film.requiredChoicesSeed.camera.includes("single_40mm_master_prime"));
  assert.ok(film.requiredChoicesSeed.editing.includes("negative_cut_color_time"));
  assert.ok(film.requiredChoicesSeed.sound.includes("sound_replaces_missing_images"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("photochemical countercurrent")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("more truthful") && goal.includes("digital")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("gas chamber") && goal.includes("refused")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("40mm Zeiss Master Prime")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("85-shot/107-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("DCP matched") && goal.includes("DI workflow")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("offscreen space")));

  const research = film.phases.find((phase) => phase.id === "research_record");
  assert.ok(research?.player_task.includes("Sonderkommando testimony") && research.player_task.includes("fictional invention"));
  const boundary = film.phases.find((phase) => phase.id === "representation_boundary");
  assert.ok(boundary?.player_task.includes("refusal to depict killing inside the gas chamber") && boundary.player_task.includes("offscreen sound"));
  const set = film.phases.find((phase) => phase.id === "functional_set");
  assert.ok(set?.player_task.includes("changing-room") && set.player_task.includes("full-scale literal replica"));
  const lens = film.phases.find((phase) => phase.id === "single_lens");
  assert.ok(lens?.player_task.includes("40mm Master Prime") && lens.player_task.includes("1.37"));
  const dailies = film.phases.find((phase) => phase.id === "film_dailies");
  assert.ok(dailies?.player_task.includes("printed dailies") && dailies.player_task.includes("grain"));
  const finish = film.phases.find((phase) => phase.id === "negative_finish");
  assert.ok(finish?.player_task.includes("negative cutting") && finish.player_task.includes("no undocumented DI step"));
  const sound = film.phases.find((phase) => phase.id === "offscreen_sound");
  assert.ok(sound?.player_task.includes("offscreen events") && sound.player_task.includes("gratuitously"));
  const method = film.phases.find((phase) => phase.id === "method_boundary");
  assert.ok(method?.player_task.includes("total historical access") && method.player_task.includes("documentary truth"));

  assert.ok(film.learningGoals.length >= 30);
  assert.ok(film.phases.length >= 19);
});
