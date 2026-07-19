# Production Case constraint ledger

## Purpose

Production Cases previously measured only whether a choice matched the film's documented craft logic. The constraint ledger adds a second producer objective: keep the production viable across all six phases.

The mechanic tracks three values:

- **Budget** starts at 10.
- **Time** starts at 10.
- **Creative control** starts at 0.

Values are derived from the already-saved mission choice IDs. No storage migration is required, and old progress remains readable.

## Choice approaches

| Approach | Budget | Time | Creative control | Meaning |
| --- | ---: | ---: | ---: | --- |
| Creative push | -2 | 0 | +2 | Strong film match with higher financial commitment. |
| Balanced execution | -1 | -1 | +1 | Strong film match with shared budget and schedule cost. |
| Schedule-heavy compromise | 0 | -2 | 0 | Partially relevant solution that protects cash but consumes time. |
| Costly mismatch | -2 | -2 | -1 | Weak fit that wastes resources and reduces control. |

The first matching choice in each phase is the creative push. The second matching choice is balanced execution. Partial and missed choices receive the compromise and mismatch impacts.

## Carryover

Every phase after Case orientation displays the budget, time and creative-control position created by earlier choices. A choice therefore affects the context in which later phases are entered.

The final Case report keeps the existing craft score and adds a production condition:

- **On track**: both resources remain above the danger threshold.
- **Strained**: budget or time has two points or less remaining.
- **Over budget**: budget is below zero.
- **Behind schedule**: time is below zero.
- **Overextended**: both budget and time are below zero.

This first version deliberately keeps the existing score and best-result storage intact. The player now has two replay goals: improve the film match and deliver the production without exhausting its resources.
