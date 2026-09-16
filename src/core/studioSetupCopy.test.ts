import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  STUDIO_SETUP_COPY,
  STUDIO_SETUP_PRESET_IDS,
  STUDIO_SETUP_SCALE_IDS,
} from "./studioSetupCopy.js";

test("Studio setup copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(STUDIO_SETUP_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("Studio setup keeps stable preset and production-scale ids", () => {
  assert.deepEqual(STUDIO_SETUP_PRESET_IDS, ["micro_studio", "indie_studio", "prestige_startup"]);
  assert.deepEqual(STUDIO_SETUP_SCALE_IDS, ["micro", "indie", "mid_budget", "studio", "prestige"]);
  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(STUDIO_SETUP_COPY[language].studio.presets).sort(), [...STUDIO_SETUP_PRESET_IDS].sort(), language);
    assert.deepEqual(Object.keys(STUDIO_SETUP_COPY[language].project.scales).sort(), [...STUDIO_SETUP_SCALE_IDS].sort(), language);
  }
});

test("English Studio setup chrome preserves current visible wording", () => {
  const copy = STUDIO_SETUP_COPY.en;
  assert.equal(copy.panel.kicker, "New studio slate");
  assert.equal(copy.panel.heading, "Create your first project");
  assert.equal(copy.panel.mandateHeading, "Set the mandate");
  assert.equal(copy.panel.createProject, "Create project");
  assert.equal(copy.studio.heading, "Build the studio");
  assert.equal(copy.project.heading, "Package the first film");
  assert.equal(copy.goal.legend, "Strategic goal");
  assert.equal(copy.genre.legend, "Genre");
  assert.equal(copy.scriptTemplate.legend, "Script template");
});

test("Studio setup validation copy covers every required field", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const validation = STUDIO_SETUP_COPY[language].validation;
    assert.ok(validation.studioName.trim());
    assert.ok(validation.strategicGoal.trim());
    assert.ok(validation.projectTitle.trim());
    assert.ok(validation.genre.trim());
    assert.ok(validation.scriptTemplate.trim());
  }
});

test("dynamic goal and preset chrome preserves numeric values", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = STUDIO_SETUP_COPY[language];
    assert.match(copy.goal.targetYear(3), /3/);
    assert.match(copy.studio.presetMeta("$1,000,000", 12, 7), /1.*12.*7/);
  }
});
