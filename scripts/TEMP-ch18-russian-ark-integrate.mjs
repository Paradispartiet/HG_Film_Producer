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
    'import { mergeChapterEighteenSpiritedAwayExpansion } from "../../core/chapterEighteenSpiritedAwayExpansion.js";\n',
    'import { mergeChapterEighteenSpiritedAwayExpansion } from "../../core/chapterEighteenSpiritedAwayExpansion.js";\nimport { mergeChapterEighteenRussianArkExpansion } from "../../core/chapterEighteenRussianArkExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenSpiritedAwayScenarios = mergeChapterEighteenSpiritedAwayExpansion(chapterEighteenAtanarjuatScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenSpiritedAwayScenarios);",
    "const chapterEighteenSpiritedAwayScenarios = mergeChapterEighteenSpiritedAwayExpansion(chapterEighteenAtanarjuatScenarios);\nconst chapterEighteenRussianArkScenarios = mergeChapterEighteenRussianArkExpansion(chapterEighteenSpiritedAwayScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenRussianArkScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_spirited_away_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_spirited_away_expansion_2026+manual_chapter_eighteen_russian_ark_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { spiritedAwayProductionCaseVerification } from "./scenarioProductionVerificationSpiritedAway";\n',
    'import { spiritedAwayProductionCaseVerification } from "./scenarioProductionVerificationSpiritedAway";\nimport { russianArkProductionCaseVerification } from "./scenarioProductionVerificationRussianArk";\n',
    "verification import");
  t = rep(t,
    "  spiritedAwayProductionCaseVerification,\n",
    "  spiritedAwayProductionCaseVerification,\n  russianArkProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { spiritedAwayFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSpiritedAway";\n',
    'import { spiritedAwayFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSpiritedAway";\nimport { russianArkFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenRussianArk";\n',
    "Film Study import");
  t = rep(t,
    "  [spiritedAwayFilmHistoryProfile.scenarioId]: spiritedAwayFilmHistoryProfile,\n",
    "  [spiritedAwayFilmHistoryProfile.scenarioId]: spiritedAwayFilmHistoryProfile,\n  [russianArkFilmHistoryProfile.scenarioId]: russianArkFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 497;", "const EXPECTED_PLAYABLE_SCENARIOS = 498;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 497;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 498;", "verified count");
  t = rep(t,
    '  "chapterEighteenSpiritedAwayExpansion.ts",\n',
    '  "chapterEighteenSpiritedAwayExpansion.ts",\n  "chapterEighteenRussianArkExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 497;", "const EXPECTED_ATLAS_COUNT = 498;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenSpiritedAwayExpansion.ts",\n',
    '  "chapterEighteenSpiritedAwayExpansion.ts",\n  "chapterEighteenRussianArkExpansion.ts",\n',
    `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("497", "498"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '"Atanarjuat: The Fast Runner", "Spirited Away", "The Son\'s Room", "Millennium Mambo", "Lost in Translation",',
    '"Atanarjuat: The Fast Runner", "Spirited Away", "The Son\'s Room", "Millennium Mambo", "Russian Ark", "Lost in Translation",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Russian Ark", "City of God",',
    'const exactP0Queue = [\n  "City of God",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 40);", "assert.equal(exactExisting.length, 41);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 18);", "assert.equal(exactP0Queue.length, 17);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 41);", "assert.equal(resolved.recommendedNewProductionCases.length, 40);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 498 || ch18.verificationIndex.literalVerifiedScenarioIds !== 498) throw new Error("Chapter 18 did not reach 498/498");
if (!ch18.byDecision.USE_EXISTING.includes("Russian Ark") || ch18.byDecision.P0.includes("Russian Ark")) throw new Error("Russian Ark queue transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 41 || ch18.byDecision.P0.length !== 17 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 40) throw new Error("Unexpected Chapter 18 queue counts");
console.log(JSON.stringify({ atlas: 498, verified: 498, useExisting: 41, p0: 17, p1: 23, p2: 1, recommended: 40 }, null, 2));
