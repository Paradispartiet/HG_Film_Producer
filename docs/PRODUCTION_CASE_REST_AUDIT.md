# Film Producer — full Production Case rest audit

Audit date: **2026-08-14**

## Executable baseline

The canonical playable Film Atlas now contains **389 scenarios** after materializing *Grandma's Reading Glass (1900)* and *The Lonely Villa (1909)* for Chapter 3. The runtime verification-registry gate is **382 source-verified Production Cases**.

Chapter 1 remains complete at 3/3 P0 and 3/3 P1. Chapter 2 remains complete at 1/1 P0 and 2/2 P1. Chapter 3 has now completed **2/2 P0** and has **2 P1** new Production Cases remaining.

## Chapter 3 Atlas state

### Materialized in this round

- `scenario_grandmas_reading_glass_1900` — *Grandma's Reading Glass* (1900), G. A. Smith
  - exact looking sequence preserved: newspaper → watch mechanism → canary → grandmother's eye → kitten
  - circular magnified inserts and return-to-base-view structure are the core production problem
  - source-backed Film Study profile covers all 17 areas
  - runtime Production Verification is registered globally, not left as a local profile
  - the historiographic safeguard rejects both a single-inventor claim and the anachronistic assumption that the film's early gaze construction is identical to later classical subjective POV

- `scenario_the_lonely_villa_1909` — *The Lonely Villa* (1909), D. W. Griffith / Biograph
  - three simultaneous action lines are kept spatially distinct: threatened family, burglars and husband/police rescue
  - telephone communication connects separated spaces and the cut line becomes both a dramatic and formal rupture
  - Library of Congress production dates, Fort Lee/New York locations, paper-print survival and Bitzer/Marvin camera credits are preserved
  - source-backed Film Study covers all 17 areas and runtime Production Verification is registered globally
  - Griffith is treated as a major consolidator of sustained parallel narrative, not the inventor of cross-cutting

### P0

**2/2 complete — 0 remaining**

- complete: `scenario_grandmas_reading_glass_1900`
- complete: `scenario_the_lonely_villa_1909`

### P1

**0/2 complete — 2 remaining**

- *Attack on a China Mission – Bluejackets to the Rescue* (1900)
- *Histoire d'un crime* (1901)

### P2 — book reference only

- *Cendrillon* (1899)
- *Stop Thief!* (1901)
- *Mary Jane's Mishap* (1903)
- *The Lonedale Operator* (1911)

P2 remains intentionally outside the Production Case queue unless a later explicit source/value review demonstrates genuinely distinct gameplay value.

**Exact required new Chapter 3 Production Cases remaining: 2.**

## Earlier chapter invariants

### Chapter 1

P0 and P1 remain empty. Its canonical early-cinema cases must continue to resolve to their exact scenario IDs even while later chapters add new Atlas films.

### Chapter 2

P0 and P1 remain empty. The six canonical Chapter 2 film cases remain `USE_EXISTING`, while *May Irwin Kiss* (1896) and *Sedgwick's Bioscope Showfront at Pendlebury Wakes* (1901) remain P2/book-only.

## Integrity

The permanent rest audit reconstructs the playable catalogue from the seed plus every registered expansion in runtime order. It rejects structural drift in expected playable count, duplicate playable IDs, duplicate verification/profile IDs, orphan records, verified cases without profiles and profiles without verification. It also reports film-specific brief coverage, fallback briefs and remaining unverified scenarios.

The Chapter 1, Chapter 2 and Chapter 3 companion audits reconstruct that same canonical expansion chain. The expected playable count is now **389** in all of them. Chapter 3 additionally hard-locks the exact remaining decision matrix rather than allowing a generic backlog count.

## Audit method

Run:

```bash
npm run audit:production-cases
npm run audit:film-history-ch1
npm run audit:film-history-ch2
npm run audit:film-history-ch3
```

All four are part of `npm run verify:v0.1`.
