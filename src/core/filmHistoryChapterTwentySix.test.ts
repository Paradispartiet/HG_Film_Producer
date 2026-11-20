import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentySix } from "./filmHistoryChapterTwentySix.js";

test("Chapter 26 covers post-1989 institutions, regions and 22 substantial film essays", () => {
  const chapter = filmHistoryChapterTwentySix;
  assert.equal(chapter.id, "post-cold-war");
  assert.equal(chapter.number, 26);
  assert.equal(chapter.period, "1989–2005");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 22);
  assert.equal(chapter.sections.reduce((count, section) => count + section.paragraphs.length, 0), 66);
  const prose = chapter.sections.flatMap(section => section.paragraphs).join(" ");
  const wordCount = prose.trim().split(/\s+/).length;
  assert.ok(wordCount >= 4_600, `Only ${wordCount} Chapter 26 article words`);
  for (const essential of [
    /Eurimages/,/MEDIA programme/,/co-production/,/subtitling/,/Kieślowski/,
    /Three Colours/,/Before the Rain/,/Dogme 95/,/La Haine/,/New Queer Cinema/,
    /Daughters of the Dust/,/Watermelon Woman/,/The Piano/,/Beau Travail/,
    /Close-up/,/Taste of Cherry/,/White Balloon/,/Hyenas/,/Waiting for Happiness/,
    /Central Station/,/Amores perros/,/Chungking Express/,/Taiwan/,
    /Monsoon Wedding/,/Fire/,/The Gleaners and I/
  ]) assert.match(prose, essential);
});

test("Chapter 26 maintains 42 unique, used and resolvable editorial source records", () => {
  const chapter = filmHistoryChapterTwentySix;
  assert.equal(chapter.sources.length, 42);
  const sourceIds = new Set(chapter.sources.map(source => source.id));
  const sourceUrls = new Set(chapter.sources.map(source => source.url));
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.equal(sourceUrls.size, chapter.sources.length);
  assert.ok(chapter.sources.every(source => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some(source => source.publisher === "Council of Europe"));
  assert.ok(chapter.sources.some(source => source.publisher === "European Commission"));
  assert.ok(chapter.sources.some(source => source.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.some(source => /British Film Institute|BFI/.test(source.publisher)));
  const usedIds = new Set<string>();
  const essayIds = new Set<string>();
  for (const essay of chapter.sections) {
    assert.ok(!essayIds.has(essay.id), `Duplicate essay id ${essay.id}`);
    essayIds.add(essay.id);
    assert.match(essay.id, /^ch26_/);
    assert.equal(essay.paragraphs.length, 3, essay.id);
    assert.ok(essay.paragraphs.every(paragraph => paragraph.length >= 400), `Short paragraph in ${essay.id}`);
    assert.ok(essay.sourceIds.length >= 2, `No independent sources for ${essay.id}`);
    for (const id of essay.sourceIds) {
      assert.ok(sourceIds.has(id), `Unknown source ${id} in ${essay.id}`);
      usedIds.add(id);
    }
  }
  assert.equal(usedIds.size, sourceIds.size, "Unreferenced source record in Chapter 26");
});

test("Chapter 26 does not create fictional Atlas production scenarios", () => {
  const chapter = filmHistoryChapterTwentySix;
  assert.equal(chapter.filmReferences.length, 26);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.ok(chapter.filmReferences.every(film => film.year >= 1989 && film.year <= 2005));
  assert.equal(chapter.historicalObjects.length, 20);
  assert.ok(chapter.historicalObjects.every(object => object.role === "historical_object" && object.atlasDecision === "no_production_case"));
});
