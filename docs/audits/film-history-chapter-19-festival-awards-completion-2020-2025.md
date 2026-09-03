# Chapter 19 Festival & Awards Completion Audit 2020–2025

## Status

Chapter 19 is reopened for a bounded film-selection completion pass.

The existing **590/590** Atlas and Production Verification baseline remains valid and unchanged. It proves technical completeness against the Atlas that already exists; it does **not** by itself prove that the 2020–2025 film-historical selection is complete.

This audit therefore adds a separate selection/completion gate. No missing award winner is treated as materialized or production-verified merely because it is named here.

## Frozen scope

- Candidate baseline: **2020–2025**.
- **2026 remains excluded** from this correction and belongs to a later current-year expansion.
- First gate: top feature-film prize at **Cannes, Venice and Berlinale**.
- Cannes 2020 has no Palme d'Or obligation because the 2020 festival was cancelled.
- A title clears this gate only when it is present in the Chapter 19 candidate matrix, resolves to exactly one Atlas scenario and has literal Production Verification.

The executable contract is `scripts/film-history-chapter-nineteen-festival-awards-completion-audit.mjs` and is run by `verify:v0.1`.

## Corrective queue

The first source-first correction pass is ordered ahead of the remaining ordinary P2 work:

1. **Triangle of Sadness** (2022) — Cannes, Palme d'Or.
2. **Drømmer** (2025) — Berlinale, Golden Bear for Best Film.
3. **Happening / L'Événement** (2021) — Venice, Golden Lion for Best Film.
4. **All the Beauty and the Bloodshed** (2022) — Venice, Golden Lion for Best Film.
5. **The Room Next Door** (2024) — Venice, Golden Lion for Best Film.
6. **There Is No Evil** (2020) — Berlinale, Golden Bear for Best Film.
7. **Bad Luck Banging or Loony Porn** (2021) — Berlinale, Golden Bear for Best Film.
8. **Alcarràs** (2022) — Berlinale, Golden Bear for Best Film.
9. **On the Adamant / Sur l'Adamant** (2023) — Berlinale, Golden Bear for Best Film.
10. **Father Mother Sister Brother** (2025) — Venice, Golden Lion for Best Film.

The tenth item is required by the same frozen-baseline rule as the first nine: Venice 2025 is inside 2020–2025, and the official Biennale record names *Father Mother Sister Brother* as the Golden Lion winner.

`Days` and `The Green Knight` are deferred until this top-prize correction gate closes.

## Existing top-prize coverage retained

The gate also checks already represented winners rather than only the known gaps. This prevents a future audit from proving “the correction list was added” while silently losing an earlier winner.

The manifest includes the existing Chapter 19 candidates for *Titane*, *Anatomy of a Fall*, *Anora*, *It Was Just an Accident*, *Nomadland*, *Poor Things* and *Dahomey*. Their live candidate/materialization/Production Verification state is derived from the canonical Chapter 19 audit on every run.

## Fail-closed semantics

The audit reports four states per obligation:

- `MISSING_CANDIDATE`
- `SELECTED_NOT_MATERIALIZED`
- `MATERIALIZED_NOT_PRODUCTION_VERIFIED`
- `PRODUCTION_VERIFIED`

The audit is intentionally mergeable while known films are missing: incompleteness is a valid measured state during production. It fails on broken governance or malformed evidence instead — for example if 2026 leaks into the frozen baseline, the technical Atlas baseline is no longer internally complete, an obligation is duplicated, or an official source is missing.

Accordingly, **590/590 must not be described as film-historical completion**. The new report exposes `festivalTopPrizeCompletionProven` separately, and keeps `filmHistoricalSelectionCompletionProven:false` until the later award-completion phases are also closed.

## Later required phases

After the top-prize queue, the selection audit must expand at least to:

- Cannes main-jury prizes and major directing/performance prizes, 2020–2025;
- Venice main-competition major prizes, 2020–2025;
- Berlinale main-competition major prizes, 2020–2025;
- Academy Awards coverage for Best Picture, International Feature, Documentary Feature and Animated Feature using a consistent award-year/film-year mapping;
- relevant European and regional awards where they add production-history coverage not already represented.

Only after those layers are measured and closed should Chapter 19 be eligible for a broader “film-historically complete” claim.

## Primary sources

- Festival de Cannes retrospective / official winners pages: `festival-cannes.com`.
- La Biennale di Venezia official awards and Golden Lion history: `labiennale.org`.
- Berlinale official awards archive and award PDFs: `berlinale.de` / official `b2b.berlinale.de` partner service.

The executable manifest stores the exact official source URL used for every top-prize obligation.
