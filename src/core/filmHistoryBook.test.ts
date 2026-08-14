import assert from "node:assert/strict";
import test from "node:test";

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

test("the first Film History chapter is fully materialized and sourced", () => {
  const chapter = getFilmHistoryBookChapter("motion-before-cinema");
  assert.ok(chapter);
  assert.equal(chapter.status, "full");
  assert.ok(chapter.sections.length >= 7);
  assert.ok(chapter.learningObjectives.length >= 5);
  assert.ok(chapter.keyTerms.length >= 8);
  assert.ok(chapter.sources.length >= 6);
  assert.ok(chapter.filmReferences.some((reference) => reference.title === "A Trip to the Moon" && reference.year === 1902));
  assert.match(chapter.summary, /single inventor/i);
});

test("remaining chapters are explicit outlines rather than pretending to be finished prose", () => {
  const remaining = filmHistoryBookChapters.filter((chapter) => chapter.number !== 1);
  assert.equal(remaining.length, 29);
  assert.ok(remaining.every((chapter) => chapter.status === "outline"));
  assert.ok(remaining.every((chapter) => chapter.sections.length === 0));
  assert.ok(remaining.every((chapter) => chapter.summary.length > 40));
  assert.ok(remaining.every((chapter) => chapter.learningObjectives.length >= 3));
});
