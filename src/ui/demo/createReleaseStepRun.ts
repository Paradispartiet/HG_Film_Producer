import awardsJson from "../../../data/film/awards.json";
import audienceSegmentsJson from "../../../data/film/audience_segments.json";
import criticProfilesJson from "../../../data/film/critic_profiles.json";
import festivalsJson from "../../../data/film/festivals.json";
import releaseStrategiesJson from "../../../data/film/release_strategies.json";
import { calculateFilmResult } from "../../core/calculateFilmResult.js";
import { calculateReleaseRevenue } from "../../core/calculateReleaseRevenue.js";
import { createReleasePlan } from "../../core/createReleasePlan.js";
import { evaluateReleaseOutcome } from "../../core/evaluateReleaseOutcome.js";
import { generateAudienceResult } from "../../core/generateAudienceResult.js";
import { generateReviewResult } from "../../core/generateReviewResult.js";
import { resolveAwardsOutcome } from "../../core/resolveAwardsOutcome.js";
import { scoreReleaseStrategy } from "../../core/scoreReleaseStrategy.js";
import { submitToFestival } from "../../core/submitToFestival.js";
import type { FilmResult } from "../../domain/film.js";
import type {
  AudienceResult,
  AudienceSegment,
  Award,
  AwardsOutcome,
  CriticProfile,
  Festival,
  FestivalSubmissionResult,
  ReleaseOutcomeEvaluation,
  ReleasePlan,
  ReleaseStrategy,
  ReleaseStrategyScore,
  RevenueResult,
  ReviewResult
} from "../../domain/release.js";
import type { PipelineStepSummary } from "../types.js";
import { adaptFilmSeedData } from "./adaptFilmSeedData.js";
import type { DevelopmentStepResult } from "./createDevelopmentStepRun.js";
import type { PostProductionStepResult } from "./createPostProductionStepRun.js";
import type { PreProductionStepResult } from "./createPreProductionStepRun.js";
import type { ProjectSetupRun } from "./createProjectSetupRun.js";
import type { ShootStepResult } from "./createShootStepRun.js";

interface ReleaseSeedData {
  readonly releaseStrategies: readonly ReleaseStrategy[];
  readonly festivals: readonly Festival[];
  readonly criticProfiles: readonly CriticProfile[];
  readonly audienceSegments: readonly AudienceSegment[];
  readonly awards: readonly Award[];
}

const releaseData = adaptFilmSeedData<ReleaseSeedData>({
  releaseStrategies: releaseStrategiesJson,
  festivals: festivalsJson,
  criticProfiles: criticProfilesJson,
  audienceSegments: audienceSegmentsJson,
  awards: awardsJson
});

export interface ReleaseStepChoices {
  readonly releaseStrategyId: string;
  readonly festivalId: string;
}

export interface ReleaseStepOptions extends ReleaseSeedData {}

export interface ReleaseStepResult {
  readonly choices: ReleaseStepChoices;
  readonly filmResult: FilmResult;
  readonly releasePlan: ReleasePlan;
  readonly releaseStrategyScore: ReleaseStrategyScore;
  readonly festivalSubmissionResult: FestivalSubmissionResult;
  readonly reviewResults: readonly ReviewResult[];
  readonly audienceResults: readonly AudienceResult[];
  readonly revenueResult: RevenueResult;
  readonly awardsOutcome: AwardsOutcome;
  readonly releaseOutcomeEvaluation: ReleaseOutcomeEvaluation;
  readonly pipelineStep: PipelineStepSummary;
}

export function getReleaseStepOptions(): ReleaseStepOptions {
  return releaseData;
}

