import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  SOURCE_BACKED_CASE_WORKSHOPS,
  getSourceBackedCaseWorkshop,
  isBestSupportedWorkshopOption,
} from "../ui/data/scenarioProductionSourceWorkshops.js";

const ids = [
  "scenario_the_celebration_1998",
  "scenario_waltz_with_bashir_2008",
  "scenario_tangerine_2015",
  "scenario_cure_1997",
  "scenario_the_host_2006",
  "scenario_still_life_2006",
  "scenario_platform_2000",
  "scenario_raise_the_red_lantern_1991",
  "scenario_a_city_of_sadness_1989",
  "scenario_vive_l_amour_1994",
  "scenario_peppermint_candy_1999",
  "scenario_all_the_beauty_and_the_bloodshed_2022",
  "scenario_russian_ark_2002",
  "scenario_atanarjuat_the_fast_runner_2001",
  "scenario_blacksmith_scene_1893",
  "scenario_workers_leaving_lumiere_factory_1895",
  "scenario_fire_1901",
  "scenario_life_of_an_american_fireman_1903",
  "scenario_the_great_train_robbery_1903",
  "scenario_rescued_by_rover_1905",
  "scenario_the_corbett_fitzsimmons_fight_1897",
  "scenario_employees_leaving_browns_atlas_works_sheffield_1901",
  "scenario_uncle_josh_at_the_moving_picture_show_1902",
  "scenario_a_trip_to_the_moon_1902",
  "scenario_grandmas_reading_glass_1900",
  "scenario_histoire_d_un_crime_1901",
  "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900",
  "scenario_the_lonely_villa_1909",
  "scenario_the_story_of_the_kelly_gang_1906",
  "scenario_queen_elizabeth_1912",
  "scenario_traffic_in_souls_1913",
  "scenario_fantomas_1913",
  "scenario_cabiria_1914",
  "scenario_afgrunden_1910",
  "scenario_atlantis_1913",
  "scenario_the_general_1926",
  "scenario_the_cheat_1915",
  "scenario_the_gold_rush_1925",
  "scenario_it_1927",
  "scenario_wings_1927",
  "scenario_the_crowd_1928",
  "scenario_the_cabinet_of_dr_caligari_1920",
  "scenario_nosferatu_1922",
  "scenario_the_last_laugh_1924",
  "scenario_metropolis_1927",
  "scenario_pandoras_box_1929",
  "scenario_coeur_fidele_1923",
  "scenario_the_smiling_madame_beudet_1923",
  "scenario_entr_acte_1924",
  "scenario_napoleon_1927",
  "scenario_un_chien_andalou_1929",
  "scenario_the_passion_of_joan_of_arc_1928",
  "scenario_mother_1926",
  "scenario_the_fall_of_the_romanov_dynasty_1927",
  "scenario_battleship_potemkin_1925",
  "scenario_man_with_a_movie_camera_1929",
  "scenario_earth_1930",
  "scenario_october_1928",
  "scenario_mr_west_bolsheviks_1924",
  "scenario_a_page_of_madness_1926",
  "scenario_laborers_love_1922",
  "scenario_a_throw_of_dice_1929",
  "scenario_growth_of_the_soil_1921",
  "scenario_orochi_1925",
  "scenario_the_red_heroine_1929",
  "scenario_haxan_1922",
  "scenario_the_phantom_carriage_1921",
  "scenario_the_jazz_singer_1927",
  "scenario_blackmail_1929",
  "scenario_applause_1929",
  "scenario_the_neighbors_wife_and_mine_1931",
  "scenario_the_broadway_melody_1929",
  "scenario_sous_les_toits_de_paris_1930",
  "scenario_enthusiasm_1930",
  "scenario_the_blue_angel_1930",
  "scenario_m_1931",
  "scenario_city_lights_1931",
  "scenario_the_public_enemy_1931",
  "scenario_dracula_1931",
  "scenario_42nd_street_1933",
  "scenario_scarface_1932",
  "scenario_it_happened_one_night_1934",
  "scenario_top_hat_1935",
  "scenario_gone_with_the_wind_1939",
  "scenario_king_kong_1933",
  "scenario_modern_times_1936",
  "scenario_snow_white_and_the_seven_dwarfs_1937",
  "scenario_the_rules_of_the_game_1939",
  "scenario_stagecoach_1939",
  "scenario_the_wizard_of_oz_1939",
  "scenario_citizen_kane_1941",
  "scenario_casablanca_1942",
  "scenario_rome_open_city_1945",
  "scenario_double_indemnity_1944",
  "scenario_brief_encounter_1945",
  "scenario_the_third_man_1949",
  "scenario_the_maltese_falcon_1941",
  "scenario_bicycle_thieves_1948",
  "scenario_rashomon_1950",
  "scenario_tokyo_story_1953",
  "scenario_seven_samurai_1954",
  "scenario_la_strada_1954",
  "scenario_pather_panchali_1955",
  "scenario_ordet_1955",
  "scenario_the_night_of_the_hunter_1955",
  "scenario_the_seventh_seal_1957",
  "scenario_ashes_and_diamonds_1958",
  "scenario_touch_of_evil_1958",
  "scenario_vertigo_1958",
  "scenario_paisan_1946",
  "scenario_the_red_shoes_1948",
  "scenario_sunset_boulevard_1950",
  "scenario_los_olvidados_1950",
  "scenario_ugetsu_1953",
  "scenario_a_man_escaped_1956",
  "scenario_the_400_blows_1959",
  "scenario_breathless_1960",
  "scenario_hiroshima_mon_amour_1959",
  "scenario_l_avventura_1960",
  "scenario_jules_and_jim_1962",
  "scenario_persona_1966",
  "scenario_8_1_2_1963",
  "scenario_contempt_1963",
  "scenario_the_leopard_1963",
  "scenario_last_year_at_marienbad_1961",
  "scenario_the_umbrellas_of_cherbourg_1964",
  "scenario_dr_strangelove_1964",
  "scenario_daisies_1966",
  "scenario_the_battle_of_algiers_1966",
  "scenario_black_girl_1966",
  "scenario_bonnie_and_clyde_1967",
  "scenario_playtime_1967",
  "scenario_memories_of_underdevelopment_1968",
  "scenario_night_of_the_living_dead_1968",
  "scenario_2001_a_space_odyssey_1968",
  "scenario_the_godfather_1972",
  "scenario_touki_bouki_1973",
  "scenario_aguirre_the_wrath_of_god_1972",
  "scenario_mean_streets_1973",
  "scenario_the_spirit_of_the_beehive_1973",
  "scenario_ali_fear_eats_the_soul_1974",
  "scenario_jaws_1975",
  "scenario_dog_day_afternoon_1975",
  "scenario_taxi_driver_1976",
  "scenario_star_wars_1977",
  "scenario_amarcord_1973",
  "scenario_manila_in_the_claws_of_light_1975",
  "scenario_the_battle_of_chile_part_i_1975",
  "scenario_a_clockwork_orange_1971",
  "scenario_scenes_from_a_marriage_1974",
  "scenario_manhattan_1979",
  "scenario_raging_bull_1980",
  "scenario_raiders_of_the_lost_ark_1981",
  "scenario_blade_runner_1982",
  "scenario_et_the_extra_terrestrial_1982",
  "scenario_aliens_1986",
  "scenario_mephisto_1981",
  "scenario_missing_1982",
  "scenario_the_official_story_1985",
  "scenario_come_and_see_1985",
  "scenario_yellow_earth_1984",
  "scenario_police_story_1985",
  "scenario_my_beautiful_laundrette_1985",
  "scenario_yeelen_1987",
  "scenario_sugar_cane_alley_1983",
  "scenario_the_terminator_1984",
  "scenario_back_to_the_future_1985",
  "scenario_shes_gotta_have_it_1986",
  "scenario_a_better_tomorrow_1986",
  "scenario_robocop_1987",
  "scenario_salaam_bombay_1988",
  "scenario_do_the_right_thing_1989",
  "scenario_brazil_1985",
  "scenario_cinema_paradiso_1988",
  "scenario_goodfellas_1990",
  "scenario_boyz_n_the_hood_1991",
  "scenario_my_own_private_idaho_1991",
  "scenario_hyenas_1992",
  "scenario_the_piano_1993",
  "scenario_hoop_dreams_1994",
  "scenario_sankofa_1993",
  "scenario_pulp_fiction_1994",
  "scenario_chungking_express_1994",
  "scenario_three_colours_red_1994",
  "scenario_bandit_queen_1994",
  "scenario_the_white_balloon_1995",
  "scenario_toy_story_1995",
  "scenario_fire_1996",
  "scenario_eves_bayou_1997",
  "scenario_princess_mononoke_1997",
  "scenario_titanic_1997",
  "scenario_ringu_1998",
  "scenario_the_idiots_1998",
  "scenario_the_matrix_1999",
  "scenario_the_blair_witch_project_1999",
  "scenario_boys_dont_cry_1999",
  "scenario_in_the_mood_for_love_2000",
  "scenario_yi_yi_2000",
  "scenario_crouching_tiger_hidden_dragon_2000",
  "scenario_spirited_away_2001",
  "scenario_amelie_2001",
  "scenario_city_of_god_2002",
  "scenario_oldboy_2003",
  "scenario_dogville_2003",
  "scenario_brokeback_mountain_2005",
  "scenario_cache_2005",
  "scenario_pans_labyrinth_2006",
  "scenario_children_of_men_2006",
  "scenario_the_lives_of_others_2006",
  "scenario_no_country_for_old_men_2007",
  "scenario_there_will_be_blood_2007",
  "scenario_the_white_ribbon_2009",
  "scenario_a_prophet_2009",
  "scenario_avatar_2009",
  "scenario_zodiac_2007",
  "scenario_walle_2008",
  "scenario_slumdog_millionaire_2008",
  "scenario_the_class_2008",
  "scenario_district_9_2009",
  "scenario_alamar_2009",
  "scenario_uncle_boonmee_2010",
  "scenario_the_social_network_2010",
  "scenario_tree_of_life_2011",
  "scenario_a_separation_2011",
  "scenario_pina_2011",
  "scenario_amour_2012",
  "scenario_holy_motors_2012",
  "scenario_gravity_2013",
  "scenario_ida_2013",
  "scenario_boyhood_2014",
  "scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014",
  "scenario_ex_machina_2014",
  "scenario_mad_max_fury_road_2015",
  "scenario_son_of_saul_2015",
  "scenario_victoria_2015",
  "scenario_the_revenant_2015",
  "scenario_moonlight_2016",
] as const;
const seeds = JSON.parse(readFileSync("data/film/scenarios/film_scenarios_seed.json", "utf8"));
const panel = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8");
const sourcePanel = readFileSync("src/ui/components/ScenarioProductionSourceWorkshop.tsx", "utf8");

