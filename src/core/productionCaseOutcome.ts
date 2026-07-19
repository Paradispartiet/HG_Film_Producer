import {
  getProductionCaseConstraintSummary,
  type ProductionCaseConstraintMission,
  type ProductionCaseConstraintStatus,
  type ProductionCaseConstraintSummary,
} from "./productionCaseConstraints.js";
import {
  getProductionCaseLibraryStatus,
  productionCaseResultTierLabels,
  type ProductionCaseLibraryStatus,
  type ProductionCaseProgressEntry,
  type ProductionCaseReport,
  type ProductionCaseResultTier,
  type ProductionCaseScoreMission,
} from "./productionCaseProgress.js";

export type ProductionCaseOutcomeMission = ProductionCaseConstraintMission & ProductionCaseScoreMission;

export type ProductionCaseOutcome = {
  readonly craftTier: ProductionCaseResultTier;
  readonly finalTier: ProductionCaseResultTier;
  readonly productionStatus: ProductionCaseConstraintStatus;
  readonly tierCapped: boolean;
  readonly label: string;
  readonly description: string;
};

export type ProductionCaseConstrainedReport = {
  readonly report: ProductionCaseReport;
  readonly outcome: ProductionCaseOutcome;
};

type CompletedProductionCaseTier = Exclude<ProductionCaseResultTier, "not_started" | "in_progress">;

const completedTierRank = {
  assistant: 1,
  producer: 2,
  auteur: 3,
} as const satisfies Record<CompletedProductionCaseTier, number>;

function isCompletedTier(tier: ProductionCaseResultTier): tier is CompletedProductionCaseTier {
  return tier === "assistant" || tier === "producer" || tier === "auteur";
}

function getMaximumTierForProductionStatus(
  status: ProductionCaseConstraintStatus,
): CompletedProductionCaseTier {
  if (status === "overextended") return "assistant";
  if (status === "over_budget" || status === "over_schedule") return "producer";
  return "auteur";
}

function capCompletedTier(
  craftTier: CompletedProductionCaseTier,
  maximumTier: CompletedProductionCaseTier,
): CompletedProductionCaseTier {
  return completedTierRank[craftTier] <= completedTierRank[maximumTier]
    ? craftTier
    : maximumTier;
}

function getOutcomeCopy(
  craftTier: ProductionCaseResultTier,
  finalTier: ProductionCaseResultTier,
  status: ProductionCaseConstraintStatus,
): Pick<ProductionCaseOutcome, "label" | "description"> {
  const craftLabel = productionCaseResultTierLabels[craftTier];
  const finalLabel = productionCaseResultTierLabels[finalTier];
  const tierCapped = craftTier !== finalTier;

  if (status === "on_track") {
    return {
      label: "Production delivered",
      description: "The production stayed inside both budget and schedule, so the final result keeps the full craft tier.",
    };
  }

  if (status === "strained") {
    return {
      label: "Delivered under strain",
      description: "The production finished with little margin, but it avoided an overrun and keeps the full craft tier.",
    };
  }

  if (status === "over_budget") {
    return {
      label: tierCapped ? `Budget overrun · ${finalLabel} cap` : "Budget overrun",
      description: tierCapped
        ? `Craft understanding reached ${craftLabel}, but exceeding the budget caps the final producer result at ${finalLabel}.`
        : `The production exceeded its budget. The craft result remains ${finalLabel}, but a stronger tier would have been capped at Producer.`,
    };
  }

  if (status === "over_schedule") {
    return {
      label: tierCapped ? `Schedule overrun · ${finalLabel} cap` : "Schedule overrun",
      description: tierCapped
        ? `Craft understanding reached ${craftLabel}, but exceeding the schedule caps the final producer result at ${finalLabel}.`
        : `The production exceeded its schedule. The craft result remains ${finalLabel}, but a stronger tier would have been capped at Producer.`,
    };
  }

  return {
    label: tierCapped ? `Production collapse · ${finalLabel} cap` : "Production collapse",
    description: tierCapped
      ? `Craft understanding reached ${craftLabel}, but exceeding both budget and schedule caps the final producer result at ${finalLabel}.`
      : `The production exceeded both budget and schedule. The craft result remains ${finalLabel}, and no higher producer tier can be awarded.`,
  };
}

export function getProductionCaseOutcome(
  craftTier: ProductionCaseResultTier,
  productionStatus: ProductionCaseConstraintStatus,
): ProductionCaseOutcome {
  const finalTier = isCompletedTier(craftTier)
    ? capCompletedTier(craftTier, getMaximumTierForProductionStatus(productionStatus))
    : craftTier;
  const copy = getOutcomeCopy(craftTier, finalTier, productionStatus);

  return {
    craftTier,
    finalTier,
    productionStatus,
    tierCapped: finalTier !== craftTier,
    ...copy,
  };
}

export function applyProductionCaseOutcomeToReport(
  report: ProductionCaseReport,
  constraintSummary: ProductionCaseConstraintSummary,
): ProductionCaseConstrainedReport {
  const outcome = getProductionCaseOutcome(report.resultTier, constraintSummary.status);

  return {
    report: {
      ...report,
      resultTier: outcome.finalTier,
    },
    outcome,
  };
}

export function getProductionCaseConstrainedLibraryStatus(
  missions: readonly ProductionCaseOutcomeMission[],
  progress: Pick<ProductionCaseProgressEntry, "completedMissionIds" | "selectedChoicesByMissionId">,
): ProductionCaseLibraryStatus | undefined {
  const status = getProductionCaseLibraryStatus(missions, progress);
  if (!status) return undefined;

  const constraintSummary = getProductionCaseConstraintSummary(missions, progress);
  const outcome = getProductionCaseOutcome(status.tier, constraintSummary.status);

  return {
    ...status,
    tier: outcome.finalTier,
    label: productionCaseResultTierLabels[outcome.finalTier],
  };
}
