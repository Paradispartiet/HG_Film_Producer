import type { FilmProject, FilmResult } from "../domain/film.js";
import type {
  Award,
  AwardsOutcome,
  FestivalSubmissionResult,
  ReviewResult
} from "../domain/release.js";

/** Resolve nominations and wins from critical consensus and festival momentum. */
export function resolveAwardsOutcome(
  project: FilmProject,
  film: FilmResult,
  awards: readonly Award[],
  reviews: readonly ReviewResult[],
  festivals: readonly FestivalSubmissionResult[]
): AwardsOutcome {
  if (film.projectId !== project.id) {
    throw new Error(`Film result does not belong to project "${project.id}".`);
  }

  const reviewAverage = average(reviews.map((review) => review.score), film.criticalAppeal);
  const acceptedFestivals = festivals.filter((festival) => festival.accepted);
  const festivalMomentum = Math.min(12, acceptedFestivals.length * 4);
  const genre = project.genreId.replace(/^genre_/, "");
  const nominations = [];
  const wins = [];
  let prestigeGain = 0;
  let audienceGain = 0;

  for (const award of awards) {
    const tagFit = award.preferredTags.length === 0 || award.preferredTags.includes(genre) ? 6 : 0;
    const categoryFit = categoryScore(award.category, film);
    const awardScore = clamp(
      film.criticalAppeal * 0.38 + reviewAverage * 0.32 + film.quality * 0.15
        + categoryFit * 0.15 + festivalMomentum + tagFit
    );
    if (awardScore >= award.requiredScore) {
      nominations.push(award.id);
      prestigeGain += Math.max(1, Math.round(award.prestigeValue * 0.3));
      audienceGain += Math.max(0, Math.round(award.audienceValue * 0.2));
    }
    if (awardScore >= award.requiredScore + 8 && acceptedFestivals.length > 0) {
      wins.push(award.id);
      prestigeGain += award.prestigeValue;
      audienceGain += award.audienceValue;
    }
  }

  return {
    nominations,
    wins,
    prestigeGain,
    audienceGain,
    notes: [
      `Awards use critical appeal, ${reviewAverage}/100 review consensus, quality, category fit, and ${acceptedFestivals.length} accepted festival(s).`,
      "A win requires the nomination threshold plus eight points and at least one festival acceptance."
    ]
  };
}

function categoryScore(category: Award["category"], film: FilmResult): number {
  switch (category) {
    case "audience_award": return film.audienceAppeal;
    case "best_picture": return (film.quality + film.criticalAppeal + film.audienceAppeal) / 3;
    case "acting": return film.quality * 0.7 + film.audienceAppeal * 0.3;
    case "sound":
    case "music":
    case "editing":
    case "cinematography":
    case "production_design": return film.quality;
    case "directing":
    case "screenplay":
    case "debut": return film.criticalAppeal * 0.6 + film.quality * 0.4;
  }
}

function average(values: readonly number[], fallback: number): number {
  if (values.length === 0) return fallback;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
