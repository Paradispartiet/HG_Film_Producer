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
    'import { mergeChapterEighteenRussianArkExpansion } from "../../core/chapterEighteenRussianArkExpansion.js";\n',
    'import { mergeChapterEighteenRussianArkExpansion } from "../../core/chapterEighteenRussianArkExpansion.js";\nimport { mergeChapterEighteenCityOfGodExpansion } from "../../core/chapterEighteenCityOfGodExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenRussianArkScenarios = mergeChapterEighteenRussianArkExpansion(chapterEighteenSpiritedAwayScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenRussianArkScenarios);",
    "const chapterEighteenRussianArkScenarios = mergeChapterEighteenRussianArkExpansion(chapterEighteenSpiritedAwayScenarios);\nconst chapterEighteenCityOfGodScenarios = mergeChapterEighteenCityOfGodExpansion(chapterEighteenRussianArkScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenCityOfGodScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_russian_ark_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_russian_ark_expansion_2026+manual_chapter_eighteen_city_of_god_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { russianArkProductionCaseVerification } from "./scenarioProductionVerificationRussianArk";\n',
    'import { russianArkProductionCaseVerification } from "./scenarioProductionVerificationRussianArk";\nimport { cityOfGodProductionCaseVerification } from "./scenarioProductionVerificationCityOfGod";\n',
    "verification import");
  t = rep(t,
    "  russianArkProductionCaseVerification,\n",
    "  russianArkProductionCaseVerification,\n  cityOfGodProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { russianArkFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenRussianArk";\n',
    'import { russianArkFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenRussianArk";\nimport { cityOfGodFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCityOfGod";\n',
    "Film Study import");
  t = rep(t,
    "  [russianArkFilmHistoryProfile.scenarioId]: russianArkFilmHistoryProfile,\n",
    "  [russianArkFilmHistoryProfile.scenarioId]: russianArkFilmHistoryProfile,\n  [cityOfGodFilmHistoryProfile.scenarioId]: cityOfGodFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 498;", "const EXPECTED_PLAYABLE_SCENARIOS = 499;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 498;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 499;", "verified count");
  t = rep(t,
    '  "chapterEighteenRussianArkExpansion.ts",\n',
    '  "chapterEighteenRussianArkExpansion.ts",\n  "chapterEighteenCityOfGodExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 498;", "const EXPECTED_ATLAS_COUNT = 499;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenRussianArkExpansion.ts",\n',
    '  "chapterEighteenRussianArkExpansion.ts",\n  "chapterEighteenCityOfGodExpansion.ts",\n',
    `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("498", "499"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"The Son\'s Room", "Millennium Mambo", "Russian Ark", "Lost in Translation",',
    '"The Son\'s Room", "Millennium Mambo", "Russian Ark", "City of God", "Lost in Translation",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "City of God",\n  "Star Wars: Episode II - Attack of the Clones",',
    'const exactP0Queue = [\n  "Star Wars: Episode II - Attack of the Clones",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 41);", "assert.equal(exactExisting.length, 42);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 17);", "assert.equal(exactP0Queue.length, 16);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 40);", "assert.equal(resolved.recommendedNewProductionCases.length, 39);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 499 || ch18.verificationIndex.literalVerifiedScenarioIds !== 499) throw new Error("Chapter 18 did not reach 499/499");
if (!ch18.byDecision.USE_EXISTING.includes("City of God") || ch18.byDecision.P0.includes("City of God")) throw new Error("City of God queue transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 42 || ch18.byDecision.P0.length !== 16 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 39) throw new Error("Unexpected Chapter 18 queue counts");
if (ch18.byDecision.P0[0] !== "Star Wars: Episode II - Attack of the Clones") throw new Error("Unexpected next Chapter 18 P0");
console.log(JSON.stringify({ atlas: 499, verified: 499, useExisting: 42, p0: 16, p1: 23, p2: 1, recommended: 39, nextP0: ch18.byDecision.P0[0] }, null, 2));
