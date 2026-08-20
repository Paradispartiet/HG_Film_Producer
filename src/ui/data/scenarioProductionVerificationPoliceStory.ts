import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const policeStoryProductionCaseVerification = {
  scenarioId: "scenario_police_story_1985",
  status: "verified",
  verifiedAt: "2026-08-20",
  summary: "Hong Kong Film Archive and Criterion support Police Story as a 1985 Golden Harvest production in which Jackie Chan combined director, co-writer, star and action-choreography roles inside a larger specialist production system. HKFA credits Chan and Edward Tang for screenplay, Golden Harvest as production company and the Jackie Chan Stunt Team for martial-arts/action choreography, and describes the film's decisive move from earlier period/stage-oriented work toward contemporary Hong Kong urban production using a squatter settlement, roads, vertical space and a multi-storey shopping mall. Criterion credits executive producer Raymond Chow, producer Leonard Ho, production coordinator Willie Chan, production manager Wong Jo-Yee, production designer Oliver Wong, cinematographer Cheung Yiu-Jo, editor Peter Cheung Yiu-Chung, original score by Michael Lai, special effects by Ng Kwok-Wa and the Jackie Chan Stunt Team. Criterion's historical essay describes Chan and Edward Tang developing the film around action set pieces and connective plot and stresses the organized trust/timing of Chan's stunt team; this is retained as film-specific collaboration evidence rather than generalized to all Hong Kong filmmaking. Jackie Chan later described the shopping-mall pole slide as roughly 75 feet with no protection. That firsthand statement is used only to document the period production's extreme risk culture; the Production Case explicitly rejects reenacting such unsafe methods and substitutes controlled modern safety planning in simulation. HKFA consistently catalogs the film at 101 minutes, including later restored DCP presentations; Criterion uses 100 minutes and 2.35:1. The case uses 101 minutes canonically because the Hong Kong institutional archive repeats it and retains 100/101 as catalog rounding/presentation provenance rather than inventing an alternate cut. HKFA's 4K restored editions, Criterion's later home-video master and English-dubbed soundtrack options are kept separate from original 1985 production. No unsupported camera body, lens package, film-stock emulsion, camera count, lighting ratios, stunt-glass composition, rigging, pyrotechnic formulas, vehicle modifications, sound hardware, detailed daily schedule or injury mechanics is invented.",
  sources: [
    {
      title: "Police Story",
      publisher: "Hong Kong Film Archive",
      url: "https://www.filmarchive.gov.hk/en/web/hkfa/pe-event-2018-1-1-3.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "HKFA records Jackie Chan direction, Chan/Edward Tang screenplay, Golden Harvest production, 1985 color/Cantonese presentation at 101 minutes and Chan's combined actor/director/action-choreography role, while describing large-space car, bus, height and glass action." 
    },
    {
      title: "Police Story (4K Digitally Restored Version)",
      publisher: "Hong Kong Film Archive",
      url: "https://www.filmarchive.gov.hk/en/web/hkfa/2024/martial/pe-event-2024-martial-fs-film18.html",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography"],
      note: "HKFA identifies Jackie Chan Stunt Team choreography, Golden Harvest, 101 minutes and the production's move from earlier sound-stage styles toward Hong Kong urban landscape including squatter settlement, highway and multi-storey mall; the 4K version itself is kept as later preservation evidence." 
    },
    {
      title: "Police Story",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/films/29544-police-story",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Criterion supplies the core production credits: Chan/Tang writing, Raymond Chow, Leonard Ho, Willie Chan, Wong Jo-Yee, Oliver Wong, Jackie Chan/action direction, Jackie Chan Stunt Team, Cheung Yiu-Jo, Peter Cheung Yiu-Chung, Michael Lai and Ng Kwok-Wa; it catalogs 100 minutes and 2.35:1." 
    },
    {
      title: "Police Story and Police Story 2: Law and Disorder",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/current/posts/6325-police-story-and-police-story-2-law-and-disorder",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing"],
      note: "Criterion's historical essay links Police Story to Chan's response to The Protector, describes Chan devising set pieces while Edward Tang supplied connective plot, and identifies the Jackie Chan Stunt Team as a tightly coordinated specialist unit." 
    },
    {
      title: "Police Story / Police Story 2",
      publisher: "The Criterion Collection",
      url: "https://www.criterion.com/boxsets/1554-police-story-police-story-2",
      sourceKind: "archive_feature",
      supports: ["overall"],
      note: "Criterion documents archival Chan/stunt-team materials and Jackie Chan: My Stunts excerpts as production-history sources while keeping later restoration/home-video presentation separate from the 1985 shoot." 
    },
    {
      title: "10 Questions for Jackie Chan",
      publisher: "TIME",
      url: "https://content.time.com/time/subscriber/article/0,33009,1888989,00.html",
      sourceKind: "filmmaker_interview",
      supports: ["overall"],
      note: "Chan identifies the Police Story shopping-mall pole slide as roughly 75 feet and performed without protection. This is retained only as firsthand evidence of historical production risk, not as a recommended technique." 
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
