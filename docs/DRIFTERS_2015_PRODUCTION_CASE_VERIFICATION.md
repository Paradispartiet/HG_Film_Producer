# Drifters (2015) — Production Case verification

Verified on **2026-08-05**.

## Scope

This verification materializes the existing playable scenario `scenario_drifters_2015`. It adds no film and does not change the imported scenario seed or the existing production brief.

## Production system

*Drifters* (*Tjuvheder*) is modeled as a Swedish social-political survival thriller built from:

- Peter Grönlund drawing on eight years of social-work experience when writing and directing his first feature;
- Minna's rent debt, stolen drug payment and flight functioning as practical causes rather than generic criminal backstory;
- an illegal caravan settlement outside Stockholm operating as a fragile alternative community with its own boundaries and obligations;
- approximately ninety percent of the people on screen being nonprofessional performers with lived experience of addiction, crime, policing or social work;
- Malin Levanon preparing through prison stays, conversations with drug users, practical behavioural research, training, weight loss and dental alteration;
- Grönlund maintaining a protected production environment for a mixed professional and lived-experience ensemble;
- Staffan Övgård keeping approximately ninety-nine percent of the film handheld and close to bodies, bargaining, waiting and pursuit;
- Kajsa Severin turning apartments, streets, cars and the caravan camp into a material map of exposure, shelter and exclusion;
- Mia Andersson's costume work and Levanon's bodily transformation making class, wear and vulnerability continuously visible;
- Kristofer Nordin preserving community routine and pauses before tightening the same spaces and transactions into thriller pressure;
- Johan Testad's restrained music supporting friendship and threat without replacing street, vehicle and settlement ambience;
- B-Reel Feature Films producing the Swedish debut with Swedish Film Institute support and The Match Factory handling international sales;
- a New Directors Special Mention at San Sebastián and five Guldbaggar for actress, screenplay, editing, costume and production design.

The film is therefore not assigned through Swedish nationality, drug-crime subject matter or handheld style alone. Its production logic joins social-work field knowledge, embodied preparation, lived-experience casting, close mobile observation, community geography and thriller escalation. Survival pressure is constructed from ordinary material decisions while the people in the settlement retain humour, warmth, agency and contradiction.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 13 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; production design; costume and makeup; cinematography; editing; music; documentary method |
| `mapped` | 3 | lighting; camera format; sound design |
| `not_central` | 1 | effects and animation |

The conservative classification is deliberate. The inspected sources document handheld proximity, ensemble construction, design, costume, editing, music and field-derived method in detail. They establish the finished digital presentation and practical-looking audiovisual result, but not the full acquisition package, lighting plan or sound-recording and postproduction workflow.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. Mer Film
2. Sveriges Radio
3. Montages
4. Aftonbladet
5. SVT
6. San Sebastián International Film Festival
7. Guldbaggegalan
8. Swedish Film Institute
9. Cineuropa
10. Nordische Filmtage Lübeck

The source set covers Grönlund's social-work background, the screenplay's debt-and-flight structure, the nonprofessional ensemble, Levanon's preparation, production safety, handheld camera practice, caravan-community geography, principal craft credits, Swedish support, international sales, festival reception and five Guldbagge wins.

## Comparative donors

The playable history choices use this exact order:

1. `scenario_rosetta_1999`
2. `scenario_wendy_and_lucy_2008`
3. `scenario_the_child_2005`

### Rosetta

The closest comparison supplies embodied social realism, work and belonging as physical struggle, close mobile camera movement and environmental pressure. *Drifters* transfers that body-centred urgency from Belgian labour exclusion to Swedish housing debt, drug exchange and an informal settlement.

### Wendy and Lucy

The second comparison supplies a woman whose shrinking resources, failed shelter and stalled mobility turn small transactions into irreversible consequences. *Drifters* intensifies the criminal and communal stakes while retaining the same attention to money, temporary refuge and unsentimental care.

### The Child

The third comparison supplies a present-tense exchange economy, criminal action under precarity, rehearsed location movement and moral consequence carried by practical behaviour. *Drifters* distributes those pressures across friendship and a marginal community rather than a young father's attempt at restitution.

The donors are selected by production logic, not nationality or surface plot. Rosetta's established donor sequence remains unchanged.

## Integration

The profile is exposed through the existing `independent storytelling` resolver. The already-established Rosetta social-realism catalog now also exposes *Drifters* and gives it an isolated donor override.

The verification record is appended through the existing independent-storytelling verification aggregator. The global verification registry requires no new top-level import, and the global Film Study resolver ordering is unchanged.

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- top-level verification-registry ordering;
- global Film Study resolver ordering;
- Rosetta's existing donor sequence.

## Permanent checks

The dedicated regression test requires:

- exact seed genres `Drama`, `Crime`;
- all 17 coverage areas;
- exact `13 / 3 / 1` status distribution;
- ten sources from ten distinct publishers;
- exact donor order;
- one match, one partial match and one mismatch;
- Drifters-specific Swedish social-thriller, ensemble and nonprofessional profile language;
- preservation of Rosetta's established donor sequence;
- preservation of established social-realist, precarity and Dheepan profiles.

The global verification test raises the permanent verified-case count from 337 to 338 and gives *Drifters* its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 337 | 338 |
| Remaining unverified Production Cases | 41 | 40 |
| Source-backed Film Study profiles | 337 | 338 |
| Remaining seed-origin cases | 36 | 35 |
| Remaining 2010s cases | 39 | 38 |
| Remaining drama cases | 36 | 35 |
| Remaining crime cases | 9 | 8 |

The next unverified film is `scenario_homesick_2015`.
