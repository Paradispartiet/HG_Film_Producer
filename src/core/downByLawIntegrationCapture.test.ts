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
  console.log(`DOWN_BY_LAW_${label}_BASE64:${Buffer.from(content, "utf8").toString("base64")}`);
}

test("capture Down by Law integration files", () => {
  let resolver = readFileSync("src/ui/data/scenarioFilmStudyIndependentStorytellingBatch.ts", "utf8");
  resolver = replaceOnce(
    resolver,
    'import type { ScenarioProductionBrief } from "./scenarioProductionBriefs";',
    'import {\n  getDownByLawFilmHistoryDonors,\n  getDownByLawFilmHistoryProfile,\n} from "./scenarioFilmStudyIndependentStorytellingDownByLawCatalog";\nimport type { ScenarioProductionBrief } from "./scenarioProductionBriefs";',
    "Down by Law catalog import",
  );
  resolver = replaceOnce(
    resolver,
    "  return getPriorityIndieFinalProfile(scenarioId)\n    ?? getIndependentStorytellingCatalogProfile(scenarioId);",
    "  return getDownByLawFilmHistoryProfile(scenarioId)\n    ?? getPriorityIndieFinalProfile(scenarioId)\n    ?? getIndependentStorytellingCatalogProfile(scenarioId);",
    "Down by Law profile resolution",
  );
  resolver = replaceOnce(
    resolver,
    "  const priorityDonors = getPriorityIndieFinalDonors(profile);\n  const group = getIndependentStorytellingProfileGroup(profile.scenarioId);\n  const donors = priorityDonors ?? getIndependentStorytellingDonors(profile);",
    "  const downByLawDonors = getDownByLawFilmHistoryDonors(profile);\n  const priorityDonors = getPriorityIndieFinalDonors(profile);\n  const group = getIndependentStorytellingProfileGroup(profile.scenarioId);\n  const donors = downByLawDonors ?? priorityDonors ?? getIndependentStorytellingDonors(profile);",
    "Down by Law donor selection",
  );
  resolver = replaceOnce(
    resolver,
    '  const priorityPartial = "This is another final priority-independent system, but it organizes comic alienation, architectural attention or abrasive regional hustle through a different balance of design, performance, place, editing and sound.";\n  const priorityMiss = "This places the film inside the wrong relationship between American independent production, designed environment, regional observation, social performance, analogue or spatial form and audience identification.";',
    '  const downByLawPartial = "This is another American independent outsider-location system, but it organizes city recurrence, conversational drift or neighborhood observation through a different balance of structure, performance, place, editing and sound.";\n  const downByLawMiss = "This places the film inside the wrong relationship between American independent production, outsider ensemble, regional location, ellipsis, multilingual performance and music.";\n  const priorityPartial = "This is another final priority-independent system, but it organizes comic alienation, architectural attention or abrasive regional hustle through a different balance of design, performance, place, editing and sound.";\n  const priorityMiss = "This places the film inside the wrong relationship between American independent production, designed environment, regional observation, social performance, analogue or spatial form and audience identification.";',
    "Down by Law feedback",
  );
  resolver = replaceOnce(
    resolver,
    "      feedback: priorityDonors ? priorityPartial : partialFeedback(group),",
    "      feedback: downByLawDonors ? downByLawPartial : priorityDonors ? priorityPartial : partialFeedback(group),",
    "Down by Law partial feedback",
  );
  resolver = replaceOnce(
    resolver,
    "      feedback: priorityDonors ? priorityMiss : missFeedback(group),",
    "      feedback: downByLawDonors ? downByLawMiss : priorityDonors ? priorityMiss : missFeedback(group),",
    "Down by Law miss feedback",
  );

  let registry = readFileSync("src/ui/data/scenarioProductionVerificationRegistry.ts", "utf8");
  registry = replaceOnce(
    registry,
    'import { independentStorytellingVerificationRecords } from "./scenarioProductionVerificationIndependentStorytellingBatch";',
    'import { independentStorytellingVerificationRecords } from "./scenarioProductionVerificationIndependentStorytellingBatch";\nimport { downByLawVerificationRecords } from "./scenarioProductionVerificationDownByLaw";',
    "Down by Law verification import",
  );
  registry = replaceOnce(
    registry,
    "  ...independentStorytellingVerificationRecords,",
    "  ...independentStorytellingVerificationRecords,\n  ...downByLawVerificationRecords,",
    "Down by Law verification spread",
  );

  let verificationTest = readFileSync("src/ui/data/scenarioProductionVerification.test.ts", "utf8");
  verificationTest = replaceOnce(
    verificationTest,
    '  ["Brazil retro-futurist bureaucratic production system", ["scenario_brazil_1985"], 5],',
    '  ["Brazil retro-futurist bureaucratic production system", ["scenario_brazil_1985"], 5],\n  ["Down by Law independent outsider-location production system", ["scenario_down_by_law_1986"], 5],',
    "Down by Law verification group",
  );
  verificationTest = replaceOnce(
    verificationTest,
    "const expectedVerifiedCount = 259;",
    "const expectedVerifiedCount = 260;",
    "verified count",
  );

  emit("RESOLVER", resolver);
  emit("REGISTRY", registry);
  emit("VERIFICATION_TEST", verificationTest);
  assert.fail("Down by Law integration capture complete");
});
