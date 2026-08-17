import assert from "node:assert/strict";
import test from "node:test";

import { chapterNineSovietMontageExpansionDefinitions } from "./chapterNineSovietMontageExpansion.js";

const byId = (id: string) => chapterNineSovietMontageExpansionDefinitions.find((item) => item.id === id);

test("Chapter 9 materializes five distinct missing Soviet montage production cases", () => {
  assert.equal(chapterNineSovietMontageExpansionDefinitions.length, 5);
  assert.deepEqual(
    chapterNineSovietMontageExpansionDefinitions.map((item) => item.id),
    [
      "scenario_mother_1926",
      "scenario_the_fall_of_the_romanov_dynasty_1927",
      "scenario_earth_1930",
      "scenario_october_1928",
      "scenario_mr_west_bolsheviks_1924",
    ],
  );
  for (const item of chapterNineSovietMontageExpansionDefinitions) {
    assert.ok(item.learningGoals.length >= 6);
    assert.ok(item.phases.length >= 9);
    assert.ok(item.sourceUrl.startsWith("https://"));
    assert.ok(item.requiredChoicesSeed.editing.length >= 3);
  }
});

test("Mother preserves Pudovkin linkage, collaborative craft and version boundaries", () => {
  const item = byId("scenario_mother_1926");
  assert.ok(item);
  assert.equal(item.runtimeMins, 106);
  assert.equal(item.scenarioType, "pudovkin_linkage_character_montage_production");
  assert.match(item.premise, /Mezhrabpom-Rus/);
  assert.match(item.premise, /Nathan Zarkhi/);
  assert.match(item.premise, /Anatoli Golovnya/);
  assert.match(item.premise, /linkage and accumulation/);
  assert.ok(item.learningGoals.some((goal) => /Eisenstein/.test(goal)));
});

test("Shub case treats archival provenance and compilation editing as production authorship", () => {
  const item = byId("scenario_the_fall_of_the_romanov_dynasty_1927");
  assert.ok(item);
  assert.equal(item.scenarioType, "shub_archival_compilation_montage_production");
  assert.match(item.premise, /archival search/);
  assert.match(item.premise, /Mark Tseitlin/);
  assert.match(item.premise, /provenance/);
  assert.ok(item.requiredChoicesSeed.themes.includes("documentary_ethics"));
});

test("Earth keeps Ukrainian VUFKU context and hindsight safeguards explicit", () => {
  const item = byId("scenario_earth_1930");
  assert.ok(item);
  assert.equal(item.runtimeMins, 90);
  assert.equal(item.scenarioType, "dovzhenko_ukrainian_poetic_collectivization_production");
  assert.match(item.premise, /VUFKU\/Ukrainian/);
  assert.match(item.premise, /Holodomor/);
  assert.match(item.premise, /historical hindsight/);
});

test("October remains staged reconstruction with intellectual-montage and recut version control", () => {
  const item = byId("scenario_october_1928");
  assert.ok(item);
  assert.equal(item.runtimeMins, 103);
  assert.equal(item.scenarioType, "eisenstein_intellectual_montage_anniversary_reconstruction");
  assert.match(item.premise, /Grigori Aleksandrov/);
  assert.match(item.premise, /Leon Trotsky/);
  assert.match(item.premise, /not documentary news footage/);
});

test("Mr West turns the Kuleshov workshop into constructive genre production, not a magic effect", () => {
  const item = byId("scenario_mr_west_bolsheviks_1924");
  assert.ok(item);
  assert.equal(item.runtimeMins, 94);
  assert.equal(item.scenarioType, "kuleshov_workshop_constructive_genre_satire_production");
  assert.match(item.premise, /American serial and slapstick/);
  assert.match(item.premise, /Kuleshov effect/);
  assert.match(item.premise, /universal audience response/);
});
