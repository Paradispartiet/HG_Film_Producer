import { useMemo, useState } from "react";
import { getClassicFilmScenarios } from "../data/filmScenarios";

export function FilmScenarioLibrary() {
  const [query, setQuery] = useState("");
  const scenarios = getClassicFilmScenarios();
  const normalizedQuery = query.trim().toLowerCase();
  const filteredScenarios = useMemo(() => {
    if (!normalizedQuery) return scenarios;
    return scenarios.filter((scenario) => {
      const searchable = [
        scenario.film.title,
        scenario.film.original_title,
        ...scenario.film.directors,
        ...scenario.film.genres,
        ...scenario.film.genre_keys,
      ].join(" ").toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [normalizedQuery, scenarios]);

  return (
    <main className="scenario-library">
      <div className="scenario-library-header">
        <div>
          <span className="eyebrow">Seed catalogue</span>
          <h2>Classic production scenarios</h2>
        </div>
        <p>{scenarios.length} scenarios from the classic film seed file. Pick a reference point now; production simulation hooks arrive later.</p>
      </div>
      <label className="scenario-search">
        <span>Search by title, director, or genre</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try kubrick, crime, or The Machinist" type="search" />
      </label>
      <div className="scenario-meta" aria-live="polite">
        Showing <strong>{filteredScenarios.length}</strong> of <strong>{scenarios.length}</strong> scenarios
      </div>
      <div className="scenario-grid">
        {filteredScenarios.map((scenario) => (
          <article className="scenario-card" key={scenario.id}>
            <div className="scenario-card-topline">
              <span>#{scenario.source.position}</span>
              <span>{scenario.scenario_type}</span>
            </div>
            <h3>{scenario.film.title}</h3>
            <dl className="scenario-meta">
              <div><dt>Year</dt><dd>{scenario.film.year}</dd></div>
              <div><dt>Director</dt><dd>{scenario.film.directors.join(", ")}</dd></div>
            </dl>
            <div className="scenario-tags" aria-label={`Genres for ${scenario.film.title}`}>
              {scenario.film.genres.map((genre) => <span key={genre}>{genre}</span>)}
            </div>
            <p>{scenario.production_challenge}</p>
            <button className="secondary-button" disabled type="button">Start scenario</button>
          </article>
        ))}
      </div>
    </main>
  );
}
