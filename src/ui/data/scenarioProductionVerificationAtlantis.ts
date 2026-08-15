import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const atlantisProductionCaseVerification = {
  scenarioId: "scenario_atlantis_1913",
  status: "verified",
  verifiedAt: "2026-08-15",
  summary: "Det Danske Filminstitut supports Atlantis as August Blom's 1913 Nordisk Film feature, adapted from Gerhart Hauptmann by Karl Ludwig Schröder and Axel Garde, photographed by Louis Larsen and Johan Ankerstjerne, and produced as Nordisk's biggest and most ambitious production. DFI records 2280 metres of 35 mm, 1.33:1, black-and-white silent film and explicitly documents two endings, with an unhappy ending made for the Russian market. DFI's film-history account further frames Atlantis as an expensive, internationally oriented artist melodrama whose scale did not guarantee artistic or commercial success. The Production Case therefore teaches feature-scale adaptation, export ambition, disaster staging and market-specific version control while keeping Titanic influence, surviving runtime, modern accompaniment and undocumented effects techniques carefully separated from verified production facts.",
  sources: [
    {
      title: "Atlantis — Film Database",
      publisher: "Det Danske Filminstitut",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/atlantis-1",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "DFI identifies August Blom, screenwriters Karl Ludwig Schröder and Axel Garde, source novelist Gerhart Hauptmann, cinematographers Louis Larsen and Johan Ankerstjerne, Nordisk Films Kompagni, 2280 metres of 35 mm 1.33:1 black-and-white silent film, and the two-ending version history including the unhappy Russian-market ending."
    },
    {
      title: "Danish Film History: 1910-1920",
      publisher: "Det Danske Filminstitut",
      url: "https://www.dfi.dk/en/english/danish-film-history/danish-film-history-1910-1920",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "DFI situates August Blom within the breakthrough of longer Danish films and presents Atlantis as the ambitious internationally oriented Nordisk production of the period, tying literary prestige and melodrama to export-scale feature production."
    },
    {
      title: "Atlantis — Danish Silent Film streaming record",
      publisher: "Det Danske Filminstitut / Stumfilm.dk",
      url: "https://www.stumfilm.dk/en/stumfilm/streaming/film/atlantis",
      sourceKind: "archive_feature",
      supports: ["overall", "editing", "sound"],
      note: "The archival streaming record identifies the surviving 114-minute presentation, Nordisk Films Kompagni, the silent-film context, English intertitles and modern Robert Israel music, making it possible to separate archival presentation choices from original 1913 production sound and version evidence."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;