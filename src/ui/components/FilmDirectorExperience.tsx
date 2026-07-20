import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import {
  DIRECTOR_BRIEF_FIELDS,
  buildDirectorBriefText,
  coerceDirectorBriefDraft,
  countCompletedDirectorBriefFields,
  createBlankDirectorBrief,
  getDirectorBriefStorageKey,
  type DirectorBriefDraft,
  type DirectorBriefFieldId,
} from "../../core/directorBrief";
import {
  createFilmSlug,
  type FilmverketRoute,
  type FilmverketSection,
} from "../../core/filmverketRoutes";
import { getClassicFilmScenarios, type FilmScenarioSeed } from "../data/filmScenarios";
import { resolveScenarioProductionBrief, type ScenarioProductionBrief } from "../data/scenarioProductionBriefs";

type FilmDirectorExperienceProps = {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly route: Extract<FilmverketRoute, { readonly section: "director" }>;
};

type DirectorLensId = "screenplay" | "cinematography" | "editing" | "sound";
type BriefCollectionKey = "screenplayTargets" | "cinematographyTargets" | "editingTargets" | "soundTargets";

type DirectorLens = {
  readonly id: DirectorLensId;
  readonly label: string;
  readonly shortLabel: string;
  readonly briefKey: BriefCollectionKey;
  readonly question: string;
};

const directorLenses: readonly DirectorLens[] = [
  {
    id: "screenplay",
    label: "Screenplay and dramatic pressure",
    shortLabel: "Dramaturgy",
    briefKey: "screenplayTargets",
    question: "What information, desire, resistance, or reversal must the scene organize?",
  },
  {
    id: "cinematography",
    label: "Staging, image, and space",
    shortLabel: "Image",
    briefKey: "cinematographyTargets",
    question: "How must bodies, framing, movement, light, and design make the scene legible?",
  },
  {
    id: "editing",
    label: "Time, rhythm, and emphasis",
    shortLabel: "Editing",
    briefKey: "editingTargets",
    question: "Where must duration, interruption, reaction, repetition, or ellipsis shape attention?",
  },
  {
    id: "sound",
    label: "Dialogue, ambience, music, and silence",
    shortLabel: "Sound",
    briefKey: "soundTargets",
    question: "What should be heard, withheld, repeated, displaced, or allowed to remain off-screen?",
  },
];

const fieldLayout: readonly {
  readonly id: DirectorBriefFieldId;
  readonly group: "Concept" | "Staging" | "Image" | "Time and sound" | "Feasibility";
  readonly prompt: string;
  readonly rows: number;
}[] = [
  { id: "sceneTitle", group: "Concept", prompt: "Give the scene a working title or number.", rows: 1 },
  { id: "sceneContext", group: "Concept", prompt: "What has happened before, and what does the audience know on entry?", rows: 3 },
  { id: "sceneObjective", group: "Concept", prompt: "What must change by the end of the scene?", rows: 3 },
  { id: "audienceEffect", group: "Concept", prompt: "What should the audience feel, notice, fear, expect, or misunderstand?", rows: 3 },
  { id: "conflictTurn", group: "Concept", prompt: "Where is the resistance, and what is the decisive turn?", rows: 3 },
  { id: "formalStrategy", group: "Concept", prompt: "State the central formal rule that holds the scene together.", rows: 4 },
  { id: "blocking", group: "Staging", prompt: "Map entrances, exits, distance, eyelines, power positions, and movement.", rows: 5 },
  { id: "performanceDirection", group: "Staging", prompt: "What actions, tempo, restraint, subtext, and changes should the actors play?", rows: 5 },
  { id: "productionDesign", group: "Staging", prompt: "Which objects, surfaces, colors, costume details, and spatial facts carry meaning?", rows: 4 },
  { id: "shotPlan", group: "Image", prompt: "List the essential setups and what each shot must reveal or conceal.", rows: 6 },
  { id: "cameraMovementLenses", group: "Image", prompt: "Define camera position, movement, distance, lens behavior, and perspective.", rows: 4 },
  { id: "lightingPalette", group: "Image", prompt: "Define source logic, contrast, exposure priorities, color, and transitions.", rows: 4 },
  { id: "editingRhythm", group: "Time and sound", prompt: "Describe duration, cut points, reactions, ellipses, overlaps, and rhythm changes.", rows: 5 },
  { id: "soundStrategy", group: "Time and sound", prompt: "Plan dialogue, ambience, off-screen sound, silence, music, and sonic perspective.", rows: 5 },
  { id: "practicalConstraints", group: "Feasibility", prompt: "Record time, location, cast, equipment, safety, continuity, and budget limits.", rows: 4 },
  { id: "proofOfIntent", group: "Feasibility", prompt: "What observable evidence in the finished scene will prove the directing idea worked?", rows: 4 },
];

