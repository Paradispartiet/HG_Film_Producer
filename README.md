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

Repoet er i grunnfase.

Det finnes foreløpig ingen frontend, backend, package.json eller app-kode. Første mål er å definere spillets univers, systemer og datatyper før implementasjon.
