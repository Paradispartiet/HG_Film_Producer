import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentyFive } from "./filmHistoryChapterTwentyFive.js";

test("Chapter 25 gives a substantive film-and-institution history, not just a director name list", () => {
  const chapter = filmHistoryChapterTwentyFive;
  assert.equal(chapter.id, "festival-art-cinema");
  assert.equal(chapter.number, 25);
  assert.equal(chapter.period, "1960s–1989");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 25);
  assert.equal(chapter.sections.reduce((n, item) => n + item.paragraphs.length, 0), 75);
  const prose = chapter.sections.flatMap(item => item.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 4_400, `Only ${words} chapter 25 words`);
  for (const theme of [
    /Cannes/,/Directors' Fortnight/,/Berlinale|Berlin/,/Venice/,/London Film Festival/,
    /subtitl/i,/distribution/,/funding|financing|subsid/i,/archive/,
    /Agnès Varda/,/Marguerite Duras/,/Chantal Akerman/,/Fassbinder/,/Wim Wenders/,
    /Werner Herzog/,/Tarkovsky/,/Parajanov/,/Larisa Shepitko/,/Jancsó/,
    /Víctor Erice/,/Ermanno Olmi/,/Satyajit Ray/,/Mrinal Sen/,/Kiarostami/,
    /Cissé/,/Guzmán/
  ]) assert.match(prose, theme);
});

test("Chapter 25's source records are distinct and every article has traceable provenance", () => {
  const chapter = filmHistoryChapterTwentyFive;
  assert.equal(chapter.sources.length, 48);
  const ids = new Set(chapter.sources.map(s => s.id));
  const urls = new Set(chapter.sources.map(s => s.url));
  assert.equal(ids.size, chapter.sources.length);
  assert.equal(urls.size, chapter.sources.length);
  assert.ok(chapter.sources.every(s => s.url.startsWith("https://") && s.title.length > 8));
  assert.ok(chapter.sources.some(s => s.publisher === "Festival de Cannes"));
  assert.ok(chapter.sources.some(s => s.publisher === "Berlinale"));
  assert.ok(chapter.sources.some(s => s.publisher === "La Biennale di Venezia"));
  assert.ok(chapter.sources.some(s => s.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.some(s => s.publisher === "British Film Institute"));
  const used = new Set<string>();
  const essayIds = new Set<string>();
  for (const essay of chapter.sections) {
    assert.ok(!essayIds.has(essay.id), essay.id);
    essayIds.add(essay.id);
    assert.equal(essay.paragraphs.length, 3, essay.id);
    assert.ok(essay.paragraphs.every(p => p.length >= 300), essay.id);
    assert.ok(essay.sourceIds.length >= 2, essay.id);
    for (const id of essay.sourceIds) {
      assert.ok(ids.has(id), `Unknown source ${id} in ${essay.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size, "Every research source record should support at least one essay");
});

test("Chapter 25 cannot fabricate playable Atlas IDs or turn festival institutions into movies", () => {
  const chapter = filmHistoryChapterTwentyFive;
  assert.equal(chapter.filmReferences.length, 25);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.equal(chapter.historicalObjects.length, 18);
  assert.ok(chapter.historicalObjects.every(x => x.role === "historical_object" && x.atlasDecision === "no_production_case"));
});
