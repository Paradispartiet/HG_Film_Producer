import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterThree, filmHistoryChapterThreeSources } from "./filmHistoryChapterThree.js";
import { filmHistoryBookParts, getFilmHistoryBookChapter } from "./filmHistoryBook.js";
import { getClassicFilmScenarios } from "../ui/data/filmScenarios.js";
import { getProductionCaseVerificationRecords } from "../ui/data/scenarioProductionVerificationRegistry.js";

const canonicalScenarioIds = [
  "scenario_grandmas_reading_glass_1900",
  "scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900",
  "scenario_histoire_d_un_crime_1901",
  "scenario_fire_1901",
  "scenario_a_trip_to_the_moon_1902",
  "scenario_life_of_an_american_fireman_1903",
  "scenario_the_great_train_robbery_1903",
  "scenario_rescued_by_rover_1905",
  "scenario_the_lonely_villa_1909",
] as const;

const canonicalFilmTitles = [
  "Grandma's Reading Glass",
  "Attack on a China Mission - Bluejackets to the Rescue",
  "Histoire d'un crime",
  "Fire!",
  "A Trip to the Moon",
  "Life of an American Fireman",
  "The Great Train Robbery",
  "Rescued by Rover",
  "The Lonely Villa",
] as const;

const historicalObjectLabels = [
  "Magic-lantern and theatrical tableau traditions",
  "Film catalogues, synopses and shot descriptions",
  "Paper-print copyright deposits",
  "Intertitles, lecturers and other narrative framing",
  "Remakes, replacement negatives and re-edited versions",
  "Editing conventions as historical practices",
] as const;

function chapterText(): string {
  return [
    filmHistoryChapterThree.summary,
    ...filmHistoryChapterThree.learningObjectives,
    ...filmHistoryChapterThree.keyTerms,
    ...filmHistoryChapterThree.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...filmHistoryChapterThree.filmReferences.flatMap((film) => [film.title, film.note]),
    ...filmHistoryChapterThree.historicalObjects.flatMap((item) => [item.label, item.note]),
  ].join("\n");
}

test("Chapter 3 is canonical full book content with fifteen substantive sections", () => {
  assert.equal(filmHistoryChapterThree.id, "fiction-editing-narrative");
  assert.equal(filmHistoryChapterThree.number, 3);
  assert.equal(filmHistoryChapterThree.title, "From views to stories");
  assert.equal(filmHistoryChapterThree.period, "1896–1912");
  assert.equal(filmHistoryChapterThree.status, "full");
  assert.equal(filmHistoryChapterThree.sections.length, 15);
  assert.ok(filmHistoryChapterThree.learningObjectives.length >= 10);
  assert.ok(filmHistoryChapterThree.keyTerms.length >= 15);

  const ids = filmHistoryChapterThree.sections.map((section) => section.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => id.startsWith("ch3_")));
  for (const section of filmHistoryChapterThree.sections) {
    assert.ok(section.paragraphs.length >= 3, `${section.id} needs at least three paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} needs at least two sources`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.trim().length >= 250), `${section.id} contains an editorially thin paragraph`);
  }
  assert.ok(chapterText().length >= 30000, "Chapter 3 full text is too thin for the canonical full gate");
});

test("Chapter 3 source bank is complete, unique, HTTPS and fully referenced", () => {
  assert.ok(filmHistoryChapterThreeSources.length >= 30);
  assert.equal(new Set(filmHistoryChapterThreeSources.map((source) => source.id)).size, filmHistoryChapterThreeSources.length);
  assert.equal(new Set(filmHistoryChapterThreeSources.map((source) => source.url)).size, filmHistoryChapterThreeSources.length);
  const sourceIds = new Set(filmHistoryChapterThreeSources.map((source) => source.id));
  for (const source of filmHistoryChapterThreeSources) {
    assert.match(source.id, /^ch3_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
  }
  for (const section of filmHistoryChapterThree.sections) {
    for (const sourceId of section.sourceIds) assert.ok(sourceIds.has(sourceId), `${section.id}: missing ${sourceId}`);
  }
});

test("Chapter 3 uses exactly the nine completed Atlas cases and no P0/P1 film references", () => {
  assert.deepEqual(filmHistoryChapterThree.filmReferences.map((film) => film.title), canonicalFilmTitles);
  assert.deepEqual(filmHistoryChapterThree.filmReferences.map((film) => film.atlasScenarioId), canonicalScenarioIds);
  assert.ok(filmHistoryChapterThree.filmReferences.every((film) => film.atlasDecision === "use_existing_atlas_case"));
  assert.ok(filmHistoryChapterThree.filmReferences.every((film) => film.role === "anchor_film" || film.role === "comparative_film"));
});

test("Chapter 3 historical objects remain practices and evidence, never fake Production Cases", () => {
  assert.deepEqual(filmHistoryChapterThree.historicalObjects.map((item) => item.label), historicalObjectLabels);
  for (const item of filmHistoryChapterThree.historicalObjects) {
    assert.equal(item.role, "historical_object");
    assert.equal(item.atlasDecision, "no_production_case");
    assert.ok(item.note.trim().length >= 80);
  }
});

test("Chapter 3 keeps the required historiographic safeguards visible in prose", () => {
  const text = chapterText();
  assert.match(text, /tableau.*not.*primitive|tableau.*failed|failed proto-feature|failed continuity/is);
  assert.match(text, /single-inventor|single inventor|invention story/i);
  assert.match(text, /Life of an American Fireman[\s\S]{0,1800}later.*cross-cut|later.*cross-cut[\s\S]{0,1800}Porter/i);
  assert.match(text, /Attack on a China Mission[\s\S]{0,1800}reconstruct|reconstruct[\s\S]{0,1800}Attack on a China Mission/i);
  assert.match(text, /Histoire d'un crime[\s\S]{0,2200}first flashback|first-flashback[\s\S]{0,2200}Histoire d'un crime/i);
  assert.match(text, /Griffith[\s\S]{0,1800}consolidator|consolidation.*not invention/i);
  assert.match(text, /racist|imperial/i);
  assert.match(text, /represented memory|narrative time/i);
});

test("canonical book resolves Chapters 1–3 as full and preserves the six-part thirty-chapter architecture", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookParts.flatMap((part) => part.chapters).length, 30);
  assert.equal(getFilmHistoryBookChapter("motion-before-cinema")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("projection-programmes-audiences")?.status, "full");
  const canonicalChapterThree = getFilmHistoryBookChapter("fiction-editing-narrative");
  assert.equal(canonicalChapterThree, filmHistoryChapterThree);
  assert.equal(canonicalChapterThree?.status, "full");
  assert.equal(canonicalChapterThree?.sections.length, 15);
  assert.equal(getFilmHistoryBookChapter("industry-feature-transition")?.status, "outline");
});

test("Chapter 3 editorial completion cannot drift the verified Film Atlas baseline", () => {
  const scenarios = getClassicFilmScenarios();
  const verification = getProductionCaseVerificationRecords();
  assert.equal(scenarios.length, 391);
  assert.equal(verification.length, 384);
  const scenarioIds = new Set(scenarios.map((scenario) => scenario.id));
  const verifiedIds = new Set(verification.map((record) => record.scenarioId));
  for (const scenarioId of canonicalScenarioIds) {
    assert.ok(scenarioIds.has(scenarioId), `missing playable Chapter 3 scenario ${scenarioId}`);
    assert.ok(verifiedIds.has(scenarioId), `missing verified Chapter 3 scenario ${scenarioId}`);
  }
});
