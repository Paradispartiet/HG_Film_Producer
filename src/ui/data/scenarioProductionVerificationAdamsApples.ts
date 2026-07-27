import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const adamsApplesVerificationRecords = [
  {
    scenarioId: "scenario_adam_s_apples_2005",
    status: "verified",
    verifiedAt: "2026-07-27",
    summary: "The case's Danish-German production, modern Book of Job screenplay, cast-specific writing and repeated ensemble rehearsal, rural vicarage design, Sebastian Blenkov 35 mm CinemaScope photography, Anders Villadsen editing, credited sound and music systems, award-winning visual effects and major Danish and international reception are supported by institutional records, filmmaker interviews, trade coverage and official awards sources.",
    sources: [
      {
        title: "Adam's Apples",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/adams-aebler",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "DFI provides the religious-fable premise, Denmark-Germany production identity, M&M and partner credits, producers, complete principal cast and departments, 35 mm CinemaScope colour format, Dolby SR, visual-effects, special-effects, stunt and post-production personnel."
      },
      {
        title: "Adams Äpfel",
        publisher: "filmportal.de",
        url: "https://www.filmportal.de/en/movie/adams-apfel_e9ee9dcec2144aadac2f1d5c830fef84",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "filmportal.de records Anders Thomas Jensen, M&M Productions and coproduction partners, Sebastian Blenkov, Anders Villadsen, Mia Stensgaard, Anders Engelbrecht, Jane Whittaker, makeup, sound design, music and the 35 mm 2.35:1 Dolby SR specification."
      },
      {
        title: "Adam's Apples",
        publisher: "European Film Academy",
        url: "https://www.europeanfilmawards.eu/efa-movie/adams-apples/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The European Film Academy documents the Danish-German film, principal writing, directing, producing, cast and craft credits, Jensen's European Screenwriter nomination and the later European Film Awards People's Choice recognition."
      },
      {
        title: "Anders Thomas Jensen - Director: Fun with cruelty",
        publisher: "Cineuropa",
        url: "https://cineuropa.org/en/interview/64596/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "editing"],
        note: "Jensen explains the film's origin in accumulated Danish-screen suffering, confirms that he wrote for the intended actors, describes extensive preparation, repeated script readings and on-set rehearsal, and explains how that precision created room for improvisation and moderated performance."
      },
      {
        title: "Succes for Adams æbler",
        publisher: "Filmmagasinet Ekko",
        url: "https://www.ekkofilm.dk/artikler/succes-for-adams-aebler/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing"],
        note: "Ekko documents the strong Danish opening and contemporary critical reception and records Jensen's editing principle of removing heavily ironic dialogue when it broke a scene's emotional truth, preserving the film's universe rather than maximizing isolated jokes."
      },
      {
        title: "Adams æbler",
        publisher: "Robert Prisen",
        url: "https://www.robertprisen.dk/vaerker/adams-aebler",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The official Danish Film Academy record identifies M&M Productions, Jensen, Tivi Magnusson and Mie Andreasen and documents the 2006 Robert wins for Danish feature, original screenplay and visual effects by Lars K. Andersen, Hummer Højmark and Peter Hjorth."
      },
      {
        title: "Adam's Apples",
        publisher: "San Francisco Film Society",
        url: "https://history.sffs.org/films/film_details.php?id=64&searchfield=",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The festival archive records the 2005 Danish feature, runtime, Jensen and the cast and places the film's profane behaviour, black comedy, biblical test and Bee Gees refrain within its international festival circulation."
      },
      {
        title: "Adams æbler",
        publisher: "Nordisk Film Plus",
        url: "https://nordiskfilmplus.com/dk/en/film/adams-aebler/28491_929372c",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "sound"],
        note: "Nordisk Film's catalog preserves the film's Danish distribution context and describes the collision of faith, resistance, fragility, black humour and the apple-pie task, supporting its continuing popular afterlife and the central role of the recurring musical-comic tone."
      },
      {
        title: "TrustNordisk boards upcoming Zentropa feature by acclaimed director Anders Thomas Jensen",
        publisher: "TrustNordisk",
        url: "https://trustnordisk.com/content/trustnordisk-boards-upcoming-zentropa-feature-by-acclaimed-director-anders-thomas-jensen-starring-mads-mikkelsen-and-nikolaj-lie-kaas-1",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "TrustNordisk characterizes Jensen's directorial work through dark humour, unique storytelling and quirky closed universes and records Adam's Apples as an internationally successful title, supporting the film's authorial tradition and sales legacy."
      },
      {
        title: "Anders Thomas Jensen, the captain of the Viking ship",
        publisher: "Nordic Film and TV Fund",
        url: "https://nordiskfilmogtvfond.com/news/stories/anders-thomas-jensen-the-captain-of-the-viking-ship",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The Nordic industry profile places Adam's Apples among Jensen's five directed features, documents the films' substantial Danish admissions and compares his immediately identifiable signature with Nordic auteurs Roy Andersson, Aki Kaurismäki and Dag Johan Haugerud."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
