import type { Scene } from "../domain/script.js";
import type { SceneShootDifficulty } from "../domain/shoot.js";

export interface SceneShootDifficultyContext {
  readonly locationLogistics?: number;
  readonly actorCount?: number;
}

/** Estimate practical scene difficulty from visible, tuneable production factors. */
export function estimateSceneShootDifficulty(
  scene: Scene,
  context: SceneShootDifficultyContext = {}
): SceneShootDifficulty {
  const conflictLoad = clampScore(scene.conflictLevel);
  const emotionalLoad = clampScore(scene.emotionalWeight);
  const pacingPressure = clampScore(scene.pacing);
  const techniqueComplexity = clampScore(scene.techniqueIdsUsed.length * 20);
  const locationLogistics = clampScore(context.locationLogistics ?? 0);
  const castLoad = clampScore((context.actorCount ?? scene.characterIds.length) * 15);
  const difficultyScore = clampScore(
    conflictLoad * 0.2
      + emotionalLoad * 0.2
      + pacingPressure * 0.15
      + techniqueComplexity * 0.15
      + locationLogistics * 0.15
      + castLoad * 0.15
  );

  const notes = [
    `Drama load combines conflict ${conflictLoad} and emotion ${emotionalLoad}.`,
    `Execution load combines pacing ${pacingPressure}, techniques ${techniqueComplexity}, logistics ${locationLogistics}, and cast ${castLoad}.`
  ];
  if (difficultyScore >= 70) {
    notes.push("This is a high-difficulty scene that needs extra preparation or schedule protection.");
  } else if (difficultyScore >= 40) {
    notes.push("This is a manageable scene with meaningful production pressure.");
  } else {
    notes.push("This is a relatively controlled scene for the current production plan.");
  }

  return {
    sceneId: scene.id,
    difficultyScore,
    conflictLoad,
    emotionalLoad,
    pacingPressure,
    techniqueComplexity,
    locationLogistics,
    castLoad,
    notes
  };
}

function clampScore(value: number): number {
  return Math.round(Math.min(100, Math.max(0, value)));
}
