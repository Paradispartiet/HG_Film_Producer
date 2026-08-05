# Dheepan (2015) — Production Case verification

Verified on **2026-08-05**.

## Scope

This verification materializes the existing playable scenario `scenario_dheepan_2015`. It adds no film and does not change the imported scenario seed or the existing production brief.

## Production system

*Dheepan* is modeled as a French Tamil-language refugee and false-family production built from:

- Jacques Audiard, Thomas Bidegain and Noé Debré structuring asylum around three strangers who borrow the papers of a dead family;
- Tamil and French dialogue, translation friction and different regional and diasporic forms of Tamil speech;
- Antonythasan Jesuthasan refining Tamil dialogue from lived cultural, war and exile knowledge;
- Kalieaswari Srinivasan bringing stage experience and Claudine Vinasithamby performing a child who must learn an invented family role;
- responsive direction in which actor movement helps construct blocking, set use, lighting and camera position;
- Éponine Momenceau photographing her first feature with a compact Sony CineAlta F55 and RAW recorder;
- Cooke S3 and S4 lenses and Angénieux zooms supporting a continuously handheld production;
- lighting placed as far outside the set as possible so performers are not trapped by marks or fixed setups;
- French housing-estate halls, courtyards, stairwells, apartments and caretaker routes becoming both community geography and siege architecture;
- domestic routine, school, work and language preceding territorial pressure and armed violence;
- Juliette Welfling preserving patient settlement before compressing the final movement into smoke, thresholds, subjective combat and dreamlike release;
- Daniel Sobrino, Valérie Deloof and Cyril Holtz coordinating Tamil and French voices, corridor sound, traffic, domestic quiet and violence in Dolby 5.1;
- Nicolas Jaar's electronic score adding displacement and internal pressure;
- Why Not Productions and Page 114 producing the French feature for UGC distribution;
- a 2015 Palme d'Or followed by extensive international circulation and major French craft nominations.

The film is therefore not assigned through French nationality, migration subject matter or crime genre alone. Its production logic joins a performed refugee family, multilingual casting, responsive handheld digital work, practical lighting, estate geography, social realism and a late siege-western transformation. Belonging—not gang action—is the primary suspense.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 13 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; cinematography; lighting; camera format; editing; sound design; music |
| `mapped` | 3 | production design; costume and makeup; documentary method |
| `not_central` | 1 | effects and animation |

The conservative classification is deliberate. Michel Barthélémy's estate world, clothing and lived-realism pressure are important, but the inspected sources document the camera, performance, lighting, format, editing, sound and music systems more specifically than separate design, costume or documentary departments. Effects support the violent climax but do not define the production.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. Festival de Cannes
2. Sony
3. American Cinematographer
4. Cineuropa
5. UniFrance
6. British Film Institute
7. Film Comment
8. NOW Magazine
9. The Guardian
10. Film and Digital Times

The source set covers the false-family premise, screenplay development, Tamil dialogue, casting, actor-led direction, Sony F55 and RAW capture, lens package, handheld method, off-set lighting, CinemaScope and Dolby presentation, editing, sound, music, release, craft recognition and Palme d'Or.

## Comparative donors

The playable history choices use this exact order:

1. `scenario_the_child_2005`
2. `scenario_gran_torino_2008`
3. `scenario_rosetta_1999`

### The Child

The closest comparison supplies social-realist physical procedure, fragile responsibility, mobile camera proximity, environmental sound and moral action under material pressure. *Dheepan* replaces the infant-sale crisis with three refugees performing and gradually building family ties inside a housing estate.

### Gran Torino

The second comparison supplies migration, neighbourhood boundaries, community translation, an older fighter's stored violence and a contested move from social encounter toward vigilante genre action. *Dheepan* shifts the center to Tamil refugees and makes the family itself an invented survival mechanism.

### Rosetta

The third comparison supplies embodied labour, exclusion, handheld proximity and practical sound. *Dheepan* expands that social-realist body method across asylum, caretaker work, multilingual domestic life and a final western-like siege.

The donors are selected by production logic, not nationality or surface plot.

## Integration

The profile is exposed through the existing `independent storytelling` resolver. The already-established Asian transnational urban-identity catalog that routes *Last Life in the Universe* now also exposes *Dheepan* and gives it an isolated donor override.

The verification record is appended through the existing Asian transnational urban-identity verification aggregator. The global verification registry requires no new top-level import.

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

- exact seed genres `Drama`, `Crime`;
- all 17 coverage areas;
- exact `13 / 3 / 1` status distribution;
- ten sources from ten distinct publishers;
- assignment to `asian_transnational_urban_identity`;
- exact donor order;
- one match, one partial match and one mismatch;
- Dheepan-specific Tamil, false-family and Sony F55 profile language;
- preservation of established transnational and social-realist profiles.

The global verification test raises the permanent verified-case count from 336 to 337 and gives *Dheepan* its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 336 | 337 |
| Remaining unverified Production Cases | 42 | 41 |
| Source-backed Film Study profiles | 336 | 337 |
| Remaining seed-origin cases | 37 | 36 |
| Remaining 2010s cases | 40 | 39 |
| Remaining drama cases | 37 | 36 |
| Remaining crime cases | 10 | 9 |

The next unverified film is `scenario_drifters_2015`.
