import assert from "node:assert/strict";
import test from "node:test";
import { DIRECTOR_BRIEF_FIELDS } from "./directorBrief.js";
import { DIRECTOR_SHOT_FIELDS } from "./directorProject.js";
import {
  DIRECTOR_BRIEF_CHOICES,
  DIRECTOR_SHOT_CHOICES,
  DIRECTOR_CHOOSE_COPY,
} from "./filmDirectorChoiceCatalog.js";

test("Film Director offers distinct selectable answers for every brief and shot decision in all four languages", () => {
  for (const language of ["nb", "en", "fr", "pt"] as const) {
    assert.ok(DIRECTOR_CHOOSE_COPY[language].trim());
    assert.deepEqual(
      Object.keys(DIRECTOR_BRIEF_CHOICES[language]).sort(),
      DIRECTOR_BRIEF_FIELDS.map((field) => field.id).sort(),
    );
    assert.deepEqual(
      Object.keys(DIRECTOR_SHOT_CHOICES[language]).sort(),
      DIRECTOR_SHOT_FIELDS.filter((field) => field !== "shotSize").sort(),
    );
    for (const options of [
      ...Object.values(DIRECTOR_BRIEF_CHOICES[language]),
      ...Object.values(DIRECTOR_SHOT_CHOICES[language]),
    ]) {
      assert.equal(options.length, 3);
      assert.equal(new Set(options).size, 3);
      assert.ok(options.every((option) => option.trim().length > 0));
    }
  }
});
