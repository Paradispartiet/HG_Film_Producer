import assert from "node:assert/strict";
import test from "node:test";
import {
  getFallbackScenarioProductionBrief,
  resolveScenarioProductionBrief,
  type ScenarioProductionBrief
} from "./scenarioProductionBriefs";
import type { FilmScenarioSeed } from "./filmScenarios";

const starterScenarioIds = [
  "scenario_the_machinist_2004",
  "scenario_the_lives_of_others_2006",
  "scenario_lost_in_translation_2003",
  "scenario_12_angry_men_1957",
  "scenario_a_prophet_2009"
] as const;

const targetCategories = [
  "genreTargets",
  "toneTargets",
  "screenplayTargets",
  "cinematographyTargets",
  "editingTargets",
  "soundTargets",
  "learningGoals"
] as const satisfies readonly (keyof ScenarioProductionBrief)[];

function createScenario(id: string): FilmScenarioSeed {
  return {
    id,
    status: "imported",
    source: {
      list_id: "test_list",
      position: 999,
      imdb_id: "tt0000000",
      url: "https://example.test/title/tt0000000/"
    },
    film: {
      title: "Test Film",
      original_title: "Test Film",
      year: 2026,
      title_type: "movie",
      runtime_mins: 100,
      directors: ["Test Director"],
      genres: ["Drama"],
      genre_keys: ["drama"],
      imdb_rating: 7,
      user_rating: 0
    },
    scenario_type: "classic",
    production_challenge: "Make a readable production challenge.",
    required_choices_seed: {},
    phases: [],
    learning_goals_seed: ["Learn from the scenario."],
    manual_enrichment_needed: []
  };
}

test("starter scenario production briefs resolve with research-needed status and targets", () => {
  for (const scenarioId of starterScenarioIds) {
    const brief = resolveScenarioProductionBrief(createScenario(scenarioId));

    assert.equal(brief.scenarioId, scenarioId);
    assert.equal(brief.verificationStatus, "needs_research");

    for (const category of targetCategories) {
      assert.ok(Array.isArray(brief[category]));
      assert.ok(brief[category].length > 0, `${scenarioId} is missing ${category}`);
    }
  }
});

test("unknown imported scenarios use the seeded fallback production brief", () => {
  const scenario = createScenario("scenario_unknown_imported_2026");
  const brief = resolveScenarioProductionBrief(scenario);

  assert.deepEqual(brief, getFallbackScenarioProductionBrief(scenario));
  assert.equal(brief.scenarioId, scenario.id);
  assert.equal(brief.verificationStatus, "seeded");
  assert.equal(brief.logline, scenario.production_challenge);
});
