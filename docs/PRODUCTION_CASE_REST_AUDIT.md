# Film Producer — full Production Case rest audit

Audit date: **2026-08-04**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 333 |
| Remaining unverified Production Cases | 45 |
| Source-backed Film Study profiles | 333 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 45 |

The audit found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. After correction, all 333 verified records and profiles point to playable scenarios.

## Integrity

- No duplicate playable scenario IDs.
- No duplicate verification IDs.
- No duplicate source-backed profile IDs.
- No orphan verification records or profiles.
- No verified cases without a profile, and no profiles without verification.
- Every playable scenario resolves to a film-specific production brief; no seed fallback remains.

## Remaining work by origin

| Catalog origin | Remaining |
|---|---:|
| `film_scenarios_seed.json` | 40 |
| `italyFranceGermanyBeneluxExpansion.ts` | 4 |
| `southSoutheastAsianExpansion.ts` | 1 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 43 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 39 |
| Comedy | 11 |
| Crime | 10 |
| Romance | 11 |
| Thriller | 8 |
| Fantasy | 5 |
| Horror | 4 |
| Mystery | 3 |
| Documentary | 4 |
| Adventure | 3 |
| Biography | 2 |
| Family | 2 |
| Animation | 2 |
| History | 1 |
| War | 1 |
| Music | 1 |
| Sci-Fi | 1 |
| Western | 1 |

## Complete remaining catalog

| # | Year | Film | Scenario ID |
|---:|---:|---|---|
| 1 | 2015 | Amy | `scenario_amy_2015` |
| 2 | 2015 | Anomalisa | `scenario_anomalisa_2015` |
| 3 | 2015 | Brothers | `scenario_brothers_2015` |
| 4 | 2015 | Dheepan | `scenario_dheepan_2015` |
| 5 | 2015 | Drifters | `scenario_drifters_2015` |
| 6 | 2015 | Homesick | `scenario_homesick_2015` |
| 7 | 2015 | Inside Out | `scenario_inside_out_2015` |
| 8 | 2015 | Land of Mine | `scenario_land_of_mine_2015` |
| 9 | 2015 | My Skinny Sister | `scenario_my_skinny_sister_2015` |
| 10 | 2015 | Rams | `scenario_rams_2015` |
| 11 | 2015 | Room | `scenario_room_2015` |
| 12 | 2015 | Taxi | `scenario_taxi_2015` |
| 13 | 2015 | The Brand New Testament | `scenario_the_brand_new_testament_2015` |
| 14 | 2015 | The Hateful Eight | `scenario_the_hateful_eight_2015` |
| 15 | 2015 | The Lobster | `scenario_the_lobster_2015` |
| 16 | 2015 | Virgin Mountain | `scenario_virgin_mountain_2015` |
| 17 | 2016 | A Monster Calls | `scenario_a_monster_calls_2016` |
| 18 | 2016 | Café Society | `scenario_cafe_society_2016` |
| 19 | 2016 | I, Daniel Blake | `scenario_i_daniel_blake_2016` |
| 20 | 2016 | Manchester by the Sea | `scenario_manchester_by_the_sea_2016` |
| 21 | 2016 | Nerve | `scenario_nerve_2016` |
| 22 | 2016 | Paterson | `scenario_paterson_2016` |
| 23 | 2017 | Call Me by Your Name | `scenario_call_me_by_your_name_2017` |
| 24 | 2017 | Filmworker | `scenario_filmworker_2017` |
| 25 | 2017 | Good Time | `scenario_good_time_2017` |
| 26 | 2017 | Loveless | `scenario_loveless_2017` |
| 27 | 2017 | On Body and Soul | `scenario_on_body_and_soul_2017` |
| 28 | 2017 | Terrified | `scenario_terrified_2017` |
| 29 | 2017 | The Big Sick | `scenario_the_big_sick_2017` |
| 30 | 2017 | The Florida Project | `scenario_the_florida_project_2017` |
| 31 | 2017 | The Killing of a Sacred Deer | `scenario_the_killing_of_a_sacred_deer_2017` |
| 32 | 2017 | The Square | `scenario_the_square_2017` |
| 33 | 2017 | Trädgårdsgatan | `scenario_tradgardsgatan_2017` |
| 34 | 2018 | Birds of Passage | `scenario_birds_of_passage_2018` |
| 35 | 2018 | Capernaum | `scenario_capernaum_2018` |
| 36 | 2018 | Happy as Lazzaro | `scenario_happy_as_lazzaro_2018` |
| 37 | 2018 | Shoplifters | `scenario_shoplifters_2018` |
| 38 | 2018 | The Guilty | `scenario_the_guilty_2018` |
| 39 | 2018 | The House That Jack Built | `scenario_the_house_that_jack_built_2018` |
| 40 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 41 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 42 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 43 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 44 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 45 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
