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

- Browser-driven manual test completed: **no**.
- Source-level inspection completed: **yes**.
- Automated checks completed: **yes**.

Because this environment did not perform a live browser-driven playthrough, the checklist below records the exact requested manual path and the source-level/automated-check result. A future browser pass should replay the same steps in a real browser and update only the test status and any observed non-blocking notes. No fixes or behavior changes are included in this documentation-only PR.

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

## Known limitations

- Browser-driven manual test completed: **no**.
- Source-level inspection completed: **yes**.
- Automated checks completed: **yes**.

The main limitation is that this note was produced in a non-browser coding environment. The current result therefore cannot claim a completed real browser playthrough. It confirms that the documented path is represented in the repository docs/source and that the requested automated checks pass.

## Result

**PASS WITH NOTES:** Production Cases appears playable as the documented v0.1 candidate path based on source-level inspection and passing automated checks, but a full browser-driven manual test was not actually performed in this environment. The remaining note is non-blocking for this documentation-only PR and should be resolved by a future browser playtest pass.

## Browser QA pass

| Field | Result |
| --- | --- |
| Date | 2026-07-03 |
| Browser-driven test completed | **No** — no Playwright/equivalent browser automation dependency is present in this repo, and this pass did not install new unsafe tooling. |
| Tested path | Source-level validation of landing → Production Cases library → first-session guidance → first case → mission completion/report gate → Case report → Play again / Next case → returning-player dashboard/Next Action/recent best results. |
| Result | **PASS WITH NOTES** |

### Issues found

- No blocking Production Cases UX issue was found during source-level validation.
- Browser-driven confirmation remains unvalidated, so this pass cannot claim a live end-to-end browser playthrough.

### Changes made in this PR

- No Production Cases code behavior was changed.
- No app logic, UI, routing, scoring, storage, seed data, simulation formulas, career logic, Production Cases logic, or gameplay behavior was changed.
- Documentation was updated only to place the Production Cases manual playtest notes in the correct repository after the rollback of the misplaced History-Go PR #1632.

### Known remaining limitations

- A real browser pass still needs to confirm click behavior, scroll position, localStorage persistence, and visual clarity after completing and replaying cases.
- Production Cases remains the stable MVP/reference loop; this pass did not add cases, scoring changes, storage changes, or new systems.
