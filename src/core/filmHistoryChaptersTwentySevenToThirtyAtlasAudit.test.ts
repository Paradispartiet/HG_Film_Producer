import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";

/** Full canonical 430-scenario identity audit of book chapters 27–30.
 * An Atlas definition is not a playable, sourced or approved scenario.
 */
type RecordRow = { chapter: number; title: string; year: number;
  scenarioId: string | null; scenarioOrigin: string | null;
  identity: string; bookDecision: string; playableLinkPresent: boolean };

const report = JSON.parse(execFileSync("node", [
  "scripts/film-history-chapters-27-28-atlas-audit.mjs",
  "--chapters=27,28,29,30",
], { encoding: "utf8" })) as {
  atlas: { actualCount: number; expansionModules: number };
  chapters: Record<string, number>;
  totals: { candidates: number; existingDefinitions: number; noExactMatch: number; approvedPlayableLinks: number };
  crosswalk: RecordRow[];
};
const ledger = JSON.parse(readFileSync(
  "docs/film-history/chapter27-30-atlas-identity-audit-20261120.json", "utf8",
)) as {
  summary: { totalReferences: number; existingDefinitions: number; noExactTitleYearMatch: number;
    approvedPlayableLinks: number };
  crosswalk: RecordRow[];
  collisionSafeguards: Array<{ bookFilm: string; bookYear: number; differentAtlasId: string; differentYear: number }>;
};

test("All 101 final-four-chapter references are compared to canonical 430 Atlas cases", () => {
  assert.equal(report.atlas.actualCount, 430);
  assert.equal(report.atlas.expansionModules, 37);
  assert.equal(report.chapters["27"], 21);
  assert.equal(report.chapters["28"], 36);
  assert.equal(report.chapters["29"], 24);
  assert.equal(report.chapters["30"], 20);
  assert.equal(report.totals.candidates, 101);
  assert.equal(report.totals.existingDefinitions, 12);
  assert.equal(report.totals.noExactMatch, 89);
  assert.equal(report.totals.approvedPlayableLinks, 0);
  assert.equal(ledger.summary.totalReferences, 101);
  assert.equal(ledger.summary.existingDefinitions, 12);
  assert.equal(ledger.summary.noExactTitleYearMatch, 89);
  assert.ok(report.crosswalk.every(r => r.bookDecision === "P2" && !r.playableLinkPresent));
});

test("Dated final-four-chapter ledger agrees with live source files and Atlas inventory", () => {
  assert.deepEqual(
    ledger.crosswalk.map(r => [r.chapter, r.title, r.year, r.scenarioId,
      r.scenarioOrigin, r.identity, r.bookDecision, r.playableLinkPresent]),
    report.crosswalk.map(r => [r.chapter, r.title, r.year, r.scenarioId,
      r.scenarioOrigin, r.identity, r.bookDecision, r.playableLinkPresent])
  );
  const matched = report.crosswalk.filter(r => r.scenarioId);
  assert.equal(matched.filter(r => r.chapter === 27).length, 1);
  assert.equal(matched.filter(r => r.chapter === 28).length, 8);
  assert.equal(matched.filter(r => r.chapter === 29).length, 0);
  assert.equal(matched.filter(r => r.chapter === 30).length, 3);
  assert.deepEqual(matched.filter(r => r.chapter === 30).map(r => r.scenarioId).sort(), [
    "scenario_all_the_beauty_and_the_bloodshed_2022",
    "scenario_tangerine_2015",
    "scenario_waltz_with_bashir_2008",
  ].sort());
});

test("Same-name and different-year films never become invented playable Atlas links", () => {
  const leviathan = report.crosswalk.find(r => r.chapter === 30 && r.title === "Leviathan");
  const host = report.crosswalk.find(r => r.chapter === 30 && r.title === "Host");
  const koreanHost = report.crosswalk.find(r => r.chapter === 28 && r.title === "The Host");
  assert.equal(leviathan?.year, 2012);
  assert.equal(leviathan?.scenarioId, null);
  assert.equal(host?.year, 2020);
  assert.equal(host?.scenarioId, null);
  assert.equal(koreanHost?.year, 2006);
  assert.equal(koreanHost?.scenarioId, "scenario_the_host_2006");
  assert.ok(ledger.collisionSafeguards.some(r => r.bookFilm === "Leviathan" &&
    r.bookYear === 2012 && r.differentAtlasId === "scenario_leviathan_2014" && r.differentYear === 2014));
  assert.ok(ledger.collisionSafeguards.some(r => r.bookFilm === "Host" &&
    r.bookYear === 2020 && r.differentAtlasId === "scenario_the_host_2006" && r.differentYear === 2006));
});

test("The twelve existing Atlas cases have individual, source-led approval blockers", () => {
  const audit = readFileSync(
    "docs/film-history/chapter27-30-atlas-case-readiness-20261120.md", "utf8"
  );
  const existing = report.crosswalk.filter(row => row.scenarioId !== null);
  assert.equal(existing.length, 12);
  for (const row of existing) {
    assert.ok(audit.includes(row.scenarioId!),
      "Missing case-level review for " + row.scenarioId);
  }
  const genericSeeds = ["scenario_the_celebration_1998",
    "scenario_waltz_with_bashir_2008", "scenario_tangerine_2015"];
  for (const scenarioId of genericSeeds) {
    assert.ok(audit.includes(scenarioId));
  }
  assert.match(audit, /three generic imported seed cases/i);
  assert.match(audit, /nine film-specific manual definitions/i);
  assert.match(audit, /not rotoscoped/i);
  assert.match(audit, /Sony PC7/);
  assert.match(audit, /Sony PC3/);
  assert.match(audit, /sound recording/i);
  assert.match(audit, /Until then all matching book references remain provisional P2/);
});
