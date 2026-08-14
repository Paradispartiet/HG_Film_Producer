import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import {
  createFilmSlug,
  type FilmverketRoute,
  type FilmverketSection,
} from "../../core/filmverketRoutes";
import { getClassicFilmScenarios, type FilmScenarioSeed } from "../data/filmScenarios";
import { resolveScenarioProductionBrief, type ScenarioProductionBrief } from "../data/scenarioProductionBriefs";
import { FilmAtlasTimeline } from "./FilmAtlasTimeline";
import { FilmverketKnowledgeShell } from "./FilmverketKnowledgeShell";

type AtlasRoute = Extract<FilmverketRoute, { readonly section: "atlas" }>;
type AtlasTab = "analysis" | "timeline";
type CraftCollectionKey = "screenplayTargets" | "cinematographyTargets" | "editingTargets" | "soundTargets";

type CraftLens = {
  readonly id: "screenplay" | "cinematography" | "editing" | "sound";
  readonly label: string;
  readonly briefKey: CraftCollectionKey;
};

const craftLenses: readonly CraftLens[] = [
  { id: "screenplay", label: "Screenplay and dramaturgy", briefKey: "screenplayTargets" },
  { id: "cinematography", label: "Cinematography and mise-en-scène", briefKey: "cinematographyTargets" },
  { id: "editing", label: "Editing and temporal construction", briefKey: "editingTargets" },
  { id: "sound", label: "Sound, music, dialogue, and silence", briefKey: "soundTargets" },
];

export function FilmAtlasExperience({
  navigate,
  onProductionCases,
  route,
}: {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly onProductionCases: () => void;
  readonly route: AtlasRoute;
}) {
  const scenarios = useMemo(() => getClassicFilmScenarios(), []);
  const [activeTab, setActiveTab] = useState<AtlasTab>("analysis");
  const requestedScenario = route.filmSlug
    ? scenarios.find((scenario) => getScenarioSlug(scenario) === route.filmSlug)
    : undefined;
  const selectedScenario = requestedScenario ?? scenarios[0];
  const missingFilm = Boolean(route.filmSlug && !requestedScenario);

  useEffect(() => {
    if (route.filmSlug) setActiveTab("analysis");
  }, [route.filmSlug]);

  useEffect(() => {
    if (missingFilm || !selectedScenario) {
      document.title = "Film Atlas · Filmverket";
      return;
    }
    document.title = activeTab === "timeline"
      ? "Timeline · Film Atlas · Filmverket"
      : `${selectedScenario.film.title} · Film Atlas · Filmverket`;
  }, [activeTab, missingFilm, selectedScenario]);

  function navigateSection(section: FilmverketSection) {
    navigate(routeForSection(section));
  }

  function openFilm(scenario: FilmScenarioSeed) {
    setActiveTab("analysis");
    navigate({ section: "atlas", filmSlug: getScenarioSlug(scenario) });
  }

  if (!selectedScenario) {
    return (
      <FilmverketKnowledgeShell activeSection="atlas" onNavigate={navigateSection}>
        <main className="filmverket-empty"><span className="filmverket-kicker">Film Atlas</span><h1>No films are available yet.</h1></main>
      </FilmverketKnowledgeShell>
    );
  }

  return (
    <FilmverketKnowledgeShell activeSection="atlas" onNavigate={navigateSection}>
      {missingFilm ? (
        <main className="filmverket-page film-route-not-found">
          <span className="filmverket-kicker">Unknown film address</span>
          <h1>Film not found</h1>
          <p>No catalogue film matches <code>{route.filmSlug}</code>. The address may be outdated or incomplete.</p>
          <button className="filmverket-primary-action" onClick={() => navigate({ section: "atlas" })} type="button">Open Film Atlas <span>→</span></button>
        </main>
      ) : (
        <FilmAtlas
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          onOpenDirector={(scenario) => navigate({ section: "director", filmSlug: getScenarioSlug(scenario) })}
          onPlayCase={onProductionCases}
          onSelectFilm={openFilm}
          scenarios={scenarios}
          selectedScenario={selectedScenario}
        />
      )}
    </FilmverketKnowledgeShell>
  );
}

