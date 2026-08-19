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

const expansionFile = '  "chapterFourteenMemoriesUnderdevelopmentExpansion.ts",\n';

for (const path of [
  "scripts/production-case-rest-audit.mjs",
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "scripts/film-history-chapter-fourteen-atlas-audit.mjs",
]) {
  let source = read(path);
  source = replaceAllChecked(source, "444", "445", `${path} count`);
  source = replaceOnce(
    source,
    '  "chapterFourteenBlackGirlExpansion.ts",\n  "modernCanonExpansion.ts",',
    `  "chapterFourteenBlackGirlExpansion.ts",\n${expansionFile}  "modernCanonExpansion.ts",`,
    `${path} expansion order`,
  );
  write(path, source);
}

{
  const path = "scripts/film-history-chapter-fourteen-atlas-audit.mjs";
  let source = read(path);
  source = replaceOnce(
    source,
    '{ title: "Memories of Underdevelopment", originalTitle: "Memorias del subdesarrollo", year: 1968, aliases: ["Memorias del subdesarrollo", "Memories of Underdevelopment"], role: "major_comparison", decisionIfMissing: "P1", chapterFunction:',
    '{ title: "Memories of Underdevelopment", originalTitle: "Memorias del subdesarrollo", year: 1968, aliases: ["Memorias del subdesarrollo", "Memories of Underdevelopment"], role: "major_comparison", decisionIfMissing: "P1", expectedScenarioId: "scenario_memories_of_underdevelopment_1968", chapterFunction:',
    "Chapter 14 Memories candidate exact id",
  );
  write(path, source);
}

{
  const path = "src/ui/data/filmScenarios.ts";
  let source = read(path);
  source = replaceOnce(
    source,
    'import { mergeChapterFourteenBlackGirlExpansion } from "../../core/chapterFourteenBlackGirlExpansion.js";\n',
    'import { mergeChapterFourteenBlackGirlExpansion } from "../../core/chapterFourteenBlackGirlExpansion.js";\nimport { mergeChapterFourteenMemoriesUnderdevelopmentExpansion } from "../../core/chapterFourteenMemoriesUnderdevelopmentExpansion.js";\n',
    "filmScenarios import",
  );
  source = replaceOnce(
    source,
    'const chapterFourteenBlackGirlScenarios = mergeChapterFourteenBlackGirlExpansion(chapterThirteenAManEscapedScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterFourteenBlackGirlScenarios);',
    'const chapterFourteenBlackGirlScenarios = mergeChapterFourteenBlackGirlExpansion(chapterThirteenAManEscapedScenarios);\nconst chapterFourteenMemoriesUnderdevelopmentScenarios = mergeChapterFourteenMemoriesUnderdevelopmentExpansion(chapterFourteenBlackGirlScenarios);\nconst modernCanonScenarios = mergeModernCanonExpansion(chapterFourteenMemoriesUnderdevelopmentScenarios);',
    "filmScenarios merge",
  );
  source = replaceOnce(
    source,
    '+manual_chapter_fourteen_black_girl_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
    '+manual_chapter_fourteen_black_girl_expansion_2026+manual_chapter_fourteen_memories_underdevelopment_expansion_2026+manual_modern_indie_asian_prize_expansion_2026',
    "filmScenarios source list",
  );
  source = replaceOnce(
    source,
    'Chapter 14 Black Girl New Waves-modernism-decolonization expansion, modern independent/Asian/prize-cinema expansion,',
    'Chapter 14 Black Girl and Memories of Underdevelopment New Waves-modernism-decolonization expansions, modern independent/Asian/prize-cinema expansion,',
    "filmScenarios note",
  );
  write(path, source);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let source = read(path);
  source = replaceOnce(
    source,
    'import { blackGirlFilmHistoryProfile } from "./scenarioFilmStudyNewWavesBlackGirl";\n',
    'import { blackGirlFilmHistoryProfile } from "./scenarioFilmStudyNewWavesBlackGirl";\nimport { memoriesUnderdevelopmentFilmHistoryProfile } from "./scenarioFilmStudyNewWavesMemoriesUnderdevelopment";\n',
    "Film Study import",
  );
  source = replaceOnce(
    source,
    '  [blackGirlFilmHistoryProfile.scenarioId]: blackGirlFilmHistoryProfile,\n',
    '  [blackGirlFilmHistoryProfile.scenarioId]: blackGirlFilmHistoryProfile,\n  [memoriesUnderdevelopmentFilmHistoryProfile.scenarioId]: memoriesUnderdevelopmentFilmHistoryProfile,\n',
    "Film Study registry",
  );
  write(path, source);
}

{
  const path = "src/ui/data/scenarioProductionVerificationRegistry.ts";
  let source = read(path);
  source = replaceOnce(
    source,
    'import { blackGirlProductionCaseVerification } from "./scenarioProductionVerificationBlackGirl";\n',
    'import { blackGirlProductionCaseVerification } from "./scenarioProductionVerificationBlackGirl";\nimport { memoriesUnderdevelopmentProductionCaseVerification } from "./scenarioProductionVerificationMemoriesUnderdevelopment";\n',
    "verification import",
  );
  source = replaceOnce(
    source,
    '  blackGirlProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
    '  blackGirlProductionCaseVerification,\n  memoriesUnderdevelopmentProductionCaseVerification,\n  lonelyVillaProductionCaseVerification,',
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
  source = replaceAllChecked(source, "444", "445", `${path} count`);
  write(path, source);
}

{
  const path = "src/core/filmHistoryChapterFourteenAuditContract.test.ts";
  let source = read(path);
  source = replaceOnce(
    source,
    '  "PlayTime",\n];',
    '  "PlayTime",\n  "Memories of Underdevelopment",\n];',
    "Chapter 14 required Memories",
  );
  source = replaceOnce(
    source,
    'const exactP1Queue = ["Memories of Underdevelopment"];',
    'const exactP1Queue: string[] = [];',
    "Chapter 14 queue",
  );
  source = replaceOnce(
    source,
    '  assert.equal(byTitle.get("PlayTime")?.scenarioId, "scenario_playtime_1967");\n});',
    '  assert.equal(byTitle.get("PlayTime")?.scenarioId, "scenario_playtime_1967");\n  assert.equal(byTitle.get("Memories of Underdevelopment")?.scenarioId, "scenario_memories_of_underdevelopment_1968");\n});',
    "Chapter 14 exact Memories id",
  );
  write(path, source);
}

console.log("Memories of Underdevelopment Chapter 14 materialization applied");
