import type { FilmProject } from "../domain/film.js";
import type { PostProductionPlan, TestScreeningResult } from "../domain/post.js";
import type { ScriptEvaluation } from "../domain/script.js";
import type { ShootResultEvaluation } from "../domain/shoot.js";
import { getStudioCareerEditingApproach, type StudioCareerEditingApproachId } from "./studioCareerEditingApproach.js";

/** Test the current cut using its craft coverage plus any available script and shoot evidence. */
export function runTestScreening(
  project: FilmProject,
  plan: PostProductionPlan,
  shootEvaluation?: ShootResultEvaluation,
  scriptEvaluation?: ScriptEvaluation,
  scriptDraftScore?: number,
  editingApproachId?: StudioCareerEditingApproachId
): TestScreeningResult {
  assertProject(plan.projectId, project.id, "Post-production plan");
  if (shootEvaluation) {
    assertProject(shootEvaluation.projectId, project.id, "Shoot evaluation");
  }

  const editing = getStudioCareerEditingApproach(editingApproachId);
  const editCoverage = Math.min(4, plan.editDecisionIds.length);
  const soundCoverage = Math.min(3, plan.soundDecisionIds.length);
  const musicCoverage = Math.min(3, plan.musicDecisionIds.length);
  const colorCoverage = Math.min(3, plan.colorDecisionIds.length);
  const shootQuality = shootEvaluation?.averageTakeQuality ?? 55;
  const structure = scriptEvaluation?.scores.structure ?? 55;
  const scriptPacing = scriptEvaluation?.scores.pacing ?? 55;
  const scriptEmotion = scriptEvaluation?.scores.emotion ?? 55;
  // A completed Studio Career script draft is evaluated during development.
  // Its overall score is a modest shared story-readiness signal, rather than
  // a fabricated set of per-axis script scores. Completing a sound draft
  // creates a noticeable benefit; exceptionally weak drafts can hurt.
  // Legacy callers stay unchanged.
  const scriptReadiness = scriptDraftScore === undefined || !Number.isFinite(scriptDraftScore)
    ? 0
    : Math.max(-12, Math.min(18, (Math.max(0, Math.min(100, scriptDraftScore)) - 35) * 0.5));

  const clarityScore = clampScore(34 + structure * 0.35 + shootQuality * 0.08 + editCoverage * 6 + soundCoverage * 5 + scriptReadiness + editing.clarity);
  const pacingScore = clampScore(34 + scriptPacing * 0.38 + shootQuality * 0.08 + editCoverage * 8 + scriptReadiness + editing.pacing);
  const emotionScore = clampScore(
    32 + scriptEmotion * 0.38 + shootQuality * 0.08 + musicCoverage * 7 + colorCoverage * 3 + scriptReadiness + editing.emotion
  );
  const audienceHookScore = clampScore(
    38 + scriptPacing * 0.16 + scriptEmotion * 0.16 + project.actorIds.length * 3
      + editCoverage * 4 + musicCoverage * 4 + colorCoverage * 2 + scriptReadiness + editing.audienceHook
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
      ...(scriptDraftScore !== undefined && Number.isFinite(scriptDraftScore)
        ? [`The completed script draft scored ${Math.round(Math.max(0, Math.min(100, scriptDraftScore)))}/100 and informs story readiness at this screening.`]
        : []),
      ...(editing.id === "balanced"
        ? []
        : [`Editing approach ${editing.id} changed screening clarity, pacing, emotion and audience interest.`]),
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
