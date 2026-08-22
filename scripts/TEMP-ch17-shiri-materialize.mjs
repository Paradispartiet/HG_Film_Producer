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
function replaceOnceInSection(path, sectionStart, from, to) {
  const source = read(path);
  const start = source.indexOf(sectionStart);
  if (start < 0) throw new Error(`${path}: missing section ${sectionStart}`);
  if (source.indexOf(sectionStart, start + sectionStart.length) >= 0) throw new Error(`${path}: non-unique section ${sectionStart}`);
  const end = source.indexOf("] as const;", start);
  if (end < 0) throw new Error(`${path}: missing section end for ${sectionStart}`);
  const segment = source.slice(start, end);
  const first = segment.indexOf(from);
  if (first < 0) throw new Error(`${path}: missing section anchor ${from}`);
  if (segment.indexOf(from, first + from.length) >= 0) throw new Error(`${path}: non-unique section anchor ${from}`);
  const absolute = start + first;
  write(path, source.slice(0, absolute) + to + source.slice(absolute + from.length));
}

replaceOnce(
  "src/ui/data/filmScenarios.ts",
  'import { mergeChapterSeventeenTheMatrixExpansion } from "../../core/chapterSeventeenTheMatrixExpansion.js";\n',
  'import { mergeChapterSeventeenTheMatrixExpansion } from "../../core/chapterSeventeenTheMatrixExpansion.js";\nimport { mergeChapterSeventeenShiriExpansion } from "../../core/chapterSeventeenShiriExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenTheMatrixScenarios = mergeChapterSeventeenTheMatrixExpansion(chapterSeventeenToyStoryScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenTheMatrixScenarios);",
  "const chapterSeventeenTheMatrixScenarios = mergeChapterSeventeenTheMatrixExpansion(chapterSeventeenToyStoryScenarios);\nconst chapterSeventeenShiriScenarios = mergeChapterSeventeenShiriExpansion(chapterSeventeenTheMatrixScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenShiriScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_the_matrix_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_the_matrix_expansion_2026+manual_chapter_seventeen_shiri_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { theMatrixFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheMatrix";\n',
  'import { theMatrixFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenTheMatrix";\nimport { shiriFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenShiri";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [theMatrixFilmHistoryProfile.scenarioId]: theMatrixFilmHistoryProfile,\n",
  "  [theMatrixFilmHistoryProfile.scenarioId]: theMatrixFilmHistoryProfile,\n  [shiriFilmHistoryProfile.scenarioId]: shiriFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { theMatrixProductionCaseVerification } from "./scenarioProductionVerificationTheMatrix";\n',
  'import { theMatrixProductionCaseVerification } from "./scenarioProductionVerificationTheMatrix";\nimport { shiriProductionCaseVerification } from "./scenarioProductionVerificationShiri";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  theMatrixProductionCaseVerification,\n",
  "  theMatrixProductionCaseVerification,\n  shiriProductionCaseVerification,\n",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 475;", "const EXPECTED_PLAYABLE_SCENARIOS = 476;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 475;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 476;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenTheMatrixExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenTheMatrixExpansion.ts",\n  "chapterSeventeenShiriExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 475;", "const EXPECTED_ATLAS_COUNT = 476;");
  replaceOnce(
    script,
    '  "chapterSeventeenTheMatrixExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenTheMatrixExpansion.ts",\n  "chapterSeventeenShiriExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "475", "476", 3);
}

const chapter17Contract = "src/core/filmHistoryChapterSeventeenAuditContract.test.ts";
replaceOnceInSection(
  chapter17Contract,
  "const exactExisting = [",
  '  "All About My Mother"\n',
  '  "All About My Mother",\n  "Shiri"\n',
);
replaceOnce(
  chapter17Contract,
  'const exactP0Queue = [\n  "Shiri"\n] as const;',
  'const exactP0Queue = [] as const;',
);
replaceOnceInSection(
  chapter17Contract,
  "const exactRecommended = [",
  '  "Boys Don\'t Cry",\n  "Shiri"\n',
  '  "Boys Don\'t Cry"\n',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 476 || report.atlas.actualCount !== 476) throw new Error("Chapter 17 is not 476/476");
if (report.verificationIndex.literalVerifiedScenarioIds !== 476) throw new Error("verification index is not 476");
const item = report.candidates.find((candidate) => candidate.title === "Shiri");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_shiri_1999" || item.productionVerified !== true) {
  throw new Error(`Shiri did not resolve correctly: ${JSON.stringify(item)}`);
}
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (report.byDecision.P1.length !== 16) throw new Error(`Unexpected P1 count ${report.byDecision.P1.length}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Shiri")) throw new Error("Shiri still recommended");
if (!report.byDecision.USE_EXISTING.includes("Shiri")) throw new Error("Shiri missing from USE_EXISTING");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
