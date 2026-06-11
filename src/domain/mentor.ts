import type {
  KnowledgeEntryId,
  MentorId,
  MentorLessonId,
  RoleId,
  TechniqueId
} from "./ids.js";
import type { FilmProject } from "./film.js";
import type { FilmStat } from "./knowledge.js";
import type { ProductionPhase } from "./production.js";

export type MentorFocusArea =
  | "producing"
  | "directing"
  | "screenwriting"
  | "cinematography"
  | "editing"
  | "sound"
  | "music"
  | "acting"
  | "production_design"
  | "locations"
  | "marketing"
  | "film_history";

export type MentorLessonStatChanges = Readonly<Partial<Record<FilmStat, number>>>;

/**
 * A gameplay-ready lesson that connects a concrete production problem to a
 * mentor, craft role, action, and optional technique or knowledge unlock.
 */
export interface MentorLesson {
  readonly id: MentorLessonId;
  readonly mentorId: MentorId;
  readonly title: string;
  readonly focusArea: MentorFocusArea;
  readonly problemTags: readonly string[];
  readonly productionPhase: ProductionPhase;
  readonly roleId: RoleId;
  readonly techniqueId: TechniqueId | null;
  readonly knowledgeEntryId: KnowledgeEntryId | null;
  readonly advice: string;
  readonly examplePrinciple: string;
  readonly suggestedAction: string;
  readonly statChanges: MentorLessonStatChanges;
}

/** The player-facing part of a lesson, separated from matching metadata. */
export interface MentorAdvice {
  readonly mentorId: MentorId;
  readonly lessonId: MentorLessonId;
  readonly title: string;
  readonly advice: string;
  readonly suggestedAction: string;
  readonly techniqueId: TechniqueId | null;
  readonly knowledgeEntryId: KnowledgeEntryId | null;
  readonly statChanges: MentorLessonStatChanges;
}

/** Result of applying a mentor's lesson to a film project. */
export interface MentorLessonApplicationResult {
  readonly project: FilmProject;
  readonly appliedLessonId: MentorLessonId;
  readonly unlockedTechniqueId: TechniqueId | null;
  readonly unlockedKnowledgeEntryId: KnowledgeEntryId | null;
  readonly statChanges: MentorLessonStatChanges;
  readonly note: string;
}
