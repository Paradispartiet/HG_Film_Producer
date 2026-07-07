# Playable modes QA status

Date: 2026-07-07

This document is the single source of truth for current playable-mode QA status. The detailed manual paths live in the linked checklist files, but the current pass/fail result, remaining gate, and scope freeze are recorded here to avoid conflicting status language.

This consolidation is documentation-only. It does not introduce new modes, systems, content, scoring rules, storage formats, simulation formulas, economy rules, crew/cast rules, release rules, routing changes, or product-direction changes.

## Summary

| Mode | Current role | Automated checks | Source-level inspection | Browser-driven manual playthrough | Current result | Final gate |
| --- | --- | --- | --- | --- | --- | --- |
| Production Cases | Stable MVP candidate / reference loop | Passed | Passed | Not completed | PASS WITH NOTES | Browser-driven manual playthrough of the documented path. |
| Studio Career | Experimental playable branch | Passed | Passed | Not completed | PASS WITH NOTES | Browser-driven playthrough from new career through Film Two actionability. |


## 2026-07-07 manual browser QA intake

A local manual browser QA run was reported as performed with `npm run qa:manual`, but the submitted result fields still contained placeholders rather than concrete pass/blocker data:

- Production Cases result: `<PASTE RESULT>`
- Production Cases issues found: `<PASTE ISSUES OR “none”>`
- Production Cases console errors: `<PASTE OR “none”>`
- Studio Career result: `<PASTE RESULT>`
- Studio Career issues found: `<PASTE ISSUES OR “none”>`
- Studio Career console errors: `<PASTE OR “none”>`
- Manual run details date/browser/local URL/command/tester notes: not provided as concrete values.

Because no actual browser result, browser, URL, tester notes, issues list, or console-error result was provided, this pass cannot honestly close either browser gate. No browser result was invented, no blockers were inferred from placeholders, and no app code was changed. The browser-driven manual playthrough status therefore remains not completed for both modes until a concrete manual result is provided.

## Production Cases current QA status

Production Cases remains the recommended first playable path and stable MVP/reference loop.

- **Status:** stable MVP candidate / reference loop.
- **Current automated checks:** passed.
- **Source-level inspection:** passed.
- **Browser-driven manual playthrough:** not completed in this PR. No Playwright/equivalent browser automation dependency is present in this repo, and this pass did not install new tooling.
- **Current result:** **PASS WITH NOTES** until the browser-driven pass is completed.
- **Final gate before v0.1:** browser-driven manual playthrough of the documented path in [`docs/PRODUCTION_CASES_MANUAL_PLAYTEST.md`](PRODUCTION_CASES_MANUAL_PLAYTEST.md).

### Production Cases source-level findings

- Landing copy recommends Production Cases first.
- Production Cases library has first-session guidance and a first-case entry point.
- The intended loop remains: choose case → make choices → complete missions → Case report → replay or move to the next case → improve best result.
- The library includes returning-player surfaces such as Next Action, collection/career summaries, achievements, and recent best results.
- Source inspection did not identify a blocking issue in Play again / Next case fallback behavior.

### Production Cases still unvalidated in a browser

- Live clicks through the full first case.
- Case report timing and visual clarity after mission completion.
- LocalStorage persistence for best result/progress across reloads.
- Scroll/focus clarity after Play again and Next case actions.

## Studio Career current QA status

Studio Career remains an experimental playable branch and should not be treated as the stable MVP path.

- **Status:** experimental playable branch.
- **Current automated checks:** passed.
- **Source-level inspection:** passed.
- **Browser-driven manual playthrough:** not completed in this PR. No Playwright/equivalent browser automation dependency is present in this repo, and this pass did not install new tooling.
- **Current result:** **PASS WITH NOTES** until the browser-driven pass is completed.
- **Final gate before experimental v0.1:** browser-driven playthrough from new career through Film Two actionability using [`docs/STUDIO_CAREER_MANUAL_PLAYTEST.md`](STUDIO_CAREER_MANUAL_PLAYTEST.md).

### Studio Career source-level findings

- Landing copy labels Studio Career as experimental and recommends Production Cases first.
- The documented path is represented: setup → development → pre-production → shoot → post-production → release → career review/application → next project.
- Career review is gated behind release result rendering.
- Non-latest completed projects can collapse into compact summaries with Show details / Hide details while the latest project remains actionable.
- Source inspection did not identify a blocking issue in active-project scoped controls.

### Studio Career still unvalidated in a browser

