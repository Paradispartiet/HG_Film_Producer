import { useEffect, useMemo, useState } from "react";
import {
  formatFilmStudyCoverageStatus,
  type FilmStudyCoverageItem,
} from "../../core/filmStudyCoverage";
import type { FilmScenarioSeed } from "../data/filmScenarios";
import {
  createFilmHistoryChoices,
  resolveScenarioFilmStudyMap,
} from "../data/scenarioFilmStudyMap";
import {
  create1930sProductionSystemsFilmHistoryChoices,
  get1930sProductionSystemsFilmHistoryProfile,
  resolve1930sProductionSystemsFilmStudyMap,
} from "../data/scenarioFilmStudy1930sProductionSystemsBatch";
import {
  create1940sNoirRealismFilmHistoryChoices,
  get1940sNoirRealismFilmHistoryProfile,
  resolve1940sNoirRealismFilmStudyMap,
} from "../data/scenarioFilmStudy1940sNoirRealismBatch";
import {
  create1950sAsianPostwarFilmHistoryChoices,
  get1950sAsianPostwarFilmHistoryProfile,
  resolve1950sAsianPostwarFilmStudyMap,
} from "../data/scenarioFilmStudy1950sAsianPostwarBatch";
import {
  createClassicalHollywoodFilmHistoryChoices,
  getClassicalHollywoodFilmHistoryProfile,
  resolveClassicalHollywoodFilmStudyMap,
} from "../data/scenarioFilmStudyClassicalHollywoodBatch";
import {
  createConstructedWorldsFilmHistoryChoices,
  getConstructedWorldsFilmHistoryProfile,
  resolveConstructedWorldsFilmStudyMap,
} from "../data/scenarioFilmStudyConstructedWorldsBatch";
import {
  createCzechoslovakNewWaveFilmHistoryChoices,
  getCzechoslovakNewWaveFilmHistoryProfile,
  resolveCzechoslovakNewWaveFilmStudyMap,
} from "../data/scenarioFilmStudyCzechoslovakNewWaveBatch";
import {
  createEuropeanPoliticalFeministModernismFilmHistoryChoices,
  getEuropeanPoliticalFeministModernismFilmHistoryProfile,
  resolveEuropeanPoliticalFeministModernismFilmStudyMap,
} from "../data/scenarioFilmStudyEuropeanPoliticalFeministModernismBatch";
import {
  createEuropeanPressureFilmHistoryChoices,
  getEuropeanPressureFilmHistoryProfile,
  resolveEuropeanPressureFilmStudyMap,
} from "../data/scenarioFilmStudyEuropeanPressureBatch";
import {
  createIndependentStorytellingFilmHistoryChoices,
  getIndependentStorytellingFilmHistoryProfile,
  resolveIndependentStorytellingFilmStudyMap,
} from "../data/scenarioFilmStudyIndependentStorytellingBatch";
import {
  createLandscapeFilmHistoryChoices,
  getLandscapeFilmHistoryProfile,
  resolveLandscapeFilmStudyMap,
} from "../data/scenarioFilmStudyLandscapeBatch";
import {
  createLateSilentEarlySoundFilmHistoryChoices,
  getLateSilentEarlySoundFilmHistoryProfile,
  resolveLateSilentEarlySoundFilmStudyMap,
} from "../data/scenarioFilmStudyLateSilentEarlySoundBatch";
import {
  createMinimalistRoadFilmHistoryChoices,
  getMinimalistRoadFilmHistoryProfile,
  resolveMinimalistRoadFilmStudyMap,
} from "../data/scenarioFilmStudyMinimalistRoadBatch";
import {
  createPostwarEuropeanModernismFilmHistoryChoices,
  getPostwarEuropeanModernismFilmHistoryProfile,
  resolvePostwarEuropeanModernismFilmStudyMap,
} from "../data/scenarioFilmStudyPostwarEuropeanModernismBatch";
import {
  createSilentFoundationsFilmHistoryChoices,
  getSilentFoundationsFilmHistoryProfile,
  resolveSilentFoundationsFilmStudyMap,
} from "../data/scenarioFilmStudySilentFoundationsBatch";
import {
  createSilentStudioSystemsFilmHistoryChoices,
  getSilentStudioSystemsFilmHistoryProfile,
  resolveSilentStudioSystemsFilmStudyMap,
} from "../data/scenarioFilmStudySilentStudioSystemsBatch";
import {
  createTechnologyFilmHistoryChoices,
  getTechnologyFilmHistoryProfile,
  resolveTechnologyFilmStudyMap,
} from "../data/scenarioFilmStudyTechnologyBatch";
import type { ScenarioProductionBrief } from "../data/scenarioProductionBriefs";
import "./scenarioFilmStudy.css";

