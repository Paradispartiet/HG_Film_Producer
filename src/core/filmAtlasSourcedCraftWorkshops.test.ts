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
] as const;
const seeds = JSON.parse(readFileSync("data/film/scenarios/film_scenarios_seed.json", "utf8"));
const panel = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8");
const sourcePanel = readFileSync("src/ui/components/ScenarioProductionSourceWorkshop.tsx", "utf8");

test("Exactly ten existing cases have thirty original, source-backed decisions", () => {
  assert.deepEqual(SOURCE_BACKED_CASE_WORKSHOPS.map(w => w.scenarioId), ids);
  assert.equal(SOURCE_BACKED_CASE_WORKSHOPS.length, 10);
  assert.equal(SOURCE_BACKED_CASE_WORKSHOPS.reduce((n, w) => n + w.questions.length, 0), 30);
  for (const workshop of SOURCE_BACKED_CASE_WORKSHOPS) {
    assert.equal(workshop.status, "editorial_learning_exercise_not_case_verified");
    assert.equal(workshop.questions.length, 3);
    assert.ok(workshop.sources.length >= 2);
    if (workshop.scenarioId === "scenario_vive_l_amour_1994") {
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
      assert.ok(source.publisher.length > 5);
      assert.ok(source.title.length > 10);
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
