import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

function replaceOnce(source: string, before: string, after: string, label: string): string {
  const first = source.indexOf(before);
  assert.notEqual(first, -1, `Missing ${label}`);
  assert.equal(source.indexOf(before, first + before.length), -1, `Duplicate ${label}`);
  return source.slice(0, first) + after + source.slice(first + before.length);
}

function emit(label: string, content: string): void {
  console.log(`BRAZIL_${label}_BASE64:${Buffer.from(content, "utf8").toString("base64")}`);
}

test("capture Brazil integration files", () => {
  let constructed = readFileSync("src/ui/data/scenarioFilmStudyConstructedWorldsBatch.ts", "utf8");
  constructed = replaceOnce(
    constructed,
    'import { aClockworkOrangeFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsClockworkOrange";',
    'import { aClockworkOrangeFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsClockworkOrange";\nimport { brazilFilmHistoryProfile } from "./scenarioFilmStudyConstructedWorldsBrazil";',
    "Brazil profile import",
  );
  constructed = replaceOnce(
    constructed,
    "const constructedWorldsProfiles = {",
    "const coreConstructedWorldsProfiles = {",
    "core profile map",
  );
  constructed = replaceOnce(
    constructed,
    "} as const satisfies Record<string, FilmHistoryProfile>;",
    "} as const satisfies Record<string, FilmHistoryProfile>;\n\nconst constructedWorldsProfiles = {\n  ...coreConstructedWorldsProfiles,\n  [brazilFilmHistoryProfile.scenarioId]: brazilFilmHistoryProfile,\n} as const satisfies Record<string, FilmHistoryProfile>;",
    "expanded profile map",
  );
  constructed = replaceOnce(
    constructed,
    "  const donors = Object.values(constructedWorldsProfiles)\n    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)",
    "  const donors = Object.values(coreConstructedWorldsProfiles)\n    .filter((candidate) => candidate.scenarioId !== profile.scenarioId)",
    "stable donor pool",
  );

  let registry = readFileSync("src/ui/data/scenarioProductionVerificationRegistry.ts", "utf8");
  registry = replaceOnce(
    registry,
    'import { constructedWorldsVerificationRecords } from "./scenarioProductionVerificationConstructedWorldsBatch";',
    'import { constructedWorldsVerificationRecords } from "./scenarioProductionVerificationConstructedWorldsBatch";\nimport { brazilVerificationRecords } from "./scenarioProductionVerificationBrazil";',
    "Brazil verification import",
  );
  registry = replaceOnce(
    registry,
    "  ...constructedWorldsVerificationRecords,",
    "  ...constructedWorldsVerificationRecords,\n  ...brazilVerificationRecords,",
    "Brazil verification spread",
  );

  let verificationTest = readFileSync("src/ui/data/scenarioProductionVerification.test.ts", "utf8");
  verificationTest = replaceOnce(
    verificationTest,
    '  ["Rumble Fish expressionist youth production system", ["scenario_rumble_fish_1983"], 4],',
    '  ["Rumble Fish expressionist youth production system", ["scenario_rumble_fish_1983"], 4],\n  ["Brazil retro-futurist bureaucratic production system", ["scenario_brazil_1985"], 5],',
    "Brazil verification group",
  );
  verificationTest = replaceOnce(
    verificationTest,
    "const expectedVerifiedCount = 258;",
    "const expectedVerifiedCount = 259;",
    "verified count",
  );

  emit("CONSTRUCTED_WORLDS", constructed);
  emit("VERIFICATION_REGISTRY", registry);
  emit("VERIFICATION_TEST", verificationTest);
  assert.fail("Brazil integration capture complete");
});
