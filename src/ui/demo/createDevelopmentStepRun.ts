import filmsJson from "../../../data/film/films.json";
import knowledgeEntriesJson from "../../../data/film/knowledge_entries.json";
import locationScoutingBriefsJson from "../../../data/film/location_scouting_briefs.json";
import locationsJson from "../../../data/film/locations.json";
import mentorLessonsJson from "../../../data/film/mentor_lessons.json";
import movementsJson from "../../../data/film/movements.json";
import sceneFunctionsJson from "../../../data/film/scene_functions.json";
import techniquesJson from "../../../data/film/techniques.json";

import { addSceneToScript } from "../../core/addSceneToScript.js";
import { applyMentorLesson } from "../../core/applyMentorLesson.js";
import { attachLocationToProject } from "../../core/attachLocationToProject.js";
import { createScript } from "../../core/createScript.js";
import { evaluateScript } from "../../core/evaluateScript.js";
import { getMentorAdvice } from "../../core/getMentorAdvice.js";
import { scoutLocations } from "../../core/scoutLocations.js";
import { asSceneId } from "../../domain/ids.js";
import type { FilmMovement, HistoricalFilm } from "../../domain/filmHistory.js";
import type { KnowledgeEntry, Technique } from "../../domain/knowledge.js";
import type { Location, LocationScoutingBrief } from "../../domain/location.js";
import type { MentorLesson } from "../../domain/mentor.js";
import type { Scene, SceneFunction } from "../../domain/script.js";
import type { FilmProject } from "../../domain/film.js";
import type { PipelineStepSummary } from "../types.js";
import { adaptFilmSeedData } from "./adaptFilmSeedData.js";
import type { ProjectRunContext } from "./createProjectRunContext.js";

export type DevelopmentPath = "mentor" | "location" | "script";

export type DevelopmentChoice =
  | { readonly path: "mentor"; readonly lessonId: string }
  | { readonly path: "location"; readonly briefId: string }
  | { readonly path: "script" };

export interface HistoricalExample {
  readonly knowledgeTitle: string;
  readonly explanation: string;
  readonly usedInGameplay: string;
  readonly filmTitle: string;
  readonly filmYear: number;
  readonly filmDirector: string;
  readonly filmSummary: string;
  readonly movementName: string | null;
}

export interface MentorDevelopmentResult {
  readonly path: "mentor";
  readonly pathLabel: "Ask a mentor";
  readonly lessonTitle: string;
  readonly advice: string;
  readonly suggestedAction: string;
  readonly unlockedTechnique: string | null;
  readonly historicalExample: HistoricalExample | null;
  readonly projectTechniqueCount: number;
  readonly projectState: FilmProject;
  readonly pipelineStep: PipelineStepSummary;
}

export interface LocationDevelopmentResult {
  readonly path: "location";
  readonly pathLabel: "Scout locations";
  readonly briefId: string;
  readonly briefTitle: string;
  readonly topLocationId: string;
  readonly topLocation: string;
  readonly totalScore: number;
  readonly notes: readonly string[];
  readonly projectLocationCount: number;
  readonly projectState: FilmProject;
  readonly pipelineStep: PipelineStepSummary;
}

export interface ScriptDevelopmentResult {
  readonly path: "script";
  readonly pathLabel: "Shape the script";
  readonly scriptTitle: string;
  readonly structure: string;
  readonly sceneCount: number;
  readonly overallScore: number;
  readonly notes: readonly string[];
  readonly projectState: FilmProject;
  readonly pipelineStep: PipelineStepSummary;
}

export type DevelopmentStepResult =
  | MentorDevelopmentResult
  | LocationDevelopmentResult
  | ScriptDevelopmentResult;

interface DevelopmentSeedData {
  readonly mentorLessons: readonly MentorLesson[];
  readonly locations: readonly Location[];
  readonly locationScoutingBriefs: readonly LocationScoutingBrief[];
  readonly sceneFunctions: readonly SceneFunction[];
  readonly techniques: readonly Technique[];
  readonly knowledgeEntries: readonly KnowledgeEntry[];
  readonly historicalFilms: readonly HistoricalFilm[];
  readonly movements: readonly FilmMovement[];
}

const developmentData = adaptFilmSeedData<DevelopmentSeedData>({
  mentorLessons: mentorLessonsJson,
  locations: locationsJson,
  locationScoutingBriefs: locationScoutingBriefsJson,
  sceneFunctions: sceneFunctionsJson,
  techniques: techniquesJson,
  knowledgeEntries: knowledgeEntriesJson,
  historicalFilms: filmsJson,
  movements: movementsJson
});

export const mentorDevelopmentChoices: readonly MentorLesson[] = developmentData.mentorLessons
  .filter((lesson) => lesson.productionPhase === "script" || lesson.productionPhase === "pre_production")
  .slice(0, 5);

export function getLocationDevelopmentChoices(run: ProjectRunContext): readonly LocationScoutingBrief[] {
  return [...developmentData.locationScoutingBriefs]
    .sort((left, right) => Number(right.genreId === run.filmProjectState.genreId) - Number(left.genreId === run.filmProjectState.genreId))
    .slice(0, 5);
}

