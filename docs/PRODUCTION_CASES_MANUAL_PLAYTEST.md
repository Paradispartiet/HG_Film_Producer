# Production Cases manual playtest notes

These notes recreate the Production Cases manual playtest report in the correct repository after rollback of the misplaced History-Go PR #1632. This is documentation/test-notes only: no app logic, UI, routing, scoring, storage, seed data, simulation formulas, career logic, Production Cases logic, or gameplay behavior is changed by this note.

## References used

- [`docs/PRODUCTION_CASES_MVP_CHECKPOINT.md`](PRODUCTION_CASES_MVP_CHECKPOINT.md)
- [`docs/GAME_DIRECTION.md`](GAME_DIRECTION.md)
- [`docs/GAME_DIRECTION_ALIGNMENT_AUDIT.md`](GAME_DIRECTION_ALIGNMENT_AUDIT.md)
- [`README.md`](../README.md)

## Scope

Production Cases is the stable MVP checkpoint and reference loop. The path below is the manual validation path for the existing loop:

```text
Title screen
→ Start Production Cases
→ Start here / Start first case
→ choose production case
→ make production choices
→ complete all missions
→ Case report
→ Play again / Next case
→ progress / best result
```

This playtest note is intentionally limited to observing and documenting the existing Production Cases path. It does not propose fixes, add cases, expand Studio Career, or change gameplay.

## Test environment and method

This file defines the detailed Production Cases test path/checklist. The current consolidated result, browser-driven QA status, and final v0.1 gate live in [`docs/PLAYABLE_MODES_QA_STATUS.md`](PLAYABLE_MODES_QA_STATUS.md).

Use the checklist below for the next real browser-driven playthrough. Update the consolidated status file with the overall result after that pass, and keep this file focused on the path, expected observations, and concrete notes.

## Manual playtest checklist

### 1. New player path

**Path to test**

1. Open app fresh.
2. Confirm landing screen clearly recommends Production Cases first.
3. Click **Start Production Cases**.
4. Confirm Production Cases library opens.
5. Confirm first-session / **Start first case** guidance is visible.

**Source-level notes**

- The landing screen identifies Production Cases as the recommended first path.
- The Production Cases library includes a start-here section with a **Start first case** action for first-session guidance.

**Status:** Source-level pass; browser confirmation still needed.

### 2. First case path

**Path to test**

1. Click **Start first case**.
2. Confirm an existing production case opens.
3. Make production choices through all phases/missions.
4. Confirm no report appears before all missions are complete.
5. Complete the case.

**Source-level notes**

- The MVP checkpoint defines the intended flow from start guidance into an existing case, choices, all missions, and then report.
- Existing tests and UI source references cover the report gate and in-progress report state.

**Status:** Source-level pass; browser confirmation still needed.

### 3. Case report path

**Path to test**

1. Confirm **Case report** appears only after completion.
2. Confirm report shows score/result/tier.
3. Confirm report explains matched choices and improvements.
4. Confirm the report supports “learn through action,” not just trivia.

**Source-level notes**

- Production Cases is documented as a knowledge-through-action mode, not a pure quiz.
- The report/replay loop is documented as the core improvement loop: choose case → make choices → score/report → improve best result.
- UI source includes the **Case report** surface and continuation actions.

**Status:** Source-level pass; browser confirmation still needed.

### 4. Continuation actions

**Path to test**

1. Click **Play again**.
2. Confirm the same case restarts correctly.
3. Confirm progress/best result is not wiped.
4. Click **Next case**.
5. Confirm next case opens or fallback returns safely to Production Cases library.

**Source-level notes**

- The MVP checkpoint explicitly includes **Play again**, **Next case**, progress/best-result persistence, and fallback back to the Production Cases library as validation targets.
- UI source includes **Play again**, **Next case**, and **Back to Production Cases** actions on the case report.

**Status:** Source-level pass; browser confirmation still needed.

### 5. Returning player path

**Path to test**

1. Return to Production Cases after progress exists.
2. Confirm beginner guidance no longer dominates.
3. Confirm dashboard / Next Action / recent best results make sense.
4. Confirm the player understands how to improve.

**Source-level notes**

- The MVP checkpoint says dashboard, Next Action, achievements, and recent best results exist.
- The alignment audit identifies progress and best-result tracking as supporting repeat learning and the “improve best result” loop.

**Status:** Source-level pass; browser confirmation still needed.

## Status pointer

Current overall Production Cases QA status is intentionally not repeated here. See [`docs/PLAYABLE_MODES_QA_STATUS.md`](PLAYABLE_MODES_QA_STATUS.md) for:

- Whether the browser-driven pass is complete.
- The current consolidated result.
- The final gate before Production Cases v0.1.
- The allowed/frozen scope before that gate.

This checklist remains documentation-only and does not change Production Cases behavior.
