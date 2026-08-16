import assert from "node:assert/strict";
import test from "node:test";

import { filmHistoryChapterSix, filmHistoryChapterSixSources } from "./filmHistoryChapterSix.js";
import { filmHistoryBookParts, getFilmHistoryBookChapter } from "./filmHistoryBook.js";

const canonicalUseExistingScenarioIds = [
  "scenario_it_1927",
  "scenario_the_cheat_1915",
  "scenario_the_crowd_1928",
  "scenario_the_general_1926",
  "scenario_the_gold_rush_1925",
  "scenario_wings_1927",
] as const;

const canonicalUseExistingTitles = ["It", "The Cheat", "The Crowd", "The General", "The Gold Rush", "Wings"] as const;

const canonicalP2Titles = [
  "Ben-Hur: A Tale of the Christ",
  "Flesh and the Devil",
  "Greed",
  "Intolerance",
  "Safety Last!",
  "Show People",
  "Sunrise: A Song of Two Humans",
  "The Big Parade",
  "The Birth of a Nation",
  "The Cameraman",
  "The Covered Wagon",
  "The Kid",
] as const;

const historicalObjectLabels = [
  "Hollywood production cluster and specialist service firms",
  "Famous Players-Lasky and Paramount distribution",
  "Loew's and MGM vertical integration",
  "First National exhibitor-distributor network",
  "United Artists distribution consortium",
  "Run-zone-clearance, block booking and theater chains",
  "Continuity as collaborative production practice",
  "Contract stars, publicity departments and fan culture",
  "Genre cycles and production planning",
  "MPPDA and industry self-regulation",
] as const;

function chapterText(): string {
  return [
    filmHistoryChapterSix.summary,
    ...filmHistoryChapterSix.learningObjectives,
    ...filmHistoryChapterSix.keyTerms,
    ...filmHistoryChapterSix.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...filmHistoryChapterSix.filmReferences.flatMap((film) => [film.title, film.note]),
    ...filmHistoryChapterSix.historicalObjects.flatMap((item) => [item.label, item.note]),
  ].join("\n");
}

function sorted<T extends string>(values: readonly T[]): T[] {
  return [...values].sort((left, right) => left.localeCompare(right));
}

test("Chapter 6 is canonical full book content with fifteen substantive sections", () => {
  assert.equal(filmHistoryChapterSix.id, "classical-hollywood");
  assert.equal(filmHistoryChapterSix.number, 6);
  assert.equal(filmHistoryChapterSix.title, "Classical continuity and the Hollywood system");
  assert.equal(filmHistoryChapterSix.period, "1914–1929");
  assert.equal(filmHistoryChapterSix.status, "full");
  assert.equal(filmHistoryChapterSix.sections.length, 15);
  assert.ok(filmHistoryChapterSix.learningObjectives.length >= 14);
  assert.ok(filmHistoryChapterSix.keyTerms.length >= 25);

  const ids = filmHistoryChapterSix.sections.map((section) => section.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => id.startsWith("ch6_")));
  for (const section of filmHistoryChapterSix.sections) {
    assert.ok(section.paragraphs.length >= 3, `${section.id} needs at least three paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} needs at least two sources`);
    assert.ok(section.paragraphs.every((paragraph) => paragraph.trim().length >= 250), `${section.id} contains an editorially thin paragraph`);
  }
  assert.ok(chapterText().length >= 30000, "Chapter 6 full text is too thin for the canonical full gate");
});

