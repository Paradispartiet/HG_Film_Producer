import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const landOfMineProductionCaseVerification = {
  scenarioId: "scenario_land_of_mine_2015",
  status: "verified",
  verifiedAt: "2026-08-05",
  summary: "The case's multi-year historical research, restricted postwar moral structure, Danish-German co-production, Oksbøl and West Jutland locations, daylight and 1960s-influenced image, newly cast German youths, actor-following camera, mine-clearing procedure, sound-led suspense, controlled pyrotechnics and international reception are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Land of Mine",
      publisher: "Sony Pictures Classics",
      url: "https://www.sonyclassics.com/landofmine/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official release archive identifies the cast and department heads and provides production notes on historical research, Oksbøl, daylight, the 1960s visual influence, new actors, practical effects, CGI support and the production's moral journey."
    },
    {
      title: "Land of Mine",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/under-sandet",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The national film record confirms the Danish-German production, release, screenplay, cinematography, editors, production design, costume, make-up, sound, music, special-effects and pyrotechnic credits."
    },
    {
      title: "Land of Mine",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/land-of-mine/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The Academy archive records the director's statement, cast and crew, postwar synopsis and awards for cinematography, costume and make-up and hair; Zandvliet also explains the daylight coast, 1960s influence, Maysles reference and actor-following camera."
    },
    {
      title: "The 89th Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2017",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "The official ceremony record lists Land of Mine as Denmark's nominee for Foreign Language Film, confirming the production's international reception and historical position."
    },
    {
      title: "Martin Zandvliet: the eye for an eye principle simply doesn't work",
      publisher: "Nordisk Film & TV Fond",
      url: "https://nordiskfilmogtvfond.com/news/stories/martin-zandvliet-eye-eye-principle-simply-doesnt-work",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Zandvliet discusses the film's relation to contemporary Europe, the movement from hatred toward forgiveness and the local historical story's wider moral purpose after festival screenings and Danish release."
    },
    {
      title: "Martin Zandvliet — Director",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/302324/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The production interview places the film as Zandvliet's move from intimate portraits to historical epic and documents the postwar history, production scale and transition from hate to forgiveness."
    },
    {
      title: "Martin Zandvliet talks Danish Oscar contender Land of Mine",
      publisher: "Screen International",
      url: "https://www.screendaily.com/features/martin-zandvliet-talks-danish-oscar-contender-land-of-mine/5111235.article",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Zandvliet discusses the universal moral story, production-value responsibility and construction of a historically credible universe within a concentrated Scandinavian production."
    },
    {
      title: "Know Thine Enemy",
      publisher: "Interview Magazine",
      url: "https://www.interviewmagazine.com/film/land-of-mine-martin-zandvliet",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Zandvliet describes more than four years of writing, the hate-versus-humanity dilemma, casting boys from different German backgrounds, the use of new actors and Roland Møller's first leading role."
    },
    {
      title: "Martin Zandvliet on Making the Explosive WWII Drama Land of Mine",
      publisher: "The Moveable Fest",
      url: "https://moveablefest.com/martin-zandvliet-land-of-mine/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "The Toronto interview documents the trigger for the project, research through books, cemeteries and hospitals, the West Coast history, the beach environment and the transformation of a large historical subject into close suspense and moral conflict."
    },
    {
      title: "Land of Mine (Denmark)",
      publisher: "Golden Globes",
      url: "https://goldenglobes.com/articles/land-of-mine-denmark/",
      sourceKind: "archive_feature",
      supports: ["overall", "cinematography", "sound"],
      note: "The archive feature describes the sea, gulls, breathing, metallic mine detail and explosions as a coordinated suspense field and records Camilla Hjelm Knudsen's European cinematography award."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
