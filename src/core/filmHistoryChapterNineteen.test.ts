import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterNineteen } from "./filmHistoryChapterNineteen.js";

test("Canonical Chapter 19 is a substantial draft of distinct European new cinemas", () => {
  const chapter = filmHistoryChapterNineteen;
  assert.equal(chapter.number, 19);
  assert.equal(chapter.id, "new-waves-europe");
  assert.equal(chapter.period, "1955–1968");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 21);
  assert.equal(chapter.sections.reduce((count, section) => count + section.paragraphs.length, 0), 63);
  const prose = chapter.sections.flatMap(section => section.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 4_500, `Chapter 19 prose is underdeveloped: ${words} words`);
  for (const term of [/French/i,/British/i,/Poland|Polish/i,/Czechoslovak/i,/Slovak/i,/Varda/i,/Chytilová/i,/Free Cinema/i,/Cathy Come Home/i,/film school|film schools/i,/censorship|censor/i]) {
    assert.match(prose, term);
  }
});

test("Chapter 19 keeps every article source traceable and every source used", () => {
  const chapter = filmHistoryChapterNineteen;
  const ids = new Set(chapter.sources.map(source => source.id));
  assert.equal(ids.size, chapter.sources.length);
  assert.ok(ids.size >= 30);
  assert.equal(new Set(chapter.sections.map(section => section.id)).size, chapter.sections.length);
  assert.ok(chapter.sources.every(source => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some(source => source.publisher === "British Film Institute"));
  assert.ok(chapter.sources.some(source => source.publisher === "The Criterion Collection"));
  const used = new Set<string>();
  for (const article of chapter.sections) {
    assert.equal(article.paragraphs.length, 3, article.id);
    assert.ok(article.paragraphs.every(paragraph => paragraph.length >= 160), article.id);
    assert.ok(article.sourceIds.length >= 2, article.id);
    for (const id of article.sourceIds) {
      assert.ok(ids.has(id), `Missing source ${id} in article ${article.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size);
});

test("Chapter 19 has no claimed playable Atlas scenarios without a film-specific audit", () => {
  const chapter = filmHistoryChapterNineteen;
  assert.equal(chapter.filmReferences.length, 20);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.ok(chapter.historicalObjects.length >= 14);
  assert.ok(chapter.historicalObjects.every(item => item.role === "historical_object" && item.atlasDecision === "no_production_case"));
});
