import assert from "node:assert/strict";
import test from "node:test";

import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import {
  FILM_CRAFT_DOMAIN_IDS,
  FILM_KNOWLEDGE_OVERLAYS_COPY,
  FILM_RESEARCH_STATUS_IDS,
  getFilmCraftDomainLabel,
  getFilmResearchStatusLabel,
} from "./filmKnowledgeOverlaysCopy.js";

test("knowledge overlay copy covers every FilmWork language", () => {
  assert.deepEqual(Object.keys(FILM_KNOWLEDGE_OVERLAYS_COPY).sort(), [...FILMWORK_LANGUAGES].sort());
});

test("research and craft filters keep stable canonical ids", () => {
  assert.deepEqual(FILM_RESEARCH_STATUS_IDS, ["all", "needs_research", "seeded", "verified"]);
  assert.deepEqual(FILM_CRAFT_DOMAIN_IDS, ["all", "screenplay", "cinematography", "editing", "sound"]);
});

test("canonical linked product names remain unchanged", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_KNOWLEDGE_OVERLAYS_COPY[language];
    assert.equal(copy.research.actions.filmAtlas, "Film Atlas");
    assert.equal(copy.research.actions.filmDirector, "Film Director");
  }
});

test("English chrome preserves current visible wording", () => {
  const copy = FILM_KNOWLEDGE_OVERLAYS_COPY.en;
  assert.equal(copy.research.triggerKicker, "Editorial system");
  assert.equal(copy.research.triggerTitle, "Research control");
  assert.equal(copy.research.heading, "Research control room");
  assert.equal(copy.craft.triggerKicker, "Film science");
  assert.equal(copy.craft.triggerTitle, "Craft library");
  assert.equal(copy.craft.analysisQuestion, "Analysis question");
  assert.equal(copy.craft.productionUse, "Production use");
});

test("status and domain labels are localized from canonical ids", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const status of FILM_RESEARCH_STATUS_IDS) assert.ok(getFilmResearchStatusLabel(language, status).trim());
    for (const domain of FILM_CRAFT_DOMAIN_IDS) assert.ok(getFilmCraftDomainLabel(language, domain).trim());
  }
  assert.equal(getFilmResearchStatusLabel("en", "needs_research"), "Needs research");
  assert.equal(getFilmCraftDomainLabel("en", "cinematography"), "Image");
});

test("dynamic overlay copy preserves counts, percentages, and canonical film titles", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = FILM_KNOWLEDGE_OVERLAYS_COPY[language];
    assert.match(copy.research.verifiedProgress(72), /72/);
    assert.match(copy.research.queueSummary(12), /12/);
    assert.match(copy.research.craftStatements(4), /4/);
    assert.match(copy.research.learningGoals(3), /3/);
    assert.match(copy.craft.techniquesMatched(8, "Film X"), /8/);
    assert.ok(copy.craft.techniquesMatched(8, "Film X").includes("Film X"));
    assert.match(copy.craft.techniquesTotal(8, 44), /8.*44/);
  }
});
