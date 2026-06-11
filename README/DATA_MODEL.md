# HG Film Producer — datamodell

Dette er første datamodell for HG Film Producer.

Målet er å definere hvilke typer data spillet trenger før vi bygger app-kode.

## Prinsipp

Data skal ikke bare beskrive filmhistorie. Data skal kunne brukes i gameplay.

En filmteknikk skal kunne brukes i et scenevalg. En mentor skal kunne lære bort en teknikk. En location skal kunne påvirke produksjon. En rolle skal kunne påvirke filmens kvalitet.

## Hovedtyper

### studio

Spillerens filmselskap.

Bør inneholde navn, penger, rykte, prestisje, ansatte, utstyr, fullførte filmer, aktive prosjekter og opplåste teknikker.

### film_project

En film under utvikling.

Bør inneholde tittel, sjanger, status, budsjett, manus, crew, cast, locations, teknikker brukt, produksjonsresultat og lanseringsresultat.

### script

Manusstrukturen.

Bør inneholde idé, tema, sjanger, hovedperson, konflikt, struktur, scener, dialognivå, omskrivinger og dramatisk styrke.

### scene

Én scene i filmen.

Bør inneholde sted, karakterer, dramatisk funksjon, stemning, konflikt, teknikker tilgjengelig, teknikk brukt og scene-resultat.

### character

En fiktiv karakter i filmen.

Bør inneholde rolle i historien, mål, konflikt, utvikling, relasjoner, dialogstil og castingbehov.

### role

En filmrolle eller funksjon.

Eksempler: produsent, regissør, manusforfatter, fotograf, klipper, komponist, lyddesigner, scenograf, kostyme, casting, location manager og markedsfører.

### crew_member

En konkret person i crewet.

Bør kobles til rolle, erfaring, stil, styrker, svakheter, lønn, samarbeidsevne og historisk/fiktiv status. Første crew-motor scorer rolle-, sjanger- og stilmatch sammen med erfaring, pålitelighet og kostnad før en person ansettes uten å mutere prosjektet.

### actor

En skuespiller som kan castes.

Bør inneholde stjerneverdi, erfaring, spillestil, sjangerstyrke, kjemi, publikumstrekk og rolle-egnethet. Første castingmotor scorer skuespillere, måler delte og motstridende kjemitags og samler crew, cast, pålitelighet og budsjettpress i en produksjonsteamevaluering.

### mentor

En historisk eller faglig rådgiver.

Bør inneholde navn, rollefokus, teknikker de lærer bort, problemer de hjelper med, og hva de låser opp.

### film_technique

En teknikk spilleren kan lære og bruke.

Eksempler: montage, jump cut, long take, nærbilde, kryssklipp, voiceover, naturlig lys, hardt lys, subjektivt kamera og match cut.

### film_movement

En filmhistorisk bevegelse eller epoke.

Eksempler: tysk ekspresjonisme, sovjetisk montage, film noir, italiensk neorealisme, fransk nybølge, New Hollywood, Dogme 95 og streaming-era.

### film_genre

Sjanger.

Eksempler: drama, komedie, thriller, skrekk, action, dokumentar, musikal, romantikk, science fiction og periodedrama.

### location

Et sted, gjerne koblet til History Go.

Bør inneholde stedstype, by, tags, sjangerbonus, stemning, produksjonskostnad, logistikk, autentisitet, visuell verdi og historisk verdi. Location scouting rangerer steder mot prosjekt og brief, og et valgt sted gir et eksplisitt produksjonsestimat.

### historical_film

En ekte eller referansebasert filmhistorisk film.

Brukes som eksempel, mentorgrunnlag, teknikkilde eller inspirasjonsnode.

### production_choice

Et spillvalg spilleren tar under manus, preproduksjon, innspilling, klipp eller lansering.

Bør inneholde problem, valg, konsekvenser, hva spilleren lærer og hvilke stats som påvirkes.

### production_event

En hendelse som oppstår under produksjonen.

Eksempler: værproblem, budsjettpress, forsinkelse, konflikt, god improvisasjon, teknisk feil eller uventet sterk scene.

### release_strategy

Hvordan filmen lanseres.

Eksempler: festival først, kino, streaming, nisjepublikum, bred lansering, skole/kultur eller internasjonalt salg.

### release_result

Resultatet etter lansering.

Bør inneholde publikum, økonomi, kritikk, festivalrespons, priser, kultstatus og effekt på studioets rykte.

### knowledge_entry

Læringsinnhold knyttet til det spilleren faktisk bruker.

Skal kobles til teknikker, roller, mentorer, scener, sjangre, locations eller historiske filmer.

## Første datafiler

Foreslått struktur:

- data/film/roles.json
- data/film/mentors.json
- data/film/techniques.json
- data/film/movements.json
- data/film/genres.json
- data/film/locations.json
- data/film/location_scouting_briefs.json
- data/film/films.json
- data/film/production_choices.json
- data/film/knowledge_entries.json

## Viktig regel

Hvis en datatype ikke kan påvirke et filmvalg, et produksjonsvalg eller en læringssituasjon, er den ikke ferdig designet.
