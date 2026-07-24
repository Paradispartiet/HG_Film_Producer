import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theStraightStoryVerificationRecords = [
  {
    scenarioId: "scenario_the_straight_story_1999",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "Mary Sweeney and John Roach's fact-based screenplay, rapid StudioCanal-backed production, chronological Iowa-to-Wisconsin route shoot, Richard Farnsworth's embodied performance, Jack Fisk and Patricia Norris's regional material world, Freddie Francis's 35 mm anamorphic photography, Mary Sweeney's sound-responsive editing, David Lynch's practical sound design, Angelo Badalamenti's restrained score, Cannes premiere and Academy recognition are supported by ten inspectable sources.",
    sources: [
      {
        title: "The Straight Story",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/f/the-straight-story/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official Cannes record confirms the 1999 Competition selection, Alvin Straight's 1994 six-week lawn-mower journey, Lynch's direction, Sweeney and Roach's screenplay, Freddie Francis photography, Mary Sweeney editing, Jack Fisk design and Angelo Badalamenti music."
      },
      {
        title: "David Lynch's indie empire",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/sight-and-sound/features/david-lynch-indie-empire",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing"],
        note: "BFI documents Mary Sweeney's Midwestern development of the project, Lynch reading the script in June 1998, StudioCanal financing arranged the following month, Neal Edelstein's production role and favorable creative terms."
      },
      {
        title: "David Lean Lecture: David Lynch",
        publisher: "BAFTA",
        url: "https://www.bafta.org/media-centre/press-releases/david-lean-lecture-david-lynch/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Lynch describes the film as linear yet his most abstract experiment, seeking strong emotion through a limited balance of image, sound, music, words and visual appearance."
      },
      {
        title: "The 72nd Academy Awards",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/2000",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The Academy's official ceremony record confirms Richard Farnsworth's nomination for Actor in a Leading Role for The Straight Story, documenting the performance's contemporary recognition."
      },
      {
        title: "Paesaggi sonori: The Straight Story – Una storia vera",
        publisher: "Cineteca di Bologna",
        url: "https://cinetecadibologna.it/distribuzione/approfondimento/paesaggi-sonori-the-straight-story-una-storia-vera/",
        sourceKind: "film_institute",
        supports: ["overall", "editing", "sound"],
        note: "Cineteca di Bologna explains Lynch's exact balancing of image, sound, music and dialogue, Badalamenti's decisive score, the prominence of silence and practical sounds, and Sweeney's willingness to recut images to create space for sound."
      },
      {
        title: "The Straight Story press kit",
        publisher: "LynchNet",
        url: "https://www.lynchnet.com/sstory/press.html",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The archived original production notes list the principal departments and document chronological filming along Alvin's Iowa and Wisconsin route during harvest, work among residents who remembered him, real weather, organic beard growth and Richard Farnsworth's physical identification with the role."
      },
      {
        title: "The story behind The Straight Story",
        publisher: "Texas Public Radio",
        url: "https://www.tpr.org/arts-culture/2020-08-26/the-story-behind-the-straight-story",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "Co-writer John Roach describes developing the screenplay with Mary Sweeney from Alvin Straight's real journey and organizing its roadside meetings around connection, communion, ageing and family reconciliation."
      },
      {
        title: "Richard Farnsworth takes the long road",
        publisher: "Los Angeles Times",
        url: "https://www.latimes.com/archives/la-xpm-1999-oct-15-ca-22389-story.html",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "Farnsworth discusses his own damaged hip and use of canes, the route-based production, meetings with people who had helped Alvin, the natural dialogue and his understated physical approach to the journey and its memories."
      },
      {
        title: "The Straight Story",
        publisher: "Viennale",
        url: "https://www.viennale.at/en/node/40998",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "The Viennale record confirms the 35 mm colour format and credits Freddie Francis, Mary Sweeney, Jack Fisk, Patricia Norris, Patrick Giraudi and Angelo Badalamenti within the film's image, design, costume, sound and music system."
      },
      {
        title: "The Straight Story 4K UHD Review",
        publisher: "The Digital Bits",
        url: "https://thedigitalbits.com/reviews/item/straight-story-the-4k-uhd-review",
        sourceKind: "trade_feature",
        supports: ["overall", "cinematography"],
        note: "The technical review records Panavision 35 mm anamorphic production with Panaflex Gold II cameras, C-Series lenses, Kodak Vision stocks, a 2.39:1 composition and a photochemical finish preserved through the later restoration."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
