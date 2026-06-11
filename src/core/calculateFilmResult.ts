import type { FilmProject, FilmResult } from "../domain/film.js";

const SCALE_BONUS: Record<FilmProject["scale"], number> = {
  micro: 0,
  indie: 8,
  mid_budget: 16,
  studio: 24,
  prestige: 30
};

export function calculateFilmResult(project: FilmProject): FilmResult {
  const crewStrength = project.crewMemberIds.length * 4;
  const castStrength = project.actorIds.length * 3;
  const locationStrength = project.locationIds.length * 2;
  const techniqueStrength = project.techniqueIdsUsed.length * 5;
  const scaleBonus = SCALE_BONUS[project.scale];

  const quality = clampScore(30 + crewStrength + techniqueStrength + scaleBonus);
  const audienceAppeal = clampScore(25 + castStrength + locationStrength + scaleBonus);
  const criticalAppeal = clampScore(20 + techniqueStrength + crewStrength + project.locationIds.length);
  const budgetSpent = Math.round(project.budget * budgetPressure(project.scale));
  const revenueEstimate = Math.round((audienceAppeal * 1200 + quality * 800) * revenueMultiplier(project.scale));

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
