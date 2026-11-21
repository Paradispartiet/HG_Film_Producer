import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { FILMWORK_LANGUAGES } from "../../core/filmWorkLanguage.js";
import {
  SOURCE_BACKED_CASE_WORKSHOPS,
  getSourceBackedCaseWorkshop,
  isBestSupportedWorkshopOption,
} from "./scenarioProductionSourceWorkshops.js";

const ids = [
  "scenario_the_celebration_1998",
  "scenario_waltz_with_bashir_2008",
  "scenario_tangerine_2015",
];
const seeds = JSON.parse(readFileSync("data/film/scenarios/film_scenarios_seed.json", "utf8"));
const panel = readFileSync("src/ui/components/ScenarioProductionBriefPanel.tsx", "utf8");
const sourcePanel = readFileSync("src/ui/components/ScenarioProductionSourceWorkshop.tsx", "utf8");

test("Exactly three existing cases have nine original, source-backed decisions", () => {
  assert.deepEqual(SOURCE_BACKED_CASE_WORKSHOPS.map(w => w.scenarioId), ids);
  assert.equal(SOURCE_BACKED_CASE_WORKSHOPS.length, 3);
  assert.equal(SOURCE_BACKED_CASE_WORKSHOPS.reduce((n, w) => n + w.questions.length, 0), 9);
  for (const workshop of SOURCE_BACKED_CASE_WORKSHOPS) {
    assert.equal(workshop.status, "editorial_learning_exercise_not_case_verified");
    assert.equal(workshop.questions.length, 3);
    assert.ok(workshop.sources.length >= 2);
    assert.ok(seeds.scenarios.some((s: {id: string}) => s.id === workshop.scenarioId));
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
  for (const id of ids) {
    const source = seeds.scenarios.find((s: {id: string}) => s.id === id);
    assert.equal(source?.status, "imported_seed_needs_film_specific_design");
  }
});
