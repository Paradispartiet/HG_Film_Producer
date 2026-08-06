# Room (2015) — Production Case verification

Verified on **2026-08-06**.

## Scope

This verification materializes the existing playable scenario `scenario_room_2015`. It adds no film and does not change the imported seed or the existing `crime_thriller_production` brief.

## Production system

*Room* is modeled as an Irish-Canadian child-perspective captivity and recovery drama built from:

- Emma Donoghue adapting her own novel, with screenplay work beginning before the novel was published;
- the first-person literary voice being translated into a cinematic system rather than copied literally;
- five-year-old Jack's restricted knowledge controlling what the audience understands about Room, Ma, Old Nick and the outside;
- Lenny Abrahamson treating the story as a study of childhood, parenting and the pressure placed on a mother-child bond;
- Brie Larson and Jacob Tremblay developing a sustained working relationship before and during production;
- chronological filming helping Tremblay understand the story as Jack encounters it;
- age-aware direction, limited takes and protected child-performance conditions preserving freshness and trust;
- Element Pictures and No Trace Camping producing through an Irish-Canadian structure with Film4, Telefilm Canada and the Irish Film Board;
- Pinewood Toronto Studios holding the Room stage while Toronto locations supplied the exterior and recovery world;
- Screen Scene in Dublin handling postproduction;
- Ethan Tobman building a real-size Room as an inverted Rubik's Cube whose panels could be removed from outside;
- the fourth wall remaining physically credible on camera and the lens staying inside Room even when the camera body was outside;
- every surface being aged through drawings, stains, games, light studies and imagined years of Jack's physical development;
- Room being warm, layered and safe from Jack's viewpoint while its exterior remains an ordinary suburban shed;
- the hospital and family home using colder materials, boxes within boxes and unfamiliar surfaces so liberation does not equal immediate safety;
- Danny Cohen using compact RED Epic Dragon cameras and Panavision Primo primes to work inside the real-size set;
- two-camera, responsive coverage protecting child performance while maintaining physical immediacy;
- practical and motivated light from skylight simulation, ceiling Kino Flos, refrigerator fluorescence and a tungsten bedside lamp;
- the carpet escape being worked out through practical physical testing rather than abstract coverage;
- Nathan Nugent dividing the film between contained routine, escape procedure and a slower recovery structure;
- Niall Brady and Steve Fanagan constructing Room through close practical sound and then expanding the acoustic world after escape;
- Stephen Rennicks's restrained music supporting wonder, fear and recovery without replacing spatial sound;
- the Toronto People's Choice Award, four Academy Award nominations, Brie Larson's win and Emma Donoghue's Spirit Award.

The film is therefore not assigned through kidnapping subject matter or the seed's thriller label alone. Its production logic joins adaptation, child cognition, mother-child performance, real-scale spatial restriction, compact camera engineering, motivated light, editorial information control and an acoustic reversal between captivity and freedom.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 14 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; production design; cinematography; lighting; camera format; editing; sound design; documentary method |
| `mapped` | 2 | costume and makeup; music |
| `not_central` | 1 | effects and animation |

The classification is deliberately conservative. Lea Carlson and Stephen Rennicks are institutionally credited, but the inspected set does not establish complete costume, makeup, composition and recording workflows. Effects are not central because the film's defining spatial work is achieved through a physical modular set, practical performance, camera access, lighting, editing and sound.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. Screen Ireland
2. Screen Daily
3. Motion Picture Association
4. Interiors
5. Quill & Quire
6. The Guardian
7. Edge Hill University
8. Academy of Motion Picture Arts and Sciences
9. Film Independent
10. MovieMaker Magazine

The set covers adaptation, child viewpoint, co-production, stage and location work, chronological performance, real-size set engineering, cinematography, lighting, grading, editing, sound and reception.

## Comparative donors

The playable history choices use this exact donor order:

1. `scenario_blindness_2008`
2. `scenario_the_impossible_2012`
3. `scenario_my_skinny_sister_2015`

### Blindness

The closest comparison supplies an enclosed social world, restricted sensory orientation and an image-and-sound system that forces the audience to experience unstable space. *Room* replaces epidemic allegory and ensemble collapse with one mother-child relationship and a single space whose meaning differs radically between its occupants.

### The Impossible

The second comparison supplies parent-child survival, bodily danger, separation and an aftermath that must remain inside limited family knowledge. *Room* has a smaller physical scale, but likewise makes practical production, child performance and sensory disorientation carry a survival story.

### My Skinny Sister

The third comparison supplies a child's limited understanding of an adult crisis, protected young performance and ordinary family spaces that become charged by secrecy and care. *Room* begins in extreme captivity, but its second half similarly refuses to grant the child or audience instant mastery of trauma.

The donors are selected by production function, not by nationality, crime plot or awards profile. `Blindness` retains its established donor sequence unchanged.

## Integration

The profile is exposed through the existing Blindness catalog and automatically assigned to `subjective_enclosure_performance`. The verification record is appended through the existing subjective-enclosure verification aggregator.

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- global Film Study resolver ordering;
- top-level verification-registry ordering;
- existing donor sequences.

## Permanent checks

The dedicated regression test requires:

- exact seed genres `Drama` and `Thriller`;
- exact `crime_thriller_production` scenario type;
- all 17 Film Study fields;
- exact `14 / 2 / 1` status distribution;
- ten sources from ten distinct publishers;
- assignment to `subjective_enclosure_performance`;
- exact Room donor order;
- one match, one partial match and one mismatch;
- Room-specific real-size set, child-viewpoint and inside-lens language;
- preservation of Blindness and its exact donor order.

The global verification test raises the permanent verified-case count from 343 to 344 and gives *Room* its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 343 | 344 |
| Remaining unverified Production Cases | 35 | 34 |
| Source-backed Film Study profiles | 343 | 344 |
| Remaining seed-origin cases | 30 | 29 |
| Remaining 2010s cases | 33 | 32 |
| Remaining drama cases | 30 | 29 |
| Remaining thriller cases | 8 | 7 |

The next unverified film is `scenario_taxi_2015`.
