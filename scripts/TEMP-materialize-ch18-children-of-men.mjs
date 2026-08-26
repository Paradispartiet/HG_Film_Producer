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
    'import { mergeChapterEighteenCacheExpansion } from "../../core/chapterEighteenCacheExpansion.js";\n',
    'import { mergeChapterEighteenCacheExpansion } from "../../core/chapterEighteenCacheExpansion.js";\nimport { mergeChapterEighteenChildrenOfMenExpansion } from "../../core/chapterEighteenChildrenOfMenExpansion.js";\n',
    "filmScenarios Children of Men import");
  s = replaceOnce(s,
    'const chapterEighteenCacheScenarios = mergeChapterEighteenCacheExpansion(chapterEighteenBrokebackMountainScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenCacheScenarios);',
    'const chapterEighteenCacheScenarios = mergeChapterEighteenCacheExpansion(chapterEighteenBrokebackMountainScenarios);\nconst chapterEighteenChildrenOfMenScenarios = mergeChapterEighteenChildrenOfMenExpansion(chapterEighteenCacheScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenChildrenOfMenScenarios);',
    "filmScenarios Children of Men merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_cache_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Cache source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_children_of_men_expansion_2026")) s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_children_of_men_expansion_2026");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { cacheProductionCaseVerification } from "./scenarioProductionVerificationCache";\n',
    'import { cacheProductionCaseVerification } from "./scenarioProductionVerificationCache";\nimport { childrenOfMenProductionCaseVerification } from "./scenarioProductionVerificationChildrenOfMen";\n',
    "verification Children of Men import");
  s = replaceOnce(s,
    "  cacheProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  cacheProductionCaseVerification,\n  childrenOfMenProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Children of Men record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { cacheFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCache";\n',
    'import { cacheFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenCache";\nimport { childrenOfMenFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenChildrenOfMen";\n',
    "Film Study Children of Men import");
  s = replaceOnce(s,
    "  [cacheFilmHistoryProfile.scenarioId]: cacheFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [cacheFilmHistoryProfile.scenarioId]: cacheFilmHistoryProfile,\n  [childrenOfMenFilmHistoryProfile.scenarioId]: childrenOfMenFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Children of Men profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 522;", "const EXPECTED_PLAYABLE_SCENARIOS = 523;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 522;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 523;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenCacheExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenCacheExpansion.ts",\n  "chapterEighteenChildrenOfMenExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 522;", "const EXPECTED_ATLAS_COUNT = 523;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenCacheExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenCacheExpansion.ts",\n  "chapterEighteenChildrenOfMenExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 522, 523, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 522, 523, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "Inland Empire", "Still Life", "Zodiac",',
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "Inland Empire", "Still Life", "Children of Men", "Zodiac",',
    "Chapter 18 exactExisting Children of Men");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Children of Men", "Pan\'s Labyrinth",',
    'const exactP1Queue = [\n  "Pan\'s Labyrinth",',
    "Chapter 18 P1 Children of Men removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 65);", "assert.equal(exactExisting.length, 66);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 16);", "assert.equal(exactP1Queue.length, 15);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 16);", "assert.equal(resolved.recommendedNewProductionCases.length, 15);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 523 || resolved.atlas?.actualCount !== 523) throw new Error("Chapter 18 did not materialize 523/523");
if (!resolved.byDecision?.USE_EXISTING?.includes("Children of Men")) throw new Error("Children of Men did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Children of Men")) throw new Error("Children of Men remained P1");
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 15) throw new Error(`Expected 15 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 15) throw new Error("Expected 15 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Pan's Labyrinth") throw new Error(`Expected Pan's Labyrinth next P1, got ${resolved.byDecision?.P1?.[0]}`);

console.log("CHILDREN_OF_MEN_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
