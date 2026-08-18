import assert from "node:assert/strict";
import test from "node:test";

import { countFilmHistoryChapterWords } from "./filmHistoryChapterOne.js";
import {
  filmHistoryBookChapters,
  filmHistoryBookParts,
  getFilmHistoryBookChapter,
} from "./filmHistoryBook.js";

test("Film History book has six parts and thirty canonical chapters", () => {
  assert.equal(filmHistoryBookParts.length, 6);
  assert.equal(filmHistoryBookChapters.length, 30);
  assert.deepEqual(filmHistoryBookChapters.map((chapter) => chapter.number), Array.from({ length: 30 }, (_, index) => index + 1));
  assert.equal(new Set(filmHistoryBookChapters.map((chapter) => chapter.id)).size, 30);
});

test("Chapter 1 satisfies the full editorial definition rather than the old baseline", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  assert.equal(chapter.status, "full");
  assert.equal(chapter.title, "From motion studies to cinema");
  assert.equal(chapter.period, "1870s–1905");
  assert.equal(chapter.sections.length, 12);
  assert.ok(chapter.learningObjectives.length >= 8);
  assert.ok(chapter.keyTerms.length >= 15);
  assert.ok(chapter.sources.length >= 25);
  assert.match(chapter.summary, /not invented once/i);

  const wordCount = countFilmHistoryChapterWords(chapter);
  assert.ok(wordCount >= 10_000, `Chapter 1 must contain at least 10,000 words; found ${wordCount}`);
  assert.ok(wordCount <= 12_500, `Chapter 1 should remain within the planned chapter scale; found ${wordCount}`);
});

test("every Chapter 1 section has resolvable source provenance", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  const sourceIds = new Set(chapter.sources.map((source) => source.id));
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.ok(chapter.sources.every((source) => source.url.startsWith("https://")));
  for (const section of chapter.sections) {
    assert.ok(section.sourceIds.length > 0, `${section.id} must cite at least one source`);
    for (const sourceId of section.sourceIds) {
      assert.ok(sourceIds.has(sourceId), `${section.id} references unknown source ${sourceId}`);
    }
  }
});

test("Chapter 1 keeps the audited Film Atlas role and gap matrix", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  assert.equal(chapter.filmReferences.length, 11);

  const byDecision = (decision: "P0" | "P1" | "P2" | "use_existing_atlas_case") =>
    chapter.filmReferences.filter((reference) => reference.atlasDecision === decision).map((reference) => reference.title).sort();

  assert.deepEqual(byDecision("P0"), ["Blacksmith Scene", "The Great Train Robbery", "Workers Leaving the Lumière Factory"].sort());
  assert.deepEqual(byDecision("P1"), ["Fire!", "Life of an American Fireman", "Rescued by Rover"].sort());
  assert.deepEqual(byDecision("P2"), ["Annabelle Serpentine Dance", "Arrival of a Train at La Ciotat", "L'Arroseur arrosé", "The Big Swallow"].sort());
  assert.deepEqual(byDecision("use_existing_atlas_case"), ["A Trip to the Moon"]);

  const trip = chapter.filmReferences.find((reference) => reference.title === "A Trip to the Moon" && reference.year === 1902);
  assert.ok(trip);
  assert.equal(trip.role, "anchor_film");
  assert.equal(trip.atlasScenarioId, "scenario_a_trip_to_the_moon_1902");

  assert.deepEqual(
    chapter.filmReferences.filter((reference) => reference.role === "anchor_film").map((reference) => reference.title).sort(),
    ["A Trip to the Moon", "Blacksmith Scene", "The Great Train Robbery", "Workers Leaving the Lumière Factory"].sort(),
  );
});

test("pre-cinema apparatus and motion studies remain Historical Objects, not fake Production Cases", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  assert.ok(chapter.historicalObjects.length >= 4);
  assert.ok(chapter.historicalObjects.every((item) => item.role === "historical_object"));
  assert.ok(chapter.historicalObjects.every((item) => item.atlasDecision === "no_production_case"));
  assert.ok(chapter.historicalObjects.some((item) => /Muybridge/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /Marey/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /Kinetoscope/i.test(item.label)));
});

