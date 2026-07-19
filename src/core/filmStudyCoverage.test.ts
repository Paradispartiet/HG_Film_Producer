import assert from "node:assert/strict";
import test from "node:test";

import {
  FILM_STUDY_AREAS,
  completeFilmStudyCoverage,
  getFilmHistoryEra,
  isFilmStudyCoverageComplete,
  summarizeFilmStudyCoverage,
} from "./filmStudyCoverage.js";

test("film study coverage always contains every history and craft area", () => {
  const coverage = completeFilmStudyCoverage([
    { area: "screenplay", status: "source_verified", note: "Verified screenplay research." },
    { area: "cinematography", status: "mapped", note: "Mapped from the production brief." },
  ]);

  assert.equal(coverage.length, FILM_STUDY_AREAS.length);
  assert.equal(isFilmStudyCoverageComplete(coverage), true);
  assert.equal(coverage.find((item) => item.area === "screenplay")?.status, "source_verified");
  assert.equal(coverage.find((item) => item.area === "performance")?.status, "research_pending");
});

test("coverage summary distinguishes verified, mapped, pending, and not-central work", () => {
  const summary = summarizeFilmStudyCoverage(completeFilmStudyCoverage([
    { area: "historical_context", status: "source_verified" },
    { area: "screenplay", status: "mapped" },
    { area: "documentary_method", status: "not_central" },
  ]));

  assert.equal(summary.total, FILM_STUDY_AREAS.length);
  assert.equal(summary.sourceVerified, 1);
  assert.equal(summary.mapped, 1);
  assert.equal(summary.notCentral, 1);
  assert.equal(summary.researchPending, FILM_STUDY_AREAS.length - 3);
});

test("historical eras provide stable broad placement without pretending to be a movement label", () => {
  assert.equal(getFilmHistoryEra(1948), "Postwar cinema and emerging modernism");
  assert.equal(getFilmHistoryEra(1960), "New Waves and modernist cinema");
  assert.equal(getFilmHistoryEra(1998), "Global independent cinema and early digital transition");
  assert.equal(getFilmHistoryEra(2015), "Contemporary digital and global festival cinema");
});
