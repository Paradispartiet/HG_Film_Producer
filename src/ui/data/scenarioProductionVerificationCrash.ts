import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const crashVerificationRecords = [
  {
    scenarioId: "scenario_crash_2004",
    status: "verified",
    verifiedAt: "2026-07-27",
    summary: "The case's carjacking-derived interlocking screenplay, independently assembled financing, compressed Los Angeles location production, reduced-fee star ensemble, practical location reuse, 35mm CinemaScope photography, Academy Award-winning parallel editing, restrained Mark Isham score, Toronto-to-Lionsgate release and disputed Best Picture afterlife are supported by institutional, filmmaker, trade and contemporary press records.",
    sources: [
      {
        title: "Crash",
        publisher: "AFI Catalog",
        url: "https://catalog.afi.com/Film/54472-CRASH",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "AFI documents Haggis and Moresco's interlocking episodic structure, the 1991 carjacking origin, cast assembly, $6.5 million budget, Los Angeles locations, reused interiors, principal departments, Toronto premiere, Lionsgate acquisition, commercial result and awards."
      },
      {
        title: "The 78th Academy Awards",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/2006",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "editing", "sound"],
        note: "The official Academy record confirms Best Picture, Original Screenplay and Film Editing wins and nominations for directing, supporting actor and the original song In the Deep."
      },
      {
        title: "Credits on a collision course",
        publisher: "Los Angeles Times",
        url: "https://www.latimes.com/archives/la-xpm-2006-mar-04-et-crash4-story.html",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay"],
        note: "The financing history records the budget reduction from roughly $10 million to $6.5 million, the planned 36-day shoot, the mid-production funding collapse and Cathy Schulman's emergency financing before DEJ supplied additional money."
      },
      {
        title: "10% Help",
        publisher: "Filmmaker Magazine",
        url: "https://filmmakermagazine.com/archives/issues/spring2006/line_items/10_percent.php",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay"],
        note: "Filmmaker documents CAA's packaging strategy, Don Cheadle's early actor-producer commitment and the additional year required to assemble the ensemble and financing for Haggis's feature debut."
      },
      {
        title: "Don Cheadle and Larenz Tate interview",
        publisher: "Blackfilm",
        url: "https://www.blackfilm.com/20050429/features/cheadletate.shtml",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "Cheadle and Tate discuss the script's attraction for the cast, the actors' reduced compensation, compressed scheduling and the challenge of sustaining distinct characters inside the ensemble structure."
      },
      {
        title: "Crash came to Paul Haggis in a dream — and a carjacking",
        publisher: "SFGate",
        url: "https://www.sfgate.com/entertainment/article/at-the-film-festival-crash-came-to-paul-2675845.php",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay"],
        note: "Haggis recounts the carjacking, the later dream about the perpetrators and the writing process that converted questions about strangers into an interlocking Los Angeles screenplay."
      },
      {
        title: "Angry People",
        publisher: "The New Yorker",
        url: "https://www.newyorker.com/magazine/2005/05/02/angry-people",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "editing", "sound"],
        note: "The contemporary review places Crash beside Grand Canyon, Short Cuts and Magnolia, analyzes its vignette form, parallel events, temporal return, timed cutting, ensemble performance and Mark Isham score, and records the independently raised $6.5 million budget."
      },
      {
        title: "L.A. Crash",
        publisher: "filmportal.de",
        url: "https://www.filmportal.de/en/movie/la-crash_60df1ddf1fbb6218e040007f01000a3c",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The institutional record confirms the Los Angeles-area production dates, 35mm colour and 2.35:1 format, principal production companies, screenplay, J. Michael Muro photography, Hughes Winborne editing, Laurence Bennett design and Mark Isham music."
      },
      {
        title: "Mark Isham interview",
        publisher: "FilmMusic.com",
        url: "https://filmmusic.com/content/article/?id=153",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "sound"],
        note: "Isham discusses his collaboration with Haggis and the restrained electronic-orchestral approach used to connect reflective pauses and emotional transitions across the separate story lines."
      },
      {
        title: "Crash",
        publisher: "Yari Film Group",
        url: "https://www.yarifilmgroup.com/films/crash/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay"],
        note: "The producer's official film record confirms Haggis as writer-director, the ensemble, producer group, Lionsgate distribution and the 36-hour Los Angeles collision premise."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
