import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const aPigeonSatVerificationRecords = [
  {
    scenarioId: "scenario_a_pigeon_sat_on_a_branch_reflecting_on_existence_2014",
    status: "verified",
    verifiedAt: "2026-07-29",
    summary: "The case's Living Trilogy placement, Studio 24 independence, Sweden-Norway-France-Germany production, linked vignette screenplay, nonprofessional ensemble, hand-built hyperreal sets and trompe-l'oeil, fixed digital deep-focus photography, soft studio lighting, Alexandra Strauss editing, detailed sound and music credits, selective visual effects and Golden Lion and European Comedy reception are supported by ten institutional, official, trade and filmmaker sources.",
    sources: [
      {
        title: "A Pigeon Sat on a Branch Reflecting on Existence",
        publisher: "Roy Andersson Film Production",
        url: "https://www.royandersson.com/pigeon/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official film record provides the Sweden-Norway-France-Germany production partners, Studio 24 company, Andersson screenplay, Borbás and Pálos cinematography, Strauss editing, set, wardrobe, trompe-l'oeil, VFX, sound recording, mix, foley, music and principal cast credits."
      },
      {
        title: "A Pigeon Sat on a Branch Reflecting on Existence",
        publisher: "European Film Academy",
        url: "https://www.europeanfilmawards.eu/efa-movie/a-pigeon-sat-on-a-branch-reflecting-on-existence/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "EFA records Andersson's writing and direction, Pernilla Sandström production, the complete principal visual and sound credits, four production countries, the director's Bruegel statement and the European Comedy award and nominations."
      },
      {
        title: "En duva satt på en gren och funderade på tillvaron",
        publisher: "La Biennale di Venezia",
        url: "https://asac.labiennale.org/attivita/cinema/249094",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The Venice archive documents the 2014 competition, Golden Lion, Roy Andersson Filmproduktion, screenplay, cinematographers, editor, production-design and costume teams, multinational identity, DCP colour format and 101-minute festival version."
      },
      {
        title: "Doves and cries and hypnotists get December's production funding",
        publisher: "Swedish Film Institute",
        url: "https://www.filminstitutet.se/en/about-us/press-service/press-archive-old/2012/doves-and-cries-and-hypnotists-get-decembers-production-funding/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "SFI records the project as the final film in Andersson's trilogy about being human, identifies Pernilla Sandström and Roy Andersson Filmproduktion and documents the Swedish production support and dramatic premise."
      },
      {
        title: "Nordisk Film & TV Fond Backs Palme, Putin, Purge, Pigeon And Egyptian Revolution",
        publisher: "Nordisk Film & TV Fond",
        url: "https://nordiskfilmogtvfond.com/news/stories/nordisk-film-and-tv-fond-backs-palme-putin-purge-pigeon-and-egyptian-revolution",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay"],
        note: "The Nordic industry record documents NOK 2.2 million production support, NOK 2.5 million including development, the third Living Trilogy chapter, the recurring two-salesman vignette structure, Studio 24 production and Coproduction Office partnership."
      },
      {
        title: "Roy Andersson: Films that are universal and timeless",
        publisher: "Cineuropa",
        url: "https://cineuropa.org/en/interview/262571/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Andersson explains the film's empathy, vulnerability and humiliation themes, historical anachronisms, move from realism into abstraction, Otto Dix and New Objectivity influence, deep-focus studio method, muted human palette, international funding and digital production."
      },
      {
        title: "Film of the week: A Pigeon Sat on a Branch Reflecting on Existence",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/sight-and-sound/reviews/film-week-pigeon-sat-branch-reflecting-existence",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "BFI places the film as the final Living Trilogy chapter and analyses the virtually fixed camera, vitrine-like staging, corpse-pale ensemble, time shifts, repeated phrases and tunes, recurring salesmen, debts, animal sound, marching troops and colonial horror."
      },
      {
        title: "Roy Andersson: I'm trying to show what it's like to be human",
        publisher: "The Guardian",
        url: "https://www.theguardian.com/film/2014/aug/28/roy-andersson-pigeon-sat-branch-reflecting-existence",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "The Studio 24 interview documents that almost all scenes were built and photographed in the Stockholm studio, Andersson's rejection of real environments for hand-built trompe-l'oeil hyperreality and his casting of distinctive nonprofessional people found in everyday life."
      },
      {
        title: "A Pigeon Sat on a Branch Reflecting on Existence – An Interview with Cinematographer István Borbás",
        publisher: "4:3",
        url: "https://fourthreefilm.com/2015/06/a-pigeon-sat-on-a-branch-reflecting-on-existence-an-interview-with-cinematographer-istvan-borbas/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "Borbás describes translating Andersson's sketches into images and the decades-long development of soft light, pale makeup, patterned floors, wide-angle lenses, exact sets and deep-focus tableau precision through Studio 24 commercial experiments."
      },
      {
        title: "A Pigeon Sat on a Branch Reflecting on Existence",
        publisher: "Magnolia Pictures",
        url: "https://www.magpictures.com/profile.aspx?id=f28ff880-09ce-4954-bec6-c86e50079bd8",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The distributor record and production materials preserve the human-condition vignette premise, novelty-salesman route, historical and colonial episodes and credits for cinematography, production design, costume, makeup, sound, sound mixing, editing, casting and traditional music."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
