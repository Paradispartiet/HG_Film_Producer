# The Killing of a Sacred Deer (2017) — Production Case verification

Verified: **2026-08-11**

## Locked seed

- Scenario ID: `scenario_the_killing_of_a_sacred_deer_2017`
- IMDb: `tt5715874`
- Seed position: **151**
- Runtime: **121 min**
- Director: **Yorgos Lanthimos**
- Genres: **Drama / Horror / Mystery / Thriller**
- Scenario type: **`horror_production`**

The seed remains unchanged. Film-specific knowledge is materialized through the Film Study profile and Production Case verification layer.

## Production thesis

This case is not modeled as generic supernatural or psychological horror.

The production system joins:

- Yorgos Lanthimos and Efthimis Filippou's original screenplay with an emergent dialogue with Euripides's *Iphigenia in Aulis*;
- a contemporary American surgeon-family world governed by an unexplained sacrificial rule;
- Cincinnati hospital, school, suburban-home and city locations selected for sterility, scale and camera movement;
- a predominantly 35 mm photochemical image using extreme wide lenses, long-lens close-ups and gliding dolly observation;
- natural and practical light rather than conventional expressionist horror lighting;
- deliberately low-affect, transactional performance that refuses ordinary psychological signalling;
- Yorgos Mavropsaridis's performance- and compression-led editorial method;
- Johnnie Burn's unusually autonomous sound-post collaboration;
- classical and contemporary music placed aggressively as a threatening structural presence;
- real medical observation and open-heart-surgery material embedded inside an otherwise completely staged fiction.

The result turns spaces associated with scientific competence, family security and middle-class control into one clinical sacrificial enclosure.

## Architecture

Resolver:

- `independent_storytelling`

Film Study family:

- `subjective_enclosure_performance`

Specialty route:

- existing `scenarioFilmStudySubjectiveEnclosureBlindnessCatalog.ts`

The film is routed as an exact specialty case rather than inserted into the generic subjective-enclosure donor pool.

## Exact donors

1. `scenario_eyes_wide_shut_1999`
2. `scenario_cure_1997`
3. `scenario_the_wailing_2016`

Production-function rationale:

- **Eyes Wide Shut** — ritualized bourgeois family and professional spaces, controlled social behaviour and a threatening system whose power exceeds the protagonist's understanding.
- **Cure** — clinical and diagnostic uncertainty, ordinary institutional spaces and a causal threat that remains resistant to complete rational explanation.
- **The Wailing** — family-centered bodily affliction, investigation and supernatural retaliation that remains materially real even as interpretation stays unstable.

The established Terrified donor sequence remains unchanged and is explicitly locked by regression test:

`The Wailing → Cure → Barton Fink`.

## Film Study coverage

All **17 / 17** Film Study areas are explicitly classified.

### Source verified — 14

1. `historical_context`
2. `movement_and_tradition`
3. `industry_and_production_context`
4. `reception_and_legacy`
5. `screenplay`
6. `directing`
7. `performance`
8. `production_design`
9. `cinematography`
10. `lighting`
11. `camera_format`
12. `editing`
13. `sound_design`
14. `music`

### Mapped — 2

1. `costume_makeup`
2. `effects_animation`

### Not central — 1

1. `documentary_method`

## Production evidence

### Screenplay and dramatic law

Lanthimos and Filippou wrote the story independently and recognized the relationship with *Iphigenia in Aulis* during development. The finished screenplay therefore does not simply transpose a Greek tragedy. It places an ancient sacrificial structure inside a contemporary medical-family world while withholding a conventional scientific or supernatural explanation for Martin's retaliatory law.

### Cincinnati production geography

The production used Cincinnati as a coordinated spatial system rather than anonymous American coverage. Christ Hospital, school spaces, a suburban family home and city exteriors provide distinct levels of institutional and domestic authority.

Production designer Jade Healy describes the hospital as the location that drove the city choice and identifies sterile, modern and slightly alien surfaces as a common requirement across the hospital, school and house. Long corridors and a house capable of accommodating the planned mobile camera were explicit scouting criteria.

### Medical material

