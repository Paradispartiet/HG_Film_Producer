import actorsJson from "../../../data/film/actors.json";
import crewMembersJson from "../../../data/film/crew_members.json";
import locationScoutingBriefsJson from "../../../data/film/location_scouting_briefs.json";
import locationsJson from "../../../data/film/locations.json";

import { attachLocationToProject } from "../../core/attachLocationToProject.js";
import { calculateCastingChemistry } from "../../core/calculateCastingChemistry.js";
import { castActor, scoreActorForProject } from "../../core/castActor.js";
import { evaluateProductionTeam } from "../../core/evaluateProductionTeam.js";
import { hireCrewMember } from "../../core/hireCrewMember.js";
import { scoreCrewMemberForProject } from "../../core/scoreCrewMemberForProject.js";
import { scoutLocations } from "../../core/scoutLocations.js";
import type {
  Actor,
  CastingFitScore,
  CrewDiscipline,
  CrewFitScore,
  CrewMember,
  ProductionTeamEvaluation
} from "../../domain/crew.js";
import type { FilmProject } from "../../domain/film.js";
import type { Location, LocationFitScore, LocationScoutingBrief } from "../../domain/location.js";
import type { PipelineStepSummary } from "../types.js";
import { adaptFilmSeedData } from "./adaptFilmSeedData.js";
import type { DevelopmentStepResult } from "./createDevelopmentStepRun.js";
import type { ProjectRunContext } from "./createProjectRunContext.js";

const REQUIRED_DISCIPLINES = ["directing", "cinematography", "editing"] as const;
export type RequiredCrewDiscipline = typeof REQUIRED_DISCIPLINES[number];

interface PreProductionSeedData {
  readonly actors: readonly Actor[];
  readonly crewMembers: readonly CrewMember[];
  readonly locations: readonly Location[];
  readonly locationScoutingBriefs: readonly LocationScoutingBrief[];
}

const preProductionData = adaptFilmSeedData<PreProductionSeedData>({
  actors: actorsJson,
  crewMembers: crewMembersJson,
  locations: locationsJson,
  locationScoutingBriefs: locationScoutingBriefsJson
});

export interface PreProductionChoices {
  readonly locationId: string;
  readonly crewMemberIds: readonly string[];
  readonly actorIds: readonly string[];
}

export interface PreProductionLocationOption {
  readonly id: string;
  readonly name: string;
  readonly city: string;
  readonly type: string;
  readonly summary: string;
  readonly totalScore: number;
  readonly notes: readonly string[];
  readonly recommended: boolean;
}

export interface CrewCandidateOption {
  readonly id: string;
  readonly name: string;
  readonly discipline: RequiredCrewDiscipline;
  readonly roleLabel: string;
  readonly experience: number;
  readonly reliability: number;
  readonly fee: number;
  readonly styleTags: readonly string[];
  readonly score: CrewFitScore;
}

export interface CrewCandidateGroup {
  readonly discipline: RequiredCrewDiscipline;
  readonly label: string;
  readonly candidates: readonly CrewCandidateOption[];
}

export interface ActorCandidateOption {
  readonly id: string;
  readonly name: string;
  readonly actingStyle: string;
  readonly starPower: number;
  readonly reliability: number;
  readonly fee: number;
  readonly chemistryTags: readonly string[];
  readonly score: CastingFitScore;
}

export interface HiredCrewResult {
  readonly id: string;
  readonly name: string;
  readonly discipline: CrewDiscipline;
  readonly roleLabel: string;
  readonly fitScore: number;
}

export interface CastActorResult {
  readonly id: string;
  readonly name: string;
  readonly fitScore: number;
}

export interface PreProductionStepResult {
  readonly projectState: FilmProject;
  readonly location: {
    readonly id: string;
    readonly name: string;
    readonly score: number;
    readonly notes: readonly string[];
    readonly projectLocationCount: number;
  };
  readonly crew: {
    readonly hired: readonly HiredCrewResult[];
    readonly projectCrewCount: number;
  };
  readonly casting: {
    readonly actors: readonly CastActorResult[];
    readonly chemistryScore: number;
    readonly sharedChemistryTags: readonly string[];
    readonly chemistryNote: string;
    readonly projectActorCount: number;
  };
  readonly teamEvaluation: ProductionTeamEvaluation;
  readonly pipelineStep: PipelineStepSummary;
}

export function getPreProductionLocationOptions(
  projectContext: ProjectRunContext,
  developmentResult: DevelopmentStepResult
): readonly PreProductionLocationOption[] {
  const brief = getScoutingBrief(projectContext, developmentResult);
  const scouting = scoutLocations(developmentResult.projectState, preProductionData.locations, brief);

  return scouting.rankedLocations.slice(0, 5).map((score) => {
    const location = requireItem(preProductionData.locations, score.locationId, "location");
    return toLocationOption(location, score, developmentResult);
  });
}

export function getCrewCandidatesByDiscipline(
  developmentResult: DevelopmentStepResult
): readonly CrewCandidateGroup[] {
  return REQUIRED_DISCIPLINES.map((discipline) => ({
    discipline,
    label: formatDiscipline(discipline),
    candidates: preProductionData.crewMembers
      .filter((crewMember) => crewMember.discipline === discipline)
      .map((crewMember) => toCrewCandidate(developmentResult.projectState, crewMember, discipline))
      .sort((left, right) => right.score.totalScore - left.score.totalScore)
  }));
}

