# Early cinema and historical-period expansion

## Decision

The following 58 requested films are part of HG Film Producer's Production Case catalogue.

The expansion is merged by film title and release year:

- a matching film already present in the original catalogue is reused;
- a missing film is appended as a new scenario;
- the merged catalogue never creates a second card for the same requested film;
- every requested film receives a film-specific playable Production Case brief;
- none of the new material is presented as source verified until its evidence review is complete.

Every case therefore enters the same learning flow as the existing catalogue: screenplay, cinematography, editing, sound, reflection and the complete 17-area history-and-craft audit. Historical profiles remain visibly `research_pending` until source work is added.

## Requested films

### 1900s and 1920s

1. A Trip to the Moon (1902)
2. The Cabinet of Dr. Caligari (1920)
3. Nosferatu (1922)
4. Battleship Potemkin (1925)
5. The General (1926)
6. Metropolis (1927)
7. The Passion of Joan of Arc (1928)
8. Man with a Movie Camera (1929)

### 1930s

9. M (1931)
10. City Lights (1931)
11. Frankenstein (1931)
12. King Kong (1933)
13. Modern Times (1936)
14. Snow White and the Seven Dwarfs (1937)
15. The Rules of the Game (1939)
16. Stagecoach (1939)
17. The Wizard of Oz (1939)

### 1940s

18. Citizen Kane (1941)
19. The Maltese Falcon (1941)
20. Casablanca (1942)
21. Double Indemnity (1944)
22. Brief Encounter (1945)
23. The Lost Weekend (1945)
24. Rome, Open City (1945)
25. Out of the Past (1947)
26. Gategutter (1949)
27. The Third Man (1949)

### 1950s

28. Rashomon (1950)
29. Tokyo Story (1953)
30. La Strada (1954)
31. Seven Samurai (1954)
32. Pather Panchali (1955)
33. The Night of the Hunter (1955)
34. The Seventh Seal (1957)
35. Fjols til fjells (1957)
36. De dødes tjern (1958)
37. Touch of Evil (1958)
38. Hiroshima mon amour (1959)

### 1960s

39. Psycho (1960)
40. Breakfast at Tiffany's (1961)
41. Jules and Jim (1962)
42. Cléo from 5 to 7 (1962)
43. Lawrence of Arabia (1962)
44. Contempt (1963)
45. 8½ (1963)
46. Band of Outsiders (1964)
47. Dr. Strangelove (1964)
48. The Umbrellas of Cherbourg (1964)
49. The Battle of Algiers (1966)
50. Persona (1966)
51. Bonnie and Clyde (1967)
52. 2001: A Space Odyssey (1968)
53. Night of the Living Dead (1968)

### 1970s

54. The Godfather (1972)
55. Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles (1975)
56. Jaws (1975)
57. Star Wars (1977)
58. Killer of Sheep (1977)

## Implementation files

- `src/ui/data/earlyCinemaExpansion.ts`
  - authoritative requested-film definitions;
  - title/year alias matching;
  - deduplication against the original seed;
  - scenario creation for missing titles.
- `src/ui/data/scenarioProductionBriefsEarlyCinemaExpansion.ts`
  - film-specific playable briefs generated from each film's historical production focus.
- `src/ui/data/filmScenarios.ts`
  - merges the original seed and historical expansion and reports the real merged count.
- `src/ui/data/scenarioProductionBriefs.ts`
  - resolves the historical briefs before falling back to an imported seed.
- `src/core/earlyCinemaExpansion.test.ts`
  - requires all 58 films to resolve exactly once and remain honestly marked `needs_research`.

## Research status

This implementation is catalogue and learning-structure work, not completed source verification.

The next research passes should be organized by production system:

1. trick film, Expressionism, Soviet montage and silent performance;
2. transition to sound, studio horror, animation and classical genre production;
3. film noir, wartime studio cinema and neorealism;
4. postwar Japanese, Indian, Scandinavian and European art cinema;
5. New Waves, modernism and large-format production;
6. New Hollywood, regional independent cinema and the effects blockbuster.
