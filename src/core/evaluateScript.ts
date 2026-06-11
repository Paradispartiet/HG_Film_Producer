import type {
  Scene,
  Script,
  ScriptEvaluation,
  ScriptEvaluationScores,
  ScriptStructure
} from "../domain/script.js";

/**
 * How many scenes each structure ideally wants. Used to score whether a script
 * is the right size for the shape it claims to be.
 */
const IDEAL_SCENE_COUNT: Record<ScriptStructure, number> = {
  three_act: 12,
  hero_journey: 12,
  ensemble: 14,
  episodic: 16,
  experimental: 8,
  documentary: 10
};

/**
 * How much intrinsic originality each structure carries before technique
 * variety is taken into account. Familiar shapes score lower; bold ones higher.
 */
const STRUCTURE_ORIGINALITY: Record<ScriptStructure, number> = {
  three_act: 40,
  hero_journey: 45,
  ensemble: 60,
  episodic: 55,
  experimental: 85,
  documentary: 65
};

/**
 * Read a script and its scenes and return a per-axis evaluation.
 *
 * The formula is intentionally simple and explainable:
 *  - conflict / pacing / emotion are the average of the matching scene dials.
 *  - structure rewards hitting the ideal scene count for the chosen shape and
 *    not repeating the same dramatic function over and over.
 *  - character rewards having a cast and a named protagonist.
 *  - originality blends the structure's intrinsic boldness with how many
 *    distinct techniques are in play.
 *  - productionFeasibility falls as the script grows in scenes and technique
 *    count — more to shoot is harder to shoot.
 */
export function evaluateScript(script: Script, scenes: readonly Scene[]): ScriptEvaluation {
  const sceneCount = scenes.length;

  const conflict = clamp(average(scenes.map((scene) => scene.conflictLevel), 0));
  const pacing = clamp(average(scenes.map((scene) => scene.pacing), 0));
  const emotion = clamp(average(scenes.map((scene) => scene.emotionalWeight), 0));

  const ideal = IDEAL_SCENE_COUNT[script.structure];
  const sizeFit = sceneCount === 0 ? 0 : Math.min(sceneCount, ideal) / ideal;
  const distinctFunctions = new Set(scenes.map((scene) => scene.functionId)).size;
  const functionVariety = sceneCount === 0 ? 0 : distinctFunctions / sceneCount;
  const structure = clamp(sizeFit * 70 + functionVariety * 30);

  const hasProtagonist = script.protagonistCharacterId !== null;
  const character = clamp(35 + script.characterIds.length * 9 + (hasProtagonist ? 15 : 0));

  const distinctTechniques = new Set(scenes.flatMap((scene) => scene.techniqueIdsUsed)).size;
  const originality = clamp(STRUCTURE_ORIGINALITY[script.structure] * 0.6 + distinctTechniques * 12);

  const totalTechniqueUses = scenes.reduce((sum, scene) => sum + scene.techniqueIdsUsed.length, 0);
  const productionFeasibility = clamp(100 - sceneCount * 2.5 - totalTechniqueUses * 3);

  const scores: ScriptEvaluationScores = {
    structure,
    character,
    conflict,
    pacing,
    emotion,
    originality,
    productionFeasibility
  };

  const overall = clamp(
    structure * 0.2 +
      character * 0.15 +
      conflict * 0.15 +
      pacing * 0.1 +
      emotion * 0.15 +
      originality * 0.15 +
      productionFeasibility * 0.1
  );

  return {
    scriptId: script.id,
    sceneCount,
    scores,
    overall,
    notes: buildNotes(scores, sceneCount, ideal)
  };
}

function buildNotes(
  scores: ScriptEvaluationScores,
  sceneCount: number,
  ideal: number
): readonly string[] {
  const notes: string[] = [];

  if (sceneCount === 0) {
    notes.push("No scenes yet — write the first beats before judging the draft.");
    return notes;
  }

  if (sceneCount < ideal) {
    notes.push(`Only ${sceneCount} of about ${ideal} scenes — the structure feels thin.`);
  }
  if (scores.conflict < 40) {
    notes.push("Conflict is low; the stakes need to bite harder.");
  }
  if (scores.emotion >= 70) {
    notes.push("Strong emotional charge across the scenes.");
  }
  if (scores.originality >= 70) {
    notes.push("The shape and craft choices feel fresh.");
  }
  if (scores.productionFeasibility < 50) {
    notes.push("Ambitious to shoot — watch the scene and technique count against budget.");
  }
  if (notes.length === 0) {
    notes.push("A balanced draft with no glaring weaknesses.");
  }

  return notes;
}

function average(values: readonly number[], fallback: number): number {
  if (values.length === 0) {
    return fallback;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
