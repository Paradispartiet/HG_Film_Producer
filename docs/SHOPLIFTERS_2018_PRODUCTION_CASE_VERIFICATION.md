# Shoplifters (2018) — Production Case verification

Verification date: **2026-08-12**

## Canonical seed lock

- Scenario ID: `scenario_shoplifters_2018`
- Seed position: **148**
- Runtime: **121 min**
- Director: **Hirokazu Koreeda**
- Genres: **Crime / Drama / Thriller**
- Scenario type: `crime_thriller_production`
- Production Case family: existing `independent_storytelling`
- Resolver path: existing Priority Indie subcatalog with a film-specific Shoplifters route

The repository seed remains authoritative for scenario metadata. No seed file is changed by this integration.

## Production system

The case is modelled as **chosen family + urban precarity + child-centred observation + adaptive photochemical production**, not as a generic crime thriller.

The production identity is built from a six-person household living outside conventional family and labour structures, a real Tokyo house combined with carefully reconstructed interior sets, one-camera 35 mm photography, Kore-eda's documentary-derived child direction, and a daily edit loop in which video-assist assemblies fed directly back into inserts and newly written scenes. The result is a social drama whose tenderness and criminal survival behavior emerge from the same domestic routines rather than from separate genre modes.

## Film Study coverage

All **17 canonical technical areas** are materialized:

| Area | Status | Verification basis |
|---|---|---|
| Historical context | `source_verified` | Contemporary poverty, exclusion and the gap between lived care and institutional/biological family definitions. |
| Movement and tradition | `source_verified` | Kore-eda family cinema, Japanese social realism and documentary-derived observation. |
| Industry and production context | `source_verified` | Japanese production and deliberate retention of 35 mm despite budget constraints. |
| Reception and legacy | `source_verified` | 2018 Cannes Competition and Palme d'Or. |
| Screenplay | `source_verified` | Chosen-family premise plus an unfinished screenplay refined through shooting and daily assemblies. |
| Directing | `source_verified` | One-camera discipline, adaptive shooting and incorporation of real weather/material discovered during production. |
| Performance | `source_verified` | Child-direction method designed to preserve spontaneous behavior; ensemble built around shared routines and physical proximity. |
| Production design | `source_verified` | Real single-storey exterior house and recreated interior sets designed to merge seamlessly. |
| Costume / makeup | `mapped` | Class, work and improvised identity are visible, but a detailed department workflow is not documented in the inspected sources. |
| Cinematography | `source_verified` | Ryuto Kondo's location-derived palette and overhead family/fireworks composition. |
| Lighting | `mapped` | High-speed 500T covers varied conditions, but a dedicated lighting methodology is not sufficiently documented. |
| Camera / format | `source_verified` | One camera, 35 mm 3-perf, Kodak Vision3 500T 5219, IMAGICA processing and Cine Vivo scan. |
| Editing | `source_verified` | Kore-eda edited video-assist footage after each day and changed inserts/created new scenes from those assemblies. |
| Sound design | `mapped` | Kazuhiko Tomita credited; complete production-recording/editorial/mix workflow not isolated. |
| Music | `mapped` | Haruomi Hosono credited; detailed spotting/composition/recording workflow not isolated. |
| Effects / animation | `not_central` | The production system is actor-, location-, image- and edit-led rather than effects-led. |
| Documentary method | `mapped` | Responsive child direction, real locations and absorbed weather carry documentary habits into scripted fiction. |

Coverage summary: **11 source-verified / 5 mapped / 1 not-central**.

## Source matrix

1. **Kodak — Ryuto Kondo interview**  
   `https://www.kodak.com/en/motion/blog-post/ryuto-kondo/`  
   Supports the one-camera 35 mm system, Vision3 500T 5219, 3-perf workflow, IMAGICA processing/scanning, location-derived visual choices, unfinished screenplay and daily video-assist editing loop.

2. **Festival de Cannes — MANBIKI KAZOKU (SHOPLIFTERS)**  
   `https://www.festival-cannes.com/en/f/manbiki-kazoku/`  
   Supports the 121-minute Japanese production, principal craft credits, 2018 Competition and Palme d'Or.

3. **British Film Institute — Kore-eda interview**  
   `https://www.bfi.org.uk/sight-and-sound/interviews/blood-enough-koreeda-hirokazu-makeshift-families-shoplifters`  
   Supports makeshift family, communal criminality and the film's social context.

4. **Foreign Correspondents' Club of Japan — Shoplifters**  
   `https://www.fccj.or.jp/committee-blog/shoplifters`  
   Supports the search for the single-storey house and the seamless combination of real house material with recreated interior sets.

5. **MovieMaker Magazine — Kore-eda on working with children**  
   `https://www.moviemaker.com/foreign-contenders-shoplifters-hirokazu-kore-eda/`  
   Supports Kore-eda's child-performance method and his effort to avoid rehearsed, school-play-like delivery.

6. **Asia Pacific Screen Awards — Shoplifters**  
   `https://www.asiapacificscreenawards.com/apsa-nominees-winners/2018/best-feature-film/shoplifters-manbiki-kazoku`  
   Independently cross-checks the Japanese production, producer team, impoverished family premise and 2018 Best Feature Film recognition.

Six distinct publishers are retained so no single source carries the verification record.

## Donor architecture

Shoplifters remains inside the existing `independent_storytelling` resolver through the already-existing Priority Indie subcatalog. It receives an exact film-specific donor return:

1. `scenario_still_walking_2008` — Kore-eda domestic space, family ritual, withheld feeling and observational ensemble precision.
2. `scenario_the_child_2005` — social-realist criminal economy, compromised parenthood, care and moral responsibility.
3. `scenario_capernaum_2018` — child survival, found-family bonds, poverty and institutional exclusion.

`scenario_shoplifters_2018` is **not** inserted into the generic Priority Indie donor array. Existing films therefore retain their original donor pool.

## Permanent safeguards

- Exact seed metadata is asserted in `scenarioFilmStudyShoplifters.test.ts`.
- All 17 Film Study areas and the **11/5/1** coverage distribution are asserted.
- Six verification sources and six distinct publishers are asserted.
- The exact donor trio is asserted.
- A regression assertion proves Shoplifters does not enter the generic Priority Indie donor pool.
- The global Production Verification gate is raised from **369 to 370** and requires all six Shoplifters sources.
- `docs/PRODUCTION_CASE_REST_AUDIT.md` is advanced to **370/378**, leaving **8** cases.

Permanent audit command:

```bash
npm run audit:production-cases
```

Full release verification remains the repository CI/preflight suite; it is not replaced by the targeted case test.
