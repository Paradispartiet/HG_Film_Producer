# Playable modes QA status

Date: 2026-07-03

This document records the consolidated QA status for the two current playable paths. It is intentionally limited to validation status and scope control. It does not introduce new modes, systems, content, scoring rules, storage formats, or product-direction changes.

## Summary

| Mode | Current role | Browser-driven QA | Current result | Notes |
| --- | --- | --- | --- | --- |
| Production Cases | Stable MVP/reference loop | No | PASS WITH NOTES | Source-level QA found the documented loop represented and no blocking UX issue, but a real browser playthrough is still required. |
| Studio Career | Experimental playable branch | No | PASS WITH NOTES | Source-level QA found the documented experimental path represented and no blocking UX issue, but a real browser playthrough is still required. |

## Production Cases current QA status

Production Cases remains the recommended first playable path and stable MVP checkpoint.

### Validated in this pass

- Landing copy recommends Production Cases first.
- Production Cases library has first-session guidance and a first-case entry point.
- The intended loop remains: choose case → make choices → complete missions → Case report → replay or move to the next case → improve best result.
- Source inspection confirms the library includes returning-player surfaces such as Next Action, collection/career summaries, achievements, and recent best results.
- Source inspection did not identify a blocking issue in Play again / Next case fallback behavior.

### Still unvalidated

- Live browser clicks through the full first case.
- Case report timing and visual clarity in an actual browser after mission completion.
- LocalStorage persistence for best result/progress across reloads in a real browser.
- Scroll/focus clarity after Play again and Next case actions.

## Studio Career current QA status

Studio Career remains an experimental playable branch and should not be treated as the stable MVP path.

### Validated in this pass

- Landing copy labels Studio Career as experimental and recommends Production Cases first.
- Source inspection confirms the documented path is represented: setup → development → pre-production → shoot → post-production → release → career review/application → next project.
- Source inspection confirms Career review is gated behind release result rendering.
- Source inspection confirms non-latest completed projects can collapse into compact summaries with Show details / Hide details while the latest project remains actionable.
- Source inspection did not identify a blocking issue in active-project scoped controls.

### Still unvalidated

- Live browser completion of all development, pre-production, shoot, post-production, release, and career-application actions.
- Active-panel scrolling behavior from Continue/Open actions in a real browser.
- Whether release result and career review ordering is visually obvious during a real playthrough.
- Whether Film Two is immediately visible/actionable without a long-scroll trap in a real browser viewport.
- Whether continuity and learning cues are strong enough in practice without overemphasizing generic tycoon metrics.

## What must not be expanded yet

Do not expand the project with new playable systems or broad content until a real browser-driven QA pass has validated the current paths. In particular, do not expand:

- New modes or new case/content sets.
- Studio Career scope.
- Economy, awards, investors, distribution, crew/cast simulation, AI/manus, atlas/location systems, or progression systems.
- Scoring formulas or storage formats unless a current flow is literally broken and the fix is minimal/compatibility-safe.
- UI redesign or product-direction changes.

## Recommended next step

Run a real browser-driven manual QA pass for both playable modes using the existing checklists in:

- [`docs/PRODUCTION_CASES_MANUAL_PLAYTEST.md`](PRODUCTION_CASES_MANUAL_PLAYTEST.md)
- [`docs/STUDIO_CAREER_MANUAL_PLAYTEST.md`](STUDIO_CAREER_MANUAL_PLAYTEST.md)

If that pass finds blocking UX issues, fix only the issue that blocks or clearly confuses the current documented path, then update the two manual playtest files and this status file with the exact result.

## Consolidated QA pass checks

This pass confirmed the required readiness documents are present on the current branch before validation:

- `docs/PRODUCTION_CASES_MANUAL_PLAYTEST.md`
- `docs/STUDIO_CAREER_MANUAL_PLAYTEST.md`
- `docs/GAME_DIRECTION.md`
- `docs/GAME_DIRECTION_ALIGNMENT_AUDIT.md`
- `docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md`
- `docs/PRODUCTION_CASES_MVP_CHECKPOINT.md`

Automated checks run for this pass:

- `npm run build`
- `npm test`
- `npm run build:ui`

Final diff review confirmed this PR is documentation/status-only: no new systems, no new modes, no new cases/content, no scoring changes, no storage-format changes, and no Production Cases or Studio Career behavior changes were introduced.
