# Production Case learning model

## Purpose

Production Cases teach film craft through concrete, film-specific comparison. The player is not managing a simulated budget and is not trying to maximize a score.

## Learning loop

```text
film case
→ craft phase
→ film-specific targets
→ plausible alternative explanations
→ immediate explanatory feedback
→ learning focus
→ completed learning report
```

## Choice qualities

Case data may classify an alternative as `match`, `partial` or `miss`.

These values are editorial tools for selecting feedback:

- `match`: clearly explains the documented method used by the film;
- `partial`: identifies a relevant principle but is less precise for this film;
- `miss`: is plausible in filmmaking generally but does not explain this film well.

They are not points. They must never be added together, displayed numerically or converted into player ranks.

## Feedback rule

Every alternative should teach something useful.

Feedback should:

1. name the concrete method or distinction;
2. connect it to the finished film;
3. explain why the selected alternative fits, partly fits or does not fit;
4. avoid praise or punishment language based on performance;
5. encourage comparison when another alternative is more precise.

## Learning status

The only case-level progress states are:

- `not_started`
- `in_progress`
- `completed`

Completed means the player has worked through every phase. It does not mean the player has earned a certification or reached mastery.

## Learning report

The report groups phases into:

- **Understood clearly**: the selected explanation matches the film-specific method;
- **Review and compare**: the selected explanation was partial or should be reconsidered.

The report also includes the central learning summary and, when available, the source basis for the case.

The report does not contain:

- points;
- percentage scores;
- best results;
- badges;
- Assistant, Producer or Auteur tiers;
- resource penalties;
- advancement thresholds.

## Progress storage

Current phase completion and selected alternatives remain stored locally so the player can continue later.

Older best-result data may remain in existing local backups for backward compatibility, but the learning interface does not read it as a goal, display it or use it to determine progress.

## Production conditions

Budget, schedule, crew size, format, location and technology may be included when they are part of the documented history of a specific film. In that context they are subject matter.

They must not become a generic resource ledger applied identically to every film.

## Editorial quality test

Before a phase is accepted, verify:

- Is the learning focus a real film-craft concept?
- Are all alternatives plausible enough to compare?
- Does one alternative most precisely explain the film?
- Does every feedback text explain the distinction?
- Is the claim supported by the case sources when it is factual?
- Would the phase still be valuable without points or rewards?

If the final question is no, the phase is relying on gamification instead of learning and should be rewritten.
