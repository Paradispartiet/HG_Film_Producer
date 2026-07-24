import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const beingJohnMalkovichProductionCaseVerification = {
  scenarioId: "scenario_being_john_malkovich_1999",
  status: "verified",
  verifiedAt: "2026-07-24",
  summary: "Charlie Kaufman's long-developing identity script, Spike Jonze's feature debut, roughly ten-million-dollar Propaganda and Single Cell production, seven-and-a-half-floor architecture, Lance Acord 35 mm image, K.K. Barrett design, Eric Zumbrunnen editing, Carter Burwell score, marionettes, body doubles and compositing are supported by ten inspectable production, institutional and first-person sources.",
  sources: [
    {
      title: "Being John Malkovich",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/60900-BEING-JOHN-MALKOVICH",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI records Spike Jonze, Charlie Kaufman, Propaganda Films, Single Cell Pictures, USA Films, the producers, Lance Acord photography, Eric Zumbrunnen editing, K.K. Barrett design and the film's principal production context."
    },
    {
      title: "Being John Malkovich",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/28055-being-john-malkovich",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion documents the director-supervised restoration, 1.85:1 presentation, 5.1 soundtrack, principal craft credits, behind-the-scenes production material, puppetry supplement and the two fabricated films within the feature."
    },
    {
      title: "Being John Malkovich (1999)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/e0063a2e-29b3-5113-a473-2fb4db983933/being-john-malkovich",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "The BFI record confirms the 1999 American feature, Jonze direction, Kaufman screenplay, principal cast and the film's surreal comic treatment of identity, desire and bodily control."
    },
    {
      title: "The 72nd Academy Awards — 2000",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2000/P--T",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "The Academy records nominations for Spike Jonze's direction, Charlie Kaufman's original screenplay and Catherine Keener's supporting performance, documenting the film's immediate institutional recognition."
    },
    {
      title: "Film in 2000",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/?award-year=2000",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "editing"],
      note: "BAFTA records Kaufman's Original Screenplay win together with Eric Zumbrunnen's editing nomination and Cameron Diaz's supporting-performance nomination."
    },
    {
      title: "Charlie Kaufman: how to write",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2011/oct/03/charlie-kaufman-how-to-write",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Kaufman's first-person account links the screenplay to frustration with imitating other voices, describes its difficult development and explains his interest in perspective, reconstruction and the instability of authored experience."
    },
    {
      title: "The Rough Draft: Charlie Kaufman",
      publisher: "WIRED",
      url: "https://www.wired.com/2008/09/the-rough-draft",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Wired documents the script's reputation as unmakeable, Jonze and Kaufman's four-day line-by-line review and their replacement of a larger third-act puppeteering confrontation with a more emotionally consequential ending."
    },
    {
      title: "An Odd Couple Takes a Strange Trip",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/archives/la-xpm-1999-nov-30-fi-38947-story.html",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The contemporary production account records April 1998 financing, a budget of roughly ten million dollars, a first-time screenwriter and feature director and the commercial challenge posed by the film's difficult-to-summarize premise."
    },
    {
      title: "Being John Malkovich — Puppetry Journal interview",
      publisher: "Puppetry Journal",
      url: "https://www.hubermarionettes.com/bjm/bjminterview.html",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "The production interview documents the 1998 marionette build, actor likenesses, Phillip Huber's camera-specific Dance of Despair, multiple cuts, removed and added strings, repainted facial expressions and the portable street-puppet sequence."
    },
    {
      title: "Being John Malkovich",
      publisher: "Carter Burwell",
      url: "https://www.carterburwell.com/projects/Being_John_Malkovich.shtml",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Burwell describes reading the script before shooting, visiting the seven-and-a-half-floor set and composing, orchestrating and conducting a warm, melancholic and circular score designed to make the strange story feel emotionally real."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
