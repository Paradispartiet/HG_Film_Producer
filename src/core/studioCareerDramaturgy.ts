import type { StudioCareerFootageEvidence } from "./studioCareerFootageEditing.js";

/**
 * Story-structure decisions are simulated on the existing cut. They do not
 * invent physical footage or introduce a parallel screening score.
 */
export const STUDIO_CAREER_DRAMATURGY_IDS = [
  "original", "turning_point", "conflict", "suspense", "scene_order"
] as const;
export type StudioCareerDramaturgyId = typeof STUDIO_CAREER_DRAMATURGY_IDS[number];

export interface DramaturgyScriptEvidence {
  readonly conflict: number;
  readonly pacing: number;
  readonly emotion: number;
}

export interface DramaturgyEffect {
  readonly id: StudioCareerDramaturgyId;
  readonly clarity: number;
  readonly pacing: number;
  readonly emotion: number;
  readonly audienceHook: number;
}

const original: DramaturgyEffect = {
  id: "original", clarity: 0, pacing: 0, emotion: 0, audienceHook: 0
};

function validScore(value: number | undefined): number | undefined {
  return value !== undefined && Number.isFinite(value)
    ? Math.max(0, Math.min(100, value))
    : undefined;
}

/** Use measured screenplay conflict/pacing and actual recorded coverage.
 * Missing evidence is neutral, not a fictional perfect shoot.
 */
export function getStudioCareerDramaturgyEffect(
  id?: StudioCareerDramaturgyId,
  script?: DramaturgyScriptEvidence,
  footage?: StudioCareerFootageEvidence
): DramaturgyEffect {
  const chosen = STUDIO_CAREER_DRAMATURGY_IDS.includes(id as StudioCareerDramaturgyId) ? id : "original";
  const conflict = validScore(script?.conflict);
  const pacing = validScore(script?.pacing);
  const missingShare = footage && footage.recordedScenes > 0
    ? Math.max(0, Math.min(1, footage.missingScenes / footage.recordedScenes))
    : 0;
  const coverageRisk = Math.round(missingShare * 12);

  switch (chosen) {
    case "turning_point":
      return { id: chosen, clarity: 3, pacing: 2,
        emotion: 3 + (conflict === undefined ? 0 : Math.round((conflict - 55) / 25)),
        audienceHook: 2 };
    case "conflict":
      return { id: chosen, clarity: 2, pacing: -2, emotion: 2,
        audienceHook: 4 + (conflict === undefined ? 0 : Math.round((conflict - 55) / 20)) };
    case "suspense":
      return { id: chosen, clarity: -5 - Math.ceil(coverageRisk / 3),
        pacing: 3 + (pacing === undefined ? 0 : Math.round((pacing - 55) / 30)),
        emotion: 2, audienceHook: 5 };
    case "scene_order":
      return { id: chosen, clarity: 5 - coverageRisk, pacing: 4 - Math.ceil(coverageRisk / 2),
        emotion: -2, audienceHook: 1 };
    default:
      return original;
  }
}
