import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_APPLIED_LEARNING_GUIDES } from "./directorAppliedLearning.js";
import {
  FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES,
  getFilmDirectorPracticeGuidePurpose,
} from "./filmDirectorPracticeGuidePurpose.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

test("Film Director practice guide purposes cover all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact canonical practice-guide ID set", () => {
  const guideIds = DIRECTOR_APPLIED_LEARNING_GUIDES.map((guide) => guide.id).sort();
  for (const language of FILMWORK_LANGUAGES) {
    const purposes = FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES[language];
    assert.deepEqual(Object.keys(purposes).sort(), guideIds, `${language}:guide ids`);
    for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
      assert.ok(purposes[guide.id]?.trim().length, `${language}:${guide.id}`);
      assert.equal(getFilmDirectorPracticeGuidePurpose(language, guide), purposes[guide.id], `${language}:${guide.id}:resolver`);
    }
  }
});

test("NB guide purposes are derived from canonical applied-learning guides", () => {
  for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
    assert.equal(FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES.nb[guide.id], guide.purpose, guide.id);
  }
});

test("EN, FR and PT expose localized representative guide purposes", () => {
  for (const language of ["en", "fr", "pt"] as const) {
    assert.notEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES[language]["brief:performanceDirection"],
      FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES.nb["brief:performanceDirection"],
      `${language}:performanceDirection`,
    );
    assert.notEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES[language]["shot:lens"],
      FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES.nb["shot:lens"],
      `${language}:lens`,
    );
    assert.notEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES[language]["shot:sound"],
      FILM_DIRECTOR_PRACTICE_GUIDE_PURPOSES.nb["shot:sound"],
      `${language}:sound`,
    );
  }
});
