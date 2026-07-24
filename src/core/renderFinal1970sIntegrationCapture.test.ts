import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

function transformFile(relativePath: string, replacements: readonly [string, string][]): void {
  const sourcePath = path.join(process.cwd(), relativePath);
  let source = readFileSync(sourcePath, "utf8");
  for (const [before, after] of replacements) {
    assert.ok(source.includes(before), `${relativePath}: missing transform anchor ${before}`);
    source = source.replace(before, after);
  }
  const outputPath = path.join(process.cwd(), "verify-v0.1-diagnostics", relativePath);
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, source, "utf8");
  console.log(`FINAL1970S_FILE:${Buffer.from(relativePath, "utf8").toString("base64")}:${Buffer.from(source, "utf8").toString("base64")}:FINAL1970S_FILE_END`);
}

test("capture deterministic final 1970s integration", () => {
  transformFile("src/ui/data/scenarioFilmStudyConstructedWorldsBatch.ts", [
    [
      'import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";\n',
      'import { getProductionCaseVerification } from "./scenarioProductionVerificationRegistry";\nimport { aClockworkOrangeFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsClockworkOrange";\n',
    ],
    [
      "const constructedWorldsProfiles = {\n",
      "const constructedWorldsProfiles = {\n  [aClockworkOrangeFilmHistoryProfile.scenarioId]: aClockworkOrangeFilmHistoryProfile,\n",
    ],
  ]);

  transformFile("src/ui/data/scenarioFilmStudyEuropeanPoeticMemorySystemsBatch.ts", [
    [
      'import { doubleLifeOfVeroniqueFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoeticMemoryDoubleLifeVeronique";\n',
      'import { amarcordFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoeticMemoryAmarcord";\nimport { doubleLifeOfVeroniqueFilmHistoryProfile } from "./scenarioFilmStudyEuropeanPoeticMemoryDoubleLifeVeronique";\n',
    ],
    [
      "const profiles = {\n",
      "const profiles = {\n  [amarcordFilmHistoryProfile.scenarioId]: amarcordFilmHistoryProfile,\n",
    ],
  ]);

  transformFile("src/ui/data/scenarioFilmStudyIndependentStorytellingCatalog.ts", [
    [
      'import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";\n',
      'import type { FilmHistoryProfile } from "./scenarioFilmStudyMap";\nimport { scenesFromAMarriageFilmHistoryProfile } from "./scenarioFilmStudyFamilyPerformanceScenesMarriage";\n',
    ],
    [
      "const profiles = [\n",
      "const profiles = [\n  scenesFromAMarriageFilmHistoryProfile,\n",
    ],
    [
      'assignGroup("family_performance_grief_power", [\n',
      'assignGroup("family_performance_grief_power", [\n  scenesFromAMarriageFilmHistoryProfile.scenarioId,\n',
    ],
  ]);

  transformFile("src/ui/data/scenarioProductionVerificationRegistry.ts", [
    [
      'import { familyPerformanceGriefPowerVerificationRecords } from "./scenarioProductionVerificationFamilyPerformanceGriefPowerBatch";\n',
      'import { familyPerformanceGriefPowerVerificationRecords } from "./scenarioProductionVerificationFamilyPerformanceGriefPowerBatch";\nimport { final1970sVerificationRecords } from "./scenarioProductionVerificationFinal1970sBatch";\n',
    ],
    [
      "  ...familyPerformanceGriefPowerVerificationRecords,\n",
      "  ...familyPerformanceGriefPowerVerificationRecords,\n  ...final1970sVerificationRecords,\n",
    ],
  ]);

  transformFile("src/ui/data/scenarioProductionVerification.test.ts", [
    [
      '  ["1970s New York production systems", ["scenario_mean_streets_1973", "scenario_dog_day_afternoon_1975", "scenario_taxi_driver_1976", "scenario_manhattan_1979"], 4],\n',
      '  ["1970s New York production systems", ["scenario_mean_streets_1973", "scenario_dog_day_afternoon_1975", "scenario_taxi_driver_1976", "scenario_manhattan_1979"], 4],\n  ["final 1970s production systems", ["scenario_a_clockwork_orange_1971", "scenario_amarcord_1973", "scenario_scenes_from_a_marriage_1974"], 4],\n',
    ],
    ["const expectedVerifiedCount = 254;", "const expectedVerifiedCount = 257;"],
  ]);

  assert.fail("Intentional capture run for final 1970s integration files");
});
