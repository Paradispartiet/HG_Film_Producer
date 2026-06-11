import type { MentorLesson } from "../domain/mentor.js";

/**
 * Find lessons with exact problem-tag matches, ranked by descending match
 * count. The source order is retained when lessons have the same score.
 */
export function findMentorsForProblem(
  lessons: readonly MentorLesson[],
  problemTags: readonly string[]
): MentorLesson[] {
  const requestedTags = new Set(problemTags);

  return lessons
    .map((lesson, index) => ({
      lesson,
      index,
      matchCount: lesson.problemTags.reduce(
        (count, tag) => count + (requestedTags.has(tag) ? 1 : 0),
        0
      )
    }))
    .filter(({ matchCount }) => matchCount > 0)
    .sort((left, right) => right.matchCount - left.matchCount || left.index - right.index)
    .map(({ lesson }) => lesson);
}
