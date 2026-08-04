# Amy (2015) — Production Case verification

Verified on **2026-08-04**.

## Scope

This verification materializes the existing playable scenario `scenario_amy_2015`. It adds no film and does not change the imported scenario seed or the existing production brief.

## Production system

*Amy* is modeled as a British archive-led music biography and media-pressure documentary built from:

- On the Corner Films and Film4 production with music-industry and distribution partners;
- approximately one hundred long-form witness interviews conducted across a three-year process;
- private home video, phone material, photographs and direct-to-camera recordings;
- concert, rehearsal, studio, television, news and paparazzi footage;
- testimony heard primarily off screen rather than presented as visible talking heads;
- Amy Winehouse's own demos, songs, lyrics, jokes, studio work and performances as primary authored evidence;
- a source pool reported at more than one thousand hours;
- Chris King's approximately twenty-month edit;
- lyric captions and editorial reframing that connect songs to the life events from which they emerged;
- sound bridges, recorded voices, crowd pressure, camera noise, music and silence that join incompatible image formats;
- an ethical structure in which media extraction, public spectatorship and conflicting witness accounts become part of the documentary's argument.

The film is therefore not assigned through celebrity, addiction, British music or biography alone. Its production logic joins archive access, invisible testimony, musical authorship, posthumous ethics, heterogeneous image sources, montage and sound into one system.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 11 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; editing; sound design; music; documentary method |
| `mapped` | 5 | costume and makeup; cinematography; lighting; camera format; effects and animation |
| `not_central` | 1 | production design |

The conservative classification is deliberate. Clothing, appearance, image texture, source lighting, original camera formats and graphic treatments are essential evidence in the finished film, but the inspected records do not establish a single department-created cinematography, lighting, costume or effects pipeline across the heterogeneous archive. Homes, studios, stages and press environments function as found evidence rather than newly constructed production design.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. A24
2. Film4
3. British Film Institute
4. Festival de Cannes
5. International Documentary Association
6. The Guardian
7. Televisual
8. Motion Picture Association
9. BAFTA
10. Academy of Motion Picture Arts and Sciences

The source set covers official production and release identity, archive acquisition, approximately one hundred interviews, the rejection of visible talking heads, the three-year production, the twenty-month edit, more than one thousand hours of material, direct-to-camera private footage, lyric-led structure, sound and music construction, Cannes presentation and Academy-BAFTA reception.

## Comparative donors

The playable history choices use this exact order:

1. `scenario_searching_for_sugar_man_2012`
2. `scenario_all_the_beauty_and_the_bloodshed_2022`
3. `scenario_paris_is_burning_1990`

### Searching for Sugar Man

The closest comparison supplies a music biography built through witness testimony, records, photographs, songs and editorial construction. *Amy* replaces the investigative mystery and recovered living subject with a posthumous public-private portrait whose central evidence is the unequal movement between intimate access and mass exposure.

### All the Beauty and the Bloodshed

The second comparison supplies artist biography, personal archive, institutional pressure and public accountability as one montage system. *Amy* similarly makes a creative life inseparable from the structures surrounding it, but locates that pressure in music industries, family access, celebrity media and spectatorship rather than an organised activist campaign.

### Paris Is Burning

The third comparison supplies testimony, performance, self-presentation, community history and the ethics of an observing public gaze. *Amy* transforms those concerns through a single absent central subject, off-screen witnesses and archive whose ownership and selection remain ethically charged.

The donors are selected by production logic, not by documentary label, music subject, fame or personal tragedy alone.

## Integration

The profile is exposed through the existing `independent storytelling` resolver. A dedicated Amy profile and choice branch runs immediately before the established *Searching for Sugar Man* music-documentary branch, so Amy receives its own donors and feedback without changing the Rodriguez case.

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

- exact seed genres `Documentary`, `Biography`, `Music`;
- all 17 coverage areas;
- exact `11 / 5 / 1` status distribution;
- ten sources from ten distinct publishers;
- exact donor order;
- one match, one partial match and one mismatch;
- Amy-specific feedback rather than inherited *Searching for Sugar Man* text;
- preservation of the existing archive and music-documentary profiles.

The global verification test raises the permanent verified-case count from 333 to 334 and gives Amy its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 333 | 334 |
| Remaining unverified Production Cases | 45 | 44 |
| Source-backed Film Study profiles | 333 | 334 |
| Remaining seed-origin cases | 40 | 39 |
| Remaining 2010s cases | 43 | 42 |

The next unverified film is `scenario_anomalisa_2015`.
