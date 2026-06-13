import careerMilestonesJson from "../../../data/film/career_milestones.json";
import { advanceCareerQuarter } from "../../core/advanceCareerQuarter.js";
import { applyCareerMilestone } from "../../core/applyCareerMilestone.js";
import { applyReleaseResultToStudio } from "../../core/applyReleaseResultToStudio.js";
import { applyStudioIncome } from "../../core/applyStudioIncome.js";
import { evaluateCareerYear } from "../../core/evaluateCareerYear.js";
import { evaluateStudioIdentity } from "../../core/evaluateStudioIdentity.js";
import { recordCompletedFilm } from "../../core/recordCompletedFilm.js";
import type {
  CareerMilestone,
  CareerMilestoneApplicationResult,
  CareerState,
  CareerYearEvaluation,
  CompletedFilmRecord,
  StudioIdentityEvaluation
} from "../../domain/career.js";
import type { Studio } from "../../domain/film.js";
import { asStudioIncomeId } from "../../domain/ids.js";
import type { StudioReleaseApplicationResult } from "../../domain/release.js";
import type { PipelineStepSummary } from "../types.js";
import { adaptFilmSeedData } from "./adaptFilmSeedData.js";
import type { ProjectRunContext } from "./createProjectRunContext.js";
import type { ReleaseStepResult } from "./createReleaseStepRun.js";

const careerApplicationData = adaptFilmSeedData<{
  readonly careerMilestones: readonly CareerMilestone[];
}>({ careerMilestones: careerMilestonesJson });

export interface CareerApplicationChoices {
  readonly closeFilmYear: true;
}

export interface CareerApplicationStepResult {
  readonly choices: CareerApplicationChoices;
  readonly previousStudio: Studio;
  readonly updatedStudio: Studio;
  readonly updatedCareerState: CareerState;
  readonly completedFilmRecord: CompletedFilmRecord;
  readonly studioReleaseApplicationResult: StudioReleaseApplicationResult;
  readonly careerYearEvaluation: CareerYearEvaluation;
  readonly studioIdentityEvaluation: StudioIdentityEvaluation;
  readonly milestoneResults: readonly CareerMilestoneApplicationResult[];
  readonly moneyDelta: number;
  readonly reputationDelta: number;
  readonly prestigeDelta: number;
  readonly pipelineStep: PipelineStepSummary;
}

/** Apply one released film to the studio ledger and career without mutating setup state. */
export function createCareerApplicationStepResult(
  projectContext: ProjectRunContext,
  releaseResult: ReleaseStepResult,
  choices: CareerApplicationChoices
): CareerApplicationStepResult {
  if (!choices.closeFilmYear) {
    throw new Error("Close the film year before applying the release result.");
  }

  const outcome = releaseResult.releaseOutcomeEvaluation;
  if (outcome.projectId !== projectContext.filmProjectState.id) {
    throw new Error("The release result does not belong to the active film project.");
  }
  if (projectContext.careerState.completedFilms.some(
    (film) => film.projectId === projectContext.filmProjectState.id
  )) {
    throw new Error("This film has already been applied to the studio and career.");
  }

  const previousStudio = projectContext.careerState.studio;
  const studioReleaseApplicationResult = applyReleaseResultToStudio(previousStudio, outcome);
  const careerWithReleaseStudio: CareerState = {
    ...projectContext.careerState,
    studio: {
      ...studioReleaseApplicationResult.studio,
      money: projectContext.careerState.studio.money
    }
  };
  const releaseIncome = {
    id: asStudioIncomeId(`studio_income_${projectContext.filmProjectState.id}_release`),
    title: `${projectContext.filmProjectState.title} release result`,
    amount: outcome.netRevenue,
    sourceProjectId: projectContext.filmProjectState.id,
    quarter: careerWithReleaseStudio.currentQuarter,
    note: "Net release revenue after marketing and distribution costs."
  };
  const careerWithIncome = applyStudioIncome(careerWithReleaseStudio, releaseIncome);
  const completedFilmRecord: CompletedFilmRecord = {
    projectId: projectContext.filmProjectState.id,
    title: projectContext.filmProjectState.title,
    year: careerWithIncome.currentYear,
    genreId: projectContext.filmProjectState.genreId,
    scale: projectContext.filmProjectState.scale,
    quality: releaseResult.filmResult.quality,
    audienceAppeal: releaseResult.filmResult.audienceAppeal,
    criticalAppeal: releaseResult.filmResult.criticalAppeal,
    grossRevenue: outcome.grossRevenue,
    netRevenue: outcome.netRevenue,
    awardsWon: releaseResult.awardsOutcome.wins.length,
    reputationDelta: outcome.reputationDelta,
    prestigeDelta: outcome.prestigeDelta,
    identityTags: []
  };
  const careerWithFilm = recordCompletedFilm(careerWithIncome, completedFilmRecord);
  const studioIdentityEvaluation = evaluateStudioIdentity(careerWithFilm);
  let careerWithIdentity: CareerState = {
    ...careerWithFilm,
    identityTags: studioIdentityEvaluation.identityTags
  };
  const milestoneResults: CareerMilestoneApplicationResult[] = [];

  for (const milestone of careerApplicationData.careerMilestones) {
    const milestoneResult = applyCareerMilestone(careerWithIdentity, milestone);
    milestoneResults.push(milestoneResult);
    careerWithIdentity = milestoneResult.careerState;
  }

  const careerYearEvaluation = evaluateCareerYear(careerWithIdentity, careerWithIdentity.currentYear);
  const updatedCareerState = advanceCareerQuarter(careerWithIdentity);
  const updatedStudio = updatedCareerState.studio;

  return {
    choices,
    previousStudio,
    updatedStudio,
    updatedCareerState,
    completedFilmRecord,
    studioReleaseApplicationResult,
    careerYearEvaluation,
    studioIdentityEvaluation,
    milestoneResults,
    moneyDelta: updatedStudio.money - previousStudio.money,
    reputationDelta: updatedStudio.reputation - previousStudio.reputation,
    prestigeDelta: updatedStudio.prestige - previousStudio.prestige,
    pipelineStep: {
      label: "Studio updated",
      detail: `${projectContext.filmProjectState.title} recorded · Year ${careerYearEvaluation.year} evaluated`,
      score: careerYearEvaluation.overall
    }
  };
}