export function createReleaseStepResult(
  run: ProjectSetupRun,
  developmentResult: DevelopmentStepResult,
  preProductionResult: PreProductionStepResult,
  shootResult: ShootStepResult,
  postProductionResult: PostProductionStepResult,
  choices: ReleaseStepChoices
): ReleaseStepResult {
  assertCompletedSteps(run, developmentResult, preProductionResult, shootResult, postProductionResult);
  const strategy = requireItem(releaseData.releaseStrategies, choices.releaseStrategyId, "release strategy");
  const festival = requireItem(releaseData.festivals, choices.festivalId, "festival");
  const project = preProductionResult.projectState;
  const filmResult = calculateFilmResult(
    project,
    preProductionResult.teamEvaluation,
    postProductionResult.postProductionEvaluation
  );
  const releaseStrategyScore = scoreReleaseStrategy(
    project,
    filmResult,
    strategy,
    postProductionResult.postProductionEvaluation
  );
  const festivalSubmissionResult = submitToFestival(project, filmResult, festival);
  const releasePlan: ReleasePlan = {
    ...createReleasePlan(project, strategy),
    festivalSubmissionIds: [festival.id]
  };
  const reviewResults = selectCritics(project.genreId)
    .map((critic) => generateReviewResult(
      project,
      filmResult,
      critic,
      postProductionResult.postProductionEvaluation
    ));
  const audienceResults = selectAudiences(project.genreId, strategy)
    .map((segment) => generateAudienceResult(project, filmResult, segment, strategy));
  const revenueResult = calculateReleaseRevenue(project, releasePlan, strategy, audienceResults);
  const awardsOutcome = resolveAwardsOutcome(
    project,
    filmResult,
    releaseData.awards,
    reviewResults,
    [festivalSubmissionResult]
  );
  const releaseOutcomeEvaluation = evaluateReleaseOutcome(
    project,
    filmResult,
    releaseStrategyScore,
    [festivalSubmissionResult],
    reviewResults,
    audienceResults,
    revenueResult,
    awardsOutcome
  );

  return {
    choices,
    filmResult,
    releasePlan,
    releaseStrategyScore,
    festivalSubmissionResult,
    reviewResults,
    audienceResults,
    revenueResult,
    awardsOutcome,
    releaseOutcomeEvaluation,
    pipelineStep: {
      label: "Film released",
      detail: `${formatLabel(strategy.channel)} · ${festivalSubmissionResult.accepted ? "festival selected" : "festival submitted"}`,
      score: releaseOutcomeEvaluation.overall
    }
  };
}

function selectCritics(genreId: string): readonly CriticProfile[] {
  const genre = genreId.replace(/^genre_/, "");
  return [...releaseData.criticProfiles]
    .sort((left, right) => criticPriority(right, genre) - criticPriority(left, genre))
    .slice(0, 3);
}

function criticPriority(critic: CriticProfile, genre: string): number {
  return (critic.tasteTags.includes(genre) ? 100 : 0)
    + critic.audienceInfluence * 0.35
    + critic.prestigeInfluence * 0.45
    - critic.harshness * 0.1;
}

function selectAudiences(genreId: string, strategy: ReleaseStrategy): readonly AudienceSegment[] {
  const genre = genreId.replace(/^genre_/, "");
  return [...releaseData.audienceSegments]
    .sort((left, right) => audiencePriority(right, genre, strategy) - audiencePriority(left, genre, strategy))
    .slice(0, 3);
}

function audiencePriority(segment: AudienceSegment, genre: string, strategy: ReleaseStrategy): number {
  return (strategy.targetAudienceSegments.includes(segment.type) ? 100 : 0)
    + (segment.tasteTags.includes(genre) ? 70 : 0)
    + segment.wordOfMouthPower * 0.25
    + segment.marketingSensitivity * 0.15;
}

function assertCompletedSteps(
  run: ProjectSetupRun,
  developmentResult: DevelopmentStepResult,
  preProductionResult: PreProductionStepResult,
  shootResult: ShootStepResult,
  postProductionResult: PostProductionStepResult
): void {
  if (preProductionResult.projectState.id !== run.filmProjectState.id) {
    throw new Error("Pre-production does not belong to this project setup run.");
  }
  const completedLabels = [
    developmentResult.pipelineStep.label,
    shootResult.pipelineStep.label,
    postProductionResult.pipelineStep.label
  ];
  if (completedLabels.some((label) => label.length === 0) || postProductionResult.postProductionPlan.status !== "locked") {
    throw new Error("Development, shoot, and locked post-production are required before release.");
  }
}

function requireItem<TItem extends { readonly id: string }>(
  items: readonly TItem[],
  id: string,
  label: string
): TItem {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Choose a valid ${label} before releasing the film.`);
  return item;
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
