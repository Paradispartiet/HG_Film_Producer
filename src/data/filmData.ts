import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { Genre, KnowledgeEntry, Role, Technique } from "../domain/knowledge.js";
import type { Mentor } from "../domain/people.js";
import type { Location, ProductionChoice } from "../domain/production.js";

/**
 * All seed data for the film world, loaded from data/film/*.json.
 *
 * Loading is intentionally simple for now: read JSON from disk at call time and
 * trust the file shape. Validation gets its own pass later (validateFilmData).
 */
export interface FilmData {
  readonly roles: readonly Role[];
  readonly genres: readonly Genre[];
  readonly techniques: readonly Technique[];
  readonly mentors: readonly Mentor[];
  readonly locations: readonly Location[];
  readonly productionChoices: readonly ProductionChoice[];
  readonly knowledgeEntries: readonly KnowledgeEntry[];
}

// data/film lives at the repo root, two levels up from this module in both the
// src/ layout and the compiled dist/ layout.
const DATA_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../../data/film");

function readJson<T>(fileName: string): T {
  const raw = readFileSync(resolve(DATA_DIR, fileName), "utf-8");
  return JSON.parse(raw) as T;
}

export function loadFilmData(): FilmData {
  return {
    roles: readJson<Role[]>("roles.json"),
    genres: readJson<Genre[]>("genres.json"),
    techniques: readJson<Technique[]>("techniques.json"),
    mentors: readJson<Mentor[]>("mentors.json"),
    locations: readJson<Location[]>("locations.json"),
    productionChoices: readJson<ProductionChoice[]>("production_choices.json"),
    knowledgeEntries: readJson<KnowledgeEntry[]>("knowledge_entries.json")
  };
}
