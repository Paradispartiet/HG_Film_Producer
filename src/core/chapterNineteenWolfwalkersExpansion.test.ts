import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenWolfwalkersExpansionDefinitions } from "./chapterNineteenWolfwalkersExpansion.js";

test("Chapter 19 materializes Wolfwalkers as a source-first hand-drawn, graphic-system and bounded Wolfvision hybrid case", () => {
  assert.equal(chapterNineteenWolfwalkersExpansionDefinitions.length, 1);
  const film = chapterNineteenWolfwalkersExpansionDefinitions[0];
  assert.equal(film.id, "scenario_wolfwalkers_2020");
  assert.equal(film.title, "Wolfwalkers");
  assert.equal(film.originalTitle, "Wolfwalkers");
  assert.equal(film.year, 2020);
  assert.equal(film.runtimeMins, 103);
  assert.deepEqual(film.directors, ["Tomm Moore", "Ross Stewart"]);

  assert.ok(film.scenarioType.includes("hand_drawn_2d") && film.scenarioType.includes("wolfvision"));
  assert.ok(film.scenarioType.includes("3d_previs") && film.scenarioType.includes("vr") && film.scenarioType.includes("blender"));
  assert.ok(film.scenarioType.includes("graphite_paper") && film.scenarioType.includes("transnational_animation") && film.scenarioType.includes("apple_tv"));

  assert.ok(film.premise.includes("third source-first Chapter 19 Production Case") && film.premise.includes("predominantly hand-drawn 2D"));
  assert.ok(film.premise.includes("103-minute") && film.premise.includes("Tomm Moore") && film.premise.includes("Ross Stewart"));
  assert.ok(film.premise.includes("BFI labels the record 2019") && film.premise.includes("December 11, 2020"));
  assert.ok(film.premise.includes("Cartoon Saloon") && film.premise.includes("Melusine Productions") && film.premise.includes("Folivari"));
  assert.ok(film.premise.includes("block-print") && film.premise.includes("ink, watercolor and scribbly pencil"));
  assert.ok(film.premise.includes("linework becomes more expressive with character mood"));
  assert.ok(film.premise.includes("Wolfvision is treated as a bounded special pipeline") && film.premise.includes("not evidence that Wolfwalkers became a 3D feature"));
  assert.ok(film.premise.includes("Eimhin McNamara") && film.premise.includes("3D previs") && film.premise.includes("VR blocking"));
  assert.ok(film.premise.includes("Blender camera control and cleanup") && film.premise.includes("Grease Pencil"));
  assert.ok(film.premise.includes("printing digital linework as a light guide") && film.premise.includes("graphite on paper") && film.premise.includes("scanning and compositing"));
  assert.ok(film.premise.includes("roughly three minutes") && film.premise.includes("22-month full-production") && film.premise.includes("18 months"));
  assert.ok(film.premise.includes("almost three years") && film.premise.includes("differently scoped testimonies"));
  assert.ok(film.premise.includes("five animatics across about a year and a half") && film.premise.includes("first proper story team"));
  assert.ok(film.premise.includes("Apple TV+ distribution proves who financed") && film.premise.includes("exact budget") && film.premise.includes("final mix topology"));

  assert.ok(film.requiredChoicesSeed.screenplay.includes("five_animatics") && film.requiredChoicesSeed.screenplay.includes("release_year_provenance"));
  assert.ok(film.requiredChoicesSeed.camera.includes("wolfvision_subjective_camera") && film.requiredChoicesSeed.camera.includes("blender_camera_control"));
  assert.ok(film.requiredChoicesSeed.editing.includes("paper_scan_composite") && film.requiredChoicesSeed.editing.includes("dual_visual_system_continuity"));
  assert.ok(film.requiredChoicesSeed.themes.includes("hand_drawn_2d") && film.requiredChoicesSeed.themes.includes("eimhin_mcnamara") && film.requiredChoicesSeed.themes.includes("apple_tv_plus"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("third Chapter 19 Production Case") && goal.includes("hand-drawn 2D")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("BFI 103-minute") && goal.includes("runtime anchor")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("BFI labels its catalogue record 2019") && goal.includes("2020 as its release-year convention")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Apple-listed production companies") && goal.includes("financing shares")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("hand drawing") && goal.includes("anti-CG slogan")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("block-print-like") && goal.includes("Kilkenny")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("forest") && goal.includes("ink, watercolor and pencil")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("linework changes with character mood")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Wolfvision") && goal.includes("bounded subjective-camera subsystem")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Eimhin McNamara") && goal.includes("conflicting secondary references")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Blender") && goal.includes("not the sole software platform")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Grease Pencil") && goal.includes("exact version")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("printed as a light guide") && goal.includes("hand tracing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("graphite/pencil") && goal.includes("scanning and compositing")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("hand-drawn final image") && goal.includes("digital production tools")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("3D previs") && goal.includes("3D-animated feature")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("roughly three minutes") && goal.includes("directors")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("22-month") && goal.includes("differently scoped testimony")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("12-frames-per-second") && goal.includes("Wolfvision")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("five animatics") && goal.includes("year and a half")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Apple TV+") && goal.includes("circulation history")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("animation plurality") && goal.includes("real-time")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("uncertainty register") && goal.includes("final mix")));

  assert.ok(film.phases.find((phase) => phase.id === "year_runtime_provenance")?.player_task.includes("BFI's 2019 catalogue label"));
  assert.ok(film.phases.find((phase) => phase.id === "animatic_iterations")?.player_task.includes("five-animatic"));
  assert.ok(film.phases.find((phase) => phase.id === "city_graphic_system")?.player_task.includes("block-print-like"));
  assert.ok(film.phases.find((phase) => phase.id === "forest_graphic_system")?.player_task.includes("watercolor"));
  assert.ok(film.phases.find((phase) => phase.id === "wolfvision_scope")?.player_task.includes("refuse to generalize"));
  assert.ok(film.phases.find((phase) => phase.id === "blender_handoff")?.player_task.includes("whole-film pipeline"));
  assert.ok(film.phases.find((phase) => phase.id === "graphite_render")?.player_task.includes("paper"));
  assert.ok(film.phases.find((phase) => phase.id === "schedule_testimony")?.player_task.includes("differently scoped"));
  assert.ok(film.phases.find((phase) => phase.id === "platform_release")?.player_task.includes("December 11, 2020"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("software versions"));
  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
