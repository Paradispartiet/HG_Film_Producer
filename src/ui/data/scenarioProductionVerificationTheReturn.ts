import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const theReturnProductionCaseVerification = {
  scenarioId: "scenario_the_return_2003",
  status: "verified",
  verifiedAt: "2026-07-26",
  summary: "The film's early-2000s Russian auteur context, father-son journey screenplay, Ren Film production, child and paternal performances, practical road-lake-island geography, Zhanna Pakhomova design, Mikhail Krichman 35 mm photography, Vladimir Mogilevsky editing, Andrey Dergachev music and sound and Venice-European Film Academy breakthrough are supported by ten inspectable institutional, festival and contemporary critical sources.",
  sources: [
    {
      title: "The Return",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/the-return/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "EFA records the 2003 Discovery - Prix Fassbinder recognition and credits Andrey Zvyagintsev, Mikhail Krichman and Zhanna Pakhomova, grounding the film's debut status, craft authorship and European breakthrough."
    },
    {
      title: "Vozvraschenie",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/return-0",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI documents Ren Film, producer Dmitry Lesnevsky, writers Vladimir Moiseenko and Aleksandr Novototski, cinematographer Mikhail Krichman, editor Vladimir Mogilevsky, composer Andrey Dergachev, production designer Zhanna Pakhomova and the colour 35 mm format."
    },
    {
      title: "Vozvrascenje (2003)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/a2201dec-b84b-5166-89bc-f3c5ed8d8f83/vozvrascenje",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI confirms the Russian production, Zvyagintsev direction, Lesnevsky production, Moiseenko-Novototsky screenplay, principal child and father cast and 110-minute feature record."
    },
    {
      title: "The Return. 2003. Directed by Andrey Zvyagintsev",
      publisher: "Museum of Modern Art",
      url: "https://www.moma.org/calendar/events/3828",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "MoMA records the 35 mm presentation, father and sons narrative, road-trip structure, religious allusions, restricted mystery and Golden Lion breakthrough while identifying the principal writers and performers."
    },
    {
      title: "The Return",
      publisher: "Thessaloniki Film Festival",
      url: "https://www.filmfestival.gr/en/movie/movie/8017",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The festival archive identifies the film as a mystery-thriller-drama, records the principal cast and 105-minute 2003 production and documents both the Venice Golden Lion and European Discovery recognition."
    },
    {
      title: "The Return",
      publisher: "Nederlands Film Festival",
      url: "https://www.filmfestival.nl/en/film/the-return",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The archive describes the twelve-year paternal absence, sudden return, fishing-trip premise and desert-island destination, supporting the journey's movement from expected reunion toward psychological and spatial ordeal."
    },
    {
      title: "The Return",
      publisher: "goEast Film Festival",
      url: "https://www.filmfestival-goeast.de/en/filme/the-return/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "goEast places the debut inside Russian and Central-Eastern European festival culture and records the Golden Lion, SIGNIS recognition and European John Templeton Film Prize, supporting its spiritual and moral reception history."
    },
    {
      title: "Golden Lion for The Return",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/newsdetail/37331/",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "The contemporary trade report documents that Zvyagintsev's first feature won the 2003 Venice Golden Lion and describes the result as a major European and Russian festival breakthrough."
    },
    {
      title: "Men's Secrets",
      publisher: "The New Yorker",
      url: "https://www.newyorker.com/magazine/2004/03/15/mens-secrets",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The contemporary review analyzes the father's twin role as tyrant and teacher, the brothers' shifting emotions, the island, tower, fog, buried box and Mantegna-like opening image, showing how performance, landscape and withheld information create the film's pressure."
    },
    {
      title: "Venice Film Festival: A Specter Called Knowledge",
      publisher: "Film Comment",
      url: "https://www.filmcomment.com/article/venice-international-film-festival-2003/",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Film Comment's contemporary Venice report records the Golden Lion decision and the immediate critical debate around Russian art-film lineage, international-market positioning and the debut's symbolic style."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
