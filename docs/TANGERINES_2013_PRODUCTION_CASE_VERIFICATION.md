# Tangerines (2013) — Production Case verification

Verification date: **2026-07-28**

## Decision

`scenario_tangerines_2013` is materialized as a complete source-backed Production Case in the existing Balkan war and institution resolver.

The case is not classified by Caucasus geography alone. Its production system is:

`abkhazia_estonian_shelter_enemy_care_chamber_war_drama`

The decisive relationship is among the 1992 War in Abkhazia, an Estonian-Georgian co-production, a four-character shelter screenplay, one house and orchard, restrained enemy proximity, agricultural labour, threatened domestic silence and brief practical violence.

## Film Study coverage

All 17 Film Study areas are present:

- **14 `source_verified`**: historical context, movement and tradition, industry and production context, reception and legacy, screenplay, directing, performance, production design, cinematography, lighting, editing, sound design, music and documentary method
- **2 `mapped`**: costume and makeup; camera format
- **1 `not_central`**: effects and animation

This keeps the unresolved department-level evidence explicit instead of promoting general observations into false source verification.

## Source package

The verification record contains **10 inspectable HTTPS sources from 10 publishers**:

1. Estonian Film Database
2. Academy of Motion Picture Arts and Sciences
3. Golden Globes
4. Ministry of Foreign Affairs of Estonia
5. TheWrap
6. Cineuropa
7. Screen International
8. Filmmaker Magazine
9. Irish Film Institute
10. ERR News

Together they cover the historical setting, Estonian-Georgian production, screenplay development, Guria location strategy, principal departments, chamber-drama form, cinematography, editing, sound, music, awards and international circulation.

## Exact comparison donors

The film receives one isolated three-profile donor sequence:

1. `scenario_no_mans_land_2001`
   - another contained antiwar production built around opposing soldiers and one practical spatial predicament
2. `scenario_before_the_rain_1994`
   - ethnic conflict organised through intimate moral decisions, landscape and cyclical violence
3. `scenario_quo_vadis_aida_2020`
   - civilian protection, restricted access and the failure of institutions to secure shelter

The donors are selected by production logic, not by a generic regional bucket.

## Isolation and scope

The change:

- adds one Film Study profile
- adds one verification record
- adds one dedicated regression test
- extends only the existing Balkan resolver and verification aggregator
- updates the permanent verification count and remaining-case audit

It does **not** change:

- the scenario seed
- the existing Tangerines production brief
- workflow definitions
- the global scenario catalogue
- the existing four Balkan profiles or their ordinary donor-selection behavior

## Permanent controls

The regression package requires:

- exact seed genres `Drama` and `War`
- exactly 17 coverage areas
- exact coverage summary `14 / 2 / 1`
- 10 sources from 10 distinct publishers
- exact donor order
- match, partial and miss choice structure
- Tangerines-specific feedback isolation
- preservation of all existing Balkan choice branches
- verification registry total of 325
- permanent rest audit with 53 remaining cases

The canonical acceptance command is:

```bash
npm run verify:v0.1
```
