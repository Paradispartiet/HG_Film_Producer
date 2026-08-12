# Film Producer — full Production Case rest audit

Audit date: **2026-08-13**

## Result

| Measure | Count |
|---|---:|
| Playable scenarios | 378 |
| Source-verified Production Cases | 372 |
| Remaining unverified Production Cases | 6 |
| Source-backed Film Study profiles | 372 |
| Film-specific production briefs | 378 |
| Seed fallback briefs | 0 |
| Scenarios without source-backed profile | 6 |

The audit previously found and corrected one registry mismatch: the Jeanne Dielman profile and verification used `scenario_jeanne_dielman_1975`, while the playable catalog uses `scenario_jeanne_dielman_23_quai_du_commerce_1080_bruxelles_1975`. With The House That Jack Built materialized, all 372 verified records and profiles point to playable scenarios.

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
| `film_scenarios_seed.json` | 4 |
| `italyFranceGermanyBeneluxExpansion.ts` | 2 |

## Remaining work by decade

| Decade | Remaining |
|---|---:|
| 2010s | 4 |
| 2020s | 2 |

## Remaining work by genre

A film can belong to more than one genre.

| Genre | Remaining |
|---|---:|
| Drama | 6 |
| Comedy | 2 |
| Romance | 1 |
| Documentary | 1 |
| Sci-Fi | 1 |

## Complete remaining catalog

| # | Year | Film | Scenario ID |
|---:|---:|---|---|
| 1 | 2019 | Leaving Neverland | `scenario_leaving_neverland_2019` |
| 2 | 2019 | Once Upon a Time in... Hollywood | `scenario_once_upon_a_time_in_hollywood_2019` |
| 3 | 2019 | Portrait of a Lady on Fire | `scenario_portrait_of_a_lady_on_fire_2019` |
| 4 | 2019 | Psychobitch | `scenario_psychobitch_2019` |
| 5 | 2021 | Don't Look Up | `scenario_don_t_look_up_2021` |
| 6 | 2022 | Close | `scenario_close_2022` |

## Audit method

The permanent audit script reconstructs the playable catalog from the 161-film seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with all verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```