test("Exactly two hundred and thirty-seven existing cases have seven hundred and eleven original, source-backed decisions", () => {
  assert.deepEqual(SOURCE_BACKED_CASE_WORKSHOPS.map(w => w.scenarioId), ids);
  assert.equal(SOURCE_BACKED_CASE_WORKSHOPS.length, 237);
  assert.equal(SOURCE_BACKED_CASE_WORKSHOPS.reduce((n, w) => n + w.questions.length, 0), 711);
  for (const workshop of SOURCE_BACKED_CASE_WORKSHOPS) {
    assert.equal(workshop.status, "editorial_learning_exercise_not_case_verified");
    assert.equal(workshop.questions.length, 3);
    assert.ok(workshop.sources.length >= 2);
    if (workshop.scenarioId === "scenario_blacksmith_scene_1893" || workshop.scenarioId === "scenario_workers_leaving_lumiere_factory_1895" || workshop.scenarioId === "scenario_fire_1901" || workshop.scenarioId === "scenario_life_of_an_american_fireman_1903" || workshop.scenarioId === "scenario_the_great_train_robbery_1903") {
      const definition = readFileSync("src/core/chapterOneEarlyCinemaExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationSilentFoundationsBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const end = verification.indexOf('\n  },', start);
      const dossier = verification.slice(start, end);
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_the_corbett_fitzsimmons_fight_1897", "scenario_employees_leaving_browns_atlas_works_sheffield_1901", "scenario_uncle_josh_at_the_moving_picture_show_1902"].includes(workshop.scenarioId)) {
      const definitions = readFileSync("src/core/chapterTwoExhibitionExpansion.ts", "utf8");
      assert.ok(definitions.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_the_corbett_fitzsimmons_fight_1897":"src/ui/data/scenarioProductionVerificationCorbettFitzsimmons.ts","scenario_employees_leaving_browns_atlas_works_sheffield_1901":"src/ui/data/scenarioProductionVerificationBrownsAtlasWorks.ts","scenario_uncle_josh_at_the_moving_picture_show_1902":"src/ui/data/scenarioProductionVerificationUncleJosh.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_grandmas_reading_glass_1900", "scenario_histoire_d_un_crime_1901"].includes(workshop.scenarioId)) {
      const definitions = readFileSync("src/core/chapterThreeNarrativeExpansion.ts", "utf8");
      assert.ok(definitions.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_grandmas_reading_glass_1900":"src/ui/data/scenarioProductionVerificationGrandmasReadingGlass.ts","scenario_histoire_d_un_crime_1901":"src/ui/data/scenarioProductionVerificationHistoireDUnCrime.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900", "scenario_the_lonely_villa_1909"].includes(workshop.scenarioId)) {
      const definitions = readFileSync("src/core/chapterThreeNarrativeExpansion.ts", "utf8");
      assert.ok(definitions.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900":"src/ui/data/scenarioProductionVerificationAttackChinaMission.ts","scenario_the_lonely_villa_1909":"src/ui/data/scenarioProductionVerificationLonelyVilla.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_the_story_of_the_kelly_gang_1906", "scenario_queen_elizabeth_1912", "scenario_traffic_in_souls_1913"].includes(workshop.scenarioId)) {
      const definitions = readFileSync("src/core/chapterFourIndustryExpansion.ts", "utf8");
      assert.ok(definitions.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_the_story_of_the_kelly_gang_1906":"src/ui/data/scenarioProductionVerificationStoryOfTheKellyGang.ts","scenario_queen_elizabeth_1912":"src/ui/data/scenarioProductionVerificationQueenElizabeth.ts","scenario_traffic_in_souls_1913":"src/ui/data/scenarioProductionVerificationTrafficInSouls.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_fantomas_1913", "scenario_cabiria_1914"].includes(workshop.scenarioId)) {
      const definitions = readFileSync("src/core/chapterFiveInternationalExpansion.ts", "utf8");
      assert.ok(definitions.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_fantomas_1913":"src/ui/data/scenarioProductionVerificationFantomas.ts","scenario_cabiria_1914":"src/ui/data/scenarioProductionVerificationCabiria.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_afgrunden_1910", "scenario_atlantis_1913"].includes(workshop.scenarioId)) {
      const definitions = readFileSync("src/core/chapterFiveInternationalExpansion.ts", "utf8");
      assert.ok(definitions.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_afgrunden_1910":"src/ui/data/scenarioProductionVerificationAfgrunden.ts","scenario_atlantis_1913":"src/ui/data/scenarioProductionVerificationAtlantis.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_the_cheat_1915", "scenario_the_gold_rush_1925"].includes(workshop.scenarioId)) {
      const definitions = readFileSync("src/core/chapterSixHollywoodExpansion.ts", "utf8");
      assert.ok(definitions.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_the_cheat_1915":"src/ui/data/scenarioProductionVerificationTheCheat.ts","scenario_the_gold_rush_1925":"src/ui/data/scenarioProductionVerificationGoldRush.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_it_1927", "scenario_wings_1927", "scenario_the_crowd_1928"].includes(workshop.scenarioId)) {
      const definitions = readFileSync("src/core/chapterSixHollywoodExpansion.ts", "utf8");
      assert.ok(definitions.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_it_1927":"src/ui/data/scenarioProductionVerificationIt.ts","scenario_wings_1927":"src/ui/data/scenarioProductionVerificationWings.ts","scenario_the_crowd_1928":"src/ui/data/scenarioProductionVerificationTheCrowd.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (workshop.scenarioId === "scenario_the_general_1926") {
      const definition = readFileSync("src/core/earlyCinemaExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationSilentStudioSystemsBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const dossier = verification.slice(start, verification.indexOf("\n  },", start));
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_the_cabinet_of_dr_caligari_1920", "scenario_nosferatu_1922"].includes(workshop.scenarioId)) {
      const definition = readFileSync("src/core/earlyCinemaExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationSilentFoundationsBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const dossier = verification.slice(start, verification.indexOf("\n  },", start));
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (workshop.scenarioId === "scenario_metropolis_1927") {
      const definition = readFileSync("src/core/earlyCinemaExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationSilentStudioSystemsBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const dossier = verification.slice(start, verification.indexOf("\n  },", start));
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_the_last_laugh_1924", "scenario_pandoras_box_1929"].includes(workshop.scenarioId)) {
      const definition = readFileSync("src/core/chapterSevenWeimarExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const dossier = readFileSync(workshop.scenarioId === "scenario_the_last_laugh_1924" ? "src/ui/data/scenarioProductionVerificationTheLastLaugh.ts" : "src/ui/data/scenarioProductionVerificationPandorasBox.ts", "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_coeur_fidele_1923", "scenario_the_smiling_madame_beudet_1923"].includes(workshop.scenarioId)) {
      const definition = readFileSync("src/core/chapterEightFrenchAvantGardeExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_coeur_fidele_1923":"src/ui/data/scenarioProductionVerificationCoeurFidele.ts","scenario_the_smiling_madame_beudet_1923":"src/ui/data/scenarioProductionVerificationSmilingMadameBeudet.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_entr_acte_1924", "scenario_napoleon_1927"].includes(workshop.scenarioId)) {
      const definition = readFileSync("src/core/chapterEightFrenchAvantGardeExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const dossierFiles: Record<string, string> = {"scenario_entr_acte_1924":"src/ui/data/scenarioProductionVerificationEntrActe.ts","scenario_napoleon_1927":"src/ui/data/scenarioProductionVerificationNapoleon.ts"};
      const dossier = readFileSync(dossierFiles[workshop.scenarioId]!, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (workshop.scenarioId === "scenario_un_chien_andalou_1929") {
      const definition = readFileSync("src/core/chapterEightFrenchAvantGardeExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const dossier = readFileSync("src/ui/data/scenarioProductionVerificationUnChienAndalou.ts", "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (workshop.scenarioId === "scenario_the_passion_of_joan_of_arc_1928") {
      const definition = readFileSync("src/core/earlyCinemaExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationLateSilentEarlySoundBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const dossier = verification.slice(start, verification.indexOf("\n  },", start));
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_mother_1926", "scenario_the_fall_of_the_romanov_dynasty_1927"].includes(workshop.scenarioId)) {
      const definition = readFileSync("src/core/chapterNineSovietMontageExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationSovietMontageBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const dossier = verification.slice(start, verification.indexOf("\n  },", start));
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_battleship_potemkin_1925", "scenario_man_with_a_movie_camera_1929"].includes(workshop.scenarioId)) {
      const definition = readFileSync("src/core/earlyCinemaExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const file = workshop.scenarioId === "scenario_battleship_potemkin_1925" ? "SilentFoundationsBatch" : "LateSilentEarlySoundBatch";
      const verification = readFileSync(`src/ui/data/scenarioProductionVerification${file}.ts`, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const dossier = verification.slice(start, next >= 0 ? next : verification.indexOf("\n  }\n]", start));
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_earth_1930", "scenario_october_1928", "scenario_mr_west_bolsheviks_1924"].includes(workshop.scenarioId)) {
      const definition = readFileSync("src/core/chapterNineSovietMontageExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationSovietMontageBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const dossier = verification.slice(start, verification.indexOf("\n  },", start));
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_a_page_of_madness_1926", "scenario_laborers_love_1922"].includes(workshop.scenarioId)) {
      const page = workshop.scenarioId === "scenario_a_page_of_madness_1926";
      const definition = readFileSync(page ? "src/core/chapterTenSilentCinemasExpansion.ts" : "src/core/chapterTenLaborersLoveExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const dossier = readFileSync(page ? "src/ui/data/scenarioProductionVerificationAPageOfMadness.ts" : "src/ui/data/scenarioProductionVerificationLaborersLove.ts", "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_a_throw_of_dice_1929", "scenario_growth_of_the_soil_1921", "scenario_orochi_1925", "scenario_the_red_heroine_1929", "scenario_haxan_1922", "scenario_the_phantom_carriage_1921"].includes(workshop.scenarioId)) {
      const files: Record<string, [string, string]> = {"scenario_a_throw_of_dice_1929":["src/core/chapterTenAThrowOfDiceExpansion.ts","src/ui/data/scenarioProductionVerificationAThrowOfDice.ts"],"scenario_growth_of_the_soil_1921":["src/core/chapterTenGrowthOfTheSoilExpansion.ts","src/ui/data/scenarioProductionVerificationGrowthOfTheSoil.ts"],"scenario_orochi_1925":["src/core/chapterTenOrochiExpansion.ts","src/ui/data/scenarioProductionVerificationOrochi.ts"],"scenario_the_red_heroine_1929":["src/core/chapterTenRedHeroineExpansion.ts","src/ui/data/scenarioProductionVerificationRedHeroine.ts"],"scenario_haxan_1922":["src/core/chapterTenHaxanExpansion.ts","src/ui/data/scenarioProductionVerificationHaxan.ts"],"scenario_the_phantom_carriage_1921":["src/core/scandinavianEuropeanExpansion.ts","src/ui/data/scenarioProductionVerificationSilentStudioSystemsBatch.ts"]};
      const [definitionFile, verificationFile] = files[workshop.scenarioId]!;
      assert.ok(readFileSync(definitionFile, "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(verificationFile, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const dossier = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_the_jazz_singer_1927", "scenario_blackmail_1929", "scenario_applause_1929", "scenario_the_neighbors_wife_and_mine_1931", "scenario_the_broadway_melody_1929"].includes(workshop.scenarioId)) {
      const files: Record<string, [string, string]> = {"scenario_the_jazz_singer_1927":["src/core/chapterElevenJazzSingerExpansion.ts","src/ui/data/scenarioProductionVerificationJazzSinger.ts"],"scenario_blackmail_1929":["src/core/chapterElevenBlackmailExpansion.ts","src/ui/data/scenarioProductionVerificationBlackmail.ts"],"scenario_applause_1929":["src/core/chapterElevenApplauseExpansion.ts","src/ui/data/scenarioProductionVerificationApplause.ts"],"scenario_the_neighbors_wife_and_mine_1931":["src/core/chapterElevenNeighborsWifeExpansion.ts","src/ui/data/scenarioProductionVerificationNeighborsWife.ts"],"scenario_the_broadway_melody_1929":["src/core/chapterElevenBroadwayMelodyExpansion.ts","src/ui/data/scenarioProductionVerificationBroadwayMelody.ts"]};
      const [definitionFile, verificationFile] = files[workshop.scenarioId]!;
      assert.ok(readFileSync(definitionFile, "utf8").includes(workshop.scenarioId));
      const dossier = readFileSync(verificationFile, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_sous_les_toits_de_paris_1930", "scenario_enthusiasm_1930", "scenario_the_blue_angel_1930", "scenario_m_1931", "scenario_city_lights_1931"].includes(workshop.scenarioId)) {
      const files: Record<string, [string, string]> = {"scenario_sous_les_toits_de_paris_1930":["src/core/chapterElevenSousLesToitsExpansion.ts","src/ui/data/scenarioProductionVerificationSousLesToits.ts"],"scenario_enthusiasm_1930":["src/core/chapterElevenEnthusiasmExpansion.ts","src/ui/data/scenarioProductionVerificationEnthusiasm.ts"],"scenario_the_blue_angel_1930":["src/core/chapterElevenBlueAngelExpansion.ts","src/ui/data/scenarioProductionVerificationBlueAngel.ts"],"scenario_m_1931":["src/core/earlyCinemaExpansion.ts","src/ui/data/scenarioProductionVerificationLateSilentEarlySoundBatch.ts"],"scenario_city_lights_1931":["src/core/earlyCinemaExpansion.ts","src/ui/data/scenarioProductionVerificationLateSilentEarlySoundBatch.ts"]};
      const [definitionFile, verificationFile] = files[workshop.scenarioId]!;
      assert.ok(readFileSync(definitionFile, "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(verificationFile, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const dossier = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_the_public_enemy_1931", "scenario_dracula_1931", "scenario_42nd_street_1933", "scenario_scarface_1932", "scenario_it_happened_one_night_1934", "scenario_top_hat_1935", "scenario_gone_with_the_wind_1939"].includes(workshop.scenarioId)) {
      const files: Record<string, [string, string]> = {"scenario_the_public_enemy_1931":["src/core/chapterTwelvePublicEnemyExpansion.ts","src/ui/data/scenarioProductionVerificationPublicEnemy.ts"],"scenario_dracula_1931":["src/core/chapterTwelveDraculaExpansion.ts","src/ui/data/scenarioProductionVerificationDracula.ts"],"scenario_42nd_street_1933":["src/core/chapterTwelve42ndStreetExpansion.ts","src/ui/data/scenarioProductionVerification42ndStreet.ts"],"scenario_scarface_1932":["src/core/chapterTwelveScarfaceExpansion.ts","src/ui/data/scenarioProductionVerificationScarface.ts"],"scenario_it_happened_one_night_1934":["src/core/chapterTwelveItHappenedOneNightExpansion.ts","src/ui/data/scenarioProductionVerificationItHappenedOneNight.ts"],"scenario_top_hat_1935":["src/core/chapterTwelveTopHatExpansion.ts","src/ui/data/scenarioProductionVerificationTopHat.ts"],"scenario_gone_with_the_wind_1939":["src/core/chapterTwelveGoneWithTheWindExpansion.ts","src/ui/data/scenarioProductionVerificationGoneWithTheWind.ts"]};
      const [definitionFile, verificationFile] = files[workshop.scenarioId]!;
      assert.ok(readFileSync(definitionFile, "utf8").includes(workshop.scenarioId));
      const dossier = readFileSync(verificationFile, "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (["scenario_king_kong_1933","scenario_modern_times_1936","scenario_snow_white_and_the_seven_dwarfs_1937","scenario_the_rules_of_the_game_1939"].includes(workshop.scenarioId)) {
      assert.ok(readFileSync("src/core/earlyCinemaExpansion.ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerification1930sProductionSystemsBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_stagecoach_1939","scenario_the_wizard_of_oz_1939","scenario_citizen_kane_1941","scenario_casablanca_1942"].includes(workshop.scenarioId)) {
      assert.ok(readFileSync("src/core/earlyCinemaExpansion.ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationClassicalHollywoodBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_rome_open_city_1945","scenario_double_indemnity_1944","scenario_brief_encounter_1945","scenario_the_third_man_1949"].includes(workshop.scenarioId)) {
      assert.ok(readFileSync("src/core/earlyCinemaExpansion.ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerification1940sNoirRealismBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_the_maltese_falcon_1941","scenario_bicycle_thieves_1948","scenario_rashomon_1950","scenario_tokyo_story_1953","scenario_seven_samurai_1954","scenario_la_strada_1954","scenario_pather_panchali_1955","scenario_ordet_1955"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_the_maltese_falcon_1941":["src/ui/data/scenarioProductionVerificationCrimeNoirTransformationsBatch.ts","earlyCinemaExpansion"],"scenario_bicycle_thieves_1948":["src/ui/data/scenarioProductionVerification.ts","seed"],"scenario_rashomon_1950":["src/ui/data/scenarioProductionVerification1950sAsianPostwarBatch.ts","earlyCinemaExpansion"],"scenario_tokyo_story_1953":["src/ui/data/scenarioProductionVerification1950sAsianPostwarBatch.ts","earlyCinemaExpansion"],"scenario_seven_samurai_1954":["src/ui/data/scenarioProductionVerification1950sAsianPostwarBatch.ts","earlyCinemaExpansion"],"scenario_la_strada_1954":["src/ui/data/scenarioProductionVerification1950sExpressivePostwarBatch.ts","earlyCinemaExpansion"],"scenario_pather_panchali_1955":["src/ui/data/scenarioProductionVerification1950sAsianPostwarBatch.ts","earlyCinemaExpansion"],"scenario_ordet_1955":["src/ui/data/scenarioProductionVerificationPostwarEuropeanModernismBatch.ts","scandinavianEuropeanExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_the_night_of_the_hunter_1955","scenario_the_seventh_seal_1957","scenario_ashes_and_diamonds_1958","scenario_touch_of_evil_1958","scenario_vertigo_1958","scenario_paisan_1946","scenario_the_red_shoes_1948","scenario_sunset_boulevard_1950","scenario_los_olvidados_1950"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_the_night_of_the_hunter_1955":["src/ui/data/scenarioProductionVerification1950sExpressivePostwarBatch.ts","earlyCinemaExpansion"],"scenario_the_seventh_seal_1957":["src/ui/data/scenarioProductionVerification1950sExpressivePostwarBatch.ts","earlyCinemaExpansion"],"scenario_ashes_and_diamonds_1958":["src/ui/data/scenarioProductionVerificationPostwarEuropeanModernismBatch.ts","easternIberianBritishExpansion"],"scenario_touch_of_evil_1958":["src/ui/data/scenarioProductionVerification1950sExpressivePostwarBatch.ts","earlyCinemaExpansion"],"scenario_vertigo_1958":["src/ui/data/scenarioProductionVerification.ts","seed"],"scenario_paisan_1946":["src/ui/data/scenarioProductionVerificationPaisan.ts","chapterThirteenPaisanExpansion"],"scenario_the_red_shoes_1948":["src/ui/data/scenarioProductionVerificationRedShoes.ts","chapterThirteenRedShoesExpansion"],"scenario_sunset_boulevard_1950":["src/ui/data/scenarioProductionVerificationSunsetBoulevard.ts","chapterThirteenSunsetBoulevardExpansion"],"scenario_los_olvidados_1950":["src/ui/data/scenarioProductionVerificationLosOlvidados.ts","chapterThirteenLosOlvidadosExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_ugetsu_1953","scenario_a_man_escaped_1956","scenario_the_400_blows_1959","scenario_breathless_1960","scenario_hiroshima_mon_amour_1959","scenario_l_avventura_1960","scenario_jules_and_jim_1962","scenario_persona_1966"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_ugetsu_1953":["src/ui/data/scenarioProductionVerificationUgetsu.ts","chapterThirteenUgetsuExpansion"],"scenario_a_man_escaped_1956":["src/ui/data/scenarioProductionVerificationAManEscaped.ts","chapterThirteenAManEscapedExpansion"],"scenario_the_400_blows_1959":["src/ui/data/scenarioProductionVerificationCrossEraBatch.ts","seed"],"scenario_breathless_1960":["src/ui/data/scenarioProductionVerification.ts","seed"],"scenario_hiroshima_mon_amour_1959":["src/ui/data/scenarioProductionVerificationEuropeanModernistProductionBatch.ts","earlyCinemaExpansion"],"scenario_l_avventura_1960":["src/ui/data/scenarioProductionVerificationEuropean1960sSpaceSystemsBatch.ts","italyFranceGermanyBeneluxExpansion"],"scenario_jules_and_jim_1962":["src/ui/data/scenarioProductionVerificationEarly1960sProductionSystemsBatch.ts","earlyCinemaExpansion"],"scenario_persona_1966":["src/ui/data/scenarioProductionVerificationPostwarEuropeanModernismBatch.ts","earlyCinemaExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_8_1_2_1963","scenario_contempt_1963","scenario_the_leopard_1963","scenario_last_year_at_marienbad_1961","scenario_the_umbrellas_of_cherbourg_1964","scenario_dr_strangelove_1964","scenario_daisies_1966","scenario_the_battle_of_algiers_1966"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_8_1_2_1963":["src/ui/data/scenarioProductionVerificationEuropeanModernistProductionBatch.ts","earlyCinemaExpansion"],"scenario_contempt_1963":["src/ui/data/scenarioProductionVerificationEarly1960sProductionSystemsBatch.ts","earlyCinemaExpansion"],"scenario_the_leopard_1963":["src/ui/data/scenarioProductionVerificationEuropean1960sSpaceSystemsBatch.ts","italyFranceGermanyBeneluxExpansion"],"scenario_last_year_at_marienbad_1961":["src/ui/data/scenarioProductionVerificationEuropean1960sSpaceSystemsBatch.ts","italyFranceGermanyBeneluxExpansion"],"scenario_the_umbrellas_of_cherbourg_1964":["src/ui/data/scenarioProductionVerificationEuropeanModernistProductionBatch.ts","earlyCinemaExpansion"],"scenario_dr_strangelove_1964":["src/ui/data/scenarioProductionVerificationEarly1960sProductionSystemsBatch.ts","earlyCinemaExpansion"],"scenario_daisies_1966":["src/ui/data/scenarioProductionVerificationPostwarEuropeanModernismBatch.ts","easternIberianBritishExpansion"],"scenario_the_battle_of_algiers_1966":["src/ui/data/scenarioProductionVerificationEuropeanModernistProductionBatch.ts","earlyCinemaExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_black_girl_1966","scenario_bonnie_and_clyde_1967","scenario_playtime_1967","scenario_memories_of_underdevelopment_1968","scenario_night_of_the_living_dead_1968","scenario_2001_a_space_odyssey_1968","scenario_the_godfather_1972","scenario_touki_bouki_1973"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_black_girl_1966":["src/ui/data/scenarioProductionVerificationBlackGirl.ts","chapterFourteenBlackGirlExpansion"],"scenario_bonnie_and_clyde_1967":["src/ui/data/scenarioProductionVerificationNewHollywoodBlockbusterBatch.ts","earlyCinemaExpansion"],"scenario_playtime_1967":["src/ui/data/scenarioProductionVerificationEuropean1960sSpaceSystemsBatch.ts","italyFranceGermanyBeneluxExpansion"],"scenario_memories_of_underdevelopment_1968":["src/ui/data/scenarioProductionVerificationMemoriesUnderdevelopment.ts","chapterFourteenMemoriesUnderdevelopmentExpansion"],"scenario_night_of_the_living_dead_1968":["src/ui/data/scenarioProductionVerification1960sScaleIndependentBatch.ts","earlyCinemaExpansion"],"scenario_2001_a_space_odyssey_1968":["src/ui/data/scenarioProductionVerification1960sScaleIndependentBatch.ts","earlyCinemaExpansion"],"scenario_the_godfather_1972":["src/ui/data/scenarioProductionVerificationNewHollywoodBlockbusterBatch.ts","earlyCinemaExpansion"],"scenario_touki_bouki_1973":["src/ui/data/scenarioProductionVerificationToukiBouki.ts","chapterFifteenToukiBoukiExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_aguirre_the_wrath_of_god_1972","scenario_mean_streets_1973","scenario_the_spirit_of_the_beehive_1973","scenario_ali_fear_eats_the_soul_1974","scenario_jaws_1975","scenario_dog_day_afternoon_1975","scenario_taxi_driver_1976","scenario_star_wars_1977"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_aguirre_the_wrath_of_god_1972":["src/ui/data/scenarioProductionVerificationNewGermanCinemaSystemsBatch.ts","italyFranceGermanyBeneluxExpansion"],"scenario_mean_streets_1973":["src/ui/data/scenarioProductionVerificationNewHollywoodNewYorkBatch.ts","seed"],"scenario_the_spirit_of_the_beehive_1973":["src/ui/data/scenarioProductionVerificationEuropeanPoeticMemorySystemsBatch.ts","easternIberianBritishExpansion"],"scenario_ali_fear_eats_the_soul_1974":["src/ui/data/scenarioProductionVerificationNewGermanCinemaSystemsBatch.ts","italyFranceGermanyBeneluxExpansion"],"scenario_jaws_1975":["src/ui/data/scenarioProductionVerificationNewHollywoodBlockbusterBatch.ts","earlyCinemaExpansion"],"scenario_dog_day_afternoon_1975":["src/ui/data/scenarioProductionVerificationNewHollywoodNewYorkBatch.ts","seed"],"scenario_taxi_driver_1976":["src/ui/data/scenarioProductionVerificationNewHollywoodNewYorkBatch.ts","seed"],"scenario_star_wars_1977":["src/ui/data/scenarioProductionVerificationNewHollywoodBlockbusterBatch.ts","earlyCinemaExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_amarcord_1973","scenario_manila_in_the_claws_of_light_1975","scenario_the_battle_of_chile_part_i_1975"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_amarcord_1973":["src/ui/data/scenarioProductionVerificationFinal1970sBatch.ts","italyFranceGermanyBeneluxExpansion"],"scenario_manila_in_the_claws_of_light_1975":["src/ui/data/scenarioProductionVerificationManilaClawsLight.ts","chapterFifteenManilaClawsLightExpansion"],"scenario_the_battle_of_chile_part_i_1975":["src/ui/data/scenarioProductionVerificationBattleChilePartOne.ts","chapterFifteenBattleChilePartOneExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_a_clockwork_orange_1971","scenario_scenes_from_a_marriage_1974","scenario_manhattan_1979","scenario_raging_bull_1980","scenario_raiders_of_the_lost_ark_1981","scenario_blade_runner_1982","scenario_et_the_extra_terrestrial_1982","scenario_aliens_1986"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_a_clockwork_orange_1971":["src/ui/data/scenarioProductionVerificationFinal1970sBatch.ts","seed"],"scenario_scenes_from_a_marriage_1974":["src/ui/data/scenarioProductionVerificationFinal1970sBatch.ts","seed"],"scenario_manhattan_1979":["src/ui/data/scenarioProductionVerificationNewHollywoodNewYorkBatch.ts","seed"],"scenario_raging_bull_1980":["src/ui/data/scenarioProductionVerificationRagingBull.ts","chapterSixteenRagingBullExpansion"],"scenario_raiders_of_the_lost_ark_1981":["src/ui/data/scenarioProductionVerificationRaidersLostArk.ts","chapterSixteenRaidersLostArkExpansion"],"scenario_blade_runner_1982":["src/ui/data/scenarioProductionVerificationBladeRunner.ts","chapterSixteenBladeRunnerExpansion"],"scenario_et_the_extra_terrestrial_1982":["src/ui/data/scenarioProductionVerificationETExtraTerrestrial.ts","chapterSixteenETExtraTerrestrialExpansion"],"scenario_aliens_1986":["src/ui/data/scenarioProductionVerificationAliens.ts","chapterSixteenAliensExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const next = verification.indexOf("\n  },", start);
      const section = verification.slice(start, next < 0 ? undefined : next);
      for (const source of workshop.sources) assert.ok(section.includes(source.url));
    } else if (["scenario_mephisto_1981","scenario_missing_1982","scenario_the_official_story_1985","scenario_come_and_see_1985","scenario_yellow_earth_1984","scenario_police_story_1985","scenario_my_beautiful_laundrette_1985","scenario_yeelen_1987"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_mephisto_1981":["src/ui/data/scenarioProductionVerificationMephisto.ts","chapterSixteenMephistoExpansion"],"scenario_missing_1982":["src/ui/data/scenarioProductionVerificationMissing.ts","chapterSixteenMissingExpansion"],"scenario_the_official_story_1985":["src/ui/data/scenarioProductionVerificationOfficialStory.ts","chapterSixteenOfficialStoryExpansion"],"scenario_come_and_see_1985":["src/ui/data/scenarioProductionVerificationComeAndSee.ts","chapterSixteenComeAndSeeExpansion"],"scenario_yellow_earth_1984":["src/ui/data/scenarioProductionVerificationYellowEarth.ts","chapterSixteenYellowEarthExpansion"],"scenario_police_story_1985":["src/ui/data/scenarioProductionVerificationPoliceStory.ts","chapterSixteenPoliceStoryExpansion"],"scenario_my_beautiful_laundrette_1985":["src/ui/data/scenarioProductionVerificationMyBeautifulLaundrette.ts","chapterSixteenMyBeautifulLaundretteExpansion"],"scenario_yeelen_1987":["src/ui/data/scenarioProductionVerificationYeelen.ts","chapterSixteenYeelenExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_sugar_cane_alley_1983","scenario_the_terminator_1984","scenario_back_to_the_future_1985","scenario_shes_gotta_have_it_1986","scenario_a_better_tomorrow_1986","scenario_robocop_1987","scenario_salaam_bombay_1988","scenario_do_the_right_thing_1989"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_sugar_cane_alley_1983":["src/ui/data/scenarioProductionVerificationSugarCaneAlley.ts","chapterSixteenSugarCaneAlleyExpansion"],"scenario_the_terminator_1984":["src/ui/data/scenarioProductionVerificationTerminator.ts","chapterSixteenTerminatorExpansion"],"scenario_back_to_the_future_1985":["src/ui/data/scenarioProductionVerificationBackToTheFuture.ts","chapterSixteenBackToTheFutureExpansion"],"scenario_shes_gotta_have_it_1986":["src/ui/data/scenarioProductionVerificationShesGottaHaveIt.ts","chapterSixteenShesGottaHaveItExpansion"],"scenario_a_better_tomorrow_1986":["src/ui/data/scenarioProductionVerificationABetterTomorrow.ts","chapterSixteenABetterTomorrowExpansion"],"scenario_robocop_1987":["src/ui/data/scenarioProductionVerificationRoboCop.ts","chapterSixteenRoboCopExpansion"],"scenario_salaam_bombay_1988":["src/ui/data/scenarioProductionVerificationSalaamBombay.ts","chapterSixteenSalaamBombayExpansion"],"scenario_do_the_right_thing_1989":["src/ui/data/scenarioProductionVerificationDoTheRightThing.ts","chapterSixteenDoTheRightThingExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_brazil_1985","scenario_cinema_paradiso_1988","scenario_goodfellas_1990","scenario_boyz_n_the_hood_1991","scenario_my_own_private_idaho_1991","scenario_hyenas_1992","scenario_the_piano_1993","scenario_hoop_dreams_1994"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_brazil_1985":["src/ui/data/scenarioProductionVerificationBrazil.ts","seed"],"scenario_cinema_paradiso_1988":["src/ui/data/scenarioProductionVerificationCinemaParadiso.ts","italyFranceGermanyBeneluxExpansion"],"scenario_goodfellas_1990":["src/ui/data/scenarioProductionVerificationGoodfellas.ts","chapterSeventeenGoodfellasExpansion"],"scenario_boyz_n_the_hood_1991":["src/ui/data/scenarioProductionVerificationBoyzNTheHood.ts","chapterSeventeenBoyzNTheHoodExpansion"],"scenario_my_own_private_idaho_1991":["src/ui/data/scenarioProductionVerificationMyOwnPrivateIdaho.ts","chapterSeventeenMyOwnPrivateIdahoExpansion"],"scenario_hyenas_1992":["src/ui/data/scenarioProductionVerificationHyenas.ts","chapterSeventeenHyenasExpansion"],"scenario_the_piano_1993":["src/ui/data/scenarioProductionVerificationThePiano.ts","chapterSeventeenThePianoExpansion"],"scenario_hoop_dreams_1994":["src/ui/data/scenarioProductionVerificationHoopDreams.ts","chapterSeventeenHoopDreamsExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_sankofa_1993","scenario_pulp_fiction_1994","scenario_chungking_express_1994","scenario_three_colours_red_1994","scenario_bandit_queen_1994","scenario_the_white_balloon_1995","scenario_toy_story_1995","scenario_fire_1996"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_sankofa_1993":["src/ui/data/scenarioProductionVerificationSankofa.ts","chapterSeventeenSankofaExpansion"],"scenario_pulp_fiction_1994":["src/ui/data/scenarioProductionVerificationPulpFiction.ts","chapterSeventeenPulpFictionExpansion"],"scenario_chungking_express_1994":["src/ui/data/scenarioProductionVerificationChungkingExpress.ts","chapterSeventeenChungkingExpressExpansion"],"scenario_three_colours_red_1994":["src/ui/data/scenarioProductionVerificationThreeColoursRed.ts","chapterSeventeenThreeColoursRedExpansion"],"scenario_bandit_queen_1994":["src/ui/data/scenarioProductionVerificationBanditQueen.ts","chapterSeventeenBanditQueenExpansion"],"scenario_the_white_balloon_1995":["src/ui/data/scenarioProductionVerificationTheWhiteBalloon.ts","chapterSeventeenTheWhiteBalloonExpansion"],"scenario_toy_story_1995":["src/ui/data/scenarioProductionVerificationToyStory.ts","chapterSeventeenToyStoryExpansion"],"scenario_fire_1996":["src/ui/data/scenarioProductionVerificationFire.ts","chapterSeventeenFireExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_eves_bayou_1997","scenario_princess_mononoke_1997","scenario_titanic_1997","scenario_ringu_1998","scenario_the_idiots_1998","scenario_the_matrix_1999","scenario_the_blair_witch_project_1999","scenario_boys_dont_cry_1999"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_eves_bayou_1997":["src/ui/data/scenarioProductionVerificationEvesBayou.ts","chapterSeventeenEvesBayouExpansion"],"scenario_princess_mononoke_1997":["src/ui/data/scenarioProductionVerificationPrincessMononoke.ts","chapterSeventeenPrincessMononokeExpansion"],"scenario_titanic_1997":["src/ui/data/scenarioProductionVerificationTitanic.ts","chapterSeventeenTitanicExpansion"],"scenario_ringu_1998":["src/ui/data/scenarioProductionVerificationRingu.ts","chapterSeventeenRinguExpansion"],"scenario_the_idiots_1998":["src/ui/data/scenarioProductionVerificationTheIdiots.ts","chapterSeventeenTheIdiotsExpansion"],"scenario_the_matrix_1999":["src/ui/data/scenarioProductionVerificationTheMatrix.ts","chapterSeventeenTheMatrixExpansion"],"scenario_the_blair_witch_project_1999":["src/ui/data/scenarioProductionVerificationBlairWitchProject.ts","chapterSeventeenBlairWitchProjectExpansion"],"scenario_boys_dont_cry_1999":["src/ui/data/scenarioProductionVerificationBoysDontCry.ts","chapterSeventeenBoysDontCryExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_in_the_mood_for_love_2000","scenario_yi_yi_2000","scenario_crouching_tiger_hidden_dragon_2000","scenario_spirited_away_2001","scenario_amelie_2001","scenario_city_of_god_2002"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_in_the_mood_for_love_2000":["src/ui/data/scenarioProductionVerificationInTheMoodForLove.ts","chapterEighteenInTheMoodForLoveExpansion"],"scenario_yi_yi_2000":["src/ui/data/scenarioProductionVerificationYiYi.ts","chapterEighteenYiYiExpansion"],"scenario_crouching_tiger_hidden_dragon_2000":["src/ui/data/scenarioProductionVerificationCrouchingTigerHiddenDragon.ts","chapterEighteenCrouchingTigerHiddenDragonExpansion"],"scenario_spirited_away_2001":["src/ui/data/scenarioProductionVerificationSpiritedAway.ts","chapterEighteenSpiritedAwayExpansion"],"scenario_amelie_2001":["src/ui/data/scenarioProductionVerificationAmelie.ts","seed"],"scenario_city_of_god_2002":["src/ui/data/scenarioProductionVerificationCityOfGod.ts","chapterEighteenCityOfGodExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_oldboy_2003","scenario_dogville_2003","scenario_brokeback_mountain_2005","scenario_cache_2005","scenario_pans_labyrinth_2006","scenario_children_of_men_2006"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_oldboy_2003":["src/ui/data/scenarioProductionVerificationOldboy.ts","chapterEighteenOldboyExpansion"],"scenario_dogville_2003":["src/ui/data/scenarioProductionVerificationDogville.ts","seed"],"scenario_brokeback_mountain_2005":["src/ui/data/scenarioProductionVerificationBrokebackMountain.ts","chapterEighteenBrokebackMountainExpansion"],"scenario_cache_2005":["src/ui/data/scenarioProductionVerificationCache.ts","chapterEighteenCacheExpansion"],"scenario_pans_labyrinth_2006":["src/ui/data/scenarioProductionVerificationPansLabyrinth.ts","chapterEighteenPansLabyrinthExpansion"],"scenario_children_of_men_2006":["src/ui/data/scenarioProductionVerificationChildrenOfMen.ts","chapterEighteenChildrenOfMenExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_the_lives_of_others_2006","scenario_no_country_for_old_men_2007","scenario_there_will_be_blood_2007","scenario_the_white_ribbon_2009","scenario_a_prophet_2009","scenario_avatar_2009"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_the_lives_of_others_2006":["src/ui/data/scenarioProductionVerification.ts","seed"],"scenario_no_country_for_old_men_2007":["src/ui/data/scenarioProductionVerificationLandscapeBatch.ts","seed"],"scenario_there_will_be_blood_2007":["src/ui/data/scenarioProductionVerificationThereWillBeBlood.ts","chapterEighteenThereWillBeBloodExpansion"],"scenario_the_white_ribbon_2009":["src/ui/data/scenarioProductionVerificationEuropeanTimeIdentitySystemsBatch.ts","italyFranceGermanyBeneluxExpansion"],"scenario_a_prophet_2009":["src/ui/data/scenarioProductionVerificationNextFour2008_2009Batch.ts","seed"],"scenario_avatar_2009":["src/ui/data/scenarioProductionVerificationAvatar.ts","chapterEighteenAvatarExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_zodiac_2007","scenario_walle_2008","scenario_slumdog_millionaire_2008","scenario_the_class_2008","scenario_district_9_2009","scenario_alamar_2009","scenario_uncle_boonmee_2010","scenario_the_social_network_2010"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_zodiac_2007":["src/ui/data/scenarioProductionVerificationZodiac.ts","chapterEighteenZodiacExpansion"],"scenario_walle_2008":["src/ui/data/scenarioProductionVerificationNextFour2008_2009Batch.ts","seed"],"scenario_slumdog_millionaire_2008":["src/ui/data/scenarioProductionVerificationSlumdogMillionaire.ts","chapterEighteenSlumdogMillionaireExpansion"],"scenario_the_class_2008":["src/ui/data/scenarioProductionVerificationNextFour2008_2009Batch.ts","seed"],"scenario_district_9_2009":["src/ui/data/scenarioProductionVerificationModernBatch.ts","seed"],"scenario_alamar_2009":["src/ui/data/scenarioProductionVerificationNextFour2008_2009Batch.ts","seed"],"scenario_uncle_boonmee_2010":["src/ui/data/scenarioProductionVerificationUncleBoonmee.ts","chapterEighteenUncleBoonmeeExpansion"],"scenario_the_social_network_2010":["src/ui/data/scenarioProductionVerificationTheSocialNetwork.ts","chapterEighteenTheSocialNetworkExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_tree_of_life_2011","scenario_a_separation_2011","scenario_pina_2011","scenario_amour_2012","scenario_holy_motors_2012","scenario_gravity_2013","scenario_ida_2013"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_tree_of_life_2011":["src/ui/data/scenarioProductionVerificationTreeOfLife.ts","chapterEighteenTreeOfLifeExpansion"],"scenario_a_separation_2011":["src/ui/data/scenarioProductionVerificationASeparation.ts","chapterEighteenASeparationExpansion"],"scenario_pina_2011":["src/ui/data/scenarioProductionVerificationPina.ts","chapterEighteenPinaExpansion"],"scenario_amour_2012":["src/ui/data/scenarioProductionVerificationAmour.ts","chapterEighteenAmourExpansion"],"scenario_holy_motors_2012":["src/ui/data/scenarioProductionVerificationHolyMotors.ts","chapterEighteenHolyMotorsExpansion"],"scenario_gravity_2013":["src/ui/data/scenarioProductionVerificationGravity.ts","chapterEighteenGravityExpansion"],"scenario_ida_2013":["src/ui/data/scenarioProductionVerificationIda.ts","chapterEighteenIdaExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (["scenario_boyhood_2014","scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014","scenario_ex_machina_2014","scenario_mad_max_fury_road_2015","scenario_son_of_saul_2015","scenario_victoria_2015","scenario_the_revenant_2015","scenario_moonlight_2016"].includes(workshop.scenarioId)) {
      const configs: Record<string, [string, string]> = {"scenario_boyhood_2014":["src/ui/data/scenarioProductionVerificationModernBatch.ts","seed"],"scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014":["src/ui/data/scenarioProductionVerificationModernBatch.ts","seed"],"scenario_ex_machina_2014":["src/ui/data/scenarioProductionVerificationModernBatch.ts","seed"],"scenario_mad_max_fury_road_2015":["src/ui/data/scenarioProductionVerificationMethodBatch.ts","seed"],"scenario_son_of_saul_2015":["src/ui/data/scenarioProductionVerificationSonOfSaul.ts","chapterEighteenSonOfSaulExpansion"],"scenario_victoria_2015":["src/ui/data/scenarioProductionVerificationCrossEraBatch.ts","seed"],"scenario_the_revenant_2015":["src/ui/data/scenarioProductionVerificationTheRevenant.ts","chapterEighteenTheRevenantExpansion"],"scenario_moonlight_2016":["src/ui/data/scenarioProductionVerificationMoonlight.ts","chapterEighteenMoonlightExpansion"]};
      const [path, definition] = configs[workshop.scenarioId]!;
      if (definition === "seed") assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
      else assert.ok(readFileSync("src/core/" + definition + ".ts", "utf8").includes(workshop.scenarioId));
      const verification = readFileSync(path, "utf8");
      assert.ok(verification.includes('scenarioId: "' + workshop.scenarioId + '"'));
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (workshop.scenarioId === "scenario_a_trip_to_the_moon_1902") {
      const definition = readFileSync("src/core/earlyCinemaExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationSilentFoundationsBatch.ts", "utf8");
      const start = verification.indexOf('scenarioId: "' + workshop.scenarioId + '"');
      assert.ok(start >= 0);
      const dossier = verification.slice(start, verification.indexOf("\n  },", start));
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (workshop.scenarioId === "scenario_rescued_by_rover_1905") {
      const definition = readFileSync("src/core/chapterOneRescuedByRoverExpansion.ts", "utf8");
      assert.ok(definition.includes(workshop.scenarioId));
      const dossier = readFileSync("src/ui/data/scenarioProductionVerificationRescuedByRover.ts", "utf8");
      for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
    } else if (workshop.scenarioId === "scenario_atanarjuat_the_fast_runner_2001") {
      const manual = readFileSync("src/core/chapterEighteenAtanarjuatExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_atanarjuat_the_fast_runner_2001"/);
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationAtanarjuat.ts", "utf8");
      assert.match(verification, /status: "verified"/);
      for (const source of workshop.sources) assert.ok(verification.includes(source.url));
    } else if (workshop.scenarioId === "scenario_russian_ark_2002") {
      const manual = readFileSync("src/core/chapterEighteenRussianArkExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_russian_ark_2002"/);
      const verification = readFileSync("src/ui/data/scenarioProductionVerificationRussianArk.ts", "utf8");
      assert.match(verification, /status: "verified"/);
    } else if (workshop.scenarioId === "scenario_all_the_beauty_and_the_bloodshed_2022") {
      const manual = readFileSync("src/core/modernCanonExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_all_the_beauty_and_the_bloodshed_2022", title: "All the Beauty and the Bloodshed"[^\n]*year: 2022/);
    } else if (workshop.scenarioId === "scenario_peppermint_candy_1999") {
      const manual = readFileSync("src/core/southKoreanCinemaExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_peppermint_candy_1999",\s*title: "Peppermint Candy",[\s\S]{0,120}year: 1999/);
    } else if (workshop.scenarioId === "scenario_vive_l_amour_1994") {
      const manual = readFileSync("src/core/eastAsianAuteurExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_vive_l_amour_1994",\s*title: "Vive L\x27Amour",[\s\S]{0,120}year: 1994/);
    } else if (workshop.scenarioId === "scenario_a_city_of_sadness_1989") {
      const manual = readFileSync("src/core/modernCanonExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_a_city_of_sadness_1989", title: "A City of Sadness"[^\n]*year: 1989/);
    } else if (workshop.scenarioId === "scenario_raise_the_red_lantern_1991") {
      const manual = readFileSync("src/core/eastAsianAuteurExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_raise_the_red_lantern_1991",\s*title: "Raise the Red Lantern",[\s\S]{0,100}year: 1991/);
    } else if (workshop.scenarioId === "scenario_platform_2000") {
      const manual = readFileSync("src/core/modernCanonExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_platform_2000", title: "Platform"[^\n]*year: 2000/);
    } else if (workshop.scenarioId === "scenario_still_life_2006") {
      const manual = readFileSync("src/core/modernCanonExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_still_life_2006", title: "Still Life"[^\n]*year: 2006/);
    } else if (workshop.scenarioId === "scenario_the_host_2006") {
      const manual = readFileSync("src/core/southKoreanCinemaExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_the_host_2006",\s*title: "The Host",\s*originalTitle: "Gwoemul",[\s\S]{0,100}year: 2006/);
    } else if (workshop.scenarioId !== "scenario_cure_1997") {
      assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
    } else {
      const manual = readFileSync("src/core/modernCanonExpansion.ts", "utf8");
      assert.match(manual, /id: "scenario_cure_1997", title: "Cure"[^\n]*year: 1997/);
    }
    assert.strictEqual(getSourceBackedCaseWorkshop(workshop.scenarioId), workshop);
    assert.equal(new Set(workshop.questions.map(q => q.id)).size, 3);
    assert.equal(new Set(workshop.sources.map(s => s.id)).size, workshop.sources.length);
    const sourcesById = new Map(workshop.sources.map(s => [s.id, s]));
    for (const source of workshop.sources) {
      assert.match(source.url, /^https:\/\//);
      assert.ok(source.publisher.trim().length > 0, `Missing publisher for ${workshop.scenarioId}: ${source.id}`);
      assert.ok(source.title.trim().length > 0, `Missing title for ${workshop.scenarioId}: ${source.id}`);
    }
    for (const question of workshop.questions) {
      assert.equal(question.options.length, 3);
      assert.equal(new Set(question.options.map(o => o.id)).size, 3);
      assert.equal(question.options.filter(o => isBestSupportedWorkshopOption(question, o.id)).length, 1);
      assert.ok(question.sourceIds.length >= 1);
      for (const id of question.sourceIds) assert.ok(sourcesById.has(id), `Unknown citation in ${question.id}: ${id}`);
      for (const language of FILMWORK_LANGUAGES) {
        assert.ok(workshop.introduction[language].trim().length > 20);
        assert.ok(question.prompt[language].trim().length > 20);
        assert.ok(question.explanation[language].trim().length > 45);
        for (const option of question.options) assert.ok(option.label[language].trim().length > 12);
      }
    }
  }
  assert.equal(getSourceBackedCaseWorkshop("scenario_host_2020"), undefined);
  assert.equal(getSourceBackedCaseWorkshop("scenario_tangerines_2013"), undefined);
});

test("Festen exercises present the handheld DV workflow without resolving a disputed Sony camera model", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[0]);
  assert.ok(workshop);
  const camera = workshop.questions.find(q => q.id === "festen-camera");
  const sound = workshop.questions.find(q => q.id === "festen-sound");
  const model = workshop.questions.find(q => q.id === "festen-camera-uncertainty");
  assert.ok(camera && sound && model);
  assert.equal(camera.bestSupportedOptionId, "handheld-dv");
  assert.equal(sound.bestSupportedOptionId, "voices-room");
  assert.equal(model.bestSupportedOptionId, "model-uncertain");
  assert.match(model.explanation.en, /PC7/);
  assert.match(model.explanation.en, /PC3/);
  assert.ok(model.sourceIds.includes("criterion-camera"));
  assert.ok(model.sourceIds.includes("bfi-digital"));
});

test("Waltz with Bashir does not mistake animation methods or testimony for historical corroboration", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[1]);
  assert.ok(workshop);
  const animation = workshop.questions.find(q => q.id === "bashir-animation");
  const historical = workshop.questions.find(q => q.id === "bashir-research");
  assert.ok(animation && historical);
  assert.equal(animation.bestSupportedOptionId, "drawn-storyboards");
  assert.equal(historical.bestSupportedOptionId, "separate-evidence");
  assert.match(animation.explanation.en, /not rotoscoped/i);
  assert.match(historical.explanation.en, /independent proof/);
  assert.ok(workshop.sources.some(source => source.url.includes("sonyclassics.com/waltzwithbashir")));
});

test("Tangerine teaches professional image and audio workflow rather than a phone-only myth", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[2]);
  assert.ok(workshop);
  const camera = workshop.questions.find(q => q.id === "tangerine-camera");
  const sound = workshop.questions.find(q => q.id === "tangerine-sound");
  const research = workshop.questions.find(q => q.id === "tangerine-research");
  assert.ok(camera && sound && research);
  assert.equal(camera.bestSupportedOptionId, "iphone-lens");
  assert.equal(sound.bestSupportedOptionId, "pro-sound");
  assert.equal(research.bestSupportedOptionId, "collaborative-research");
  assert.match(camera.explanation.en, /Moondog Labs/);
  assert.match(sound.explanation.en, /professional/);
  assert.ok(workshop.sources.some(s => s.publisher === "Academy Museum of Motion Pictures"));
});

test("The source exercise is visible but isolated from case verification, scoring and saved progress", () => {
  assert.match(panel, /<ScenarioProductionSourceWorkshop scenarioId=\{scenario\.id\} language=\{language\} \/>/);
  assert.match(sourcePanel, /aria-pressed=\{selected === option\.id\}/);
  assert.match(sourcePanel, /<details className="scenario-source-workshop__sources">/);
  assert.match(sourcePanel, /type="button"/);
  assert.doesNotMatch(sourcePanel, /(?:setProductionCaseMissionChoice|setProductionCaseMissionCompletion|writeProductionCaseProgress)/);
  for (const id of ids.slice(0, 3)) {
    const source = seeds.scenarios.find((s: {id: string}) => s.id === id);
    assert.equal(source?.status, "imported_seed_needs_film_specific_design");
  }
});

test("Cure distinguishes firsthand production evidence from analysis and preserves ambiguity", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[3]);
  assert.ok(workshop);
  const [duration, space, ending] = workshop.questions;
  assert.ok(duration && space && ending);
  assert.equal(duration.bestSupportedOptionId, "sustained-performance");
  assert.ok(duration.sourceIds.includes("tiff-qa"));
  assert.equal(space.bestSupportedOptionId, "foreground-background");
  assert.match(space.explanation.en, /critical analysis/);
  assert.ok(space.sourceIds.includes("fujiwara"));
  assert.equal(ending.bestSupportedOptionId, "withhold-explicit-action");
  assert.match(ending.explanation.en, /does not establish one definitive interpretation/);
});

test("The Host links practical water effects, international workflow and performance to distinct evidence", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[4]);
  assert.ok(workshop);
  const [water, pipeline, family] = workshop.questions;
  assert.ok(water && pipeline && family);
  assert.equal(water.bestSupportedOptionId, "practical-splash");
  assert.ok(water.sourceIds.includes("bong-practical"));
  assert.equal(pipeline.bestSupportedOptionId, "shared-pipeline");
  assert.ok(pipeline.sourceIds.includes("kofic"));
  assert.equal(family.bestSupportedOptionId, "grounded-family");
  assert.ok(family.sourceIds.includes("kpbs"));
  assert.equal(getSourceBackedCaseWorkshop("scenario_host_2020"), undefined);
});

test("Still Life distinguishes digital capture, festival format, documentary and imagined events", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[5]);
  assert.ok(workshop);
  const [location, diptych, surreal] = workshop.questions;
  assert.ok(location && diptych && surreal);
  assert.equal(location.bestSupportedOptionId, "responsive-digital");
  assert.match(location.explanation.en, /does not establish the acquisition medium/);
  assert.equal(diptych.bestSupportedOptionId, "observe-transform");
  assert.ok(diptych.sourceIds.includes("photogenie-diptych"));
  assert.equal(surreal.bestSupportedOptionId, "express-dislocation");
  assert.match(surreal.explanation.en, /not evidence/);
});

test("Platform distinguishes camera distance, preserved time and guided improvisation", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[6]);
  assert.ok(workshop);
  const [distance, duration, performance] = workshop.questions;
  assert.ok(distance && duration && performance);
  assert.equal(distance.bestSupportedOptionId, "observational-distance");
  assert.match(distance.explanation.en, /absolute objectivity/);
  assert.equal(duration.bestSupportedOptionId, "preserved-time");
  assert.match(duration.explanation.en, /not a rule/);
  assert.equal(performance.bestSupportedOptionId, "guided-improvisation");
  assert.match(performance.explanation.en, /dialogue was written/);
  assert.ok(performance.sourceIds.includes("senses-jia"));
});

test("Raise the Red Lantern distinguishes visual design from historical authentication", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[7]);
  assert.ok(workshop);
  const [architecture, color, ritual] = workshop.questions;
  assert.ok(architecture && color && ritual);
  assert.equal(architecture.bestSupportedOptionId, "architectural-frame");
  assert.equal(color.bestSupportedOptionId, "selective-red");
  assert.match(color.explanation.en, /not a claim about exact lamp wattage/);
  assert.equal(ritual.bestSupportedOptionId, "constructed-ritual");
  assert.ok(ritual.sourceIds.includes("ritual-study"));
  assert.match(ritual.explanation.en, /inventions for the film/);
});

test("A City of Sadness links depth staging, sync sound and indirect narration to evidence", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[8]);
  assert.ok(workshop);
  const [depth, sound, history] = workshop.questions;
  assert.ok(depth && sound && history);
  assert.equal(depth.bestSupportedOptionId, "sustained-depth");
  assert.ok(depth.sourceIds.includes("ucla-city"));
  assert.equal(sound.bestSupportedOptionId, "sync-location");
  assert.ok(sound.sourceIds.includes("tu-interview"));
  assert.equal(history.bestSupportedOptionId, "family-perspective");
  assert.match(history.explanation.en, /independently sourced historical records/);
});

test("Vive L'Amour distinguishes location adaptation, sustained performance and sparse sound", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[9]);
  assert.ok(workshop);
  const [location, duration, sound] = workshop.questions;
  assert.ok(location && duration && sound);
  assert.equal(location.bestSupportedOptionId, "adapt-to-place");
  assert.ok(location.sourceIds.includes("rabbit-interview"));
  assert.equal(duration.bestSupportedOptionId, "allow-duration");
  assert.match(duration.explanation.en, /without fixing a disputed exact running time/);
  assert.equal(sound.bestSupportedOptionId, "ambient-gestures");
  assert.ok(sound.sourceIds.includes("eye-vive"));
  assert.match(sound.explanation.en, /not a claim about the exact microphone/);
});

test("Peppermint Candy separates reverse shooting, visual transitions and historical verification", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[10]);
  assert.ok(workshop);
  const [shooting, transition, causality] = workshop.questions;
  assert.ok(shooting && transition && causality);
  assert.equal(shooting.bestSupportedOptionId, "reverse-shoot");
  assert.ok(shooting.sourceIds.includes("lee-shooting"));
  assert.equal(transition.bestSupportedOptionId, "repeated-motion");
  assert.match(transition.explanation.en, /not recreating dangerous action/);
  assert.equal(causality.bestSupportedOptionId, "effect-before-cause");
  assert.ok(causality.sourceIds.includes("lee-time"));
  assert.match(causality.explanation.en, /without turning fiction into an archive/);
});

test("All the Beauty and the Bloodshed distinguishes audio interviews, archive integrity and thematic editing", () => {
  const workshop = getSourceBackedCaseWorkshop(ids[11]);
  assert.ok(workshop);
  const [interview, archive, edit] = workshop.questions;
  assert.ok(interview && archive && edit);
  assert.equal(interview.bestSupportedOptionId, "audio-conversation");
  assert.ok(interview.sourceIds.includes("poitras-pov"));
  assert.match(interview.explanation.en, /pause or decline/);
  assert.equal(archive.bestSupportedOptionId, "respect-frame");
  assert.match(archive.explanation.en, /verify permissions and credits separately/);
  assert.equal(edit.bestSupportedOptionId, "interwoven-strands");
  assert.ok(edit.sourceIds.includes("praxis-credits"));
  assert.match(edit.explanation.en, /independent verification/);
});

test("Russian Ark separates capture duration, safe coordination, and post-production", () => {
  const workshop = getSourceBackedCaseWorkshop("scenario_russian_ark_2002");
  assert.ok(workshop);
  const [capture, rehearsal, post] = workshop.questions;
  assert.ok(capture && rehearsal && post);
  assert.equal(capture.bestSupportedOptionId, "disk");
  assert.match(capture.explanation.en, /acquisition separate from exhibition/);
  assert.equal(rehearsal.bestSupportedOptionId, "rehearse");
  assert.match(rehearsal.explanation.en, /consent and breaks/);
  assert.equal(post.bestSupportedOptionId, "finish");
  assert.match(post.explanation.en, /single take does not mean no post-production/);
  const dossier = readFileSync("src/ui/data/scenarioProductionVerificationRussianArk.ts", "utf8");
  for (const source of workshop.sources) assert.ok(dossier.includes(source.url));
});

test("Russian Ark has a dedicated playable brief, not the seed fallback", () => {
  const resolver = readFileSync("src/ui/data/scenarioProductionBriefs.ts", "utf8");
  const ark = readFileSync("src/ui/data/scenarioProductionBriefsRussianArk.ts", "utf8");
  assert.match(resolver, /\?\? getRussianArkProductionBrief\(scenario\)/);
  assert.match(ark, /briefType: "production_case"/);
  assert.match(ark, /verificationStatus: "verified"/);
  assert.match(ark, /definition\.id|item\.id === scenario\.id/);
});

test("Atanarjuat respects community authority and separates capture from exhibition", () => {
  const workshop = getSourceBackedCaseWorkshop("scenario_atanarjuat_the_fast_runner_2001");
  assert.ok(workshop);
  const [oral, crew, format] = workshop.questions;
  assert.ok(oral && crew && format);
  assert.equal(oral.bestSupportedOptionId, "collaborate");
  assert.match(oral.explanation.en, /explicitly authorized/);
  assert.equal(crew.bestSupportedOptionId, "local");
  assert.match(crew.explanation.en, /not universal staffing quotas/);
  assert.equal(format.bestSupportedOptionId, "separate");
  assert.match(format.explanation.en, /Digital Betacam/);
  assert.match(format.explanation.en, /digital-to-film transfer/);
  const resolver = readFileSync("src/ui/data/scenarioProductionBriefs.ts", "utf8");
  const dedicated = readFileSync("src/ui/data/scenarioProductionBriefsAtanarjuat.ts", "utf8");
  assert.match(resolver, /\?\? getAtanarjuatProductionBrief\(scenario\)/);
  assert.match(dedicated, /briefType: "production_case"/);
  assert.match(dedicated, /verificationStatus: "verified"/);
});

test("Early camera workshops distinguish staged performance, fixed framing and actuality versions", () => {
  const blacksmith = getSourceBackedCaseWorkshop("scenario_blacksmith_scene_1893");
  const lumiere = getSourceBackedCaseWorkshop("scenario_workers_leaving_lumiere_factory_1895");
  assert.ok(blacksmith && lumiere);
  assert.deepEqual(blacksmith.questions.map(q => q.bestSupportedOptionId), ["staged", "tableau", "sunlight"]);
  assert.deepEqual(lumiere.questions.map(q => q.bestSupportedOptionId), ["gate", "compare", "system"]);
  assert.match(blacksmith.questions[0]?.explanation.en ?? "", /laboratory employees/);
  assert.match(lumiere.questions[1]?.explanation.en ?? "", /distinct surviving versions/);
});

test("Rescue-film exercises separate narrative space, version provenance and original temporal construction", () => {
  const fire = getSourceBackedCaseWorkshop("scenario_fire_1901");
  const porter = getSourceBackedCaseWorkshop("scenario_life_of_an_american_fireman_1903");
  assert.ok(fire && porter);
  assert.deepEqual(fire.questions.map(q => q.bestSupportedOptionId), ["sequence", "distinguish", "board"]);
  assert.deepEqual(porter.questions.map(q => q.bestSupportedOptionId), ["deposit", "viewpoints", "evidence"]);
  assert.match(porter.questions[0]?.explanation.en ?? "", /copyright paper print/);
  assert.match(porter.questions[1]?.explanation.en ?? "", /replay outside/);
});

 test("Early continuity workshops distinguish historical editing, route clarity and replacement versions", () => {
  const train = getSourceBackedCaseWorkshop("scenario_the_great_train_robbery_1903");
  const rover = getSourceBackedCaseWorkshop("scenario_rescued_by_rover_1905");
  assert.ok(train && rover);
  assert.deepEqual(train.questions.map(q => q.bestSupportedOptionId), ["hybrid", "historical", "context"]);
  assert.deepEqual(rover.questions.map(q => q.bestSupportedOptionId), ["landmarks", "draw", "compare"]);
  assert.match(rover.questions[2]?.explanation.en ?? "", /re-shooting/);
});

test("Exhibition workshops preserve provenance, staged actuality and fictional spectators", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_corbett_fitzsimmons_fight_1897")?.questions.map(q => q.bestSupportedOptionId), ["handoff","system","separate"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_employees_leaving_browns_atlas_works_sheffield_1901")?.questions.map(q => q.bestSupportedOptionId), ["recognize","distinguish","local"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_uncle_josh_at_the_moving_picture_show_1902")?.questions.map(q => q.bestSupportedOptionId), ["space","beats","separate"]);
});

test("Méliès workshop separates studio techniques, original exercises and restoration music", () => {
  const moon = getSourceBackedCaseWorkshop("scenario_a_trip_to_the_moon_1902");
  assert.ok(moon);
  assert.deepEqual(moon.questions.map(q => q.bestSupportedOptionId), ["tableau", "substitution", "provenance"]);
  assert.match(moon.questions[2]?.explanation.en ?? "", /new music by Air/);
});

test("Early narrative workshops distinguish represented gaze, memory and historical context", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_grandmas_reading_glass_1900")?.questions.map(q => q.bestSupportedOptionId), ["look","mask","context"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_histoire_d_un_crime_1901")?.questions.map(q => q.bestSupportedOptionId), ["planes","sequence","system"]);
});

test("Early narrative workshops distinguish reconstruction, representation and parallel narration", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900")?.questions.map(q => q.bestSupportedOptionId), ["draw","compare","context"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_lonely_villa_1909")?.questions.map(q => q.bestSupportedOptionId), ["parallel","visual","development"]);
});

test("Early industry workshops distinguish feature scale, rights and historical evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_story_of_the_kelly_gang_1906")?.questions.map(q => q.bestSupportedOptionId), ["reels","live","limits"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_queen_elizabeth_1912")?.questions.map(q => q.bestSupportedOptionId), ["costume","roles","attribute"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_traffic_in_souls_1913")?.questions.map(q => q.bestSupportedOptionId), ["model","separate","evidence"]);
});

test("International workshops distinguish serial identity, collaborative spectacle and edition history", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_fantomas_1913")?.questions.map(q => q.bestSupportedOptionId), ["memory","credits","version"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_cabiria_1914")?.questions.map(q => q.bestSupportedOptionId), ["reveal","collaboration","editions"]);
});

test("Danish silent workshops distinguish performance, adaptation and market versions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_afgrunden_1910")?.questions.map(q => q.bestSupportedOptionId), ["gesture","focus","context"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_atlantis_1913")?.questions.map(q => q.bestSupportedOptionId), ["roles","model","versions"]);
});

test("Source validation accepts the exact short publisher name Pathé", () => {
  const workshop = getSourceBackedCaseWorkshop("scenario_histoire_d_un_crime_1901");
  assert.ok(workshop);
  assert.ok(workshop.sources.some(source => source.publisher === "Pathé" && source.url === "https://www.pathe.com/en/pathe/"));
});

test("The General workshop distinguishes visual comedy, collaborative credits and music cues", () => {
  const general = getSourceBackedCaseWorkshop("scenario_the_general_1926");
  assert.ok(general);
  assert.deepEqual(general.questions.map(q => q.bestSupportedOptionId), ["clear","team","context"]);
});

test("Hollywood workshops distinguish expressive craft, collaboration and edition histories", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_cheat_1915")?.questions.map(q => q.bestSupportedOptionId), ["contrast","team","critical"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_gold_rush_1925")?.questions.map(q => q.bestSupportedOptionId), ["match","roles","distinguish"]);
});

test("Mature silent Hollywood workshops distinguish publicity, collaboration and versions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_it_1927")?.questions.map(q => q.bestSupportedOptionId), ["gesture","system","credit"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_wings_1927")?.questions.map(q => q.bestSupportedOptionId), ["map","roles","layers"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_crowd_1928")?.questions.map(q => q.bestSupportedOptionId), ["scale","consent","versions"]);
});

