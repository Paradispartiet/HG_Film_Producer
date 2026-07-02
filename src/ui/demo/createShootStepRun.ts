import productionEventsJson from "../../../data/film/production_events.json";
import locationsJson from "../../../data/film/locations.json";
import sceneFunctionsJson from "../../../data/film/scene_functions.json";

import { applyProductionEvent } from "../../core/applyProductionEvent.js";
import { createProductionSchedule } from "../../core/createProductionSchedule.js";
import { estimateSceneShootDifficulty } from "../../core/estimateSceneShootDifficulty.js";
import { evaluateShootResult } from "../../core/evaluateShootResult.js";
import { resolveShootDay } from "../../core/resolveShootDay.js";
import { asSceneId } from "../../domain/ids.js";
import type { FilmProject } from "../../domain/film.js";
import type { Location } from "../../domain/location.js";
import type { Scene, SceneFunction } from "../../domain/script.js";
import type {
  ProductionEvent,
  ProductionSchedule,
  SceneShootDifficulty,
  ShootDay,
  ShootDayResult,
  ShootResultEvaluation
} from "../../domain/shoot.js";
import type { PipelineStepSummary } from "../types.js";
import { adaptFilmSeedData } from "./adaptFilmSeedData.js";
import type { DevelopmentStepResult } from "./createDevelopmentStepRun.js";
import type { PreProductionStepResult } from "./createPreProductionStepRun.js";
import type { ProjectRunContext } from "./createProjectRunContext.js";

interface ShootSeedData {
  readonly productionEvents: readonly ProductionEvent[];
  readonly sceneFunctions: readonly SceneFunction[];
  readonly locations: readonly Location[];
}

const shootData = adaptFilmSeedData<ShootSeedData>({
  productionEvents: productionEventsJson,
  sceneFunctions: sceneFunctionsJson,
  locations: locationsJson
});

export interface SceneDifficultySummary {
  readonly scene: Scene;
  readonly functionName: string;
  readonly difficulty: SceneShootDifficulty;
}

export interface ProductionEventOption {
  readonly event: ProductionEvent;
}

export interface ShootScheduleSummary {
  readonly plannedDays: number;
  readonly plannedBudget: number;
  readonly contingencyBudget: number;
}

export interface ProductionEventSummary {
  readonly title: string;
  readonly type: string;
  readonly severity: string;
  readonly costImpact: number;
  readonly delayDays: number;
  readonly possibleUpside: boolean;
  readonly note: string;
}

export interface ShootStepPreparation {
  readonly projectState: FilmProject;
  readonly productionSchedule: ProductionSchedule;
  readonly starterScenes: readonly Scene[];
  readonly sceneDifficultySummaries: readonly SceneDifficultySummary[];
  readonly availableProductionEvents: readonly ProductionEventOption[];
  readonly scheduleSummary: ShootScheduleSummary;
  readonly locationName: string;
}

export interface ShootStepChoices {
  readonly selectedProductionEventId: string;
}

export interface ShootDayStepResult {
  readonly updatedShootDay: ShootDay;
  readonly selectedEventSummary: ProductionEventSummary;
  readonly shootDayResult: ShootDayResult;
}

export interface ShootStepResult {
  readonly resolvedDays: readonly ShootDayStepResult[];
  readonly shootEvaluation: ShootResultEvaluation;
  readonly pipelineStep: PipelineStepSummary;
}

export function getShootPreparation(
  projectContext: ProjectRunContext,
  developmentResult: DevelopmentStepResult,
  preProductionResult: PreProductionStepResult
): ShootStepPreparation {
  const selectedLocation = requireItem(shootData.locations, preProductionResult.location.id, "location");
  const starterScenes = createStarterScenes(projectContext, developmentResult, selectedLocation);
  const productionSchedule = createProductionSchedule(preProductionResult.projectState, starterScenes);
  const sceneDifficultySummaries = starterScenes.slice(0, 3).map((scene) => ({
    scene,
    functionName: requireItem(shootData.sceneFunctions, scene.functionId, "scene function").name,
    difficulty: estimateSceneShootDifficulty(scene, {
      actorCount: preProductionResult.casting.projectActorCount,
      locationLogistics: selectedLocation.productionModifiers.logistics
    })
  }));

  return {
    projectState: preProductionResult.projectState,
    productionSchedule,
    starterScenes,
    sceneDifficultySummaries,
    availableProductionEvents: getProductionEventOptions(),
    scheduleSummary: {
      plannedDays: productionSchedule.totalPlannedDays,
      plannedBudget: productionSchedule.plannedBudget,
      contingencyBudget: productionSchedule.contingencyBudget
    },
    locationName: preProductionResult.location.name
  };
}

export function getProductionEventOptions(): readonly ProductionEventOption[] {
  return shootData.productionEvents.slice(0, 10).map((event) => ({ event }));
}

