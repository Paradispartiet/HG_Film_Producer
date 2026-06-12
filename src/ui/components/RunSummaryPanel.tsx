import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";

interface RunSummaryPanelProps {
  readonly run: ProjectSetupRun;
  readonly developmentResult: DevelopmentStepResult | null;
  readonly preProductionResult: PreProductionStepResult | null;
  readonly shootResult: ShootStepResult | null;
  readonly onEdit: () => void;
}

export function RunSummaryPanel({ run, developmentResult, preProductionResult, shootResult, onEdit }: RunSummaryPanelProps) {
  return (
    <section className="panel run-summary-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">Project summary</span><h2>Project brief</h2></div>
        <button className="secondary-button" onClick={onEdit} type="button">Edit setup</button>
      </div>
      <div className="summary-grid">
        <SummaryItem label="Strategic goal" value={run.strategicGoal.title} detail={run.strategicGoal.description} />
        <SummaryItem label="Project" value={run.project.title} detail={`${run.project.genre} · ${formatScale(run.project.scale)}`} />
        <SummaryItem label="Script template" value={run.scriptTemplate.title} detail={run.scriptTemplate.defaultTheme} />
        <SummaryItem
          label="Development status"
          value={developmentResult ? "Action completed" : "Ready for development"}
          detail={developmentResult ? `${developmentResult.pathLabel} has been applied.` : "Choose one early development action."}
          accent
        />
        {developmentResult && (
          <SummaryItem
            label="Pre-production status"
            value={preProductionResult ? "Production locked" : "Production office open"}
            detail={preProductionResult
              ? `${preProductionResult.crew.projectCrewCount} crew and ${preProductionResult.casting.projectActorCount} actors are attached.`
              : "Confirm a location, hire key crew and cast at least two actors."}
            accent={Boolean(preProductionResult)}
          />
        )}
        {preProductionResult && (
          <SummaryItem
            label="Shoot status"
            value={shootResult ? "Shoot day resolved" : "Start shoot unlocked"}
            detail={shootResult
              ? `${shootResult.shootDayResult.completedSceneIds.length} scenes completed with ${shootResult.shootDayResult.takeQuality} take quality.`
              : "Choose one production event and resolve the first shoot day."}
            accent={Boolean(shootResult)}
          />
        )}
      </div>
    </section>
  );
}

function SummaryItem({ label, value, detail, accent = false }: {
  readonly label: string;
  readonly value: string;
  readonly detail: string;
  readonly accent?: boolean;
}) {
  return (
    <div className={accent ? "summary-item summary-item--accent" : "summary-item"}>
      <span>{label}</span><strong>{value}</strong><p>{detail}</p>
    </div>
  );
}

function formatScale(value: string): string {
  return value.replace("_", " ");
}
