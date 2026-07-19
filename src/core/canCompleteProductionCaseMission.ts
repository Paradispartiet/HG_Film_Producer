import type { ProductionCaseProgressEntry } from "./productionCaseProgress.js";

/**
 * A Production Case phase only counts as completable after the player has made
 * an explicit production choice for that mission.
 */
export function canCompleteProductionCaseMission(
  progress: Pick<ProductionCaseProgressEntry, "selectedChoicesByMissionId">,
  missionId: string,
): boolean {
  const selectedChoiceId = progress.selectedChoicesByMissionId?.[missionId];
  return typeof selectedChoiceId === "string" && selectedChoiceId.trim().length > 0;
}
