# Film Director workspace

Film Director is the practical directing layer inside Filmverket. It does not replace Film Producer, Film Atlas, Film School, or Film History. It turns one selected film reference into a concrete scene plan.

## Current working loop

```text
select reference film
→ inspect screenplay / image / editing / sound principles
→ define scene intention
→ plan staging and performance
→ plan image, time, and sound
→ record practical constraints
→ define observable proof
→ copy the finished director brief
```

## Scene brief structure

Every saved brief contains the same 16 directing decisions:

1. scene title
2. scene context
3. scene objective
4. audience effect
5. conflict and turn
6. formal strategy
7. blocking
8. performance direction
9. production design
10. shot plan
11. camera, movement, and lenses
12. lighting and palette
13. editing rhythm
14. sound strategy
15. practical constraints
16. proof of intent

The fixed structure prevents the workspace from becoming a generic notes page. Each field corresponds to an observable directing decision.

## Film reference use

The selected film is read from the shared Filmverket catalogue and its existing production brief. The workspace exposes four reference lenses:

- dramaturgy
- image
- editing
- sound

A stored film principle can be inserted into the scene's formal-strategy draft. Tone targets can be used as an audience-effect starting point. These actions remain editable starting points rather than automatic finished answers.

## Persistence

Briefs are saved locally per film under:

```text
hg_film_director_brief_v1:<scenario-id>
```

Changing the reference film loads that film's own saved brief. Clearing a brief affects only the selected film.

## Output

The workspace exports a plain-text director brief with the film reference, scene title, all 15 remaining decision sections, and the last-updated timestamp. The copied brief can be moved into a production document, rehearsal plan, shot-list workflow, or later Film Producer integration.

## Boundaries

This build does not add or change:

- film research or verification records
- Film History content
- Production Case scoring or progress
- Studio Career simulation
- backend or account storage
- collaborative editing

The next Film Director layers can add multiple scenes, shot-level cards, floor-plan blocking, rehearsal notes, and production integration while preserving this brief model.
