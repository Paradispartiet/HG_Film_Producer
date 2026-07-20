import { useMemo, useState, type ChangeEvent } from "react";

import { filmCraftGlossary, type FilmCraftDomain } from "../data/filmCraftGlossary";

const domainLabels: Record<FilmCraftDomain, string> = {
  screenplay: "Screenplay",
  cinematography: "Image",
  editing: "Editing",
  sound: "Sound",
};

export function FilmCraftLibraryOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<FilmCraftDomain | "all">("all");

  const techniques = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return filmCraftGlossary.filter((technique) => {
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
  }, [domain, query]);

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
              <label>
                <span>Search technique or function</span>
                <input onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder="Example: silence, blocking, rhythm…" type="search" value={query} />
              </label>
              <div aria-label="Filter by craft domain" className="craft-library-domains">
                <button className={domain === "all" ? "craft-domain-button craft-domain-button--active" : "craft-domain-button"} onClick={() => setDomain("all")} type="button">All</button>
                {(Object.keys(domainLabels) as FilmCraftDomain[]).map((domainId) => (
                  <button className={domain === domainId ? "craft-domain-button craft-domain-button--active" : "craft-domain-button"} key={domainId} onClick={() => setDomain(domainId)} type="button">
                    {domainLabels[domainId]}
                  </button>
                ))}
              </div>
            </div>

            <div className="craft-library-summary"><strong>{techniques.length}</strong> of {filmCraftGlossary.length} techniques</div>

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
              {techniques.length === 0 && <p className="craft-library-empty">No techniques match this search.</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
