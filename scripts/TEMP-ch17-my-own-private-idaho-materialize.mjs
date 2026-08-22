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
  'import { mergeChapterSeventeenShiriExpansion } from "../../core/chapterSeventeenShiriExpansion.js";\n',
  'import { mergeChapterSeventeenShiriExpansion } from "../../core/chapterSeventeenShiriExpansion.js";\nimport { mergeChapterSeventeenMyOwnPrivateIdahoExpansion } from "../../core/chapterSeventeenMyOwnPrivateIdahoExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenShiriScenarios = mergeChapterSeventeenShiriExpansion(chapterSeventeenTheMatrixScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenShiriScenarios);",
  "const chapterSeventeenShiriScenarios = mergeChapterSeventeenShiriExpansion(chapterSeventeenTheMatrixScenarios);\nconst chapterSeventeenMyOwnPrivateIdahoScenarios = mergeChapterSeventeenMyOwnPrivateIdahoExpansion(chapterSeventeenShiriScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenMyOwnPrivateIdahoScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_shiri_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_shiri_expansion_2026+manual_chapter_seventeen_my_own_private_idaho_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { shiriFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenShiri";\n',
  'import { shiriFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenShiri";\nimport { myOwnPrivateIdahoFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenMyOwnPrivateIdaho";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [shiriFilmHistoryProfile.scenarioId]: shiriFilmHistoryProfile,\n",
  "  [shiriFilmHistoryProfile.scenarioId]: shiriFilmHistoryProfile,\n  [myOwnPrivateIdahoFilmHistoryProfile.scenarioId]: myOwnPrivateIdahoFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { shiriProductionCaseVerification } from "./scenarioProductionVerificationShiri";\n',
  'import { shiriProductionCaseVerification } from "./scenarioProductionVerificationShiri";\nimport { myOwnPrivateIdahoProductionCaseVerification } from "./scenarioProductionVerificationMyOwnPrivateIdaho";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  shiriProductionCaseVerification,\n",
  "  shiriProductionCaseVerification,\n  myOwnPrivateIdahoProductionCaseVerification,\n",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 476;", "const EXPECTED_PLAYABLE_SCENARIOS = 477;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 476;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 477;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenShiriExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenShiriExpansion.ts",\n  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 476;", "const EXPECTED_ATLAS_COUNT = 477;");
  replaceOnce(
    script,
    '  "chapterSeventeenShiriExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenShiriExpansion.ts",\n  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}
for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "476", "477", 3);
}

const contract = "src/core/filmHistoryChapterSeventeenAuditContract.test.ts";
replaceOnceInSection(
  contract,
  "const exactExisting = [",
  '  "Raise the Red Lantern",\n  "Reservoir Dogs",\n',
  '  "Raise the Red Lantern",\n  "My Own Private Idaho",\n  "Reservoir Dogs",\n',
);
replaceOnceInSection(
  contract,
  "const exactP1Queue = [",
  '  "My Own Private Idaho",\n  "Boyz n the Hood",\n',
  '  "Boyz n the Hood",\n',
);
replaceOnceInSection(
  contract,
  "const exactRecommended = [",
  '  "My Own Private Idaho",\n  "Boyz n the Hood",\n',
  '  "Boyz n the Hood",\n',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}
const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 477 || report.atlas.actualCount !== 477) throw new Error("Chapter 17 is not 477/477");
if (report.verificationIndex.literalVerifiedScenarioIds !== 477) throw new Error("verification index is not 477");
const item = report.candidates.find((candidate) => candidate.title === "My Own Private Idaho");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_my_own_private_idaho_1991" || item.productionVerified !== true) throw new Error(`Idaho did not resolve correctly: ${JSON.stringify(item)}`);
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (report.byDecision.P1.length !== 15 || report.byDecision.P1[0] !== "Boyz n the Hood") throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("My Own Private Idaho")) throw new Error("Idaho still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
