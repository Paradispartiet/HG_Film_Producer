import type { FilmProject, FilmResult } from "../domain/film.js";
import type {
  AudienceResult,
  AwardsOutcome,
  FestivalSubmissionResult,
  ReleaseOutcomeEvaluation,
  ReleaseStrategyScore,
  RevenueResult,
  ReviewResult
} from "../domain/release.js";

/** Consolidate every release signal into studio-facing reputation and prestige. */
export function evaluateReleaseOutcome(
  project: FilmProject,
  film: FilmResult,
  strategy: ReleaseStrategyScore,
  festivals: readonly FestivalSubmissionResult[],
  reviews: readonly ReviewResult[],
  audiences: readonly AudienceResult[],
  revenue: RevenueResult,
  awards: AwardsOutcome
): ReleaseOutcomeEvaluation {
  if (film.projectId !== project.id) {
    throw new Error(`Film result does not belong to project "${project.id}".`);
  }

  const accepted = festivals.filter((festival) => festival.accepted);
  const festivalScore = average(
    festivals.map((festival) => festival.accepted ? festival.selectionScore : festival.selectionScore * 0.5),
    0
  );
  const reviewScore = average(reviews.map((review) => review.score), film.criticalAppeal);
  const audienceScore = average(
    audiences.map((audience) => (audience.interestScore + audience.satisfactionScore + audience.wordOfMouth) / 3),
    film.audienceAppeal
  );
  const revenueScore = clamp(50 + revenue.roi * 35 + (revenue.breakEven ? 10 : -10));
  const awardsScore = clamp(awards.nominations.length * 8 + awards.wins.length * 18);
  const reputationDelta = Math.round(
    film.reputationDelta + (audienceScore - 50) / 12 + (reviewScore - 50) / 20
      + awards.audienceGain / 3 + (revenue.breakEven ? 2 : -2)
  );
  const prestigeDelta = Math.round(
    film.prestigeDelta + accepted.reduce((sum, result) => sum + result.prestigeGain, 0)
      + reviews.reduce((sum, review) => sum + review.prestigeDelta, 0)
      + awards.prestigeGain
  );
  const overall = clamp(
    strategy.totalScore * 0.18 + festivalScore * 0.12 + reviewScore * 0.2
      + audienceScore * 0.22 + revenueScore * 0.18 + awardsScore * 0.1
  );

  return {
    projectId: project.id,
    strategyScore: strategy.totalScore,
    festivalScore,
    reviewScore,
    audienceScore,
    revenueScore,
    awardsScore,
    grossRevenue: revenue.grossRevenue,
    netRevenue: revenue.netRevenue,
    reputationDelta,
    prestigeDelta,
    overall,
    notes: [
      "Overall weights strategy 18%, festivals 12%, reviews 20%, audiences 22%, revenue 18%, and awards 10%.",
      `${accepted.length} of ${festivals.length} festival submission(s) were accepted.`
    ]
  };
}

function average(values: readonly number[], fallback: number): number {
  if (values.length === 0) return clamp(fallback);
  return clamp(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