The filmmakers observed real open-heart surgery before staging the operating-room material. Close medical imagery incorporates real surgical material, grounding Steven's professional authority in physical procedure before the narrative begins dismantling his ability to diagnose or control what happens to his family.

### Camera and format

Thimios Bakatakis and Lanthimos photographed the film on 35 mm Kodak Vision3 stocks.

The image system includes:

- 10 mm, 12 mm and 17 mm extreme wide lenses;
- 85 mm to 150 mm focal lengths for invasive close observation;
- zoom lenses where needed;
- gliding dolly movement;
- abnormally high and low camera positions;
- push processing for darker material and pull processing for bright exteriors.

The camera therefore behaves less like a character point of view than an independent observer moving through institutional and domestic geometry.

### Lighting

The film belongs to the period in which Lanthimos maintained a strong preference for natural and practical sources. Photochemical stock, processing and location selection carry the contrast and exposure burden instead of converting the film into conventionally shadow-driven horror.

### Performance

The ensemble is organized around controlled speech, withheld psychological signalling and behaviour that makes even extreme moral propositions sound procedural.

Lanthimos specifically sought contradictory qualities in Barry Keoghan's Martin: threatening and sympathetic, awkward and charming, funny and disturbing. Colin Farrell's account of the process also confirms that actors had to accept unconventional framing and dialogue delivery rather than rely on normal shot/reverse-shot emphasis.

### Editing

Longtime collaborator Yorgos Mavropsaridis shapes the film through the editorial method developed across Lanthimos's work: begin from performance and continuous scene material, test compression and temporal restructuring, and scrutinize every cut, sound and music decision until the film's own narrative language emerges.

### Sound and music

Johnnie Burn describes *Sacred Deer* as a pivotal collaboration in which Lanthimos gave him substantial autonomy over the completed sound post.

The design keeps hospital, home and everyday environments recognizably physical while allowing realistic sounds to be subtly manipulated or introduced outside strict visual causality.

Music is treated as an active dramatic presence rather than continuous emotional accompaniment. Bach, Schubert, Ligeti and other material enters forcefully, often turning a controlled image into ritual or threat.

## Verification sources

The production record contains **12 inspectable HTTPS sources from 12 distinct publishers**:

1. Kodak
2. Festival de Cannes
3. Screen Ireland
4. Cineuropa
5. Bright Lights Film Journal
6. Dazed
7. Designing Sound
8. Post Magazine
9. Film Independent
10. A24
11. British Film Institute
12. Film Cincinnati

The sources cover screenplay development, financing and production, Cincinnati location work, production design, 35 mm cinematography, lighting, performance, editing, sound, music, awards and release context.

## Permanent regression test

`src/ui/data/scenarioFilmStudySacredDeer.test.ts` locks:

- seed position **151**;
- runtime **121**;
- director **Yorgos Lanthimos**;
- genres **Drama / Horror / Mystery / Thriller**;
- `horror_production`;
- source-backed Film Study resolution;
- **17 / 17** areas;
- **14 / 2 / 1** coverage distribution;
- verified Production Case status;
- **12 sources / 12 publishers**;
- `subjective_enclosure_performance` group;
- exact donors `Eyes Wide Shut → Cure → The Wailing`;
- three distinct match / partial / miss learning choices;
- Sacred Deer-specific Cincinnati, 35 mm, 10 mm and Iphigenia language;
- preservation of Terrified's `The Wailing → Cure → Barton Fink` donor sequence.

## Scope control

This implementation does **not** modify:

- `data/film/scenarios/film_scenarios_seed.json`
- production brief generation
- workflow files
- playable scenario catalogue
- global Film Study resolver ordering
- generic `independent_storytelling` profile pools
- any existing donor sequence

## Audit effect

After successful verification and merge:

- verified Production Cases: **363 → 364**
- remaining Production Cases: **15 → 14**
- source-backed Film Study profiles: **363 → 364**
- seed-origin remaining: **13 → 12**
- 2010s remaining: **13 → 12**
- Drama remaining: **14 → 13**
- Thriller remaining: **3 → 2**
- Horror remaining: **2 → 1**
- Mystery remaining: **2 → 1**

Next unverified film: `scenario_the_square_2017`.
