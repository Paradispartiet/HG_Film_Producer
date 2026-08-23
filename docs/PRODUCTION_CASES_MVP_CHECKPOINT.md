# Production Cases MVP checkpoint

Production Cases is the stable playable MVP and reference model for HG Film Producer. The loop is centered on studying real films through film-specific choices, explanations, source-backed context and a qualitative learning report. It is not a score, rank or best-result loop.

Automated verification remains required for every change. Manual browser playtesting is still useful for product validation, but it is not a blocker for source-first case production or focused correctness fixes.

## Current MVP loop

```text
Title screen
→ Start Production Cases
→ choose a film case
→ place the film historically
→ inspect the film-study mapping
→ work through each production phase
→ compare plausible approaches
→ choose the explanation that best fits
→ read immediate film-specific feedback
→ complete the phase
→ unlock the learning report
→ review this case / continue to next case / return to library
```

Progress records whether a case is not started, in progress or completed and which phases have been studied. A completed case does not produce a numerical score, prestige tier, best result or threshold for advancement.

## What is done

- Production Cases is the primary stable MVP/reference mode.
- First-session guidance and a direct first-case path exist.
- The film-case library supports search, learning-status filtering and continuation.
- Every playable case is covered by the executable production-case verification contract.
- Film History chapters 1–17 have completed their Production Case rollout; there are no remaining P0/P1 production-case gaps in that rollout.
- Each Production Case uses the complete 17-area Film Study mapping, with evidence state preserved as `source_verified`, `mapped`, `research_pending` or `not_central`.
- Film-specific missions and plausible alternative choices exist.
- Immediate feedback explains why an approach fits, partly fits or should be reconsidered.
- A completion-gated qualitative learning report exists.
- The report identifies methods understood clearly and phases worth comparing again.
- Source evidence is inspectable for verified cases.
- Review-this-case, next-case and back-to-library continuation paths exist.
- Learning progress can be exported and restored without requiring a score model.
- `npm run verify:v0.1` and the production artifact are the automated release gates.

## No-score contract

Production Cases must not show or use as advancement mechanics:

- numerical points or percentage scores;
- Assistant / Producer / Auteur or other prestige tiers;
- best scores or “improve your best result” loops;
- public performance labels;
- score thresholds;
- badges, streaks, currency or simulated economy as learning rewards.

Internal qualitative distinctions may be used only to choose explanatory feedback and review suggestions. They must remain subordinate to film understanding.

## Residual technical cleanup

The current player-facing direction has moved beyond an older score/best-result implementation, but legacy helpers still remain in `src/core/productionCaseProgress.ts` and are still exercised by `src/core/productionCaseFlowSmoke.test.ts`.

Those helpers are not part of the target MVP contract. A focused follow-up should remove:

- score totals and score-summary helpers;
- Assistant / Producer / Auteur result tiers;
- best-result persistence and comparison logic;
- score-improvement feedback;
- stale smoke/preflight assertions that require that model.

The cleanup must preserve ordinary case/phase progress, selected mission choices, qualitative learning feedback, continuation, and progress backup/restore.

## Studio Career boundary

Studio Career is an experimental playable branch documented separately in [`docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md`](STUDIO_CAREER_EXPERIMENTAL_STATUS.md). Its studio-state mechanics must not redefine Production Cases or leak score/prestige logic into the stable learning loop.

Budget, time, technology, location and working conditions can appear in Production Cases when they are documented facts that explain how a real film was made. They must not become a universal resource-management game.

## Manual browser validation

The earlier expansion freeze tied to manual browser testing was lifted on 2026-07-18; see `docs/PLAYABLE_MODES_QA_STATUS.md`. Manual playtesting remains an open QA activity rather than a build blocker.

A useful browser playthrough should still evaluate:

- new-player entry to Production Cases;
- returning-player continuation;
- film search and status filtering;
- case/phase progress persistence;
- choice feedback and explanation clarity;
- learning-report gating;
- review-this-case and next-case continuation;
- source inspection;
- export/import of learning progress;
- fallback to the Production Cases library.

The success question is whether the player understands the film's historical and production methods more clearly after the case — not whether a numeric result improved.
