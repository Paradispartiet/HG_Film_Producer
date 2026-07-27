# Film Producer — full Production Case rest audit

Audit date: **2026-07-27**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 299 |
| Remaining unverified Production Cases | 79 |
| Source-backed Film Study profiles | 299 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 79 |

The audit found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. After correction, all 299 verified records and profiles point to playable scenarios.

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
| `film_scenarios_seed.json` | 71 |
| `italyFranceGermanyBeneluxExpansion.ts` | 6 |
| `southSoutheastAsianExpansion.ts` | 2 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 65 |
| 2000s | 12 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 69 |
| Comedy | 16 |
| Crime | 17 |
| Romance | 16 |
| Thriller | 16 |
| Fantasy | 9 |
| Biography | 6 |
| Mystery | 7 |
| Adventure | 6 |
| Documentary | 6 |
| Horror | 6 |
| Family | 4 |
| Music | 3 |
| Sci-Fi | 4 |
| Animation | 3 |
| War | 2 |
| Action | 2 |
| History | 2 |
| Sport | 1 |
| Western | 1 |

## Complete remaining catalog

| # | Year | Film | Scenario ID |
|---:|---:|---|---|
| 1 | 2005 | The Child | `scenario_the_child_2005` |
| 2 | 2006 | Taxidermia | `scenario_taxidermia_2006` |
| 3 | 2007 | 4 Months, 3 Weeks and 2 Days | `scenario_4_months_3_weeks_and_2_days_2007` |
| 4 | 2007 | The Savages | `scenario_the_savages_2007` |
| 5 | 2008 | Blindness | `scenario_blindness_2008` |
| 6 | 2008 | Gran Torino | `scenario_gran_torino_2008` |
| 7 | 2008 | Mesrine: Killer Instinct | `scenario_mesrine_killer_instinct_2008` |
| 8 | 2008 | Mesrine: Public Enemy No. 1 | `scenario_mesrine_public_enemy_no_1_2008` |
| 9 | 2008 | The Class | `scenario_the_class_2008` |
| 10 | 2008 | WALL·E | `scenario_walle_2008` |
| 11 | 2009 | A Prophet | `scenario_a_prophet_2009` |
| 12 | 2009 | Alamar | `scenario_alamar_2009` |
| 13 | 2010 | A Somewhat Gentle Man | `scenario_a_somewhat_gentle_man_2010` |
| 14 | 2010 | Troll Hunter | `scenario_troll_hunter_2010` |
| 15 | 2011 | Detachment | `scenario_detachment_2011` |
| 16 | 2011 | Hugo | `scenario_hugo_2011` |
| 17 | 2012 | In the House | `scenario_in_the_house_2012` |
| 18 | 2012 | Moonrise Kingdom | `scenario_moonrise_kingdom_2012` |
| 19 | 2012 | Searching for Sugar Man | `scenario_searching_for_sugar_man_2012` |
| 20 | 2012 | The Broken Circle Breakdown | `scenario_the_broken_circle_breakdown_2012` |
| 21 | 2012 | The Impossible | `scenario_the_impossible_2012` |
| 22 | 2013 | Blue Jasmine | `scenario_blue_jasmine_2013` |
| 23 | 2013 | Her | `scenario_her_2013` |
| 24 | 2013 | Norte, the End of History | `scenario_norte_the_end_of_history_2013` |
| 25 | 2013 | Rush | `scenario_rush_2013` |
| 26 | 2013 | Tangerines | `scenario_tangerines_2013` |
| 27 | 2013 | The Great Beauty | `scenario_the_great_beauty_2013` |
| 28 | 2013 | The Lunchbox | `scenario_the_lunchbox_2013` |
| 29 | 2014 | A Pigeon Sat on a Branch Reflecting on Existence | `scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014` |
| 30 | 2014 | It Follows | `scenario_it_follows_2014` |
| 31 | 2014 | Leviathan | `scenario_leviathan_2014` |
| 32 | 2014 | Mommy | `scenario_mommy_2014` |
| 33 | 2014 | Nightcrawler | `scenario_nightcrawler_2014` |
| 34 | 2015 | 45 Years | `scenario_45_years_2015` |
| 35 | 2015 | Amy | `scenario_amy_2015` |
| 36 | 2015 | Anomalisa | `scenario_anomalisa_2015` |
| 37 | 2015 | Brothers | `scenario_brothers_2015` |
| 38 | 2015 | Dheepan | `scenario_dheepan_2015` |
| 39 | 2015 | Drifters | `scenario_drifters_2015` |
| 40 | 2015 | Homesick | `scenario_homesick_2015` |
| 41 | 2015 | Inside Out | `scenario_inside_out_2015` |
| 42 | 2015 | Land of Mine | `scenario_land_of_mine_2015` |
| 43 | 2015 | My Skinny Sister | `scenario_my_skinny_sister_2015` |
| 44 | 2015 | Rams | `scenario_rams_2015` |
| 45 | 2015 | Room | `scenario_room_2015` |
| 46 | 2015 | Taxi | `scenario_taxi_2015` |
| 47 | 2015 | The Brand New Testament | `scenario_the_brand_new_testament_2015` |
| 48 | 2015 | The Hateful Eight | `scenario_the_hateful_eight_2015` |
| 49 | 2015 | The Lobster | `scenario_the_lobster_2015` |
| 50 | 2015 | Virgin Mountain | `scenario_virgin_mountain_2015` |
| 51 | 2016 | A Monster Calls | `scenario_a_monster_calls_2016` |
| 52 | 2016 | Café Society | `scenario_cafe_society_2016` |
| 53 | 2016 | I, Daniel Blake | `scenario_i_daniel_blake_2016` |
| 54 | 2016 | Manchester by the Sea | `scenario_manchester_by_the_sea_2016` |
| 55 | 2016 | Nerve | `scenario_nerve_2016` |
| 56 | 2016 | Paterson | `scenario_paterson_2016` |
| 57 | 2017 | Call Me by Your Name | `scenario_call_me_by_your_name_2017` |
| 58 | 2017 | Filmworker | `scenario_filmworker_2017` |
| 59 | 2017 | Good Time | `scenario_good_time_2017` |
| 60 | 2017 | Loveless | `scenario_loveless_2017` |
| 61 | 2017 | On Body and Soul | `scenario_on_body_and_soul_2017` |
| 62 | 2017 | Terrified | `scenario_terrified_2017` |
| 63 | 2017 | The Big Sick | `scenario_the_big_sick_2017` |
| 64 | 2017 | The Florida Project | `scenario_the_florida_project_2017` |
| 65 | 2017 | The Killing of a Sacred Deer | `scenario_the_killing_of_a_sacred_deer_2017` |
| 66 | 2017 | The Square | `scenario_the_square_2017` |
| 67 | 2017 | Trädgårdsgatan | `scenario_tradgardsgatan_2017` |
| 68 | 2018 | Birds of Passage | `scenario_birds_of_passage_2018` |
| 69 | 2018 | Capernaum | `scenario_capernaum_2018` |
| 70 | 2018 | Happy as Lazzaro | `scenario_happy_as_lazzaro_2018` |
| 71 | 2018 | Shoplifters | `scenario_shoplifters_2018` |
| 72 | 2018 | The Guilty | `scenario_the_guilty_2018` |
| 73 | 2018 | The House That Jack Built | `scenario_the_house_that_jack_built_2018` |
| 74 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 75 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 76 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 77 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 78 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 79 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
