# Film Producer — full Production Case rest audit

Audit date: **2026-08-14**

## Executable baseline

The canonical playable Film Atlas now contains **387 scenarios** after materializing *Uncle Josh at the Moving Picture Show (1902)*. The runtime verification-registry gate is **380 source-verified Production Cases**.

Chapter 1 remains complete at 3/3 P0 and 3/3 P1. Chapter 2 is now complete at 1/1 P0 and 2/2 P1.

## Chapter 2 Atlas state

### P0

**1/1 complete — 0 remaining**

- `scenario_the_corbett_fitzsimmons_fight_1897`

### P1

**2/2 complete — 0 remaining**

- `scenario_employees_leaving_browns_atlas_works_sheffield_1901`
- `scenario_uncle_josh_at_the_moving_picture_show_1902`

### P2 — book reference only

- *May Irwin Kiss* (1896)
- *Sedgwick's Bioscope Showfront at Pendlebury Wakes* (1901)

P2 remains intentionally outside the Production Case queue unless a later explicit source/value review demonstrates genuinely distinct gameplay value.

**Exact required new Chapter 2 Production Cases remaining: 0.**

## Integrity

The permanent rest audit rejects structural drift in expected playable count, duplicate playable IDs, duplicate verification/profile IDs, orphan records, verified cases without profiles and profiles without verification. It also reports film-specific brief coverage, fallback briefs and remaining unverified scenarios.

The Chapter 1 and Chapter 2 companion audits reconstruct the same canonical expansion chain. Chapter 1 hard-requires its P0/P1 queues to remain empty. Chapter 2 now hard-requires P0 and P1 to remain empty while preserving *May Irwin Kiss* and *Sedgwick's Bioscope Showfront at Pendlebury Wakes* as P2/book-only references.

## Audit method

Run:

```bash
npm run audit:production-cases
npm run audit:film-history-ch1
npm run audit:film-history-ch2
```

All three are part of `npm run verify:v0.1`.
