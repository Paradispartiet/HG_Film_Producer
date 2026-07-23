import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getProductionCaseVerification,
  getProductionCaseVerificationRecords,
  getVerifiedProductionCaseIds,
} from "./scenarioProductionVerificationRegistry.js";

const verificationGroups = [
  ["silent cinema foundations", ["scenario_a_trip_to_the_moon_1902", "scenario_the_cabinet_of_dr_caligari_1920", "scenario_nosferatu_1922", "scenario_battleship_potemkin_1925"], 4],
  ["silent and early studio systems", ["scenario_the_general_1926", "scenario_the_phantom_carriage_1921", "scenario_metropolis_1927", "scenario_frankenstein_1931"], 5],
  ["late silent and early sound systems", ["scenario_the_passion_of_joan_of_arc_1928", "scenario_man_with_a_movie_camera_1929", "scenario_m_1931", "scenario_city_lights_1931"], 4],
  ["1930s production systems", ["scenario_king_kong_1933", "scenario_modern_times_1936", "scenario_snow_white_and_the_seven_dwarfs_1937", "scenario_the_rules_of_the_game_1939"], 4],
  ["classical Hollywood systems", ["scenario_stagecoach_1939", "scenario_the_wizard_of_oz_1939", "scenario_citizen_kane_1941", "scenario_casablanca_1942"], 4],
  ["1940s noir and realism systems", ["scenario_double_indemnity_1944", "scenario_brief_encounter_1945", "scenario_rome_open_city_1945", "scenario_the_third_man_1949"], 4],
  ["crime and noir transformations", ["scenario_the_maltese_falcon_1941", "scenario_the_lost_weekend_1945", "scenario_out_of_the_past_1947", "scenario_band_of_outsiders_1964"], 4],
  ["Norwegian postwar genre systems", ["scenario_gategutter_1949", "scenario_fjols_til_fjells_1957", "scenario_de_dodes_tjern_1958", "scenario_insomnia_1997"], 4],
  ["Nordic minimalist social systems", ["scenario_the_match_factory_girl_1990", "scenario_songs_from_the_second_floor_2000", "scenario_the_man_without_a_past_2002", "scenario_oslo_august_31st_2011"], 4],
  ["modern Nordic behavior systems", ["scenario_force_majeure_2014", "scenario_woman_at_war_2018", "scenario_another_round_2020", "scenario_the_worst_person_in_the_world_2021"], 4],
  ["1980s political Palme systems", ["scenario_man_of_iron_1981", "scenario_yol_1982", "scenario_the_ballad_of_narayama_1983", "scenario_when_father_was_away_on_business_1985"], 4],
  ["festival journey displacement systems", ["scenario_pelle_the_conqueror_1987", "scenario_central_station_1998", "scenario_eternity_and_a_day_1998", "scenario_head_on_2004"], 4],
  ["intimate festival body care systems", ["scenario_vera_drake_2004", "scenario_the_wrestler_2008", "scenario_the_milk_of_sorrow_2009", "scenario_somewhere_2010"], 4],
  ["festival urban intimacy systems", ["scenario_pieta_2012", "scenario_blue_is_the_warmest_colour_2013", "scenario_black_coal_thin_ice_2014", "scenario_from_afar_2015"], 4],
  ["contemporary dissent rural systems", ["scenario_synonyms_2019", "scenario_there_is_no_evil_2020", "scenario_bad_luck_banging_or_loony_porn_2021", "scenario_alcarras_2022"], 4],
  ["contemporary European social care systems", ["scenario_toni_erdmann_2016", "scenario_triangle_of_sadness_2022", "scenario_aftersun_2022", "scenario_the_room_next_door_2024"], 4],
  ["European poetic memory systems", ["scenario_l_atalante_1934", "scenario_the_spirit_of_the_beehive_1973", "scenario_landscape_in_the_mist_1988", "scenario_the_double_life_of_veronique_1991"], 4],
  ["British and Irish place-body systems", ["scenario_kes_1969", "scenario_naked_1993", "scenario_hunger_2008", "scenario_the_banshees_of_inisherin_2022"], 4],
  ["Iberian and Portuguese memory systems", ["scenario_cria_cuervos_1976", "scenario_all_about_my_mother_1999", "scenario_tabu_2012", "scenario_horse_money_2014"], 4],
  ["Balkan war and institution systems", ["scenario_before_the_rain_1994", "scenario_underground_1995", "scenario_no_mans_land_2001", "scenario_quo_vadis_aida_2020"], 4],
  ["European 1960s space systems", ["scenario_l_avventura_1960", "scenario_last_year_at_marienbad_1961", "scenario_playtime_1967", "scenario_the_leopard_1963"], 4],
  ["New German Cinema systems", ["scenario_aguirre_the_wrath_of_god_1972", "scenario_ali_fear_eats_the_soul_1974", "scenario_the_marriage_of_maria_braun_1979", "scenario_wings_of_desire_1987"], 4],
  ["European time and identity systems", ["scenario_the_vanishing_1988", "scenario_run_lola_run_1998", "scenario_the_white_ribbon_2009", "scenario_phoenix_2014"], 4],
  ["1950s Asian postwar systems", ["scenario_rashomon_1950", "scenario_tokyo_story_1953", "scenario_seven_samurai_1954", "scenario_pather_panchali_1955"], 4],
  ["1950s expressive postwar systems", ["scenario_la_strada_1954", "scenario_the_night_of_the_hunter_1955", "scenario_the_seventh_seal_1957", "scenario_touch_of_evil_1958"], 4],
  ["early 1960s production systems", ["scenario_breakfast_at_tiffany_s_1961", "scenario_jules_and_jim_1962", "scenario_contempt_1963", "scenario_dr_strangelove_1964"], 4],
  ["postwar European modernism systems", ["scenario_ordet_1955", "scenario_ashes_and_diamonds_1958", "scenario_persona_1966", "scenario_daisies_1966"], 4],
  ["Czechoslovak New Wave systems", ["scenario_closely_watched_trains_1966", "scenario_the_firemens_ball_1967", "scenario_marketa_lazarova_1967", "scenario_the_cremator_1969"], 4],
  ["European political and feminist modernism systems", ["scenario_cleo_from_5_to_7_1962", "scenario_the_conformist_1970", "scenario_jeanne_dielman_1975", "scenario_beau_travail_1999"], 4],
  ["New Hollywood and blockbuster systems", ["scenario_bonnie_and_clyde_1967", "scenario_the_godfather_1972", "scenario_jaws_1975", "scenario_star_wars_1977"], 4],
  ["1960s scale and independent systems", ["scenario_psycho_1960", "scenario_lawrence_of_arabia_1962", "scenario_2001_a_space_odyssey_1968", "scenario_night_of_the_living_dead_1968"], 4],
  ["European modernist production systems", ["scenario_hiroshima_mon_amour_1959", "scenario_8_1_2_1963", "scenario_the_umbrellas_of_cherbourg_1964", "scenario_the_battle_of_algiers_1966"], 4],
  ["American independent breakthroughs", ["scenario_killer_of_sheep_1977", "scenario_sex_lies_and_videotape_1989", "scenario_slacker_1990", "scenario_daughters_of_the_dust_1991"], 4],
  ["Japanese everyday memory systems", ["scenario_tampopo_1985", "scenario_black_rain_imamura_1989", "scenario_after_life_1998", "scenario_still_walking_2008"], 4],
  ["South Korean genre systems", ["scenario_peppermint_candy_1999", "scenario_oasis_2002", "scenario_the_host_2006", "scenario_the_wailing_2016"], 4],
  ["South and Southeast Asian institutional and performance systems", ["scenario_syndromes_and_a_century_2006", "scenario_court_2014", "scenario_marlina_the_murderer_in_four_acts_2017", "scenario_the_disciple_2020"], 4],
  ["Hong Kong and Taiwan urban-time systems", ["scenario_days_of_being_wild_1990", "scenario_vive_l_amour_1994", "scenario_millennium_mambo_2001", "scenario_goodbye_dragon_inn_2003"], 4],
  ["Chinese-language space and genre systems", ["scenario_raise_the_red_lantern_1991", "scenario_a_touch_of_sin_2013", "scenario_the_assassin_2015", "scenario_long_days_journey_into_night_2018"], 4],
  ["Asian transnational urban identity systems", ["scenario_cyclo_1995", "scenario_happy_together_1997", "scenario_infernal_affairs_2002", "scenario_return_to_seoul_2022"], 4],
] as const;

