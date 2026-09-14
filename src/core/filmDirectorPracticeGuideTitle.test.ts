import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_APPLIED_LEARNING_GUIDES } from "./directorAppliedLearning.js";
import {
  FILM_DIRECTOR_PRACTICE_GUIDE_TITLES,
  getFilmDirectorPracticeGuideTitle,
} from "./filmDirectorPracticeGuideTitle.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

test("Film Director practice guide titles cover all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_PRACTICE_GUIDE_TITLES).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact canonical practice-guide ID set", () => {
  const guideIds = DIRECTOR_APPLIED_LEARNING_GUIDES.map((guide) => guide.id).sort();
  for (const language of FILMWORK_LANGUAGES) {
    const titles = FILM_DIRECTOR_PRACTICE_GUIDE_TITLES[language];
    assert.deepEqual(Object.keys(titles).sort(), guideIds, `${language}:guide ids`);
    for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
      assert.ok(titles[guide.id]?.trim().length, `${language}:${guide.id}`);
      assert.equal(getFilmDirectorPracticeGuideTitle(language, guide), titles[guide.id], `${language}:${guide.id}:resolver`);
    }
  }
});

test("NB guide titles are derived from the canonical applied-learning guides", () => {
  for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
    assert.equal(FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.nb[guide.id], guide.norwegianLabel, guide.id);
  }
});

test("EN, FR and PT expose localized representative guide titles", () => {
  assert.deepEqual(
    [
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.en["brief:performanceDirection"],
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.en["shot:lens"],
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.en["shot:dramaticPurpose"],
    ],
    ["Performance direction", "Lens and focus", "Dramatic purpose"],
  );
  assert.deepEqual(
    [
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.fr["brief:performanceDirection"],
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.fr["shot:lens"],
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.fr["shot:dramaticPurpose"],
    ],
    ["Direction d’acteurs", "Focale et mise au point", "Fonction dramatique"],
  );
  assert.deepEqual(
    [
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.pt["brief:performanceDirection"],
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.pt["shot:lens"],
      FILM_DIRECTOR_PRACTICE_GUIDE_TITLES.pt["shot:dramaticPurpose"],
    ],
    ["Direção de atores", "Objetiva e foco", "Função dramática"],
  );
});
