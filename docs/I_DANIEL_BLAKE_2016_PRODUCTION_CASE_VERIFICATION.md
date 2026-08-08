# I, Daniel Blake (2016) — Production Case verification

Verification date: **2026-08-08**

## Result

`scenario_i_daniel_blake_2016` is materialized as a source-backed social-realism Production Case inside the existing `independent_storytelling` resolver and `social_realism_labor_body` branch.

- Scenario type remains: `character_drama_production`
- Film Study coverage: **17/17 fields**
- Coverage summary: **13 source_verified / 3 mapped / 1 not_central**
- Production verification: **10 sources from 10 publishers**
- Exact Film Study donors:
  1. `scenario_rosetta_1999`
  2. `scenario_the_child_2005`
  3. `scenario_wendy_and_lucy_2008`
- No seed, production brief, workflow, scenario catalogue or global Film Study resolver-order change.

## Production thesis

*I, Daniel Blake* is modeled as a welfare-state social-realist production system rather than a generic political drama. Paul Laverty's field research with claimants, food banks and welfare workers is converted into concrete dramatic procedure: work-capability assessment, benefit denial, digital forms, mandatory job seeking, sanctions, housing pressure and food scarcity accumulate as material causes.

Ken Loach and Rebecca O'Brien's Sixteen Films production shot for six weeks in Newcastle and the surrounding North East. Dave Johns, Newcastle-raised and previously a bricklayer and stand-up comedian, entered his first feature role inside a locally rooted ensemble. Loach's controlled-information method limits what performers know about later scenes so reactions can remain present-tense rather than pre-shaped by the full plot.

Robbie Ryan photographs the world on 35 mm. Later first-person camera reporting identifies the ARRI 35 mm ST/LT and Master Prime combination as the same package used on *I, Daniel Blake*. Job centres, homes, library terminals, streets and food-bank interiors are observed as functional systems rather than decorated poverty. Jonathan Morris's editing preserves procedural accumulation; practical voices, phones, offices and streets carry institutional information; George Fenton's restrained music does not replace performance and environment with melodramatic instruction.

## Film Study coverage

| Area | Status | Verification basis |
|---|---|---|
| historical_context | source_verified | austerity-era welfare administration, sanctions and food-bank dependence |
| movement_and_tradition | source_verified | Loach's British social-realist tradition and European body-centred realism |
| industry_and_production_context | source_verified | six-week Newcastle shoot; Sixteen Films / Why Not / Wild Bunch; BFI and BBC Films |
| reception_and_legacy | source_verified | 2016 Palme d'Or and 2017 BAFTA Outstanding British Film |
| screenplay | source_verified | Laverty's field research transformed into welfare procedure and material cause-effect |
| directing | source_verified | local authenticity, chronological revelation and controlled script information |
| performance | source_verified | Dave Johns, Hayley Squires and locally rooted film-acting novices |
| production_design | source_verified | job centres, flats, library terminals, food bank and North-East locations as functional geography |
| costume_makeup | mapped | Joanne Slater credited; no dedicated department-process account located |
| cinematography | source_verified | Robbie Ryan's observational 35 mm photography |
| lighting | mapped | naturalistic result established; complete lighting workflow not separately documented |
| camera_format | source_verified | 35 mm plus later Ryan confirmation of ARRI ST/LT and Master Prime combination |
| editing | source_verified | Jonathan Morris and procedure-led accumulation / controlled revelation |
| sound_design | mapped | Ray Beckett and Kevin Brazier credited; full sound workflow not separately documented |
| music | source_verified | George Fenton's restrained score within a performance- and environment-led system |
| effects_animation | not_central | location, actors, film photography, editing and sound are the production engine |
| documentary_method | source_verified | welfare/food-bank research, local casting and real locations transformed into fiction |

## Donor logic

### Rosetta

The closest donor supplies embodied social realism: work and exclusion are carried through bodies, practical actions, location pressure and close observation rather than explanatory rhetoric. *I, Daniel Blake* transfers that physical logic from Seraing labour precarity to British welfare bureaucracy.

### The Child

The second donor supplies present-tense moral and material procedure, rehearsed location movement, ordinary exchange systems and social consequence. Loach's film replaces infant-sale restitution with institutional decisions whose consequences accumulate through forms, appointments, sanctions and care.

### Wendy and Lucy

The third donor supplies shrinking resources, insecure shelter, administrative obstacles and small transactions whose stakes grow because there is no financial buffer. *I, Daniel Blake* expands that precarity into a welfare-state and family-care network.

Existing Rosetta and Drifters donor sequences remain unchanged.

## Sources

The verification registers ten inspectable HTTPS sources from ten publishers:

1. Festival de Cannes — official film and Palme d'Or record
2. Screen Daily — start-of-shoot production report
3. Criterion Collection — Newcastle casting process
4. British Film Institute — welfare-system and screenplay analysis
5. British Cinematographer — 35 mm Robbie Ryan production record
6. Kodak — Robbie Ryan camera/lens retrospective
7. Sixteen Films — production-company history and Loach/O'Brien partnership
8. The Guardian — Loach/Squires retrospective on Laverty research and performance method
9. BAFTA — official Outstanding British Film record
10. Film Comment — social-realism and everyday-procedure analysis

## Scope control

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- global Film Study resolver ordering;
- Rosetta's donor sequence;
- Drifters' donor sequence.

The seed remains position **114**, runtime **100**, director **Ken Loach**, genre **Drama** and scenario type `character_drama_production`.

## Permanent checks

The dedicated regression test requires:

- exact seed position 114, runtime 100, director Ken Loach and genre Drama;
- all 17 Film Study areas;
- exact `13 / 3 / 1` status distribution;
- ten sources from ten distinct publishers;
- exact donor order `Rosetta → The Child → Wendy and Lucy`;
- one match, one partial match and one mismatch choice;
- I, Daniel Blake-specific Newcastle and welfare-state profile language;
- preservation of Rosetta's established donor sequence;
- preservation of existing Drifters, The Child, Wendy and Lucy, Happening and The Rider profiles.

The global verification control raises the permanent verified-case count from 351 to 352 and gives *I, Daniel Blake* its own ten-source minimum.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 351 | 352 |
| Remaining unverified Production Cases | 27 | 26 |
| Source-backed Film Study profiles | 351 | 352 |
| Remaining seed-origin cases | 25 | 24 |
| Remaining 2010s cases | 25 | 24 |
| Remaining drama cases | 24 | 23 |

The next unverified film is `scenario_manchester_by_the_sea_2016`.
