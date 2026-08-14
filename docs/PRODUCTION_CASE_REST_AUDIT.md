# Film Producer — full Production Case rest audit

Audit date: **2026-08-14**

## Executable baseline

The canonical playable Film Atlas now contains **385 scenarios** after materializing the Film History Chapter 2 P0 case *The Corbett–Fitzsimmons Fight (1897)*. The runtime verification-registry gate is **378 source-verified Production Cases**.

Chapter 1 remains complete at 3/3 P0 and 3/3 P1. Chapter 2 has now materialized its single P0 Anchor Film and retains exactly two P1 cases.

## Chapter 2 Atlas state

### P0

**1/1 complete — 0 remaining**

- `scenario_the_corbett_fitzsimmons_fight_1897`

### P1

**0/2 complete — exactly 2 remaining**

- *Employees Leaving Brown's Atlas Works, Sheffield* (1901)
- *Uncle Josh at the Moving Picture Show* (1902)

### P2 — book reference only

- *May Irwin Kiss* (1896)
- *Sedgwick's Bioscope Showfront at Pendlebury Wakes* (1901)

P2 remains intentionally outside the Production Case queue unless a later explicit source/value review changes that decision.

**Exact required new Chapter 2 Production Cases remaining: 2.**

## Integrity

The permanent rest audit rejects structural drift in expected playable count, duplicate playable IDs, duplicate verification/profile IDs, orphan records, verified cases without profiles and profiles without verification. It also reports film-specific brief coverage, fallback briefs and remaining unverified scenarios.

The Chapter 1 and Chapter 2 companion audits independently reconstruct the same canonical expansion chain. Chapter 1 still hard-requires its P0/P1 queues to be empty; Chapter 2 locks the exact remaining P1 titles and P2 book-only titles.

## Audit method

Run:

```bash
npm run audit:production-cases
npm run audit:film-history-ch1
npm run audit:film-history-ch2
```

All three are part of `npm run verify:v0.1`.
