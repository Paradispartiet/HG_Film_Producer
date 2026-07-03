# Studio Career manual playtest notes

Studio Career is an **experimental playable branch**, not the stable MVP path. These notes document the focused Studio Career path that should be checked before any further Studio Career expansion.

This document is intentionally limited to documentation and test notes. It does not change app logic, UI, routing, scoring, storage, seed data, simulation formulas, career logic, Production Cases logic, or gameplay behavior.

## References

- [`docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md`](STUDIO_CAREER_EXPERIMENTAL_STATUS.md)
- [`docs/GAME_DIRECTION.md`](GAME_DIRECTION.md)
- [`docs/GAME_DIRECTION_ALIGNMENT_AUDIT.md`](GAME_DIRECTION_ALIGNMENT_AUDIT.md)
- [`README.md`](../README.md)

## Scope guard

Studio Career should remain a testable experimental branch until this path has been validated in a browser. Do not use these notes as permission to add new studio systems, deeper economy, awards, investors, distribution, crew/cast simulation, AI/manus, atlas/location systems, or broad content.

The playtest focus is whether the current pipeline is understandable, actionable, and free of trapped states while still supporting the project goal: learning film through production choices rather than simply completing a generic tycoon pipeline.

## Exact Studio Career path documented

```text
fresh app
→ landing screen
→ Experimental Studio Career / new career
→ Film One setup
→ development
→ pre-production
→ full shoot schedule
→ post-production
→ release
→ career review / apply result
→ Film Two
→ Film One compact summary / Show details
→ continuity and learning checks
```


## Manual pass record

This file defines the detailed Studio Career test path/checklist. The current consolidated result, browser-driven QA status, and final experimental v0.1 gate live in [`docs/PLAYABLE_MODES_QA_STATUS.md`](PLAYABLE_MODES_QA_STATUS.md).

Use the checklist below for the next real browser-driven playthrough. Update the consolidated status file with the overall result after that pass, and keep this file focused on the path, expected observations, and concrete notes.

## 1. New career path

**Steps**

1. Open the app fresh with no assumed saved career state.
2. Confirm the landing screen labels Studio Career as experimental.
3. Start a new Studio Career.
4. Confirm the player understands this is not the stable MVP path.
5. Confirm the first actionable step is clear.

**Expected observations**

- The landing screen should make Production Cases feel like the recommended stable MVP and Studio Career feel like an experimental branch.
- Starting Studio Career should not imply that it is the stable main path.
- The first actionable step should point the player toward creating or starting the first project, not toward unrelated dev or future-mode surfaces.

**Playtest note**

- Source-level inspection indicates the landing copy and action label identify Studio Career as experimental, and the first Studio Career workspace begins with a first-project setup panel.

## 2. Film One setup

**Steps**

1. Create or start Film One.
2. Confirm the active project/workspace is visible.
3. Confirm the player understands the current pipeline step.

**Expected observations**

- Film One should be visibly presented as the active project.
- The pipeline should show the current phase rather than making the player infer progress from hidden state.
- The next action should keep the player inside Film One's current workspace.

**Playtest note**

- Source-level inspection indicates the Studio Career project section renders the project pipeline and phase-specific panels for the active project.

## 3. Development

**Steps**

1. Complete development actions.
2. Confirm there are no phantom Idea or Script steps.
3. Confirm Continue/Open actions move to the active panel.

**Expected observations**

- Development should be the first substantive production phase after setup.
- Any development actions should complete into the visible pipeline without exposing unused Idea or Script steps.
- Continue/Open actions should move the player to the currently active panel, not a stale or completed panel.

**Playtest note**

- Source-level inspection indicates the visible pipeline begins at Development and advances to Pre-production, Shoot, Post-production, Release, and Career review.

## 4. Pre-production

**Steps**

1. Complete pre-production choices.
2. Confirm controls are scoped to the active project.
3. Confirm there are no dead buttons or unclear next action.

**Expected observations**

- Crew, cast, and location choices should clearly belong to the active project.
- Locking pre-production should advance the same project into the shoot phase.
- No pre-production control should appear to affect completed or future films.

