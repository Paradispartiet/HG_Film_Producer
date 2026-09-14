import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_APPLIED_LEARNING_GUIDES } from "./directorAppliedLearning.js";
import { DIRECTOR_BRIEF_FIELDS, type DirectorBriefFieldId } from "./directorBrief.js";
import { DIRECTOR_SHOT_FIELDS, type DirectorShotFieldId } from "./directorProject.js";
import { FILM_DIRECTOR_BRIEF_COPY } from "./filmDirectorBriefCopy.js";
import {
  FILM_DIRECTOR_PRACTICE_COPY,
  getFilmDirectorPracticeFieldLabel,
} from "./filmDirectorPracticeCopy.js";
import { FILM_DIRECTOR_SHOT_COPY } from "./filmDirectorShotCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

const stringKeys = [
  "launcherTitle",
  "deskAria",
  "kicker",
  "title",
  "description",
  "closeAria",
  "completedTasks",
  "remainingTasks",
  "practicalProgress",
  "tabsAria",
  "goToField",
  "completed",
  "markCompleted",
  "practicalTask",
  "checklistTitle",
  "termsTitle",
  "definition",
  "directorUse",
  "example",
] as const;

test("Film Director practice copy covers all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_PRACTICE_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language provides complete non-empty practice chrome", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_DIRECTOR_PRACTICE_COPY[language];
    for (const key of stringKeys) assert.ok(copy[key].trim().length > 0, `${language}:${key}`);
    assert.deepEqual(Object.keys(copy.kindLabels).sort(), ["brief", "shot"], `${language}:kindLabels`);
    assert.ok(copy.kindLabels.brief.trim().length > 0, `${language}:brief`);
    assert.ok(copy.kindLabels.shot.trim().length > 0, `${language}:shot`);
    assert.ok(copy.completionPercent(73).includes("73"), `${language}:completionPercent`);
    assert.ok(copy.progressAria(73).includes("73"), `${language}:progressAria`);
    assert.ok(copy.exercisesAria(copy.kindLabels.brief).includes(copy.kindLabels.brief), `${language}:exercisesAria`);
  }
});

test("practice guide identities remain exactly aligned with canonical brief and shot fields", () => {
  const expectedIds = [
    ...DIRECTOR_BRIEF_FIELDS.map((field) => `brief:${field.id}`),
    ...DIRECTOR_SHOT_FIELDS.map((field) => `shot:${field}`),
  ].sort();
  assert.deepEqual(DIRECTOR_APPLIED_LEARNING_GUIDES.map((guide) => guide.id).sort(), expectedIds);
});

test("practice field labels reuse the exact localized editor labels", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const guide of DIRECTOR_APPLIED_LEARNING_GUIDES) {
      const actual = getFilmDirectorPracticeFieldLabel(language, guide);
      const expected = guide.kind === "brief"
        ? FILM_DIRECTOR_BRIEF_COPY[language].fields[guide.fieldId as DirectorBriefFieldId].label
        : FILM_DIRECTOR_SHOT_COPY[language].fields[guide.fieldId as DirectorShotFieldId];
      assert.equal(actual, expected, `${language}:${guide.id}`);
      assert.ok(actual.trim().length > 0, `${language}:${guide.id}:non-empty`);
    }
  }
});

test("NB, FR and PT localize the practice chrome without silent English fallback", () => {
  assert.deepEqual(
    [FILM_DIRECTOR_PRACTICE_COPY.nb.launcherTitle, FILM_DIRECTOR_PRACTICE_COPY.nb.kindLabels.shot, FILM_DIRECTOR_PRACTICE_COPY.nb.goToField],
    ["Regiøvelser", "Innstillingskort", "Gå til arbeidsfeltet"],
  );
  assert.deepEqual(
    [FILM_DIRECTOR_PRACTICE_COPY.fr.launcherTitle, FILM_DIRECTOR_PRACTICE_COPY.fr.kindLabels.shot, FILM_DIRECTOR_PRACTICE_COPY.fr.goToField],
    ["Exercices de réalisation", "Fiches de plan", "Aller au champ de travail"],
  );
  assert.deepEqual(
    [FILM_DIRECTOR_PRACTICE_COPY.pt.launcherTitle, FILM_DIRECTOR_PRACTICE_COPY.pt.kindLabels.shot, FILM_DIRECTOR_PRACTICE_COPY.pt.goToField],
    ["Exercícios de realização", "Cartões de plano", "Ir para o campo de trabalho"],
  );
  for (const language of ["nb", "fr", "pt"] as const) {
    assert.notEqual(FILM_DIRECTOR_PRACTICE_COPY[language].title, FILM_DIRECTOR_PRACTICE_COPY.en.title, `${language}:title`);
    assert.notEqual(FILM_DIRECTOR_PRACTICE_COPY[language].checklistTitle, FILM_DIRECTOR_PRACTICE_COPY.en.checklistTitle, `${language}:checklistTitle`);
  }
});
