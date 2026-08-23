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
  'import { mergeChapterSeventeenBlairWitchProjectExpansion } from "../../core/chapterSeventeenBlairWitchProjectExpansion.js";\n',
  'import { mergeChapterSeventeenBlairWitchProjectExpansion } from "../../core/chapterSeventeenBlairWitchProjectExpansion.js";\nimport { mergeChapterSeventeenBoysDontCryExpansion } from "../../core/chapterSeventeenBoysDontCryExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenBlairWitchProjectScenarios = mergeChapterSeventeenBlairWitchProjectExpansion(chapterSeventeenRinguScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenBlairWitchProjectScenarios);",
  "const chapterSeventeenBlairWitchProjectScenarios = mergeChapterSeventeenBlairWitchProjectExpansion(chapterSeventeenRinguScenarios);\nconst chapterSeventeenBoysDontCryScenarios = mergeChapterSeventeenBoysDontCryExpansion(chapterSeventeenBlairWitchProjectScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenBoysDontCryScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_blair_witch_project_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_blair_witch_project_expansion_2026+manual_chapter_seventeen_boys_dont_cry_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { blairWitchProjectFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBlairWitchProject";\n',
  'import { blairWitchProjectFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBlairWitchProject";\nimport { boysDontCryFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBoysDontCry";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [blairWitchProjectFilmHistoryProfile.scenarioId]: blairWitchProjectFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [blairWitchProjectFilmHistoryProfile.scenarioId]: blairWitchProjectFilmHistoryProfile,\n  [boysDontCryFilmHistoryProfile.scenarioId]: boysDontCryFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { blairWitchProjectProductionCaseVerification } from "./scenarioProductionVerificationBlairWitchProject";\n',
  'import { blairWitchProjectProductionCaseVerification } from "./scenarioProductionVerificationBlairWitchProject";\nimport { boysDontCryProductionCaseVerification } from "./scenarioProductionVerificationBoysDontCry";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  blairWitchProjectProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  blairWitchProjectProductionCaseVerification,\n  boysDontCryProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 491;", "const EXPECTED_PLAYABLE_SCENARIOS = 492;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 491;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 492;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenBlairWitchProjectExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenBlairWitchProjectExpansion.ts",\n  "chapterSeventeenBoysDontCryExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 491;", "const EXPECTED_ATLAS_COUNT = 492;");
  replaceOnce(
    script,
    '  "chapterSeventeenBlairWitchProjectExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenBlairWitchProjectExpansion.ts",\n  "chapterSeventeenBoysDontCryExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "491", "492", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "All About My Mother",\n  "The Blair Witch Project",\n  "Shiri"',
  '  "All About My Mother",\n  "The Blair Witch Project",\n  "Boys Don\'t Cry",\n  "Shiri"',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP1Queue = [\n  "Boys Don\'t Cry"\n] as const;',
  'const exactP1Queue = [] as const;',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactRecommended = [\n  "Boys Don\'t Cry"\n] as const;',
  'const exactRecommended = [] as const;',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 492 || report.atlas.actualCount !== 492) throw new Error("Chapter 17 is not 492/492");
if (report.verificationIndex.literalVerifiedScenarioIds !== 492) throw new Error("verification index is not 492");
const item = report.candidates.find((candidate) => candidate.title === "Boys Don't Cry");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_boys_dont_cry_1999" || item.productionVerified !== true) throw new Error(`Boys Don't Cry did not resolve correctly: ${JSON.stringify(item)}`);
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify([])) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Boys Don't Cry")) throw new Error("Boys Don't Cry still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
