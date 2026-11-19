import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterEighteen } from "./filmHistoryChapterEighteen.js";

test("Chapter 18 has twenty substantial historical film and industry articles", () => {
  const chapter = filmHistoryChapterEighteen;
  assert.equal(chapter.number, 18);
  assert.equal(chapter.id, "hollywood-after-war");
  assert.equal(chapter.period, "1945–1960");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 20);
  assert.equal(chapter.sections.reduce((n, section) => n + section.paragraphs.length, 0), 60);
  const prose = chapter.sections.flatMap(section => section.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 4_000, `Only ${words} Chapter 18 article words`);
  for (const theme of [/Paramount/i,/CinemaScope/i,/blacklist/i,/noir/i,/western/i,/Method/i,/television/i,/melodrama/i,/race|racial/i,/musical/i]) {
    assert.match(prose, theme);
  }
});

test("Chapter 18 source records are resolvable, all used and each article sourced", () => {
  const chapter = filmHistoryChapterEighteen;
  const refs = new Set(chapter.sources.map(source => source.id));
  const articles = new Set(chapter.sections.map(section => section.id));
  assert.equal(refs.size, chapter.sources.length);
  assert.equal(articles.size, chapter.sections.length);
  assert.ok(chapter.sources.length >= 30);
  assert.ok(chapter.sources.every(source => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some(source => source.publisher.startsWith("Library of Congress")));
  assert.ok(chapter.sources.some(source => source.publisher === "American Film Institute"));
  const used = new Set<string>();
  for (const article of chapter.sections) {
    assert.equal(article.paragraphs.length, 3, article.id);
    assert.ok(article.paragraphs.every(paragraph => paragraph.length >= 200), article.id);
    assert.ok(article.sourceIds.length >= 2, article.id);
    for (const id of article.sourceIds) {
      assert.ok(refs.has(id), `Unknown source ${id} in ${article.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, refs.size);
});

test("Chapter 18 explicitly keeps film and industry references outside unverified playable Atlas claims", () => {
  const chapter = filmHistoryChapterEighteen;
  assert.equal(chapter.filmReferences.length, 18);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.ok(chapter.historicalObjects.length >= 12);
  assert.ok(chapter.historicalObjects.every(item => item.role === "historical_object" && item.atlasDecision === "no_production_case"));
});
