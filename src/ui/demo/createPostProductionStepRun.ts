import colorDecisionsJson from "../../../data/film/color_decisions.json";
import editDecisionsJson from "../../../data/film/edit_decisions.json";
import musicDecisionsJson from "../../../data/film/music_decisions.json";
import soundDecisionsJson from "../../../data/film/sound_decisions.json";
import trailerStrategiesJson from "../../../data/film/trailer_strategies.json";

import { applyColorDecision } from "../../core/applyColorDecision.js";
import { applyEditDecision } from "../../core/applyEditDecision.js";
import { applyMusicDecision } from "../../core/applyMusicDecision.js";
import { applySoundDecision } from "../../core/applySoundDecision.js";
import { createPostProductionPlan } from "../../core/createPostProductionPlan.js";
import { createTrailerCut } from "../../core/createTrailerCut.js";
import { evaluatePostProduction } from "../../core/evaluatePostProduction.js";
import { runTestScreening } from "../../core/runTestScreening.js";
import type {
  ColorDecision,
  EditDecision,
  MusicDecision,
  PostProductionEvaluation,
  PostProductionPlan,
  PostStatChanges,
  SoundDecision,
  TestScreeningResult,
  TrailerCutResult,
  TrailerStrategy
} from "../../domain/post.js";
import type { PipelineStepSummary } from "../types.js";
import { adaptFilmSeedData } from "./adaptFilmSeedData.js";
import type { PreProductionStepResult } from "./createPreProductionStepRun.js";
import type { ProjectRunContext } from "./createProjectRunContext.js";
import type { ShootStepResult } from "./createShootStepRun.js";

interface PostProductionSeedData {
  readonly editDecisions: readonly EditDecision[];
  readonly soundDecisions: readonly SoundDecision[];
  readonly musicDecisions: readonly MusicDecision[];
  readonly colorDecisions: readonly ColorDecision[];
  readonly trailerStrategies: readonly TrailerStrategy[];
}

const postProductionData = adaptFilmSeedData<PostProductionSeedData>({
  editDecisions: editDecisionsJson,
  soundDecisions: soundDecisionsJson,
  musicDecisions: musicDecisionsJson,
  colorDecisions: colorDecisionsJson,
  trailerStrategies: trailerStrategiesJson
});

export interface PostProductionChoices {
  readonly editDecisionId: string;
  readonly soundDecisionId: string;
  readonly musicDecisionId: string;
  readonly colorDecisionId: string;
  readonly trailerStrategyId: string;
}

export interface AppliedDecisionSummary {
  readonly title: string;
  readonly cost: number;
  readonly statChanges: PostStatChanges;
}

export interface AppliedPostProductionDecisions {
  readonly edit: AppliedDecisionSummary;
  readonly sound: AppliedDecisionSummary;
  readonly music: AppliedDecisionSummary;
  readonly color: AppliedDecisionSummary;
}

export interface PostProductionOptions {
  readonly editDecisions: readonly EditDecision[];
  readonly soundDecisions: readonly SoundDecision[];
  readonly musicDecisions: readonly MusicDecision[];
  readonly colorDecisions: readonly ColorDecision[];
  readonly trailerStrategies: readonly TrailerStrategy[];
}

export interface PostProductionStepResult {
  readonly postProductionPlan: PostProductionPlan;
  readonly appliedDecisions: AppliedPostProductionDecisions;
  readonly testScreeningResult: TestScreeningResult;
  readonly trailerCutResult: TrailerCutResult;
  readonly postProductionEvaluation: PostProductionEvaluation;
  readonly pipelineStep: PipelineStepSummary;
}

export function getPostProductionOptions(): PostProductionOptions {
  return postProductionData;
}

export function createPostProductionStepResult(
  projectContext: ProjectRunContext,
  preProductionResult: PreProductionStepResult,
  shootResult: ShootStepResult,
  choices: PostProductionChoices
): PostProductionStepResult {
  assertCompletedSteps(projectContext, preProductionResult, shootResult);
  const edit = requireItem(postProductionData.editDecisions, choices.editDecisionId, "edit decision");
  const sound = requireItem(postProductionData.soundDecisions, choices.soundDecisionId, "sound decision");
  const music = requireItem(postProductionData.musicDecisions, choices.musicDecisionId, "music decision");
  const color = requireItem(postProductionData.colorDecisions, choices.colorDecisionId, "color decision");
  const trailer = requireItem(postProductionData.trailerStrategies, choices.trailerStrategyId, "trailer strategy");

  const openedPlan = createPostProductionPlan(preProductionResult.projectState);
  const editApplication = applyEditDecision(openedPlan, edit);
  const soundApplication = applySoundDecision(editApplication.plan, sound);
  const musicApplication = applyMusicDecision(soundApplication.plan, music);
  const colorApplication = applyColorDecision(musicApplication.plan, color);
  const finishingPlan: PostProductionPlan = {
    ...colorApplication.plan,
    status: "trailer",
    trailerStrategyId: trailer.id,
    notes: [...colorApplication.plan.notes, `Trailer strategy selected: ${trailer.title}.`]
  };
  const testScreeningResult = runTestScreening(
    preProductionResult.projectState,
    finishingPlan,
    shootResult.shootEvaluation
  );
  const trailerCutResult = createTrailerCut(preProductionResult.projectState, finishingPlan, trailer);
  const postProductionEvaluation = evaluatePostProduction(
    preProductionResult.projectState,
    finishingPlan,
    { edits: [edit], sound: [sound], music: [music], color: [color] },
    testScreeningResult,
    trailerCutResult
  );
  const postProductionPlan: PostProductionPlan = {
    ...finishingPlan,
    status: "locked",
    lockedCutQuality: postProductionEvaluation.lockedCutQuality,
    notes: [...finishingPlan.notes, "Post-production locked after test screening and trailer evaluation."]
  };

  return {
    postProductionPlan,
    appliedDecisions: {
      edit: summarizeDecision(edit, editApplication.costDelta, editApplication.statChanges),
      sound: summarizeDecision(sound, soundApplication.costDelta, soundApplication.statChanges),
      music: summarizeDecision(music, musicApplication.costDelta, musicApplication.statChanges),
      color: summarizeDecision(color, colorApplication.costDelta, colorApplication.statChanges)
    },
    testScreeningResult,
    trailerCutResult,
    postProductionEvaluation,
    pipelineStep: {
      label: "Post-production locked",
      detail: `Locked cut ${postProductionEvaluation.lockedCutQuality} · trailer ${postProductionEvaluation.trailerScore}`,
      score: postProductionEvaluation.overall
    }
  };
}

function summarizeDecision(
  decision: EditDecision | SoundDecision | MusicDecision | ColorDecision,
  cost: number,
  statChanges: PostStatChanges
): AppliedDecisionSummary {
  return { title: decision.title, cost, statChanges };
}

function assertCompletedSteps(
  projectContext: ProjectRunContext,
  preProductionResult: PreProductionStepResult,
  shootResult: ShootStepResult
): void {
  if (preProductionResult.projectState.id !== projectContext.filmProjectState.id) {
    throw new Error("Pre-production does not belong to this project run context.");
  }
  if (!preProductionResult.pipelineStep.label || !shootResult.pipelineStep.label) {
    throw new Error("Pre-production and shoot must be completed before post-production.");
  }
}

function requireItem<TItem extends { readonly id: string }>(items: readonly TItem[], id: string, label: string): TItem {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Choose a valid ${label} before locking post-production.`);
  return item;
}
