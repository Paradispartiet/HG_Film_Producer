import { useEffect, useMemo, useState } from "react";
import type { ShootStrategyId } from "../../core/applyShootStrategy";
import type { ProducerPriorityId } from "../../core/applyProducerPriority";
import { createCareerApplicationStepResult, type CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { DevelopmentPath, DevelopmentStepResult } from "../demo/createDevelopmentStepRun";
import { getPreProductionLocationOptions, type PreProductionStepResult } from "../demo/createPreProductionStepRun";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun";
import { createProjectRunContext } from "../demo/createProjectRunContext";
import type { NextProjectStepResult } from "../demo/createNextProjectStepRun";
import type { PostProductionChoices, PostProductionStepResult } from "../demo/createPostProductionStepRun";
import type { ReleaseStepChoices, ReleaseStepResult } from "../demo/createReleaseStepRun";
import { createShootStepResult, getShootPreparation, type ShootDayStepResult, type ShootStepResult } from "../demo/createShootStepRun";
import type { PreProductionSelectionState } from "../types";

export const careerRunStorageKey = "hg-film-producer-career-run-v1";
export const emptyPostProductionChoices: PostProductionChoices = { editDecisionId: "", soundDecisionId: "", musicDecisionId: "", colorDecisionId: "", trailerStrategyId: "" };
export const emptyReleaseChoices: ReleaseStepChoices = { releaseStrategyId: "", festivalId: "" };
export const emptyPreProductionSelections: PreProductionSelectionState = { selectedLocationId: "", selectedCrewIds: [], selectedActorIds: [] };

export interface CareerFilmProjectRun {
  readonly id: string;
  readonly projectNumber: number;
  readonly run: ProjectSetupRun | NextProjectStepResult;
  readonly selectedDevelopmentPath: DevelopmentPath | null;
  readonly selectedScenarioTargetIds?: readonly string[];
  readonly developmentResults: readonly DevelopmentStepResult[];
  readonly developmentResult: DevelopmentStepResult | null;
  readonly preProductionSelections: PreProductionSelectionState;
  readonly preProductionResult: PreProductionStepResult | null;
  readonly selectedProductionEventId: string;
  /** Optional for compatibility with existing v1 saved film runs. */
  readonly selectedShootStrategyId?: ShootStrategyId;
  /** Optional so existing v1 saves remain readable. */
  readonly selectedProducerPriorityId?: ProducerPriorityId;
  readonly shootDayResults: readonly ShootDayStepResult[];
  readonly shootResult: ShootStepResult | null;
  readonly postProductionChoices: PostProductionChoices;
  readonly postProductionResult: PostProductionStepResult | null;
  readonly releaseChoices: ReleaseStepChoices;
  readonly releaseResult: ReleaseStepResult | null;
  readonly careerApplicationResult: CareerApplicationStepResult | null;
}
export interface CareerRunState { readonly version: 1; readonly projects: readonly CareerFilmProjectRun[]; }

export function createEmptyCareerRunState(): CareerRunState { return { version: 1, projects: [] }; }
export function hasSavedCareerRun(): boolean { return typeof window !== "undefined" && window.localStorage.getItem(careerRunStorageKey) !== null; }
function getRunContext(run: ProjectSetupRun | NextProjectStepResult) { return createProjectRunContext(run as ProjectSetupRun & NextProjectStepResult); }

export function createCareerProject(run: ProjectSetupRun | NextProjectStepResult, projectNumber: number): CareerFilmProjectRun {
  return { id: `${projectNumber}-${run.project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, projectNumber, run, selectedDevelopmentPath: null, developmentResults: [], developmentResult: null, preProductionSelections: emptyPreProductionSelections, preProductionResult: null, selectedProductionEventId: "", selectedShootStrategyId: "steady", selectedProducerPriorityId: "crew_coordination", shootDayResults: [], shootResult: null, postProductionChoices: emptyPostProductionChoices, postProductionResult: null, releaseChoices: emptyReleaseChoices, releaseResult: null, careerApplicationResult: null };
}
function resetAfterDevelopment(project: CareerFilmProjectRun, developmentResult: DevelopmentStepResult): CareerFilmProjectRun {
  const selectedLocationId = getPreProductionLocationOptions(getRunContext(project.run), developmentResult).find((option) => option.recommended)?.id ?? "";
  return { ...project, selectedDevelopmentPath: null, developmentResult, preProductionSelections: { ...emptyPreProductionSelections, selectedLocationId }, preProductionResult: null, selectedProductionEventId: "", selectedShootStrategyId: "steady", selectedProducerPriorityId: "crew_coordination", shootDayResults: [], shootResult: null, postProductionChoices: emptyPostProductionChoices, postProductionResult: null, releaseChoices: emptyReleaseChoices, releaseResult: null, careerApplicationResult: null };
}
function updateProject(state: CareerRunState, projectId: string, updater: (project: CareerFilmProjectRun) => CareerFilmProjectRun): CareerRunState {
  const index = state.projects.findIndex((project) => project.id === projectId);
  // Only the unfinished latest film can be changed. Editing a historical film
  // used to truncate every newer film and could silently erase career progress.
  if (index < 0 || index !== state.projects.length - 1 || state.projects[index]?.careerApplicationResult) return state;
  const current = state.projects[index];
  if (!current) return state;
  const updated = updater(current);
  if (updated === current) return state;
  return { ...state, projects: state.projects.map((project, projectIndex) => projectIndex === index ? updated : project) };
}
export const careerRunActions = {
  startStudio(run: ProjectSetupRun): CareerRunState { return { version: 1, projects: [createCareerProject(run, 1)] }; },
  createProject(state: CareerRunState, run: NextProjectStepResult): CareerRunState {
    const previous = state.projects.at(-1);
    // React may batch a double-click. Once Film Two exists, Film One cannot
    // be used to append a duplicate Film Three from the same setup form.
    if (!previous?.careerApplicationResult) return state;
    const next = createCareerProject(run, previous.projectNumber + 1);
    if (state.projects.some((project) => project.id === next.id)) return state;
    return { ...state, projects: [...state.projects, next] };
  },
  selectDevelopmentPath(state: CareerRunState, projectId: string, selectedDevelopmentPath: DevelopmentPath): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, selectedDevelopmentPath })); },
  applyDevelopmentAction(state: CareerRunState, projectId: string, result: DevelopmentStepResult): CareerRunState {
    return updateProject(state, projectId, (project) => {
      if (project.developmentResults.some((applied) => applied.path === result.path)) return project;
      return { ...project, selectedDevelopmentPath: null, developmentResults: [...project.developmentResults, result] };
    });
  },
  finishDevelopment(state: CareerRunState, projectId: string): CareerRunState {
    return updateProject(state, projectId, (project) => {
      const lastResult = project.developmentResults.at(-1);
      return lastResult ? resetAfterDevelopment(project, lastResult) : project;
    });
  },
  changeScenarioTargetSelections(state: CareerRunState, projectId: string, selectedTargetIds: readonly string[]): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, selectedScenarioTargetIds: [...selectedTargetIds] })); },
  changePreProductionSelections(state: CareerRunState, projectId: string, selections: PreProductionSelectionState): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, preProductionSelections: selections })); },
  lockPreProduction(state: CareerRunState, projectId: string, result: PreProductionStepResult): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, preProductionResult: result, selectedProductionEventId: "", selectedShootStrategyId: "steady", selectedProducerPriorityId: "crew_coordination", shootDayResults: [], shootResult: null, postProductionChoices: emptyPostProductionChoices, postProductionResult: null, releaseChoices: emptyReleaseChoices, releaseResult: null, careerApplicationResult: null })); },
  selectProductionEvent(state: CareerRunState, projectId: string, selectedProductionEventId: string): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, selectedProductionEventId })); },
  selectShootStrategy(state: CareerRunState, projectId: string, selectedShootStrategyId: ShootStrategyId): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, selectedShootStrategyId })); },
  selectProducerPriority(state: CareerRunState, projectId: string, selectedProducerPriorityId: ProducerPriorityId): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, selectedProducerPriorityId })); },
  resolveShootDay(state: CareerRunState, projectId: string, dayResult: ShootDayStepResult): CareerRunState {
    return updateProject(state, projectId, (project) => {
      if (!project.developmentResult || !project.preProductionResult || project.shootResult || project.shootDayResults.some((day) => day.updatedShootDay.id === dayResult.updatedShootDay.id)) return project;
      const resolvedDays = [...project.shootDayResults, dayResult];
      const preparation = getShootPreparation(getRunContext(project.run), project.developmentResult, project.preProductionResult);
      const isComplete = resolvedDays.length >= preparation.productionSchedule.shootDays.length;
      return {
        ...project,
        shootDayResults: resolvedDays,
        selectedProductionEventId: "",
        selectedShootStrategyId: "steady", selectedProducerPriorityId: "crew_coordination",
        shootResult: isComplete ? createShootStepResult(preparation, resolvedDays) : null,
        postProductionChoices: emptyPostProductionChoices,
        postProductionResult: null,
        releaseChoices: emptyReleaseChoices,
        releaseResult: null,
        careerApplicationResult: null
      };
    });
  },
  changePostProductionChoices(state: CareerRunState, projectId: string, choices: PostProductionChoices): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, postProductionChoices: choices })); },
  lockPostProduction(state: CareerRunState, projectId: string, result: PostProductionStepResult): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, postProductionResult: result, releaseChoices: emptyReleaseChoices, releaseResult: null, careerApplicationResult: null })); },
  changeReleaseChoices(state: CareerRunState, projectId: string, choices: ReleaseStepChoices): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, releaseChoices: choices })); },
  releaseFilm(state: CareerRunState, projectId: string, result: ReleaseStepResult): CareerRunState { return updateProject(state, projectId, (project) => ({ ...project, releaseResult: result, careerApplicationResult: null })); },
  applyCareerResult(state: CareerRunState, projectId: string): CareerRunState { return updateProject(state, projectId, (project) => project.releaseResult && project.preProductionResult ? { ...project, careerApplicationResult: createCareerApplicationStepResult(getRunContext(project.run), project.releaseResult, project.preProductionResult, { closeFilmYear: true }) } : project); },
  startNextProject(state: CareerRunState, run: NextProjectStepResult): CareerRunState { return careerRunActions.createProject(state, run); },
  resetCareer(): CareerRunState { if (typeof window !== "undefined") window.localStorage.removeItem(careerRunStorageKey); return createEmptyCareerRunState(); }
};
export function loadCareerRunState(): CareerRunState {
  if (typeof window === "undefined") return createEmptyCareerRunState();
  const saved = window.localStorage.getItem(careerRunStorageKey);
  if (!saved) return createEmptyCareerRunState();
  try { const parsed = JSON.parse(saved) as CareerRunState; return parsed.version === 1 && Array.isArray(parsed.projects) ? parsed : createEmptyCareerRunState(); }
  catch { return createEmptyCareerRunState(); }
}
export function useCareerRunState() {
  const [state, setState] = useState<CareerRunState>(() => loadCareerRunState());
  useEffect(() => { if (state.projects.length === 0) window.localStorage.removeItem(careerRunStorageKey); else window.localStorage.setItem(careerRunStorageKey, JSON.stringify(state)); }, [state]);
  return useMemo(() => ({ state, setState, hasSave: state.projects.length > 0 || hasSavedCareerRun() }), [state]);
}
