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
function replaceAllCount(source, label) {
  const matches = source.match(/\b519\b/g) ?? [];
  if (matches.length === 0) throw new Error(`Missing 519 count anchors: ${label}`);
  return source.replace(/\b519\b/g, "520");
}

// Canonical scenario chain.
{
  const path = "src/ui/data/filmScenarios.ts";
  let s = read(path);
  s = replaceOnce(
    s,
    'import { mergeChapterEighteenUnknownPleasuresExpansion } from "../../core/chapterEighteenUnknownPleasuresExpansion.js";\n',
    'import { mergeChapterEighteenUnknownPleasuresExpansion } from "../../core/chapterEighteenUnknownPleasuresExpansion.js";\nimport { mergeChapterEighteenOldboyExpansion } from "../../core/chapterEighteenOldboyExpansion.js";\n',
    "filmScenarios Oldboy import",
  );
  s = replaceOnce(
    s,
    'const chapterEighteenUnknownPleasuresScenarios = mergeChapterEighteenUnknownPleasuresExpansion(chapterEighteenTwentyEightDaysLaterScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenUnknownPleasuresScenarios);',
    'const chapterEighteenUnknownPleasuresScenarios = mergeChapterEighteenUnknownPleasuresExpansion(chapterEighteenTwentyEightDaysLaterScenarios);\nconst chapterEighteenOldboyScenarios = mergeChapterEighteenOldboyExpansion(chapterEighteenUnknownPleasuresScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterEighteenOldboyScenarios);',
    "filmScenarios Oldboy merge chain",
  );
  const sourceAnchor = "+manual_chapter_eighteen_unknown_pleasures_expansion_2026";
  if (!s.includes(sourceAnchor)) throw new Error("Missing filmScenarios Unknown Pleasures source-list anchor");
  if (!s.includes("+manual_chapter_eighteen_oldboy_expansion_2026")) {
    s = s.replace(sourceAnchor, sourceAnchor + "+manual_chapter_eighteen_oldboy_expansion_2026");
  }
  write(path, s);
}

// Production verification registry.
{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let s = read(path);
  s = replaceOnce(
    s,
    'import { unknownPleasuresProductionCaseVerification } from "./scenarioProductionVerificationUnknownPleasures";\n',
    'import { unknownPleasuresProductionCaseVerification } from "./scenarioProductionVerificationUnknownPleasures";\nimport { oldboyProductionCaseVerification } from "./scenarioProductionVerificationOldboy";\n',
    "verification Oldboy import",
  );
  s = replaceOnce(
    s,
    "  unknownPleasuresProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "  unknownPleasuresProductionCaseVerification,\n  oldboyProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,",
    "verification Oldboy record",
  );
  write(path, s);
}

// Film Study registry.
{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let s = read(path);
  s = replaceOnce(
    s,
    'import { unknownPleasuresFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenUnknownPleasures";\n',
    'import { unknownPleasuresFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenUnknownPleasures";\nimport { oldboyFilmHistoryProfile } from "./scenarioFilmStudyChapterEighteenOldboy";\n',
    "Film Study Oldboy import",
  );
  s = replaceOnce(
    s,
    "  [unknownPleasuresFilmHistoryProfile.scenarioId]: unknownPleasuresFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "  [unknownPleasuresFilmHistoryProfile.scenarioId]: unknownPleasuresFilmHistoryProfile,\n  [oldboyFilmHistoryProfile.scenarioId]: oldboyFilmHistoryProfile,\n  scenario_the_machinist_2004:",
    "Film Study Oldboy profile",
  );
  write(path, s);
}

// Global production-case audit count + expansion order.
{
  const path = "scripts/production-case-rest-audit.mjs";
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_PLAYABLE_SCENARIOS = 519;", "const EXPECTED_PLAYABLE_SCENARIOS = 520;", "REST playable count");
  s = replaceOnce(s, "const EXPECTED_VERIFIED_PRODUCTION_CASES = 519;", "const EXPECTED_VERIFIED_PRODUCTION_CASES = 520;", "REST verified count");
  s = replaceOnce(
    s,
    '  "chapterEighteenUnknownPleasuresExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenUnknownPleasuresExpansion.ts",\n  "chapterEighteenOldboyExpansion.ts",\n  "modernCanonExpansion.ts",',
    "REST expansion order",
  );
  write(path, s);
}

