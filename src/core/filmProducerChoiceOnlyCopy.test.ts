import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  FILM_SCHOOL_CHOICE_ONLY_COPY,
  FILM_TITLE_OPTIONS,
  STUDIO_NAME_OPTIONS,
  isSelectedFilmSchoolOption
} from "./filmProducerChoiceOnlyCopy.js";

test("all player-facing Film School practice offers alternatives in every language", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_SCHOOL_CHOICE_ONLY_COPY[language];
    assert.ok(copy.question.trim().length > 10);
    assert.ok(copy.guidance.trim().length > 10);
  }
  assert.equal(isSelectedFilmSchoolOption(["Pacing", "Clarity", "Emotion"], ""), false);
  assert.equal(isSelectedFilmSchoolOption(["Pacing", "Clarity", "Emotion"], "0"), true);
  assert.equal(isSelectedFilmSchoolOption(["Pacing", "Clarity", "Emotion"], "2"), true);
  assert.equal(isSelectedFilmSchoolOption(["Pacing", "Clarity", "Emotion"], "3"), false);
  assert.equal(isSelectedFilmSchoolOption(["Pacing", "Clarity", "Emotion"], "write an answer"), false);
});

test("the studio and first/later films have nonempty distinct titles selectable without typing", () => {
  for (const options of [STUDIO_NAME_OPTIONS, FILM_TITLE_OPTIONS]) {
    assert.ok(options.length >= 5);
    assert.equal(new Set(options).size, options.length);
    assert.ok(options.every((title) => title.trim().length > 3));
  }
  assert.ok(FILM_TITLE_OPTIONS.includes("Harbor Lights"));
  assert.ok(FILM_TITLE_OPTIONS.includes("Second Winter"));
});
