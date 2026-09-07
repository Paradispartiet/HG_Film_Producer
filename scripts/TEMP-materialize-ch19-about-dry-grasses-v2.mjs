import { execFileSync } from "node:child_process";
import { readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const sourcePath = path.join(root, "scripts", "TEMP-materialize-ch19-about-dry-grasses.mjs");
const fixedPath = path.join(root, "scripts", `.TEMP-materialize-ch19-about-dry-grasses-fixed-${process.pid}.mjs`);
const before = 'invariant((read(files.expansion).match(new RegExp(SCENARIO_ID, "g")) ?? []).length >= 2, "Expansion must define and test/use the canonical ID.");';
const after = 'invariant((read(files.expansion).match(new RegExp(SCENARIO_ID, "g")) ?? []).length === 1, "Expansion must define exactly one literal canonical scenario ID.");\ninvariant(read(files.test).includes(SCENARIO_ID), "Expansion test must lock the canonical scenario ID.");';
const source = readFileSync(sourcePath, "utf8");
const first = source.indexOf(before);
if (first < 0 || source.indexOf(before, first + before.length) >= 0) throw new Error("Expected exactly one faulty expansion-ID assertion to correct.");
writeFileSync(fixedPath, source.slice(0, first) + after + source.slice(first + before.length));
try {
  execFileSync(process.execPath, [fixedPath], { cwd: root, stdio: "inherit", maxBuffer: 32 * 1024 * 1024 });
} finally {
  try { unlinkSync(fixedPath); } catch (error) { if (error?.code !== "ENOENT") throw error; }
}
