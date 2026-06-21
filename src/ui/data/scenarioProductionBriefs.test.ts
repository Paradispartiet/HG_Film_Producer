import assert from "node:assert/strict";
import test from "node:test";
import {
  getFallbackScenarioProductionBrief,
  resolveScenarioProductionBrief,
  type ScenarioProductionBrief
} from "./scenarioProductionBriefs";
import type { FilmScenarioSeed } from "./filmScenarios";

const manualScenarioIds = [
  "scenario_the_machinist_2004",
  "scenario_the_lives_of_others_2006",
  "scenario_lost_in_translation_2003",
  "scenario_12_angry_men_1957",
  "scenario_a_prophet_2009",
  "scenario_3_iron_2004",
  "scenario_one_flew_over_the_cuckoos_nest_1975",
  "scenario_last_life_in_the_universe_2003",
  "scenario_moonrise_kingdom_2012",
  "scenario_true_romance_1993",
  "scenario_waltz_with_bashir_2008",
  "scenario_into_the_wild_2007",
  "scenario_ex_machina_2014",
  "scenario_winter_s_bone_2010",
  "scenario_midnight_in_paris_2011",
  "scenario_district_9_2009",
  "scenario_it_s_a_wonderful_life_1946",
  "scenario_no_country_for_old_men_2007",
  "scenario_beasts_of_the_southern_wild_2012",
  "scenario_moon_2009",
  "scenario_the_big_lebowski_1998",
  "scenario_leaving_las_vegas_1995",
  "scenario_gran_torino_2008",
  "scenario_mesrine_public_enemy_no_1_2008",
  "scenario_mesrine_killer_instinct_2008",
  "scenario_the_bothersome_man_2006",
  "scenario_buffalo_66_1998",
  "scenario_dogville_2003",
  "scenario_down_by_law_1986",
  "scenario_american_splendor_2003",
  "scenario_mystery_train_1989",
  "scenario_dheepan_2015",
  "scenario_the_pianist_2002",
  "scenario_crash_2004",
  "scenario_groundhog_day_1993",
  "scenario_the_truman_show_1998",
  "scenario_stranger_than_paradise_1984",
  "scenario_forrest_gump_1994",
  "scenario_the_man_who_wasn_t_there_2001",
  "scenario_searching_for_sugar_man_2012",
  "scenario_smoke_1995",
  "scenario_the_class_2008",
  "scenario_requiem_for_a_dream_2000",
  "scenario_the_shining_1980",
  "scenario_the_return_2003",
  "scenario_kitchen_stories_2003",
  "scenario_the_celebration_1998",
  "scenario_the_400_blows_1959",
  "scenario_the_straight_story_1999",
  "scenario_troll_hunter_2010",
  "scenario_alamar_2009",
  "scenario_hugo_2011",
  "scenario_the_hunt_2012",
  "scenario_breathless_1960",
  "scenario_bombon_el_perro_2004",
  "scenario_trainspotting_1996",
  "scenario_the_motorcycle_diaries_2004",
  "scenario_mean_streets_1973",
  "scenario_clockers_1995",
  "scenario_rumble_fish_1983",
  "scenario_in_the_house_2012",
  "scenario_amelie_2001",
  "scenario_taxidermia_2006",
  "scenario_a_somewhat_gentle_man_2010",
  "scenario_walle_2008",
  "scenario_antonia_s_line_1995",
  "scenario_noi_the_albino_2003",
  "scenario_the_impossible_2012",
  "scenario_taste_of_cherry_1997",
  "scenario_land_of_mine_2015",
  "scenario_revanche_2008",
  "scenario_paris_texas_1984",
  "scenario_being_john_malkovich_1999",
  "scenario_45_years_2015",
  "scenario_blue_jasmine_2013",
  "scenario_rush_2013",
  "scenario_her_2013",
  "scenario_the_lobster_2015",
  "scenario_4_months_3_weeks_and_2_days_2007",
  "scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014",
  "scenario_boyhood_2014",
  "scenario_nightcrawler_2014",
  "scenario_nebraska_2013",
  "scenario_detachment_2011",
  "scenario_homesick_2015",
  "scenario_tangerines_2013",
  "scenario_it_follows_2014",
  "scenario_mad_max_fury_road_2015",
  "scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014",
  "scenario_the_road_warrior_1981",
  "scenario_inside_out_2015",
  "scenario_victoria_2015",
  "scenario_the_game_1997",
  "scenario_brothers_2015",
  "scenario_my_skinny_sister_2015"
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

const newBatchManualScenarioIds = [
  "scenario_inside_out_2015",
  "scenario_victoria_2015",
  "scenario_the_game_1997",
  "scenario_brothers_2015",
  "scenario_my_skinny_sister_2015"
] as const;

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

test("manual scenario ids include the corrected Winter's Bone id only", () => {
  assert.ok(manualScenarioIds.includes("scenario_winter_s_bone_2010"));
  assert.ok(!manualScenarioIds.includes("scenario_winters_bone_2010" as (typeof manualScenarioIds)[number]));
});

test("all 95 manual scenario production briefs resolve with research-needed status and targets", () => {
  assert.equal(manualScenarioIds.length, 95);
  for (const scenarioId of manualScenarioIds) {
    const brief = resolveScenarioProductionBrief(createScenario(scenarioId));

    assert.equal(brief.scenarioId, scenarioId);
    assert.equal(brief.verificationStatus, "needs_research");

    for (const category of targetCategories) {
      assert.ok(Array.isArray(brief[category]));
      assert.ok(brief[category].length > 0, `${scenarioId} is missing ${category}`);
    }
  }
});


test("batch 19 manual briefs keep concise target coverage", () => {
  for (const scenarioId of newBatchManualScenarioIds) {
    const brief = resolveScenarioProductionBrief(createScenario(scenarioId));

    assert.equal(brief.verificationStatus, "needs_research");

    for (const category of targetCategories) {
      assert.ok(Array.isArray(brief[category]));
      assert.ok(brief[category].length >= 2, `${scenarioId} needs at least two ${category}`);
      assert.ok(brief[category].length <= 4, `${scenarioId} has too many ${category}`);
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