const expectedVerifiedCount = 200;

test("verification records are sourced and refer to playable scenarios", () => {
  const records = getProductionCaseVerificationRecords();
  const scenarioIds = new Set(getClassicFilmScenarios().map((scenario) => scenario.id));
  assert.equal(records.length, expectedVerifiedCount);
  assert.equal(new Set(records.map((record) => record.scenarioId)).size, records.length);
  for (const record of records) {
    assert.equal(record.status, "verified");
    assert.match(record.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(record.summary.trim().length >= 40);
    assert.ok(scenarioIds.has(record.scenarioId), `Unknown scenario ${record.scenarioId}`);
    assert.ok(record.sources.length >= 2);
    assert.ok(new Set(record.sources.map((source) => source.publisher)).size >= 2);
    for (const source of record.sources) {
      assert.match(source.url, /^https:\/\//);
      assert.ok(source.title.trim().length > 0);
      assert.ok(source.publisher.trim().length > 0);
      assert.ok(source.note.trim().length >= 30);
      assert.ok(source.supports.length > 0);
    }
  }
});

test("controlled verification groups retain their source minimums", () => {
  for (const [label, scenarioIds, minimumSources] of verificationGroups) {
    for (const scenarioId of scenarioIds) {
      const record = getProductionCaseVerification(scenarioId);
      assert.equal(record?.status, "verified", `${label}: ${scenarioId}`);
      assert.ok((record?.sources.length ?? 0) >= minimumSources, `${label}: ${scenarioId}`);
    }
  }
});

test("verification lookup and ID list expose the same registry", () => {
  const ids = getVerifiedProductionCaseIds();
  assert.equal(ids.length, expectedVerifiedCount);
  assert.equal(new Set(ids).size, ids.length);
  for (const scenarioId of ids) assert.equal(getProductionCaseVerification(scenarioId)?.scenarioId, scenarioId);
  assert.equal(getProductionCaseVerification("scenario_not_verified"), undefined);
});
