# Nerve (2016) — Production Case verification

Verification date: **2026-08-09**

## Result

`scenario_nerve_2016` is materialized as a source-backed social-media techno-thriller Production Case inside the existing `independent_storytelling` resolver and `subjective_enclosure_performance` branch.

- Scenario type remains: `action_adventure_production`
- Seed position: **107**
- Runtime: **96 minutes**
- Directors: **Henry Joost, Ariel Schulman**
- Genres: **Adventure / Crime / Drama / Thriller**
- Film Study coverage: **17/17 fields**
- Coverage summary: **11 source_verified / 5 mapped / 1 not_central**
- Production verification: **12 sources from 12 publishers**
- Exact Film Study donors:
  1. `scenario_the_game_1997`
  2. `scenario_elephant_2003`
  3. `scenario_being_john_malkovich_1999`
- No seed, production brief, workflow, scenario catalogue or global Film Study resolver-order change.

## Production thesis

*Nerve* is modeled as a live social-media action system rather than a generic teen thriller. Henry Joost and Ariel Schulman explicitly approached the film as a contemporary grounded thriller about identity, anonymity, internet fame, personal-data consent and the pressure to keep escalating online performance. Their earlier *Catfish* experience becomes relevant as production method: screens are not cutaway exposition but dramatic surfaces whose information must remain emotionally and spatially continuous with actors moving through New York.

The Watcher/Player split converts spectatorship into an active production force. Anonymous users pay, record, rank and propose dares; Vee and Ian therefore perform simultaneously for one another, for surrounding phone cameras and for an unseen network audience. The screenplay escalates from social embarrassment to physical danger while preserving a moral distinction between pushing limits and crowd-sanctioned harm.

Michael Simmonds describes the stunt production as unusually preparation-heavy. Storyboards were required because the action creates a fictional screen geography assembled from real New York locations, special camera positions, actor work and stunt-double material. Dave Franco trained on a motorcycle for two weeks and performed selected New York riding, while a more experienced double handled the blindfolded high-speed material.

The interface is equally physical. Teddy Blanks was hired as the picture's design czar to unify the app, Player IDs, Watcher counts, dare text and title language. The production initially attempted to run a real app on the phones in camera, but the interface could not be changed quickly enough; later phone material was photographed with tracking marks and rebuilt in post. CHIPS extended the same screen-culture language through the app and main titles, while Brainstorm Digital supplied visual-effects work.

Rob Simonsen's electronic and synthesizer-heavy score, including the White Sea collaboration on "Let's Play", reinforces the networked game pulse. Editing and Leslie Shatz's credited sound work coordinate notifications, crowds, traffic, motorcycles, music, phones and the physical consequences of the dares.

## Film Study coverage

| Area | Status | Verification basis |
|---|---|---|
| historical_context | source_verified | 2016 livestream culture, app permissions, internet fame and real-world mobile gaming |
| movement_and_tradition | source_verified | Catfish-derived screen storytelling, techno-thriller and performed-reality lineage |
| industry_and_production_context | source_verified | Lionsgate feature, Jeanne Ryan adaptation, New York production and principal craft team |
| reception_and_legacy | source_verified | wide 2016 release and durable screen-interface / social-media-thriller afterlife |
| screenplay | source_verified | Watcher/Player rules, personalized data and escalating dare structure |
| directing | source_verified | Joost/Schulman screen-culture method and consequence-led danger calibration |
| performance | source_verified | Roberts moral viewpoint; Franco motorcycle preparation and actor/double handoffs |
| production_design | mapped | Chris Trujillo and New York material world established; full design workflow not located |
| costume_makeup | mapped | Melissa Vargas credited; no dedicated department-process account located |
| cinematography | source_verified | Simmonds's stunt storyboards, fictional action geography and actor/double planning |
| lighting | mapped | strong nocturnal color system visible; complete lighting/exposure workflow not located |
| camera_format | mapped | digital/theatrical presentation established; complete camera/lens/codec chain not sufficiently sourced |
| editing | source_verified | editors credited; interface, stunt micro-stories and physical action require synchronized construction |
| sound_design | mapped | Leslie Shatz credited; full original sound workflow not separately documented |
| music | source_verified | Simonsen's synth-led score and White Sea collaboration documented directly |
| effects_animation | source_verified | practical-app attempt, tracked replacement screens, frame overlays, titles and Brainstorm Digital VFX |
| documentary_method | not_central | documentary experience informs digital behavior, but the film is a scripted stunt-and-interface construction |

