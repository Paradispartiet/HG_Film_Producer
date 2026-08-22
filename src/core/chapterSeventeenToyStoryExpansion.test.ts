import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenToyStoryExpansionDefinitions } from "./chapterSeventeenToyStoryExpansion.js";

test("Chapter 17 materializes Toy Story as a source-first software-driven feature-animation production", () => {
  assert.equal(chapterSeventeenToyStoryExpansionDefinitions.length, 1);
  const film = chapterSeventeenToyStoryExpansionDefinitions[0];
  assert.equal(film.id, "scenario_toy_story_1995");
  assert.equal(film.year, 1995);
  assert.equal(film.runtimeMins, 81);
  assert.deepEqual(film.directors, ["John Lasseter"]);
  assert.equal(film.sourceId, "afi_toy_story_1995");
  assert.ok(film.scenarioType.includes("first_full_cg_feature") && film.scenarioType.includes("menv") && film.scenarioType.includes("renderman_reyes"));

  assert.ok(film.premise.includes("Disney/Pixar agreement") && film.premise.includes("at least one computer-generated animated movie"));
  assert.ok(film.premise.includes("Ralph Guggenheim") && film.premise.includes("Bonnie Arnold") && film.premise.includes("Joss Whedon") && film.premise.includes("Joe Ranft"));
  assert.ok(film.premise.includes("Ralph Eggleston") && film.premise.includes("Robert Gordon") && film.premise.includes("Lee Unkrich") && film.premise.includes("William Reeves") && film.premise.includes("Pete Docter"));
  assert.ok(film.premise.includes("two weeks") && film.premise.includes("story-development") && film.premise.includes("Black Friday"));
  assert.ok(film.premise.includes("Marionette") && film.premise.includes("Menv") && film.premise.includes("specific Toy Story software build"));
  assert.ok(film.premise.includes("RenderMan") && film.premise.includes("REYES") && film.premise.includes("renderer settings"));
  assert.ok(film.premise.includes("Galyn Susman") && film.premise.includes("colorscripts") && film.premise.includes("motion blur"));
  assert.ok(film.premise.includes("80-81") && film.premise.includes("89 minutes") && film.premise.includes("81 minutes as canonical"));
  assert.ok(film.premise.includes("Dolby Spectral Recording") && film.premise.includes("Gary Rydstrom") && film.premise.includes("Randy Newman"));
  assert.ok(film.premise.includes("Toy Story 2") && film.premise.includes("entirely created, mastered and exhibited digitally"));
  assert.ok(film.premise.includes("Do not invent budget figures") && film.premise.includes("render-farm counts") && film.premise.includes("software version numbers"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Disney/Pixar") && goal.includes("software demo")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("two-week rethink") && goal.includes("story approval")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Menv/Marionette") && goal.includes("RenderMan/REYES")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("REYES") && goal.includes("shader networks")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("colorscripts") && goal.includes("final lighting")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("motion blur") && goal.includes("compute totals")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("80-81/89-minute") && goal.includes("81-minute")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Toy Story 2") && goal.includes("1999")));

  const agreement = film.phases.find((phase) => phase.id === "disney_pixar_agreement");
  assert.ok(agreement?.player_task.includes("1990-91") && agreement.player_task.includes("contract economics"));
  const story = film.phases.find((phase) => phase.id === "black_friday_rethink");
  assert.ok(story?.player_task.includes("two-week") && story.player_task.includes("technology failure"));
  const animation = film.phases.find((phase) => phase.id === "modeling_and_animation");
  assert.ok(animation?.player_task.includes("Menv/Marionette") && animation.player_task.includes("software build numbers"));
  const rendering = film.phases.find((phase) => phase.id === "renderman_reyes");
  assert.ok(rendering?.player_task.includes("RenderMan/REYES") && rendering.player_task.includes("machine counts") && rendering.player_task.includes("render-hour"));
  const release = film.phases.find((phase) => phase.id === "release_and_digital_boundary");
  assert.ok(release?.player_task.includes("81 minutes") && release.player_task.includes("Toy Story 2") && release.player_task.includes("downstream"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_camera_lens_stock_or_virtual_camera_settings"));
  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_microphone_foley_adr_daw_or_mix_layout"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
