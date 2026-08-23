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
  'import { mergeChapterSeventeenHoopDreamsExpansion } from "../../core/chapterSeventeenHoopDreamsExpansion.js";\n',
  'import { mergeChapterSeventeenHoopDreamsExpansion } from "../../core/chapterSeventeenHoopDreamsExpansion.js";\nimport { mergeChapterSeventeenTheWhiteBalloonExpansion } from "../../core/chapterSeventeenTheWhiteBalloonExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenHoopDreamsScenarios = mergeChapterSeventeenHoopDreamsExpansion(chapterSeventeenPulpFictionScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenHoopDreamsScenarios);",
  "const chapterSeventeenHoopDreamsScenarios = mergeChapterSeventeenHoopDreamsExpansion(chapterSeventeenPulpFictionScenarios);\nconst chapterSeventeenTheWhiteBalloonScenarios = mergeChapterSeventeenTheWhiteBalloonExpansion(chapterSeventeenHoopDreamsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTheWhiteBalloonScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_hoop_dreams_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_hoop_dreams_expansion_2026+manual_chapter_seventeen_the_white_balloon_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { hoopDreamsFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenHoopDreams";\n',
  'import { hoopDreamsFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenHoopDreams";\nimport { theWhiteBalloonFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheWhiteBalloon";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [hoopDreamsFilmHistoryProfile.scenarioId]: hoopDreamsFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [hoopDreamsFilmHistoryProfile.scenarioId]: hoopDreamsFilmHistoryProfile,\n  [theWhiteBalloonFilmHistoryProfile.scenarioId]: theWhiteBalloonFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { hoopDreamsProductionCaseVerification } from "./scenarioProductionVerificationHoopDreams";\n',
  'import { hoopDreamsProductionCaseVerification } from "./scenarioProductionVerificationHoopDreams";\nimport { theWhiteBalloonProductionCaseVerification } from "./scenarioProductionVerificationTheWhiteBalloon";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  hoopDreamsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  hoopDreamsProductionCaseVerification,\n  theWhiteBalloonProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 483;", "const EXPECTED_PLAYABLE_SCENARIOS = 484;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 483;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 484;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenHoopDreamsExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenHoopDreamsExpansion.ts",\n  "chapterSeventeenTheWhiteBalloonExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 483;", "const EXPECTED_ATLAS_COUNT = 484;");
  replaceOnce(
    script,
    '  "chapterSeventeenHoopDreamsExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenHoopDreamsExpansion.ts",\n  "chapterSeventeenTheWhiteBalloonExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "483", "484", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Underground",\n  "Secrets & Lies",',
  '  "Underground",\n  "The White Balloon",\n  "Secrets & Lies",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "The White Balloon",\n  "Fire",',
  'const exactP1Queue = [\n  "Fire",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "The White Balloon",\n  "Fire",',
  'const exactRecommended = [\n  "Fire",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 484 || report.atlas.actualCount !== 484) throw new Error("Chapter 17 is not 484/484");
if (report.verificationIndex.literalVerifiedScenarioIds !== 484) throw new Error("verification index is not 484");
const item = report.candidates.find((candidate) => candidate.title === "The White Balloon");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_the_white_balloon_1995" || item.productionVerified !== true) {
  throw new Error(`The White Balloon did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["Fire","Titanic","Princess Mononoke","Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("The White Balloon")) throw new Error("The White Balloon still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
