import { STUDIO_CAREER_SUMMARY_COPY } from "../../core/studioCareerSummaryCopy";
import { STUDIO_SETUP_COPY, STUDIO_SETUP_SCALE_IDS, type StudioSetupScaleId } from "../../core/studioSetupCopy";
import type { CareerApplicationStepResult } from "../demo/createCareerApplicationStepRun";
import type { DevelopmentStepResult } from "../demo/createDevelopmentStepRun.js";
import type { ProjectSetupRun } from "../demo/createProjectSetupRun.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage";

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
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_SUMMARY_COPY[language].summary;
  const setupCopy = STUDIO_SETUP_COPY[language];

  return (
    <section className="panel run-summary-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">{copy.kicker}</span><h2>{copy.heading}</h2></div>
        <button className="secondary-button" onClick={onEdit} type="button">{copy.editSetup}</button>
      </div>
      <div className="summary-grid">
        <SummaryItem label={copy.strategicGoal} value={run.strategicGoal.title} detail={run.strategicGoal.description} />
        <SummaryItem label={copy.project} value={run.project.title} detail={`${run.project.genre} · ${formatScaleLabel(run.project.scale, setupCopy.project.scales)}`} />
        <SummaryItem label={copy.scriptTemplate} value={run.scriptTemplate.title} detail={run.scriptTemplate.defaultTheme} />
        <SummaryItem
          label={copy.development.label}
          value={developmentResult ? copy.development.completed : copy.development.ready}
          detail={developmentResult ? copy.development.completedDetail(developmentResult.pathLabel) : copy.development.readyDetail}
          accent
        />
        {developmentResult && (
          <SummaryItem
            label={copy.preProduction.label}
            value={preProductionResult ? copy.preProduction.locked : copy.preProduction.open}
            detail={preProductionResult
              ? copy.preProduction.lockedDetail(preProductionResult.crew.projectCrewCount, preProductionResult.casting.projectActorCount)
              : copy.preProduction.openDetail}
            accent={Boolean(preProductionResult)}
          />
        )}
        {preProductionResult && (
          <SummaryItem
            label={copy.shoot.label}
            value={shootResult ? copy.shoot.complete : copy.shoot.unlocked}
            detail={shootResult
              ? copy.shoot.completedDetail(shootResult.resolvedDays.length, shootResult.shootEvaluation.averageTakeQuality)
              : copy.shoot.openDetail}
            accent={Boolean(shootResult)}
          />
        )}
        {shootResult && (
          <SummaryItem
            label={copy.postProduction.label}
            value={postProductionResult ? copy.postProduction.complete : copy.postProduction.open}
            detail={postProductionResult
              ? copy.postProduction.completedDetail(postProductionResult.postProductionEvaluation.lockedCutQuality)
              : copy.postProduction.openDetail}
            accent={Boolean(postProductionResult)}
          />
        )}
        {postProductionResult && (
          <SummaryItem
            label={copy.release.label}
            value={releaseResult ? copy.release.released : copy.release.open}
            detail={releaseResult
              ? copy.release.releasedDetail(releaseResult.releaseOutcomeEvaluation.overall, Boolean(careerApplicationResult))
              : copy.release.openDetail}
            accent={Boolean(releaseResult)}
          />
        )}
        {releaseResult && (
          <SummaryItem
            label={copy.career.label}
            value={careerApplicationResult ? copy.career.updated : copy.career.reviewReady}
            detail={careerApplicationResult ? copy.career.updatedDetail(careerApplicationResult.careerYearEvaluation.year) : copy.career.readyDetail}
            accent={Boolean(careerApplicationResult)}
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

function formatScaleLabel(value: string, labels: Readonly<Record<StudioSetupScaleId, string>>): string {
  const scaleId = STUDIO_SETUP_SCALE_IDS.find((candidate) => candidate === value);
  return scaleId ? labels[scaleId] : value.replace("_", " ");
}
