# Film Producer — full Production Case rest audit

Audit date: **2026-07-24**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 278 |
| Remaining unverified Production Cases | 100 |
| Source-backed Film Study profiles | 278 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 100 |

The audit found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. After correction, all 278 verified records and profiles point to playable scenarios.

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
| `film_scenarios_seed.json` | 89 |
| `italyFranceGermanyBeneluxExpansion.ts` | 9 |
| `southSoutheastAsianExpansion.ts` | 2 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 65 |
| 2000s | 28 |
| 1990s | 5 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 89 |
| Comedy | 25 |
| Crime | 24 |
| Romance | 21 |
| Thriller | 19 |
| Mystery | 10 |
| Fantasy | 10 |
| Biography | 9 |
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
| 1 | 1998 | The Big Lebowski | `scenario_the_big_lebowski_1998` |
| 2 | 1999 | Being John Malkovich | `scenario_being_john_malkovich_1999` |
| 3 | 1999 | Eyes Wide Shut | `scenario_eyes_wide_shut_1999` |
| 4 | 1999 | Rosetta | `scenario_rosetta_1999` |
| 5 | 1999 | The Straight Story | `scenario_the_straight_story_1999` |
| 6 | 2000 | Requiem for a Dream | `scenario_requiem_for_a_dream_2000` |
| 7 | 2000 | The Million Dollar Hotel | `scenario_the_million_dollar_hotel_2000` |
| 8 | 2001 | Amélie | `scenario_amelie_2001` |
| 9 | 2002 | The Pianist | `scenario_the_pianist_2002` |
| 10 | 2003 | Dogville | `scenario_dogville_2003` |
| 11 | 2003 | Elephant | `scenario_elephant_2003` |
| 12 | 2003 | Kitchen Stories | `scenario_kitchen_stories_2003` |
| 13 | 2003 | Last Life in the Universe | `scenario_last_life_in_the_universe_2003` |
| 14 | 2003 | Noi the Albino | `scenario_noi_the_albino_2003` |
| 15 | 2003 | The Return | `scenario_the_return_2003` |
| 16 | 2004 | 3-Iron | `scenario_3_iron_2004` |
| 17 | 2004 | Before Sunset | `scenario_before_sunset_2004` |
| 18 | 2004 | Bombón: El Perro | `scenario_bombon_el_perro_2004` |
| 19 | 2004 | Crash | `scenario_crash_2004` |
| 20 | 2004 | The Motorcycle Diaries | `scenario_the_motorcycle_diaries_2004` |
| 21 | 2005 | Adam's Apples | `scenario_adam_s_apples_2005` |
| 22 | 2005 | The Child | `scenario_the_child_2005` |
| 23 | 2006 | Taxidermia | `scenario_taxidermia_2006` |
| 24 | 2007 | 4 Months, 3 Weeks and 2 Days | `scenario_4_months_3_weeks_and_2_days_2007` |
| 25 | 2007 | The Savages | `scenario_the_savages_2007` |
| 26 | 2008 | Blindness | `scenario_blindness_2008` |
| 27 | 2008 | Gran Torino | `scenario_gran_torino_2008` |
| 28 | 2008 | Mesrine: Killer Instinct | `scenario_mesrine_killer_instinct_2008` |
| 29 | 2008 | Mesrine: Public Enemy No. 1 | `scenario_mesrine_public_enemy_no_1_2008` |
| 30 | 2008 | The Class | `scenario_the_class_2008` |
| 31 | 2008 | WALL·E | `scenario_walle_2008` |
| 32 | 2009 | A Prophet | `scenario_a_prophet_2009` |
| 33 | 2009 | Alamar | `scenario_alamar_2009` |
| 34 | 2010 | A Somewhat Gentle Man | `scenario_a_somewhat_gentle_man_2010` |
| 35 | 2010 | Troll Hunter | `scenario_troll_hunter_2010` |
| 36 | 2011 | Detachment | `scenario_detachment_2011` |
| 37 | 2011 | Hugo | `scenario_hugo_2011` |
| 38 | 2012 | In the House | `scenario_in_the_house_2012` |
| 39 | 2012 | Moonrise Kingdom | `scenario_moonrise_kingdom_2012` |
| 40 | 2012 | Searching for Sugar Man | `scenario_searching_for_sugar_man_2012` |
| 41 | 2012 | The Broken Circle Breakdown | `scenario_the_broken_circle_breakdown_2012` |
| 42 | 2012 | The Impossible | `scenario_the_impossible_2012` |
| 43 | 2013 | Blue Jasmine | `scenario_blue_jasmine_2013` |
| 44 | 2013 | Her | `scenario_her_2013` |
| 45 | 2013 | Norte, the End of History | `scenario_norte_the_end_of_history_2013` |
| 46 | 2013 | Rush | `scenario_rush_2013` |
| 47 | 2013 | Tangerines | `scenario_tangerines_2013` |
| 48 | 2013 | The Great Beauty | `scenario_the_great_beauty_2013` |
| 49 | 2013 | The Lunchbox | `scenario_the_lunchbox_2013` |
| 50 | 2014 | A Pigeon Sat on a Branch Reflecting on Existence | `scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014` |
| 51 | 2014 | It Follows | `scenario_it_follows_2014` |
| 52 | 2014 | Leviathan | `scenario_leviathan_2014` |
| 53 | 2014 | Mommy | `scenario_mommy_2014` |
| 54 | 2014 | Nightcrawler | `scenario_nightcrawler_2014` |
| 55 | 2015 | 45 Years | `scenario_45_years_2015` |
| 56 | 2015 | Amy | `scenario_amy_2015` |
| 57 | 2015 | Anomalisa | `scenario_anomalisa_2015` |
| 58 | 2015 | Brothers | `scenario_brothers_2015` |
| 59 | 2015 | Dheepan | `scenario_dheepan_2015` |
| 60 | 2015 | Drifters | `scenario_drifters_2015` |
| 61 | 2015 | Homesick | `scenario_homesick_2015` |
| 62 | 2015 | Inside Out | `scenario_inside_out_2015` |
| 63 | 2015 | Land of Mine | `scenario_land_of_mine_2015` |
| 64 | 2015 | My Skinny Sister | `scenario_my_skinny_sister_2015` |
| 65 | 2015 | Rams | `scenario_rams_2015` |
| 66 | 2015 | Room | `scenario_room_2015` |
| 67 | 2015 | Taxi | `scenario_taxi_2015` |
| 68 | 2015 | The Brand New Testament | `scenario_the_brand_new_testament_2015` |
| 69 | 2015 | The Hateful Eight | `scenario_the_hateful_eight_2015` |
| 70 | 2015 | The Lobster | `scenario_the_lobster_2015` |
| 71 | 2015 | Virgin Mountain | `scenario_virgin_mountain_2015` |
| 72 | 2016 | A Monster Calls | `scenario_a_monster_calls_2016` |
| 73 | 2016 | Café Society | `scenario_cafe_society_2016` |
| 74 | 2016 | I, Daniel Blake | `scenario_i_daniel_blake_2016` |
| 75 | 2016 | Manchester by the Sea | `scenario_manchester_by_the_sea_2016` |
| 76 | 2016 | Nerve | `scenario_nerve_2016` |
| 77 | 2016 | Paterson | `scenario_paterson_2016` |
| 78 | 2017 | Call Me by Your Name | `scenario_call_me_by_your_name_2017` |
| 79 | 2017 | Filmworker | `scenario_filmworker_2017` |
| 80 | 2017 | Good Time | `scenario_good_time_2017` |
| 81 | 2017 | Loveless | `scenario_loveless_2017` |
| 82 | 2017 | On Body and Soul | `scenario_on_body_and_soul_2017` |
| 83 | 2017 | Terrified | `scenario_terrified_2017` |
| 84 | 2017 | The Big Sick | `scenario_the_big_sick_2017` |
| 85 | 2017 | The Florida Project | `scenario_the_florida_project_2017` |
| 86 | 2017 | The Killing of a Sacred Deer | `scenario_the_killing_of_a_sacred_deer_2017` |
| 87 | 2017 | The Square | `scenario_the_square_2017` |
| 88 | 2017 | Trädgårdsgatan | `scenario_tradgardsgatan_2017` |
| 89 | 2018 | Birds of Passage | `scenario_birds_of_passage_2018` |
| 90 | 2018 | Capernaum | `scenario_capernaum_2018` |
| 91 | 2018 | Happy as Lazzaro | `scenario_happy_as_lazzaro_2018` |
| 92 | 2018 | Shoplifters | `scenario_shoplifters_2018` |
| 93 | 2018 | The Guilty | `scenario_the_guilty_2018` |
| 94 | 2018 | The House That Jack Built | `scenario_the_house_that_jack_built_2018` |
| 95 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 96 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 97 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 98 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 99 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 100 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
