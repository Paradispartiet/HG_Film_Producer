import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentyTwo } from "./filmHistoryChapterTwentyTwo.js";

test("Chapter 22 is a substantial 25-essay account of different feminist, queer and political counter-cinemas", () => {
  const chapter = filmHistoryChapterTwentyTwo;
  assert.equal(chapter.number, 22);
  assert.equal(chapter.id, "feminist-queer-political");
  assert.equal(chapter.period, "1960s–1980s");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 25);
  assert.equal(chapter.sections.reduce((n, section) => n + section.paragraphs.length, 0), 75);
  const prose = chapter.sections.flatMap(section => section.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 4_500, `Only ${words} chapter 22 article words`);
  for (const topic of [/Laura Mulvey/,/women.s film collectives|women.s film workshops|women.s film/i,/Yvonne Rainer/,/Chantal Akerman/,/Barbara Hammer/,/Sarah Maldoror/,/Forough Farrokhzad/,/Marleen Gorris/,/Lizzie Borden/,/Shirley Clarke/,/Derek Jarman/,/Ron Peck/,/Marlon Riggs/,/Terence Davies/,/distribution|exhibition/]) {
    assert.match(prose, topic);
  }
});

test("Chapter 22 sources are named, individually unique, referenced, and HTTPS", () => {
  const chapter = filmHistoryChapterTwentyTwo;
  assert.ok(chapter.sources.length >= 40);
  const ids = new Set(chapter.sources.map(source => source.id));
  const urls = new Set(chapter.sources.map(source => source.url));
  assert.equal(ids.size, chapter.sources.length);
  assert.equal(urls.size, chapter.sources.length, "Distinct sources must not duplicate exact URLs");
  assert.equal(new Set(chapter.sections.map(section => section.id)).size, chapter.sections.length);
  assert.ok(chapter.sources.every(source => source.url.startsWith("https://") && source.title.length >= 6));
  assert.ok(chapter.sources.some(source => source.publisher === "British Film Institute"));
  assert.ok(chapter.sources.some(source => source.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.some(source => source.publisher === "University College London"));
  const used = new Set<string>();
  for (const section of chapter.sections) {
    assert.equal(section.paragraphs.length, 3, section.id);
    assert.ok(section.paragraphs.every(paragraph => paragraph.length >= 160), section.id);
    assert.ok(section.sourceIds.length >= 2, section.id);
    for (const id of section.sourceIds) {
      assert.ok(ids.has(id), `Unknown source ${id} in article ${section.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size, "Every source entry must be used in a substantive article");
});

test("Chapter 22 refuses unverified Atlas scenario IDs or fictitious playable institutional objects", () => {
  const chapter = filmHistoryChapterTwentyTwo;
  assert.equal(chapter.filmReferences.length, 23);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.ok(chapter.historicalObjects.length >= 18);
  assert.ok(chapter.historicalObjects.every(item => item.role === "historical_object" && item.atlasDecision === "no_production_case"));
});