// Chapter 12–18 audit scripts all see the same canonical Atlas.
const chapters = ["twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"];
for (const chapter of chapters) {
  const path = `scripts/film-history-chapter-${chapter}-atlas-audit.mjs`;
  let s = read(path);
  s = replaceOnce(s, "const EXPECTED_ATLAS_COUNT = 519;", "const EXPECTED_ATLAS_COUNT = 520;", `${chapter} audit count`);
  s = replaceOnce(
    s,
    '  "chapterEighteenUnknownPleasuresExpansion.ts",\n  "modernCanonExpansion.ts",',
    '  "chapterEighteenUnknownPleasuresExpansion.ts",\n  "chapterEighteenOldboyExpansion.ts",\n  "modernCanonExpansion.ts",',
    `${chapter} expansion order`,
  );
  write(path, s);
}

// Chapter 12–17 contract tests only advance the global Atlas count.
for (const chapter of ["Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"]) {
  const path = `src/core/filmHistoryChapter${chapter}AuditContract.test.ts`;
  write(path, replaceAllCount(read(path), `${chapter} audit contract`));
}

// Chapter 18 additionally moves Oldboy from P1 to USE_EXISTING.
{
  const path = "src/core/filmHistoryChapterEighteenAuditContract.test.ts";
  let s = replaceAllCount(read(path), "Chapter Eighteen audit contract");
  s = replaceOnce(
    s,
    '"Star Wars: Episode II - Attack of the Clones", "28 Days Later", "Unknown Pleasures", "Lost in Translation", "The Return", "Collateral", "Tropical Malady",',
    '"Star Wars: Episode II - Attack of the Clones", "28 Days Later", "Unknown Pleasures", "Oldboy", "Lost in Translation", "The Return", "Collateral", "Tropical Malady",',
    "Chapter 18 exactExisting Oldboy",
  );
  s = replaceOnce(
    s,
    'const exactP1Queue = [\n  "Oldboy", "Brokeback Mountain", "Caché",',
    'const exactP1Queue = [\n  "Brokeback Mountain", "Caché",',
    "Chapter 18 P1 removal",
  );
  s = replaceOnce(s, "assert.equal(exactExisting.length, 62);", "assert.equal(exactExisting.length, 63);", "Chapter 18 existing length");
  s = replaceOnce(s, "assert.equal(exactP1Queue.length, 19);", "assert.equal(exactP1Queue.length, 18);", "Chapter 18 P1 length");
  s = replaceOnce(s, "assert.equal(resolved.recommendedNewProductionCases.length, 19);", "assert.equal(resolved.recommendedNewProductionCases.length, 18);", "Chapter 18 recommended length");
  write(path, s);
}

// Regenerate resolved audit documents in dependency order.
const chapterWords = new Map([
  [12, "twelve"], [13, "thirteen"], [14, "fourteen"], [15, "fifteen"],
  [16, "sixteen"], [17, "seventeen"], [18, "eighteen"],
]);
for (const chapter of [12, 13, 14, 15, 16, 17, 18]) {
  const word = chapterWords.get(chapter);
  const output = `docs/film-history-chapter-${word}-atlas-resolved.json`;
  const result = spawnSync("node", [`scripts/film-history-chapter-${word}-atlas-audit.mjs`, `--write=${output}`], { encoding: "utf8", stdio: "inherit" });
  if (result.status !== 0) throw new Error(`film-history chapter ${chapter} audit failed with ${result.status}`);
}

// The production-case audit itself must already pass before CI.
{
  const result = spawnSync("npm", ["run", "audit:production-cases"], { encoding: "utf8", stdio: "inherit" });
  if (result.status !== 0) throw new Error(`audit:production-cases failed with ${result.status}`);
}

const resolved = JSON.parse(read("docs/film-history-chapter-eighteen-atlas-resolved.json"));
if (resolved.atlas?.expectedCount !== 520 || resolved.atlas?.actualCount !== 520) throw new Error("Chapter 18 did not materialize 520/520");
if (!resolved.byDecision?.USE_EXISTING?.includes("Oldboy")) throw new Error("Oldboy did not become USE_EXISTING");
if (resolved.byDecision?.P1?.includes("Oldboy")) throw new Error("Oldboy remained P1");
if (resolved.byDecision?.P1?.length !== 18) throw new Error(`Expected 18 P1 cases, got ${resolved.byDecision?.P1?.length}`);
if (resolved.recommendedNewProductionCases?.length !== 18) throw new Error("Expected 18 recommended new cases");

console.log("OLD_BOY_MATERIALIZATION_OK", {
  expected: resolved.atlas.expectedCount,
  actual: resolved.atlas.actualCount,
  useExisting: resolved.byDecision.USE_EXISTING.length,
  p0: resolved.byDecision.P0.length,
  p1: resolved.byDecision.P1.length,
  nextP1: resolved.byDecision.P1[0],
});