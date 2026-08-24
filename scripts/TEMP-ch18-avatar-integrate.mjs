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
    'import { mergeChapterEighteenSlumdogMillionaireExpansion } from "../../core/chapterEighteenSlumdogMillionaireExpansion.js";\n',
    'import { mergeChapterEighteenSlumdogMillionaireExpansion } from "../../core/chapterEighteenSlumdogMillionaireExpansion.js";\nimport { mergeChapterEighteenAvatarExpansion } from "../../core/chapterEighteenAvatarExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenSlumdogMillionaireScenarios = mergeChapterEighteenSlumdogMillionaireExpansion(chapterEighteenZodiacScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenSlumdogMillionaireScenarios);",
    "const chapterEighteenSlumdogMillionaireScenarios = mergeChapterEighteenSlumdogMillionaireExpansion(chapterEighteenZodiacScenarios);\nconst chapterEighteenAvatarScenarios = mergeChapterEighteenAvatarExpansion(chapterEighteenSlumdogMillionaireScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAvatarScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_slumdog_millionaire_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_slumdog_millionaire_expansion_2026+manual_chapter_eighteen_avatar_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac and Slumdog Millionaire production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, the first major all-digital 24p HD blockbuster workflow, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, an end-to-end Viper/D.Mag/LTO digital-negative workflow and a mobile SI-2K Mini/CineForm RAW plus 35mm Mumbai production with body-worn recording, redundant data handling, live location sound and cross-format London grading.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac, Slumdog Millionaire and Avatar production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, all-digital 24p HD blockbuster acquisition, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, end-to-end tapeless digital-negative custody, mobile SI-2K/35mm Mumbai production and Avatar's integrated performance-capture, virtual-camera, SimulCam, stereoscopic live-action and Weta virtual-production system.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { slumdogMillionaireProductionCaseVerification } from "./scenarioProductionVerificationSlumdogMillionaire";\n',
    'import { slumdogMillionaireProductionCaseVerification } from "./scenarioProductionVerificationSlumdogMillionaire";\nimport { avatarProductionCaseVerification } from "./scenarioProductionVerificationAvatar";\n',
    "verification import");
  t = rep(t,
    "  slumdogMillionaireProductionCaseVerification,\n",
    "  slumdogMillionaireProductionCaseVerification,\n  avatarProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { slumdogMillionaireFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSlumdogMillionaire";\n',
    'import { slumdogMillionaireFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSlumdogMillionaire";\nimport { avatarFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAvatar";\n',
    "Film Study import");
  t = rep(t,
    "  [slumdogMillionaireFilmHistoryProfile.scenarioId]: slumdogMillionaireFilmHistoryProfile,\n",
    "  [slumdogMillionaireFilmHistoryProfile.scenarioId]: slumdogMillionaireFilmHistoryProfile,\n  [avatarFilmHistoryProfile.scenarioId]: avatarFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 504;", "const EXPECTED_PLAYABLE_SCENARIOS = 505;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 504;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 505;", "verified count");
  t = rep(t, '  "chapterEighteenSlumdogMillionaireExpansion.ts",\n', '  "chapterEighteenSlumdogMillionaireExpansion.ts",\n  "chapterEighteenAvatarExpansion.ts",\n', "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 504;", "const EXPECTED_ATLAS_COUNT = 505;", `${chapter} count`);
  t = rep(t, '  "chapterEighteenSlumdogMillionaireExpansion.ts",\n', '  "chapterEighteenSlumdogMillionaireExpansion.ts",\n  "chapterEighteenAvatarExpansion.ts",\n', `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("504", "505"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"Head-On", "Vera Drake", "Inland Empire", "Still Life", "Zodiac", "Secret Sunshine", "No Country for Old Men", "4 Months, 3 Weeks and 2 Days", "Slumdog Millionaire",',
    '"Head-On", "Vera Drake", "Inland Empire", "Still Life", "Zodiac", "Secret Sunshine", "No Country for Old Men", "4 Months, 3 Weeks and 2 Days", "Slumdog Millionaire", "Avatar",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Avatar",\n  "The Social Network",',
    'const exactP0Queue = [\n  "The Social Network",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 47);", "assert.equal(exactExisting.length, 48);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 11);", "assert.equal(exactP0Queue.length, 10);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 34);", "assert.equal(resolved.recommendedNewProductionCases.length, 33);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 505 || ch18.verificationIndex.literalVerifiedScenarioIds !== 505) throw new Error("Chapter 18 did not reach 505/505");
const avatar = ch18.candidates.find((item) => item.title === "Avatar");
if (!avatar || avatar.decision !== "USE_EXISTING" || avatar.scenarioId !== "scenario_avatar_2009" || avatar.matches !== 1 || avatar.productionVerified !== true) throw new Error("Avatar candidate transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 48 || ch18.byDecision.P0.length !== 10 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 33) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "The Social Network") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 505, verified: 505, useExisting: 48, p0: 10, p1: 23, p2: 1, recommended: 33, nextP0: ch18.byDecision.P0[0] }, null, 2));
