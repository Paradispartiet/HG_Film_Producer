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
    'import { mergeChapterEighteenZodiacExpansion } from "../../core/chapterEighteenZodiacExpansion.js";\n',
    'import { mergeChapterEighteenZodiacExpansion } from "../../core/chapterEighteenZodiacExpansion.js";\nimport { mergeChapterEighteenSlumdogMillionaireExpansion } from "../../core/chapterEighteenSlumdogMillionaireExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenZodiacScenarios = mergeChapterEighteenZodiacExpansion(chapterEighteenInlandEmpireScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenZodiacScenarios);",
    "const chapterEighteenZodiacScenarios = mergeChapterEighteenZodiacExpansion(chapterEighteenInlandEmpireScenarios);\nconst chapterEighteenSlumdogMillionaireScenarios = mergeChapterEighteenSlumdogMillionaireExpansion(chapterEighteenZodiacScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenSlumdogMillionaireScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_zodiac_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_zodiac_expansion_2026+manual_chapter_eighteen_slumdog_millionaire_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire and Zodiac production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, the first major all-digital 24p HD blockbuster workflow, a Viper/F900-plus-35mm hybrid low-light Hollywood production, intentionally low-resolution Sony PD-150 DV feature production with home-based digital post and an end-to-end Viper/D.Mag/LTO tapeless digital-negative pipeline with custom DPX conform and 35mm output.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac and Slumdog Millionaire production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, the first major all-digital 24p HD blockbuster workflow, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, an end-to-end Viper/D.Mag/LTO digital-negative workflow and a mobile SI-2K Mini/CineForm RAW plus 35mm Mumbai production with body-worn recording, redundant data handling, live location sound and cross-format London grading.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { zodiacProductionCaseVerification } from "./scenarioProductionVerificationZodiac";\n',
    'import { zodiacProductionCaseVerification } from "./scenarioProductionVerificationZodiac";\nimport { slumdogMillionaireProductionCaseVerification } from "./scenarioProductionVerificationSlumdogMillionaire";\n',
    "verification import");
  t = rep(t,
    "  zodiacProductionCaseVerification,\n",
    "  zodiacProductionCaseVerification,\n  slumdogMillionaireProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { zodiacFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenZodiac";\n',
    'import { zodiacFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenZodiac";\nimport { slumdogMillionaireFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSlumdogMillionaire";\n',
    "Film Study import");
  t = rep(t,
    "  [zodiacFilmHistoryProfile.scenarioId]: zodiacFilmHistoryProfile,\n",
    "  [zodiacFilmHistoryProfile.scenarioId]: zodiacFilmHistoryProfile,\n  [slumdogMillionaireFilmHistoryProfile.scenarioId]: slumdogMillionaireFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 503;", "const EXPECTED_PLAYABLE_SCENARIOS = 504;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 503;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 504;", "verified count");
  t = rep(t,
    '  "chapterEighteenZodiacExpansion.ts",\n',
    '  "chapterEighteenZodiacExpansion.ts",\n  "chapterEighteenSlumdogMillionaireExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 503;", "const EXPECTED_ATLAS_COUNT = 504;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenZodiacExpansion.ts",\n',
    '  "chapterEighteenZodiacExpansion.ts",\n  "chapterEighteenSlumdogMillionaireExpansion.ts",\n',
    `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("503", "504"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"Head-On", "Vera Drake", "Inland Empire", "Still Life", "Zodiac", "Secret Sunshine", "No Country for Old Men", "4 Months, 3 Weeks and 2 Days",',
    '"Head-On", "Vera Drake", "Inland Empire", "Still Life", "Zodiac", "Secret Sunshine", "No Country for Old Men", "4 Months, 3 Weeks and 2 Days", "Slumdog Millionaire",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Slumdog Millionaire", "Avatar",',
    'const exactP0Queue = [\n  "Avatar",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 46);", "assert.equal(exactExisting.length, 47);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 12);", "assert.equal(exactP0Queue.length, 11);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 35);", "assert.equal(resolved.recommendedNewProductionCases.length, 34);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 504 || ch18.verificationIndex.literalVerifiedScenarioIds !== 504) throw new Error("Chapter 18 did not reach 504/504");
const slumdog = ch18.candidates.find((item) => item.title === "Slumdog Millionaire");
if (!slumdog || slumdog.decision !== "USE_EXISTING" || slumdog.scenarioId !== "scenario_slumdog_millionaire_2008" || slumdog.matches !== 1 || slumdog.productionVerified !== true) throw new Error("Slumdog Millionaire candidate transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 47 || ch18.byDecision.P0.length !== 11 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 34) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Avatar") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 504, verified: 504, useExisting: 47, p0: 11, p1: 23, p2: 1, recommended: 34, nextP0: ch18.byDecision.P0[0] }, null, 2));
