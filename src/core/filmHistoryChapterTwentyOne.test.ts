import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentyOne } from "./filmHistoryChapterTwentyOne.js";

test("Chapter 21 is a substantive New Hollywood book draft, not an Atlas audit", () => {
  const chapter = filmHistoryChapterTwentyOne;
  assert.equal(chapter.number, 21);
  assert.equal(chapter.id, "new-hollywood");
  assert.equal(chapter.title, "New Hollywood");
  assert.equal(chapter.period, "1967–1980");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 23);
  assert.equal(chapter.sections.reduce((total, section) => total + section.paragraphs.length, 0), 69);
  const prose = chapter.sections.flatMap(section => section.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 4_700, `Only ${words} New Hollywood article words`);
  for (const topic of [/Bonnie and Clyde/,/The Graduate/,/Easy Rider/,/Coppola/,/Altman/,/Taxi Driver/,/Wanda/,/Elaine May/,/Gena Rowlands/,/Melvin Van Peebles/,/Charles Burnett/,/Jaws/,/Star Wars/,/Apocalypse Now/,/distribution/i]) {
    assert.match(prose, topic);
  }
});

test("Chapter 21 article source provenance is consistent and every source is used", () => {
  const chapter = filmHistoryChapterTwentyOne;
  const ids = new Set(chapter.sources.map(source => source.id));
  assert.equal(ids.size, chapter.sources.length);
  assert.ok(ids.size >= 40);
  assert.equal(new Set(chapter.sections.map(section => section.id)).size, chapter.sections.length);
  assert.ok(chapter.sources.every(source => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some(source => source.publisher === "American Film Institute"));
  assert.ok(chapter.sources.some(source => source.publisher === "British Film Institute"));
  assert.ok(chapter.sources.some(source => source.publisher === "The Criterion Collection"));
  const used = new Set<string>();
  for (const section of chapter.sections) {
    assert.equal(section.paragraphs.length, 3, section.id);
    assert.ok(section.paragraphs.every(p => p.length >= 180), section.id);
    assert.ok(section.sourceIds.length >= 2, section.id);
    for (const id of section.sourceIds) {
      assert.ok(ids.has(id), `Unknown source ${id} in article ${section.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size);
});

test("Chapter 21 has no invented playable Atlas references or fake historical production cases", () => {
  const chapter = filmHistoryChapterTwentyOne;
  assert.equal(chapter.filmReferences.length, 22);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.ok(chapter.historicalObjects.length >= 15);
  assert.ok(chapter.historicalObjects.every(object => object.role === "historical_object" && object.atlasDecision === "no_production_case"));
});