**Playtest note**

- Source-level inspection indicates pre-production selection and lock actions are called with the active project id.

## 5. Shoot

**Steps**

1. Play through the full shoot schedule.
2. Confirm day-by-day progression is understandable.
3. Confirm there is no stuck day or missing next action.

**Expected observations**

- Each shoot day should communicate what happened and what remains.
- The player should be able to resolve the full schedule without encountering a missing next action.
- Completion of the full shoot should reveal post-production as the next clear step.

**Playtest note**

- Source-level inspection indicates shoot-day resolution is recorded against the active project and post-production appears only after a shoot result exists.

## 6. Post-production

**Steps**

1. Complete post-production.
2. Confirm the result/report language is understandable.
3. Confirm the next action is visible.

**Expected observations**

- Post-production should explain the result in player-facing production language.
- The next action should clearly lead to release.
- The player should not need to search older panels to continue.

**Playtest note**

- Source-level inspection indicates the release panel appears after both shoot and post-production results exist.

## 7. Release

**Steps**

1. Complete release choices.
2. Confirm the release result appears before career review.
3. Confirm there is no duplicated result panel.
4. Confirm release/festival controls do not conflict across projects.

**Expected observations**

- Release should produce a visible result before career application/review becomes available.
- Career review should not appear as an unexplained shortcut before the film has a release result.
- Release controls should remain scoped to the active film and not conflict with completed-film or future-film controls.

**Playtest note**

- Source-level inspection indicates Career review is rendered after a release result exists, and release actions are called with the active project id.

## 8. Career review / career application

**Steps**

1. Open Career review.
2. Confirm it appears only after release result exists.
3. Apply the film result to the career.
4. Confirm money, reputation, prestige, and career stats update visibly.
5. Confirm expenses/career-year review does not confuse the player.

**Expected observations**

- Career review should feel like applying a completed film result, not like a separate economy game.
- Career state updates should be visible and understandable.
- Expenses and career-year review should not distract from the production-learning loop.

**Playtest note**

- Source-level inspection indicates career application is gated behind release result and can render updated career carryover information for the next project.

## 9. Film Two

**Steps**

1. Start Film Two.
2. Confirm Film One collapses into compact summary.
3. Confirm Film Two is immediately visible/actionable.
4. Confirm Show details on Film One works.
5. Confirm there is no long-scroll trap.

**Expected observations**

- Film One should collapse into a compact completed-film summary once Film Two is active.
- Film Two should be the immediately actionable project.
- Show details should let the player inspect Film One without blocking Film Two progression.
- The player should not have to scroll through a full completed Film One pipeline to find Film Two.

**Playtest note**

- Source-level inspection indicates non-latest completed projects can render a compact summary with a Show details / Hide details toggle, while the latest project remains expanded and actionable.

## 10. Continuity checks

**Steps**

1. Confirm returning crew/cast continuity or growth is visible enough to understand.
2. Confirm completed-film summary does not overemphasize generic tycoon metrics.
3. Confirm the flow still supports learning film through production choices, not just pipeline completion.

**Expected observations**

- Carryover should help the player understand how previous production choices affect the next project.
- Money, reputation, prestige, revenue, and awards-style metrics should not dominate the experience so much that the player reads Studio Career as a generic tycoon.
- The play path should keep production judgment, constraints, and film craft at the center.

**Playtest note**

- Source-level inspection indicates Studio Career includes carryover and completed-film summaries, but browser playtesting is still needed to judge whether the balance reads as film-learning rather than generic pipeline completion.

## 11. Status pointer

Current overall Studio Career QA status is intentionally not repeated here. See [`docs/PLAYABLE_MODES_QA_STATUS.md`](PLAYABLE_MODES_QA_STATUS.md) for:

- Whether the browser-driven pass is complete.
- The current consolidated result.
- The final gate before Studio Career experimental v0.1.
- The allowed/frozen scope before that gate.

This checklist remains documentation-only and does not change Studio Career behavior.
