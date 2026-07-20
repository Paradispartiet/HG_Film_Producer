# Filmverket platform architecture

Filmverket is the umbrella platform. Film Producer remains the production game, while the same film catalogue and craft knowledge are exposed through several connected entrances.

## Product names

- **Filmverket** — the complete platform and public front page.
- **Film Producer** — the game covering the whole film project: development, staffing, production, post-production, release, and studio consequences.
- **Film Atlas** — the film-analysis and film-science platform.
- **Director Lab** — a focused directing workspace that turns formal analysis into practical artistic briefs.
- **Film School** — structured learning paths generated from the shared film knowledge.
- **Film History** — the chronological entrance into the catalogue.
- **Craft Library** — the shared dictionary of observable film techniques, analytical questions, and practical production uses.

Film Producer is not renamed Film Director because the game controls more than directing. Director Lab is instead the artistic craft layer inside the wider platform.

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
5. Film Producer uses the film knowledge as playable Production Cases.
6. Film Atlas renders the same knowledge as analysis.
7. Director Lab isolates one craft lens and converts the stored principles into a directing brief.
8. Film School organizes the same material into courses.
9. Film History orders the shared catalogue chronologically and links back to analysis.
10. Craft Library allows direct browsing or selection of a film to inspect the techniques detected in its current analysis.

## Current user flow

The original title screen is now the Filmverket front page. The connected entrances are available without changing the existing production simulation:

- Film Producer opens Production Cases or Studio Career.
- Film Atlas opens the searchable film library and a full film analysis page.
- Director Lab opens a selected film through screenplay, image, editing, or sound.
- Film School opens six initial core courses with linked film examples.
- Film History opens a decade-based timeline and links every work into Film Atlas.
- Craft Library opens from Filmverket as a searchable film-science drawer and can filter its technique set through any film in the catalogue.

Returning home from the game returns to Filmverket.

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

The platform displays existing verification status rather than presenting all analysis as fully researched. `verified`, `seeded`, and `needs_research` remain visible distinctions. Film-specific historical movements, technologies, national cinemas, influences, reception, scene evidence, and bibliographic sources should be added as structured data rather than hard-coded UI copy.

## Continuous verification

The existing GitHub Pages workflow is the canonical repository verifier. Pull requests and pushes to `main` now use:

1. Node 20
2. `npm ci`
3. `npm run verify:v0.1`
4. Pages artifact inspection
5. deployment only after successful verification on non-PR pushes

The workflow cancels obsolete runs for older commits on the same PR so the visible check always represents the latest branch state.

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

These layers should enrich the existing film entity so the game, atlas, school, history timeline, craft library, and future modes always read from the same source of truth.
