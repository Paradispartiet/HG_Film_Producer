# Film Producer — full Production Case rest audit

Audit date: **2026-08-14**

## Executable baseline

The canonical playable Film Atlas now contains **384 scenarios** after the complete Film History Chapter 1 P0/P1 materialization. The runtime verification-registry gate is **377 source-verified Production Cases**.

The Chapter 1 early-cinema work now includes all six cases ordered by the original gap report:

- `scenario_blacksmith_scene_1893`
- `scenario_workers_leaving_lumiere_factory_1895`
- `scenario_the_great_train_robbery_1903`
- `scenario_fire_1901`
- `scenario_life_of_an_american_fireman_1903`
- `scenario_rescued_by_rover_1905`

The executable rest audit separately reconstructs the playable catalog and checks every literal verification/profile artifact for structural integrity. Its file-level verification count is therefore an integrity measure and should not be confused with the runtime registry gate above.

## Integrity

The permanent audit rejects structural drift in expected playable count, duplicate playable IDs, duplicate verification/profile IDs, orphan records, verified cases without profiles and profiles without verification. It also reports film-specific brief coverage, fallback briefs and all remaining unverified scenarios.

## Chapter 1 Atlas state

The Chapter 1 audit now resolves all required P0 and P1 films to canonical Atlas cases.

### P0

**3/3 complete — 0 remaining**

### P1

**3/3 complete — 0 remaining**

### P2 — book reference only

- *L'Arroseur arrosé* (1895)
- *Arrival of a Train at La Ciotat* (1896)
- *Annabelle Serpentine Dance* (1895)
- *The Big Swallow* (1901)

P2 remains intentionally outside the Production Case queue unless a later explicit source/value review changes that decision.

**Exact required new Chapter 1 Production Cases remaining: 0.**

## Audit method

Run the permanent audits with:

```bash
npm run audit:production-cases
npm run audit:film-history-ch1
```

Both are part of `npm run verify:v0.1`.
