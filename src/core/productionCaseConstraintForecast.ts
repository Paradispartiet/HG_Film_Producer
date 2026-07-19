import {
  getProductionCaseChoiceConstraintImpact,
  getProductionCaseConstraintSummary,
  type ProductionCaseConstraintImpact,
  type ProductionCaseConstraintMission,
  type ProductionCaseConstraintStatus,
  type ProductionCaseConstraintSummary,
} from "./productionCaseConstraints.js";
import type { ProductionCaseBestResultTier, ProductionCaseProgressEntry } from "./productionCaseProgress.js";

export type ProductionCaseConstraintForecast = {
  readonly impact: ProductionCaseConstraintImpact;
  readonly projected: ProductionCaseConstraintSummary;
  readonly label: string;
  readonly description: string;
  readonly tierCap: ProductionCaseBestResultTier | undefined;
  readonly isOverrun: boolean;
};

const forecastCopy = {
  on_track: {
    label: "Viable after choice",
    description: "The production keeps workable budget and schedule room.",
    tierCap: undefined,
  },
  strained: {
    label: "Low margin after choice",
    description: "Budget or time will be close to exhaustion, leaving little room for later phases.",
    tierCap: undefined,
  },
  over_budget: {
    label: "Budget overrun",
    description: "This choice pushes the production over budget. The final result can be at most Producer.",
    tierCap: "producer",
  },
  over_schedule: {
    label: "Schedule overrun",
    description: "This choice pushes the production behind schedule. The final result can be at most Producer.",
    tierCap: "producer",
  },
  overextended: {
    label: "Production overextended",
    description: "This choice exceeds both budget and time. The final result can be at most Assistant.",
    tierCap: "assistant",
  },
} as const satisfies Record<ProductionCaseConstraintStatus, {
  readonly label: string;
  readonly description: string;
  readonly tierCap: ProductionCaseBestResultTier | undefined;
}>;

/**
 * Forecasts the state immediately after one candidate choice. Only earlier
 * phases plus the current phase are counted, so choices already stored in
 * later phases cannot distort the decision shown to the player.
 *
 * A previously selected choice in the same mission is replaced rather than
 * added again. This keeps replay and choice switching deterministic.
 */
export function getProductionCaseChoiceConstraintForecast(
  missions: readonly ProductionCaseConstraintMission[],
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
  missionId: string,
  choiceId: string,
): ProductionCaseConstraintForecast | undefined {
  const missionIndex = missions.findIndex((mission) => mission.id === missionId);
  if (missionIndex < 0) return undefined;

  const mission = missions[missionIndex];
  const choice = mission?.choices.find((candidate) => candidate.id === choiceId);
  if (!choice) return undefined;

  const selectedChoicesByMissionId = {
    ...progress.selectedChoicesByMissionId,
    [missionId]: choiceId,
  };
  const projected = getProductionCaseConstraintSummary(
    missions.slice(0, missionIndex + 1),
    { selectedChoicesByMissionId },
  );
  const copy = forecastCopy[projected.status];

  return {
    impact: getProductionCaseChoiceConstraintImpact(choice),
    projected,
    ...copy,
    isOverrun: projected.status === "over_budget"
      || projected.status === "over_schedule"
      || projected.status === "overextended",
  };
}
