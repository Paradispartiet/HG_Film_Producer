# Homesick (2015) — Production Case verification

Verified on **2026-08-05**.

## Scope

This verification materializes the existing playable scenario `scenario_homesick_2015`. It adds no film and does not change the imported scenario seed or the existing production brief.

## Production system

*Homesick* (*De nærmeste*) is modeled as a Norwegian taboo-family chamber drama built from:

- Anne Sewitsky and Ragnhild Tronvoll dismantling an earlier soulmate-and-sibling-revelation story and rewriting it around the shame of never feeling wanted;
- Charlotte's search for family belonging becoming the cause of the forbidden relationship rather than merely its background;
- Ine Marie Wilmann carrying her first major film lead through small facial and bodily turns instead of explanatory dialogue;
- Simon J. Berger being selected through chemistry, Swedish difference and physical resemblance to Wilmann and Anneke von der Lippe;
- each intimacy scene being designed differently because it marks a distinct stage in the relationship's progression and self-destruction;
- Anne Sewitsky protecting Wilmann's prepared but organic performance by limiting disruptive direction during shooting;
- Daniel Voldheim combining close, fairly handheld observation with more planned, painterly images;
- Lina Nordqvist turning apartments, parents' homes and family rooms into unstable promises of belonging;
- Christoffer Heie accumulating looks, approaches, withdrawals and absence rather than resolving the taboo through argument;
- Bent Erik Holm keeping speech, breath, room tone and small domestic sounds exposed;
- Ginge Anvik supporting shame and suspended intimacy without converting the relationship into romantic release;
- Maipo Film producing through Synnøve Hørsdal and Åshild Ramborg, Nordisk Film distributing in the Nordic region and TrustNordisk handling international sales;
- a World Cinema Dramatic Competition world premiere at Sundance and an Amanda award for Wilmann's lead performance.

The film is therefore not assigned through incest subject matter, Norwegian nationality or intimate close-ups alone. Its production logic joins a screenplay rebuilt around unwantedness, female-centred embodied performance, physically credible family casting, differentiated intimacy, unstable domestic space and a visual system that alternates bodily pursuit with composed distance. The taboo is treated as self-destructive need inside a damaged family structure, not as a sensational premise.

## Complete 17-area audit

| Status | Count | Areas |
|---|---:|---|
| `source_verified` | 12 | historical context; movement and tradition; industry and production context; reception and legacy; screenplay; directing; performance; production design; cinematography; editing; sound design; music |
| `mapped` | 4 | costume and makeup; lighting; camera format; documentary method |
| `not_central` | 1 | effects and animation |

The conservative classification is deliberate. The inspected sources document the screenplay rewrite, direction, performance process, casting, visual approach and principal craft departments. Costume, makeup and lighting are credited but not accompanied by a detailed department workflow; the complete acquisition package is not established; and the behavioural realism remains part of a tightly constructed fiction rather than a documentary method.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. CINEMA
2. Maipo Film
3. National Library of Norway
4. Sundance Institute
5. TrustNordisk
6. Cineuropa
7. Filmweb
8. Montages
9. Rushprint
10. Norwegian International Film Festival

The source set covers the screenplay's reconstruction around shame and unwantedness, Sewitsky's intention, differentiated intimacy scenes, Wilmann's preparation and first major film lead, Berger's chemistry and resemblance, the close-handheld and painterly image system, full Norwegian craft credits, production and distribution, Sundance launch and Amanda recognition.

## Comparative donors

The playable history choices use this exact order:

1. `scenario_secrets_and_lies_1996`
2. `scenario_the_souvenir_2019`
3. `scenario_scenes_from_a_marriage_1974`

### Secrets & Lies

The closest comparison supplies hidden kinship, adult longing for family recognition, social identity and revelations made through accumulated performance rather than plot machinery. *Homesick* turns the discovery of a sibling from a route toward family repair into a forbidden bond shaped by the same absence.

### The Souvenir

The second comparison supplies a female-centred relationship understood incompletely from inside, restrained performance, unstable private space and an edit organized by gaps, attraction and delayed recognition. *Homesick* replaces autobiographical memory with present-tense family shame and bodily boundary collapse.

### Scenes from a Marriage

The third comparison supplies actor-led chamber intensity, close faces, private interiors, verbal and nonverbal reversals and relationships that expose power through duration. *Homesick* uses less dialogue and a more mobile body camera, but similarly makes intimacy itself the dramatic arena.

The donors are selected by production logic, not nationality or taboo subject matter. `Mommy` retains its established donor sequence unchanged.

## Integration

The profile is exposed through the existing `independent storytelling` resolver. The established `Mommy` family-performance catalog now also exposes *Homesick* and gives it an isolated donor override.

The verification record is appended through the existing independent-storytelling verification aggregator. The global verification registry requires no new top-level import, and the global Film Study resolver ordering is unchanged.

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- top-level verification-registry ordering;
- global Film Study resolver ordering;
- `Mommy`'s existing donor sequence.

## Permanent checks

The dedicated regression test requires:

- exact seed genre `Drama`;
- all 17 coverage areas;
- exact `12 / 4 / 1` status distribution;
- ten sources from ten distinct publishers;
- assignment to `family_performance_grief_power`;
- exact donor order;
- one match, one partial match and one mismatch;
- Homesick-specific taboo-family, rewritten-shame and painterly profile language;
- preservation of `Mommy`'s exact donor order;
- preservation of established family-intimacy, Dheepan and Drifters profiles.

The global verification test raises the permanent verified-case count from 338 to 339 and gives *Homesick* its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 338 | 339 |
| Remaining unverified Production Cases | 40 | 39 |
| Source-backed Film Study profiles | 338 | 339 |
| Remaining seed-origin cases | 35 | 34 |
| Remaining 2010s cases | 38 | 37 |
| Remaining drama cases | 35 | 34 |

The next unverified film is `scenario_inside_out_2015`.
