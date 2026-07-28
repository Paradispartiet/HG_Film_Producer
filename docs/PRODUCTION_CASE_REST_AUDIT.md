# Film Producer — full Production Case rest audit

Audit date: **2026-07-28**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 315 |
| Remaining unverified Production Cases | 63 |
| Source-backed Film Study profiles | 315 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 63 |

The audit found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. After correction, all 315 verified records and profiles point to playable scenarios.

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
| `film_scenarios_seed.json` | 56 |
| `italyFranceGermanyBeneluxExpansion.ts` | 5 |
| `southSoutheastAsianExpansion.ts` | 2 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 61 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 55 |
| Comedy | 14 |
| Crime | 12 |
| Romance | 16 |
| Thriller | 12 |
| Fantasy | 7 |
| Mystery | 6 |
| Adventure | 4 |
| Biography | 4 |
| Documentary | 5 |
| Horror | 5 |
| Family | 2 |
| Sci-Fi | 2 |
| Animation | 2 |
| Music | 3 |
| History | 2 |
| War | 2 |
| Sport | 1 |
| Western | 1 |

## Complete remaining catalog

| # | Year | Film | Scenario ID |
|---:|---:|---|---|
| 1 | 2012 | In the House | `scenario_in_the_house_2012` |
| 2 | 2012 | Moonrise Kingdom | `scenario_moonrise_kingdom_2012` |
| 3 | 2012 | Searching for Sugar Man | `scenario_searching_for_sugar_man_2012` |
| 4 | 2012 | The Broken Circle Breakdown | `scenario_the_broken_circle_breakdown_2012` |
| 5 | 2012 | The Impossible | `scenario_the_impossible_2012` |
| 6 | 2013 | Blue Jasmine | `scenario_blue_jasmine_2013` |
| 7 | 2013 | Her | `scenario_her_2013` |
| 8 | 2013 | Norte, the End of History | `scenario_norte_the_end_of_history_2013` |
| 9 | 2013 | Rush | `scenario_rush_2013` |
| 10 | 2013 | Tangerines | `scenario_tangerines_2013` |
| 11 | 2013 | The Great Beauty | `scenario_the_great_beauty_2013` |
| 12 | 2013 | The Lunchbox | `scenario_the_lunchbox_2013` |
| 13 | 2014 | A Pigeon Sat on a Branch Reflecting on Existence | `scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014` |
| 14 | 2014 | It Follows | `scenario_it_follows_2014` |
| 15 | 2014 | Leviathan | `scenario_leviathan_2014` |
| 16 | 2014 | Mommy | `scenario_mommy_2014` |
| 17 | 2014 | Nightcrawler | `scenario_nightcrawler_2014` |
| 18 | 2015 | 45 Years | `scenario_45_years_2015` |
| 19 | 2015 | Amy | `scenario_amy_2015` |
| 20 | 2015 | Anomalisa | `scenario_anomalisa_2015` |
| 21 | 2015 | Brothers | `scenario_brothers_2015` |
| 22 | 2015 | Dheepan | `scenario_dheepan_2015` |
| 23 | 2015 | Drifters | `scenario_drifters_2015` |
| 24 | 2015 | Homesick | `scenario_homesick_2015` |
| 25 | 2015 | Inside Out | `scenario_inside_out_2015` |
| 26 | 2015 | Land of Mine | `scenario_land_of_mine_2015` |
| 27 | 2015 | My Skinny Sister | `scenario_my_skinny_sister_2015` |
| 28 | 2015 | Rams | `scenario_rams_2015` |
| 29 | 2015 | Room | `scenario_room_2015` |
| 30 | 2015 | Taxi | `scenario_taxi_2015` |
| 31 | 2015 | The Brand New Testament | `scenario_the_brand_new_testament_2015` |
| 32 | 2015 | The Hateful Eight | `scenario_the_hateful_eight_2015` |
| 33 | 2015 | The Lobster | `scenario_the_lobster_2015` |
| 34 | 2015 | Virgin Mountain | `scenario_virgin_mountain_2015` |
| 35 | 2016 | A Monster Calls | `scenario_a_monster_calls_2016` |
| 36 | 2016 | Café Society | `scenario_cafe_society_2016` |
| 37 | 2016 | I, Daniel Blake | `scenario_i_daniel_blake_2016` |
| 38 | 2016 | Manchester by the Sea | `scenario_manchester_by_the_sea_2016` |
| 39 | 2016 | Nerve | `scenario_nerve_2016` |
| 40 | 2016 | Paterson | `scenario_paterson_2016` |
| 41 | 2017 | Call Me by Your Name | `scenario_call_me_by_your_name_2017` |
| 42 | 2017 | Filmworker | `scenario_filmworker_2017` |
| 43 | 2017 | Good Time | `scenario_good_time_2017` |
| 44 | 2017 | Loveless | `scenario_loveless_2017` |
| 45 | 2017 | On Body and Soul | `scenario_on_body_and_soul_2017` |
| 46 | 2017 | Terrified | `scenario_terrified_2017` |
| 47 | 2017 | The Big Sick | `scenario_the_big_sick_2017` |
| 48 | 2017 | The Florida Project | `scenario_the_florida_project_2017` |
| 49 | 2017 | The Killing of a Sacred Deer | `scenario_the_killing_of_a_sacred_deer_2017` |
| 50 | 2017 | The Square | `scenario_the_square_2017` |
| 51 | 2017 | Trädgårdsgatan | `scenario_tradgardsgatan_2017` |
| 52 | 2018 | Birds of Passage | `scenario_birds_of_passage_2018` |
| 53 | 2018 | Capernaum | `scenario_capernaum_2018` |
| 54 | 2018 | Happy as Lazzaro | `scenario_happy_as_lazzaro_2018` |
| 55 | 2018 | Shoplifters | `scenario_shoplifters_2018` |
| 56 | 2018 | The Guilty | `scenario_the_guilty_2018` |
| 57 | 2018 | The House That Jack Built | `scenario_the_house_that_jack_built_2018` |
| 58 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 59 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 60 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 61 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 62 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 63 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
