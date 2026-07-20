# Filmverket platform architecture

Filmverket is the umbrella platform. Film Producer remains the production game, while the same film catalogue and craft knowledge are exposed through several connected entrances.

## Product names

- **Filmverket** — the complete platform and public front page.
- **Film Producer** — the game covering the whole film project: development, staffing, production, post-production, release, and studio consequences.
- **Film Atlas** — the film-analysis and film-science platform.
- **Director Lab** — a focused directing workspace that turns formal analysis into practical artistic briefs.
- **Film School** — structured learning paths generated from the shared film knowledge.
- **Film History** — the chronological entrance into the catalogue.

Film Producer is not renamed Film Director because the game controls more than directing. Director Lab is instead the artistic craft layer inside the wider platform.

## Shared knowledge model

The first platform version intentionally reuses existing production-case data instead of creating a parallel film database:

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
3. Film Producer uses this knowledge as playable Production Cases.
4. Film Atlas renders the same knowledge as analysis.
5. Director Lab isolates one craft lens and converts the stored principles into a directing brief.
6. Film School organizes the same material into courses.
7. Film History orders the shared catalogue chronologically and links back to analysis.

## Current user flow

The original title screen is now the Filmverket front page. The five entrances are available without changing the existing production simulation:

- Film Producer opens Production Cases or Studio Career.
- Film Atlas opens the searchable film library and a full film analysis page.
- Director Lab opens a selected film through screenplay, image, editing, or sound.
- Film School opens six initial core courses with linked film examples.
- Film History opens a decade-based timeline and links every work into Film Atlas.

Returning home from the game returns to Filmverket.

## Research status

The platform displays existing verification status rather than presenting all analysis as fully researched. `verified`, `seeded`, and `needs_research` remain visible distinctions. Film-specific historical movements, technologies, national cinemas, influences, reception, scene evidence, and bibliographic sources should be added as structured data rather than hard-coded UI copy.

## Next data layers

The platform UI is ready for these future shared fields:

- historical period and film movement
- country and national cinema
- production technology and format
- camera, lens, lighting, stock, aspect ratio, and sound format
- scene-level evidence
- formal techniques with definitions
- influences and influenced works
- critical reception and historical significance
- scholarly sources and verification notes
- people, roles, studios, locations, and institutions

These layers should enrich the existing film entity so the game, atlas, school, history timeline, and future modes always read from the same source of truth.
