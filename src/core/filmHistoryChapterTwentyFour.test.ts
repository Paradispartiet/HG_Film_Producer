import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentyFour } from "./filmHistoryChapterTwentyFour.js";

test("Chapter 24 develops distinct film, exhibition and home-video histories", () => {
  const chapter = filmHistoryChapterTwentyFour;
  assert.equal(chapter.id, "blockbuster-home-video");
  assert.equal(chapter.number, 24);
  assert.equal(chapter.period, "1975–1989");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 24);
  assert.equal(chapter.sections.reduce((n, s) => n + s.paragraphs.length, 0), 72);
  const prose = chapter.sections.flatMap(s => s.paragraphs).join(" ");
  const words = prose.trim().split(/\s+/).length;
  assert.ok(words >= 3_700, `Only ${words} words in the new book chapter`);
  for (const term of [
    /Jaws/,/Star Wars/,/Empire Strikes Back/,/Raiders/,/E\.T\./,
    /multiplex/i,/corporate|conglomerate/i,/high concept/i,/Top Gun/,
    /Beverly Hills Cop/,/Back to the Future/,/Terminator/,/RoboCop/,
    /VHS/,/Betamax/,/video store/i,/Video Recordings Act 1984/,
    /Videodrome/,/LaserDisc/,/piracy/i,/home video/i
  ]) assert.match(prose, term);
});

test("Chapter 24 references unique URL sources with no unreferenced or broken IDs", () => {
  const chapter = filmHistoryChapterTwentyFour;
  assert.equal(chapter.sources.length, 34);
  const ids = new Set(chapter.sources.map(source => source.id));
  const urls = new Set(chapter.sources.map(source => source.url));
  assert.equal(ids.size, chapter.sources.length);
  assert.equal(urls.size, chapter.sources.length);
  assert.ok(chapter.sources.every(source => source.url.startsWith("https://")));
  assert.ok(chapter.sources.some(source => source.publisher === "Library of Congress"));
  assert.ok(chapter.sources.some(source => source.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.some(source => source.publisher === "British Film Institute"));
  const used = new Set<string>();
  const articleIds = new Set<string>();
  for (const article of chapter.sections) {
    assert.ok(!articleIds.has(article.id), article.id);
    articleIds.add(article.id);
    assert.equal(article.paragraphs.length, 3, article.id);
    assert.ok(article.paragraphs.every(p => p.length >= 200), article.id);
    assert.ok(article.sourceIds.length >= 2, article.id);
    for (const id of article.sourceIds) {
      assert.ok(ids.has(id), `Unknown source ${id} in ${article.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size);
});

test("Chapter 24 does not fabricate Atlas playable scenarios or industry production cases", () => {
  const chapter = filmHistoryChapterTwentyFour;
  assert.equal(chapter.filmReferences.length, 22);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.equal(chapter.historicalObjects.length, 16);
  assert.ok(chapter.historicalObjects.every(object => object.role === "historical_object" && object.atlasDecision === "no_production_case"));
});

test("Chapter 24 cites the original 1984 Act in its British video classification article", () => {
  const chapter = filmHistoryChapterTwentyFour;
  const source = chapter.sources.find(s => s.id === "ch24_video_act");
  assert.equal(source?.url, "https://www.legislation.gov.uk/ukpga/1984/39/pdfs/ukpga_19840039_en.pdf");
  const article = chapter.sections.find(s => s.id === "ch24_nasties");
  assert.ok(article?.sourceIds.includes("ch24_video_act"));
  assert.match(article?.paragraphs.join(" ") ?? "", /12 July 1984/);
  assert.match(article?.paragraphs.join(" ") ?? "", /exemptions/);
});


test("Chapter 24 distinguishes the Act from phased BBFC enforcement", () => {
  const chapter = filmHistoryChapterTwentyFour;
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sources.length, 34);
  const source = chapter.sources.find(s => s.id === "ch24_bbfc_vra");
  assert.ok(source);
  assert.equal(source.url, "https://www.bbfc.co.uk/film-media-resources/legislation/the-video-recordings-act");
  const article = chapter.sections.find(s => s.id === "ch24_nasties");
  assert.ok(article);
  assert.ok(article.sourceIds.includes("ch24_video_act"));
  assert.ok(article.sourceIds.includes("ch24_bbfc_vra"));
  assert.match(article.paragraphs.join(" "), /classification from 1985/);
  assert.match(article.paragraphs.join(" "), /September 1988/);
});
