import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_APPLIED_LEARNING_GUIDES } from "./directorAppliedLearning.js";
import {
  FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES,
  getFilmDirectorPracticeGuideExercise,
} from "./filmDirectorPracticeGuideExercise.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

test("Film Director practice guide exercises cover all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact canonical practice-guide ID set", () => {
  const guideIds = DIRECTOR_APPLIED_LEARNING_GUIDES.map((guide) => guide.id).sort();
  for (const language of FILMWORK_LANGUAGES) {
    const exercises = FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES[language];
    assert.deepEqual(Object.keys(exercises).sort(), guideIds, `${language}:guide ids`);
    for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
      assert.ok(exercises[guide.id]?.trim().length, `${language}:${guide.id}`);
      assert.equal(getFilmDirectorPracticeGuideExercise(language, guide), exercises[guide.id], `${language}:${guide.id}:resolver`);
    }
  }
});

test("NB guide exercises are derived from canonical applied-learning guides", () => {
  for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
    assert.equal(FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES.nb[guide.id], guide.exercise, guide.id);
  }
});

test("EN, FR and PT expose localized representative guide exercises", () => {
  for (const language of ["en", "fr", "pt"] as const) {
    assert.notEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES[language]["brief:sceneObjective"],
      FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES.nb["brief:sceneObjective"],
      `${language}:sceneObjective`,
    );
    assert.notEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES[language]["shot:dramaticPurpose"],
      FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES.nb["shot:dramaticPurpose"],
      `${language}:dramaticPurpose`,
    );
    assert.notEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES[language]["shot:estimatedDuration"],
      FILM_DIRECTOR_PRACTICE_GUIDE_EXERCISES.nb["shot:estimatedDuration"],
      `${language}:estimatedDuration`,
    );
  }
});
