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
function restoreFromCommit(commit, path) {
  const result = spawnSync("git", ["show", `${commit}:${path}`], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(`Failed to restore ${path} from ${commit}: ${result.stderr}`);
  write(path, result.stdout);
}

const deferredSourceCommit = "273e2337e5a1cf665ef0123077685d72ed326b6a";
restoreFromCommit(deferredSourceCommit, "src/ui/data/scenarioProductionVerificationPina.ts");
restoreFromCommit(deferredSourceCommit, "src/ui/data/scenarioFilmStudyChapterEighteenPina.ts");

{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { mergeChapterEighteenTreeOfLifeExpansion } from "../../core/chapterEighteenTreeOfLifeExpansion.js";\n',
    'import { mergeChapterEighteenTreeOfLifeExpansion } from "../../core/chapterEighteenTreeOfLifeExpansion.js";\nimport { mergeChapterEighteenPinaExpansion } from "../../core/chapterEighteenPinaExpansion.js";\n',
    "filmScenarios Pina import");
  s = replaceOnce(s,
    'const chapterEighteenTreeOfLifeScenarios = mergeChapterEighteenTreeOfLifeExpansion(chapterEighteenUncleBoonmeeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenTreeOfLifeScenarios);',
    'const chapterEighteenTreeOfLifeScenarios = mergeChapterEighteenTreeOfLifeExpansion(chapterEighteenUncleBoonmeeScenarios);\nconst chapterEighteenPinaScenarios = mergeChapterEighteenPinaExpansion(chapterEighteenTreeOfLifeScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenPinaScenarios);',
    "filmScenarios Pina merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_tree_of_life_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Tree of Life source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_pina_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_pina_expansion_2026");
  }
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { treeOfLifeProductionCaseVerification } from "./scenarioProductionVerificationTreeOfLife";\n',
    'import { treeOfLifeProductionCaseVerification } from "./scenarioProductionVerificationTreeOfLife";\nimport { pinaProductionCaseVerification } from "./scenarioProductionVerificationPina";\n',
    "verification Pina import");
  s = replaceOnce(s,
    "  treeOfLifeProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  treeOfLifeProductionCaseVerification,\n  pinaProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Pina record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { treeOfLifeFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTreeOfLife";\n',
    'import { treeOfLifeFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenTreeOfLife";\nimport { pinaFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenPina";\n',
    "Film Study Pina import");
  s = replaceOnce(s,
    "  [treeOfLifeFilmHistoryProfile.scenarioId]: treeOfLifeFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [treeOfLifeFilmHistoryProfile.scenarioId]: treeOfLifeFilmHistoryProfile,\n  [pinaFilmHistoryProfile.scenarioId]: pinaFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Pina profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 528;", "const EXPECTED_PLAYABLE_SCENARIOS = 529;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 528;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 529;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenTreeOfLifeExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenTreeOfLifeExpansion.ts",\n  "chapterEighteenPinaExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 528;", "const EXPECTED_ATLAS_COUNT = 529;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenTreeOfLifeExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenTreeOfLifeExpansion.ts",\n  "chapterEighteenPinaExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 528, 529, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 528, 529, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"A Separation", "The Tree of Life", "Pietà",',
    '"A Separation", "The Tree of Life", "Pina", "Pietà",',
    "Chapter 18 exactExisting Pina");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Pina", "Amour",',
    'const exactP1Queue = [\n  "Amour",',
    "Chapter 18 P1 Pina removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 71);", "assert.equal(exactExisting.length, 72);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 10);", "assert.equal(exactP1Queue.length, 9);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 10);", "assert.equal(resolved.recommendedNewProductionCases.length, 9);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 529 || resolved.atlas?.actualCount !== 529) throw new Error("Chapter 18 did not materialize 529/529");
if (!resolved.byDecision?.USE_EXISTING?.includes("Pina")) throw new Error("Pina did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Pina")) throw new Error("Pina remained P1");
if (resolved.byDecision?.USE_EXISTING?.length !== 72) throw new Error(`Expected 72 USE_EXISTING cases, got ${resolved.byDecision?.USE_EXISTING?.length}`);
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 9) throw new Error(`Expected 9 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 9) throw new Error("Expected 9 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Amour") throw new Error(`Expected Amour next P1, got ${resolved.byDecision?.P1?.[0]}`);

console.log("PINA_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
