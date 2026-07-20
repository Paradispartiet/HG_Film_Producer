# Film School: samlet regi-grunnkurs og regieksamen

Film School har fem komplette kurskapitler. Denne oversikten gjør dem til ett sammenhengende grunnkurs og viser faktisk progresjon fra de eksisterende kurslagringene.

## Kursløpet

1. Manus og sceneanalyse
2. Skuespillerregi og blocking
3. Bilde, kamera og optikk
4. Lys, farge og produksjonsdesign
5. Klipp, lyd og ferdigstilling

Hvert kapittel har fem leksjoner. Hver leksjon har tre registrerte milepæler:

- sett
- forstått
- brukt

Det samlede grunnkurset består derfor av:

- 5 kurs
- 25 leksjoner
- 75 milepæler

Oversikten lager ikke et nytt poeng-, badge- eller belønningssystem. Den summerer bare progresjonen som allerede finnes i de fem kursene.

## Film School-forsiden

Kursvelgeren har inngangen `00 Oversikt og regieksamen`.

Forsiden viser:

- samlet progresjon i prosent
- antall fullførte milepæler
- antall mestrede kurs
- progresjon og leksjonsstatus for hvert enkelt kapittel
- direkte åpning av riktig kurs
- status for den avsluttende regieksamen
- levert film, scene og innleveringsdato når eksamen er fullført

Nye brukere åpner oversikten som standard. Eksisterende lagrede kursvalg fortsetter å virke.

## Avsluttende regieksamen

Eksamen låses først opp når alle 75 milepælene er gjennomført og alle fem kursene er mestret.

Brukeren velger én katalogfilm som faglig referanse og åpner oppgaven i Film Director.

Oppgaven bruker alle de 16 eksisterende feltene i Director-briefen:

1. Scene title
2. Scene context
3. Scene objective
4. Audience effect
5. Conflict and turn
6. Formal strategy
7. Blocking
8. Performance direction
9. Production design
10. Shot plan
11. Camera, movement, and lenses
12. Lighting and palette
13. Editing rhythm
14. Sound strategy
15. Practical constraints
16. Proof of intent

Oppgaven krever at alle avdelingene bygger samme dramatiske sceneutvikling. Den lager ikke et parallelt Director-format.

## Innleveringskrav

Director-panelet kontrollerer den aktive scenen mot den aktive eksamensoppgaven. Eksamen kan bare leveres når:

- prosjektet tilhører filmen som ble valgt i Film School
- alle 16 regifelt i den aktive scenen er utfylt
- minst tre shot cards er fullstendig utfylt
- hvert tellende shot card har alle ni eksisterende shot-felt

Uferdige ekstra shot cards kan ligge i prosjektet, men de teller ikke mot minstekravet.

Når kravene er oppfylt, vises knappen `Lever regieksamen`. Innleveringen registrerer:

- film og filmadresse
- aktiv scene og scenetittel
- eksamensoppgavens opprettelsestid
- prosjektversjonen som ble levert
- antall utfylte regifelt
- antall komplette og totale shot cards
- innleveringsdato

Dersom prosjektet endres etter innlevering, varsler Director-panelet og tilbyr `Lever oppdatert versjon`.

## Fullført-status

En gyldig innlevering gjør at Film School-forsiden viser `Regi-grunnkurs fullført` med:

- referansefilm
- levert scene
- dato og klokkeslett
- 16 registrerte regifelt
- antall komplette shot cards
- direkte åpning av det leverte Director-prosjektet

Brukeren kan senere starte en ny eksamensoppgave uten at den tidligere fullført-statusen forsvinner. En ny innlevering erstatter den lagrede innleveringsposten.

## Lagring

Den avsluttende oppgaven lagres i:

- `hg_film_school_ground_course_capstone_assignment_v1`

Den leverte eksamen lagres i:

- `hg_film_school_ground_course_capstone_submission_v1`

Selve Director-prosjektet fortsetter å bruke den eksisterende filmbaserte lagringsnøkkelen. Innleveringsposten kopierer ikke hele prosjektet, men peker på film, scene og prosjektets `updatedAt` ved innlevering.

Director-oppdragskortet velger fortsatt den nyeste oppgaven som matcher aktiv film, men støtter både de fem kapitteloppgavene og den samlede regieksamen.

## Avgrensning

Endringen påvirker ikke:

- progresjonsdataene i de fem eksisterende kursene
- Film Atlas-katalogposter
- Production Cases
- research-verifisering
- strukturen i lagrede Director-prosjekter
- backend eller brukerkontoer
