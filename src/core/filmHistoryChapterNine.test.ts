import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterNine, filmHistoryChapterNineSources } from "./filmHistoryChapterNine.js";
import { filmHistoryBookParts, getFilmHistoryBookChapter } from "./filmHistoryBook.js";

const canonicalUseExistingScenarioIds = [
  "scenario_battleship_potemkin_1925",
  "scenario_man_with_a_movie_camera_1929",
  "scenario_mother_1926",
  "scenario_the_fall_of_the_romanov_dynasty_1927",
  "scenario_earth_1930",
  "scenario_october_1928",
  "scenario_mr_west_bolsheviks_1924",
] as const;

const canonicalUseExistingTitles = [
  "Battleship Potemkin",
  "Man with a Movie Camera",
  "Mother",
  "The Fall of the Romanov Dynasty",
  "Earth",
  "October",
  "The Extraordinary Adventures of Mr. West in the Land of the Bolsheviks",
] as const;

const canonicalP2Titles = [
  "Strike",
  "The General Line",
  "The End of St. Petersburg",
  "Storm over Asia",
  "By the Law",
  "Kino-Eye",
  "A Sixth Part of the World",
  "The Eleventh Year",
  "Zvenigora",
  "Arsenal",
  "The Great Road",
  "The New Babylon",
  "Bed and Sofa",
  "Fragment of an Empire",
] as const;

const historicalObjectLabels = [
  "Kuleshov workshop, VGIK and the Kuleshov effect",
  "Competing montage theories: collision, linkage, intervals and intellectual montage",
  "Nationalization, Narkompros, Goskino, Sovkino and Mezhrabpom production institutions",
  "Agit-trains, agit-trucks, newsreels and mobile exhibition",
  "Proletkult, theatre of attractions, constructivism and FEKS",
  "Kino-Pravda, kino-eye and collective documentary labor",
  "VUFKU and Ukrainian Soviet cinema",
  "State commissions, censorship and political recutting",
  "Import re-editing, film-stock scarcity and archival reuse",
  "Propaganda, collectivization, violence and historical hindsight",
] as const;

function chapterText(): string {
  return [
    filmHistoryChapterNine.summary,
    ...filmHistoryChapterNine.learningObjectives,
    ...filmHistoryChapterNine.keyTerms,
    ...filmHistoryChapterNine.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...filmHistoryChapterNine.filmReferences.flatMap((film) => [film.title, film.note]),
    ...filmHistoryChapterNine.historicalObjects.flatMap((item) => [item.label, item.note]),
  ].join("\n");
}

function sorted<T extends string>(values: readonly T[]): T[] {
  return [...values].sort((left, right) => left.localeCompare(right));
}

test("Chapter 9 is canonical full book content with fifteen substantive sections", () => {
  assert.equal(filmHistoryChapterNine.id, "soviet-montage");
  assert.equal(filmHistoryChapterNine.number, 9);
  assert.equal(filmHistoryChapterNine.title, "Revolution and Soviet Montage");
  assert.equal(filmHistoryChapterNine.period, "1917–1930");
  assert.equal(filmHistoryChapterNine.status, "full");
  assert.equal(filmHistoryChapterNine.sections.length, 15);
  assert.ok(filmHistoryChapterNine.learningObjectives.length >= 14);
  assert.ok(filmHistoryChapterNine.keyTerms.length >= 25);

  const ids = filmHistoryChapterNine.sections.map((section) => section.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => id.startsWith("ch9_")));
  for (const section of filmHistoryChapterNine.sections) {
    assert.ok(section.paragraphs.length >= 3, `${section.id} needs at least three paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} needs at least two sources`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.trim().length >= 250), `${section.id} contains an editorially thin paragraph`);
  }
  assert.ok(chapterText().length >= 30000, "Chapter 9 full text is too thin for the canonical full gate");
});

