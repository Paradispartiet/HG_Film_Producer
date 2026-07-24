import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const completedScenarioIds = new Set([
  "scenario_viridiana_1961",
  "scenario_the_gospel_according_to_st_matthew_1964",
  "scenario_au_hasard_balthazar_1966",
]);

test("capture updated Production Case rest audit", () => {
  const sourcePath = path.join(process.cwd(), "docs", "PRODUCTION_CASE_REST_AUDIT.md");
  let source = readFileSync(sourcePath, "utf8")
    .replace("| Source-verified Production Cases | 247 |", "| Source-verified Production Cases | 250 |")
    .replace("| Remaining unverified Production Cases | 131 |", "| Remaining unverified Production Cases | 128 |")
    .replace("| Source-backed Film Study profiles | 247 |", "| Source-backed Film Study profiles | 250 |")
    .replace("| Scenarios without source-backed profile | 131 |", "| Scenarios without source-backed profile | 128 |")
    .replace("all 247 verified records and profiles", "all 250 verified records and profiles")
    .replace("| `italyFranceGermanyBeneluxExpansion.ts` | 13 |", "| `italyFranceGermanyBeneluxExpansion.ts` | 11 |")
    .replace("| `easternIberianBritishExpansion.ts` | 3 |", "| `easternIberianBritishExpansion.ts` | 2 |")
    .replace("| 1960s | 3 |\n", "")
    .replace("| Drama | 117 |", "| Drama | 114 |")
    .replace("| Comedy | 32 |", "| Comedy | 31 |")
    .replace("| Biography | 12 |", "| Biography | 11 |")
    .replace("| History | 3 |", "| History | 2 |");

  let nextIndex = 1;
  source = source.split("\n").map((line) => {
    const match = line.match(/^\|\s*(\d+)\s*\|\s*(\d{4})\s*\|\s*(.*?)\s*\|\s*`(scenario_[^`]+)`\s*\|$/);
    if (!match) return line;
    const [, , year, title, scenarioId] = match;
    if (!year || !title || !scenarioId) return line;
    if (completedScenarioIds.has(scenarioId)) return "";
    const updated = `| ${nextIndex} | ${year} | ${title.trim()} | \`${scenarioId}\` |`;
    nextIndex += 1;
    return updated;
  }).filter((line) => line !== "").join("\n");

  const outputDirectory = path.join(process.cwd(), "verify-v0.1-diagnostics");
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(path.join(outputDirectory, "PRODUCTION_CASE_REST_AUDIT.md"), source, "utf8");
  console.log(`REST_AUDIT_BASE64:${Buffer.from(source, "utf8").toString("base64")}:REST_AUDIT_BASE64_END`);
  assert.fail("Intentional capture run for updated rest-audit document");
});
