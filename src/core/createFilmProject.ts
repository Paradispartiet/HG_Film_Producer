import type { FilmProject, FilmScale } from "../domain/film.js";
import { asFilmProjectId, type FilmProjectId, type GenreId } from "../domain/ids.js";

export interface CreateFilmProjectInput {
  readonly title: string;
  readonly genreId: GenreId;
  readonly scale: FilmScale;
  readonly id?: string;
  readonly budget?: number;
}

/** Sensible starting budget per scale, used when none is supplied. */
const DEFAULT_BUDGET_BY_SCALE: Record<FilmScale, number> = {
  micro: 150_000,
  indie: 750_000,
  mid_budget: 4_000_000,
  studio: 20_000_000,
  prestige: 12_000_000
};

/**
 * Create a new film project. A project starts as an "idea" with a title, genre,
 * scale and budget, and no script, crew, cast, locations or techniques yet.
 */
export function createFilmProject(input: CreateFilmProjectInput): FilmProject {
  const id: FilmProjectId = asFilmProjectId(input.id ?? `film_project_${slug(input.title)}`);

  return {
    id,
    title: input.title,
    status: "idea",
    scale: input.scale,
    genreId: input.genreId,
    budget: input.budget ?? DEFAULT_BUDGET_BY_SCALE[input.scale],
    scriptId: null,
    crewMemberIds: [],
    actorIds: [],
    locationIds: [],
    techniqueIdsUsed: []
  };
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}
