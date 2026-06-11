import type { FilmProject } from "../domain/film.js";
import type { PostProductionPlan, TestScreeningResult } from "../domain/post.js";
import type { ScriptEvaluation } from "../domain/script.js";
import type { ShootResultEvaluation } from "../domain/shoot.js";

/** Test the current cut using its craft coverage plus any available script and shoot evidence. */
export function runTestScreening(
  project: FilmProject,
  plan: PostProductionPlan,
  shootEvaluation?: ShootResultEvaluation,
  scriptEvaluation?: ScriptEvaluation
): TestScreeningResult {
  assertProject(plan.projectId, project.id, "Post-production plan");
  if (shootEvaluation) {
    assertProject(shootEvaluation.projectId, project.id, "Shoot evaluation");
  }

  const editCoverage = Math.min(4, plan.editDecisionIds.length);
  const soundCoverage = Math.min(3, plan.soundDecisionIds.length);
  const musicCoverage = Math.min(3, plan.musicDecisionIds.length);
  const colorCoverage = Math.min(3, plan.colorDecisionIds.length);
  const shootQuality = shootEvaluation?.averageTakeQuality ?? 55;
  const structure = scriptEvaluation?.scores.structure ?? 55;
  const scriptPacing = scriptEvaluation?.scores.pacing ?? 55;
  const scriptEmotion = scriptEvaluation?.scores.emotion ?? 55;

  const clarityScore = clampScore(34 + structure * 0.35 + shootQuality * 0.08 + editCoverage * 6 + soundCoverage * 5);
  const pacingScore = clampScore(34 + scriptPacing * 0.38 + shootQuality * 0.08 + editCoverage * 8);
  const emotionScore = clampScore(
    32 + scriptEmotion * 0.38 + shootQuality * 0.08 + musicCoverage * 7 + colorCoverage * 3
  );
  const audienceHookScore = clampScore(
    38 + scriptPacing * 0.16 + scriptEmotion * 0.16 + project.actorIds.length * 3
      + editCoverage * 4 + musicCoverage * 4 + colorCoverage * 2
  );
  const confusionRisk = clampScore(100 - clarityScore * 0.72 - pacingScore * 0.18);
  const recommendedChanges: string[] = [];

  if (clarityScore < 60) {
    recommendedChanges.push("Clarify story information with cleaner scene transitions or dialogue emphasis.");
  }
  if (pacingScore < 60) {
    recommendedChanges.push("Revisit the middle-act rhythm and remove beats that repeat information.");
  }
  if (emotionScore < 60) {
    recommendedChanges.push("Strengthen emotional continuity with reactions, music, or a more focused grade.");
  }
  if (audienceHookScore < 60) {
    recommendedChanges.push("Sharpen the film's central promise before locking the cut and trailer.");
  }

  return {
    projectId: project.id,
    clarityScore,
    pacingScore,
    emotionScore,
    audienceHookScore,
    confusionRisk,
    recommendedChanges,
    notes: [
      `The screening reflects ${editCoverage + soundCoverage + musicCoverage + colorCoverage} active craft decisions.`,
      recommendedChanges.length === 0
        ? "The cut tested without a major clarity, pacing, emotion, or hook weakness."
        : `${recommendedChanges.length} area${recommendedChanges.length === 1 ? "" : "s"} should be reviewed before lock.`
    ]
  };
}

function assertProject(actual: string, expected: string, label: string): void {
  if (actual !== expected) {
    throw new Error(`${label} does not belong to project "${expected}".`);
  }
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
