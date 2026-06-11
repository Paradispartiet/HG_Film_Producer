import type { FilmProject } from "../domain/film.js";
import type {
  ColorDecision,
  EditDecision,
  MusicDecision,
  PostDecision,
  PostProductionEvaluation,
  PostProductionPlan,
  SoundDecision,
  TestScreeningResult,
  TrailerCutResult
} from "../domain/post.js";

export interface PostProductionDecisionsUsed {
  readonly edits: readonly EditDecision[];
  readonly sound: readonly SoundDecision[];
  readonly music: readonly MusicDecision[];
  readonly color: readonly ColorDecision[];
}

/** Evaluate the locked cut from craft choices, screening evidence, and trailer positioning. */
export function evaluatePostProduction(
  project: FilmProject,
  plan: PostProductionPlan,
  decisions: PostProductionDecisionsUsed,
  screening: TestScreeningResult,
  trailer?: TrailerCutResult
): PostProductionEvaluation {
  assertProject(plan.projectId, project.id, "Post-production plan");
  assertProject(screening.projectId, project.id, "Test screening");
  if (trailer) {
    assertProject(trailer.projectId, project.id, "Trailer cut");
  }

  validateDecisionIds(plan.editDecisionIds, decisions.edits, "edit");
  validateDecisionIds(plan.soundDecisionIds, decisions.sound, "sound");
  validateDecisionIds(plan.musicDecisionIds, decisions.music, "music");
  validateDecisionIds(plan.colorDecisionIds, decisions.color, "color");

  const editScore = craftScore(decisions.edits, (decision) => decision.pacingEffect + decision.structureEffect);
  const soundScore = craftScore(decisions.sound, (decision) => decision.immersionEffect + decision.clarityEffect);
  const musicScore = craftScore(decisions.music, (decision) => decision.emotionEffect + decision.identityEffect);
  const colorScore = craftScore(decisions.color, (decision) => decision.visualStyleEffect + decision.moodEffect);
  const testScreeningScore = clampScore(
    (screening.clarityScore + screening.pacingScore + screening.emotionScore + screening.audienceHookScore
      + (100 - screening.confusionRisk)) / 5
  );
  const trailerScore = trailer
    ? clampScore((trailer.audienceInterest + trailer.criticInterest + trailer.genreClarity + (100 - trailer.spoilerRisk)) / 4)
    : 0;
  const lockedCutQuality = clampScore(
    editScore * 0.3 + soundScore * 0.2 + musicScore * 0.15 + colorScore * 0.15 + testScreeningScore * 0.2
  );
  const overall = clampScore(lockedCutQuality * (trailer ? 0.82 : 1) + trailerScore * (trailer ? 0.18 : 0));
  const allDecisions: readonly PostDecision[] = [
    ...decisions.edits,
    ...decisions.sound,
    ...decisions.music,
    ...decisions.color
  ];
  const totalCost = Math.round(allDecisions.reduce((sum, decision) => sum + decision.cost, 0) + (trailer?.cost ?? 0));
  const notes = [
    `Locked-cut quality weights edit 30%, sound 20%, music 15%, color 15%, and test screening 20%.`,
    trailer
      ? `Trailer positioning contributes 18% of the overall post-production result.`
      : "No trailer result was supplied, so overall reflects the locked cut only.",
    screening.recommendedChanges.length === 0
      ? "The test screening found no major revision priority."
      : `${screening.recommendedChanges.length} test-screening recommendation${screening.recommendedChanges.length === 1 ? " remains" : "s remain"} before final delivery.`
  ];

  return {
    projectId: project.id,
    editScore,
    soundScore,
    musicScore,
    colorScore,
    testScreeningScore,
    trailerScore,
    totalCost,
    lockedCutQuality,
    overall,
    notes
  };
}

function craftScore<TDecision extends PostDecision>(
  decisions: readonly TDecision[],
  effects: (decision: TDecision) => number
): number {
  if (decisions.length === 0) {
    return 35;
  }
  const contribution = decisions.reduce(
    (sum, decision) => sum + effects(decision) + sumStats(decision) * 0.35 - decision.risk * 0.12,
    0
  );
  return clampScore(52 + contribution / decisions.length + Math.min(12, decisions.length * 3));
}

function sumStats(decision: PostDecision): number {
  return Object.values(decision.statChanges).reduce<number>((sum, value) => sum + (value ?? 0), 0);
}

function validateDecisionIds(
  plannedIds: readonly string[],
  decisions: readonly PostDecision[],
  type: PostDecision["type"]
): void {
  const suppliedIds = new Set<string>(decisions.map((decision) => decision.id));
  for (const id of plannedIds) {
    if (!suppliedIds.has(id)) {
      throw new Error(`Post-production evaluation is missing planned ${type} decision "${id}".`);
    }
  }
  for (const decision of decisions) {
    if (decision.type !== type || !plannedIds.includes(decision.id)) {
      throw new Error(`${type} decision "${decision.id}" is not part of this post-production plan.`);
    }
  }
}

function assertProject(actual: string, expected: string, label: string): void {
  if (actual !== expected) {
    throw new Error(`${label} does not belong to project "${expected}".`);
  }
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
