import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getAntoniasLineFilmHistoryDonors,
} from "./scenarioFilmStudyFamilyPerformanceAntoniasLineCatalog.js";
import {
  getTheSavagesFilmHistoryDonors,
} from "./scenarioFilmStudyFamilyPerformanceTheSavagesCatalog.js";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "./scenarioFilmStudyIndependentStorytellingBatch.js";
import { resolveScenarioProductionBrief } from "./scenarioProductionBriefs.js";

const scenarioId = "scenario_the_savages_2007";

test("The Savages resolves as a source-backed family-care performance system", () => {
  const scenario = getClassicFilmScenarios().find((candidate) => candidate.id === scenarioId);
  assert.ok(scenario, `Missing scenario ${scenarioId}`);

  const study = resolveIndependentStorytellingFilmStudyMap(
    scenario,
    resolveScenarioProductionBrief(scenario),
  );

  assert.equal(study?.scenarioId, scenarioId);
  assert.equal(study?.historyStatus, "source_backed");
  assert.equal(study?.coverage.length, 17);
  assert.equal(study?.coverageSummary.sourceVerified, 14);
  assert.equal(study?.coverageSummary.mapped, 2);
  assert.equal(study?.coverageSummary.notCentral, 1);
  assert.equal(study?.verification?.status, "verified");
  assert.equal(study?.verification?.sources.length, 10);
  assert.equal(new Set(study?.verification?.sources.map((source) => source.publisher)).size, 10);
});

test("The Savages receives dedicated donors without changing Antonia's Line", () => {
  const profile = getIndependentStorytellingFilmHistoryProfile(scenarioId);
  assert.ok(profile);

  const donors = getTheSavagesFilmHistoryDonors(profile);
  assert.deepEqual(
    donors?.map((donor) => donor.scenarioId),
    [
      "scenario_secrets_and_lies_1996",
      "scenario_the_sons_room_2001",
      "scenario_still_walking_2008",
    ],
  );

  const choices = createIndependentStorytellingFilmHistoryChoices(profile);
  assert.equal(choices.length, 3);
  assert.deepEqual(new Set(choices.map((choice) => choice.quality)), new Set(["match", "partial", "miss"]));
  assert.equal(new Set(choices.map((choice) => choice.label)).size, 3);
  assert.ok(choices.find((choice) => choice.quality === "partial")?.feedback.includes("family-performance"));

  const antoniasLine = getIndependentStorytellingFilmHistoryProfile("scenario_antonia_s_line_1995");
  assert.ok(antoniasLine);
  assert.deepEqual(
    getAntoniasLineFilmHistoryDonors(antoniasLine)?.map((donor) => donor.scenarioId),
    [
      "scenario_daughters_of_the_dust_1991",
      "scenario_secrets_and_lies_1996",
      "scenario_still_walking_2008",
    ],
  );
  assert.equal(
    createIndependentStorytellingFilmHistoryChoices(antoniasLine)
      .some((choice) => choice.label.includes("thirty-day location shoot")),
    false,
  );
});
