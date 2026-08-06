import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const virginMountainProductionCaseVerification = {
  scenarioId: "scenario_virgin_mountain_2015",
  status: "verified",
  verifiedAt: "2026-08-06",
  summary: "Virgin Mountain's actor-specific airport-origin screenplay, small-crew Icelandic return, Icelandic-Danish RVK/Nimbus coproduction, exact non-classical lead performance, practical routine-based design, Scope character framing, prolonged ending search, credited Dolby 5.1 sound, Slowblow music and major Tribeca and Nordic recognition are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Fúsi",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/virgin-mountain",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI verifies the 94-minute Icelandic-Danish feature, RVK Studios and Nimbus Film production, financing bodies, Scope and Dolby 5.1 presentation and the complete principal credits for writing, photography, editing, design, costume, makeup and sound."
    },
    {
      title: "Virgin Mountain",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/virgin-mountain/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "EFA provides Kári's director statement that the film is a close character study written specifically for Gunnar Jónsson and verifies the image, editing, design, costume, sound and original-score departments."
    },
    {
      title: "My films are like sitcoms, about characters in situations",
      publisher: "Nordisk Film & TV Fond",
      url: "https://nordiskfilmogtvfond.com/news/stories/my-films-are-sitcoms-about-characters-situations",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Kári explains his return to a small familiar Icelandic crew, the airport luggage-vehicle image, actor-specific development, Jónsson's exact preparation across a two-month shoot, the producers' patience during editing and his own musical practice."
    },
    {
      title: "Interview med Dagur Kári: Film skal være en form for orgasme",
      publisher: "Soundvenue",
      url: "https://soundvenue.com/film/2016/07/interview-med-dagur-kari-film-skal-vaere-en-form-for-orgasme-209560",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Kári describes tailoring the film to Gunnar Jónsson, using humour to open painful material, deliberately misleading romantic-comedy expectations and shooting without a settled ending before finding it during roughly a year of editing."
    },
    {
      title: "Dagur Kári over Virgin Mountain",
      publisher: "Filmkrant",
      url: "https://filmkrant.nl/interview/dagur-kari-over-virgin-mountain/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The interview traces Kári's long wish to build a dramatic lead around Jónsson, the airport-toy metaphor and the decision to construct an adult working character whose routine and physical presence carry the film."
    },
    {
      title: "Interview mit Dagur Kari zu Virgin Mountain",
      publisher: "epd Film",
      url: "https://www.epd-film.de/meldungen/2015/interview-mit-dagur-kari-zu-virgin-mountain",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Kári explains trust and spontaneity as directing tools, confronting audience prejudice through Fúsi's appearance, Jónsson's non-classical but technically precise acting and Baltasar Kormákur's involvement throughout production."
    },
    {
      title: "2015 Tribeca Film Festival Announces Award Winners",
      publisher: "Tribeca Film Festival",
      url: "https://tribecafilm.com/press-center/press-releases/2015-tribeca-film-festival-announces-award-winners",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Tribeca records the Founders Award for Best Narrative Feature, Best Screenplay and Best Actor for Gunnar Jónsson and identifies the film's mixture of humour, pathos, loneliness, bullying, mental illness and humane transformation."
    },
    {
      title: "Winner of the Nordic Council Film Prize 2015",
      publisher: "Nordic Council",
      url: "https://www.norden.org/en/nominee/winner-nordic-council-film-prize-2015",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The Nordic Council records the prize for writer-director Dagur Kári and producers Baltasar Kormákur and Agnes Johansen and describes the film as a simple, visually inventive and dignified character portrait."
    },
    {
      title: "Virgin Mountain",
      publisher: "RVK Studios",
      url: "https://rvkstudios.is/portfolio-item/virgin-mountain-fusi/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The production company's official page verifies Kári, Jónsson, Kormákur, Johansen, the RVK/Nimbus structure, BAC Films sales and support from the Icelandic Film Centre, DFI, Nordic Film & TV Fund and Eurimages."
    },
    {
      title: "Virgin Mountain: tender and wickedly funny romcom from Iceland",
      publisher: "Euronews",
      url: "https://www.euronews.com/culture/2016/01/08/virgin-mountain-tender-and-wickedly-funny-romcom-from-iceland",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The contemporary feature identifies the airport job, miniature war-game routine, disruption by Sjöfn and the productive contrast between Jónsson's large physical presence and delicate performance in the bittersweet character study."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
