# Paterson (2016) — Production Case verification

## Status

`scenario_paterson_2016` is materialized as a source-backed Production Case and Film Study profile.

- Seed position: 111
- Runtime: 118 minutes
- Director: Jim Jarmusch
- Genres: Comedy / Drama / Romance
- Seed scenario type preserved: `romantic_comedy_drama_production`
- Resolver: existing `independent_storytelling` path through the Down by Law catalogue helper
- Film Study coverage: 17/17
- Coverage status: 15 `source_verified`, 2 `mapped`, 0 `not_central`
- Verification evidence: 12 inspectable sources from 12 distinct publishers

## Production system

Paterson is treated as a working-routine, regional-place and poetry production system rather than generic low-key comedy-drama. The seven-day structure coordinates bus work, walking, listening, writing, domestic repetition and the neighborhood bar. Jarmusch's one-draft-as-map process leaves room for scouting, performance and editorial reordering while retaining the weekly rule.

The physical production is anchored by New Jersey Transit access, the Market Street bus depot and controlled route work, with Paterson locations supplemented by Yonkers locations. Frederick Elmes's image system uses Alexa Studio and Alexa Mini cameras, Zeiss VariPrime lenses, 1.85:1 framing, ProRes 4444 Log C, a film-emulation LUT, natural or naturally motivated lighting and restrained DI. Repeated actions vary subtly through lens, distance, angle, weather and time of day rather than being photographed identically.

Mark Friedberg's location and production design, Drew Kunin's production sound, Robert Hein's sound design, Affonso Gonçalves's editing and music editing, SQÜRL's electronic score, Ron Padgett's poems and animated calligraphy make work, city observation, written language and inner rhythm part of one coordinated production method. The dog performance remains practical and its recorded vocalizations are retained rather than replaced by CGI or generic library sound.

## Exact donors

Paterson receives a film-specific donor sequence through the existing Down by Law helper:

1. `scenario_down_by_law_1986`
2. `scenario_mystery_train_1989`
3. `scenario_smoke_1995`

The established Down by Law donor sequence remains unchanged:

1. `scenario_mystery_train_1989`
2. `scenario_slacker_1990`
3. `scenario_smoke_1995`

## Scope control

The integration does not alter:

- the scenario seed
- the seed scenario type
- production briefs
- workflow files
- the global playable scenario catalogue
- global Film Study resolver ordering
- the existing Down by Law donor sequence

Paterson is added through an already-existing resolver helper rather than by introducing a new global taxonomy branch.

## Permanent validation

The dedicated regression test verifies:

- exact seed metadata
- the preserved `romantic_comedy_drama_production` type
- 17 Film Study areas
- 15 / 2 / 0 coverage distribution
- verified Production Case lookup
- 12-source / 12-publisher evidence
- exact Paterson donors
- preservation of the Down by Law donor sequence
- production-choice generation with match / partial / miss alternatives

The global Production Case registry expectation is updated from 354 to 355.

## Audit effect

- Source-verified Production Cases: 354 → 355
- Remaining unverified cases: 24 → 23
- Source-backed Film Study profiles: 354 → 355
- Remaining seed-origin cases: 22 → 21
- Remaining 2010s cases: 22 → 21
- Remaining Drama cases: 21 → 20
- Remaining Romance cases: 6 → 5
- Remaining Comedy cases: 5 → 4

Next unverified film: `scenario_call_me_by_your_name_2017`.
