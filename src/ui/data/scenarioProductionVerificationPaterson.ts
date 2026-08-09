import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const patersonProductionCaseVerification = {
  scenarioId: "scenario_paterson_2016",
  status: "verified",
  verifiedAt: "2026-08-09",
  summary: "Paterson's seven-day routine, poetry lineage, New Jersey Transit location system, collaborative one-draft-to-edit workflow, Alexa and VariPrime image design, naturalistic lighting, modular editing, practical sound and dog performance, electronic SQÜRL score and animated calligraphy are supported by twelve inspectable sources from twelve publishers.",
  sources: [
    {
      title: "Paterson",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/paterson/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The official Competition record confirms Jim Jarmusch as writer-director, Frederick Elmes as cinematographer, SQÜRL as music, the principal cast, Exoskeleton as production company and the Paterson bus-driver-poet premise."
    },
    {
      title: "Amazon Studios Announces Jim Jarmusch's Paterson to be Next Amazon Original Movie",
      publisher: "Amazon Studios",
      url: "https://press.aboutamazon.com/2016/1/amazon-studios-announces-jim-jarmuschs-paterson-to-be-next-amazon-original-movie",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "Amazon documents producers Joshua Astrachan and Carter Logan, K5 and Le Pacte executive support, completed principal photography in New Jersey and New York and the intended theatrical release structure."
    },
    {
      title: "Jim Jarmusch on Paterson and Gimme Danger",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/article/jim-jarmusch-paterson-gimme-danger-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Jarmusch explains the William Carlos Williams and New York School lineage, his one-draft script process, modular scene movement, collaboration with Mark Friedberg and Affonso Gonçalves, Adam Driver's reactive performance quality and the Alexa look developed with Frederick Elmes."
    },
    {
      title: "Poetry in motion: Fred Elmes ASC / Paterson",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/fred-elmes-asc-paterson/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography", "editing"],
      note: "Elmes gives a detailed production account covering Paterson and Yonkers locations, repeated-shot variation, poetry montage design, 1.85:1 framing, Alexa Studio and Mini, Zeiss VariPrimes, ProRes 4444 Log C, the film-emulation LUT, naturalistic lighting and final DI."
    },
    {
      title: "Paterson | NYFF54",
      publisher: "Film at Lincoln Center",
      url: "https://www.filmlinc.org/nyff2016/films/paterson/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The New York Film Festival programme confirms the 2016 American feature, Jarmusch, Adam Driver, the William Carlos Williams connection, Amazon Studios distribution and the film's organizing rhythm of everyday consciousness and art."
    },
    {
      title: "Paterson – first look",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/reviews/paterson-first-look",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Sight and Sound situates the film in Paterson, New Jersey, identifies the recurring bus route and Great Falls, describes the poetry as part of the daily observational structure and records the 2016 release context."
    },
    {
      title: "Free Members-Only Screening: Paterson",
      publisher: "Film Independent",
      url: "https://www.filmindependent.org/events/free-members-screening-paterson/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "Film Independent records the 113-minute color DCP, Jarmusch's writing and direction, Driver and Farahani and the fourth Jarmusch-Elmes collaboration, describing the performance and staging as an unusually delicate observation of work and private creativity."
    },
    {
      title: "The Hardest Parts About Producing Jim Jarmusch's Paterson? The Bus and That Very Special Dog",
      publisher: "No Film School",
      url: "https://nofilmschool.com/2016/05/paterson-producers-jim-jarmusch-nellie-palm-dog-award-cannes-2016",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Producers Astrachan and Logan document Amazon's early involvement, the returning Elmes-Friedberg-Kunin-Hein-Gonçalves team, New Jersey Transit negotiations, the Market Street depot and route, weather planning and Nellie's practical performance and original vocalizations."
    },
    {
      title: "Paterson",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/paterson_",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The German film institute catalogue independently records Jarmusch, Frederick Elmes, Affonso Gonçalves, Mark Friedberg, Catherine George, Robert Hein, SQÜRL, Amazon Studios and the principal producers and cast."
    },
    {
      title: "Jim Jarmusch Talks About His New Movie, Paterson, and the Exuberance of Great Poetry",
      publisher: "TIME",
      url: "https://time.com/4605637/jim-jarmusch-paterson-interview/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Jarmusch discusses William Carlos Williams, the New York School, Paterson's mixed and visually vivid city environment, Adam Driver's naturalistic presence and the film's commitment to discovering art in ordinary work and daily observation."
    },
    {
      title: "Watch: Jim Jarmusch on Cinema and His Influences",
      publisher: "Filmmaker Magazine",
      url: "https://filmmakermagazine.com/100228-watch-jim-jarmusch-on-cinema-and-his-influences/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay"],
      note: "The NYFF-era record places Paterson alongside Gimme Danger in Jarmusch's 2016 work and documents the director's stated film influences and continuing position inside independent cinema rather than a studio-defined production model."
    },
    {
      title: "Frederick Elmes, ASC to Be Honored By AFI",
      publisher: "American Society of Cinematographers",
      url: "https://theasc.com/news/frederick-elmes-asc-to-be-honored-by-afi/",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC identifies Paterson as Elmes's recent poetic independent feature with longtime collaborator Jarmusch and places the film within a career defined by technically controlled American independent cinematography."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
