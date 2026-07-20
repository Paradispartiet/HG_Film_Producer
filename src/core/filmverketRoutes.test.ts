import assert from "node:assert/strict";
import test from "node:test";

import {
  createFilmSlug,
  filmverketRoutesEqual,
  formatFilmverketHash,
  parseFilmverketHash,
} from "./filmverketRoutes.js";

test("creates stable film slugs with year", () => {
  assert.equal(createFilmSlug("Mulholland Drive", 2001), "mulholland-drive-2001");
  assert.equal(createFilmSlug("Høstsonaten", 1978), "hostsonaten-1978");
  assert.equal(createFilmSlug("L'Âge d'Or", 1930), "l-age-d-or-1930");
});

test("parses platform section routes", () => {
  assert.deepEqual(parseFilmverketHash("#/"), { section: "home" });
  assert.deepEqual(parseFilmverketHash("#/producer"), { section: "producer" });
  assert.deepEqual(parseFilmverketHash("#/school"), { section: "school" });
  assert.deepEqual(parseFilmverketHash("#/history"), { section: "history" });
  assert.deepEqual(parseFilmverketHash("#/research"), { section: "research" });
});

test("parses canonical and legacy film routes", () => {
  assert.deepEqual(parseFilmverketHash("#/atlas/film/mulholland-drive-2001"), {
    section: "atlas",
    filmSlug: "mulholland-drive-2001",
  });
  assert.deepEqual(parseFilmverketHash("#/atlas/mulholland-drive-2001"), {
    section: "atlas",
    filmSlug: "mulholland-drive-2001",
  });
  assert.deepEqual(parseFilmverketHash("#/director/mulholland-drive-2001"), {
    section: "director",
    filmSlug: "mulholland-drive-2001",
  });
});

test("formats canonical hash routes", () => {
  assert.equal(formatFilmverketHash({ section: "home" }), "#/");
  assert.equal(formatFilmverketHash({ section: "atlas" }), "#/atlas");
  assert.equal(
    formatFilmverketHash({ section: "atlas", filmSlug: "mulholland-drive-2001" }),
    "#/atlas/film/mulholland-drive-2001",
  );
  assert.equal(
    formatFilmverketHash({ section: "director", filmSlug: "mulholland-drive-2001" }),
    "#/director/mulholland-drive-2001",
  );
});

test("falls back safely for invalid hashes", () => {
  assert.deepEqual(parseFilmverketHash("#/unknown/place"), { section: "home" });
  assert.deepEqual(parseFilmverketHash(""), { section: "home" });
});

test("compares routes including selected films", () => {
  assert.equal(
    filmverketRoutesEqual(
      { section: "atlas", filmSlug: "one-2001" },
      { section: "atlas", filmSlug: "one-2001" },
    ),
    true,
  );
  assert.equal(
    filmverketRoutesEqual(
      { section: "atlas", filmSlug: "one-2001" },
      { section: "atlas", filmSlug: "two-2002" },
    ),
    false,
  );
});
