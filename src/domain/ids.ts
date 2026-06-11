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
export type MentorLessonId = Brand<string, "MentorLessonId">;
export type TechniqueId = Brand<string, "TechniqueId">;
export type MovementId = Brand<string, "MovementId">;
export type GenreId = Brand<string, "GenreId">;
export type LocationId = Brand<string, "LocationId">;
export type LocationScoutingBriefId = Brand<string, "LocationScoutingBriefId">;
export type HistoricalFilmId = Brand<string, "HistoricalFilmId">;
export type ProductionChoiceId = Brand<string, "ProductionChoiceId">;
export type KnowledgeEntryId = Brand<string, "KnowledgeEntryId">;
export type SceneFunctionId = Brand<string, "SceneFunctionId">;
export type ScriptTemplateId = Brand<string, "ScriptTemplateId">;
export type ProductionScheduleId = Brand<string, "ProductionScheduleId">;
export type ShootDayId = Brand<string, "ShootDayId">;
export type ProductionEventId = Brand<string, "ProductionEventId">;
export type PostProductionPlanId = Brand<string, "PostProductionPlanId">;
export type PostDecisionId = Brand<string, "PostDecisionId">;
export type TrailerStrategyId = Brand<string, "TrailerStrategyId">;
export type StudioExpenseId = Brand<string, "StudioExpenseId">;
export type StudioIncomeId = Brand<string, "StudioIncomeId">;
export type CareerMilestoneId = Brand<string, "CareerMilestoneId">;
export type StrategicGoalId = Brand<string, "StrategicGoalId">;

export function asStudioId(value: string): StudioId {
  return value as StudioId;
}

export function asFilmProjectId(value: string): FilmProjectId {
  return value as FilmProjectId;
}

export function asMentorLessonId(value: string): MentorLessonId {
  return value as MentorLessonId;
}

export function asTechniqueId(value: string): TechniqueId {
  return value as TechniqueId;
}

export function asScriptId(value: string): ScriptId {
  return value as ScriptId;
}

export function asSceneId(value: string): SceneId {
  return value as SceneId;
}

export function asCharacterId(value: string): CharacterId {
  return value as CharacterId;
}

export function asSceneFunctionId(value: string): SceneFunctionId {
  return value as SceneFunctionId;
}

export function asScriptTemplateId(value: string): ScriptTemplateId {
  return value as ScriptTemplateId;
}

export function asLocationScoutingBriefId(value: string): LocationScoutingBriefId {
  return value as LocationScoutingBriefId;
}

export function asRoleId(value: string): RoleId {
  return value as RoleId;
}

export function asCrewMemberId(value: string): CrewMemberId {
  return value as CrewMemberId;
}

export function asActorId(value: string): ActorId {
  return value as ActorId;
}

export function asGenreId(value: string): GenreId {
  return value as GenreId;
}

export function asProductionScheduleId(value: string): ProductionScheduleId {
  return value as ProductionScheduleId;
}

export function asShootDayId(value: string): ShootDayId {
  return value as ShootDayId;
}

export function asProductionEventId(value: string): ProductionEventId {
  return value as ProductionEventId;
}

export function asPostProductionPlanId(value: string): PostProductionPlanId {
  return value as PostProductionPlanId;
}

export function asPostDecisionId(value: string): PostDecisionId {
  return value as PostDecisionId;
}

export function asTrailerStrategyId(value: string): TrailerStrategyId {
  return value as TrailerStrategyId;
}

export function asStudioExpenseId(value: string): StudioExpenseId {
  return value as StudioExpenseId;
}

export function asStudioIncomeId(value: string): StudioIncomeId {
  return value as StudioIncomeId;
}

export function asCareerMilestoneId(value: string): CareerMilestoneId {
  return value as CareerMilestoneId;
}

export function asStrategicGoalId(value: string): StrategicGoalId {
  return value as StrategicGoalId;
}

export type ReleasePlanId = Brand<string, "ReleasePlanId">;
export type ReleaseStrategyId = Brand<string, "ReleaseStrategyId">;
export type FestivalId = Brand<string, "FestivalId">;
export type CriticProfileId = Brand<string, "CriticProfileId">;
export type AudienceSegmentId = Brand<string, "AudienceSegmentId">;
export type AwardId = Brand<string, "AwardId">;

export function asReleasePlanId(value: string): ReleasePlanId {
  return value as ReleasePlanId;
}

export function asReleaseStrategyId(value: string): ReleaseStrategyId {
  return value as ReleaseStrategyId;
}

export function asFestivalId(value: string): FestivalId {
  return value as FestivalId;
}

export function asCriticProfileId(value: string): CriticProfileId {
  return value as CriticProfileId;
}

export function asAudienceSegmentId(value: string): AudienceSegmentId {
  return value as AudienceSegmentId;
}

export function asAwardId(value: string): AwardId {
  return value as AwardId;
}
