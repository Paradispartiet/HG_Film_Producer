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
    'import { mergeChapterEighteenASeparationExpansion } from "../../core/chapterEighteenASeparationExpansion.js";\n',
    'import { mergeChapterEighteenASeparationExpansion } from "../../core/chapterEighteenASeparationExpansion.js";\nimport { mergeChapterEighteenGravityExpansion } from "../../core/chapterEighteenGravityExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenASeparationScenarios = mergeChapterEighteenASeparationExpansion(chapterEighteenTheSocialNetworkScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenASeparationScenarios);",
    "const chapterEighteenASeparationScenarios = mergeChapterEighteenASeparationExpansion(chapterEighteenTheSocialNetworkScenarios);\nconst chapterEighteenGravityScenarios = mergeChapterEighteenGravityExpansion(chapterEighteenASeparationScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenGravityScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_a_separation_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_a_separation_expansion_2026+manual_chapter_eighteen_gravity_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac, Slumdog Millionaire, Avatar, The Social Network and A Separation production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, all-digital 24p HD blockbuster acquisition, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, end-to-end tapeless digital-negative custody, mobile SI-2K/35mm Mumbai production, Avatar's integrated virtual-production system, The Social Network's mature RED/LTO/proxy/metadata/editorial-conform pipeline and A Separation's 35mm photochemical persistence, rehearsal precision, nearly continuous handheld observation, information-controlled editing and score restraint.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac, Slumdog Millionaire, Avatar, The Social Network, A Separation and Gravity production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, all-digital 24p HD blockbuster acquisition, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, end-to-end tapeless digital-negative custody, mobile SI-2K/35mm Mumbai production, Avatar's integrated virtual-production system, The Social Network's mature RED/LTO/proxy/metadata/editorial-conform pipeline, A Separation's 35mm rehearsal/editorial naturalism and Gravity's edit-led previs/prelight/techvis/LED-lightbox/robot-camera/CG/spatial-sound production system.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { aSeparationProductionCaseVerification } from "./scenarioProductionVerificationASeparation";\n',
    'import { aSeparationProductionCaseVerification } from "./scenarioProductionVerificationASeparation";\nimport { gravityProductionCaseVerification } from "./scenarioProductionVerificationGravity";\n',
    "verification import");
  t = rep(t,
    "  aSeparationProductionCaseVerification,\n",
    "  aSeparationProductionCaseVerification,\n  gravityProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { aSeparationFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenASeparation";\n',
    'import { aSeparationFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenASeparation";\nimport { gravityFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenGravity";\n',
    "Film Study import");
  t = rep(t,
    "  [aSeparationFilmHistoryProfile.scenarioId]: aSeparationFilmHistoryProfile,\n",
    "  [aSeparationFilmHistoryProfile.scenarioId]: aSeparationFilmHistoryProfile,\n  [gravityFilmHistoryProfile.scenarioId]: gravityFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 507;", "const EXPECTED_PLAYABLE_SCENARIOS = 508;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 507;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 508;", "verified count");
  t = rep(t,
    '  "chapterEighteenASeparationExpansion.ts",\n',
    '  "chapterEighteenASeparationExpansion.ts",\n  "chapterEighteenGravityExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 507;", "const EXPECTED_ATLAS_COUNT = 508;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenASeparationExpansion.ts",\n',
    '  "chapterEighteenASeparationExpansion.ts",\n  "chapterEighteenGravityExpansion.ts",\n',
    `${chapter} expansion list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("507", "508"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '  "Poetry", "Somewhere", "A Separation", "Pietà", "Blue Is the Warmest Colour",',
    '  "Poetry", "Somewhere", "A Separation", "Pietà", "Gravity", "Blue Is the Warmest Colour",',
    "existing candidate-order queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Gravity", "Son of Saul",',
    'const exactP0Queue = [\n  "Son of Saul",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 50);", "assert.equal(exactExisting.length, 51);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 8);", "assert.equal(exactP0Queue.length, 7);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 31);", "assert.equal(resolved.recommendedNewProductionCases.length, 30);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 508 || ch18.verificationIndex.literalVerifiedScenarioIds !== 508) throw new Error("Chapter 18 did not reach 508/508");
const gravity = ch18.candidates.find((item) => item.title === "Gravity");
if (!gravity || gravity.decision !== "USE_EXISTING" || gravity.scenarioId !== "scenario_gravity_2013" || gravity.matches !== 1 || gravity.productionVerified !== true) throw new Error("Gravity candidate transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 51 || ch18.byDecision.P0.length !== 7 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 30) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Son of Saul") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 508, verified: 508, useExisting: 51, p0: 7, p1: 23, p2: 1, recommended: 30, nextP0: ch18.byDecision.P0[0] }, null, 2));
