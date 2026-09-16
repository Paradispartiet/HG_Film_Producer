import { STUDIO_CAREER_RUN_SUMMARY_COPY } from "../../core/studioCareerRunSummaryCopy";
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
  const copy = STUDIO_CAREER_RUN_SUMMARY_COPY[language];

  return (
    <section className="panel run-summary-panel">
      <div className="panel-heading">
        <div><span className="eyebrow">{copy.panel.kicker}</span><h2>{copy.panel.heading}</h2></div>
        <button className="secondary-button" onClick={onEdit} type="button">{copy.panel.editSetup}</button>
      </div>
      <div className="summary-grid">
        <SummaryItem label={copy.labels.strategicGoal} value={run.strategicGoal.title} detail={run.strategicGoal.description} />
        <SummaryItem label={copy.labels.project} value={run.project.title} detail={`${run.project.genre} · ${getScaleLabel(language, run.project.scale)}`} />
        <SummaryItem label={copy.labels.scriptTemplate} value={run.scriptTemplate.title} detail={run.scriptTemplate.defaultTheme} />
        <SummaryItem
          label={copy.labels.developmentStatus}
          value={developmentResult ? copy.development.actionCompleted : copy.development.ready}
          detail={developmentResult ? copy.development.appliedDetail(developmentResult.pathLabel) : copy.development.readyDetail}
          accent
        />
        {developmentResult && (
          <SummaryItem
            label={copy.labels.preProductionStatus}
            value={preProductionResult ? copy.preProduction.productionLocked : copy.preProduction.productionOfficeOpen}
            detail={preProductionResult
              ? copy.preProduction.lockedDetail(preProductionResult.crew.projectCrewCount, preProductionResult.casting.projectActorCount)
              : copy.preProduction.readyDetail}
            accent={Boolean(preProductionResult)}
          />
        )}
        {preProductionResult && (
          <SummaryItem
            label={copy.labels.shootStatus}
            value={shootResult ? copy.shoot.shootComplete : copy.shoot.startShootUnlocked}
            detail={shootResult
              ? copy.shoot.completeDetail(shootResult.resolvedDays.length, shootResult.shootEvaluation.averageTakeQuality)
              : copy.shoot.readyDetail}
            accent={Boolean(shootResult)}
          />
        )}
        {shootResult && (
          <SummaryItem
            label={copy.labels.postProductionStatus}
            value={postProductionResult ? copy.postProduction.lockedCutComplete : copy.postProduction.editSuiteOpen}
            detail={postProductionResult
              ? copy.postProduction.completeDetail(postProductionResult.postProductionEvaluation.lockedCutQuality)
              : copy.postProduction.readyDetail}
            accent={Boolean(postProductionResult)}
          />
        )}
        {postProductionResult && (
          <SummaryItem
            label={copy.labels.releaseStatus}
            value={releaseResult ? copy.release.filmReleased : copy.release.distributionDeskOpen}
            detail={releaseResult
              ? copy.release.releasedDetail(releaseResult.releaseOutcomeEvaluation.overall, Boolean(careerApplicationResult))
              : copy.release.readyDetail}
            accent={Boolean(releaseResult)}
          />
        )}
        {releaseResult && (
          <SummaryItem
            label={copy.labels.careerStatus}
            value={careerApplicationResult ? copy.career.studioUpdated : copy.career.reviewReady}
            detail={careerApplicationResult
              ? copy.career.updatedDetail(careerApplicationResult.careerYearEvaluation.year)
              : copy.career.readyDetail}
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

function getScaleLabel(language: keyof typeof STUDIO_SETUP_COPY, scale: string): string {
  if ((STUDIO_SETUP_SCALE_IDS as readonly string[]).includes(scale)) {
    return STUDIO_SETUP_COPY[language].project.scales[scale as StudioSetupScaleId];
  }
  return scale.replace("_", " ");
}
