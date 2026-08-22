import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, value) { writeFileSync(path, value); }
function replaceOnce(path, from, to) {
  const source = read(path);
  const first = source.indexOf(from);
  if (first < 0) throw new Error(`${path}: missing anchor ${from.slice(0, 100)}`);
  if (source.indexOf(from, first + from.length) >= 0) throw new Error(`${path}: non-unique anchor ${from.slice(0, 100)}`);
  write(path, source.slice(0, first) + to + source.slice(first + from.length));
}
function replaceAllLiteral(path, from, to, minCount = 1) {
  const source = read(path);
  const count = source.split(from).length - 1;
  if (count < minCount) throw new Error(`${path}: expected >=${minCount} ${from}, found ${count}`);
  write(path, source.split(from).join(to));
}

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterSeventeenChungkingExpressExpansion } from "../../core/chapterSeventeenChungkingExpressExpansion.js";\n',
  'import { mergeChapterSeventeenChungkingExpressExpansion } from "../../core/chapterSeventeenChungkingExpressExpansion.js";\nimport { mergeChapterSeventeenBanditQueenExpansion } from "../../core/chapterSeventeenBanditQueenExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenChungkingExpressScenarios = mergeChapterSeventeenChungkingExpressExpansion(chapterSeventeenSankofaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenChungkingExpressScenarios);",
  "const chapterSeventeenChungkingExpressScenarios = mergeChapterSeventeenChungkingExpressExpansion(chapterSeventeenSankofaScenarios);\nconst chapterSeventeenBanditQueenScenarios = mergeChapterSeventeenBanditQueenExpansion(chapterSeventeenChungkingExpressScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenBanditQueenScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_chungking_express_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_chungking_express_expansion_2026+manual_chapter_seventeen_bandit_queen_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { chungkingExpressFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenChungkingExpress";\n',
  'import { chungkingExpressFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenChungkingExpress";\nimport { banditQueenFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBanditQueen";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [chungkingExpressFilmHistoryProfile.scenarioId]: chungkingExpressFilmHistoryProfile,\n",
  "  [chungkingExpressFilmHistoryProfile.scenarioId]: chungkingExpressFilmHistoryProfile,\n  [banditQueenFilmHistoryProfile.scenarioId]: banditQueenFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { chungkingExpressProductionCaseVerification } from "./scenarioProductionVerificationChungkingExpress";\n',
  'import { chungkingExpressProductionCaseVerification } from "./scenarioProductionVerificationChungkingExpress";\nimport { banditQueenProductionCaseVerification } from "./scenarioProductionVerificationBanditQueen";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  chungkingExpressProductionCaseVerification,\n",
  "  chungkingExpressProductionCaseVerification,\n  banditQueenProductionCaseVerification,\n",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 472;", "const EXPECTED_PLAYABLE_SCENARIOS = 473;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 472;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 473;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenChungkingExpressExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenChungkingExpressExpansion.ts",\n  "chapterSeventeenBanditQueenExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 472;", "const EXPECTED_ATLAS_COUNT = 473;");
  replaceOnce(
    script,
    '  "chapterSeventeenChungkingExpressExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenChungkingExpressExpansion.ts",\n  "chapterSeventeenBanditQueenExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "472", "473", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Chungking Express",\n  "Vive L\'Amour",\n  "Safe",',
  '  "Chungking Express",\n  "Vive L\'Amour",\n  "Bandit Queen",\n  "Safe",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP0Queue = [\n  "Bandit Queen",\n  "Toy Story",',
  'const exactP0Queue = [\n  "Toy Story",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "My Own Private Idaho",\n  "Boyz n the Hood",\n  "The Living End",\n  "The Piano",\n  "Three Colours: Red",\n  "Pulp Fiction",\n  "Bandit Queen",\n  "Hoop Dreams",',
  'const exactRecommended = [\n  "My Own Private Idaho",\n  "Boyz n the Hood",\n  "The Living End",\n  "The Piano",\n  "Three Colours: Red",\n  "Pulp Fiction",\n  "Hoop Dreams",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 473 || report.atlas.actualCount !== 473) throw new Error("Chapter 17 is not 473/473");
if (report.verificationIndex.literalVerifiedScenarioIds !== 473) throw new Error("verification index is not 473");
const item = report.candidates.find((candidate) => candidate.title === "Bandit Queen");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_bandit_queen_1994" || item.productionVerified !== true) {
  throw new Error(`Bandit Queen did not resolve correctly: ${JSON.stringify(item)}`);
}
const expectedP0 = ["Toy Story", "The Matrix", "Shiri"];
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify(expectedP0)) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (report.byDecision.P1.length !== 16) throw new Error(`Unexpected P1 count ${report.byDecision.P1.length}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Bandit Queen")) throw new Error("Bandit Queen still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
