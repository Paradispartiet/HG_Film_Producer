# Film Director knowledge and terminology system

Film Director now includes a reusable learning layer for directing practice and film-craft terminology. The purpose is not to place an isolated dictionary beside the workspace. The terminology is organized around the order in which a director actually makes and communicates decisions.

## Director workflow

The learning system models twelve connected stages:

1. script interpretation and point of view
2. formal and visual system
3. casting and performance strategy
4. department alignment
5. location and technical scout
6. blocking and rehearsal
7. shot design and coverage
8. schedule and creative priorities
9. leading the shoot
10. dailies and adaptation
11. picture editing
12. sound, music, VFX, color and delivery

Every stage contains:

- a directing goal
- concrete actions
- expected working documents or outputs
- the collaborators involved
- linked terminology that must be understood at that stage
- source references

This reflects the director as the creative lead across preparation, photography and post-production rather than treating directing as camera placement alone.

## Terminology registry

The first canonical registry contains more than 150 bilingual entries. Every entry has:

- English professional term
- Norwegian equivalent or explanation
- craft category
- primary production phase
- foundation, intermediate or advanced level
- concise definition
- explanation of how a director uses the term
- practical example
- source references

The categories are:

1. directing process
2. script and dramaturgy
3. casting and performance
4. blocking and staging
5. shot size and composition
6. camera and lenses
7. exposure and motion
8. lighting and color
9. production design and continuity
10. editing and cinematic time
11. sound and music
12. production and post-production

The registry is intentionally structured data rather than hard-coded explanatory UI. Film School, Film Atlas, Production Cases and later quizzes can reuse the same terms.

## Learning interface

A persistent `Regikunnskap` launcher appears only inside Film Director. It opens a responsive knowledge desk with two modes:

### Workflow

The user moves through the twelve directing stages. Terms linked to the active stage open directly in the terminology view.

### Terminology

The user can:

- search across English term, Norwegian term, definition, directing use and example
- filter by craft category
- filter by development, pre-production, production or post-production
- read a full practical explanation
- open the professional source basis
- mark a term as learned

Learned terms are stored locally under:

```text
hg_director_knowledge_learned_v1
```

## Research basis

The wording is original Filmverket editorial material. It is checked against professional primary or industry-training sources, including:

- Directors Guild of America — preparation, blocking, shot listing, working with actors and the director's role through post-production
- ScreenSkills — the director's responsibilities and department relationships
- Kodak — motion-picture, lens, exposure, film-format and laboratory terminology
- ARRI — focal length, sensor format, angle of view, dynamic range, Log and metadata
- Avid — editorial workflow and split-edit terminology
- Academy of Motion Picture Arts and Sciences — cinematography, design, sound, music, costume and VFX crafts
- Academy Color Encoding System — color-management terminology and transforms

Sources are stored as data and displayed in the knowledge desk. Definitions are paraphrased explanations, not copied source text.

## Integrity tests

The core test suite verifies:

- a minimum vocabulary size
- unique term identifiers
- substantial coverage in every category
- valid phase, level and source references
- all twelve workflow stages in order
- resolution of every workflow-to-term link
- search in both English and Norwegian

## Next learning layers

The data model can support later additions without rewriting the workspace:

- contextual term buttons beside scene-brief and shot-card fields
- term quizzes and spaced repetition
- diagram lessons for axis, lens, light and blocking
- film examples linked from Film Atlas
- department-specific advanced dictionaries
- personal learning progress on the user profile
