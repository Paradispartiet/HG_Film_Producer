# Film History – masterplan for bok, Film Atlas og Production Cases

**Statusgrunnlag:** `Paradispartiet/HG_Film_Producer` på `main` commit `29e927139079a92d923b6d7e542fa1c81f1f0fa0` (14. august 2026).

## 1. Formål
Dette dokumentet er den samlede gjennomføringsplanen for Film History-boka. Det skiller bevisst mellom (a) redaksjonell bokstatus og (b) Film Atlas/Production Case-status, slik at en ferdig Atlas-audit aldri blir feilrapportert som en ferdig boktekst.

## 2. Hvor Film History ligger
- `src/core/filmHistoryBook.ts` – canonical bokmodell: typer, seks deler, 30 kapitler, perioder, teser og outline-status.
- `src/core/filmHistoryChapterOne.ts` – eneste kapittel som i dag er materialisert som `status: "full"`.
- `src/core/filmHistoryChapterOneMovementOne.ts`, `...MovementTwo.ts`, `...MovementThree.ts` – detaljert kapittel-1-prosa.
- `src/core/chapterOneEarlyCinemaExpansion.ts`, `chapterOneRescuedByRoverExpansion.ts`, `chapterTwoExhibitionExpansion.ts` – chapter-driven Film Atlas-scenarioer.
- `docs/film-history/chapter-1-film-atlas-gap-report.md` og `chapter-2-film-atlas-gap-report.md` – ferdige chapter-specific Atlas-audits.
- `src/ui/data/scenarioFilmStudy*` – 17-områders Film Study-materiale.
- `src/ui/data/scenarioProductionVerification*` – kildeverifisering av Production Cases.
- `scripts/film-history-chapter-one-atlas-audit.mjs`, `film-history-chapter-two-atlas-audit.mjs` – kjørbare chapter gates.
- `scripts/production-case-rest-audit.mjs` – global Atlas/Production Case-kontroll.

## 3. Nåstatus
- Bokarkitekturen er canonical og omfatter **6 deler / 30 kapitler**.
- Kapittel 1 er `full` i bokmodellen.
- Kapittel 2–30 er `outline` i bokmodellen.
- Kapittel 1 Atlas-audit: P0 = 0, P1 = 0; seks nye Production Cases er ferdige.
- Kapittel 2 Atlas-audit: P0 = 0, P1 = 0; tre nye Production Cases er ferdige.
- Canonical playable Film Atlas er **387 filmer** på dette statusgrunnlaget.
- Kapittel 3–30 har ennå ingen chapter-specific gaprapport i `docs/film-history/` og skal derfor behandles som **ikke chapter-auditert** selv om mange relevante filmer allerede finnes i Atlas.

## 4. Bokas seks deler
### Del 1: The medium emerges (1870s–1914)
Cinema becomes a reproducible public medium through intertwined changes in apparatus, exhibition, film form, production and distribution.

### Del 2: Silent cinema as a global system (1914–1929)
During and after World War I, industrial consolidation and radical modernist alternatives transform what films look like, how they are edited and how national cinemas define themselves.

### Del 3: Sound, studios and state power (1927–1945)
Synchronized sound reorganizes film form and industry while depression, authoritarian states and world war reshape cinema’s institutions and political uses.

### Del 4: Postwar reconstruction and modern cinema (1945–1968)
Postwar cinema combines industrial reconstruction, new realism, changing audiences, decolonization and a wave of modernist challenges to classical storytelling.

### Del 5: New Hollywood and global art cinema (1968–1989)
The collapse of older production assumptions produces both intensified blockbuster economics and new political, independent, experimental and transnational film cultures.

### Del 6: Global and digital cinema (1989–present)
Digital tools, transnational finance, new national movements, franchise economics and platform distribution reorganize both cinema’s aesthetics and the institutions through which films reach audiences.

## 5. Full 30-kapitlers roadmap

### Del 1: The medium emerges

**1. From motion studies to cinema** — 1870s–1905  
Editorial: **FULL** · Atlas: **COMPLETE – P0/P1 = 0**  
Cinema emerges from motion analysis, recording, apparatus, production, projection, circulation and early film form; no single-inventor story.

