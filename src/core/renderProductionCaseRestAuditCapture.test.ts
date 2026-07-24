import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const completedScenarioIds = new Set([
  "scenario_mean_streets_1973",
  "scenario_dog_day_afternoon_1975",
  "scenario_taxi_driver_1976",
  "scenario_manhattan_1979",
]);

test("capture updated Production Case rest audit", () => {
  const sourcePath = path.join(process.cwd(), "docs", "PRODUCTION_CASE_REST_AUDIT.md");
  let source = readFileSync(sourcePath, "utf8")
    .replace("| Source-verified Production Cases | 250 |", "| Source-verified Production Cases | 254 |")
    .replace("| Remaining unverified Production Cases | 128 |", "| Remaining unverified Production Cases | 124 |")
    .replace("| Source-backed Film Study profiles | 250 |", "| Source-backed Film Study profiles | 254 |")
    .replace("| Scenarios without source-backed profile | 128 |", "| Scenarios without source-backed profile | 124 |")
    .replace("all 250 verified records and profiles", "all 254 verified records and profiles")
    .replace("| `film_scenarios_seed.json` | 113 |", "| `film_scenarios_seed.json` | 109 |")
    .replace("| 1970s | 7 |", "| 1970s | 3 |")
    .replace("| Drama | 114 |", "| Drama | 110 |")
    .replace("| Crime | 35 |", "| Crime | 32 |")
    .replace("| Comedy | 31 |", "| Comedy | 30 |")
    .replace("| Romance | 29 |", "| Romance | 28 |")
    .replace("| Biography | 11 |", "| Biography | 10 |");

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

  console.log(`REST_AUDIT_BASE64:${Buffer.from(source, "utf8").toString("base64")}:REST_AUDIT_BASE64_END`);
  assert.fail("Intentional capture run for updated rest-audit document");
});
