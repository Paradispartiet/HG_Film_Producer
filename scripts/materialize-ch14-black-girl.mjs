import { readFileSync, writeFileSync } from "node:fs";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, value) { writeFileSync(path, value); }
function replaceOnce(source, from, to, label) {
  const first = source.indexOf(from);
  if (first < 0) throw new Error(`${label}: source text not found`);
  if (source.indexOf(from, first + from.length) >= 0) throw new Error(`${label}: source text is not unique`);
  return source.slice(0, first) + to + source.slice(first + from.length);
}
function replaceAllChecked(source, from, to, label) {
  const count = source.split(from).length - 1;
  if (count < 1) throw new Error(`${label}: no occurrences of ${from}`);
  return source.split(from).join(to);
}

const expansionFile = '  "chapterFourteenBlackGirlExpansion.ts",\n';

for (const path of [
  "scripts/production-case-rest-audit.mjs",
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "scripts/film-history-chapter-fourteen-atlas-audit.mjs",
]) {
  let source = read(path);
  source = replaceAllChecked(source, "443", "444", `${path} count`);
  source = replaceOnce(
    source,
    '  "chapterThirteenAManEscapedExpansion.ts",\n  "modernCanonExpansion.ts",',
    `  "chapterThirteenAManEscapedExpansion.ts",\n${expansionFile}  "modernCanonExpansion.ts",`,
    `${path} expansion order`,
  );
  write(path, source);
}

{
  const path = "scripts/film-history-chapter-fourteen-atlas-audit.mjs";
  let source = read(path);
  source = replaceOnce(
    source,
    '{ title: "Black Girl", originalTitle: "La Noire de…", year: 1966, aliases: ["La Noire de...", "La Noire de", "Black Girl"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
    '{ title: "Black Girl", originalTitle: "La Noire de…", year: 1966, aliases: ["La Noire de...", "La Noire de", "Black Girl"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_black_girl_1966", chapterFunction:',
    "Chapter 14 Black Girl candidate exact id",
  );
  write(path, source);
}

{
  const path = "src/ui/data/filmScenarios.ts";
  let source = read(path);
  source = replaceOnce(
    source,
    'import { mergeChapterThirteenAManEscapedExpansion } from "../../core/chapterThirteenAManEscapedExpansion.js";\n',
    'import { mergeChapterThirteenAManEscapedExpansion } from "../../core/chapterThirteenAManEscapedExpansion.js";\nimport { mergeChapterFourteenBlackGirlExpansion } from "../../core/chapterFourteenBlackGirlExpansion.js";\n',
    "filmScenarios import",
  );
  source = replaceOnce(
    source,
    'const chapterThirteenAManEscapedScenarios = mergeChapterThirteenAManEscapedExpansion(chapterThirteenUgetsuScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterThirteenAManEscapedScenarios);',
    'const chapterThirteenAManEscapedScenarios = mergeChapterThirteenAManEscapedExpansion(chapterThirteenUgetsuScenarios);\nconst chapterFourteenBlackGirlScenarios = mergeChapterFourteenBlackGirlExpansion(chapterThirteenAManEscapedScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterFourteenBlackGirlScenarios);',
    "filmScenarios merge",
  );
  source = replaceOnce(
    source,
    '+manual_chapter_thirteen_a_man_escaped_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
    '+manual_chapter_thirteen_a_man_escaped_expansion_2026+manual_chapter_fourteen_black_girl_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
    "filmScenarios source list",
  );
  source = replaceOnce(
    source,
    'Chapter 13 Paisan, The Red Shoes, Sunset Boulevard, Los olvidados, Ugetsu, and A Man Escaped postwar-noir-realism-reconstruction expansions, modern independent/Asian/prize-cinema expansion,',
    'Chapter 13 Paisan, The Red Shoes, Sunset Boulevard, Los olvidados, Ugetsu, and A Man Escaped postwar-noir-realism-reconstruction expansions, Chapter 14 Black Girl New Waves-modernism-decolonization expansion, modern independent/Asian/prize-cinema expansion,',
    "filmScenarios note",
  );
  write(path, source);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let source = read(path);
  source = replaceOnce(
    source,
    'import { aManEscapedFilmHistoryProfile } from "./scenarioFilmStudyPostwarAManEscaped";\n',
    'import { aManEscapedFilmHistoryProfile } from "./scenarioFilmStudyPostwarAManEscaped";\nimport { blackGirlFilmHistoryProfile } from "./scenarioFilmStudyNewWavesBlackGirl";\n',
    "Film Study import",
  );
  source = replaceOnce(
    source,
    '  [aManEscapedFilmHistoryProfile.scenarioId]: aManEscapedFilmHistoryProfile,\n',
    '  [aManEscapedFilmHistoryProfile.scenarioId]: aManEscapedFilmHistoryProfile,\n  [blackGirlFilmHistoryProfile.scenarioId]: blackGirlFilmHistoryProfile,\n',
    "Film Study registry",
  );
  write(path, source);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let source = read(path);
  source = replaceOnce(
    source,
    'import { aManEscapedProductionCaseVerification } from "./scenarioProductionVerificationAManEscaped";\n',
    'import { aManEscapedProductionCaseVerification } from "./scenarioProductionVerificationAManEscaped";\nimport { blackGirlProductionCaseVerification } from "./scenarioProductionVerificationBlackGirl";\n',
    "verification import",
  );
  source = replaceOnce(
    source,
    '  aManEscapedProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
    '  aManEscapedProductionCaseVerification,\n  blackGirlProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
    "verification registry",
  );
  write(path, source);
}

for (const path of [
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  "src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  "src/core/filmHistoryChapterFourteenAuditContract.test.ts",
]) {
  let source = read(path);
  source = replaceAllChecked(source, "443", "444", `${path} count`);
  write(path, source);
}

{
  const path = "src/core/filmHistoryChapterFourteenAuditContract.test.ts";
  let source = read(path);
  source = replaceOnce(
    source,
    '  "The Umbrellas of Cherbourg",\n  "The Battle of Algiers",',
    '  "The Umbrellas of Cherbourg",\n  "Black Girl",\n  "The Battle of Algiers",',
    "Chapter 14 required Black Girl",
  );
  source = replaceOnce(
    source,
    'const exactP1Queue = ["Black Girl", "Memories of Underdevelopment"];',
    'const exactP1Queue = ["Memories of Underdevelopment"];',
    "Chapter 14 queue",
  );
  source = replaceOnce(
    source,
    '  assert.equal(byTitle.get("The Umbrellas of Cherbourg")?.scenarioId, "scenario_the_umbrellas_of_cherbourg_1964");\n  assert.equal(byTitle.get("The Battle of Algiers")?.scenarioId, "scenario_the_battle_of_algiers_1966");',
    '  assert.equal(byTitle.get("The Umbrellas of Cherbourg")?.scenarioId, "scenario_the_umbrellas_of_cherbourg_1964");\n  assert.equal(byTitle.get("Black Girl")?.scenarioId, "scenario_black_girl_1966");\n  assert.equal(byTitle.get("The Battle of Algiers")?.scenarioId, "scenario_the_battle_of_algiers_1966");',
    "Chapter 14 exact Black Girl id",
  );
  write(path, source);
}

console.log("Black Girl Chapter 14 materialization applied");
