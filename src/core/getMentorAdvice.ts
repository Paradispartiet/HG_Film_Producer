import type { MentorAdvice, MentorLesson } from "../domain/mentor.js";

/** Convert a lesson into the concise advice shown to the player. */
export function getMentorAdvice(lesson: MentorLesson): MentorAdvice {
  return {
    mentorId: lesson.mentorId,
    lessonId: lesson.id,
    title: lesson.title,
    advice: lesson.advice,
    suggestedAction: lesson.suggestedAction,
    techniqueId: lesson.techniqueId,
    knowledgeEntryId: lesson.knowledgeEntryId,
    statChanges: lesson.statChanges
  };
}
