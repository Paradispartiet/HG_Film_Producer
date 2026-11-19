import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwenty } from "./filmHistoryChapterTwenty.js";

test("Chapter 20 has 22 source-backed essays across distinct decolonizing film cultures", () => {
  const chapter = filmHistoryChapterTwenty;
  assert.equal(chapter.id, "decolonization-third-cinema");
  assert.equal(chapter.number, 20);
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 22);
  assert.equal(chapter.sections.reduce((n, s) => n + s.paragraphs.length, 0), 66);
  const text = chapter.sections.flatMap(s => s.paragraphs).join(" ");
  const wordCount = text.trim().split(/\s+/).length;
  assert.ok(wordCount >= 4_200, `Chapter 20 has only ${wordCount} article words`);
  for (const term of [
    /Argentina|Argentine/,/Brazil|Brazilian/,/Cuba|Cuban/,
    /Chile|Chilean/,/Algeri/,/Senegal/,/Mauritania/,
    /Safi Faye/,/Med Hondo/,/Mambéty/,/Third Cinema/,
    /distribution/,/FESPACO/,/manifesto/,/colonial/
  ]) assert.match(text, term);
});

test("Chapter 20 has no unresolved, duplicate or unused sources", () => {
  const chapter = filmHistoryChapterTwenty;
  assert.ok(chapter.sources.length >= 30);
  const ids = new Set(chapter.sources.map(s => s.id));
  assert.equal(ids.size, chapter.sources.length);
  assert.equal(new Set(chapter.sections.map(s => s.id)).size, chapter.sections.length);
  assert.ok(chapter.sources.every(s => s.url.startsWith("https://")));
  assert.ok(chapter.sources.some(s => /BFI|British Film Institute/.test(s.publisher)));
  assert.ok(chapter.sources.some(s => /Criterion/.test(s.publisher)));
  const used = new Set<string>();
  for (const article of chapter.sections) {
    assert.equal(article.paragraphs.length, 3, article.id);
    assert.ok(article.paragraphs.every(paragraph => paragraph.length >= 150), article.id);
    assert.ok(article.sourceIds.length >= 2, article.id);
    for (const id of article.sourceIds) {
      assert.ok(ids.has(id), `${article.id} has unknown source ${id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size, "Every source must be used");
});

test("Chapter 20 does not convert political institutions into imaginary playable film scenarios", () => {
  const chapter = filmHistoryChapterTwenty;
  assert.equal(chapter.filmReferences.length, 16);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.ok(chapter.historicalObjects.length >= 14);
  assert.ok(chapter.historicalObjects.every(item => item.role === "historical_object" && item.atlasDecision === "no_production_case"));
  assert.ok(chapter.keyTerms.includes("Third Cinema"));
  assert.ok(chapter.keyTerms.includes("FEPACI"));
});
