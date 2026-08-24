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
    'import { mergeChapterEighteenSonOfSaulExpansion } from "../../core/chapterEighteenSonOfSaulExpansion.js";\n',
    'import { mergeChapterEighteenSonOfSaulExpansion } from "../../core/chapterEighteenSonOfSaulExpansion.js";\nimport { mergeChapterEighteenMoonlightExpansion } from "../../core/chapterEighteenMoonlightExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenSonOfSaulScenarios = mergeChapterEighteenSonOfSaulExpansion(chapterEighteenGravityScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenSonOfSaulScenarios);",
    "const chapterEighteenSonOfSaulScenarios = mergeChapterEighteenSonOfSaulExpansion(chapterEighteenGravityScenarios);\nconst chapterEighteenMoonlightScenarios = mergeChapterEighteenMoonlightExpansion(chapterEighteenSonOfSaulScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenMoonlightScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_son_of_saul_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_son_of_saul_expansion_2026+manual_chapter_eighteen_moonlight_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Son of Saul's four-perf 35mm/40mm/1.37 long-take, functional-set, optical-finish and offscreen multilingual representation system.",
    "Son of Saul's four-perf 35mm/40mm/1.37 long-take, functional-set, optical-finish and offscreen multilingual representation system, and Moonlight's one-camera ALEXA XT/ProRes/anamorphic, Miami location, DI film-emulation, triptych-edit and chopped-and-screwed music system.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { sonOfSaulProductionCaseVerification } from "./scenarioProductionVerificationSonOfSaul";\n',
    'import { sonOfSaulProductionCaseVerification } from "./scenarioProductionVerificationSonOfSaul";\nimport { moonlightProductionCaseVerification } from "./scenarioProductionVerificationMoonlight";\n',
    "verification import");
  t = rep(t,
    "  sonOfSaulProductionCaseVerification,\n",
    "  sonOfSaulProductionCaseVerification,\n  moonlightProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { sonOfSaulFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSonOfSaul";\n',
    'import { sonOfSaulFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSonOfSaul";\nimport { moonlightFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenMoonlight";\n',
    "Film Study import");
  t = rep(t,
    "  [sonOfSaulFilmHistoryProfile.scenarioId]: sonOfSaulFilmHistoryProfile,\n",
    "  [sonOfSaulFilmHistoryProfile.scenarioId]: sonOfSaulFilmHistoryProfile,\n  [moonlightFilmHistoryProfile.scenarioId]: moonlightFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 509;", "const EXPECTED_PLAYABLE_SCENARIOS = 510;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 509;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 510;", "verified count");
  t = rep(t,
    '  "chapterEighteenSonOfSaulExpansion.ts",\n',
    '  "chapterEighteenSonOfSaulExpansion.ts",\n  "chapterEighteenMoonlightExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 509;", "const EXPECTED_ATLAS_COUNT = 510;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenSonOfSaulExpansion.ts",\n',
    '  "chapterEighteenSonOfSaulExpansion.ts",\n  "chapterEighteenMoonlightExpansion.ts",\n',
    `${chapter} expansion list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("509", "510"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '  "Tangerine", "Mad Max: Fury Road", "Son of Saul", "From Afar", "Toni Erdmann",',
    '  "Tangerine", "Mad Max: Fury Road", "Son of Saul", "From Afar", "Moonlight", "Toni Erdmann",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Moonlight", "Dunkirk", "Roma",',
    'const exactP0Queue = [\n  "Dunkirk", "Roma",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 52);", "assert.equal(exactExisting.length, 53);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 6);", "assert.equal(exactP0Queue.length, 5);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 29);", "assert.equal(resolved.recommendedNewProductionCases.length, 28);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 510 || ch18.verificationIndex.literalVerifiedScenarioIds !== 510) throw new Error("Chapter 18 did not reach 510/510");
const moonlight = ch18.candidates.find((item) => item.title === "Moonlight");
if (!moonlight || moonlight.decision !== "USE_EXISTING" || moonlight.scenarioId !== "scenario_moonlight_2016" || moonlight.matches !== 1 || moonlight.productionVerified !== true) throw new Error("Moonlight candidate transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 53 || ch18.byDecision.P0.length !== 5 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 28) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Dunkirk") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 510, verified: 510, useExisting: 53, p0: 5, p1: 23, p2: 1, recommended: 28, nextP0: ch18.byDecision.P0[0] }, null, 2));
