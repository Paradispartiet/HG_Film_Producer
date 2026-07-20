import assert from "node:assert/strict";
import test from "node:test";

import {
  DIRECTOR_KNOWLEDGE_CATEGORIES,
  DIRECTOR_KNOWLEDGE_SOURCES,
  DIRECTOR_TERMS,
  DIRECTOR_WORKFLOW,
  getDirectorTermsForWorkflowStep,
  searchDirectorTerms,
} from "./directorKnowledge.js";

test("provides a broad canonical directing vocabulary", () => {
  assert.ok(DIRECTOR_TERMS.length >= 140, `expected at least 140 terms, received ${DIRECTOR_TERMS.length}`);
  assert.equal(new Set(DIRECTOR_TERMS.map((term) => term.id)).size, DIRECTOR_TERMS.length);
});

test("covers every directing craft category with a substantial vocabulary", () => {
  for (const category of DIRECTOR_KNOWLEDGE_CATEGORIES) {
    const terms = DIRECTOR_TERMS.filter((term) => term.category === category.id);
    assert.ok(terms.length >= 10, `${category.id} should contain at least ten terms`);
  }
});

test("uses only registered phases, levels, categories and sources", () => {
  const categories = new Set(DIRECTOR_KNOWLEDGE_CATEGORIES.map((category) => category.id));
  const sources = new Set(DIRECTOR_KNOWLEDGE_SOURCES.map((source) => source.id));
  const phases = new Set(["development", "preproduction", "production", "postproduction"]);
  const levels = new Set(["foundation", "intermediate", "advanced"]);

  for (const term of DIRECTOR_TERMS) {
    assert.ok(categories.has(term.category));
    assert.ok(phases.has(term.phase));
    assert.ok(levels.has(term.level));
    assert.ok(term.definition.length > 20);
    assert.ok(term.directorUse.length > 20);
    assert.ok(term.example.length > 10);
    assert.ok(term.sourceIds.length > 0);
    for (const sourceId of term.sourceIds) assert.ok(sources.has(sourceId), `${term.id} references missing source ${sourceId}`);
  }
});

test("models the director workflow from script interpretation through finishing", () => {
  assert.equal(DIRECTOR_WORKFLOW.length, 12);
  assert.deepEqual(DIRECTOR_WORKFLOW.map((step) => step.order), Array.from({ length: 12 }, (_, index) => index + 1));
  assert.equal(DIRECTOR_WORKFLOW[0]?.phase, "development");
  assert.equal(DIRECTOR_WORKFLOW.at(-1)?.phase, "postproduction");

  for (const step of DIRECTOR_WORKFLOW) {
    assert.ok(step.actions.length >= 3);
    assert.ok(step.outputs.length >= 3);
    assert.ok(step.collaborators.length >= 2);
    assert.equal(getDirectorTermsForWorkflowStep(step).length, step.termIds.length, `${step.id} has unresolved terminology links`);
  }
});

test("searches English terms, Norwegian terminology and explanations", () => {
  assert.deepEqual(searchDirectorTerms("rack focus").map((term) => term.id), ["rack_focus"]);
  assert.ok(searchDirectorTerms("nærbilde").some((term) => term.id === "close_up"));
  assert.ok(searchDirectorTerms("skjermretning", "blocking_staging").some((term) => term.id === "screen_direction"));
  assert.ok(searchDirectorTerms("output transform", "all", "postproduction").some((term) => term.id === "output_transform"));
  assert.equal(searchDirectorTerms("rack focus", "sound_music").length, 0);
});
