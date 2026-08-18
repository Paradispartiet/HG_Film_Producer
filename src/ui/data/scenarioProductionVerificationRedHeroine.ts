import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const redHeroineProductionCaseVerification = {
  scenarioId: "scenario_the_red_heroine_1929",
  status: "verified",
  verifiedAt: "2026-08-18",
  summary: "UCLA Film & Television Archive, China Film Archive and the National Film Archive of Japan support The Red Heroine / Hongxia / 红侠 as a 1929 Chinese silent wuxia production from Youlian Film Company directed by Wen Yimin. UCLA identifies the surviving film as the only extant section of the thirteen-part Red Knight-Errant serial and credits cinematographer Yao Shiquan; NFAJ likewise credits Yao and identifies Hu Xuguang for art/design, while China Film Archive credits Wen Yimin as both director and screenwriter and highlights stunt photography and stage mechanisms. The surviving section exists in materially different modern presentations: UCLA records about 94 minutes on 35mm, China Film Archive lists a 101-minute 2K presentation, and NFAJ has screened a 132-minute 18-fps version. Those runtimes are therefore treated as print/restoration/projection-speed states rather than one immutable 1929 duration. The photographed production is silent and later live accompaniment remains exhibition history. The Production Case is explicitly bounded to the surviving section: it never invents the twelve missing installments, and it preserves female martial agency without turning abduction, coercion, threatened sexual violence or female peril into scoreable spectacle.",
  sources: [
    {
      title: "Red Heroine (China, 1929)",
      publisher: "UCLA Film & Television Archive",
      url: "https://www.cinema.ucla.edu/events/2024/04/27/red-heroine",
      sourceKind: "film_institute",
      supports: ["overall", "cinematography", "sound"],
      note: "UCLA archive program identifies Wen Yimin, Youlian Film Company, cinematographer Yao Shiquan, 35mm black-and-white silent presentation with English intertitles, and most importantly the film as the only surviving section of the thirteen-part Red Knight-Errant serial. It also documents modern live accompaniment."
    },
    {
      title: "Red Heroine / The Red Errant Knight – 2K",
      publisher: "China Film Archive",
      url: "https://www.cfa.org.cn/cfaen/gz/dymlcx/dy/2023053116474486795/index.html",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography"],
      note: "China Film Archive restored-film record identifies 1929 China, Wen Yimin as director and screenwriter, Fan Xuepeng and other principal cast, black-and-white 1.33:1 presentation, a 101-minute archive runtime, and production interest in stunt photography and stage/set mechanisms."
    },
    {
      title: "Silent Film Renaissance 2019 – Red Heroine",
      publisher: "National Film Archive of Japan",
      url: "https://www.nfaj.go.jp/exhibition/silent2019/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "sound"],
      note: "NFAJ program identifies Youlian Film Company, Wen Yimin as director/script/actor, Yao Shiquan as cinematographer, Hu Xuguang as art director/designer, Fan Xuepeng and supporting cast, 35mm black-and-white silent format, and a 132-minute 18-fps presentation with modern live accompaniment."
    },
    {
      title: "China Film Archive restored classic-film catalogue – Red Heroine",
      publisher: "China Film Archive",
      url: "https://www.cfa.org.cn/cfaen/gz/dymlcx/index.html",
      sourceKind: "film_institute",
      supports: ["overall"],
      note: "Institutional restored-classics catalogue places Red Heroine within China Film Archive's preservation and restoration program, supporting the case's distinction between surviving production evidence and later archive presentation."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
