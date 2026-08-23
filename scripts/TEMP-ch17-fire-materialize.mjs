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
  'import { mergeChapterSeventeenTheWhiteBalloonExpansion } from "../../core/chapterSeventeenTheWhiteBalloonExpansion.js";\n',
  'import { mergeChapterSeventeenTheWhiteBalloonExpansion } from "../../core/chapterSeventeenTheWhiteBalloonExpansion.js";\nimport { mergeChapterSeventeenFireExpansion } from "../../core/chapterSeventeenFireExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenTheWhiteBalloonScenarios = mergeChapterSeventeenTheWhiteBalloonExpansion(chapterSeventeenHoopDreamsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTheWhiteBalloonScenarios);",
  "const chapterSeventeenTheWhiteBalloonScenarios = mergeChapterSeventeenTheWhiteBalloonExpansion(chapterSeventeenHoopDreamsScenarios);\nconst chapterSeventeenFireScenarios = mergeChapterSeventeenFireExpansion(chapterSeventeenTheWhiteBalloonScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenFireScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_the_white_balloon_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_the_white_balloon_expansion_2026+manual_chapter_seventeen_fire_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theWhiteBalloonFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheWhiteBalloon";\n',
  'import { theWhiteBalloonFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheWhiteBalloon";\nimport { fireFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenFire";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [theWhiteBalloonFilmHistoryProfile.scenarioId]: theWhiteBalloonFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [theWhiteBalloonFilmHistoryProfile.scenarioId]: theWhiteBalloonFilmHistoryProfile,\n  [fireFilmHistoryProfile.scenarioId]: fireFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theWhiteBalloonProductionCaseVerification } from "./scenarioProductionVerificationTheWhiteBalloon";\n',
  'import { theWhiteBalloonProductionCaseVerification } from "./scenarioProductionVerificationTheWhiteBalloon";\nimport { fireProductionCaseVerification } from "./scenarioProductionVerificationFire";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  theWhiteBalloonProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  theWhiteBalloonProductionCaseVerification,\n  fireProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 484;", "const EXPECTED_PLAYABLE_SCENARIOS = 485;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 484;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 485;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenTheWhiteBalloonExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenTheWhiteBalloonExpansion.ts",\n  "chapterSeventeenFireExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 484;", "const EXPECTED_ATLAS_COUNT = 485;");
  replaceOnce(
    script,
    '  "chapterSeventeenTheWhiteBalloonExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenTheWhiteBalloonExpansion.ts",\n  "chapterSeventeenFireExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "484", "485", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Trainspotting",\n  "Taste of Cherry",',
  '  "Trainspotting",\n  "Fire",\n  "Taste of Cherry",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Fire",\n  "Titanic",',
  'const exactP1Queue = [\n  "Titanic",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "Fire",\n  "Titanic",',
  'const exactRecommended = [\n  "Titanic",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 485 || report.atlas.actualCount !== 485) throw new Error("Chapter 17 is not 485/485");
if (report.verificationIndex.literalVerifiedScenarioIds !== 485) throw new Error("verification index is not 485");
const item = report.candidates.find((candidate) => candidate.title === "Fire");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_fire_1996" || item.productionVerified !== true) {
  throw new Error(`Fire did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["Titanic","Princess Mononoke","Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Fire")) throw new Error("Fire still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
