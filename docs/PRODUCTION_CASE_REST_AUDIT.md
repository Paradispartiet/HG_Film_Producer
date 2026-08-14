# Film Producer — full Production Case rest audit

Audit date: **2026-08-14**

## Executable baseline

The canonical playable Film Atlas contains **392 scenarios**. The runtime verification-registry gate contains **385 source-verified Production Cases**.

Chapter 1 remains complete at 3/3 P0 and 3/3 P1. Chapter 2 remains complete at 1/1 P0 and 2/2 P1. Chapter 3 remains complete at **2/2 P0 and 2/2 P1**, with no required Production Cases remaining. Chapter 4 now has **its P0 backlog closed** after materializing *The Story of the Kelly Gang (1906)*; its remaining required queue is exactly two P1 cases: *Queen Elizabeth (1912)* and *Traffic in Souls (1913)*.

## Chapter 4 Atlas state

### Materialized Chapter 4 anchor

- `scenario_the_story_of_the_kelly_gang_1906` — *The Story of the Kelly Gang* (1906), Charles Tait
  - feature-scale production model at approximately 4,000 feet / five reels
  - producer-exhibitor organization, location production and touring circulation
  - photographed silent production kept distinct from lecturer/live-effects exhibition practice
  - fragmentary survival and modern reconstruction/restoration kept distinct from the lost complete original
  - 17-area source-backed Film Study
  - globally registered four-source Production Verification
  - no lone-inventor claim for feature cinema

### P0

**1/1 complete — 0 remaining**

- `scenario_the_story_of_the_kelly_gang_1906`

### P1

**0/2 complete — 2 remaining**

- *Queen Elizabeth* (1912) → planned `scenario_queen_elizabeth_1912`
- *Traffic in Souls* (1913) → planned `scenario_traffic_in_souls_1913`

### P2 — book reference only

- *L'Assassinat du duc de Guise* (1908)
- *Quo Vadis?* (1913)
- *Cabiria* (1914)

P2 remains intentionally outside the Chapter 4 Production Case queue. `Quo Vadis?` and `Cabiria` are preserved for the later Chapter 5 international-cinema audit rather than being auto-produced here.

**Exact required new Chapter 4 Production Cases remaining: 2.**

## Chapter 3 Atlas state

### Materialized Chapter 3 cases

- `scenario_grandmas_reading_glass_1900` — *Grandma's Reading Glass* (1900), G. A. Smith
  - motivated magnified inserts and analytical viewpoint
  - 17-area source-backed Film Study
  - globally registered runtime Production Verification
  - no single-inventor or anachronistic classical-POV claim

- `scenario_the_lonely_villa_1909` — *The Lonely Villa* (1909), D. W. Griffith / Biograph
  - three simultaneous action lines and telephone-linked distant spaces
  - 17-area source-backed Film Study and global verification
  - Griffith treated as a consolidator, not inventor, of cross-cutting

- `scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900` — *Attack on a China Mission – Bluejackets to the Rescue* (1900), James Williamson
  - surviving copies, catalogue evidence and later reconstruction remain distinguishable
  - staged topical fiction is not mislabelled as actuality
  - racist/imperial representation remains part of the production analysis
  - 17-area Film Study and six-source global verification

- `scenario_histoire_d_un_crime_1901` — *Histoire d'un crime* (1901), Ferdinand Zecca / Pathé
  - crime → arrest → prison → represented recollection → execution is organized as a multi-tableau causal narrative
  - the prison sequence uses a separate scenic memory plane while present confinement remains visible
  - Pathé's organized fiction-production and genre system is explicit
  - 17-area Film Study and five-source global verification
  - permanent safeguard rejects an uncontested “first flashback” claim

### P0

**2/2 complete — 0 remaining**

- `scenario_grandmas_reading_glass_1900`
- `scenario_the_lonely_villa_1909`

### P1

**2/2 complete — 0 remaining**

- `scenario_attack_on_a_china_mission_bluejackets_to_the_rescue_1900`
- `scenario_histoire_d_un_crime_1901`

### P2 — book reference only

- *Cendrillon* (1899)
- *Stop Thief!* (1901)
- *Mary Jane's Mishap* (1903)
- *The Lonedale Operator* (1911)

P2 remains intentionally outside the Production Case queue unless a later explicit source/value review demonstrates genuinely distinct gameplay value.

**Exact required new Chapter 3 Production Cases remaining: 0.**

## Earlier chapter invariants

### Chapter 1

P0 and P1 remain empty. Canonical early-cinema cases must continue to resolve to their exact scenario IDs as later chapters add Atlas films.

### Chapter 2

P0 and P1 remain empty. Its six canonical film cases remain `USE_EXISTING`, while *May Irwin Kiss* (1896) and *Sedgwick's Bioscope Showfront at Pendlebury Wakes* (1901) remain P2/book-only.

## Integrity

The permanent rest audit reconstructs the playable catalogue from the seed plus every registered expansion in runtime order. It rejects structural drift in expected playable count, duplicate playable IDs, duplicate verification/profile IDs, orphan records, verified cases without profiles and profiles without verification. It also reports film-specific brief coverage, fallback briefs and remaining unverified scenarios.

The Chapter 1, Chapter 2, Chapter 3 and Chapter 4 companion audits reconstruct the same canonical expansion chain. Their expected playable count is now **392**. Chapters 1–3 keep their completed decision matrices locked at **P0 = 0 / P1 = 0**. Chapter 4 locks *The Story of the Kelly Gang* to `scenario_the_story_of_the_kelly_gang_1906`, requires **P0 = 0**, and leaves exactly two P1 titles until they are individually materialized and verified.

## Audit method

Run:

```bash
npm run audit:production-cases
npm run audit:film-history-ch1
npm run audit:film-history-ch2
npm run audit:film-history-ch3
npm run audit:film-history-ch4
```

All five are part of `npm run verify:v0.1`.
