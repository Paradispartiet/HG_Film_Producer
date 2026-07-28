import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theLunchboxProductionCaseVerification = {
  scenarioId: "scenario_the_lunchbox_2013",
  status: "verified",
  verifiedAt: "2026-07-29",
  summary: "The case's dabbawala documentary research, India-France-Germany independent production, epistolary screenplay, real Mumbai location and non-actor method, restrained performances, John Lyons editing, Michael Kaczmarek's Berlin sound process and international festival-distribution history are supported by ten inspectable sources from ten publishers.",
  sources: [
    {
      title: "The Lunchbox",
      publisher: "La Semaine de la Critique",
      url: "https://www.semainedelacritique.com/en/edition/2013/movie/the-lunchbox",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Critics' Week record documents the India-France-Germany world premiere, Ritesh Batra screenplay, Michael Simmonds cinematography, John Lyons editing, Michael Kaczmarek sound, Shruti Gupte design, Max Richter music, cast, producers, co-producers and sales company."
    },
    {
      title: "The Lunchbox (2013)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/c929c368-7bb5-5710-8197-7678f169f55b/the-lunchbox",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI records the international production countries, Ritesh Batra's direction and writing, principal producers, cast and 105-minute feature identity used to verify the playable scenario."
    },
    {
      title: "The Lunchbox official movie site",
      publisher: "Sony Pictures Classics",
      url: "https://www.sonyclassics.com/thelunchbox/home/",
      sourceKind: "trade_feature",
      supports: ["overall", "screenplay"],
      note: "The distributor's official site preserves the misdelivered-lunchbox premise, the note-based relationship, character backgrounds and the film's North American circulation context."
    },
    {
      title: "Ritesh Batra, The Lunchbox",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/features/ritesh-batra-the-lunchbox/5059580.article",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Batra explains that he and cinematographer Michael Simmonds prepared the shoot months in advance, filmed almost entirely on Mumbai locations and embraced the city's practical chaos rather than replacing it with controlled studio geography."
    },
    {
      title: "Director Ritesh Batra on his Mumbai Set Love Story The Lunchbox",
      publisher: "Motion Picture Association",
      url: "https://www.motionpictures.org/2014/02/director-ritesh-batra-on-his-mumbai-set-love-story-the-lunchbox/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "Batra describes embedding with the dabbawalas, using real delivery workers and Mumbai residents in the film, shooting on streets and trains and preserving the delivery community's pride and practical coding system."
    },
    {
      title: "The Lunchbox has two stories - one everyone sees, another's happening inside",
      publisher: "India Today",
      url: "https://www.indiatoday.in/movies/bollywood/story/ritesh-batra-the-lunchbox-director-irrfan-khan-nimrat-kaur-211825-2013-09-20",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "Batra details the international partners, five-month New York edit, three-month Berlin sound design, French colour correction, test screenings and Kaczmarek's 26 hours of specific Mumbai recordings including dabbawala singing and office printers."
    },
    {
      title: "In conversation: Ritesh Batra, director of The Lunchbox",
      publisher: "Business of Cinema",
      url: "https://businessofcinema.com/bollywood_news/conversation-ritesh-batra-director-lunchbox/104436",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Batra identifies Churchgate, Malad and Dongri locations, explains the difficulty of recognisable actors and unstable permissions and confirms that the production used real streets and trains to preserve Mumbai's authenticity."
    },
    {
      title: "Q&A: Ritesh Batra, director of The Lunchbox",
      publisher: "The Eagle",
      url: "https://www.theeagleonline.com/article/2014/01/qa-ritesh-batra-director-of-the-lunchbox",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Batra recounts the abandoned dabbawala documentary, the relationships built during research and the way the delivery system generated a fictional story about strangers connected through one practical object."
    },
    {
      title: "Don't-Miss Indies — What to Watch for in July",
      publisher: "Film Independent",
      url: "https://www.filmindependent.org/blog/dont-miss-indies-what-to-watch-for-in-july/",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Film Independent records Batra's debut-feature status, the central cast and the film's approximately one-million-dollar independent production scale and later home-distribution circulation."
    },
    {
      title: "World tucks into Lunchbox",
      publisher: "Civil Society Magazine",
      url: "https://civilsocietystaging.mahiti.org/lifestyle/world-tucks-into-lunchbox/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The production account identifies Michael Simmonds, John Lyons, Michael Kaczmarek and Max Richter, documents the international co-producers and explains how Batra's dabbawala research generated the characters and screenplay."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
