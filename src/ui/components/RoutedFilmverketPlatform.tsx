import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import {
  createFilmSlug,
  type FilmverketRoute,
  type FilmverketSection,
} from "../../core/filmverketRoutes";
import { getClassicFilmScenarios, type FilmScenarioSeed } from "../data/filmScenarios";
import { resolveScenarioProductionBrief, type ScenarioProductionBrief } from "../data/scenarioProductionBriefs";

type CraftCollectionKey = "screenplayTargets" | "cinematographyTargets" | "editingTargets" | "soundTargets";

type RoutedFilmverketPlatformProps = {
  readonly hasSave: boolean;
  readonly navigate: (route: FilmverketRoute) => void;
  readonly onContinue: () => void;
  readonly onProductionCases: () => void;
  readonly onStart: () => void;
  readonly route: FilmverketRoute;
};

type CraftLens = {
  readonly id: "screenplay" | "cinematography" | "editing" | "sound";
  readonly label: string;
  readonly shortLabel: string;
  readonly briefKey: CraftCollectionKey;
  readonly question: string;
};

const craftLenses: readonly CraftLens[] = [
  {
    id: "screenplay",
    label: "Screenplay and dramaturgy",
    shortLabel: "Screenplay",
    briefKey: "screenplayTargets",
    question: "How does the film organize information, pressure, character, and change?",
  },
  {
    id: "cinematography",
    label: "Cinematography and mise-en-scène",
    shortLabel: "Image",
    briefKey: "cinematographyTargets",
    question: "How do framing, space, bodies, light, and visual design create meaning?",
  },
  {
    id: "editing",
    label: "Editing and temporal construction",
    shortLabel: "Editing",
    briefKey: "editingTargets",
    question: "How do duration, order, repetition, contrast, and rhythm control the experience?",
  },
  {
    id: "sound",
    label: "Sound, music, dialogue, and silence",
    shortLabel: "Sound",
    briefKey: "soundTargets",
    question: "How does the soundtrack guide attention, space, emotion, and expectation?",
  },
];

const schoolCourses: readonly {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
}[] = [
  { id: "dramaturgy", number: "01", title: "Dramaturgy and screenplay construction", description: "Character pressure, information control, scene purpose, structure, point of view, and dramatic escalation." },
  { id: "image", number: "02", title: "Cinematography and visual meaning", description: "Composition, blocking, movement, spatial systems, light, lenses, production design, and visual style." },
  { id: "time", number: "03", title: "Editing, rhythm, and cinematic time", description: "Continuity, montage, duration, ellipsis, repetition, parallel action, reaction, and information timing." },
  { id: "sound", number: "04", title: "Sound and audiovisual perception", description: "Dialogue, ambience, music, silence, sonic perspective, off-screen space, repetition, and emotional pressure." },
  { id: "history", number: "05", title: "Film history, movements, and influence", description: "Place individual works inside periods, genres, national cinemas, technological change, and formal traditions." },
  { id: "analysis", number: "06", title: "Film analysis as a complete method", description: "Combine formal evidence, historical context, production choices, interpretation, and comparative viewing." },
];

