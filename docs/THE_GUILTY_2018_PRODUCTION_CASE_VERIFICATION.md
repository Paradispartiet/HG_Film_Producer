# The Guilty (2018) — Production Case verification

Verification date: **2026-08-12**

## Canonical seed lock

- Scenario ID: `scenario_the_guilty_2018`
- Seed position: **149**
- Title/year: **The Guilty (2018)**
- Seed genres: **Crime / Thriller**
- Seed production: **13 shooting days / Denmark / 35-person crew / low VFX**
- Seed notes: **Single location / high tension / minimal crew**
- Production Case family: existing `independent_storytelling`
- Resolver path: existing Priority Indie subcatalog with a film-specific The Guilty route

The repository seed remains authoritative for scenario metadata. No seed file is changed by this integration.

## Production system

The case is modelled as **real-time chamber thriller + off-screen performance + subjective sound + low-budget constraint**, not as a generic crime thriller.

Gustav Möller and producer Lina Flint developed the film inside New Danish Screen's low-budget framework around four formal constraints: one location, real time, one protagonist's experience and sustained thriller intensity. Production proceeded chronologically over 13 days with three cameras running, long takes reaching roughly 35 minutes, and live off-screen actors performing the telephone calls so Jakob Cedergren could react to complete exchanges. A real emergency-call environment informed both the set and the lighting; the visible call centre was built into an abandoned office building. Jasper Spanning used Alexa SXT, Alexa Mini and Amira cameras with Master Primes at the centre of a deliberately clean digital package. Sound then carries the scale that the image refuses to show: recorded roads, vehicles, bars, sirens and telephone texture create the external action in the audience's imagination.

## Film Study coverage

All **17 canonical technical areas** are materialized:

| Area | Status | Verification basis |
|---|---|---|
| Historical context | `source_verified` | New Danish Screen talent programme and low-budget initiative. |
| Movement and tradition | `source_verified` | One-location, real-time, single-POV Nordic chamber-thriller design. |
| Industry and production context | `source_verified` | Story and production developed together around limited resources. |
| Reception and legacy | `source_verified` | 2018 Sundance World Cinema Dramatic Audience Award. |
| Screenplay | `source_verified` | Linear real-time script derived from the imaginative effect of a real emergency-call recording. |
| Directing | `source_verified` | Chronological 13-day shoot, three cameras and 5–35 minute takes. |
| Performance | `source_verified` | Cedergren carries the visible frame while telephone performers play live off-screen; audio-only casting shaped Iben. |
| Production design | `source_verified` | Real dispatch-centre research translated into a modified abandoned-office location. |
| Costume / makeup | `mapped` | Departments and artists are officially credited, but detailed workflow is not documented in the inspected sources. |
| Cinematography | `source_verified` | Three simultaneous angles, restrained POV and progressive visual pressure around Asger. |
| Lighting | `source_verified` | Ceiling tubes, practicals and screens emulate ordinary dispatch-office light, then diminish with Asger's collapse. |
| Camera / format | `source_verified` | Alexa SXT / Mini / Amira, Master Primes, supplementary Ultra Primes/Alura zoom, digital capture and Baselight grade. |
| Editing | `mapped` | Carla Luffe is credited and real-time form is conditioned by full-duration multi-camera takes; detailed editorial workflow is not isolated. |
| Sound design | `source_verified` | Oskar Skriver and Philip Flindt build the unseen world from recorded environments and increasingly detailed telephone perspective. |
| Music | `mapped` | Carl Coleman and Caspar Hesselager are credited; detailed composition/recording process is not isolated. |
| Effects / animation | `not_central` | Effects credits exist, but effects are not the production system carrying the film. |
| Documentary method | `source_verified` | Real emergency calls and dispatch environments directly informed performance, set, lighting and sonic realism. |

Coverage summary: **13 source-verified / 3 mapped / 1 not-central**.

## Source matrix

1. **Danish Film Institute — Playing with Audiences' imagination**  
   `https://www.dfi.dk/en/english/news/playing-audiences-imagination`  
   Supports the New Danish Screen low-budget context, real-time one-location concept, chronological 13-day shoot, three cameras, long takes, live voice actors, call-centre research, abandoned-office build and sound recordings.

2. **Filmmaker Magazine — Jasper J. Spanning interview**  
   `https://filmmakermagazine.com/104746-lighting-for-three-different-angles-at-the-same-time-dp-jasper-j-spanning-on-the-guilty/`  
   Supports the three-camera system, 13-day schedule, long full takes, Alexa SXT/Mini/Amira package, Master/Ultra Primes, practical-office lighting and Baselight finish.

3. **AlloCiné — Gustav Möller interview**  
   `https://www.allocine.fr/article/fichearticle_gen_carticle=18673980.html`  
   Supports the long-take multi-camera method and the sound-mix logic in which recorded environments become more detailed as Asger's involvement increases.

4. **Cineuropa — Gustav Möller interview**  
   `https://cineuropa.org/en/interview/355506/`  
   Supports the real emergency-call origin, audience-imagination principle and constraint-led creative philosophy.

5. **European Film Academy — THE GUILTY**  
   `https://www.europeanfilmawards.eu/efa-movie/the-guilty/`  
   Independently cross-checks the principal screenplay, production, cinematography, editing, design, costume, makeup, sound and music credits.

6. **Sundance Institute — 2018 Sundance Film Festival Awards Announced**  
   `https://www.sundance.org/blogs/2018-sundance-film-festival-awards-announced-3/`  
   Verifies the World Cinema Dramatic Audience Award and independently identifies the core authorship and cast.

Six distinct publishers are retained so no single source carries the verification record.

## Donor architecture

The Guilty remains inside the existing `independent_storytelling` resolver through the Priority Indie subcatalog. It receives an exact film-specific donor return:

1. `scenario_reservoir_dogs_1992` — resource-driven chamber crime, withheld external action, dialogue and restricted-location scale.
2. `scenario_sound_of_metal_2019` — sound as subjective point of view and primary narrative information rather than accompaniment.
3. `scenario_barton_fink_1991` — enclosure, oppressive interior space and a protagonist trapped inside a progressively subjective chamber system.

`scenario_the_guilty_2018` is **not** inserted into the generic Priority Indie donor array. Existing films therefore retain their original donor pool.

## Permanent safeguards

- Exact seed position, title, year and genres are asserted in `scenarioFilmStudyTheGuilty.test.ts`.
- All 17 Film Study areas and the **13/3/1** coverage distribution are asserted.
- Six verification sources and six distinct publishers are asserted.
- The exact donor trio is asserted.
- A regression assertion proves The Guilty does not enter the generic Priority Indie donor pool.
- The global Production Verification gate advances from **370 to 371** and requires all six The Guilty sources.
- `docs/PRODUCTION_CASE_REST_AUDIT.md` advances to **371/378**, leaving **7** cases.

Permanent audit command:

```bash
npm run audit:production-cases
```

Full release verification remains the repository CI/preflight suite; it is not replaced by the targeted case test.
