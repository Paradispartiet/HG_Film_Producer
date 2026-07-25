import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theMillionDollarHotelProductionCaseVerification = {
  scenarioId: "scenario_the_million_dollar_hotel_2000",
  status: "verified",
  verifiedAt: "2026-07-25",
  summary: "The film's Bono and Nicholas Klein story, Road Movies-Kintop-Icon production, real Downtown Los Angeles hotel, Wim Wenders outsider-ensemble direction, Phedon Papamichael 35 mm CinemaScope photography, Robbie Freed and Arabella Serrell design, Tatiana S. Riegel editing, Lee Orloff and Elmo Weber sound, Bono-Eno-Lanois-Hassell music, Berlinale Jury Grand Prix and later 5K restoration are supported by ten inspectable institutional, filmmaker, trade and archive sources.",
  sources: [
    {
      title: "The Million Dollar Hotel",
      publisher: "Wim Wenders Stiftung",
      url: "https://wimwendersstiftung.de/en/film/million-dollar-hotel/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official foundation record documents the Road Movies, Kintop and Icon production, Bono-Klein story, Nicholas Klein screenplay, Wenders direction, Papamichael photography, Riegel editing, Lee Orloff sound, principal cast, 35 mm 2.35 format, Jury Grand Prix and 2021 5K restoration."
    },
    {
      title: "Million Dollar Hotel",
      publisher: "AFI Catalog",
      url: "https://catalog.afi.com/Film/62046-MILLION-DOLLAR-HOTEL",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "AFI provides the American production and release record, principal companies, producers, story and screenplay credits, Los Angeles setting and the major image, editorial, design, music and sound departments."
    },
    {
      title: "The Million Dollar Hotel",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/the-million-dollar-hotel_ea43d4a7641a5006e03053d50b37753d",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "The German national film portal confirms the Los Angeles shoot, 35 mm 2.35 Eastmancolor and Dolby Digital format, production companies, complete technical credits, special-effects team, theatrical history and restored DCP."
    },
    {
      title: "The Million Dollar Hotel",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/million-dollar-hotel",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI records the Germany-US-UK production, Road Movies, Icon and Kintop companies, Nicholas Klein and Bono writing credits, Phedon Papamichael cinematography, Tatiana Riegel editing, design team, composers and 35 mm CinemaScope Dolby presentation."
    },
    {
      title: "ASC Breakfast Club 2012 Video Collection: Phedon Papamichael, ASC",
      publisher: "American Society of Cinematographers",
      url: "https://staging.ascmag.com/articles/asc-breakfast-club-2012-video-collection",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "ASC's career interview specifically includes Papamichael's collaboration with Wim Wenders and The Million Dollar Hotel, emphasizing available-light observation, front light, location response and the cinematographer's working method."
    },
    {
      title: "Million Dollar Hotel Opens in USA",
      publisher: "U2.com",
      url: "https://www.u2.com/news/title/million-dollar-hotel-opens-in-usa/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "U2's official archive traces the project to Bono's rooftop idea during the Joshua Tree period, identifies Wenders and the principal cast, and preserves contemporary discussion of Tom Tom's subjective black-and-white, freeze-frame and jump-cut grammar and the Bono-Eno-Lanois-Hassell score."
    },
    {
      title: "The Million Dollar Hotel",
      publisher: "Melbourne International Film Festival",
      url: "https://miff.com.au/festival-archive/films/21940/the-million-dollar-hotel",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "MIFF's 2000 archive frames the decrepit hotel as the film's social world, identifies Bono's story and the Eno-Lanois-Hassell-associated music, highlights Papamichael's photography and records the film's selection to open the 50th Berlin festival."
    },
    {
      title: "Hotel with reservations",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2000/feb/12/berlinfilmfestival2000.festivals",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography"],
      note: "Contemporary Berlin coverage identifies the historic Los Angeles hotel, Bono's co-authored original story, the murder-investigation wrapper, Tom Tom and Eloise romance, Mel Gibson's Skinner and the film's role as opening work of the 50th Berlinale."
    },
    {
      title: "50th Berlin International Film Festival award ceremony: Wim Wenders receives the Silver Bear",
      publisher: "Deutsche Digitale Bibliothek",
      url: "https://www.deutsche-digitale-bibliothek.de/item/2QDY32DZ5IJ5BN43PBKPLGL6LHOJL2BC",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "The German digital archive preserves the dated official record of Wenders receiving the Silver Bear jury prize for The Million Dollar Hotel at the 50th Berlinale on 20 February 2000."
    },
    {
      title: "Phedon Papamichael biography",
      publisher: "Phedon Papamichael",
      url: "https://www.phedonpapamichael.com/bio/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Papamichael's official biography confirms The Million Dollar Hotel as his Wenders collaboration, its opening-night Berlinale position, Jury Grand Prix and Camerimage cinematography nomination."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
