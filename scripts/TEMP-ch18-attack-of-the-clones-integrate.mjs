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
    'import { mergeChapterEighteenCityOfGodExpansion } from "../../core/chapterEighteenCityOfGodExpansion.js";\n',
    'import { mergeChapterEighteenCityOfGodExpansion } from "../../core/chapterEighteenCityOfGodExpansion.js";\nimport { mergeChapterEighteenAttackOfTheClonesExpansion } from "../../core/chapterEighteenAttackOfTheClonesExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenCityOfGodScenarios = mergeChapterEighteenCityOfGodExpansion(chapterEighteenRussianArkScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenCityOfGodScenarios);",
    "const chapterEighteenCityOfGodScenarios = mergeChapterEighteenCityOfGodExpansion(chapterEighteenRussianArkScenarios);\nconst chapterEighteenAttackOfTheClonesScenarios = mergeChapterEighteenAttackOfTheClonesExpansion(chapterEighteenCityOfGodScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAttackOfTheClonesScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_city_of_god_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_city_of_god_expansion_2026+manual_chapter_eighteen_attack_of_the_clones_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now begins with source-first The Gleaners and I, In the Mood for Love, Atanarjuat and Spirited Away production cases, adding Studio Ghibli hand-drawn 2D animation with digital paint/compositing as a fourth distinct early-2000s production system.",
    "Chapter 18 now includes source-first The Gleaners and I, In the Mood for Love, Atanarjuat, Spirited Away, Russian Ark, City of God and Star Wars: Episode II - Attack of the Clones production cases, spanning DV documentary, Hong Kong photochemical/post workflows, Indigenous Arctic digital production, hand-drawn/digital animation, feature-length 24p HD one-take production, mixed-gauge Brazilian digital convergence and the first major all-digital 24p HD blockbuster workflow.",
    "Chapter 18 note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { cityOfGodProductionCaseVerification } from "./scenarioProductionVerificationCityOfGod";\n',
    'import { cityOfGodProductionCaseVerification } from "./scenarioProductionVerificationCityOfGod";\nimport { attackOfTheClonesProductionCaseVerification } from "./scenarioProductionVerificationAttackOfTheClones";\n',
    "verification import");
  t = rep(t,
    "  cityOfGodProductionCaseVerification,\n",
    "  cityOfGodProductionCaseVerification,\n  attackOfTheClonesProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { cityOfGodFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCityOfGod";\n',
    'import { cityOfGodFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCityOfGod";\nimport { attackOfTheClonesFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAttackOfTheClones";\n',
    "Film Study import");
  t = rep(t,
    "  [cityOfGodFilmHistoryProfile.scenarioId]: cityOfGodFilmHistoryProfile,\n",
    "  [cityOfGodFilmHistoryProfile.scenarioId]: cityOfGodFilmHistoryProfile,\n  [attackOfTheClonesFilmHistoryProfile.scenarioId]: attackOfTheClonesFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 499;", "const EXPECTED_PLAYABLE_SCENARIOS = 500;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 499;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 500;", "verified count");
  t = rep(t,
    '  "chapterEighteenCityOfGodExpansion.ts",\n',
    '  "chapterEighteenCityOfGodExpansion.ts",\n  "chapterEighteenAttackOfTheClonesExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 499;", "const EXPECTED_ATLAS_COUNT = 500;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenCityOfGodExpansion.ts",\n',
    '  "chapterEighteenCityOfGodExpansion.ts",\n  "chapterEighteenAttackOfTheClonesExpansion.ts",\n',
    `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("499", "500"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"Russian Ark", "City of God", "Lost in Translation",',
    '"Russian Ark", "City of God", "Star Wars: Episode II - Attack of the Clones", "Lost in Translation",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Star Wars: Episode II - Attack of the Clones", "Collateral",',
    'const exactP0Queue = [\n  "Collateral",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 42);", "assert.equal(exactExisting.length, 43);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 16);", "assert.equal(exactP0Queue.length, 15);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 39);", "assert.equal(resolved.recommendedNewProductionCases.length, 38);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
const title = "Star Wars: Episode II - Attack of the Clones";
if (ch18.atlas.actualCount !== 500 || ch18.verificationIndex.literalVerifiedScenarioIds !== 500) throw new Error("Chapter 18 did not reach 500/500");
if (!ch18.byDecision.USE_EXISTING.includes(title) || ch18.byDecision.P0.includes(title)) throw new Error("Attack of the Clones queue transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 43 || ch18.byDecision.P0.length !== 15 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 38) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Collateral") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 500, verified: 500, useExisting: 43, p0: 15, p1: 23, p2: 1, recommended: 38, nextP0: ch18.byDecision.P0[0] }, null, 2));
