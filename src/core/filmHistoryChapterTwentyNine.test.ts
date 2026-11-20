import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentyNine } from "./filmHistoryChapterTwentyNine.js";

test("Chapter 29 offers substantial histories of franchises, platforms and theatrical circulation", () => {
  const chapter = filmHistoryChapterTwentyNine;
  assert.equal(chapter.id, "platform-era");
  assert.equal(chapter.number, 29);
  assert.equal(chapter.period, "2000s–present");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 28);
  assert.equal(chapter.sections.reduce((n, s) => n + s.paragraphs.length, 0), 84);
  const text = chapter.sections.flatMap(s => s.paragraphs).join(" ");
  const words = text.trim().split(/\s+/).length;
  assert.ok(words >= 5_750, `Chapter 29 has only ${words} words`);
  for (const topic of [
    /sequel/,/intellectual property/,/The Lord of the Rings/,/Harry Potter/,
    /Iron Man/,/The Avengers/,/Black Panther/,/Avatar/,/The Hunger Games/,
    /Fast and the Furious/,/Toy Story/,/Star Wars/,/Baahubali/,/Dune/,
    /release window/,/Netflix/,/Beasts of No Nation/,/Okja/,/Roma/,
    /The Irishman/,/catalogue/,/audience data/,/COVID-19/,/residuals/,
    /cinema/,/preservation/
  ]) assert.match(text, topic);
});

test("Chapter 29 has 39 distinct, used source records with essay-level provenance", () => {
  const chapter = filmHistoryChapterTwentyNine;
  assert.equal(chapter.sources.length, 39);
  const ids = new Set(chapter.sources.map(s => s.id));
  const urls = new Set(chapter.sources.map(s => s.url));
  assert.equal(ids.size, chapter.sources.length);
  assert.equal(urls.size, chapter.sources.length);
  assert.ok(chapter.sources.every(s => s.url.startsWith("https://") && s.title.length > 10));
  assert.ok(chapter.sources.some(s => s.publisher === "European Audiovisual Observatory"));
  assert.ok(chapter.sources.some(s => s.publisher === "British Film Institute"));
  assert.ok(chapter.sources.some(s => s.publisher === "SAG-AFTRA"));
  assert.ok(chapter.sources.some(s => s.publisher === "Writers Guild of America"));
  const used = new Set<string>();
  const essayIds = new Set<string>();
  for (const essay of chapter.sections) {
    assert.match(essay.id, /^ch29_/);
    assert.ok(!essayIds.has(essay.id), essay.id);
    essayIds.add(essay.id);
    assert.equal(essay.paragraphs.length, 3, essay.id);
    assert.ok(essay.paragraphs.every(p => p.length >= 400), `Short paragraph in ${essay.id}`);
    assert.ok(essay.sourceIds.length >= 2, essay.id);
    for (const id of essay.sourceIds) {
      assert.ok(ids.has(id), `Unknown source ${id} in ${essay.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size, "Chapter 29 contains unused source records");
});

test("Chapter 29 does not fabricate playable Atlas case identifiers for franchises or platforms", () => {
  const chapter = filmHistoryChapterTwentyNine;
  assert.equal(chapter.filmReferences.length, 24);
  assert.ok(chapter.filmReferences.every(f => f.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(f => f.atlasScenarioId === undefined));
  assert.ok(chapter.filmReferences.every(f => f.year >= 1990 && f.year <= 2026));
  assert.equal(chapter.historicalObjects.length, 20);
  assert.ok(chapter.historicalObjects.every(x => x.role === "historical_object" && x.atlasDecision === "no_production_case"));
});
