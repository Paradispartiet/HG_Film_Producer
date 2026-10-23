# Film Director workspace

Film Director is the practical directing layer inside Filmverket. It does not replace Film Producer, Film Atlas, Film School, or Film History. It turns one selected film reference into a saved directing project made from multiple scenes and shot cards.

## Current working loop

```text
select reference film
→ create or select a scene
→ inspect screenplay / image / editing / sound principles
→ choose the scene's dramatic and formal plan from authored alternatives
→ add ordered shot cards
→ select production setup and dramatic purpose for every shot
→ move between scenes without losing work
→ copy one scene or the complete directing project
```

## Project structure

One Film Director project belongs to one reference film and contains:

```text
Director project
└── Scene 1
    ├── 16-decision directing brief
    ├── Shot 1
    ├── Shot 2
    └── ...
└── Scene 2
    ├── 16-decision directing brief
    └── ...
```

The scene sidebar allows the director to:

- add a scene
- select the active scene
- duplicate a scene with independent shot IDs
- delete a scene and all of its shots
- see brief completion and shot count before opening the scene

A project always retains at least one scene.

## Scene brief structure

Every scene contains the same 16 directing decisions:

1. scene title
2. scene context
3. scene objective
4. audience effect
5. conflict and turn
6. formal strategy
7. blocking
8. performance direction
9. production design
10. overall shot-plan rule
11. camera, movement, and lenses
12. lighting and palette
13. editing rhythm
14. sound strategy
15. practical constraints
16. proof of intent

The fixed structure prevents the workspace from becoming a generic notes page. Each field corresponds to an observable directing decision. All 16 fields now use three prewritten choices per language (Norwegian, English, French, and Portuguese); players never type an answer.

## Shot cards

Each scene has an ordered shot list. A shot card contains:

1. shot title
2. shot size
3. camera position
4. camera or subject movement
5. lens or focal behavior
6. subject action and blocking
7. dramatic purpose
8. sound and dialogue priority
9. estimated duration

All nine shot fields use menus: eight have three authored choices in each language, and shot size uses the existing nine shot-size options. Shots can be added, duplicated, deleted, and moved up or down. The dramatic-purpose field is required by the model conceptually even though the interface permits incomplete drafts; a shot should not exist merely as a technical setup without explaining what it contributes to the scene.

## Film reference use

The selected film is read from the shared Filmverket catalogue and its existing production brief. The workspace exposes four reference lenses:

- dramaturgy
- image
- editing
- sound

A stored film principle or tone target may still be selected as a reference-based starting point. Players choose from offered alternatives; there are no free-text fields.

## Persistence and migration

Projects are saved locally per film under:

```text
hg_film_director_project_v1:<scenario-id>
```

The earlier single-scene storage remains readable:

```text
hg_film_director_brief_v1:<scenario-id>
```

When a project has no new-format save but an earlier brief exists, Film Director automatically imports that brief as the project's first scene. Changing the reference film loads that film's own project. Clearing a project affects only the selected film.

## Output

The workspace can copy:

- the active scene, including its directing brief and shot list
- the complete project, including all scenes and all ordered shot cards

The output is plain text so it can move into a rehearsal plan, shooting document, production meeting, script breakdown, or later Film Producer integration.

## Boundaries

This build does not add or change:

- film research or verification records
- Film History content
- Production Case scoring or progress
- Studio Career simulation
- backend or account storage
- collaborative editing

The next Film Director layers can add floor-plan blocking, rehearsal notes, setup grouping, schedule integration, printable shot lists, and direct transfer into a Film Producer production.
