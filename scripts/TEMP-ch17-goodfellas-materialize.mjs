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
  'import { mergeChapterSeventeenBoysDontCryExpansion } from "../../core/chapterSeventeenBoysDontCryExpansion.js";\n',
  'import { mergeChapterSeventeenBoysDontCryExpansion } from "../../core/chapterSeventeenBoysDontCryExpansion.js";\nimport { mergeChapterSeventeenGoodfellasExpansion } from "../../core/chapterSeventeenGoodfellasExpansion.js";\n',
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "const chapterSeventeenBoysDontCryScenarios = mergeChapterSeventeenBoysDontCryExpansion(chapterSeventeenBlairWitchProjectScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenBoysDontCryScenarios);",
  "const chapterSeventeenBoysDontCryScenarios = mergeChapterSeventeenBoysDontCryExpansion(chapterSeventeenBlairWitchProjectScenarios);\nconst chapterSeventeenGoodfellasScenarios = mergeChapterSeventeenGoodfellasExpansion(chapterSeventeenBoysDontCryScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterSeventeenGoodfellasScenarios);",
);
replaceOnce(
  "src/ui/data/filmScenarios.ts",
  "+manual_chapter_seventeen_boys_dont_cry_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
  "+manual_chapter_seventeen_boys_dont_cry_expansion_2026+manual_chapter_seventeen_goodfellas_expansion_2026+manual_modern_indie_asian_prize_expansion_2026",
);

replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  'import { boysDontCryFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBoysDontCry";\n',
  'import { boysDontCryFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenBoysDontCry";\nimport { goodfellasFilmHistoryProfile } from "./scenarioFilmStudyChapterSeventeenGoodfellas";\n',
);
replaceOnce(
  "src/ui/data/scenarioFilmStudyMap.ts",
  "  [boysDontCryFilmHistoryProfile.scenarioId]: boysDontCryFilmHistoryProfile,\n  scenario_the_machinist_2004:",
  "  [boysDontCryFilmHistoryProfile.scenarioId]: boysDontCryFilmHistoryProfile,\n  [goodfellasFilmHistoryProfile.scenarioId]: goodfellasFilmHistoryProfile,\n  scenario_the_machinist_2004:",
);

replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  'import { boysDontCryProductionCaseVerification } from "./scenarioProductionVerificationBoysDontCry";\n',
  'import { boysDontCryProductionCaseVerification } from "./scenarioProductionVerificationBoysDontCry";\nimport { goodfellasProductionCaseVerification } from "./scenarioProductionVerificationGoodfellas";\n',
);
replaceOnce(
  "src/ui/data/scenarioProductionVerificationRegistry.ts",
  "  boysDontCryProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
  "  boysDontCryProductionCaseVerification,\n  goodfellasProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
);

replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_PLAYABLE_SCENARIOS = 492;", "const EXPECTED_PLAYABLE_SCENARIOS = 493;");
replaceOnce("scripts/production-case-rest-audit.mjs", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 492;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 493;");
replaceOnce(
  "scripts/production-case-rest-audit.mjs",
  '  "chapterSeventeenBoysDontCryExpansion.ts",\n  "modernCanonExpansion.ts",',
  '  "chapterSeventeenBoysDontCryExpansion.ts",\n  "chapterSeventeenGoodfellasExpansion.ts",\n  "modernCanonExpansion.ts",',
);

const chapterWords = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"];
for (const word of chapterWords) {
  const script = `scripts/film-history-chapter-${word}-atlas-audit.mjs`;
  replaceOnce(script, "const EXPECTED_ATLAS_COUNT = 492;", "const EXPECTED_ATLAS_COUNT = 493;");
  replaceOnce(
    script,
    '  "chapterSeventeenBoysDontCryExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterSeventeenBoysDontCryExpansion.ts",\n  "chapterSeventeenGoodfellasExpansion.ts",\n  "modernCanonExpansion.ts",',
  );
}

for (const word of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  replaceAllLiteral(`src/core/filmHistoryChapter${word}AuditContract.test.ts`, "492", "493", 3);
}

replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  '  "Days of Being Wild",\n  "Daughters of the Dust",',
  '  "Days of Being Wild",\n  "Goodfellas",\n  "Daughters of the Dust",',
);
replaceOnce(
  "src/core/filmHistoryChapterSeventeenAuditContract.test.ts",
  'const exactP2Queue = [\n  "Goodfellas"\n] as const;',
  'const exactP2Queue = [] as const;',
);

for (const word of chapterWords) {
  execFileSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=docs/film-history-chapter-${word}-atlas-resolved.json`], { stdio: ["ignore", "ignore", "inherit"] });
}

const report = JSON.parse(read("docs/film-history-chapter-seventeen-atlas-resolved.json"));
if (report.atlas.expectedCount !== 493 || report.atlas.actualCount !== 493) throw new Error("Chapter 17 is not 493/493");
if (report.verificationIndex.literalVerifiedScenarioIds !== 493) throw new Error("verification index is not 493");
const item = report.candidates.find((candidate) => candidate.title === "Goodfellas");
if (!item || item.decision !== "USE_EXISTING" || item.scenarioId !== "scenario_goodfellas_1990" || item.productionVerified !== true) throw new Error(`Goodfellas did not resolve correctly: ${JSON.stringify(item)}`);
if (JSON.stringify(report.byDecision.P0) !== JSON.stringify([])) throw new Error(`Unexpected P0 ${JSON.stringify(report.byDecision.P0)}`);
if (JSON.stringify(report.byDecision.P1) !== JSON.stringify([])) throw new Error(`Unexpected P1 ${JSON.stringify(report.byDecision.P1)}`);
if (JSON.stringify(report.byDecision.P2) !== JSON.stringify([])) throw new Error(`Unexpected P2 ${JSON.stringify(report.byDecision.P2)}`);
if (report.recommendedNewProductionCases.includes("Goodfellas")) throw new Error("Goodfellas still recommended");
execFileSync("node", ["scripts/production-case-rest-audit.mjs"], { stdio: "inherit" });
