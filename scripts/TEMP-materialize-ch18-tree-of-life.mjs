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
    'import { mergeChapterEighteenUncleBoonmeeExpansion } from "../../core/chapterEighteenUncleBoonmeeExpansion.js";\n',
    'import { mergeChapterEighteenUncleBoonmeeExpansion } from "../../core/chapterEighteenUncleBoonmeeExpansion.js";\nimport { mergeChapterEighteenTreeOfLifeExpansion } from "../../core/chapterEighteenTreeOfLifeExpansion.js";\n',
    "filmScenarios Tree of Life import");
  s = replaceOnce(s,
    'const chapterEighteenUncleBoonmeeScenarios = mergeChapterEighteenUncleBoonmeeExpansion(chapterEighteenThereWillBeBloodScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenUncleBoonmeeScenarios);',
    'const chapterEighteenUncleBoonmeeScenarios = mergeChapterEighteenUncleBoonmeeExpansion(chapterEighteenThereWillBeBloodScenarios);\nconst chapterEighteenTreeOfLifeScenarios = mergeChapterEighteenTreeOfLifeExpansion(chapterEighteenUncleBoonmeeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTreeOfLifeScenarios);',
    "filmScenarios Tree of Life merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_uncle_boonmee_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Uncle Boonmee source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_tree_of_life_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_tree_of_life_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { uncleBoonmeeProductionCaseVerification } from "./scenarioProductionVerificationUncleBoonmee";\n',
    'import { uncleBoonmeeProductionCaseVerification } from "./scenarioProductionVerificationUncleBoonmee";\nimport { treeOfLifeProductionCaseVerification } from "./scenarioProductionVerificationTreeOfLife";\n',
    "verification Tree of Life import");
  s = replaceOnce(s,
    "  uncleBoonmeeProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  uncleBoonmeeProductionCaseVerification,\n  treeOfLifeProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Tree of Life record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { uncleBoonmeeFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenUncleBoonmee";\n',
    'import { uncleBoonmeeFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenUncleBoonmee";\nimport { treeOfLifeFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTreeOfLife";\n',
    "Film Study Tree of Life import");
  s = replaceOnce(s,
    "  [uncleBoonmeeFilmHistoryProfile.scenarioId]: uncleBoonmeeFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [uncleBoonmeeFilmHistoryProfile.scenarioId]: uncleBoonmeeFilmHistoryProfile,\n  [treeOfLifeFilmHistoryProfile.scenarioId]: treeOfLifeFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Tree of Life profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 527;", "const EXPECTED_PLAYABLE_SCENARIOS = 528;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 527;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 528;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenUncleBoonmeeExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenUncleBoonmeeExpansion.ts",\n  "chapterEighteenTreeOfLifeExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 527;", "const EXPECTED_ATLAS_COUNT = 528;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenUncleBoonmeeExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenUncleBoonmeeExpansion.ts",\n  "chapterEighteenTreeOfLifeExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 527, 528, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 527, 528, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Poetry", "Somewhere", "Uncle Boonmee Who Can Recall His Past Lives", "A Separation", "Pietà",',
    '"Poetry", "Somewhere", "Uncle Boonmee Who Can Recall His Past Lives", "A Separation", "The Tree of Life", "Pietà",',
    "Chapter 18 exactExisting Tree of Life");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "The Tree of Life", "Pina",',
    'const exactP1Queue = [\n  "Pina",',
    "Chapter 18 P1 Tree of Life removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 70);", "assert.equal(exactExisting.length, 71);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 11);", "assert.equal(exactP1Queue.length, 10);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 11);", "assert.equal(resolved.recommendedNewProductionCases.length, 10);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 528 || resolved.atlas?.actualCount !== 528) throw new Error("Chapter 18 did not materialize 528/528");
if (!resolved.byDecision?.USE_EXISTING?.includes("The Tree of Life")) throw new Error("The Tree of Life did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("The Tree of Life")) throw new Error("The Tree of Life remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 71) throw new Error(`Expected 71 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 10) throw new Error(`Expected 10 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 10) throw new Error("Expected 10 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Pina") throw new Error(`Expected Pina next P1, got ${resolved.byDecision?.P1?.[0]}`);

console.log("TREE_OF_LIFE_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
