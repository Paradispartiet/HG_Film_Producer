import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const final1970sVerificationRecords = [
  {
    scenarioId: "scenario_a_clockwork_orange_1971",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The constructed near-future, three-part visual progression, existing modernist locations, class-coded costume, musical counterpoint and institutional conditioning system are supported by AFI, BFI and American Cinematographer records.",
    sources: [
      {
        title: "A Clockwork Orange",
        publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/54041-A-CLOCKWORKORANGE",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing"],
        note: "Institutional production record confirming Kubrick's producing, writing and directing roles, Bill Butler's editing, John Barry's production design and the underlying Burgess adaptation."
      },
      {
        title: "The Old Ultra-Violence: A Clockwork Orange",
        publisher: "American Cinematographer",
        url: "https://staging.ascmag.com/articles/the-old-ultra-violence-a-clockwork-orange",
        sourceKind: "trade_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Detailed craft history documenting John Alcott's visual progression, camera and lighting equipment, Kubrick and Butler's editing process and Wendy Carlos's electronic-classical music system."
      },
      {
        title: "A Clockwork Orange (1971)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/42658f34-6e1f-5712-990e-4a64564d666f/a-clockwork-orange",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "sound"],
        note: "BFI overview placing the adaptation, Nadsat dialect, modish interiors, Wendy Carlos score, state aversion therapy and exhibition controversy in British film history."
      },
      {
        title: "Stanley Kubrick's Britain",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/features/stanley-kubricks-britain/",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography"],
        note: "Location study documenting Thamesmead, Brunel University and other existing British spaces used to assemble the film's recognisable but transformed dystopian future."
      }
    ]
  },
  {
    scenarioId: "scenario_amarcord_1973",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The episodic autobiographical structure, Cinecittà reconstruction, grotesque ensemble, Fascist provincial context, Rotunno colour, Donati design and Rota memory theme are supported by Criterion, BFI and Cannes records.",
    sources: [
      {
        title: "Amarcord",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/208-amarcord",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Institutional edition record documenting Cinecittà's Rimini reconstruction, Fascist-era social satire, Rotunno photography, Donati sets and costumes, Rota music and Mastroianni editing."
      },
      {
        title: "Amarcord: Federico of the Spirits",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/current/posts/445-amarcord-federico-of-the-spirits",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Critical account of the imaginary town, projected character types, caricature, dream logic and Fellini's image-and-face-led method of constructing a collective remembered world."
      },
      {
        title: "Amarcord",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/90096ab6-3f75-50a9-a167-f9da9cc38bfd/amarcord",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "sound"],
        note: "BFI record situating the film in Fellini's childhood, provincial Fascist Italy, carnivalesque later style, episodic structure and international Academy recognition."
      },
      {
        title: "Amarcord",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/f/amarcord/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "Festival archive confirming the 1974 out-of-competition opening presentation and principal credits for Fellini, Tonino Guerra, Giuseppe Rotunno and Nino Rota."
      }
    ]
  },
  {
    scenarioId: "scenario_scenes_from_a_marriage_1974",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The six-part television structure, low-risk 16 mm production, accelerated schedule, actor collaboration, close-up cinematography and later theatrical compression are supported by the Ingmar Bergman Foundation and Criterion records.",
    sources: [
      {
        title: "Scenes from a Marriage",
        publisher: "Ingmar Bergman Foundation",
        url: "https://www.ingmarbergman.se/en/production/scenes-marriage",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Primary production archive documenting Bergman's television conception, six-part script, 16 mm format, low-cost rationale, cramped studio, rapid schedule, actor contributions and 35 mm theatrical abridgement."
      },
      {
        title: "Media gallery for Scenes from a Marriage",
        publisher: "Ingmar Bergman Foundation",
        url: "https://www.ingmarbergman.se/en/production/scenes-marriage/media",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Archival shooting-script pages, set photographs and production notes corroborating the screenplay timeline, Bergman-Nykvist collaboration and Ullmann-Josephson performance process."
      },
      {
        title: "Scenes from a Marriage",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/710-scenes-from-a-marriage",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Edition record confirming the five-hour six-part television version, three-hour theatrical cut, 16 mm intimate close-ups, 1.33:1 frame and monaural presentation."
      },
      {
        title: "Scenes from a Marriage: Natural Antagonists",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/current/posts/318-scenes-from-a-marriage-natural-antagonists",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Historical essay documenting the modest television budget, Stockholm and Fårö production, autobiographical material and concentration on two repertory actors over an extended relationship chronology."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
