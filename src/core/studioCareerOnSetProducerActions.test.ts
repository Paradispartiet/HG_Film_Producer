import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { PRODUCER_PRIORITY_IDS, applyProducerPriority } from "./applyProducerPriority.js";
import { getOnSetProducerAction, ON_SET_PRODUCER_ACTIONS } from "./studioCareerOnSetProducerActions.js";
import { getOnSetConversation } from "./studioCareerOnSetDialogue.js";
import type { ShootDayResult } from "../domain/shoot.js";

const day = {
  takeQuality: 60, completedSceneIds: ["scene_1"], delayedSceneIds: []
} as unknown as ShootDayResult;

test("five real set problems offer three distinct practical producer actions in four languages", () => {
  const expectedEvents = [
    "production_event_bad_weather",
    "production_event_equipment_failure",
    "production_event_actor_conflict",
    "production_event_permit_issue",
    "production_event_budget_overrun"
  ];
  for (const language of FILMWORK_LANGUAGES) {
    assert.deepEqual(Object.keys(ON_SET_PRODUCER_ACTIONS[language]), expectedEvents);
    for (const event of expectedEvents) {
      const actions = PRODUCER_PRIORITY_IDS.map((id) => getOnSetProducerAction(language, event, id));
      assert.ok(actions.every((action) => action && action.length > 70), language + " " + event);
      assert.equal(new Set(actions).size, 3, "Different department support means a different action");
    }
  }
});

test("the specific selected action is the producer's actual report dialogue, not a different promise", () => {
  const summary = applyProducerPriority(day, { type: "conflict", possibleUpside: false }, "performance_trust").summary;
  for (const language of FILMWORK_LANGUAGES) {
    const action = getOnSetProducerAction(language, "production_event_actor_conflict", "performance_trust");
    const dialogue = getOnSetConversation(language, "production_event_actor_conflict", "performance_trust", summary, 1);
    assert.equal(dialogue?.reply, action);
  }
  const legacy = getOnSetConversation("nb", "production_event_actor_conflict", "performance_trust", summary);
  assert.ok(legacy?.reply.includes("skjermer prøvetid"), "Older saved decisions must keep the original generic spoken action");
  assert.notEqual(legacy?.reply, getOnSetProducerAction("nb", "production_event_actor_conflict", "performance_trust"));
  assert.equal(summary.takeQualityDelta, 8, "The existing engine, not localized prose, determines the consequence");
});

test("older or unsupported events safely retain the original producer dialogue", () => {
  assert.equal(getOnSetProducerAction("nb", undefined, "story_clarity"), undefined);
  assert.equal(getOnSetProducerAction("nb", "unknown", "story_clarity"), undefined);
  assert.equal(getOnSetProducerAction("nb", "production_event_perfect_weather", "story_clarity"), undefined);
  const summary = applyProducerPriority(day, { type: "inspiration", possibleUpside: true }, "story_clarity").summary;
  const dialogue = getOnSetConversation("nb", "production_event_perfect_weather", "story_clarity", summary);
  assert.ok(dialogue?.reply.includes("samler regissør"));
});
