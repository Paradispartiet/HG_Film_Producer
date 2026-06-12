import type { ProjectShootLabel } from "../types.js";
import type { ShootStepPreparation, ShootStepResult } from "../demo/createShootStepRun.js";

interface ShootSchedulePanelProps {
  readonly preparation: ShootStepPreparation;
  readonly result: ShootStepResult | null;
  readonly projectLabel?: ProjectShootLabel;
}

export function ShootSchedulePanel({ preparation, result, projectLabel = "first film" }: ShootSchedulePanelProps) {
  const shootDay = result?.updatedShootDay ?? preparation.firstShootDay;
  const plannedScenes = preparation.starterScenes.filter((scene) => shootDay.sceneIds.includes(scene.id));

  return (
    <section className="shoot-desk-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">Production schedule</span><h3>{projectLabel === "film 2" ? "Film 2 first shoot day" : "First shoot day"}</h3></div>
        <strong className="shoot-day-badge">Day {shootDay.dayNumber}</strong>
      </div>
      <div className="shoot-schedule-grid">
        <ScheduleMetric label="Planned scenes" value={`${plannedScenes.length}`} detail={plannedScenes.map((scene) => scene.title).join(" · ")} />
        <ScheduleMetric label="Planned cost" value={formatMoney(shootDay.plannedCost)} detail={`${formatMoney(preparation.scheduleSummary.contingencyBudget)} contingency held`} />
        <ScheduleMetric label="Location" value={preparation.locationName} detail="Locked from pre-production" />
        <ScheduleMetric label="Status" value={formatLabel(shootDay.status)} detail={`${preparation.scheduleSummary.plannedDays} planned shoot days total`} />
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
