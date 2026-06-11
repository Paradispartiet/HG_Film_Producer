import type { FilmProject } from "../domain/film.js";
import type { PostProductionPlan, TrailerCutResult, TrailerStrategy } from "../domain/post.js";

const TYPE_EFFECTS: Record<TrailerStrategy["strategyType"], readonly [number, number, number, number]> = {
  prestige: [2, 12, 1, -3],
  audience_hook: [13, -1, 4, 7],
  genre_promise: [8, 2, 15, 2],
  mystery: [7, 6, -7, -5],
  character: [7, 8, 3, 1],
  spectacle: [15, -3, 8, 9],
  festival: [-1, 15, 0, -4]
};

/** Position the film for an audience with a deterministic trailer strategy. */
export function createTrailerCut(
  project: FilmProject,
  plan: PostProductionPlan,
  strategy: TrailerStrategy
): TrailerCutResult {
  if (plan.projectId !== project.id) {
    throw new Error(`Post-production plan does not belong to project "${project.id}".`);
  }

  const [audienceType, criticType, clarityType, spoilerType] = TYPE_EFFECTS[strategy.strategyType];
  const craftCoverage = Math.min(12, plan.editDecisionIds.length * 2 + plan.musicDecisionIds.length * 2 + plan.colorDecisionIds.length);
  const audienceInterest = clampScore(
    48 + audienceType + craftCoverage + stat(strategy, "audienceAppeal") + project.actorIds.length * 2
  );
  const criticInterest = clampScore(
    45 + criticType + Math.min(8, plan.editDecisionIds.length * 2 + plan.colorDecisionIds.length * 2)
      + stat(strategy, "criticalAppeal")
  );
  const genreClarity = clampScore(50 + clarityType + stat(strategy, "genreClarity") + stat(strategy, "clarity"));
  const spoilerRisk = clampScore(18 + spoilerType + strategy.risk * 0.45 + Math.max(0, audienceInterest - 75) * 0.25);

  return {
    projectId: project.id,
    strategyId: strategy.id,
    audienceInterest,
    criticInterest,
    genreClarity,
    spoilerRisk,
    cost: strategy.cost,
    note: `The ${strategy.title.toLowerCase()} cut promises ${strategy.promisedExperience.toLowerCase()} to ${strategy.targetAudience.toLowerCase()}.`
  };
}

function stat(strategy: TrailerStrategy, key: keyof TrailerStrategy["statChanges"]): number {
  return strategy.statChanges[key] ?? 0;
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
