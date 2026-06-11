export type Brand<TValue, TBrand extends string> = TValue & { readonly __brand: TBrand };

export type StudioId = Brand<string, "StudioId">;
export type FilmProjectId = Brand<string, "FilmProjectId">;
export type ScriptId = Brand<string, "ScriptId">;
export type SceneId = Brand<string, "SceneId">;
export type CharacterId = Brand<string, "CharacterId">;
export type RoleId = Brand<string, "RoleId">;
export type CrewMemberId = Brand<string, "CrewMemberId">;
export type ActorId = Brand<string, "ActorId">;
export type MentorId = Brand<string, "MentorId">;
export type TechniqueId = Brand<string, "TechniqueId">;
export type MovementId = Brand<string, "MovementId">;
export type GenreId = Brand<string, "GenreId">;
export type LocationId = Brand<string, "LocationId">;
export type HistoricalFilmId = Brand<string, "HistoricalFilmId">;
export type ProductionChoiceId = Brand<string, "ProductionChoiceId">;
export type KnowledgeEntryId = Brand<string, "KnowledgeEntryId">;

export function asStudioId(value: string): StudioId {
  return value as StudioId;
}

export function asFilmProjectId(value: string): FilmProjectId {
  return value as FilmProjectId;
}

export function asTechniqueId(value: string): TechniqueId {
  return value as TechniqueId;
}