test("Chapter 6 source bank is complete, unique, HTTPS and actually used", () => {
  assert.ok(filmHistoryChapterSixSources.length >= 35);
  assert.equal(new Set(filmHistoryChapterSixSources.map((source) => source.id)).size, filmHistoryChapterSixSources.length);
  assert.equal(new Set(filmHistoryChapterSixSources.map((source) => source.url)).size, filmHistoryChapterSixSources.length);
  const sourceIds = new Set(filmHistoryChapterSixSources.map((source) => source.id));
  const usedSourceIds = new Set(filmHistoryChapterSix.sections.flatMap((section) => section.sourceIds));
  for (const source of filmHistoryChapterSixSources) {
    assert.match(source.id, /^ch6_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
    assert.ok(usedSourceIds.has(source.id), `unused Chapter 6 source: ${source.id}`);
  }
  for (const section of filmHistoryChapterSix.sections) {
    for (const sourceId of section.sourceIds) assert.ok(sourceIds.has(sourceId), `${section.id}: missing ${sourceId}`);
  }
});

test("Chapter 6 preserves the completed six-case Atlas matrix and P2-only comparisons", () => {
  const useExisting = filmHistoryChapterSix.filmReferences.filter((film) => film.atlasDecision === "use_existing_atlas_case");
  const p2 = filmHistoryChapterSix.filmReferences.filter((film) => film.atlasDecision === "P2");
  assert.deepEqual(sorted(useExisting.map((film) => film.title)), sorted(canonicalUseExistingTitles));
  assert.deepEqual(sorted(useExisting.map((film) => film.atlasScenarioId ?? "")), sorted(canonicalUseExistingScenarioIds));
  assert.deepEqual(sorted(p2.map((film) => film.title)), sorted(canonicalP2Titles));
  assert.ok(p2.every((film) => film.atlasScenarioId === undefined));
  assert.equal(filmHistoryChapterSix.filmReferences.length, 18);
  assert.equal(filmHistoryChapterSix.filmReferences.some((film) => film.atlasDecision === "P0" || film.atlasDecision === "P1"), false);
});

test("Chapter 6 industrial systems remain infrastructure, never fake Production Cases", () => {
  assert.deepEqual(filmHistoryChapterSix.historicalObjects.map((item) => item.label), historicalObjectLabels);
  for (const item of filmHistoryChapterSix.historicalObjects) {
    assert.equal(item.role, "historical_object");
    assert.equal(item.atlasDecision, "no_production_case");
    assert.ok(item.note.trim().length >= 90);
  }
});

test("Chapter 6 keeps historiographic, ethical and version safeguards visible in prose", () => {
  const text = chapterText();
  assert.match(text, /continuity[\s\S]{0,1800}not.*single invention|single inventor[\s\S]{0,1800}continuity/i);
  assert.match(text, /later antitrust[\s\S]{0,1800}chronolog|1946[\s\S]{0,1800}retrospective|postdate[\s\S]{0,1800}silent/i);
  assert.match(text, /The Cheat[\s\S]{0,2600}racist|racialized[\s\S]{0,2600}The Cheat/i);
  assert.match(text, /It[\s\S]{0,2600}appearance scoring|objectification[\s\S]{0,2600}It/i);
  assert.match(text, /The Gold Rush[\s\S]{0,2600}1942|1942[\s\S]{0,2600}The Gold Rush/i);
  assert.match(text, /Wings[\s\S]{0,2800}1929[\s\S]{0,1400}sound|1929[\s\S]{0,2800}Wings/i);
  assert.match(text, /The Birth of a Nation[\s\S]{0,2400}white[- ]supremacist|white[- ]supremacist[\s\S]{0,2400}The Birth of a Nation/i);
  assert.match(text, /Greed[\s\S]{0,2200}director-approved|director-approved[\s\S]{0,2200}Greed/i);
  assert.match(text, /MPPDA[\s\S]{0,2200}1934|1934[\s\S]{0,2200}MPPDA/i);
});

test("canonical book resolves Chapters 1–6 as full and preserves the six-part thirty-chapter architecture", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookParts.flatMap((part) => part.chapters).length, 30);
  assert.equal(getFilmHistoryBookChapter("motion-before-cinema")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("projection-programmes-audiences")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("fiction-editing-narrative")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("industry-feature-transition")?.status, "full");
  assert.equal(getFilmHistoryBookChapter("global-before-wwi")?.status, "full");
  const canonicalChapterSix = getFilmHistoryBookChapter("classical-hollywood");
  assert.equal(canonicalChapterSix, filmHistoryChapterSix);
  assert.equal(canonicalChapterSix?.status, "full");
  assert.equal(canonicalChapterSix?.sections.length, 15);
  assert.equal(getFilmHistoryBookChapter("weimar-expressionism")?.status, "full");
});
