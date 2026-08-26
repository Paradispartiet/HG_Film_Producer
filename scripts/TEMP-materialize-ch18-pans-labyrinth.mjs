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
    'import { mergeChapterEighteenChildrenOfMenExpansion } from "../../core/chapterEighteenChildrenOfMenExpansion.js";\n',
    'import { mergeChapterEighteenChildrenOfMenExpansion } from "../../core/chapterEighteenChildrenOfMenExpansion.js";\nimport { mergeChapterEighteenPansLabyrinthExpansion } from "../../core/chapterEighteenPansLabyrinthExpansion.js";\n',
    "filmScenarios Pan's Labyrinth import");
  s = replaceOnce(s,
    'const chapterEighteenChildrenOfMenScenarios = mergeChapterEighteenChildrenOfMenExpansion(chapterEighteenCacheScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenChildrenOfMenScenarios);',
    'const chapterEighteenChildrenOfMenScenarios = mergeChapterEighteenChildrenOfMenExpansion(chapterEighteenCacheScenarios);\nconst chapterEighteenPansLabyrinthScenarios = mergeChapterEighteenPansLabyrinthExpansion(chapterEighteenChildrenOfMenScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenPansLabyrinthScenarios);',
    "filmScenarios Pan's Labyrinth merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_children_of_men_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Children of Men source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_pans_labyrinth_expansion_2026")) s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_pans_labyrinth_expansion_2026");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { childrenOfMenProductionCaseVerification } from "./scenarioProductionVerificationChildrenOfMen";\n',
    'import { childrenOfMenProductionCaseVerification } from "./scenarioProductionVerificationChildrenOfMen";\nimport { pansLabyrinthProductionCaseVerification } from "./scenarioProductionVerificationPansLabyrinth";\n',
    "verification Pan's Labyrinth import");
  s = replaceOnce(s,
    "  childrenOfMenProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  childrenOfMenProductionCaseVerification,\n  pansLabyrinthProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Pan's Labyrinth record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { childrenOfMenFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenChildrenOfMen";\n',
    'import { childrenOfMenFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenChildrenOfMen";\nimport { pansLabyrinthFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenPansLabyrinth";\n',
    "Film Study Pan's Labyrinth import");
  s = replaceOnce(s,
    "  [childrenOfMenFilmHistoryProfile.scenarioId]: childrenOfMenFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [childrenOfMenFilmHistoryProfile.scenarioId]: childrenOfMenFilmHistoryProfile,\n  [pansLabyrinthFilmHistoryProfile.scenarioId]: pansLabyrinthFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Pan's Labyrinth profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 523;", "const EXPECTED_PLAYABLE_SCENARIOS = 524;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 523;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 524;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenChildrenOfMenExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenChildrenOfMenExpansion.ts",\n  "chapterEighteenPansLabyrinthExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 523;", "const EXPECTED_ATLAS_COUNT = 524;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenChildrenOfMenExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenChildrenOfMenExpansion.ts",\n  "chapterEighteenPansLabyrinthExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 523, 524, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 523, 524, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "Inland Empire", "Still Life", "Children of Men", "Zodiac",',
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "Inland Empire", "Still Life", "Children of Men", "Pan\'s Labyrinth", "Zodiac",',
    "Chapter 18 exactExisting Pan's Labyrinth");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Pan\'s Labyrinth", "Apocalypto",',
    'const exactP1Queue = [\n  "Apocalypto",',
    "Chapter 18 P1 Pan's Labyrinth removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 66);", "assert.equal(exactExisting.length, 67);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 15);", "assert.equal(exactP1Queue.length, 14);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 15);", "assert.equal(resolved.recommendedNewProductionCases.length, 14);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 524 || resolved.atlas?.actualCount !== 524) throw new Error("Chapter 18 did not materialize 524/524");
if (!resolved.byDecision?.USE_EXISTING?.includes("Pan's Labyrinth")) throw new Error("Pan's Labyrinth did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Pan's Labyrinth")) throw new Error("Pan's Labyrinth remained P1");
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 14) throw new Error(`Expected 14 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 14) throw new Error("Expected 14 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Apocalypto") throw new Error(`Expected Apocalypto next P1, got ${resolved.byDecision?.P1?.[0]}`);

console.log("PANS_LABYRINTH_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
