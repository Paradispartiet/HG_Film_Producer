# Happy as Lazzaro (2018) — Production Case verification

Verification date: **2026-08-12**

## Canonical seed lock

- Scenario ID: `scenario_happy_as_lazzaro_2018`
- Seed position: **153**
- Runtime: **128 min**
- Director: **Alice Rohrwacher**
- Genres: **Drama / Fantasy / Mystery**
- Scenario type: `character_drama_production`
- Production Case family: existing `independent_storytelling`

The repository seed remains authoritative for scenario metadata. No seed file is changed by this integration.

## Production system

The case is modelled as **rural social realism → magical rupture → modern precarity** rather than as a generic fantasy film. The production identity is built from an exploitative tobacco-farm community, mixed professional and nonprofessional performance, children and animals, an objective innocent relation to Lazzaro, Super 16 photochemical capture, a seasonal/geographic split between the countryside and the northern city, and a temporal rupture that preserves the same social exploitation across apparently different eras.

The magical turn is therefore not treated as an effects pipeline. It remains embedded in the same tactile locations, bodies, film stock and observational grammar as the realist material.

## Film Study coverage

All **17 canonical technical areas** are materialized:

| Area | Status | Verification basis |
|---|---|---|
| Historical context | `source_verified` | Sharecropping, rural isolation and later urban precarity form one exploitation continuum. |
| Movement and tradition | `source_verified` | Italian social realism/neorealism, folklore and magical realism. |
| Industry and production context | `source_verified` | Italy/Switzerland/France/Germany coproduction and rural/urban production geography. |
| Reception and legacy | `source_verified` | 2018 Cannes Competition and Best Screenplay ex aequo. |
| Screenplay | `source_verified` | Rural enclosure, miraculous temporal break and contemporary city are one deliberate two-part structure. |
| Directing | `source_verified` | Rohrwacher combines myth, fantasy and reality while working with amateurs, children, animals and real farmers. |
| Performance | `source_verified` | First-time nonprofessional lead Adriano Tardiolo and mixed ensemble/rehearsal process. |
| Production design | `mapped` | Emita Frigato credited; full department workflow not isolated in inspected sources. |
| Costume / makeup | `mapped` | Time-shift continuity is important, but no complete department methodology is documented. |
| Cinematography | `source_verified` | Hélène Louvart's objective Lazzaro-centred perspective; handheld/body rig/tripod/tracks. |
| Lighting | `source_verified` | Hard summer daylight and 250D against darker 500T interiors/winter material. |
| Camera / format | `source_verified` | Super 16, ARRI 416, Zeiss Ultra Primes, Kodak Vision3 250D 7207 / 500T 7219, photochemical processing. |
| Editing | `mapped` | Nelly Quettier credited; structural effect is clear, but detailed cutting workflow is not sufficiently documented. |
| Sound design | `mapped` | Christophe Giovannoni credited; environmental/wolf motif is evidenced, complete workflow is not. |
| Music | `mapped` | Piero Crucitti credited; detailed composing/recording method is not sufficiently documented. |
| Effects / animation | `not_central` | Miracle and temporal displacement are presented without a spectacle-led effects identity. |
| Documentary method | `source_verified` | Fiction based on reality, real farmers/nonprofessionals, actual labour/landscape/animals inside scripted fable. |

Coverage summary: **11 source-verified / 5 mapped / 1 not-central**.

## Source matrix

1. **Cinematography World — “Lenses of emotion”**  
   `https://www.cinematography.world/lenses-of-emotion/`  
   Supports the Super 16 package, stocks, lenses, camera grammar, seasonal geography, objective viewpoint and photochemical process.

2. **Cineuropa — Alice Rohrwacher interview**  
   `https://cineuropa.org/en/interview/354534/`  
   Supports the filmmaker's photochemical commitment, myth/fantasy/reality blend, amateur performers, real farmers, children/animals and Tardiolo rehearsal/casting process.

3. **Festival de Cannes — LAZZARO FELICE**  
   `https://www.festival-cannes.com/en/films/lazzaro-felice`  
   Supports Competition/Best Screenplay status, international production context and principal craft credits.

4. **British Film Institute — magical realism feature**  
   `https://www.bfi.org.uk/features/happy-lazzaro-alice-rohrwacher-magical-realism`  
   Supports the tobacco-farm exploitation, structural rupture, folk-tale logic and environmental/wolf sound register.

5. **The Criterion Collection — “A Second Look at Happy as Lazzaro”**  
   `https://www.criterion.com/current/posts/6024-a-second-look-at-happy-as-lazzaro`  
   Supports Tardiolo's large-scale casting search and the social/time structure across the rural and contemporary worlds.

6. **Film at Lincoln Center — Happy as Lazzaro**  
   `https://www.filmlinc.org/nyff2018/films/happy-as-lazzaro/`  
   Cross-checks the repository's 128-minute version, nonprofessional discovery, grain-rich 16mm presentation and the rural-to-contemporary structural leap.

Six distinct publishers are retained so no single source or institutional perspective carries the verification record.

## Donor architecture

The film remains inside the existing `independent_storytelling` resolver. It receives an exact film-specific donor return:

1. `scenario_tropical_malady_2004` — realist observation that crosses into myth without abandoning material landscape.
2. `scenario_daughters_of_the_dust_1991` — land, community, memory and spiritual/fabulist history held inside embodied location work.
3. `scenario_satantango_1994` — rural materiality, collective social structure and historical time as production form.

`scenario_happy_as_lazzaro_2018` is **not** inserted into the generic `profiles` donor array. That prevents this new case from contaminating donor selection for older `independent_storytelling` scenarios.

## Permanent safeguards

- Exact seed metadata is asserted in `scenarioFilmStudyHappyAsLazzaro.test.ts`.
- All 17 Film Study areas and the **11/5/1** coverage distribution are asserted.
- Six verification sources and six distinct publishers are asserted.
- The exact donor trio is asserted.
- A regression assertion proves Happy as Lazzaro does not enter the general donor pool.
- The global Production Verification gate is raised from **368 to 369** and requires all six Happy as Lazzaro sources.
- `docs/PRODUCTION_CASE_REST_AUDIT.md` is advanced to **369/378**, leaving **9** cases.

Permanent audit command:

```bash
npm run audit:production-cases
```

Full release verification remains the repository CI/preflight suite; it is not replaced by the targeted case test.
