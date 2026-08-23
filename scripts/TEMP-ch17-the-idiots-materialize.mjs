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
  'import { mergeChapterSeventeenEvesBayouExpansion } from "../../core/chapterSeventeenEvesBayouExpansion.js";\n',
  'import { mergeChapterSeventeenEvesBayouExpansion } from "../../core/chapterSeventeenEvesBayouExpansion.js";\nimport { mergeChapterSeventeenTheIdiotsExpansion } from "../../core/chapterSeventeenTheIdiotsExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenEvesBayouScenarios = mergeChapterSeventeenEvesBayouExpansion(chapterSeventeenPrincessMononokeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenEvesBayouScenarios);",
  "const chapterSeventeenEvesBayouScenarios = mergeChapterSeventeenEvesBayouExpansion(chapterSeventeenPrincessMononokeScenarios);\nconst chapterSeventeenTheIdiotsScenarios = mergeChapterSeventeenTheIdiotsExpansion(chapterSeventeenEvesBayouScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTheIdiotsScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_eves_bayou_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_eves_bayou_expansion_2026+manual_chapter_seventeen_the_idiots_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { evesBayouFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenEvesBayou";\n',
  'import { evesBayouFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenEvesBayou";\nimport { theIdiotsFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheIdiots";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [evesBayouFilmHistoryProfile.scenarioId]: evesBayouFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [evesBayouFilmHistoryProfile.scenarioId]: evesBayouFilmHistoryProfile,\n  [theIdiotsFilmHistoryProfile.scenarioId]: theIdiotsFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { evesBayouProductionCaseVerification } from "./scenarioProductionVerificationEvesBayou";\n',
  'import { evesBayouProductionCaseVerification } from "./scenarioProductionVerificationEvesBayou";\nimport { theIdiotsProductionCaseVerification } from "./scenarioProductionVerificationTheIdiots";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  evesBayouProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  evesBayouProductionCaseVerification,\n  theIdiotsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 488;", "const EXPECTED_PLAYABLE_SCENARIOS = 489;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 488;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 489;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenEvesBayouExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenEvesBayouExpansion.ts",\n  "chapterSeventeenTheIdiotsExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 488;", "const EXPECTED_ATLAS_COUNT = 489;");
  replaceOnce(
    script,
    '  "chapterSeventeenEvesBayouExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenEvesBayouExpansion.ts",\n  "chapterSeventeenTheIdiotsExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "488", "489", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Eve\'s Bayou",\n  "Festen",',
  '  "Eve\'s Bayou",\n  "The Idiots",\n  "Festen",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "The Idiots",\n  "Ringu",',
  'const exactP1Queue = [\n  "Ringu",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "The Idiots",\n  "Ringu",',
  'const exactRecommended = [\n  "Ringu",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 489 || report.atlas.actualCount !== 489) throw new Error("Chapter 17 is not 489/489");
if (report.verificationIndex.literalVerifiedScenarioIds !== 489) throw new Error("verification index is not 489");
const item = report.candidates.find((candidate) => candidate.title === "The Idiots");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_the_idiots_1998" || item.productionVerified !== true) {
  throw new Error(`The Idiots did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["Ringu","The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("The Idiots")) throw new Error("The Idiots still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
