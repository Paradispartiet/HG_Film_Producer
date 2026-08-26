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
    let next = replaceOnce(source, "const EXPECTED_ATLAS_COUNT = 515;", "const EXPECTED_ATLAS_COUNT = 516;", `${path} expected count`);
    next = replaceOnce(
      next,
      '  "chapterEighteenTheIrishmanExpansion.ts",\n  "modernCanonExpansion.ts",',
      '  "chapterEighteenTheIrishmanExpansion.ts",\n  "chapterEighteenYiYiExpansion.ts",\n  "modernCanonExpansion.ts",',
      `${path} expansion order`,
    );
    return next;
  });
}

patch("scripts/production-case-rest-audit.mjs", (source) => {
  let next = replaceOnce(source, "const EXPECTED_PLAYABLE_SCENARIOS = 515;", "const EXPECTED_PLAYABLE_SCENARIOS = 516;", "production audit playable count");
  next = replaceOnce(next, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 515;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 516;", "production audit verified count");
  next = replaceOnce(
    next,
    '  "chapterEighteenTheIrishmanExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenTheIrishmanExpansion.ts",\n  "chapterEighteenYiYiExpansion.ts",\n  "modernCanonExpansion.ts",',
    "production audit expansion order",
  );
  return next;
});

patch("src/ui/data/filmScenarios.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { mergeChapterEighteenTheIrishmanExpansion } from "../../core/chapterEighteenTheIrishmanExpansion.js";\n',
    'import { mergeChapterEighteenTheIrishmanExpansion } from "../../core/chapterEighteenTheIrishmanExpansion.js";\nimport { mergeChapterEighteenYiYiExpansion } from "../../core/chapterEighteenYiYiExpansion.js";\n',
    "filmScenarios Yi Yi import",
  );
  next = replaceOnce(
    next,
    "const chapterEighteenTheIrishmanScenarios = mergeChapterEighteenTheIrishmanExpansion(chapterEighteenParasiteScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTheIrishmanScenarios);",
    "const chapterEighteenTheIrishmanScenarios = mergeChapterEighteenTheIrishmanExpansion(chapterEighteenParasiteScenarios);\nconst chapterEighteenYiYiScenarios = mergeChapterEighteenYiYiExpansion(chapterEighteenTheIrishmanScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenYiYiScenarios);",
    "filmScenarios Yi Yi merge chain",
  );
  next = replaceOnce(
    next,
    "+manual_chapter_eighteen_the_irishman_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_the_irishman_expansion_2026+manual_chapter_eighteen_yi_yi_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "filmScenarios Chapter 18 source-list provenance",
  );
  next = replaceOnce(
    next,
    "The agreed 98-film correction remains complete.",
    "Yi Yi opens the Chapter 18 P1 rollout with a 173-minute Taiwan/Japan 35mm family-drama case: architectural framing, reflective surfaces, ensemble blocking, patient editorial duration and multilingual urban sound are taught with explicit boundaries between production credits, finished-film formal analysis and later 35mm/Hi8 restoration provenance. The agreed 98-film correction remains complete.",
    "filmScenarios note",
  );
  return next;
});

patch("src/ui/data/scenarioProductionVerificationRegistry.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { theIrishmanProductionCaseVerification } from "./scenarioProductionVerificationTheIrishman";\n',
    'import { theIrishmanProductionCaseVerification } from "./scenarioProductionVerificationTheIrishman";\nimport { yiYiProductionCaseVerification } from "./scenarioProductionVerificationYiYi";\n',
    "verification registry import",
  );
  next = replaceOnce(
    next,
    "  theIrishmanProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  theIrishmanProductionCaseVerification,\n  yiYiProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification registry entry",
  );
  return next;
});

patch("src/ui/data/scenarioFilmStudyMap.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { theIrishmanFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheIrishman";\n',
    'import { theIrishmanFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheIrishman";\nimport { yiYiFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenYiYi";\n',
    "Film Study import",
  );
  next = replaceOnce(
    next,
    "  [theIrishmanFilmHistoryProfile.scenarioId]: theIrishmanFilmHistoryProfile,\n",
    "  [theIrishmanFilmHistoryProfile.scenarioId]: theIrishmanFilmHistoryProfile,\n  [yiYiFilmHistoryProfile.scenarioId]: yiYiFilmHistoryProfile,\n",
    "Film Study profile registry",
  );
  return next;
});

for (const chapterType of chapterTypes) {
  const path = `src/core/filmHistoryChapter${chapterType}AuditContract.test.ts`;
  patch(path, (source) => source.replace(/\b515\b/g, "516"));
}

patch("src/core/filmHistoryChapterEighteenAuditContract.test.ts", (source) => {
  let next = source;
  next = replaceOnce(
    next,
    '"The Gleaners and I", "Platform", "Dancer in the Dark", "In the Mood for Love", "Atanarjuat: The Fast Runner",',
    '"The Gleaners and I", "Platform", "Dancer in the Dark", "In the Mood for Love", "Yi Yi", "Atanarjuat: The Fast Runner",',
    "Chapter 18 exact existing queue",
  );
  next = replaceOnce(
    next,
    'const exactP1Queue = [\n  "Yi Yi", "Crouching Tiger, Hidden Dragon",',
    'const exactP1Queue = [\n  "Crouching Tiger, Hidden Dragon",',
    "Chapter 18 P1 queue",
  );
  next = replaceOnce(next, "assert.equal(exactExisting.length, 58);", "assert.equal(exactExisting.length, 59);", "Chapter 18 existing count");
  next = replaceOnce(next, "assert.equal(exactP1Queue.length, 23);", "assert.equal(exactP1Queue.length, 22);", "Chapter 18 P1 count");
  next = replaceOnce(next, "assert.equal(resolved.recommendedNewProductionCases.length, 23);", "assert.equal(resolved.recommendedNewProductionCases.length, 22);", "Chapter 18 recommended count");
  return next;
});

const docs = chapterWords.map((word) => `docs/film-history-chapter-${word}-atlas-resolved.json`);
for (let i = 0; i < chapterWords.length; i += 1) {
  const result = spawnSync(process.execPath, [`scripts/film-history-chapter-${chapterWords[i]}-atlas-audit.mjs`, `--write=${docs[i]}`], { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`Chapter ${chapterWords[i]} audit materialization failed with ${result.status}`);
}

console.log("Materialized Yi Yi into Film Scenarios, Production Verification, Film Study, production audit and Chapter 12-18 audit state at 516/516.");
