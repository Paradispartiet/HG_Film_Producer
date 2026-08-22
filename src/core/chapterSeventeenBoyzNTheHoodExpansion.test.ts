import assert from "node:assert/strict";
import test from "node:test";

import { chapterSeventeenBoyzNTheHoodExpansionDefinitions } from "./chapterSeventeenBoyzNTheHoodExpansion.js";

test("Chapter 17 materializes Boyz n the Hood as a source-first Columbia/South Central production", () => {
  assert.equal(chapterSeventeenBoyzNTheHoodExpansionDefinitions.length, 1);
  const film = chapterSeventeenBoyzNTheHoodExpansionDefinitions[0];
  assert.equal(film.id, "scenario_boyz_n_the_hood_1991");
  assert.equal(film.year, 1991);
  assert.equal(film.runtimeMins, 108);
  assert.deepEqual(film.directors, ["John Singleton"]);
  assert.equal(film.sourceId, "afi_boyz_n_the_hood_1991");
  assert.ok(film.scenarioType.includes("columbia") && film.scenarioType.includes("south_central") && film.scenarioType.includes("black_authorship"));

  assert.ok(film.premise.includes("Stephanie Allain") && film.premise.includes("Frank Price") && film.premise.includes("$100,000"));
  assert.ok(film.premise.includes("1 October 1990") && film.premise.includes("South Central Los Angeles"));
  assert.ok(film.premise.includes("three local gang members") && film.premise.includes("predominantly African-American crew"));
  assert.ok(film.premise.includes("informed consent") && film.premise.includes("appropriate compensation") && film.premise.includes("tokenism"));
  assert.ok(film.premise.includes("Charles Mills") && film.premise.includes("Eli Harris") && film.premise.includes("Arriflex") && film.premise.includes("Clairmont"));
  assert.ok(film.premise.includes("Bruce Bellamy") && film.premise.includes("Bruce Cannon") && film.premise.includes("Stanley Clarke"));
  assert.ok(film.premise.includes("Veda Campbell") && film.premise.includes("Patrick Drummond"));
  assert.ok(film.premise.includes("$5.7-$6 million") && film.premise.includes("attributed reporting"));
  assert.ok(film.premise.includes("Cannes Un Certain Regard") && film.premise.includes("National Film Registry"));
  assert.ok(film.premise.includes("108 minutes") && film.premise.includes("canonical gameplay runtime"));

  assert.ok(film.learningGoals.some((goal) => goal.includes("Columbia-financed") && goal.includes("South Central")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("three gang-member consultants") && goal.includes("authenticity")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("informed consent") && goal.includes("compensation")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("Arriflex/Clairmont")));
  assert.ok(film.requiredChoicesSeed.camera.includes("charles_mills_arriflex_clairmont_source_boundary"));
  assert.ok(film.learningGoals.some((goal) => goal.includes("$5.7-$6 million") && goal.includes("reported budget range")));
  assert.ok(film.learningGoals.some((goal) => goal.includes("New Black cinema") && goal.includes("plural")));

  const community = film.phases.find((phase) => phase.id === "community_and_location_plan");
  assert.ok(community?.player_task.includes("consent") && community.player_task.includes("compensation") && community.player_task.includes("community liaison"));
  const camera = film.phases.find((phase) => phase.id === "camera_lighting_art");
  assert.ok(camera?.player_task.includes("Arriflex/Clairmont") && camera.player_task.includes("unsupported body"));
  const sound = film.phases.find((phase) => phase.id === "sound_and_music");
  assert.ok(sound?.player_task.includes("Veda Campbell") && sound.player_task.includes("Patrick Drummond") && sound.player_task.includes("Stanley Clarke"));
  const release = film.phases.find((phase) => phase.id === "release_and_legacy");
  assert.ok(release?.player_task.includes("108 minutes") && release.player_task.includes("National Film Registry"));

  assert.ok(film.requiredChoicesSeed.camera.includes("no_invented_body_lens_stock_filter_exposure_or_lab"));
  assert.ok(film.learningGoals.length >= 17);
  assert.ok(film.phases.length >= 10);
});
