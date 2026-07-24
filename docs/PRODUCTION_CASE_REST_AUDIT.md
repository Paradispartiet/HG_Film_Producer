# Film Producer — full Production Case rest audit

Audit date: **2026-07-24**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 247 |
| Remaining unverified Production Cases | 131 |
| Source-backed Film Study profiles | 247 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 131 |

The audit found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. After correction, all 247 verified records and profiles point to playable scenarios.

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
| `film_scenarios_seed.json` | 113 |
| `italyFranceGermanyBeneluxExpansion.ts` | 13 |
| `easternIberianBritishExpansion.ts` | 3 |
| `southSoutheastAsianExpansion.ts` | 2 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 65 |
| 2000s | 28 |
| 1990s | 21 |
| 1970s | 7 |
| 1980s | 5 |
| 1960s | 3 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 117 |
| Crime | 35 |
| Comedy | 32 |
| Romance | 29 |
| Thriller | 26 |
| Mystery | 13 |
| Biography | 12 |
| Fantasy | 10 |
| Adventure | 8 |
| Documentary | 6 |
| Horror | 6 |
| Sci-Fi | 6 |
| Family | 5 |
| Music | 4 |
| Animation | 3 |
| History | 3 |
| War | 3 |
| Action | 2 |
| Sport | 1 |
| Western | 1 |

## Complete remaining catalog

