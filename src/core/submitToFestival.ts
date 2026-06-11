import type { FilmProject, FilmResult } from "../domain/film.js";
import type { Festival, FestivalSubmissionResult, FestivalTier } from "../domain/release.js";

const TIER_THRESHOLD: Record<FestivalTier, number> = {
  local: 48,
  national: 58,
  international: 68,
  prestige: 78
};

/** Resolve a festival submission without randomness. */
export function submitToFestival(
  project: FilmProject,
  film: FilmResult,
  festival: Festival
): FestivalSubmissionResult {
  if (film.projectId !== project.id) {
    throw new Error(`Film result does not belong to project "${project.id}".`);
  }

  const genreFit = festival.preferredGenres.includes(project.genreId) ? 100 : 45;
  const selectionScore = clamp(
    film.criticalAppeal * 0.42 + film.quality * 0.33 + genreFit * 0.15
      + (100 - festival.prestige) * 0.1
  );
  const threshold = TIER_THRESHOLD[festival.tier];
  const accepted = selectionScore >= threshold;
  const premiereValue = accepted
    ? clamp(festival.audienceReach * 0.55 + festival.prestige * 0.45)
    : 0;
  const prestigeGain = accepted
    ? Math.max(1, Math.round(festival.prestige / (festival.tier === "prestige" ? 12 : 18)))
    : 0;

  return {
    festivalId: festival.id,
    accepted,
    selectionScore,
    premiereValue,
    prestigeGain,
    cost: festival.submissionCost,
    notes: [
      `Selection requires ${threshold}/100 for the ${festival.tier} tier.`,
      genreFit === 100
        ? "The film's genre is explicitly preferred by the festival."
        : "The film receives a neutral cross-programming genre fit."
    ]
  };
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
