import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { STUDIO_CAREER_RELEASE_HANDOFF_COPY } from "./studioCareerReleaseHandoffCopy.js";

test("release handoff is a readable explanation of recorded cut and trailer results in four languages", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_RELEASE_HANDOFF_COPY), [...FILMWORK_LANGUAGES]);
  for (const language of FILMWORK_LANGUAGES) {
    const values = Object.values(STUDIO_CAREER_RELEASE_HANDOFF_COPY[language]);
    assert.ok(values.every((value) => value.trim().length > 10), "Missing or vague release handoff copy: " + language);
  }
  assert.match(STUDIO_CAREER_RELEASE_HANDOFF_COPY.nb.explanation, /Lanseringsstrategiens publikumstilpasning/);
  assert.match(STUDIO_CAREER_RELEASE_HANDOFF_COPY.en.disclaimer, /not a forecast/);
});