## Donor logic

### The Game

The closest donor supplies the idea that an apparently ordinary modern city can be converted into a hidden game whose participants, surveillance, architecture, media and physical danger collapse the protagonist's control. *Nerve* shifts that performed-reality machine from a private corporate service to an anonymous mobile crowd.

### Elephant

The second donor supplies youth bodies moving through real social space, mobile observation and the importance of spatial routes rather than a purely dialogue-led dramatic world. *Nerve* converts that youth-space attention into competitive livestream spectacle and accelerated action.

### Being John Malkovich

The third donor supplies mediated identity, performed selves and a technical interface that changes who controls a body and how spectators understand subjective experience. *Nerve* replaces the literal body portal with profiles, Watcher counts, personalized data and a game interface that continuously reframes public behavior.

Existing *Blindness* and *Room* donor sequences remain unchanged.

## Sources

The verification registers twelve inspectable HTTPS sources from twelve publishers:

1. Lionsgate — official release, adaptation, directors and cast
2. GQ — Joost/Schulman on social media, anonymity, personal data and screen culture
3. Den of Geek — directors on adapting the online dare game for the social-media era
4. Art of the Title — Teddy Blanks on app design, frame graphics and tracked phone replacements
5. CHIPS NY — app graphics and main-title screen-culture system
6. Matthew Toffolo — Michael Simmonds on stunt preparation, storyboards and fictional screen geography
7. San Francisco Chronicle — Dave Franco on motorcycle training, New York riding and stunt doubling
8. Interiors — Chris Trujillo on designing Nerve before Stranger Things
9. Vehlinggo — Rob Simonsen on the electronic score and White Sea collaboration
10. TheWrap — New York phone crowds, neon urban imagery and major stunt passages
11. RogerEbert.com — contemporary craft/release review and principal image-editing-music credits
12. The Numbers — production, post, sound, VFX, stunt and commercial-release record

## Scope control

No changes are made to:

- `data/film/scenarios/film_scenarios_seed.json`;
- `src/ui/data/scenarioProductionBriefs.ts`;
- workflow files;
- the global scenario catalogue;
- global Film Study resolver ordering;
- the established *Blindness* donor sequence;
- the established *Room* donor sequence.

## Permanent checks

The dedicated regression test requires:

- exact seed position 107, runtime 96, directors Henry Joost and Ariel Schulman and exact four-genre seed metadata;
- all 17 Film Study areas;
- exact `11 / 5 / 1` status distribution;
- twelve sources from twelve distinct publishers;
- exact donor order `The Game → Elephant → Being John Malkovich`;
- one match, one partial match and one mismatch choice;
- Nerve-specific social-media, New York and Watcher language;
- preservation of the existing Blindness and Room donor sequences.

The global verification control raises the permanent verified-case count from 353 to 354.

## Audit effect

| Measure | Before | After |
|---|---:|---:|
| Source-verified Production Cases | 353 | 354 |
| Remaining unverified Production Cases | 25 | 24 |
| Source-backed Film Study profiles | 353 | 354 |
| Remaining seed-origin cases | 23 | 22 |
| Remaining 2010s cases | 23 | 22 |
| Remaining drama cases | 22 | 21 |
| Remaining crime cases | 6 | 5 |
| Remaining thriller cases | 5 | 4 |
| Remaining adventure cases | 1 | 0 |

The next unverified film is `scenario_paterson_2016`.
