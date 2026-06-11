import type { CareerState, CompletedFilmRecord, StudioIdentityTag } from "../domain/career.js";

/** Add a film once to the career filmography and current-year record. */
export function recordCompletedFilm(
  careerState: CareerState,
  film: CompletedFilmRecord
): CareerState {
  if (careerState.completedFilms.some((record) => record.projectId === film.projectId)) {
    return careerState;
  }

  const identityTags = uniqueTags([...careerState.identityTags, ...film.identityTags]);

  return {
    ...careerState,
    completedFilms: [...careerState.completedFilms, film],
    identityTags,
    years: careerState.years.map((careerYear) => careerYear.year === careerState.currentYear
      ? {
          ...careerYear,
          completedFilmIds: [...careerYear.completedFilmIds, film.projectId],
          reputationEnd: careerState.studio.reputation,
          prestigeEnd: careerState.studio.prestige
        }
      : careerYear)
  };
}

function uniqueTags(tags: readonly StudioIdentityTag[]): readonly StudioIdentityTag[] {
  return [...new Set(tags)];
}
