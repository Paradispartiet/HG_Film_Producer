import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenTitanicExpansionDefinitions } from "./chapterSeventeenTitanicExpansion.js";

test("Chapter 17 materializes Titanic as a source-first multi-system blockbuster production", () => {
  assert.equal(chapterSeventeenTitanicExpansionDefinitions.length, 1);
  const film = chapterSeventeenTitanicExpansionDefinitions[0];
  assert.equal(film.id, "scenario_titanic_1997");
  assert.equal(film.year, 1997);
  assert.equal(film.runtimeMins, 194);
  assert.deepEqual(film.directors, ["James Cameron"]);
  assert.equal(film.sourceId, "afi_titanic_1997");
  assert.ok(film.scenarioType.includes("baja") && film.scenarioType.includes("deep_sea") && film.scenarioType.includes("digital_domain"));

  assert.ok(film.premise.includes("Caleb Deschanel") && film.premise.includes("Russell Carpenter") && film.premise.includes("Fox Baja"));
  assert.ok(film.premise.includes("Panavision") && film.premise.includes("Super 35") && film.premise.includes("Primo") && film.premise.includes("5279"));
  assert.ok(film.premise.includes("Mir") && film.premise.includes("35mm two-perf") && film.premise.includes("distinct acquisition system"));
  assert.ok(film.premise.includes("Digital Domain") && film.premise.includes("CG water") && film.premise.includes("digital stunt people"));
  assert.ok(film.premise.includes("qualified stunt and aquatic-safety leadership") && film.premise.includes("hypothermia") && film.premise.includes("rescue capability"));
  assert.ok(film.premise.includes("Gary Rydstrom") && film.premise.includes("James Horner") && film.premise.includes("Dolby Digital"));
  assert.ok(film.premise.includes("194 or 197") && film.premise.includes("BFI 195") && film.premise.includes("194/195/197"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Caleb Deschanel") && goal.includes("Russell Carpenter")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Mir-submersible") && goal.includes("35mm two-perf")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("ship miniatures") && goal.includes("CG water") && goal.includes("digital people")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("aquatic") && goal.includes("hypothermia")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("194/195/197-minute") && goal.includes("194 minutes")));

  const wreck = film.phases.find((phase) => phase.id === "wreck_and_present_day");
  assert.ok(wreck?.player_task.includes("Mir") && wreck.player_task.includes("Deschanel") && wreck.player_task.includes("Carpenter"));
  const camera = film.phases.find((phase) => phase.id === "period_cinematography");
  assert.ok(camera?.player_task.includes("Panavision") && camera.player_task.includes("Super 35") && camera.player_task.includes("5279"));
  const water = film.phases.find((phase) => phase.id === "practical_water_and_stunts");
  assert.ok(water?.player_task.includes("aquatic safety") && water.player_task.includes("rescue capability") && water.player_task.includes("hypothermia"));
  const digital = film.phases.find((phase) => phase.id === "digital_extensions_and_people");
  assert.ok(digital?.player_task.includes("CG set extensions") && digital.player_task.includes("CG water") && digital.player_task.includes("digital people"));
  const release = film.phases.find((phase) => phase.id === "release_and_versions");
  assert.ok(release?.player_task.includes("194 minutes") && release.player_task.includes("195/197"));

  assert.ok(film.requiredChoicesSeed.sound.includes("no_invented_recorder_adr_foley_or_mix_hardware"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 11);
});
