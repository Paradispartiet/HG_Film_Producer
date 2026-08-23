import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, value) { writeFileSync(path, value); }
function replaceOnce(path, from, to) {
  const source = read(path);
  const first = source.indexOf(from);
  if (first < 0) throw new Error(`${path}: missing anchor ${from.slice(0, 160)}`);
  if (source.indexOf(from, first + from.length) >= 0) throw new Error(`${path}: non-unique anchor ${from.slice(0, 160)}`);
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
  'import { mergeChapterSeventeenRinguExpansion } from "../../core/chapterSeventeenRinguExpansion.js";\n',
  'import { mergeChapterSeventeenRinguExpansion } from "../../core/chapterSeventeenRinguExpansion.js";\nimport { mergeChapterSeventeenBlairWitchProjectExpansion } from "../../core/chapterSeventeenBlairWitchProjectExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenRinguScenarios = mergeChapterSeventeenRinguExpansion(chapterSeventeenTheIdiotsScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenRinguScenarios);",
  "const chapterSeventeenRinguScenarios = mergeChapterSeventeenRinguExpansion(chapterSeventeenTheIdiotsScenarios);\nconst chapterSeventeenBlairWitchProjectScenarios = mergeChapterSeventeenBlairWitchProjectExpansion(chapterSeventeenRinguScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenBlairWitchProjectScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_ringu_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_ringu_expansion_2026+manual_chapter_seventeen_blair_witch_project_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { ringuFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenRingu";\n',
  'import { ringuFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenRingu";\nimport { blairWitchProjectFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBlairWitchProject";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [ringuFilmHistoryProfile.scenarioId]: ringuFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [ringuFilmHistoryProfile.scenarioId]: ringuFilmHistoryProfile,\n  [blairWitchProjectFilmHistoryProfile.scenarioId]: blairWitchProjectFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { ringuProductionCaseVerification } from "./scenarioProductionVerificationRingu";\n',
  'import { ringuProductionCaseVerification } from "./scenarioProductionVerificationRingu";\nimport { blairWitchProjectProductionCaseVerification } from "./scenarioProductionVerificationBlairWitchProject";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  ringuProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  ringuProductionCaseVerification,\n  blairWitchProjectProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 490;", "const EXPECTED_PLAYABLE_SCENARIOS = 491;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 490;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 491;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenRinguExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenRinguExpansion.ts",\n  "chapterSeventeenBlairWitchProjectExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 490;", "const EXPECTED_ATLAS_COUNT = 491;");
  replaceOnce(
    script,
    '  "chapterSeventeenRinguExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenRinguExpansion.ts",\n  "chapterSeventeenBlairWitchProjectExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "490", "491", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Rosetta",\n  "All About My Mother",\n  "Shiri"',
  '  "Rosetta",\n  "All About My Mother",\n  "The Blair Witch Project",\n  "Shiri"',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "The Blair Witch Project",\n  "Boys Don\'t Cry"\n] as const;',
  'const exactP1Queue = [\n  "Boys Don\'t Cry"\n] as const;',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "The Blair Witch Project",\n  "Boys Don\'t Cry"\n] as const;',
  'const exactRecommended = [\n  "Boys Don\'t Cry"\n] as const;',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 491 || report.atlas.actualCount !== 491) throw new Error("Chapter 17 is not 491/491");
if (report.verificationIndex.literalVerifiedScenarioIds !== 491) throw new Error("verification index is not 491");
const item = report.candidates.find((candidate) => candidate.title === "The Blair Witch Project");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_the_blair_witch_project_1999" || item.productionVerified !== true) throw new Error(`The Blair Witch Project did not resolve correctly: ${JSON.stringify(item)}`);
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify(["Boys Don't Cry"])) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("The Blair Witch Project")) throw new Error("The Blair Witch Project still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