test("Weimar workshops distinguish constructed space, location atmosphere and edition history", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_cabinet_of_dr_caligari_1920")?.questions.map(q => q.bestSupportedOptionId), ["graphic","perspective","layers"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_nosferatu_1922")?.questions.map(q => q.bestSupportedOptionId), ["frame","study","version"]);
});

test("Weimar workshops distinguish mobile camera, collaborative design and version evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_last_laugh_1924")?.questions.map(q => q.bestSupportedOptionId), ["motivated","visual","collaboration"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_metropolis_1927")?.questions.map(q => q.bestSupportedOptionId), ["scale","roles","provenance"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_pandoras_box_1929")?.questions.map(q => q.bestSupportedOptionId), ["gesture","credits","edition"]);
  assert.ok(getSourceBackedCaseWorkshop("scenario_metropolis_1927")?.sources.some(s => s.title === "Metropolis" && s.publisher === "filmportal.de"));
});

test("French Impressionist workshops distinguish perception, agency and source evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_coeur_fidele_1923")?.questions.map(q => q.bestSupportedOptionId), ["rhythm","theory","team"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_smiling_madame_beudet_1923")?.questions.map(q => q.bestSupportedOptionId), ["contrast","agency","records"]);
});

test("French experimental workshops distinguish event cinema, triptych design and archival editions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_entr_acte_1924")?.questions.map(q => q.bestSupportedOptionId), ["rhythm","event","edition"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_napoleon_1927")?.questions.map(q => q.bestSupportedOptionId), ["panels","roles","provenance"]);
});

