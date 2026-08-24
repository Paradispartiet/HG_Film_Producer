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
    'import { mergeChapterEighteenInlandEmpireExpansion } from "../../core/chapterEighteenInlandEmpireExpansion.js";\n',
    'import { mergeChapterEighteenInlandEmpireExpansion } from "../../core/chapterEighteenInlandEmpireExpansion.js";\nimport { mergeChapterEighteenZodiacExpansion } from "../../core/chapterEighteenZodiacExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenInlandEmpireScenarios = mergeChapterEighteenInlandEmpireExpansion(chapterEighteenCollateralScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenInlandEmpireScenarios);",
    "const chapterEighteenInlandEmpireScenarios = mergeChapterEighteenInlandEmpireExpansion(chapterEighteenCollateralScenarios);\nconst chapterEighteenZodiacScenarios = mergeChapterEighteenZodiacExpansion(chapterEighteenInlandEmpireScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenZodiacScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_inland_empire_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_inland_empire_expansion_2026+manual_chapter_eighteen_zodiac_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral and Inland Empire production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, the first major all-digital 24p HD blockbuster workflow, a Viper/F900-plus-35mm hybrid low-light Hollywood production and intentionally low-resolution Sony PD-150 DV feature production with home-based digital post and film delivery.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire and Zodiac production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, the first major all-digital 24p HD blockbuster workflow, a Viper/F900-plus-35mm hybrid low-light Hollywood production, intentionally low-resolution Sony PD-150 DV feature production with home-based digital post and an end-to-end Viper/D.Mag/LTO tapeless digital-negative pipeline with custom DPX conform and 35mm output.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { inlandEmpireProductionCaseVerification } from "./scenarioProductionVerificationInlandEmpire";\n',
    'import { inlandEmpireProductionCaseVerification } from "./scenarioProductionVerificationInlandEmpire";\nimport { zodiacProductionCaseVerification } from "./scenarioProductionVerificationZodiac";\n',
    "verification import");
  t = rep(t,
    "  inlandEmpireProductionCaseVerification,\n",
    "  inlandEmpireProductionCaseVerification,\n  zodiacProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { inlandEmpireFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenInlandEmpire";\n',
    'import { inlandEmpireFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenInlandEmpire";\nimport { zodiacFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenZodiac";\n',
    "Film Study import");
  t = rep(t,
    "  [inlandEmpireFilmHistoryProfile.scenarioId]: inlandEmpireFilmHistoryProfile,\n",
    "  [inlandEmpireFilmHistoryProfile.scenarioId]: inlandEmpireFilmHistoryProfile,\n  [zodiacFilmHistoryProfile.scenarioId]: zodiacFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 502;", "const EXPECTED_PLAYABLE_SCENARIOS = 503;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 502;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 503;", "verified count");
  t = rep(t,
    '  "chapterEighteenInlandEmpireExpansion.ts",\n',
    '  "chapterEighteenInlandEmpireExpansion.ts",\n  "chapterEighteenZodiacExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 502;", "const EXPECTED_ATLAS_COUNT = 503;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenInlandEmpireExpansion.ts",\n',
    '  "chapterEighteenInlandEmpireExpansion.ts",\n  "chapterEighteenZodiacExpansion.ts",\n',
    `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("502", "503"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"Head-On", "Vera Drake", "Inland Empire", "Still Life", "Secret Sunshine",',
    '"Head-On", "Vera Drake", "Inland Empire", "Still Life", "Zodiac", "Secret Sunshine",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Zodiac", "Slumdog Millionaire", "Avatar",',
    'const exactP0Queue = [\n  "Slumdog Millionaire", "Avatar",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 45);", "assert.equal(exactExisting.length, 46);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 13);", "assert.equal(exactP0Queue.length, 12);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 36);", "assert.equal(resolved.recommendedNewProductionCases.length, 35);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 503 || ch18.verificationIndex.literalVerifiedScenarioIds !== 503) throw new Error("Chapter 18 did not reach 503/503");
const zodiac = ch18.candidates.find((item) => item.title === "Zodiac");
if (!zodiac || zodiac.decision !== "USE_EXISTING" || zodiac.scenarioId !== "scenario_zodiac_2007" || zodiac.matches !== 1 || zodiac.productionVerified !== true) throw new Error("Zodiac candidate transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 46 || ch18.byDecision.P0.length !== 12 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 35) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Slumdog Millionaire") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 503, verified: 503, useExisting: 46, p0: 12, p1: 23, p2: 1, recommended: 35, nextP0: ch18.byDecision.P0[0] }, null, 2));
