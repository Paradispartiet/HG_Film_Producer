import type { FilmProject } from "../domain/film.js";
import type {
  MentorLesson,
  MentorLessonApplicationResult
} from "../domain/mentor.js";

/**
 * Apply a mentor lesson without mutating the source project. Lessons expose
 * their stat changes to the wider simulation and can add one technique to the
 * project's production vocabulary.
 */
export function applyMentorLesson(
  project: FilmProject,
  lesson: MentorLesson
): MentorLessonApplicationResult {
  const techniqueAlreadyUsed =
    lesson.techniqueId !== null && project.techniqueIdsUsed.includes(lesson.techniqueId);
  const unlockedTechniqueId = techniqueAlreadyUsed ? null : lesson.techniqueId;
  const techniqueIdsUsed =
    unlockedTechniqueId === null
      ? project.techniqueIdsUsed
      : [...project.techniqueIdsUsed, unlockedTechniqueId];
  const updatedProject: FilmProject = { ...project, techniqueIdsUsed };

  const unlockNote = techniqueAlreadyUsed
    ? ` Technique "${lesson.techniqueId}" was already in use.`
    : lesson.techniqueId
      ? ` Unlocked technique "${lesson.techniqueId}".`
      : "";

  return {
    project: updatedProject,
    appliedLessonId: lesson.id,
    unlockedTechniqueId,
    unlockedKnowledgeEntryId: lesson.knowledgeEntryId,
    statChanges: lesson.statChanges,
    note: `Applied mentor lesson "${lesson.title}" to "${project.title}".${unlockNote}`
  };
}
