import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenEverythingEverywhereAllAtOnceExpansionDefinitions } from "./chapterNineteenEverythingEverywhereAllAtOnceExpansion.js";

test("Chapter 19 materializes Everything Everywhere All at Once as the independent low-mid-budget rotation case", () => {
  assert.equal(chapterNineteenEverythingEverywhereAllAtOnceExpansionDefinitions.length, 1);
  const film = chapterNineteenEverythingEverywhereAllAtOnceExpansionDefinitions[0];
  assert.equal(film.id, "scenario_everything_everywhere_all_at_once_2022");
  assert.equal(film.title, "Everything Everywhere All at Once");
  assert.equal(film.year, 2022);
  assert.equal(film.runtimeMins, 139);
  assert.deepEqual(film.directors, ["Daniel Kwan", "Daniel Scheinert"]);

  assert.ok(film.scenarioType.includes("independent_low_mid_budget"));
  assert.ok(film.scenarioType.includes("14m") && film.scenarioType.includes("38_day_shoot"));
  assert.ok(film.scenarioType.includes("alexa_mini") && film.scenarioType.includes("multi_lens"));
  assert.ok(film.scenarioType.includes("martial_club_previs"));
  assert.ok(film.scenarioType.includes("five_artist_after_effects"));
  assert.ok(film.scenarioType.includes("premiere_frameio_atmos"));

  assert.ok(film.premise.includes("139-minute") && film.premise.includes("$14 million"));
  assert.ok(film.premise.includes("Founders Bank") && film.premise.includes("mini-studio lot"));
  assert.ok(film.premise.includes("38 days") && film.premise.includes("30 days"));
  assert.ok(film.premise.includes("ALEXA Minis") && film.premise.includes("Action Verse"));
  assert.ok(film.premise.includes("Baltars") && film.premise.includes("Master Primes"));
  assert.ok(film.premise.includes("Todd-AO") && film.premise.includes("Laowa probe"));
  assert.ok(film.premise.includes("Le brothers") && film.premise.includes("fight previs"));
  assert.ok(film.premise.includes("Jason Hamer") && film.premise.includes("raccoon"));
  assert.ok(film.premise.includes("Zak Stoltz") && film.premise.includes("five-person core"));
  assert.ok(film.premise.includes("After Effects") && film.premise.includes("Blender"));
  assert.ok(film.premise.includes("Paul Rogers") && film.premise.includes("Frame.io"));
  assert.ok(film.premise.includes("Brent Kiser") && film.premise.includes("Dolby Atmos"));

  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_mini"));
  assert.ok(film.requiredChoicesSeed.editing.includes("premiere_pro"));
  assert.ok(film.requiredChoicesSeed.sound.includes("verse_jump_radio_language"));
  assert.ok(film.requiredChoicesSeed.themes.includes("independent_low_mid_budget"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("$14 million")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ALEXA Mini")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Martial Club")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("five-person core")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Premiere Pro")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Dolby Atmos")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("unresolved")));

  assert.ok(film.phases.find((phase) => phase.id === "mini_studio")?.player_task.includes("Simi Valley"));
  assert.ok(film.phases.find((phase) => phase.id === "fight_previs")?.player_task.includes("Le brothers"));
  assert.ok(film.phases.find((phase) => phase.id === "small_vfx_team")?.player_task.includes("small responsive team"));
  assert.ok(film.phases.find((phase) => phase.id === "editorial_system")?.player_task.includes("Premiere"));
  assert.ok(film.phases.find((phase) => phase.id === "atmos_mix")?.player_task.includes("Signature Post"));
  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 28);
});
