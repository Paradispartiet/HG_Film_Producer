import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const amourProductionCaseVerification = {
  scenarioId: "scenario_amour_2012",
  status: "verified",
  verifiedAt: "2026-08-27",
  summary: "Amour is verified as a 2012 Chapter 18 Production Case in which a France-Germany-Austria public co-production, a highly controlled studio apartment, near-chronological performance work and an early ARRIRAW/Codex digital-negative workflow functioned as one production system. Festival de Cannes anchors the competition version at 127 minutes and credits Michael Haneke as writer-director, Darius Khondji as cinematographer, Jean-Vincent Puzos as production designer, Monika Willi and Nadine Muse as editors, Guillaume Sciama and Jean-Pierre Laforce for sound, and Margaret Menegoz, Stefan Arndt, Veit Heiduschka and Michael Katz as producers. The Cannes press kit documents France 3 Cinéma, ARD Degeto, Bayerischer Rundfunk and Westdeutscher Rundfunk as co-production partners; participation from France Télévisions, Canal+, Ciné+ and ORF; and support including CNC, Région Île-de-France, FFA, Medienboard Berlin-Brandenburg, the CNC/FFA mini-treaty, the Austrian Film Institute, Vienna Film Fund and Eurimages. Haneke's Austrian Films interview states that after the theatre and bus material the film was shot in studio outside Paris and that the floor plan came from his parents' Vienna apartment, reconstructed as a French interior. British Cinematographer reports eight weeks of prep, principal photography at Éclair Studios from February to April 2011 on five-day weeks, close adherence to storyboards and computer previsualisation, parquet engineered for smooth dolly movement, ARRI Alexa acquisition, ARRIRAW to Codex, TSF camera rental, Digimage dailies/transfers, a reported lens package including 35 mm Master Primes and 40 mm and 50 mm Cooke S4/S5 lenses, and a lighting strategy using 20Ks through windows, spacelights/daylight ambience, bounced Lekos and practicals. Khondji also reports that almost the entire film was shot in chronological order. The official press kit documents stand-ins, a physiotherapy consultant, nursing consultant and piano coach; contemporary Haneke reporting documents mechanical bed adjustments for a physically difficult scene. These sources support a high-confidence co-production, studio, digital-negative, lighting-continuity and performer-care case while leaving exact financing shares, exact set dimensions, exact Alexa submodel, exact Codex model, exact shot-lens assignments, exposure values, detailed sound equipment and exact DI/mastering settings outside the verified layer. A secondary cinematography article says the apartment was based on Haneke's grandmother's apartment, while Haneke himself says his parents' apartment; the primary Haneke account is retained and the discrepancy remains explicit rather than silently resolved.",
  sources: [
    {
      title: "Amour",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/f/amour/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record supporting 2012, France-Germany-Austria, 127 minutes, Palme d'Or status and principal writing, direction, cinematography, production-design, editing and sound credits."
    },
    {
      title: "Amour bilingual press kit",
      publisher: "Festival de Cannes / Les Films du Losange",
      url: "https://cdn.festival-cannes.com/media/uploads/2023/03/76898.pdf",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official press kit supporting 2h07, 1.85, 4K-2K delivery notation, principal producers, France/Germany/Austria co-production and public-support structure, camera operator Jörg Widmer, stand-ins, physiotherapy and nursing consultants, piano coach and detailed crew credits."
    },
    {
      title: "Amour",
      publisher: "Austrian Films",
      url: "https://www.austrianfilms.com/film/amour",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Austrian institutional record confirming the three-country production, producers, digital format, 1.85 ratio, principal craft credits and Wega/Les Films du Losange/X-Filme production structure. Its current runtime differs from Cannes and is preserved as catalogue-version variance rather than used to overwrite the Cannes anchor."
    },
    {
      title: "Michael Haneke talks about AMOUR",
      publisher: "Austrian Films",
      url: "https://www.austrianfilms.com/news/en/michael_haneke_talks_about_amour",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Haneke's own account that after the initial theatre and bus scenes the film was shot in studio outside Paris, with the apartment floor plan based on his parents' Vienna apartment and rebuilt as a French lived-in interior."
    },
    {
      title: "Darius Khondji AFC / Amour",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/darius-khondji-afc-amour/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Khondji interview documenting eight weeks prep, Éclair Studios principal photography February-April 2011, five-day weeks, storyboard/computer previs, dolly-floor testing, ARRI Alexa, ARRIRAW-to-Codex, TSF, Digimage, reported Master Prime/Cooke lens package, naturalistic lighting tools and almost-chronological shooting."
    },
    {
      title: "Michael Haneke investigates ages-old issues in Amour",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/envelope/la-xpm-2012-dec-13-la-en-michael-haneke-amour-20121213-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Haneke interview supporting the single-location design challenge, parents-apartment floor plan, detailed set dressing and mechanical adjustments to the bed for a physically demanding scene that the director and assistant tested for performer safety."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