| # | Year | Film | Scenario ID |
|---:|---:|---|---|
| 1 | 1961 | Viridiana | `scenario_viridiana_1961` |
| 2 | 1964 | The Gospel According to St. Matthew | `scenario_the_gospel_according_to_st_matthew_1964` |
| 3 | 1966 | Au Hasard Balthazar | `scenario_au_hasard_balthazar_1966` |
| 4 | 1971 | A Clockwork Orange | `scenario_a_clockwork_orange_1971` |
| 5 | 1973 | Amarcord | `scenario_amarcord_1973` |
| 6 | 1973 | Mean Streets | `scenario_mean_streets_1973` |
| 7 | 1974 | Scenes from a Marriage | `scenario_scenes_from_a_marriage_1974` |
| 8 | 1975 | Dog Day Afternoon | `scenario_dog_day_afternoon_1975` |
| 9 | 1976 | Taxi Driver | `scenario_taxi_driver_1976` |
| 10 | 1979 | Manhattan | `scenario_manhattan_1979` |
| 11 | 1983 | Rumble Fish | `scenario_rumble_fish_1983` |
| 12 | 1985 | Brazil | `scenario_brazil_1985` |
| 13 | 1986 | Down by Law | `scenario_down_by_law_1986` |
| 14 | 1987 | Where Is the Friend's House? | `scenario_where_is_the_friend_s_house_1987` |
| 15 | 1988 | Cinema Paradiso | `scenario_cinema_paradiso_1988` |
| 16 | 1993 | In the Name of the Father | `scenario_in_the_name_of_the_father_1993` |
| 17 | 1993 | True Romance | `scenario_true_romance_1993` |
| 18 | 1994 | Clerks | `scenario_clerks_1994` |
| 19 | 1994 | Forrest Gump | `scenario_forrest_gump_1994` |
| 20 | 1994 | Sátántangó | `scenario_satantango_1994` |
| 21 | 1995 | Antonia's Line | `scenario_antonia_s_line_1995` |
| 22 | 1995 | Before Sunrise | `scenario_before_sunrise_1995` |
| 23 | 1995 | Clockers | `scenario_clockers_1995` |
| 24 | 1995 | La Haine | `scenario_la_haine_1995` |
| 25 | 1995 | Leaving Las Vegas | `scenario_leaving_las_vegas_1995` |
| 26 | 1996 | Fargo | `scenario_fargo_1996` |
| 27 | 1996 | Trainspotting | `scenario_trainspotting_1996` |
| 28 | 1997 | Character | `scenario_character_1997` |
| 29 | 1997 | Taste of Cherry | `scenario_taste_of_cherry_1997` |
| 30 | 1997 | The Game | `scenario_the_game_1997` |
| 31 | 1998 | Buffalo '66 | `scenario_buffalo_66_1998` |
| 32 | 1998 | The Big Lebowski | `scenario_the_big_lebowski_1998` |
| 33 | 1999 | Being John Malkovich | `scenario_being_john_malkovich_1999` |
| 34 | 1999 | Eyes Wide Shut | `scenario_eyes_wide_shut_1999` |
| 35 | 1999 | Rosetta | `scenario_rosetta_1999` |
| 36 | 1999 | The Straight Story | `scenario_the_straight_story_1999` |
| 37 | 2000 | Requiem for a Dream | `scenario_requiem_for_a_dream_2000` |
| 38 | 2000 | The Million Dollar Hotel | `scenario_the_million_dollar_hotel_2000` |
| 39 | 2001 | Amélie | `scenario_amelie_2001` |
| 40 | 2002 | The Pianist | `scenario_the_pianist_2002` |
| 41 | 2003 | Dogville | `scenario_dogville_2003` |
| 42 | 2003 | Elephant | `scenario_elephant_2003` |
| 43 | 2003 | Kitchen Stories | `scenario_kitchen_stories_2003` |
| 44 | 2003 | Last Life in the Universe | `scenario_last_life_in_the_universe_2003` |
| 45 | 2003 | Noi the Albino | `scenario_noi_the_albino_2003` |
| 46 | 2003 | The Return | `scenario_the_return_2003` |
| 47 | 2004 | 3-Iron | `scenario_3_iron_2004` |
| 48 | 2004 | Before Sunset | `scenario_before_sunset_2004` |
| 49 | 2004 | Bombón: El Perro | `scenario_bombon_el_perro_2004` |
| 50 | 2004 | Crash | `scenario_crash_2004` |
| 51 | 2004 | The Motorcycle Diaries | `scenario_the_motorcycle_diaries_2004` |
| 52 | 2005 | Adam's Apples | `scenario_adam_s_apples_2005` |
| 53 | 2005 | The Child | `scenario_the_child_2005` |
| 54 | 2006 | Taxidermia | `scenario_taxidermia_2006` |
| 55 | 2007 | 4 Months, 3 Weeks and 2 Days | `scenario_4_months_3_weeks_and_2_days_2007` |
| 56 | 2007 | The Savages | `scenario_the_savages_2007` |
| 57 | 2008 | Blindness | `scenario_blindness_2008` |
| 58 | 2008 | Gran Torino | `scenario_gran_torino_2008` |
| 59 | 2008 | Mesrine: Killer Instinct | `scenario_mesrine_killer_instinct_2008` |
| 60 | 2008 | Mesrine: Public Enemy No. 1 | `scenario_mesrine_public_enemy_no_1_2008` |
| 61 | 2008 | The Class | `scenario_the_class_2008` |
| 62 | 2008 | WALL·E | `scenario_walle_2008` |
| 63 | 2009 | A Prophet | `scenario_a_prophet_2009` |
| 64 | 2009 | Alamar | `scenario_alamar_2009` |
| 65 | 2010 | A Somewhat Gentle Man | `scenario_a_somewhat_gentle_man_2010` |
| 66 | 2010 | Troll Hunter | `scenario_troll_hunter_2010` |
| 67 | 2011 | Detachment | `scenario_detachment_2011` |
| 68 | 2011 | Hugo | `scenario_hugo_2011` |
| 69 | 2012 | In the House | `scenario_in_the_house_2012` |
| 70 | 2012 | Moonrise Kingdom | `scenario_moonrise_kingdom_2012` |
| 71 | 2012 | Searching for Sugar Man | `scenario_searching_for_sugar_man_2012` |
| 72 | 2012 | The Broken Circle Breakdown | `scenario_the_broken_circle_breakdown_2012` |
| 73 | 2012 | The Impossible | `scenario_the_impossible_2012` |
| 74 | 2013 | Blue Jasmine | `scenario_blue_jasmine_2013` |
| 75 | 2013 | Her | `scenario_her_2013` |
| 76 | 2013 | Norte, the End of History | `scenario_norte_the_end_of_history_2013` |
| 77 | 2013 | Rush | `scenario_rush_2013` |
| 78 | 2013 | Tangerines | `scenario_tangerines_2013` |
| 79 | 2013 | The Great Beauty | `scenario_the_great_beauty_2013` |
| 80 | 2013 | The Lunchbox | `scenario_the_lunchbox_2013` |
| 81 | 2014 | A Pigeon Sat on a Branch Reflecting on Existence | `scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014` |
| 82 | 2014 | It Follows | `scenario_it_follows_2014` |
| 83 | 2014 | Leviathan | `scenario_leviathan_2014` |
| 84 | 2014 | Mommy | `scenario_mommy_2014` |
| 85 | 2014 | Nightcrawler | `scenario_nightcrawler_2014` |
| 86 | 2015 | 45 Years | `scenario_45_years_2015` |
| 87 | 2015 | Amy | `scenario_amy_2015` |
| 88 | 2015 | Anomalisa | `scenario_anomalisa_2015` |
| 89 | 2015 | Brothers | `scenario_brothers_2015` |
| 90 | 2015 | Dheepan | `scenario_dheepan_2015` |
| 91 | 2015 | Drifters | `scenario_drifters_2015` |
| 92 | 2015 | Homesick | `scenario_homesick_2015` |
| 93 | 2015 | Inside Out | `scenario_inside_out_2015` |
| 94 | 2015 | Land of Mine | `scenario_land_of_mine_2015` |
| 95 | 2015 | My Skinny Sister | `scenario_my_skinny_sister_2015` |
| 96 | 2015 | Rams | `scenario_rams_2015` |
| 97 | 2015 | Room | `scenario_room_2015` |
| 98 | 2015 | Taxi | `scenario_taxi_2015` |
| 99 | 2015 | The Brand New Testament | `scenario_the_brand_new_testament_2015` |
| 100 | 2015 | The Hateful Eight | `scenario_the_hateful_eight_2015` |
| 101 | 2015 | The Lobster | `scenario_the_lobster_2015` |
| 102 | 2015 | Virgin Mountain | `scenario_virgin_mountain_2015` |
| 103 | 2016 | A Monster Calls | `scenario_a_monster_calls_2016` |
| 104 | 2016 | Café Society | `scenario_cafe_society_2016` |
| 105 | 2016 | I, Daniel Blake | `scenario_i_daniel_blake_2016` |
| 106 | 2016 | Manchester by the Sea | `scenario_manchester_by_the_sea_2016` |
| 107 | 2016 | Nerve | `scenario_nerve_2016` |
| 108 | 2016 | Paterson | `scenario_paterson_2016` |
| 109 | 2017 | Call Me by Your Name | `scenario_call_me_by_your_name_2017` |
| 110 | 2017 | Filmworker | `scenario_filmworker_2017` |
| 111 | 2017 | Good Time | `scenario_good_time_2017` |
| 112 | 2017 | Loveless | `scenario_loveless_2017` |
| 113 | 2017 | On Body and Soul | `scenario_on_body_and_soul_2017` |
| 114 | 2017 | Terrified | `scenario_terrified_2017` |
| 115 | 2017 | The Big Sick | `scenario_the_big_sick_2017` |
| 116 | 2017 | The Florida Project | `scenario_the_florida_project_2017` |
| 117 | 2017 | The Killing of a Sacred Deer | `scenario_the_killing_of_a_sacred_deer_2017` |
| 118 | 2017 | The Square | `scenario_the_square_2017` |
| 119 | 2017 | Trädgårdsgatan | `scenario_tradgardsgatan_2017` |
| 120 | 2018 | Birds of Passage | `scenario_birds_of_passage_2018` |
| 121 | 2018 | Capernaum | `scenario_capernaum_2018` |
| 122 | 2018 | Happy as Lazzaro | `scenario_happy_as_lazzaro_2018` |
| 123 | 2018 | Shoplifters | `scenario_shoplifters_2018` |
| 124 | 2018 | The Guilty | `scenario_the_guilty_2018` |
| 125 | 2018 | The House That Jack Built | `scenario_the_house_that_jack_built_2018` |
| 126 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 127 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 128 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 129 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 130 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 131 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
