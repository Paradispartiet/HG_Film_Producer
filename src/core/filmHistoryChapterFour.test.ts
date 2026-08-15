import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterFour, filmHistoryChapterFourSources } from "./filmHistoryChapterFour.js";
import { filmHistoryBookParts, getFilmHistoryBookChapter } from "./filmHistoryBook.js";

const canonicalUseExistingScenarioIds = [
  "scenario_rescued_by_rover_1905",
  "scenario_the_story_of_the_kelly_gang_1906",
  "scenario_the_lonely_villa_1909",
  "scenario_queen_elizabeth_1912",
  "scenario_traffic_in_souls_1913",
] as const;

const canonicalUseExistingTitles = [
  "Rescued by Rover",
  "The Story of the Kelly Gang",
  "The Lonely Villa",
  "Queen Elizabeth",
  "Traffic in Souls",
] as const;

const canonicalP2Titles = [
  "L'Assassinat du duc de Guise",
  "Quo Vadis?",
  "Cabiria",
] as const;

const historicalObjectLabels = [
  "Film exchanges and print rental",
  "Nickelodeons and purpose-built theatres",
  "Edison patent litigation and license agreements",
  "Motion Picture Patents Company (MPPC)",
  "General Film Company",
  "Independent producers and distributors",
  "Multi-reel and feature booking practices",
] as const;

function chapterText(): string {
  return [
    filmHistoryChapterFour.summary,
    ...filmHistoryChapterFour.learningObjectives,
    ...filmHistoryChapterFour.keyTerms,
    ...filmHistoryChapterFour.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...filmHistoryChapterFour.filmReferences.flatMap((film) => [film.title, film.note]),
    ...filmHistoryChapterFour.historicalObjects.flatMap((item) => [item.label, item.note]),
  ].join("\n");
}

test("Chapter 4 is canonical full book content with fifteen substantive sections", () => {
  assert.equal(filmHistoryChapterFour.id, "industry-feature-transition");
  assert.equal(filmHistoryChapterFour.number, 4);
  assert.equal(filmHistoryChapterFour.title, "Companies, patents and the feature transition");
  assert.equal(filmHistoryChapterFour.period, "1905–1914");
  assert.equal(filmHistoryChapterFour.status, "full");
  assert.equal(filmHistoryChapterFour.sections.length, 15);
  assert.ok(filmHistoryChapterFour.learningObjectives.length >= 10);
  assert.ok(filmHistoryChapterFour.keyTerms.length >= 15);

  const ids = filmHistoryChapterFour.sections.map((section) => section.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => id.startsWith("ch4_")));
  for (const section of filmHistoryChapterFour.sections) {
    assert.ok(section.paragraphs.length >= 3, `${section.id} needs at least three paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} needs at least two sources`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.trim().length >= 250), `${section.id} contains an editorially thin paragraph`);
  }
  assert.ok(chapterText().length >= 30000, "Chapter 4 full text is too thin for the canonical full gate");
});

test("Chapter 4 source bank is complete, unique, HTTPS and fully referenced", () => {
  assert.ok(filmHistoryChapterFourSources.length >= 35);
  assert.equal(new Set(filmHistoryChapterFourSources.map((source) => source.id)).size, filmHistoryChapterFourSources.length);
  assert.equal(new Set(filmHistoryChapterFourSources.map((source) => source.url)).size, filmHistoryChapterFourSources.length);
  const sourceIds = new Set(filmHistoryChapterFourSources.map((source) => source.id));
  for (const source of filmHistoryChapterFourSources) {
    assert.match(source.id, /^ch4_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
  }
  for (const section of filmHistoryChapterFour.sections) {
    for (const sourceId of section.sourceIds) assert.ok(sourceIds.has(sourceId), `${section.id}: missing ${sourceId}`);
  }
});

test("Chapter 4 preserves the completed Atlas matrix and the three P2 book references", () => {
  const useExisting = filmHistoryChapterFour.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case");
  const p2 = filmHistoryChapterFour.filmReferences.filter((film) => film.atlasDecision === "P2");
  assert.deepEqual(useExisting.map((film) => film.title), canonicalUseExistingTitles);
  assert.deepEqual(useExisting.map((film) => film.atlasScenarioId), canonicalUseExistingScenarioIds);
  assert.deepEqual(p2.map((film) => film.title), canonicalP2Titles);
  assert.ok(p2.every((film) => film.atlasScenarioId === undefined));
  assert.equal(filmHistoryChapterFour.filmReferences.length, 8);
});

test("Chapter 4 historical systems remain infrastructure, never fake Production Cases", () => {
  assert.deepEqual(filmHistoryChapterFour.historicalObjects.map((item) => item.label), historicalObjectLabels);
  for (const item of filmHistoryChapterFour.historicalObjects) {
    assert.equal(item.role, "historical_object");
    assert.equal(item.atlasDecision, "no_production_case");
    assert.ok(item.note.trim().length >= 80);
  }
});

test("Chapter 4 keeps the required industrial and historiographic safeguards visible in prose", () => {
  const text = chapterText();
  assert.match(text, /film exchange[\s\S]{0,1200}rent|rent[\s\S]{0,1200}film exchange/i);
  assert.match(text, /selling prints|sale.*rental|rental.*sale/i);
  assert.match(text, /Motion Picture Patents Company|MPPC/i);
  assert.match(text, /not equal uncontested total control|contested and incomplete|strong but unstable/i);
  assert.match(text, /General Film Company|General Film/i);
  assert.match(text, /Story of the Kelly Gang[\s\S]{0,2200}fragment|fragment[\s\S]{0,2200}Story of the Kelly Gang/i);
  assert.match(text, /first feature[\s\S]{0,1800}claim|claim[\s\S]{0,1800}first feature/i);
  assert.match(text, /Queen Elizabeth[\s\S]{0,2200}single.*origin|single.*origin[\s\S]{0,2200}Queen Elizabeth/i);
  assert.match(text, /Traffic in Souls[\s\S]{0,2200}reform[\s\S]{0,900}exploitation|exploitation[\s\S]{0,2200}Traffic in Souls/i);
  assert.match(text, /feature transition[\s\S]{0,1600}one nation|one film|single decisive moment/i);
});

test("canonical book resolves Chapters 1–6 as full and preserves the six-part thirty-chapter architecture", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookParts.flatMap((part) => part.chapters).length, 30);
  assert.equal(getFilmHistoryBookChapter("motion-before-cinema")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("projection-programmes-audiences")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("fiction-editing-narrative")?.status, "full");
  const canonicalChapterFour = getFilmHistoryBookChapter("industry-feature-transition");
  assert.equal(canonicalChapterFour, filmHistoryChapterFour);
  assert.equal(canonicalChapterFour?.status, "full");
  assert.equal(canonicalChapterFour?.sections.length, 15);
  assert.equal(getFilmHistoryBookChapter("global-before-wwi")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("classical-hollywood")?.status, "full");
});

test("Chapter 4 editorial references stay locked to the completed Atlas audit", () => {
  assert.equal(canonicalUseExistingScenarioIds.length, 5);
  assert.equal(new Set(canonicalUseExistingScenarioIds).size, canonicalUseExistingScenarioIds.length);
  const ids = filmHistoryChapterFour.filmReferences
    .filter((film) => film.atlasDecision === "use_existing_atlas_case")
    .map((film) => film.atlasScenarioId);
  assert.deepEqual(ids, canonicalUseExistingScenarioIds);
});
