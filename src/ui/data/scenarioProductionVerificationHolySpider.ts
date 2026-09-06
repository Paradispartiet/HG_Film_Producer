import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const holySpiderProductionCaseVerification = {
  scenarioId: "scenario_holy_spider_2022",
  status: "verified",
  verifiedAt: "2026-09-06",
  summary: "Holy Spider is verified as a new source-first Chapter 19 Production Case only after branch/PR and alias-aware reuse checks found no pre-existing scenario, Film Study or Production Verification identity under Holy Spider, Les Nuits de Mashhad, Ankabut-e moqaddas, the Persian title or Ali Abbasi. Festival de Cannes locks the 2022 Competition, Best Actress award for Zar Amir Ebrahimi, production year 2022, 117-minute runtime, Denmark/Germany/Sweden/France production countries and the principal creative credits. Production chronology is separately preserved: producer Sol Bondy states that the Jordan shoot lasted 35 days and wrapped in June 2021 after Covid delays, an abandoned Iran path and a blocked Turkey attempt; Abbasi independently describes Jordan as the eventual safe production base and the difficulty of importing period-correct Paykan cars to recreate Mashhad. ARRI/AFC documents Nadim Carlsen shooting with ALEXA Mini LF and Signature Prime lenses, while the German Film Prize catalogue records ARRI Alexa, 4K and 2.39:1. DFI provides detailed editing, sound and VFX credits. Financing evidence is treated historically rather than as final cost: producer reporting describes an early roughly €2.5–3m plan and €3.8m available before the Jordan shoot, while exact final negative cost and partner shares remain unresolved. Public runtime records differ: Cannes 117 minutes, DFI 118 and Goodfellas 115; 117 minutes is used canonically while the discrepancy remains explicit provenance. Complete camera-body count, focal-length set, codec, bit depth, filtration, ISO/exposure strategy, media/offload/checksum topology, lighting package, production-sound hardware, editorial software/storage, color-management pipeline, VFX shot census, DCP/audio mastering lineage, final budget, recoupment, insurance and legal/security protocols remain unresolved.",
  sources: [
    {
      title: "HOLY SPIDER",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/holy-spider/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Official Cannes record supporting the 2022 Competition and Best Actress award, production year 2022, 117-minute runtime, Denmark/Germany/Sweden/France production countries, Ali Abbasi direction, Abbasi/Afshin Kamran Bahrami screenplay, Nadim Carlsen cinematography, Lina Nordqvist production design, Hayedeh Safiyari/Olivia Neergaard Holm editing, Martin Dirkov music and Rasmus Winther Jensen sound."
    },
    {
      title: "All these prizewinning Iranian movies are complicit: an interview with Holy Spider director Ali Abbasi",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/interviews/all-these-prizewinning-iranian-movies-are-complicit-interview-with-holy-spider-director-ali-abbasi",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Direct director interview supporting the Jordan shoot, failed Turkey path, political access constraints and the logistical problem of sourcing and importing period-correct Paykan cars for the Iran-set production."
    },
    {
      title: "ARRI at the 75th Festival de Cannes",
      publisher: "ARRI Camera Systems / AFC",
      url: "https://www.afcinema.com/Arri-au-75e-Festival-de-Cannes.html",
      sourceKind: "manufacturer_case_study",
      supports: ["cinematography"],
      note: "ARRI equipment record identifying Holy Spider cinematographer Nadim Carlsen, ALEXA Mini LF and Signature Prime lenses."
    },
    {
      title: "Holy Spider",
      publisher: "Danish Film Institute",
      url: "https://www.dfi.dk/en/viden-om-film/filmdatabasen/film/112861",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Institutional record supporting 118-minute catalogue runtime, production and creative credits, Georg Hackenberg production sound, Rasmus Winther Jensen sound design, Lajos Wienkamp Marques dialogue editing, Gregor Bonse re-recording mix and Peter Hjorth VFX supervision."
    },
    {
      title: "International Disruptors: Holy Spider Producer Sol Bondy On The Challenges Of Bringing Ali Abbasi's Iran-Set Oscar Contender To Light",
      publisher: "Deadline / Yahoo Entertainment",
      url: "https://www.yahoo.com/entertainment/international-disruptors-holy-spider-producer-120018878.html",
      sourceKind: "trade_feature",
      supports: ["overall"],
      note: "Producer interview supporting the early €2.5–3m financing plan, later €3.8m available before the Jordan shoot, Turkey-prep losses, political and Covid disruption, actor-security responsibilities and the 35-day shoot wrapping in June 2021."
    },
    {
      title: "HOLY SPIDER",
      publisher: "Goodfellas",
      url: "https://goodfellas.film/movie/holy-spider/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Sales/production-company record supporting Profile Pictures/One Two Films, the wider coproduction and crew structure, Nadim Carlsen cinematography, Olivia Neergaard-Holm editing, Martin Dirkov music, Lina Nordqvist design, Hanadi Khurma costumes, Rasmus Winther Jensen sound editing and a 115-minute catalogue runtime."
    },
    {
      title: "HOLY SPIDER - German Film Award preselection catalogue",
      publisher: "Deutscher Filmpreis",
      url: "https://www.deutscher-filmpreis.de/vorauswahl/dfp2023-vorauswahlkatalog_4mb/",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "editing", "sound"],
      note: "Institutional awards catalogue supporting 117 minutes, ARRI Alexa, 4K and 2.39:1 together with the principal creative and sound-design credits."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
