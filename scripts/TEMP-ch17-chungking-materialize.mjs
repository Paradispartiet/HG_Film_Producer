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
  'import { mergeChapterSeventeenSankofaExpansion } from "../../core/chapterSeventeenSankofaExpansion.js";\n',
  'import { mergeChapterSeventeenSankofaExpansion } from "../../core/chapterSeventeenSankofaExpansion.js";\nimport { mergeChapterSeventeenChungkingExpressExpansion } from "../../core/chapterSeventeenChungkingExpressExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenSankofaScenarios = mergeChapterSeventeenSankofaExpansion(chapterSeventeenHyenasScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenSankofaScenarios);",
  "const chapterSeventeenSankofaScenarios = mergeChapterSeventeenSankofaExpansion(chapterSeventeenHyenasScenarios);\nconst chapterSeventeenChungkingExpressScenarios = mergeChapterSeventeenChungkingExpressExpansion(chapterSeventeenSankofaScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenChungkingExpressScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_sankofa_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_sankofa_expansion_2026+manual_chapter_seventeen_chungking_express_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { sankofaFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenSankofa";\n',
  'import { sankofaFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenSankofa";\nimport { chungkingExpressFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenChungkingExpress";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [sankofaFilmHistoryProfile.scenarioId]: sankofaFilmHistoryProfile,\n",
  "  [sankofaFilmHistoryProfile.scenarioId]: sankofaFilmHistoryProfile,\n  [chungkingExpressFilmHistoryProfile.scenarioId]: chungkingExpressFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { sankofaProductionCaseVerification } from "./scenarioProductionVerificationSankofa";\n',
  'import { sankofaProductionCaseVerification } from "./scenarioProductionVerificationSankofa";\nimport { chungkingExpressProductionCaseVerification } from "./scenarioProductionVerificationChungkingExpress";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  sankofaProductionCaseVerification,\n",
  "  sankofaProductionCaseVerification,\n  chungkingExpressProductionCaseVerification,\n",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 471;", "const EXPECTED_PLAYABLE_SCENARIOS = 472;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 471;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 472;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenSankofaExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenSankofaExpansion.ts",\n  "chapterSeventeenChungkingExpressExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 471;", "const EXPECTED_ATLAS_COUNT = 472;");
  replaceOnce(
    script,
    '  "chapterSeventeenSankofaExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenSankofaExpansion.ts",\n  "chapterSeventeenChungkingExpressExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "471", "472", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Naked",\n  "Vive L\'Amour",',
  '  "Naked",\n  "Chungking Express",\n  "Vive L\'Amour",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP0Queue = [\n  "Chungking Express",\n  "Bandit Queen",',
  'const exactP0Queue = [\n  "Bandit Queen",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "My Own Private Idaho",\n  "Boyz n the Hood",\n  "The Living End",\n  "The Piano",\n  "Three Colours: Red",\n  "Chungking Express",\n  "Pulp Fiction",',
  'const exactRecommended = [\n  "My Own Private Idaho",\n  "Boyz n the Hood",\n  "The Living End",\n  "The Piano",\n  "Three Colours: Red",\n  "Pulp Fiction",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 472 || report.atlas.actualCount !== 472) throw new Error("Chapter 17 is not 472/472");
if (report.verificationIndex.literalVerifiedScenarioIds !== 472) throw new Error("verification index is not 472");
const item = report.candidates.find((candidate) => candidate.title === "Chungking Express");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_chungking_express_1994" || item.productionVerified !== true) {
  throw new Error(`Chungking Express did not resolve correctly: ${JSON.stringify(item)}`);
}
const expectedP0 = ["Bandit Queen", "Toy Story", "The Matrix", "Shiri"];
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify(expectedP0)) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (report.byDecision.P1.length !== 16) throw new Error(`Unexpected P1 count ${report.byDecision.P1.length}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Chungking Express")) throw new Error("Chungking Express still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
