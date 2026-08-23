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
    'import { mergeChapterEighteenAtanarjuatExpansion } from "../../core/chapterEighteenAtanarjuatExpansion.js";\n',
    'import { mergeChapterEighteenAtanarjuatExpansion } from "../../core/chapterEighteenAtanarjuatExpansion.js";\nimport { mergeChapterEighteenSpiritedAwayExpansion } from "../../core/chapterEighteenSpiritedAwayExpansion.js";\n',
    "filmScenarios import");
  t = rep(t,
    "const chapterEighteenAtanarjuatScenarios = mergeChapterEighteenAtanarjuatExpansion(chapterEighteenInTheMoodForLoveScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenAtanarjuatScenarios);",
    "const chapterEighteenAtanarjuatScenarios = mergeChapterEighteenAtanarjuatExpansion(chapterEighteenInTheMoodForLoveScenarios);\nconst chapterEighteenSpiritedAwayScenarios = mergeChapterEighteenSpiritedAwayExpansion(chapterEighteenAtanarjuatScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenSpiritedAwayScenarios);",
    "filmScenarios chain");
  t = rep(t,
    "+manual_chapter_eighteen_atanarjuat_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "+manual_chapter_eighteen_atanarjuat_expansion_2026+manual_chapter_eighteen_spirited_away_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
    "source list");
  t = rep(t,
    "Chapter 18 now begins with source-first The Gleaners and I, In the Mood for Love and Atanarjuat production cases, spanning small-camera documentary practice, transnational photochemical auteur production and Inuit-controlled community-based Digital Betacam feature production while keeping each production system distinct.",
    "Chapter 18 now begins with source-first The Gleaners and I, In the Mood for Love, Atanarjuat and Spirited Away production cases, adding Studio Ghibli hand-drawn 2D animation with digital paint/compositing as a fourth distinct early-2000s production system.",
    "note");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let t = read(path);
  t = rep(t,
    'import { atanarjuatProductionCaseVerification } from "./scenarioProductionVerificationAtanarjuat";\n',
    'import { atanarjuatProductionCaseVerification } from "./scenarioProductionVerificationAtanarjuat";\nimport { spiritedAwayProductionCaseVerification } from "./scenarioProductionVerificationSpiritedAway";\n',
    "verification import");
  t = rep(t,
    "  atanarjuatProductionCaseVerification,\n",
    "  atanarjuatProductionCaseVerification,\n  spiritedAwayProductionCaseVerification,\n",
    "verification entry");
  write(path, t);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let t = read(path);
  t = rep(t,
    'import { atanarjuatFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAtanarjuat";\n',
    'import { atanarjuatFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenAtanarjuat";\nimport { spiritedAwayFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenSpiritedAway";\n',
    "Film Study import");
  t = rep(t,
    "  [atanarjuatFilmHistoryProfile.scenarioId]: atanarjuatFilmHistoryProfile,\n",
    "  [atanarjuatFilmHistoryProfile.scenarioId]: atanarjuatFilmHistoryProfile,\n  [spiritedAwayFilmHistoryProfile.scenarioId]: spiritedAwayFilmHistoryProfile,\n",
    "Film Study entry");
  write(path, t);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let t = read(path);
  t = rep(t, "const EXPECTED_PLAYABLE_SCENARIOS = 496;", "const EXPECTED_PLAYABLE_SCENARIOS = 497;", "playable count");
  t = rep(t, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 496;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 497;", "verified count");
  t = rep(t,
    '  "chapterEighteenAtanarjuatExpansion.ts",\n',
    '  "chapterEighteenAtanarjuatExpansion.ts",\n  "chapterEighteenSpiritedAwayExpansion.ts",\n',
    "production audit list");
  write(path, t);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let t = read(path);
  t = rep(t, "const EXPECTED_ATLAS_COUNT = 496;", "const EXPECTED_ATLAS_COUNT = 497;", `${chapter} count`);
  t = rep(t,
    '  "chapterEighteenAtanarjuatExpansion.ts",\n',
    '  "chapterEighteenAtanarjuatExpansion.ts",\n  "chapterEighteenSpiritedAwayExpansion.ts",\n',
    `${chapter} list`);
  write(path, t);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, read(path).replaceAll("496", "497"));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let t = read(path);
  t = rep(t,
    '  "The Gleaners and I", "Platform", "Dancer in the Dark", "In the Mood for Love", "Atanarjuat: The Fast Runner", "The Son\'s Room",',
    '  "The Gleaners and I", "Platform", "Dancer in the Dark", "In the Mood for Love", "Atanarjuat: The Fast Runner", "Spirited Away", "The Son\'s Room",',
    "existing queue");
  t = rep(t,
    'const exactP0Queue = [\n  "Spirited Away", "Russian Ark",',
    'const exactP0Queue = [\n  "Russian Ark",',
    "P0 queue");
  t = rep(t, "assert.equal(exactExisting.length, 39);", "assert.equal(exactExisting.length, 40);", "existing count");
  t = rep(t, "assert.equal(exactP0Queue.length, 19);", "assert.equal(exactP0Queue.length, 18);", "P0 count");
  t = rep(t, "assert.equal(resolved.recommendedNewProductionCases.length, 42);", "assert.equal(resolved.recommendedNewProductionCases.length, 41);", "recommended count");
  write(path, t);
}

for (const chapter of chapters) {
  cp.execFileSync("node", [`scripts/film-history-chapter-${chapter}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${chapter}-atlas-resolved.json`], { stdio: "inherit" });
}
cp.execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });

const ch18 = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (ch18.atlas.actualCount !== 497 || ch18.verificationIndex.literalVerifiedScenarioIds !== 497) throw new Error("Chapter 18 did not reach 497/497");
if (!ch18.byDecision.USE_EXISTING.includes("Spirited Away") || ch18.byDecision.P0.includes("Spirited Away")) throw new Error("Spirited Away queue transition failed");
if (ch18.byDecision.USE_EXISTING.length !== 40 || ch18.byDecision.P0.length !== 18 || ch18.byDecision.P1.length !== 23 || ch18.byDecision.P2.length !== 1 || ch18.recommendedNewProductionCases.length !== 41) throw new Error("Unexpected Chapter 18 queue counts");
console.log(JSON.stringify({ atlas: 497, verified: 497, useExisting: 40, p0: 18, p1: 23, p2: 1, recommended: 41 }, null, 2));
