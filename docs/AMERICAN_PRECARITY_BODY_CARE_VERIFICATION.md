# American precarity, body and care Production Case verification

## Scope

This batch verifies four existing playable scenarios without adding or removing films:

- `scenario_wendy_and_lucy_2008`
- `scenario_the_rider_2017`
- `scenario_sound_of_metal_2019`
- `scenario_never_rarely_sometimes_always_2020`

The shared comparison group is `american_precarity_body_care`.

## Production systems

### Wendy and Lucy

The profile connects a stalled anti-road movie to late-2000s economic precarity, Oregon locations, a 35 mm independent production, Kelly Reichardt's editing, restrained performance and a sound field dominated by trains, traffic and practical movement.

### The Rider

The profile connects a real rodeo injury and Pine Ridge community to a six-person crew, nonprofessional family performers, real homes and horses, natural-light scheduling, widescreen landscape photography and a western identity revised through bodily limitation.

### Sound of Metal

The profile connects recovery drama and Deaf-community representation to chronological shooting on film, live drumming, ASL preparation, Deaf performers, bodily recordings, subjective hearing shifts, cochlear-implant simulation and extended sound postproduction.

### Never Rarely Sometimes Always

The profile connects reproductive-care access to research with counselors, real medical environments, first-time performers, bus and clinic procedure, intimate Kodak 16 mm photography, restrained editing and a sustained counseling interview.

## Files

Profiles:

- `src/ui/data/scenarioFilmStudyAmericanPrecarityWendyLucy.ts`
- `src/ui/data/scenarioFilmStudyAmericanPrecarityTheRider.ts`
- `src/ui/data/scenarioFilmStudyAmericanPrecaritySoundOfMetal.ts`
- `src/ui/data/scenarioFilmStudyAmericanPrecarityNeverRarely.ts`

Verification and tests:

- `src/ui/data/scenarioProductionVerificationAmericanPrecarityBodyCareBatch.ts`
- `src/ui/data/scenarioFilmStudyAmericanPrecarityBodyCare.test.ts`

Integration:

- `src/ui/data/scenarioFilmStudyIndependentStorytellingCatalog.ts`
- `src/ui/data/scenarioFilmStudyIndependentStorytellingBatch.ts`
- `src/ui/data/scenarioProductionVerificationRegistry.ts`
- `src/ui/data/scenarioProductionVerification.test.ts`

## Source threshold

Each film has:

- four inspectable HTTPS sources
- at least two distinct publishers
- institutional, production, trade or filmmaker documentation
- seventeen film-study coverage areas
- at least nine `source_verified` areas
- a dedicated match, partial and miss comparison test

The source set includes AFI, Cannes, Criterion, BFI, Sony Pictures Classics, Film Independent, AFI FEST, Focus Features, Sundance Institute and Kodak.

## Registry change

The controlled verified Production Case total increases from **228** to **232**.
