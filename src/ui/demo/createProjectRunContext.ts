import type { CareerState } from "../../domain/career.js";
import type { FilmProject, Studio } from "../../domain/film.js";
import type { ScriptTemplate } from "../../domain/script.js";
import type { PipelineStepSummary, ProjectDashboardSummary, StudioDashboardSummary } from "../types.js";
import type { NextProjectStepResult } from "./createNextProjectStepRun.js";
import type { ProjectSetupRun } from "./createProjectSetupRun.js";

export interface ProjectRunContext {
  readonly studio: StudioDashboardSummary;
  readonly studioState: Studio;
  readonly careerState: CareerState;
  readonly filmProjectState: FilmProject;
  readonly project: ProjectDashboardSummary;
  readonly scriptTemplate: ScriptTemplate;
  readonly pipelineSteps: readonly PipelineStepSummary[];
}

export function createProjectRunContext(run: ProjectSetupRun): ProjectRunContext;
export function createProjectRunContext(result: NextProjectStepResult): ProjectRunContext;
export function createProjectRunContext(input: ProjectSetupRun | NextProjectStepResult): ProjectRunContext {
  if ("newFilmProjectState" in input) {
    return createProjectRunContextFromNextProjectResult(input);
  }

  return createProjectRunContextFromSetupRun(input);
}

export function createProjectRunContextFromSetupRun(run: ProjectSetupRun): ProjectRunContext {
  return {
    studio: run.studio,
    studioState: run.studioState,
    careerState: run.careerState,
    filmProjectState: run.filmProjectState,
    project: run.project,
    scriptTemplate: run.scriptTemplate,
    pipelineSteps: run.pipelineSteps
  };
}

export function createProjectRunContextFromNextProjectResult(result: NextProjectStepResult): ProjectRunContext {
  return {
    studio: {
      name: result.carriedCareerState.studio.name,
      money: result.carriedCareerState.studio.money,
      reputation: result.carriedCareerState.studio.reputation,
      prestige: result.carriedCareerState.studio.prestige,
      currentYear: result.carriedCareerState.currentYear,
      currentQuarter: result.carriedCareerState.currentQuarter.toUpperCase()
    },
    studioState: result.carriedStudio,
    careerState: result.carriedCareerState,
    filmProjectState: result.newFilmProjectState,
    project: result.project,
    scriptTemplate: result.scriptTemplate,
    pipelineSteps: result.pipelineSteps
  };
}
