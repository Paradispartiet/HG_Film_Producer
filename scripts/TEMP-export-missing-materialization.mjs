import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { gzipSync } from "node:zlib";

function read(path) { return readFileSync(path, "utf8"); }
function write(path, text) { writeFileSync(path, text, "utf8"); }
function replaceOnce(text, oldValue, newValue, label) {
  const first = text.indexOf(oldValue);
  if (first < 0 || text.indexOf(oldValue, first + oldValue.length) >= 0) {
    throw new Error(`${label}: expected exactly one match`);
  }
  return text.slice(0, first) + newValue + text.slice(first + oldValue.length);
}

{
  const path = "src/ui/data/scenarioFilmStudyMap.ts";
  let text = read(path);
  text = replaceOnce(
    text,
    'import { mephistoFilmHistoryProfile } from "./scenarioFilmStudyChapterSixteenMephisto";\n',
    'import { mephistoFilmHistoryProfile } from "./scenarioFilmStudyChapterSixteenMephisto";\nimport { missingFilmHistoryProfile } from "./scenarioFilmStudyChapterSixteenMissing";\n',
    "Film Study import",
  );
  text = replaceOnce(
    text,
    '  [mephistoFilmHistoryProfile.scenarioId]: mephistoFilmHistoryProfile,\n',
    '  [mephistoFilmHistoryProfile.scenarioId]: mephistoFilmHistoryProfile,\n  [missingFilmHistoryProfile.scenarioId]: missingFilmHistoryProfile,\n',
    "Film Study map",
  );
  write(path, text);
}

const atlasScripts = [
  "scripts/film-history-chapter-twelve-atlas-audit.mjs",
  "scripts/film-history-chapter-thirteen-atlas-audit.mjs",
  "scripts/film-history-chapter-fourteen-atlas-audit.mjs",
  "scripts/film-history-chapter-fifteen-atlas-audit.mjs",
  "scripts/film-history-chapter-sixteen-atlas-audit.mjs",
];
for (const path of atlasScripts) {
  let text = read(path);
  text = replaceOnce(text, "const EXPECTED_ATLAS_COUNT = 456;", "const EXPECTED_ATLAS_COUNT = 457;", `${path} count`);
  text = replaceOnce(
    text,
    '  "chapterSixteenMephistoExpansion.ts",\n',
    '  "chapterSixteenMephistoExpansion.ts",\n  "chapterSixteenMissingExpansion.ts",\n',
    `${path} expansion`,
  );
  write(path, text);
}

for (const path of [
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  "src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  "src/core/filmHistoryChapterFourteenAuditContract.test.ts",
  "src/core/filmHistoryChapterFifteenAuditContract.test.ts",
]) {
  let text = read(path);
  const count = text.split("456").length - 1;
  if (count < 3) throw new Error(`${path}: missing 456 count locks`);
  write(path, text.replaceAll("456", "457"));
}

{
  const path = "src/core/filmHistoryChapterSixteenAuditContract.test.ts";
  let text = read(path);
  if ((text.split("456").length - 1) < 4) throw new Error("Chapter 16 contract missing 456 count locks");
  text = text.replaceAll("456", "457");
  text = replaceOnce(
    text,
    '  "Mephisto",\n  "Raiders of the Lost Ark",\n  "Rumble Fish",',
    '  "Mephisto",\n  "Raiders of the Lost Ark",\n  "Missing",\n  "Rumble Fish",',
    "Chapter 16 existing queue",
  );
  text = replaceOnce(text, 'const exactP1Queue = [\n  "Missing",\n', 'const exactP1Queue = [\n', "Chapter 16 P1 removal");
  text = replaceOnce(text, '    "Missing",\n', '', "Chapter 16 recommended removal");
  text = replaceOnce(
    text,
    '    "Mephisto": "scenario_mephisto_1981",\n    "Raiders of the Lost Ark": "scenario_raiders_of_the_lost_ark_1981",\n    "Rumble Fish":',
    '    "Mephisto": "scenario_mephisto_1981",\n    "Raiders of the Lost Ark": "scenario_raiders_of_the_lost_ark_1981",\n    "Missing": "scenario_missing_1982",\n    "Rumble Fish":',
    "Chapter 16 exact ID",
  );
  text = replaceOnce(text, 'for (const title of ["Missing", "Come and See"]) {', 'for (const title of ["Come and See"]) {', "Chapter 16 authority gap list");
  write(path, text);
}

const reportPairs = [
  ["scripts/film-history-chapter-twelve-atlas-audit.mjs", "docs/film-history-chapter-twelve-atlas-resolved.json"],
  ["scripts/film-history-chapter-thirteen-atlas-audit.mjs", "docs/film-history-chapter-thirteen-atlas-resolved.json"],
  ["scripts/film-history-chapter-fourteen-atlas-audit.mjs", "docs/film-history-chapter-fourteen-atlas-resolved.json"],
  ["scripts/film-history-chapter-fifteen-atlas-audit.mjs", "docs/film-history-chapter-fifteen-atlas-resolved.json"],
  ["scripts/film-history-chapter-sixteen-atlas-audit.mjs", "docs/film-history-chapter-sixteen-atlas-resolved.json"],
];
for (const [script, output] of reportPairs) {
  execFileSync(process.execPath, [script, `--write=${output}`], { stdio: "ignore" });
}

const exportPaths = [
  "src/ui/data/scenarioFilmStudyMap.ts",
  ...atlasScripts,
  "src/core/filmHistoryChapterTwelveAuditContract.test.ts",
  "src/core/filmHistoryChapterThirteenAuditContract.test.ts",
  "src/core/filmHistoryChapterFourteenAuditContract.test.ts",
  "src/core/filmHistoryChapterFifteenAuditContract.test.ts",
  "src/core/filmHistoryChapterSixteenAuditContract.test.ts",
  ...reportPairs.map(([, output]) => output),
];
const bundle = Object.fromEntries(exportPaths.map((path) => [path, read(path)]));
const payload = gzipSync(Buffer.from(JSON.stringify(bundle), "utf8"), { level: 9 }).toString("base64");
console.log("HG_MISSING_MATERIALIZATION_EXPORT_BEGIN");
for (let offset = 0; offset < payload.length; offset += 3000) {
  console.log(payload.slice(offset, offset + 3000));
}
console.log("HG_MISSING_MATERIALIZATION_EXPORT_END");
console.error("Controlled Missing materialization export run");
process.exit(91);
