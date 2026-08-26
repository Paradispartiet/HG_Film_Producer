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
    let next = replaceOnce(source, "const EXPECTED_ATLAS_COUNT = 517;", "const EXPECTED_ATLAS_COUNT = 518;", `${path} expected count`);
    next = replaceOnce(
      next,
      '  "chapterEighteenCrouchingTigerHiddenDragonExpansion.ts",\n  "modernCanonExpansion.ts",',
      '  "chapterEighteenCrouchingTigerHiddenDragonExpansion.ts",\n  "chapterEighteenTwentyEightDaysLaterExpansion.ts",\n  "modernCanonExpansion.ts",',
      `${path} expansion order`,
    );
    return next;
  });
}

patch("scripts/production-case-rest-audit.mjs", (source) => {
  let next = replaceOnce(source, "const EXPECTED_PLAYABLE_SCENARIOS = 517;", "const EXPECTED_PLAYABLE_SCENARIOS = 518;", "production audit playable count");
  next = replaceOnce(next, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 517;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 518;", "production audit verified count");
  next = replaceOnce(
    next,
    '  "chapterEighteenCrouchingTigerHiddenDragonExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenCrouchingTigerHiddenDragonExpansion.ts",\n  "chapterEighteenTwentyEightDaysLaterExpansion.ts",\n  "modernCanonExpansion.ts",',
    "production audit expansion order",
  );
  return next;
});

patch("src/ui/data/filmScenarios.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { mergeChapterEighteenCrouchingTigerHiddenDragonExpansion } from "../../core/chapterEighteenCrouchingTigerHiddenDragonExpansion.js";\n',
    'import { mergeChapterEighteenCrouchingTigerHiddenDragonExpansion } from "../../core/chapterEighteenCrouchingTigerHiddenDragonExpansion.js";\nimport { mergeChapterEighteenTwentyEightDaysLaterExpansion } from "../../core/chapterEighteenTwentyEightDaysLaterExpansion.js";\n',
    "filmScenarios 28 Days Later import",
  );
  next = replaceOnce(
    next,
    "const chapterEighteenCrouchingTigerHiddenDragonScenarios = mergeChapterEighteenCrouchingTigerHiddenDragonExpansion(chapterEighteenYiYiScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenCrouchingTigerHiddenDragonScenarios);",
    "const chapterEighteenCrouchingTigerHiddenDragonScenarios = mergeChapterEighteenCrouchingTigerHiddenDragonExpansion(chapterEighteenYiYiScenarios);\nconst chapterEighteenTwentyEightDaysLaterScenarios = mergeChapterEighteenTwentyEightDaysLaterExpansion(chapterEighteenCrouchingTigerHiddenDragonScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTwentyEightDaysLaterScenarios);",
    "filmScenarios 28 Days Later merge chain",
  );
  next = replaceOnce(
    next,
    "+manual_chapter_eighteen_crouching_tiger_hidden_dragon_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_crouching_tiger_hidden_dragon_expansion_2026+manual_chapter_eighteen_28_days_later_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "filmScenarios Chapter 18 source-list provenance",
  );
  next = replaceOnce(
    next,
    "Crouching Tiger, Hidden Dragon continues the Chapter 18 P1 rollout with a 120-minute China/Taiwan/USA/Hong Kong transnational wuxia case: documented Super 35 photography, Kodak 5277/5245/5246 stocks, Moviecam/Arri two-camera production, physical Yuen Woo-ping wire choreography, selective Asia Cine Digital/Manex cleanup, optical blowup, Tim Squyres editorial authorship and Tan Dun score synchronization are kept as distinct production systems. The agreed 98-film correction remains complete.",
    "Crouching Tiger, Hidden Dragon continues the Chapter 18 P1 rollout with a 120-minute China/Taiwan/USA/Hong Kong transnational wuxia case: documented Super 35 photography, Kodak 5277/5245/5246 stocks, Moviecam/Arri two-camera production, physical Yuen Woo-ping wire choreography, selective Asia Cine Digital/Manex cleanup, optical blowup, Tim Squyres editorial authorship and Tan Dun score synchronization are kept as distinct production systems. 28 Days Later adds the next Chapter 18 P1 digital-convergence case: 113-minute UK/USA production metadata is kept separate from PAL Canon XL1 MiniDV acquisition, up-to-eight-camera deserted-London logistics, Frame Movie Mode/Canon EC-EJ optics, high-shutter motion, D-1 conform, MPC grade/FilmTel 2K enhancement, Arrilaser 5242 film-out and 35mm answer/release print stages, with sound-department credits mapped without inventing undocumented equipment. The agreed 98-film correction remains complete.",
    "filmScenarios note",
  );
  return next;
});

