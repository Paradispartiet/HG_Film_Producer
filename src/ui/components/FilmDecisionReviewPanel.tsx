import { STUDIO_CAREER_FILM_DECISION_REVIEW_COPY, selectNextProductionFocus } from "../../core/studioCareerFilmDecisionReview.js";
import type { PreProductionStepResult } from "../demo/createPreProductionStepRun.js";
import type { ShootStepResult } from "../demo/createShootStepRun.js";
import type { PostProductionStepResult } from "../demo/createPostProductionStepRun.js";
import type { ReleaseStepResult } from "../demo/createReleaseStepRun.js";
import { useFilmWorkLanguage } from "../filmWorkLanguage.js";

interface FilmDecisionReviewPanelProps {
  readonly preProductionResult: PreProductionStepResult;
  readonly shootResult: ShootStepResult;
  readonly postProductionResult: PostProductionStepResult;
  readonly releaseResult: ReleaseStepResult;
}

/**
 * Explain the existing production-to-film connections, without simulating
 * counterfactual bonuses or mutating the project / save state.
 */
export function FilmDecisionReviewPanel({
  preProductionResult,
  shootResult,
  postProductionResult,
  releaseResult
}: FilmDecisionReviewPanelProps) {
  const [language] = useFilmWorkLanguage();
  const copy = STUDIO_CAREER_FILM_DECISION_REVIEW_COPY[language];
  const project = preProductionResult.projectState;
  const team = preProductionResult.teamEvaluation;
  const shoot = shootResult.shootEvaluation;
  const finishing = postProductionResult.postProductionEvaluation;
  const film = releaseResult.filmResult;
  const focus = selectNextProductionFocus({
    crew: team.crewScore,
    casting: team.castScore,
    shoot: shoot.averageTakeQuality,
    cut: finishing.lockedCutQuality
  });

  return (
    <section className="film-decision-review" aria-labelledby={`film-decision-review-${project.id}`}>
      <div className="film-decision-review-heading">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h3 id={`film-decision-review-${project.id}`}>{copy.heading}</h3>
        <p>{copy.intro}</p>
      </div>
      <div className="film-decision-review-grid">
        <ReviewStage number="01" title={copy.development} explanation={copy.developmentEffect}>
          <span>{copy.techniques(project.techniqueIdsUsed.length)}</span>
          <span>{copy.locations(project.locationIds.length)}</span>
        </ReviewStage>
        <ReviewStage number="02" title={copy.people} explanation={copy.peopleEffect}>
          <ReviewSignal label={copy.crewScore} score={team.crewScore} />
          <ReviewSignal label={copy.castScore} score={team.castScore} />
          <ReviewSignal label={copy.chemistry} score={team.chemistryScore} />
        </ReviewStage>
        <ReviewStage number="03" title={copy.set} explanation={copy.setEffect}>
          <ReviewSignal label={copy.takeQuality} score={shoot.averageTakeQuality} />
          <ReviewSignal label={copy.screening} score={finishing.testScreeningScore} />
        </ReviewStage>
        <ReviewStage number="04" title={copy.finishing} explanation={copy.finishingEffect}>
          <ReviewSignal label={copy.lockedCut} score={finishing.lockedCutQuality} />
          <ReviewSignal label={copy.trailer} score={finishing.trailerScore} />
        </ReviewStage>
      </div>
      <div className="film-decision-review-final">
        <strong>{copy.filmResult}</strong>
        <div>
          <ReviewSignal label={copy.quality} score={film.quality} />
          <ReviewSignal label={copy.audience} score={film.audienceAppeal} />
          <ReviewSignal label={copy.critics} score={film.criticalAppeal} />
        </div>
      </div>
      <div className="film-decision-review-lesson">
        <span className="section-label">{copy.nextFilm}</span>
        <strong>{copy.focus[focus]}</strong>
        <small>{copy.advisory}</small>
      </div>
    </section>
  );
}

function ReviewStage({ number, title, explanation, children }: {
  readonly number: string;
  readonly title: string;
  readonly explanation: string;
  readonly children: React.ReactNode;
}) {
  return (
    <article className="film-decision-review-stage">
      <div className="film-decision-review-stage-heading"><span>{number}</span><h4>{title}</h4></div>
      <div className="film-decision-review-signals">{children}</div>
      <p>{explanation}</p>
    </article>
  );
}

function ReviewSignal({ label, score }: { readonly label: string; readonly score: number }) {
  return <span className="film-decision-review-signal"><span>{label}</span><strong>{score}<small>/100</small></strong></span>;
}
