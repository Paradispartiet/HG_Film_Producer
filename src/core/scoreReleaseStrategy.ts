import type { FilmProject, FilmResult, FilmScale } from "../domain/film.js";
import type { PostProductionEvaluation } from "../domain/post.js";
import type { ReleaseStrategy, ReleaseStrategyScore } from "../domain/release.js";

const SCALE_REACH: Record<FilmScale, number> = {
  micro: 30,
  indie: 48,
  mid_budget: 68,
  studio: 88,
  prestige: 76
};

/** Score a release route from six visible, equally tuneable dimensions. */
export function scoreReleaseStrategy(
  project: FilmProject,
  film: FilmResult,
  strategy: ReleaseStrategy,
  postProduction?: PostProductionEvaluation
): ReleaseStrategyScore {
  assertProject(project.id, film.projectId, "Film result");
  if (postProduction) {
    assertProject(project.id, postProduction.projectId, "Post-production evaluation");
  }

  const audienceBias = strategy.statBiases.audienceAppeal ?? 0;
  const criticBias = strategy.statBiases.criticalAppeal ?? 0;
  const qualityBias = strategy.statBiases.quality ?? 0;
  const trailerStrength = postProduction?.trailerScore ?? 50;
  const postStrength = postProduction?.overall ?? 50;
  const scaleReach = SCALE_REACH[project.scale];

  const audienceFit = clamp(
    film.audienceAppeal * 0.5 + strategy.audienceReach * 0.25 + scaleReach * 0.1
      + trailerStrength * 0.15 + audienceBias
  );
  const criticFit = clamp(
    film.criticalAppeal * 0.55 + strategy.criticReach * 0.25 + postStrength * 0.2 + criticBias
  );
  const festivalFit = clamp(
    strategy.festivalFit * 0.55 + film.criticalAppeal * 0.3 + film.quality * 0.15
  );
  const revenueFit = clamp(
    film.audienceAppeal * 0.45 + strategy.audienceReach * 0.35 + scaleReach * 0.2
      - strategy.revenueRisk * 0.15
  );
  const prestigeFit = clamp(
    film.criticalAppeal * 0.45 + strategy.prestigePotential * 0.4 + film.quality * 0.15 + qualityBias
  );
  const riskFit = clamp(
    100 - strategy.revenueRisk * 0.7 - Math.max(0, strategy.costMultiplier - 1) * 18
      + film.audienceAppeal * 0.2
  );
  const totalScore = clamp(
    audienceFit * 0.24 + criticFit * 0.18 + festivalFit * 0.14 + revenueFit * 0.2
      + prestigeFit * 0.14 + riskFit * 0.1
  );

  return {
    strategyId: strategy.id,
    totalScore,
    audienceFit,
    criticFit,
    festivalFit,
    revenueFit,
    prestigeFit,
    riskFit,
    notes: [
      "Total weights audience 24%, critics 18%, festivals 14%, revenue 20%, prestige 14%, and risk 10%.",
      postProduction
        ? "Trailer and overall post-production strength are included."
        : "No post-production evaluation was supplied; neutral post and trailer scores were used."
    ]
  };
}

function assertProject(expected: string, actual: string, label: string): void {
  if (expected !== actual) {
    throw new Error(`${label} does not belong to project "${expected}".`);
  }
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