test("Chapter 9 source bank is complete, unique, HTTPS and actually used", () => {
  assert.ok(filmHistoryChapterNineSources.length >= 40);
  assert.equal(new Set(filmHistoryChapterNineSources.map((source) => source.id)).size, filmHistoryChapterNineSources.length);
  assert.equal(new Set(filmHistoryChapterNineSources.map((source) => source.url)).size, filmHistoryChapterNineSources.length);
  const sourceIds = new Set(filmHistoryChapterNineSources.map((source) => source.id));
  const usedSourceIds = new Set(filmHistoryChapterNine.sections.flatMap((section) => section.sourceIds));
  for (const source of filmHistoryChapterNineSources) {
    assert.match(source.id, /^ch9_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
    assert.ok(usedSourceIds.has(source.id), `unused Chapter 9 source: ${source.id}`);
  }
  for (const section of filmHistoryChapterNine.sections) {
    for (const sourceId of section.sourceIds) assert.ok(sourceIds.has(sourceId), `${section.id}: missing ${sourceId}`);
  }
});

test("Chapter 9 preserves the completed seven-case Atlas matrix and fourteen P2 comparisons", () => {
  const useExisting = filmHistoryChapterNine.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case");
  const p2 = filmHistoryChapterNine.filmReferences.filter((film) => film.atlasDecision === "P2");
  assert.deepEqual(sorted(useExisting.map((film) => film.title)), sorted(canonicalUseExistingTitles));
  assert.deepEqual(sorted(useExisting.map((film) => film.atlasScenarioId ?? "")), sorted(canonicalUseExistingScenarioIds));
  assert.deepEqual(sorted(p2.map((film) => film.title)), sorted(canonicalP2Titles));
  assert.ok(p2.every((film) => film.atlasScenarioId === undefined));
  assert.equal(filmHistoryChapterNine.filmReferences.length, 21);
  assert.equal(filmHistoryChapterNine.filmReferences.some((film) => film.atlasDecision === "P0" || film.atlasDecision === "P1"), false);
});

test("Chapter 9 theory and institutions remain historical context, never fake Production Cases", () => {
  assert.deepEqual(filmHistoryChapterNine.historicalObjects.map((item) => item.label), historicalObjectLabels);
  for (const item of filmHistoryChapterNine.historicalObjects) {
    assert.equal(item.role, "historical_object");
    assert.equal(item.atlasDecision, "no_production_case");
    assert.ok(item.note.trim().length >= 90);
  }
});

test("Chapter 9 keeps theoretical, historiographic, archival, political and version safeguards visible in prose", () => {
  const text = chapterText();
  assert.match(text, /Kuleshov effect[\s\S]{0,2200}not a universal viewer-response law|contested pedagogical and theoretical construct/i);
  assert.match(text, /collision[\s\S]{0,2600}linkage[\s\S]{0,2600}Vertov|Eisensteinian[\s\S]{0,2200}Pudovkin[\s\S]{0,2200}interval/i);
  assert.match(text, /Elizaveta Svilova[\s\S]{0,2600}Mikhail Kaufman|collective documentary labour/i);
  assert.match(text, /Soviet[^\n]{0,600}(?:synonym|Russian)|VUFKU[\s\S]{0,2800}Ukrainian/i);
  assert.match(text, /Shub[\s\S]{0,2800}provenance[\s\S]{0,2800}authorship|archival search[\s\S]{0,2600}authorship/i);
  assert.match(text, /Odessa Steps[\s\S]{0,2600}not neutral|staged and edited/i);
  assert.match(text, /October[\s\S]{0,3600}Trotsky[\s\S]{0,2200}recut|political recutting/i);
  assert.match(text, /Earth[\s\S]{0,4200}Holodomor[\s\S]{0,2400}(?:back-projected|chronology)|historical hindsight/i);
  assert.match(text, /Enthusiasm[\s\S]{0,2200}(?:Chapter 11|sound-transition)|recorded sound/i);
  assert.match(text, /never gain points for political violence, falsifying archival evidence|never rewards falsifying evidence/i);
  assert.match(text, /projection speed[\s\S]{0,2600}restoration|silent-era accompaniment[\s\S]{0,2600}synchronized production sound/i);
});

test("canonical book resolves Chapter 9 as full without changing the thirty-chapter architecture", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookParts.flatMap((part) => part.chapters).length, 30);
  assert.equal(getFilmHistoryBookChapter("soviet-montage"), filmHistoryChapterNine);
});
