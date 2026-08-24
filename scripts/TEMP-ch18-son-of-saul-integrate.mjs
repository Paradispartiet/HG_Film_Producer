import fs from "node:fs";
import cp from "node:child_process";

const read = (p) => fs.readFileSync(p, "utf8");
const write = (p, t) => fs.writeFileSync(p, t);
function rep(text, from, to, label) {
  if (text.includes(to)) return text;
  if (!text.includes(from)) throw new Error(`Missing expected pattern: ${label}`);
  return text.replace(from, to);
}

{
  const path = "src/ui/data/filmScenarios.ts";
  let t = read(path);
  t = rep(t,
    'import { mergeChapterEighteenGravityExpansion } from "../../core/chapterEighteenGravityExpansion.js";\n',
    'import { mergeChapterEighteenGravityExpansion } from "../../core/chapterEighteenGravityExpansion.js";\nimport { mergeChapterEighteenSonOfSaulExpansion } from "../../core/chapterEighteenSonOfSaulExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenGravityScenarios = mergeChapterEighteenGravityExpansion(chapterEighteenASeparationScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenGravityScenarios);",
    "const chapterEighteenGravityScenarios = mergeChapterEighteenGravityExpansion(chapterEighteenASeparationScenarios);\nconst chapterEighteenSonOfSaulScenarios = mergeChapterEighteenSonOfSaulExpansion(chapterEighteenGravityScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenSonOfSaulScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_gravity_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_gravity_expansion_2026+manual_chapter_eighteen_son_of_saul_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "A Separation's 35mm rehearsal/editorial naturalism and Gravity's edit-led previs/prelight/techvis/LED-lightbox/robot-camera/CG/spatial-sound production system.",
    "A Separation's 35mm rehearsal/editorial naturalism, Gravity's edit-led previs/prelight/techvis/LED-lightbox/robot-camera/CG/spatial-sound production system, and Son of Saul's four-perf 35mm/40mm/1.37 long-take, functional-set, optical-finish and offscreen multilingual representation system.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { gravityProductionCaseVerification } from "./scenarioProductionVerificationGravity";\n',
    'import { gravityProductionCaseVerification } from "./scenarioProductionVerificationGravity";\nimport { sonOfSaulProductionCaseVerification } from "./scenarioProductionVerificationSonOfSaul";\n',
    "verification import");
  t = rep(t,
    "  gravityProductionCaseVerification,\n",
    "  gravityProductionCaseVerification,\n  sonOfSaulProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { gravityFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenGravity";\n',
    'import { gravityFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenGravity";\nimport { sonOfSaulFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSonOfSaul";\n',
    "Film Study import");
  t = rep(t,
    "  [gravityFilmHistoryProfile.scenarioId]: gravityFilmHistoryProfile,\n",
    "  [gravityFilmHistoryProfile.scenarioId]: gravityFilmHistoryProfile,\n  [sonOfSaulFilmHistoryProfile.scenarioId]: sonOfSaulFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 508;", "const EXPECTED_PLAYABLE_SCENARIOS = 509;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 508;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 509;", "verified count");
  t = rep(t,
    '  "chapterEighteenGravityExpansion.ts",\n',
    '  "chapterEighteenGravityExpansion.ts",\n  "chapterEighteenSonOfSaulExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 508;", "const EXPECTED_ATLAS_COUNT = 509;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenGravityExpansion.ts",\n',
    '  "chapterEighteenGravityExpansion.ts",\n  "chapterEighteenSonOfSaulExpansion.ts",\n',
    `${chapter} expansion list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("508", "509"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '  "Tangerine", "Mad Max: Fury Road", "From Afar",',
    '  "Tangerine", "Mad Max: Fury Road", "Son of Saul", "From Afar",',
    "existing candidate-order queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Son of Saul", "Moonlight",',
    'const exactP0Queue = [\n  "Moonlight",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 51);", "assert.equal(exactExisting.length, 52);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 7);", "assert.equal(exactP0Queue.length, 6);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 30);", "assert.equal(resolved.recommendedNewProductionCases.length, 29);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 509 || ch18.verificationIndex.literalVerifiedScenarioIds !== 509) throw new Error("Chapter 18 did not reach 509/509");
const sonOfSaul = ch18.candidates.find((item) => item.title === "Son of Saul");
if (!sonOfSaul || sonOfSaul.decision !== "USE_EXISTING" || sonOfSaul.scenarioId !== "scenario_son_of_saul_2015" || sonOfSaul.matches !== 1 || sonOfSaul.productionVerified !== true) throw new Error("Son of Saul candidate transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 52 || ch18.byDecision.P0.length !== 6 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 29) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Moonlight") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 509, verified: 509, useExisting: 52, p0: 6, p1: 23, p2: 1, recommended: 29, nextP0: ch18.byDecision.P0[0] }, null, 2));