test("French workshops distinguish surreal association, emotional coherence and historical evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_un_chien_andalou_1929")?.questions.map(q => q.bestSupportedOptionId), ["association","roles","context"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_passion_of_joan_of_arc_1928")?.questions.map(q => q.bestSupportedOptionId), ["faces","emotion","distinguish"]);
});

test("Pudovkin and Shub workshops distinguish linkage, archival provenance and edition evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_mother_1926")?.questions.map(q => q.bestSupportedOptionId), ["link","roles","copies"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_fall_of_the_romanov_dynasty_1927")?.questions.map(q => q.bestSupportedOptionId), ["provenance","compare","preserve"]);
});

test("Eisenstein and Vertov workshops distinguish contrast, constructed time and documentary evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_battleship_potemkin_1925")?.questions.map(q => q.bestSupportedOptionId), ["contrast","duration","context"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_man_with_a_movie_camera_1929")?.questions.map(q => q.bestSupportedOptionId), ["construct","team","evidence"]);
});

test("Montage and early Asian cinema workshops distinguish interpretation, collaboration and historical provenance", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_earth_1930")?.questions.map(q => q.bestSupportedOptionId), ["lyric","context","chronology"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_october_1928")?.questions.map(q => q.bestSupportedOptionId), ["idea","distinguish","edition"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_mr_west_bolsheviks_1924")?.questions.map(q => q.bestSupportedOptionId), ["connect","compare","roles"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_a_page_of_madness_1926")?.questions.map(q => q.bestSupportedOptionId), ["rhythm","roles","version"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_laborers_love_1922")?.questions.map(q => q.bestSupportedOptionId), ["timing","compare","context"]);
});

