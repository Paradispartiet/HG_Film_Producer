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
    'import { mergeChapterEighteenAvatarExpansion } from "../../core/chapterEighteenAvatarExpansion.js";\n',
    'import { mergeChapterEighteenAvatarExpansion } from "../../core/chapterEighteenAvatarExpansion.js";\nimport { mergeChapterEighteenTheSocialNetworkExpansion } from "../../core/chapterEighteenTheSocialNetworkExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenAvatarScenarios = mergeChapterEighteenAvatarExpansion(chapterEighteenSlumdogMillionaireScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAvatarScenarios);",
    "const chapterEighteenAvatarScenarios = mergeChapterEighteenAvatarExpansion(chapterEighteenSlumdogMillionaireScenarios);\nconst chapterEighteenTheSocialNetworkScenarios = mergeChapterEighteenTheSocialNetworkExpansion(chapterEighteenAvatarScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTheSocialNetworkScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_avatar_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_avatar_expansion_2026+manual_chapter_eighteen_the_social_network_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac, Slumdog Millionaire and Avatar production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, all-digital 24p HD blockbuster acquisition, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, end-to-end tapeless digital-negative custody, mobile SI-2K/35mm Mumbai production and Avatar's integrated performance-capture, virtual-camera, SimulCam, stereoscopic live-action and Weta virtual-production system.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God, Star Wars: Episode II - Attack of the Clones, Collateral, Inland Empire, Zodiac, Slumdog Millionaire, Avatar and The Social Network production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence, all-digital 24p HD blockbuster acquisition, Viper/F900-plus-35mm hybrid low-light production, intentionally low-resolution Sony PD-150 DV production, end-to-end tapeless digital-negative custody, mobile SI-2K/35mm Mumbai production, Avatar's integrated virtual-production system and The Social Network's mature RED/LTO/proxy/metadata/editorial-conform/invisible-VFX file-based pipeline.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { avatarProductionCaseVerification } from "./scenarioProductionVerificationAvatar";\n',
    'import { avatarProductionCaseVerification } from "./scenarioProductionVerificationAvatar";\nimport { theSocialNetworkProductionCaseVerification } from "./scenarioProductionVerificationTheSocialNetwork";\n',
    "verification import");
  t = rep(t,
    "  avatarProductionCaseVerification,\n",
    "  avatarProductionCaseVerification,\n  theSocialNetworkProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { avatarFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAvatar";\n',
    'import { avatarFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAvatar";\nimport { theSocialNetworkFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTheSocialNetwork";\n',
    "Film Study import");
  t = rep(t,
    "  [avatarFilmHistoryProfile.scenarioId]: avatarFilmHistoryProfile,\n",
    "  [avatarFilmHistoryProfile.scenarioId]: avatarFilmHistoryProfile,\n  [theSocialNetworkFilmHistoryProfile.scenarioId]: theSocialNetworkFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 505;", "const EXPECTED_PLAYABLE_SCENARIOS = 506;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 505;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 506;", "verified count");
  t = rep(t, '  "chapterEighteenAvatarExpansion.ts",\n', '  "chapterEighteenAvatarExpansion.ts",\n  "chapterEighteenTheSocialNetworkExpansion.ts",\n', "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 505;", "const EXPECTED_ATLAS_COUNT = 506;", `${chapter} count`);
  t = rep(t, '  "chapterEighteenAvatarExpansion.ts",\n', '  "chapterEighteenAvatarExpansion.ts",\n  "chapterEighteenTheSocialNetworkExpansion.ts",\n', `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("505", "506"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"Waltz with Bashir", "Wendy and Lucy", "The Wrestler", "Hunger", "Avatar", "A Prophet", "The White Ribbon", "The Milk of Sorrow",\n  "Poetry",',
    '"Waltz with Bashir", "Wendy and Lucy", "The Wrestler", "Hunger", "Avatar", "A Prophet", "The White Ribbon", "The Milk of Sorrow", "The Social Network",\n  "Poetry",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "The Social Network", "A Separation",',
    'const exactP0Queue = [\n  "A Separation",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 48);", "assert.equal(exactExisting.length, 49);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 10);", "assert.equal(exactP0Queue.length, 9);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 33);", "assert.equal(resolved.recommendedNewProductionCases.length, 32);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 506 || ch18.verificationIndex.literalVerifiedScenarioIds !== 506) throw new Error("Chapter 18 did not reach 506/506");
const social = ch18.candidates.find((item) => item.title === "The Social Network");
if (!social || social.decision !== "USE_EXISTING" || social.scenarioId !== "scenario_the_social_network_2010" || social.matches !== 1 || social.productionVerified !== true) throw new Error("The Social Network candidate transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 49 || ch18.byDecision.P0.length !== 9 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 32) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "A Separation") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 506, verified: 506, useExisting: 49, p0: 9, p1: 23, p2: 1, recommended: 32, nextP0: ch18.byDecision.P0[0] }, null, 2));