**2. Projection, programmes and audiences** — 1895–1907  
Editorial: **OUTLINE** · Atlas: **COMPLETE – P0/P1 = 0**  
Itinerant exhibition, fairgrounds, music halls, storefront theatres and recurring programmes turn moving pictures into a public habit.

**3. From views to stories** — 1896–1912  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Staged fiction, trick film, multi-shot construction, continuity devices and sustained narrative organization develop together.

**4. Companies, patents and the feature transition** — 1905–1914  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Companies, exchanges, rental, patents, theatres and longer films reorganize production and distribution.

**5. Cinema becomes international** — 1907–1914  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Prewar production centres compete across borders as stars, genres and feature films circulate internationally.

### Del 2: Silent cinema as a global system

**6. Classical continuity and the Hollywood system** — 1914–1929  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Hollywood consolidates stars, genres, continuity editing, studios and national distribution into a durable industrial/stylistic system.

**7. Weimar cinema and Expressionism** — 1919–1929  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
German studios, Expressionist design, chamber drama and mobile camera work make architecture and subjectivity central to film form.

**8. French Impressionism, Surrealism and the avant-gardes** — 1918–1930  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Photogénie, subjective vision, abstraction and Surrealism develop through alternative artistic and production institutions.

**9. Revolution and Soviet Montage** — 1917–1930  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Montage becomes a theory of politics, perception and form in the work of Kuleshov, Eisenstein, Vertov, Pudovkin and others.

**10. Silent cinemas beyond the usual canon** — 1910s–1929  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Japan, China, India, Scandinavia and other film cultures develop distinctive exhibition, performance, genre and production traditions.

### Del 3: Sound, studios and state power

**11. The sound transition** — 1927–1934  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Dialogue, music and effects change acting, camera practice, editing, exhibition, language markets and industrial power.

**12. Hollywood genres in the studio era** — 1930s–1945  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Genre cycles become coordinated studio products and laboratories for sound, performance, design and industrial planning.

**13. European cinemas between crisis and dictatorship** — 1930–1945  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Commercial and state institutions respond differently to economic crisis, authoritarian politics, realism, stylization and exile.

**14. Documentary, animation and experimental film** — 1920s–1945  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Nonfiction, animation and experimental cinema build distinct pipelines, political functions and aesthetic possibilities.

**15. Cinema at war** — 1939–1945  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Features, newsreels, documentaries, animation and military film serve morale, persuasion, information and memory.

### Del 4: Postwar reconstruction and modern cinema

**16. Italian Neorealism** — 1943–1954  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Location work, social crisis, nonprofessional performers and open narrative forms become influential postwar practices.

**17. Postwar Japan and Asian modernisms** — 1945–1960s  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Japanese studio masters and emerging Asian cinemas combine local traditions, genre systems and modernist experimentation.

**18. Hollywood after the studio peak** — 1945–1960  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Antitrust, television, widescreen, color, location production and changing star/production systems reshape Hollywood.

**19. New Waves and new cinemas** — 1955–1968  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
French, British, Czech, Polish and other new cinemas challenge studio norms through new institutions and production practices.

**20. Decolonization and Third Cinema** — 1950s–1970s  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Anti-colonial politics generate alternative production, distribution and theory across Latin America, Africa and other contexts.

### Del 5: New Hollywood and global art cinema

**21. New Hollywood** — 1967–1980  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Countercultural audiences, genre revision, location production and auteur discourse coexist with renewed corporate control.

**22. Feminist, queer and political counter-cinemas** — 1960s–1980s  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Filmmakers, theorists and collectives challenge representation, authorship and spectatorship through new institutions and forms.

**23. Popular cinemas across Asia** — 1960s–1980s  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Indian popular cinema, Hong Kong action, Japanese genre production and other industries build regional and diasporic audiences.

**24. Blockbusters, conglomerates and home video** — 1975–1989  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Event films, saturation marketing, multiplexes, cable and home video transform financing, release, viewing and catalog value.

**25. Global auteurs and festival networks** — 1960s–1989  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Festivals, art-house distribution, state funding and co-production enable transnational circulation of auteur cinema.

### Del 6: Global and digital cinema

**26. Post-Cold War transnational cinema** — 1989–2005  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Co-productions, migration, new funding systems and revived industries reshape films moving across languages and markets.

