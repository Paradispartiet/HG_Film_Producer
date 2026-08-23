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
    'import { mergeChapterEighteenAttackOfTheClonesExpansion } from "../../core/chapterEighteenAttackOfTheClonesExpansion.js";\n',
    'import { mergeChapterEighteenAttackOfTheClonesExpansion } from "../../core/chapterEighteenAttackOfTheClonesExpansion.js";\nimport { mergeChapterEighteenCollateralExpansion } from "../../core/chapterEighteenCollateralExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenAttackOfTheClonesScenarios = mergeChapterEighteenAttackOfTheClonesExpansion(chapterEighteenCityOfGodScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAttackOfTheClonesScenarios);",
    "const chapterEighteenAttackOfTheClonesScenarios = mergeChapterEighteenAttackOfTheClonesExpansion(chapterEighteenCityOfGodScenarios);\nconst chapterEighteenCollateralScenarios = mergeChapterEighteenCollateralExpansion(chapterEighteenAttackOfTheClonesScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenCollateralScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_attack_of_the_clones_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_attack_of_the_clones_expansion_2026+manual_chapter_eighteen_collateral_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God and Star Wars: Episode II - Attack of the Clones production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence and the first major all-digital 24p HD blockbuster workflow.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones and Collateral production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, the first major all-digital 24p HD blockbuster workflow and a Viper/F900-plus-35mm hybrid low-light Hollywood production.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { attackOfTheClonesProductionCaseVerification } from "./scenarioProductionVerificationAttackOfTheClones";\n',
    'import { attackOfTheClonesProductionCaseVerification } from "./scenarioProductionVerificationAttackOfTheClones";\nimport { collateralProductionCaseVerification } from "./scenarioProductionVerificationCollateral";\n',
    "verification import");
  t = rep(t,
    "  attackOfTheClonesProductionCaseVerification,\n",
    "  attackOfTheClonesProductionCaseVerification,\n  collateralProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { attackOfTheClonesFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAttackOfTheClones";\n',
    'import { attackOfTheClonesFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAttackOfTheClones";\nimport { collateralFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCollateral";\n',
    "Film Study import");
  t = rep(t,
    "  [attackOfTheClonesFilmHistoryProfile.scenarioId]: attackOfTheClonesFilmHistoryProfile,\n",
    "  [attackOfTheClonesFilmHistoryProfile.scenarioId]: attackOfTheClonesFilmHistoryProfile,\n  [collateralFilmHistoryProfile.scenarioId]: collateralFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 500;", "const EXPECTED_PLAYABLE_SCENARIOS = 501;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 500;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 501;", "verified count");
  t = rep(t,
    '  "chapterEighteenAttackOfTheClonesExpansion.ts",\n',
    '  "chapterEighteenAttackOfTheClonesExpansion.ts",\n  "chapterEighteenCollateralExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 500;", "const EXPECTED_ATLAS_COUNT = 501;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenAttackOfTheClonesExpansion.ts",\n',
    '  "chapterEighteenAttackOfTheClonesExpansion.ts",\n  "chapterEighteenCollateralExpansion.ts",\n',
    `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("500", "501"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"Star Wars: Episode II - Attack of the Clones", "Lost in Translation", "The Return", "Tropical Malady",',
    '"Star Wars: Episode II - Attack of the Clones", "Lost in Translation", "The Return", "Collateral", "Tropical Malady",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Collateral", "Inland Empire",',
    'const exactP0Queue = [\n  "Inland Empire",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 43);", "assert.equal(exactExisting.length, 44);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 15);", "assert.equal(exactP0Queue.length, 14);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 38);", "assert.equal(resolved.recommendedNewProductionCases.length, 37);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 501 || ch18.verificationIndex.literalVerifiedScenarioIds !== 501) throw new Error("Chapter 18 did not reach 501/501");
if (!ch18.byDecision.USE_EXISTING.includes("Collateral") || ch18.byDecision.P0.includes("Collateral")) throw new Error("Collateral queue transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 44 || ch18.byDecision.P0.length !== 14 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 37) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Inland Empire") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 501, verified: 501, useExisting: 44, p0: 14, p1: 23, p2: 1, recommended: 37, nextP0: ch18.byDecision.P0[0] }, null, 2));
