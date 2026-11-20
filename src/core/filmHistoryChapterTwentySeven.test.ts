import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentySeven } from "./filmHistoryChapterTwentySeven.js";

test("Chapter 27 is substantive across industrial, independent and global digital film histories", () => {
  const chapter = filmHistoryChapterTwentySeven;
  assert.equal(chapter.id, "digital-production");
  assert.equal(chapter.number, 27);
  assert.equal(chapter.period, "1990s–2010s");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 23);
  assert.equal(chapter.sections.reduce((n, s) => n + s.paragraphs.length, 0), 69);
  const prose = chapter.sections.flatMap(s => s.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 4_900, `Only ${words} chapter 27 article words`);
  for (const topic of [
    /nonlinear editing/,/CGI/,/Jurassic Park/,/Toy Story/,/Terminator 2/,
    /The Matrix/,/digital intermediate/,/O Brother, Where Art Thou/,
    /motion[- ]capture/i,/Gollum/,/Dogme 95/,/Collateral/,/28 Days Later/,
    /Russian Ark/,/Timecode/,/In Vanda's Room/,/Unknown Pleasures/,
    /West of the Tracks/,/Atanarjuat/,/Waking Life/,/projection/,/preserv/i
  ]) assert.match(prose, topic);
});

test("Chapter 27 cites 40 distinct source records and every record supports at least one essay", () => {
  const chapter = filmHistoryChapterTwentySeven;
  assert.equal(chapter.sources.length, 40);
  const sourceIds = new Set(chapter.sources.map(s => s.id));
  const urls = new Set(chapter.sources.map(s => s.url));
  assert.equal(sourceIds.size, chapter.sources.length);
  assert.equal(urls.size, chapter.sources.length);
  assert.ok(chapter.sources.every(s => s.url.startsWith("https://") && s.title.length > 12));
  assert.ok(chapter.sources.some(s => /British Film Institute|BFI/.test(s.publisher)));
  assert.ok(chapter.sources.some(s => s.publisher === "American Society of Cinematographers"));
  assert.ok(chapter.sources.some(s => s.publisher === "Academy of Motion Picture Arts and Sciences"));
  const usedIds = new Set<string>();
  const essayIds = new Set<string>();
  for (const essay of chapter.sections) {
    assert.match(essay.id, /^ch27_/);
    assert.ok(!essayIds.has(essay.id), essay.id);
    essayIds.add(essay.id);
    assert.equal(essay.paragraphs.length, 3, essay.id);
    assert.ok(essay.paragraphs.every(p => p.length >= 400), essay.id);
    assert.ok(essay.sourceIds.length >= 2, essay.id);
    for (const id of essay.sourceIds) {
      assert.ok(sourceIds.has(id), `Unknown source ${id} in ${essay.id}`);
      usedIds.add(id);
    }
  }
  assert.equal(usedIds.size, sourceIds.size, "Unreferenced research source in Chapter 27");
});

test("Chapter 27 uses only book-level provisional film references and no fake Atlas cases", () => {
  const chapter = filmHistoryChapterTwentySeven;
  assert.equal(chapter.filmReferences.length, 21);
  assert.ok(chapter.filmReferences.every(f => f.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(f => f.atlasScenarioId === undefined));
  assert.ok(chapter.filmReferences.every(f => f.year >= 1989 && f.year <= 2010));
  assert.equal(chapter.historicalObjects.length, 16);
  assert.ok(chapter.historicalObjects.every(o => o.role === "historical_object" && o.atlasDecision === "no_production_case"));
});

test("Chapter 27 keeps Inuit film authorship and Wang Bing production chronology sourced and distinct", () => {
  const sources = new Map(filmHistoryChapterTwentySeven.sources.map(s => [s.id, s]));
  const atanarjuat = filmHistoryChapterTwentySeven.sections.find(s => s.id === "ch27_atar");
  const wang = filmHistoryChapterTwentySeven.sections.find(s => s.id === "ch27_wang");
  assert.ok(atanarjuat);
  assert.ok(wang);
  assert.ok(atanarjuat.sourceIds.includes("ch27_atar_nfb"));
  assert.equal(sources.get("ch27_atar_nfb")?.url, "https://cfe.tiff.net/content/films/atanarjuat");
  assert.match(atanarjuat.paragraphs.join(" "), /directed, acted and scripted by Inuit/);
  assert.ok(wang.sourceIds.includes("ch27_wangstudy"));
  assert.equal(sources.get("ch27_wangstudy")?.publisher, "Cambridge University Press");
  assert.match(wang.paragraphs.join(" "), /Rotterdam festival in January 2003/);
  assert.match(wang.paragraphs.join(" "), /1999–2002/);
  assert.match(wang.title, /2002; international screening 2003/);
  assert.ok(wang.sourceIds.includes("ch27_wangcatalog"));
});
