export type ProductionCaseVerificationArea =
  | "overall"
  | "screenplay"
  | "cinematography"
  | "editing"
  | "sound";

export type ProductionCaseVerificationSource = {
  readonly title: string;
  readonly publisher: string;
  readonly url: string;
  readonly sourceKind: "filmmaker_interview" | "trade_feature" | "film_institute" | "archive_feature";
  readonly supports: readonly ProductionCaseVerificationArea[];
  readonly note: string;
};

export type ProductionCaseVerificationRecord = {
  readonly scenarioId: string;
  readonly status: "verified";
  readonly verifiedAt: string;
  readonly summary: string;
  readonly sources: readonly ProductionCaseVerificationSource[];
};

const productionCaseVerificationRecords = {
  scenario_the_machinist_2004: {
    scenarioId: "scenario_the_machinist_2004",
    status: "verified",
    verifiedAt: "2026-07-19",
    summary: "The brief's nightmare pacing, industrial-location pressure, geographic dislocation, and deliberately timeless visual approach are supported by a director interview and institutional production records.",
    sources: [
      {
        title: "Brad Anderson: An Interview with the Director of Session 9 and The Machinist",
        publisher: "ScreenAnarchy",
        url: "https://screenanarchy.com/2004/10/brad-anderson-an-interview-with-the-director-of-session-9-and-the-machinist.html",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Anderson describes a languid, old-fashioned nightmare structure, menace in mundane objects, industrial noise, and the deliberate removal of cultural markers to create dislocation."
      },
      {
        title: "The Machinist",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/machinist",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Institutional production record confirming the 35mm production and the credited cinematographer, editor, composer, and art director behind the film's craft system."
      },
      {
        title: "The Machinist",
        publisher: "Barcelona Film Commission",
        url: "https://www.bcncatfilmcommission.com/es/node/7197",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography"],
        note: "Official location record confirming the Barcelona-area industrial, transport, amusement-park, and infrastructure locations used to construct the film's displaced world."
      }
    ]
  },
  scenario_the_lives_of_others_2006: {
    scenarioId: "scenario_the_lives_of_others_2006",
    status: "verified",
    verifiedAt: "2026-07-19",
    summary: "The brief's surveillance-as-action structure, muted institutional world, analogue listening system, restrained performances, and conscience-driven dramatic arc are supported by filmmaker and cinematographer accounts.",
    sources: [
      {
        title: "How we made The Lives of Others",
        publisher: "The Guardian",
        url: "https://www.theguardian.com/film/2020/nov/23/how-we-made-the-lives-of-others-stasi-florian-henckel-von-donnersmarck-sebastian-koch",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "sound"],
        note: "The writer-director and cast describe the film's origin in listening, its Stasi research, low-budget production, and restrained moral transformation."
      },
      {
        title: "An Interview with Hagen Bogdanski",
        publisher: "Closely Observed Frames",
        url: "https://www.closelyobservedframes.com/post/an-interview-with-hagen-bogdanski",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "Bogdanski describes extensive GDR visual research using photographs, books, films, and personal memory."
      },
      {
        title: "The Lives of Others",
        publisher: "BFI Sight and Sound",
        url: "https://old.bfi.org.uk/sightandsound/review/3814",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "sound"],
        note: "The BFI review documents the deliberately muted production design, sombre cinematography, music, and restrained performance system."
      }
    ]
  },
  scenario_lost_in_translation_2003: {
    scenarioId: "scenario_lost_in_translation_2003",
    status: "verified",
    verifiedAt: "2026-07-19",
    summary: "The brief's dislocated hotel-and-city mood, intimate observation, drifting rhythm, improvisational production, 35mm texture, and music-led emotional world are supported by production reporting and Coppola's own account.",
    sources: [
      {
        title: "Sofia Coppola's Lost in Translation",
        publisher: "Filmmaker Magazine",
        url: "https://filmmakermagazine.com/archives/issues/fall2003/features/tokyo_story.php",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Production feature documenting the 35mm format, on-the-run Tokyo photography, intimate close-ups, hotel views, improvised scenes, Avid edit, and music-driven karaoke production."
      },
      {
        title: "I never expected people to connect with it so much – Sofia Coppola on Lost in Translation",
        publisher: "Little White Lies",
        url: "https://lwlies.com/article/sofia-coppola-lost-in-translation-interview",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "sound"],
        note: "Coppola describes the jet-lagged, dreamy neon reference, Blade Runner influence, and Tokyo dream-pop music used to create the romantic dislocation."
      },
      {
        title: "Behind the scenes with Sofia Coppola: memories from a life in film",
        publisher: "The Guardian",
        url: "https://www.theguardian.com/film/2023/aug/27/sofia-coppola-archive-memoir-memories-book-extract-lost-translation-virgin-suicides",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "sound"],
        note: "Coppola recounts building the story from Tokyo impressions, the Park Hyatt setting, Tokyo Dream Pop mixes, and the small crew running through Tokyo at night."
      }
    ]
  },
  scenario_12_angry_men_1957: {
    scenarioId: "scenario_12_angry_men_1957",
    status: "verified",
    verifiedAt: "2026-07-19",
    summary: "The brief's one-room blocking, argument-led escalation, tightening faces, controlled lens progression, and lean production method are supported by production history and cinematography analysis.",
    sources: [
      {
        title: "Inside the Making of 12 Angry Men",
        publisher: "Turner Classic Movies",
        url: "https://www.tcm.com/articles/473067/inside-the-making-of-12-angry-men",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Production history documenting the real-jury-room rehearsals, 365 planned setups, claustrophobic set strategy, and 17-day shoot."
      },
      {
        title: "12 Angry Men: Lumet's Faces",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/current/posts/2076-12-angry-men-lumet-s-faces",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing"],
        note: "Criterion analysis documents the shift from wide-angle to telephoto lenses, reduced depth, and increasing emphasis on faces as pressure rises."
      },
      {
        title: "12 Angry Men",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/27871-12-angry-men",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography"],
        note: "Archival edition record identifying the production-history, Lumet, Reginald Rose, and Boris Kaufman materials used to document the film's construction."
      }
    ]
  }
} as const satisfies Record<string, ProductionCaseVerificationRecord>;

export function getProductionCaseVerification(
  scenarioId: string,
): ProductionCaseVerificationRecord | undefined {
  return productionCaseVerificationRecords[
    scenarioId as keyof typeof productionCaseVerificationRecords
  ];
}

export function getVerifiedProductionCaseIds(): readonly string[] {
  return Object.keys(productionCaseVerificationRecords);
}

export function getProductionCaseVerificationRecords(): readonly ProductionCaseVerificationRecord[] {
  return Object.values(productionCaseVerificationRecords);
}
