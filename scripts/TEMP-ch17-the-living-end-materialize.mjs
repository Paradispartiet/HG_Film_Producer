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
  'import { mergeChapterSeventeenBoyzNTheHoodExpansion } from "../../core/chapterSeventeenBoyzNTheHoodExpansion.js";\n',
  'import { mergeChapterSeventeenBoyzNTheHoodExpansion } from "../../core/chapterSeventeenBoyzNTheHoodExpansion.js";\nimport { mergeChapterSeventeenTheLivingEndExpansion } from "../../core/chapterSeventeenTheLivingEndExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenBoyzNTheHoodScenarios = mergeChapterSeventeenBoyzNTheHoodExpansion(chapterSeventeenMyOwnPrivateIdahoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenBoyzNTheHoodScenarios);",
  "const chapterSeventeenBoyzNTheHoodScenarios = mergeChapterSeventeenBoyzNTheHoodExpansion(chapterSeventeenMyOwnPrivateIdahoScenarios);\nconst chapterSeventeenTheLivingEndScenarios = mergeChapterSeventeenTheLivingEndExpansion(chapterSeventeenBoyzNTheHoodScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTheLivingEndScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_boyz_n_the_hood_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_boyz_n_the_hood_expansion_2026+manual_chapter_seventeen_the_living_end_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { boyzNTheHoodFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBoyzNTheHood";\n',
  'import { boyzNTheHoodFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBoyzNTheHood";\nimport { theLivingEndFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheLivingEnd";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [boyzNTheHoodFilmHistoryProfile.scenarioId]: boyzNTheHoodFilmHistoryProfile,\n",
  "  [boyzNTheHoodFilmHistoryProfile.scenarioId]: boyzNTheHoodFilmHistoryProfile,\n  [theLivingEndFilmHistoryProfile.scenarioId]: theLivingEndFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { boyzNTheHoodProductionCaseVerification } from "./scenarioProductionVerificationBoyzNTheHood";\n',
  'import { boyzNTheHoodProductionCaseVerification } from "./scenarioProductionVerificationBoyzNTheHood";\nimport { theLivingEndProductionCaseVerification } from "./scenarioProductionVerificationTheLivingEnd";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  boyzNTheHoodProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  boyzNTheHoodProductionCaseVerification,\n  theLivingEndProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 478;", "const EXPECTED_PLAYABLE_SCENARIOS = 479;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 478;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 479;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenBoyzNTheHoodExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenBoyzNTheHoodExpansion.ts",\n  "chapterSeventeenTheLivingEndExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 478;", "const EXPECTED_ATLAS_COUNT = 479;");
  replaceOnce(
    script,
    '  "chapterSeventeenBoyzNTheHoodExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenBoyzNTheHoodExpansion.ts",\n  "chapterSeventeenTheLivingEndExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "478", "479", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "El Mariachi",\n  "Hyenas",\n  "Sankofa",',
  '  "El Mariachi",\n  "Hyenas",\n  "The Living End",\n  "Sankofa",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "The Living End",\n  "The Piano",',
  'const exactP1Queue = [\n  "The Piano",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "The Living End",\n  "The Piano",',
  'const exactRecommended = [\n  "The Piano",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 479 || report.atlas.actualCount !== 479) throw new Error("Chapter 17 is not 479/479");
if (report.verificationIndex.literalVerifiedScenarioIds !== 479) throw new Error("verification index is not 479");
const item = report.candidates.find((candidate) => candidate.title === "The Living End");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_the_living_end_1992" || item.productionVerified !== true) {
  throw new Error(`The Living End did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["The Piano","Three Colours: Red","Pulp Fiction","Hoop Dreams","The White Balloon","Fire","Titanic","Princess Mononoke","Eve's Bayou","The Idiots","Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("The Living End")) throw new Error("The Living End still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
