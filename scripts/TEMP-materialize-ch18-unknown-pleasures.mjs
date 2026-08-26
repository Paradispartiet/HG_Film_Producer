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
    let next = replaceOnce(source, "const EXPECTED_ATLAS_COUNT = 518;", "const EXPECTED_ATLAS_COUNT = 519;", `${path} expected count`);
    next = replaceOnce(
      next,
      '  "chapterEighteenTwentyEightDaysLaterExpansion.ts",\n  "modernCanonExpansion.ts",',
      '  "chapterEighteenTwentyEightDaysLaterExpansion.ts",\n  "chapterEighteenUnknownPleasuresExpansion.ts",\n  "modernCanonExpansion.ts",',
      `${path} expansion order`,
    );
    return next;
  });
}

patch("scripts/production-case-rest-audit.mjs", (source) => {
  let next = replaceOnce(source, "const EXPECTED_PLAYABLE_SCENARIOS = 518;", "const EXPECTED_PLAYABLE_SCENARIOS = 519;", "production audit playable count");
  next = replaceOnce(next, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 518;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 519;", "production audit verified count");
  next = replaceOnce(
    next,
    '  "chapterEighteenTwentyEightDaysLaterExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenTwentyEightDaysLaterExpansion.ts",\n  "chapterEighteenUnknownPleasuresExpansion.ts",\n  "modernCanonExpansion.ts",',
    "production audit expansion order",
  );
  return next;
});

patch("src/ui/data/filmScenarios.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { mergeChapterEighteenTwentyEightDaysLaterExpansion } from "../../core/chapterEighteenTwentyEightDaysLaterExpansion.js";\n',
    'import { mergeChapterEighteenTwentyEightDaysLaterExpansion } from "../../core/chapterEighteenTwentyEightDaysLaterExpansion.js";\nimport { mergeChapterEighteenUnknownPleasuresExpansion } from "../../core/chapterEighteenUnknownPleasuresExpansion.js";\n',
    "filmScenarios Unknown Pleasures import",
  );
  next = replaceOnce(
    next,
    "const chapterEighteenTwentyEightDaysLaterScenarios = mergeChapterEighteenTwentyEightDaysLaterExpansion(chapterEighteenCrouchingTigerHiddenDragonScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTwentyEightDaysLaterScenarios);",
    "const chapterEighteenTwentyEightDaysLaterScenarios = mergeChapterEighteenTwentyEightDaysLaterExpansion(chapterEighteenCrouchingTigerHiddenDragonScenarios);\nconst chapterEighteenUnknownPleasuresScenarios = mergeChapterEighteenUnknownPleasuresExpansion(chapterEighteenTwentyEightDaysLaterScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenUnknownPleasuresScenarios);",
    "filmScenarios Unknown Pleasures merge chain",
  );
  next = replaceOnce(
    next,
    "+manual_chapter_eighteen_28_days_later_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_28_days_later_expansion_2026+manual_chapter_eighteen_unknown_pleasures_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "filmScenarios Chapter 18 source-list provenance",
  );
  next = replaceOnce(
    next,
    "28 Days Later adds the next Chapter 18 P1 digital-convergence case: 113-minute UK/USA production metadata is kept separate from PAL Canon XL1 MiniDV acquisition, up-to-eight-camera deserted-London logistics, Frame Movie Mode/Canon EC-EJ optics, high-shutter motion, D-1 conform, MPC grade/FilmTel 2K enhancement, Arrilaser 5242 film-out and 35mm answer/release print stages, with sound-department credits mapped without inventing undocumented equipment. The agreed 98-film correction remains complete.",
    "28 Days Later adds the next Chapter 18 P1 digital-convergence case: 113-minute UK/USA production metadata is kept separate from PAL Canon XL1 MiniDV acquisition, up-to-eight-camera deserted-London logistics, Frame Movie Mode/Canon EC-EJ optics, high-shutter motion, D-1 conform, MPC grade/FilmTel 2K enhancement, Arrilaser 5242 film-out and 35mm answer/release print stages, with sound-department credits mapped without inventing undocumented equipment. Unknown Pleasures adds the 2002 Datong digital-video counterpoint: Cannes locks 113-minute Japan/France/South Korea/China metadata and Jia/Yu/Chow/Liang authorship, while Jia's production testimony separates small-camera public-space access, nineteen-day production, long-take blocking, deliberate digital texture and bright-exterior limits from later digital color adjustment, transfer to celluloid and further photochemical color refinement. Exact camera-model, lens, sound-equipment, film-out hardware and lab-stock claims remain explicit unknowns where the source hierarchy does not establish them. The agreed 98-film correction remains complete.",
    "filmScenarios note",
  );
  return next;
});