test("World silent cinema workshops distinguish collaboration, survival and restoration evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_a_throw_of_dice_1929")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_growth_of_the_soil_1921")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_orochi_1925")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_red_heroine_1929")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_haxan_1922")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_phantom_carriage_1921")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
});

test("Early sound workshops distinguish formats, collaboration, version history and representation", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_jazz_singer_1927")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_blackmail_1929")?.questions.map(q => q.bestSupportedOptionId), ["choice-1","choice-0","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_applause_1929")?.questions.map(q => q.bestSupportedOptionId), ["choice-2","choice-0","choice-1"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_neighbors_wife_and_mine_1931")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-2","choice-1"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_broadway_melody_1929")?.questions.map(q => q.bestSupportedOptionId), ["choice-1","choice-0","choice-2"]);
});

test("Sound cinema workshops distinguish sound perspective, counterpoint, language versions and pantomime", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_sous_les_toits_de_paris_1930")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_enthusiasm_1930")?.questions.map(q => q.bestSupportedOptionId), ["choice-1","choice-2","choice-0"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_blue_angel_1930")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_m_1931")?.questions.map(q => q.bestSupportedOptionId), ["choice-1","choice-0","choice-2"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_city_lights_1931")?.questions.map(q => q.bestSupportedOptionId), ["choice-0","choice-1","choice-2"]);
});

