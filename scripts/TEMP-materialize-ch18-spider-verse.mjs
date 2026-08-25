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
    let next = replaceOnce(source, "const EXPECTED_ATLAS_COUNT = 512;", "const EXPECTED_ATLAS_COUNT = 513;", `${path} expected count`);
    next = replaceOnce(
      next,
      '  "chapterEighteenRomaExpansion.ts",\n  "modernCanonExpansion.ts",',
      '  "chapterEighteenRomaExpansion.ts",\n  "chapterEighteenSpiderVerseExpansion.ts",\n  "modernCanonExpansion.ts",',
      `${path} expansion order`,
    );
    return next;
  });
}

patch("scripts/production-case-rest-audit.mjs", (source) => {
  let next = replaceOnce(source, "const EXPECTED_PLAYABLE_SCENARIOS = 512;", "const EXPECTED_PLAYABLE_SCENARIOS = 513;", "production audit playable count");
  next = replaceOnce(next, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 512;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 513;", "production audit verified count");
  next = replaceOnce(
    next,
    '  "chapterEighteenRomaExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenRomaExpansion.ts",\n  "chapterEighteenSpiderVerseExpansion.ts",\n  "modernCanonExpansion.ts",',
    "production audit expansion order",
  );
  return next;
});

patch("src/ui/data/filmScenarios.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { mergeChapterEighteenRomaExpansion } from "../../core/chapterEighteenRomaExpansion.js";\n',
    'import { mergeChapterEighteenRomaExpansion } from "../../core/chapterEighteenRomaExpansion.js";\nimport { mergeChapterEighteenSpiderVerseExpansion } from "../../core/chapterEighteenSpiderVerseExpansion.js";\n',
    "filmScenarios Spider-Verse import",
  );
  next = replaceOnce(
    next,
    "const chapterEighteenRomaScenarios = mergeChapterEighteenRomaExpansion(chapterEighteenDunkirkScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenRomaScenarios);",
    "const chapterEighteenRomaScenarios = mergeChapterEighteenRomaExpansion(chapterEighteenDunkirkScenarios);\nconst chapterEighteenSpiderVerseScenarios = mergeChapterEighteenSpiderVerseExpansion(chapterEighteenRomaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenSpiderVerseScenarios);",
    "filmScenarios Spider-Verse merge chain",
  );
  next = replaceOnce(
    next,
    "+manual_chapter_eighteen_dunkirk_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_dunkirk_expansion_2026+manual_chapter_eighteen_roma_expansion_2026+manual_chapter_eighteen_spider_verse_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "filmScenarios Chapter 18 source-list provenance",
  );
  next = replaceOnce(
    next,
    "The agreed 98-film correction remains complete.",
    "Spider-Man: Into the Spider-Verse adds the late-2010s stylized-animation counterpoint: volumetric CG deliberately reshaped through variable ones/twos cadence, rigged and hand-authored line work, print-derived rendering, hand-drawn/3D FX, unusually heavy shot-level compositing, early story editorial and native Atmos sound. The agreed 98-film correction remains complete.",
    "filmScenarios note",
  );
  return next;
});

patch("src/ui/data/scenarioProductionVerificationRegistry.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { romaProductionCaseVerification } from "./scenarioProductionVerificationRoma";\n',
    'import { romaProductionCaseVerification } from "./scenarioProductionVerificationRoma";\nimport { spiderVerseProductionCaseVerification } from "./scenarioProductionVerificationSpiderVerse";\n',
    "verification registry import",
  );
  next = replaceOnce(
    next,
    "  romaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  romaProductionCaseVerification,\n  spiderVerseProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification registry entry",
  );
  return next;
});

patch("src/ui/data/scenarioFilmStudyMap.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { romaFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenRoma";\n',
    'import { romaFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenRoma";\nimport { spiderVerseFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSpiderVerse";\n',
    "Film Study import",
  );
  next = replaceOnce(
    next,
    "  [romaFilmHistoryProfile.scenarioId]: romaFilmHistoryProfile,\n",
    "  [romaFilmHistoryProfile.scenarioId]: romaFilmHistoryProfile,\n  [spiderVerseFilmHistoryProfile.scenarioId]: spiderVerseFilmHistoryProfile,\n",
    "Film Study profile registry",
  );
  return next;
});

for (const chapterType of chapterTypes) {
  const path = `src/core/filmHistoryChapter${chapterType}AuditContract.test.ts`;
  patch(path, (source) => source.replace(/\b512\b/g, "513"));
}

patch("src/core/filmHistoryChapterEighteenAuditContract.test.ts", (source) => {
  let next = source;
  next = replaceOnce(
    next,
    '"Toni Erdmann", "Dunkirk", "Roma", "Burning", "An Elephant Sitting Still", "Synonyms",',
    '"Toni Erdmann", "Dunkirk", "Roma", "Burning", "Spider-Man: Into the Spider-Verse", "An Elephant Sitting Still", "Synonyms",',
    "Chapter 18 exact existing queue",
  );
  next = replaceOnce(
    next,
    'const exactP0Queue = [\n  "Spider-Man: Into the Spider-Verse", "Parasite", "The Irishman",\n] as const;',
    'const exactP0Queue = [\n  "Parasite", "The Irishman",\n] as const;',
    "Chapter 18 P0 queue",
  );
  next = replaceOnce(next, "assert.equal(exactExisting.length, 55);", "assert.equal(exactExisting.length, 56);", "Chapter 18 existing count");
  next = replaceOnce(next, "assert.equal(exactP0Queue.length, 3);", "assert.equal(exactP0Queue.length, 2);", "Chapter 18 P0 count");
  next = replaceOnce(next, "assert.equal(resolved.recommendedNewProductionCases.length, 26);", "assert.equal(resolved.recommendedNewProductionCases.length, 25);", "Chapter 18 recommended count");
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

console.log("Materialized Spider-Verse into Film Scenarios, Production Verification, Film Study, production audit and Chapter 12-18 audit state at 513/513.");
