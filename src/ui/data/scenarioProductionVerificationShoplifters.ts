import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const shopliftersProductionCaseVerification = {
  scenarioId: "scenario_shoplifters_2018",
  status: "verified",
  verifiedAt: "2026-08-12",
  summary: "Shoplifters' chosen-family social context, evolving screenplay-and-edit workflow, child-performance method, real-house/set hybrid, one-camera 35mm 3-perf photography and Palme d'Or reception are supported by cinematographer, filmmaker, festival and film-institution sources.",
  sources: [
    {
      title: "Manbiki Kazoku ('Shoplifters'): Interview with DP Ryuto Kondo",
      publisher: "Kodak",
      url: "https://www.kodak.com/en/motion/blog-post/ryuto-kondo/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing"],
      note: "Ryuto Kondo documents Kore-eda's commitment to 35mm despite the limited budget, the one-camera method, Vision3 500T 5219 in 3-perf, IMAGICA processing and scanning, location-derived colour, unfinished screenplay and daily video-assist edits that changed inserts and generated new scenes."
    },
    {
      title: "MANBIKI KAZOKU (SHOPLIFTERS)",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/manbiki-kazoku/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Cannes record verifies the 121-minute Japanese feature, 2018 Competition and Palme d'Or, Kore-eda's direction, screenplay and editing, Ryuto Kondo's cinematography, Kazuhiko Tomita's sound, Haruomi Hosono's music and the principal cast and production companies."
    },
    {
      title: "Is blood enough? Koreeda Hirokazu on makeshift families and Shoplifters",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/sight-and-sound/interviews/blood-enough-koreeda-hirokazu-makeshift-families-shoplifters",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay"],
      note: "Kore-eda discusses makeshift family, communal criminality and the broader social context behind the film, supporting the production case's emphasis on chosen care, poverty and the tension between lived family and biological or institutional definitions."
    },
    {
      title: "SHOPLIFTERS",
      publisher: "Foreign Correspondents' Club of Japan",
      url: "https://www.fccj.or.jp/committee-blog/shoplifters",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "Kore-eda explains the search for the single-storey house among high-rises and the production-design strategy of combining real location material with recreated interior sets until the boundary between them became difficult even for him to remember."
    },
    {
      title: "Foreign Contenders: Shoplifters Director Hirokazu Kore-eda on Father Figures and His Methods of Working with Children",
      publisher: "MovieMaker Magazine",
      url: "https://www.moviemaker.com/foreign-contenders-shoplifters-hirokazu-kore-eda/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "editing"],
      note: "Kore-eda explains the child-direction method developed from Nobody Knows: inexperienced children are not drilled on a conventional script because he wants spontaneous behaviour rather than recited school-play performance, directly supporting the Shoplifters child-performance approach."
    },
    {
      title: "Shoplifters (Manbiki Kazoku)",
      publisher: "Asia Pacific Screen Awards",
      url: "https://www.asiapacificscreenawards.com/apsa-nominees-winners/2018/best-feature-film/shoplifters-manbiki-kazoku",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "The APSA record verifies the Japanese production, Kore-eda's direction, the producer team, the impoverished multigenerational household and the film's 2018 Best Feature Film recognition, providing an independent institutional cross-check of the social-family premise and production identity."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
