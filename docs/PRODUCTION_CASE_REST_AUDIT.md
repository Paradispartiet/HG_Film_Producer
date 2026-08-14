# Film Producer — full Production Case rest audit

Audit date: **2026-08-14**

## Executable baseline

The canonical Production Case audit now reconstructs **381 playable Film Atlas scenarios**. The verification-registry test is gated at **374 source-verified Production Cases** after materializing *The Great Train Robbery (1903)*.

The current Chapter 1 early-cinema expansion contributes all three source-backed P0 materializations:

- `scenario_blacksmith_scene_1893`
- `scenario_workers_leaving_lumiere_factory_1895`
- `scenario_the_great_train_robbery_1903`

The executable audit remains the source of truth for exact distributions of any other unfinished Production Cases; this document intentionally does not preserve an older static “remaining catalog” snapshot after the Film History Atlas began adding new scenarios.

## Integrity

The permanent audit rejects structural drift in:

- expected playable-scenario count;
- duplicate playable scenario IDs;
- duplicate verification IDs;
- duplicate source-backed profile IDs;
- orphan verification records or profiles;
- verified cases without profiles;
- profiles without verification.

The audit also reports film-specific production-brief coverage, fallback briefs and all remaining unverified scenarios so those can be reviewed from the current source tree rather than a stale manual list.

## Chapter 1 Atlas state

The separate Chapter 1 audit now resolves all four Anchor Films to canonical Atlas cases:

- *Blacksmith Scene* (1893)
- *Workers Leaving the Lumière Factory* (1895)
- *A Trip to the Moon* (1902)
- *The Great Train Robbery* (1903)

The Chapter 1 **P0 backlog is complete**. The exact remaining Production Case queue is now only the three P1 comparative cases:

### P1

- *Fire!* (1901)
- *Life of an American Fireman* (1903)
- *Rescued by Rover* (1905)

### P2 — book reference only

- *L'Arroseur arrosé* (1895)
- *Arrival of a Train at La Ciotat* (1896)
- *Annabelle Serpentine Dance* (1895)
- *The Big Swallow* (1901)

P2 remains intentionally outside the Production Case queue unless a later source/value review explicitly changes that decision.

## Audit method

The permanent rest audit reconstructs the playable catalog from the seed and the ordered expansion files used by `filmScenarios.ts`. It applies ID and normalized title/year matching, then compares the resulting playable IDs with verification records, Film Study profiles and production-brief coverage in the source tree.

Run:

```bash
npm run audit:production-cases
```

The Chapter 1 companion audit runs through:

```bash
npm run audit:film-history-ch1
```

Both are part of `npm run verify:v0.1`.
