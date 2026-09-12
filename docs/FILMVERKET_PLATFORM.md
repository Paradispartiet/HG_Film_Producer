# FilmWork / Filmverket platform architecture

**FilmWork** is the English umbrella name for the complete film suite. **Filmverket** is the Norwegian umbrella name. The umbrella name does not replace the distinct product names **Film Producer**, **Film Atlas**, **Film Director**, **Film School**, or **Film History**.

English is the default interface language. Norwegian, French, and Portuguese are explicit user-selectable alternatives. A stored language choice may override the default; browser locale alone must not silently change a new user's language.

Internal `Filmverket*` TypeScript identifiers, CSS classes, storage contracts, and route types may remain unchanged unless a separate technical rename is explicitly required.

## Product names

- **FilmWork / Filmverket** — the complete platform and public front page.
- **Film Producer** — the game covering the whole film project: development, staffing, production, post-production, release, and studio consequences.
- **Film Atlas** — the film-analysis and film-science platform.
- **Film Director** — the focused directing workspace that turns formal analysis into practical artistic briefs.
- **Film School** — structured learning paths generated from the shared film knowledge.
- **Film History** — the chronological entrance into the catalogue.
- **Craft Library** — the shared dictionary of observable film techniques, analytical questions, and practical production uses.
- **Research Control Room** — the editorial overview of verified, seeded, and unfinished film research.

Film Producer is not renamed Film Director because the game controls more than directing. Film Director is the artistic craft layer inside the wider platform.

## Shared knowledge model

The platform intentionally reuses existing production-case data instead of creating a parallel film database:

1. `getClassicFilmScenarios()` supplies film identity, year, directors, genres, runtime, ratings, source information, phases, and seeded learning goals.
2. `resolveScenarioProductionBrief()` supplies the current film-specific construction model:
   - genre targets
   - tone targets
   - screenplay targets
   - cinematography targets
   - editing targets
   - sound targets
   - learning goals
   - research status
3. `filmCraftGlossary` supplies reusable formal-technique definitions across screenplay, cinematography, editing, and sound.
4. `getFilmCraftTechniques()` matches the stored construction analysis for a selected film to relevant glossary techniques.
5. `createFilmResearchQueue()` turns the shared catalogue into an explicit editorial work queue.
6. Film Producer uses the film knowledge as playable Production Cases.
7. Film Atlas renders the same knowledge as analysis.
8. Film Director isolates craft decisions and converts stored principles into directing briefs and projects.
9. Film School organizes the same material into courses.
10. Film History orders the shared catalogue chronologically and links back to analysis.
11. Craft Library allows direct browsing or selection of a film to inspect the techniques detected in its current analysis.
12. Research Control Room exposes completion, provisional material, and research priorities without changing the underlying film records.

## Film School ground-course contract

The current directing ground course is **5 × 5**:

1. Screenplay and scene analysis
2. Performance direction and blocking
3. Image, camera, and optics
4. Lighting, colour, and production design
5. Editing, sound, and finishing

Each chapter has five lessons. The complete ground course therefore contains **5 courses, 25 lessons, and 75 progression milestones** (`seen`, `understood`, `used`). The overview and final directing exam sit above those five chapters; they are not a sixth subject course.

Course IDs, lesson IDs, progress storage keys, Director assignment contracts, and the final capstone contract are stable data contracts and must not be changed merely to localize player-facing copy.

## Current user flow

The original title screen is now the FilmWork / Filmverket front page. The connected entrances are available without changing the existing production simulation:

- Film Producer opens Production Cases or Studio Career.
- Film Atlas opens the searchable film library and a full film analysis page.
- Film Director opens a selected film as a directing project and craft workspace.
- Film School opens the five-part, 25-lesson directing ground course plus its overview and final exam.
- Film History opens a decade-based timeline and links every work into Film Atlas.
- Craft Library opens as a searchable film-science drawer and can filter its technique set through any film in the catalogue.
- Research Control Room opens as the editorial status surface for the complete catalogue.

Returning home from the game returns to the suite front page, rendered as FilmWork in English/French/Portuguese and Filmverket in Norwegian.

## Canonical hash routes

The suite uses hash routing so direct links work on GitHub Pages without server-side rewrite rules. The browser history, refresh, copied links, and back/forward navigation all resolve through the same route model.

- `#/` — suite front page
- `#/producer` — Film Producer gateway
- `#/atlas` — Film Atlas catalogue
- `#/atlas/film/<title-year-slug>` — one permanent Film Atlas page
- `#/director/<title-year-slug>` — the same film in Film Director
- `#/school` — Film School
- `#/history` — Film History
- `#/research` — Research Control Room

Film slugs are generated deterministically from the stored title and year. For example, `Mulholland Drive` from 2001 becomes `mulholland-drive-2001`. Unknown film slugs show an explicit not-found state rather than silently opening the wrong film.

Research Control Room links every queue item directly to both its Film Atlas route and its Film Director route. Film Atlas also provides chronological previous/next navigation and a copy-link action for the current film.

## Craft glossary rules

A technique entry is not a praise word or a broad style label. It must contain:

- a stable name and canonical ID
- one craft domain
- a definition describing observable construction
- an analytical question that can be answered from film evidence
- a production use explaining how the choice can be made intentionally
- search and matching keywords

Film matching is currently deterministic keyword matching against the shared production brief. This makes the relationship explainable and keeps the system independent of opaque generated classifications. Later scene evidence can replace or strengthen keyword matches.

## Research status

The platform displays existing verification status rather than presenting all analysis as fully researched. `verified`, `seeded`, and `needs_research` remain visible distinctions.

Research Control Room treats these states as editorial workflow, not quality scores:

- `verified` means the stored film-specific claims have passed the project's research process.
- `seeded` means the entry is a provisional imported or generated foundation.
- `needs_research` means the film has useful production-case material but still requires film-specific verification and sourcing.

The queue sorts unfinished work first and shows craft-statement density and learning-goal density separately from verification. A film does not become verified merely because it contains many statements.

Film-specific historical movements, technologies, national cinemas, influences, reception, scene evidence, and bibliographic sources should be added as structured data rather than hard-coded UI copy.

## Continuous verification

The existing GitHub Pages workflow is the canonical repository verifier. Pull requests and pushes to `main` use:

1. Node 20
2. `npm ci`
3. `npm run verify:v0.1`
4. Pages artifact inspection
5. deployment only after successful verification on non-PR pushes

The workflow cancels obsolete runs for older commits on the same PR so the visible check represents the latest branch state.

## Next data layers

The platform UI is ready for these future shared fields:

- historical period and film movement
- country and national cinema
- production technology and format
- camera, lens, lighting, stock, aspect ratio, and sound format
- scene-level evidence
- explicit film-to-technique evidence links
- influences and influenced works
- critical reception and historical significance
- scholarly sources and verification notes
- people, roles, studios, locations, and institutions

These layers should enrich the existing film entity so the game, atlas, school, history timeline, craft library, research control room, and future modes always read from the same source of truth.
