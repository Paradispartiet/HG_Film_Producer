import assert from "node:assert/strict";
import test from "node:test";
import { filmHistoryChapterTwentyEight } from "./filmHistoryChapterTwentyEight.js";

test("Chapter 28 gives distinct histories for five East Asian film industries", () => {
  const chapter = filmHistoryChapterTwentyEight;
  assert.equal(chapter.id, "east-asian-turn");
  assert.equal(chapter.number, 28);
  assert.equal(chapter.period, "1980s–2010s");
  assert.equal(chapter.status, "draft");
  assert.equal(chapter.sections.length, 28);
  assert.equal(chapter.sections.reduce((n, s) => n + s.paragraphs.length, 0), 84);
  const prose = chapter.sections.flatMap(s => s.paragraphs).join(" ");
  assert.ok(prose.trim().split(/\s+/).length >= 5_800, "Chapter 28 prose is underdeveloped");
  for (const term of [
    /Hong Kong/,/Taiwan/,/mainland China/,/South Korean/,/Japanese/,
    /Ann Hui/,/Tsui Hark/,/Jackie Chan/,/John Woo/,/Wong Kar-wai/,/Johnnie To/,
    /Hou Hsiao-hsien/,/Edward Yang/,/Tsai Ming-liang/,
    /Chen Kaige/,/Zhang Yimou/,/Jia Zhangke/,/wuxia/,
    /Lee Chang-dong/,/Bong Joon Ho/,/Park Chan-wook/,
    /Takeshi Kitano/,/Ring/,/Kiyoshi Kurosawa/,/Studio Ghibli/,
    /Satoshi Kon/,/Kore-eda/
  ]) assert.match(prose, term);
});

test("Chapter 28's 45 source records are unique and used by substantial essays", () => {
  const chapter = filmHistoryChapterTwentyEight;
  assert.equal(chapter.sources.length, 45);
  const ids = new Set(chapter.sources.map(s => s.id));
  assert.equal(ids.size, 45);
  assert.equal(new Set(chapter.sources.map(s => s.url)).size, 45);
  assert.ok(chapter.sources.every(s => s.url.startsWith("https://") && s.title.length > 10));
  assert.ok(chapter.sources.some(s => s.publisher === "The Criterion Collection"));
  assert.ok(chapter.sources.some(s => s.publisher === "British Film Institute"));
  const used = new Set<string>();
  const essayIds = new Set<string>();
  for (const essay of chapter.sections) {
    assert.ok(!essayIds.has(essay.id), essay.id);
    essayIds.add(essay.id);
    assert.match(essay.id, /^ch28_/);
    assert.equal(essay.paragraphs.length, 3, essay.id);
    assert.ok(essay.paragraphs.every(p => p.length >= 400), essay.id);
    assert.ok(essay.sourceIds.length >= 2, essay.id);
    for (const id of essay.sourceIds) {
      assert.ok(ids.has(id), `Unknown source ${id} in ${essay.id}`);
      used.add(id);
    }
  }
  assert.equal(used.size, ids.size, "Chapter 28 has unused source records");
});

test("Chapter 28 does not fabricate playable Film Atlas cases", () => {
  const chapter = filmHistoryChapterTwentyEight;
  assert.equal(chapter.filmReferences.length, 36);
  assert.ok(chapter.filmReferences.every(film => film.atlasDecision === "P2"));
  assert.ok(chapter.filmReferences.every(film => film.atlasScenarioId === undefined));
  assert.ok(chapter.filmReferences.every(film => film.year >= 1980 && film.year <= 2019));
  assert.equal(chapter.historicalObjects.length, 20);
  assert.ok(chapter.historicalObjects.every(obj => obj.role === "historical_object" && obj.atlasDecision === "no_production_case"));
});

test("Chapter 28 records Xiao Wu year and Wong Kar-wai restoration variants without confusing releases", () => {
  const chapter = filmHistoryChapterTwentyEight;
  const sections = new Map(chapter.sections.map(s => [s.id, s]));
  const sources = new Map(chapter.sources.map(s => [s.id, s]));
  const jia = sections.get("ch28_jia");
  const wong = sections.get("ch28_wong");
  const mood = sections.get("ch28_mood");
  assert.ok(jia);
  assert.ok(wong);
  assert.ok(mood);
  assert.ok(jia.sourceIds.includes("ch28_xiaowu_bfi"));
  assert.ok(jia.sourceIds.includes("ch28_xiaowu_berlin"));
  assert.match(jia.paragraphs.join(" "), /1997 film/);
  assert.match(jia.paragraphs.join(" "), /1998 presentation in the Forum/);
  assert.equal(sources.get("ch28_xiaowu_berlin")?.publisher, "Berlin International Film Festival");
  assert.equal(sources.get("ch28_xiaowu_bfi")?.publisher, "British Film Institute");
  for (const essay of [wong, mood]) {
    assert.ok(essay.sourceIds.includes("ch28_wongrestoration"));
    assert.match(essay.paragraphs.join(" "), /1\.66:1/);
    assert.match(essay.paragraphs.join(" "), /1\.85:1/);
  }
});

test("Chapter 28 anchors Hong Sang-soo and Ghost in the Shell to film-specific industrial sources", () => {
  const chapters = new Map(filmHistoryChapterTwentyEight.sections.map(s => [s.id, s]));
  const sources = new Map(filmHistoryChapterTwentyEight.sources.map(s => [s.id, s]));
  const hong = chapters.get("ch28_koreaplural");
  const oshii = chapters.get("ch28_oshii");
  assert.ok(hong);
  assert.ok(oshii);
  assert.ok(hong.sourceIds.includes("ch28_hongguide"));
  assert.equal(sources.get("ch28_hongguide")?.url, "https://www.bfi.org.uk/features/where-begin-with-hong-sang-soo");
  assert.match(hong.paragraphs.join(" "), /Like You Know It All \(2009\)/);
  assert.match(hong.paragraphs.join(" "), /microbudget independent production/);
  assert.ok(oshii.sourceIds.includes("ch28_animeindustry"));
  assert.equal(sources.get("ch28_animeindustry")?.publisher, "BFI Sight and Sound");
  assert.match(oshii.paragraphs.join(" "), /Manga UK/);
  assert.match(oshii.paragraphs.join(" "), /co-fund/);
  assert.match(oshii.paragraphs.join(" "), /Akira \(1988\)/);
});
