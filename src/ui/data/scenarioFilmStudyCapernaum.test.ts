import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getIndependentStorytellingDonors,
  getIndependentStorytellingProfileGroup,
} from "./scenarioFilmStudyIndependentStorytellingCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_capernaum_2018";

test("Capernaum resolves as a source-backed Beirut child-survival production system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);
  assert.equal(scenario.source.position, 142);
  assert.equal(scenario.film.runtime_mins, 126);
  assert.deepEqual(scenario.film.directors, ["Nadine Labaki"]);
  assert.deepEqual(scenario.film.genres, ["Drama"]);
  assert.equal(scenario.scenario_type, "character_drama_production");

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 13);
  assert.equal(study?.coverageSummary.mapped, 3);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 5);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 5);

  const historyProfile = study?.historyProfile;
  assert.ok(historyProfile);
  const profileText = [
    historyProfile.period,
    historyProfile.moment,
    historyProfile.after,
    ...historyProfile.technicalHighlights.map((item) => item.note),
  ].join(" ");
  assert.match(profileText, /Beirut/);
  assert.match(profileText, /nonprofessional/);
  assert.match(profileText, /ALEXA XT/);
  assert.match(profileText, /500 hours/);
});

test("Capernaum receives exact child-care, youth and embodied social-realism donors", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);
  assert.equal(getIndependentStorytellingProfileGroup(scenarioId), "general");
  assert.deepEqual(
    getIndependentStorytellingDonors(profile).map((donor) => donor.scenarioId),
    [
      "scenario_the_child_2005",
      "scenario_fish_tank_2009",
      "scenario_rosetta_1999",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
});

test("Capernaum specialty route does not enter the general donor pool", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile("scenario_daughters_of_the_dust_1991");
  assert.ok(profile);
  assert.ok(
    !getIndependentStorytellingDonors(profile).some((donor) => donor.scenarioId === scenarioId),
  );
});
