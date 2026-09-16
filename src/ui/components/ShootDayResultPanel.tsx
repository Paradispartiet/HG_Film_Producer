import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage";
import { STUDIO_CAREER_SHOOT_COPY } from "../../core/studioCareerShootCopy";
import type { ProjectShootLabel } from "../types.js";
import type { ShootDayStepResult, ShootStepPreparation } from "../demo/createShootStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

interface ShootDayResultPanelProps {
  readonly preparation: ShootStepPreparation;
  readonly result: ShootDayStepResult;
  readonly dayNumber: number;
  readonly projectLabel?: ProjectShootLabel;
}

export function ShootDayResultPanel({ preparation, result, dayNumber, projectLabel = "first film" }: ShootDayResultPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SHOOT_COPY[language];
  const locale = getFilmWorkIntlLocale(language);
  return (
    <section className="shoot-desk-section shoot-result-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">{copy.dayResult.eyebrow}</span><h3>{copy.dayResult.heading(projectLabel, dayNumber)}</h3></div>
        <strong className="shoot-day-badge">{copy.dayResult.takeQuality(result.shootDayResult.takeQuality)}</strong>
      </div>
      <div className="shoot-result-grid">
        <ResultMetric label={copy.dayResult.completedScenes} value={`${result.shootDayResult.completedSceneIds.length}`} detail={sceneTitles(result.shootDayResult.completedSceneIds, preparation)} />
        <ResultMetric label={copy.dayResult.delayedScenes} value={`${result.shootDayResult.delayedSceneIds.length}`} detail={sceneTitles(result.shootDayResult.delayedSceneIds, preparation) || copy.dayResult.noScenesDelayed} />
        <ResultMetric label={copy.dayResult.costSpent} value={formatMoney(result.shootDayResult.costSpent, locale)} detail={result.selectedEventSummary.note} />
        <ResultMetric label={copy.dayResult.scheduleDeltaLabel} value={copy.dayResult.scheduleDelta(result.shootDayResult.scheduleDeltaDays)} detail={copy.schedule.statuses[result.updatedShootDay.status]} />
      </div>
      <ul className="shoot-note-list">{result.shootDayResult.notes.map((note) => <li key={note}>{note}</li>)}</ul>
    </section>
  );
}

function ResultMetric({ label, value, detail }: { readonly label: string; readonly value: string; readonly detail: string }) {
  return <div className="shoot-result-card"><span>{label}</span><strong>{value}</strong><p>{detail}</p></div>;
}

function sceneTitles(sceneIds: readonly string[], preparation: ShootStepPreparation): string {
  return preparation.starterScenes.filter((scene) => sceneIds.includes(scene.id)).map((scene) => scene.title).join(" · ");
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
