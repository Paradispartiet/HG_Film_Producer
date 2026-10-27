import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { SHOOT_DECISION_PREVIEW_COPY } from "./studioCareerDecisionPreviewCopy.js";

test("decision preview explains the same unsaved production result in all four languages", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const copy = SHOOT_DECISION_PREVIEW_COPY[language];
    for (const key of ["heading", "intro", "event", "producerSupport", "shootResponse", "takeQuality", "completedScenes", "delayedScenes", "dayCost", "scheduleDelta", "footnote"] as const) {
      assert.ok(copy[key].trim().length > 3, `${language} missing ${key}`);
    }
    assert.match(copy.days(1), /\+1/);
    assert.match(copy.days(0), /0/);
    assert.match(copy.days(-2), /-2/);
    assert.notEqual(copy.days(1), copy.days(2), `${language} must distinguish singular from plural`);
  }
});
