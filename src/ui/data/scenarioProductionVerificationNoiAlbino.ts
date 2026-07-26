import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const noiTheAlbinoProductionCaseVerification = {
  scenarioId: "scenario_noi_the_albino_2003",
  status: "verified",
  verifiedAt: "2026-07-26",
  summary: "The film's New Icelandic Wave context, twelve-year character development, European coproduction, Westfjords winter production, professional and nonprofessional cast, 35 mm snow-and-interior image system, practical design, Daniel Dencik editing, Pétur Einarsson sound, Slowblow music and international festival breakthrough are supported by ten inspectable institutional, interview, trade and festival sources.",
  sources: [
    {
      title: "Nói Albínói",
      publisher: "European Film Academy",
      url: "https://www.europeanfilmawards.eu/efa-movie/noi-albinoi/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "EFA records the Iceland-Germany-United Kingdom-Denmark production, 2003 feature selection and actor nomination; credits Dagur Kári, Rasmus Videbæk, Daniel Dencik, Jón Steinar Ragnarsson, the costume and makeup teams and Pétur Einarsson; and preserves Kári's statement about the long-developed character, invented Westfjords universe and dependence on snow."
    },
    {
      title: "Nói Albinói",
      publisher: "International Film Festival Rotterdam",
      url: "https://iffr.com/en/iffr/2003/films/n%C3%B3i-albin%C3%B3i",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "IFFR documents the 2003 world premiere, Denmark-Germany-Iceland-United Kingdom production, 95-minute 35 mm format, Dagur Kári screenplay, Rasmus Videbæk cinematography, Daniel Dencik editing, M&M Productions, Zik Zak Filmworks and Coproduction Office sales while describing the landscape as both beautiful and threatening."
    },
    {
      title: "Fjord fiesta",
      publisher: "The Guardian",
      url: "https://www.theguardian.com/film/2003/nov/11/features.steverose",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "performance", "cinematography", "sound"],
      note: "The contemporary Dagur Kári interview documents Bolungarvík and the Westfjords shoot, the professional lead and locally recruited amateur ensemble, the young Icelandic industry's flexible working culture, severe snow and lighting-truck conditions and the film's mythic yet universal small-town escape design."
    },
    {
      title: "Dagur Kári — Director: The Icelandic genius",
      publisher: "Cineuropa",
      url: "https://cineuropa.org/en/interview/31869/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "production", "reception"],
      note: "Kári explains that Nói developed over roughly twelve years, identifies Jarmusch, Kaurismäki, sitcom antiheroes and closed settings as influences, gives a €1.2 million budget with 25 percent Icelandic government support and describes the Icelandic producer, Coproduction Office and Danish partners behind the European coproduction."
    },
    {
      title: "Interviews: Noi the Albino",
      publisher: "AboutFilm.com",
      url: "https://www.aboutfilm.com/features/noialbinoi/interviews.htm",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "performance", "music"],
      note: "The interviews identify Tómas Lemarquis as Kári's only possible Nói, record the professional training behind his physically restrained performance, connect Kári with cinematographer Rasmus Videbæk and editor Daniel Dencik through the Danish film school and confirm that Kári composed the music with Slowblow."
    },
    {
      title: "Noi the Albino (Noi Albinoi)",
      publisher: "Screen Daily",
      url: "https://www.screendaily.com/noi-the-albino-noi-albinoi/4012051.article",
      sourceKind: "archive_feature",
      supports: ["overall", "performance", "production", "music"],
      note: "The Rotterdam-era trade review records Zik Zak Filmworks, Essential Filmproduktion, The Bureau, M&M Productions, the Film Council and Coproduction Office; credits the core craft team and Slowblow; and describes the nonprofessional ensemble, poker-faced sight gags, restrained score and abrupt apocalyptic turn."
    },
    {
      title: "Nói Albinói 2003",
      publisher: "New Zealand International Film Festival",
      url: "https://www.nziff.co.nz/2003/archive-1/noi-albinoi/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "music"],
      note: "NZIFF records the four-country production, Icelandic language, 35 mm format, Dagur Kári screenplay, Rasmus Videbæk photography, Daniel Dencik editing and Slowblow music while characterizing the film as a mix of realism, humour and metaphor built around the basement refuge and tropical escape fantasy."
    },
    {
      title: "Noi Albinoi",
      publisher: "AFI FEST",
      url: "https://fest.afi.com/2003/european-showcase-2003/noi-albinoi/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "music", "reception"],
      note: "AFI FEST identifies the film as Kári's 2003 feature with Rasmus Videbæk as director of photography and describes the writer-director's resonant minimalist score as merging with the icy colour palette to build a tone that moves from misfit comedy toward tragedy and the sublime."
    },
    {
      title: "Nói Albínói",
      publisher: "filmportal.de",
      url: "https://www.filmportal.de/en/movie/noi-albinoi_ea43d4a6e9e35006e03053d50b37753d",
      sourceKind: "film_institute",
      supports: ["overall", "production", "sound"],
      note: "The German national film portal documents the European production companies, Coproduction Office participation, sound and technical credits, original and working titles and German festival premiere, grounding the film's cross-border industrial and release history."
    },
    {
      title: "Nói albinói",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/noi-albinoi",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI's film database records Dagur Kári's Icelandic feature, the Iceland-Germany-United Kingdom-Denmark production framework and the principal screenplay, cinematography, editing, production and sound credits, providing an institutional Danish record of the coproduction and craft system."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
