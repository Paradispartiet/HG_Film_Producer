import type { ProductionTeamEvaluation } from "../domain/crew.js";
import type { FilmProject, FilmResult } from "../domain/film.js";
import type { PostProductionEvaluation } from "../domain/post.js";

const SCALE_BONUS: Record<FilmProject["scale"], number> = {
  micro: 0,
  indie: 6,
  mid_budget: 12,
  studio: 18,
  prestige: 22
};

/**
 * Calculate a release result. Existing one- and two-argument callers retain
 * their previous behavior; optional post-production improves the locked cut,
 * positions the trailer, and adds its actual cost.
 */
export function calculateFilmResult(
  project: FilmProject,
  productionTeam?: ProductionTeamEvaluation,
  postProduction?: PostProductionEvaluation
): FilmResult {
  if (productionTeam && productionTeam.projectId !== project.id) {
    throw new Error(`Production team evaluation does not belong to project "${project.id}".`);
  }
  if (postProduction && postProduction.projectId !== project.id) {
    throw new Error(`Post-production evaluation does not belong to project "${project.id}".`);
  }

  const crewQuality = productionTeam?.crewScore ?? fallbackCrewScore(project);
  const castQuality = productionTeam?.castScore ?? fallbackCastScore(project);
  const chemistry = productionTeam?.chemistryScore ?? fallbackChemistryScore(project);
  const reliability = productionTeam?.reliabilityScore ?? 60;
  const teamBudgetPressure = productionTeam?.budgetPressure ?? 0;
  const locationStrength = Math.min(10, project.locationIds.length * 3);
  const techniqueStrength = Math.min(15, project.techniqueIdsUsed.length * 5);
  const scaleBonus = SCALE_BONUS[project.scale];
  const lockedCutAdjustment = postProduction ? (postProduction.lockedCutQuality - 50) * 0.25 : 0;
  const trailerAdjustment = postProduction ? (postProduction.trailerScore - 50) * 0.28 : 0;

  const quality = clampScore(
    15 + crewQuality * 0.42 + chemistry * 0.1 + reliability * 0.08 + techniqueStrength
      + scaleBonus * 0.35 + lockedCutAdjustment
  );
  const audienceAppeal = clampScore(
    15 + castQuality * 0.36 + chemistry * 0.2 + locationStrength + scaleBonus * 0.65
      + trailerAdjustment + lockedCutAdjustment * 0.35
  );
  const criticalAppeal = clampScore(
    12 + crewQuality * 0.32 + castQuality * 0.12 + chemistry * 0.12 + techniqueStrength
      + locationStrength * 0.5 + lockedCutAdjustment * 0.7
      + (postProduction ? (postProduction.overall - 50) * 0.12 : 0)
  );
  const productionBudgetSpent = Math.round(
    project.budget * budgetPressure(project.scale) * (1 + Math.max(0, teamBudgetPressure - 50) / 500)
  );
  const budgetSpent = productionBudgetSpent + (postProduction?.totalCost ?? 0);
  const revenueEstimate = Math.round(
    (audienceAppeal * 1200 + quality * 800) * revenueMultiplier(project.scale)
  );

  return {
    projectId: project.id,
    quality,
    audienceAppeal,
    criticalAppeal,
    budgetSpent,
    revenueEstimate,
    reputationDelta: Math.round((quality + audienceAppeal) / 25),
    prestigeDelta: Math.round(criticalAppeal / 30)
  };
}

function fallbackCrewScore(project: FilmProject): number {
  return clampScore(35 + project.crewMemberIds.length * 8);
}

function fallbackCastScore(project: FilmProject): number {
  return clampScore(35 + project.actorIds.length * 10);
}

function fallbackChemistryScore(project: FilmProject): number {
  return project.actorIds.length >= 2 ? 55 : project.actorIds.length === 1 ? 40 : 0;
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function budgetPressure(scale: FilmProject["scale"]): number {
  switch (scale) {
    case "micro":
      return 0.75;
    case "indie":
      return 0.9;
    case "mid_budget":
      return 1;
    case "studio":
      return 1.1;
    case "prestige":
      return 1.2;
  }
}

function revenueMultiplier(scale: FilmProject["scale"]): number {
  switch (scale) {
    case "micro":
      return 0.35;
    case "indie":
      return 0.8;
    case "mid_budget":
      return 1.4;
    case "studio":
      return 2.4;
    case "prestige":
      return 1.8;
  }
}
