# Trädgårdsgatan (2017) — Production Case verification

Verification date: **2026-08-11**

## Seed lock

- Scenario ID: `scenario_tradgardsgatan_2017`
- Seed position: **118**
- Runtime: **110 min**
- Director: **Olof Spaak**
- Genres: **Drama, Romance**
- Scenario type: `character_drama_production`
- Seed file remains unchanged.

## Production thesis

Trädgårdsgatan is not treated as a generic Swedish relationship drama. Its production identity is a **collective low-resource family-memory system**: a story loosely rooted in producer Sofie Palage's upbringing, developed by the Wallander-connected group around Palage, writer Gunnar Järvstad, director Olof Spaak and cinematographer Kristoffer Jönsson, made despite difficult financing and without ordinary advance SFI production support.

The production concentrated around **Österlen and Köpingebro**. Jönsson describes the crew living together during filming and the director, actors and camera team visiting the principal farm before the shoot to work out scenes in the actual location. The finished film uses that place-bound preparation to carry two adult characters back into conflicting memories of a summer lived beside parental addiction.

## Film Study architecture

- Resolver: `independent_storytelling`
- Group: `family_performance_grief_power`
- Specialty routing: existing family-performance specialty helper (`scenarioFilmStudyFamilyPerformanceMommyCatalog.ts`)
- Exact donors:
  1. `scenario_the_souvenir_2019` — autobiographical memory and authorship
  2. `scenario_secrets_and_lies_1996` — family truth and performance
  3. `scenario_the_rider_2017` — place-bound, resource-aware independent production

The specialty route leaves the generic family-performance pool unchanged and preserves the existing Homesick, My Skinny Sister, Rams and Mommy donor sequences.

## Coverage

All **17/17 Film Study areas** resolve:

- **11 source_verified**
  - historical_context
  - movement_and_tradition
  - industry_and_production_context
  - reception_and_legacy
  - screenplay
  - directing
  - performance
  - production_design
  - cinematography
  - editing
  - documentary_method
- **5 mapped**
  - costume_makeup
  - lighting
  - camera_format
  - sound_design
  - music
- **1 not_central**
  - effects_animation

The mapped classifications are deliberate. The inspected sources identify the relevant departments and, in some cases, delivery format, but do not document a sufficiently specific camera acquisition package, lighting method, costume/makeup process, sound method or score workflow to label those fields source-verified.

## Source base

The verification record contains **11 sources from 10 distinct publishers**:

1. Föreningen Sveriges Filmfotografer — Kristoffer Jönsson first-person production/cinematography interview
2. Svenska Filminstitutet — feature-debut/release record
3. Svenska Filminstitutet — analysis of Swedish films made without SFI production support
4. Aftonbladet — Karin Franz Körlof interview and production background
5. Giffoni Film Festival — 2017 Generator +18 Gryphon Award
6. Guldbaggegalan — Best Cinematography win for Kristoffer Jönsson
7. The Yellow Affair — official sales, production and festival record
8. SVT Nyheter — contemporary formal and performance analysis
9. Sveriges Radio — unreliable-memory and dual-recollection structure
10. Nordic Women in Film — Theo Lindberg editing credit
11. The Talent Group — Frida Hoas production-design credit

## Regression locks

The dedicated test requires:

- exact seed metadata and scenario type
- source-backed Film Study resolution
- 17/17 coverage
- exact **11 / 5 / 1** status distribution
- verified record with **11 sources / 10 publishers**
- exact `family_performance_grief_power` group
- exact donor order The Souvenir → Secrets & Lies → The Rider
- three distinct match / partial / miss history choices
- production-specific profile language including Köpingebro, Sofie Palage and collective living/production
- unchanged Homesick donor order: Secrets & Lies → The Souvenir → Scenes from a Marriage

## Scope control

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`
- production-brief generation
- workflow files
- global Film Study resolver ordering
- the generic independent-storytelling donor pool
