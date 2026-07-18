# Production Case brief audit

Date: 2026-07-17

A programmatic audit of all 161 manual Production Case briefs in
`src/ui/data/scenarioProductionBriefs.ts`, cross-referenced with
`data/film/scenarios/film_scenarios_seed.json`. Purpose: turn the blanket
"needs_research" verification status into a concrete editorial worklist before
the post-gate content pass (see `docs/DESIGN_DIRECTION.md`, Priority 2).
Documentation only; no data or behavior changes.

## Method

For every brief: count target lines per phase field, measure how many of a
brief's target lines are reused verbatim in other briefs (specificity), and
aggregate catalogue coverage by decade from the seed data.

## Headline findings

1. **The six craft fields are uniformly complete.** Every one of the
   161 briefs has exactly 3 targets in each of genre, tone,
   screenplay, cinematography, editing, and sound. The catalogue is far more
   finished than its blanket needs_research status implies.
2. **The only systematic gap is `learningGoals`** (the "What the film
   teaches you" reflection phase): 70 briefs have just 1 learning
   goal, 76 have 2, and only 15
   have 3. A one-goal reflection phase gives that mission a single real choice.
3. **Specificity is good.** On average only ~7% of a brief's target lines
   appear in any other brief; most phrasing is film-specific. A short reuse
   cleanup list exists (below).
4. **Era coverage collapses before 1970.** 1940s: 3, 1950s: 4, 1960s: 1, 1970s: 8, 1980s: 9, 1990s: 20, 2000s: 41, 2010s: 73, 2020s: 2.
   The oldest cases are The Lost Weekend (1945), It's a Wonderful Life (1946), Bicycle Thieves (1948), La Strada (1954), 12 Angry Men (1957) —
   nothing at all from 1895–1944, despite the game's film-history framing.

## 2026-07-18 update — Worklists 1 and 2 completed

All 216 missing learning goals were written and merged the day after this
audit: every one of the 161 briefs now has exactly 3 learning goals, with no
duplicates inside any brief. The lists below are preserved as the record of
which films were filled. Worklists 3 (phrase dedupe) and 4 (era imports)
remain open, and `verificationStatus` was intentionally left unchanged — the
per-film verification pass is still to come.

## Worklist 1 — add two learning goals (70 briefs)

- 45 Years (2015)
- A Somewhat Gentle Man (2010)
- Adam's Apples (2005)
- Alamar (2009)
- American Splendor (2003)
- Amélie (2001)
- Anomalisa (2015)
- Antonia's Line (1995)
- Beasts of the Southern Wild (2012)
- Being John Malkovich (1999)
- Blue Jasmine (2013)
- Bombón: El Perro (2004)
- Breathless (1960)
- Buffalo '66 (1998)
- Clerks (1994)
- Clockers (1995)
- Crash (2004)
- Dheepan (2015)
- District 9 (2009)
- Dogville (2003)
- Down by Law (1986)
- Forrest Gump (1994)
- Good Time (2017)
- Gran Torino (2008)
- Groundhog Day (1993)
- Hugo (2011)
- In the House (2012)
- It's a Wonderful Life (1946)
- Kitchen Stories (2003)
- Land of Mine (2015)
- Leaving Las Vegas (1995)
- Mean Streets (1973)
- Mesrine: Killer Instinct (2008)
- Mesrine: Public Enemy No. 1 (2008)
- Mommy (2014)
- Moon (2009)
- Mystery Train (1989)
- No Country for Old Men (2007)
- Noi the Albino (2003)
- On Body and Soul (2017)
- Paris, Texas (1984)
- Rams (2015)
- Requiem for a Dream (2000)
- Revanche (2008)
- Rumble Fish (1983)
- Searching for Sugar Man (2012)
- Smoke (1995)
- Stranger Than Paradise (1984)
- Taste of Cherry (1997)
- Taxi (2015)
- Taxidermia (2006)
- The 400 Blows (1959)
- The Big Lebowski (1998)
- The Bothersome Man (2006)
- The Celebration (1998)
- The Class (2008)
- The Hunt (2012)
- The Impossible (2012)
- The Man Who Wasn't There (2001)
- The Motorcycle Diaries (2004)
- The Pianist (2002)
- The Return (2003)
- The Shining (1980)
- The Straight Story (1999)
- The Truman Show (1998)
- Trainspotting (1996)
- Troll Hunter (2010)
- Trädgårdsgatan (2017)
- Virgin Mountain (2015)
- WALL·E (2008)

## Worklist 2 — add one learning goal (76 briefs)

- 4 Months, 3 Weeks and 2 Days (2007)
- A Clockwork Orange (1971)
- A Monster Calls (2016)
- A Pigeon Sat on a Branch Reflecting on Existence (2014)
- Amy (2015)
- Another Round (2020)
- Before Sunrise (1995)
- Before Sunset (2004)
- Bicycle Thieves (1948)
- Birdman or (The Unexpected Virtue of Ignorance) (2014)
- Birds of Passage (2018)
- Blindness (2008)
- Boyhood (2014)
- Brazil (1985)
- Brothers (2015)
- Café Society (2016)
- Call Me by Your Name (2017)
- Capernaum (2018)
- Detachment (2011)
- Dog Day Afternoon (1975)
- Dogtooth (2009)
- Don't Look Up (2021)
- Drifters (2015)
- Elephant (2003)
- Eyes Wide Shut (1999)
- Fargo (1996)
- Filmworker (2017)
- Halloween (1978)
- Happy as Lazzaro (2018)
- Her (2013)
- Homesick (2015)
- I, Daniel Blake (2016)
- Inside Out (2015)
- It Follows (2014)
- La Strada (1954)
- Leaving Neverland (2019)
- Leviathan (2014)
- Loveless (2017)
- Mad Max: Fury Road (2015)
- Manchester by the Sea (2016)
- Manhattan (1979)
- My Skinny Sister (2015)
- Nebraska (2013)
- Nerve (2016)
- Nightcrawler (2014)
- Once Upon a Time in... Hollywood (2019)
- Paterson (2016)
- Psychobitch (2019)
- Room (2015)
- Rush (2013)
- Scenes from a Marriage (1974)
- Shoplifters (2018)
- Tangerine (2015)
- Tangerines (2013)
- Taxi Driver (1976)
- Terrified (2017)
- The Big Sick (2017)
- The Favourite (2018)
- The Florida Project (2017)
- The Game (1997)
- The Guilty (2018)
- The Hateful Eight (2015)
- The House That Jack Built (2018)
- The Killing of a Sacred Deer (2017)
- The Lighthouse (2019)
- The Lobster (2015)
- The Lost Weekend (1945)
- The Man Without a Past (2002)
- The Measure of a Man (2015)
- The Million Dollar Hotel (2000)
- The Road Warrior (1981)
- The Savages (2007)
- The Square (2017)
- Vertigo (1958)
- Victoria (2015)
- Where Is the Friend's House? (1987)

## Worklist 3 — dedupe reused target phrases

Phrases appearing verbatim in 3+ briefs; replace with film-specific wording
in all but the film that owns the idea most:

- 6× "Morally pressured"
- 4× "Restrained and intimate"
- 4× "Build tension through waiting"
- 3× "Make perception unreliable"
- 3× "Keep quiet moments open"
- 3× "Keep pacing restrained"
- 3× "Dry and restrained"
- 3× "Restrained and tense"
- 3× "Observe faces closely"
- 3× "Keep distance respectful"
- 3× "Romantic comedy-drama"

## Worklist 4 — era gaps for the next import pass

Target the importer (`tools/importers/import_imdb_list_to_scenarios.mjs`) at
lists covering: silent era and early sound (1895–1930s), golden-age Hollywood
and 1940s noir, 1950s international cinema, and the 1960s new waves (a single
1960s film is currently in the catalogue). This is content acquisition, not
brief editing, and it directly backs the era-grouped library concept
(`docs/DESIGN_DIRECTION.md`, Priority 3).

## How this connects to the decoy redesign

Priority 2 (teaching decoys drawn from other films' briefs) depends on briefs
being distinct: a decoy only teaches when it is clearly another film's answer.
The audit supports this: with ~93% film-specific phrasing, the craft fields
can already power cross-film decoy pools. The learning-goal fill (Worklists
1–2) should happen first so the reflection phase has real options, and the
dedupe (Worklist 3) prevents decoys that are accidentally also correct.

## Suggested verification flow

Editing a brief to close its worklist items is also the moment to verify it:
check the targets against the actual film, then flip its
`verificationStatus` from needs_research to a verified value. Working
through Worklists 1–2 therefore retires the blanket needs_research debt for
146 of 161 briefs in the same pass.
