import { useMemo } from "react";

import { FILM_ATLAS_COPY } from "../../core/filmAtlasCopy";
import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import type { FilmScenarioSeed } from "../data/filmScenarios";

export function FilmAtlasTimeline({
  language,
  onSelectFilm,
  scenarios,
}: {
  readonly language: FilmWorkLanguage;
  readonly onSelectFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
}) {
  const copy = FILM_ATLAS_COPY[language];
  const timeline = useMemo(
    () => [...scenarios].sort((a, b) => a.film.year - b.film.year || a.film.title.localeCompare(b.film.title)),
    [scenarios],
  );
  const decades = [...new Set(timeline.map((scenario) => Math.floor(scenario.film.year / 10) * 10))];

  return (
    <section className="atlas-timeline-view">
      <header className="atlas-timeline-heading">
        <div>
          <span className="filmverket-card-kicker">{copy.timeline.kicker}</span>
          <h2>{copy.timeline.title}</h2>
        </div>
        <p>{copy.timeline.intro}</p>
      </header>
      <section className="history-timeline">
        {decades.map((decade) => {
          const films = timeline.filter((scenario) => Math.floor(scenario.film.year / 10) * 10 === decade);
          return (
            <section className="history-decade" key={decade}>
              <header><span>{decade}</span><strong>{copy.timeline.filmCount(films.length)}</strong></header>
              <div>
                {films.map((scenario) => (
                  <button className="history-film" key={scenario.id} onClick={() => onSelectFilm(scenario)} type="button">
                    <span>{scenario.film.year}</span>
                    <strong>{scenario.film.title}</strong>
                    <small>{scenario.film.directors.join(", ") || copy.directorNotRegistered}</small>
                    <b>{copy.timeline.openAnalysis}</b>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
}
