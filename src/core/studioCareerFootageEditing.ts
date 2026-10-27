import type { StudioCareerEditingApproachId } from "./studioCareerEditingApproach.js";

interface RecordedFootageDay {
  readonly shootDayResult?: {
    readonly completedSceneIds?: readonly string[];
    readonly delayedSceneIds?: readonly string[];
    readonly takeQuality?: number;
  };
}

export interface StudioCareerFootageEvidence {
  readonly completedScenes: number;
  readonly missingScenes: number;
  readonly recordedScenes: number;
  /** A quality score belongs to a shooting day, not an individual scene. */
  readonly lowestQualityDay?: { readonly dayNumber: number; readonly takeQuality: number };
}

/**
 * Derive editing constraints only from confirmed shoot records.
 * Latest status wins when the same scene was delayed and recorded later.
 * Do not invent footage when legacy reports omit the recorded scene lists.
 */
export function getStudioCareerFootageEvidence(
  days: readonly RecordedFootageDay[]
): StudioCareerFootageEvidence | undefined {
  const statuses = new Map<string, "completed" | "delayed">();
  let lowestQualityDay: StudioCareerFootageEvidence["lowestQualityDay"];

  days.forEach((day, index) => {
    const result = day?.shootDayResult;
    if (!result) return;
    const completed = result.completedSceneIds;
    const delayed = result.delayedSceneIds;
    if (!Array.isArray(completed) || !Array.isArray(delayed)
      || ![...completed, ...delayed].every((id) => typeof id === "string" && id.trim().length > 0)) return;

    for (const id of completed) statuses.set(id, "completed");
    for (const id of delayed) statuses.set(id, "delayed");

    const quality = result.takeQuality;
    if (statuses.size > 0 && typeof quality === "number" && Number.isFinite(quality)
      && quality >= 0 && quality <= 100
      && (!lowestQualityDay || quality < lowestQualityDay.takeQuality)) {
      lowestQualityDay = { dayNumber: index + 1, takeQuality: quality };
    }
  });

  if (statuses.size === 0) return undefined;
  const missingScenes = [...statuses.values()].filter((status) => status === "delayed").length;
  return {
    recordedScenes: statuses.size,
    completedScenes: statuses.size - missingScenes,
    missingScenes,
    ...(lowestQualityDay ? { lowestQualityDay } : {})
  };
}

/**
 * Missing scenes put genuine continuity pressure on the cut.
 * A story-first approach mitigates but cannot eliminate the problem.
 * Fully recorded films and legacy callers retain their current scores.
 */
export function getStudioCareerFootageContinuityPenalty(
  evidence: StudioCareerFootageEvidence | undefined,
  editingApproach: StudioCareerEditingApproachId
): number {
  if (!evidence || evidence.recordedScenes <= 0 || evidence.missingScenes <= 0) return 0;
  const base = Math.min(12, Math.round(12 * evidence.missingScenes / evidence.recordedScenes));
  return editingApproach === "story_first" ? Math.ceil(base / 2) : base;
}
