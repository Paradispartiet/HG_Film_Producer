# Production Case verification registry

## Purpose

The manual Production Case briefs are film-specific teaching material, but `verificationStatus` must not be changed from `needs_research` to `verified` without inspectable evidence.

The source-backed registry lives in:

- `src/ui/data/scenarioProductionVerification.ts`

The first pilot covers:

- `scenario_the_machinist_2004`
- `scenario_the_lives_of_others_2006`
- `scenario_lost_in_translation_2003`
- `scenario_12_angry_men_1957`

## Verification rule

A registry record must:

1. refer to a playable Production Case scenario;
2. contain at least two independent HTTPS sources;
3. prefer filmmaker interviews, cinematographer interviews, film institutes, archival production histories, and established trade publications;
4. state which craft areas each source supports;
5. explain briefly how the source supports the brief;
6. record the verification date;
7. pass the registry tests before merge.

A plot synopsis or review alone is not enough to verify production choices. It may support context, but production claims should be grounded in production reporting, filmmaker testimony, documented craft analysis, or institutional records.

## Status policy

- `seeded`: imported fallback content, not a manual Production Case.
- `needs_research`: manual brief without completed source review.
- `verified`: source review completed and recorded in the registry.

The registry is intentionally separate from the large brief file. This keeps evidence reviewable, prevents source metadata from bloating mission content, and allows verification to proceed film by film.

## Next batch

After the pilot is validated, continue with small batches of four to eight cases. Prioritize:

1. recommended first cases;
2. films with distinctive, well-documented production methods;
3. historically underrepresented decades;
4. briefs whose strongest claims concern specific lenses, formats, locations, sound systems, editing structures, or production constraints.

Do not mark the full catalogue verified based on a generic filmography source or on the internal consistency of the brief alone.
