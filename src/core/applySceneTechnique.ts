import type { TechniqueId } from "../domain/ids.js";
import type { Scene, SceneStatChanges, SceneTechniqueApplicationResult } from "../domain/script.js";

/**
 * A generic craft bump. Without the full Technique definition in hand we apply
 * a small, predictable lift: a technique sharpens a scene's emotional charge
 * and conflict a little. This is enough to make applying technique matter for
 * evaluation; richer per-technique effects can come later.
 */
const EMOTION_BUMP = 8;
const CONFLICT_BUMP = 5;

/**
 * Apply a technique to a scene. Returns the updated scene plus a readable
 * summary. The original scene is never mutated, and a technique that has
 * already been applied is a no-op (no double counting).
 */
export function applySceneTechnique(
  scene: Scene,
  techniqueId: TechniqueId
): SceneTechniqueApplicationResult {
  if (scene.techniqueIdsUsed.includes(techniqueId)) {
    return {
      scene,
      techniqueId,
      alreadyApplied: true,
      statChanges: {},
      note: `Technique "${techniqueId}" is already applied to "${scene.title}".`
    };
  }

  const emotionalWeight = clampStat(scene.emotionalWeight + EMOTION_BUMP);
  const conflictLevel = clampStat(scene.conflictLevel + CONFLICT_BUMP);

  const statChanges: SceneStatChanges = {
    emotionalWeight: emotionalWeight - scene.emotionalWeight,
    conflictLevel: conflictLevel - scene.conflictLevel
  };

  const updatedScene: Scene = {
    ...scene,
    emotionalWeight,
    conflictLevel,
    techniqueIdsUsed: [...scene.techniqueIdsUsed, techniqueId]
  };

  return {
    scene: updatedScene,
    techniqueId,
    alreadyApplied: false,
    statChanges,
    note: `Applied "${techniqueId}" to "${scene.title}".`
  };
}

function clampStat(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
