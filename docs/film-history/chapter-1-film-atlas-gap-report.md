# Film History Chapter 1 — Film Atlas Gap Report

## Scope

This report belongs to Chapter 1, **From motion studies to cinema (1870s–1905)**. It records the result of auditing the complete canonical Film Atlas before recommending any new early-cinema Production Case.

The audit is executable in `scripts/film-history-chapter-one-atlas-audit.mjs` and is part of `npm run verify:v0.1`.

## Atlas control

- Canonical Atlas count after materializing *Fire!*: **382 films**.
- Catalogue construction: seed file followed by the same **13 expansion modules in canonical runtime order** used by Film Atlas.
- Matching checks title, original title and aliases after normalization, including diacritics.
- Ambiguous multiple matches are a hard failure.
- `Blacksmith Scene (1893)` → `scenario_blacksmith_scene_1893`.
- `Workers Leaving the Lumière Factory (1895)` → `scenario_workers_leaving_lumiere_factory_1895`.
- `Fire! (1901)` → `scenario_fire_1901`.
- `A Trip to the Moon (1902)` → `scenario_a_trip_to_the_moon_1902`.
- `The Great Train Robbery (1903)` → `scenario_the_great_train_robbery_1903`.

### Result

The 382-film audit now finds **five** existing Chapter 1 candidates and **six** genuine gaps. P0 remains complete, and *Fire!* has moved from P1 to `USE_EXISTING`.

## Existing Atlas cases

| Film | Year | Chapter role | Atlas decision | Why it belongs |
| --- | ---: | --- | --- | --- |
| *Blacksmith Scene* | 1893 | Anchor Film | **Use existing case** | Staged Edison-laboratory performance, Kinetograph/Kinetoscope apparatus, fixed single-take construction and Black Maria natural-light production. |
| *Workers Leaving the Lumière Factory* | 1895 | Anchor Film | **Use existing case** | Portable actuality production, fixed factory-gate framing, event timing, crowd movement and multiple filmed versions. |
| *Fire!* | 1901 | Comparative Film | **Use existing case** | Five-tableau rescue, Hove Fire Station and Ivy Lodge, matching movement and connected film space in early British multi-shot production. |
| *A Trip to the Moon* | 1902 | Anchor Film | **Use existing case** | Theatrical staging, designed screen space, trick-film production and transformation effects. |
| *The Great Train Robbery* | 1903 | Anchor Film | **Use existing case** | Edison studio/location hybrid, railway action, photographic effects and historically specific multi-scene organization. |

## P0 — complete

There are **no remaining P0 Production Cases**. All four Anchor Films resolve to canonical Atlas cases.

## P1 — exactly two Production Cases remain

| Film | Year | Chapter role | Distinct production question |
| --- | ---: | --- | --- |
| *Life of an American Fireman* | 1903 | Comparative Film | How the original multi-shot organization differs from the later cross-cut re-edit once mistaken for Porter's original, making version history part of production analysis. |
| *Rescued by Rover* | 1905 | Comparative Film | How repeated routes, stable locations and causal clarity approach more systematic continuity; its popularity also exposes the material problem of a negative wearing out and being re-shot. |

**Important number: exactly 2 new Chapter 1 Production Cases remain.**

## P2 — book reference only; not in the Production Case queue

- *L'Arroseur arrosé* (1895)
- *Arrival of a Train at La Ciotat* (1896)
- *Annabelle Serpentine Dance* (1895)
- *The Big Swallow* (1901)

P2 stays outside the Production Case queue unless a later explicit source/value review changes that decision.

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
10. Do not describe *Fire!* as the single invention of multi-shot continuity. Its matching action and connected space belong inside broader British and international development.
11. Do not infer documentary status from *Fire!*'s real Hove locations; the rescue is staged fiction.
12. Do not retrofit mature classical continuity grammar or later accompaniment onto *Fire!*.

## Recommendation

Continue the remaining Production Cases in exactly this order:

1. **P1:** *Life of an American Fireman* (1903)
2. **P1:** *Rescued by Rover* (1905)
3. Re-run the complete Atlas audit after each case so exactly one P1 gap moves to `USE_EXISTING`.
4. Re-evaluate P2 only after both remaining P1 cases exist; do not add P2 merely to eliminate audit gaps.

The Chapter 1 Atlas layer is **P0-complete and 1/3 through P1**, with exactly two required Production Cases left.
