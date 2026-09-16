import { useMemo, useState, type ChangeEvent } from "react";

import {
  FILM_CRAFT_DOMAIN_IDS,
  FILM_KNOWLEDGE_OVERLAYS_COPY,
  getFilmCraftDomainLabel,
} from "../../core/filmKnowledgeOverlaysCopy";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { filmCraftGlossary, getFilmCraftTechniques, type FilmCraftDomain } from "../data/filmCraftGlossary";
import { getClassicFilmScenarios } from "../data/filmScenarios";
import { resolveScenarioProductionBrief } from "../data/scenarioProductionBriefs";

const filmScenarios = getClassicFilmScenarios();
const craftDomainIds = FILM_CRAFT_DOMAIN_IDS.filter((domainId): domainId is FilmCraftDomain => domainId !== "all");

export function FilmCraftLibraryOverlay() {
  const [language] = useFilmWorkLanguage();
  const copy = FILM_KNOWLEDGE_OVERLAYS_COPY[language].craft;
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
        <span>{copy.triggerKicker}</span>
        <strong>{copy.triggerTitle}</strong>
      </button>

      {open && (
        <div className="craft-library-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <section aria-label={copy.dialogAria} aria-modal="true" className="craft-library-panel" onMouseDown={(event) => event.stopPropagation()} role="dialog">
            <header className="craft-library-header">
              <div>
                <span>{copy.kicker}</span>
                <h2>{copy.heading}</h2>
                <p>{copy.intro}</p>
              </div>
              <button aria-label={copy.closeAria} onClick={() => setOpen(false)} type="button">×</button>
            </header>

            <div className="craft-library-controls">
              <div className="craft-library-control-grid">
                <label>
                  <span>{copy.filmLens}</span>
                  <select onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelectedFilmId(event.target.value)} value={selectedFilmId}>
                    <option value="all">{copy.allRegisteredTechniques}</option>
                    {filmScenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}
                  </select>
                </label>
                <label>
                  <span>{copy.searchLabel}</span>
                  <input onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} type="search" value={query} />
                </label>
              </div>
              <div aria-label={copy.filterAria} className="craft-library-domains">
                <button className={domain === "all" ? "craft-domain-button craft-domain-button--active" : "craft-domain-button"} onClick={() => setDomain("all")} type="button">{getFilmCraftDomainLabel(language, "all")}</button>
                {craftDomainIds.map((domainId) => (
                  <button className={domain === domainId ? "craft-domain-button craft-domain-button--active" : "craft-domain-button"} key={domainId} onClick={() => setDomain(domainId)} type="button">
                    {getFilmCraftDomainLabel(language, domainId)}
                  </button>
                ))}
              </div>
            </div>

            <div className="craft-library-summary">
              {selectedFilm ? copy.techniquesMatched(techniques.length, selectedFilm.film.title) : copy.techniquesTotal(techniques.length, filmCraftGlossary.length)}
            </div>

            <div className="craft-library-list">
              {techniques.map((technique) => (
                <article className="craft-technique-card" key={technique.id}>
                  <div className="craft-technique-heading">
                    <span>{getFilmCraftDomainLabel(language, technique.domain)}</span>
                    <h3>{technique.name}</h3>
                  </div>
                  <p className="craft-technique-definition">{technique.definition}</p>
                  <dl>
                    <div><dt>{copy.analysisQuestion}</dt><dd>{technique.analyticalQuestion}</dd></div>
                    <div><dt>{copy.productionUse}</dt><dd>{technique.productionUse}</dd></div>
                  </dl>
                </article>
              ))}
              {techniques.length === 0 && <p className="craft-library-empty">{copy.noResults}</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}