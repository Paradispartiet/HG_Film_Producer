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
  'import { mergeChapterSeventeenMyOwnPrivateIdahoExpansion } from "../../core/chapterSeventeenMyOwnPrivateIdahoExpansion.js";\n',
  'import { mergeChapterSeventeenMyOwnPrivateIdahoExpansion } from "../../core/chapterSeventeenMyOwnPrivateIdahoExpansion.js";\nimport { mergeChapterSeventeenBoyzNTheHoodExpansion } from "../../core/chapterSeventeenBoyzNTheHoodExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenMyOwnPrivateIdahoScenarios = mergeChapterSeventeenMyOwnPrivateIdahoExpansion(chapterSeventeenShiriScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenMyOwnPrivateIdahoScenarios);",
  "const chapterSeventeenMyOwnPrivateIdahoScenarios = mergeChapterSeventeenMyOwnPrivateIdahoExpansion(chapterSeventeenShiriScenarios);\nconst chapterSeventeenBoyzNTheHoodScenarios = mergeChapterSeventeenBoyzNTheHoodExpansion(chapterSeventeenMyOwnPrivateIdahoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenBoyzNTheHoodScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_my_own_private_idaho_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_my_own_private_idaho_expansion_2026+manual_chapter_seventeen_boyz_n_the_hood_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { myOwnPrivateIdahoFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenMyOwnPrivateIdaho";\n',
  'import { myOwnPrivateIdahoFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenMyOwnPrivateIdaho";\nimport { boyzNTheHoodFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBoyzNTheHood";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [myOwnPrivateIdahoFilmHistoryProfile.scenarioId]: myOwnPrivateIdahoFilmHistoryProfile,\n",
  "  [myOwnPrivateIdahoFilmHistoryProfile.scenarioId]: myOwnPrivateIdahoFilmHistoryProfile,\n  [boyzNTheHoodFilmHistoryProfile.scenarioId]: boyzNTheHoodFilmHistoryProfile,\n",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { myOwnPrivateIdahoProductionCaseVerification } from "./scenarioProductionVerificationMyOwnPrivateIdaho";\n',
  'import { myOwnPrivateIdahoProductionCaseVerification } from "./scenarioProductionVerificationMyOwnPrivateIdaho";\nimport { boyzNTheHoodProductionCaseVerification } from "./scenarioProductionVerificationBoyzNTheHood";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  myOwnPrivateIdahoProductionCaseVerification,\n",
  "  myOwnPrivateIdahoProductionCaseVerification,\n  boyzNTheHoodProductionCaseVerification,\n",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 477;", "const EXPECTED_PLAYABLE_SCENARIOS = 478;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 477;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 478;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",\n  "chapterSeventeenBoyzNTheHoodExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 477;", "const EXPECTED_ATLAS_COUNT = 478;");
  replaceOnce(
    script,
    '  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenMyOwnPrivateIdahoExpansion.ts",\n  "chapterSeventeenBoyzNTheHoodExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}
for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "477", "478", 3);
}

const contract = "src/core/filmHistoryChapterSeventeenAuditContract.test.ts";
replaceOnceInSection(
  contract,
  "const exactExisting = [",
  '  "My Own Private Idaho",\n  "Reservoir Dogs",\n',
  '  "My Own Private Idaho",\n  "Boyz n the Hood",\n  "Reservoir Dogs",\n',
);
replaceOnceInSection(
  contract,
  "const exactP1Queue = [",
  '  "Boyz n the Hood",\n  "The Living End",\n',
  '  "The Living End",\n',
);
replaceOnceInSection(
  contract,
  "const exactRecommended = [",
  '  "Boyz n the Hood",\n  "The Living End",\n',
  '  "The Living End",\n',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}
const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 478 || report.atlas.actualCount !== 478) throw new Error("Chapter 17 is not 478/478");
if (report.verificationIndex.literalVerifiedScenarioIds !== 478) throw new Error("verification index is not 478");
const item = report.candidates.find((candidate) => candidate.title === "Boyz n the Hood");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_boyz_n_the_hood_1991" || item.productionVerified !== true) throw new Error(`Boyz did not resolve correctly: ${JSON.stringify(item)}`);
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (report.byDecision.P1.length !== 14 || report.byDecision.P1[0] !== "The Living End") throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify(["Goodfellas"])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Boyz n the Hood")) throw new Error("Boyz n the Hood still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
