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
  'import { mergeChapterSeventeenFireExpansion } from "../../core/chapterSeventeenFireExpansion.js";\n',
  'import { mergeChapterSeventeenFireExpansion } from "../../core/chapterSeventeenFireExpansion.js";\nimport { mergeChapterSeventeenTitanicExpansion } from "../../core/chapterSeventeenTitanicExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenFireScenarios = mergeChapterSeventeenFireExpansion(chapterSeventeenTheWhiteBalloonScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenFireScenarios);",
  "const chapterSeventeenFireScenarios = mergeChapterSeventeenFireExpansion(chapterSeventeenTheWhiteBalloonScenarios);\nconst chapterSeventeenTitanicScenarios = mergeChapterSeventeenTitanicExpansion(chapterSeventeenFireScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTitanicScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_fire_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_fire_expansion_2026+manual_chapter_seventeen_titanic_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { fireFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenFire";\n',
  'import { fireFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenFire";\nimport { titanicFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTitanic";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [fireFilmHistoryProfile.scenarioId]: fireFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [fireFilmHistoryProfile.scenarioId]: fireFilmHistoryProfile,\n  [titanicFilmHistoryProfile.scenarioId]: titanicFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { fireProductionCaseVerification } from "./scenarioProductionVerificationFire";\n',
  'import { fireProductionCaseVerification } from "./scenarioProductionVerificationFire";\nimport { titanicProductionCaseVerification } from "./scenarioProductionVerificationTitanic";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  fireProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  fireProductionCaseVerification,\n  titanicProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 485;", "const EXPECTED_PLAYABLE_SCENARIOS = 486;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 485;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 486;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenFireExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenFireExpansion.ts",\n  "chapterSeventeenTitanicExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 485;", "const EXPECTED_ATLAS_COUNT = 486;");
  replaceOnce(
    script,
    '  "chapterSeventeenFireExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenFireExpansion.ts",\n  "chapterSeventeenTitanicExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "485", "486", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Cure",\n  "Festen",',
  '  "Cure",\n  "Titanic",\n  "Festen",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Titanic",\n  "Princess Mononoke",',
  'const exactP1Queue = [\n  "Princess Mononoke",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "Titanic",\n  "Princess Mononoke",',
  'const exactRecommended = [\n  "Princess Mononoke",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 486 || report.atlas.actualCount !== 486) throw new Error("Chapter 17 is not 486/486");
if (report.verificationIndex.literalVerifiedScenarioIds !== 486) throw new Error("verification index is not 486");
const item = report.candidates.find((candidate) => candidate.title === "Titanic");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_titanic_1997" || item.productionVerified !== true) {
  throw new Error(`Titanic did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["Princess Mononoke","Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Titanic")) throw new Error("Titanic still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