export function RoutedFilmverketPlatform({
  hasSave,
  navigate,
  onContinue,
  onProductionCases,
  onStart,
  route,
}: RoutedFilmverketPlatformProps) {
  const scenarios = useMemo(() => getClassicFilmScenarios(), []);
  const [directorLensId, setDirectorLensId] = useState<CraftLens["id"]>("cinematography");
  const requestedFilmSlug = getRouteFilmSlug(route);
  const requestedScenario = requestedFilmSlug
    ? scenarios.find((scenario) => getScenarioSlug(scenario) === requestedFilmSlug)
    : undefined;
  const selectedScenario = requestedScenario ?? scenarios[0];
  const missingFilm = Boolean(requestedFilmSlug && !requestedScenario);

  useEffect(() => {
    document.title = createDocumentTitle(route.section, missingFilm ? undefined : selectedScenario);
  }, [missingFilm, route.section, selectedScenario]);

  function navigateSection(section: FilmverketSection) {
    navigate(routeForSection(section));
  }

  function openFilm(scenario: FilmScenarioSeed, destination: "atlas" | "director" = "atlas") {
    const filmSlug = getScenarioSlug(scenario);
    navigate(destination === "atlas" ? { section: "atlas", filmSlug } : { section: "director", filmSlug });
  }

  if (!selectedScenario) {
    return (
      <main className="filmverket-empty">
        <span className="filmverket-kicker">Filmverket</span>
        <h1>No films are available yet.</h1>
      </main>
    );
  }

  return (
    <div className="filmverket-shell">
      <PlatformHeader activeSection={route.section} onNavigate={navigateSection} />
      {missingFilm ? (
        <FilmRouteNotFound onOpenAtlas={() => navigate({ section: "atlas" })} requestedSlug={requestedFilmSlug ?? ""} />
      ) : (
        <>
          {route.section === "home" && <PlatformHome onNavigate={navigateSection} scenarios={scenarios} />}
          {route.section === "producer" && (
            <ProducerGateway hasSave={hasSave} onContinue={onContinue} onProductionCases={onProductionCases} onStart={onStart} />
          )}
          {route.section === "atlas" && (
            <FilmAtlas
              onOpenDirector={(scenario) => openFilm(scenario, "director")}
              onPlayCase={onProductionCases}
              onSelectFilm={openFilm}
              scenarios={scenarios}
              selectedScenario={selectedScenario}
            />
          )}
          {route.section === "director" && (
            <DirectorLab
              activeLensId={directorLensId}
              onChangeLens={setDirectorLensId}
              onSelectFilm={(scenario) => openFilm(scenario, "director")}
              scenarios={scenarios}
              selectedScenario={selectedScenario}
            />
          )}
          {route.section === "school" && <FilmSchool onOpenFilm={openFilm} scenarios={scenarios} />}
          {route.section === "history" && <FilmHistory onOpenFilm={openFilm} scenarios={scenarios} />}
          {route.section === "research" && <ResearchRouteBackground />}
        </>
      )}
      <footer className="filmverket-footer">
        <span>Filmverket</span>
        <span>Film Producer · Film Atlas · Director Lab · Film School · Film History · Research Control</span>
      </footer>
    </div>
  );
}

