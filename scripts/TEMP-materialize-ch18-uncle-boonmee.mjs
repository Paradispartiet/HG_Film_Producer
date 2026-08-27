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
    'import { mergeChapterEighteenThereWillBeBloodExpansion } from "../../core/chapterEighteenThereWillBeBloodExpansion.js";\n',
    'import { mergeChapterEighteenThereWillBeBloodExpansion } from "../../core/chapterEighteenThereWillBeBloodExpansion.js";\nimport { mergeChapterEighteenUncleBoonmeeExpansion } from "../../core/chapterEighteenUncleBoonmeeExpansion.js";\n',
    "filmScenarios Uncle Boonmee import");
  s = replaceOnce(s,
    'const chapterEighteenThereWillBeBloodScenarios = mergeChapterEighteenThereWillBeBloodExpansion(chapterEighteenApocalyptoScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenThereWillBeBloodScenarios);',
    'const chapterEighteenThereWillBeBloodScenarios = mergeChapterEighteenThereWillBeBloodExpansion(chapterEighteenApocalyptoScenarios);\nconst chapterEighteenUncleBoonmeeScenarios = mergeChapterEighteenUncleBoonmeeExpansion(chapterEighteenThereWillBeBloodScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenUncleBoonmeeScenarios);',
    "filmScenarios Uncle Boonmee merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_there_will_be_blood_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing There Will Be Blood source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_uncle_boonmee_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_uncle_boonmee_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { thereWillBeBloodProductionCaseVerification } from "./scenarioProductionVerificationThereWillBeBlood";\n',
    'import { thereWillBeBloodProductionCaseVerification } from "./scenarioProductionVerificationThereWillBeBlood";\nimport { uncleBoonmeeProductionCaseVerification } from "./scenarioProductionVerificationUncleBoonmee";\n',
    "verification Uncle Boonmee import");
  s = replaceOnce(s,
    "  thereWillBeBloodProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  thereWillBeBloodProductionCaseVerification,\n  uncleBoonmeeProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Uncle Boonmee record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { thereWillBeBloodFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenThereWillBeBlood";\n',
    'import { thereWillBeBloodFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenThereWillBeBlood";\nimport { uncleBoonmeeFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenUncleBoonmee";\n',
    "Film Study Uncle Boonmee import");
  s = replaceOnce(s,
    "  [thereWillBeBloodFilmHistoryProfile.scenarioId]: thereWillBeBloodFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [thereWillBeBloodFilmHistoryProfile.scenarioId]: thereWillBeBloodFilmHistoryProfile,\n  [uncleBoonmeeFilmHistoryProfile.scenarioId]: uncleBoonmeeFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Uncle Boonmee profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 526;", "const EXPECTED_PLAYABLE_SCENARIOS = 527;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 526;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 527;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenThereWillBeBloodExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenThereWillBeBloodExpansion.ts",\n  "chapterEighteenUncleBoonmeeExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 526;", "const EXPECTED_ATLAS_COUNT = 527;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenThereWillBeBloodExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenThereWillBeBloodExpansion.ts",\n  "chapterEighteenUncleBoonmeeExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 526, 527, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 526, 527, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Poetry", "Somewhere", "A Separation", "Pietà",',
    '"Poetry", "Somewhere", "Uncle Boonmee Who Can Recall His Past Lives", "A Separation", "Pietà",',
    "Chapter 18 exactExisting Uncle Boonmee");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Uncle Boonmee Who Can Recall His Past Lives",\n  "The Tree of Life",',
    'const exactP1Queue = [\n  "The Tree of Life",',
    "Chapter 18 P1 Uncle Boonmee removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 69);", "assert.equal(exactExisting.length, 70);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 12);", "assert.equal(exactP1Queue.length, 11);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 12);", "assert.equal(resolved.recommendedNewProductionCases.length, 11);", "Chapter 18 recommended length");
  write(path, s);
}

const resolvedPaths = {
  twelve: "docs/film-history-chapter-twelve-atlas-resolved.json",
  thirteen: "docs/film-history-chapter-thirteen-atlas-resolved.json",
  fourteen: "docs/film-history-chapter-fourteen-atlas-resolved.json",
  fifteen: "docs/film-history-chapter-fifteen-atlas-resolved.json",
  sixteen: "docs/film-history-chapter-sixteen-atlas-resolved.json",
  seventeen: "docs/film-history-chapter-seventeen-atlas-resolved.json",
  eighteen: "docs/film-history-chapter-eighteen-atlas-resolved.json",
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
if (resolved.atlas?.expectedCount !== 527 || resolved.atlas?.actualCount !== 527) throw new Error("Chapter 18 did not materialize 527/527");
if (!resolved.byDecision?.USE_EXISTING?.includes("Uncle Boonmee Who Can Recall His Past Lives")) throw new Error("Uncle Boonmee did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Uncle Boonmee Who Can Recall His Past Lives")) throw new Error("Uncle Boonmee remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 70) throw new Error(`Expected 70 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 11) throw new Error(`Expected 11 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 11) throw new Error("Expected 11 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "The Tree of Life") throw new Error(`Expected The Tree of Life next P1, got ${resolved.byDecision?.P1?.[0]}`);

console.log("UNCLE_BOONMEE_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
