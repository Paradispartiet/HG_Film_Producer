import assert from "node:assert/strict";
import test from "node:test";

import { FILM_SCHOOL_COURSE_SURFACE_COPY } from "./filmSchoolCourseSurfaceCopy.js";

const courseIds = ["screenplay", "performance", "camera", "lightingDesign", "editingSound"] as const;

test("course surface copy covers all four FilmWork languages and all five ground courses", () => {
  assert.deepEqual(Object.keys(FILM_SCHOOL_COURSE_SURFACE_COPY).sort(), ["en", "fr", "nb", "pt"]);
  for (const language of Object.keys(FILM_SCHOOL_COURSE_SURFACE_COPY) as Array<keyof typeof FILM_SCHOOL_COURSE_SURFACE_COPY>) {
    assert.deepEqual(Object.keys(FILM_SCHOOL_COURSE_SURFACE_COPY[language]).sort(), [...courseIds].sort());
  }
});

test("course surface copy keeps roadmap progression exact across locales", () => {
  for (const copy of Object.values(FILM_SCHOOL_COURSE_SURFACE_COPY)) {
    assert.deepEqual(copy.screenplay.roadmapEntries.map((entry) => entry.number), ["02", "03", "04", "05"]);
    assert.deepEqual(copy.performance.roadmapEntries.map((entry) => entry.number), ["03", "04", "05"]);
    assert.deepEqual(copy.camera.roadmapEntries.map((entry) => entry.number), ["04", "05"]);
    assert.deepEqual(copy.lightingDesign.roadmapEntries.map((entry) => entry.number), ["05"]);
    assert.deepEqual(copy.editingSound.roadmapEntries, []);
  }
});

test("every course surface has translated hero, practice, assignment and footer copy", () => {
  for (const copy of Object.values(FILM_SCHOOL_COURSE_SURFACE_COPY)) {
    for (const courseId of courseIds) {
      const surface = copy[courseId];
      assert.ok(surface.titleLead.length > 0);
      assert.ok(surface.titleEmphasis.length > 0);
      assert.ok(surface.heroIntro.length > 0);
      assert.ok(surface.practicePlaceholder.length > 0);
      assert.ok(surface.finalTitle.length > 0);
      assert.ok(surface.finalDescription.length > 0);
      assert.ok(surface.footerFlow.length > 0);
    }
  }
});

test("final course exposes localized ground-course completion copy", () => {
  for (const copy of Object.values(FILM_SCHOOL_COURSE_SURFACE_COPY)) {
    assert.ok(copy.editingSound.completionTitle);
    assert.ok(copy.editingSound.completionDescription);
    assert.ok(copy.editingSound.completionSmall);
  }
});
