import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenDuneExpansionDefinitions } from "./chapterNineteenDuneExpansion.js";

test("Chapter 19 materializes Dune as a source-first large-format, practical-VFX and hybrid-finish production case", () => {
  assert.equal(chapterNineteenDuneExpansionDefinitions.length, 1);
  const film = chapterNineteenDuneExpansionDefinitions[0];
  assert.equal(film.id, "scenario_dune_2021");
  assert.equal(film.title, "Dune");
  assert.equal(film.originalTitle, "Dune");
  assert.deepEqual(film.aliases, ["Dune: Part One"]);
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 155);
  assert.deepEqual(film.directors, ["Denis Villeneuve"]);

  assert.ok(film.scenarioType.includes("large_format_digital") && film.scenarioType.includes("alexa_lf"));
  assert.ok(film.scenarioType.includes("ultra_vista") && film.scenarioType.includes("h_series") && film.scenarioType.includes("imax"));
  assert.ok(film.scenarioType.includes("hybrid_filmout_35mm") && film.scenarioType.includes("fotokem"));
  assert.ok(film.scenarioType.includes("sandscreen") && film.scenarioType.includes("dneg") && film.scenarioType.includes("remote_editorial"));

  assert.ok(film.premise.includes("fourth source-first Chapter 19 Production Case"));
  assert.ok(film.premise.includes("155-minute") && film.premise.includes("Jon Spaihts") && film.premise.includes("Eric Roth"));
  assert.ok(film.premise.includes("ALEXA LF") && film.premise.includes("ALEXA Mini LF prototype"));
  assert.ok(film.premise.includes("Panavision Ultra Vista") && film.premise.includes("H-series"));
  assert.ok(film.premise.includes("laser-record the timed digital master") && film.premise.includes("Kodak Vision3 5254"));
  assert.ok(film.premise.includes("not evidence that Dune was photographed on 35mm negative"));
  assert.ok(film.premise.includes("February 2018") && film.premise.includes("125 to 130 illustrations"));
  assert.ok(film.premise.includes("helicopters used as reference/plate foundations for ornithopters"));
  assert.ok(film.premise.includes("gasoline flames") && film.premise.includes("sand-colored screens"));
  assert.ok(film.premise.includes("not evidence that no blue or green screens were used anywhere"));
  assert.ok(film.premise.includes("Nuke as DNEG's compositing tool") && film.premise.includes("whole-film software map"));
  assert.ok(film.premise.includes("Budapest/on set") && film.premise.includes("distributed remote collaboration"));
  assert.ok(film.premise.includes("does not rewrite principal photography as a pandemic-era production"));
  assert.ok(film.premise.includes("final mix topology") && film.premise.includes("distribution proves production financing"));

  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_lf") && film.requiredChoicesSeed.camera.includes("panavision_ultra_vista"));
  assert.ok(film.requiredChoicesSeed.editing.includes("pandemic_remote_post") && film.requiredChoicesSeed.editing.includes("hybrid_finish_handoff"));
  assert.ok(film.requiredChoicesSeed.sound.includes("mark_mangini") && film.requiredChoicesSeed.sound.includes("theo_green"));
  assert.ok(film.requiredChoicesSeed.themes.includes("sandscreen") && film.requiredChoicesSeed.themes.includes("kodak_vision3_5254"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("fourth source-first Chapter 19 Production Case") && goal.includes("photochemical/digital finishing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("155-minute") && goal.includes("runtime anchor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ALEXA LF") && goal.includes("ALEXA Mini LF prototype")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Ultra Vista") && goal.includes("H-series")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("photographed digitally") && goal.includes("film became a material part")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Kodak Vision3 5254") && goal.includes("camera negative")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("shot on 35mm") && goal.includes("passed through film")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("February 2018") && goal.includes("production-design")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("125 to 130 illustrations") && goal.includes("complete asset count")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("helicopter photography") && goal.includes("ornithopter")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("gasoline flames") && goal.includes("spaceport attack")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("sandscreens") && goal.includes("desert light")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("blue- or green-screen") && goal.includes("production")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Nuke") && goal.includes("whole-film software stack")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Budapest/on set") && goal.includes("Los Angeles")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("pandemic remote work") && goal.includes("principal photography")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("temporary sound experiments") && goal.includes("narrative ideas")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("final mix topology")));

  assert.ok(film.phases.find((phase) => phase.id === "large_format_capture")?.player_task.includes("ALEXA LF"));
  assert.ok(film.phases.find((phase) => phase.id === "sandscreen")?.player_task.includes("desert light"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_vendor_boundary")?.player_task.includes("DNEG-specific"));
  assert.ok(film.phases.find((phase) => phase.id === "remote_post")?.player_task.includes("pandemic"));
  assert.ok(film.phases.find((phase) => phase.id === "filmout_5254")?.player_task.includes("Kodak Vision3 5254"));
  assert.ok(film.phases.find((phase) => phase.id === "scan_back")?.player_task.includes("photochemical"));
  assert.ok(film.phases.find((phase) => phase.id === "theatrical_delivery")?.player_task.includes("IMAX"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("sound chains"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
