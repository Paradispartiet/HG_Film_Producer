import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_APPLIED_LEARNING_GUIDES } from "./directorAppliedLearning.js";
import {
  FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS,
  getFilmDirectorPracticeGuideChecklist,
} from "./filmDirectorPracticeGuideChecklist.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

test("Film Director practice guide checklists cover all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact canonical guide IDs and checklist lengths", () => {
  const guideIds = DIRECTOR_APPLIED_LEARNING_GUIDES.map((guide) => guide.id).sort();
  for (const language of FILMWORK_LANGUAGES) {
    const checklists = FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS[language];
    assert.deepEqual(Object.keys(checklists).sort(), guideIds, `${language}:guide ids`);
    for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
      const checklist = checklists[guide.id];
      assert.ok(checklist, `${language}:${guide.id}:present`);
      assert.equal(checklist.length, guide.checklist.length, `${language}:${guide.id}:length`);
      assert.ok(checklist.every((item) => item.trim().length > 0), `${language}:${guide.id}:non-empty`);
      assert.deepEqual(getFilmDirectorPracticeGuideChecklist(language, guide), checklist, `${language}:${guide.id}:resolver`);
    }
  }
});

test("NB guide checklists are derived from canonical applied-learning guides", () => {
  for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
    assert.deepEqual(FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS.nb[guide.id], guide.checklist, guide.id);
  }
});

test("EN, FR and PT expose localized representative checklist items", () => {
  for (const language of ["en", "fr", "pt"] as const) {
    assert.notDeepEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS[language]["brief:sceneObjective"],
      FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS.nb["brief:sceneObjective"],
      `${language}:sceneObjective`,
    );
    assert.notDeepEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS[language]["shot:cameraPosition"],
      FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS.nb["shot:cameraPosition"],
      `${language}:cameraPosition`,
    );
    assert.notDeepEqual(
      FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS[language]["shot:sound"],
      FILM_DIRECTOR_PRACTICE_GUIDE_CHECKLISTS.nb["shot:sound"],
      `${language}:sound`,
    );
  }
});
