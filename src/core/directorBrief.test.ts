import assert from "node:assert/strict";
import test from "node:test";

import {
  buildDirectorBriefText,
  coerceDirectorBriefDraft,
  countCompletedDirectorBriefFields,
  createBlankDirectorBrief,
  getDirectorBriefStorageKey,
} from "./directorBrief.js";

const identity = {
  filmId: "mulholland_drive",
  filmTitle: "Mulholland Drive",
  filmYear: 2001,
} as const;

test("creates an empty directing brief for one reference film", () => {
  const draft = createBlankDirectorBrief(identity, "2026-07-20T10:00:00.000Z");
  assert.equal(draft.filmId, identity.filmId);
  assert.equal(draft.sceneTitle, "");
  assert.equal(countCompletedDirectorBriefFields(draft), 0);
});

test("coerces persisted data without accepting invalid values", () => {
  const draft = coerceDirectorBriefDraft(
    {
      sceneTitle: "Club Silencio",
      blocking: 42,
      soundStrategy: "Sound separates performance from source.",
      updatedAt: "2026-07-20T10:10:00.000Z",
    },
    identity,
  );

  assert.equal(draft.sceneTitle, "Club Silencio");
  assert.equal(draft.blocking, "");
  assert.equal(draft.soundStrategy, "Sound separates performance from source.");
  assert.equal(countCompletedDirectorBriefFields(draft), 2);
});

test("uses a stable storage key per film", () => {
  assert.equal(
    getDirectorBriefStorageKey(identity.filmId),
    "hg_film_director_brief_v1:mulholland_drive",
  );
});

test("exports a readable complete director brief", () => {
  const draft = {
    ...createBlankDirectorBrief(identity, "2026-07-20T10:20:00.000Z"),
    sceneTitle: "Club Silencio",
    audienceEffect: "Uncertainty becomes emotional certainty.",
    soundStrategy: "Expose the split between voice, body, and recorded sound.",
  };
  const text = buildDirectorBriefText(draft);

  assert.match(text, /FILM DIRECTOR BRIEF/);
  assert.match(text, /Mulholland Drive \(2001\)/);
  assert.match(text, /Scene: Club Silencio/);
  assert.match(text, /AUDIENCE EFFECT/);
  assert.match(text, /SOUND STRATEGY/);
});