export function getActorCandidates(
  developmentResult: DevelopmentStepResult
): readonly ActorCandidateOption[] {
  return preProductionData.actors
    .map((actor) => ({
      id: actor.id,
      name: actor.name,
      actingStyle: formatLabel(actor.actingStyle),
      starPower: actor.starPower,
      reliability: actor.reliability,
      fee: actor.fee,
      chemistryTags: actor.chemistryTags,
      score: scoreActorForProject(developmentResult.projectState, actor)
    }))
    .sort((left, right) => right.score.totalScore - left.score.totalScore);
}

export function createPreProductionResult(
  projectContext: ProjectRunContext,
  developmentResult: DevelopmentStepResult,
  choices: PreProductionChoices
): PreProductionStepResult {
  validateChoices(choices);

  const locationOptions = getPreProductionLocationOptions(projectContext, developmentResult);
  const locationOption = requireItem(locationOptions, choices.locationId, "scouted location option");
  const location = requireItem(preProductionData.locations, choices.locationId, "location");
  let project = attachLocationToProject(developmentResult.projectState, location).project;

  const hiredCrew = choices.crewMemberIds.map((crewMemberId) => {
    const crewMember = requireItem(preProductionData.crewMembers, crewMemberId, "crew member");
    const score = scoreCrewMemberForProject(project, crewMember);
    project = hireCrewMember(project, crewMember, score).project;
    return {
      id: crewMember.id,
      name: crewMember.name,
      discipline: crewMember.discipline,
      roleLabel: formatDiscipline(crewMember.discipline),
      fitScore: score.totalScore
    };
  });

  const castActors = choices.actorIds.map((actorId) => {
    const actor = requireItem(preProductionData.actors, actorId, "actor");
    const score = scoreActorForProject(project, actor);
    project = castActor(project, actor, score).project;
    return { actor, result: { id: actor.id, name: actor.name, fitScore: score.totalScore } };
  });
  const chemistry = calculateCastingChemistry(castActors.map(({ actor }) => actor));
  const teamEvaluation = evaluateProductionTeam(project, preProductionData.crewMembers, preProductionData.actors);

  return {
    projectState: project,
    location: {
      id: location.id,
      name: location.name,
      score: locationOption.totalScore,
      notes: locationOption.notes,
      projectLocationCount: project.locationIds.length
    },
    crew: {
      hired: hiredCrew,
      projectCrewCount: project.crewMemberIds.length
    },
    casting: {
      actors: castActors.map(({ result }) => result),
      chemistryScore: chemistry.chemistryScore,
      sharedChemistryTags: chemistry.sharedTags,
      chemistryNote: chemistry.note,
      projectActorCount: project.actorIds.length
    },
    teamEvaluation,
    pipelineStep: {
      label: "Pre-production locked",
      detail: `${hiredCrew.length} key crew · ${castActors.length} cast · ${location.name}`,
      score: teamEvaluation.overall
    }
  };
}

function getScoutingBrief(
  projectContext: ProjectRunContext,
  developmentResult: DevelopmentStepResult
): LocationScoutingBrief | undefined {
  if (developmentResult.path === "location") {
    return requireItem(preProductionData.locationScoutingBriefs, developmentResult.briefId, "location scouting brief");
  }
  return preProductionData.locationScoutingBriefs.find((brief) => brief.genreId === projectContext.filmProjectState.genreId);
}

function toLocationOption(
  location: Location,
  score: LocationFitScore,
  developmentResult: DevelopmentStepResult
): PreProductionLocationOption {
  return {
    id: location.id,
    name: location.name,
    city: location.city,
    type: formatLabel(location.type),
    summary: location.summary,
    totalScore: score.totalScore,
    notes: score.notes.slice(0, 3),
    recommended: developmentResult.path === "location" && developmentResult.topLocationId === location.id
  };
}

function toCrewCandidate(
  project: FilmProject,
  crewMember: CrewMember,
  discipline: RequiredCrewDiscipline
): CrewCandidateOption {
  return {
    id: crewMember.id,
    name: crewMember.name,
    discipline,
    roleLabel: formatDiscipline(discipline),
    experience: crewMember.experience,
    reliability: crewMember.reliability,
    fee: crewMember.fee,
    styleTags: crewMember.styleTags,
    score: scoreCrewMemberForProject(project, crewMember)
  };
}

function validateChoices(choices: PreProductionChoices): void {
  if (!choices.locationId) throw new Error("Choose one location before locking pre-production.");

  const selectedCrew = choices.crewMemberIds.map((id) => requireItem(preProductionData.crewMembers, id, "crew member"));
  for (const discipline of REQUIRED_DISCIPLINES) {
    if (!selectedCrew.some((crewMember) => crewMember.discipline === discipline)) {
      throw new Error(`Hire one ${formatDiscipline(discipline).toLowerCase()} candidate before locking pre-production.`);
    }
  }
  if (new Set(choices.actorIds).size < 2) {
    throw new Error("Cast at least two actors before locking pre-production.");
  }
}

function requireItem<TItem extends { readonly id: string }>(
  items: readonly TItem[],
  id: string,
  label: string
): TItem {
  const item = items.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Missing ${label}: ${id}`);
  return item;
}

function formatDiscipline(value: CrewDiscipline): string {
  if (value === "cinematography") return "Cinematographer";
  if (value === "directing") return "Director";
  if (value === "editing") return "Editor";
  return formatLabel(value);
}

function formatLabel(value: string): string {
  return value.replaceAll("_", " ");
}
