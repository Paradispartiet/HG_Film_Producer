import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterTen, filmHistoryChapterTenSources } from "./filmHistoryChapterTen.js";
import { filmHistoryBookParts, getFilmHistoryBookChapter } from "./filmHistoryBook.js";

// This permanent contract is also the exact-head PR gate for Chapter 10 completion.
const canonicalUseExistingScenarioIds = [
  "scenario_a_page_of_madness_1926",
  "scenario_laborers_love_1922",
  "scenario_a_throw_of_dice_1929",
  "scenario_growth_of_the_soil_1921",
  "scenario_orochi_1925",
  "scenario_the_red_heroine_1929",
  "scenario_haxan_1922",
  "scenario_afgrunden_1910",
  "scenario_the_phantom_carriage_1921",
] as const;

const canonicalUseExistingTitles = [
  "A Page of Madness",
  "Laborer's Love",
  "A Throw of Dice",
  "Growth of the Soil",
  "Orochi",
  "The Red Heroine",
  "Häxan",
  "Afgrunden",
  "The Phantom Carriage",
] as const;

const canonicalP2Titles = [
  "Crossroads",
  "Souls on the Road",
  "The Romance of the Western Chamber",
  "The Burning of the Red Lotus Temple",
  "Raja Harishchandra",
  "Kaliya Mardan",
  "The Light of Asia",
  "Shiraz",
  "Ingeborg Holm",
  "The Outlaw and His Wife",
  "Sir Arne's Treasure",
  "Erotikon",
  "Gösta Berling's Saga",
  "The Sentimental Bloke",
  "El automóvil gris",
] as const;

const historicalObjectLabels = [
  "Benshi, live narration, intertitles and silent-era accompaniment",
  "Japanese studios, independent star companies, jidaigeki and chanbara production",
  "Shanghai studios, Mingxing/Minxin networks and urban Chinese modernity",
  "Wuxia serial culture, special effects, censorship and fragment survival",
  "Phalke, mythological production and early Indian studio formation",
  "Himansu Rai, Franz Osten and transnational Indian-European co-production",
  "Swedish golden-age studios, literary adaptation and landscape aesthetics",
  "Danish Nordisk, Asta Nielsen and Scandinavian transnational circulation",
  "Norwegian silent production, literary prestige and location culture",
  "Nitrate loss, incomplete survival, archive reconstruction and canon bias",
] as const;

function chapterText(): string {
  return [
    filmHistoryChapterTen.summary,
    ...filmHistoryChapterTen.learningObjectives,
    ...filmHistoryChapterTen.keyTerms,
    ...filmHistoryChapterTen.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...filmHistoryChapterTen.filmReferences.flatMap((film) => [film.title, film.note]),
    ...filmHistoryChapterTen.historicalObjects.flatMap((item) => [item.label, item.note]),
  ].join("\n");
}

function sorted<T extends string>(values: readonly T[]): T[] {
  return [...values].sort((left, right) => left.localeCompare(right));
}

test("Chapter 10 is canonical full book content with fifteen substantive sections", () => {
  assert.equal(filmHistoryChapterTen.id, "silent-beyond-west");
  assert.equal(filmHistoryChapterTen.number, 10);
  assert.equal(filmHistoryChapterTen.title, "Silent cinemas beyond the usual canon");
  assert.equal(filmHistoryChapterTen.period, "1910s–1929");
  assert.equal(filmHistoryChapterTen.status, "full");
  assert.equal(filmHistoryChapterTen.sections.length, 15);
  assert.ok(filmHistoryChapterTen.learningObjectives.length >= 15);
  assert.ok(filmHistoryChapterTen.keyTerms.length >= 35);

  const ids = filmHistoryChapterTen.sections.map((section) => section.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => id.startsWith("ch10_")));
  for (const section of filmHistoryChapterTen.sections) {
    assert.ok(section.paragraphs.length >= 3, `${section.id} needs at least three paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} needs at least two sources`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.trim().length >= 250), `${section.id} contains an editorially thin paragraph`);
  }
  assert.ok(chapterText().length >= 30_000, "Chapter 10 full text is too thin for the canonical full gate");
});

