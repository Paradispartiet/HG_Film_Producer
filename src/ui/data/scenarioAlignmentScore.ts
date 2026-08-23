export type ScenarioAlignmentAssessment = "reconsider" | "partial" | "clear";

export type ScenarioAlignmentFeedback = {
  readonly selectedCount: number;
  readonly totalCount: number;
  readonly assessment: ScenarioAlignmentAssessment;
};

export function assessScenarioAlignment(args: {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}): ScenarioAlignmentFeedback {
  const totalCount = Math.max(0, args.totalTargets);
  const selectedCount = Math.min(args.selectedTargetIds.length, totalCount);

  if (totalCount === 0 || selectedCount === 0) {
    return { selectedCount, totalCount, assessment: "reconsider" };
  }

  const selectedShare = selectedCount / totalCount;

  if (selectedShare < 0.35) {
    return { selectedCount, totalCount, assessment: "reconsider" };
  }

  if (selectedShare < 0.7) {
    return { selectedCount, totalCount, assessment: "partial" };
  }

  return { selectedCount, totalCount, assessment: "clear" };
}
