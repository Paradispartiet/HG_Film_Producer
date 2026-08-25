import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

function read(path) {
  return readFileSync(path, "utf8");
}

function write(path, value) {
  writeFileSync(path, value);
}

function replaceOnce(source, before, after, label) {
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`Missing materialization anchor: ${label}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`Non-unique materialization anchor: ${label}`);
  return source.slice(0, first) + after + source.slice(first + before.length);
}

function patch(path, transform) {
  const before = read(path);
  const after = transform(before);
  if (after === before) throw new Error(`Materializer made no change to ${path}`);
  write(path, after);
}

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
const chapterTypes = ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"];

for (const word of chapterWords) {
  const path = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  patch(path, (source) => {
    let next = replaceOnce(source, "const EXPECTED_ATLAS_COUNT = 513;", "const EXPECTED_ATLAS_COUNT = 514;", `${path} expected count`);
    next = replaceOnce(
      next,
      '  "chapterEighteenSpiderVerseExpansion.ts",\n  "modernCanonExpansion.ts",',
      '  "chapterEighteenSpiderVerseExpansion.ts",\n  "chapterEighteenParasiteExpansion.ts",\n  "modernCanonExpansion.ts",',
      `${path} expansion order`,
    );
    return next;
  });
}

patch("scripts/production-case-rest-audit.mjs", (source) => {
  let next = replaceOnce(source, "const EXPECTED_PLAYABLE_SCENARIOS = 513;", "const EXPECTED_PLAYABLE_SCENARIOS = 514;", "production audit playable count");
  next = replaceOnce(next, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 513;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 514;", "production audit verified count");
  next = replaceOnce(
    next,
    '  "chapterEighteenSpiderVerseExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenSpiderVerseExpansion.ts",\n  "chapterEighteenParasiteExpansion.ts",\n  "modernCanonExpansion.ts",',
    "production audit expansion order",
  );
  return next;
});

patch("src/ui/data/filmScenarios.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { mergeChapterEighteenSpiderVerseExpansion } from "../../core/chapterEighteenSpiderVerseExpansion.js";\n',
    'import { mergeChapterEighteenSpiderVerseExpansion } from "../../core/chapterEighteenSpiderVerseExpansion.js";\nimport { mergeChapterEighteenParasiteExpansion } from "../../core/chapterEighteenParasiteExpansion.js";\n',
    "filmScenarios Parasite import",
  );
  next = replaceOnce(
    next,
    "const chapterEighteenSpiderVerseScenarios = mergeChapterEighteenSpiderVerseExpansion(chapterEighteenRomaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenSpiderVerseScenarios);",
    "const chapterEighteenSpiderVerseScenarios = mergeChapterEighteenSpiderVerseExpansion(chapterEighteenRomaScenarios);\nconst chapterEighteenParasiteScenarios = mergeChapterEighteenParasiteExpansion(chapterEighteenSpiderVerseScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenParasiteScenarios);",
    "filmScenarios Parasite merge chain",
  );
  next = replaceOnce(
    next,
    "+manual_chapter_eighteen_spider_verse_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_spider_verse_expansion_2026+manual_chapter_eighteen_parasite_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "filmScenarios Chapter 18 source-list provenance",
  );
  next = replaceOnce(
    next,
    "The agreed 98-film correction remains complete.",
    "Parasite adds the 2019 South Korean constructed-space case: screenplay and storyboards coordinated with camera-driven set geometry, ALEXA 65/Prime DNA capture, highly controllable lighting, low-coverage precision editorial, temp-sound handoff and Dolby Atmos post sound, with the Cannes 132-minute and KOFIC 131-minute records kept as an explicit provenance discrepancy. The agreed 98-film correction remains complete.",
    "filmScenarios note",
  );
  return next;
});

patch("src/ui/data/scenarioProductionVerificationRegistry.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { spiderVerseProductionCaseVerification } from "./scenarioProductionVerificationSpiderVerse";\n',
    'import { spiderVerseProductionCaseVerification } from "./scenarioProductionVerificationSpiderVerse";\nimport { parasiteProductionCaseVerification } from "./scenarioProductionVerificationParasite";\n',
    "verification registry import",
  );
  next = replaceOnce(
    next,
    "  spiderVerseProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  spiderVerseProductionCaseVerification,\n  parasiteProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification registry entry",
  );
  return next;
});

patch("src/ui/data/scenarioFilmStudyMap.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { spiderVerseFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSpiderVerse";\n',
    'import { spiderVerseFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSpiderVerse";\nimport { parasiteFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenParasite";\n',
    "Film Study import",
  );
  next = replaceOnce(
    next,
    "  [spiderVerseFilmHistoryProfile.scenarioId]: spiderVerseFilmHistoryProfile,\n",
    "  [spiderVerseFilmHistoryProfile.scenarioId]: spiderVerseFilmHistoryProfile,\n  [parasiteFilmHistoryProfile.scenarioId]: parasiteFilmHistoryProfile,\n",
    "Film Study profile registry",
  );
  return next;
});

for (const chapterType of chapterTypes) {
  const path = `src/core/filmHistoryChapter${chapterType}AuditContract.test.ts`;
  patch(path, (source) => source.replace(/\b513\b/g, "514"));
}

patch("src/core/filmHistoryChapterEighteenAuditContract.test.ts", (source) => {
  let next = source;
  next = replaceOnce(
    next,
    '"Spider-Man: Into the Spider-Verse", "An Elephant Sitting Still", "Synonyms",',
    '"Spider-Man: Into the Spider-Verse", "An Elephant Sitting Still", "Parasite", "Synonyms",',
    "Chapter 18 exact existing queue",
  );
  next = replaceOnce(
    next,
    'const exactP0Queue = [\n  "Parasite", "The Irishman",\n] as const;',
    'const exactP0Queue = [\n  "The Irishman",\n] as const;',
    "Chapter 18 P0 queue",
  );
  next = replaceOnce(next, "assert.equal(exactExisting.length, 56);", "assert.equal(exactExisting.length, 57);", "Chapter 18 existing count");
  next = replaceOnce(next, "assert.equal(exactP0Queue.length, 2);", "assert.equal(exactP0Queue.length, 1);", "Chapter 18 P0 count");
  next = replaceOnce(next, "assert.equal(resolved.recommendedNewProductionCases.length, 25);", "assert.equal(resolved.recommendedNewProductionCases.length, 24);", "Chapter 18 recommended count");
  return next;
});

const docs = chapterWords.map((word) => `docs/film-history-chapter-${word}-atlas-resolved.json`);
for (let i = 0; i < chapterWords.length; i += 1) {
  const word = chapterWords[i];
  const result = spawnSync(
    process.execPath,
    [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=${docs[i]}`],
    { stdio: "inherit" },
  );
  if (result.status !== 0) throw new Error(`Chapter ${word} audit materialization failed with ${result.status}`);
}

console.log("Materialized Parasite into Film Scenarios, Production Verification, Film Study, production audit and Chapter 12-18 audit state at 514/514.");
