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
  'import { mergeChapterSeventeenPulpFictionExpansion } from "../../core/chapterSeventeenPulpFictionExpansion.js";\n',
  'import { mergeChapterSeventeenPulpFictionExpansion } from "../../core/chapterSeventeenPulpFictionExpansion.js";\nimport { mergeChapterSeventeenHoopDreamsExpansion } from "../../core/chapterSeventeenHoopDreamsExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenPulpFictionScenarios = mergeChapterSeventeenPulpFictionExpansion(chapterSeventeenThreeColoursRedScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenPulpFictionScenarios);",
  "const chapterSeventeenPulpFictionScenarios = mergeChapterSeventeenPulpFictionExpansion(chapterSeventeenThreeColoursRedScenarios);\nconst chapterSeventeenHoopDreamsScenarios = mergeChapterSeventeenHoopDreamsExpansion(chapterSeventeenPulpFictionScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenHoopDreamsScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_pulp_fiction_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_pulp_fiction_expansion_2026+manual_chapter_seventeen_hoop_dreams_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { pulpFictionFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenPulpFiction";\n',
  'import { pulpFictionFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenPulpFiction";\nimport { hoopDreamsFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenHoopDreams";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [pulpFictionFilmHistoryProfile.scenarioId]: pulpFictionFilmHistoryProfile,\n",
  "  [pulpFictionFilmHistoryProfile.scenarioId]: pulpFictionFilmHistoryProfile,\n  [hoopDreamsFilmHistoryProfile.scenarioId]: hoopDreamsFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { pulpFictionProductionCaseVerification } from "./scenarioProductionVerificationPulpFiction";\n',
  'import { pulpFictionProductionCaseVerification } from "./scenarioProductionVerificationPulpFiction";\nimport { hoopDreamsProductionCaseVerification } from "./scenarioProductionVerificationHoopDreams";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  pulpFictionProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  pulpFictionProductionCaseVerification,\n  hoopDreamsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 482;", "const EXPECTED_PLAYABLE_SCENARIOS = 483;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 482;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 483;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenPulpFictionExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenPulpFictionExpansion.ts",\n  "chapterSeventeenHoopDreamsExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 482;", "const EXPECTED_ATLAS_COUNT = 483;");
  replaceOnce(
    script,
    '  "chapterSeventeenPulpFictionExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenPulpFictionExpansion.ts",\n  "chapterSeventeenHoopDreamsExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "482", "483", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Vive L\'Amour",\n  "Bandit Queen",\n  "Toy Story",',
  '  "Vive L\'Amour",\n  "Bandit Queen",\n  "Hoop Dreams",\n  "Toy Story",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Hoop Dreams",\n  "The White Balloon",',
  'const exactP1Queue = [\n  "The White Balloon",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "Hoop Dreams",\n  "The White Balloon",',
  'const exactRecommended = [\n  "The White Balloon",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 483 || report.atlas.actualCount !== 483) throw new Error("Chapter 17 is not 483/483");
if (report.verificationIndex.literalVerifiedScenarioIds !== 483) throw new Error("verification index is not 483");
const item = report.candidates.find((candidate) => candidate.title === "Hoop Dreams");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_hoop_dreams_1994" || item.productionVerified !== true) {
  throw new Error(`Hoop Dreams did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["The White Balloon","Fire","Titanic","Princess Mononoke","Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Hoop Dreams")) throw new Error("Hoop Dreams still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