function FilmAtlas({
  activeTab,
  onChangeTab,
  onOpenDirector,
  onPlayCase,
  onSelectFilm,
  scenarios,
  selectedScenario,
}: {
  readonly activeTab: AtlasTab;
  readonly onChangeTab: (tab: AtlasTab) => void;
  readonly onOpenDirector: (scenario: FilmScenarioSeed) => void;
  readonly onPlayCase: () => void;
  readonly onSelectFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
  readonly selectedScenario: FilmScenarioSeed;
}) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortOrder, setSortOrder] = useState<"catalogue" | "year" | "title">("catalogue");
  const genres = useMemo(
    () => [...new Set(scenarios.flatMap((scenario) => scenario.film.genres))].sort((a, b) => a.localeCompare(b)),
    [scenarios],
  );
  const filteredScenarios = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const filtered = scenarios.filter((scenario) => {
      const haystack = [scenario.film.title, scenario.film.original_title, ...scenario.film.directors, ...scenario.film.genres].join(" ").toLocaleLowerCase();
      return (genre === "all" || scenario.film.genres.includes(genre)) && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
    if (sortOrder === "year") return [...filtered].sort((a, b) => a.film.year - b.film.year || a.film.title.localeCompare(b.film.title));
    if (sortOrder === "title") return [...filtered].sort((a, b) => a.film.title.localeCompare(b.film.title));
    return filtered;
  }, [genre, query, scenarios, sortOrder]);
  const brief = resolveScenarioProductionBrief(selectedScenario);

  return (
    <main className="filmverket-page atlas-page">
      <section className="filmverket-page-heading">
        <div><span className="filmverket-kicker">Film construction, catalogue and chronology</span><h1>Film Atlas</h1></div>
        <p>Analyse individual films or move through the same catalogue chronologically. Film History is now the separate textbook layer.</p>
      </section>
      <nav className="film-atlas-tabs" aria-label="Film Atlas views">
        <button className={activeTab === "analysis" ? "film-atlas-tab film-atlas-tab--active" : "film-atlas-tab"} onClick={() => onChangeTab("analysis")} type="button">Film analysis</button>
        <button className={activeTab === "timeline" ? "film-atlas-tab film-atlas-tab--active" : "film-atlas-tab"} onClick={() => onChangeTab("timeline")} type="button">Timeline</button>
      </nav>
      {activeTab === "timeline" ? (
        <FilmAtlasTimeline onSelectFilm={onSelectFilm} scenarios={scenarios} />
      ) : (
        <section className="atlas-workspace">
          <aside className="atlas-library">
            <div className="atlas-controls">
              <label><span>Search</span><input onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder="Film, director, genre…" type="search" value={query} /></label>
              <div className="atlas-control-row">
                <label><span>Genre</span><select onChange={(event: ChangeEvent<HTMLSelectElement>) => setGenre(event.target.value)} value={genre}><option value="all">All genres</option>{genres.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
                <label><span>Order</span><select onChange={(event: ChangeEvent<HTMLSelectElement>) => setSortOrder(event.target.value as "catalogue" | "year" | "title")} value={sortOrder}><option value="catalogue">Catalogue</option><option value="year">Year</option><option value="title">Title</option></select></label>
              </div>
            </div>
            <div className="atlas-result-count"><strong>{filteredScenarios.length}</strong> films shown</div>
            <div className="atlas-film-list">
              {filteredScenarios.map((scenario) => (
                <button className={selectedScenario.id === scenario.id ? "atlas-film-row atlas-film-row--active" : "atlas-film-row"} key={scenario.id} onClick={() => onSelectFilm(scenario)} type="button"><span>{scenario.film.year}</span><strong>{scenario.film.title}</strong><small>{scenario.film.directors.join(", ") || "Director not registered"}</small></button>
              ))}
              {filteredScenarios.length === 0 && <p className="atlas-no-results">No films match these filters.</p>}
            </div>
          </aside>
          <FilmAnalysisPage brief={brief} onOpenDirector={() => onOpenDirector(selectedScenario)} onPlayCase={onPlayCase} onSelectFilm={onSelectFilm} scenario={selectedScenario} scenarios={scenarios} />
        </section>
      )}
    </main>
  );
}

