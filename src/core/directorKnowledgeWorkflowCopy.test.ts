import assert from "node:assert/strict";
import test from "node:test";

import { DIRECTOR_WORKFLOW } from "./directorKnowledge.js";
import {
  FILM_DIRECTOR_WORKFLOW_COPY,
  getDirectorWorkflowNarrative,
} from "./directorKnowledgeWorkflowCopy.js";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";

const chromeKeys = [
  "railAria",
  "stepLabel",
  "directorDoes",
  "outputs",
  "collaborators",
  "terms",
] as const;

test("Film Director workflow copy covers all FilmWork languages", () => {
  assert.deepEqual(Object.keys(FILM_DIRECTOR_WORKFLOW_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("every language covers the exact canonical workflow ID set", () => {
  const workflowIds = DIRECTOR_WORKFLOW.map((step) => step.id).sort();

  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_DIRECTOR_WORKFLOW_COPY[language];
    assert.deepEqual(Object.keys(copy.steps).sort(), workflowIds, `${language}:workflow IDs`);

    for (const key of chromeKeys) assert.ok(copy[key].trim().length > 0, `${language}:${key}`);

    for (const step of DIRECTOR_WORKFLOW) {
      const display = getDirectorWorkflowNarrative(language, step);
      assert.ok(display.title.trim().length > 0, `${language}:${step.id}:title`);
      assert.ok(display.goal.trim().length > 0, `${language}:${step.id}:goal`);
      assert.equal(display.actions.length, step.actions.length, `${language}:${step.id}:actions`);
      assert.equal(display.outputs.length, step.outputs.length, `${language}:${step.id}:outputs`);
      assert.equal(display.collaborators.length, step.collaborators.length, `${language}:${step.id}:collaborators`);
      for (const item of [...display.actions, ...display.outputs, ...display.collaborators]) {
        assert.ok(item.trim().length > 0, `${language}:${step.id}:item`);
      }
    }
  }
});

test("NB workflow narrative remains exactly canonical", () => {
  for (const step of DIRECTOR_WORKFLOW) {
    const display = getDirectorWorkflowNarrative("nb", step);
    assert.equal(display.title, step.title, `${step.id}:title`);
    assert.equal(display.goal, step.goal, `${step.id}:goal`);
    assert.deepEqual(display.actions, step.actions, `${step.id}:actions`);
    assert.deepEqual(display.outputs, step.outputs, `${step.id}:outputs`);
    assert.deepEqual(display.collaborators, step.collaborators, `${step.id}:collaborators`);
  }
});

test("EN, FR and PT localize every workflow title and goal", () => {
  for (const language of ["en", "fr", "pt"] as const) {
    for (const step of DIRECTOR_WORKFLOW) {
      const display = getDirectorWorkflowNarrative(language, step);
      assert.notEqual(display.title, step.title, `${language}:${step.id}:title`);
      assert.notEqual(display.goal, step.goal, `${language}:${step.id}:goal`);
    }
  }
});

test("representative professional workflow wording is localized", () => {
  assert.deepEqual(
    [
      FILM_DIRECTOR_WORKFLOW_COPY.en.steps["picture-edit"]?.title,
      FILM_DIRECTOR_WORKFLOW_COPY.fr.steps["location-tech-scout"]?.title,
      FILM_DIRECTOR_WORKFLOW_COPY.pt.steps["shooting-floor"]?.title,
    ],
    ["Build the picture edit", "Repérage et visite technique", "Dirigir a rodagem"],
  );
});
