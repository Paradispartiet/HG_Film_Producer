import type { ShootStepPreparation, ShootStepResult } from "../demo/createShootStepRun.js";

interface ShootDayResultPanelProps {
  readonly preparation: ShootStepPreparation;
  readonly result: ShootStepResult;
}

export function ShootDayResultPanel({ preparation, result }: ShootDayResultPanelProps) {
  return (
    <section className="shoot-desk-section shoot-result-section">
      <div className="shoot-section-heading">
        <div><span className="eyebrow">Resolved day</span><h3>Shoot day result</h3></div>
        <strong className="shoot-day-badge">Take quality {result.shootDayResult.takeQuality}</strong>
      </div>
      <div className="shoot-result-grid">
        <ResultMetric label="Completed scenes" value={`${result.shootDayResult.completedSceneIds.length}`} detail={sceneTitles(result.shootDayResult.completedSceneIds, preparation)} />
        <ResultMetric label="Delayed scenes" value={`${result.shootDayResult.delayedSceneIds.length}`} detail={sceneTitles(result.shootDayResult.delayedSceneIds, preparation) || "No scenes delayed"} />
        <ResultMetric label="Cost spent" value={formatMoney(result.shootDayResult.costSpent)} detail={result.selectedEventSummary.note} />
        <ResultMetric label="Schedule delta" value={`${result.shootDayResult.scheduleDeltaDays} day${result.shootDayResult.scheduleDeltaDays === 1 ? "" : "s"}`} detail={result.updatedShootDay.status} />
      </div>
      <ul className="shoot-note-list">
        {result.shootDayResult.notes.map((note) => <li key={note}>{note}</li>)}
      </ul>
    </section>
  );
}

function ResultMetric({ label, value, detail }: {
  readonly label: string;
  readonly value: string;
  readonly detail: string;
}) {
  return (
    <div className="shoot-result-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </div>
  );
}

function sceneTitles(sceneIds: readonly string[], preparation: ShootStepPreparation): string {
  return preparation.starterScenes
    .filter((scene) => sceneIds.includes(scene.id))
    .map((scene) => scene.title)
    .join(" · ");
}

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
