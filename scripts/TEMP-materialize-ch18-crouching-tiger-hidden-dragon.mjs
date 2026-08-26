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
    let next = replaceOnce(source, "const EXPECTED_ATLAS_COUNT = 516;", "const EXPECTED_ATLAS_COUNT = 517;", `${path} expected count`);
    next = replaceOnce(
      next,
      '  "chapterEighteenYiYiExpansion.ts",\n  "modernCanonExpansion.ts",',
      '  "chapterEighteenYiYiExpansion.ts",\n  "chapterEighteenCrouchingTigerHiddenDragonExpansion.ts",\n  "modernCanonExpansion.ts",',
      `${path} expansion order`,
    );
    return next;
  });
}

patch("scripts/production-case-rest-audit.mjs", (source) => {
  let next = replaceOnce(source, "const EXPECTED_PLAYABLE_SCENARIOS = 516;", "const EXPECTED_PLAYABLE_SCENARIOS = 517;", "production audit playable count");
  next = replaceOnce(next, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 516;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 517;", "production audit verified count");
  next = replaceOnce(
    next,
    '  "chapterEighteenYiYiExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenYiYiExpansion.ts",\n  "chapterEighteenCrouchingTigerHiddenDragonExpansion.ts",\n  "modernCanonExpansion.ts",',
    "production audit expansion order",
  );
  return next;
});

patch("src/ui/data/filmScenarios.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { mergeChapterEighteenYiYiExpansion } from "../../core/chapterEighteenYiYiExpansion.js";\n',
    'import { mergeChapterEighteenYiYiExpansion } from "../../core/chapterEighteenYiYiExpansion.js";\nimport { mergeChapterEighteenCrouchingTigerHiddenDragonExpansion } from "../../core/chapterEighteenCrouchingTigerHiddenDragonExpansion.js";\n',
    "filmScenarios Crouching Tiger import",
  );
  next = replaceOnce(
    next,
    "const chapterEighteenYiYiScenarios = mergeChapterEighteenYiYiExpansion(chapterEighteenTheIrishmanScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenYiYiScenarios);",
    "const chapterEighteenYiYiScenarios = mergeChapterEighteenYiYiExpansion(chapterEighteenTheIrishmanScenarios);\nconst chapterEighteenCrouchingTigerHiddenDragonScenarios = mergeChapterEighteenCrouchingTigerHiddenDragonExpansion(chapterEighteenYiYiScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenCrouchingTigerHiddenDragonScenarios);",
    "filmScenarios Crouching Tiger merge chain",
  );
  next = replaceOnce(
    next,
    "+manual_chapter_eighteen_yi_yi_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_yi_yi_expansion_2026+manual_chapter_eighteen_crouching_tiger_hidden_dragon_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "filmScenarios Chapter 18 source-list provenance",
  );
  next = replaceOnce(
    next,
    "The agreed 98-film correction remains complete.",
    "Crouching Tiger, Hidden Dragon continues the Chapter 18 P1 rollout with a 120-minute China/Taiwan/USA/Hong Kong transnational wuxia case: documented Super 35 photography, Kodak 5277/5245/5246 stocks, Moviecam/Arri two-camera production, physical Yuen Woo-ping wire choreography, selective Asia Cine Digital/Manex cleanup, optical blowup, Tim Squyres editorial authorship and Tan Dun score synchronization are kept as distinct production systems. The agreed 98-film correction remains complete.",
    "filmScenarios note",
  );
  return next;
});

patch("src/ui/data/scenarioProductionVerificationRegistry.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { yiYiProductionCaseVerification } from "./scenarioProductionVerificationYiYi";\n',
    'import { yiYiProductionCaseVerification } from "./scenarioProductionVerificationYiYi";\nimport { crouchingTigerHiddenDragonProductionCaseVerification } from "./scenarioProductionVerificationCrouchingTigerHiddenDragon";\n',
    "verification registry import",
  );
  next = replaceOnce(
    next,
    "  yiYiProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  yiYiProductionCaseVerification,\n  crouchingTigerHiddenDragonProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification registry entry",
  );
  return next;
});

patch("src/ui/data/scenarioFilmStudyMap.ts", (source) => {
  let next = replaceOnce(
    source,
    'import { yiYiFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenYiYi";\n',
    'import { yiYiFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenYiYi";\nimport { crouchingTigerHiddenDragonFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCrouchingTigerHiddenDragon";\n',
    "Film Study import",
  );
  next = replaceOnce(
    next,
    "  [yiYiFilmHistoryProfile.scenarioId]: yiYiFilmHistoryProfile,\n",
    "  [yiYiFilmHistoryProfile.scenarioId]: yiYiFilmHistoryProfile,\n  [crouchingTigerHiddenDragonFilmHistoryProfile.scenarioId]: crouchingTigerHiddenDragonFilmHistoryProfile,\n",
    "Film Study profile registry",
  );
  return next;
});

for (const chapterType of chapterTypes) {
  const path = `src/core/filmHistoryChapter${chapterType}AuditContract.test.ts`;
  patch(path, (source) => source.replace(/\b516\b/g, "517"));
}

patch("src/core/filmHistoryChapterEighteenAuditContract.test.ts", (source) => {
  let next = source;
  next = replaceOnce(
    next,
    '"The Gleaners and I", "Platform", "Dancer in the Dark", "In the Mood for Love", "Yi Yi", "Atanarjuat: The Fast Runner",',
    '"The Gleaners and I", "Platform", "Dancer in the Dark", "In the Mood for Love", "Yi Yi", "Crouching Tiger, Hidden Dragon", "Atanarjuat: The Fast Runner",',
    "Chapter 18 exact existing queue",
  );
  next = replaceOnce(
    next,
    'const exactP1Queue = [\n  "Crouching Tiger, Hidden Dragon", "28 Days Later",',
    'const exactP1Queue = [\n  "28 Days Later",',
    "Chapter 18 P1 queue",
  );
  next = replaceOnce(next, "assert.equal(exactExisting.length, 59);", "assert.equal(exactExisting.length, 60);", "Chapter 18 existing count");
  next = replaceOnce(next, "assert.equal(exactP1Queue.length, 22);", "assert.equal(exactP1Queue.length, 21);", "Chapter 18 P1 count");
  next = replaceOnce(next, "assert.equal(resolved.recommendedNewProductionCases.length, 22);", "assert.equal(resolved.recommendedNewProductionCases.length, 21);", "Chapter 18 recommended count");
  return next;
});

const docs = chapterWords.map((word) => `docs/film-history-chapter-${word}-atlas-resolved.json`);
for (let i = 0; i < chapterWords.length; i += 1) {
  const result = spawnSync(process.execPath, [`scripts/film-history-chapter-${chapterWords[i]}-atlas-audit.mjs`, `--write=${docs[i]}`], { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`Chapter ${chapterWords[i]} audit materialization failed with ${result.status}`);
}

console.log("Materialized Crouching Tiger, Hidden Dragon into Film Scenarios, Production Verification, Film Study, production audit and Chapter 12-18 audit state at 517/517.");
