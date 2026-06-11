# HG Film Producer — byggerekkefølge

Dette dokumentet beskriver anbefalt rekkefølge for bygging.

Målet er å beholde full ambisjon, men bygge én spillmotor av gangen.

## Prinsipp

Full ambisjon. Modulær struktur. Én spillmotor av gangen.

Vi skal ikke redusere spillet til en liten quiz. Men vi skal heller ikke starte med alt samtidig i kode.

## Fase 0 — grunnmur

Mål: definere spillet.

Innhold:

- idébibel
- systemkart
- datamodell
- teknologistack
- repo-struktur

## Fase 1 — profesjonelt TypeScript-fundament

Mål: sette opp moderne kodebase.

Innhold:

- package.json
- tsconfig.json
- src/domain
- src/core
- src/data
- strenge typer
- nullsikker modell
- små rene funksjoner

## Fase 2 — dataskjelett

Mål: lage de første datafilene for filmverdenen.

Filer:

- data/film/roles.json
- data/film/mentors.json
- data/film/techniques.json
- data/film/movements.json
- data/film/genres.json
- data/film/locations.json
- data/film/films.json
- data/film/production_choices.json
- data/film/knowledge_entries.json

## Fase 3 — studio state

Mål: lage første spilltilstand.

Spilleren skal ha:

- studio
- penger
- rykte
- prestisje
- aktivt filmprosjekt
- opplåste teknikker
- fullførte filmer

## Fase 4 — første filmprosjekt-loop

Mål: spilleren kan lage en enkel film fra idé til resultat.

Minimum:

- velg idé
- velg sjanger
- velg manusretning
- velg crew
- velg location
- velg én teknikk
- få resultat

Dette er ikke sluttspillet. Det er første bevis på spillmotoren.

## Fase 5 — mentor-system

Mål: spilleren kan få råd fra mentorer.

Mentorer skal koble problem, historisk eksempel, teknikk og spillvalg.

## Fase 6 — manus-system

Mål: gjøre manusbygging spillbart.

Systemet bør støtte hovedperson, mål, konflikt, struktur, scener, tema, dialog og omskriving.

## Fase 7 — location-system

Mål: koble filmproduksjon til steder.

Locations skal ha stemning, sjangerbonus, produksjonskostnad, logistikk, autentisitet, historisk verdi og mulig HG-placeId.

## Fase 8 — produksjonssystem

Mål: gjøre innspilling til et spill.

Systemet bør støtte budsjett, tid, crew-effekt, cast-effekt, uventede hendelser, produksjonsvalg og scene-resultater.

## Fase 9 — klipp og postproduksjon

Mål: gjøre filmen ferdig.

Systemet bør støtte rytme, struktur, lyd, musikk, farge, trailer og testvisning.

## Fase 10 — lansering og respons

Mål: filmen møter verden.

Systemet bør støtte festival, kino, streaming, publikum, kritikere, priser, økonomi og kultstatus.

## Fase 11 — karriere og studiohistorie

Mål: langsiktig Football Manager-følelse.

Systemet bør støtte flere filmer over tid, ansatte som utvikler seg, studio-identitet, økonomisk risiko, rykte, priser, rivaliserende studioer og filmhistorisk arv.

## Ikke gjør ennå

Ikke start med login, stor backend, avansert kart, komplett historisk database, AI-manusgenerator eller masse bilder.

Først må kjernemotoren være tydelig.
