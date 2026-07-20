import assert from "node:assert/strict";
import test from "node:test";

import { getClassicFilmScenarios } from "./filmScenarios.js";
import {
  getProductionCaseVerification,
  getProductionCaseVerificationRecords,
  getVerifiedProductionCaseIds,
} from "./scenarioProductionVerificationRegistry.js";

const silentFoundationIds = [
  "scenario_a_trip_to_the_moon_1902",
  "scenario_the_cabinet_of_dr_caligari_1920",
  "scenario_nosferatu_1922",
  "scenario_battleship_potemkin_1925",
] as const;

const silentStudioSystemIds = [
  "scenario_the_general_1926",
  "scenario_the_phantom_carriage_1921",
  "scenario_metropolis_1927",
  "scenario_frankenstein_1931",
] as const;

const lateSilentEarlySoundIds = [
  "scenario_the_passion_of_joan_of_arc_1928",
  "scenario_man_with_a_movie_camera_1929",
  "scenario_m_1931",
  "scenario_city_lights_1931",
] as const;

const productionSystems1930sIds = [
  "scenario_king_kong_1933",
  "scenario_modern_times_1936",
  "scenario_snow_white_and_the_seven_dwarfs_1937",
  "scenario_the_rules_of_the_game_1939",
] as const;

const classicalHollywoodIds = [
  "scenario_stagecoach_1939",
  "scenario_the_wizard_of_oz_1939",
  "scenario_citizen_kane_1941",
  "scenario_casablanca_1942",
] as const;

const noirRealism1940sIds = [
  "scenario_double_indemnity_1944",
  "scenario_brief_encounter_1945",
  "scenario_rome_open_city_1945",
  "scenario_the_third_man_1949",
] as const;

const crimeNoirTransformationsIds = [
  "scenario_the_maltese_falcon_1941",
  "scenario_the_lost_weekend_1945",
  "scenario_out_of_the_past_1947",
  "scenario_band_of_outsiders_1964",
] as const;

const norwegianPostwarGenreSystemsIds = [
  "scenario_gategutter_1949",
  "scenario_fjols_til_fjells_1957",
  "scenario_de_dodes_tjern_1958",
  "scenario_insomnia_1997",
] as const;

const asianPostwar1950sIds = [
  "scenario_rashomon_1950",
  "scenario_tokyo_story_1953",
  "scenario_seven_samurai_1954",
  "scenario_pather_panchali_1955",
] as const;

const expressivePostwar1950sIds = [
  "scenario_la_strada_1954",
  "scenario_the_night_of_the_hunter_1955",
  "scenario_the_seventh_seal_1957",
  "scenario_touch_of_evil_1958",
] as const;

const early1960sProductionSystemsIds = [
  "scenario_breakfast_at_tiffany_s_1961",
  "scenario_jules_and_jim_1962",
  "scenario_contempt_1963",
  "scenario_dr_strangelove_1964",
] as const;

const postwarEuropeanModernismIds = [
  "scenario_ordet_1955",
  "scenario_ashes_and_diamonds_1958",
  "scenario_persona_1966",
  "scenario_daisies_1966",
] as const;

const czechoslovakNewWaveIds = [
  "scenario_closely_watched_trains_1966",
  "scenario_the_firemens_ball_1967",
  "scenario_marketa_lazarova_1967",
  "scenario_the_cremator_1969",
] as const;

const europeanPoliticalFeministModernismIds = [
  "scenario_cleo_from_5_to_7_1962",
  "scenario_the_conformist_1970",
  "scenario_jeanne_dielman_1975",
  "scenario_beau_travail_1999",
] as const;

const newHollywoodBlockbusterIds = [
  "scenario_bonnie_and_clyde_1967",
  "scenario_the_godfather_1972",
  "scenario_jaws_1975",
  "scenario_star_wars_1977",
] as const;

const sixtiesScaleIndependentIds = [
  "scenario_psycho_1960",
  "scenario_lawrence_of_arabia_1962",
  "scenario_2001_a_space_odyssey_1968",
  "scenario_night_of_the_living_dead_1968",
] as const;

const europeanModernistProductionIds = [
  "scenario_hiroshima_mon_amour_1959",
  "scenario_8_1_2_1963",
  "scenario_the_umbrellas_of_cherbourg_1964",
  "scenario_the_battle_of_algiers_1966",
] as const;

const expectedVerifiedCount = 112;

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

test("silent cinema foundations are verified with four sources each", () => {
  for (const scenarioId of silentFoundationIds) assert.ok((getProductionCaseVerification(scenarioId)?.sources.length ?? 0) >= 4);
});

test("silent and early studio systems are verified with five sources each", () => {
  for (const scenarioId of silentStudioSystemIds) assert.ok((getProductionCaseVerification(scenarioId)?.sources.length ?? 0) >= 5);
});

test("late silent and early sound systems are verified with four sources each", () => {
  for (const scenarioId of lateSilentEarlySoundIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("1930s production systems are verified with four sources each", () => {
  for (const scenarioId of productionSystems1930sIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("classical Hollywood systems are verified with four sources each", () => {
  for (const scenarioId of classicalHollywoodIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("1940s noir and realism systems are verified with four sources each", () => {
  for (const scenarioId of noirRealism1940sIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("crime and noir transformation systems are verified with four sources each", () => {
  for (const scenarioId of crimeNoirTransformationsIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("Norwegian postwar genre systems are verified with four sources each", () => {
  for (const scenarioId of norwegianPostwarGenreSystemsIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("1950s Asian postwar systems are verified with four sources each", () => {
  for (const scenarioId of asianPostwar1950sIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("1950s expressive postwar systems are verified with four sources each", () => {
  for (const scenarioId of expressivePostwar1950sIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("early 1960s production systems are verified with four sources each", () => {
  for (const scenarioId of early1960sProductionSystemsIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("postwar European modernism systems are verified with four sources each", () => {
  for (const scenarioId of postwarEuropeanModernismIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("Czechoslovak New Wave systems are verified with four sources each", () => {
  for (const scenarioId of czechoslovakNewWaveIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("European political and feminist modernism systems are verified with four sources each", () => {
  for (const scenarioId of europeanPoliticalFeministModernismIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("New Hollywood and blockbuster systems are verified with four sources each", () => {
  for (const scenarioId of newHollywoodBlockbusterIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("1960s scale and independent systems are verified with four sources each", () => {
  for (const scenarioId of sixtiesScaleIndependentIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("European modernist production systems are verified with four sources each", () => {
  for (const scenarioId of europeanModernistProductionIds) {
    const record = getProductionCaseVerification(scenarioId);
    assert.equal(record?.status, "verified");
    assert.ok((record?.sources.length ?? 0) >= 4);
  }
});

test("verification lookup and ID list expose the same registry", () => {
  const ids = getVerifiedProductionCaseIds();
  assert.equal(ids.length, expectedVerifiedCount);
  assert.equal(new Set(ids).size, ids.length);
  for (const scenarioId of ids) assert.equal(getProductionCaseVerification(scenarioId)?.scenarioId, scenarioId);
  assert.equal(getProductionCaseVerification("scenario_not_verified"), undefined);
});
