import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterFive, filmHistoryChapterFiveSources } from "./filmHistoryChapterFive.js";
import { filmHistoryBookParts, getFilmHistoryBookChapter } from "./filmHistoryBook.js";

const canonicalUseExistingScenarioIds = [
  "scenario_afgrunden_1910",
  "scenario_atlantis_1913",
  "scenario_cabiria_1914",
  "scenario_fantomas_1913",
  "scenario_queen_elizabeth_1912",
  "scenario_traffic_in_souls_1913",
] as const;

const canonicalUseExistingTitles = [
  "Afgrunden",
  "Atlantis",
  "Cabiria",
  "Fantômas",
  "Queen Elizabeth",
  "Traffic in Souls",
] as const;

const canonicalP2Titles = [
  "Ingeborg Holm",
  "L'Assassinat du duc de Guise",
  "L'Inferno",
  "Quo Vadis?",
  "Raja Harishchandra",
  "The Student of Prague",
  "The White Slave Trade",
] as const;

const historicalObjectLabels = [
  "Pathé Frères production-distribution network",
  "Gaumont production and serial infrastructure",
  "Nordisk Film export network",
  "Italian historical-epic production centres",
  "Transnational star circulation",
  "Territorial rights, intertitles and versioning",
  "Film catalogues, trade press and export advertising",
] as const;

function chapterText(): string {
  return [
    filmHistoryChapterFive.summary,
    ...filmHistoryChapterFive.learningObjectives,
    ...filmHistoryChapterFive.keyTerms,
    ...filmHistoryChapterFive.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...filmHistoryChapterFive.filmReferences.flatMap((film) => [film.title, film.note]),
    ...filmHistoryChapterFive.historicalObjects.flatMap((item) => [item.label, item.note]),
  ].join("\n");
}

test("Chapter 5 is canonical full book content with fifteen substantive sections", () => {
  assert.equal(filmHistoryChapterFive.id, "global-before-wwi");
  assert.equal(filmHistoryChapterFive.number, 5);
  assert.equal(filmHistoryChapterFive.title, "Cinema becomes international");
  assert.equal(filmHistoryChapterFive.period, "1907–1914");
  assert.equal(filmHistoryChapterFive.status, "full");
  assert.equal(filmHistoryChapterFive.sections.length, 15);
  assert.ok(filmHistoryChapterFive.learningObjectives.length >= 12);
  assert.ok(filmHistoryChapterFive.keyTerms.length >= 20);

  const ids = filmHistoryChapterFive.sections.map((section) => section.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => id.startsWith("ch5_")));
  for (const section of filmHistoryChapterFive.sections) {
    assert.ok(section.paragraphs.length >= 3, `${section.id} needs at least three paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} needs at least two sources`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.trim().length >= 250), `${section.id} contains an editorially thin paragraph`);
  }
  assert.ok(chapterText().length >= 30000, "Chapter 5 full text is too thin for the canonical full gate");
});

test("Chapter 5 source bank is complete, unique, HTTPS and actually used", () => {
  assert.ok(filmHistoryChapterFiveSources.length >= 35);
  assert.equal(new Set(filmHistoryChapterFiveSources.map((source) => source.id)).size, filmHistoryChapterFiveSources.length);
  assert.equal(new Set(filmHistoryChapterFiveSources.map((source) => source.url)).size, filmHistoryChapterFiveSources.length);
  const sourceIds = new Set(filmHistoryChapterFiveSources.map((source) => source.id));
  const usedSourceIds = new Set(filmHistoryChapterFive.sections.flatMap((section) => section.sourceIds));
  for (const source of filmHistoryChapterFiveSources) {
    assert.match(source.id, /^ch5_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
    assert.ok(usedSourceIds.has(source.id), `unused Chapter 5 source: ${source.id}`);
  }
  for (const section of filmHistoryChapterFive.sections) {
    for (const sourceId of section.sourceIds) assert.ok(sourceIds.has(sourceId), `${section.id}: missing ${sourceId}`);
  }
});

test("Chapter 5 preserves the completed Atlas matrix and P2 book references", () => {
  const useExisting = filmHistoryChapterFive.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case");
  const p2 = filmHistoryChapterFive.filmReferences.filter((film) => film.atlasDecision === "P2");
  assert.deepEqual(useExisting.map((film) => film.title), canonicalUseExistingTitles);
  assert.deepEqual(useExisting.map((film) => film.atlasScenarioId), canonicalUseExistingScenarioIds);
  assert.deepEqual(p2.map((film) => film.title), canonicalP2Titles);
  assert.ok(p2.every((film) => film.atlasScenarioId === undefined));
  assert.equal(filmHistoryChapterFive.filmReferences.length, 13);
});

test("Chapter 5 industrial systems remain infrastructure, never fake Production Cases", () => {
  assert.deepEqual(filmHistoryChapterFive.historicalObjects.map((item) => item.label), historicalObjectLabels);
  for (const item of filmHistoryChapterFive.historicalObjects) {
    assert.equal(item.role, "historical_object");
    assert.equal(item.atlasDecision, "no_production_case");
    assert.ok(item.note.trim().length >= 90);
  }
});

test("Chapter 5 keeps international and historiographic safeguards visible in prose", () => {
  const text = chapterText();
  assert.match(text, /national cinema[\s\S]{0,1500}routes|routes[\s\S]{0,1500}national cinema/i);
  assert.match(text, /Fantômas[\s\S]{0,2200}invent.*serial|serial[\s\S]{0,2200}Fantômas/i);
  assert.match(text, /Afgrunden[\s\S]{0,2200}invent.*natural|naturalistic[\s\S]{0,2200}Afgrunden/i);
  assert.match(text, /Atlantis[\s\S]{0,2200}Russian market|Russian market[\s\S]{0,2200}Atlantis/i);
  assert.match(text, /Queen Elizabeth[\s\S]{0,2200}French production[\s\S]{0,1200}American|American[\s\S]{0,2200}Queen Elizabeth/i);
  assert.match(text, /Cabiria[\s\S]{0,2600}did not invent|did not.*invent[\s\S]{0,2600}Cabiria|not.*solitary invention/i);
  assert.match(text, /Traffic in Souls[\s\S]{0,2400}reform[\s\S]{0,1200}exploitation|exploitation[\s\S]{0,2400}Traffic in Souls/i);
  assert.match(text, /Raja Harishchandra[\s\S]{0,1800}fragment|fragment[\s\S]{0,1800}Raja Harishchandra/i);
  assert.match(text, /1914[\s\S]{0,1800}rupture|First World War[\s\S]{0,1800}reorganiz/i);
});

test("canonical book resolves Chapters 1–6 as full and preserves the six-part thirty-chapter architecture", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookParts.flatMap((part) => part.chapters).length, 30);
  assert.equal(getFilmHistoryBookChapter("motion-before-cinema")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("projection-programmes-audiences")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("fiction-editing-narrative")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("industry-feature-transition")?.status, "full");
  const canonicalChapterFive = getFilmHistoryBookChapter("global-before-wwi");
  assert.equal(canonicalChapterFive, filmHistoryChapterFive);
  assert.equal(canonicalChapterFive?.status, "full");
  assert.equal(canonicalChapterFive?.sections.length, 15);
  assert.equal(getFilmHistoryBookChapter("classical-hollywood")?.status, "full");
});
