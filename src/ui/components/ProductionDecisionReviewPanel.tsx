import { getFilmWorkIntlLocale } from "../../core/filmWorkLanguage.js";
import { STUDIO_CAREER_DEVELOPMENT_COPY } from "../../core/studioCareerDevelopmentCopy.js";
import { STUDIO_CAREER_REVIEW_COPY } from "../../core/studioCareerReviewCopy.js";
import { formatStudioCareerPostProductionStats } from "../../core/studioCareerPostProductionCopy.js";
import type { CareerFilmProjectRun } from "../state/careerRunState.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface ProductionDecisionReviewPanelProps {
  readonly project: CareerFilmProjectRun;
  readonly compact?: boolean;
}

type LessonArea = "script" | "casting" | "shoot" | "edit";
type DecisionRow = { readonly phase: string; readonly choice: string; readonly outcome: string };

/**
 * Read-only reflection on outcomes already recorded by the production engines.
 * These observations are not causal score breakdowns or new career bonuses.
 */
export function ProductionDecisionReviewPanel({ project, compact = false }: ProductionDecisionReviewPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_REVIEW_COPY[language].decisionReview;
  const developmentCopy = STUDIO_CAREER_DEVELOPMENT_COPY[language];
  const locale = getFilmWorkIntlLocale(language);
  const pre = project.preProductionResult;
  const shoot = project.shootResult;
  const post = project.postProductionResult;
  const career = project.careerApplicationResult;
  if (!pre || !shoot || !post || !career) return null;

  const scriptScore = project.developmentResults.reduce<number | null>(
    (current, result) => result.path === "script" ? result.overallScore : current, null
  );
  const signals: readonly { readonly area: LessonArea; readonly score: number }[] = [
    ...(scriptScore === null ? [] : [{ area: "script" as const, score: scriptScore }]),
    { area: "casting", score: pre.casting.chemistryScore },
    { area: "shoot", score: shoot.shootEvaluation.averageTakeQuality },
    { area: "edit", score: post.postProductionEvaluation.lockedCutQuality }
  ];
  const priority = signals.reduce((lowest, signal) => signal.score < lowest.score ? signal : lowest);
  const lesson = copy.lessons[priority.area];
  const lastDevelopment = project.developmentResults;
  const eventCost = shoot.resolvedDays.reduce((total, day) => total + day.selectedEventSummary.costImpact, 0);
  const decisions: readonly DecisionRow[] = [
    ...lastDevelopment.map((result): DecisionRow => ({
      phase: copy.development,
      choice: developmentCopy.paths[result.path].title,
      outcome: result.path === "script"
        ? copy.scriptOutcome(result.sceneCount, result.overallScore)
        : result.path === "location"
          ? copy.locationOutcome(result.topLocation, result.totalScore)
          : copy.mentorOutcome(result.unlockedTechnique ?? developmentCopy.result.noTechniqueUnlock)
    })),
    {
      phase: copy.team,
      choice: copy.teamChoice(pre.crew.projectCrewCount, pre.casting.projectActorCount),
      outcome: copy.teamOutcome(pre.teamEvaluation.crewScore, pre.casting.chemistryScore)
    },
    {
      phase: copy.shoot,
      choice: copy.shootChoice(shoot.resolvedDays.length),
      outcome: copy.shootOutcome(shoot.shootEvaluation.averageTakeQuality, formatMoney(eventCost, locale))
    },
    {
      phase: copy.edit,
      choice: post.appliedDecisions.edit.title,
      outcome: formatStudioCareerPostProductionStats(post.appliedDecisions.edit.statChanges, language)
    }
  ];
  return (
    <section className={compact ? "production-decision-review production-decision-review--compact" : "production-decision-review"} aria-label={copy.heading}>
      {!compact && (
        <>
          <div className="production-review-heading">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h3>{copy.heading}</h3>
            <p>{copy.introduction}</p>
          </div>
          <ol className="production-review-decisions">
            {decisions.map((decision, index) => (
              <li key={index}>
                <span className="section-label">{decision.phase}</span>
                <strong>{decision.choice}</strong>
                <p>{decision.outcome}</p>
              </li>
            ))}
          </ol>
          <div className="production-review-final">
            <strong>{copy.finalResult}</strong>
            <dl>
              <div><dt>{copy.quality}</dt><dd>{career.completedFilmRecord.quality}/100</dd></div>
              <div><dt>{copy.audience}</dt><dd>{career.completedFilmRecord.audienceAppeal}/100</dd></div>
              <div><dt>{copy.critics}</dt><dd>{career.completedFilmRecord.criticalAppeal}/100</dd></div>
              <div><dt>{copy.reputation}</dt><dd>{signed(career.reputationDelta)}</dd></div>
            </dl>
          </div>
        </>
      )}
      <div className="production-review-lesson">
        <span className="section-label">{copy.nextFilmLesson}</span>
        <strong>{lesson}</strong>
        <p>{copy.learningSignal(priority.score)}</p>
        <small>{copy.noBonus}</small>
      </div>
    </section>
  );
}

function formatMoney(value: number, locale: string): string {
  return value.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function signed(value: number): string {
  return value > 0 ? `+${value}` : String(value);
}
