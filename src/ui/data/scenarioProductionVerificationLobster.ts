import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const lobsterProductionCaseVerification = {
  scenarioId: "scenario_the_lobster_2015",
  status: "verified",
  verifiedAt: "2026-08-06",
  summary: "The Lobster's director-protected five-country co-production, rule-based speculative screenplay, seven-week County Kerry location shoot, hotel-and-forest design, controlled ensemble performance, European-awarded costume system, ARRI Alexa and Panavision natural-light photography, measured collaborative edit, Amsterdam sound post, restrained music strategy and international breakthrough are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "Yorgos Lanthimos: I just think it's interesting to start a dialogue",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/interviews/yorgos-lanthimos-i-just-think-interesting-to-start-dialogue",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Lanthimos and producer Lee Magiday describe protecting the director through European financing, developing the project before cast attachment, filming in Ireland, editing in the UK, completing picture and sound post in the Netherlands and placing visual-effects work in France."
    },
    {
      title: "Thimios Bakatakis / The Lobster",
      publisher: "British Cinematographer",
      url: "https://britishcinematographer.co.uk/thimios-bakatakis-the-lobster/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Bakatakis documents the late change from planned film capture to ARRI Alexa, Panavision Primo and older high-speed optics, location-only production, mostly natural light and Amsterdam grading that introduced an organic film-like texture."
    },
    {
      title: "Major Irish Film Board Supported Production Activity Taking Place Across Ireland",
      publisher: "Screen Ireland",
      url: "https://www.screenireland.ie/news-archive/view/2428",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The national production notice records a seven-week Irish location shoot, the County Kerry cast and production base, Element Pictures leadership and the Film4, Irish Film Board, BFI, Eurimages, Greek, French and Dutch financing structure."
    },
    {
      title: "The Lobster",
      publisher: "Film4",
      url: "https://www.film4productions.com/productions/2015/lobster",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "Film4 verifies the dystopian relationship premise, principal cast, writers and producers and records the Cannes Jury Prize and Academy Award nomination for original screenplay."
    },
    {
      title: "The Lobster",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/the-lobster/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Cannes records the 2015 competition selection and Jury Prize, the Ireland-UK-France-Greece production, the rule-bound hotel, city and forest story, and the credited directing, writing, cinematography, production design, editing and sound departments."
    },
    {
      title: "The Lobster",
      publisher: "Lemming Film",
      url: "https://lemmingfilm.com/productions/the-lobster",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The Dutch co-producer verifies the five-country production structure, financiers, department heads Thimios Bakatakis, Jacqueline Abrahams, Sarah Blenkinsop, Lucy Browne, Yorgos Mavropsaridis and Johnnie Burn, and the film's English-language speculative-romance construction."
    },
    {
      title: "2017 Academy Awards",
      publisher: "Academy of Motion Picture Arts and Sciences",
      url: "https://www.oscars.org/oscars/ceremonies/2017",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The Academy records Yorgos Lanthimos and Efthimis Filippou as nominees for Writing (Original Screenplay), documenting the international recognition of the film's rule-based speculative construction."
    },
    {
      title: "Interview: Johnnie Burn on Creating the Sound for The Favourite",
      publisher: "Designing Sound",
      url: "https://designingsound.org/2018/12/19/interview-johnnie-burn-on-creating-the-sound-for-the-favourite/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "sound"],
      note: "Burn traces his Lanthimos collaboration to The Lobster, explains that the director approached him after Under the Skin, and records the film's Amsterdam sound post and February 2015 mix as the foundation of their continuing sound partnership."
    },
    {
      title: "Interview: Yorgos Lanthimos and Ariane Labed discuss The Lobster",
      publisher: "Seventh Row",
      url: "https://seventh-row.com/2016/05/19/yorgos-lanthimos-ariane-labed/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Lanthimos discusses blocking, shooting and sound construction, while Ariane Labed describes the physical preparation and dancer's discipline behind the film's controlled ensemble behavior and ritualized movement."
    },
    {
      title: "The Lobster",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/the-lobster/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "The European Film Academy records the 2015 European Screenwriter award for Lanthimos and Filippou and European Costume Designer award for Sarah Blenkinsop, supporting both the rule-based writing and the film's systematic visual classification of social roles."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