test("Studio-system workshops preserve the distinct film cases and question choices", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_public_enemy_1931")?.questions.map(q => q.id), ["publicenemy-studio","publicenemy-voice","publicenemy-code"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_dracula_1931")?.questions.map(q => q.id), ["dracula-versions","dracula-sets","dracula-atmosphere"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_42nd_street_1933")?.questions.map(q => q.id), ["42ndstreet-choreography","42ndstreet-playback","42ndstreet-labor"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_scarface_1932")?.questions.map(q => q.id), ["scarface-versions","scarface-regulation","scarface-package"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_it_happened_one_night_1934")?.questions.map(q => q.id), ["ithappenedonenight-stars","ithappenedonenight-dialogue","ithappenedonenight-reception"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_top_hat_1935")?.questions.map(q => q.id), ["tophat-framing","tophat-rehearsal","tophat-credits"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_gone_with_the_wind_1939")?.questions.map(q => q.id), ["gonewiththewind-package","gonewiththewind-color","gonewiththewind-representation"]);
});


test("1930s production workshops retain film-specific questions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_king_kong_1933")?.questions.map(q => q.id), ["kingkong-scale","kingkong-score","kingkong-versions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_modern_times_1936")?.questions.map(q => q.id), ["moderntimes-pantomime","moderntimes-voices","moderntimes-production"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_snow_white_and_the_seven_dwarfs_1937")?.questions.map(q => q.id), ["snowwhiteandthesevendwarfs-personality","snowwhiteandthesevendwarfs-depth","snowwhiteandthesevendwarfs-pipeline"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_rules_of_the_game_1939")?.questions.map(q => q.id), ["therulesofthegame-staging","therulesofthegame-rhythm","therulesofthegame-reconstruction"]);
});


