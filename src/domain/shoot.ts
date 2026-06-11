import type {
  FilmProjectId,
  LocationId,
  ProductionEventId,
  ProductionScheduleId,
  SceneId,
  ShootDayId
} from "./ids.js";
import type { FilmStat } from "./knowledge.js";

export type ShootDayStatus = "planned" | "completed" | "delayed" | "cancelled";

export type ProductionEventType =
  | "weather"
  | "technical"
  | "performance"
  | "location"
  | "budget"
  | "conflict"
  | "inspiration"
  | "safety"
  | "logistics";

export type ProductionEventSeverity = "minor" | "moderate" | "major";

export interface ProductionSchedule {
  readonly id: ProductionScheduleId;
  readonly projectId: FilmProjectId;
  readonly shootDays: readonly ShootDay[];
  readonly plannedBudget: number;
  readonly contingencyBudget: number;
  readonly totalPlannedDays: number;
}

export interface ShootDay {
  readonly id: ShootDayId;
  readonly dayNumber: number;
  readonly sceneIds: readonly SceneId[];
  readonly locationId: LocationId | null;
  readonly plannedCost: number;
  readonly status: ShootDayStatus;
  readonly eventIds: readonly ProductionEventId[];
  readonly notes: readonly string[];
}

export interface SceneShootDifficulty {
  readonly sceneId: SceneId;
  readonly difficultyScore: number;
  readonly conflictLoad: number;
  readonly emotionalLoad: number;
  readonly pacingPressure: number;
  readonly techniqueComplexity: number;
  readonly locationLogistics: number;
  readonly castLoad: number;
  readonly notes: readonly string[];
}

export interface ProductionEvent {
  readonly id: ProductionEventId;
  readonly type: ProductionEventType;
  readonly severity: ProductionEventSeverity;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly statChanges: Readonly<Partial<Record<FilmStat, number>>>;
  readonly costImpact: number;
  readonly delayDays: number;
  readonly affectedReliability: number;
  readonly possibleUpside: boolean;
}

export interface ProductionEventApplicationResult {
  readonly shootDay: ShootDay;
  readonly event: ProductionEvent;
  readonly costDelta: number;
  readonly delayDays: number;
  readonly note: string;
}

export interface ShootDayResult {
  readonly shootDayId: ShootDayId;
  readonly completedSceneIds: readonly SceneId[];
  readonly delayedSceneIds: readonly SceneId[];
  readonly costSpent: number;
  readonly takeQuality: number;
  readonly scheduleDeltaDays: number;
  readonly notes: readonly string[];
}

export interface ShootResultEvaluation {
  readonly projectId: FilmProjectId;
  readonly completedDays: number;
  readonly delayedDays: number;
  readonly totalCostSpent: number;
  readonly averageTakeQuality: number;
  readonly scheduleHealth: number;
  readonly budgetHealth: number;
  readonly productionMorale: number;
  readonly overall: number;
  readonly notes: readonly string[];
}