test("Chapter 10 source bank is complete, unique, HTTPS and actually used", () => {
  assert.ok(filmHistoryChapterTenSources.length >= 40);
  assert.equal(new Set(filmHistoryChapterTenSources.map((source) => source.id)).size, filmHistoryChapterTenSources.length);
  assert.equal(new Set(filmHistoryChapterTenSources.map((source) => source.url)).size, filmHistoryChapterTenSources.length);
  const sourceIds = new Set(filmHistoryChapterTenSources.map((source) => source.id));
  const usedSourceIds = new Set(filmHistoryChapterTen.sections.flatMap((section) => section.sourceIds));
  for (const source of filmHistoryChapterTenSources) {
    assert.match(source.id, /^ch10_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
    assert.ok(usedSourceIds.has(source.id), `unused Chapter 10 source: ${source.id}`);
  }
  for (const section of filmHistoryChapterTen.sections) {
    for (const sourceId of section.sourceIds) assert.ok(sourceIds.has(sourceId), `${section.id}: missing ${sourceId}`);
  }
});

test("Chapter 10 preserves the completed nine-case Atlas matrix and fifteen P2 comparisons", () => {
  const useExisting = filmHistoryChapterTen.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case");
  const p2 = filmHistoryChapterTen.filmReferences.filter((film) => film.atlasDecision === "P2");
  assert.deepEqual(sorted(useExisting.map((film) => film.title)), sorted(canonicalUseExistingTitles));
  assert.deepEqual(sorted(useExisting.map((film) => film.atlasScenarioId ?? "")), sorted(canonicalUseExistingScenarioIds));
  assert.deepEqual(sorted(p2.map((film) => film.title)), sorted(canonicalP2Titles));
  assert.ok(p2.every((film) => film.atlasScenarioId === undefined));
  assert.equal(filmHistoryChapterTen.filmReferences.length, 24);
  assert.equal(filmHistoryChapterTen.filmReferences.some((film) => film.atlasDecision === "P0" || film.atlasDecision === "P1"), false);
});

test("Chapter 10 institutions and archive conditions remain historical context, never fake Production Cases", () => {
  assert.deepEqual(filmHistoryChapterTen.historicalObjects.map((item) => item.label), historicalObjectLabels);
  for (const item of filmHistoryChapterTen.historicalObjects) {
    assert.equal(item.role, "historical_object");
    assert.equal(item.atlasDecision, "no_production_case");
    assert.ok(item.note.trim().length >= 100);
  }
});

test("Chapter 10 keeps survival, exhibition, national, archival and ethical safeguards visible in prose", () => {
  const text = chapterText();
  assert.match(text, /surviving silent canon[\s\S]{0,2500}(?:not a map|not.*representative)|archive-shaped sample/i);
  assert.match(text, /benshi[\s\S]{0,2600}(?:not.*synchronized|production sound)|live narration[\s\S]{0,2600}production sound/i);
  assert.match(text, /A Page of Madness[\s\S]{0,4200}(?:mental illness|medical document|stigmatizing)/i);
  assert.match(text, /Orochi[\s\S]{0,3600}(?:star-company|performer-producer|independent production)/i);
  assert.match(text, /Laborer's Love[\s\S]{0,3600}(?:earliest-surviving|survival claim|origin claim)/i);
  assert.match(text, /Red Heroine[\s\S]{0,4200}(?:thirteen-part|twelve missing|surviving installment)/i);
  assert.match(text, /Burning of the Red Lotus Temple[\s\S]{0,2200}(?:no complete film survives|lost)|Raja Harishchandra[\s\S]{0,2200}fragments/i);
  assert.match(text, /A Throw of Dice[\s\S]{0,4200}(?:national purity|producer-star|transnational)/i);
  assert.match(text, /Growth of the Soil[\s\S]{0,4200}(?:tinting|toning)[\s\S]{0,2200}(?:music|Halvorsen)/i);
  assert.match(text, /Häxan[\s\S]{0,5000}(?:reenactment|dramatized)[\s\S]{0,2600}(?:medical consensus|1922 intellectual argument|documentary authority)/i);
  assert.match(text, /restoration[\s\S]{0,3500}(?:runtime|projection speed|version criticism)/i);
  assert.match(text, /Alam Ara[\s\S]{0,2200}Chapter 11|sound-transition chapter/i);
});

test("canonical book resolves Chapter 10 as full without changing the thirty-chapter architecture", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookParts.flatMap((part) => part.chapters).length, 30);
  assert.equal(getFilmHistoryBookChapter("silent-beyond-west"), filmHistoryChapterTen);
});
