# Film History Chapter 1 — Film Atlas Gap Report

## Scope

This report belongs to Chapter 1, **From motion studies to cinema (1870s–1905)**. It records the result of auditing the complete canonical Film Atlas before recommending any new early-cinema Production Case.

The audit is executable in `scripts/film-history-chapter-one-atlas-audit.mjs` and is part of `npm run verify:v0.1`.

## Atlas control

- Canonical Atlas count at audit: **378 films**.
- Catalogue construction: seed file followed by the same **12 expansion modules in canonical runtime order** used by Film Atlas.
- Matching checks title, original title and aliases after normalization, including diacritics.
- Ambiguous multiple matches are a hard failure.
- `A Trip to the Moon (1902)` is a hard required existing link to `scenario_a_trip_to_the_moon_1902`.

### Result

The complete 378-film audit found **one** existing Chapter 1 candidate and **ten** genuine gaps. No candidate produced an ambiguous alias match.

## Existing Atlas case

| Film | Year | Chapter role | Atlas decision | Why it belongs |
| --- | ---: | --- | --- | --- |
| *A Trip to the Moon* | 1902 | Anchor Film | **Use existing case** | Principal close reading for theatrical staging, designed screen space, trick-film production and transformation effects. |

## P0 — mandatory before the chapter's Atlas layer can be called complete

| Film | Year | Chapter role | Distinct production question |
| --- | ---: | --- | --- |
| *Blacksmith Scene* | 1893 | Anchor Film | How Dickson/Edison turned apparatus, Black Maria studio constraints, short staged performance and copyright practice into a repeatable production system. |
| *Workers Leaving the Lumière Factory* | 1895 | Anchor Film | How portable actuality production, framing, event timing and multiple versions complicate the idea of an untouched record of reality. |
| *The Great Train Robbery* | 1903 | Anchor Film | How studio work, locations, multiple scenes, action, effects and causal organization were coordinated without claiming that one film invented narrative editing. |

These are not three generic ‘famous early films’. Each carries a different production architecture and therefore adds a non-duplicative Film Producer case.

## P1 — high-value comparative Production Cases

| Film | Year | Chapter role | Distinct production question |
| --- | ---: | --- | --- |
| *Fire!* | 1901 | Comparative Film | How matching action and multiple locations construct connected film space in early British cinema. |
| *Life of an American Fireman* | 1903 | Comparative Film | How the original multi-shot organization differs from the later cross-cut re-edit once mistaken for Porter's original, making version history part of production analysis. |
| *Rescued by Rover* | 1905 | Comparative Film | How repeated routes, stable locations and causal clarity approach more systematic continuity; its popularity also exposes the material problem of a negative wearing out and being re-shot. |

## P2 — useful historical examples; Production Cases only if the source pack justifies the marginal value

| Film | Year | Chapter role | Distinct chapter function |
| --- | ---: | --- | --- |
| *L'Arroseur arrosé* | 1895 | Comparative Film | Compact staged gag showing that Lumière practice was not limited to actuality. |
| *Annabelle Serpentine Dance* | 1895 | Historical Object | Performance, attraction and hand-tinted colour as part of the material life of early prints. |
| *Arrival of a Train at La Ciotat* | 1896 | Comparative Film | Movement through depth and a historiographic test case for the weakly documented audience-panic legend. |
| *The Big Swallow* | 1901 | Comparative Film | Extreme camera proximity, scale change and reflexive play with the spectator-camera relationship. |

P2 means the chapter may discuss the film without requiring a standalone Film Producer scenario. A new scenario should only be commissioned if its production sources are strong enough and its gameplay/learning value remains distinct after P0 and P1 are built.

## Historical Objects — explicitly not Production Cases

The chapter also requires material that is essential to film history but should not be forced into the Film Producer schema:

- Eadweard Muybridge motion studies.
- Étienne-Jules Marey chronophotography.
- Kinetograph, Kinetoscope and Black Maria as apparatus/production environment.
- Cinématographe and competing projection systems.

These remain `historical_object` with `no_production_case` so Film Atlas is not polluted with fake film productions.

## Historiographic safeguards

Chapter 1 and any future Production Cases should preserve these constraints:

1. **No single-inventor or single-birthday claim.** The criterion must be stated whenever a ‘first’ is discussed.
2. **No train-panic story as established fact.** Institutional sources describe the dramatic panic account as unverified, mythical or exaggerated.
3. **No claim that Méliès single-handedly invented film tricks.** His historical importance can be grounded in a sustained production system for staging and photographic transformation without relying on priority legends.
4. **No claim that Alice Guy's earliest fiction date is uncontested.** Her production importance is larger than the disputed priority claim around *La Fée aux choux*.
5. **No claim that *The Great Train Robbery* invented narrative editing.** It is treated as an unusually strong convergence of production and formal practices already developing internationally.
6. **No use of the later cross-cut re-edit of *Life of an American Fireman* as evidence of Porter's original 1903 editing.** Library of Congress registry material explicitly records the historiographic correction.

## Recommendation

Build the missing cases in this order only after separate source-pack audits:

1. **P0:** *Blacksmith Scene* → *Workers Leaving the Lumière Factory* → *The Great Train Robbery*.
2. **P1:** *Fire!* → *Life of an American Fireman* → *Rescued by Rover*.
3. Re-run the complete Atlas audit.
4. Re-evaluate P2 after the six stronger cases exist; do not add P2 cases merely to make a canonical list look complete.

The chapter itself is allowed to be editorially complete before all P0/P1 Production Cases are added, because Film History and Film Atlas are intentionally separate systems. What is not allowed is to describe the Atlas layer as complete while the audited gaps remain.
