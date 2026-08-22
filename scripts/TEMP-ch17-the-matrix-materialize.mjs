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
  'import { mergeChapterSeventeenToyStoryExpansion } from "../../core/chapterSeventeenToyStoryExpansion.js";\n',
  'import { mergeChapterSeventeenToyStoryExpansion } from "../../core/chapterSeventeenToyStoryExpansion.js";\nimport { mergeChapterSeventeenTheMatrixExpansion } from "../../core/chapterSeventeenTheMatrixExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenToyStoryScenarios = mergeChapterSeventeenToyStoryExpansion(chapterSeventeenBanditQueenScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenToyStoryScenarios);",
  "const chapterSeventeenToyStoryScenarios = mergeChapterSeventeenToyStoryExpansion(chapterSeventeenBanditQueenScenarios);\nconst chapterSeventeenTheMatrixScenarios = mergeChapterSeventeenTheMatrixExpansion(chapterSeventeenToyStoryScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTheMatrixScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_toy_story_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_toy_story_expansion_2026+manual_chapter_seventeen_the_matrix_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { toyStoryFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenToyStory";\n',
  'import { toyStoryFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenToyStory";\nimport { theMatrixFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheMatrix";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [toyStoryFilmHistoryProfile.scenarioId]: toyStoryFilmHistoryProfile,\n",
  "  [toyStoryFilmHistoryProfile.scenarioId]: toyStoryFilmHistoryProfile,\n  [theMatrixFilmHistoryProfile.scenarioId]: theMatrixFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { toyStoryProductionCaseVerification } from "./scenarioProductionVerificationToyStory";\n',
  'import { toyStoryProductionCaseVerification } from "./scenarioProductionVerificationToyStory";\nimport { theMatrixProductionCaseVerification } from "./scenarioProductionVerificationTheMatrix";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  toyStoryProductionCaseVerification,\n",
  "  toyStoryProductionCaseVerification,\n  theMatrixProductionCaseVerification,\n",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 474;", "const EXPECTED_PLAYABLE_SCENARIOS = 475;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 474;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 475;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenToyStoryExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenToyStoryExpansion.ts",\n  "chapterSeventeenTheMatrixExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 474;", "const EXPECTED_ATLAS_COUNT = 475;");
  replaceOnce(
    script,
    '  "chapterSeventeenToyStoryExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenToyStoryExpansion.ts",\n  "chapterSeventeenTheMatrixExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "474", "475", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Central Station",\n  "Beau Travail",',
  '  "Central Station",\n  "The Matrix",\n  "Beau Travail",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP0Queue = [\n  "The Matrix",\n  "Shiri"',
  'const exactP0Queue = [\n  "Shiri"',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Ringu",\n  "The Matrix",\n  "The Blair Witch Project",',
  '  "Ringu",\n  "The Blair Witch Project",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 475 || report.atlas.actualCount !== 475) throw new Error("Chapter 17 is not 475/475");
if (report.verificationIndex.literalVerifiedScenarioIds !== 475) throw new Error("verification index is not 475");
const item = report.candidates.find((candidate) => candidate.title === "The Matrix");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_the_matrix_1999" || item.productionVerified !== true) {
  throw new Error(`The Matrix did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify(["Shiri"])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (report.byDecision.P1.length !== 16) throw new Error(`Unexpected P1 count ${report.byDecision.P1.length}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("The Matrix")) throw new Error("The Matrix still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
