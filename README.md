# HG Film Producer

**HG Film Producer** er en full filmstudio-simulator koblet til History Go-universet.

Spillet kombinerer:

- **Football Manager**: ledelse, økonomi, ansatte, karriere, langsiktig utvikling
- **The Movies**: studio, produksjoner, stjerner, innspilling og filmkarriere
- **manusprogram**: idé, struktur, scener, dialog, karakterbuer og omskriving
- **filmleksikon**: filmhistorie, teknikker, personer, epoker, sjangre og begreper
- **History Go**: ekte steder, stedshistorie, personer, ruter, observasjoner og kunnskap

Dette repoet starter ikke med en liten prototype. Det starter med ambisjonen om å lage et stort, modulært filmsimulatorsystem der filmhistorie ikke bare er tekst, men selve spillmotoren.

## Grunnidé

Spilleren bygger og driver et filmstudio. Spilleren utvikler filmidéer, skriver manus, ansetter crew, caster skuespillere, finner locations, filmer scener, klipper filmen, lager lyd og musikk, lanserer filmen og bygger et studio over tid.

Kunnskap læres gjennom handling:

> Du lærer montage fordi filmen din trenger å komprimere tid.  
> Du lærer lyssetting fordi scenen mangler stemning.  
> Du lærer manusstruktur fordi filmen mister publikum i andre akt.  
> Du lærer filmhistorie fordi historiske eksempler gir deg bedre produksjonsvalg.

## Filmene som tematisk motor

HG Film Producer skal ikke bare bruke filmer som trivia, referanser eller quizstoff.

Filmene skal brukes som et arkiv over moderne menneskelige konflikter:

- fremmedgjøring
- klasse
- ambisjon
- arbeid
- kropp
- skam
- statusangst
- forbruk
- familieplikt
- ensomhet
- begjær
- makt
- byliv
- maskulinitet og femininitet
- moral under press
- drømmen om et annet liv

Målet er ikke å kopiere filmer, karakterer, scener eller dialog.

Målet er å hente ut hva filmene undersøker, og oversette det til spillbare systemer, roller, valg og hverdagskonflikter.

```text
Film -> tema -> sosiologisk konflikt -> rollehverdag -> korrespondanse -> valg
```

Eksempel:

```text
En film om fremmedgjøring i byen
blir ikke kopiert som plot,
men kan inspirere en rolle der spilleren møter mennesker hele dagen
uten å bli sett som et helt menneske.
```

## Kobling til Civication

Film Producer kan også fungere som tematisk inspirasjonsbank for **Civication**.

Civication-roller skal ikke bare være korte jobbsekvenser eller én mail om morgenen. En ekte rolle skal bygges som en liten sosiologisk hverdagsserie:

- faste sosiale typer
- stereotypier med funksjon
- morgen, lunsj, ettermiddag og kveld
- små korrespondanser på 5–10 meldingsvekslinger
- arbeidspress
- privat etterklang
- valg som får konsekvenser senere
- klasse, status, kropp, økonomi og relasjoner som spillbare krefter

Filmene gir Civication temabanken. Civication oversetter temaene til arbeidsliv, hverdagsliv og sosialt press.

Dette betyr:

```text
Vi kopierer ikke filmen.
Vi lar oss inspirere av hva filmen handler om.
```


## Local verification

Before the final browser/manual QA gate, run the local no-dependency v0.1 preflight:

```bash
npm run verify:v0.1
```

This command composes source/documentation preflight checks, TypeScript checks, Node source-level smoke tests, and the UI build check. It does not replace the browser-driven manual playthroughs tracked in [`docs/PLAYABLE_MODES_QA_STATUS.md`](docs/PLAYABLE_MODES_QA_STATUS.md).

For the remaining human browser pass on a real local machine, run the no-new-dependency manual QA launcher:

```bash
npm run qa:manual
```

The launcher starts the local Vite dev server, prints the Production Cases and Studio Career browser gate checklist, and points to the detailed QA docs. It is only a convenience for manual validation; it does not mark browser QA, Production Cases v0.1, or Studio Career experimental v0.1 complete.

## Dokumentasjon

All faktisk grunnlagsdokumentasjon ligger i `/README/`.

Start her:

- [`README/IDE_BIBLE.md`](README/IDE_BIBLE.md) — visjon, filosofi og hovedidé
- [`README/SYSTEM_MAP.md`](README/SYSTEM_MAP.md) — systemene i spillet
- [`README/DATA_MODEL.md`](README/DATA_MODEL.md) — første datamodell
- [`README/BUILD_ORDER.md`](README/BUILD_ORDER.md) — anbefalt rekkefølge for bygging

## Første regel

Ikke reduser prosjektet til en liten filmquiz.

HG Film Producer skal være stort, men bygges ryddig:

```text
Full ambisjon.
Modulær struktur.
Én spillmotor av gangen.
```

## Nåværende status

Repoet har nå en React/Vite-basert app-UI for den spillbare MVP-en og videre motorinspeksjon.

- **Current playable MVP candidate:** Production Cases — produksjonscase-katalogen er den stabile spillbare MVP-checkpointen og primære referanseloopen, med first-session guidance for brand-new Production Cases players.
- Recommended first play path: Production Cases. Studio Career is available as an experimental branch for focused testing.
- Game direction: see [`docs/GAME_DIRECTION.md`](docs/GAME_DIRECTION.md).
- **Playable modes QA status:** see [`docs/PLAYABLE_MODES_QA_STATUS.md`](docs/PLAYABLE_MODES_QA_STATUS.md) for the single consolidated readiness picture, current QA result, browser-driven gate, and links to detailed manual checklists.
- Production Cases MVP checkpoint: see [`docs/PRODUCTION_CASES_MVP_CHECKPOINT.md`](docs/PRODUCTION_CASES_MVP_CHECKPOINT.md).
- **Current MVP loop:** choose case → make choices → score/report → improve best result.
- **Studio Career:** eksperimentell spillbar branch, ikke hoved-MVP ennå; see [`docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md`](docs/STUDIO_CAREER_EXPERIMENTAL_STATUS.md).
- **Demo Dashboard:** inspeksjon av engine/demo-data.
- **Full studio simulator:** senere utvidelse, ikke spillbar hovedmodus ennå.

> Tidligere grunnfasearbeid la til dataskjelettet (`data/film/*.json`) og den første studiomotoren i `src/core` (opprett studio, opprett filmprosjekt, ta et produksjonsvalg, beregn filmresultat).
