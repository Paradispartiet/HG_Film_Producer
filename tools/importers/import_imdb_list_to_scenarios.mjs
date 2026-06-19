#!/usr/bin/env node
/**
 * HG Film Producer — IMDb list CSV importer
 *
 * Usage:
 *   node tools/importers/import_imdb_list_to_scenarios.mjs data/film/source_lists/imdb_ls000064637.csv data/film/scenarios/film_scenarios_seed.json
 *
 * No external dependencies.
 */

import fs from "node:fs";

const [,, inputPath, outputPath] = process.argv;

if (!inputPath || !outputPath) {
  console.error("Usage: node tools/importers/import_imdb_list_to_scenarios.mjs <input.csv> <output.json>");
  process.exit(1);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (c === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
      continue;
    }

    if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c !== "\r") {
      field += c;
    }
  }

  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function slugify(value) {
  return String(value || "untitled")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80) || "untitled";
}

function splitList(value) {
  if (!value) return [];
  return String(value).split(",").map((x) => x.trim()).filter(Boolean);
}

function numberOrNull(value) {
  if (value === undefined || value === null || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

const genreToKey = {
  "Drama": "drama",
  "Comedy": "comedy",
  "Crime": "crime",
  "Thriller": "thriller",
  "Romance": "romance",
  "Mystery": "mystery",
  "Fantasy": "fantasy",
  "Biography": "biography",
  "Adventure": "adventure",
  "Sci-Fi": "sci_fi",
  "Horror": "horror",
  "Documentary": "documentary",
  "Family": "family",
  "Action": "action",
  "Animation": "animation",
  "War": "war",
  "History": "history",
  "Music": "music",
  "Sport": "sport",
  "Western": "western",
  "Film-Noir": "film_noir"
};

function classifyScenario(genreKeys) {
  const set = new Set(genreKeys);
  if (set.has("documentary")) return "documentary_production";
  if (set.has("animation")) return "animation_production";
  if (set.has("horror")) return "horror_production";
  if (set.has("action") || set.has("adventure")) return "action_adventure_production";
  if (set.has("sci_fi")) return "speculative_production";
  if (set.has("crime") || set.has("thriller")) return "crime_thriller_production";
  if (set.has("comedy") && set.has("romance")) return "romantic_comedy_drama_production";
  if (set.has("comedy")) return "character_comedy_production";
  if (set.has("war") || set.has("history") || set.has("biography")) return "historical_drama_production";
  return "character_drama_production";
}

const phases = [
  "pitch",
  "research",
  "screenplay",
  "casting",
  "production_design",
  "cinematography",
  "editing",
  "sound",
  "release"
];

const text = fs.readFileSync(inputPath, "utf8");
const rows = parseCsv(text);
const headers = rows.shift();
const index = Object.fromEntries(headers.map((h, i) => [h, i]));

function get(row, key) {
  return row[index[key]] || "";
}

const scenarios = rows
  .filter((row) => get(row, "Const") && get(row, "Title"))
  .map((row) => {
    const title = get(row, "Title");
    const year = numberOrNull(get(row, "Year"));
    const genres = splitList(get(row, "Genres"));
    const genreKeys = genres.map((g) => genreToKey[g] || slugify(g));

    return {
      id: `scenario_${slugify(title)}_${year || "unknown"}`,
      status: "imported_seed_needs_film_specific_design",
      source: {
        list_id: "imdb_ls000064637",
        position: numberOrNull(get(row, "Position")),
        imdb_id: get(row, "Const"),
        url: get(row, "URL")
      },
      film: {
        title,
        original_title: get(row, "Original Title") || title,
        year,
        title_type: get(row, "Title Type"),
        runtime_mins: numberOrNull(get(row, "Runtime (mins)")),
        directors: splitList(get(row, "Directors")),
        genres,
        genre_keys: genreKeys,
        imdb_rating: numberOrNull(get(row, "IMDb Rating")),
        user_rating: numberOrNull(get(row, "Your Rating"))
      },
      scenario_type: classifyScenario(genreKeys),
      production_challenge: `Produser en ${genres.join(", ").toLowerCase()}-film i ånden til ${title}, med riktige valg for tone, sjanger, manus, foto, klipp og lyd.`,
      phases,
      manual_enrichment_needed: [
        "signature_visual_style",
        "specific_camera_techniques",
        "specific_editing_strategy",
        "specific_sound_strategy",
        "historical_production_context",
        "player_win_conditions"
      ]
    };
  });

const output = {
  schema_version: "0.1",
  source_list_id: "imdb_ls000064637",
  scenario_count: scenarios.length,
  note: "Seed-fil laget fra IMDb CSV. Filmspesifikke virkemidler må enriches manuelt eller med verifisert research før de brukes som fasit.",
  scenarios
};

fs.mkdirSync(outputPath.split("/").slice(0, -1).join("/"), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf8");
console.log(`Wrote ${scenarios.length} scenarios to ${outputPath}`);
