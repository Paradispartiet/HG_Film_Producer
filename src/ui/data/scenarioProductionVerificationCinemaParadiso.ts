import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const cinemaParadisoVerificationRecords = [
  {
    scenarioId: "scenario_cinema_paradiso_1988",
    status: "verified",
    verifiedAt: "2026-07-24",
    summary: "The case's Italian-French production context, three-age memory structure, Sicilian communal cinema, projection and censorship system, credited design, photography, editing, sound world, Morricone score, alternate cuts and international reception are supported by institutional, festival, awards and restoration records.",
    sources: [
      {
        title: "Cinema Paradiso (1988)",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/film/01d342da-9a63-59d2-b9c3-c8465bcdf2c8/cinema-paradiso",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "BFI confirms the Italian-French production, Tornatore's direction and writing, Franco Cristaldi's production, principal cast and the expanded 175-minute version represented in its archival film record."
      },
      {
        title: "10 great films about cinemagoing",
        publisher: "British Film Institute",
        url: "https://www.bfi.org.uk/lists/10-great-films-about-cinemagoing",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing"],
        note: "BFI identifies the projection booth, town-square projection and final montage of censored kisses as the central cinema-going structures through which Toto's childhood, love, loss and filmmaking identity are organised."
      },
      {
        title: "Nuovo Cinema Paradiso",
        publisher: "Festival de Cannes",
        url: "https://www.festival-cannes.com/en/f/nuovo-cinema-paradiso/",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "The official Cannes record confirms the 1989 Jury's Special Grand Prix, the adult-return frame, Sicilian village and parish-cinema setting, and credits for Tornatore, Blasco Giurato, Mario Morra, Ennio Morricone and Andrea Crisanti."
      },
      {
        title: "1990 Academy Awards",
        publisher: "Academy of Motion Picture Arts and Sciences",
        url: "https://www.oscars.org/oscars/ceremonies/1990",
        sourceKind: "film_institute",
        supports: ["overall"],
        note: "The Academy's official ceremony record confirms Cinema Paradiso as Italy's winner for Foreign Language Film, documenting the production's major international breakthrough and enduring awards history."
      },
      {
        title: "Cinema Paradiso 4K UHD+Blu-ray",
        publisher: "Arrow Films",
        url: "https://www.arrowfilms.com/p/cinema-paradiso-4k-uhdblu-ray/12613127/",
        sourceKind: "archive_feature",
        supports: ["overall", "cinematography", "editing", "sound"],
        note: "Arrow documents the restored 124-minute theatrical version, the 174-minute Director's Cut, Dolby Vision presentation, original stereo audio, alternate surround track and production supplements devoted to Tornatore, Toto, Alfredo and the kissing sequence."
      },
      {
        title: "1991 Film Awards results",
        publisher: "BAFTA",
        url: "https://www.bafta.org/awards/film?award-year=1991",
        sourceKind: "film_institute",
        supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
        note: "BAFTA's official results confirm wins for non-English-language film, Philippe Noiret, Salvatore Cascio, Tornatore's original screenplay and Ennio and Andrea Morricone's score, plus nominations for cinematography, editing, production design, costume and makeup."
      }
    ]
  }
] as const satisfies readonly ProductionCaseVerificationRecord[];