const navItems: readonly { readonly id: FilmverketSection; readonly label: string }[] = [
  { id: "home", label: "Front page" },
  { id: "producer", label: "Film Producer" },
  { id: "atlas", label: "Film Atlas" },
  { id: "director", label: "Film Director" },
  { id: "school", label: "Film School" },
  { id: "history", label: "Film History" },
  { id: "research", label: "Research" },
];

export function FilmDirectorExperience({ navigate, route }: FilmDirectorExperienceProps) {
  const scenarios = useMemo(() => getClassicFilmScenarios(), []);
  const selectedScenario = resolveSelectedScenario(scenarios, route.filmSlug);
  const missingFilm = Boolean(route.filmSlug && !selectedScenario);

  useEffect(() => {
    document.title = selectedScenario
      ? `${selectedScenario.film.title} · Film Director · Filmverket`
      : "Film Director · Filmverket";
  }, [selectedScenario]);

  if (scenarios.length === 0) {
    return <main className="film-director-empty"><h1>No films are available.</h1></main>;
  }

  if (missingFilm || !selectedScenario) {
    return (
      <div className="filmverket-shell film-director-shell">
        <FilmDirectorHeader navigate={navigate} selectedScenario={scenarios[0]} />
        <main className="film-director-not-found">
          <span className="filmverket-kicker">Unknown film address</span>
          <h1>Film not found</h1>
          <p>No Film Director reference matches <code>{route.filmSlug}</code>.</p>
          <button className="filmverket-primary-action" onClick={() => navigate({ section: "director" })} type="button">Open Film Director</button>
        </main>
      </div>
    );
  }

  return (
    <div className="filmverket-shell film-director-shell">
      <FilmDirectorHeader navigate={navigate} selectedScenario={selectedScenario} />
      <DirectorBriefEditor
        key={selectedScenario.id}
        navigate={navigate}
        scenarios={scenarios}
        selectedScenario={selectedScenario}
      />
      <footer className="filmverket-footer">
        <span>Filmverket · Film Director</span>
        <span>Scene intention · staging · image · time · sound · proof</span>
      </footer>
    </div>
  );
}