**27. Digital production and the transformed image** — 1990s–2010s  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Nonlinear editing, DI, CGI, motion capture and digital cinematography transform image construction and revision.

**28. East Asian new waves and global genre cinema** — 1980s–2010s  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Hong Kong, Taiwan, mainland China, South Korea and Japan become key centres of art cinema and genre reinvention.

**29. Franchises, streaming and platform distribution** — 2000s–present  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Franchises, global release, streaming and platform economics alter windows, financing, circulation and access.

**30. Contemporary forms and the unfinished present** — 2000s–present  
Editorial: **OUTLINE** · Atlas: **NOT YET CHAPTER-AUDITED**  
Hybrid documentary, essay film, low-cost digital work, virtual production and new exhibition contexts keep redefining cinema.

## 6. Canonical kapittelkontrakt
Et ferdig kapittel skal ha:
1. tydelig kapitteltese og avgrensning;
2. eksplisitte læringsmål og nøkkelbegreper;
3. kildeførte seksjoner med sammenhengende historisk argument;
4. filmreferanser klassifisert som `anchor_film`, `comparative_film` eller `historical_object`;
5. Atlas-beslutning per film: `use_existing_atlas_case`, `P0`, `P1` eller `P2`;
6. historiske objekter/praksiser som eksplisitt **ikke** blir falske Production Cases;
7. historiografiske safeguards for omstridte eller mytologiserte påstander;
8. chapter-specific Atlas gap report;
9. kjørbar audit i CI;
10. P0 = 0 og P1 = 0 før kapittelet kan kalles komplett som bok+Atlas-enhet.

## 7. Editorial arkitektur per kapittel
Anbefalt fast struktur:
- **Åpningsproblem:** hvorfor perioden/endringen betyr noe.
- **Institusjoner og industri:** hvem produserer, finansierer, distribuerer og viser.
- **Teknologi og arbeidsflyt:** bare når teknologien faktisk endrer produksjon eller estetikk.
- **Form og estetikk:** hvordan stil, klipping, mise-en-scène, lyd, farge, format osv. fungerer historisk.
- **Publikum og sirkulasjon:** hvordan filmer når og formes av publikum.
- **Anchor films:** få, sterke nærlesninger som bærer kapittelargumentet.
- **Comparative films:** avgrensede kontraster som tester argumentet.
- **Historiske objekter:** apparater, programmer, plakater, institusjoner, praksiser og dokumenter som ikke skal tvinges inn som filmproduksjoner.
- **Historiografi:** myter, versjonsproblemer, arkivtap, attribusjonsproblemer og konkurrerende faglige tolkninger.
- **Overgang:** hva kapittelet forklarer, og hva neste kapittel må ta over.

## 8. Atlas-prioritering
- **USE_EXISTING:** canonical Atlas-case finnes og dekker kapittelrollen. Ingen duplikatproduksjon.
- **P0:** nødvendig anchor/strukturell film. Kapittelet kan ikke ferdigstilles uten den.
- **P1:** nødvendig støtte-/sammenligningscase med tydelig egen gameplay- og læringsverdi.
- **P2:** verdifull bokreferanse, men ikke nok selvstendig Production Case-verdi. Skal **ikke** auto-produseres.
- **NO_PRODUCTION_CASE:** historisk objekt/praksis som ikke er en filmproduksjon.

Hard regel: Gaprapporten skal alltid navngi **eksakt hvilke filmer** som skal produseres, hvilke som gjenbrukes og hvilke som forblir P2. Abstrakte tall alene er ikke en ferdig audit.

## 9. Production Case-kontrakt
Når en P0/P1 faktisk må produseres:
1. canonical scenario-ID og stabil tittel/år/alias-matching;
2. produksjonshistorisk premise og scenario type;
3. kilde-ID og inspiserbar kilde-URL;
4. læringsmål og produksjonsfaser;
5. choices som bygger på dokumentert produksjonspraksis – ikke generisk filmskolelogikk;
6. komplett 17-områders Film Study;
7. egen Production Verification med flere seriøse kilder;
8. dedikert test;
9. global verifikasjons-/Atlas-audit oppdateres bare når caset faktisk finnes;
10. per-film verifikasjonsdokument når caset trenger egen historisk dokumentasjon;
11. full CI grønn før merge;
12. gaprapporten flytter filmen til USE_EXISTING/complete og viser ny eksakt restkø.

