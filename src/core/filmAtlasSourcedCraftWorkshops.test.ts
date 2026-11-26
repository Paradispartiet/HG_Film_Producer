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
] as const;
const seeds = JSON.parse(readFileSync("data/film/scenarios/film_scenarios_seed.json", "utf8"));
const panel = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8");
const sourcePanel = readFileSync("src/ui/components/ScenarioProductionSourceWorkshop.tsx", "utf8");

test("Exactly fifty-six existing cases have one hundred and sixty-eight original, source-backed decisions", () => {
  assert.deepEqual(SOURCE_BACKED_CASE_WORKSHOPS.map(w => w.scenarioId), ids);
  assert.equal(SOURCE_BACKED_CASE_WORKSHOPS.length, 56);
  assert.equal(SOURCE_BACKED_CASE_WORKSHOPS.reduce((n, w) => n + w.questions.length, 0), 168);
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
