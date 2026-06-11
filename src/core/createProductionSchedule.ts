import type { FilmProject, FilmScale } from "../domain/film.js";
import {
  asProductionScheduleId,
  asShootDayId
} from "../domain/ids.js";
import type { Scene } from "../domain/script.js";
import type { ProductionSchedule, ShootDay } from "../domain/shoot.js";

const SCENES_PER_DAY_BY_SCALE: Record<FilmScale, number> = {
  micro: 1,
  indie: 1,
  mid_budget: 2,
  studio: 2,
  prestige: 2
};

const PLANNED_BUDGET_SHARE = 0.9;

/** Build a deterministic first-pass schedule without changing the project or scenes. */
export function createProductionSchedule(
  project: FilmProject,
  scenes: readonly Scene[],
  defaultDays?: number
): ProductionSchedule {
  const scenesPerDay = determineScenesPerDay(project.scale, scenes.length, defaultDays);
  const sceneGroups = groupScenesByDay(scenes, scenesPerDay);
  const plannedBudget = roundMoney(project.budget * PLANNED_BUDGET_SHARE);
  const contingencyBudget = Math.max(0, project.budget - plannedBudget);
  const plannedCostPerDay = sceneGroups.length > 0
    ? roundMoney(plannedBudget / sceneGroups.length)
    : 0;

  const shootDays: ShootDay[] = sceneGroups.map((group, index) => ({
    id: asShootDayId(`${project.id}_shoot_day_${index + 1}`),
    dayNumber: index + 1,
    sceneIds: group.map((scene) => scene.id),
    locationId: group[0]?.locationId ?? null,
    plannedCost: index === sceneGroups.length - 1
      ? plannedBudget - plannedCostPerDay * (sceneGroups.length - 1)
      : plannedCostPerDay,
    status: "planned",
    eventIds: [],
    notes: [
      `Planned ${group.length} scene${group.length === 1 ? "" : "s"} at ${group[0]?.locationId ?? "an unassigned location"}.`
    ]
  }));

  return {
    id: asProductionScheduleId(`production_schedule_${project.id}`),
    projectId: project.id,
    shootDays,
    plannedBudget,
    contingencyBudget,
    totalPlannedDays: shootDays.length
  };
}

function determineScenesPerDay(
  scale: FilmScale,
  sceneCount: number,
  defaultDays?: number
): number {
  if (defaultDays !== undefined && Number.isFinite(defaultDays) && defaultDays > 0) {
    return clamp(Math.ceil(sceneCount / Math.floor(defaultDays)), 1, 2);
  }
  if (sceneCount >= 6) {
    return 2;
  }
  return SCENES_PER_DAY_BY_SCALE[scale];
}

function groupScenesByDay(scenes: readonly Scene[], scenesPerDay: number): Scene[][] {
  const groups: Scene[][] = [];
  let current: Scene[] = [];

  for (const scene of scenes) {
    const changesLocation = current.length > 0 && current[0]?.locationId !== scene.locationId;
    if (current.length >= scenesPerDay || changesLocation) {
      groups.push(current);
      current = [];
    }
    current.push(scene);
  }

  if (current.length > 0) {
    groups.push(current);
  }
  return groups;
}

function roundMoney(value: number): number {
  return Math.round(value);
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}
