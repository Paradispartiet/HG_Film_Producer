# Anomalisa (2015) — Production Case verification

Verified on **2026-08-05**.

## Scope

This verification materializes the existing playable scenario `scenario_anomalisa_2015`. It adds no film and does not change the imported scenario seed or the existing production brief.

## Production system

*Anomalisa* is modeled as a crowdfunded adult stop-motion, sound-play adaptation and subjective hotel chamber film built from:

- Charlie Kaufman's 2005 three-performer sound play, originally presented through voices, chamber music and live Foley;
- the return of David Thewlis, Jennifer Jason Leigh and Tom Noonan for the film adaptation;
- Kickstarter seed financing that raised **$406,237 from 5,770 backers** against a $200,000 goal;
- Starburns Industries development and the expanded Snoot Entertainment–Starburns feature production;
- a project first proposed at roughly forty minutes and subsequently expanded into a feature;
- approximately three years of puppet, miniature and animation production;
- eighteen parallel miniature stages and eighteen Canon 7D bodies recording raw still images through Dragonframe;
- one-foot-scale silicone-bodied puppets and hardened-gypsum replacement faces produced through 3D printing;
- **1,261 faces, roughly 1,000 props and 118,089 handmade frames**;
- intentionally retained facial seams that keep construction, fracture and replaceability visible;
- restrained puppet performance based on breath, eye focus, posture, hesitation and small gesture rather than cartoon exaggeration;
- anonymous hotel rooms, corridors, lobby, bar and conference spaces whose material repetition contains Michael's viewpoint;
- Tom Noonan's single repeated voice for almost everyone except Lisa, turning sound into the film's governing identity rule;
- Joe Passarelli's close-focus miniature cinematography and continuity-sensitive lighting;
- Garret Elkins's editing of recorded dialogue, individual frames, repeated faces, repeated voices and hotel geography;
- Carter Burwell's chamber-derived musical continuity between the original sound play and the feature;
- Venice's Grand Jury Prize and an Academy Award nomination for Animated Feature.

The film is therefore not assigned through animation, romance, Charlie Kaufman authorship or adult subject matter alone. Its production logic joins a sound-play identity rule, independent financing, miniature architecture, replacement faces, visible construction, voice performance, raw-still photography, frame-by-frame editing and music into one subjective system.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 15 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; production design; cinematography; lighting; camera format; editing; sound design; music; effects and animation |
| `mapped` | 1 | costume and makeup |
| `not_central` | 1 | documentary method |

The conservative classification is deliberate. Scaled clothing, hair, skin finishing and Lisa's scar are visibly important, but the inspected records do not document the complete costume, hair and finishing workflow. Documentary method is not central because every environment, body, voice and action is scripted, fabricated, recorded or animated for the fiction.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. American Film Institute
2. Animation World Network
3. Filmmaker Magazine
4. La Biennale di Venezia
5. Academy of Motion Picture Arts and Sciences
6. Carter Burwell
7. Film Independent
8. British Film Institute
9. Interiors
10. Kickstarter

The source set covers the 2005 sound play, original performers, Kickstarter campaign, Starburns and Snoot production, feature expansion, miniature design, three-year production, eighteen-stage and Canon 7D workflow, 3D-printed replacement faces, puppet performance, production design, cinematography, lighting, editing, sound, music, Venice prize and Academy nomination.

## Comparative donors

The playable history choices use this exact donor order:

1. `scenario_being_john_malkovich_1999`
2. `scenario_barton_fink_1991`
3. `scenario_eyes_wide_shut_1999`

### Being John Malkovich

The closest comparison supplies Kaufman's materialisation of unstable identity through performed bodies, constrained architecture, puppetry, point of view, effects, editing and Carter Burwell's music. *Anomalisa* replaces the portal and live-action celebrity body with replacement faces, a single repeated voice and an entire miniature world filtered through one man's inability to recognise difference.

### Barton Fink

The second comparison supplies an isolated writer, professional performance, blocked communication and a hotel whose corridors, rooms, surfaces and low-level sounds become a subjective chamber machine. *Anomalisa* makes that enclosure smaller, more ordinary and completely fabricated while shifting the crisis from artistic representation to human recognition.

### Eyes Wide Shut

The third comparison supplies a prolonged nocturnal journey governed by desire, repetition, social performance, constructed urban space, controlled light, editorial uncertainty and recurring music. *Anomalisa* compresses the journey into an anonymous hotel and renders perceptual sameness literally through identical faces and voices.

The donors are selected by production logic, not by genre, nationality, animation technique or plot resemblance alone.

## Integration

The profile is exposed through the existing `independent storytelling` resolver and its `subjective_enclosure_performance` catalog group. Anomalisa receives an explicit three-profile donor override inside that catalog, while the established generic group feedback remains in use.

This avoids inheriting the dedicated *Being John Malkovich* match text and prevents portal, seven-and-a-half-floor or live-action effects language from leaking into Anomalisa. Existing subjective-enclosure profiles and donor systems remain unchanged.

The source record is appended through the existing `independentStorytellingVerificationRecords` aggregator. The already-global verification registry requires no new top-level import.

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- top-level verification-registry ordering;
- global Film Study resolver ordering.

## Permanent checks

The dedicated regression test requires:

- exact seed genres `Animation`, `Comedy`, `Drama`, `Romance`;
- all 17 coverage areas;
- exact `15 / 1 / 1` status distribution;
- ten sources from ten distinct publishers;
- exact donor order;
- assignment to `subjective_enclosure_performance`;
- one match, one partial match and one mismatch;
- Anomalisa-specific profile language without *Being John Malkovich* feedback leakage;
- preservation of the existing subjective-enclosure, authorship and archive profiles.

The global verification test raises the permanent verified-case count from 334 to 335 and gives Anomalisa its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 334 | 335 |
| Remaining unverified Production Cases | 44 | 43 |
| Source-backed Film Study profiles | 334 | 335 |
| Remaining seed-origin cases | 39 | 38 |
| Remaining 2010s cases | 42 | 41 |
| Remaining animation cases | 2 | 1 |

The next unverified film is `scenario_brothers_2015`.