test("Chapter 2 is a full source-backed exhibition-history chapter", () => {
  const chapter = getFilmHistoryBookChapter("projection-programmes-audiences");
  assert.ok(chapter);
  assert.equal(chapter.status, "full");
  assert.equal(chapter.title, "Projection, programmes and audiences");
  assert.equal(chapter.period, "1895–1907");
  assert.equal(chapter.sections.length, 12);
  assert.ok(chapter.learningObjectives.length >= 8);
  assert.ok(chapter.keyTerms.length >= 15);
  assert.ok(chapter.sources.length >= 25);
  assert.match(chapter.summary, /exhibitors assembled programmes/i);

  const wordCount = countFilmHistoryChapterWords(chapter);
  assert.ok(wordCount >= 8_000, `Chapter 2 must contain at least 8,000 words; found ${wordCount}`);
  assert.ok(wordCount <= 12_500, `Chapter 2 should remain within the planned chapter scale; found ${wordCount}`);
});

test("every Chapter 2 section has dense resolvable source provenance", () => {
  const chapter = getFilmHistoryBookChapter("projection-programmes-audiences");
  assert.ok(chapter);
  const sourceIds = new Set(chapter.sources.map((source) => source.id));
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.ok(chapter.sources.every((source) => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some((source) => source.publisher === "Library of Congress"));
  assert.ok(chapter.sources.some((source) => /British Film Institute|BFI/.test(source.publisher)));
  assert.ok(chapter.sources.some((source) => source.publisher === "National Science and Media Museum"));

  for (const section of chapter.sections) {
    assert.ok(section.paragraphs.length >= 5, `${section.id} must contain at least five substantive paragraphs`);
    assert.ok(section.sourceIds.length >= 2, `${section.id} must cite at least two sources`);
    for (const sourceId of section.sourceIds) {
      assert.ok(sourceIds.has(sourceId), `${section.id} references unknown source ${sourceId}`);
    }
  }
});

test("Chapter 2 keeps the completed audited Film Atlas matrix", () => {
  const chapter = getFilmHistoryBookChapter("projection-programmes-audiences");
  assert.ok(chapter);
  assert.equal(chapter.filmReferences.length, 8);

  const byDecision = (decision: "P0" | "P1" | "P2" | "use_existing_atlas_case") =>
    chapter.filmReferences.filter((reference) => reference.atlasDecision === decision).map((reference) => reference.title).sort();

  assert.deepEqual(byDecision("P0"), []);
  assert.deepEqual(byDecision("P1"), []);
  assert.deepEqual(byDecision("P2"), ["May Irwin Kiss", "Sedgwick's Bioscope Showfront at Pendlebury Wakes"].sort());
  assert.deepEqual(
    byDecision("use_existing_atlas_case"),
    [
      "A Trip to the Moon",
      "Employees Leaving Brown's Atlas Works, Sheffield",
      "The Corbett–Fitzsimmons Fight",
      "The Great Train Robbery",
      "Uncle Josh at the Moving Picture Show",
      "Workers Leaving the Lumière Factory",
    ].sort(),
  );

  const existing = chapter.filmReferences.filter((reference) => reference.atlasDecision === "use_existing_atlas_case");
  assert.equal(existing.length, 6);
  assert.ok(existing.every((reference) => Boolean(reference.atlasScenarioId)), "all Chapter 2 reused Atlas cases need canonical scenario IDs");
});

test("Chapter 2 keeps exhibition infrastructure outside fake Production Cases", () => {
  const chapter = getFilmHistoryBookChapter("projection-programmes-audiences");
  assert.ok(chapter);
  assert.equal(chapter.historicalObjects.length, 8);
  assert.ok(chapter.historicalObjects.every((item) => item.role === "historical_object"));
  assert.ok(chapter.historicalObjects.every((item) => item.atlasDecision === "no_production_case"));
  assert.ok(chapter.historicalObjects.some((item) => /Grand Café/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /Vitascope/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /catalogues/i.test(item.label)));
  assert.ok(chapter.historicalObjects.some((item) => /Nickelodeon/i.test(item.label)));
});

test("only Chapters 11–30 remain explicit outlines after Chapter 10 completion", () => {
  const completed = filmHistoryBookChapters.filter((chapter) => chapter.number <= 10);
  assert.equal(completed.length, 10);
  assert.ok(completed.every((chapter) => chapter.status === "full"));
  assert.ok(completed.every((chapter) => chapter.sections.length > 0));

  const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number > 10);
  assert.equal(remaining.length, 20);
  assert.ok(remaining.every((chapter) => chapter.status === "outline"));
  assert.ok(remaining.every((chapter) => chapter.sections.length === 0));
  assert.ok(remaining.every((chapter) => chapter.summary.length > 40));
  assert.ok(remaining.every((chapter) => chapter.learningObjectives.length >= 3));
});
