# Production Cases MVP checkpoint

Production Cases now has a closed playable MVP loop. This checkpoint exists to keep the project focused on manually playing and evaluating that loop before expanding into new simulator systems. Automated checks are green, but the full browser-based manual playthrough is still the next validation step.

## Current MVP loop

The current Production Cases MVP loop is:

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

In practical terms, the player should be able to enter Production Cases from the title screen, receive first-session guidance, pick or start a case, make the required production choices, finish every mission in that case, view the gated case report, continue with either Play again or Next case, and see progress / best-result tracking reflected afterward.

## What is done

- Production Cases is the primary playable MVP.
- First-session guidance exists, including a Start first case path for new Production Cases players.
- A production case catalogue exists.
- Production choices and missions exist.
- A completion-gated report exists, so report and best-result actions are only available after all missions are complete.
- Best result and progress tracking exists.
- Play again and Next case continuation actions exist.
- Basic dashboard, Next Action, achievements, and recent best results exist.
- Build, test, and UI-build checks are green.

## What is intentionally not done yet

- The full studio simulator is not the current playable MVP.
- Studio Career has since become an experimental playable branch and is documented separately in [`docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md`](STUDIO_CAREER_EXPERIMENTAL_STATUS.md).
- Manusrom is not active gameplay yet.
- Casting, crew, and economy systems should not be expanded yet.
- Film history atlas and locations should not be expanded yet.
- Advanced recommendation logic should wait.
- More content and more cases should wait until the current Production Cases loop has been manually tested.

## Do not expand before manual browser test

**2026-07-18 owner decision: this freeze is lifted** (see
`docs/PLAYABLE_MODES_QA_STATUS.md`). The manual browser test remains an open
QA item, not a build blocker. The guidance below is preserved for the record.

Before adding major features or broadening the project into full studio-simulator work, someone should manually play the existing loop in a browser and evaluate at least these paths:

- New player path.
- Returning player path.
- Play again.
- Next case.
- Progress / best-result persistence.
- Fallback back to the Production Cases library.

Until those paths have been manually played and evaluated in a real browser, avoid scope creep into new gameplay systems, larger simulator mechanics, expanded content catalogues, casting / crew / economy expansions, atlas / location expansions, or advanced recommendation layers. The next checkpoint should be based on how this closed loop feels in real browser play, not on adding more systems before the loop is validated.
