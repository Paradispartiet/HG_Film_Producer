import assert from "node:assert/strict";
import { test } from "node:test";
import { FILMWORK_LANGUAGES } from "./filmWorkLanguage.js";
import { ON_SET_EVENT_IDS } from "./studioCareerOnSetDialogue.js";
import { describeOnSetFollowUp } from "./studioCareerDialogueFollowUp.js";
import type { TeamContinuity } from "./studioCareerTeamContinuity.js";

const supported: TeamContinuity = {
  previousEventId: "production_event_actor_conflict",
  previousPriorityId: "performance_trust",
  previousNeedId: "performance_trust",
  previousWasMatched: true,
  previousWasInterrupted: false,
  shiftedPriority: false,
  recommendedId: "story_clarity"
};
const unresolved: TeamContinuity = {
  ...supported,
  previousPriorityId: "crew_coordination",
  previousWasMatched: false,
  shiftedPriority: true,
  recommendedId: "performance_trust"
};
const interrupted: TeamContinuity = {
  ...unresolved,
  previousWasInterrupted: true,
  shiftedPriority: false,
  recommendedId: "story_clarity"
};

test("each crew member follows up across every playable event and language", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const outputs = new Set<string>();
    for (const current of ON_SET_EVENT_IDS) {
      const line = describeOnSetFollowUp(language, current, supported);
      assert.ok(line && line.length > 75, `${language} ${current}`);
      outputs.add(line);
    }
    assert.equal(outputs.size, ON_SET_EVENT_IDS.length, "Events must have distinct role-specific follow-ups");
  }
});

test("the dialogue reports supported, unfinished and stopped work differently", () => {
  for (const language of FILMWORK_LANGUAGES) {
    const event = "production_event_camera_breakthrough";
    const good = describeOnSetFollowUp(language, event, supported);
    const open = describeOnSetFollowUp(language, event, unresolved);
    const stopped = describeOnSetFollowUp(language, event, interrupted);
    assert.ok(good && open && stopped);
    assert.notEqual(good, open);
    assert.notEqual(open, stopped);
    assert.notEqual(good, stopped);
    const noShift = describeOnSetFollowUp(language, event, { ...unresolved, shiftedPriority: false });
    assert.ok(open.length > (noShift?.length ?? 0), "Open needs are mentioned only for a genuine priority shift");
  }
});

test("follow-up references the actual earlier challenge and safely handles old saves", () => {
  const a = describeOnSetFollowUp("nb", "production_event_camera_breakthrough", supported);
  const b = describeOnSetFollowUp("nb", "production_event_camera_breakthrough", {
    ...supported, previousEventId: "production_event_equipment_failure"
  });
  assert.ok(a && b);
  assert.notEqual(a, b);
  assert.equal(describeOnSetFollowUp("nb", "production_event_camera_breakthrough", undefined), undefined);
  assert.equal(describeOnSetFollowUp("nb", "old_event", supported), undefined);
  assert.equal(describeOnSetFollowUp("nb", "production_event_camera_breakthrough", {
    ...supported, previousEventId: "old_event"
  }), undefined);
});
