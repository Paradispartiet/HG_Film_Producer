import type { ProductionCaseVerificationRecord } from "./scenarioProductionVerification";

export const capernaumProductionCaseVerification = {
  scenarioId: "scenario_capernaum_2018",
  status: "verified",
  verifiedAt: "2026-08-12",
  summary: "Capernaum's research-derived child-survival screenplay, nonprofessional performance system, real Beirut locations, six-month largely handheld ALEXA production, adaptive lighting, 500-plus-hour editorial rewrite, restrained music strategy and Cannes launch are supported by filmmaker, manufacturer, distributor and film-institution sources.",
  sources: [
    {
      title: "BAFTA Screenwriters Lecture Series: Nadine Labaki",
      publisher: "BAFTA",
      url: "https://www.bafta.org/media-centre/press-releases/bafta-screenwriters-lecture-series-nadine-labaki/",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "Labaki details the Lebanon-wide research, real-life casting, nonprofessional performance and continual rewriting process, natural locations and light, six-month shoot, more than 500 hours of rushes and extended editorial reconstruction."
    },
    {
      title: "ALEXA XT and ALEXA Mini behind award-winning Lebanese film Capernaum",
      publisher: "ARRI",
      url: "https://www.arri.com/news-en/alexa-xt-and-alexa-mini-behind-capernaum-",
      sourceKind: "filmmaker_interview",
      supports: ["overall", "cinematography"],
      note: "DP Christopher Aoun documents the 90-day six-month production, largely handheld child-height camerawork, real Beirut and suburban locations, broad and adaptive lighting for inexperienced performers, chronological shooting and ALEXA XT/Mini equipment."
    },
    {
      title: "CAPHARNAÜM",
      publisher: "Festival de Cannes",
      url: "https://www.festival-cannes.com/en/f/capharnaum/",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay", "cinematography", "editing", "sound"],
      note: "The official Cannes record verifies the 2018 Competition selection and Jury Prize and cross-checks Nadine Labaki, the screenplay team, Christopher Aoun, Konstantin Bock, Khaled Mouzanar, Chadi Roukoz and Hussein Baydoun."
    },
    {
      title: "Capernaum",
      publisher: "Sony Pictures Classics",
      url: "https://www.sonyclassics.com/film/capernaum/",
      sourceKind: "archive_feature",
      supports: ["overall", "screenplay", "editing", "sound"],
      note: "The distributor's production notes describe nonprofessionals playing lives close to their own, spontaneous reactions reshaping the written script, more than 500 hours of footage, the long editorial process and Khaled Mouzanar's decision to restrict music when a fuller score felt false to the performers' reality."
    },
    {
      title: "Capernaum (2018)",
      publisher: "British Film Institute",
      url: "https://www.bfi.org.uk/film/1863d424-b2fb-57f3-aff3-5fa061df37f2/capernaum",
      sourceKind: "film_institute",
      supports: ["overall", "screenplay"],
      note: "BFI's institutional film record confirms the Lebanon-led international production, Nadine Labaki's direction, the principal producers and writers, the nonprofessional-led cast and the film's production identity as a Lebanese feature."
    }
  ]
} as const satisfies ProductionCaseVerificationRecord;