- Live completion of all development, pre-production, shoot, post-production, release, and career-application actions.
- Active-panel scrolling behavior from Continue/Open actions.
- Whether release result and career review ordering is visually obvious during a real playthrough.
- Whether Film Two is immediately visible/actionable without a long-scroll trap in a real browser viewport.
- Whether continuity and learning cues are strong enough in practice without overemphasizing generic tycoon metrics.


## Local v0.1 preflight verification

Run this command before the final browser/manual gate:

```bash
npm run verify:v0.1
```

The command is intentionally no-dependency and local-only. It runs the built-in Node preflight script, TypeScript checks, source-level smoke tests, and the UI build check without adding Playwright, Puppeteer, jsdom, testing-library, or other browser packages.

The preflight verifies that required readiness docs, package scripts, and key no-dependency smoke test files are present, and it guards against accidentally adding forbidden browser/test dependencies. This does not close the final browser readiness gate; Production Cases v0.1 and Studio Career experimental v0.1 still require the browser-driven manual playthroughs listed below.

## Local manual browser QA launcher

On a real local machine with a browser, run this helper to start the Vite dev server and print the remaining browser gate checklist in the terminal:

```bash
npm run qa:manual
```

The helper uses only built-in Node modules and the existing Vite script. It does not install browser automation, add dependencies, change gameplay behavior, or mark browser QA as completed. For a production-build smoke pass after building, humans can run `npm run qa:manual:preview`, but the same manual checklist and unclosed browser gate still apply.

## Final readiness gates

Production Cases v0.1 can be marked only when:

- Browser-driven manual playthrough completed.
- New player path works.
- First case completes.
- Case report appears only after completion.
- Play again works.
- Next case works or safe fallback works.
- Returning-player dashboard/next action makes sense.
- No blocking console errors.
- No blocking UX issue.

Studio Career experimental v0.1 can be marked only when:

- Browser-driven manual playthrough completed.
- New Studio Career starts clearly as experimental.
- Film One can progress through development, pre-production, full shoot schedule, post-production, release, career review.
- Career review appears only after release result.
- Film Two can be started.
- Film One collapses.
- Film Two remains immediately actionable.
- No long-scroll trap.
- No dead Continue/Open actions.
- No blocking console errors.

## Do not build before gate

Do not build next:

- New Studio Career systems.
- Deeper economy.
- Awards expansion.
- Investors/loans.
- Distribution contracts.
- AI writing/manus.
- Location atlas.
- New content batches.
- New modes.
- New progression layers.

Allowed before gate:

- Browser-driven manual QA.
- Blocking bug fixes discovered in that QA.
- Copy clarity.
- Documentation cleanup.

## Local human test checklist

Use this checklist for the browser-driven pass that will close the remaining gate.

### Production Cases

1. Open app.
2. Confirm “Recommended first / Production Cases”.
3. Start Production Cases.
4. Start first case.
5. Complete all choices/missions.
6. Confirm Case report appears after completion only.
7. Test Play again.
8. Test Next case.
9. Return to library.
10. Confirm dashboard/recent best result/next action.

### Studio Career

1. Open app.
2. Confirm Studio Career is labeled experimental.
3. Start New Studio Career.
4. Start Film One.
5. Complete development.
6. Complete pre-production.
7. Complete full shoot schedule.
8. Complete post-production.
9. Complete release.
10. Open career review.
11. Apply career result.
12. Start Film Two.
13. Confirm Film One collapses.
14. Confirm Film Two is visible/actionable.
15. Confirm no dead buttons/console errors.

## Detailed checklist sources

- [`docs/PRODUCTION_CASES_MANUAL_PLAYTEST.md`](PRODUCTION_CASES_MANUAL_PLAYTEST.md) defines the detailed Production Cases manual test path/checklist.
- [`docs/STUDIO_CAREER_MANUAL_PLAYTEST.md`](STUDIO_CAREER_MANUAL_PLAYTEST.md) defines the detailed Studio Career manual test path/checklist.

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

Final diff review for that earlier QA pass confirmed no new systems, no new modes, no new cases/content, no scoring changes, no storage-format changes, and no Production Cases or Studio Career behavior changes were introduced.

## No-dependency smoke coverage

Browser QA remains blocked because no browser/session is available in this environment and npm registry access previously blocked Playwright installation. No Playwright, Puppeteer, browser package, jsdom, or testing-library dependency has been added.

No-dependency source-level smoke tests now cover key Production Cases and Studio Career flow invariants, including report gating, continuation helpers, first-session/returning-player recommendations, score/report bounds, Studio Career phase ordering, active targets, completed-film collapse assumptions, project-scoped release controls, career-review availability, and next-project gating.

This does not close the final browser readiness gate. Final readiness still requires a real browser/manual playthrough of the Production Cases and Studio Career flows.
