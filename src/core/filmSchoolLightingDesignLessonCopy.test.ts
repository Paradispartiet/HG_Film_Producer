import assert from "node:assert/strict";
import test from "node:test";

import { LIGHTING_DESIGN_COURSE_LESSONS } from "./filmSchoolLightingDesignCourse.js";
import { LIGHTING_DESIGN_LESSON_COPY } from "./filmSchoolLightingDesignLessonCopy.js";

const canonicalIds = LIGHTING_DESIGN_COURSE_LESSONS.map((lesson) => lesson.id).sort();

test("lighting design pedagogical copy covers all four FilmWork languages and five canonical lessons", () => {
  assert.deepEqual(Object.keys(LIGHTING_DESIGN_LESSON_COPY).sort(), ["en", "fr", "nb", "pt"]);
  for (const copy of Object.values(LIGHTING_DESIGN_LESSON_COPY)) {
    assert.deepEqual(Object.keys(copy).sort(), canonicalIds);
  }
});

test("localized lighting design copy preserves checklist and quiz option cardinality", () => {
  for (const [language, copy] of Object.entries(LIGHTING_DESIGN_LESSON_COPY)) {
    for (const lesson of LIGHTING_DESIGN_COURSE_LESSONS) {
      const localized = copy[lesson.id as keyof typeof copy];
      assert.ok(localized, `${language}:${lesson.id}`);
      assert.equal(localized.checklist.length, lesson.checklist.length, `${language}:${lesson.id}:checklist`);
      assert.equal(localized.quiz.options.length, lesson.quiz.options.length, `${language}:${lesson.id}:quiz-options`);
      assert.ok(localized.title.length > 0);
      assert.ok(localized.summary.length > 0);
      assert.ok(localized.principle.length > 0);
      assert.ok(localized.filmAnalysisQuestion.length > 0);
      assert.ok(localized.practicePrompt.length > 0);
      assert.ok(localized.quiz.question.length > 0);
      assert.ok(localized.quiz.explanation.length > 0);
    }
  }
});

test("Norwegian lighting design copy remains identical to canonical lesson prose", () => {
  for (const lesson of LIGHTING_DESIGN_COURSE_LESSONS) {
    const copy = LIGHTING_DESIGN_LESSON_COPY.nb[lesson.id as keyof typeof LIGHTING_DESIGN_LESSON_COPY.nb];
    assert.equal(copy.title, lesson.title);
    assert.equal(copy.summary, lesson.summary);
    assert.equal(copy.principle, lesson.principle);
    assert.equal(copy.filmAnalysisQuestion, lesson.film.analysisQuestion);
    assert.equal(copy.practicePrompt, lesson.practicePrompt);
    assert.deepEqual(copy.checklist, lesson.checklist);
    assert.equal(copy.quiz.question, lesson.quiz.question);
    assert.deepEqual(copy.quiz.options, lesson.quiz.options);
    assert.equal(copy.quiz.explanation, lesson.quiz.explanation);
  }
});

test("English, French and Portuguese expose localized lighting design learning copy", () => {
  assert.equal(LIGHTING_DESIGN_LESSON_COPY.en.source_direction_quality.title, "Source, direction and quality of light");
  assert.equal(LIGHTING_DESIGN_LESSON_COPY.fr.temperature_palette.title, "Température de couleur, balance des blancs et palette");
  assert.equal(LIGHTING_DESIGN_LESSON_COPY.pt.world_materials_space.title, "Design de produção, materiais e espaço");
  assert.notEqual(LIGHTING_DESIGN_LESSON_COPY.en.continuity_color_pipeline.title, LIGHTING_DESIGN_LESSON_COPY.nb.continuity_color_pipeline.title);
});
