import { useMemo } from "react";

import type { FilmScenarioSeed } from "../data/filmScenarios";

export function FilmAtlasTimeline({
  onSelectFilm,
  scenarios,
}: {
  readonly onSelectFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
}) {
  const timeline = useMemo(
    () => [...scenarios].sort((a, b) => a.film.year - b.film.year || a.film.title.localeCompare(b.film.title)),
    [scenarios],
  );
  const decades = [...new Set(timeline.map((scenario) => Math.floor(scenario.film.year / 10) * 10))];

  return (
    <section className="atlas-timeline-view">
      <header className="atlas-timeline-heading">
        <div>
          <span className="filmverket-card-kicker">Chronological catalogue</span>
          <h2>Timeline</h2>
        </div>
        <p>The full Film Atlas catalogue ordered by year. Select any film to return to its permanent analysis page.</p>
      </header>
      <section className="history-timeline">
        {decades.map((decade) => {
          const films = timeline.filter((scenario) => Math.floor(scenario.film.year / 10) * 10 === decade);
          return (
            <section className="history-decade" key={decade}>
              <header><span>{decade}</span><strong>{films.length} films</strong></header>
              <div>
                {films.map((scenario) => (
                  <button className="history-film" key={scenario.id} onClick={() => onSelectFilm(scenario)} type="button">
                    <span>{scenario.film.year}</span>
                    <strong>{scenario.film.title}</strong>
                    <small>{scenario.film.directors.join(", ") || "Director not registered"}</small>
                    <b>Open analysis →</b>
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
