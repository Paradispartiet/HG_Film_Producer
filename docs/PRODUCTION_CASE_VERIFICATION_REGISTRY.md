# Production Case verification registry

## Purpose

The manual Production Case briefs are film-specific teaching material, but `verificationStatus` must not be changed from `needs_research` to `verified` without inspectable evidence.

The source-backed registry is exposed through:

- `src/ui/data/scenarioProductionVerificationRegistry.ts`

Source records are divided into reviewable batch files:

- `src/ui/data/scenarioProductionVerification.ts`
- `src/ui/data/scenarioProductionVerificationMethodBatch.ts`

The unified registry currently covers twelve cases.

### Pilot batch

- `scenario_the_machinist_2004`
- `scenario_the_lives_of_others_2006`
- `scenario_lost_in_translation_2003`
- `scenario_12_angry_men_1957`

### Historic craft batch

- `scenario_bicycle_thieves_1948`
- `scenario_vertigo_1958`
- `scenario_breathless_1960`
- `scenario_the_shining_1980`

### Production-method batch

- `scenario_one_flew_over_the_cuckoo_s_nest_1975`
- `scenario_the_celebration_1998`
- `scenario_waltz_with_bashir_2008`
- `scenario_mad_max_fury_road_2015`

## Verification rule

A registry record must:

1. refer to a playable Production Case scenario;
2. contain at least two independent HTTPS sources;
3. use sources from at least two publishers;
4. prefer filmmaker interviews, cinematographer interviews, film institutes, archival production histories, and established trade publications;
5. state which craft areas each source supports;
6. explain briefly how the source supports the brief;
7. record the verification date;
8. pass the registry tests before merge.

A plot synopsis or review alone is not enough to verify production choices. It may support context, but production claims should be grounded in production reporting, filmmaker testimony, documented craft analysis, or institutional records.

## Status policy

- `seeded`: imported fallback content, not a manual Production Case.
- `needs_research`: manual brief without completed source review.
- `verified`: source review completed and recorded in the unified registry.

The registry is intentionally separate from the large brief file. This keeps evidence reviewable, prevents source metadata from bloating mission content, and allows verification to proceed film by film. Batch files also keep each evidence review small enough to inspect directly.

## Next batch

Continue with small batches of four to eight cases. Prioritize:

1. recommended first cases;
2. films with distinctive, well-documented production methods;
3. historically underrepresented decades;
4. briefs whose strongest claims concern specific lenses, formats, locations, sound systems, editing structures, or production constraints.

The next work should pause source expansion long enough to expose verified status in the Production Cases library, so players can identify documented cases before completing them.

Do not mark the full catalogue verified based on a generic filmography source or on the internal consistency of the brief alone.
