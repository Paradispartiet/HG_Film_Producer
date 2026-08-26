import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, value) { writeFileSync(path, value); }
function replaceOnce(source, before, after, label) {
  const first = source.indexOf(before);
  if (first < 0) throw new Error(`Missing materialization anchor: ${label}`);
  if (source.indexOf(before, first + before.length) >= 0) throw new Error(`Non-unique materialization anchor: ${label}`);
  return source.slice(0, first) + after + source.slice(first + before.length);
}
function replaceAllCount(source, from, to, label) {
  const pattern = new RegExp(`\\b${from}\\b`, "g");
  const matches = source.match(pattern) ?? [];
  if (matches.length === 0) throw new Error(`Missing ${from} count anchors: ${label}`);
  return source.replace(pattern, String(to));
}

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenApocalyptoExpansion } from "../../core/chapterEighteenApocalyptoExpansion.js";\n',
    'import { mergeChapterEighteenApocalyptoExpansion } from "../../core/chapterEighteenApocalyptoExpansion.js";\nimport { mergeChapterEighteenThereWillBeBloodExpansion } from "../../core/chapterEighteenThereWillBeBloodExpansion.js";\n',
    "filmScenarios There Will Be Blood import");
  s = replaceOnce(s,
    'const chapterEighteenApocalyptoScenarios = mergeChapterEighteenApocalyptoExpansion(chapterEighteenPansLabyrinthScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenApocalyptoScenarios);',
    'const chapterEighteenApocalyptoScenarios = mergeChapterEighteenApocalyptoExpansion(chapterEighteenPansLabyrinthScenarios);\nconst chapterEighteenThereWillBeBloodScenarios = mergeChapterEighteenThereWillBeBloodExpansion(chapterEighteenApocalyptoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenThereWillBeBloodScenarios);',
    "filmScenarios There Will Be Blood merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_apocalypto_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Apocalypto source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_there_will_be_blood_expansion_2026")) s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_there_will_be_blood_expansion_2026");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { apocalyptoProductionCaseVerification } from "./scenarioProductionVerificationApocalypto";\n',
    'import { apocalyptoProductionCaseVerification } from "./scenarioProductionVerificationApocalypto";\nimport { thereWillBeBloodProductionCaseVerification } from "./scenarioProductionVerificationThereWillBeBlood";\n',
    "verification There Will Be Blood import");
  s = replaceOnce(s,
    "  apocalyptoProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  apocalyptoProductionCaseVerification,\n  thereWillBeBloodProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification There Will Be Blood record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { apocalyptoFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenApocalypto";\n',
    'import { apocalyptoFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenApocalypto";\nimport { thereWillBeBloodFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenThereWillBeBlood";\n',
    "Film Study There Will Be Blood import");
  s = replaceOnce(s,
    "  [apocalyptoFilmHistoryProfile.scenarioId]: apocalyptoFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [apocalyptoFilmHistoryProfile.scenarioId]: apocalyptoFilmHistoryProfile,\n  [thereWillBeBloodFilmHistoryProfile.scenarioId]: thereWillBeBloodFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study There Will Be Blood profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 525;", "const EXPECTED_PLAYABLE_SCENARIOS = 526;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 525;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 526;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenApocalyptoExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenApocalyptoExpansion.ts",\n  "chapterEighteenThereWillBeBloodExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 525;", "const EXPECTED_ATLAS_COUNT = 526;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenApocalyptoExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenApocalyptoExpansion.ts",\n  "chapterEighteenThereWillBeBloodExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 525, 526, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 525, 526, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Pan\'s Labyrinth", "Apocalypto", "Zodiac", "Secret Sunshine", "No Country for Old Men", "4 Months, 3 Weeks and 2 Days",',
    '"Pan\'s Labyrinth", "Apocalypto", "Zodiac", "Secret Sunshine", "No Country for Old Men", "There Will Be Blood", "4 Months, 3 Weeks and 2 Days",',
    "Chapter 18 exactExisting There Will Be Blood");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "There Will Be Blood", "Uncle Boonmee Who Can Recall His Past Lives",',
    'const exactP1Queue = [\n  "Uncle Boonmee Who Can Recall His Past Lives",',
    "Chapter 18 P1 There Will Be Blood removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 68);", "assert.equal(exactExisting.length, 69);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 13);", "assert.equal(exactP1Queue.length, 12);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 13);", "assert.equal(resolved.recommendedNewProductionCases.length, 12);", "Chapter 18 recommended length");
  write(path, s);
}

const resolvedPaths = {
  twelve: "docs/film-history-chapter-twelve-atlas-resolved.json",
  thirteen: "docs/film-history-chapter-thirteen-atlas-resolved.json",
  fourteen: "docs/film-history-chapter-fourteen-atlas-resolved.json",
  fifteen: "docs/film-history-chapter-fifteen-atlas-resolved.json",
  sixteen: "docs/film-history-chapter-sixteen-atlas-resolved.json",
  seventeen: "docs/film-history-chapter-seventeen-atlas-resolved.json",
  eighteen: "docs/film-history-chapter-eighteen-atlas-resolved.json"
};
for (const chapter of chapters) {
  const script = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  const result = spawnSync("node", [script, `--write=${resolvedPaths[chapter]}`], { encoding: "utf8", stdio: "inherit" });
  if (result.status !== 0) throw new Error(`${script} failed with ${result.status}`);
}

{
  const result = spawnSync("npm", ["run", "audit:production-cases"], { encoding: "utf8", stdio: "inherit" });
  if (result.status !== 0) throw new Error(`audit:production-cases failed with ${result.status}`);
}

const resolved = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (resolved.atlas?.expectedCount !== 526 || resolved.atlas?.actualCount !== 526) throw new Error("Chapter 18 did not materialize 526/526");
if (!resolved.byDecision?.USE_EXISTING?.includes("There Will Be Blood")) throw new Error("There Will Be Blood did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("There Will Be Blood")) throw new Error("There Will Be Blood remained P1");
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 12) throw new Error(`Expected 12 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 12) throw new Error("Expected 12 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Uncle Boonmee Who Can Recall His Past Lives") throw new Error(`Expected Uncle Boonmee next P1, got ${resolved.byDecision?.P1?.[0]}`);

console.log("THERE_WILL_BE_BLOOD_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0]
});
