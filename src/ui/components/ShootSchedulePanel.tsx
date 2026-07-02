import type { ProjectShootLabel } from "../types.js";
import type { ShootDay } from "../../domain/shoot.js";
import type { ShootDayStepResult, ShootStepPreparation } from "../demo/createShootStepRun.js";

interface ShootSchedulePanelProps {
  readonly preparation: ShootStepPreparation;
  readonly resolvedDays: readonly ShootDayStepResult[];
  readonly currentDay: ShootDay | undefined;
  readonly projectLabel?: ProjectShootLabel;
}

export function ShootSchedulePanel({ preparation, resolvedDays, currentDay, projectLabel = "first film" }: ShootSchedulePanelProps) {
  const totalDays = preparation.productionSchedule.shootDays.length;
  const displayDay = currentDay ?? resolvedDays.at(-1)?.updatedShootDay;
  const heading = projectLabel === "first film" ? "Shoot schedule" : `${projectLabel.replace("film", "Film")} shoot schedule`;

  if (!displayDay) return null;

  const plannedScenes = preparation.starterScenes.filter((scene) => displayDay.sceneIds.includes(scene.id));

  return (
    <section className="shoot-desk-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">Production schedule</span><h3>{heading}</h3></div>
        <strong className="shoot-day-badge">Day {displayDay.dayNumber} of {totalDays}</strong>
      </div>
      <div className="shoot-schedule-grid">
        <ScheduleMetric label="Planned scenes" value={`${plannedScenes.length}`} detail={plannedScenes.map((scene) => scene.title).join(" · ")} />
        <ScheduleMetric label="Planned cost" value={formatMoney(displayDay.plannedCost)} detail={`${formatMoney(preparation.scheduleSummary.contingencyBudget)} contingency held`} />
        <ScheduleMetric label="Location" value={preparation.locationName} detail="Locked from pre-production" />
        <ScheduleMetric label="Status" value={formatLabel(displayDay.status)} detail={`${resolvedDays.length}/${totalDays} shoot days resolved`} />
      </div>
    </section>
  );
}

function ScheduleMetric({ label, value, detail }: {
  readonly label: string;
  readonly value: string;
  readonly detail: string;
}) {
  return (
    <div className="shoot-schedule-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </div>
  );
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
