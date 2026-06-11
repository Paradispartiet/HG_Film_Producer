import type {
  ProductionEvent,
  ProductionEventApplicationResult,
  ShootDay
} from "../domain/shoot.js";

/** Apply an event to a copied shoot day and expose its immediate production effects. */
export function applyProductionEvent(
  shootDay: ShootDay,
  event: ProductionEvent
): ProductionEventApplicationResult {
  const alreadyApplied = shootDay.eventIds.includes(event.id);
  const eventIds = alreadyApplied ? [...shootDay.eventIds] : [...shootDay.eventIds, event.id];
  const delayed = event.delayDays > 0 && shootDay.status !== "cancelled";
  const updatedShootDay: ShootDay = {
    ...shootDay,
    status: delayed ? "delayed" : shootDay.status,
    eventIds,
    notes: alreadyApplied
      ? [...shootDay.notes]
      : [...shootDay.notes, `${event.title}: ${event.description}`]
  };

  return {
    shootDay: updatedShootDay,
    event,
    costDelta: alreadyApplied ? 0 : event.costImpact,
    delayDays: alreadyApplied ? 0 : event.delayDays,
    note: alreadyApplied
      ? `${event.title} was already attached to shoot day ${shootDay.dayNumber}.`
      : `${event.title} added ${signed(event.costImpact)} cost and ${event.delayDays} delay day${event.delayDays === 1 ? "" : "s"}.`
  };
}

function signed(value: number): string {
  return value >= 0 ? `+${value}` : `${value}`;
}
