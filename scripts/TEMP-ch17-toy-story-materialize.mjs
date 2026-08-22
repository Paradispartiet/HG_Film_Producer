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
  'import { mergeChapterSeventeenBanditQueenExpansion } from "../../core/chapterSeventeenBanditQueenExpansion.js";\n',
  'import { mergeChapterSeventeenBanditQueenExpansion } from "../../core/chapterSeventeenBanditQueenExpansion.js";\nimport { mergeChapterSeventeenToyStoryExpansion } from "../../core/chapterSeventeenToyStoryExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenBanditQueenScenarios = mergeChapterSeventeenBanditQueenExpansion(chapterSeventeenChungkingExpressScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenBanditQueenScenarios);",
  "const chapterSeventeenBanditQueenScenarios = mergeChapterSeventeenBanditQueenExpansion(chapterSeventeenChungkingExpressScenarios);\nconst chapterSeventeenToyStoryScenarios = mergeChapterSeventeenToyStoryExpansion(chapterSeventeenBanditQueenScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenToyStoryScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_bandit_queen_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_bandit_queen_expansion_2026+manual_chapter_seventeen_toy_story_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { banditQueenFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBanditQueen";\n',
  'import { banditQueenFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBanditQueen";\nimport { toyStoryFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenToyStory";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [banditQueenFilmHistoryProfile.scenarioId]: banditQueenFilmHistoryProfile,\n",
  "  [banditQueenFilmHistoryProfile.scenarioId]: banditQueenFilmHistoryProfile,\n  [toyStoryFilmHistoryProfile.scenarioId]: toyStoryFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { banditQueenProductionCaseVerification } from "./scenarioProductionVerificationBanditQueen";\n',
  'import { banditQueenProductionCaseVerification } from "./scenarioProductionVerificationBanditQueen";\nimport { toyStoryProductionCaseVerification } from "./scenarioProductionVerificationToyStory";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  banditQueenProductionCaseVerification,\n",
  "  banditQueenProductionCaseVerification,\n  toyStoryProductionCaseVerification,\n",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 473;", "const EXPECTED_PLAYABLE_SCENARIOS = 474;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 473;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 474;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenBanditQueenExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenBanditQueenExpansion.ts",\n  "chapterSeventeenToyStoryExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 473;", "const EXPECTED_ATLAS_COUNT = 474;");
  replaceOnce(
    script,
    '  "chapterSeventeenBanditQueenExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenBanditQueenExpansion.ts",\n  "chapterSeventeenToyStoryExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "473", "474", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Bandit Queen",\n  "Safe",',
  '  "Bandit Queen",\n  "Toy Story",\n  "Safe",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP0Queue = [\n  "Toy Story",\n  "The Matrix",',
  'const exactP0Queue = [\n  "The Matrix",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Hoop Dreams",\n  "Toy Story",\n  "The White Balloon",',
  '  "Hoop Dreams",\n  "The White Balloon",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 474 || report.atlas.actualCount !== 474) throw new Error("Chapter 17 is not 474/474");
if (report.verificationIndex.literalVerifiedScenarioIds !== 474) throw new Error("verification index is not 474");
const item = report.candidates.find((candidate) => candidate.title === "Toy Story");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_toy_story_1995" || item.productionVerified !== true) {
  throw new Error(`Toy Story did not resolve correctly: ${JSON.stringify(item)}`);
}
const expectedP0 = ["The Matrix", "Shiri"];
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify(expectedP0)) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (report.byDecision.P1.length !== 16) throw new Error(`Unexpected P1 count ${report.byDecision.P1.length}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Toy Story")) throw new Error("Toy Story still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