/** The next shoot day still waiting for a resolved result, or undefined once the schedule is complete. */
export function getNextShootDay(
  preparation: ShootStepPreparation,
  resolvedDays: readonly ShootDayStepResult[]
): ShootDay | undefined {
  return preparation.productionSchedule.shootDays[resolvedDays.length];
}

/** Resolve the next unresolved shoot day against one chosen production event. */
export function resolveNextShootDay(
  preparation: ShootStepPreparation,
  resolvedDays: readonly ShootDayStepResult[],
  choices: ShootStepChoices
): ShootDayStepResult {
  if (!choices.selectedProductionEventId) {
    throw new Error("Choose one production event before resolving the shoot day.");
  }

  const currentDay = getNextShootDay(preparation, resolvedDays);
  if (!currentDay) {
    throw new Error("Every shoot day in this schedule has already been resolved.");
  }

  const selectedEvent = requireItem(
    preparation.availableProductionEvents.map((option) => option.event),
    choices.selectedProductionEventId,
    "production event"
  );
  const application = applyProductionEvent(currentDay, selectedEvent);
  const shootDayResult = resolveShootDay(application.shootDay, preparation.starterScenes, [selectedEvent]);
  const resolvedShootDay: ShootDay = {
    ...application.shootDay,
    status: shootDayResult.delayedSceneIds.length > 0 || shootDayResult.scheduleDeltaDays > 0 ? "delayed" : "completed",
    notes: [...application.shootDay.notes, ...shootDayResult.notes]
  };

  return {
    updatedShootDay: resolvedShootDay,
    selectedEventSummary: {
      title: selectedEvent.title,
      type: formatLabel(selectedEvent.type),
      severity: formatLabel(selectedEvent.severity),
      costImpact: application.costDelta,
      delayDays: application.delayDays,
      possibleUpside: selectedEvent.possibleUpside,
      note: application.note
    },
    shootDayResult
  };
}

/** Aggregate every resolved shoot day into the final shoot evaluation. Call once the schedule is complete. */
export function createShootStepResult(
  preparation: ShootStepPreparation,
  resolvedDays: readonly ShootDayStepResult[]
): ShootStepResult {
  if (resolvedDays.length < preparation.productionSchedule.shootDays.length) {
    throw new Error("Resolve every scheduled shoot day before finishing the shoot.");
  }

  const shootEvaluation = evaluateShootResult(
    preparation.projectState,
    preparation.productionSchedule,
    resolvedDays.map((day) => day.shootDayResult)
  );
  const totalScenesCompleted = resolvedDays.reduce((sum, day) => sum + day.shootDayResult.completedSceneIds.length, 0);

  return {
    resolvedDays,
    shootEvaluation,
    pipelineStep: {
      label: "Shoot complete",
      detail: `${resolvedDays.length} shoot day${resolvedDays.length === 1 ? "" : "s"} · ${totalScenesCompleted} scenes · ${shootEvaluation.averageTakeQuality} average take quality`,
      score: shootEvaluation.overall
    }
  };
}

function createStarterScenes(
  projectContext: ProjectRunContext,
  developmentResult: DevelopmentStepResult,
  location: Location
): readonly Scene[] {
  const selectedFunctionIds = projectContext.scriptTemplate.recommendedSceneFunctions.slice(0, 3);
  const sceneProfiles = [
    { conflict: 38, pacing: 44, emotion: 50 },
    { conflict: 58, pacing: 57, emotion: 64 },
    { conflict: 74, pacing: 69, emotion: 72 }
  ] as const;

  return selectedFunctionIds.map((functionId, index) => {
    const sceneFunction = requireItem(shootData.sceneFunctions, functionId, "scene function");
    const profile = sceneProfiles[index] ?? sceneProfiles[2];
    return {
      id: asSceneId(`shoot_scene_${slug(projectContext.project.title)}_${index + 1}`),
      title: buildSceneTitle(sceneFunction, developmentResult, index),
      functionId: sceneFunction.id,
      locationId: location.id,
      characterIds: [],
      mood: projectContext.scriptTemplate.defaultTheme,
      conflictLevel: profile.conflict,
      pacing: profile.pacing,
      emotionalWeight: profile.emotion,
      techniqueIdsUsed: projectContext.scriptTemplate.recommendedTechniqueIds.slice(index, index + 1)
    };
  });
}

function buildSceneTitle(sceneFunction: SceneFunction, developmentResult: DevelopmentStepResult, index: number): string {
  if (developmentResult.path === "script" && index === 0) return `${sceneFunction.name} from the starter draft`;
  if (developmentResult.path === "location" && index === 0) return `${sceneFunction.name} at the scouted location`;
  if (developmentResult.path === "mentor" && index === 0) return `${sceneFunction.name} shaped by mentor notes`;
  return sceneFunction.name;
}

function requireItem<TItem extends { readonly id: string }>(items: readonly TItem[], id: string, label: string): TItem {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Missing ${label}: ${id}`);
  return item;
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}

function slug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
