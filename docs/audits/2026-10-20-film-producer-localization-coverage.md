# Film Producer — samlet oversettelsesaudit (første kildekartlegging)

**Dato:** 2026-10-20  
**Låst kildegrunnlag:** `main` ved `6a04a7eafc7599c1ebea95e6a1645d597f10a7b2` (PR #793 merget).  
**Status:** Arbeidsliste og statisk kodeaudit, **ikke** godkjent sluttkontroll i nettleser eller produksjon.

## Hva «dekning» betyr

Mål: Hele den **aktive** brukerreisen på EN/NB/FR/PT. Skille alltid mellom:

1. **UI-krom:** navigasjon, overskrifter, knapper, meldinger, feil, oppgaveinstruksjoner.
2. **Filmbundet presentasjon:** logline, genre/tone, syv målgrupper i produksjonsbriefen, valg og læringsmål, refleksjon og Atlas/Director.
3. **Historie/filmstudier:** historiske profiler, svaralternativer, dokumenterte påstander, forklaringer og statusnotater.
4. **Kilde-/identitetsdata:** canonical scenario-ID, kildehenvisninger, originaltitler, kreditering, filmfakta, kilde-notater og motor-/lagringsdata. **Skal ikke overskrives.** Eventuell oversatt visning skal være et separat, kildefast presentasjonslag.

Det er en alvorlig målefeil å kalle et filmcase «oversatt» bare fordi UI-feltene rundt det er lokalisert.

## Verifiserte funn på denne baselinen

Den eksisterende `scripts/production-case-rest-audit.mjs` har kontraktene `EXPECTED_PLAYABLE_SCENARIOS = 614` og `EXPECTED_VERIFIED_PRODUCTION_CASES = 614`. Selve kildebasens størrelse må ikke forveksles med oversettelsesdekning.

`src/core/productionCaseFilmStatementCopy.ts` har kun tre film-ID-er med eksplisitt kildebundet tekstpresentasjon:

| Film | Scenario-ID | Canonical utsagn | EN | NB | FR | PT |
| --- | --- | ---: | :---: | :---: | :---: | :---: |
| 12 Angry Men (1957) | `scenario_12_angry_men_1957` | 22 | kanonisk | ja | ja | ja |
| The Machinist (2004) | `scenario_the_machinist_2004` | 22 | kanonisk | ja | ja | ja |
| The Lives of Others (2006) | `scenario_the_lives_of_others_2006` | 22 | kanonisk | ja | ja | ja |

**Dekningsstatus etter streng, filmspesifikk definisjon:** 3/614 = **0,49 %** med dokumenterte exact-statement-presentasjoner; **611** har fortsatt canonical fallback for filmspesifikke utsagn. Dette **er ikke** 0,49 % av alle UI-ord eller en evaluering av oversettelsenes litterære kvalitet. De 66 canonical utsagnene har eksisterende EN/NB/FR/PT-kontraktstester; et helt case kan fortsatt vise engelsk via andre flater.

`src/core/productionCaseSeedPresentation.ts` oversetter en avgrenset liste med generiske seed-hint. Dette regnes ikke som kildestyrt lokalisering av en enkelt film.

### Dokumenterte aktive lekkasjeveier

| Prioritet | Aktiv skjerm / brukerreise | Konkret kodesti | Funn / utbedringsregel |
| --- | --- | --- | --- |
| P0 | Production Cases → bibliotekkort | `src/ui/components/FilmScenarioLibrary.tsx` | `scenario.film.genres` vises direkte; taksonomietiketter trenger eget presentasjonsoppslag. Filmtitler og identiteter skal bestå. |
| P0 | Film Atlas → analyse | `src/ui/components/FilmAtlasExperience.tsx` | Genre-tags vises canonical; øvrige filmtekstfelter bruker `presentFilmCaseContent`, som for 611 caser returnerer originaltekst. |
| P0 | Film Director → referansefilm | `src/ui/components/FilmDirectorExperience.tsx` | `brief.logline` og øvrige brief-prinsipper vises uten filmcase-resolver; dette lekker engelsk **også for de tre oversatte** filmene. Resolver må gjenbrukes før nye oversettelser premieres. |
| P0 | Production Case → historisk filmstudium | `src/ui/components/ScenarioFilmStudyPanel.tsx` | `historyProfile.before/moment/after`, `choice.label` og dekningsnotater vises rått; UI-krom er lokalisert, filmhistorisk innhold er det ikke. |
| P1 | Production Case → kilder og rapport | `src/ui/components/ScenarioProductionBriefPanel.tsx`, `ScenarioLearningRecapPanel.tsx` | `source.note`, `verification.summary` vises i originalform. Originalkilde bevares; separat attestert oversatt sammendrag krever eget scope. |
| P1 | Film School / Film History | `src/ui/components/FilmSchoolOverview.tsx`, `FilmHistoryExperience.tsx`, `FilmHistoryBook.tsx` | Kursnavigasjon har flerspråklige oppslag, men innhold, filmhistorie, oppgaver og kilder må sjekkes som egne datagrupper i full brukerreise. |
| P1 | Hjem / Producer → ruting | `src/ui/components/LandingScreen.tsx` og `RoutedFilmverketPlatform.tsx` | Bare faktisk rutet komponent telles. Bevar bevisst engelske produktnavn. De eldre Atlas-/Director-grenene i Routed-komponenten er ikke aktiv sannhet når LandingScreen sender disse rutene til egne Experience-komponenter. |
| P2 | Studio Career fra opprettelse til karrierevurdering | `src/ui/App.tsx`, `src/ui/components/*Panel.tsx` | Mange lokaliserte copy-kontrakter finnes; kontroller faktisk valgt språk, dynamiske resultatverdier, feil, collapsed panels, demo og tilbake-/fortsett-tilstander. Ikke erklær fullført kun på grunnlag av dict-/enhetstester. |

For dagens tre kildeoversatte caser må testreisen minst åpne både Production Cases, Film Atlas **og** Film Director. Et utsagn er ikke visningsklart i fire språk når én av disse grenene fortsatt bypasser presentasjonslaget.

## Reproduserbar arbeidsliste

Kjør:

```sh
npm run audit:localization-coverage
node scripts/film-producer-localization-audit.mjs --write=artifacts/film-producer-localization-coverage.json
```

Rapporten henter scenario-ID-er fra **samme verifikasjonsfilfamilie** som Production Case-rest-auditen, sammenligner antallet med eksisterende 614-kontrakt, registrerer kildefiler per case, leser faktisk resolver-tilordning og lager sorterte rader for alle 614 filmer:

- `exact_statement_presentation`: film-ID har eksplisitt kildebundet exact-statement-resolver.
- `canonical_fallback`: film-ID bruker fortsatt originaltekst for filmspesifikke utsagn.
- `rawPathPresent`: statisk indikator for særskilt valgte UI-lekkasjeveier. Den er en signaltest, ikke runtime-bevis.

Alle endringer i canonical ID-listen, språk-kontrakten, mappingen eller utsagnstabellene som bryter en antakelse gir feilutgang i rapportøren. Det er bevisst fail-closed for *inventaret*, ikke en generell oversettelsessperre. Rapportereren endrer verken corpus, source notes, spillmotor eller lagrede objekter.

## Produksjonsrekkefølge fra dette punktet

**Port A — fjern resolver-bypass:** Løs aktuelle P0-visningsveier for allerede oversatte filmer, uten å oversette nye filmer. Demonstrer alle 22 utsagn × NB/FR/PT i relevante aktive flater, og original EN.

**Port B — kildestyrte film-batcher:** Bruk den komplette 611-raderslisten. For hver liten gruppe: dokumenterte filmkilder → lås canonical påstander → RED-test → separat EN/NB/FR/PT-presentasjon → GREEN uten data-/motorendring. Ikke la verifikasjonsstatus alene rettferdiggjøre oversettelse av uverifiserte nye påstander.

**Port C — historisk og pedagogisk innhold:** Egen liste for historiereferanser, filmstudievalg, tilbakemeldinger, kursoppgaver, Atlas/Director og eventuelle kildevisninger. Skille kildeordlyd fra oversettbar fortolkning.

**Port D — ekte fire-språks sluttkontroll:** Gjør hele brukerreisen for hver språkvariant: landingsside → Producer → case-bibliotek → valgt case → historieoppgaver → brief/valg/tilbakemeldinger → utvikling → opptak → post → lansering → refleksjon → neste prosjekt, og parallelt Atlas → Director → School → History. Kontroller språkbytte midt i reisen, retur/frem, oppfriskning, lagrede prosjekter, skrivebord/mobil, tomtilstander og feilstier. Skjermbilder og tester må gi eksplisitte godkjente artefakter per språk.

**Prosjektet kan først lukkes** når kildeinventaret ikke viser ubegrunnede fallback-tekster i aktive flater, semantikk-/kildesjekk er gjort per film, full `verify:v0.1` er grønn på exact head, merge er SHA-låst og post-merge Pages/produksjonsversjon er kontrollert. Ingen slik aksept fremmes av denne statiske auditen.

## Begrensninger

Dette er inspeksjon av det eksakte commit-treet. Nettleserbasert visuell gjennomgang av alle ruter og fire språk er **ikke kjørt** som del av denne auditen. `rawPathPresent = false` betyr kun at ett bestemt kildekodemønster ikke lenger er til stede; det beviser ikke at brukergrensesnittet viser riktig språk. Tilsvarende er de eksisterende tre filmene testet for 22 exact statements i bestemte kodebaner, ikke helhetlig språkrevidert.