## 10. Kilde- og historiografipolicy
- Prioriter primærkilder, arkiver, museer, filminstitutter, biblioteker og fagfellevurdert/faglig historiografi.
- Trianguler viktige produksjonspåstander når kildene er uenige eller senere historieskriving har skapt myter.
- Skill produksjonsfakta fra senere tolkning.
- Bevar versjonshistorie, alternative cuts, reshoots, re-edits og arkivstatus når dette påvirker analysen.
- Ikke gjør «første», «oppfinner», «fødsel» eller «eneste årsak» til fakta uten svært sterkt belegg.
- Ikke les senere klassisk kontinuitet, auteur-begrep eller moderne sjangerlogikk bakover i tid uten historisk begrunnelse.
- Arkivtap skal behandles som et kunnskapsproblem, ikke som bevis på at fraværende tradisjoner var uviktige.

## 11. Chapter audit-protokoll
For hvert nytt kapittel:
1. Les canonical outline og avgrens kapittelets faktiske historiske spørsmål.
2. Lag kandidatsett: anchor films, comparative films, historical objects.
3. Audit **hele dagens Atlas** før nye filmer foreslås.
4. Klassifiser hver kandidat: USE_EXISTING / P0 / P1 / P2 / NO_PRODUCTION_CASE.
5. Skriv gaprapport med eksakte titler og begrunnelse.
6. Lag kjørbar audit som låser klassifiseringen.
7. Produser P0 først, deretter P1.
8. Oppdater bokteksten med kunnskap fra produksjonsresearch uten å gjøre Atlas-tekst til bokprosa.
9. Kjør full verifikasjon/CI.
10. Sett kapittelet til `full` først når redaksjonell tekst **og** Atlas-porten er ferdige.

## 12. Definition of Done – bokkapittel
Et kapittel er **ikke ferdig** fordi en outline finnes, fordi relevante filmer finnes i Atlas, eller fordi P0/P1-køen er tom. Kapittelet er ferdig når:
- `status: "full"` er berettiget av faktisk kildeført prosa;
- argument, læringsmål og nøkkelbegreper henger sammen;
- filmroller og historiske objekter er eksplisitte;
- chapter-specific gaprapport finnes;
- chapter-specific audit finnes og kjører i preflight;
- P0 = 0 og P1 = 0;
- P2 er eksplisitt bevart uten auto-produksjon;
- omstridte påstander har safeguards;
- tests/build/preflight er grønne;
- gaprapporten navngir eksakt ferdig produsert og eventuell gjenværende filmkø.

## 13. Arkitektur som bør standardiseres
`filmHistoryBook.ts` bør forbli registry/part-assembly, ikke vokse til en monolittisk 30-kapitlers tekstfil. Når et outline-kapittel materialiseres:
- opprett `src/core/filmHistoryChapterNN.ts`;
- flytt kapittelets sources, sections, filmReferences og historicalObjects dit;
- bruk `Movement`-filer bare når kapittelet er langt nok til at det forbedrer lesbarhet;
- importer det ferdige kapittelet inn i `filmHistoryBook.ts` i stedet for `outline(...)`;
- opprett `docs/film-history/chapter-N-film-atlas-gap-report.md`;
- opprett `scripts/film-history-chapter-N-atlas-audit.mjs`;
- legg auditen inn i permanent preflight.

## 14. Prioritert gjennomføringsrekkefølge
### Fase A – lukk gapet mellom bok og Atlas i kapittel 2
Atlas-siden er ferdig, men bokmodellen er fortsatt outline. Neste redaksjonelle leveranse bør derfor være en full `filmHistoryChapterTwo.ts` med source-backed prose, filmroller og safeguards som samsvarer med den allerede ferdige gaprapporten.

### Fase B – kapittel 3: From views to stories
Kapittel 3 er neste nye chapter-audit. Ingen ny film skal produseres før dagens 387-films Atlas er auditert mot kapittelets anchor/comparative-kandidater. Første leveranse er derfor gaprapport + kjørbar audit, med **eksakte filmtitler** i P0/P1/P2.

### Fase C – fullfør Del I (kapittel 3–5)
Gjør hele «The medium emerges» redaksjonelt full før bokarbeidet flytter tyngdepunktet til stumfilmperioden. Dette gir en sammenhengende første del som kan leses som bok, ikke bare som registry.

