import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineteenTitaneExpansionDefinitions } from "./chapterNineteenTitaneExpansion.js";

test("Chapter 19 materializes Titane as the auteur-festival rotation case", () => {
  assert.equal(chapterNineteenTitaneExpansionDefinitions.length, 1);
  const film = chapterNineteenTitaneExpansionDefinitions[0];
  assert.equal(film.id, "scenario_titane_2021");
  assert.equal(film.title, "Titane");
  assert.equal(film.year, 2021);
  assert.equal(film.runtimeMins, 108);
  assert.deepEqual(film.directors, ["Julia Ducournau"]);

  assert.ok(film.scenarioType.includes("auteur_festival"));
  assert.ok(film.scenarioType.includes("alexa_mini_lf") && film.scenarioType.includes("zeiss_supreme_prime"));
  assert.ok(film.scenarioType.includes("ronin_technocrane_magnetic_handoff"));
  assert.ok(film.scenarioType.includes("practical_prosthetics") && film.scenarioType.includes("selective_vfx_mac_guff"));
  assert.ok(film.scenarioType.includes("layered_editing") && film.scenarioType.includes("m141_grade"));

  assert.ok(film.premise.includes("108 minutes") && film.premise.includes("Palme d'Or"));
  assert.ok(film.premise.includes("ALEXA Mini LF") && film.premise.includes("ZEISS Supreme Prime"));
  assert.ok(film.premise.includes("Ronin-to-Technocrane handoff") && film.premise.includes("electronic magnet"));
  assert.ok(film.premise.includes("forty-day summer-2020 shoot") && film.premise.includes("M141"));
  assert.ok(film.premise.includes("silicone and latex prosthetics") && film.premise.includes("face to thighs"));
  assert.ok(film.premise.includes("Mac Guff") && film.premise.includes("nose-breaking gag"));
  assert.ok(film.premise.includes("Jean-Christophe Bouzy") && film.premise.includes("three-act"));

  assert.ok(film.requiredChoicesSeed.camera.includes("alexa_mini_lf"));
  assert.ok(film.requiredChoicesSeed.camera.includes("ronin_to_technocrane_handoff"));
  assert.ok(film.requiredChoicesSeed.editing.includes("jean_christophe_bouzy"));
  assert.ok(film.requiredChoicesSeed.themes.includes("auteur_festival"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("auteur/festival rotation case")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ALEXA Mini LF") && goal.includes("ZEISS Supreme Primes")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("electronic-magnet transfer")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("silicone and latex")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Mac Guff") && goal.includes("Martial Vallanchon")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Jean-Christophe Bouzy") && goal.includes("structure consultant")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three-act") && goal.includes("layered structure")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("exact VFX shot count") && goal.includes("unresolved")));

  assert.ok(film.phases.find((phase) => phase.id === "opening_oner")?.player_task.includes("Technocrane"));
  assert.ok(film.phases.find((phase) => phase.id === "materials_tests")?.player_task.includes("Compare materials"));
  assert.ok(film.phases.find((phase) => phase.id === "nose_gag")?.player_task.includes("VFX"));
  assert.ok(film.phases.find((phase) => phase.id === "editorial_structure")?.player_task.includes("Jean-Christophe Bouzy"));
  assert.ok(film.phases.find((phase) => phase.id === "delivery_review")?.player_task.includes("bounded unknowns"));
  assert.ok(film.learningGoals.length >= 40);
  assert.ok(film.phases.length >= 24);
});
