import type { ProductionCaseProgressEntry } from "./productionCaseProgress.js";

export type ProductionCaseCompletionChoice = {
  readonly id: string;
};

/**
 * A Production Case phase only counts as completable after the player has made
 * an explicit choice that still exists among that mission's available options.
 */
export function canCompleteProductionCaseMission(
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
  missionId: string,
  availableChoices?: readonly ProductionCaseCompletionChoice[],
): boolean {
  const selectedChoiceId = progress.selectedChoicesByMissionId?.[missionId];
  if (typeof selectedChoiceId !== "string" || selectedChoiceId.trim().length === 0) {
    return false;
  }

  return availableChoices
    ? availableChoices.some((choice) => choice.id === selectedChoiceId)
    : true;
}
