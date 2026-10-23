import assert from "node:assert/strict";
import test from "node:test";
import { DIRECTOR_BRIEF_FIELDS } from "./directorBrief.js";
import { DIRECTOR_BRIEF_CHOICES } from "./filmDirectorChoiceCatalog.js";
import {
  getDirectorBriefChoices,
  DIRECTOR_REFERENCE_LABEL,
  type DirectorFilmReference,
} from "./filmDirectorReferenceChoices.js";

const reference: DirectorFilmReference = {
  toneTargets: ["A restrained, uneasy mood", "An exhausted atmosphere"],
  screenplayTargets: ["Stage a conflict through procedure", "Reveal choices through action", "Let a decision reverse the scene"],
  cinematographyTargets: ["Frame bodies against the room", "Use space to reveal power", "Observe reactions in close framing"],
  editingTargets: ["Cut on decisive reactions", "Allow pauses to last"],
  soundTargets: ["Use location sound as pressure", "Let silence feel active"],
  learningGoals: ["Convey a change without exposition"],
};

test("each language provides film-specific alternatives without replacing authored choices", () => {
  for (const language of ["nb", "en", "fr", "pt"] as const) {
    assert.ok(DIRECTOR_REFERENCE_LABEL[language]);
    for (const field of DIRECTOR_BRIEF_FIELDS) {
      const base = DIRECTOR_BRIEF_CHOICES[language][field.id];
      const choices = getDirectorBriefChoices(language, field.id, reference, (value) => `localized: ${value}`);
      assert.deepEqual(choices.slice(0, base.length), base, `${language} ${field.id}: base choices retained`);
      assert.ok(choices.length >= 3 && choices.length <= 4, `${language} ${field.id}: finite choices`);
      assert.equal(new Set(choices).size, choices.length, `${language} ${field.id}: no duplicates`);
      if (choices.length === 4) assert.match(choices[3], /^localized:/, "Film-specific source is presented through translation");
    }
  }
});

test("missing production-brief data keeps only the existing authored choices", () => {
  const blank: DirectorFilmReference = {
    toneTargets: [], screenplayTargets: [], cinematographyTargets: [],
    editingTargets: [], soundTargets: [], learningGoals: [],
  };
  const fallback = getDirectorBriefChoices("nb", "editingRhythm", blank, (value) => value);
  assert.deepEqual(fallback, DIRECTOR_BRIEF_CHOICES.nb.editingRhythm);
});
