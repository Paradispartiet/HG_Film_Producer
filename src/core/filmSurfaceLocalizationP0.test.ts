import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { CANONICAL_FILM_GENRES, presentFilmGenreLabel } from "./filmGenrePresentation.js";

const genreLabels = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
  "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "History",
  "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "Sport", "Thriller",
  "War", "Western",
] as const;

test("P0 genre vocabulary agrees with the 161-case canonical seed taxonomy", () => {
  const seed = JSON.parse(readFileSync("data/film/scenarios/film_scenarios_seed.json", "utf8")) as {
    scenarios: { film: { genres: string[] } }[];
  };
  const genres = [...new Set(seed.scenarios.flatMap(({ film }) => film.genres))].sort();
  assert.deepEqual([...CANONICAL_FILM_GENRES].sort(), [...genreLabels].sort());
  assert.deepEqual(genres, [...genreLabels].sort());
});

test("P0 genre presentation is bounded to display text and preserves canonical filters", () => {
  for (const genre of genreLabels) {
    assert.equal(presentFilmGenreLabel("en", genre), genre);
    for (const language of FILMWORK_LANGUAGES) {
      assert.ok(presentFilmGenreLabel(language, genre).trim(), `${language}: ${genre}`);
    }
  }
  assert.equal(presentFilmGenreLabel("fr", "Comedy"), "Comédie");
  assert.equal(presentFilmGenreLabel("nb", "Thriller"), "Thriller");
  assert.equal(presentFilmGenreLabel("pt", "Sci-Fi"), "Ficção científica");
  assert.equal(presentFilmGenreLabel("nb", "Unreviewed genre"), "Unreviewed genre");
});

test("P0 active genre renderers translate labels without modifying canonical option values", () => {
  const library = readFileSync("src/ui/components/FilmScenarioLibrary.tsx", "utf8");
  const atlas = readFileSync("src/ui/components/FilmAtlasExperience.tsx", "utf8");
  assert.match(library, /\{presentFilmGenreLabel\(language, genre\)\}/);
  assert.match(atlas, /value=\{item\}>\{presentFilmGenreLabel\(language, item\)\}/);
  assert.match(atlas, /<span key=\{item\}>\{presentFilmGenreLabel\(language, item\)\}<\/span>/);
  assert.match(atlas, /scenario\.film\.genres\.includes\(genre\)/);
});

test("P0 active Film Director reference and seed actions use the same verified resolver as Film Atlas", () => {
  const director = readFileSync("src/ui/components/FilmDirectorExperience.tsx", "utf8");
  assert.match(director, /presentFilmCaseContent\(language, referenceBrief\.briefType, referenceBrief\.scenarioId, original\)/);
  assert.match(director, /referenceBrief\[activeLens\.briefKey\]\.map\(presentReference\)/);
  assert.match(director, /referenceBrief\.toneTargets\.map\(presentReference\)/);
  assert.match(director, /logline=\{presentReference\(referenceBrief\.logline\)\}/);
  assert.doesNotMatch(director, /\{brief\.logline\}/);
});
