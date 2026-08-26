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

// Canonical scenario chain.
{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(
    s,
    'import { mergeChapterEighteenOldboyExpansion } from "../../core/chapterEighteenOldboyExpansion.js";\n',
    'import { mergeChapterEighteenOldboyExpansion } from "../../core/chapterEighteenOldboyExpansion.js";\nimport { mergeChapterEighteenBrokebackMountainExpansion } from "../../core/chapterEighteenBrokebackMountainExpansion.js";\n',
    "filmScenarios Brokeback import",
  );
  s = replaceOnce(
    s,
    'const chapterEighteenOldboyScenarios = mergeChapterEighteenOldboyExpansion(chapterEighteenUnknownPleasuresScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenOldboyScenarios);',
    'const chapterEighteenOldboyScenarios = mergeChapterEighteenOldboyExpansion(chapterEighteenUnknownPleasuresScenarios);\nconst chapterEighteenBrokebackMountainScenarios = mergeChapterEighteenBrokebackMountainExpansion(chapterEighteenOldboyScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenBrokebackMountainScenarios);',
    "filmScenarios Brokeback merge chain",
  );
  const sourceAnchor = "+manual_chapter_eighteen_oldboy_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing filmScenarios Oldboy source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_brokeback_mountain_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_brokeback_mountain_expansion_2026");
  }
  write(path, s);
}

// Production verification registry.
{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(
    s,
    'import { oldboyProductionCaseVerification } from "./scenarioProductionVerificationOldboy";\n',
    'import { oldboyProductionCaseVerification } from "./scenarioProductionVerificationOldboy";\nimport { brokebackMountainProductionCaseVerification } from "./scenarioProductionVerificationBrokebackMountain";\n',
    "verification Brokeback import",
  );
  s = replaceOnce(
    s,
    "  oldboyProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  oldboyProductionCaseVerification,\n  brokebackMountainProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Brokeback record",
  );
  write(path, s);
}

// Film Study registry.
{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(
    s,
    'import { oldboyFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenOldboy";\n',
    'import { oldboyFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenOldboy";\nimport { brokebackMountainFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenBrokebackMountain";\n',
    "Film Study Brokeback import",
  );
  s = replaceOnce(
    s,
    "  [oldboyFilmHistoryProfile.scenarioId]: oldboyFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [oldboyFilmHistoryProfile.scenarioId]: oldboyFilmHistoryProfile,\n  [brokebackMountainFilmHistoryProfile.scenarioId]: brokebackMountainFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Brokeback profile",
  );
  write(path, s);
}

// Global production-case audit count + expansion order.
{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 520;", "const EXPECTED_PLAYABLE_SCENARIOS = 521;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 520;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 521;", "REST verified count");
  s = replaceOnce(
    s,
    '  "chapterEighteenOldboyExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenOldboyExpansion.ts",\n  "chapterEighteenBrokebackMountainExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order",
  );
  write(path, s);
}

// Chapter 12–18 audit scripts all see the same canonical Atlas.
const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 520;", "const EXPECTED_ATLAS_COUNT = 521;", `${chapter} audit count`);
  s = replaceOnce(
    s,
    '  "chapterEighteenOldboyExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenOldboyExpansion.ts",\n  "chapterEighteenBrokebackMountainExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`,
  );
  write(path, s);
}

// Chapter 12–17 contract tests only advance the global Atlas count.
for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), 520, 521, `${chapter} audit contract`));
}

// Chapter 18 additionally moves Brokeback Mountain from P1 to USE_EXISTING.
{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), 520, 521, "Chapter Eighteen audit contract");
  s = replaceOnce(
    s,
    '"Head-On", "Vera Drake", "Inland Empire", "Still Life",',
    '"Head-On", "Vera Drake", "Brokeback Mountain", "Inland Empire", "Still Life",',
    "Chapter 18 exactExisting Brokeback",
  );
  s = replaceOnce(
    s,
    'const exactP1Queue = [\n  "Brokeback Mountain", "Caché",',
    'const exactP1Queue = [\n  "Caché",',
    "Chapter 18 P1 removal",
  );
  s = replaceOnce(s, "assert.equal(exactExisting.length, 63);", "assert.equal(exactExisting.length, 64);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 18);", "assert.equal(exactP1Queue.length, 17);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 18);", "assert.equal(resolved.recommendedNewProductionCases.length, 17);", "Chapter 18 recommended length");
  write(path, s);
}

// Regenerate resolved audit documents in dependency order. These scripts only persist with --write.
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

// The production-case audit itself must already pass before CI.
{
  const result = spawnSync("npm", ["run", "audit:production-cases"], { encoding: "utf8", stdio: "inherit" });
  if (result.status !== 0) throw new Error(`audit:production-cases failed with ${result.status}`);
}

const resolved = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (resolved.atlas?.expectedCount !== 521 || resolved.atlas?.actualCount !== 521) throw new Error("Chapter 18 did not materialize 521/521");
if (!resolved.byDecision?.USE_EXISTING?.includes("Brokeback Mountain")) throw new Error("Brokeback Mountain did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Brokeback Mountain")) throw new Error("Brokeback Mountain remained P1");
if (resolved.byDecision?.P0?.length !== 0) throw new Error(`Expected 0 P0 cases, got ${resolved.byDecision?.P0?.length}`);
if (resolved.byDecision?.P1?.length !== 17) throw new Error(`Expected 17 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 17) throw new Error("Expected 17 recommended new cases");
if (resolved.byDecision?.P1?.[0] !== "Caché") throw new Error(`Expected Caché next P1, got ${resolved.byDecision?.P1?.[0]}`);

console.log("BROKEBACK_MOUNTAIN_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});
