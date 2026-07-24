# Film Producer — full Production Case rest audit

Audit date: **2026-07-24**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 267 |
| Remaining unverified Production Cases | 111 |
| Source-backed Film Study profiles | 267 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 111 |

The audit found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. After correction, all 267 verified records and profiles point to playable scenarios.

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
| `film_scenarios_seed.json` | 100 |
| `italyFranceGermanyBeneluxExpansion.ts` | 9 |
| `southSoutheastAsianExpansion.ts` | 2 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 65 |
| 2000s | 28 |
| 1990s | 16 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 99 |
| Crime | 28 |
| Comedy | 27 |
| Romance | 24 |
| Thriller | 22 |
| Mystery | 13 |
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
| 1 | 1995 | Antonia's Line | `scenario_antonia_s_line_1995` |
| 2 | 1995 | Before Sunrise | `scenario_before_sunrise_1995` |
| 3 | 1995 | Clockers | `scenario_clockers_1995` |
| 4 | 1995 | La Haine | `scenario_la_haine_1995` |
| 5 | 1995 | Leaving Las Vegas | `scenario_leaving_las_vegas_1995` |
| 6 | 1996 | Fargo | `scenario_fargo_1996` |
| 7 | 1996 | Trainspotting | `scenario_trainspotting_1996` |
| 8 | 1997 | Character | `scenario_character_1997` |
| 9 | 1997 | Taste of Cherry | `scenario_taste_of_cherry_1997` |
| 10 | 1997 | The Game | `scenario_the_game_1997` |
| 11 | 1998 | Buffalo '66 | `scenario_buffalo_66_1998` |
| 12 | 1998 | The Big Lebowski | `scenario_the_big_lebowski_1998` |
| 13 | 1999 | Being John Malkovich | `scenario_being_john_malkovich_1999` |
| 14 | 1999 | Eyes Wide Shut | `scenario_eyes_wide_shut_1999` |
| 15 | 1999 | Rosetta | `scenario_rosetta_1999` |
| 16 | 1999 | The Straight Story | `scenario_the_straight_story_1999` |
| 17 | 2000 | Requiem for a Dream | `scenario_requiem_for_a_dream_2000` |
| 18 | 2000 | The Million Dollar Hotel | `scenario_the_million_dollar_hotel_2000` |
| 19 | 2001 | Amélie | `scenario_amelie_2001` |
| 20 | 2002 | The Pianist | `scenario_the_pianist_2002` |
| 21 | 2003 | Dogville | `scenario_dogville_2003` |
| 22 | 2003 | Elephant | `scenario_elephant_2003` |
| 23 | 2003 | Kitchen Stories | `scenario_kitchen_stories_2003` |
| 24 | 2003 | Last Life in the Universe | `scenario_last_life_in_the_universe_2003` |
| 25 | 2003 | Noi the Albino | `scenario_noi_the_albino_2003` |
| 26 | 2003 | The Return | `scenario_the_return_2003` |
| 27 | 2004 | 3-Iron | `scenario_3_iron_2004` |
| 28 | 2004 | Before Sunset | `scenario_before_sunset_2004` |
| 29 | 2004 | Bombón: El Perro | `scenario_bombon_el_perro_2004` |
| 30 | 2004 | Crash | `scenario_crash_2004` |
| 31 | 2004 | The Motorcycle Diaries | `scenario_the_motorcycle_diaries_2004` |
| 32 | 2005 | Adam's Apples | `scenario_adam_s_apples_2005` |
| 33 | 2005 | The Child | `scenario_the_child_2005` |
| 34 | 2006 | Taxidermia | `scenario_taxidermia_2006` |
| 35 | 2007 | 4 Months, 3 Weeks and 2 Days | `scenario_4_months_3_weeks_and_2_days_2007` |
| 36 | 2007 | The Savages | `scenario_the_savages_2007` |
| 37 | 2008 | Blindness | `scenario_blindness_2008` |
| 38 | 2008 | Gran Torino | `scenario_gran_torino_2008` |
| 39 | 2008 | Mesrine: Killer Instinct | `scenario_mesrine_killer_instinct_2008` |
| 40 | 2008 | Mesrine: Public Enemy No. 1 | `scenario_mesrine_public_enemy_no_1_2008` |
| 41 | 2008 | The Class | `scenario_the_class_2008` |
| 42 | 2008 | WALL·E | `scenario_walle_2008` |
| 43 | 2009 | A Prophet | `scenario_a_prophet_2009` |
| 44 | 2009 | Alamar | `scenario_alamar_2009` |
| 45 | 2010 | A Somewhat Gentle Man | `scenario_a_somewhat_gentle_man_2010` |
| 46 | 2010 | Troll Hunter | `scenario_troll_hunter_2010` |
| 47 | 2011 | Detachment | `scenario_detachment_2011` |
| 48 | 2011 | Hugo | `scenario_hugo_2011` |
| 49 | 2012 | In the House | `scenario_in_the_house_2012` |
| 50 | 2012 | Moonrise Kingdom | `scenario_moonrise_kingdom_2012` |
| 51 | 2012 | Searching for Sugar Man | `scenario_searching_for_sugar_man_2012` |
| 52 | 2012 | The Broken Circle Breakdown | `scenario_the_broken_circle_breakdown_2012` |
| 53 | 2012 | The Impossible | `scenario_the_impossible_2012` |
| 54 | 2013 | Blue Jasmine | `scenario_blue_jasmine_2013` |
| 55 | 2013 | Her | `scenario_her_2013` |
| 56 | 2013 | Norte, the End of History | `scenario_norte_the_end_of_history_2013` |
| 57 | 2013 | Rush | `scenario_rush_2013` |
| 58 | 2013 | Tangerines | `scenario_tangerines_2013` |
| 59 | 2013 | The Great Beauty | `scenario_the_great_beauty_2013` |
| 60 | 2013 | The Lunchbox | `scenario_the_lunchbox_2013` |
| 61 | 2014 | A Pigeon Sat on a Branch Reflecting on Existence | `scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014` |
| 62 | 2014 | It Follows | `scenario_it_follows_2014` |
| 63 | 2014 | Leviathan | `scenario_leviathan_2014` |
| 64 | 2014 | Mommy | `scenario_mommy_2014` |
| 65 | 2014 | Nightcrawler | `scenario_nightcrawler_2014` |
| 66 | 2015 | 45 Years | `scenario_45_years_2015` |
| 67 | 2015 | Amy | `scenario_amy_2015` |
| 68 | 2015 | Anomalisa | `scenario_anomalisa_2015` |
| 69 | 2015 | Brothers | `scenario_brothers_2015` |
| 70 | 2015 | Dheepan | `scenario_dheepan_2015` |
| 71 | 2015 | Drifters | `scenario_drifters_2015` |
| 72 | 2015 | Homesick | `scenario_homesick_2015` |
| 73 | 2015 | Inside Out | `scenario_inside_out_2015` |
| 74 | 2015 | Land of Mine | `scenario_land_of_mine_2015` |
| 75 | 2015 | My Skinny Sister | `scenario_my_skinny_sister_2015` |
| 76 | 2015 | Rams | `scenario_rams_2015` |
| 77 | 2015 | Room | `scenario_room_2015` |
| 78 | 2015 | Taxi | `scenario_taxi_2015` |
| 79 | 2015 | The Brand New Testament | `scenario_the_brand_new_testament_2015` |
| 80 | 2015 | The Hateful Eight | `scenario_the_hateful_eight_2015` |
| 81 | 2015 | The Lobster | `scenario_the_lobster_2015` |
| 82 | 2015 | Virgin Mountain | `scenario_virgin_mountain_2015` |
| 83 | 2016 | A Monster Calls | `scenario_a_monster_calls_2016` |
| 84 | 2016 | Café Society | `scenario_cafe_society_2016` |
| 85 | 2016 | I, Daniel Blake | `scenario_i_daniel_blake_2016` |
| 86 | 2016 | Manchester by the Sea | `scenario_manchester_by_the_sea_2016` |
| 87 | 2016 | Nerve | `scenario_nerve_2016` |
| 88 | 2016 | Paterson | `scenario_paterson_2016` |
| 89 | 2017 | Call Me by Your Name | `scenario_call_me_by_your_name_2017` |
| 90 | 2017 | Filmworker | `scenario_filmworker_2017` |
| 91 | 2017 | Good Time | `scenario_good_time_2017` |
| 92 | 2017 | Loveless | `scenario_loveless_2017` |
| 93 | 2017 | On Body and Soul | `scenario_on_body_and_soul_2017` |
| 94 | 2017 | Terrified | `scenario_terrified_2017` |
| 95 | 2017 | The Big Sick | `scenario_the_big_sick_2017` |
| 96 | 2017 | The Florida Project | `scenario_the_florida_project_2017` |
| 97 | 2017 | The Killing of a Sacred Deer | `scenario_the_killing_of_a_sacred_deer_2017` |
| 98 | 2017 | The Square | `scenario_the_square_2017` |
| 99 | 2017 | Trädgårdsgatan | `scenario_tradgardsgatan_2017` |
| 100 | 2018 | Birds of Passage | `scenario_birds_of_passage_2018` |
| 101 | 2018 | Capernaum | `scenario_capernaum_2018` |
| 102 | 2018 | Happy as Lazzaro | `scenario_happy_as_lazzaro_2018` |
| 103 | 2018 | Shoplifters | `scenario_shoplifters_2018` |
| 104 | 2018 | The Guilty | `scenario_the_guilty_2018` |
| 105 | 2018 | The House That Jack Built | `scenario_the_house_that_jack_built_2018` |
| 106 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 107 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 108 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 109 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 110 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 111 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
