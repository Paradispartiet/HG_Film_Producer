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
  'import { mergeChapterSeventeenTheLivingEndExpansion } from "../../core/chapterSeventeenTheLivingEndExpansion.js";\n',
  'import { mergeChapterSeventeenTheLivingEndExpansion } from "../../core/chapterSeventeenTheLivingEndExpansion.js";\nimport { mergeChapterSeventeenThePianoExpansion } from "../../core/chapterSeventeenThePianoExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenTheLivingEndScenarios = mergeChapterSeventeenTheLivingEndExpansion(chapterSeventeenBoyzNTheHoodScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTheLivingEndScenarios);",
  "const chapterSeventeenTheLivingEndScenarios = mergeChapterSeventeenTheLivingEndExpansion(chapterSeventeenBoyzNTheHoodScenarios);\nconst chapterSeventeenThePianoScenarios = mergeChapterSeventeenThePianoExpansion(chapterSeventeenTheLivingEndScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenThePianoScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_the_living_end_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_the_living_end_expansion_2026+manual_chapter_seventeen_the_piano_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theLivingEndFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheLivingEnd";\n',
  'import { theLivingEndFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheLivingEnd";\nimport { thePianoFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenThePiano";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [theLivingEndFilmHistoryProfile.scenarioId]: theLivingEndFilmHistoryProfile,\n",
  "  [theLivingEndFilmHistoryProfile.scenarioId]: theLivingEndFilmHistoryProfile,\n  [thePianoFilmHistoryProfile.scenarioId]: thePianoFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theLivingEndProductionCaseVerification } from "./scenarioProductionVerificationTheLivingEnd";\n',
  'import { theLivingEndProductionCaseVerification } from "./scenarioProductionVerificationTheLivingEnd";\nimport { thePianoProductionCaseVerification } from "./scenarioProductionVerificationThePiano";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  theLivingEndProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  theLivingEndProductionCaseVerification,\n  thePianoProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 479;", "const EXPECTED_PLAYABLE_SCENARIOS = 480;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 479;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 480;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenTheLivingEndExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenTheLivingEndExpansion.ts",\n  "chapterSeventeenThePianoExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 479;", "const EXPECTED_ATLAS_COUNT = 480;");
  replaceOnce(
    script,
    '  "chapterSeventeenTheLivingEndExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenTheLivingEndExpansion.ts",\n  "chapterSeventeenThePianoExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "479", "480", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Sankofa",\n  "Farewell My Concubine",\n  "Naked",',
  '  "Sankofa",\n  "Farewell My Concubine",\n  "The Piano",\n  "Naked",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "The Piano",\n  "Three Colours: Red",',
  'const exactP1Queue = [\n  "Three Colours: Red",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "The Piano",\n  "Three Colours: Red",',
  'const exactRecommended = [\n  "Three Colours: Red",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 480 || report.atlas.actualCount !== 480) throw new Error("Chapter 17 is not 480/480");
if (report.verificationIndex.literalVerifiedScenarioIds !== 480) throw new Error("verification index is not 480");
const item = report.candidates.find((candidate) => candidate.title === "The Piano");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_the_piano_1993" || item.productionVerified !== true) {
  throw new Error(`The Piano did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["Three Colours: Red","Pulp Fiction","Hoop Dreams","The White Balloon","Fire","Titanic","Princess Mononoke","Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("The Piano")) throw new Error("The Piano still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
