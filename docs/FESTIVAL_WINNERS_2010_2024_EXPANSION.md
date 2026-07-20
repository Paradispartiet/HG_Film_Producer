# Festival Winners 2010–2024 Expansion

This expansion completes the agreed 98-film catalogue correction with the final eleven major festival winners.

## Films

1. Somewhere (2010)
2. Pietà (2012)
3. Blue Is the Warmest Colour (2013)
4. Black Coal, Thin Ice (2014)
5. From Afar (2015)
6. Synonyms (2019)
7. There Is No Evil (2020)
8. Bad Luck Banging or Loony Porn (2021)
9. Alcarràs (2022)
10. Triangle of Sadness (2022)
11. The Room Next Door (2024)

## Catalogue effect

- Previous shared catalogue: 304 Production Cases
- New shared catalogue: 315 Production Cases
- Agreed correction implemented: 98 of 98 films

## Production design

Each entry has a film-specific definition for:

- dramatic and screenplay structure
- image, space and performance viewpoint
- editing, duration and information control
- sound, voice, music and silence
- concrete learning goals

The cases are routed through the shared catalogue used by Production Cases, Film Atlas, Film Director, Film School, Film History and Research Control Room.

## Identity protection

Reusing an existing title-and-year match requires the correct original title or director. This prevents generic or translated titles such as `Somewhere`, `Synonyms`, `From Afar`, `There Is No Evil` and `Triangle of Sadness` from absorbing unrelated films.

## Verification state

These are playable production mappings, not completed research dossiers. Every new entry remains marked:

- `needs_research`
- `manual_festival_winner_2010_2024_case_needs_source_verification`

## Completion test

The test suite now verifies that:

- the final block contains exactly eleven unique films
- all eleven are absent from the preceding 304-case catalogue
- each resolves exactly once
- the merged catalogue contains exactly 315 unique scenario IDs
- the eight agreed correction batches contain exactly 98 unique canonical IDs
- all 98 canonical IDs are present exactly once in the final catalogue
