# Studio Career experimental status

Studio Career is currently an **experimental playable branch**, not the main MVP. This document records the current product split after the Production Cases MVP checkpoint so future work does not confuse the stable reference loop with newer Studio Career systems.

## Current product split

### Production Cases

Production Cases is the **current stable playable MVP checkpoint**.

- It has checkpoint documentation in [`docs/PRODUCTION_CASES_MVP_CHECKPOINT.md`](PRODUCTION_CASES_MVP_CHECKPOINT.md).
- It should remain the reference loop for the current playable MVP.
- It is the loop to compare against when evaluating whether new work is focused, understandable, and playable.

### Studio Career

Studio Career is an **experimental playable branch**.

- It is not yet the main MVP.
- It may contain promising mechanics from recent merged work.
- It needs focused manual playtesting before any more system expansion.
- Its purpose for now is to validate whether the studio-pipeline and career-year flow is understandable, actionable, and free of trapped states.

## What Studio Career currently contains

Studio Career currently includes a playable experimental path with these areas:

- Studio setup and first film flow.
- Development step.
- Pre-production.
- Full shoot schedule.
- Post-production.
- Release.
- Career application of film results.
- Career-year and expense review.
- Crew/cast continuity and growth.
- Completed-film collapse.
- Pipeline continue actions and related scroll behavior.

These systems should be treated as a testable branch of the simulator, not as a signal to expand the project into a larger full-studio simulation yet.

## What should not be expanded yet

Before focused manual testing of Studio Career, do **not** add or deepen these areas:

- Deeper economy systems.
- More complex crew/cast simulation.
- Distribution contracts.
- Investors or loans.
- Awards systems.
- AI writing/manus systems.
- Location atlas.
- Multiplayer or social systems.
- Large new content sets.

The immediate goal is to verify the current Studio Career flow, not to make the branch broader.

## Required manual test path before new Studio Career systems

Before adding new Studio Career systems, someone should manually play through this path:

1. Start a new studio career.
2. Create the first film.
3. Complete development.
4. Complete pre-production.
5. Play through the full shoot schedule.
6. Complete post-production.
7. Complete release.
8. Apply the career result.
9. Start Film Two.
10. Confirm Film One collapses.
11. Confirm Film Two is immediately actionable.
12. Confirm crew/cast continuity makes sense.
13. Confirm expenses/career-year review does not confuse the player.
14. Confirm there are no dead buttons or trapped states.

## Freeze rule

Until the manual path above has been completed and evaluated, Studio Career work should be limited to documentation, status clarification, and small fixes that unblock the existing path. Do not add new simulator layers, new progression systems, or large new content sets before this branch has been manually validated.
