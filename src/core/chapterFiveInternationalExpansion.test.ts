import assert from "node:assert/strict";
import test from "node:test";

import { chapterFiveInternationalExpansionDefinitions } from "./chapterFiveInternationalExpansion.js";

test("Chapter 5 keeps Fantômas as a materialized international expansion case", () => {
  assert.equal(chapterFiveInternationalExpansionDefinitions.length, 1);

  const [fantomas] = chapterFiveInternationalExpansionDefinitions;
  assert.ok(fantomas);
  assert.equal(fantomas.id, "scenario_fantomas_1913");
  assert.equal(fantomas.title, "Fantômas");
  assert.equal(fantomas.year, 1913);
  assert.equal(fantomas.scenarioType, "crime_thriller_production");
  assert.ok(fantomas.aliases.includes("Fantomas"));
  assert.ok(fantomas.learningGoals.length >= 5);
  assert.ok(fantomas.phases.length >= 9);
});
