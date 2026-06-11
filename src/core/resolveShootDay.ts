import { estimateSceneShootDifficulty } from "./estimateSceneShootDifficulty.js";
import type { Scene } from "../domain/script.js";
import type {
  ProductionEvent,
  ProductionEventSeverity,
  ShootDay,
  ShootDayResult
} from "../domain/shoot.js";

const EVENT_QUALITY_PRESSURE: Record<ProductionEventSeverity, number> = {
  minor: 4,
  moderate: 10,
  major: 18
};

const EVENT_UPSIDE: Record<ProductionEventSeverity, number> = {
  minor: 6,
  moderate: 11,
  major: 16
};

/** Resolve a day deterministically from scene difficulty and attached events. */
export function resolveShootDay(
  shootDay: ShootDay,
  scenes: readonly Scene[],
  productionEvents: readonly ProductionEvent[] = []
): ShootDayResult {
  const scheduledScenes = shootDay.sceneIds.map((sceneId) => {
    const scene = scenes.find((candidate) => candidate.id === sceneId);
    if (!scene) {
      throw new Error(`Shoot day "${shootDay.id}" references unknown scene "${sceneId}".`);
    }
    return scene;
  });
  const attachedEvents = shootDay.eventIds.map((eventId) => {
    const event = productionEvents.find((candidate) => candidate.id === eventId);
    if (!event) {
      throw new Error(`Shoot day "${shootDay.id}" references unknown event "${eventId}".`);
    }
    return event;
  });

  const difficulties = scheduledScenes.map((scene) => estimateSceneShootDifficulty(scene));
  const averageDifficulty = average(difficulties.map((difficulty) => difficulty.difficultyScore));
  const eventQualityChange = attachedEvents.reduce(
    (total, event) => total + (event.possibleUpside
      ? EVENT_UPSIDE[event.severity]
      : -EVENT_QUALITY_PRESSURE[event.severity]),
    0
  );
  const takeQuality = clampScore(88 - averageDifficulty * 0.38 + eventQualityChange);
  const scheduleDeltaDays = attachedEvents.reduce((total, event) => total + event.delayDays, 0);
  const costSpent = Math.max(
    0,
    Math.round(shootDay.plannedCost + attachedEvents.reduce((total, event) => total + event.costImpact, 0))
  );
  const cannotComplete = shootDay.status === "cancelled"
    || attachedEvents.some((event) => event.severity === "major" && event.delayDays > 0 && !event.possibleUpside);
  const completedSceneIds = cannotComplete ? [] : [...shootDay.sceneIds];
  const delayedSceneIds = cannotComplete ? [...shootDay.sceneIds] : [];

  const notes = [
    `Average scene difficulty was ${averageDifficulty}/100.`,
    `Production events changed take quality by ${signed(eventQualityChange)} points.`,
    scheduleDeltaDays > 0
      ? `The day added ${scheduleDeltaDays} day${scheduleDeltaDays === 1 ? "" : "s"} to the schedule.`
      : "The day added no schedule delay."
  ];
  if (cannotComplete) {
    notes.push("A major interruption prevented the scheduled scenes from being completed.");
  }

  return {
    shootDayId: shootDay.id,
    completedSceneIds,
    delayedSceneIds,
    costSpent,
    takeQuality,
    scheduleDeltaDays,
    notes
  };
}

function average(values: readonly number[]): number {
  return values.length === 0 ? 0 : Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function clampScore(value: number): number {
  return Math.round(Math.min(100, Math.max(0, value)));
}

function signed(value: number): string {
  return value >= 0 ? `+${value}` : `${value}`;
}
