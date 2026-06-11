import type {
  ActorId,
  CrewMemberId,
  FilmProjectId,
  GenreId,
  LocationId,
  ScriptId,
  StudioId,
  TechniqueId
} from "./ids.js";

export type FilmProjectStatus =
  | "idea"
  | "script"
  | "pre_production"
  | "shooting"
  | "post_production"
  | "release"
  | "completed";

export type FilmScale = "micro" | "indie" | "mid_budget" | "studio" | "prestige";

export interface Studio {
  readonly id: StudioId;
  readonly name: string;
  readonly money: number;
  readonly reputation: number;
  readonly prestige: number;
  readonly unlockedTechniqueIds: readonly TechniqueId[];
  readonly activeFilmProjectIds: readonly FilmProjectId[];
  readonly completedFilmProjectIds: readonly FilmProjectId[];
}

export interface FilmProject {
  readonly id: FilmProjectId;
  readonly title: string;
  readonly status: FilmProjectStatus;
  readonly scale: FilmScale;
  readonly genreId: GenreId;
  readonly budget: number;
  readonly scriptId: ScriptId | null;
  readonly crewMemberIds: readonly CrewMemberId[];
  readonly actorIds: readonly ActorId[];
  readonly locationIds: readonly LocationId[];
  readonly techniqueIdsUsed: readonly TechniqueId[];
}

export interface FilmResult {
  readonly projectId: FilmProjectId;
  readonly quality: number;
  readonly audienceAppeal: number;
  readonly criticalAppeal: number;
  readonly budgetSpent: number;
  readonly revenueEstimate: number;
  readonly reputationDelta: number;
  readonly prestigeDelta: number;
}
