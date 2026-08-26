import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, value) { writeFileSync(path, value); }
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
    let next = replaceOnce(source, "const EXPECTED_ATLAS_COUNT = 514;", "const EXPECTED_ATLAS_COUNT = 515;", `${path} expected count`);
    next = replaceOnce(
      next,
      '  "chapterEighteenParasiteExpansion.ts",\n  "modernCanonExpansion.ts",',
      '  "chapterEighteenParasiteExpansion.ts",\n  "chapterEighteenTheIrishmanExpansion.ts",\n  "modernCanonExpansion.ts",',
      `${path} expansion order`,
    );
    return next;
  });
}

patch("scripts/production-case-rest-audit.mjs", (source) => {
  let next = replaceOnce(source, "const EXPECTED_PLAYABLE_SCENARIOS = 514;", "const EXPECTED_PLAYABLE_SCENARIOS = 515;", "production audit playable count");
  next = replaceOnce(next, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 514;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 515;", "production audit verified count");
  next = replaceOnce(
    next,
    '  "chapterEighteenParasiteExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenParasiteExpansion.ts",\n  "chapterEighteenTheIrishmanExpansion.ts",\n  "modernCanonExpansion.ts",',
    "production audit expansion order",
  );
  return next;
});

patch("src/ui/data/filmScenarios.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { mergeChapterEighteenParasiteExpansion } from "../../core/chapterEighteenParasiteExpansion.js";\n',
    'import { mergeChapterEighteenParasiteExpansion } from "../../core/chapterEighteenParasiteExpansion.js";\nimport { mergeChapterEighteenTheIrishmanExpansion } from "../../core/chapterEighteenTheIrishmanExpansion.js";\n',
    "filmScenarios The Irishman import",
  );
  next = replaceOnce(
    next,
    "const chapterEighteenParasiteScenarios = mergeChapterEighteenParasiteExpansion(chapterEighteenSpiderVerseScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenParasiteScenarios);",
    "const chapterEighteenParasiteScenarios = mergeChapterEighteenParasiteExpansion(chapterEighteenSpiderVerseScenarios);\nconst chapterEighteenTheIrishmanScenarios = mergeChapterEighteenTheIrishmanExpansion(chapterEighteenParasiteScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTheIrishmanScenarios);",
    "filmScenarios The Irishman merge chain",
  );
  next = replaceOnce(
    next,
    "+manual_chapter_eighteen_parasite_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_parasite_expansion_2026+manual_chapter_eighteen_the_irishman_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "filmScenarios Chapter 18 source-list provenance",
  );
  next = replaceOnce(
    next,
    "The agreed 98-film correction remains complete.",
    "The Irishman adds the remaining Chapter 18 P0: a 209-minute hybrid 35mm/digital crime epic whose RED Helium plus dual infrared ALEXA Mini witness-camera rig, markerless Flux facial reconstruction, period production design, long-form editorial/VFX performance review and deliberately restrained sound are kept as distinct but coordinated production systems. The agreed 98-film correction remains complete.",
    "filmScenarios note",
  );
  return next;
});

patch("src/ui/data/scenarioProductionVerificationRegistry.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { parasiteProductionCaseVerification } from "./scenarioProductionVerificationParasite";\n',
    'import { parasiteProductionCaseVerification } from "./scenarioProductionVerificationParasite";\nimport { theIrishmanProductionCaseVerification } from "./scenarioProductionVerificationTheIrishman";\n',
    "verification registry import",
  );
  next = replaceOnce(
    next,
    "  parasiteProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  parasiteProductionCaseVerification,\n  theIrishmanProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification registry entry",
  );
  return next;
});

patch("src/ui/data/scenarioFilmStudyMap.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { parasiteFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenParasite";\n',
    'import { parasiteFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenParasite";\nimport { theIrishmanFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheIrishman";\n',
    "Film Study import",
  );
  next = replaceOnce(
    next,
    "  [parasiteFilmHistoryProfile.scenarioId]: parasiteFilmHistoryProfile,\n",
    "  [parasiteFilmHistoryProfile.scenarioId]: parasiteFilmHistoryProfile,\n  [theIrishmanFilmHistoryProfile.scenarioId]: theIrishmanFilmHistoryProfile,\n",
    "Film Study profile registry",
  );
  return next;
});

for (const chapterType of chapterTypes) {
  const path = `src/core/filmHistoryChapter${chapterType}AuditContract.test.ts`;
  patch(path, (source) => source.replace(/\b514\b/g, "515"));
}

patch("src/core/filmHistoryChapterEighteenAuditContract.test.ts", (source) => {
  let next = source;
  next = replaceOnce(
    next,
    '"An Elephant Sitting Still", "Parasite", "Synonyms",',
    '"An Elephant Sitting Still", "Parasite", "The Irishman", "Synonyms",',
    "Chapter 18 exact existing queue",
  );
  next = replaceOnce(
    next,
    'const exactP0Queue = [\n  "The Irishman",\n] as const;',
    'const exactP0Queue = [] as const;',
    "Chapter 18 P0 queue",
  );
  next = replaceOnce(next, "assert.equal(exactExisting.length, 57);", "assert.equal(exactExisting.length, 58);", "Chapter 18 existing count");
  next = replaceOnce(next, "assert.equal(exactP0Queue.length, 1);", "assert.equal(exactP0Queue.length, 0);", "Chapter 18 P0 count");
  next = replaceOnce(next, "assert.equal(resolved.recommendedNewProductionCases.length, 24);", "assert.equal(resolved.recommendedNewProductionCases.length, 23);", "Chapter 18 recommended count");
  return next;
});

const docs = chapterWords.map((word) => `docs/film-history-chapter-${word}-atlas-resolved.json`);
for (let i = 0; i < chapterWords.length; i += 1) {
  const word = chapterWords[i];
  const result = spawnSync(process.execPath, [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=${docs[i]}`], { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`Chapter ${word} audit materialization failed with ${result.status}`);
}

console.log("Materialized The Irishman into Film Scenarios, Production Verification, Film Study, production audit and Chapter 12-18 audit state at 515/515.");