### Fase D – del-for-del gjennom kapittel 6–30
Arbeid i historisk rekkefølge. Hvert kapittel følger samme pipeline: research → editorial chapter → full Atlas audit → P0 → P1 → safeguards → CI → `full`.

### Fase E – helhetsredigering
Når alle kapitler er full:
- harmoniser begrepsbruk og kryssreferanser;
- fjern unødig repetisjon mellom kapitler;
- kontroller global geografi, kjønn, produksjonsformer og arkivskjevheter;
- kontroller kronologiske overlapp mellom kapitlene;
- lag samlet bibliografi/kilderegister;
- kjør en egen bokwide quality audit.

## 15. Delvise milepæler
- **M1:** Kapittel 1–2 redaksjonelt full + Atlas complete.
- **M2:** Del I (1–5) full.
- **M3:** Del II (6–10) full.
- **M4:** Del III (11–15) full.
- **M5:** Del IV (16–20) full.
- **M6:** Del V (21–25) full.
- **M7:** Del VI (26–30) full.
- **M8:** bokwide konsistens-, kilde- og representasjonsaudit.
- **M9:** releaseklar Film History-bok med alle chapter gates grønne.

## 16. Risikoer som planen skal forhindre
- **Statusblanding:** ferdig Atlas ≠ ferdig bokprosa.
- **Tilfeldig filmproduksjon:** nye Production Cases uten chapter gap audit.
- **Atlas-inflasjon:** P2-filmer produseres bare fordi de nevnes i boka.
- **Duplikater:** eksisterende case blir produsert på nytt under ny tittel/alias.
- **Historiografiske myter:** «første», «oppfunnet av» eller senere re-edits blir fremstilt som samtidige fakta.
- **Vestlig kanonskjevhet:** chapter outlines om globale filmkulturer må få reell kilde- og casebredde, ikke bare symbolske tillegg.
- **Arkitekturdrift:** ferdig prosa blir liggende som tilfeldige datafragmenter uten canonical chapter module.
- **Tellefeil:** audit counts endres før et faktisk verifisert case er materialisert.

## 17. Kvalitetsport for hele boka
Før release skal boka kunne bestå en samlet audit på minst disse dimensjonene:
1. historisk korrekthet og kildekvalitet;
2. tydelig årsak/virkning uten teleologi;
3. global og institusjonell bredde;
4. produksjonshistorisk substans;
5. form-/stilhistorisk substans;
6. publikum, distribusjon og utstilling;
7. historiografisk bevissthet;
8. konsistent terminologi;
9. Atlas-integrasjon uten duplisering;
10. lesbar progresjon fra kapittel 1 til 30;
11. alle chapter audits permanente og grønne;
12. alle ferdigmeldinger etterprøvbare fra repoet.

## 18. Ferdig arbeid som allerede skal bevares
### Kapittel 1 – seks ferdige nye Production Cases
P0: *Blacksmith Scene* (1893), *Workers Leaving the Lumière Factory* (1895), *The Great Train Robbery* (1903).  
P1: *Fire!* (1901), *Life of an American Fireman* (1903), *Rescued by Rover* (1905).  
P2/book-only: *L'Arroseur arrosé* (1895), *Arrival of a Train at La Ciotat* (1896), *Annabelle Serpentine Dance* (1895), *The Big Swallow* (1901).

### Kapittel 2 – tre ferdige nye Production Cases
*The Corbett–Fitzsimmons Fight* (1897), *Employees Leaving Brown's Atlas Works, Sheffield* (1901), *Uncle Josh at the Moving Picture Show* (1902).  
P2/book-only: *May Irwin Kiss* (1896), *Sedgwick's Bioscope Showfront at Pendlebury Wakes* (1901).

## 19. Umiddelbar neste oppgave
**Ikke start med en tilfeldig ny film.** Først materialiseres kapittel 2 som full boktekst. Deretter startes kapittel 3 med canonical research og en komplett Atlas gap audit. Gaprapporten må navngi eksakt hvilke filmer dagens Atlas allerede dekker, og hvilke konkrete titler som eventuelt blir P0, P1 eller P2. Først etter den auditen produseres nye Chapter 3-cases.
