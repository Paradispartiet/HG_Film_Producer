import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const rushProductionCaseVerification = {
  scenarioId: "scenario_rush_2013",
  status: "verified",
  verifiedAt: "2026-07-28",
  summary: "Institutional records and department-level interviews support Rush as a British-German-American historical Formula One production system built from Peter Morgan's Hunt-Lauda two-hander, real and replica race cars, substitute circuits, multi-camera digital capture with vintage lenses, period paddock and costume design, performance-led BAFTA-winning editing, exact historic-engine recording, Hans Zimmer's score and integrated practical-digital effects.",
  sources: [
    {
      title: "Rush",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/rush",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The institutional record confirms the 123-minute United States-Germany-United Kingdom feature and credits Ron Howard, Peter Morgan, Anthony Dod Mantle, Dan Hanley, Mike Hill, Hans Zimmer and Mark Digby."
    },
    {
      title: "Rush",
      publisher: "American Film Institute",
      url: "https://catalog.afi.com/Film/69693-RUSH",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI records the Working Title, Imagine and Revolution production structure, Universal distribution, principal cast, producers and the core screenplay, photography, design, editing and music credits."
    },
    {
      title: "Film Awards 2014",
      publisher: "BAFTA",
      url: "https://www.bafta.org/awards/film/?award-year=2014",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "The official results record Rush's editing win for Dan Hanley and Mike Hill and its sound nomination for Danny Hambrook, Martin Steyer, Stefan Korte, Markus Stemler and Frank Kruse."
    },
    {
      title: "On this day 50 years ago: The iconic 1976 Formula 1 season that inspired Rush begins",
      publisher: "Formula 1",
      url: "https://www.formula1.com/en/latest/article/on-this-day-50-years-ago-the-iconic-1976-formula-1-season-that-inspired-rush.Otn39lw7ILaJlV0jR0KOo.Otn39lw7ILaJlV0jR0KOo",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Formula 1's historical retrospective documents the Hunt-Lauda 1976 championship, crash, return and Fuji finale and describes Daniel Brühl's access to Lauda and the later responses of Lauda and Lord Hesketh to the performances."
    },
    {
      title: "Peter Morgan on the drive to write Rush",
      publisher: "Los Angeles Times",
      url: "https://www.latimes.com/entertainment/movies/moviesnow/la-et-mn-writing-rush-ron-howard-20131212-story.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Morgan explains his British-Austrian personal connection, his lack of prior racing fandom and his decision to organize Hunt and Lauda as opposed but interdependent halves of a personal two-character drama."
    },
    {
      title: "Anthony Dod Mantle, Rush",
      publisher: "Screen International",
      url: "https://www.screendaily.com/interviews/anthony-dod-mantle-rush/5059633.article",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Dod Mantle details archive research, a four-week race unit, British tracks standing in for multiple Grands Prix, Alexa Plus, Alexa Studio and Canon C300 cameras and 1960s lenses chosen for their optical imperfections."
    },
    {
      title: "Director's Chair: Ron Howard — Rush",
      publisher: "Post Magazine",
      url: "https://www.postmagazine.com/Publications/Post-Magazine/2013/October-1-2013/Directors-Chair-Ron-Howard-Rush.aspx",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Howard discusses selecting Dod Mantle, balancing performance with a huge volume of racing footage, approximately seven hundred VFX shots, Danny Hambrook's historic-car recordings and Hans Zimmer's score."
    },
    {
      title: "Building the Perfect Engine: The Filmmakers Behind Universal's Rush",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2013/09/building-the-perfect-engine-the-filmmakers-behind-universals-rush/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "The production-note feature records more than thirty cameras for some material and Mark Digby's requirement to turn limited tracks, vehicles, paddocks, signage and support equipment into many distinct races and countries."
    },
    {
      title: "Thrills and spills: behind the VFX of Rush",
      publisher: "fxguide",
      url: "https://www.fxguide.com/fxfeatured/thrills-and-spills-behind-the-vfx-of-rush/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Double Negative supervisor Jody Johnson explains the approximately 38-million-dollar production, previs and the planned division between live cars and CG for crowds, track extensions, replacement cars, crashes, rig removal and unsafe action."
    },
    {
      title: "Costume Designer Julian Day Dresses Rush",
      publisher: "Media & Entertainment",
      url: "https://mande.net/btl/awards/contender-portfolios/costume-designer-julian-day-dresses-rush",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Julian Day describes his direct familiarity with 1970s Formula One, archival research and the contrasting race suits, team clothing and personal wardrobes used to separate Hunt's display from Lauda's control."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;

export const rushVerificationRecords = [
  rushProductionCaseVerification,
] as const satisfies readonly ProductionCaseVerificationRecord[];
