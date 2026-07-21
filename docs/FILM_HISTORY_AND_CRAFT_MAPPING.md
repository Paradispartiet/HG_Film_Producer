# Film History and Complete Craft Mapping

## Decision

Film history is a playable learning layer inside every Production Case. It is not a decorative biography, awards list or encyclopedia page detached from how the film was constructed.

The player should understand four connected questions:

1. What filmmaking traditions existed before this film?
2. What historical, industrial and technological conditions shaped the production?
3. How do those conditions appear in concrete craft choices?
4. What did the film carry forward into later cinema, teaching and preservation?

The game must always distinguish between:

- `source_verified`: supported by inspectable sources;
- `mapped`: represented in the current case but not fully source reviewed;
- `research_pending`: film-specific research has not been completed;
- `not_central`: considered, but not a central learning focus for the case.

A blank field is not an acceptable final state. Every case contains all mapping areas and explicitly states the research status of each.

## Current implementation

Every Production Case in the current catalogue resolves to the same complete mapping structure. Catalogue size is read dynamically and is not duplicated in documentation or tests.

- 17 mandatory film-history and film-craft areas.
- 164 source-backed film-history profiles.
- All remaining cases retain complete audit structures with visible research gaps.
- No points, ranks, badges or reward currencies.
- Historical placement is playable through explanation choices.
- Sources are inspectable inside the case.

The 164 source-backed profiles are the same controlled group covered by the Production Case verification registry:

- The Machinist
- The Lives of Others
- Lost in Translation
- 12 Angry Men
- Bicycle Thieves
- Vertigo
- Breathless
- The Shining
- One Flew Over the Cuckoo's Nest
- The Celebration
- Waltz with Bashir
- Mad Max: Fury Road
- District 9
- Birdman or (The Unexpected Virtue of Ignorance)
- Boyhood
- Ex Machina
- It's a Wonderful Life
- The 400 Blows
- The Road Warrior
- Victoria
- Halloween
- Tangerine
- The Lighthouse
- The Favourite
- No Country for Old Men
- Into the Wild
- Winter's Bone
- Beasts of the Southern Wild
- Groundhog Day
- The Truman Show
- Moon
- Midnight in Paris
- Stranger Than Paradise
- Paris, Texas
- The Bothersome Man
- Nebraska
- Dogtooth
- The Hunt
- The Measure of a Man
- Revanche
- Mystery Train
- Smoke
- The Man Who Wasn't There
- American Splendor
- A Trip to the Moon
- The Cabinet of Dr. Caligari
- Nosferatu
- Battleship Potemkin
- The Phantom Carriage
- The General
- Metropolis
- Frankenstein
- The Passion of Joan of Arc
- Man with a Movie Camera
- M
- City Lights
- King Kong
- Modern Times
- Snow White and the Seven Dwarfs
- The Rules of the Game
- Stagecoach
- The Wizard of Oz
- Citizen Kane
- Casablanca
- Double Indemnity
- Brief Encounter
- Rome, Open City
- The Third Man
- The Maltese Falcon
- The Lost Weekend
- Out of the Past
- Band of Outsiders
- Gategutter
- Fjols til fjells
- De dødes tjern
- Insomnia
- The Match Factory Girl
- Songs from the Second Floor
- The Man Without a Past
- Oslo, August 31st
- Force Majeure
- Woman at War
- Another Round
- The Worst Person in the World
- Man of Iron
- Yol
- The Ballad of Narayama
- When Father Was Away on Business
- Pelle the Conqueror
- Central Station
- Eternity and a Day
- Head-On
- Vera Drake
- The Wrestler
- The Milk of Sorrow
- Somewhere
- Pietà
- Blue Is the Warmest Colour
- Black Coal, Thin Ice
- From Afar
- Synonyms
- There Is No Evil
- Bad Luck Banging or Loony Porn
- Alcarràs
- Toni Erdmann
- Triangle of Sadness
- Aftersun
- The Room Next Door
- L'Atalante
- The Spirit of the Beehive
- Landscape in the Mist
- The Double Life of Véronique
- Kes
- Naked
- Hunger
- The Banshees of Inisherin
- Cría cuervos
- All About My Mother
- Tabu
- Horse Money
- Before the Rain
- Underground
- No Man's Land
- Quo Vadis, Aida?
- L'Avventura
- Last Year at Marienbad
- Playtime
- The Leopard
- Rashomon
- Tokyo Story
- Seven Samurai
- Pather Panchali
- Ordet
- Ashes and Diamonds
- Persona
- Daisies
- Closely Watched Trains
- The Firemen's Ball
- Marketa Lazarová
- The Cremator
- Cléo from 5 to 7
- The Conformist
- Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles
- Beau Travail
- Bonnie and Clyde
- The Godfather
- Jaws
- Star Wars
- Psycho
- Lawrence of Arabia
- 2001: A Space Odyssey
- Night of the Living Dead
- Hiroshima mon amour
- 8½
- The Umbrellas of Cherbourg
- The Battle of Algiers
- La Strada
- The Night of the Hunter
- The Seventh Seal
- Touch of Evil
- Breakfast at Tiffany's
- Jules and Jim
- Contempt
- Dr. Strangelove