patch("src/ui/data/scenarioProductionVerificationRegistry.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { crouchingTigerHiddenDragonProductionCaseVerification } from "./scenarioProductionVerificationCrouchingTigerHiddenDragon";\n',
    'import { crouchingTigerHiddenDragonProductionCaseVerification } from "./scenarioProductionVerificationCrouchingTigerHiddenDragon";\nimport { twentyEightDaysLaterProductionCaseVerification } from "./scenarioProductionVerificationTwentyEightDaysLater";\n',
    "verification registry import",
  );
  next = replaceOnce(
    next,
    "  crouchingTigerHiddenDragonProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  crouchingTigerHiddenDragonProductionCaseVerification,\n  twentyEightDaysLaterProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification registry entry",
  );
  return next;
});

patch("src/ui/data/scenarioFilmStudyMap.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { crouchingTigerHiddenDragonFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCrouchingTigerHiddenDragon";\n',
    'import { crouchingTigerHiddenDragonFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCrouchingTigerHiddenDragon";\nimport { twentyEightDaysLaterFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTwentyEightDaysLater";\n',
    "Film Study import",
  );
  next = replaceOnce(
    next,
    "  [crouchingTigerHiddenDragonFilmHistoryProfile.scenarioId]: crouchingTigerHiddenDragonFilmHistoryProfile,\n",
    "  [crouchingTigerHiddenDragonFilmHistoryProfile.scenarioId]: crouchingTigerHiddenDragonFilmHistoryProfile,\n  [twentyEightDaysLaterFilmHistoryProfile.scenarioId]: twentyEightDaysLaterFilmHistoryProfile,\n",
    "Film Study profile registry",
  );
  return next;
});

for (const chapterType of chapterTypes) {
  const path = `src/core/filmHistoryChapter${chapterType}AuditContract.test.ts`;
  patch(path, (source) => source.replace(/\b517\b/g, "518"));
}

patch("src/core/filmHistoryChapterEighteenAuditContract.test.ts", (source) => {
  let next = source;
  next = replaceOnce(
    next,
    '"Star Wars: Episode II - Attack of the Clones", "Lost in Translation",',
    '"Star Wars: Episode II - Attack of the Clones", "28 Days Later", "Lost in Translation",',
    "Chapter 18 exact existing queue",
  );
  next = replaceOnce(
    next,
    'const exactP1Queue = [\n  "28 Days Later", "Unknown Pleasures",',
    'const exactP1Queue = [\n  "Unknown Pleasures",',
    "Chapter 18 P1 queue",
  );
  next = replaceOnce(next, "assert.equal(exactExisting.length, 60);", "assert.equal(exactExisting.length, 61);", "Chapter 18 existing count");
  next = replaceOnce(next, "assert.equal(exactP1Queue.length, 21);", "assert.equal(exactP1Queue.length, 20);", "Chapter 18 P1 count");
  next = replaceOnce(next, "assert.equal(resolved.recommendedNewProductionCases.length, 21);", "assert.equal(resolved.recommendedNewProductionCases.length, 20);", "Chapter 18 recommended count");
  return next;
});

const docs = chapterWords.map((word) => `docs/film-history-chapter-${word}-atlas-resolved.json`);
for (let i = 0; i < chapterWords.length; i += 1) {
  const result = spawnSync(process.execPath, [`scripts/film-history-chapter-${chapterWords[i]}-atlas-audit.mjs`, `--write=${docs[i]}`], { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`Chapter ${chapterWords[i]} audit materialization failed with ${result.status}`);
}

console.log("Materialized 28 Days Later into Film Scenarios, Production Verification, Film Study, production audit and Chapter 12-18 audit state at 518/518.");
