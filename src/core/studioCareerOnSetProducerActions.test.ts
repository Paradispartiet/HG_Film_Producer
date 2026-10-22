import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { PRODUCER_PRIORITY_IDS, applyProducerPriority } from "./applyProducerPriority.js";
import { getOnSetProducerAction, ON_SET_PRODUCER_ACTIONS } from "./studioCareerOnSetProducerActions.js";
import { getOnSetConversation, ON_SET_EVENT_IDS } from "./studioCareerOnSetDialogue.js";
import type { ShootDayResult } from "../domain/shoot.js";

const day = {
  takeQuality: 60, completedSceneIds: ["scene_1"], delayedSceneIds: []
} as unknown as ShootDayResult;

const firstFive = new Set([
  "production_event_bad_weather",
  "production_event_equipment_failure",
  "production_event_actor_conflict",
  "production_event_permit_issue",
  "production_event_budget_overrun"
]);

test("all ten shoot problems offer three distinct practical producer decisions in all four languages", () => {
  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(ON_SET_PRODUCER_ACTIONS[language]).sort(), [...ON_SET_EVENT_IDS].sort());
    const choices = new Set<string>();
    for (const event of ON_SET_EVENT_IDS) {
      const actions = PRODUCER_PRIORITY_IDS.map((id) => getOnSetProducerAction(language, event, id, 2));
      assert.ok(actions.every((action) => action && action.length > 70), language + " " + event);
      assert.equal(new Set(actions).size, 3, "Distinct producer priorities must offer distinct actions");
      for (const action of actions) if (action) choices.add(action);
    }
    assert.equal(choices.size, ON_SET_EVENT_IDS.length * PRODUCER_PRIORITY_IDS.length, "Each scenario needs its own decisions");
  }
});

test("chosen practical action appears unchanged in the crew conversation and report replay", () => {
  const summary = applyProducerPriority(day, { type: "conflict", possibleUpside: false }, "performance_trust").summary;
  for (const language of FILMWORK_LANGUAGES) {
    for (const event of ON_SET_EVENT_IDS) {
      for (const priority of PRODUCER_PRIORITY_IDS) {
        const action = getOnSetProducerAction(language, event, priority, 2);
        assert.equal(getOnSetConversation(language, event, priority, summary, 2)?.reply, action);
      }
    }
  }
  assert.equal(summary.takeQualityDelta, 8, "The existing engine, not the language copy, decides quality");
});

test("a v1 save preserves its actual old words, including generic choices for the five later events", () => {
  const summary = applyProducerPriority(day, { type: "inspiration", possibleUpside: true }, "story_clarity").summary;
  for (const language of FILMWORK_LANGUAGES) {
    for (const event of ON_SET_EVENT_IDS) {
      const v1 = getOnSetProducerAction(language, event, "story_clarity", 1);
      const v2 = getOnSetProducerAction(language, event, "story_clarity", 2);
      assert.ok(v2, "Every current event has a new action");
      if (firstFive.has(event)) {
        assert.equal(v1, v2, "Existing v1 practical actions must not be rewritten");
        assert.equal(getOnSetConversation(language, event, "story_clarity", summary, 1)?.reply, v1);
      } else {
        assert.equal(v1, undefined, "Event was still generic when version 1 was saved");
        assert.notEqual(getOnSetConversation(language, event, "story_clarity", summary, 1)?.reply, v2);
      }
      assert.notEqual(getOnSetConversation(language, event, "story_clarity", summary)?.reply, v2,
        "Legacy saves without a version must not acquire an invented practical action");
    }
  }
});

test("unknown event IDs and missing context remain safe", () => {
  assert.equal(getOnSetProducerAction("nb", undefined, "story_clarity"), undefined);
  assert.equal(getOnSetProducerAction("nb", "old_unknown_event", "story_clarity", 2), undefined);
  const summary = applyProducerPriority(day, { type: "inspiration", possibleUpside: true }, "story_clarity").summary;
  assert.equal(getOnSetConversation("nb", "old_unknown_event", "story_clarity", summary, 2), undefined);
});