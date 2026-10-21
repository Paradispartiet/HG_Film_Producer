import { STUDIO_CAREER_DEBRIEF_COPY } from "../../core/studioCareerDebriefCopy.js";
import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";
import type { CareerFilmProjectRun } from "../state/careerRunState.js";

interface Props {
  readonly project: CareerFilmProjectRun;
  readonly handoff?: boolean;
}

/** Read-only explanation of recorded decisions and engine results.
 * This must never recompute a score, alter a project or pretend to isolate
 * the effect of one decision from other production variables.
 */
export function StudioCareerProductionDebrief({ project, handoff = false }: Props) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_DEBRIEF_COPY[language];
  const development = project.developmentResult;
  const preProduction = project.preProductionResult;
  const shoot = project.shootResult;
  const post = project.postProductionResult;
  const release = project.releaseResult;
  if (!development || !preProduction || !shoot || !post || !release) return null;

  const observations = [
    { phase: copy.development, detail: copy.developmentPaths[development.path], metric: copy.developmentScore, value: development.pipelineStep.score },
    { phase: copy.preProduction, detail: `${copy.chosenLocation}: ${preProduction.location.name}`, metric: copy.teamQuality, value: preProduction.teamEvaluation.overall },
    { phase: copy.shooting, detail: `${copy.shootDays}: ${shoot.resolvedDays.length}`, metric: copy.takeQuality, value: shoot.shootEvaluation.averageTakeQuality },
    { phase: copy.postProduction, detail: `${copy.editChoice}: ${post.appliedDecisions.edit.title}`, metric: copy.lockedCut, value: post.postProductionEvaluation.lockedCutQuality },
    { phase: copy.release, detail: `${copy.strategyFit}: ${release.releaseStrategyScore.totalScore}`, metric: copy.releaseOutcome, value: release.releaseOutcomeEvaluation.overall },
  ];
  const year = project.careerApplicationResult;
  const locale = getFilmWorkIntlLocale(language);
  const signed = (n: number) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toLocaleString(locale)}`;
  const signedMoney = (n: number) => `${n >= 0 ? "+" : "−"}${Math.abs(n).toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 })}`;

  const body = (
    <div className="studio-career-debrief-body">
      <p className="studio-career-debrief-intro">{copy.introduction}</p>
      <ol className="studio-career-debrief-steps">
        {observations.map((item, index) => (
          <li key={item.phase} className="studio-career-debrief-step">
            <span className="studio-career-debrief-number">{index + 1}</span>
            <div className="studio-career-debrief-observation">
              <span>{item.phase}</span>
              <strong>{item.detail}</strong>
            </div>
            <div className="studio-career-debrief-value">
              <span>{item.metric}</span>
              <strong>{item.value}</strong>
            </div>
          </li>
        ))}
      </ol>
      {year && (
        <div className="studio-career-debrief-carryover">
          <strong>{copy.studioAfterClose}</strong>
          <dl>
            <div><dt>{copy.cashChange}</dt><dd>{signedMoney(year.moneyDelta)}</dd></div>
            <div><dt>{copy.reputationChange}</dt><dd>{signed(year.reputationDelta)}</dd></div>
            <div><dt>{copy.prestigeChange}</dt><dd>{signed(year.prestigeDelta)}</dd></div>
          </dl>
          <small>{copy.netYearNote}</small>
        </div>
      )}
    </div>
  );

  if (handoff) {
    return (
      <details className="studio-career-debrief studio-career-debrief--handoff">
        <summary><strong>{copy.handoffHeading}: {project.run.project.title}</strong><span>{copy.handoffHint}</span></summary>
        {body}
      </details>
    );
  }

  return (
    <section className="studio-career-debrief" aria-label={copy.heading}>
      <div className="studio-career-debrief-header">
        <span className="eyebrow">{project.run.project.title}</span>
        <h3>{copy.heading}</h3>
      </div>
      {body}
    </section>
  );
}
