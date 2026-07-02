import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun.js";

interface RunSummaryPanelProps {
  readonly run: ProjectSetupRun;
  readonly careerApplicationResult: CareerApplicationStepResult | null;
  readonly developmentResult: DevelopmentStepResult | null;
  readonly preProductionResult: PreProductionStepResult | null;
  readonly shootResult: ShootStepResult | null;
  readonly postProductionResult: PostProductionStepResult | null;
  readonly releaseResult: ReleaseStepResult | null;
  readonly onEdit: () => void;
}

export function RunSummaryPanel({ run, careerApplicationResult, developmentResult, preProductionResult, shootResult, postProductionResult, releaseResult, onEdit }: RunSummaryPanelProps) {
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
            value={shootResult ? "Shoot complete" : "Start shoot unlocked"}
            detail={shootResult
              ? `${shootResult.resolvedDays.length} shoot day${shootResult.resolvedDays.length === 1 ? "" : "s"} resolved with ${shootResult.shootEvaluation.averageTakeQuality} average take quality.`
              : "Choose one production event and resolve each scheduled shoot day."}
            accent={Boolean(shootResult)}
          />
        )}
        {shootResult && (
          <SummaryItem label="Post-production status" value={postProductionResult ? "Locked cut complete" : "Edit suite open"} detail={postProductionResult ? `Locked cut quality ${postProductionResult.postProductionEvaluation.lockedCutQuality}. Release is unlocked.` : "Choose edit, sound, music, color and trailer strategies."} accent={Boolean(postProductionResult)} />
        )}
        {postProductionResult && (
          <SummaryItem label="Release status" value={releaseResult ? "Film released" : "Distribution desk open"} detail={releaseResult ? `Release outcome ${releaseResult.releaseOutcomeEvaluation.overall}/100. ${careerApplicationResult ? "Studio state is updated." : "Studio and career application comes next."}` : "Choose one release strategy and one festival."} accent={Boolean(releaseResult)} />
        )}
        {releaseResult && (
          <SummaryItem label="Career status" value={careerApplicationResult ? "Studio updated" : "Review ready"} detail={careerApplicationResult ? `Year ${careerApplicationResult.careerYearEvaluation.year} evaluated. Next step: start next project.` : "Close the film year to apply the release result."} accent={Boolean(careerApplicationResult)} />
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
