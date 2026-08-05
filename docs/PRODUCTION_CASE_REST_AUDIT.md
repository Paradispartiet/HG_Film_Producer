# Film Producer — full Production Case rest audit

Audit date: **2026-08-05**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 339 |
| Remaining unverified Production Cases | 39 |
| Source-backed Film Study profiles | 339 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 39 |

The audit found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. After correction, all 339 verified records and profiles point to playable scenarios.

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
| `film_scenarios_seed.json` | 34 |
| `italyFranceGermanyBeneluxExpansion.ts` | 4 |
| `southSoutheastAsianExpansion.ts` | 1 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 37 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 34 |
| Comedy | 10 |
| Crime | 8 |
| Romance | 10 |
| Thriller | 8 |
| Fantasy | 5 |
| Horror | 4 |
| Mystery | 3 |
| Documentary | 2 |
| Adventure | 3 |
| Biography | 1 |
| Family | 2 |
| Animation | 1 |
| History | 1 |
| War | 1 |
| Sci-Fi | 1 |
| Western | 1 |

## Complete remaining catalog

| # | Year | Film | Scenario ID |
|---:|---:|---|---|
| 1 | 2015 | Inside Out | `scenario_inside_out_2015` |
| 2 | 2015 | Land of Mine | `scenario_land_of_mine_2015` |
| 3 | 2015 | My Skinny Sister | `scenario_my_skinny_sister_2015` |
| 4 | 2015 | Rams | `scenario_rams_2015` |
| 5 | 2015 | Room | `scenario_room_2015` |
| 6 | 2015 | Taxi | `scenario_taxi_2015` |
| 7 | 2015 | The Brand New Testament | `scenario_the_brand_new_testament_2015` |
| 8 | 2015 | The Hateful Eight | `scenario_the_hateful_eight_2015` |
| 9 | 2015 | The Lobster | `scenario_the_lobster_2015` |
| 10 | 2015 | Virgin Mountain | `scenario_virgin_mountain_2015` |
| 11 | 2016 | A Monster Calls | `scenario_a_monster_calls_2016` |
| 12 | 2016 | Café Society | `scenario_cafe_society_2016` |
| 13 | 2016 | I, Daniel Blake | `scenario_i_daniel_blake_2016` |
| 14 | 2016 | Manchester by the Sea | `scenario_manchester_by_the_sea_2016` |
| 15 | 2016 | Nerve | `scenario_nerve_2016` |
| 16 | 2016 | Paterson | `scenario_paterson_2016` |
| 17 | 2017 | Call Me by Your Name | `scenario_call_me_by_your_name_2017` |
| 18 | 2017 | Filmworker | `scenario_filmworker_2017` |
| 19 | 2017 | Good Time | `scenario_good_time_2017` |
| 20 | 2017 | Loveless | `scenario_loveless_2017` |
| 21 | 2017 | On Body and Soul | `scenario_on_body_and_soul_2017` |
| 22 | 2017 | Terrified | `scenario_terrified_2017` |
| 23 | 2017 | The Big Sick | `scenario_the_big_sick_2017` |
| 24 | 2017 | The Florida Project | `scenario_the_florida_project_2017` |
| 25 | 2017 | The Killing of a Sacred Deer | `scenario_the_killing_of_a_sacred_deer_2017` |
| 26 | 2017 | The Square | `scenario_the_square_2017` |
| 27 | 2017 | Trädgårdsgatan | `scenario_tradgardsgatan_2017` |
| 28 | 2018 | Birds of Passage | `scenario_birds_of_passage_2018` |
| 29 | 2018 | Capernaum | `scenario_capernaum_2018` |
| 30 | 2018 | Happy as Lazzaro | `scenario_happy_as_lazzaro_2018` |
| 31 | 2018 | Shoplifters | `scenario_shoplifters_2018` |
| 32 | 2018 | The Guilty | `scenario_the_guilty_2018` |
| 33 | 2018 | The House That Jack Built | `scenario_the_house_that_jack_built_2018` |
| 34 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 35 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 36 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 37 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 38 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 39 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
