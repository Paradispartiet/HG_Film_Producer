import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const beforeSunsetVerificationRecords = [
  {
    scenarioId: "scenario_before_sunset_2004",
    status: "verified",
    verifiedAt: "2026-07-27",
    summary: "The case's nine-year actor continuity, Linklater-Delpy-Hawke collaborative screenplay, eighty-minute real-time deadline, fifteen-day Paris production, long Steadicam and two-camera vehicle work, natural-light schedule, Sandra Adair continuity editing, practical city sound, diegetic apartment music and Berlinale and adapted-screenplay legacy are supported by ten inspectable institutional, trade, filmmaker and contemporary sources.",
    sources: [
      {
        title: "Richard Linklater's Before Sunset",
        publisher: "Filmmaker Magazine",
        url: "https://filmmakermagazine.com/archives/issues/spring2004/features/paris_day.php",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Linklater documents the mostly French crew, restricted daylight, one-large-scene-per-day schedule, fixed performances, multiple camera options, Jim McConkey's difficult Steadicam passages and the compromise between Paris geography and the best dramatic locations."
      },
      {
        title: "Love has to be about more than commitment",
        publisher: "Salon",
        url: "https://www.salon.com/2004/07/02/linklater_2/",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "Linklater explains the eighty-minute real-time structure, fully scripted rather than improvised dialogue, exact structural timing, natural light, unobtrusive long Steadicam design and his goal of making the film feel like an eloquent documentary."
      },
      {
        title: "30 years, 3 films: listening in on the Before trilogy",
        publisher: "BFI Sight and Sound",
        url: "https://www.bfi.org.uk/sight-and-sound/features/30-years-3-films-listening-before-trilogy",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "BFI examines the trilogy's nine-year intervals, physical ageing, collaborative authorship, long takes, real-time pressure, attentive listening and the way music and ordinary environments carry emotional history across the three films."
      },
      {
        title: "Richard Linklater on His Before Trilogy",
        publisher: "Directors Guild of America",
        url: "https://www.dga.org/craft/dgaq/issues/1501-winter-2015/before-trilogy",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "The DGA interview documents the shared writing process, blocking and choreography, the street, boat, van and cafe passages, two cameras in cramped vehicle space, limited cutting options and the extended unbroken apartment performance."
      },
      {
        title: "Before Sunset",
        publisher: "Danish Film Institute",
        url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/sunset-solnedgang",
        sourceKind: "film_institute",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "DFI confirms the eighty-minute 2004 feature, Castle Rock and Detour production, Linklater-Delpy-Hawke screenplay, Lee Daniel photography, Sandra Adair editing, Graham Reynolds music, colour 35 mm widescreen format and Dolby SRD presentation."
      },
      {
        title: "Before Sunset",
        publisher: "The Criterion Collection",
        url: "https://www.criterion.com/films/28693-before-sunset",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "Criterion records the principal credits, original 1.85:1 presentation, restored 5.1 surround track and the film's position as the real-time Paris movement of the decades-spanning Before Trilogy."
      },
      {
        title: "Before Sunset — Competition 2004",
        publisher: "Berlinale",
        url: "https://www.berlinale.de/en/2004/programme/20041235.html",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay"],
        note: "The official festival archive verifies Before Sunset's 2004 Berlinale Competition presentation, Richard Linklater's direction and the film's United States and French production context."
      },
      {
        title: "Gee, long time no see",
        publisher: "Los Angeles Times",
        url: "https://www.latimes.com/archives/la-xpm-2004-jun-20-ca-verini20-story.html",
        sourceKind: "trade_feature",
        supports: ["overall", "screenplay", "cinematography"],
        note: "The contemporary production feature documents the fifteen-day Paris location shoot, real-time form, shared Linklater-Delpy-Hawke writing, absence of an obvious commercial basis for the sequel and its relationship to Rohmer and Truffaut's continuing-character cinema."
      },
      {
        title: "Before Midnight — filmmaker biographies",
        publisher: "Sony Pictures Classics",
        url: "https://www.sonyclassics.com/beforemidnight/site/",
        sourceKind: "archive_feature",
        supports: ["overall", "screenplay", "sound"],
        note: "Sony Pictures Classics documents the three creators' continuing collaboration, identifies Linklater, Delpy and Hawke as the Before Sunset screenwriters and records the film's Academy Award nomination for adapted screenplay."
      },
      {
        title: "Film Independent: Richard Linklater",
        publisher: "RogerEbert.com",
        url: "https://www.rogerebert.com/far-flung-correspondents/film-independent-richard-linklater",
        sourceKind: "filmmaker_interview",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Sandra Adair and Linklater explain the real-traffic taxi sequence, two-camera coverage, changing cars and light across takes, reaction-shot matching, week-long editorial construction and the late-afternoon production schedule used to preserve continuity."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
