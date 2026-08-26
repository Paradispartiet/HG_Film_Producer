import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const unknownPleasuresProductionCaseVerification = {
  scenarioId: "scenario_unknown_pleasures_2002",
  status: "verified",
  verifiedAt: "2026-08-26",
  summary: "Unknown Pleasures is verified as a 2002 digital-video production case whose small-camera public-space access, nineteen-day schedule, long-take performance geometry, deliberately digital image texture, digital color work and later transfer to celluloid can be taught without collapsing them into a generic low-budget or guerrilla-film narrative. Festival de Cannes records the film as a Japan/France/South Korea/China production running 113 minutes, directed and written by Jia Zhangke, photographed by Yu Lik-wai, edited by Chow Keung and designed by Liang Jingdong. Jia's interviews and BFI's early-digital history establish that DV was chosen as an aesthetic and observational medium as well as a practical one: its small footprint enabled greater proximity to actors and less obtrusive work in public spaces, while unexpected events could be incorporated more readily. Those same sources preserve the limitations of early DV, including problematic bright exteriors and the need to search for a texture specific to digital rather than imitate celluloid. Senses of Cinema records that the film was shot in only nineteen days under tight finances. The UCLA open monograph reproduces Jia's account that color was adjusted digitally, the result was transferred to celluloid, and further color manipulation was then performed during film development, including a deliberately colder treatment. Current archival 35mm exhibition records support the existence of a celluloid exhibition object but are not used to invent the exact original film-out recorder, lab, stock or release-print chain. The present source set also does not securely establish microphones, recorders, ADR, Foley or final-mix procedures, so those remain explicit unknowns rather than inferred from the finished soundtrack.",
  sources: [
    {
      title: "REN XIAO YAO (UNKNOWN PLEASURES)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/ren-xiao-yao/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Institutional 2002 competition record supporting the 113-minute runtime, Japan/France/South Korea/China production-country set, Jia Zhangke direction/screenplay, Yu Lik-wai cinematography, Chow Keung editing and Liang Jingdong production design."
    },
    {
      title: "Attack of the zeros and ones: the early years of digital cinema",
      publisher: "BFI Sight and Sound",
      url: "https://www.bfi.org.uk/sight-and-sound/features/attack-zeros-ones-early-years-digital-cinema-told-david-lynch-miranda-july-michael-mann-more",
      sourceKind: "trade_feature",
      supports: ["overall", "cinematography"],
      note: "Historical feature with Jia testimony on the low status of DV in China, Unknown Pleasures growing from In Public, and the decision to explore digital video's own visual possibilities rather than mimic celluloid."
    },
    {
      title: "An Interview with Jia Zhangke",
      publisher: "Senses of Cinema",
      url: "https://www.sensesofcinema.com/2004/feature-articles/jia_zhangke/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "editing"],
      note: "Jia interview supporting the nineteen-day Unknown Pleasures shoot under tight finances and the contrast with the longer production schedule of The World."
    },
    {
      title: "Interview: Jia Zhang-ke on Ash Is Purest White and the Evolution of China",
      publisher: "Slant Magazine",
      url: "https://www.slantmagazine.com/film/interview-jia-zhang-ke-on-ash-is-purest-white-censorship-and-the-evolution-of-china/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography", "performance"],
      note: "Later Jia testimony explicitly connecting Unknown Pleasures to DV's intimacy, proximity to performers and ability to capture unexpected events, while describing the medium as an aesthetic choice rather than merely a practical substitute."
    },
    {
      title: "Jia Zhangke's Hometown Trilogy: Xiao Wu, Platform, Unknown Pleasures",
      publisher: "University of California open monograph edition",
      url: "https://escholarship.org/content/qt02x9977w/qt02x9977w.pdf",
      sourceKind: "academic_source",
      supports: ["overall", "cinematography", "editing"],
      note: "Open scholarly source reproducing Jia's account of digital color adjustment, transfer to celluloid, subsequent color manipulation during development, and the search with Yu Lik-wai for a specifically digital image texture."
    },
    {
      title: "Unknown Pleasures",
      publisher: "Eye Filmmuseum",
      url: "https://www.eyefilm.nl/en/whats-on/unknown-pleasures/91853",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Archival exhibition record listing a 113-minute 35mm presentation. Used only to support the existence of a celluloid exhibition element, not to reconstruct the original film-out equipment or print chain."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
