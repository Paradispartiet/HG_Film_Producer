import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenBrokebackMountainExpansionDefinitions } from "./chapterEighteenBrokebackMountainExpansion.js";

test("Chapter 18 materializes Brokeback Mountain as a source-first Alberta-location, 35mm, period-design and sound-post case", () => {
  assert.equal(chapterEighteenBrokebackMountainExpansionDefinitions.length, 1);
  const film = chapterEighteenBrokebackMountainExpansionDefinitions[0];
  assert.equal(film.id, "scenario_brokeback_mountain_2005");
  assert.equal(film.year, 2005);
  assert.equal(film.runtimeMins, 134);
  assert.deepEqual(film.directors, ["Ang Lee"]);

  assert.ok(film.scenarioType.includes("alberta_location") && film.scenarioType.includes("35mm") && film.scenarioType.includes("naturalistic_design"));
  assert.ok(film.premise.includes("24 May to early August 2004"));
  assert.ok(film.premise.includes("Canadian Rockies") && film.premise.includes("Cowley") && film.premise.includes("Fort MacLeod") && film.premise.includes("Calgary"));
  assert.ok(film.premise.includes("production geography is not story geography"));
  assert.ok(film.premise.includes("nearly seven years") && film.premise.includes("late 2003"));
  assert.ok(film.premise.includes("Richard Avedon") && film.premise.includes("1967 supermarket"));
  assert.ok(film.premise.includes("Arricam") && film.premise.includes("Cooke S4") && film.premise.includes("1.85:1"));
  assert.ok(film.premise.includes("EXR 50D 5245") && film.premise.includes("Vision 250D 5246") && film.premise.includes("Vision2 500T 5218") && film.premise.includes("Vision 500T 5279"));
  assert.ok(film.premise.includes("would not use a digital intermediate") && film.premise.includes("digital opticals") && film.premise.includes("some CGI was used in landscapes"));
  assert.ok(film.premise.includes("roughly 80 percent") && film.premise.includes("sleet") && film.premise.includes("hail"));
  assert.ok(film.premise.includes("Drew Kunin") && film.premise.includes("Peter Melnychuk"));
  assert.ok(film.premise.includes("Geraldine Peroni") && film.premise.includes("Dylan Tichenor"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_di_boundary"));
  assert.ok(film.requiredChoicesSeed.editing.includes("peroni_tichenor_shared_credit"));
  assert.ok(film.requiredChoicesSeed.sound.includes("song_budget_tradeoff"));
  assert.ok(film.requiredChoicesSeed.themes.includes("5245") && film.requiredChoicesSeed.themes.includes("5279"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("24 May to early August 2004")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("production geography") && goal.includes("story geography")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("1.85:1") && goal.includes("mountain height")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35mm Arricam") && goal.includes("Cooke S4")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("5245") && goal.includes("5246")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("5218") && goal.includes("5279")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("not to use a digital intermediate") && goal.includes("digital optical") && goal.includes("VFX")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("roughly 80 percent exterior") && goal.includes("weather")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("production sound, sound editorial, ADR and rerecording")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Geraldine Peroni") && goal.includes("Dylan Tichenor")));

  assert.ok(film.phases.find((phase) => phase.id === "story_production_geography")?.player_task.includes("Wyoming and Texas"));
  assert.ok(film.phases.find((phase) => phase.id === "stock_map")?.player_task.includes("5245") && film.phases.find((phase) => phase.id === "stock_map")?.player_task.includes("5279"));
  assert.ok(film.phases.find((phase) => phase.id === "no_di_boundary")?.player_task.includes("digital opticals"));
  assert.ok(film.phases.find((phase) => phase.id === "weather_contingency")?.player_task.includes("sleet") && film.phases.find((phase) => phase.id === "weather_contingency")?.player_task.includes("hail"));
  assert.ok(film.phases.find((phase) => phase.id === "editorial_handoff")?.player_task.includes("Geraldine Peroni") && film.phases.find((phase) => phase.id === "editorial_handoff")?.player_task.includes("Dylan Tichenor"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("shot-specific VFX methods"));

  assert.ok(film.learningGoals.length >= 45);
  assert.ok(film.phases.length >= 30);
});
