import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import {
  FILM_ATLAS_COPY,
  getFilmAtlasVerificationLabel,
  type FilmAtlasSortId,
  type FilmAtlasTabId,
} from "../../core/filmAtlasCopy";
import type { FilmWorkLanguage } from "../../core/filmWorkLanguage";
import {
  createFilmSlug,
  type FilmverketRoute,
  type FilmverketSection,
} from "../../core/filmverketRoutes";
import { useFilmWorkLanguage } from "../filmWorkLanguage";
import { getClassicFilmScenarios, type FilmScenarioSeed } from "../data/filmScenarios";
import { resolveScenarioProductionBrief, type ScenarioProductionBrief } from "../data/scenarioProductionBriefs";
import { FilmAtlasTimeline } from "./FilmAtlasTimeline";
import { FilmverketKnowledgeShell } from "./FilmverketKnowledgeShell";

type AtlasRoute = Extract<FilmverketRoute, { readonly section: "atlas" }>;
type CraftCollectionKey = "screenplayTargets" | "cinematographyTargets" | "editingTargets" | "soundTargets";

type CraftLens = {
  readonly id: "screenplay" | "cinematography" | "editing" | "sound";
  readonly briefKey: CraftCollectionKey;
};

const craftLenses: readonly CraftLens[] = [
  { id: "screenplay", briefKey: "screenplayTargets" },
  { id: "cinematography", briefKey: "cinematographyTargets" },
  { id: "editing", briefKey: "editingTargets" },
  { id: "sound", briefKey: "soundTargets" },
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
  const [language] = useFilmWorkLanguage();
  const copy = FILM_ATLAS_COPY[language];
  const scenarios = useMemo(() => getClassicFilmScenarios(), []);
  const [activeTab, setActiveTab] = useState<FilmAtlasTabId>("analysis");
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
      document.title = `${copy.productTitle} · FilmWork`;
      return;
    }
    document.title = activeTab === "timeline"
      ? `${copy.documentTimeline} · ${copy.productTitle} · FilmWork`
      : `${selectedScenario.film.title} · ${copy.productTitle} · FilmWork`;
  }, [activeTab, copy, missingFilm, selectedScenario]);

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
        <main className="filmverket-empty"><span className="filmverket-kicker">{copy.productTitle}</span><h1>{copy.noFilmsAvailable}</h1></main>
      </FilmverketKnowledgeShell>
    );
  }

  return (
    <FilmverketKnowledgeShell activeSection="atlas" onNavigate={navigateSection}>
      {missingFilm ? (
        <main className="filmverket-page film-route-not-found">
          <span className="filmverket-kicker">{copy.notFound.kicker}</span>
          <h1>{copy.notFound.title}</h1>
          <p>{copy.notFound.description(route.filmSlug ?? "")}</p>
          <button className="filmverket-primary-action" onClick={() => navigate({ section: "atlas" })} type="button">{copy.notFound.openAtlas} <span>→</span></button>
        </main>
      ) : (
        <FilmAtlas
          activeTab={activeTab}
          language={language}
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
  language,
  onChangeTab,
  onOpenDirector,
  onPlayCase,
  onSelectFilm,
  scenarios,
  selectedScenario,
}: {
  readonly activeTab: FilmAtlasTabId;
  readonly language: FilmWorkLanguage;
  readonly onChangeTab: (tab: FilmAtlasTabId) => void;
  readonly onOpenDirector: (scenario: FilmScenarioSeed) => void;
  readonly onPlayCase: () => void;
  readonly onSelectFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
  readonly selectedScenario: FilmScenarioSeed;
}) {
  const copy = FILM_ATLAS_COPY[language];
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortOrder, setSortOrder] = useState<FilmAtlasSortId>("catalogue");
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
        <div><span className="filmverket-kicker">{copy.pageKicker}</span><h1>{copy.productTitle}</h1></div>
        <p>{copy.pageIntro}</p>
      </section>
      <nav className="film-atlas-tabs" aria-label={copy.viewsAria}>
        <button className={activeTab === "analysis" ? "film-atlas-tab film-atlas-tab--active" : "film-atlas-tab"} onClick={() => onChangeTab("analysis")} type="button">{copy.tabs.analysis}</button>
        <button className={activeTab === "timeline" ? "film-atlas-tab film-atlas-tab--active" : "film-atlas-tab"} onClick={() => onChangeTab("timeline")} type="button">{copy.tabs.timeline}</button>
      </nav>
      {activeTab === "timeline" ? (
        <FilmAtlasTimeline language={language} onSelectFilm={onSelectFilm} scenarios={scenarios} />
      ) : (
        <section className="atlas-workspace">
          <aside className="atlas-library">
            <div className="atlas-controls">
              <label><span>{copy.controls.search}</span><input onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} placeholder={copy.controls.searchPlaceholder} type="search" value={query} /></label>
              <div className="atlas-control-row">
                <label><span>{copy.controls.genre}</span><select onChange={(event: ChangeEvent<HTMLSelectElement>) => setGenre(event.target.value)} value={genre}><option value="all">{copy.controls.allGenres}</option>{genres.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
                <label><span>{copy.controls.order}</span><select onChange={(event: ChangeEvent<HTMLSelectElement>) => setSortOrder(event.target.value as FilmAtlasSortId)} value={sortOrder}><option value="catalogue">{copy.sortOptions.catalogue}</option><option value="year">{copy.sortOptions.year}</option><option value="title">{copy.sortOptions.title}</option></select></label>
              </div>
            </div>
            <div className="atlas-result-count"><strong>{filteredScenarios.length}</strong> {copy.resultsShown(filteredScenarios.length).replace(String(filteredScenarios.length), "").trim()}</div>
            <div className="atlas-film-list">
              {filteredScenarios.map((scenario) => (
                <button className={selectedScenario.id === scenario.id ? "atlas-film-row atlas-film-row--active" : "atlas-film-row"} key={scenario.id} onClick={() => onSelectFilm(scenario)} type="button"><span>{scenario.film.year}</span><strong>{scenario.film.title}</strong><small>{scenario.film.directors.join(", ") || copy.directorNotRegistered}</small></button>
              ))}
              {filteredScenarios.length === 0 && <p className="atlas-no-results">{copy.noResults}</p>}
            </div>
          </aside>
          <FilmAnalysisPage brief={brief} language={language} onOpenDirector={() => onOpenDirector(selectedScenario)} onPlayCase={onPlayCase} onSelectFilm={onSelectFilm} scenario={selectedScenario} scenarios={scenarios} />
        </section>
      )}
    </main>
  );
}