## Complete mapping schema

### Film history

Every film is mapped across:

1. **Historical context**
   - release year and broad era;
   - political, social and cultural context that directly affects the film;
   - national and transnational context;
   - relationship between represented history and production history.

2. **Movement and tradition**
   - movement, wave, school or genre tradition;
   - relevant earlier films and filmmakers;
   - conventions inherited, revised or rejected;
   - whether the label is contemporary, retrospective or disputed.

3. **Industry and production context**
   - financing and production model when historically relevant;
   - studio, independent, television, state-funded or transnational conditions;
   - location, schedule, available technology and labour organization;
   - distribution, festival or exhibition conditions that shaped the work.

4. **Reception and legacy**
   - contemporary reception when it clarifies the film's place;
   - censorship, controversy, preservation or restoration where relevant;
   - later influence only when supported by evidence;
   - what the film remains useful for teaching today.

### Film technique

Every film is assessed across:

1. Screenplay and dramaturgy
2. Directing and staging
3. Performance and casting
4. Production design and props
5. Costume, makeup and hairstyling
6. Cinematography and composition
7. Lighting
8. Camera, lenses and capture format
9. Editing and temporal construction
10. Sound design and dialogue
11. Music and score
12. Practical effects, VFX and animation
13. Documentary and research method

The technical map does not demand that every craft area be equally important. It demands that every area be considered and classified. Effects may be `not_central` in a one-room drama, while performance and blocking are primary. Animation may be primary in *Waltz with Bashir*. Documentary method may be central, supporting or not central depending on the film.

## Film-history game loop

```text
PLACE THE FILM
→ compare plausible historical positions
→ choose the explanation that joins history and production method
→ read why it fits, partly fits or belongs to another film

BEFORE / MOMENT / AFTER
→ identify the inherited tradition
→ see the production conditions and formal solution
→ understand what the film carries forward

FULL CRAFT AUDIT
→ inspect all 17 areas
→ distinguish verified, mapped, pending and not-central material
→ open the sources

PRODUCTION CASE
→ continue into screenplay, image, editing, sound and reflection
→ understand each phase inside the film's historical position
```

This model avoids a detached trivia quiz. Historical knowledge changes how the player interprets craft.

## Why the history layer uses comparison

A date or movement name alone does not teach film history. The player learns by distinguishing real production systems:

