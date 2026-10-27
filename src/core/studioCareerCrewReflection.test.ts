import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { PRODUCER_PRIORITY_IDS, type ProducerPrioritySummary } from "./applyProducerPriority.js";
import { PRODUCER_PRIORITY_COPY } from "./studioCareerProducerPriorityCopy.js";
import { getUnmetProducerSupport } from "./studioCareerCrewReflection.js";

test("confirmed debrief names only the genuinely unmet team support in every language", () => {
  for (const language of FILMWORK_LANGUAGES) {
    for (const recommendedId of PRODUCER_PRIORITY_IDS) {
      const other = PRODUCER_PRIORITY_IDS.find((id) => id !== recommendedId)!;
      const summary: ProducerPrioritySummary = {
        id: other, recommendedId, approachFits: false, takeQualityDelta: 2, interrupted: false
      };
      const feedback = getUnmetProducerSupport(language, summary);
      const expected = PRODUCER_PRIORITY_COPY[language].options[recommendedId];
      assert.equal(feedback?.id, recommendedId);
      assert.ok(feedback?.heading.includes(expected.title), `${language} ${recommendedId}`);
      assert.equal(feedback?.explanation, expected.description);
      assert.equal(getUnmetProducerSupport(language, { ...summary, interrupted: true }), undefined,
        "No alternative success should be suggested for an interrupted shoot");
      assert.equal(getUnmetProducerSupport(language, {
        ...summary, id: recommendedId, approachFits: true
      }), undefined, "No missing need when the team was already supported");
      assert.equal(getUnmetProducerSupport(language, {
        ...summary, id: recommendedId, approachFits: false
      }), undefined, "Malformed legacy summaries cannot invent an unmet need");
    }
    assert.equal(getUnmetProducerSupport(language, undefined), undefined,
      "Old saves without producer support remain valid");
  }
});
