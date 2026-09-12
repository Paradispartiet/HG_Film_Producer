import assert from "node:assert/strict";
import test from "node:test";

import { FILM_SCHOOL_COURSE_CHROME } from "./filmSchoolCourseChrome.js";

test("course chrome covers all four FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_SCHOOL_COURSE_CHROME).sort(), ["en", "fr", "nb", "pt"]);
});

test("course chrome exposes the user-facing 5x5 module vocabulary without changing internal lesson ids", () => {
  assert.equal(FILM_SCHOOL_COURSE_CHROME.en.modules, "modules");
  assert.equal(FILM_SCHOOL_COURSE_CHROME.nb.modules, "moduler");
  assert.equal(FILM_SCHOOL_COURSE_CHROME.fr.modules, "modules");
  assert.equal(FILM_SCHOOL_COURSE_CHROME.pt.modules, "módulos");
});

test("Norwegian alone keeps Filmverket branding while the other locales use FilmWork", () => {
  assert.equal(FILM_SCHOOL_COURSE_CHROME.nb.productBrand, "Filmverket");
  assert.equal(FILM_SCHOOL_COURSE_CHROME.nb.productMonogram, "FV");
  assert.equal(FILM_SCHOOL_COURSE_CHROME.en.productBrand, "FilmWork");
  assert.equal(FILM_SCHOOL_COURSE_CHROME.fr.productBrand, "FilmWork");
  assert.equal(FILM_SCHOOL_COURSE_CHROME.pt.productBrand, "FilmWork");
});

test("shared course chrome includes progression and interaction labels for every locale", () => {
  for (const copy of Object.values(FILM_SCHOOL_COURSE_CHROME)) {
    assert.ok(copy.courseProgress.length > 0);
    assert.ok(copy.resetConfirm.length > 0);
    assert.ok(copy.stage.not_started.length > 0);
    assert.ok(copy.stage.mastered.length > 0);
    assert.ok(copy.previousModule.length > 0);
    assert.ok(copy.nextModule.length > 0);
    assert.ok(copy.startFinalAssignment.length > 0);
  }
});
