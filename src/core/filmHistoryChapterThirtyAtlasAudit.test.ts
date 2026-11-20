import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { filmHistoryChapterThirty } from "./filmHistoryChapterThirty.js";

/**
 * Targeted Chapter 30 Atlas audit against the seed and every current
 * late-century/current-era expansion used by the chapter-11 canonical
 * Atlas inventory generator. This checks identity, NOT scenario readiness.
 */
const modernExpansionFiles = [
  "modernCanonExpansion.ts",
  "priorityIndieExpansion.ts",
  "eastAsianAuteurExpansion.ts",
  "japaneseAuteurExpansion.ts",
  "southKoreanCinemaExpansion.ts",
  "southSoutheastAsianExpansion.ts",
  "festivalWinners1981To2009Expansion.ts",
  "festivalWinners2010To2024Expansion.ts",
  "scandinavianEuropeanExpansion.ts",
  "easternIberianBritishExpansion.ts",
  "italyFranceGermanyBeneluxExpansion.ts",
] as const;

const normalize = (s: string): string =>
  s.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();

const seed = JSON.parse(readFileSync("data/film/scenarios/film_scenarios_seed.json", "utf8")) as {
  scenarios: Array<{ id: string; status: string; film: { title: string; original_title: string; year: number } }>;
};

const definitions = modernExpansionFiles.flatMap((file) => {
  const text = readFileSync(`src/core/${file}`, "utf8");
  const rows = [...text.matchAll(/\bid:\s*"([^"]+)"\s*,\s*title:\s*"([^"]+)"\s*,\s*originalTitle:\s*"([^"]+)"[\s\S]{0,230}?\byear:\s*(\d{4})/g)];
  assert.ok(rows.length > 0, `Unable to inspect Atlas expansion ${file}`);
  return rows.map((m) => ({ id: m[1], title: m[2], originalTitle: m[3], year: Number(m[4]), origin: file }));
});

const inventory = [
  ...seed.scenarios.map(s => ({
    id: s.id, title: s.film.title, originalTitle: s.film.original_title,
    year: s.film.year, origin: "film_scenarios_seed.json",
  })),
  ...definitions,
];

const matches = filmHistoryChapterThirty.filmReferences.flatMap((film) =>
  inventory.filter((s) =>
    s.year === film.year && [s.title, s.originalTitle].some(title => normalize(title ?? "") === normalize(film.title))
  ).map(s => ({ film: film.title, year: film.year, scenario: s.id, origin: s.origin }))
);

test("Chapter 30 Atlas name/year audit identifies existing definitions without premature playable links", () => {
  assert.equal(filmHistoryChapterThirty.filmReferences.length, 20);
  assert.deepEqual(matches.map(m => [m.film, m.scenario]).sort(), [
    ["All the Beauty and the Bloodshed", "scenario_all_the_beauty_and_the_bloodshed_2022"],
    ["Tangerine", "scenario_tangerine_2015"],
    ["Waltz with Bashir", "scenario_waltz_with_bashir_2008"],
  ].sort());
  const seedStatus = new Map(seed.scenarios.map(s => [s.id, s.status]));
  for (const id of ["scenario_waltz_with_bashir_2008", "scenario_tangerine_2015"]) {
    assert.equal(seedStatus.get(id), "imported_seed_needs_film_specific_design");
  }
  const present = filmHistoryChapterThirty.filmReferences.filter(f => matches.some(m => m.film === f.title));
  assert.equal(present.length, 3);
  assert.ok(present.every(f => f.atlasDecision === "P2" && f.atlasScenarioId === undefined));
  for (const m of matches) {
    const film = present.find(f => f.title === m.film);
    assert.ok(m.scenario, `Scenario ID missing for ${m.film}`);
    assert.ok(film?.note.includes(m.scenario), `Unexplained existing Atlas definition: ${m.film}`);
  }
});

test("Chapter 30's Leviathan documentary is not linked to the unrelated 2014 drama", () => {
  const leviathan = filmHistoryChapterThirty.filmReferences.find(f => f.title === "Leviathan");
  assert.equal(leviathan?.year, 2012);
  assert.equal(leviathan?.atlasDecision, "P2");
  assert.equal(leviathan?.atlasScenarioId, undefined);
  assert.ok(leviathan?.note.includes("2014"));
  assert.ok(inventory.some(s => s.id === "scenario_leviathan_2014" && s.year === 2014));
  assert.ok(!matches.some(m => m.film === "Leviathan"));
});

test("Dated source audit stays aligned with all fifty chapter source records", () => {
  const report = JSON.parse(readFileSync("docs/film-history/chapter30-source-atlas-audit-20261120.json", "utf8")) as {
    chapter: { number: number; id: string };
    auditDate: string;
    sourceReview: {
      expectedCount: number; visitedCount: number;
      entries: Array<{ id: string; checkedUrl: string; result: string }>;
    };
    atlasReview: { candidateFilmCount: number; noExactTitleYearMatchCount: number;
      matchingDefinitions: Array<{ title: string; year: number; scenarioId: string; decision: string }>;
      differentFilmCollision: { bookTitle: string; bookYear: number; scenarioYear: number };
    };
  };
  assert.equal(report.chapter.number, 30);
  assert.equal(report.chapter.id, "contemporary-forms");
  assert.equal(report.auditDate, "2026-11-20");
  assert.equal(report.sourceReview.expectedCount, 50);
  assert.equal(report.sourceReview.visitedCount, 50);
  assert.equal(report.sourceReview.entries.length, filmHistoryChapterThirty.sources.length);
  const documented = new Map(report.sourceReview.entries.map(e => [e.id, e]));
  assert.equal(documented.size, 50);
  for (const source of filmHistoryChapterThirty.sources) {
    const entry = documented.get(source.id);
    assert.ok(entry, `Audit missing source ${source.id}`);
    assert.equal(entry.checkedUrl, source.url);
    assert.equal(entry.result, "opened_relevant_page");
  }
  assert.equal(report.atlasReview.candidateFilmCount, 20);
  assert.equal(report.atlasReview.noExactTitleYearMatchCount, 17);
  assert.equal(report.atlasReview.matchingDefinitions.length, 3);
  assert.deepEqual(
    report.atlasReview.matchingDefinitions.map(x => [x.title, x.scenarioId]).sort(),
    matches.map(x => [x.film, x.scenario]).sort()
  );
  assert.ok(report.atlasReview.matchingDefinitions.every(x => x.decision === "retain_P2_until_film_specific_verification"));
  assert.equal(report.atlasReview.differentFilmCollision.bookTitle, "Leviathan");
  assert.equal(report.atlasReview.differentFilmCollision.bookYear, 2012);
  assert.equal(report.atlasReview.differentFilmCollision.scenarioYear, 2014);
});
