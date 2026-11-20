import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

/** This calls the same 430-scenario Atlas file inventory used by chapter 11.
 * It audits title+year identity, not film-specific case approval/readiness.
 */
type AtlasMatch = {
  chapter: number; title: string; year: number;
  identity: string; scenarioId: string | null;
  scenarioOrigin: string | null; scenarioStatus: string | null;
  bookDecision: string; playableLinkPresent: boolean;
};
const report = JSON.parse(execFileSync("node", [
  "scripts/film-history-chapters-27-28-atlas-audit.mjs",
], { encoding: "utf8" })) as {
  atlas: { expectedCount: number; actualCount: number; seedCount: number; expansionModules: number };
  chapters: Record<string, number>;
  totals: { candidates: number; existingDefinitions: number; noExactMatch: number; approvedPlayableLinks: number };
  crosswalk: AtlasMatch[];
};

console.log("Chapter 27–28 Atlas identity matches", JSON.stringify(report.crosswalk.filter(f => f.scenarioId !== null).map(f => ({ title: f.title, year: f.year, id: f.scenarioId }))));

test("Chapter 27–28 identity audit covers the full canonical Atlas inventory", () => {
  assert.equal(report.atlas.expectedCount, 430);
  assert.equal(report.atlas.actualCount, 430);
  assert.equal(report.atlas.seedCount, 161);
  assert.equal(report.atlas.expansionModules, 37);
  assert.equal(report.chapters["27"], 21);
  assert.equal(report.chapters["28"], 36);
  assert.equal(report.totals.candidates, 57);
  assert.equal(report.crosswalk.length, 57);
  assert.ok(report.totals.existingDefinitions >= 9);
  assert.equal(report.totals.existingDefinitions + report.totals.noExactMatch, 57);
  assert.equal(report.totals.approvedPlayableLinks, 0);
  assert.ok(report.crosswalk.every(f => f.bookDecision === "P2" && !f.playableLinkPresent));
});

test("Existing Atlas definitions must remain unapproved until film-specific review", () => {
  const matches = report.crosswalk.filter(f => f.scenarioId !== null);
  const byTitle = new Map(matches.map(f => [f.title, f]));
  const known: Record<string, string> = {
    "Festen": "scenario_the_celebration_1998",
    "A City of Sadness": "scenario_a_city_of_sadness_1989",
    "Platform": "scenario_platform_2000",
    "Still Life": "scenario_still_life_2006",
    "Cure": "scenario_cure_1997",
    "Vive L'Amour": "scenario_vive_l_amour_1994",
    "Raise the Red Lantern": "scenario_raise_the_red_lantern_1991",
    "Peppermint Candy": "scenario_peppermint_candy_1999",
    "The Host": "scenario_the_host_2006",
  };
  for (const [title, scenarioId] of Object.entries(known)) {
    const reference = byTitle.get(title);
    assert.ok(reference, "Expected existing Atlas identity: " + title);
    assert.equal(reference.scenarioId, scenarioId);
    assert.equal(reference.identity, "EXISTING_DEFINITION_UNREVIEWED");
    assert.equal(reference.bookDecision, "P2");
    assert.equal(reference.playableLinkPresent, false);
    assert.ok(reference.scenarioOrigin);
  }
  assert.equal(byTitle.get("Festen")?.year, 1998);
  assert.equal(byTitle.get("The Host")?.year, 2006);
});
