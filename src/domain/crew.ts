import type { FilmProject } from "./film.js";
import type {
  ActorId,
  CrewMemberId,
  FilmProjectId,
  GenreId,
  RoleId
} from "./ids.js";
import type { FilmStat } from "./knowledge.js";

export type CrewDiscipline =
  | "producing"
  | "directing"
  | "screenwriting"
  | "cinematography"
  | "editing"
  | "sound"
  | "music"
  | "production_design"
  | "casting"
  | "locations"
  | "marketing";

export type ActingStyle =
  | "naturalistic"
  | "theatrical"
  | "physical"
  | "comedic"
  | "restrained"
  | "intense"
  | "improvisational"
  | "star_persona";

export interface CrewMember {
  readonly id: CrewMemberId;
  readonly name: string;
  readonly roleId: RoleId;
  readonly discipline: CrewDiscipline;
  readonly experience: number;
  readonly styleTags: readonly string[];
  readonly genreStrengths: readonly GenreId[];
  readonly statBoosts: Readonly<Partial<Record<FilmStat, number>>>;
  readonly fee: number;
  readonly reliability: number;
  readonly collaboration: number;
}

export interface Actor {
  readonly id: ActorId;
  readonly name: string;
  readonly actingStyle: ActingStyle;
  readonly starPower: number;
  readonly experience: number;
  readonly genreStrengths: readonly GenreId[];
  readonly chemistryTags: readonly string[];
  readonly roleFitTags: readonly string[];
  readonly fee: number;
  readonly reliability: number;
}

export interface CrewFitScore {
  readonly crewMemberId: CrewMemberId;
  readonly totalScore: number;
  readonly roleFit: number;
  readonly genreFit: number;
  readonly styleFit: number;
  readonly experience: number;
  readonly reliability: number;
  readonly affordability: number;
  readonly notes: readonly string[];
}

export interface CrewHireResult {
  readonly project: FilmProject;
  readonly crewMemberId: CrewMemberId;
  readonly alreadyHired: boolean;
  readonly score: CrewFitScore;
  readonly note: string;
}

export interface CastingFitScore {
  readonly actorId: ActorId;
  readonly totalScore: number;
  readonly genreFit: number;
  readonly styleFit: number;
  readonly starPower: number;
  readonly experience: number;
  readonly reliability: number;
  readonly affordability: number;
  readonly notes: readonly string[];
}

export interface CastingResult {
  readonly project: FilmProject;
  readonly actorId: ActorId;
  readonly alreadyCast: boolean;
  readonly score: CastingFitScore;
  readonly note: string;
}

export interface CastingChemistryResult {
  readonly actorIds: readonly ActorId[];
  readonly chemistryScore: number;
  readonly sharedTags: readonly string[];
  readonly tensionTags: readonly string[];
  readonly note: string;
}

export interface ProductionTeamEvaluation {
  readonly projectId: FilmProjectId;
  readonly crewScore: number;
  readonly castScore: number;
  readonly chemistryScore: number;
  readonly reliabilityScore: number;
  readonly budgetPressure: number;
  readonly overall: number;
  readonly notes: readonly string[];
}