export function ScenarioFilmStudyPanel({
  brief,
  scenario,
}: {
  readonly brief: ScenarioProductionBrief;
  readonly scenario: FilmScenarioSeed;
}) {
  const filmStudy = useMemo(
    () => resolveEuropeanPoliticalFeministModernismFilmStudyMap(scenario, brief)
      ?? resolveCzechoslovakNewWaveFilmStudyMap(scenario, brief)
      ?? resolvePostwarEuropeanModernismFilmStudyMap(scenario, brief)
      ?? resolve1950sAsianPostwarFilmStudyMap(scenario, brief)
      ?? resolve1940sNoirRealismFilmStudyMap(scenario, brief)
      ?? resolveClassicalHollywoodFilmStudyMap(scenario, brief)
      ?? resolve1930sProductionSystemsFilmStudyMap(scenario, brief)
      ?? resolveLateSilentEarlySoundFilmStudyMap(scenario, brief)
      ?? resolveSilentStudioSystemsFilmStudyMap(scenario, brief)
      ?? resolveSilentFoundationsFilmStudyMap(scenario, brief)
      ?? resolveIndependentStorytellingFilmStudyMap(scenario, brief)
      ?? resolveEuropeanPressureFilmStudyMap(scenario, brief)
      ?? resolveMinimalistRoadFilmStudyMap(scenario, brief)
      ?? resolveConstructedWorldsFilmStudyMap(scenario, brief)
      ?? resolveLandscapeFilmStudyMap(scenario, brief)
      ?? resolveTechnologyFilmStudyMap(scenario, brief)
      ?? resolveScenarioFilmStudyMap(scenario, brief),
    [brief, scenario],
  );
  const [selectedHistoryChoiceId, setSelectedHistoryChoiceId] = useState<string | undefined>();

  useEffect(() => {
    setSelectedHistoryChoiceId(undefined);
  }, [scenario.id]);

  const historyProfile = filmStudy.historyProfile;
  const historyChoices = useMemo(() => {
    if (!historyProfile) return [];
    if (getEuropeanPoliticalFeministModernismFilmHistoryProfile(historyProfile.scenarioId)) {
      return createEuropeanPoliticalFeministModernismFilmHistoryChoices(historyProfile);
    }
    if (getCzechoslovakNewWaveFilmHistoryProfile(historyProfile.scenarioId)) {
      return createCzechoslovakNewWaveFilmHistoryChoices(historyProfile);
    }
    if (getPostwarEuropeanModernismFilmHistoryProfile(historyProfile.scenarioId)) {
      return createPostwarEuropeanModernismFilmHistoryChoices(historyProfile);
    }
    if (get1950sAsianPostwarFilmHistoryProfile(historyProfile.scenarioId)) {
      return create1950sAsianPostwarFilmHistoryChoices(historyProfile);
    }
    if (get1940sNoirRealismFilmHistoryProfile(historyProfile.scenarioId)) {
      return create1940sNoirRealismFilmHistoryChoices(historyProfile);
    }
    if (getClassicalHollywoodFilmHistoryProfile(historyProfile.scenarioId)) {
      return createClassicalHollywoodFilmHistoryChoices(historyProfile);
    }
    if (get1930sProductionSystemsFilmHistoryProfile(historyProfile.scenarioId)) {
      return create1930sProductionSystemsFilmHistoryChoices(historyProfile);
    }
    if (getLateSilentEarlySoundFilmHistoryProfile(historyProfile.scenarioId)) {
      return createLateSilentEarlySoundFilmHistoryChoices(historyProfile);
    }
    if (getSilentStudioSystemsFilmHistoryProfile(historyProfile.scenarioId)) {
      return createSilentStudioSystemsFilmHistoryChoices(historyProfile);
    }
    if (getSilentFoundationsFilmHistoryProfile(historyProfile.scenarioId)) {
      return createSilentFoundationsFilmHistoryChoices(historyProfile);
    }
    if (getIndependentStorytellingFilmHistoryProfile(historyProfile.scenarioId)) {
      return createIndependentStorytellingFilmHistoryChoices(historyProfile);
    }
    if (getEuropeanPressureFilmHistoryProfile(historyProfile.scenarioId)) {
      return createEuropeanPressureFilmHistoryChoices(historyProfile);
    }
    if (getMinimalistRoadFilmHistoryProfile(historyProfile.scenarioId)) {
      return createMinimalistRoadFilmHistoryChoices(historyProfile);
    }
    if (getConstructedWorldsFilmHistoryProfile(historyProfile.scenarioId)) {
      return createConstructedWorldsFilmHistoryChoices(historyProfile);
    }
    if (getLandscapeFilmHistoryProfile(historyProfile.scenarioId)) {
      return createLandscapeFilmHistoryChoices(historyProfile);
    }
    return getTechnologyFilmHistoryProfile(historyProfile.scenarioId)
      ? createTechnologyFilmHistoryChoices(historyProfile)
      : createFilmHistoryChoices(historyProfile);
  }, [historyProfile]);
  const selectedHistoryChoice = historyChoices.find((choice) => choice.id === selectedHistoryChoiceId);
  const historyCoverage = filmStudy.coverage.filter((item) => item.group === "history");
  const craftCoverage = filmStudy.coverage.filter((item) => item.group === "craft");

  return (
    <section className="scenario-film-study" aria-labelledby="scenario-film-study-title">
      <div className="scenario-film-study-header">
        <div>
          <span className="eyebrow">Film history and complete craft map</span>
          <h4 id="scenario-film-study-title">Place the film before studying its choices</h4>
          <p>
            {scenario.film.title} is placed in {filmStudy.broadEra.toLowerCase()}. The map separates sourced facts,
            current case mapping, and areas that still need research.
          </p>
        </div>
        <div className={`scenario-film-study-status scenario-film-study-status--${filmStudy.historyStatus}`}>
          <span>Film history</span>
          <strong>{filmStudy.historyStatus === "source_backed" ? "Source backed" : "Research pending"}</strong>
          <small>{filmStudy.coverageSummary.sourceVerified}/{filmStudy.coverageSummary.total} areas source verified</small>
        </div>
      </div>

      {historyProfile ? (
        <>
          <div className="scenario-history-tags" aria-label="Film-historical traditions">
            <span>{historyProfile.period}</span>
            {historyProfile.traditions.map((tradition) => <span key={tradition}>{tradition}</span>)}
          </div>

          <section className="scenario-history-exercise" aria-label="Film history comparison">
            <span className="eyebrow">History lens</span>
            <strong>{historyProfile.historyQuestion}</strong>
            <div className="scenario-history-choice-grid">
              {historyChoices.map((choice) => (
                <button
                  aria-pressed={choice.id === selectedHistoryChoiceId}
                  className={choice.id === selectedHistoryChoiceId ? "scenario-history-choice scenario-history-choice--selected" : "scenario-history-choice"}
                  key={choice.id}
                  onClick={() => setSelectedHistoryChoiceId(choice.id)}
                  type="button"
                >
                  {choice.label}
                </button>
              ))}
            </div>
            {selectedHistoryChoice ? (
              <p className={`scenario-history-feedback scenario-history-feedback--${selectedHistoryChoice.quality}`}>
                {selectedHistoryChoice.feedback}
              </p>
            ) : (
              <p className="scenario-history-feedback">Compare the historical explanations. There are no points or penalties.</p>
            )}
          </section>

          <div className="scenario-history-arc" aria-label="Before, contemporary moment, and afterlife">
            <HistoryArcStep label="Before the film" text={historyProfile.before} />
            <HistoryArcStep label="In its moment" text={historyProfile.moment} />
            <HistoryArcStep label="What it carries forward" text={historyProfile.after} />
          </div>
        </>
      ) : (
        <div className="scenario-history-pending">
          <strong>Historical interpretation is not yet source verified for this film.</strong>
          <p>
            The release year and broad era are mapped, and the existing screenplay, image, editing and sound brief remains available.
            Movement, production history, directing, performance, design, technology, reception and legacy stay visibly marked as research pending.
          </p>
        </div>
      )}

      <details className="scenario-study-coverage" open={Boolean(historyProfile)}>
        <summary>
          <span>Complete mapping audit</span>
          <small>{filmStudy.coverageSummary.researchPending} of {filmStudy.coverageSummary.total} areas still need research</small>
        </summary>
        <div className="scenario-study-coverage-groups">
          <CoverageGroup items={historyCoverage} title="Film history" />
          <CoverageGroup items={craftCoverage} title="Film technique" />
        </div>
      </details>

      {filmStudy.verification ? (
        <details className="scenario-history-sources">
          <summary>
            <span>Inspectable sources</span>
            <small>{filmStudy.verification.sources.length} sources · verified {filmStudy.verification.verifiedAt}</small>
          </summary>
          <p>{filmStudy.verification.summary}</p>
          <ul>
            {filmStudy.verification.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} rel="noreferrer" target="_blank">{source.title}</a>
                <small>{source.publisher} · {source.supports.join(", ")}</small>
                <p>{source.note}</p>
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </section>
  );
}

function HistoryArcStep({ label, text }: { readonly label: string; readonly text: string }) {
  return (
    <article>
      <span>{label}</span>
      <p>{text}</p>
    </article>
  );
}

function CoverageGroup({
  items,
  title,
}: {
  readonly items: readonly FilmStudyCoverageItem[];
  readonly title: string;
}) {
  return (
    <section>
      <h5>{title}</h5>
      <ul>
        {items.map((item) => (
          <li className={`scenario-study-coverage-item scenario-study-coverage-item--${item.status}`} key={item.area}>
            <div>
              <strong>{item.label}</strong>
              <span>{formatFilmStudyCoverageStatus(item.status)}</span>
            </div>
            {item.note ? <p>{item.note}</p> : <p>No film-specific research has been recorded yet.</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
