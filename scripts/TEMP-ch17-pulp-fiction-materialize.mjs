import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, value) { writeFileSync(path, value); }
function replaceOnce(path, from, to) {
  const source = read(path);
  const first = source.indexOf(from);
  if (first < 0) throw new Error(`${path}: missing anchor ${from.slice(0, 120)}`);
  if (source.indexOf(from, first + from.length) >= 0) throw new Error(`${path}: non-unique anchor ${from.slice(0, 120)}`);
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
  'import { mergeChapterSeventeenThreeColoursRedExpansion } from "../../core/chapterSeventeenThreeColoursRedExpansion.js";\n',
  'import { mergeChapterSeventeenThreeColoursRedExpansion } from "../../core/chapterSeventeenThreeColoursRedExpansion.js";\nimport { mergeChapterSeventeenPulpFictionExpansion } from "../../core/chapterSeventeenPulpFictionExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenThreeColoursRedScenarios = mergeChapterSeventeenThreeColoursRedExpansion(chapterSeventeenThePianoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenThreeColoursRedScenarios);",
  "const chapterSeventeenThreeColoursRedScenarios = mergeChapterSeventeenThreeColoursRedExpansion(chapterSeventeenThePianoScenarios);\nconst chapterSeventeenPulpFictionScenarios = mergeChapterSeventeenPulpFictionExpansion(chapterSeventeenThreeColoursRedScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenPulpFictionScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_three_colours_red_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_three_colours_red_expansion_2026+manual_chapter_seventeen_pulp_fiction_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { threeColoursRedFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenThreeColoursRed";\n',
  'import { threeColoursRedFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenThreeColoursRed";\nimport { pulpFictionFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenPulpFiction";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [threeColoursRedFilmHistoryProfile.scenarioId]: threeColoursRedFilmHistoryProfile,\n",
  "  [threeColoursRedFilmHistoryProfile.scenarioId]: threeColoursRedFilmHistoryProfile,\n  [pulpFictionFilmHistoryProfile.scenarioId]: pulpFictionFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { threeColoursRedProductionCaseVerification } from "./scenarioProductionVerificationThreeColoursRed";\n',
  'import { threeColoursRedProductionCaseVerification } from "./scenarioProductionVerificationThreeColoursRed";\nimport { pulpFictionProductionCaseVerification } from "./scenarioProductionVerificationPulpFiction";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  threeColoursRedProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  threeColoursRedProductionCaseVerification,\n  pulpFictionProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 481;", "const EXPECTED_PLAYABLE_SCENARIOS = 482;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 481;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 482;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenThreeColoursRedExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenThreeColoursRedExpansion.ts",\n  "chapterSeventeenPulpFictionExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 481;", "const EXPECTED_ATLAS_COUNT = 482;");
  replaceOnce(
    script,
    '  "chapterSeventeenThreeColoursRedExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenThreeColoursRedExpansion.ts",\n  "chapterSeventeenPulpFictionExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "481", "482", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Three Colours: Red",\n  "Chungking Express",\n  "Vive L\'Amour",',
  '  "Three Colours: Red",\n  "Chungking Express",\n  "Pulp Fiction",\n  "Vive L\'Amour",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Pulp Fiction",\n  "Hoop Dreams",',
  'const exactP1Queue = [\n  "Hoop Dreams",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "Pulp Fiction",\n  "Hoop Dreams",',
  'const exactRecommended = [\n  "Hoop Dreams",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 482 || report.atlas.actualCount !== 482) throw new Error("Chapter 17 is not 482/482");
if (report.verificationIndex.literalVerifiedScenarioIds !== 482) throw new Error("verification index is not 482");
const item = report.candidates.find((candidate) => candidate.title === "Pulp Fiction");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_pulp_fiction_1994" || item.productionVerified !== true) {
  throw new Error(`Pulp Fiction did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["Hoop Dreams","The White Balloon","Fire","Titanic","Princess Mononoke","Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Pulp Fiction")) throw new Error("Pulp Fiction still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