test("Classical Hollywood workshops preserve film-specific craft and evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_stagecoach_1939")?.questions.map(q => q.id), ["stagecoach-landscape","stagecoach-continuity","stagecoach-ensemble"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_wizard_of_oz_1939")?.questions.map(q => q.id), ["thewizardofoz-color","thewizardofoz-song","thewizardofoz-departments"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_citizen_kane_1941")?.questions.map(q => q.id), ["citizenkane-depth","citizenkane-testimony","citizenkane-sound"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_casablanca_1942")?.questions.map(q => q.id), ["casablanca-revision","casablanca-studio","casablanca-music"]);
});


test("Postwar and wartime transition workshops preserve film-specific evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_rome_open_city_1945")?.questions.map(q => q.id), ["romeopencity-locations","romeopencity-performance","romeopencity-stock"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_double_indemnity_1944")?.questions.map(q => q.id), ["doubleindemnity-confession","doubleindemnity-shadow","doubleindemnity-regulation"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_brief_encounter_1945")?.questions.map(q => q.id), ["briefencounter-memory","briefencounter-station","briefencounter-music"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_third_man_1949")?.questions.map(q => q.id), ["thethirdman-space","thethirdman-units","thethirdman-score"]);
});


test("Postwar workshops preserve distinct film-specific questions and evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_maltese_falcon_1941")?.questions.map(q => q.id), ["themaltesefalcon-adaptation","themaltesefalcon-rehearsal","themaltesefalcon-lighting"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_bicycle_thieves_1948")?.questions.map(q => q.id), ["bicyclethieves-street","bicyclethieves-casting","bicyclethieves-editing"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_rashomon_1950")?.questions.map(q => q.id), ["rashomon-testimony","rashomon-forest","rashomon-score"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_tokyo_story_1953")?.questions.map(q => q.id), ["tokyostory-camera","tokyostory-performance","tokyostory-rhythm"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_seven_samurai_1954")?.questions.map(q => q.id), ["sevensamurai-ensemble","sevensamurai-coverage","sevensamurai-editions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_la_strada_1954")?.questions.map(q => q.id), ["lastrada-gesture","lastrada-road","lastrada-music"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_pather_panchali_1955")?.questions.map(q => q.id), ["patherpanchali-observation","patherpanchali-finance","patherpanchali-sound"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_ordet_1955")?.questions.map(q => q.id), ["ordet-duration","ordet-interior","ordet-quiet"]);
});


test("Late 1940s and 1950s workshops preserve distinct questions and production sources", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_night_of_the_hunter_1955")?.questions.map(q => q.id), ["thenightofthehunter-silhouette","thenightofthehunter-viewpoint","thenightofthehunter-credits"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_seventh_seal_1957")?.questions.map(q => q.id), ["theseventhseal-tableau","theseventhseal-adapt","theseventhseal-budget"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_ashes_and_diamonds_1958")?.questions.map(q => q.id), ["ashesanddiamonds-time","ashesanddiamonds-image","ashesanddiamonds-context"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_touch_of_evil_1958")?.questions.map(q => q.id), ["touchofevil-movement","touchofevil-music","touchofevil-versions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_vertigo_1958")?.questions.map(q => q.id), ["vertigo-perspective","vertigo-motifs","vertigo-revelation"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_paisan_1946")?.questions.map(q => q.id), ["paisan-episodes","paisan-location","paisan-dubbing"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_red_shoes_1948")?.questions.map(q => q.id), ["theredshoes-color","theredshoes-dance","theredshoes-score"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_sunset_boulevard_1950")?.questions.map(q => q.id), ["sunsetboulevard-memory","sunsetboulevard-space","sunsetboulevard-preview"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_los_olvidados_1950")?.questions.map(q => q.id), ["losolvidados-research","losolvidados-locations","losolvidados-ending"]);
});


test("New Wave and modernist workshops preserve distinct film-specific questions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_ugetsu_1953")?.questions.map(q => q.id), ["ugetsu-adapt","ugetsu-movement","ugetsu-edition"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_a_man_escaped_1956")?.questions.map(q => q.id), ["amanescaped-sound","amanescaped-objects","amanescaped-framing"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_400_blows_1959")?.questions.map(q => q.id), ["the400blows-youth","the400blows-street","the400blows-ending"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_breathless_1960")?.questions.map(q => q.id), ["breathless-street","breathless-cuts","breathless-dialogue"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_hiroshima_mon_amour_1959")?.questions.map(q => q.id), ["hiroshimamonamour-memory","hiroshimamonamour-teams","hiroshimamonamour-rhythm"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_l_avventura_1960")?.questions.map(q => q.id), ["lavventura-space","lavventura-finance","lavventura-duration"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_jules_and_jim_1962")?.questions.map(q => q.id), ["julesandjim-adapt","julesandjim-movement","julesandjim-score"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_persona_1966")?.questions.map(q => q.id), ["persona-faces","persona-performance","persona-rupture"]);
});


test("1960s modernist workshops preserve distinct questions and production evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_8_1_2_1963")?.questions.map(q => q.id), ["812-dream","812-design","812-music"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_contempt_1963")?.questions.map(q => q.id), ["contempt-negotiation","contempt-apartment","contempt-language"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_leopard_1963")?.questions.map(q => q.id), ["theleopard-adapt","theleopard-ball","theleopard-versions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_last_year_at_marienbad_1961")?.questions.map(q => q.id), ["lastyearatmarienbad-decoupage","lastyearatmarienbad-architecture","lastyearatmarienbad-memory"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_umbrellas_of_cherbourg_1964")?.questions.map(q => q.id), ["theumbrellasofcherbourg-singing","theumbrellasofcherbourg-colour","theumbrellasofcherbourg-restoration"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_dr_strangelove_1964")?.questions.map(q => q.id), ["drstrangelove-satire","drstrangelove-room","drstrangelove-roles"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_daisies_1966")?.questions.map(q => q.id), ["daisies-collage","daisies-improv","daisies-censor"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_battle_of_algiers_1966")?.questions.map(q => q.id), ["thebattleofalgiers-evidence","thebattleofalgiers-collaboration","thebattleofalgiers-sound"]);
});


test("New Waves and New Hollywood workshops preserve distinct film-specific questions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_black_girl_1966")?.questions.map(q => q.id), ["blackgirl-voice","blackgirl-wardrobe","blackgirl-funding"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_bonnie_and_clyde_1967")?.questions.map(q => q.id), ["bonnieandclyde-development","bonnieandclyde-locations","bonnieandclyde-tone"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_playtime_1967")?.questions.map(q => q.id), ["playtime-frame","playtime-city","playtime-sound"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_memories_of_underdevelopment_1968")?.questions.map(q => q.id), ["memoriesofunderdevelopment-archive","memoriesofunderdevelopment-institution","memoriesofunderdevelopment-preservation"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_night_of_the_living_dead_1968")?.questions.map(q => q.id), ["nightofthelivingdead-collective","nightofthelivingdead-schedule","nightofthelivingdead-media"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_2001_a_space_odyssey_1968")?.questions.map(q => q.id), ["2001aspaceodyssey-development","2001aspaceodyssey-effects","2001aspaceodyssey-format"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_godfather_1972")?.questions.map(q => q.id), ["thegodfather-casting","thegodfather-palette","thegodfather-music"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_touki_bouki_1973")?.questions.map(q => q.id), ["toukibouki-montage","toukibouki-infrastructure","toukibouki-credits"]);
});


test("1970s production workshops preserve distinct questions and evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_aguirre_the_wrath_of_god_1972")?.questions.map(q => q.id), ["aguirrethewrathofgod-logistics","aguirrethewrathofgod-landscape","aguirrethewrathofgod-atmosphere"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_mean_streets_1973")?.questions.map(q => q.id), ["meanstreets-screenplay","meanstreets-locations","meanstreets-jukebox"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_spirit_of_the_beehive_1973")?.questions.map(q => q.id), ["thespiritofthebeehive-child","thespiritofthebeehive-history","thespiritofthebeehive-silence"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_ali_fear_eats_the_soul_1974")?.questions.map(q => q.id), ["alifeareatsthesoul-space","alifeareatsthesoul-schedule","alifeareatsthesoul-melodrama"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_jaws_1975")?.questions.map(q => q.id), ["jaws-marine","jaws-withholding","jaws-score"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_dog_day_afternoon_1975")?.questions.map(q => q.id), ["dogdayafternoon-rehearsal","dogdayafternoon-daylight","dogdayafternoon-media"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_taxi_driver_1976")?.questions.map(q => q.id), ["taxidriver-viewpoint","taxidriver-city","taxidriver-music"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_star_wars_1977")?.questions.map(q => q.id), ["starwars-design","starwars-pipeline","starwars-soundworld"]);
});


