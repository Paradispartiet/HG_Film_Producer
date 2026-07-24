# Film Producer — full Production Case rest audit

Audit date: **2026-07-24**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 283 |
| Remaining unverified Production Cases | 95 |
| Source-backed Film Study profiles | 283 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 95 |

The audit found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. After correction, all 283 verified records and profiles point to playable scenarios.

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
| `film_scenarios_seed.json` | 84 |
| `italyFranceGermanyBeneluxExpansion.ts` | 9 |
| `southSoutheastAsianExpansion.ts` | 2 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 65 |
| 2000s | 28 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 85 |
| Comedy | 23 |
| Crime | 23 |
| Romance | 21 |
| Thriller | 18 |
| Mystery | 9 |
| Fantasy | 9 |
| Biography | 8 |
| Adventure | 7 |
| Documentary | 6 |
| Horror | 6 |
| Family | 4 |
| Music | 4 |
| Sci-Fi | 4 |
| Animation | 3 |
| War | 3 |
| Action | 2 |
| History | 2 |
| Sport | 1 |
| Western | 1 |

## Complete remaining catalog

| # | Year | Film | Scenario ID |
|---:|---:|---|---|
| 1 | 2000 | Requiem for a Dream | `scenario_requiem_for_a_dream_2000` |
| 2 | 2000 | The Million Dollar Hotel | `scenario_the_million_dollar_hotel_2000` |
| 3 | 2001 | Amélie | `scenario_amelie_2001` |
| 4 | 2002 | The Pianist | `scenario_the_pianist_2002` |
| 5 | 2003 | Dogville | `scenario_dogville_2003` |
| 6 | 2003 | Elephant | `scenario_elephant_2003` |
| 7 | 2003 | Kitchen Stories | `scenario_kitchen_stories_2003` |
| 8 | 2003 | Last Life in the Universe | `scenario_last_life_in_the_universe_2003` |
| 9 | 2003 | Noi the Albino | `scenario_noi_the_albino_2003` |
| 10 | 2003 | The Return | `scenario_the_return_2003` |
| 11 | 2004 | 3-Iron | `scenario_3_iron_2004` |
| 12 | 2004 | Before Sunset | `scenario_before_sunset_2004` |
| 13 | 2004 | Bombón: El Perro | `scenario_bombon_el_perro_2004` |
| 14 | 2004 | Crash | `scenario_crash_2004` |
| 15 | 2004 | The Motorcycle Diaries | `scenario_the_motorcycle_diaries_2004` |
| 16 | 2005 | Adam's Apples | `scenario_adam_s_apples_2005` |
| 17 | 2005 | The Child | `scenario_the_child_2005` |
| 18 | 2006 | Taxidermia | `scenario_taxidermia_2006` |
| 19 | 2007 | 4 Months, 3 Weeks and 2 Days | `scenario_4_months_3_weeks_and_2_days_2007` |
| 20 | 2007 | The Savages | `scenario_the_savages_2007` |
| 21 | 2008 | Blindness | `scenario_blindness_2008` |
| 22 | 2008 | Gran Torino | `scenario_gran_torino_2008` |
| 23 | 2008 | Mesrine: Killer Instinct | `scenario_mesrine_killer_instinct_2008` |
| 24 | 2008 | Mesrine: Public Enemy No. 1 | `scenario_mesrine_public_enemy_no_1_2008` |
| 25 | 2008 | The Class | `scenario_the_class_2008` |
| 26 | 2008 | WALL·E | `scenario_walle_2008` |
| 27 | 2009 | A Prophet | `scenario_a_prophet_2009` |
| 28 | 2009 | Alamar | `scenario_alamar_2009` |
| 29 | 2010 | A Somewhat Gentle Man | `scenario_a_somewhat_gentle_man_2010` |
| 30 | 2010 | Troll Hunter | `scenario_troll_hunter_2010` |
| 31 | 2011 | Detachment | `scenario_detachment_2011` |
| 32 | 2011 | Hugo | `scenario_hugo_2011` |
| 33 | 2012 | In the House | `scenario_in_the_house_2012` |
| 34 | 2012 | Moonrise Kingdom | `scenario_moonrise_kingdom_2012` |
| 35 | 2012 | Searching for Sugar Man | `scenario_searching_for_sugar_man_2012` |
| 36 | 2012 | The Broken Circle Breakdown | `scenario_the_broken_circle_breakdown_2012` |
| 37 | 2012 | The Impossible | `scenario_the_impossible_2012` |
| 38 | 2013 | Blue Jasmine | `scenario_blue_jasmine_2013` |
| 39 | 2013 | Her | `scenario_her_2013` |
| 40 | 2013 | Norte, the End of History | `scenario_norte_the_end_of_history_2013` |
| 41 | 2013 | Rush | `scenario_rush_2013` |
| 42 | 2013 | Tangerines | `scenario_tangerines_2013` |
| 43 | 2013 | The Great Beauty | `scenario_the_great_beauty_2013` |
| 44 | 2013 | The Lunchbox | `scenario_the_lunchbox_2013` |
| 45 | 2014 | A Pigeon Sat on a Branch Reflecting on Existence | `scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014` |
| 46 | 2014 | It Follows | `scenario_it_follows_2014` |
| 47 | 2014 | Leviathan | `scenario_leviathan_2014` |
| 48 | 2014 | Mommy | `scenario_mommy_2014` |
| 49 | 2014 | Nightcrawler | `scenario_nightcrawler_2014` |
| 50 | 2015 | 45 Years | `scenario_45_years_2015` |
| 51 | 2015 | Amy | `scenario_amy_2015` |
| 52 | 2015 | Anomalisa | `scenario_anomalisa_2015` |
| 53 | 2015 | Brothers | `scenario_brothers_2015` |
| 54 | 2015 | Dheepan | `scenario_dheepan_2015` |
| 55 | 2015 | Drifters | `scenario_drifters_2015` |
| 56 | 2015 | Homesick | `scenario_homesick_2015` |
| 57 | 2015 | Inside Out | `scenario_inside_out_2015` |
| 58 | 2015 | Land of Mine | `scenario_land_of_mine_2015` |
| 59 | 2015 | My Skinny Sister | `scenario_my_skinny_sister_2015` |
| 60 | 2015 | Rams | `scenario_rams_2015` |
| 61 | 2015 | Room | `scenario_room_2015` |
| 62 | 2015 | Taxi | `scenario_taxi_2015` |
| 63 | 2015 | The Brand New Testament | `scenario_the_brand_new_testament_2015` |
| 64 | 2015 | The Hateful Eight | `scenario_the_hateful_eight_2015` |
| 65 | 2015 | The Lobster | `scenario_the_lobster_2015` |
| 66 | 2015 | Virgin Mountain | `scenario_virgin_mountain_2015` |
| 67 | 2016 | A Monster Calls | `scenario_a_monster_calls_2016` |
| 68 | 2016 | Café Society | `scenario_cafe_society_2016` |
| 69 | 2016 | I, Daniel Blake | `scenario_i_daniel_blake_2016` |
| 70 | 2016 | Manchester by the Sea | `scenario_manchester_by_the_sea_2016` |
| 71 | 2016 | Nerve | `scenario_nerve_2016` |
| 72 | 2016 | Paterson | `scenario_paterson_2016` |
| 73 | 2017 | Call Me by Your Name | `scenario_call_me_by_your_name_2017` |
| 74 | 2017 | Filmworker | `scenario_filmworker_2017` |
| 75 | 2017 | Good Time | `scenario_good_time_2017` |
| 76 | 2017 | Loveless | `scenario_loveless_2017` |
| 77 | 2017 | On Body and Soul | `scenario_on_body_and_soul_2017` |
| 78 | 2017 | Terrified | `scenario_terrified_2017` |
| 79 | 2017 | The Big Sick | `scenario_the_big_sick_2017` |
| 80 | 2017 | The Florida Project | `scenario_the_florida_project_2017` |
| 81 | 2017 | The Killing of a Sacred Deer | `scenario_the_killing_of_a_sacred_deer_2017` |
| 82 | 2017 | The Square | `scenario_the_square_2017` |
| 83 | 2017 | Trädgårdsgatan | `scenario_tradgardsgatan_2017` |
| 84 | 2018 | Birds of Passage | `scenario_birds_of_passage_2018` |
| 85 | 2018 | Capernaum | `scenario_capernaum_2018` |
| 86 | 2018 | Happy as Lazzaro | `scenario_happy_as_lazzaro_2018` |
| 87 | 2018 | Shoplifters | `scenario_shoplifters_2018` |
| 88 | 2018 | The Guilty | `scenario_the_guilty_2018` |
| 89 | 2018 | The House That Jack Built | `scenario_the_house_that_jack_built_2018` |
| 90 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 91 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 92 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 93 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 94 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 95 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
