import type { ProductionTeamEvaluation } from "../domain/crew.js";

/** Reallocations above the normal production baseline; money is not spent twice. */
export const STUDIO_CAREER_BUDGET_PRIORITY_IDS = ["reserve", "cast_focus", "crew_focus"] as const;
export type StudioCareerBudgetPriorityId = typeof STUDIO_CAREER_BUDGET_PRIORITY_IDS[number];

const PREPARATION_SHARE = 0.06;

export interface BudgetPriorityResult {
  readonly id: StudioCareerBudgetPriorityId;
  /** Additional pre-production spend charged once when the film is released. */
  readonly investmentCost: number;
  /** Score changes after saturation at 100, not hypothetical promised gains. */
  readonly crewGain: number;
  readonly castGain: number;
  readonly chemistryGain: number;
  readonly reliabilityGain: number;
}

/** Preview an additional rehearsal / technical preparation investment. */
export function previewBudgetPriority(
  filmBudget: number,
  priority?: StudioCareerBudgetPriorityId
): number {
  if (priority !== "cast_focus" && priority !== "crew_focus") return 0;
  return Number.isFinite(filmBudget) && filmBudget > 0
    ? Math.round(filmBudget * PREPARATION_SHARE)
    : 0;
}

/**
 * Apply a funded team-preparation decision without changing the underlying
 * actors, crew members, team fees or the film project's allocated budget.
 * Reserve/absent choices preserve the previous evaluation exactly.
 */
export function applyBudgetPriority(
  team: ProductionTeamEvaluation,
  filmBudget: number,
  priority?: StudioCareerBudgetPriorityId
): { readonly teamEvaluation: ProductionTeamEvaluation; readonly budgetPriority: BudgetPriorityResult } {
  const id = priority === "cast_focus" || priority === "crew_focus" ? priority : "reserve";
  const cost = previewBudgetPriority(filmBudget, id);
  const enabled = cost > 0;
  const crewScore = clampScore(team.crewScore + (enabled && id === "crew_focus" ? 9 : 0));
  const castScore = clampScore(team.castScore + (enabled && id === "cast_focus" ? 9 : 0));
  const chemistryScore = clampScore(team.chemistryScore + (enabled && id === "cast_focus" ? 4 : 0));
  const reliabilityScore = clampScore(team.reliabilityScore + (enabled && id === "crew_focus" ? 4 : 0));
  const budgetPriority: BudgetPriorityResult = {
    id,
    investmentCost: cost,
    crewGain: crewScore - team.crewScore,
    castGain: castScore - team.castScore,
    chemistryGain: chemistryScore - team.chemistryScore,
    reliabilityGain: reliabilityScore - team.reliabilityScore
  };
  if (!enabled) return { teamEvaluation: team, budgetPriority };

  // Use the exact existing team-evaluation weights; do not award a flat bonus.
  const overall = clampScore(
    crewScore * 0.30 + castScore * 0.25 + chemistryScore * 0.20
    + reliabilityScore * 0.15 + (100 - team.budgetPressure) * 0.10
  );
  return {
    budgetPriority,
    teamEvaluation: {
      ...team,
      crewScore, castScore, chemistryScore, reliabilityScore, overall,
      notes: [
        ...team.notes,
        id === "cast_focus"
          ? "Paid cast rehearsals improved ensemble readiness and chemistry."
          : "Paid technical rehearsal improved crew coordination and reliability."
      ]
    }
  };
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