function PlatformHeader({ activeSection, onNavigate }: {
  readonly activeSection: FilmverketSection;
  readonly onNavigate: (section: FilmverketSection) => void;
}) {
  const items: readonly { readonly id: FilmverketSection; readonly label: string }[] = [
    { id: "home", label: "Front page" },
    { id: "producer", label: "Film Producer" },
    { id: "atlas", label: "Film Atlas" },
    { id: "director", label: "Director Lab" },
    { id: "school", label: "Film School" },
    { id: "history", label: "Film History" },
    { id: "research", label: "Research" },
  ];

  return (
    <header className="filmverket-header">
      <button className="filmverket-brand" onClick={() => onNavigate("home")} type="button">
        <span>FV</span>
        <strong>Filmverket</strong>
      </button>
      <nav aria-label="Filmverket sections">
        {items.map((item) => (
          <button
            className={activeSection === item.id ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"}
            key={item.id}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function PlatformHome({ onNavigate, scenarios }: {
  readonly onNavigate: (section: FilmverketSection) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
}) {
  const years = scenarios.map((scenario) => scenario.film.year).filter((year) => year > 0);
  const firstYear = years.length > 0 ? Math.min(...years) : 1895;
  const lastYear = years.length > 0 ? Math.max(...years) : new Date().getFullYear();
  const craftCount = countCraftStatements(scenarios);
  const gateways: readonly {
    readonly id: FilmverketSection;
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly action: string;
    readonly status: string;
  }[] = [
    { id: "producer", eyebrow: "The game", title: "Film Producer", description: "Run productions, make pressured choices, complete Production Cases, and build an experimental studio career.", action: "Enter the studio", status: "Playable" },
    { id: "atlas", eyebrow: "The knowledge platform", title: "Film Atlas", description: "Open a film and examine its screenplay, image, editing, sound, tone, learning goals, and historical position.", action: "Explore films", status: `${scenarios.length} films` },
    { id: "director", eyebrow: "Analysis into practice", title: "Director Lab", description: "Study one film through a chosen craft lens and turn its construction principles into a director's brief.", action: "Open the lab", status: "Working foundation" },
    { id: "school", eyebrow: "Structured learning", title: "Film School", description: "Follow film-science learning paths built from the same techniques and works used by the game and atlas.", action: "Browse courses", status: "6 core courses" },
    { id: "history", eyebrow: "Cinema through time", title: "Film History", description: "Browse the catalogue chronologically and move from periods and decades into individual film construction.", action: "Open the timeline", status: `${firstYear}–${lastYear}` },
    { id: "research", eyebrow: "Editorial control", title: "Research Control", description: "Separate verified film knowledge from provisional seeds and prioritize the next research work.", action: "Open control room", status: "Live queue" },
  ];

  return (
    <main className="filmverket-home">
      <section className="filmverket-hero">
        <div className="filmverket-hero-mark" aria-hidden="true"><span>FV</span></div>
        <span className="filmverket-kicker">A film game and film-science platform</span>
        <h1>Film<em>verket</em></h1>
        <p>Make film. Understand film.</p>
        <div className="filmverket-hero-stats" aria-label="Platform content summary">
          <span><strong>{scenarios.length}</strong> films</span>
          <span><strong>{craftCount}</strong> craft statements</span>
          <span><strong>6</strong> connected entrances</span>
        </div>
      </section>
      <section className="filmverket-gateway-grid" aria-label="Filmverket entrances">
        {gateways.map((gateway, index) => (
          <button className={index === 0 ? "filmverket-gateway filmverket-gateway--primary" : "filmverket-gateway"} key={gateway.id} onClick={() => onNavigate(gateway.id)} type="button">
            <span className="filmverket-gateway-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="filmverket-gateway-copy"><small>{gateway.eyebrow}</small><strong>{gateway.title}</strong><span>{gateway.description}</span></span>
            <span className="filmverket-gateway-meta"><small>{gateway.status}</small><b>{gateway.action} →</b></span>
          </button>
        ))}
      </section>
    </main>
  );
}

function ProducerGateway({ hasSave, onContinue, onProductionCases, onStart }: Omit<RoutedFilmverketPlatformProps, "navigate" | "route">) {
  return (
    <main className="filmverket-page filmverket-producer-page">
      <section className="filmverket-page-hero filmverket-page-hero--producer">
        <div><span className="filmverket-kicker">The playable production game</span><h1>Film <em>Producer</em></h1><p>Make the project possible. Choose what the film becomes, assemble the production, survive the shoot, shape post-production, and face the release.</p></div>
        <aside><span>Why “Producer”?</span><p>The game follows the whole film project—not only the artistic decisions made on set. Directing is a focused craft layer inside the wider production system.</p></aside>
      </section>
      <section className="producer-mode-grid">
        <article className="producer-mode-card producer-mode-card--recommended">
          <span className="filmverket-card-kicker">Recommended first</span><h2>Production Cases</h2><p>Reconstruct the production logic of known films through screenplay, cinematography, editing, sound, and reflection missions.</p>
          <ul><li>Stable MVP path</li><li>Film-history examples</li><li>Case report and learning recap</li></ul>
          <button className="filmverket-primary-action" onClick={onProductionCases} type="button">Start Production Cases <span>→</span></button>
        </article>
        <article className="producer-mode-card">
          <span className="filmverket-card-kicker">Experimental branch</span><h2>Studio Career</h2><p>Create projects and carry a studio through development, pre-production, shooting, post-production, release, and career consequences.</p>
          <ul><li>Persistent studio state</li><li>Multi-film pipeline</li><li>Broader simulator foundation</li></ul>
          <div className="producer-mode-actions">{hasSave && <button className="filmverket-primary-action" onClick={onContinue} type="button">Continue career <span>→</span></button>}<button className="filmverket-secondary-action" onClick={onStart} type="button">Start new career</button></div>
        </article>
      </section>
    </main>
  );
}

function FilmAtlas({ onOpenDirector, onPlayCase, onSelectFilm, scenarios, selectedScenario }: {
  readonly onOpenDirector: (scenario: FilmScenarioSeed) => void;
  readonly onPlayCase: () => void;
  readonly onSelectFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
  readonly selectedScenario: FilmScenarioSeed;
}) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortOrder, setSortOrder] = useState<"catalogue" | "year" | "title">("catalogue");
  const genres = useMemo(() => [...new Set(scenarios.flatMap((scenario) => scenario.film.genres))].sort((a, b) => a.localeCompare(b)), [scenarios]);
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
      <section className="filmverket-page-heading"><div><span className="filmverket-kicker">Film construction and film science</span><h1>Film Atlas</h1></div><p>Every selected film now has a stable, shareable address that survives reloads and browser navigation.</p></section>
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

function DirectorLab({ activeLensId, onChangeLens, onSelectFilm, scenarios, selectedScenario }: {
  readonly activeLensId: CraftLens["id"];
  readonly onChangeLens: (lensId: CraftLens["id"]) => void;
  readonly onSelectFilm: (scenario: FilmScenarioSeed) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
  readonly selectedScenario: FilmScenarioSeed;
}) {
  const activeLens = craftLenses.find((lens) => lens.id === activeLensId) ?? craftLenses[0];
  const brief = resolveScenarioProductionBrief(selectedScenario);
  if (!activeLens) return null;
  const principles = brief[activeLens.briefKey];
  return (
    <main className="filmverket-page director-page">
      <section className="filmverket-page-heading"><div><span className="filmverket-kicker">From analysis to artistic decisions</span><h1>Director Lab</h1></div><p>The selected reference film is encoded in the address, so a directing study can be reopened or shared directly.</p></section>
      <section className="director-toolbar"><label><span>Reference film</span><select onChange={(event: ChangeEvent<HTMLSelectElement>) => { const scenario = scenarios.find((candidate) => candidate.id === event.target.value); if (scenario) onSelectFilm(scenario); }} value={selectedScenario.id}>{scenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}</select></label><div className="director-lenses" aria-label="Director craft lens">{craftLenses.map((lens) => <button className={activeLens.id === lens.id ? "director-lens director-lens--active" : "director-lens"} key={lens.id} onClick={() => onChangeLens(lens.id)} type="button">{lens.shortLabel}</button>)}</div></section>
      <section className="director-reference-card"><div className="director-reference-heading"><div><span>{selectedScenario.film.year} · {selectedScenario.film.directors.join(", ")}</span><h2>{selectedScenario.film.title}</h2></div><strong>{activeLens.label}</strong></div><p className="director-question">{activeLens.question}</p><div className="director-principles">{principles.map((principle, index) => <article key={principle}><span>{String(index + 1).padStart(2, "0")}</span><p>{principle}</p></article>)}</div></section>
      <section className="director-brief-grid"><article><span className="filmverket-card-kicker">Audience effect</span><h3>What must the audience experience?</h3><p>{brief.toneTargets.join(" · ")}</p></article><article><span className="filmverket-card-kicker">Formal strategy</span><h3>What must the craft system do?</h3><p>{principles.join(" · ")}</p></article><article><span className="filmverket-card-kicker">Directing test</span><h3>What evidence would prove the choice works?</h3><p>Identify a precise change in attention, spatial pressure, rhythm, information, performance, or emotion that can be observed in the finished scene.</p></article></section>
      <section className="director-lab-note"><strong>Director is not a replacement name for the whole game.</strong><p>It is a focused artistic workspace inside Filmverket. Film Producer continues to cover the entire project.</p></section>
    </main>
  );
}

function FilmSchool({ onOpenFilm, scenarios }: { readonly onOpenFilm: (scenario: FilmScenarioSeed) => void; readonly scenarios: readonly FilmScenarioSeed[] }) {
  const craftCount = countCraftStatements(scenarios);
  return <main className="filmverket-page school-page"><section className="filmverket-page-heading"><div><span className="filmverket-kicker">A curriculum generated from the shared knowledge base</span><h1>Film School</h1></div><p>The school organizes the same stored film knowledge into teachable paths.</p></section><section className="school-summary"><span><strong>{schoolCourses.length}</strong> core courses</span><span><strong>{scenarios.length}</strong> film examples</span><span><strong>{craftCount}</strong> craft statements</span><span><strong>1</strong> shared knowledge system</span></section><section className="school-course-grid">{schoolCourses.map((course, courseIndex) => { const examples = scenarios.slice(courseIndex * 3, courseIndex * 3 + 3); return <article className="school-course" key={course.id}><span className="school-course-number">{course.number}</span><div><span className="filmverket-card-kicker">Core course</span><h2>{course.title}</h2><p>{course.description}</p></div><div className="school-course-examples"><small>Study examples</small>{examples.map((scenario) => <button key={scenario.id} onClick={() => onOpenFilm(scenario)} type="button"><span>{scenario.film.year}</span>{scenario.film.title}</button>)}</div></article>; })}</section></main>;
}

function FilmHistory({ onOpenFilm, scenarios }: { readonly onOpenFilm: (scenario: FilmScenarioSeed) => void; readonly scenarios: readonly FilmScenarioSeed[] }) {
  const timeline = useMemo(() => [...scenarios].sort((a, b) => a.film.year - b.film.year || a.film.title.localeCompare(b.film.title)), [scenarios]);
  const decades = [...new Set(timeline.map((scenario) => Math.floor(scenario.film.year / 10) * 10))];
  return <main className="filmverket-page history-page"><section className="filmverket-page-heading"><div><span className="filmverket-kicker">The chronological entrance</span><h1>Film History</h1></div><p>Every film opens at its own permanent Film Atlas address.</p></section><section className="history-timeline">{decades.map((decade) => { const films = timeline.filter((scenario) => Math.floor(scenario.film.year / 10) * 10 === decade); return <section className="history-decade" key={decade}><header><span>{decade}</span><strong>{films.length} films</strong></header><div>{films.map((scenario) => <button className="history-film" key={scenario.id} onClick={() => onOpenFilm(scenario)} type="button"><span>{scenario.film.year}</span><strong>{scenario.film.title}</strong><small>{scenario.film.directors.join(", ") || "Director not registered"}</small><b>Open analysis →</b></button>)}</div></section>; })}</section></main>;
}

function FilmRouteNotFound({ onOpenAtlas, requestedSlug }: { readonly onOpenAtlas: () => void; readonly requestedSlug: string }) {
  return <main className="filmverket-page film-route-not-found"><span className="filmverket-kicker">Unknown film address</span><h1>Film not found</h1><p>No catalogue film matches <code>{requestedSlug}</code>. The address may be outdated or incomplete.</p><button className="filmverket-primary-action" onClick={onOpenAtlas} type="button">Open Film Atlas <span>→</span></button></main>;
}

function ResearchRouteBackground() {
  return <main className="filmverket-page film-research-route"><section className="filmverket-page-heading"><div><span className="filmverket-kicker">Editorial system</span><h1>Research Control</h1></div><p>The research queue is open above this page. Use the browser back button to return to the exact film or section you came from.</p></section></main>;
}

function getRouteFilmSlug(route: FilmverketRoute): string | undefined {
  if (route.section === "atlas" || route.section === "director") return route.filmSlug;
  return undefined;
}

function getScenarioSlug(scenario: FilmScenarioSeed): string {
  return createFilmSlug(scenario.film.title, scenario.film.year);
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

function createDocumentTitle(section: FilmverketSection, scenario?: FilmScenarioSeed): string {
  if (section === "atlas" && scenario) return `${scenario.film.title} · Film Atlas · Filmverket`;
  if (section === "director" && scenario) return `${scenario.film.title} · Director Lab · Filmverket`;
  const labels: Record<FilmverketSection, string> = { home: "Filmverket", producer: "Film Producer · Filmverket", atlas: "Film Atlas · Filmverket", director: "Director Lab · Filmverket", school: "Film School · Filmverket", history: "Film History · Filmverket", research: "Research Control · Filmverket" };
  return labels[section];
}

function countCraftStatements(scenarios: readonly FilmScenarioSeed[]) {
  const statements = new Set<string>();
  scenarios.forEach((scenario) => {
    const brief = resolveScenarioProductionBrief(scenario);
    [...brief.screenplayTargets, ...brief.cinematographyTargets, ...brief.editingTargets, ...brief.soundTargets, ...brief.learningGoals].forEach((statement) => statements.add(statement));
  });
  return statements.size;
}

function getDecade(year: number) {
  return `${Math.floor(year / 10) * 10}s`;
}

function labelVerification(status: ScenarioProductionBrief["verificationStatus"]) {
  if (status === "verified") return "Research verified";
  if (status === "seeded") return "Seeded analysis";
  return "Research enrichment pending";
}
