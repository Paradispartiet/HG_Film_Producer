import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import {
  DIRECTOR_BRIEF_FIELDS,
  coerceDirectorBriefDraft,
  countCompletedDirectorBriefFields,
  getDirectorBriefStorageKey,
  type DirectorBriefDraft,
  type DirectorBriefFieldId,
} from "../../core/directorBrief";
import {
  DIRECTOR_SHOT_FIELDS,
  addDirectorScene,
  addDirectorShot,
  buildDirectorProjectText,
  coerceDirectorProject,
  countCompletedDirectorProjectFields,
  countCompletedDirectorShotFields,
  createBlankDirectorProject,
  createDirectorEntityId,
  createDirectorProjectFromBrief,
  duplicateDirectorScene,
  duplicateDirectorShot,
  getDirectorProjectStorageKey,
  moveDirectorShot,
  removeDirectorScene,
  removeDirectorShot,
  updateDirectorSceneBrief,
  updateDirectorShot,
  type DirectorProject,
  type DirectorScene,
  type DirectorShotCard,
  type DirectorShotFieldId,
} from "../../core/directorProject";
import { createFilmSlug, type FilmverketRoute, type FilmverketSection } from "../../core/filmverketRoutes";
import { getClassicFilmScenarios, type FilmScenarioSeed } from "../data/filmScenarios";
import { resolveScenarioProductionBrief } from "../data/scenarioProductionBriefs";

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
  { id: "screenplay", label: "Screenplay and dramatic pressure", shortLabel: "Dramaturgy", briefKey: "screenplayTargets", question: "What information, desire, resistance, or reversal must the scene organize?" },
  { id: "cinematography", label: "Staging, image, and space", shortLabel: "Image", briefKey: "cinematographyTargets", question: "How must bodies, framing, movement, light, and design make the scene legible?" },
  { id: "editing", label: "Time, rhythm, and emphasis", shortLabel: "Editing", briefKey: "editingTargets", question: "Where must duration, interruption, reaction, repetition, or ellipsis shape attention?" },
  { id: "sound", label: "Dialogue, ambience, music, and silence", shortLabel: "Sound", briefKey: "soundTargets", question: "What should be heard, withheld, repeated, displaced, or allowed to remain off-screen?" },
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
  { id: "shotPlan", group: "Image", prompt: "Define the scene's overall coverage rule before detailing individual shot cards below.", rows: 5 },
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

const shotSizeOptions = ["Extreme wide", "Wide", "Full", "Medium", "Medium close-up", "Close-up", "Extreme close-up", "Insert", "Point of view"] as const;

export function FilmDirectorExperience({ navigate, route }: FilmDirectorExperienceProps) {
  const scenarios = useMemo(() => getClassicFilmScenarios(), []);
  const selectedScenario = resolveSelectedScenario(scenarios, route.filmSlug);
  const missingFilm = Boolean(route.filmSlug && !selectedScenario);

  useEffect(() => {
    document.title = selectedScenario ? `${selectedScenario.film.title} · Film Director · Filmverket` : "Film Director · Filmverket";
  }, [selectedScenario]);

  if (scenarios.length === 0) return <main className="film-director-empty"><h1>No films are available.</h1></main>;

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
      <DirectorProjectEditor key={selectedScenario.id} navigate={navigate} scenarios={scenarios} selectedScenario={selectedScenario} />
      <footer className="filmverket-footer"><span>Filmverket · Film Director</span><span>Project · scenes · directing briefs · shot cards</span></footer>
    </div>
  );
}

function FilmDirectorHeader({ navigate, selectedScenario }: {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly selectedScenario: FilmScenarioSeed | undefined;
}) {
  const selectedSlug = selectedScenario ? getScenarioSlug(selectedScenario) : undefined;
  function openSection(section: FilmverketSection) {
    if (section === "director") return navigate(selectedSlug ? { section: "director", filmSlug: selectedSlug } : { section: "director" });
    if (section === "atlas") return navigate(selectedSlug ? { section: "atlas", filmSlug: selectedSlug } : { section: "atlas" });
    navigate(simpleRoute(section));
  }
  return (
    <header className="filmverket-header">
      <button className="filmverket-brand" onClick={() => navigate({ section: "home" })} type="button"><span>FV</span><strong>Filmverket</strong></button>
      <nav aria-label="Filmverket sections">
        {navItems.map((item) => <button className={item.id === "director" ? "filmverket-nav-button filmverket-nav-button--active" : "filmverket-nav-button"} key={item.id} onClick={() => openSection(item.id)} type="button">{item.label}</button>)}
      </nav>
    </header>
  );
}

