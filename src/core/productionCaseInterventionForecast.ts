import {
  getProductionCaseConstraintSummary,
  type ProductionCaseConstraintMission,
  type ProductionCaseConstraintStatus,
  type ProductionCaseConstraintSummary,
} from "./productionCaseConstraints.js";
import {
  getProductionCaseIntervention,
  type ProductionCaseIntervention,
  type ProductionCaseInterventionId,
} from "./productionCaseInterventions.js";
import type { ProductionCaseProgressEntry } from "./productionCaseProgress.js";

export type ProductionCaseInterventionForecastEffect =
  | "improves"
  | "changes"
  | "holds"
  | "worsens";

export type ProductionCaseInterventionForecast = {
  readonly intervention: ProductionCaseIntervention;
  readonly before: ProductionCaseConstraintSummary;
  readonly projected: ProductionCaseConstraintSummary;
  readonly effect: ProductionCaseInterventionForecastEffect;
};

const statusSeverity: Record<ProductionCaseConstraintStatus, number> = {
  on_track: 0,
  strained: 1,
  over_budget: 2,
  over_schedule: 2,
  overextended: 3,
};

function getForecastEffect(
  before: ProductionCaseConstraintStatus,
  projected: ProductionCaseConstraintStatus,
): ProductionCaseInterventionForecastEffect {
  const beforeSeverity = statusSeverity[before];
  const projectedSeverity = statusSeverity[projected];
  if (projectedSeverity < beforeSeverity) return "improves";
  if (projectedSeverity > beforeSeverity) return "worsens";
  if (before !== projected) return "changes";
  return "holds";
}

/**
 * Forecasts one rescue intervention after the selected choice in a mission.
 * Earlier phases are included, later phases are ignored, and an intervention
 * already selected in the same mission is replaced rather than counted twice.
 */
export function getProductionCaseInterventionForecast(
  missions: readonly ProductionCaseConstraintMission[],
  progress: Pick<
    ProductionCaseProgressEntry,
    "selectedChoicesByMissionId" | "selectedInterventionsByMissionId"
  >,
  missionId: string,
  interventionId: ProductionCaseInterventionId,
): ProductionCaseInterventionForecast | undefined {
  const missionIndex = missions.findIndex((mission) => mission.id === missionId);
  if (missionIndex < 0) return undefined;

  const mission = missions[missionIndex];
  const selectedChoiceId = progress.selectedChoicesByMissionId?.[missionId];
  if (!mission?.choices.some((choice) => choice.id === selectedChoiceId)) return undefined;

  const intervention = getProductionCaseIntervention(interventionId);
  if (!intervention) return undefined;

  const selectedInterventionsByMissionId = {
    ...progress.selectedInterventionsByMissionId,
    [missionId]: interventionId,
  };
  const withoutCurrentIntervention = { ...progress.selectedInterventionsByMissionId };
  delete withoutCurrentIntervention[missionId];
  const scopedMissions = missions.slice(0, missionIndex + 1);
  const before = getProductionCaseConstraintSummary(scopedMissions, {
    selectedChoicesByMissionId: progress.selectedChoicesByMissionId,
    selectedInterventionsByMissionId: withoutCurrentIntervention,
  });
  const projected = getProductionCaseConstraintSummary(scopedMissions, {
    selectedChoicesByMissionId: progress.selectedChoicesByMissionId,
    selectedInterventionsByMissionId,
  });

  return {
    intervention,
    before,
    projected,
    effect: getForecastEffect(before.status, projected.status),
  };
}
