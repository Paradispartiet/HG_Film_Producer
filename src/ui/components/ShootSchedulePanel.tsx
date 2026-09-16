import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { STUDIO_CAREER_SHOOT_COPY } from "../../core/studioCareerShootCopy";
import type { ShootDay } from "../../domain/shoot.js";
import type { ProjectShootLabel } from "../types.js";
import type { ShootDayStepResult, ShootStepPreparation } from "../demo/createShootStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface ShootSchedulePanelProps {
  readonly preparation: ShootStepPreparation;
  readonly resolvedDays: readonly ShootDayStepResult[];
  readonly currentDay: ShootDay | undefined;
  readonly projectLabel?: ProjectShootLabel;
}

export function ShootSchedulePanel({ preparation, resolvedDays, currentDay, projectLabel = "first film" }: ShootSchedulePanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SHOOT_COPY[language];
  const locale = getFilmWorkIntlLocale(language);
  const totalDays = preparation.productionSchedule.shootDays.length;
  const displayDay = currentDay ?? resolvedDays.at(-1)?.updatedShootDay;

  if (!displayDay) return null;

  const plannedScenes = preparation.starterScenes.filter((scene) => displayDay.sceneIds.includes(scene.id));

  return (
    <section className="shoot-desk-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.schedule.eyebrow}</span><h3>{copy.schedule.heading(projectLabel)}</h3></div>
        <strong className="shoot-day-badge">{copy.schedule.dayOf(displayDay.dayNumber, totalDays)}</strong>
      </div>
      <div className="shoot-schedule-grid">
        <ScheduleMetric label={copy.schedule.plannedScenes} value={`${plannedScenes.length}`} detail={plannedScenes.map((scene) => scene.title).join(" · ")} />
        <ScheduleMetric label={copy.schedule.plannedCost} value={formatMoney(displayDay.plannedCost, locale)} detail={copy.schedule.contingencyHeld(formatMoney(preparation.scheduleSummary.contingencyBudget, locale))} />
        <ScheduleMetric label={copy.schedule.location} value={preparation.locationName} detail={copy.schedule.lockedFromPreProduction} />
        <ScheduleMetric label={copy.schedule.status} value={copy.schedule.statuses[displayDay.status]} detail={copy.schedule.resolvedDays(resolvedDays.length, totalDays)} />
      </div>
    </section>
  );
}

function ScheduleMetric({ label, value, detail }: { readonly label: string; readonly value: string; readonly detail: string }) {
  return <div className="shoot-schedule-card"><span>{label}</span><strong>{value}</strong><p>{detail}</p></div>;
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
