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
    'import { mergeChapterEighteenCollateralExpansion } from "../../core/chapterEighteenCollateralExpansion.js";\n',
    'import { mergeChapterEighteenCollateralExpansion } from "../../core/chapterEighteenCollateralExpansion.js";\nimport { mergeChapterEighteenInlandEmpireExpansion } from "../../core/chapterEighteenInlandEmpireExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenCollateralScenarios = mergeChapterEighteenCollateralExpansion(chapterEighteenAttackOfTheClonesScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenCollateralScenarios);",
    "const chapterEighteenCollateralScenarios = mergeChapterEighteenCollateralExpansion(chapterEighteenAttackOfTheClonesScenarios);\nconst chapterEighteenInlandEmpireScenarios = mergeChapterEighteenInlandEmpireExpansion(chapterEighteenCollateralScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenInlandEmpireScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_collateral_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_collateral_expansion_2026+manual_chapter_eighteen_inland_empire_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones and Collateral production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, the first major all-digital 24p HD blockbuster workflow and a Viper/F900-plus-35mm hybrid low-light Hollywood production.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral and Inland Empire production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, the first major all-digital 24p HD blockbuster workflow, a Viper/F900-plus-35mm hybrid low-light Hollywood production and intentionally low-resolution Sony PD-150 DV feature production with home-based digital post and film delivery.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { collateralProductionCaseVerification } from "./scenarioProductionVerificationCollateral";\n',
    'import { collateralProductionCaseVerification } from "./scenarioProductionVerificationCollateral";\nimport { inlandEmpireProductionCaseVerification } from "./scenarioProductionVerificationInlandEmpire";\n',
    "verification import");
  t = rep(t,
    "  collateralProductionCaseVerification,\n",
    "  collateralProductionCaseVerification,\n  inlandEmpireProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { collateralFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCollateral";\n',
    'import { collateralFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCollateral";\nimport { inlandEmpireFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenInlandEmpire";\n',
    "Film Study import");
  t = rep(t,
    "  [collateralFilmHistoryProfile.scenarioId]: collateralFilmHistoryProfile,\n",
    "  [collateralFilmHistoryProfile.scenarioId]: collateralFilmHistoryProfile,\n  [inlandEmpireFilmHistoryProfile.scenarioId]: inlandEmpireFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 501;", "const EXPECTED_PLAYABLE_SCENARIOS = 502;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 501;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 502;", "verified count");
  t = rep(t,
    '  "chapterEighteenCollateralExpansion.ts",\n',
    '  "chapterEighteenCollateralExpansion.ts",\n  "chapterEighteenInlandEmpireExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 501;", "const EXPECTED_ATLAS_COUNT = 502;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenCollateralExpansion.ts",\n',
    '  "chapterEighteenCollateralExpansion.ts",\n  "chapterEighteenInlandEmpireExpansion.ts",\n',
    `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("501", "502"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"Head-On", "Vera Drake", "Still Life",',
    '"Head-On", "Vera Drake", "Inland Empire", "Still Life",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Inland Empire", "Zodiac",',
    'const exactP0Queue = [\n  "Zodiac",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 44);", "assert.equal(exactExisting.length, 45);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 14);", "assert.equal(exactP0Queue.length, 13);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 37);", "assert.equal(resolved.recommendedNewProductionCases.length, 36);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 502 || ch18.verificationIndex.literalVerifiedScenarioIds !== 502) throw new Error("Chapter 18 did not reach 502/502");
if (!ch18.byDecision.USE_EXISTING.includes("Inland Empire") || ch18.byDecision.P0.includes("Inland Empire")) throw new Error("Inland Empire queue transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 45 || ch18.byDecision.P0.length !== 13 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 36) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Zodiac") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 502, verified: 502, useExisting: 45, p0: 13, p1: 23, p2: 1, recommended: 36, nextP0: ch18.byDecision.P0[0] }, null, 2));
