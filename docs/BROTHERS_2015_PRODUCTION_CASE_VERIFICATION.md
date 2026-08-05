# Brothers / Brødre (2015) — Production Case verification

Verified on **2026-08-05**.

## Scope

This verification materializes the existing playable scenario `scenario_brothers_2015`. It adds no film and does not change the imported scenario seed or the existing production brief.

The playable English title is *Brothers*; the film verified here is Aslaug Holm's Norwegian documentary *Brødre*.

## Production system

*Brødre* is modeled as a Norwegian longitudinal family documentary built from:

- Aslaug Holm filming her sons Markus and Lukas herself for more than eight years;
- a dual mother-filmmaker position in which domestic access and parental responsibility cannot be separated;
- recurring family life on Sagene, along the Akerselva and on Smøla;
- approximately **450 hours** of recorded childhood and adolescence;
- DV, HD and Super 16 material accumulated while camera technology and the boys' relationship to being filmed changed;
- patient handheld observation of play, rivalry, philosophical talk, school, football, embarrassment and resistance;
- ordinary rooms, toys, clothing, hair, voices, seasons and bodily growth functioning as temporal evidence;
- ongoing ethical negotiation about filming, intervention, recognition and the children's ability to object;
- Aslaug Holm, Hilde Bjørnstad and Anders Teigen shaping the archive through approximately three years of editing;
- associative ellipsis, recurring actions and later echoes rather than explanatory year-by-year chapters;
- overlapping family voices, arguments, laughter, room tone, streets, water and coastal wind joining material recorded across different years and formats;
- Fenris Film production led by producer Tore Buvarp, with Nordic and European support and international sales;
- John Erik Kaada's credited music and a documented sound and post-production team;
- a Norwegian theatrical release followed by the Amanda Award for direction, Hot Docs Best International Feature Documentary and the Taiwan International Documentary Festival Grand Prize.

The film is therefore not assigned through Norwegian origin, childhood subject matter or documentary genre alone. Its production logic joins maternal access, changing consent, long duration, mixed recording formats, a large private archive, domestic sound and retrospective montage into one system where accumulated time becomes the drama.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 12 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; cinematography; camera format; editing; sound design; documentary method |
| `mapped` | 4 | production design; costume and makeup; lighting; music |
| `not_central` | 1 | effects and animation |

The conservative classification is deliberate. The family home, neighbourhood, island landscape, clothing, hair, practical light and music are important to the finished film, but the inspected sources do not establish separate department-controlled design, costume, lighting or composition workflows at the same level of detail as the camera, format, edit, sound and documentary method. Effects and animation are not central to the production.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. Fenris Film
2. Women and Hollywood
3. Montages
4. POV Magazine
5. LevelK
6. Cineuropa
7. Nordisk Film & TV Fond
8. Danish Film Institute
9. Taiwan International Documentary Festival
10. Shortcut Oslo

The source set covers the eight-year production, mother-filmmaker method, approximately 450 hours of material, DV-HD-Super 16 formats, principal photography, editing, sound, music, production and financing partners, theatrical circulation and international awards.

## Comparative donors

The playable history choices use this exact order:

1. `scenario_all_the_beauty_and_the_bloodshed_2022`
2. `scenario_still_walking_2008`
3. `scenario_paris_is_burning_1990`

### All the Beauty and the Bloodshed

The closest comparison supplies personal archive, family memory, the filmmaker's declared position and retrospective construction as one nonfiction system. *Brødre* replaces activist and art-world history with a private childhood archive whose ethical problem is the mother's sustained access to her own children.

### Still Walking

The second comparison supplies domestic ritual, ordinary rooms, food, gestures, sibling and parent-child relationships and accumulated family time. *Brødre* documents rather than stages these materials and lets actual bodily growth and changing behaviour produce the chronology.

### Paris Is Burning

The third comparison supplies documentary intimacy, self-presentation, performance, community testimony and the ethical pressure of an observing camera. *Brødre* relocates that pressure to a family where the filmmaker is also the parent responsible for the people being filmed.

The donors are selected by production logic, not by nationality, childhood theme, family plot or documentary label alone.

## Integration

The profile is exposed through the existing `independent storytelling` resolver. The already-established family-performance catalog that routes *The Savages*, *Blue Jasmine* and *45 Years* now also exposes *Brødre* and gives it an isolated three-profile donor override.

The source record is appended through the existing `independentStorytellingVerificationRecords` aggregator. The already-global verification registry requires no new top-level import.

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- top-level verification-registry ordering;
- global Film Study resolver ordering;
- existing family-profile donor sequences.

## Permanent checks

The dedicated regression test requires:

- exact seed genres `Documentary`, `Drama`;
- all 17 coverage areas;
- exact `12 / 4 / 1` status distribution;
- ten sources from ten distinct publishers;
- assignment to `family_performance_grief_power`;
- exact donor order;
- one match, one partial match and one mismatch;
- Brothers-specific eight-year and 450-hour profile language;
- preservation of established family and documentary profiles.

The global verification test raises the permanent verified-case count from 335 to 336 and gives *Brødre* its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 335 | 336 |
| Remaining unverified Production Cases | 43 | 42 |
| Source-backed Film Study profiles | 335 | 336 |
| Remaining seed-origin cases | 38 | 37 |
| Remaining 2010s cases | 41 | 40 |
| Remaining documentary cases | 3 | 2 |
| Remaining drama cases | 38 | 37 |

The next unverified film is `scenario_dheepan_2015`.
