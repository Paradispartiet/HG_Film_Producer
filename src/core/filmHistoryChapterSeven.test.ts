import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterSeven, filmHistoryChapterSevenSources } from "./filmHistoryChapterSeven.js";
import { filmHistoryBookParts, getFilmHistoryBookChapter } from "./filmHistoryBook.js";

const canonicalUseExistingScenarioIds = [
  "scenario_metropolis_1927",
  "scenario_nosferatu_1922",
  "scenario_pandoras_box_1929",
  "scenario_the_cabinet_of_dr_caligari_1920",
  "scenario_the_last_laugh_1924",
] as const;

const canonicalUseExistingTitles = ["Metropolis", "Nosferatu", "Pandora's Box", "The Cabinet of Dr. Caligari", "The Last Laugh"] as const;

const canonicalP2Titles = [
  "Asphalt",
  "Diary of a Lost Girl",
  "Die Nibelungen",
  "Dr. Mabuse, the Gambler",
  "Faust",
  "The Joyless Street",
  "Variety",
  "Warning Shadows",
] as const;

const historicalObjectLabels = [
  "UFA and vertically scaled German studio infrastructure",
  "Decla-Bioscop, Decla and postwar company consolidation",
  "Expressionist design culture across film, theatre and visual art",
  "Kammerspielfilm and chamber-scale social drama",
  "Entfesselte Kamera / unchained-camera practice",
  "Film architecture, studio construction and artificial city space",
  "Inflation, stabilization and changing production economics",
  "Transatlantic circulation of Weimar labor and style",
  "Censorship, adaptation rights and legal vulnerability",
] as const;

function chapterText(): string {
  return [
    filmHistoryChapterSeven.summary,
    ...filmHistoryChapterSeven.learningObjectives,
    ...filmHistoryChapterSeven.keyTerms,
    ...filmHistoryChapterSeven.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...filmHistoryChapterSeven.filmReferences.flatMap((film) => [film.title, film.note]),
    ...filmHistoryChapterSeven.historicalObjects.flatMap((item) => [item.label, item.note]),
  ].join("\n");
}

function sorted<T extends string>(values: readonly T[]): T[] {
  return [...values].sort((left, right) => left.localeCompare(right));
}

test("Chapter 7 is canonical full book content with fifteen substantive sections", () => {
  assert.equal(filmHistoryChapterSeven.id, "weimar-expressionism");
  assert.equal(filmHistoryChapterSeven.number, 7);
  assert.equal(filmHistoryChapterSeven.title, "Weimar cinema: Expressionism, mobility and social modernity");
  assert.equal(filmHistoryChapterSeven.period, "1919–1929");
  assert.equal(filmHistoryChapterSeven.status, "full");
  assert.equal(filmHistoryChapterSeven.sections.length, 15);
  assert.ok(filmHistoryChapterSeven.learningObjectives.length >= 14);
  assert.ok(filmHistoryChapterSeven.keyTerms.length >= 25);

  const ids = filmHistoryChapterSeven.sections.map((section) => section.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => id.startsWith("ch7_")));
  for (const section of filmHistoryChapterSeven.sections) {
    assert.ok(section.paragraphs.length >= 3, `${section.id} needs at least three paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} needs at least two sources`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.trim().length >= 250), `${section.id} contains an editorially thin paragraph`);
  }
  assert.ok(chapterText().length >= 30000, "Chapter 7 full text is too thin for the canonical full gate");
});

test("Chapter 7 source bank is complete, unique, HTTPS and actually used", () => {
  assert.ok(filmHistoryChapterSevenSources.length >= 35);
  assert.equal(new Set(filmHistoryChapterSevenSources.map((source) => source.id)).size, filmHistoryChapterSevenSources.length);
  assert.equal(new Set(filmHistoryChapterSevenSources.map((source) => source.url)).size, filmHistoryChapterSevenSources.length);
  const sourceIds = new Set(filmHistoryChapterSevenSources.map((source) => source.id));
  const usedSourceIds = new Set(filmHistoryChapterSeven.sections.flatMap((section) => section.sourceIds));
  for (const source of filmHistoryChapterSevenSources) {
    assert.match(source.id, /^ch7_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
    assert.ok(usedSourceIds.has(source.id), `unused Chapter 7 source: ${source.id}`);
  }
  for (const section of filmHistoryChapterSeven.sections) {
    for (const sourceId of section.sourceIds) assert.ok(sourceIds.has(sourceId), `${section.id}: missing ${sourceId}`);
  }
});

test("Chapter 7 preserves the completed five-case Atlas matrix and P2-only comparisons", () => {
  const useExisting = filmHistoryChapterSeven.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case");
  const p2 = filmHistoryChapterSeven.filmReferences.filter((film) => film.atlasDecision === "P2");
  assert.deepEqual(sorted(useExisting.map((film) => film.title)), sorted(canonicalUseExistingTitles));
  assert.deepEqual(sorted(useExisting.map((film) => film.atlasScenarioId ?? "")), sorted(canonicalUseExistingScenarioIds));
  assert.deepEqual(sorted(p2.map((film) => film.title)), sorted(canonicalP2Titles));
  assert.ok(p2.every((film) => film.atlasScenarioId === undefined));
  assert.equal(filmHistoryChapterSeven.filmReferences.length, 13);
  assert.equal(filmHistoryChapterSeven.filmReferences.some((film) => film.atlasDecision === "P0" || film.atlasDecision === "P1"), false);
});

test("Chapter 7 infrastructure remains historical context, never fake Production Cases", () => {
  assert.deepEqual(filmHistoryChapterSeven.historicalObjects.map((item) => item.label), historicalObjectLabels);
  for (const item of filmHistoryChapterSeven.historicalObjects) {
    assert.equal(item.role, "historical_object");
    assert.equal(item.atlasDecision, "no_production_case");
    assert.ok(item.note.trim().length >= 90);
  }
});

test("Chapter 7 keeps historiographic, ethical, legal and version safeguards visible in prose", () => {
  const text = chapterText();
  assert.match(text, /not.*synonym for Expressionism|cannot be reduced to German Expressionism|not one Expressionist style/i);
  assert.match(text, /not the first.*remove.*camera|not.*first-ever invention|first moving shot/i);
  assert.match(text, /Nosferatu[\s\S]{0,2800}rights|adaptation rights[\s\S]{0,2800}Nosferatu/i);
  assert.match(text, /Metropolis[\s\S]{0,3600}shorten|reconstruction|restoration[\s\S]{0,3600}Metropolis/i);
  assert.match(text, /Pandora's Box[\s\S]{0,3200}appearance|object|queer|same-sex|queer[\s\S]{0,3200}Pandora's Box/i);
  assert.match(text, /Neue Sachlichkeit[\s\S]{0,2600}not|bounded|tendency/i);
  assert.match(text, /hyperinflation[\s\S]{0,2600}not|economic history[\s\S]{0,2600}universal mood/i);
  assert.match(text, /1929[\s\S]{0,3200}sound[\s\S]{0,3200}did not erase|silent/i);
});

test("canonical book can resolve Chapter 7 as full without changing the thirty-chapter architecture", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookParts.flatMap((part) => part.chapters).length, 30);
  const currentCanonical = getFilmHistoryBookChapter("weimar-expressionism");
  assert.ok(currentCanonical?.status === "outline" || currentCanonical === filmHistoryChapterSeven);
});
