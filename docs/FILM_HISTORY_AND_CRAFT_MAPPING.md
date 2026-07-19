# Film History and Complete Craft Mapping

## Decision

Film history is a playable learning layer inside every Production Case. It is not a decorative biography, a list of awards or an encyclopedia page detached from the film's construction.

The player should understand four connected questions:

1. What filmmaking traditions existed before this film?
2. What historical, industrial and technological conditions shaped this production?
3. How do those conditions appear in the film's concrete craft choices?
4. What did the film carry forward into later cinema, teaching and preservation?

The game must always distinguish between:

- `source_verified`: the claim is supported by inspectable sources;
- `mapped`: the area is represented in the current brief but has not completed dedicated source review;
- `research_pending`: the area has not yet received film-specific research;
- `not_central`: the area was considered but is not a central learning focus for this particular case.

A blank field is not an acceptable final state. Every case must contain all mapping areas and explicitly state the research status of each.

## Current implementation

All 161 Production Cases now resolve to the same complete mapping structure.

- 17 mandatory film-history and film-craft areas.
- 32 source-backed film-history profiles.
- 129 cases with a complete audit structure and visible research gaps.
- No points, ranks, badges or reward currencies.
- The historical comparison is playable through explanation choices.
- Sources are inspectable inside the case.

The current 32 source-backed history profiles are the same controlled group covered by the Production Case verification registry:

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

## Complete mapping schema

### Film history

Every film must be mapped across:

1. **Historical context**
   - release year and broad era;
   - political, social and cultural context that directly affects the film;
   - national and transnational context;
   - relationship between represented history and production history.

2. **Movement and tradition**
   - movement, wave, school or genre tradition;
   - relevant earlier films and filmmakers;
   - conventions inherited, revised or rejected;
   - whether the movement label is contemporary, retrospective or disputed.

3. **Industry and production context**
   - financing and production model when historically relevant;
   - studio, independent, television, state-funded or transnational conditions;
   - location, schedule, available technology and labor organization;
   - distribution, festival or exhibition conditions that shaped the work.

4. **Reception and legacy**
   - contemporary reception when it clarifies the film's place;
   - censorship, controversy, preservation or restoration where relevant;
   - later influence supported by evidence;
   - what the film remains useful for teaching today.

### Film technique

Every film must be assessed across:

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

The technical map is not a demand that every craft area be equally important in every film. It is a demand that every area be considered and classified. For example, VFX may be `not_central` in a one-room drama while performance and blocking are primary. Animation may be primary in *Waltz with Bashir*. Documentary method may be central in *District 9* as mock-documentary form, supporting in *Bicycle Thieves*, and not central in *Vertigo*.

## Film-history game loop

The history layer uses the following sequence:

```text
PLACE THE FILM
→ compare plausible historical positions
→ choose the explanation that joins history and production method
→ read why it fits, partly fits or belongs to another film

BEFORE / MOMENT / AFTER
→ identify the inherited tradition
→ see the film's production conditions and formal solution
→ understand what the film carries forward

FULL CRAFT AUDIT
→ inspect all 17 areas
→ distinguish verified, mapped, pending and not-central material
→ open the sources

PRODUCTION CASE
→ continue into screenplay, image, editing, sound and reflection
→ understand each phase inside the film's historical position
```

This model avoids a separate trivia quiz. Historical knowledge changes how the player interprets the film's craft.

## Why the history layer uses comparison

A date or movement name alone does not teach film history. The player learns more by distinguishing between real production systems:

- Italian neorealism versus controlled studio classicism;
- French New Wave location production versus classical continuity;
- Dogme 95 consumer-digital restrictions versus effects-led digital cinema;
- a genuine feature-length take versus a hidden-edit long-take illusion;
- practical stunt geography versus VFX-first action construction;
- testimony-led animated documentary versus conventional live-action reconstruction;
- anamorphic slasher suspense versus smartphone street cinema;
- reconstructed orthochromatic response versus fisheye period staging;
- neo-western border geography versus biographical road-film geography;
- researched rural noir versus collectively built magical regional realism;
- repeated-day continuity and editorial compression versus an artificial surveillance town;
- miniature-based contained science fiction versus photochemical period separation across one real city.

The alternatives are drawn from other real cases. A wrong choice therefore introduces another valid film-historical method instead of meaningless filler.

## Required evidence

A film is not considered fully mapped until its key claims are supported by inspectable evidence.

Preferred sources:

- filmmaker, actor and department-head interviews;
- cinematographer, editor, designer, composer, sound and VFX accounts;
- film institutes, national archives and cinematheques;
- archival production histories;
- established trade publications;
- preservation and restoration records;
- serious scholarly or institutional film-history essays.

A review or plot synopsis may support reception or context, but it is not enough to verify production technique.

At least two independent publishers should support a completed film profile. Claims about influence, innovation, first use or historical importance require especially strong evidence and should not be inferred from popularity.

## Completion requirements for one film

A Production Case is fully film-history-and-craft verified only when it has:

- a sourced historical period and context;
- a sourced movement or tradition placement;
- a sourced production and industry context;
- a carefully worded reception or legacy statement;
- a complete status for all 13 technical areas;
- film-specific notes for every primary or supporting craft area;
- at least one explanation linking historical conditions to a visible or audible choice;
- inspectable sources;
- a playable historical comparison with plausible alternatives;
- no unsupported claims of innovation or influence.

## Research order for the remaining 129 cases

Research should proceed by coherent historical groups, not by random list order. This makes comparisons better and reduces duplicate work.

1. **Postwar realism and New Waves**
   - map neorealism, French New Wave, British social realism, New German Cinema and related national movements.

2. **Classical Hollywood and postwar studio cinema**
   - map studio production, genre development, television adaptation, widescreen and color systems.

3. **1970s–1980s national and genre renewal**
   - map New Hollywood, Australian cinema, political cinema, modern horror and blockbuster-era production.

4. **1990s independent cinema and digital transition**
   - map Dogme 95, global independent cinema, consumer video and nonlinear editing.

5. **2000s–2010s transnational, regional and digital cinema**
   - map digital capture, performance-preserving VFX, hybrid documentary, regional location production, festival circulation and contemporary genre forms.

6. **2020s cases**
   - map streaming-era production and reception only when stable, sourced historical interpretation is possible.

Each research batch should add related films together so the game can offer meaningful comparison choices.

## Interface rules

- Show the historical layer before the craft phases.
- Keep the full 17-area audit collapsible so the case remains readable.
- Show `research_pending` honestly rather than filling the interface with generic prose.
- Expose source links before completion; evidence is part of learning, not a reward.
- Do not add points for choosing the historical match.
- Do not treat completion as certification.
- Do not reduce history to release date, awards or trivia.
- Do not describe a film as a movement landmark, technical first or major influence without evidence.

## Relationship to authoritative film-education models

The mapping combines historical significance with complete production craft:

- The Library of Congress evaluates films as culturally, historically or aesthetically significant and publishes expert film-history essays: https://www.loc.gov/programs/national-film-preservation-board/film-registry/
- AFI teaches filmmaking through connected disciplines including cinematography, directing, editing, producing, production design and screenwriting: https://www.afi.com/
- The Academy's education resources cover animation, casting, cinematography, costume, editing, composing, makeup, production design, performance, screenwriting, sound and VFX: https://www.oscars.org/learn/academy-gold-education-video-guide
- BFI education resources connect film study, history and practical filmmaking: https://www.bfi.org.uk/resources-events-teachers/resources-teachers

HG Film Producer uses these principles in a case-based game form: historical placement, concrete craft analysis, comparison, explanation and inspectable evidence.
