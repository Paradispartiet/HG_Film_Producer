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
    'import { mergeChapterEighteenPansLabyrinthExpansion } from "../../core/chapterEighteenPansLabyrinthExpansion.js";\n',
    'import { mergeChapterEighteenPansLabyrinthExpansion } from "../../core/chapterEighteenPansLabyrinthExpansion.js";\nimport { mergeChapterEighteenApocalyptoExpansion } from "../../core/chapterEighteenApocalyptoExpansion.js";\n',
    "filmScenarios Apocalypto import");
  s = replaceOnce(s,
    'const chapterEighteenPansLabyrinthScenarios = mergeChapterEighteenPansLabyrinthExpansion(chapterEighteenChildrenOfMenScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenPansLabyrinthScenarios);',
    'const chapterEighteenPansLabyrinthScenarios = mergeChapterEighteenPansLabyrinthExpansion(chapterEighteenChildrenOfMenScenarios);\nconst chapterEighteenApocalyptoScenarios = mergeChapterEighteenApocalyptoExpansion(chapterEighteenPansLabyrinthScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenApocalyptoScenarios);',
    "filmScenarios Apocalypto merge chain");
  const sourceAnchor = "+manual_chapter_eighteen_pans_labyrinth_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing Pan's Labyrinth source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_apocalypto_expansion_2026")) s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_apocalypto_expansion_2026");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { pansLabyrinthProductionCaseVerification } from "./scenarioProductionVerificationPansLabyrinth";\n',
    'import { pansLabyrinthProductionCaseVerification } from "./scenarioProductionVerificationPansLabyrinth";\nimport { apocalyptoProductionCaseVerification } from "./scenarioProductionVerificationApocalypto";\n',
    "verification Apocalypto import");
  s = replaceOnce(s,
    "  pansLabyrinthProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  pansLabyrinthProductionCaseVerification,\n  apocalyptoProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Apocalypto record");
  write(path, s);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(s,
    'import { pansLabyrinthFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenPansLabyrinth";\n',
    'import { pansLabyrinthFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenPansLabyrinth";\nimport { apocalyptoFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenApocalypto";\n',
    "Film Study Apocalypto import");
  s = replaceOnce(s,
    "  [pansLabyrinthFilmHistoryProfile.scenarioId]: pansLabyrinthFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [pansLabyrinthFilmHistoryProfile.scenarioId]: pansLabyrinthFilmHistoryProfile,\n  [apocalyptoFilmHistoryProfile.scenarioId]: apocalyptoFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Apocalypto profile");
  write(path, s);
}

{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 524;", "const EXPECTED_PLAYABLE_SCENARIOS = 525;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 524;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 525;", "REST verified count");
  s = replaceOnce(s,
    '  "chapterEighteenPansLabyrinthExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenPansLabyrinthExpansion.ts",\n  "chapterEighteenApocalyptoExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order");
  write(path, s);
}

const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 524;", "const EXPECTED_ATLAS_COUNT = 525;", `${chapter} audit count`);
  s = replaceOnce(s,
    '  "chapterEighteenPansLabyrinthExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenPansLabyrinthExpansion.ts",\n  "chapterEighteenApocalyptoExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`);
  write(path, s);
}

for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 524, 525, `${chapter} audit contract`));
}

{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 524, 525, "Chapter Eighteen audit contract");
  s = replaceOnce(s,
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "Inland Empire", "Still Life", "Children of Men", "Pan\'s Labyrinth", "Zodiac",',
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Caché", "Inland Empire", "Still Life", "Children of Men", "Pan\'s Labyrinth", "Apocalypto", "Zodiac",',
    "Chapter 18 exactExisting Apocalypto");
  s = replaceOnce(s,
    'const exactP1Queue = [\n  "Apocalypto", "There Will Be Blood",',
    'const exactP1Queue = [\n  "There Will Be Blood",',
    "Chapter 18 P1 Apocalypto removal");
  s = replaceOnce(s, "assert.equal(exactExisting.length, 67);", "assert.equal(exactExisting.length, 68);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 14);", "assert.equal(exactP1Queue.length, 13);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 14);", "assert.equal(resolved.recommendedNewProductionCases.length, 13);", "Chapter 18 recommended length");
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
if (resolved.atlas?.expectedCount !== 525 || resolved.atlas?.actualCount !== 525) throw new Error("Chapter 18 did not materialize 525/525");
if (!resolved.byDecision?.USE_EXISTING?.includes("Apocalypto")) throw new Error("Apocalypto did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Apocalypto")) throw new Error("Apocalypto remained P1");
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 13) throw new Error(`Expected 13 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 13) throw new Error("Expected 13 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "There Will Be Blood") throw new Error(`Expected There Will Be Blood next P1, got ${resolved.byDecision?.P1?.[0]}`);

console.log("APOCALYPTO_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
