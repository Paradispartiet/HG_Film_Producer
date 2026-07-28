import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const herProductionCaseVerification = {
  scenarioId: "scenario_her_2013",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "Institutional credits, screenplay awards, filmmaker interviews, department-level production reporting and official production notes support Her as a coordinated warm near-future romance built from an unseen voice performance, embodied listening, Los Angeles-Shanghai design, historical-future costume, photochemical intimacy, editorial absence, discreet interface sound and music.",
  sources: [
    {
      title: "Her",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/hende",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional record confirming Annapurna Pictures, Spike Jonze's direction and screenplay, producers Megan Ellison, Jonze and Vincent Landay, Hoyte van Hoytema, Eric Zumbrunnen, Jeff Buchanan, K.K. Barrett, Arcade Fire, Joaquin Phoenix and Scarlett Johansson."
    },
    {
      title: "Her (2013)",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/events/her-2013",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Academy identifies the principal craft team, 35 mm presentation, the Los Angeles-Pudong city construction, Jonze's original-screenplay win and four additional nominations including Best Picture and Production Design."
    },
    {
      title: "Writers Guild Awards Winners and Nominees 2025-2013",
      publisher: "Writers Guild of America",
      url: "https://awards.wga.org/awards/nominees-winners/2025-2013",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The official guild record lists Her, written by Spike Jonze, as the 2014 Writers Guild Award winner for original screenplay, supporting the film's immediate writing legacy."
    },
    {
      title: "Production Designer K.K. Barrett on Creating Her's Beautiful Future",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2013/12/production-designer-k-k-barrett-on-creating-hers-beautiful-future/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Barrett explains the decision to prioritize human experience over gadget spectacle, the tactile devices, large apartments, elevated Shanghai circulation, car-light future and emotional-image research used to construct the world."
    },
    {
      title: "Five Days of Her: How to Shoot the Future",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/moviesnow/la-et-mn-her-spike-jonze-cinematography-20131226-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Hoyte van Hoytema discusses rejecting established science-fiction imagery and building the film's different, emotionally inviting future through colour, close observation and a photographic atmosphere guided by Jonze's script."
    },
    {
      title: "Five Days of Her: How Spike Jonze Created the Future",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/moviesnow/la-et-mn-her-spike-jonze-future-costumes-20131223-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Costume designer Casey Storm documents the removal of familiar futurist uniforms, ties and belts, the 1930s references, high-waisted trousers, warm fabrics and the shared red-yellow-brown colour logic developed with Jonze and van Hoytema."
    },
    {
      title: "Five Days of Her: Editing Samantha In and Out",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/moviesnow/la-et-mn-spike-jonze-her-movie-samantha-editor-20131230-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Eric Zumbrunnen explains avoiding device cutaways, removing Samantha's attempted physical visualization, replacing and rewriting the voice performance in ADR, adjusting Phoenix's picture and intercutting the final letter and ending."
    },
    {
      title: "Spike Jonze: I Try to Make Everything I Make Personal",
      publisher: "Little White Lies",
      url: "https://lwlies.com/interviews/spike-jonze-her",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Jonze describes months of Johansson recording, constant dialogue revision and year-long close collaboration with editors Jeff Buchanan and Eric Zumbrunnen, confirming that voice writing and editing were one continuous story process."
    },
    {
      title: "Spike Jonze on Jackass, Scarlett Johansson's Voice and Techno Love",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2013/nov/28/spike-jonze-her-interview-scarlett-johansson-joaquin-phoenix-jackass",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Jonze recounts shooting Phoenix's scenes with Samantha Morton performing live, recognizing during the edit that the approach was not working and rebuilding Samantha with Scarlett Johansson during postproduction."
    },
    {
      title: "K.K. Barrett: A Vision for Her",
      publisher: "KCRW",
      url: "https://www.kcrw.com/shows/design-and-architecture/stories/k-k-barrett-a-vision-for-her",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Barrett discusses an idealized but isolating Los Angeles, the use of Shanghai architecture, the absence of normal future-film cues and the production's attempt to make technological life visually comfortable rather than dystopian."
    },
    {
      title: "Her Production Notes",
      publisher: "SAMDB",
      url: "https://www.samdb.co.za/titleproductionnotes/1801",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Archived production notes gather department testimony on Barrett's restrained devices and red motif, Storm's multi-decade costume construction, the simple interface design and the principle that Samantha's voice rather than visible hardware should hold attention."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const herVerificationRecords = [
  herProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
