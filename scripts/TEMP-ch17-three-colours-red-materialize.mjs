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
  'import { mergeChapterSeventeenThePianoExpansion } from "../../core/chapterSeventeenThePianoExpansion.js";\n',
  'import { mergeChapterSeventeenThePianoExpansion } from "../../core/chapterSeventeenThePianoExpansion.js";\nimport { mergeChapterSeventeenThreeColoursRedExpansion } from "../../core/chapterSeventeenThreeColoursRedExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenThePianoScenarios = mergeChapterSeventeenThePianoExpansion(chapterSeventeenTheLivingEndScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenThePianoScenarios);",
  "const chapterSeventeenThePianoScenarios = mergeChapterSeventeenThePianoExpansion(chapterSeventeenTheLivingEndScenarios);\nconst chapterSeventeenThreeColoursRedScenarios = mergeChapterSeventeenThreeColoursRedExpansion(chapterSeventeenThePianoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenThreeColoursRedScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_the_piano_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_the_piano_expansion_2026+manual_chapter_seventeen_three_colours_red_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { thePianoFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenThePiano";\n',
  'import { thePianoFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenThePiano";\nimport { threeColoursRedFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenThreeColoursRed";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [thePianoFilmHistoryProfile.scenarioId]: thePianoFilmHistoryProfile,\n",
  "  [thePianoFilmHistoryProfile.scenarioId]: thePianoFilmHistoryProfile,\n  [threeColoursRedFilmHistoryProfile.scenarioId]: threeColoursRedFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { thePianoProductionCaseVerification } from "./scenarioProductionVerificationThePiano";\n',
  'import { thePianoProductionCaseVerification } from "./scenarioProductionVerificationThePiano";\nimport { threeColoursRedProductionCaseVerification } from "./scenarioProductionVerificationThreeColoursRed";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  thePianoProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  thePianoProductionCaseVerification,\n  threeColoursRedProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 480;", "const EXPECTED_PLAYABLE_SCENARIOS = 481;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 480;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 481;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenThePianoExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenThePianoExpansion.ts",\n  "chapterSeventeenThreeColoursRedExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 480;", "const EXPECTED_ATLAS_COUNT = 481;");
  replaceOnce(
    script,
    '  "chapterSeventeenThePianoExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenThePianoExpansion.ts",\n  "chapterSeventeenThreeColoursRedExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "480", "481", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "The Piano",\n  "Naked",\n  "Chungking Express",',
  '  "The Piano",\n  "Naked",\n  "Three Colours: Red",\n  "Chungking Express",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Three Colours: Red",\n  "Pulp Fiction",',
  'const exactP1Queue = [\n  "Pulp Fiction",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "Three Colours: Red",\n  "Pulp Fiction",',
  'const exactRecommended = [\n  "Pulp Fiction",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 481 || report.atlas.actualCount !== 481) throw new Error("Chapter 17 is not 481/481");
if (report.verificationIndex.literalVerifiedScenarioIds !== 481) throw new Error("verification index is not 481");
const item = report.candidates.find((candidate) => candidate.title === "Three Colours: Red");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_three_colours_red_1994" || item.productionVerified !== true) {
  throw new Error(`Three Colours: Red did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["Pulp Fiction","Hoop Dreams","The White Balloon","Fire","Titanic","Princess Mononoke","Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Three Colours: Red")) throw new Error("Three Colours: Red still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
