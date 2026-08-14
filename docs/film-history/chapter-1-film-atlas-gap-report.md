# Film History Chapter 1 — Film Atlas Gap Report

## Scope

This report belongs to Chapter 1, **From motion studies to cinema (1870s–1905)**. It records the result of auditing the complete canonical Film Atlas before recommending any new early-cinema Production Case.

The audit is executable in `scripts/film-history-chapter-one-atlas-audit.mjs` and is part of `npm run verify:v0.1`.

## Atlas control

- Canonical Atlas count after materializing the full Chapter 1 recommendation: **384 films**.
- The runtime includes the canonical expansion chain plus the final Chapter 1 Rover materialization.
- Matching checks title, original title and aliases after normalization, including diacritics.
- Ambiguous multiple matches are a hard failure.
- `Blacksmith Scene (1893)` → `scenario_blacksmith_scene_1893`.
- `Workers Leaving the Lumière Factory (1895)` → `scenario_workers_leaving_lumiere_factory_1895`.
- `Fire! (1901)` → `scenario_fire_1901`.
- `A Trip to the Moon (1902)` → `scenario_a_trip_to_the_moon_1902`.
- `Life of an American Fireman (1903)` → `scenario_life_of_an_american_fireman_1903`.
- `The Great Train Robbery (1903)` → `scenario_the_great_train_robbery_1903`.
- `Rescued by Rover (1905)` → `scenario_rescued_by_rover_1905`.

### Result

The complete audit now resolves **all six new Production Cases requested by the Chapter 1 gap analysis**, plus the pre-existing *A Trip to the Moon*. Both required queues are empty: **P0 = 0 and P1 = 0**.

## Completed Production Cases

### P0 — 3/3 complete

1. *Blacksmith Scene* (1893)
2. *Workers Leaving the Lumière Factory* (1895)
3. *The Great Train Robbery* (1903)

### P1 — 3/3 complete

1. *Fire!* (1901)
2. *Life of an American Fireman* (1903)
3. *Rescued by Rover* (1905)

**Important number: exactly 0 new Chapter 1 Production Cases remain.**

## P2 — book reference only; not in the Production Case queue

- *L'Arroseur arrosé* (1895)
- *Arrival of a Train at La Ciotat* (1896)
- *Annabelle Serpentine Dance* (1895)
- *The Big Swallow* (1901)

P2 stays outside the Production Case queue unless a later explicit source/value review changes that decision. Completing Chapter 1 does **not** mean materializing these four films automatically.

## Historical Objects — explicitly not Production Cases

- Eadweard Muybridge motion studies.
- Étienne-Jules Marey chronophotography.
- Kinetograph, Kinetoscope and Black Maria as apparatus/production environment.
- Cinématographe and competing projection systems.

## Historiographic safeguards

1. No single-inventor or single-birthday claim for cinema.
2. No train-panic story as established fact.
3. No claim that Méliès single-handedly invented film tricks.
4. No claim that Alice Guy's earliest-fiction date is uncontested.
5. No claim that *The Great Train Robbery* invented narrative editing; do not retrofit later continuity cross-cutting onto it.
6. Do not force the direct-address bandit shot into a modern fixed-ending model.
7. Do not use the later cross-cut re-edit of *Life of an American Fireman* as evidence of Porter's original 1903 editing.
8. Do not describe *Blacksmith Scene* as untouched workplace actuality or Edison as its director.
9. Do not treat *Workers Leaving the Lumière Factory* as transparent reality or collapse its surviving versions into one uncontested original.
10. Do not describe *Fire!* as the single invention of multi-shot continuity, or infer documentary status merely from its real Hove locations.
11. Do not describe *Rescued by Rover* as the single invention of continuity editing. Its repeated routes and causal geography belong inside wider British and international development.
12. Preserve *Rescued by Rover* replacement/re-shot version history instead of silently treating all surviving material as one immutable original negative.

## Recommendation

Chapter 1 requires **no further new Production Cases**. The exact completed recommendation is the six-film P0/P1 set above. The four P2 films remain book-reference-only.

The next Film History task is therefore the next chapter's own full Atlas audit, which must again report the exact titles that should be produced before any new Production Case work begins.
