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
  'import { mergeChapterSeventeenTitanicExpansion } from "../../core/chapterSeventeenTitanicExpansion.js";\n',
  'import { mergeChapterSeventeenTitanicExpansion } from "../../core/chapterSeventeenTitanicExpansion.js";\nimport { mergeChapterSeventeenPrincessMononokeExpansion } from "../../core/chapterSeventeenPrincessMononokeExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenTitanicScenarios = mergeChapterSeventeenTitanicExpansion(chapterSeventeenFireScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTitanicScenarios);",
  "const chapterSeventeenTitanicScenarios = mergeChapterSeventeenTitanicExpansion(chapterSeventeenFireScenarios);\nconst chapterSeventeenPrincessMononokeScenarios = mergeChapterSeventeenPrincessMononokeExpansion(chapterSeventeenTitanicScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenPrincessMononokeScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_titanic_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_titanic_expansion_2026+manual_chapter_seventeen_princess_mononoke_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { titanicFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTitanic";\n',
  'import { titanicFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTitanic";\nimport { princessMononokeFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenPrincessMononoke";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [titanicFilmHistoryProfile.scenarioId]: titanicFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [titanicFilmHistoryProfile.scenarioId]: titanicFilmHistoryProfile,\n  [princessMononokeFilmHistoryProfile.scenarioId]: princessMononokeFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { titanicProductionCaseVerification } from "./scenarioProductionVerificationTitanic";\n',
  'import { titanicProductionCaseVerification } from "./scenarioProductionVerificationTitanic";\nimport { princessMononokeProductionCaseVerification } from "./scenarioProductionVerificationPrincessMononoke";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  titanicProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  titanicProductionCaseVerification,\n  princessMononokeProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 486;", "const EXPECTED_PLAYABLE_SCENARIOS = 487;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 486;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 487;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenTitanicExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenTitanicExpansion.ts",\n  "chapterSeventeenPrincessMononokeExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 486;", "const EXPECTED_ATLAS_COUNT = 487;");
  replaceOnce(
    script,
    '  "chapterSeventeenTitanicExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenTitanicExpansion.ts",\n  "chapterSeventeenPrincessMononokeExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "486", "487", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Titanic",\n  "Festen",',
  '  "Titanic",\n  "Princess Mononoke",\n  "Festen",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Princess Mononoke",\n  "Eve\'s Bayou",',
  'const exactP1Queue = [\n  "Eve\'s Bayou",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "Princess Mononoke",\n  "Eve\'s Bayou",',
  'const exactRecommended = [\n  "Eve\'s Bayou",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 487 || report.atlas.actualCount !== 487) throw new Error("Chapter 17 is not 487/487");
if (report.verificationIndex.literalVerifiedScenarioIds !== 487) throw new Error("verification index is not 487");
const item = report.candidates.find((candidate) => candidate.title === "Princess Mononoke");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_princess_mononoke_1997" || item.productionVerified !== true) {
  throw new Error(`Princess Mononoke did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Princess Mononoke")) throw new Error("Princess Mononoke still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
