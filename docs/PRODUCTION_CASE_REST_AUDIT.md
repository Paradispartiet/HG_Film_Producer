# Film Producer — full Production Case rest audit

Audit date: **2026-08-14**

## Executable baseline

The canonical Production Case audit now reconstructs **382 playable Film Atlas scenarios**. The verification-registry test is gated at **375 source-verified Production Cases** after materializing *Fire! (1901)*.

The Chapter 1 early-cinema expansion now contributes the three completed P0 cases plus the first completed P1 case:

- `scenario_blacksmith_scene_1893`
- `scenario_workers_leaving_lumiere_factory_1895`
- `scenario_fire_1901`
- `scenario_the_great_train_robbery_1903`

The executable audit remains the source of truth for exact distributions of any other unfinished Production Cases.

## Integrity

The permanent audit rejects structural drift in expected playable count, duplicate playable IDs, duplicate verification/profile IDs, orphan records, verified cases without profiles and profiles without verification. It also reports film-specific brief coverage, fallback briefs and all remaining unverified scenarios.

## Chapter 1 Atlas state

The separate Chapter 1 audit now resolves all four Anchor Films plus the first P1 Comparative Film to canonical Atlas cases:

- *Blacksmith Scene* (1893)
- *Workers Leaving the Lumière Factory* (1895)
- *Fire!* (1901)
- *A Trip to the Moon* (1902)
- *The Great Train Robbery* (1903)

P0 is complete. **Exactly two Chapter 1 Production Cases remain:**

### P1

- *Life of an American Fireman* (1903)
- *Rescued by Rover* (1905)

### P2 — book reference only

- *L'Arroseur arrosé* (1895)
- *Arrival of a Train at La Ciotat* (1896)
- *Annabelle Serpentine Dance* (1895)
- *The Big Swallow* (1901)

P2 remains intentionally outside the Production Case queue unless a later explicit source/value review changes that decision.

## Audit method

Run the permanent audits with:

```bash
npm run audit:production-cases
npm run audit:film-history-ch1
```

Both are part of `npm run verify:v0.1`.
