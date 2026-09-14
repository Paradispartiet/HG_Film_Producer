import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_BRIEF_FIELDS } from "./directorBrief.js";
import {
  DIRECTOR_COURSE_ASSIGNMENT_BANNER_COPY,
  buildDirectorCourseAssignmentValidationGuidance,
} from "./directorCourseAssignmentBannerCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

const FIELD_IDS = DIRECTOR_BRIEF_FIELDS.map((field) => field.id).sort();

test("Director course assignment banner copy covers all four FilmWork languages", () => {
  assert.deepEqual(Object.keys(DIRECTOR_COURSE_ASSIGNMENT_BANNER_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("each language covers exactly all 16 Director brief fields", () => {
  assert.equal(FIELD_IDS.length, 16);
  for (const language of FILMWORK_LANGUAGES) {
    const labels = DIRECTOR_COURSE_ASSIGNMENT_BANNER_COPY[language].fieldLabels;
    assert.deepEqual(Object.keys(labels).sort(), FIELD_IDS, `${language}:field ids`);
    for (const fieldId of FIELD_IDS) {
      assert.ok(labels[fieldId].trim().length > 0, `${language}:${fieldId}`);
    }
  }
});

test("English field labels preserve the canonical Director brief labels", () => {
  const labels = DIRECTOR_COURSE_ASSIGNMENT_BANNER_COPY.en.fieldLabels;
  for (const field of DIRECTOR_BRIEF_FIELDS) {
    assert.equal(labels[field.id], field.label, field.id);
  }
});

test("all languages provide non-empty banner chrome and submission copy", () => {
  const stringKeys = [
    "assignmentAria",
    "capstoneAria",
    "dismissAssignment",
    "assignmentEyebrow",
    "capstoneEyebrow",
    "briefFieldsInActiveScene",
    "completeShotCards",
    "correctReferenceFilm",
    "yes",
    "no",
    "readyToSubmit",
    "projectChangedAfterSubmission",
    "goToSceneBrief",
    "goToShotPlan",
    "submitExam",
    "submitUpdatedVersion",
    "examSubmitted",
    "unknownTime",
  ] as const;

  for (const language of FILMWORK_LANGUAGES) {
    const copy = DIRECTOR_COURSE_ASSIGNMENT_BANNER_COPY[language];
    for (const key of stringKeys) {
      assert.ok(copy[key].trim().length > 0, `${language}:${key}`);
    }
    assert.ok(copy.submitted("14 Sep 2026, 07:30", "Scene 12").includes("Scene 12"), `${language}:submitted scene title`);
  }
});

test("validation guidance localizes missing project, brief fields and shot cards", () => {
  const input = { assignmentMatchesProject: false, missingBriefFields: 2, missingShotCards: 1 };
  const messages = FILMWORK_LANGUAGES.map((language) => buildDirectorCourseAssignmentValidationGuidance(language, input));

  for (const message of messages) {
    assert.ok(message.length > 30);
    assert.ok(message.endsWith("."));
  }

  const patterns = [
    ["en", /Film School/],
    ["nb", /regifelt/],
    ["fr", /réalisation/],
    ["pt", /realização/],
  ] as const;
  for (const [language, pattern] of patterns) {
    assert.match(buildDirectorCourseAssignmentValidationGuidance(language, input), pattern);
  }

  assert.match(buildDirectorCourseAssignmentValidationGuidance("nb", {
    assignmentMatchesProject: true,
    missingBriefFields: 1,
    missingShotCards: 0,
  }), /1 åpent regifelt/);
});

test("validation guidance has a localized fail-closed fallback", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const message = buildDirectorCourseAssignmentValidationGuidance(language, {
      assignmentMatchesProject: true,
      missingBriefFields: 0,
      missingShotCards: 0,
    });
    assert.ok(message.trim().length > 0, language);
  }
});
