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
    'import { mergeChapterEighteenTheSocialNetworkExpansion } from "../../core/chapterEighteenTheSocialNetworkExpansion.js";\n',
    'import { mergeChapterEighteenTheSocialNetworkExpansion } from "../../core/chapterEighteenTheSocialNetworkExpansion.js";\nimport { mergeChapterEighteenASeparationExpansion } from "../../core/chapterEighteenASeparationExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenTheSocialNetworkScenarios = mergeChapterEighteenTheSocialNetworkExpansion(chapterEighteenAvatarScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTheSocialNetworkScenarios);",
    "const chapterEighteenTheSocialNetworkScenarios = mergeChapterEighteenTheSocialNetworkExpansion(chapterEighteenAvatarScenarios);\nconst chapterEighteenASeparationScenarios = mergeChapterEighteenASeparationExpansion(chapterEighteenTheSocialNetworkScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenASeparationScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_the_social_network_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_the_social_network_expansion_2026+manual_chapter_eighteen_a_separation_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac, Slumdog Millionaire, Avatar and The Social Network production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, all-digital 24p HD blockbuster acquisition, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, end-to-end tapeless digital-negative custody, mobile SI-2K/35mm Mumbai production, Avatar's integrated virtual-production system and The Social Network's mature RED/LTO/proxy/metadata/editorial-conform/invisible-VFX file-based pipeline.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac, Slumdog Millionaire, Avatar, The Social Network and A Separation production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, all-digital 24p HD blockbuster acquisition, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, end-to-end tapeless digital-negative custody, mobile SI-2K/35mm Mumbai production, Avatar's integrated virtual-production system, The Social Network's mature RED/LTO/proxy/metadata/editorial-conform pipeline and A Separation's 35mm photochemical persistence, rehearsal precision, nearly continuous handheld observation, information-controlled editing and score restraint.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { theSocialNetworkProductionCaseVerification } from "./scenarioProductionVerificationTheSocialNetwork";\n',
    'import { theSocialNetworkProductionCaseVerification } from "./scenarioProductionVerificationTheSocialNetwork";\nimport { aSeparationProductionCaseVerification } from "./scenarioProductionVerificationASeparation";\n',
    "verification import");
  t = rep(t,
    "  theSocialNetworkProductionCaseVerification,\n",
    "  theSocialNetworkProductionCaseVerification,\n  aSeparationProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { theSocialNetworkFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheSocialNetwork";\n',
    'import { theSocialNetworkFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheSocialNetwork";\nimport { aSeparationFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenASeparation";\n',
    "Film Study import");
  t = rep(t,
    "  [theSocialNetworkFilmHistoryProfile.scenarioId]: theSocialNetworkFilmHistoryProfile,\n",
    "  [theSocialNetworkFilmHistoryProfile.scenarioId]: theSocialNetworkFilmHistoryProfile,\n  [aSeparationFilmHistoryProfile.scenarioId]: aSeparationFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 506;", "const EXPECTED_PLAYABLE_SCENARIOS = 507;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 506;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 507;", "verified count");
  t = rep(t,
    '  "chapterEighteenTheSocialNetworkExpansion.ts",\n',
    '  "chapterEighteenTheSocialNetworkExpansion.ts",\n  "chapterEighteenASeparationExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 506;", "const EXPECTED_ATLAS_COUNT = 507;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenTheSocialNetworkExpansion.ts",\n',
    '  "chapterEighteenTheSocialNetworkExpansion.ts",\n  "chapterEighteenASeparationExpansion.ts",\n',
    `${chapter} expansion list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("506", "507"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '  "Poetry", "Somewhere", "Pietà", "Blue Is the Warmest Colour",',
    '  "Poetry", "Somewhere", "A Separation", "Pietà", "Blue Is the Warmest Colour",',
    "existing candidate-order queue");
  t = rep(t,
    'const exactP0Queue = [\n  "A Separation", "Gravity",',
    'const exactP0Queue = [\n  "Gravity",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 49);", "assert.equal(exactExisting.length, 50);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 9);", "assert.equal(exactP0Queue.length, 8);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 32);", "assert.equal(resolved.recommendedNewProductionCases.length, 31);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 507 || ch18.verificationIndex.literalVerifiedScenarioIds !== 507) throw new Error("Chapter 18 did not reach 507/507");
const separation = ch18.candidates.find((item) => item.title === "A Separation");
if (!separation || separation.decision !== "USE_EXISTING" || separation.scenarioId !== "scenario_a_separation_2011" || separation.matches !== 1 || separation.productionVerified !== true) throw new Error("A Separation candidate transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 50 || ch18.byDecision.P0.length !== 8 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 31) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Gravity") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 507, verified: 507, useExisting: 50, p0: 8, p1: 23, p2: 1, recommended: 31, nextP0: ch18.byDecision.P0[0] }, null, 2));
