# My Skinny Sister (2015) — Production Case verification

Verified on **2026-08-05**.

## Scope

This verification materializes the existing playable scenario `scenario_my_skinny_sister_2015`. It adds no film and does not change the imported scenario seed or the existing `character_drama_production` brief.

## Production system

*My Skinny Sister* (*Min lilla syster*) is modeled as a Swedish sibling-perspective body and family drama built from:

- Sanna Lenken developing the feature over six years from her own experience of anorexia;
- interviews with affected girls and families and research with therapists, doctors and eating-disorder clinics;
- the short *Eating Lunch* functioning as a research expression and financing bridge for the feature;
- the screenplay moving from the ill girl's perspective to the frightened younger sister's limited knowledge;
- a year-long casting process involving hundreds of girls;
- Amy Deasismont being found first and newcomer Rebecka Josephson arriving late in the process;
- the sisters being paired through resemblance, emotional interaction and their ability to fight, cry and love credibly;
- family improvisation before filming and a seven-hour maximum shooting day protecting Josephson's natural performance;
- figure skating joining bodily control, admiration, competition and public display in one practical performance environment;
- Moritz Schultheiß keeping the image close to Stella's reactions without making Katja's body an object of spectacle;
- Ellen Oseng linking rink, home, kitchen, bedrooms, bathroom, school and care spaces into a geography of secrecy;
- Hanna Lejonqvist controlling when Stella, the adults and the audience understand the illness;
- Gustaf Berger, Kai Storck and the dialogue and mix teams making blades, breath, meals, private rooms and family quiet carry pressure;
- Per Störby Jutbring supporting youthful energy and fear without replacing practical sound with melodramatic explanation;
- Tangy and Annika Rogell producing through a Swedish-German co-production with Fortune Cookie Film, Film i Väst, SVT, ZDF/Das kleine Fernsehspiel and Arte;
- a Generation Kplus Crystal Bear, Göteborg audience recognition, European Young Audience nomination and five Guldbagge nominations.

The film is therefore not assigned through anorexia subject matter, Swedish nationality or youth casting alone. Its production logic joins research-based writing, a child's restricted viewpoint, carefully protected paired performance, practical athletic skill, ordinary family space and an audiovisual system that transfers bodily and moral pressure into what Stella notices, hears and withholds.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 13 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; production design; cinematography; editing; sound design; music; documentary method |
| `mapped` | 3 | costume and makeup; lighting; camera format |
| `not_central` | 1 | effects and animation |

The classification is deliberately conservative. The inspected sources establish the research, viewpoint decision, casting, child-performance safeguards, family improvisation, co-production structure and principal craft departments. Costume and makeup are credited without a detailed workflow; the electrical department is credited without a complete lighting strategy; and the acquisition camera, lens and recording package is not established.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. Cineuropa
2. VICE
3. Story
4. Swedish Film Institute
5. European Film Academy
6. Fortune Cookie Film
7. Film i Väst
8. Nordisk Film & TV Fond
9. Montages
10. Berlin International Film Festival

The source set covers development and research, the sibling viewpoint, casting and rehearsal, protected child working hours, crew and co-production credits, principal photography, distribution context, reception and youth-audience festival positioning.

## Comparative donors

The playable history choices use this exact order:

1. `scenario_mommy_2014`
2. `scenario_the_rider_2017`
3. `scenario_still_walking_2008`

### Mommy

The closest comparison supplies adolescent volatility, family care, a tightly held domestic triangle and a production system where bodies, rooms, music and performance make caregiving unstable. *My Skinny Sister* replaces the expressive square-frame melodrama with a younger sibling's restricted observation and an illness hidden inside ordinary routines.

### The Rider

The second comparison supplies athletic skill, bodily discipline and an identity threatened by the body itself. *My Skinny Sister* uses trained figure skating rather than community-based rodeo realism, but similarly refuses to detach bodily risk from work, admiration and self-understanding.

### Still Walking

The third comparison supplies domestic observation, meals, rooms, indirect speech and family knowledge accumulating through everyday behaviour. *My Skinny Sister* is more explicitly child-centred and medically pressured, but likewise makes routine and withheld information carry the family drama.

The donors are selected by production function, not nationality or illness theme. `Mommy` and `Homesick` retain their established donor sequences unchanged.

## Integration

The profile is exposed through the existing independent-storytelling resolver and assigned to `family_performance_grief_power`. The established Mommy catalog gains an isolated profile and donor override. The verification record is appended through the existing family-performance verification aggregator.

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- top-level verification-registry ordering;
- global Film Study resolver ordering;
- existing donor sequences.

## Permanent checks

The dedicated regression test requires:

- exact seed genre `Drama` and `character_drama_production` scenario type;
- all 17 coverage areas;
- exact `13 / 3 / 1` status distribution;
- ten sources from ten distinct publishers;
- assignment to `family_performance_grief_power`;
- exact donor order;
- one match, one partial match and one mismatch;
- My Skinny Sister-specific research, casting and sibling-perspective language;
- preservation of the exact `Mommy` and `Homesick` donor orders.

The global verification test raises the permanent verified-case count from 341 to 342 and gives *My Skinny Sister* its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 341 | 342 |
| Remaining unverified Production Cases | 37 | 36 |
| Source-backed Film Study profiles | 341 | 342 |
| Remaining seed-origin cases | 32 | 31 |
| Remaining 2010s cases | 35 | 34 |
| Remaining drama cases | 32 | 31 |

The next unverified film is `scenario_rams_2015`.
