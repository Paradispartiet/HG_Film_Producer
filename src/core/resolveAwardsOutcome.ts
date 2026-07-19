import type { FilmProject, FilmResult } from "../domain/film.js";
import type {
  Award,
  AwardsOutcome,
  FestivalSubmissionResult,
  ReviewResult
} from "../domain/release.js";

type ScoredAward = {
  readonly award: Award;
  readonly score: number;
  readonly margin: number;
};

/** Resolve a ranked and deliberately limited award slate from critical and festival momentum. */
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
  const awardsStrength = clamp(
    film.criticalAppeal * 0.4
      + reviewAverage * 0.35
      + film.quality * 0.25
      + festivalMomentum
  );
  const nominationLimit = getNominationLimit(awardsStrength);
  const winLimit = getWinLimit(awardsStrength, acceptedFestivals.length);

  const rankedAwards = awards
    .map((award): ScoredAward => {
      const tagFit = award.preferredTags.length === 0 || award.preferredTags.includes(genre) ? 6 : 0;
      const categoryFit = categoryScore(award.category, film);
      const score = clamp(
        film.criticalAppeal * 0.38 + reviewAverage * 0.32 + film.quality * 0.15
          + categoryFit * 0.15 + festivalMomentum + tagFit
      );
      return {
        award,
        score,
        margin: score - award.requiredScore
      };
    })
    .filter((candidate) => candidate.margin >= 0)
    .sort(compareScoredAwards);

  const nominatedAwards = rankedAwards.slice(0, nominationLimit);
  const winningAwards = nominatedAwards
    .filter((candidate) => candidate.score >= candidate.award.requiredScore + 8)
    .slice(0, winLimit);
  const nominations = nominatedAwards.map((candidate) => candidate.award.id);
  const wins = winningAwards.map((candidate) => candidate.award.id);
  let prestigeGain = 0;
  let audienceGain = 0;

  for (const candidate of nominatedAwards) {
    prestigeGain += Math.max(1, Math.round(candidate.award.prestigeValue * 0.3));
    audienceGain += Math.max(0, Math.round(candidate.award.audienceValue * 0.2));
  }
  for (const candidate of winningAwards) {
    prestigeGain += candidate.award.prestigeValue;
    audienceGain += candidate.award.audienceValue;
  }

  return {
    nominations,
    wins,
    prestigeGain,
    audienceGain,
    notes: [
      `Awards use critical appeal, ${reviewAverage}/100 review consensus, quality, category fit, and ${acceptedFestivals.length} accepted festival(s).`,
      `The ${awardsStrength}/100 awards-strength slate is ranked and capped at ${nominationLimit} nomination(s) and ${winLimit} win(s).`,
      "A win requires the nomination threshold plus eight points, festival acceptance, and a place inside the ranked win limit."
    ]
  };
}

function compareScoredAwards(left: ScoredAward, right: ScoredAward): number {
  if (left.margin !== right.margin) return right.margin - left.margin;
  if (left.score !== right.score) return right.score - left.score;
  return String(left.award.id).localeCompare(String(right.award.id));
}

function getNominationLimit(awardsStrength: number): number {
  if (awardsStrength >= 90) return 5;
  if (awardsStrength >= 82) return 4;
  if (awardsStrength >= 74) return 3;
  if (awardsStrength >= 66) return 2;
  return 1;
}

function getWinLimit(awardsStrength: number, acceptedFestivalCount: number): number {
  if (acceptedFestivalCount === 0 || awardsStrength < 74) return 0;
  if (awardsStrength >= 92) return Math.min(3, acceptedFestivalCount + 1);
  if (awardsStrength >= 84) return Math.min(2, acceptedFestivalCount);
  return 1;
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
