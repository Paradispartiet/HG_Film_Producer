import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { PRODUCER_PRIORITY_IDS } from "./applyProducerPriority.js";
import { PRODUCER_PRIORITY_COPY } from "./studioCareerProducerPriorityCopy.js";
import { ON_SET_DIALOGUE_VIEW_COPY } from "./studioCareerDialogueViewCopy.js";

test("on-set conversation stages, outcomes and carry-over labels exist in every language", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = ON_SET_DIALOGUE_VIEW_COPY[language];
    for (const key of ["concern", "producerAction", "response", "takeaway"] as const) {
      assert.ok(copy[key].length > 5, `${language} missing ${key}`);
    }
    const outcomes = Object.values(copy.status);
    assert.equal(outcomes.length, 3);
    assert.equal(new Set(outcomes).size, 3, `${language}: stopped, matched and partial must differ`);
    for (const value of outcomes) assert.ok(value.length > 6);
    const previews = Object.values(copy.previewStatus);
    assert.equal(previews.length, 3);
    assert.equal(new Set(previews).size, 3, `${language}: each forecast needs a distinct label`);
    for (const state of ["matched", "partial", "stopped"] as const) {
      assert.ok(copy.previewStatus[state].length > 6);
      assert.notEqual(copy.previewStatus[state], copy.status[state],
        `${language}: a forecast must not read like an accomplished outcome`);
    }
    assert.ok(copy.missingNeed.length > 8, `${language}: missing debrief label`);
    for (const priority of PRODUCER_PRIORITY_IDS) {
      const name = PRODUCER_PRIORITY_COPY[language].options[priority].title;
      assert.ok(copy.openNeed(name).includes(name), `${language}: carry-over must name the real priority`);
    }
  }
});
