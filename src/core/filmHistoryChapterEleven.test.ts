import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { filmHistoryBookChapters, getFilmHistoryBookChapter } from "./filmHistoryBook.js";
import { filmHistoryChapterEleven, filmHistoryChapterElevenSources } from "./filmHistoryChapterEleven.js";

const resolved = JSON.parse(readFileSync("docs/film-history-chapter-eleven-atlas-resolved.json", "utf8")) as {
  candidates: Array<{ title: string; decision: string; scenarioId: string | null }>;
  historicalObjects: Array<{ label: string }>;
};

test("Chapter 11 adds substantive sourced prose without falsely claiming full editorial completion", () => {
  const chapter = getFilmHistoryBookChapter("sound-transition");
  assert.equal(chapter, filmHistoryChapterEleven);
  assert.equal(chapter?.status, "draft");
  assert.equal(chapter?.period, "1927–1934");
  assert.equal(chapter?.sections.length, 9);
  assert.ok(chapter.learningObjectives.length >= 10);
  assert.ok(chapter.keyTerms.length >= 25);
  assert.ok(chapter.sources.length >= 15);
  const ids = new Set(chapter.sections.map((section) => section.id));
  assert.equal(ids.size, chapter.sections.length);
  for (const section of chapter.sections) {
    assert.match(section.id, /^ch11_/);
    assert.equal(section.paragraphs.length, 3, `${section.id}: full comparative argument expected`);
    assert.ok(section.paragraphs.every((text) => text.length >= 250), `${section.id}: short or empty paragraph`);
    assert.ok(section.sourceIds.length >= 2, `${section.id}: insufficient research provenance`);
  }
  const body = chapter.sections.flatMap((section) => section.paragraphs).join(" ");
  assert.ok(body.length >= 15_000, "Chapter 11 draft must contain real prose");
});

test("Chapter 11 sources have unique IDs, valid links and references in the text", () => {
  const ids = new Set(filmHistoryChapterElevenSources.map((source) => source.id));
  assert.equal(ids.size, filmHistoryChapterElevenSources.length);
  assert.equal(new Set(filmHistoryChapterElevenSources.map((source) => source.url)).size, ids.size);
  const referencedIds = new Set(filmHistoryChapterEleven.sections.flatMap((section) => section.sourceIds));
  for (const source of filmHistoryChapterElevenSources) {
    assert.match(source.id, /^ch11_/);
    assert.match(source.url, /^https:\/\//);
    assert.ok(source.title.trim().length > 0);
    assert.ok(source.publisher.trim().length > 0);
    assert.ok(referencedIds.has(source.id), `unused source ${source.id}`);
  }
  for (const section of filmHistoryChapterEleven.sections) {
    for (const sourceId of section.sourceIds) assert.ok(ids.has(sourceId), `${section.id}: unknown source ${sourceId}`);
  }
});

test("Chapter 11 reuses the exact 11 existing Atlas films and retains 15 book-only comparisons", () => {
  const refs = filmHistoryChapterEleven.filmReferences;
  assert.equal(refs.length, resolved.candidates.length);
  assert.equal(refs.length, 26);
  assert.equal(refs.filter((film) => film.atlasDecision === "use_existing_atlas_case").length, 11);
  assert.equal(refs.filter((film) => film.atlasDecision === "P2").length, 15);
  assert.ok(!refs.some((film) => film.atlasDecision === "P0" || film.atlasDecision === "P1"));
  for (const candidate of resolved.candidates) {
    const film = refs.find((item) => item.title === candidate.title);
    assert.ok(film, `missing canonical candidate ${candidate.title}`);
    if (candidate.decision === "USE_EXISTING") {
      assert.equal(film.atlasDecision, "use_existing_atlas_case");
      assert.equal(film.atlasScenarioId, candidate.scenarioId);
    } else {
      assert.equal(film.atlasDecision, "P2");
      assert.equal(film.atlasScenarioId, undefined);
    }
  }
});

test("Chapter 11 preserves historical technologies and missing-film boundaries", () => {
  assert.deepEqual(filmHistoryChapterEleven.historicalObjects.map((item) => item.label), resolved.historicalObjects.map((item) => item.label));
  assert.equal(filmHistoryChapterEleven.historicalObjects.length, 10);
  assert.ok(filmHistoryChapterEleven.historicalObjects.every((item) => item.atlasDecision === "no_production_case"));
  const body = filmHistoryChapterEleven.sections.flatMap((section) => section.paragraphs).join(" ");
  for (const term of ["The Jazz Singer", "Blackmail", "Applause", "City Lights", "M (1931)", "The Blue Angel", "Enthusiasm", "Alam Ara", "benshi", "blackface"]) {
    assert.ok(body.includes(term), `missing film-specific or ethical context: ${term}`);
  }
});

test("Film History keeps 30 chapters, with Chapters 11–23 drafted and Chapters 1–10 full", () => {
  assert.equal(filmHistoryBookChapters.length, 30);
  assert.equal(filmHistoryBookChapters.filter((chapter) => chapter.status === "full").length, 10);
  assert.equal(filmHistoryBookChapters.filter((chapter) => chapter.status === "draft").length, 13);
  assert.equal(filmHistoryBookChapters.filter((chapter) => chapter.status === "outline").length, 7);
  for (const number of [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]) {
    assert.equal(filmHistoryBookChapters.find((chapter) => chapter.number === number)?.status, "draft");
  }
});
