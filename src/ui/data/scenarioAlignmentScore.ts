export type ScenarioAlignmentScore = {
  readonly selectedCount: number;
  readonly totalCount: number;
  readonly percentage: number;
  readonly tier: "none" | "loose" | "focused" | "strong";
  readonly label: string;
};

export function calculateScenarioAlignmentScore(args: {
  readonly selectedTargetIds: readonly string[];
  readonly totalTargets: number;
}): ScenarioAlignmentScore {
  const totalCount = Math.max(0, args.totalTargets);
  const selectedCount = args.selectedTargetIds.length;

  if (totalCount === 0) {
    return { selectedCount, totalCount, percentage: 0, tier: "none", label: "No classic alignment yet" };
  }

  const percentage = Math.min(100, Math.round((selectedCount / totalCount) * 100));

  if (selectedCount === 0) {
    return { selectedCount, totalCount, percentage, tier: "none", label: "No classic alignment yet" };
  }

  if (percentage < 35) {
    return { selectedCount, totalCount, percentage, tier: "loose", label: "Loose classic alignment" };
  }

  if (percentage < 70) {
    return { selectedCount, totalCount, percentage, tier: "focused", label: "Focused classic alignment" };
  }

  return { selectedCount, totalCount, percentage, tier: "strong", label: "Strong classic alignment" };
}
