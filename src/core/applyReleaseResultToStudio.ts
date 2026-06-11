import type { Studio } from "../domain/film.js";
import type {
  ReleaseOutcomeEvaluation,
  StudioReleaseApplicationResult
} from "../domain/release.js";

/** Apply the final project P&L and reception changes without mutating the studio. */
export function applyReleaseResultToStudio(
  studio: Studio,
  outcome: ReleaseOutcomeEvaluation
): StudioReleaseApplicationResult {
  const alreadyCompleted = studio.completedFilmProjectIds.includes(outcome.projectId);
  const completedFilmProjectIds = alreadyCompleted
    ? studio.completedFilmProjectIds
    : [...studio.completedFilmProjectIds, outcome.projectId];
  const activeFilmProjectIds = studio.activeFilmProjectIds.filter((id) => id !== outcome.projectId);
  const updatedStudio: Studio = {
    ...studio,
    money: studio.money + outcome.netRevenue,
    reputation: Math.max(0, studio.reputation + outcome.reputationDelta),
    prestige: Math.max(0, studio.prestige + outcome.prestigeDelta),
    activeFilmProjectIds,
    completedFilmProjectIds
  };

  return {
    studio: updatedStudio,
    outcome,
    moneyDelta: outcome.netRevenue,
    reputationDelta: outcome.reputationDelta,
    prestigeDelta: outcome.prestigeDelta,
    note: alreadyCompleted
      ? "Release effects were applied; the project was already recorded as completed."
      : "Release effects were applied and the evaluated project was recorded as completed."
  };
}
