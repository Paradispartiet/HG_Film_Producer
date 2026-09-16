import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { STUDIO_CAREER_APP_SHELL_COPY } from "./studioCareerAppShellCopy.js";

test("Studio Career app shell copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_CAREER_APP_SHELL_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("canonical product names remain unchanged in every language", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_CAREER_APP_SHELL_COPY[language];
    assert.equal(copy.productName, "HG Film Producer", language);
    assert.equal(copy.navigation.productionCases, "Production Cases", language);
    assert.match(copy.career.productionCasesKicker, /^Production Cases/, language);
  }
});

test("English app shell preserves current visible wording", () => {
  const copy = STUDIO_CAREER_APP_SHELL_COPY.en;
  assert.equal(copy.newStudioFallback, "New studio");
  assert.equal(copy.navigation.ariaLabel, "Dashboard mode");
  assert.equal(copy.navigation.workspace, "Production workspace");
  assert.equal(copy.navigation.demoInspection, "Demo inspection");
  assert.equal(copy.navigation.experimentalCareer, "Experimental Career");
  assert.equal(copy.navigation.titleScreen, "Title screen");
  assert.equal(copy.footer.productionCases, "Stable Production Cases MVP");
  assert.equal(copy.footer.experimentalCareer, "Experimental Studio Career branch");
  assert.equal(copy.demo.kicker, "Portfolio overview");
  assert.equal(copy.demo.heading, "Production desk");
  assert.equal(copy.career.reset, "Reset career");
});

test("career and Production Cases shell variants stay distinct", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_CAREER_APP_SHELL_COPY[language];
    assert.ok(copy.career.productionCasesHeading.trim());
    assert.ok(copy.career.productionCasesIntro.trim());
    assert.ok(copy.career.experimentalHeading.trim());
    assert.ok(copy.career.experimentalIntro.trim());
    assert.notEqual(copy.career.productionCasesHeading, copy.career.experimentalHeading, language);
  }
});
