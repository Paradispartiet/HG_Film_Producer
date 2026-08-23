import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, value) { writeFileSync(path, value); }
function replaceOnce(path, from, to) {
  const source = read(path);
  const first = source.indexOf(from);
  if (first < 0) throw new Error(`${path}: missing anchor ${from.slice(0, 140)}`);
  if (source.indexOf(from, first + from.length) >= 0) throw new Error(`${path}: non-unique anchor ${from.slice(0, 140)}`);
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
  'import { mergeChapterSeventeenTheIdiotsExpansion } from "../../core/chapterSeventeenTheIdiotsExpansion.js";\n',
  'import { mergeChapterSeventeenTheIdiotsExpansion } from "../../core/chapterSeventeenTheIdiotsExpansion.js";\nimport { mergeChapterSeventeenRinguExpansion } from "../../core/chapterSeventeenRinguExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenTheIdiotsScenarios = mergeChapterSeventeenTheIdiotsExpansion(chapterSeventeenEvesBayouScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTheIdiotsScenarios);",
  "const chapterSeventeenTheIdiotsScenarios = mergeChapterSeventeenTheIdiotsExpansion(chapterSeventeenEvesBayouScenarios);\nconst chapterSeventeenRinguScenarios = mergeChapterSeventeenRinguExpansion(chapterSeventeenTheIdiotsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenRinguScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_the_idiots_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_the_idiots_expansion_2026+manual_chapter_seventeen_ringu_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theIdiotsFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheIdiots";\n',
  'import { theIdiotsFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheIdiots";\nimport { ringuFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenRingu";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [theIdiotsFilmHistoryProfile.scenarioId]: theIdiotsFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [theIdiotsFilmHistoryProfile.scenarioId]: theIdiotsFilmHistoryProfile,\n  [ringuFilmHistoryProfile.scenarioId]: ringuFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theIdiotsProductionCaseVerification } from "./scenarioProductionVerificationTheIdiots";\n',
  'import { theIdiotsProductionCaseVerification } from "./scenarioProductionVerificationTheIdiots";\nimport { ringuProductionCaseVerification } from "./scenarioProductionVerificationRingu";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  theIdiotsProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  theIdiotsProductionCaseVerification,\n  ringuProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 489;", "const EXPECTED_PLAYABLE_SCENARIOS = 490;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 489;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 490;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenTheIdiotsExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenTheIdiotsExpansion.ts",\n  "chapterSeventeenRinguExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 489;", "const EXPECTED_ATLAS_COUNT = 490;");
  replaceOnce(
    script,
    '  "chapterSeventeenTheIdiotsExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenTheIdiotsExpansion.ts",\n  "chapterSeventeenRinguExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "489", "490", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Festen",\n  "Central Station",\n  "The Idiots",\n  "The Matrix",',
  '  "Festen",\n  "Central Station",\n  "The Idiots",\n  "Ringu",\n  "The Matrix",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Ringu",\n  "The Blair Witch Project",',
  'const exactP1Queue = [\n  "The Blair Witch Project",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "Ringu",\n  "The Blair Witch Project",',
  'const exactRecommended = [\n  "The Blair Witch Project",',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 490 || report.atlas.actualCount !== 490) throw new Error("Chapter 17 is not 490/490");
if (report.verificationIndex.literalVerifiedScenarioIds !== 490) throw new Error("verification index is not 490");
const item = report.candidates.find((candidate) => candidate.title === "Ringu");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_ringu_1998" || item.productionVerified !== true) throw new Error(`Ringu did not resolve correctly: ${JSON.stringify(item)}`);
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
const expectedP1 = ["The Blair Witch Project","Boys Don't Cry"];
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(expectedP1)) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Ringu")) throw new Error("Ringu still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