- Italian neorealism versus controlled studio classicism;
- French New Wave location production versus classical continuity;
- Dogme 95 digital restrictions versus effects-led digital cinema;
- a genuine feature-length take versus a hidden-edit long-take illusion;
- practical stunt geography versus VFX-first action construction;
- testimony-led animated documentary versus conventional live-action reconstruction;
- anamorphic slasher suspense versus smartphone street cinema;
- reconstructed orthochromatic response versus fisheye period staging;
- neo-western border geography versus biographical road-film geography;
- researched rural noir versus collectively built regional magical realism;
- repeated-day continuity versus an artificial surveillance town;
- miniature-based contained science fiction versus photochemical period separation;
- fixed-shot independent minimalism versus chronologically produced road cinema;
- immaculate Nordic dystopian design versus reconstructed Midwestern monochrome;
- enclosed Greek family allegory versus restrained post-Dogme community realism;
- semi-documentary labour observation versus rural duration and noir reconciliation;
- episodic Memphis parallel time versus dialogue-led Brooklyn ensemble;
- planned photochemical monochrome versus documentary-comics-animation biography;
- theatrical trick fantasy versus Expressionist studio design;
- location-based Weimar horror versus Soviet collision montage;
- Swedish nested-flashback spectral cinema versus practical railway action comedy;
- UFA architectural science-fiction spectacle versus Universal sound horror;
- close-up silent modernism versus reflexive city-symphony documentary;
- early sound crime procedure versus synchronized pantomime resisting dialogue;
- integrated creature effects versus industrial feature-animation production;
- mechanical sound satire versus deep-space ensemble staging;
- Monument Valley location action versus MGM Technicolor musical fantasy;
- RKO modernist biography versus Warner Bros. wartime studio melodrama;
- Paramount confessional noir versus British railway-station melodrama;
- Italian occupation neorealism versus postwar Vienna location noir;
- Warner Bros. hard-boiled dialogue staging versus Paramount researched social-problem noir;
- RKO fatalist location-studio noir versus French New Wave pulp genre play;
- east-Oslo neorealist social cinema versus independent mountain-hotel farce;
- Agascope literary landscape horror versus reversed midnight-sun noir;
- Finnish proletarian minimalism versus Swedish purpose-built studio tableau cinema;
- Finnish colour-controlled community fable versus Norwegian one-day subjective city realism;
- Swedish Alpine social experiment versus Icelandic eco-political visible-music action;
- Danish handheld ensemble intoxication experiment versus Norwegian chaptered 35mm Oslo subjectivity;
- Polish Solidarity investigative docufiction versus Turkish prison-release road cinema;
- Japanese rural ecological naturalism versus Yugoslav child-view historical tragicomedy;
- Nordic historical migration epic versus Brazilian documentary-informed road cinema;
- Greek long-take border memory journey versus German-Turkish handheld punk romance;
- British research-built abortion-procedure ensemble versus American handheld Super 16 wrestling labour drama;
- Peruvian trauma-and-song ritual realism versus American hotel-duration celebrity alienation;
- South Korean low-budget industrial moral melodrama versus French close-performance relationship naturalism;
- Chinese wintry post-industrial neo-noir versus Venezuelan anamorphic class-distance drama;
- Israeli-French language-and-body exile modernism versus Iranian clandestine anthology ethics;
- Romanian pandemic essay satire versus Catalan nonprofessional seasonal rural realism;
- German corporate father-daughter embarrassment comedy versus Swedish-European digitally manipulated class farce;
- British-American mixed-format memory drama versus Spanish English-language end-of-life chamber melodrama;
- French early-sound barge poetic realism versus late-Franco Spanish child-view memory cinema;
- Greek-French-Italian long-take landscape journey versus Polish-French filtered double-life metaphysics;
- British regional youth realism versus rehearsal-built bleach-bypass London nocturne;
- British-Irish durational prison modernism versus Irish island tragicomedy shaped by landscape and distant civil-war sound;
- late-Franco child-view domestic memory versus transnational queer theatre melodrama;
- divided 35 mm and 16 mm postcolonial recollection versus tiny digital Cape Verdean migrant-memory tableau;
- Macedonian-British circular photographic war triptych versus Yugoslav archive-fiction historical grotesque;
- Bosnian contained trench institutional satire versus translator-led Srebrenica reconstruction through gates, crowds and multilingual procedure;
- Italian landscape-and-absence modernism versus French-Italian palace-memory découpage;
- purpose-built 65 mm urban sound comedy versus Super Technirama historical ceremony and class transition;
- Daiei contradictory testimony versus Shochiku domestic minimalism;
- Toho tactical action versus Bengali location humanism;
- Danish spiritual long-take chamber cinema versus Polish Film School one-night political tragedy;
- Swedish psychological film rupture versus Czechoslovak feminist color collage;
- railway-station wartime tragicomedy versus nonprofessional institutional satire;
- researched medieval sensory epic versus grotesque subjective political horror;
- French Left Bank real-time city observation versus Italian fascist memory design;
- Belgian durational domestic labour versus French postcolonial military choreography;
- European-influenced outlaw revision versus prestige family crime production;
- open-water location suspense versus used-future effects and sound worldbuilding;
- economical black-and-white studio suspense versus international 70mm location epic;
- engineered analogue effects modernism versus regional collective low-budget horror;
- Franco-Japanese documentary-memory fiction versus Italian-French film-about-film;
- wholly sung colour melodrama versus documentary-coded political reconstruction;
- Italian post-neorealist road fable versus American Expressionist child thriller;
- Swedish theatre-derived allegory versus baroque Universal border noir;
- Paramount star-and-fashion romance versus mobile French New Wave literary biography;
- French-Italian widescreen film-about-film versus researched British-American Cold War systems satire.