patch("src/ui/data/scenarioProductionVerificationRegistry.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { twentyEightDaysLaterProductionCaseVerification } from "./scenarioProductionVerificationTwentyEightDaysLater";\n',
    'import { twentyEightDaysLaterProductionCaseVerification } from "./scenarioProductionVerificationTwentyEightDaysLater";\nimport { unknownPleasuresProductionCaseVerification } from "./scenarioProductionVerificationUnknownPleasures";\n',
    "verification registry import",
  );
  next = replaceOnce(
    next,
    "  twentyEightDaysLaterProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  twentyEightDaysLaterProductionCaseVerification,\n  unknownPleasuresProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification registry entry",
  );
  return next;
});

patch("src/ui/data/scenarioFilmStudyMap.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { twentyEightDaysLaterFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTwentyEightDaysLater";\n',
    'import { twentyEightDaysLaterFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTwentyEightDaysLater";\nimport { unknownPleasuresFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenUnknownPleasures";\n',
    "Film Study import",
  );
  next = replaceOnce(
    next,
    "  [twentyEightDaysLaterFilmHistoryProfile.scenarioId]: twentyEightDaysLaterFilmHistoryProfile,\n",
    "  [twentyEightDaysLaterFilmHistoryProfile.scenarioId]: twentyEightDaysLaterFilmHistoryProfile,\n  [unknownPleasuresFilmHistoryProfile.scenarioId]: unknownPleasuresFilmHistoryProfile,\n",
    "Film Study profile registry",
  );
  return next;
});

for (const chapterType of chapterTypes) {
  const path = `src/core/filmHistoryChapter${chapterType}AuditContract.test.ts`;
  patch(path, (source) => source.replace(/\b518\b/g, "519"));
}

patch("src/core/filmHistoryChapterEighteenAuditContract.test.ts", (source) => {
  let next = source;
  next = replaceOnce(
    next,
    '"Star Wars: Episode II - Attack of the Clones", "28 Days Later", "Lost in Translation",',
    '"Star Wars: Episode II - Attack of the Clones", "28 Days Later", "Unknown Pleasures", "Lost in Translation",',
    "Chapter 18 exact existing queue",
  );
  next = replaceOnce(
    next,
    'const exactP1Queue = [\n  "Unknown Pleasures", "Oldboy",',
    'const exactP1Queue = [\n  "Oldboy",',
    "Chapter 18 P1 queue",
  );
  next = replaceOnce(next, "assert.equal(exactExisting.length, 61);", "assert.equal(exactExisting.length, 62);", "Chapter 18 existing count");
  next = replaceOnce(next, "assert.equal(exactP1Queue.length, 20);", "assert.equal(exactP1Queue.length, 19);", "Chapter 18 P1 count");
  next = replaceOnce(next, "assert.equal(resolved.recommendedNewProductionCases.length, 20);", "assert.equal(resolved.recommendedNewProductionCases.length, 19);", "Chapter 18 recommended count");
  return next;
});

const docs = chapterWords.map((word) => `docs/film-history-chapter-${word}-atlas-resolved.json`);
for (let i = 0; i < chapterWords.length; i += 1) {
  const result = spawnSync(process.execPath, [`scripts/film-history-chapter-${chapterWords[i]}-atlas-audit.mjs`, `--write=${docs[i]}`], { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`Chapter ${chapterWords[i]} audit materialization failed with ${result.status}`);
}

console.log("Materialized Unknown Pleasures into Film Scenarios, Production Verification, Film Study, production audit and Chapter 12-18 audit state at 519/519.");
