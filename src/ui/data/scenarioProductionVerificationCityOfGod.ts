import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const cityOfGodProductionCaseVerification = {
  scenarioId: "scenario_city_of_god_2002",
  status: "verified",
  verifiedAt: "2026-08-23",
  summary: "City of God is verified as a 2002 Brazilian-led production whose Chapter 18 importance lies in the intersection of photochemical mixed-gauge acquisition, digital finishing, non-professional performer development and location/community logistics. Fernando Meirelles's BFI interview documents roughly four-and-a-half to five months of actor classes, Kátia Lund's casting and performer-support work, dialogue shaped through rehearsed improvisation, Palace II/Golden Gate as a production laboratory, and the decision to abandon the original City of God location plan after a dangerous incident. ABCine's contemporary 2002 technical session documents predominantly Aaton A-Minima Super 16 with selected Arri II 35mm, extensive negative/telecine tests and an approximately 80/20 gauge split, while César Charlone's 2010 interview recalls approximately 70/30 and explicitly describes the digital-intermediate logic for mixing gauges. Those percentages remain source-specific rather than collapsed. BFI programme credits establish Bráulio Mantovani's screenplay from Paulo Lins, Charlone's cinematography, Daniel Rezende's editing, Tulé Peake's art direction, Bia and Inês Salgado's costumes, Anna van Steen's makeup, Antônio Pinto and Ed Côrtes's music and the credited sound chain. BFI and DFI record 130 minutes; Cannes records 135 minutes, so the verification preserves a runtime/version discrepancy rather than pretending the catalogues agree. The case does not treat digital finishing as proof of digital-camera acquisition and does not invent a settled gauge ratio, lens package, DI resolution, exact shooting-community identity, complete improvisation transcript, budget or VFX-shot count.",
  sources: [
    {
      title: "The City of God phenomenon: a new interview with Fernando Meirelles",
      publisher: "BFI",
      url: "https://www.bfi.org.uk/interviews/city-god-phenomenon-new-interview-with-fernando-meirelles",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Meirelles documents Lund's casting/performance contribution and co-director-credit history, the four-and-a-half to five months of non-professional actor classes, the no-conventional-script/rehearsed-improvisation method, documentary-like camera response, Palace II/Golden Gate as preparation, the location-safety change and mixed 16/35mm production logic."
    },
    {
      title: "Sessão ABC 2002",
      publisher: "ABCine — Associação Brasileira de Cinematografia",
      url: "https://abcine.org.br/eventos/sessao-abc-2002/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing"],
      note: "Contemporary cinematography-society record of Palace II testing, Kodak emulsions, Aaton A-Minima Super 16 and selected Arri II 35mm, telecine matching and the session's approximately 80% 16mm / 20% 35mm production figure."
    },
    {
      title: "Entrevista com César Charlone, ABC",
      publisher: "ABCine — Associação Brasileira de Cinematografia",
      url: "https://abcine.org.br/entrevistas/entrevista-com-cesar-charlone-abc/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Charlone's 2010 account recalls roughly 70% 16mm and the rest 35mm, explains agility versus definition and the digital-intermediate rationale, describes period-photography references and records a nine-week Rio shoot."
    },
    {
      title: "City of God — BFI Southbank Programme Notes",
      publisher: "BFI Documentation Unit / Sight and Sound",
      url: "https://bfidatadigipres.github.io/re-releases/2024/02/23/city-of-god/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional credits record the 130-minute version, Meirelles/Lund directing credits, Mantovani/Lins adaptation, Charlone, Rezende, Peake, costume/makeup, visual effects, music, production sound, sound design, dialogue, ADR and 5.1 mix personnel."
    },
    {
      title: "Cidade de Deus",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/cidade-de-deus/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official festival record for the 2002 Brazilian selection and core credits; it records 135 minutes, deliberately retained as a runtime discrepancy against the 130-minute BFI/DFI records."
    },
    {
      title: "Cidade de Deus",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/city-god",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Institutional film-database record confirming the original title, 2002 production, 130-minute duration, Meirelles/Lund credits and principal screenplay, cinematography, editing, music and production metadata."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