function FilmDirectorHeader({ navigate, selectedScenario }: {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly selectedScenario: FilmScenarioSeed | undefined;
}) {
  const selectedSlug = selectedScenario ? getScenarioSlug(selectedScenario) : undefined;

  function openSection(section: FilmverketSection) {
    if (section === "director") {
      navigate(selectedSlug ? { section: "director", filmSlug: selectedSlug } : { section: "director" });
      return;
    }
    if (section === "atlas") {
      navigate(selectedSlug ? { section: "atlas", filmSlug: selectedSlug } : { section: "atlas" });
      return;
    }
    navigate(simpleRoute(section));
  }

  return (
    <header className="filmverket-header">
      <button className="filmverket-brand" onClick={() => navigate({ section: "home" })} type="button">
        <span>FV</span>
        <strong>Filmverket</strong>
      </button>
      <nav aria-label="Filmverket sections">
        {navItems.map((item) => (
          <button
            className={item.id === "director" ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"}
            key={item.id}
            onClick={() => openSection(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function DirectorBriefEditor({ navigate, scenarios, selectedScenario }: {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
  readonly selectedScenario: FilmScenarioSeed;
}) {
  const brief = resolveScenarioProductionBrief(selectedScenario);
  const identity = useMemo(() => ({
    filmId: selectedScenario.id,
    filmTitle: selectedScenario.film.title,
    filmYear: selectedScenario.film.year,
  }), [selectedScenario]);
  const storageKey = getDirectorBriefStorageKey(selectedScenario.id);
  const [draft, setDraft] = useState<DirectorBriefDraft>(() => loadDraft(storageKey, identity));
  const [activeLensId, setActiveLensId] = useState<DirectorLensId>("cinematography");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const completedCount = countCompletedDirectorBriefFields(draft);
  const completionPercent = Math.round((completedCount / DIRECTOR_BRIEF_FIELDS.length) * 100);
  const activeLens = directorLenses.find((lens) => lens.id === activeLensId) ?? directorLenses[0];
  const activePrinciples = activeLens ? brief[activeLens.briefKey] : [];

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(draft));
    } catch {
      // The workspace remains usable when local storage is unavailable.
    }
  }, [draft, storageKey]);

  function updateField(fieldId: DirectorBriefFieldId, value: string) {
    setDraft((current) => ({
      ...current,
      [fieldId]: value,
      updatedAt: new Date().toISOString(),
    }));
  }

  function useReferencePrinciple(principle: string) {
    setDraft((current) => {
      if (current.formalStrategy.includes(principle)) return current;
      const separator = current.formalStrategy.trim() ? "\n• " : "• ";
      return {
        ...current,
        formalStrategy: `${current.formalStrategy.trimEnd()}${separator}${principle}`,
        updatedAt: new Date().toISOString(),
      };
    });
  }

  function useToneStartingPoint() {
    updateField("audienceEffect", brief.toneTargets.join("\n• ").replace(/^/, "• "));
  }

  function useCraftStartingPoint() {
    updateField("formalStrategy", activePrinciples.join("\n• ").replace(/^/, "• "));
  }

  function resetDraft() {
    if (!window.confirm(`Clear the saved Film Director brief for ${selectedScenario.film.title}?`)) return;
    setDraft(createBlankDirectorBrief(identity));
    setCopyState("idle");
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(buildDirectorBriefText(draft));
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("failed");
    }
  }

  function selectFilm(event: ChangeEvent<HTMLSelectElement>) {
    const scenario = scenarios.find((candidate) => candidate.id === event.target.value);
    if (!scenario) return;
    navigate({ section: "director", filmSlug: getScenarioSlug(scenario) });
  }

  const groups = [...new Set(fieldLayout.map((field) => field.group))];

  return (
    <main className="film-director-page">
      <section className="film-director-hero">
        <div>
          <span className="filmverket-kicker">Directing workspace</span>
          <h1>Film <em>Director</em></h1>
          <p>Turn a film reference into a concrete scene plan. Define intention first, then staging, image, time, sound, constraints, and proof.</p>
        </div>
        <aside className="film-director-progress-card">
          <span>Brief progress</span>
          <strong>{completedCount}<small> / {DIRECTOR_BRIEF_FIELDS.length}</small></strong>
          <div aria-label={`${completionPercent}% complete`} className="film-director-progress"><span style={{ width: `${completionPercent}%` }} /></div>
          <p>{completionPercent}% of the directing decisions are defined.</p>
        </aside>
      </section>

      <section className="film-director-toolbar">
        <label>
          <span>Reference film</span>
          <select onChange={selectFilm} value={selectedScenario.id}>
            {scenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}
          </select>
        </label>
        <div className="film-director-toolbar-actions">
          <button className="filmverket-secondary-action" onClick={() => navigate({ section: "atlas", filmSlug: getScenarioSlug(selectedScenario) })} type="button">Open film analysis</button>
          <button className="filmverket-secondary-action" onClick={resetDraft} type="button">Clear brief</button>
          <button className="filmverket-primary-action" onClick={copyBrief} type="button">{copyState === "copied" ? "Brief copied" : copyState === "failed" ? "Copy failed" : "Copy director brief"}</button>
        </div>
      </section>

      <section className="film-director-reference">
        <header>
          <div>
            <span>{selectedScenario.film.year} · {selectedScenario.film.directors.join(", ") || "Director not registered"}</span>
            <h2>{selectedScenario.film.title}</h2>
          </div>
          <p>{brief.logline}</p>
        </header>
        <div className="film-director-reference-controls">
          <div className="film-director-lenses" aria-label="Reference craft lens">
            {directorLenses.map((lens) => (
              <button className={activeLensId === lens.id ? "film-director-lens film-director-lens--active" : "film-director-lens"} key={lens.id} onClick={() => setActiveLensId(lens.id)} type="button">{lens.shortLabel}</button>
            ))}
          </div>
          <p>{activeLens?.question}</p>
        </div>
        <div className="film-director-principles">
          {activePrinciples.map((principle, index) => (
            <article key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
              <button onClick={() => useReferencePrinciple(principle)} type="button">Use in brief</button>
            </article>
          ))}
        </div>
        <div className="film-director-reference-seeds">
          <button onClick={useToneStartingPoint} type="button">Use tone as audience-effect draft</button>
          <button onClick={useCraftStartingPoint} type="button">Use this lens as formal-strategy draft</button>
        </div>
      </section>

      <section className="film-director-form" aria-label="Scene directing brief">
        {groups.map((group, groupIndex) => (
          <section className="film-director-form-group" key={group}>
            <header><span>{String(groupIndex + 1).padStart(2, "0")}</span><h2>{group}</h2></header>
            <div className="film-director-fields">
              {fieldLayout.filter((field) => field.group === group).map((field) => {
                const fieldDefinition = DIRECTOR_BRIEF_FIELDS.find((candidate) => candidate.id === field.id);
                const complete = draft[field.id].trim().length > 0;
                return (
                  <label className={complete ? "film-director-field film-director-field--complete" : "film-director-field"} key={field.id}>
                    <span><strong>{fieldDefinition?.label ?? field.id}</strong><small>{complete ? "Defined" : "Open"}</small></span>
                    <p>{field.prompt}</p>
                    {field.rows === 1 ? (
                      <input onChange={(event) => updateField(field.id, event.target.value)} type="text" value={draft[field.id]} />
                    ) : (
                      <textarea onChange={(event) => updateField(field.id, event.target.value)} rows={field.rows} value={draft[field.id]} />
                    )}
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </section>

      <section className="film-director-summary">
        <div><span className="filmverket-card-kicker">Saved on this device</span><h2>{draft.sceneTitle.trim() || "Untitled scene"}</h2><p>Last change: {formatSavedTime(draft.updatedAt)}</p></div>
        <div><strong>{completedCount}</strong><span>directing decisions defined</span></div>
        <div><strong>{DIRECTOR_BRIEF_FIELDS.length - completedCount}</strong><span>decisions still open</span></div>
      </section>
    </main>
  );
}

function resolveSelectedScenario(scenarios: readonly FilmScenarioSeed[], filmSlug: string | undefined): FilmScenarioSeed | undefined {
  if (!filmSlug) return scenarios[0];
  return scenarios.find((scenario) => getScenarioSlug(scenario) === filmSlug);
}

function getScenarioSlug(scenario: FilmScenarioSeed): string {
  return createFilmSlug(scenario.film.title, scenario.film.year);
}

function simpleRoute(section: FilmverketSection): FilmverketRoute {
  if (section === "home") return { section: "home" };
  if (section === "producer") return { section: "producer" };
  if (section === "school") return { section: "school" };
  if (section === "history") return { section: "history" };
  if (section === "research") return { section: "research" };
  if (section === "atlas") return { section: "atlas" };
  return { section: "director" };
}

function loadDraft(storageKey: string, identity: { readonly filmId: string; readonly filmTitle: string; readonly filmYear: number }): DirectorBriefDraft {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return createBlankDirectorBrief(identity);
    return coerceDirectorBriefDraft(JSON.parse(stored) as unknown, identity);
  } catch {
    return createBlankDirectorBrief(identity);
  }
}

function formatSavedTime(value: string): string {
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp)) return "not recorded";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(timestamp));
}
