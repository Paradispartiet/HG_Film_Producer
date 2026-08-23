# Game direction alignment audit

## Executive summary

`docs/GAME_DIRECTION.md` is the authoritative product direction for the current game. Production Cases is the stable MVP/reference model, and its purpose is film-history and film-craft understanding through film-specific comparison and explanation — not score maximization, prestige accumulation, ranks, rewards or economy simulation.

The current Production Case mission flow already follows that direction through qualitative choice feedback, completion state, review hints and a learning report. This audit was refreshed after finding a contradictory legacy alignment layer that still exposed percentage scores, public alignment tiers and score-like report language.

The current cleanup removes those public scoring signals from the target/reflection/report surfaces. One residual technical-debt area remains: `src/core/productionCaseProgress.ts` still contains older score, result-tier and best-result helpers, and `src/core/productionCaseFlowSmoke.test.ts` still tests that obsolete contract. Those helpers must be removed in a separate focused cleanup rather than treated as part of the stable Production Cases design.

## Authoritative Production Cases contract

Production Cases should:

- teach concrete film-history and film-craft methods through real films;
- ask the player to compare plausible approaches;
- explain why a choice fits, partly fits or should be reconsidered;
- keep those distinctions qualitative and instructional;
- record only learning progress such as cases and phases studied;
- unlock a learning report after the case has been worked through;
- surface inspectable evidence and source state;
- let the player review a case or continue without a score threshold.

Production Cases should not expose:

- numerical scores or percentages as performance results;
- Assistant / Producer / Auteur or equivalent prestige tiers;
- best-result tracking or best-score chasing;
- points, badges, streaks, currency or public performance labels;
- score thresholds for continuation;
- generic studio-economy systems detached from documented film conditions.

## Current alignment after the scoring cleanup

### Stable mission flow

The active case-learning flow in `ScenarioProductionBriefPanel` uses `productionCaseLearning` to distinguish choices qualitatively. A phase can be understood clearly, partly understood or worth revisiting; those distinctions select feedback and report content rather than points or ranks.

The completion report shows:

- phases studied;
- methods identified clearly;
- phases worth comparing again;
- film-specific explanations;
- source evidence when available;
- review / next-case actions.

This matches the learning-report contract in `GAME_DIRECTION.md`.

### Alignment and target surfaces

The older alignment surfaces previously exposed percentage and tier output. They are now framed as comparison/reflection surfaces:

- no percentage is displayed;
- no public tier badge is displayed;
- no `loose / focused / strong` performance label is displayed;
- no matched/missing target totals are presented as a result;
- the checklist is framed as film-craft comparison notes, not a mastery ladder;
- the case recap emphasizes methods identified and methods worth comparing again.

The implementation may still use a small internal `reconsider / partial / clear` assessment solely to choose useful explanatory copy. That is permitted by the pedagogical-assessment section of `GAME_DIRECTION.md` because it is not exposed as a rank or reward.

## Residual mismatch: legacy score and best-result core

### Where it remains

- `src/core/productionCaseProgress.ts`
- `src/core/productionCaseFlowSmoke.test.ts`
- the preflight assertion that currently requires the old “report and best result are gated” smoke-test wording

### Why it is a mismatch

The legacy core still defines score totals, result tiers, best-score persistence and best-result comparison logic. Those concepts directly contradict the current rule that Production Cases has no numerical score, prestige tier or best-score chase.

### Required follow-up

Remove the obsolete score / tier / best-result core contract while preserving:

- per-case progress;
- selected mission choices;
- phase completion;
- qualitative learning feedback;
- learning report generation;
- next-case navigation;
- progress export/import compatibility where it concerns learning progress.

If obsolete best-result storage exists in a player browser, the cleanup should ignore or remove it safely without making the old score data part of the new progress model.

## Studio Career boundary

Studio Career remains an experimental branch and may contain studio-state concepts such as money, reputation or prestige. Those systems must not leak back into Production Cases or redefine its success condition.

The next Studio Career work should remain subordinate to film understanding and manual playtest evidence. Do not use Production Cases scoring as a bridge between the modes.

## Remaining product risks

### Mode hierarchy

Production Cases should remain the recommended first-play path. Studio Career must stay clearly marked experimental in player-facing navigation and copy.

### Simulator drift

Avoid expanding economy, investor, awards, distribution, crew/cast simulation or other tycoon layers until they have a clear film-learning purpose and the existing experimental path has been evaluated.

### Internal vocabulary drift

Developer-facing terms such as “seed catalogue” should not dominate player-facing Production Cases copy. The interface should describe films, cases, methods, comparisons, explanations and sources.

## Do-not-build-now list

Do not add these as the next response to the scoring cleanup:

- new Production Cases point systems;
- new ranks, badges, streaks or prestige tiers;
- score thresholds or mastery gates;
- best-score dashboards;
- deeper economy or investor systems;
- awards expansion;
- new playable modes;
- generic simulator depth without a film-learning justification.

## Recommended next PRs

### PR 1 — Remove legacy Production Case score / best-result core

Delete the obsolete scoring, tier and best-result persistence contract from `productionCaseProgress`, replace stale smoke-test expectations with qualitative learning/progress invariants, and update preflight wording accordingly.

### PR 2 — Verify player-facing mode hierarchy copy

Check the title screen and shared navigation for clear “Production Cases = stable reference model / Studio Career = experimental” framing. Keep this copy-focused unless a real routing defect is found.

### PR 3 — Manual Production Cases browser playtest

Validate new-player, returning-player, review, next-case, persistence, source inspection and fallback-to-library paths in a real browser. The playtest should evaluate whether the player understands *why* film methods work, not whether a numeric result improves.
