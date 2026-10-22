import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { STUDIO_CAREER_RELEASE_HANDOFF_COPY } from "./studioCareerReleaseHandoffCopy.js";

test("release handoff is a readable explanation of recorded cut and trailer results in four languages", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_RELEASE_HANDOFF_COPY), [...FILMWORK_LANGUAGES]);
  for (const language of FILMWORK_LANGUAGES) {
    const values = Object.values(STUDIO_CAREER_RELEASE_HANDOFF_COPY[language]);
    assert.ok(values.every((value) => value.trim().length > 0), "Missing release handoff copy: " + language);
    assert.ok(STUDIO_CAREER_RELEASE_HANDOFF_COPY[language].explanation.length > 60, "Missing clear score explanation: " + language);
    assert.ok(STUDIO_CAREER_RELEASE_HANDOFF_COPY[language].disclaimer.length > 45, "Missing forecast disclaimer: " + language);
  }
  assert.match(STUDIO_CAREER_RELEASE_HANDOFF_COPY.nb.explanation, /Lanseringsstrategiens publikumstilpasning/);
  assert.match(STUDIO_CAREER_RELEASE_HANDOFF_COPY.en.disclaimer, /not a forecast/);
});