function DirectorProjectEditor({ navigate, scenarios, selectedScenario }: {
  readonly navigate: (route: FilmverketRoute) => void;
  readonly scenarios: readonly FilmScenarioSeed[];
  readonly selectedScenario: FilmScenarioSeed;
}) {
  const referenceBrief = resolveScenarioProductionBrief(selectedScenario);
  const identity = useMemo(() => ({ filmId: selectedScenario.id, filmTitle: selectedScenario.film.title, filmYear: selectedScenario.film.year }), [selectedScenario]);
  const projectStorageKey = getDirectorProjectStorageKey(selectedScenario.id);
  const legacyBriefStorageKey = getDirectorBriefStorageKey(selectedScenario.id);
  const [project, setProject] = useState<DirectorProject>(() => loadProject(projectStorageKey, legacyBriefStorageKey, identity));
  const [activeLensId, setActiveLensId] = useState<DirectorLensId>("cinematography");
  const [copyState, setCopyState] = useState<"idle" | "scene" | "project" | "failed">("idle");
  const activeScene = project.scenes.find((scene) => scene.id === project.activeSceneId) ?? project.scenes[0];
  const activeLens = directorLenses.find((lens) => lens.id === activeLensId) ?? directorLenses[0];
  const activePrinciples = activeLens ? referenceBrief[activeLens.briefKey] : [];
  const totalShots = project.scenes.reduce((count, scene) => count + scene.shots.length, 0);
  const possibleFieldCount = project.scenes.length * DIRECTOR_BRIEF_FIELDS.length + totalShots * DIRECTOR_SHOT_FIELDS.length;
  const completedFieldCount = countCompletedDirectorProjectFields(project);
  const completionPercent = possibleFieldCount > 0 ? Math.round((completedFieldCount / possibleFieldCount) * 100) : 0;

  useEffect(() => {
    try { window.localStorage.setItem(projectStorageKey, JSON.stringify(project)); } catch { /* Local persistence is optional. */ }
  }, [project, projectStorageKey]);

  if (!activeScene) return null;
  const currentScene: DirectorScene = activeScene;

  function selectFilm(event: ChangeEvent<HTMLSelectElement>) {
    const scenario = scenarios.find((candidate) => candidate.id === event.target.value);
    if (scenario) navigate({ section: "director", filmSlug: getScenarioSlug(scenario) });
  }

  function selectScene(sceneId: string) {
    setProject((current) => ({ ...current, activeSceneId: sceneId }));
    window.setTimeout(() => document.getElementById("director-active-scene")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  function addScene() { setProject((current) => addDirectorScene(current, createDirectorEntityId("scene"))); }

  function duplicateActiveScene() {
    setProject((current) => {
      const source = current.scenes.find((scene) => scene.id === current.activeSceneId);
      return source ? duplicateDirectorScene(current, source.id, createDirectorEntityId("scene"), source.shots.map(() => createDirectorEntityId("shot"))) : current;
    });
  }

  function deleteActiveScene() {
    if (project.scenes.length <= 1) return;
    const title = currentScene.brief.sceneTitle.trim() || "this scene";
    if (!window.confirm(`Delete ${title} and all of its shot cards?`)) return;
    setProject((current) => removeDirectorScene(current, currentScene.id, current.scenes[0]?.id ?? ""));
  }

  function updateBriefField(fieldId: DirectorBriefFieldId, value: string) {
    setProject((current) => {
      const scene = current.scenes.find((candidate) => candidate.id === current.activeSceneId);
      if (!scene) return current;
      const nextBrief: DirectorBriefDraft = { ...scene.brief, [fieldId]: value, updatedAt: new Date().toISOString() };
      return updateDirectorSceneBrief(current, scene.id, nextBrief);
    });
  }

  function useReferencePrinciple(principle: string) {
    const text = currentScene.brief.formalStrategy;
    if (!text.includes(principle)) updateBriefField("formalStrategy", `${text.trimEnd()}${text.trim() ? "\n• " : "• "}${principle}`);
  }
  function useToneStartingPoint() { updateBriefField("audienceEffect", referenceBrief.toneTargets.join("\n• ").replace(/^/, "• ")); }
  function useCraftStartingPoint() { updateBriefField("formalStrategy", activePrinciples.join("\n• ").replace(/^/, "• ")); }

  function addShot() {
    setProject((current) => addDirectorShot(current, current.activeSceneId, createDirectorEntityId("shot")));
    window.setTimeout(() => document.getElementById("director-shot-list")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }
  function changeShot(shotId: string, field: DirectorShotFieldId, value: string) { setProject((current) => updateDirectorShot(current, current.activeSceneId, shotId, field, value)); }
  function duplicateShot(shotId: string) { setProject((current) => duplicateDirectorShot(current, current.activeSceneId, shotId, createDirectorEntityId("shot"))); }
  function deleteShot(shotId: string) { setProject((current) => removeDirectorShot(current, current.activeSceneId, shotId)); }
  function moveShot(shotId: string, direction: -1 | 1) { setProject((current) => moveDirectorShot(current, current.activeSceneId, shotId, direction)); }

  function resetProject() {
    if (!window.confirm(`Clear every Film Director scene and shot card for ${selectedScenario.film.title}?`)) return;
    setProject(createBlankDirectorProject(identity, createDirectorEntityId("scene")));
    setCopyState("idle");
  }

  async function copyText(text: string, state: "scene" | "project") {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState(state);
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch { setCopyState("failed"); }
  }

  const groups = [...new Set(fieldLayout.map((field) => field.group))];

  return (
    <main className="film-director-page director-project-page">
      <section className="film-director-hero director-project-hero">
        <div><span className="filmverket-kicker">Multi-scene directing workspace</span><h1>Film <em>Director</em></h1><p>Build one directing project from connected scenes. Give each scene its own dramatic plan, then translate that plan into an ordered shot list.</p></div>
        <aside className="film-director-progress-card director-project-progress-card"><span>Project progress</span><strong>{completionPercent}<small>%</small></strong><div aria-label={`${completionPercent}% complete`} className="film-director-progress"><span style={{ width: `${completionPercent}%` }} /></div><p>{project.scenes.length} scene{project.scenes.length === 1 ? "" : "s"} · {totalShots} shot{totalShots === 1 ? "" : "s"}</p></aside>
      </section>

      <section className="film-director-toolbar director-project-toolbar">
        <label><span>Reference film</span><select onChange={selectFilm} value={selectedScenario.id}>{scenarios.map((scenario) => <option key={scenario.id} value={scenario.id}>{scenario.film.year} · {scenario.film.title}</option>)}</select></label>
        <div className="film-director-toolbar-actions">
          <button className="filmverket-secondary-action" onClick={() => navigate({ section: "atlas", filmSlug: getScenarioSlug(selectedScenario) })} type="button">Open film analysis</button>
          <button className="filmverket-secondary-action" onClick={resetProject} type="button">Clear project</button>
          <button className="filmverket-primary-action" onClick={() => copyText(buildDirectorProjectText(project), "project")} type="button">{copyState === "project" ? "Project copied" : copyState === "failed" ? "Copy failed" : "Copy complete project"}</button>
        </div>
      </section>

      <section className="director-project-workspace">
        <SceneSidebar activeScene={currentScene} onAdd={addScene} onDelete={deleteActiveScene} onDuplicate={duplicateActiveScene} onSelect={selectScene} project={project} />
        <div className="director-active-scene" id="director-active-scene">
          <ActiveSceneHeading copyState={copyState} onCopy={() => copyText(buildActiveSceneText(project, currentScene), "scene")} project={project} scene={currentScene} />
          <ReferencePanel activeLensId={activeLensId} activePrinciples={activePrinciples} activeQuestion={activeLens?.question ?? ""} brief={referenceBrief} onChangeLens={setActiveLensId} onUseCraft={useCraftStartingPoint} onUsePrinciple={useReferencePrinciple} onUseTone={useToneStartingPoint} scenario={selectedScenario} />
          <SceneBriefForm groups={groups} onChange={updateBriefField} scene={currentScene} />
          <ShotListEditor onAdd={addShot} onChange={changeShot} onDelete={deleteShot} onDuplicate={duplicateShot} onMove={moveShot} scene={currentScene} />
        </div>
      </section>

      <section className="film-director-summary director-project-summary">
        <div><span className="filmverket-card-kicker">Saved on this device</span><h2>{project.filmTitle}</h2><p>Last project change: {formatSavedTime(project.updatedAt)}</p></div>
        <div><strong>{project.scenes.length}</strong><span>scenes in project</span></div><div><strong>{totalShots}</strong><span>shot cards planned</span></div><div><strong>{completedFieldCount}</strong><span>decisions defined</span></div>
      </section>
    </main>
  );
}

function SceneSidebar({ activeScene, onAdd, onDelete, onDuplicate, onSelect, project }: {
  readonly activeScene: DirectorScene;
  readonly onAdd: () => void;
  readonly onDelete: () => void;
  readonly onDuplicate: () => void;
  readonly onSelect: (sceneId: string) => void;
  readonly project: DirectorProject;
}) {
  return (
    <aside className="director-scene-sidebar">
      <header><div><span>Project scenes</span><strong>{project.scenes.length}</strong></div><button onClick={onAdd} type="button">+ Add scene</button></header>
      <div className="director-scene-list">
        {project.scenes.map((scene, index) => <button className={scene.id === activeScene.id ? "director-scene-card director-scene-card--active" : "director-scene-card"} key={scene.id} onClick={() => onSelect(scene.id)} type="button"><span>{String(index + 1).padStart(2, "0")}</span><strong>{scene.brief.sceneTitle.trim() || `Scene ${index + 1}`}</strong><small>{countCompletedDirectorBriefFields(scene.brief)}/{DIRECTOR_BRIEF_FIELDS.length} decisions · {scene.shots.length} shots</small></button>)}
      </div>
      <div className="director-scene-sidebar-actions"><button onClick={onDuplicate} type="button">Duplicate scene</button><button disabled={project.scenes.length <= 1} onClick={onDelete} type="button">Delete scene</button></div>
      <p>Scenes and shots are saved automatically on this device for this reference film.</p>
    </aside>
  );
}

function ActiveSceneHeading({ copyState, onCopy, project, scene }: {
  readonly copyState: "idle" | "scene" | "project" | "failed";
  readonly onCopy: () => void;
  readonly project: DirectorProject;
  readonly scene: DirectorScene;
}) {
  const index = project.scenes.findIndex((candidate) => candidate.id === scene.id);
  return <section className="director-active-scene-heading"><div><span>Scene {Math.max(1, index + 1)} of {project.scenes.length}</span><h2>{scene.brief.sceneTitle.trim() || `Scene ${index + 1}`}</h2><p>{countCompletedDirectorBriefFields(scene.brief)}/{DIRECTOR_BRIEF_FIELDS.length} directing decisions · {scene.shots.length} shot{scene.shots.length === 1 ? "" : "s"}</p></div><button className="filmverket-secondary-action" onClick={onCopy} type="button">{copyState === "scene" ? "Scene copied" : copyState === "failed" ? "Copy failed" : "Copy active scene"}</button></section>;
}

function ReferencePanel({ activeLensId, activePrinciples, activeQuestion, brief, onChangeLens, onUseCraft, onUsePrinciple, onUseTone, scenario }: {
  readonly activeLensId: DirectorLensId;
  readonly activePrinciples: readonly string[];
  readonly activeQuestion: string;
  readonly brief: ReturnType<typeof resolveScenarioProductionBrief>;
  readonly onChangeLens: (id: DirectorLensId) => void;
  readonly onUseCraft: () => void;
  readonly onUsePrinciple: (principle: string) => void;
  readonly onUseTone: () => void;
  readonly scenario: FilmScenarioSeed;
}) {
  return (
    <section className="film-director-reference director-project-reference">
      <header><div><span>{scenario.film.year} · {scenario.film.directors.join(", ") || "Director not registered"}</span><h2>{scenario.film.title}</h2></div><p>{brief.logline}</p></header>
      <div className="film-director-reference-controls"><div className="film-director-lenses" aria-label="Reference craft lens">{directorLenses.map((lens) => <button className={activeLensId === lens.id ? "film-director-lens film-director-lens--active" : "film-director-lens"} key={lens.id} onClick={() => onChangeLens(lens.id)} type="button">{lens.shortLabel}</button>)}</div><p>{activeQuestion}</p></div>
      <div className="film-director-principles">{activePrinciples.map((principle, index) => <article key={principle}><span>{String(index + 1).padStart(2, "0")}</span><p>{principle}</p><button onClick={() => onUsePrinciple(principle)} type="button">Use in scene</button></article>)}</div>
      <div className="film-director-reference-seeds"><button onClick={onUseTone} type="button">Use tone as audience-effect draft</button><button onClick={onUseCraft} type="button">Use this lens as formal-strategy draft</button></div>
    </section>
  );
}

function SceneBriefForm({ groups, onChange, scene }: {
  readonly groups: readonly (typeof fieldLayout)[number]["group"][];
  readonly onChange: (fieldId: DirectorBriefFieldId, value: string) => void;
  readonly scene: DirectorScene;
}) {
  return <section className="film-director-form" aria-label="Active scene directing brief">{groups.map((group, groupIndex) => <section className="film-director-form-group" key={group}><header><span>{String(groupIndex + 1).padStart(2, "0")}</span><h2>{group}</h2></header><div className="film-director-fields">{fieldLayout.filter((field) => field.group === group).map((field) => { const definition = DIRECTOR_BRIEF_FIELDS.find((candidate) => candidate.id === field.id); const complete = scene.brief[field.id].trim().length > 0; return <label className={complete ? "film-director-field film-director-field--complete" : "film-director-field"} key={field.id}><span><strong>{definition?.label ?? field.id}</strong><small>{complete ? "Defined" : "Open"}</small></span><p>{field.prompt}</p>{field.rows === 1 ? <input onChange={(event) => onChange(field.id, event.target.value)} type="text" value={scene.brief[field.id]} /> : <textarea onChange={(event) => onChange(field.id, event.target.value)} rows={field.rows} value={scene.brief[field.id]} />}</label>; })}</div></section>)}</section>;
}

function ShotListEditor({ onAdd, onChange, onDelete, onDuplicate, onMove, scene }: {
  readonly onAdd: () => void;
  readonly onChange: (shotId: string, field: DirectorShotFieldId, value: string) => void;
  readonly onDelete: (shotId: string) => void;
  readonly onDuplicate: (shotId: string) => void;
  readonly onMove: (shotId: string, direction: -1 | 1) => void;
  readonly scene: DirectorScene;
}) {
  return (
    <section className="director-shot-list-section" id="director-shot-list">
      <header><div><span className="filmverket-card-kicker">From scene strategy to coverage</span><h2>Shot cards</h2><p>Each card must explain both the production setup and the dramatic reason for the shot.</p></div><button className="filmverket-primary-action" onClick={onAdd} type="button">+ Add shot</button></header>
      {scene.shots.length === 0 ? <div className="director-shot-empty"><strong>No shot cards yet.</strong><p>Define the scene's coverage rule above, then add the first setup.</p><button onClick={onAdd} type="button">Add first shot</button></div> : <div className="director-shot-list">{scene.shots.map((shot, index) => <ShotCard index={index} key={shot.id} onChange={onChange} onDelete={onDelete} onDuplicate={onDuplicate} onMove={onMove} shot={shot} shotCount={scene.shots.length} />)}</div>}
    </section>
  );
}

function ShotCard({ index, onChange, onDelete, onDuplicate, onMove, shot, shotCount }: {
  readonly index: number;
  readonly onChange: (shotId: string, field: DirectorShotFieldId, value: string) => void;
  readonly onDelete: (shotId: string) => void;
  readonly onDuplicate: (shotId: string) => void;
  readonly onMove: (shotId: string, direction: -1 | 1) => void;
  readonly shot: DirectorShotCard;
  readonly shotCount: number;
}) {
  return (
    <article className="director-shot-card">
      <header><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{shot.title.trim() || `Shot ${index + 1}`}</strong><small>{countCompletedDirectorShotFields(shot)}/{DIRECTOR_SHOT_FIELDS.length} fields defined</small></div><div className="director-shot-card-actions"><button aria-label="Move shot up" disabled={index === 0} onClick={() => onMove(shot.id, -1)} type="button">↑</button><button aria-label="Move shot down" disabled={index === shotCount - 1} onClick={() => onMove(shot.id, 1)} type="button">↓</button><button onClick={() => onDuplicate(shot.id)} type="button">Duplicate</button><button onClick={() => onDelete(shot.id)} type="button">Delete</button></div></header>
      <div className="director-shot-grid">
        <ShotInput field="title" label="Shot title" onChange={onChange} shot={shot} />
        <label className="director-shot-field"><span>Shot size</span><select onChange={(event) => onChange(shot.id, "shotSize", event.target.value)} value={shot.shotSize}><option value="">Choose size…</option>{shotSizeOptions.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
        <ShotInput field="cameraPosition" label="Camera position" onChange={onChange} shot={shot} /><ShotInput field="movement" label="Movement" onChange={onChange} shot={shot} /><ShotInput field="lens" label="Lens / focal behavior" onChange={onChange} shot={shot} /><ShotInput field="estimatedDuration" label="Estimated duration" onChange={onChange} shot={shot} />
        <ShotTextArea field="subjectAction" label="Subject action and blocking" onChange={onChange} shot={shot} /><ShotTextArea field="dramaticPurpose" label="Dramatic purpose" onChange={onChange} shot={shot} /><ShotTextArea field="sound" label="Sound and dialogue priority" onChange={onChange} shot={shot} />
      </div>
    </article>
  );
}

function ShotInput({ field, label, onChange, shot }: { readonly field: DirectorShotFieldId; readonly label: string; readonly onChange: (shotId: string, field: DirectorShotFieldId, value: string) => void; readonly shot: DirectorShotCard }) {
  return <label className="director-shot-field"><span>{label}</span><input onChange={(event) => onChange(shot.id, field, event.target.value)} type="text" value={shot[field]} /></label>;
}
function ShotTextArea({ field, label, onChange, shot }: { readonly field: DirectorShotFieldId; readonly label: string; readonly onChange: (shotId: string, field: DirectorShotFieldId, value: string) => void; readonly shot: DirectorShotCard }) {
  return <label className="director-shot-field director-shot-field--wide"><span>{label}</span><textarea onChange={(event) => onChange(shot.id, field, event.target.value)} rows={3} value={shot[field]} /></label>;
}

function buildActiveSceneText(project: DirectorProject, scene: DirectorScene): string { return buildDirectorProjectText({ ...project, activeSceneId: scene.id, scenes: [scene] }); }
function resolveSelectedScenario(scenarios: readonly FilmScenarioSeed[], filmSlug: string | undefined): FilmScenarioSeed | undefined { return filmSlug ? scenarios.find((scenario) => getScenarioSlug(scenario) === filmSlug) : scenarios[0]; }
function getScenarioSlug(scenario: FilmScenarioSeed): string { return createFilmSlug(scenario.film.title, scenario.film.year); }
function simpleRoute(section: FilmverketSection): FilmverketRoute {
  if (section === "home") return { section: "home" };
  if (section === "producer") return { section: "producer" };
  if (section === "school") return { section: "school" };
  if (section === "history") return { section: "history" };
  if (section === "research") return { section: "research" };
  if (section === "atlas") return { section: "atlas" };
  return { section: "director" };
}
function loadProject(projectKey: string, legacyKey: string, identity: { readonly filmId: string; readonly filmTitle: string; readonly filmYear: number }): DirectorProject {
  try {
    const project = window.localStorage.getItem(projectKey);
    if (project) return coerceDirectorProject(JSON.parse(project) as unknown, identity, createDirectorEntityId("scene"));
    const legacy = window.localStorage.getItem(legacyKey);
    if (legacy) return createDirectorProjectFromBrief(coerceDirectorBriefDraft(JSON.parse(legacy) as unknown, identity), createDirectorEntityId("scene"));
  } catch { /* Fall through to a blank project. */ }
  return createBlankDirectorProject(identity, createDirectorEntityId("scene"));
}
function formatSavedTime(value: string): string {
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(timestamp)) : "not recorded";
}