function FilmAnalysisPage({ brief, language, onOpenDirector, onPlayCase, onSelectFilm, scenario, scenarios }: {
  readonly brief: ScenarioProductionBrief;
  readonly language: FilmWorkLanguage;
  readonly onOpenDirector: () => void;
  readonly onPlayCase: () => void;
  readonly onSelectFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenario: FilmScenarioSeed;
  readonly scenarios: readonly FilmScenarioSeed[];
}) {
  const copy = FILM_ATLAS_COPY[language];
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
      <header className="film-analysis-hero"><div className="film-analysis-index" aria-hidden="true">{String(Math.max(1, historicalIndex + 1)).padStart(3, "0")}</div><div className="film-analysis-title"><span>{scenario.film.year} · {scenario.film.runtime_mins > 0 ? `${scenario.film.runtime_mins} min` : copy.runtimeNotRegistered}</span><h2>{scenario.film.title}</h2>{scenario.film.original_title && scenario.film.original_title !== scenario.film.title && <p className="film-original-title">{scenario.film.original_title}</p>}<p>{scenario.film.directors.join(", ") || copy.directorNotRegistered}</p></div><div className="film-analysis-rating"><small>{copy.catalogueRating}</small><strong>{scenario.film.imdb_rating > 0 ? scenario.film.imdb_rating.toFixed(1) : "—"}</strong><span>/ 10</span></div></header>
      <div className="film-analysis-tags">{scenario.film.genres.map((item) => <span key={item}>{item}</span>)}<span>{getFilmAtlasVerificationLabel(language, brief.verificationStatus)}</span></div>
      <p className="film-analysis-logline">{brief.logline}</p>
      <section className="film-analysis-overview-grid"><AnalysisList title={copy.analysis.genreConstruction} items={brief.genreTargets} /><AnalysisList title={copy.analysis.toneAndAffect} items={brief.toneTargets} /></section>
      <section className="film-craft-grid">{craftLenses.map((lens) => <AnalysisList key={lens.id} title={copy.analysis.craftLenses[lens.id]} items={brief[lens.briefKey]} />)}</section>
      <section className="film-learning-section"><div><span className="filmverket-card-kicker">{copy.analysis.learningKicker}</span><h3>{copy.analysis.learningGoals}</h3></div><ol>{brief.learningGoals.map((goal) => <li key={goal}>{goal}</li>)}</ol></section>
      <section className="film-history-position"><div><span className="filmverket-card-kicker">{copy.analysis.historyKicker}</span><h3>{copy.analysis.decadeCinema(getDecade(scenario.film.year))}</h3><p>{copy.analysis.cataloguePosition(historicalIndex + 1, sorted.length)}</p></div><div className="film-history-neighbours"><button disabled={!previousFilm} onClick={() => previousFilm && onSelectFilm(previousFilm)} type="button"><small>{copy.analysis.previous}</small><strong>{previousFilm ? copy.analysis.previousFilm(`${previousFilm.film.year} · ${previousFilm.film.title}`) : copy.analysis.startOfCatalogue}</strong></button><button disabled={!nextFilm} onClick={() => nextFilm && onSelectFilm(nextFilm)} type="button"><small>{copy.analysis.next}</small><strong>{nextFilm ? copy.analysis.nextFilm(`${nextFilm.film.year} · ${nextFilm.film.title}`) : copy.analysis.endOfCatalogue}</strong></button></div></section>
      <div className="film-analysis-actions"><button className="filmverket-primary-action" onClick={onOpenDirector} type="button">{copy.actions.directorLab} <span>→</span></button><button className="filmverket-secondary-action" onClick={onPlayCase} type="button">{copy.actions.openProductionCases}</button><button className="filmverket-secondary-action" onClick={copyFilmLink} type="button">{copied ? copy.actions.linkCopied : copy.actions.copyFilmLink}</button></div>
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