The alternatives come from other real cases. A wrong choice introduces another valid film-historical method instead of meaningless filler.

## Required evidence

Preferred sources:

- filmmaker, actor and department-head interviews;
- cinematographer, editor, designer, composer, sound and VFX accounts;
- film institutes, national archives and cinematheques;
- archival production histories;
- established trade publications;
- preservation and restoration records;
- serious scholarly or institutional film-history essays.

A review or plot synopsis may support reception or context, but it is not enough to verify production technique.

At least two independent publishers must support a completed profile. Claims about influence, innovation, first use or historical importance require especially strong evidence and must not be inferred from popularity.

## Completion requirements for one film

A Production Case is film-history-and-craft verified only when it has:

- a sourced historical period and context;
- a sourced movement or tradition placement;
- a sourced production and industry context;
- a carefully worded reception or legacy statement;
- a complete status for all 13 technical areas;
- film-specific notes for every primary or supporting area;
- at least one explanation linking historical conditions to a visible or audible choice;
- inspectable sources;
- a playable historical comparison with plausible alternatives;
- no unsupported claims of innovation or influence.

## Research order

Research proceeds by coherent historical groups, not random catalogue order. This improves comparison choices and reduces duplicated work.

1. **Further silent cinema and classical foundations**
   - continue into silent comedy, early national cinemas, animation and the first studio genre systems.

2. **Postwar realism and New Waves**
   - neorealism, French New Wave, British social realism, New German Cinema and related movements.

3. **Classical Hollywood and postwar studio cinema**
   - studio production, genre development, television adaptation, widescreen and colour systems.

4. **1970s–1980s national and genre renewal**
   - New Hollywood, Australian cinema, political cinema, modern horror and blockbuster-era production.

5. **1990s independent cinema and digital transition**
   - Dogme 95, global independent cinema, consumer video and nonlinear editing.

6. **2000s–2010s transnational, regional and digital cinema**
   - digital capture, performance-preserving VFX, hybrid documentary, regional location production, festival circulation and contemporary genre forms.

7. **2020s cases**
   - streaming-era production and reception only when stable, sourced interpretation is possible.

Each batch adds related films together so the game can offer meaningful comparison choices.

## Interface rules

- Show the historical layer before the craft phases.
- Keep the 17-area audit collapsible.
- Show `research_pending` honestly rather than filling gaps with generic prose.
- Expose sources before completion; evidence is part of learning, not a reward.
- Do not add points for choosing the historical match.
- Do not treat completion as certification.
- Do not reduce history to release date, awards or trivia.
- Do not describe a film as a landmark, technical first or major influence without evidence.

## Relationship to authoritative film-education models

The mapping combines historical significance with complete production craft. The Library of Congress, AFI, BFI, national film institutes, archives, cinematheques and preservation foundations provide evidence and educational reference points. HG Film Producer keeps its own case-based architecture: historical placement, concrete craft analysis, comparison, explanation and inspectable evidence.
