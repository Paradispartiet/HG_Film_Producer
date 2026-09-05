import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import process from "node:process";

const sourcePath = "scripts/TEMP-materialize-ch19-a-hero.mjs";
const source = readFileSync(sourcePath, "utf8");

const baselineBefore = `const before = runJson(files.chapter19Audit);\nconst beforeCannes = runJson("scripts/film-history-chapter-nineteen-cannes-major-prizes-audit.mjs");`;
const baselineAfter = `const before = JSON.parse(read(files.chapter19Resolved));\nconst beforeCannes = JSON.parse(read(files.cannesResolved));`;
if (!source.includes(baselineBefore)) throw new Error("A Hero materializer prebaseline marker drifted.");

const allowedBefore = `  "src/ui/data/scenarioProductionVerificationAHero.ts",\n]);`;
const allowedAfter = `  "src/ui/data/scenarioProductionVerificationAHero.ts",\n  "scripts/TEMP-materialize-ch19-a-hero.mjs",\n]);`;
if (!source.includes(allowedBefore)) throw new Error("A Hero materializer reconciliation allowlist marker drifted.");

const patched = source
  .replace(baselineBefore, baselineAfter)
  .replace(allowedBefore, allowedAfter);

const tempPath = `/tmp/ch19-a-hero-materializer-v2-${process.pid}.mjs`;
try {
  writeFileSync(tempPath, patched);
  execFileSync(process.execPath, [tempPath], {
    cwd: process.cwd(),
    stdio: "inherit",
    maxBuffer: 64 * 1024 * 1024,
  });
} finally {
  try { unlinkSync(tempPath); } catch (error) { if (error?.code !== "ENOENT") throw error; }
}
