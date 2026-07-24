import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const forrestGumpVerificationRecords = [
  {
    scenarioId: "scenario_forrest_gump_1994",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's long adaptation history, Paramount studio production, performance-led historical panorama, period design and costume continuity, anamorphic multi-stock photography, direct KEM editing, point-of-view digital sound, score-and-song chronology, archival presidential composites, crowd multiplication and Lieutenant Dan body effects are supported by institutional, guild, archival and filmmaker sources.",
    sources: [
      {
        title: "Forrest Gump",
        publisher: "AFI Catalog of Feature Films",
        url: "https://catalog.afi.com/Film/55201-FORREST-GUMP",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI documents development from Winston Groom's novel through Eric Roth's screenplay, the principal creative credits, August 1993 production start, Panavision and Technicolor presentation, Dolby and DTS sound, archival composites, crowd multiplication and the digital removal of Gary Sinise's legs."
      },
      {
        title: "Forrest Gump",
        publisher: "Library of Congress",
        url: "https://www.loc.gov/item/94515714/",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The Library of Congress record confirms the Paramount production, novel adaptation, principal cast and craft credits, copyright history and the film's 2011 inclusion in the National Film Registry."
      },
      {
        title: "The 67th Academy Awards",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/1995",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing", "sound"],
        note: "The Academy record documents wins for picture, directing, Tom Hanks, Eric Roth's adapted screenplay, Arthur Schmidt's editing and the visual-effects team, alongside nominations for cinematography, sound and sound-effects editing."
      },
      {
        title: "A Touch of Magic at The Academy",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/calendar/touch-magic-academy",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing"],
        note: "The Academy craft program identifies the combined digital artistry and specially designed illusionary wheelchair used to make Gary Sinise's Lieutenant Dan appear without legs while preserving character performance."
      },
      {
        title: "Don Burgess, ASC: Making Each Shot Work",
        publisher: "American Society of Cinematographers",
        url: "https://theasc.com/articles/don-burgess-asc-making-each-shot-work",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "Burgess describes Forrest Gump as his breakthrough collaboration with Robert Zemeckis, explains the director's invitation to solve story problems with every cinematographic tool and recalls the South Carolina Vietnam production and the realization that the team was making something unprecedented."
      },
      {
        title: "About Schmidt: The Legendary Editor of Back to the Future Revisits His Past",
        publisher: "CineMontage",
        url: "https://cinemontage.org/schmidt-legendary-editor-back-future-revisits-past/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "editing"],
        note: "Arthur Schmidt states that he avoided overcutting and false emotional emphasis, making the edit as simple, honest and direct as Forrest's character; he also records the film's scale, successful preview and Academy recognition."
      },
      {
        title: "A Few Notes on Forrest Gump",
        publisher: "FilmSound.org",
        url: "https://www.filmsound.org/randythom/forrest.htm",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "editing", "sound"],
        note: "Randy Thom details early sound involvement, Pro Tools temp work synchronized to the KEM edit, Vietnam point-of-view effects, mortar distance, fifty pop songs, score integration, the Skywalker mix, restrained surrounds and Dolby Digital, DTS and analogue release formats."
      },
      {
        title: "Forrest Gump's Production Designer Breaks Down Lt. Dan's First Scene",
        publisher: "Vanity Fair",
        url: "https://www.vanityfair.com/video/watch/forrest-gump-s-production-designer-breaks-down-the-vietnam-scene",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography"],
        note: "Production designer Rick Carter explains his collage-based research into the Vietnam and Civil Rights eras and breaks down how landscape, practical staging, military detail, effects preparation and personal historical memory construct the Vietnam sequence."
      },
      {
        title: "Well, at Least There Was Consistency",
        publisher: "Los Angeles Times",
        url: "https://www.latimes.com/archives/la-xpm-1994-07-07-ls-12639-story.html",
        sourceKind: "trade_feature",
        supports: ["overall"],
        note: "The contemporary costume feature identifies Joanna Johnston and documents eighty-three clothing changes, repeated blue plaid shirts, pressed chinos, striped socks and other continuity choices that keep Forrest visually stable across changing decades."
      },
      {
        title: "Forrest Gump Q&A with Screenwriter Eric Roth",
        publisher: "American Cinema Editors",
        url: "https://americancinemaeditors.org/event/forrest-gump-qa-with-screenwriter-eric-roth-zoom-event/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing"],
        note: "ACE places Eric Roth's adaptation, Arthur Schmidt's editing and Zemeckis' combination of human drama and technical craft at the center of the decades-spanning structure and its enduring cultural reception."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
