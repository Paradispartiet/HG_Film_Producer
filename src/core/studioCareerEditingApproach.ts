/** A creative tradeoff in the editing room, separate from the paid edit decision. */
export const STUDIO_CAREER_EDITING_APPROACH_IDS = ["balanced", "story_first", "bold_cut"] as const;
export type StudioCareerEditingApproachId = typeof STUDIO_CAREER_EDITING_APPROACH_IDS[number];

export interface StudioCareerEditingApproachEffect {
  readonly id: StudioCareerEditingApproachId;
  readonly clarity: number;
  readonly pacing: number;
  readonly emotion: number;
  readonly audienceHook: number;
}

/**
 * Differences apply to the actual audience screening, and therefore flow into
 * locked-cut quality and the final film result through existing engines.
 * The balanced option deliberately preserves all legacy numerical behavior.
 */
const APPROACH_EFFECTS: Readonly<Record<StudioCareerEditingApproachId, StudioCareerEditingApproachEffect>> = {
  balanced: { id: "balanced", clarity: 0, pacing: 0, emotion: 0, audienceHook: 0 },
  story_first: { id: "story_first", clarity: 10, pacing: 5, emotion: -4, audienceHook: -3 },
  bold_cut: { id: "bold_cut", clarity: -7, pacing: -4, emotion: 10, audienceHook: 6 }
};

export function getStudioCareerEditingApproach(
  value?: StudioCareerEditingApproachId
): StudioCareerEditingApproachEffect {
  // Old saved runs have no selected approach. The runtime fallback also
  // tolerates corrupted or out-of-date local storage values.
  return APPROACH_EFFECTS[value ?? "balanced"] ?? APPROACH_EFFECTS.balanced;
}
