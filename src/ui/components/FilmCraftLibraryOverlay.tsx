import { useMemo, useState, type ChangeEvent } from "react";

import { filmCraftGlossary, getFilmCraftTechniques, type FilmCraftDomain } from "../data/filmCraftGlossary";
import { getClassicFilmScenarios } from "../data/filmScenarios";
import { resolveScenarioProductionBrief } from "../data/scenarioProductionBriefs";

const domainLabels: Record<FilmCraftDomain, string> = {
  screenplay: "Screenplay",
  cinematography: "Image",
  editing: "Editing",
  sound: "Sound",
};

const filmScenarios = getClassicFilmScenarios();

export function FilmCraftLibraryOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<FilmCraftDomain | "all">("all");
  const [selectedFilmId, setSelectedFilmId] = useState("all");

  const selectedFilm = filmScenarios.find((scenario) => scenario.id === selectedFilmId);
  const filmMatchedTechniques = useMemo(() => {
    if (!selectedFilm) return filmCraftGlossary;
    return getFilmCraftTechniques(resolveScenarioProductionBrief(selectedFilm), filmCraftGlossary.length);
  }, [selectedFilm]);

  const techniques = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return filmMatchedTechniques.filter((technique) => {
      const matchesDomain = domain === "all" || technique.domain === domain;
      const searchableText = [
        technique.name,
        technique.definition,
        technique.analyticalQuestion,
        technique.productionUse,
        ...technique.keywords,
      ].join(" ").toLocaleLowerCase();
      return matchesDomain && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [domain, filmMatchedTechniques, query]);

  return (
    <>
      <button className="craft-library-trigger" onClick={() => setOpen(true)} type="button">
        <span>Film science</span>
        <strong>Craft library</strong>
      </button>

      {open && (
        <div className="craft-library-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <section aria-label="Film craft library" aria-modal="true" className="craft-library-panel" onMouseDown={(event) => event.stopPropagation()} role="dialog">
            <header className="craft-library-header">
              <div>
                <span>Filmverket knowledge system</span>
                <h2>Craft library</h2>
                <p>Formal techniques described as observable construction—not vague style labels.</p>
              </div>
              <button aria-label="Close craft library" onClick={() => setOpen(false)} type="button">×</button>
            </header>

            <div className="craft-library-controls">
              <div className="craft-library-control-grid">
                <label>
                  <span>Film lens</span>
                  <select onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelectedFilmId(event.target.value)} value={selectedFilmId}>
                    <option value="all">All registered techniques</option>
                    {filmScenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}
                  </select>
                </label>
                <label>
                  <span>Search technique or function</span>
                  <input onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder="Example: silence, blocking, rhythm…" type="search" value={query} />
                </label>
              </div>
              <div aria-label="Filter by craft domain" className="craft-library-domains">
                <button className={domain === "all" ? "craft-domain-button craft-domain-button--active" : "craft-domain-button"} onClick={() => setDomain("all")} type="button">All</button>
                {(Object.keys(domainLabels) as FilmCraftDomain[]).map((domainId) => (
                  <button className={domain === domainId ? "craft-domain-button craft-domain-button--active" : "craft-domain-button"} key={domainId} onClick={() => setDomain(domainId)} type="button">
                    {domainLabels[domainId]}
                  </button>
                ))}
              </div>
            </div>

            <div className="craft-library-summary">
              <strong>{techniques.length}</strong> {selectedFilm ? `techniques matched to ${selectedFilm.film.title}` : `of ${filmCraftGlossary.length} techniques`}
            </div>

            <div className="craft-library-list">
              {techniques.map((technique) => (
                <article className="craft-technique-card" key={technique.id}>
                  <div className="craft-technique-heading">
                    <span>{domainLabels[technique.domain]}</span>
                    <h3>{technique.name}</h3>
                  </div>
                  <p className="craft-technique-definition">{technique.definition}</p>
                  <dl>
                    <div><dt>Analysis question</dt><dd>{technique.analyticalQuestion}</dd></div>
                    <div><dt>Production use</dt><dd>{technique.productionUse}</dd></div>
                  </dl>
                </article>
              ))}
              {techniques.length === 0 && <p className="craft-library-empty">No techniques match this film and filter yet.</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