test("International 1970s cinema retains film-specific questions and sources", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_amarcord_1973")?.questions.map(q => q.id), ["amarcord-memory","amarcord-sets","amarcord-history"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_manila_in_the_claws_of_light_1975")?.questions.map(q => q.id), ["manilaintheclawsoflight-city","manilaintheclawsoflight-casting","manilaintheclawsoflight-versions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_battle_of_chile_part_i_1975")?.questions.map(q => q.id), ["thebattleofchileparti-evidence","thebattleofchileparti-crew","thebattleofchileparti-sound"]);
});


test("Late 1970s and 1980s workshops preserve film-specific questions and evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_a_clockwork_orange_1971")?.questions.map(q => q.id), ["aclockworkorange-architecture","aclockworkorange-progression","aclockworkorange-counterpoint"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_scenes_from_a_marriage_1974")?.questions.map(q => q.id), ["scenesfromamarriage-format","scenesfromamarriage-intimacy","scenesfromamarriage-editions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_manhattan_1979")?.questions.map(q => q.id), ["manhattan-monochrome","manhattan-widescreen","manhattan-planetarium"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_raging_bull_1980")?.questions.map(q => q.id), ["ragingbull-registers","ragingbull-editing","ragingbull-home_movies"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_raiders_of_the_lost_ark_1981")?.questions.map(q => q.id), ["raidersofthelostark-planning","raidersofthelostark-composite","raidersofthelostark-foley"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_blade_runner_1982")?.questions.map(q => q.id), ["bladerunner-retrofit","bladerunner-light","bladerunner-cuts"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_et_the_extra_terrestrial_1982")?.questions.map(q => q.id), ["ettheextraterrestrial-height","ettheextraterrestrial-character","ettheextraterrestrial-previsualization"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_aliens_1986")?.questions.map(q => q.id), ["aliens-departments","aliens-practical","aliens-sequel"]);
});


test("International 1980s workshops retain film-specific questions and evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_mephisto_1981")?.questions.map(q => q.id), ["mephisto-adaptation","mephisto-costume","mephisto-editions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_missing_1982")?.questions.map(q => q.id), ["missing-research","missing-substitution","missing-music"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_official_story_1985")?.questions.map(q => q.id), ["theofficialstory-testimony","theofficialstory-interior","theofficialstory-preservation"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_come_and_see_1985")?.questions.map(q => q.id), ["comeandsee-literature","comeandsee-viewpoint","comeandsee-sound"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_yellow_earth_1984")?.questions.map(q => q.id), ["yellowearth-landscape","yellowearth-studio","yellowearth-music"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_police_story_1985")?.questions.map(q => q.id), ["policestory-space","policestory-roles","policestory-continuity"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_my_beautiful_laundrette_1985")?.questions.map(q => q.id), ["mybeautifullaundrette-finance","mybeautifullaundrette-location","mybeautifullaundrette-format"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_yeelen_1987")?.questions.map(q => q.id), ["yeelen-light","yeelen-collaboration","yeelen-representation"]);
});


test("Late 1980s workshops retain film-specific questions and evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_sugar_cane_alley_1983")?.questions.map(q => q.id), ["sugarcanealley-palette","sugarcanealley-casting","sugarcanealley-songs"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_terminator_1984")?.questions.map(q => q.id), ["theterminator-night","theterminator-models","theterminator-development"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_back_to_the_future_1985")?.questions.map(q => q.id), ["backtothefuture-recast","backtothefuture-periods","backtothefuture-effects"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_shes_gotta_have_it_1986")?.questions.map(q => q.id), ["shesgottahaveit-budget","shesgottahaveit-color","shesgottahaveit-format"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_a_better_tomorrow_1986")?.questions.map(q => q.id), ["abettertomorrow-adaptation","abettertomorrow-rhythm","abettertomorrow-studio"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_robocop_1987")?.questions.map(q => q.id), ["robocop-reveal","robocop-miniature","robocop-versions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_salaam_bombay_1988")?.questions.map(q => q.id), ["salaambombay-workshop","salaambombay-street","salaambombay-finance"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_do_the_right_thing_1989")?.questions.map(q => q.id), ["dotherightthing-neighborhood","dotherightthing-heat","dotherightthing-song"]);
});


test("International early 1990s workshops retain film-specific questions and evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_brazil_1985")?.questions.map(q => q.id), ["brazil-design","brazil-cuts","brazil-motif"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_cinema_paradiso_1988")?.questions.map(q => q.id), ["cinemaparadiso-space","cinemaparadiso-montage","cinemaparadiso-editions"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_goodfellas_1990")?.questions.map(q => q.id), ["goodfellas-movement","goodfellas-montage","goodfellas-music"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_boyz_n_the_hood_1991")?.questions.map(q => q.id), ["boyznthehood-authorship","boyznthehood-neighborhood","boyznthehood-score"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_my_own_private_idaho_1991")?.questions.map(q => q.id), ["myownprivateidaho-hybrid","myownprivateidaho-performance","myownprivateidaho-ending"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_hyenas_1992")?.questions.map(q => q.id), ["hyenas-adaptation","hyenas-costume","hyenas-schedule"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_piano_1993")?.questions.map(q => q.id), ["thepiano-financing","thepiano-landscape","thepiano-culture"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_hoop_dreams_1994")?.questions.map(q => q.id), ["hoopdreams-longitudinal","hoopdreams-video","hoopdreams-editing"]);
});


test("International mid-1990s workshops retain film-specific questions and evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_sankofa_1993")?.questions.map(q => q.id), ["sankofa-distribution","sankofa-location","sankofa-history"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_pulp_fiction_1994")?.questions.map(q => q.id), ["pulpfiction-structure","pulpfiction-finance","pulpfiction-color"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_chungking_express_1994")?.questions.map(q => q.id), ["chungkingexpress-revision","chungkingexpress-handoff","chungkingexpress-sound"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_three_colours_red_1994")?.questions.map(q => q.id), ["threecoloursred-trilogy","threecoloursred-interior","threecoloursred-credits"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_bandit_queen_1994")?.questions.map(q => q.id), ["banditqueen-adaptation","banditqueen-consent","banditqueen-certification"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_white_balloon_1995")?.questions.map(q => q.id), ["thewhiteballoon-time","thewhiteballoon-performance","thewhiteballoon-credits"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_toy_story_1995")?.questions.map(q => q.id), ["toystory-revision","toystory-colorscript","toystory-render"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_fire_1996")?.questions.map(q => q.id), ["fire-language","fire-color","fire-representation"]);
});


test("Late 1990s workshops retain distinct questions and source evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_eves_bayou_1997")?.questions.map(q => q.id), ["evesbayou-memory","evesbayou-collaboration","evesbayou-edition"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_princess_mononoke_1997")?.questions.map(q => q.id), ["princessmononoke-hybrid","princessmononoke-revision","princessmononoke-voices"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_titanic_1997")?.questions.map(q => q.id), ["titanic-units","titanic-composite","titanic-wreck"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_ringu_1998")?.questions.map(q => q.id), ["ringu-media","ringu-catalogue","ringu-format"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_idiots_1998")?.questions.map(q => q.id), ["theidiots-constraints","theidiots-evidence","theidiots-festival"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_matrix_1999")?.questions.map(q => q.id), ["thematrix-worlds","thematrix-time","thematrix-sound"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_blair_witch_project_1999")?.questions.map(q => q.id), ["theblairwitchproject-improvisation","theblairwitchproject-selection","theblairwitchproject-promotion"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_boys_dont_cry_1999")?.questions.map(q => q.id), ["boysdontcry-research","boysdontcry-performance","boysdontcry-screenings"]);
});


test("Early 2000s international workshops retain film-specific questions and source evidence", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_in_the_mood_for_love_2000")?.questions.map(q => q.id), ["inthemoodforlove-revision","inthemoodforlove-handoff","inthemoodforlove-motif"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_yi_yi_2000")?.questions.map(q => q.id), ["yiyi-reflection","yiyi-time","yiyi-sound"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_crouching_tiger_hidden_dragon_2000")?.questions.map(q => q.id), ["crouchingtigerhiddendragon-partners","crouchingtigerhiddendragon-movement","crouchingtigerhiddendragon-score"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_spirited_away_2001")?.questions.map(q => q.id), ["spiritedaway-pipeline","spiritedaway-scope","spiritedaway-color"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_amelie_2001")?.questions.map(q => q.id), ["amelie-locations","amelie-imagination","amelie-mix"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_city_of_god_2002")?.questions.map(q => q.id), ["cityofgod-rehearsal","cityofgod-formats","cityofgod-credits"]);
});


test("2003–2006 workshops retain distinct source-based production decisions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_oldboy_2003")?.questions.map(q => q.id), ["oldboy-master","oldboy-design","oldboy-finish"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_dogville_2003")?.questions.map(q => q.id), ["dogville-plan","dogville-overhead","dogville-door"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_brokeback_mountain_2005")?.questions.map(q => q.id), ["brokebackmountain-geography","brokebackmountain-framing","brokebackmountain-score"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_cache_2005")?.questions.map(q => q.id), ["cache-provenance","cache-duration","cache-workflow"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_pans_labyrinth_2006")?.questions.map(q => q.id), ["panslabyrinth-shapes","panslabyrinth-creature","panslabyrinth-night"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_children_of_men_2006")?.questions.map(q => q.id), ["childrenofmen-blocking","childrenofmen-joins","childrenofmen-handoff"]);
});


test("2006–2009 workshops retain film-specific decisions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_lives_of_others_2006")?.questions.map(q => q.id), ["livesothers-listening","livesothers-research","livesothers-performance"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_no_country_for_old_men_2007")?.questions.map(q => q.id), ["nocountry-scout","nocountry-quiet","nocountry-behavior"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_there_will_be_blood_2007")?.questions.map(q => q.id), ["therewillbeblood-geography","therewillbeblood-finish","therewillbeblood-score"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_white_ribbon_2009")?.questions.map(q => q.id), ["whiteribbon-authority","whiteribbon-monochrome","whiteribbon-uncertainty"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_a_prophet_2009")?.questions.map(q => q.id), ["aprophet-language","aprophet-space","aprophet-coaching"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_avatar_2009")?.questions.map(q => q.id), ["avatar2009-virtual","avatar2009-preview","avatar2009-mix"]);
});


test("Digital convergence workshops retain film-specific decisions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_zodiac_2007")?.questions.map(q => q.id), ["zodiac-pipeline","zodiac-archive","zodiac-sound"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_walle_2008")?.questions.map(q => q.id), ["walle-gesture","walle-palette","walle-voice"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_slumdog_millionaire_2008")?.questions.map(q => q.id), ["slumdog-hybrid","slumdog-training","slumdog-collaboration"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_class_2008")?.questions.map(q => q.id), ["theclass-rehearsal","theclass-coverage","theclass-voices"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_district_9_2009")?.questions.map(q => q.id), ["district9-media","district9-integration","district9-improv"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_alamar_2009")?.questions.map(q => q.id), ["alamar-fiction","alamar-place","alamar-format"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_uncle_boonmee_2010")?.questions.map(q => q.id), ["uncleboonmee-memory","uncleboonmee-night","uncleboonmee-ambience"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_social_network_2010")?.questions.map(q => q.id), ["socialnetwork-metadata","socialnetwork-twins","socialnetwork-dialogue"]);
});


test("2011–2013 workshops retain film-specific production decisions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_tree_of_life_2011")?.questions.map(q => q.id), ["treeoflife-light","treeoflife-creation","treeoflife-editors"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_a_separation_2011")?.questions.map(q => q.id), ["aseparation-rehearsal","aseparation-viewpoint","aseparation-information"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_pina_2011")?.questions.map(q => q.id), ["pina-depth","pina-live","pina-stereo"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_amour_2012")?.questions.map(q => q.id), ["amour-apartment","amour-continuity","amour-care"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_holy_motors_2012")?.questions.map(q => q.id), ["holymotors-constraints","holymotors-transformation","holymotors-digital"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_gravity_2013")?.questions.map(q => q.id), ["gravity-previs","gravity-lightbox","gravity-soundfield"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_ida_2013")?.questions.map(q => q.id), ["ida-monochrome","ida-framing","ida-credits"]);
});


test("2014–2016 workshops retain film-specific production decisions", () => {
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_boyhood_2014")?.questions.map(q => q.id), ["boyhood-calendar","boyhood-script","boyhood-archive"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_birdman_or_the_unexpected_virtue_of_ignorance_2014")?.questions.map(q => q.id), ["birdman-blocking","birdman-joins","birdman-drums"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_ex_machina_2014")?.questions.map(q => q.id), ["exmachina-architecture","exmachina-glass","exmachina-ava"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_mad_max_fury_road_2015")?.questions.map(q => q.id), ["furyroad-center","furyroad-storyboard","furyroad-engines"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_son_of_saul_2015")?.questions.map(q => q.id), ["sonofsaul-representation","sonofsaul-focus","sonofsaul-offscreen"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_victoria_2015")?.questions.map(q => q.id), ["victoria-route","victoria-improv","victoria-duration"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_the_revenant_2015")?.questions.map(q => q.id), ["revenant-daylight","revenant-composite","revenant-editorial"]);
  assert.deepEqual(getSourceBackedCaseWorkshop("scenario_moonlight_2016")?.questions.map(q => q.id), ["moonlight-camera","moonlight-triptych","moonlight-music"]);
});