function FilmAnalysisPage({ brief, onOpenDirector, onPlayCase, onSelectFilm, scenario, scenarios }: {
  readonly brief: ScenarioProductionBrief;
  readonly onOpenDirector: () => void;
  readonly onPlayCase: () => void;
  readonly onSelectFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenario: FilmScenarioSeed;
  readonly scenarios: readonly FilmScenarioSeed[];
}) {
  const sorted = [...scenarios].sort((a, b) => a.film.year - b.film.year || a.film.title.localeCompare(b.film.title));
  const historicalIndex = sorted.findIndex((candidate) => candidate.id === scenario.id);
  const previousFilm = historicalIndex > 0 ? sorted[historicalIndex - 1] : undefined;
  const nextFilm = historicalIndex >= 0 && historicalIndex < sorted.length - 1 ? sorted[historicalIndex + 1] : undefined;
  const [copied, setCopied] = useState(false);

  async function copyFilmLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="film-analysis">
      <header className="film-analysis-hero"><div className="film-analysis-index" aria-hidden="true">{String(Math.max(1, historicalIndex + 1)).padStart(3, "0")}</div><div className="film-analysis-title"><span>{scenario.film.year} · {scenario.film.runtime_mins > 0 ? `${scenario.film.runtime_mins} min` : "Runtime not registered"}</span><h2>{scenario.film.title}</h2>{scenario.film.original_title && scenario.film.original_title !== scenario.film.title && <p className="film-original-title">{scenario.film.original_title}</p>}<p>{scenario.film.directors.join(", ") || "Director not registered"}</p></div><div className="film-analysis-rating"><small>Catalogue rating</small><strong>{scenario.film.imdb_rating > 0 ? scenario.film.imdb_rating.toFixed(1) : "—"}</strong><span>/ 10</span></div></header>
      <div className="film-analysis-tags">{scenario.film.genres.map((item) => <span key={item}>{item}</span>)}<span>{labelVerification(brief.verificationStatus)}</span></div>
      <p className="film-analysis-logline">{brief.logline}</p>
      <section className="film-analysis-overview-grid"><AnalysisList title="Genre construction" items={brief.genreTargets} /><AnalysisList title="Tone and affect" items={brief.toneTargets} /></section>
      <section className="film-craft-grid">{craftLenses.map((lens) => <AnalysisList key={lens.id} title={lens.label} items={brief[lens.briefKey]} />)}</section>
      <section className="film-learning-section"><div><span className="filmverket-card-kicker">What this film can teach</span><h3>Film-science learning goals</h3></div><ol>{brief.learningGoals.map((goal) => <li key={goal}>{goal}</li>)}</ol></section>
      <section className="film-history-position"><div><span className="filmverket-card-kicker">Historical placement inside the catalogue</span><h3>{getDecade(scenario.film.year)} cinema</h3><p>This work is film {historicalIndex + 1} of {sorted.length} in the current chronological catalogue.</p></div><div className="film-history-neighbours"><button disabled={!previousFilm} onClick={() => previousFilm && onSelectFilm(previousFilm)} type="button"><small>Previous</small><strong>{previousFilm ? `${previousFilm.film.year} · ${previousFilm.film.title}` : "Start of catalogue"}</strong></button><button disabled={!nextFilm} onClick={() => nextFilm && onSelectFilm(nextFilm)} type="button"><small>Next</small><strong>{nextFilm ? `${nextFilm.film.year} · ${nextFilm.film.title}` : "End of catalogue"}</strong></button></div></section>
      <div className="film-analysis-actions"><button className="filmverket-primary-action" onClick={onOpenDirector} type="button">Open in Director Lab <span>→</span></button><button className="filmverket-secondary-action" onClick={onPlayCase} type="button">Open Production Cases</button><button className="filmverket-secondary-action" onClick={copyFilmLink} type="button">{copied ? "Link copied" : "Copy film link"}</button></div>
    </article>
  );
}

function AnalysisList({ items, title }: { readonly items: readonly string[]; readonly title: string }) {
  return <section className="analysis-list"><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

function getScenarioSlug(scenario: FilmScenarioSeed): string {
  return createFilmSlug(scenario.film.title, scenario.film.year);
}

function getDecade(year: number) {
  return `${Math.floor(year / 10) * 10}s`;
}

function labelVerification(status: ScenarioProductionBrief["verificationStatus"]) {
  if (status === "verified") return "Research verified";
  if (status === "seeded") return "Seeded analysis";
  return "Research enrichment pending";
}

function routeForSection(section: FilmverketSection): FilmverketRoute {
  switch (section) {
    case "home": return { section: "home" };
    case "producer": return { section: "producer" };
    case "atlas": return { section: "atlas" };
    case "director": return { section: "director" };
    case "school": return { section: "school" };
    case "history": return { section: "history" };
    case "research": return { section: "research" };
  }
}
