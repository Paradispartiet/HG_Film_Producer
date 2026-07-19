import type { ProductionCaseProgressEntry } from "./productionCaseProgress.js";

export const productionCaseStartingBudget = 10;
export const productionCaseStartingSchedule = 10;

export type ProductionCaseConstraintStatus =
  | "on_track"
  | "strained"
  | "over_budget"
  | "over_schedule"
  | "overextended";

export type ProductionCaseConstraintImpact = {
  readonly approach: "creative_push" | "balanced_execution" | "schedule_compromise" | "costly_mismatch";
  readonly label: string;
  readonly budgetDelta: number;
  readonly scheduleDelta: number;
  readonly creativeControlDelta: number;
};

export type ProductionCaseConstraintChoice = {
  readonly id: string;
  readonly quality: string;
};

export type ProductionCaseConstraintMission = {
  readonly id: string;
  readonly choices: readonly ProductionCaseConstraintChoice[];
};

export type ProductionCaseConstraintSummary = {
  readonly startingBudget: number;
  readonly startingSchedule: number;
  readonly budgetRemaining: number;
  readonly scheduleRemaining: number;
  readonly creativeControl: number;
  readonly choicesMade: number;
  readonly status: ProductionCaseConstraintStatus;
  readonly label: string;
  readonly description: string;
};

const impactByApproach = {
  creative_push: {
    approach: "creative_push",
    label: "Creative push",
    budgetDelta: -2,
    scheduleDelta: 0,
    creativeControlDelta: 2,
  },
  balanced_execution: {
    approach: "balanced_execution",
    label: "Balanced execution",
    budgetDelta: -1,
    scheduleDelta: -1,
    creativeControlDelta: 1,
  },
  schedule_compromise: {
    approach: "schedule_compromise",
    label: "Schedule-heavy compromise",
    budgetDelta: 0,
    scheduleDelta: -2,
    creativeControlDelta: 0,
  },
  costly_mismatch: {
    approach: "costly_mismatch",
    label: "Costly mismatch",
    budgetDelta: -2,
    scheduleDelta: -2,
    creativeControlDelta: -1,
  },
} as const satisfies Record<string, ProductionCaseConstraintImpact>;

/**
 * The first matching solution protects creative control by spending more budget.
 * The second matching solution is the balanced producer choice. Partial and
 * missed solutions consume time or both resources. The impact is derived from
 * the existing choice ID and quality, so saved v1 progress needs no migration.
 */
export function getProductionCaseChoiceConstraintImpact(
  choice: ProductionCaseConstraintChoice,
): ProductionCaseConstraintImpact {
  if (choice.quality === "match") {
    return choice.id.endsWith("-match-1")
      ? impactByApproach.creative_push
      : impactByApproach.balanced_execution;
  }
  if (choice.quality === "partial") return impactByApproach.schedule_compromise;
  return impactByApproach.costly_mismatch;
}

function getConstraintStatus(
  budgetRemaining: number,
  scheduleRemaining: number,
): ProductionCaseConstraintStatus {
  if (budgetRemaining < 0 && scheduleRemaining < 0) return "overextended";
  if (budgetRemaining < 0) return "over_budget";
  if (scheduleRemaining < 0) return "over_schedule";
  if (budgetRemaining <= 2 || scheduleRemaining <= 2) return "strained";
  return "on_track";
}

const constraintStatusCopy = {
  on_track: {
    label: "On track",
    description: "The production still has workable budget and schedule room.",
  },
  strained: {
    label: "Strained",
    description: "One production resource is nearly exhausted. Later phases have little margin.",
  },
  over_budget: {
    label: "Over budget",
    description: "Creative commitments exceeded the available budget.",
  },
  over_schedule: {
    label: "Behind schedule",
    description: "Production choices exceeded the available schedule.",
  },
  overextended: {
    label: "Overextended",
    description: "The production exceeded both budget and schedule.",
  },
} as const satisfies Record<ProductionCaseConstraintStatus, { readonly label: string; readonly description: string }>;

export function getProductionCaseConstraintSummary(
  missions: readonly ProductionCaseConstraintMission[],
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
): ProductionCaseConstraintSummary {
  const selectedChoicesByMissionId = progress.selectedChoicesByMissionId ?? {};
  let budgetRemaining = productionCaseStartingBudget;
  let scheduleRemaining = productionCaseStartingSchedule;
  let creativeControl = 0;
  let choicesMade = 0;

  for (const mission of missions) {
    const selectedChoiceId = selectedChoicesByMissionId[mission.id];
    const selectedChoice = mission.choices.find((choice) => choice.id === selectedChoiceId);
    if (!selectedChoice) continue;

    const impact = getProductionCaseChoiceConstraintImpact(selectedChoice);
    budgetRemaining += impact.budgetDelta;
    scheduleRemaining += impact.scheduleDelta;
    creativeControl += impact.creativeControlDelta;
    choicesMade += 1;
  }

  const status = getConstraintStatus(budgetRemaining, scheduleRemaining);
  const copy = constraintStatusCopy[status];

  return {
    startingBudget: productionCaseStartingBudget,
    startingSchedule: productionCaseStartingSchedule,
    budgetRemaining,
    scheduleRemaining,
    creativeControl,
    choicesMade,
    status,
    ...copy,
  };
}

export function getProductionCaseConstraintSummaryBeforeMission(
  missions: readonly ProductionCaseConstraintMission[],
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
  missionId: string,
): ProductionCaseConstraintSummary {
  const missionIndex = missions.findIndex((mission) => mission.id === missionId);
  return getProductionCaseConstraintSummary(
    missionIndex < 0 ? missions : missions.slice(0, missionIndex),
    progress,
  );
}
