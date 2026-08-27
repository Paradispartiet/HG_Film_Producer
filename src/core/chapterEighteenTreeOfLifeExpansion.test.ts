import assert from "node:assert/strict";
import test from "node:test";

import { chapterEighteenTreeOfLifeExpansionDefinitions } from "./chapterEighteenTreeOfLifeExpansion.js";

test("Chapter 18 materializes The Tree of Life as a source-first photochemical, available-light, 4K-DI and hybrid-science-VFX case", () => {
  assert.equal(chapterEighteenTreeOfLifeExpansionDefinitions.length, 1);
  const film = chapterEighteenTreeOfLifeExpansionDefinitions[0];
  assert.equal(film.id, "scenario_tree_of_life_2011");
  assert.equal(film.year, 2011);
  assert.equal(film.runtimeMins, 138);
  assert.deepEqual(film.directors, ["Terrence Malick"]);
  assert.ok(film.scenarioType.includes("35mm") && film.scenarioType.includes("65mm") && film.scenarioType.includes("imax"));
  assert.ok(film.scenarioType.includes("available_light") && film.scenarioType.includes("4k_di"));
  assert.ok(film.premise.includes("ARRI LT and 235") && film.premise.includes("Panavision camera for 65 mm scenes"));
  assert.ok(film.premise.includes("ARRI Master Prime") && film.premise.includes("Kodak Vision2 500T 5218") && film.premise.includes("200T 5217"));
  assert.ok(film.premise.includes("two or three acknowledged exceptions") && film.premise.includes("HMI-assisted church interior"));
  assert.ok(film.premise.includes("three matched houses") && film.premise.includes("more than 10,000 children"));
  assert.ok(film.premise.includes("Hank Corwin") && film.premise.includes("Mark Yoshikawa") && film.premise.includes("Billy Weber"));
  assert.ok(film.premise.includes("Douglas Trumbull") && film.premise.includes("Dr. Volker Bromm") && film.premise.includes("NCSA"));
  assert.ok(film.premise.includes("cannot truthfully be reduced either to CGI or to no-CGI"));
  assert.ok(film.premise.includes("LaserPacific") && film.premise.includes("EFilm") && film.premise.includes("full 4K DI path"));
  assert.ok(film.requiredChoicesSeed.camera.includes("limited_hmi_exceptions"));
  assert.ok(film.requiredChoicesSeed.camera.includes("other_unit_format_boundary"));
  assert.ok(film.requiredChoicesSeed.editing.includes("five_editor_credit_integrity"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("35 mm, regular 65 mm and IMAX") && goal.includes("shot-level")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("two or three exceptions") && goal.includes("church")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("more than 10,000 children") && goal.includes("AFI")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("five credited editors") || goal.includes("all five credited editors")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("without CGI") && goal.includes("simulation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Population III") && goal.includes("NCSA")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("4K DI") && goal.includes("LaserPacific") && goal.includes("EFilm")));
  assert.ok(film.phases.find((phase) => phase.id === "lighting_exceptions")?.player_task.includes("HMI-assisted church"));
  assert.ok(film.phases.find((phase) => phase.id === "matched_houses")?.player_task.includes("three houses"));
  assert.ok(film.phases.find((phase) => phase.id === "vfx_hybrid")?.player_task.includes("all-CGI") && film.phases.find((phase) => phase.id === "vfx_hybrid")?.player_task.includes("no-CGI"));
  assert.ok(film.phases.find((phase) => phase.id === "unknowns_register")?.player_task.includes("editor-to-sequence"));
  assert.ok(film.learningGoals.length >= 50);
  assert.ok(film.phases.length >= 30);
});
