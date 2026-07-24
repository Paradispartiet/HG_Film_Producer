import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const completedScenarioIds = new Set([
  "scenario_a_clockwork_orange_1971",
  "scenario_amarcord_1973",
  "scenario_scenes_from_a_marriage_1974",
]);

test("capture updated Production Case rest audit after closing the 1970s", () => {
  const sourcePath = path.join(process.cwd(), "docs", "PRODUCTION_CASE_REST_AUDIT.md");
  let source = readFileSync(sourcePath, "utf8")
    .replace("| Source-verified Production Cases | 254 |", "| Source-verified Production Cases | 257 |")
    .replace("| Remaining unverified Production Cases | 124 |", "| Remaining unverified Production Cases | 121 |")
    .replace("| Source-backed Film Study profiles | 254 |", "| Source-backed Film Study profiles | 257 |")
    .replace("| Scenarios without source-backed profile | 124 |", "| Scenarios without source-backed profile | 121 |")
    .replace("all 254 verified records and profiles", "all 257 verified records and profiles")
    .replace("| `film_scenarios_seed.json` | 109 |", "| `film_scenarios_seed.json` | 107 |")
    .replace("| `italyFranceGermanyBeneluxExpansion.ts` | 11 |", "| `italyFranceGermanyBeneluxExpansion.ts` | 10 |")
    .replace("| 1970s | 3 |\n", "")
    .replace("| Drama | 110 |", "| Drama | 108 |")
    .replace("| Crime | 32 |", "| Crime | 31 |")
    .replace("| Comedy | 30 |", "| Comedy | 29 |")
    .replace("| Thriller | 26 |", "| Thriller | 24 |")
    .replace("| Sci-Fi | 6 |", "| Sci-Fi | 5 |");

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

  assert.equal(nextIndex - 1, 121);
  console.log(`FINAL1970S_AUDIT_BASE64:${Buffer.from(source, "utf8").toString("base64")}:FINAL1970S_AUDIT_BASE64_END`);
  assert.fail("Intentional capture run for updated Production Case rest audit");
});
