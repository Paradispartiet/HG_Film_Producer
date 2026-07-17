# HG Film Producer Design Direction

Date: 2026-07-17

This document captures the UI/UX design assessment from the 2026-07-17 full
browser playthrough (see `docs/PLAYABLE_MODES_QA_STATUS.md`) and turns it into
a prioritized design direction for post-gate work. It is documentation only:
nothing here changes behavior, and the structural items below are explicitly
**not** to be built before the human browser QA gate closes.

## Guiding observation

The landing screen is the best-designed surface in the app: one clear
recommendation, honest labeling of what is stable, experimental, and planned,
and a strong cinematic identity. The two screens where the player actually
spends time — the Production Cases library and the case/career play screen —
do not yet meet that standard. Both are single enormous scrolling pages, and
both show everything the engine knows instead of the one decision the player
is making. The earlier tester feedback ("the first-time experience is somewhat
confusing and unorganized") and the agent playthrough point at the same root
cause.

The standard for every screen: **the clarity of the landing page.**

## Priority 1 — One phase on screen at a time

The case/career play screen renders the entire pipeline stacked in a single
~13,000 px column: all six case phases, the target checklist, phase guidance,
production brief, pipeline hero, project brief, and every shoot-day result at
once. The game currently plays like a long form.

Direction:

- Turn the play screen into a stepper: the active phase is the screen, with
  the pipeline as compact navigation above it.
- Completed phases collapse to one-line summaries, exactly the way completed
  films already collapse ("Film 1 · Complete summary" with Show details). The
  pattern exists; apply it one level down.
- The scroll-to-active-panel behavior added on 2026-07-17 is a stopgap for
  this, not a substitute.

## Priority 2 — Decoys that teach instead of leak

Every case phase currently offers two film-specific choices plus the same two
generic decoys ("Use X as a general guideline", "Choose a broad, safe default
approach with no case-specific priority"). After one phase, players learn to
never pick the generic-sounding option. The agent playthrough scored a blind
12/12 this way. The mechanic tests reading comprehension, not film thinking.

Direction:

- Make decoys specific but wrong: draw them from *other* films' briefs. For
  The Machinist's sound phase, a decoy like "Build warm city ambience that
  makes the streets feel alive" (Amélie's answer) is plausible, attractive,
  and wrong for this film.
- The material already exists — 161 manual briefs to cross-pollinate from.
  This is a data change in `scenarioProductionBriefs`-adjacent content, not an
  engine change.
- This single change converts the choice mechanic into the game's stated
  north star: understanding what a particular film is doing.

## Priority 3 — Group the library by film history

The Production Cases library is a ~22,000 px flat wall of 160+ identical
cards. There is no grouping, curation, or pagination below the dashboard, so
choice paralysis is guaranteed.

Direction:

- Use the timeline already hinted at on the landing page (1895 → today) as
  the library's organizing principle: sections by decade or movement, a
  handful of cases visible per section with a "show all" expansion.
- This turns a wall into a film-history journey, which is the project's
  mission, and gives the film-history knowledge layer a visible home in the
  main play path.

## Priority 4 — Density pass: one decision per screen

Panels still read like the dev dashboard the UI grew from. The library
dashboard shows eight-plus stat tiles with overlapping meanings; the play
screen prints full production-team reports, difficulty cards, and every
day-result inline.

Direction:

- For each screen, name the one decision the player makes there; show only
  what informs that decision; fold the rest behind a details toggle.
- Engine richness should be available depth, not default volume.
- Merge redundant tiles (completed-best appears twice; "Auteur best", "best
  combined score", and "case-score" overlap).

## Priority 5 — Identity polish

- Separate player-facing and dev-facing surfaces: the "Dev dashboard" button
  should not sit in the primary game navigation, and the two navigation
  systems (mode-switch bar vs in-game nav) should converge.
- The "A HG Production" poster cards are a strong identity move currently
  rendered as plain text. Genre-tinted poster treatments (noir contrast for
  thrillers, warm grade for romance) would make the studio slate feel like a
  film shelf. The single-stylesheet accent system can carry this.
- The landing page needs almost nothing.

## Sequencing and freeze compliance

Nothing structural above may be built before the browser QA gate closes
(`docs/PLAYABLE_MODES_QA_STATUS.md`). Under the freeze, only copy clarity and
blocking-bug fixes are allowed; of the items above, only small copy/label
dedup arguably qualifies, and even that should wait unless it blocks the
gate.

Recommended post-gate order:

1. Phase stepper (Priority 1) — changes how the game feels most.
2. Teaching decoys (Priority 2) — changes what the game teaches; data-only.
3. Library grouping by era (Priority 3).
4. Density pass (Priority 4).
5. Poster/navigation polish (Priority 5).

Priorities 1 and 2 together transform the core loop; the rest compound on
them. Re-run the manual browser checklists after each of 1–3, since they
restructure gated flows (report gating, next-case flow, collapse behavior)
that the smoke tests and playtest scripts assert.
