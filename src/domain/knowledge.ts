import type {
  GenreId,
  HistoricalFilmId,
  KnowledgeEntryId,
  RoleId,
  TechniqueId
} from "./ids.js";
import type { FilmScale } from "./film.js";

/**
 * The measurable axes a film is scored on during production and post.
 * Every gameplay choice, technique and role ultimately moves one of these.
 */
export type FilmStat =
  | "quality"
  | "pacing"
  | "structure"
  | "emotion"
  | "visualStyle"
  | "sound"
  | "performance"
  | "audienceAppeal"
  | "criticalAppeal";

/**
 * A craft role behind the film (producer, director, cinematographer, ...).
 * Each role mechanically influences a set of film stats.
 */
export interface Role {
  readonly id: RoleId;
  readonly name: string;
  readonly department: string;
  readonly summary: string;
  readonly affectedStats: readonly FilmStat[];
}

/**
 * A genre. Genres bias audience and critic response and suggest a default
 * scale and a handful of techniques that fit the form well.
 */
export interface Genre {
  readonly id: GenreId;
  readonly name: string;
  readonly summary: string;
  readonly audienceBias: number;
  readonly criticBias: number;
  readonly recommendedScale: FilmScale;
  readonly recommendedTechniqueIds: readonly TechniqueId[];
}

/**
 * A film technique the player can learn and apply. A technique solves a
 * concrete production problem and is tied to a knowledge entry that explains
 * why it works.
 */
export interface Technique {
  readonly id: TechniqueId;
  readonly name: string;
  readonly summary: string;
  readonly solves: string;
  readonly affectedStats: readonly FilmStat[];
  readonly knowledgeEntryId: KnowledgeEntryId | null;
}

/**
 * A piece of learning content. Knowledge is only modelled when it can be used
 * in gameplay, so every entry links back to the technique, role or genre that
 * surfaces it.
 */
export interface KnowledgeEntry {
  readonly id: KnowledgeEntryId;
  readonly title: string;
  readonly explanation: string;
  readonly usedInGameplay: string;
  readonly relatedTechniqueId: TechniqueId | null;
  readonly relatedRoleId: RoleId | null;
  readonly relatedGenreId: GenreId | null;
  readonly relatedHistoricalFilmId: HistoricalFilmId | null;
}