export function createMentorDevelopmentResult(
  run: ProjectRunContext,
  lessonId: string
): MentorDevelopmentResult {
  const lesson = requireItem(developmentData.mentorLessons, lessonId, "mentor lesson");
  const advice = getMentorAdvice(lesson);
  const application = applyMentorLesson(run.filmProjectState, lesson);
  const unlockedTechnique = application.unlockedTechniqueId === null
    ? null
    : requireItem(developmentData.techniques, application.unlockedTechniqueId, "technique").name;
  const historicalExample = application.unlockedTechniqueId === null
    ? null
    : getHistoricalExample(application.unlockedKnowledgeEntryId);

  return {
    path: "mentor",
    pathLabel: "Ask a mentor",
    lessonTitle: advice.title,
    advice: advice.advice,
    suggestedAction: advice.suggestedAction,
    unlockedTechnique,
    historicalExample,
    projectTechniqueCount: application.project.techniqueIdsUsed.length,
    projectState: application.project,
    pipelineStep: {
      label: "Development action completed",
      detail: `Mentor lesson · ${advice.title}`,
      score: 100
    }
  };
}

function getHistoricalExample(knowledgeEntryId: string | null): HistoricalExample | null {
  if (!knowledgeEntryId) return null;
  const entry = developmentData.knowledgeEntries.find((candidate) => candidate.id === knowledgeEntryId);
  if (!entry?.relatedHistoricalFilmId) return null;
  const film = developmentData.historicalFilms.find((candidate) => candidate.id === entry.relatedHistoricalFilmId);
  if (!film) return null;
  const movement = film.movementId
    ? developmentData.movements.find((candidate) => candidate.id === film.movementId)
    : undefined;

  return {
    knowledgeTitle: entry.title,
    explanation: entry.explanation,
    usedInGameplay: entry.usedInGameplay,
    filmTitle: film.title,
    filmYear: film.year,
    filmDirector: film.director,
    filmSummary: film.summary,
    movementName: movement?.name ?? null
  };
}

export function createLocationDevelopmentResult(
  run: ProjectRunContext,
  briefId: string
): LocationDevelopmentResult {
  const brief = requireItem(developmentData.locationScoutingBriefs, briefId, "location scouting brief");
  const scouting = scoutLocations(run.filmProjectState, developmentData.locations, brief);
  const topScore = requireFirst(scouting.rankedLocations, "scouted location score");
  const topLocation = requireItem(developmentData.locations, topScore.locationId, "location");
  const selection = attachLocationToProject(run.filmProjectState, topLocation);

  return {
    path: "location",
    pathLabel: "Scout locations",
    briefId: brief.id,
    briefTitle: brief.title,
    topLocationId: topLocation.id,
    topLocation: topLocation.name,
    totalScore: topScore.totalScore,
    notes: topScore.notes.slice(0, 3),
    projectLocationCount: selection.project.locationIds.length,
    projectState: selection.project,
    pipelineStep: {
      label: "Development action completed",
      detail: `Location scouted · ${topLocation.name}`,
      score: topScore.totalScore
    }
  };
}

export function createScriptDevelopmentResult(run: ProjectRunContext): ScriptDevelopmentResult {
  const template = run.scriptTemplate;
  const starterFunctions = template.recommendedSceneFunctions.slice(0, 3).map((functionId) =>
    requireItem(developmentData.sceneFunctions, functionId, "scene function")
  );
  const scenes = starterFunctions.map((sceneFunction, index) => createStarterScene(run, sceneFunction, index));
  let script = createScript({
    title: run.project.title,
    logline: run.project.logline,
    genreId: run.filmProjectState.genreId,
    theme: template.defaultTheme,
    structure: template.structure
  });

  for (const scene of scenes) {
    script = addSceneToScript(script, scene);
  }

  const evaluation = evaluateScript(script, scenes);

  return {
    path: "script",
    pathLabel: "Shape the script",
    scriptTitle: script.title,
    structure: formatLabel(script.structure),
    sceneCount: evaluation.sceneCount,
    overallScore: evaluation.overall,
    notes: buildScriptNotes(evaluation),
    projectState: run.filmProjectState,
    pipelineStep: {
      label: "Development action completed",
      detail: `Starter script · ${evaluation.sceneCount} scenes`,
      score: evaluation.overall
    }
  };
}

function createStarterScene(
  run: ProjectRunContext,
  sceneFunction: SceneFunction,
  index: number
): Scene {
  const sceneProfiles = [
    { conflict: 35, pacing: 42, emotion: 48 },
    { conflict: 58, pacing: 55, emotion: 62 },
    { conflict: 72, pacing: 68, emotion: 70 }
  ] as const;
  const profile = sceneProfiles[index] ?? { conflict: 72, pacing: 68, emotion: 70 };

  return {
    id: asSceneId(`scene_${slug(run.project.title)}_${index + 1}`),
    title: sceneFunction.name,
    functionId: sceneFunction.id,
    locationId: null,
    characterIds: [],
    mood: run.scriptTemplate.defaultTheme,
    conflictLevel: profile.conflict,
    pacing: profile.pacing,
    emotionalWeight: profile.emotion,
    techniqueIdsUsed: run.scriptTemplate.recommendedTechniqueIds.slice(index, index + 1)
  };
}

function buildScriptNotes(evaluation: ReturnType<typeof evaluateScript>): readonly string[] {
  const scoreNotes = [
    `Structure scored ${evaluation.scores.structure} out of 100 for this early draft.`,
    `Production feasibility scored ${evaluation.scores.productionFeasibility} out of 100.`
  ];
  return [...evaluation.notes, ...scoreNotes].slice(0, 3);
}

function requireItem<TItem extends { readonly id: string }>(
  items: readonly TItem[],
  id: string,
  label: string
): TItem {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) {
    throw new Error(`Missing ${label}: ${id}`);
  }
  return item;
}

function requireFirst<TItem>(items: readonly TItem[], label: string): TItem {
  const item = items[0];
  if (!item) {
    throw new Error(`Missing ${label}.`);
  }
  return item;
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}
