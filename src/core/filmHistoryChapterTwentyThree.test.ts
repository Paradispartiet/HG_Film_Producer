import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentyThree } from "./filmHistoryChapterTwentyThree.js";

test("Chapter 23 offers twenty-six substantial essays about different Asian film industries", () => {
  const chapter = filmHistoryChapterTwentyThree;
  assert.equal(chapter.number, 23);
  assert.equal(chapter.id, "popular-asian-cinemas");
  assert.equal(chapter.period, "1960s–1980s");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 26);
  assert.equal(chapter.sections.reduce((count, article) => count + article.paragraphs.length, 0), 78);
  const prose = chapter.sections.flatMap(article => article.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 4_600, `Only ${words} article words`);
  for (const topic of [
    /Hindi/,/Tamil/,/Telugu/,/Bollywood/,/Sholay/,/Amar Akbar Anthony/,
    /Shaw Brothers/,/King Hu/,/Bruce Lee/,/Jackie Chan/,/Sammo Hung/,/Ann Hui/,/John Woo/,
    /Tora-san/,/Zatoichi/,/Fukasaku/,/anime/,/South Korea/,/Taiwan/,/Manila/,/dubbing/
  ]) assert.match(prose, topic);
});

test("Chapter 23 identifies 39 distinct real source records and no unresolved references", () => {
  const chapter = filmHistoryChapterTwentyThree;
  assert.equal(chapter.sources.length, 39);
  const sourceIds = new Set(chapter.sources.map(source => source.id));
  const urls = new Set(chapter.sources.map(source => source.url));
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.equal(urls.size, chapter.sources.length, "No duplicate source URLs");
  assert.ok(chapter.sources.every(source => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some(source => source.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.some(source => source.publisher === "University of Chicago Tamil Forum"));
  assert.ok(chapter.sources.some(source => source.publisher === "British Film Institute"));
  const articleIds = new Set<string>();
  const usedSources = new Set<string>();
  for (const article of chapter.sections) {
    assert.ok(!articleIds.has(article.id), `Duplicate article ID ${article.id}`);
    articleIds.add(article.id);
    assert.equal(article.paragraphs.length, 3, article.id);
    assert.ok(article.paragraphs.every(p => p.length >= 160), article.id);
    assert.ok(article.sourceIds.length >= 2, article.id);
    for (const id of article.sourceIds) {
      assert.ok(sourceIds.has(id), `Unknown source ${id} in ${article.id}`);
      usedSources.add(id);
    }
  }
  assert.equal(usedSources.size, sourceIds.size, "Every source must be used");
});

test("Chapter 23 has no fabricated playable Atlas IDs or production cases", () => {
  const chapter = filmHistoryChapterTwentyThree;
  assert.equal(chapter.filmReferences.length, 24);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.equal(chapter.historicalObjects.length, 18);
  assert.ok(chapter.historicalObjects.every(item => item.role === "historical_object" && item.atlasDecision === "no_production_case"));
});


test("Chapter 23 grounds Akira film history in a direct BFI essay", () => {
  const chapter = filmHistoryChapterTwentyThree;
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sources.length, 40);
  const source = chapter.sources.find(item => item.id === "ch23_jp_akira");
  assert.ok(source);
  assert.equal(source.publisher, "British Film Institute");
  assert.equal(source.url, "https://www.bfi.org.uk/features/30-years-akira-teenage-kicks-anime-style");
  const article = chapter.sections.find(item => item.id === "ch23_anime");
  assert.ok(article);
  assert.ok(article.sourceIds.includes("ch23_jp_akira"));
  assert.match(article.paragraphs.join(" "), /1988 Japanese release of Akira/);
});
